import { API, BlockAPI, BlockTool, ToolConfig, SanitizerConfig } from '@editorjs/editorjs';

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
    v: number;
    algo: 'PBKDF2-AES-GCM' | 'PBKDF2-AES-CBC';
    iter: number;
    salt: string;
    iv: string;
    cipher: string;
}
export interface PasswordData {
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
 * Editor.js 密码保护 BlockTool
 */
export default class PasswordBlock implements BlockTool {
    private api;
    private readOnly;
    private block;
    private data;
    private css;
    private placeholders;
    private unlocked;
    private currentPassword?;
    private static readonly KDF_ITERATIONS;
    constructor({ data, config, api, readOnly, block }: PasswordParams);
    static get isReadOnlySupported(): boolean;
    static get toolbox(): {
        icon: string;
        title: 'Password';
    };
    static get contentless(): boolean;
    static get enableLineBreaks(): boolean;
    render(): HTMLElement;
    save(wrapper: HTMLDivElement): Promise<PasswordData>;
    static get sanitize(): SanitizerConfig;
    validate(data: PasswordData): boolean;
    private hasWebCrypto;
    private notifyError;
    private getAadString;
    private randomBytes;
    private getKeyMaterial;
    private deriveAesGcmKey;
    private toBase64;
    private fromBase64;
    private encryptWithPassword;
    private decryptWithPassword;
    private getAad;
}
export {};
