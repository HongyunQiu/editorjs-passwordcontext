import './index.css';

import { IconQuote } from '@codexteam/icons';
import { make } from '@editorjs/dom';
import type { API, BlockAPI, BlockTool, ToolConfig, SanitizerConfig } from '@editorjs/editorjs';

/**
 * 密码保护工具的配置
 */
export interface PasswordConfig extends ToolConfig {
  contentPlaceholder?: string;
  passwordPlaceholder?: string;
  buttonText?: string;
  lockedText?: string;
  lockButtonText?: string;
}

/**
 * 密码保护工具的数据结构
 */
export interface EncryptedPayload {
  v: number; // schema version
  algo: 'PBKDF2-AES-GCM';
  iter: number;
  salt: string; // base64
  iv: string; // base64
  cipher: string; // base64
}

export interface PasswordData {
  // 明文仅用于运行期展示，不应出现在保存结果中
  content?: string;
  encrypted?: EncryptedPayload;
}

/**
 * 构造参数
 */
interface PasswordParams {
  data: PasswordData;
  config?: PasswordConfig;
  api: API;
  readOnly: boolean;
  block: BlockAPI;
}

/**
 * CSS 类名集合
 */
interface PasswordCSS {
  baseClass: string;
  wrapper: string;
  content: string;
  controls: string;
  input: string;
  button: string;
}

/**
 * Editor.js 密码保护 BlockTool
 */
export default class PasswordBlock implements BlockTool {
  private api: API;
  private readOnly: boolean;
  private block: BlockAPI;

  private data: PasswordData;
  private css: PasswordCSS;
  private placeholders: Required<Pick<PasswordConfig, 'contentPlaceholder' | 'passwordPlaceholder' | 'buttonText' | 'lockedText' | 'lockButtonText'>>;
  private unlocked: boolean;
  private currentPassword?: string;

  private static readonly KDF_ITERATIONS = 300000;

  constructor({ data, config, api, readOnly, block }: PasswordParams) {
    this.api = api;
    this.readOnly = readOnly;
    this.block = block;

    this.placeholders = {
      contentPlaceholder: api.i18n.t(config?.contentPlaceholder ?? '请输入受保护内容'),
      passwordPlaceholder: api.i18n.t(config?.passwordPlaceholder ?? '输入密码'),
      buttonText: api.i18n.t(config?.buttonText ?? '显示'),
      lockedText: api.i18n.t(config?.lockedText ?? '密码保护区域'),
      lockButtonText: api.i18n.t(config?.lockButtonText ?? '隐藏'),
    };

    this.data = {
      content: data?.content ?? '',
      encrypted: data?.encrypted,
    };

    this.unlocked = false; // 无论编辑/只读，初始均为上锁状态

    this.css = {
      baseClass: this.api.styles.block,
      wrapper: 'cdx-password',
      content: 'cdx-password__content',
      controls: 'cdx-password__controls',
      input: 'cdx-password__input',
      button: 'cdx-password__button',
    };
  }

  public static get isReadOnlySupported(): boolean {
    return true;
  }

  public static get toolbox(): { icon: string; title: 'Password'; } {
    return {
      icon: IconQuote,
      title: 'Password',
    };
  }

  public static get contentless(): boolean {
    return true;
  }

  public static get enableLineBreaks(): boolean {
    return true;
  }

  public render(): HTMLElement {
    const container = make('div', [this.css.baseClass, this.css.wrapper]);

    // 内容区
    const contentEl = make('div', [this.api.styles.input, this.css.content], {
      contentEditable: String(!this.readOnly),
    }) as HTMLDivElement;

    const updateContentLockedState = () => {
      // 切换外层状态类，便于样式区分
      container.classList.toggle('cdx-password--locked', !this.unlocked);
      if (this.unlocked) {
        contentEl.innerHTML = this.data.content ?? '';
        contentEl.dataset.placeholder = this.placeholders.contentPlaceholder;
      } else {
        contentEl.innerHTML = this.api.sanitizer.clean(this.placeholders.lockedText, {});
        delete contentEl.dataset.placeholder;
      }
      // 仅在已解锁且为编辑态时允许可编辑
      contentEl.setAttribute('contenteditable', String(this.unlocked && !this.readOnly));
    };

    updateContentLockedState();

    container.appendChild(contentEl);

    const renderLockedControls = () => {
      const controls = make('div', [this.css.controls]);
      const input = make('input', [this.css.input], {
        type: 'password',
        placeholder: this.placeholders.passwordPlaceholder,
        autocomplete: 'new-password',
      }) as HTMLInputElement;
      const button = make('button', [this.css.button], {
        type: 'button',
        innerHTML: this.placeholders.buttonText,
      }) as HTMLButtonElement;

      const unlock = async () => {
        const pwd = input.value;
        if (!pwd) {
          input.setCustomValidity(this.api.i18n.t('请输入密码'));
          input.reportValidity();
          setTimeout(() => input.setCustomValidity(''), 1200);
          return;
        }

        try {
          // 优先尝试解密（如果数据已加密）
          if (this.data.encrypted) {
            const plain = await this.decryptWithPassword(this.data.encrypted, pwd);
            this.data.content = plain;
            this.currentPassword = pwd;
            this.unlocked = true;
            updateContentLockedState();
            controls.remove();
            renderUnlockedEditControls();
            return;
          }

          // 未加密（新建或旧数据未加密）：采用用户输入作为密钥直接解锁
          this.currentPassword = pwd;
          this.unlocked = true;
          updateContentLockedState();
          controls.remove();
          renderUnlockedEditControls();
          return;
        } catch (e) {
          input.setCustomValidity(this.api.i18n.t('密码错误'));
          input.reportValidity();
          setTimeout(() => input.setCustomValidity(''), 1500);
        }
      };

      button.addEventListener('click', unlock);
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') unlock();
      });

      controls.appendChild(input);
      controls.appendChild(button);
      container.appendChild(controls);
    };

    const renderUnlockedEditControls = () => {
      const controls = make('div', [this.css.controls]);
      const lockBtn = make('button', [this.css.button], {
        type: 'button',
        innerHTML: this.placeholders.lockButtonText,
      }) as HTMLButtonElement;

      const relock = async () => {
        // 只读模式下：不进行加密与数据变更，仅清理明文与口令并恢复上锁视图
        if (this.readOnly) {
          this.data.content = undefined;
          this.currentPassword = undefined;
          this.unlocked = false;
          updateContentLockedState();
          controls.remove();
          renderLockedControls();
          return;
        }

        // 保存当前编辑内容，进行加密后上锁
        this.data.content = contentEl.innerHTML;
        const password = this.currentPassword;
        if (password) {
          this.data.encrypted = await this.encryptWithPassword(this.data.content || '', password);
          this.data.content = undefined; // 清除明文
        }
        this.unlocked = false;
        // 清理内存中的口令
        this.currentPassword = undefined;
        updateContentLockedState();
        controls.remove();
        renderLockedControls();
      };

      lockBtn.addEventListener('click', relock);
      controls.appendChild(lockBtn);
      container.appendChild(controls);
    };

    // 上锁时显示解锁控件（编辑/只读均显示）
    if (!this.unlocked) {
      renderLockedControls();
    } else {
      // 解锁后，无论编辑或只读均展示“隐藏”按钮（只读模式下不会修改数据，仅恢复上锁视图）
      renderUnlockedEditControls();
    }

    return container;
  }

  public async save(wrapper: HTMLDivElement): Promise<PasswordData> {
    const content = wrapper.querySelector(`.${this.css.content}`) as HTMLDivElement | null;
    // 优先返回已存在的密文
    if (this.data.encrypted) {
      return { encrypted: this.data.encrypted };
    }

    // 如处于解锁且有密码，保存前进行加密
    const password = this.currentPassword;
    if (this.unlocked && password) {
      const plain = content ? content.innerHTML : (this.data.content || '');
      const encrypted = await this.encryptWithPassword(plain, password);
      return { encrypted };
    }

    // 无密码情况下不返回明文，返回空结构（或你也可抛错提示）
    return { encrypted: this.data.encrypted };
  }

  public static get sanitize(): SanitizerConfig {
    return {
      content: { br: true },
      // 允许携带密文对象（无需 HTML 净化）
      encrypted: {} as unknown as Record<string, unknown>,
    } as unknown as SanitizerConfig;
  }

  public validate(data: PasswordData): boolean {
    return true;
  }

  // ======== Crypto helpers (Web Crypto API) ========
  private async getKeyMaterial(password: string): Promise<CryptoKey> {
    const enc = new TextEncoder();
    return await crypto.subtle.importKey('raw', enc.encode(password), { name: 'PBKDF2' }, false, ['deriveKey']);
  }

  private async deriveAesGcmKey(password: string, salt: Uint8Array, iterations: number): Promise<CryptoKey> {
    const keyMaterial = await this.getKeyMaterial(password);
    return await crypto.subtle.deriveKey(
      { name: 'PBKDF2', salt: salt as unknown as BufferSource, iterations, hash: 'SHA-256' },
      keyMaterial,
      { name: 'AES-GCM', length: 256 },
      false,
      ['encrypt', 'decrypt']
    );
  }

  private toBase64(buffer: ArrayBuffer): string {
    const bytes = new Uint8Array(buffer);
    let binary = '';
    for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
    return btoa(binary);
  }

  private fromBase64(b64: string): Uint8Array {
    const binary = atob(b64);
    const len = binary.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) bytes[i] = binary.charCodeAt(i);
    return bytes;
  }

  private async encryptWithPassword(plain: string, password: string): Promise<EncryptedPayload> {
    const enc = new TextEncoder();
    const salt = crypto.getRandomValues(new Uint8Array(16));
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const key = await this.deriveAesGcmKey(password, salt, PasswordBlock.KDF_ITERATIONS);
    const aad = this.getAad();
    const cipherBuf = await crypto.subtle.encrypt(
      { name: 'AES-GCM', iv: iv as unknown as BufferSource, additionalData: aad as unknown as BufferSource },
      key,
      enc.encode(plain) as unknown as BufferSource
    );
    return {
      v: 1,
      algo: 'PBKDF2-AES-GCM',
      iter: PasswordBlock.KDF_ITERATIONS,
      salt: this.toBase64(salt.buffer),
      iv: this.toBase64(iv.buffer),
      cipher: this.toBase64(cipherBuf),
    };
  }

  private async decryptWithPassword(payload: EncryptedPayload, password: string): Promise<string> {
    const dec = new TextDecoder();
    const salt = this.fromBase64(payload.salt);
    const iv = this.fromBase64(payload.iv);
    const key = await this.deriveAesGcmKey(password, salt, payload.iter);
    const cipherBytes = this.fromBase64(payload.cipher);
    const aad = this.getAad();
    const plainBuf = await crypto.subtle.decrypt(
      { name: 'AES-GCM', iv: iv as unknown as BufferSource, additionalData: aad as unknown as BufferSource },
      key,
      cipherBytes as unknown as BufferSource
    );
    return dec.decode(plainBuf);
  }

  private getAad(): Uint8Array {
    const id = (this.block && (this.block as unknown as { id?: string }).id) || '';
    const enc = new TextEncoder();
    // 绑定上下文，防止密文移植到其他块/文档
    return enc.encode(`editorjs-password:${id}`);
  }
}
