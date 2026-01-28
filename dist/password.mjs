(function(){"use strict";try{if(typeof document<"u"){var r=document.createElement("style");r.appendChild(document.createTextNode('.cdx-password{margin:0;display:grid;gap:10px;position:relative;--cdx-password-surface: var(--surface, #ffffff);--cdx-password-surface-muted: var(--surface-muted, #fafafa);--cdx-password-text: var(--text, #111827);--cdx-password-text-muted: var(--text-muted, #6b7280);--cdx-password-border: var(--border, #e5e7eb);--cdx-password-border-hover: var(--border, #d1d5db);--cdx-password-control-bg: var(--control-bg, #f3f4f6);--cdx-password-control-bg-hover: var(--control-bg-hover, #e5e7eb);--cdx-password-control-text: var(--control-text, #374151);--cdx-password-locked-stripe-a: #f3f4f6;--cdx-password-locked-stripe-b: #eef0f3;--cdx-password-watermark: rgba(17, 24, 39, .15);--cdx-password-badge-bg: rgba(17, 24, 39, .85);--cdx-password-badge-text: #ffffff;--cdx-password-placeholder: var(--text-muted, #707684);--cdx-password-primary: var(--primary, #3b82f6)}.cdx-password__content{min-height:32px;padding:10px 12px;border:1px solid var(--cdx-password-border);border-radius:8px;background:var(--cdx-password-surface-muted);background-color:var(--cdx-password-surface-muted)!important;color:var(--cdx-password-text);position:relative;transition:border-color .2s ease,background-color .2s ease;caret-color:var(--cdx-password-text)}.cdx-password__content:hover{border-color:var(--cdx-password-border-hover)}.cdx-password__content:focus{border-color:var(--cdx-password-primary)}.cdx-password--locked .cdx-password__content{color:var(--cdx-password-text-muted);cursor:not-allowed;background-color:var(--cdx-password-surface-muted)!important;background-image:repeating-linear-gradient(45deg,var(--cdx-password-locked-stripe-a) 0,var(--cdx-password-locked-stripe-a) 12px,var(--cdx-password-locked-stripe-b) 12px,var(--cdx-password-locked-stripe-b) 24px)}.cdx-password--locked .cdx-password__content:before{content:"🔒 受保护";position:absolute;top:8px;right:8px;font-size:10px;line-height:1;padding:4px 8px;background:var(--cdx-password-badge-bg);color:var(--cdx-password-badge-text);border-radius:9999px;letter-spacing:.5px}.cdx-password--locked .cdx-password__content:after{content:"🔒";position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;font-size:40px;color:var(--cdx-password-watermark);pointer-events:none}.cdx-password__controls{display:flex;gap:8px;align-items:center}.cdx-password__input{flex:1 1 auto;height:32px;padding:6px 8px;border:1px solid var(--cdx-password-border);border-radius:4px;outline:none;background:var(--cdx-password-control-bg);background-color:var(--cdx-password-control-bg)!important;color:var(--cdx-password-text);caret-color:var(--cdx-password-text);transition:border-color .15s ease,box-shadow .15s ease,background-color .15s ease}.cdx-password__input:focus{border-color:var(--cdx-password-primary);box-shadow:0 0 0 3px #3b82f633}.cdx-password__button{height:32px;padding:.3rem .8rem;line-height:1.1;font:inherit;border:none;background:var(--cdx-password-control-bg-hover);color:var(--cdx-password-control-text);border-radius:4px;cursor:pointer;font-weight:500;transition:background-color .15s ease,border-color .15s ease,box-shadow .15s ease,transform .05s ease}.cdx-password__button:hover{background:var(--cdx-password-control-bg)}.cdx-password__button:active{transform:translateY(.5px)}.cdx-password__button:focus-visible{outline:none;box-shadow:0 0 0 3px #3b82f633}.cdx-password [contentEditable=true][data-placeholder]:before{position:absolute;content:attr(data-placeholder);color:var(--cdx-password-placeholder);font-weight:400;opacity:0}.cdx-password [contentEditable=true][data-placeholder]:empty:before{opacity:1}.cdx-password [contentEditable=true][data-placeholder]:empty:focus:before{opacity:0}@media (prefers-color-scheme: dark){.cdx-password{--cdx-password-surface: var(--surface, #1b1c1f);--cdx-password-surface-muted: var(--surface-muted, #121214);--cdx-password-text: var(--text, #e9e9eb);--cdx-password-text-muted: var(--text-muted, #a1a1aa);--cdx-password-border: var(--border, #2a2b2f);--cdx-password-border-hover: var(--border, #3a3b41);--cdx-password-control-bg: var(--control-bg, #222327);--cdx-password-control-bg-hover: var(--control-bg-hover, #2b2c31);--cdx-password-locked-stripe-a: rgba(255, 255, 255, .06);--cdx-password-locked-stripe-b: rgba(255, 255, 255, .03);--cdx-password-watermark: rgba(255, 255, 255, .12);--cdx-password-badge-bg: rgba(255, 255, 255, .16);--cdx-password-badge-text: var(--text, #e9e9eb)}.cdx-password .cdx-password__content{background-color:var(--cdx-password-surface-muted)!important}.cdx-password .cdx-password__content [style*=background],.cdx-password .cdx-password__content [bgcolor]{background:transparent!important;background-color:transparent!important}.cdx-password .cdx-password__content [style*=color]{color:var(--cdx-password-text)!important}.cdx-password .cdx-password__input{background-color:var(--cdx-password-control-bg)!important}.cdx-password .cdx-password__content [style*=background]{background:transparent!important;background-color:transparent!important}.cdx-password__button{background:rgba(59,130,246,.16);border:1px solid rgba(59,130,246,.35);color:var(--cdx-password-text);box-shadow:0 0 0 1px #3b82f61a,0 8px 22px #00000040,0 0 16px #3b82f624}.cdx-password__button:hover{background:rgba(59,130,246,.24);border-color:#3b82f673;box-shadow:0 0 0 1px #3b82f624,0 10px 26px #00000047,0 0 18px #3b82f633}.cdx-password__button:focus-visible{box-shadow:0 0 0 1px #3b82f624,0 0 0 3px #3b82f638,0 10px 26px #00000047,0 0 18px #3b82f633}}')),document.head.appendChild(r)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
const De = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 10.8182L9 10.8182C8.80222 10.8182 8.60888 10.7649 8.44443 10.665C8.27998 10.5651 8.15181 10.4231 8.07612 10.257C8.00043 10.0909 7.98063 9.90808 8.01922 9.73174C8.0578 9.55539 8.15304 9.39341 8.29289 9.26627C8.43275 9.13913 8.61093 9.05255 8.80491 9.01747C8.99889 8.98239 9.19996 9.00039 9.38268 9.0692C9.56541 9.13801 9.72159 9.25453 9.83147 9.40403C9.94135 9.55353 10 9.72929 10 9.90909L10 12.1818C10 12.664 9.78929 13.1265 9.41421 13.4675C9.03914 13.8084 8.53043 14 8 14"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 10.8182L15 10.8182C14.8022 10.8182 14.6089 10.7649 14.4444 10.665C14.28 10.5651 14.1518 10.4231 14.0761 10.257C14.0004 10.0909 13.9806 9.90808 14.0192 9.73174C14.0578 9.55539 14.153 9.39341 14.2929 9.26627C14.4327 9.13913 14.6109 9.05255 14.8049 9.01747C14.9989 8.98239 15.2 9.00039 15.3827 9.0692C15.5654 9.13801 15.7216 9.25453 15.8315 9.40403C15.9414 9.55353 16 9.72929 16 9.90909L16 12.1818C16 12.664 15.7893 13.1265 15.4142 13.4675C15.0391 13.8084 14.5304 14 14 14"/></svg>';
var m = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function He(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else
    n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(r) {
    var i = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(n, r, i.get ? i : {
      enumerable: !0,
      get: function() {
        return e[r];
      }
    });
  }), n;
}
var d = {}, T = {}, j = {};
Object.defineProperty(j, "__esModule", { value: !0 });
j.allInputsSelector = Re;
function Re() {
  var e = ["text", "password", "email", "number", "search", "tel", "url"];
  return "[contenteditable=true], textarea, input:not([type]), " + e.map(function(t) {
    return 'input[type="'.concat(t, '"]');
  }).join(", ");
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.allInputsSelector = void 0;
  var t = j;
  Object.defineProperty(e, "allInputsSelector", { enumerable: !0, get: function() {
    return t.allInputsSelector;
  } });
})(T);
var p = {}, w = {};
Object.defineProperty(w, "__esModule", { value: !0 });
w.isNativeInput = Fe;
function Fe(e) {
  var t = [
    "INPUT",
    "TEXTAREA"
  ];
  return e && e.tagName ? t.includes(e.tagName) : !1;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isNativeInput = void 0;
  var t = w;
  Object.defineProperty(e, "isNativeInput", { enumerable: !0, get: function() {
    return t.isNativeInput;
  } });
})(p);
var ae = {}, k = {};
Object.defineProperty(k, "__esModule", { value: !0 });
k.append = We;
function We(e, t) {
  Array.isArray(t) ? t.forEach(function(n) {
    e.appendChild(n);
  }) : e.appendChild(t);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.append = void 0;
  var t = k;
  Object.defineProperty(e, "append", { enumerable: !0, get: function() {
    return t.append;
  } });
})(ae);
var S = {}, C = {};
Object.defineProperty(C, "__esModule", { value: !0 });
C.blockElements = Ke;
function Ke() {
  return [
    "address",
    "article",
    "aside",
    "blockquote",
    "canvas",
    "div",
    "dl",
    "dt",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "hr",
    "li",
    "main",
    "nav",
    "noscript",
    "ol",
    "output",
    "p",
    "pre",
    "ruby",
    "section",
    "table",
    "tbody",
    "thead",
    "tr",
    "tfoot",
    "ul",
    "video"
  ];
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.blockElements = void 0;
  var t = C;
  Object.defineProperty(e, "blockElements", { enumerable: !0, get: function() {
    return t.blockElements;
  } });
})(S);
var le = {}, M = {};
Object.defineProperty(M, "__esModule", { value: !0 });
M.calculateBaseline = Ue;
function Ue(e) {
  var t = window.getComputedStyle(e), n = parseFloat(t.fontSize), r = parseFloat(t.lineHeight) || n * 1.2, i = parseFloat(t.paddingTop), a = parseFloat(t.borderTopWidth), l = parseFloat(t.marginTop), o = n * 0.8, s = (r - n) / 2, u = l + a + i + s + o;
  return u;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.calculateBaseline = void 0;
  var t = M;
  Object.defineProperty(e, "calculateBaseline", { enumerable: !0, get: function() {
    return t.calculateBaseline;
  } });
})(le);
var oe = {}, L = {}, B = {}, I = {};
Object.defineProperty(I, "__esModule", { value: !0 });
I.isContentEditable = Ge;
function Ge(e) {
  return e.contentEditable === "true";
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isContentEditable = void 0;
  var t = I;
  Object.defineProperty(e, "isContentEditable", { enumerable: !0, get: function() {
    return t.isContentEditable;
  } });
})(B);
Object.defineProperty(L, "__esModule", { value: !0 });
L.canSetCaret = qe;
var Ve = p, ze = B;
function qe(e) {
  var t = !0;
  if ((0, Ve.isNativeInput)(e))
    switch (e.type) {
      case "file":
      case "checkbox":
      case "radio":
      case "hidden":
      case "submit":
      case "button":
      case "image":
      case "reset":
        t = !1;
        break;
    }
  else
    t = (0, ze.isContentEditable)(e);
  return t;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.canSetCaret = void 0;
  var t = L;
  Object.defineProperty(e, "canSetCaret", { enumerable: !0, get: function() {
    return t.canSetCaret;
  } });
})(oe);
var b = {}, N = {};
function Xe(e, t, n) {
  const r = n.value !== void 0 ? "value" : "get", i = n[r], a = `#${t}Cache`;
  if (n[r] = function(...l) {
    return this[a] === void 0 && (this[a] = i.apply(this, l)), this[a];
  }, r === "get" && n.set) {
    const l = n.set;
    n.set = function(o) {
      delete e[a], l.apply(this, o);
    };
  }
  return n;
}
function ue() {
  const e = {
    win: !1,
    mac: !1,
    x11: !1,
    linux: !1
  }, t = Object.keys(e).find((n) => window.navigator.appVersion.toLowerCase().indexOf(n) !== -1);
  return t !== void 0 && (e[t] = !0), e;
}
function A(e) {
  return e != null && e !== "" && (typeof e != "object" || Object.keys(e).length > 0);
}
function Ye(e) {
  return !A(e);
}
const Qe = () => typeof window < "u" && window.navigator !== null && A(window.navigator.platform) && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);
function Ze(e) {
  const t = ue();
  return e = e.replace(/shift/gi, "⇧").replace(/backspace/gi, "⌫").replace(/enter/gi, "⏎").replace(/up/gi, "↑").replace(/left/gi, "→").replace(/down/gi, "↓").replace(/right/gi, "←").replace(/escape/gi, "⎋").replace(/insert/gi, "Ins").replace(/delete/gi, "␡").replace(/\+/gi, "+"), t.mac ? e = e.replace(/ctrl|cmd/gi, "⌘").replace(/alt/gi, "⌥") : e = e.replace(/cmd/gi, "Ctrl").replace(/windows/gi, "WIN"), e;
}
function Je(e) {
  return e[0].toUpperCase() + e.slice(1);
}
function xe(e) {
  const t = document.createElement("div");
  t.style.position = "absolute", t.style.left = "-999px", t.style.bottom = "-999px", t.innerHTML = e, document.body.appendChild(t);
  const n = window.getSelection(), r = document.createRange();
  if (r.selectNode(t), n === null)
    throw new Error("Cannot copy text to clipboard");
  n.removeAllRanges(), n.addRange(r), document.execCommand("copy"), document.body.removeChild(t);
}
function et(e, t, n) {
  let r;
  return (...i) => {
    const a = this, l = () => {
      r = void 0, n !== !0 && e.apply(a, i);
    }, o = n === !0 && r !== void 0;
    window.clearTimeout(r), r = window.setTimeout(l, t), o && e.apply(a, i);
  };
}
function f(e) {
  return Object.prototype.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}
function tt(e) {
  return f(e) === "boolean";
}
function se(e) {
  return f(e) === "function" || f(e) === "asyncfunction";
}
function nt(e) {
  return se(e) && /^\s*class\s+/.test(e.toString());
}
function rt(e) {
  return f(e) === "number";
}
function g(e) {
  return f(e) === "object";
}
function it(e) {
  return Promise.resolve(e) === e;
}
function at(e) {
  return f(e) === "string";
}
function lt(e) {
  return f(e) === "undefined";
}
function O(e, ...t) {
  if (!t.length)
    return e;
  const n = t.shift();
  if (g(e) && g(n))
    for (const r in n)
      g(n[r]) ? (e[r] === void 0 && Object.assign(e, { [r]: {} }), O(e[r], n[r])) : Object.assign(e, { [r]: n[r] });
  return O(e, ...t);
}
function ot(e, t, n) {
  const r = `«${t}» is deprecated and will be removed in the next major release. Please use the «${n}» instead.`;
  e && console.warn(r);
}
function ut(e) {
  try {
    return new URL(e).href;
  } catch {
  }
  return e.substring(0, 2) === "//" ? window.location.protocol + e : window.location.origin + e;
}
function st(e) {
  return e > 47 && e < 58 || e === 32 || e === 13 || e === 229 || e > 64 && e < 91 || e > 95 && e < 112 || e > 185 && e < 193 || e > 218 && e < 223;
}
const ct = {
  BACKSPACE: 8,
  TAB: 9,
  ENTER: 13,
  SHIFT: 16,
  CTRL: 17,
  ALT: 18,
  ESC: 27,
  SPACE: 32,
  LEFT: 37,
  UP: 38,
  DOWN: 40,
  RIGHT: 39,
  DELETE: 46,
  META: 91,
  SLASH: 191
}, dt = {
  LEFT: 0,
  WHEEL: 1,
  RIGHT: 2,
  BACKWARD: 3,
  FORWARD: 4
};
class ft {
  constructor() {
    this.completed = Promise.resolve();
  }
  /**
   * Add new promise to queue
   * @param operation - promise should be added to queue
   */
  add(t) {
    return new Promise((n, r) => {
      this.completed = this.completed.then(t).then(n).catch(r);
    });
  }
}
function pt(e, t, n = void 0) {
  let r, i, a, l = null, o = 0;
  n || (n = {});
  const s = function() {
    o = n.leading === !1 ? 0 : Date.now(), l = null, a = e.apply(r, i), l === null && (r = i = null);
  };
  return function() {
    const u = Date.now();
    !o && n.leading === !1 && (o = u);
    const c = t - (u - o);
    return r = this, i = arguments, c <= 0 || c > t ? (l && (clearTimeout(l), l = null), o = u, a = e.apply(r, i), l === null && (r = i = null)) : !l && n.trailing !== !1 && (l = setTimeout(s, c)), a;
  };
}
const vt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  PromiseQueue: ft,
  beautifyShortcut: Ze,
  cacheable: Xe,
  capitalize: Je,
  copyTextToClipboard: xe,
  debounce: et,
  deepMerge: O,
  deprecationAssert: ot,
  getUserOS: ue,
  getValidUrl: ut,
  isBoolean: tt,
  isClass: nt,
  isEmpty: Ye,
  isFunction: se,
  isIosDevice: Qe,
  isNumber: rt,
  isObject: g,
  isPrintableKey: st,
  isPromise: it,
  isString: at,
  isUndefined: lt,
  keyCodes: ct,
  mouseButtons: dt,
  notEmpty: A,
  throttle: pt,
  typeOf: f
}, Symbol.toStringTag, { value: "Module" })), $ = /* @__PURE__ */ He(vt);
Object.defineProperty(N, "__esModule", { value: !0 });
N.containsOnlyInlineElements = mt;
var yt = $, gt = S;
function mt(e) {
  var t;
  (0, yt.isString)(e) ? (t = document.createElement("div"), t.innerHTML = e) : t = e;
  var n = function(r) {
    return !(0, gt.blockElements)().includes(r.tagName.toLowerCase()) && Array.from(r.children).every(n);
  };
  return Array.from(t.children).every(n);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.containsOnlyInlineElements = void 0;
  var t = N;
  Object.defineProperty(e, "containsOnlyInlineElements", { enumerable: !0, get: function() {
    return t.containsOnlyInlineElements;
  } });
})(b);
var ce = {}, D = {}, h = {}, H = {};
Object.defineProperty(H, "__esModule", { value: !0 });
H.make = bt;
function bt(e, t, n) {
  var r;
  t === void 0 && (t = null), n === void 0 && (n = {});
  var i = document.createElement(e);
  if (Array.isArray(t)) {
    var a = t.filter(function(o) {
      return o !== void 0;
    });
    (r = i.classList).add.apply(r, a);
  } else
    t !== null && i.classList.add(t);
  for (var l in n)
    Object.prototype.hasOwnProperty.call(n, l) && (i[l] = n[l]);
  return i;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.make = void 0;
  var t = H;
  Object.defineProperty(e, "make", { enumerable: !0, get: function() {
    return t.make;
  } });
})(h);
Object.defineProperty(D, "__esModule", { value: !0 });
D.fragmentToString = _t;
var ht = h;
function _t(e) {
  var t = (0, ht.make)("div");
  return t.appendChild(e), t.innerHTML;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.fragmentToString = void 0;
  var t = D;
  Object.defineProperty(e, "fragmentToString", { enumerable: !0, get: function() {
    return t.fragmentToString;
  } });
})(ce);
var de = {}, R = {};
Object.defineProperty(R, "__esModule", { value: !0 });
R.getContentLength = Ot;
var Et = p;
function Ot(e) {
  var t, n;
  return (0, Et.isNativeInput)(e) ? e.value.length : e.nodeType === Node.TEXT_NODE ? e.length : (n = (t = e.textContent) === null || t === void 0 ? void 0 : t.length) !== null && n !== void 0 ? n : 0;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.getContentLength = void 0;
  var t = R;
  Object.defineProperty(e, "getContentLength", { enumerable: !0, get: function() {
    return t.getContentLength;
  } });
})(de);
var F = {}, W = {}, ie = m && m.__spreadArray || function(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = t.length, a; r < i; r++)
      (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
};
Object.defineProperty(W, "__esModule", { value: !0 });
W.getDeepestBlockElements = fe;
var Pt = b;
function fe(e) {
  return (0, Pt.containsOnlyInlineElements)(e) ? [e] : Array.from(e.children).reduce(function(t, n) {
    return ie(ie([], t, !0), fe(n), !0);
  }, []);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.getDeepestBlockElements = void 0;
  var t = W;
  Object.defineProperty(e, "getDeepestBlockElements", { enumerable: !0, get: function() {
    return t.getDeepestBlockElements;
  } });
})(F);
var pe = {}, K = {}, _ = {}, U = {};
Object.defineProperty(U, "__esModule", { value: !0 });
U.isLineBreakTag = Tt;
function Tt(e) {
  return [
    "BR",
    "WBR"
  ].includes(e.tagName);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isLineBreakTag = void 0;
  var t = U;
  Object.defineProperty(e, "isLineBreakTag", { enumerable: !0, get: function() {
    return t.isLineBreakTag;
  } });
})(_);
var E = {}, G = {};
Object.defineProperty(G, "__esModule", { value: !0 });
G.isSingleTag = jt;
function jt(e) {
  return [
    "AREA",
    "BASE",
    "BR",
    "COL",
    "COMMAND",
    "EMBED",
    "HR",
    "IMG",
    "INPUT",
    "KEYGEN",
    "LINK",
    "META",
    "PARAM",
    "SOURCE",
    "TRACK",
    "WBR"
  ].includes(e.tagName);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isSingleTag = void 0;
  var t = G;
  Object.defineProperty(e, "isSingleTag", { enumerable: !0, get: function() {
    return t.isSingleTag;
  } });
})(E);
Object.defineProperty(K, "__esModule", { value: !0 });
K.getDeepestNode = ve;
var wt = p, kt = _, St = E;
function ve(e, t) {
  t === void 0 && (t = !1);
  var n = t ? "lastChild" : "firstChild", r = t ? "previousSibling" : "nextSibling";
  if (e.nodeType === Node.ELEMENT_NODE && e[n]) {
    var i = e[n];
    if ((0, St.isSingleTag)(i) && !(0, wt.isNativeInput)(i) && !(0, kt.isLineBreakTag)(i))
      if (i[r])
        i = i[r];
      else if (i.parentNode !== null && i.parentNode[r])
        i = i.parentNode[r];
      else
        return i.parentNode;
    return ve(i, t);
  }
  return e;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.getDeepestNode = void 0;
  var t = K;
  Object.defineProperty(e, "getDeepestNode", { enumerable: !0, get: function() {
    return t.getDeepestNode;
  } });
})(pe);
var ye = {}, V = {}, y = m && m.__spreadArray || function(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = t.length, a; r < i; r++)
      (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
};
Object.defineProperty(V, "__esModule", { value: !0 });
V.findAllInputs = It;
var Ct = b, Mt = F, Lt = T, Bt = p;
function It(e) {
  return Array.from(e.querySelectorAll((0, Lt.allInputsSelector)())).reduce(function(t, n) {
    return (0, Bt.isNativeInput)(n) || (0, Ct.containsOnlyInlineElements)(n) ? y(y([], t, !0), [n], !1) : y(y([], t, !0), (0, Mt.getDeepestBlockElements)(n), !0);
  }, []);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.findAllInputs = void 0;
  var t = V;
  Object.defineProperty(e, "findAllInputs", { enumerable: !0, get: function() {
    return t.findAllInputs;
  } });
})(ye);
var ge = {}, z = {};
Object.defineProperty(z, "__esModule", { value: !0 });
z.isCollapsedWhitespaces = Nt;
function Nt(e) {
  return !/[^\t\n\r ]/.test(e);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isCollapsedWhitespaces = void 0;
  var t = z;
  Object.defineProperty(e, "isCollapsedWhitespaces", { enumerable: !0, get: function() {
    return t.isCollapsedWhitespaces;
  } });
})(ge);
var q = {}, X = {};
Object.defineProperty(X, "__esModule", { value: !0 });
X.isElement = $t;
var At = $;
function $t(e) {
  return (0, At.isNumber)(e) ? !1 : !!e && !!e.nodeType && e.nodeType === Node.ELEMENT_NODE;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isElement = void 0;
  var t = X;
  Object.defineProperty(e, "isElement", { enumerable: !0, get: function() {
    return t.isElement;
  } });
})(q);
var me = {}, Y = {}, Q = {}, Z = {};
Object.defineProperty(Z, "__esModule", { value: !0 });
Z.isLeaf = Dt;
function Dt(e) {
  return e === null ? !1 : e.childNodes.length === 0;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isLeaf = void 0;
  var t = Z;
  Object.defineProperty(e, "isLeaf", { enumerable: !0, get: function() {
    return t.isLeaf;
  } });
})(Q);
var J = {}, x = {};
Object.defineProperty(x, "__esModule", { value: !0 });
x.isNodeEmpty = Kt;
var Ht = _, Rt = q, Ft = p, Wt = E;
function Kt(e, t) {
  var n = "";
  return (0, Wt.isSingleTag)(e) && !(0, Ht.isLineBreakTag)(e) ? !1 : ((0, Rt.isElement)(e) && (0, Ft.isNativeInput)(e) ? n = e.value : e.textContent !== null && (n = e.textContent.replace("​", "")), t !== void 0 && (n = n.replace(new RegExp(t, "g"), "")), n.trim().length === 0);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isNodeEmpty = void 0;
  var t = x;
  Object.defineProperty(e, "isNodeEmpty", { enumerable: !0, get: function() {
    return t.isNodeEmpty;
  } });
})(J);
Object.defineProperty(Y, "__esModule", { value: !0 });
Y.isEmpty = Vt;
var Ut = Q, Gt = J;
function Vt(e, t) {
  e.normalize();
  for (var n = [e]; n.length > 0; ) {
    var r = n.shift();
    if (r) {
      if (e = r, (0, Ut.isLeaf)(e) && !(0, Gt.isNodeEmpty)(e, t))
        return !1;
      n.push.apply(n, Array.from(e.childNodes));
    }
  }
  return !0;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isEmpty = void 0;
  var t = Y;
  Object.defineProperty(e, "isEmpty", { enumerable: !0, get: function() {
    return t.isEmpty;
  } });
})(me);
var be = {}, ee = {};
Object.defineProperty(ee, "__esModule", { value: !0 });
ee.isFragment = qt;
var zt = $;
function qt(e) {
  return (0, zt.isNumber)(e) ? !1 : !!e && !!e.nodeType && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isFragment = void 0;
  var t = ee;
  Object.defineProperty(e, "isFragment", { enumerable: !0, get: function() {
    return t.isFragment;
  } });
})(be);
var he = {}, te = {};
Object.defineProperty(te, "__esModule", { value: !0 });
te.isHTMLString = Yt;
var Xt = h;
function Yt(e) {
  var t = (0, Xt.make)("div");
  return t.innerHTML = e, t.childElementCount > 0;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isHTMLString = void 0;
  var t = te;
  Object.defineProperty(e, "isHTMLString", { enumerable: !0, get: function() {
    return t.isHTMLString;
  } });
})(he);
var _e = {}, ne = {};
Object.defineProperty(ne, "__esModule", { value: !0 });
ne.offset = Qt;
function Qt(e) {
  var t = e.getBoundingClientRect(), n = window.pageXOffset || document.documentElement.scrollLeft, r = window.pageYOffset || document.documentElement.scrollTop, i = t.top + r, a = t.left + n;
  return {
    top: i,
    left: a,
    bottom: i + t.height,
    right: a + t.width
  };
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.offset = void 0;
  var t = ne;
  Object.defineProperty(e, "offset", { enumerable: !0, get: function() {
    return t.offset;
  } });
})(_e);
var Ee = {}, re = {};
Object.defineProperty(re, "__esModule", { value: !0 });
re.prepend = Zt;
function Zt(e, t) {
  Array.isArray(t) ? (t = t.reverse(), t.forEach(function(n) {
    return e.prepend(n);
  })) : e.prepend(t);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.prepend = void 0;
  var t = re;
  Object.defineProperty(e, "prepend", { enumerable: !0, get: function() {
    return t.prepend;
  } });
})(Ee);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.prepend = e.offset = e.make = e.isLineBreakTag = e.isSingleTag = e.isNodeEmpty = e.isLeaf = e.isHTMLString = e.isFragment = e.isEmpty = e.isElement = e.isContentEditable = e.isCollapsedWhitespaces = e.findAllInputs = e.isNativeInput = e.allInputsSelector = e.getDeepestNode = e.getDeepestBlockElements = e.getContentLength = e.fragmentToString = e.containsOnlyInlineElements = e.canSetCaret = e.calculateBaseline = e.blockElements = e.append = void 0;
  var t = T;
  Object.defineProperty(e, "allInputsSelector", { enumerable: !0, get: function() {
    return t.allInputsSelector;
  } });
  var n = p;
  Object.defineProperty(e, "isNativeInput", { enumerable: !0, get: function() {
    return n.isNativeInput;
  } });
  var r = ae;
  Object.defineProperty(e, "append", { enumerable: !0, get: function() {
    return r.append;
  } });
  var i = S;
  Object.defineProperty(e, "blockElements", { enumerable: !0, get: function() {
    return i.blockElements;
  } });
  var a = le;
  Object.defineProperty(e, "calculateBaseline", { enumerable: !0, get: function() {
    return a.calculateBaseline;
  } });
  var l = oe;
  Object.defineProperty(e, "canSetCaret", { enumerable: !0, get: function() {
    return l.canSetCaret;
  } });
  var o = b;
  Object.defineProperty(e, "containsOnlyInlineElements", { enumerable: !0, get: function() {
    return o.containsOnlyInlineElements;
  } });
  var s = ce;
  Object.defineProperty(e, "fragmentToString", { enumerable: !0, get: function() {
    return s.fragmentToString;
  } });
  var u = de;
  Object.defineProperty(e, "getContentLength", { enumerable: !0, get: function() {
    return u.getContentLength;
  } });
  var c = F;
  Object.defineProperty(e, "getDeepestBlockElements", { enumerable: !0, get: function() {
    return c.getDeepestBlockElements;
  } });
  var v = pe;
  Object.defineProperty(e, "getDeepestNode", { enumerable: !0, get: function() {
    return v.getDeepestNode;
  } });
  var Pe = ye;
  Object.defineProperty(e, "findAllInputs", { enumerable: !0, get: function() {
    return Pe.findAllInputs;
  } });
  var Te = ge;
  Object.defineProperty(e, "isCollapsedWhitespaces", { enumerable: !0, get: function() {
    return Te.isCollapsedWhitespaces;
  } });
  var je = B;
  Object.defineProperty(e, "isContentEditable", { enumerable: !0, get: function() {
    return je.isContentEditable;
  } });
  var we = q;
  Object.defineProperty(e, "isElement", { enumerable: !0, get: function() {
    return we.isElement;
  } });
  var ke = me;
  Object.defineProperty(e, "isEmpty", { enumerable: !0, get: function() {
    return ke.isEmpty;
  } });
  var Se = be;
  Object.defineProperty(e, "isFragment", { enumerable: !0, get: function() {
    return Se.isFragment;
  } });
  var Ce = he;
  Object.defineProperty(e, "isHTMLString", { enumerable: !0, get: function() {
    return Ce.isHTMLString;
  } });
  var Me = Q;
  Object.defineProperty(e, "isLeaf", { enumerable: !0, get: function() {
    return Me.isLeaf;
  } });
  var Le = J;
  Object.defineProperty(e, "isNodeEmpty", { enumerable: !0, get: function() {
    return Le.isNodeEmpty;
  } });
  var Be = _;
  Object.defineProperty(e, "isLineBreakTag", { enumerable: !0, get: function() {
    return Be.isLineBreakTag;
  } });
  var Ie = E;
  Object.defineProperty(e, "isSingleTag", { enumerable: !0, get: function() {
    return Ie.isSingleTag;
  } });
  var Ne = h;
  Object.defineProperty(e, "make", { enumerable: !0, get: function() {
    return Ne.make;
  } });
  var Ae = _e;
  Object.defineProperty(e, "offset", { enumerable: !0, get: function() {
    return Ae.offset;
  } });
  var $e = Ee;
  Object.defineProperty(e, "prepend", { enumerable: !0, get: function() {
    return $e.prepend;
  } });
})(d);
const Oe = class P {
  constructor({ data: t, config: n, api: r, readOnly: i, block: a }) {
    this.api = r, this.readOnly = i, this.block = a, this.placeholders = {
      contentPlaceholder: r.i18n.t((n == null ? void 0 : n.contentPlaceholder) ?? "请输入受保护内容"),
      passwordPlaceholder: r.i18n.t((n == null ? void 0 : n.passwordPlaceholder) ?? "输入密码"),
      buttonText: r.i18n.t((n == null ? void 0 : n.buttonText) ?? "显示"),
      lockedText: r.i18n.t((n == null ? void 0 : n.lockedText) ?? "密码保护区域"),
      lockButtonText: r.i18n.t((n == null ? void 0 : n.lockButtonText) ?? "隐藏")
    }, this.data = {
      content: (t == null ? void 0 : t.content) ?? "",
      encrypted: t == null ? void 0 : t.encrypted
    }, this.unlocked = !1, this.css = {
      baseClass: this.api.styles.block,
      wrapper: "cdx-password",
      content: "cdx-password__content",
      controls: "cdx-password__controls",
      input: "cdx-password__input",
      button: "cdx-password__button"
    };
  }
  static get isReadOnlySupported() {
    return !0;
  }
  static get toolbox() {
    return {
      icon: De,
      title: "Password"
    };
  }
  static get contentless() {
    return !0;
  }
  static get enableLineBreaks() {
    return !0;
  }
  render() {
    const t = d.make("div", [this.css.baseClass, this.css.wrapper]), n = d.make("div", [this.api.styles.input, this.css.content], {
      contentEditable: String(!this.readOnly)
    }), r = () => {
      t.classList.toggle("cdx-password--locked", !this.unlocked), this.unlocked ? (n.innerHTML = this.data.content ?? "", n.dataset.placeholder = this.placeholders.contentPlaceholder) : (n.innerHTML = this.api.sanitizer.clean(this.placeholders.lockedText, {}), delete n.dataset.placeholder), n.setAttribute("contenteditable", String(this.unlocked && !this.readOnly));
    };
    r(), t.appendChild(n);
    const i = () => {
      const l = d.make("div", [this.css.controls]), o = d.make("input", [this.css.input], {
        type: "password",
        placeholder: this.placeholders.passwordPlaceholder,
        autocomplete: "new-password"
      }), s = d.make("button", [this.css.button], {
        type: "button",
        innerHTML: this.placeholders.buttonText
      }), u = async () => {
        const c = o.value;
        if (!c) {
          o.setCustomValidity(this.api.i18n.t("请输入密码")), o.reportValidity(), setTimeout(() => o.setCustomValidity(""), 1200);
          return;
        }
        try {
          if (this.data.encrypted) {
            const v = await this.decryptWithPassword(this.data.encrypted, c);
            this.data.content = v, this.currentPassword = c, this.unlocked = !0, r(), l.remove(), a();
            return;
          }
          this.currentPassword = c, this.unlocked = !0, r(), l.remove(), a();
          return;
        } catch {
          o.setCustomValidity(this.api.i18n.t("密码错误")), o.reportValidity(), setTimeout(() => o.setCustomValidity(""), 1500);
        }
      };
      s.addEventListener("click", u), o.addEventListener("keydown", (c) => {
        c.key === "Enter" && u();
      }), l.appendChild(o), l.appendChild(s), t.appendChild(l);
    }, a = () => {
      const l = d.make("div", [this.css.controls]), o = d.make("button", [this.css.button], {
        type: "button",
        innerHTML: this.placeholders.lockButtonText
      }), s = async () => {
        if (this.readOnly) {
          this.data.content = void 0, this.currentPassword = void 0, this.unlocked = !1, r(), l.remove(), i();
          return;
        }
        this.data.content = n.innerHTML;
        const u = this.currentPassword;
        u && (this.data.encrypted = await this.encryptWithPassword(this.data.content || "", u), this.data.content = void 0), this.unlocked = !1, this.currentPassword = void 0, r(), l.remove(), i();
      };
      o.addEventListener("click", s), l.appendChild(o), t.appendChild(l);
    };
    return this.unlocked ? a() : i(), t;
  }
  async save(t) {
    const n = t.querySelector(`.${this.css.content}`);
    if (this.data.encrypted)
      return { encrypted: this.data.encrypted };
    const r = this.currentPassword;
    if (this.unlocked && r) {
      const i = n ? n.innerHTML : this.data.content || "";
      return { encrypted: await this.encryptWithPassword(i, r) };
    }
    return { encrypted: this.data.encrypted };
  }
  static get sanitize() {
    return {
      content: { br: !0 },
      // 允许携带密文对象（无需 HTML 净化）
      encrypted: {}
    };
  }
  validate(t) {
    return !0;
  }
  // ======== Crypto helpers (Web Crypto API) ========
  async getKeyMaterial(t) {
    const n = new TextEncoder();
    return await crypto.subtle.importKey("raw", n.encode(t), { name: "PBKDF2" }, !1, ["deriveKey"]);
  }
  async deriveAesGcmKey(t, n, r) {
    const i = await this.getKeyMaterial(t);
    return await crypto.subtle.deriveKey(
      { name: "PBKDF2", salt: n, iterations: r, hash: "SHA-256" },
      i,
      { name: "AES-GCM", length: 256 },
      !1,
      ["encrypt", "decrypt"]
    );
  }
  toBase64(t) {
    const n = new Uint8Array(t);
    let r = "";
    for (let i = 0; i < n.length; i++)
      r += String.fromCharCode(n[i]);
    return btoa(r);
  }
  fromBase64(t) {
    const n = atob(t), r = n.length, i = new Uint8Array(r);
    for (let a = 0; a < r; a++)
      i[a] = n.charCodeAt(a);
    return i;
  }
  async encryptWithPassword(t, n) {
    const r = new TextEncoder(), i = crypto.getRandomValues(new Uint8Array(16)), a = crypto.getRandomValues(new Uint8Array(12)), l = await this.deriveAesGcmKey(n, i, P.KDF_ITERATIONS), o = this.getAad(), s = await crypto.subtle.encrypt(
      { name: "AES-GCM", iv: a, additionalData: o },
      l,
      r.encode(t)
    );
    return {
      v: 1,
      algo: "PBKDF2-AES-GCM",
      iter: P.KDF_ITERATIONS,
      salt: this.toBase64(i.buffer),
      iv: this.toBase64(a.buffer),
      cipher: this.toBase64(s)
    };
  }
  async decryptWithPassword(t, n) {
    const r = new TextDecoder(), i = this.fromBase64(t.salt), a = this.fromBase64(t.iv), l = await this.deriveAesGcmKey(n, i, t.iter), o = this.fromBase64(t.cipher), s = this.getAad(), u = await crypto.subtle.decrypt(
      { name: "AES-GCM", iv: a, additionalData: s },
      l,
      o
    );
    return r.decode(u);
  }
  getAad() {
    const t = this.block && this.block.id || "";
    return new TextEncoder().encode(`editorjs-password:${t}`);
  }
};
Oe.KDF_ITERATIONS = 3e5;
let Jt = Oe;
export {
  Jt as default
};
