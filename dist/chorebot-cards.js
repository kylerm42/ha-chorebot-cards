/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$2=globalThis,e$2=t$2.ShadowRoot&&(void 0===t$2.ShadyCSS||t$2.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$2=Symbol(),o$4=new WeakMap;let n$3 = class n{constructor(t,e,o){if(this._$cssResult$=true,o!==s$2)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$2&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=o$4.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o$4.set(s,t));}return t}toString(){return this.cssText}};const r$4=t=>new n$3("string"==typeof t?t:t+"",void 0,s$2),i$3=(t,...e)=>{const o=1===t.length?t[0]:e.reduce((e,s,o)=>e+(t=>{if(true===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[o+1],t[0]);return new n$3(o,t,s$2)},S$1=(s,o)=>{if(e$2)s.adoptedStyleSheets=o.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of o){const o=document.createElement("style"),n=t$2.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o);}},c$2=e$2?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$4(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:i$2,defineProperty:e$1,getOwnPropertyDescriptor:h$1,getOwnPropertyNames:r$3,getOwnPropertySymbols:o$3,getPrototypeOf:n$2}=Object,a$1=globalThis,c$1=a$1.trustedTypes,l$1=c$1?c$1.emptyScript:"",p$1=a$1.reactiveElementPolyfillSupport,d$1=(t,s)=>t,u$1={toAttribute(t,s){switch(s){case Boolean:t=t?l$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t);}catch(t){i=null;}}return i}},f$1=(t,s)=>!i$2(t,s),b$1={attribute:true,type:String,converter:u$1,reflect:false,useDefault:false,hasChanged:f$1};Symbol.metadata??=Symbol("metadata"),a$1.litPropertyMetadata??=new WeakMap;let y$1 = class y extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t);}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=b$1){if(s.state&&(s.attribute=false),this._$Ei(),this.prototype.hasOwnProperty(t)&&((s=Object.create(s)).wrapped=true),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),h=this.getPropertyDescriptor(t,i,s);void 0!==h&&e$1(this.prototype,t,h);}}static getPropertyDescriptor(t,s,i){const{get:e,set:r}=h$1(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t;}};return {get:e,set(s){const h=e?.call(this);r?.call(this,s),this.requestUpdate(t,h,i);},configurable:true,enumerable:true}}static getPropertyOptions(t){return this.elementProperties.get(t)??b$1}static _$Ei(){if(this.hasOwnProperty(d$1("elementProperties")))return;const t=n$2(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties);}static finalize(){if(this.hasOwnProperty(d$1("finalized")))return;if(this.finalized=true,this._$Ei(),this.hasOwnProperty(d$1("properties"))){const t=this.properties,s=[...r$3(t),...o$3(t)];for(const i of s)this.createProperty(i,t[i]);}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i);}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t);}this.elementStyles=this.finalizeStyles(this.styles);}static finalizeStyles(s){const i=[];if(Array.isArray(s)){const e=new Set(s.flat(1/0).reverse());for(const s of e)i.unshift(c$2(s));}else void 0!==s&&i.push(c$2(s));return i}static _$Eu(t,s){const i=s.attribute;return  false===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=false,this.hasUpdated=false,this._$Em=null,this._$Ev();}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this));}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.();}removeController(t){this._$EO?.delete(t);}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t);}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S$1(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(true),this._$EO?.forEach(t=>t.hostConnected?.());}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.());}attributeChangedCallback(t,s,i){this._$AK(t,i);}_$ET(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&true===i.reflect){const h=(void 0!==i.converter?.toAttribute?i.converter:u$1).toAttribute(s,i.type);this._$Em=t,null==h?this.removeAttribute(e):this.setAttribute(e,h),this._$Em=null;}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:u$1;this._$Em=e;const r=h.fromAttribute(s,t.type);this[e]=r??this._$Ej?.get(e)??r,this._$Em=null;}}requestUpdate(t,s,i,e=false,h){if(void 0!==t){const r=this.constructor;if(false===e&&(h=this[t]),i??=r.getPropertyOptions(t),!((i.hasChanged??f$1)(h,s)||i.useDefault&&i.reflect&&h===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,s,i);} false===this.isUpdatePending&&(this._$ES=this._$EP());}C(t,s,{useDefault:i,reflect:e,wrapped:h},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??s??this[t]),true!==h||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(s=void 0),this._$AL.set(t,s)),true===e&&this._$Em!==t&&(this._$Eq??=new Set).add(t));}async _$EP(){this.isUpdatePending=true;try{await this._$ES;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0;}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t){const{wrapped:t}=i,e=this[s];true!==t||this._$AL.has(s)||void 0===e||this.C(s,void 0,i,e);}}let t=false;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(s)):this._$EM();}catch(s){throw t=false,this._$EM(),s}t&&this._$AE(s);}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=true,this.firstUpdated(t)),this.updated(t);}_$EM(){this._$AL=new Map,this.isUpdatePending=false;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return  true}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM();}updated(t){}firstUpdated(t){}};y$1.elementStyles=[],y$1.shadowRootOptions={mode:"open"},y$1[d$1("elementProperties")]=new Map,y$1[d$1("finalized")]=new Map,p$1?.({ReactiveElement:y$1}),(a$1.reactiveElementVersions??=[]).push("2.1.2");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1=globalThis,i$1=t=>t,s$1=t$1.trustedTypes,e=s$1?s$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,h="$lit$",o$2=`lit$${Math.random().toFixed(9).slice(2)}$`,n$1="?"+o$2,r$2=`<${n$1}>`,l=document,c=()=>l.createComment(""),a=t=>null===t||"object"!=typeof t&&"function"!=typeof t,u=Array.isArray,d=t=>u(t)||"function"==typeof t?.[Symbol.iterator],f="[ \t\n\f\r]",v=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m=/>/g,p=RegExp(`>|${f}(?:([^\\s"'>=/]+)(${f}*=${f}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,x=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),b=x(1),E=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),C=new WeakMap,P=l.createTreeWalker(l,129);function V(t,i){if(!u(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==e?e.createHTML(i):i}const N=(t,i)=>{const s=t.length-1,e=[];let n,l=2===i?"<svg>":3===i?"<math>":"",c=v;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,f=0;for(;f<s.length&&(c.lastIndex=f,u=c.exec(s),null!==u);)f=c.lastIndex,c===v?"!--"===u[1]?c=_:void 0!==u[1]?c=m:void 0!==u[2]?(y.test(u[2])&&(n=RegExp("</"+u[2],"g")),c=p):void 0!==u[3]&&(c=p):c===p?">"===u[0]?(c=n??v,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?p:'"'===u[3]?$:g):c===$||c===g?c=p:c===_||c===m?c=v:(c=p,n=void 0);const x=c===p&&t[i+1].startsWith("/>")?" ":"";l+=c===v?s+r$2:d>=0?(e.push(a),s.slice(0,d)+h+s.slice(d)+o$2+x):s+o$2+(-2===d?i:x);}return [V(t,l+(t[s]||"<?>")+(2===i?"</svg>":3===i?"</math>":"")),e]};class S{constructor({strings:t,_$litType$:i},e){let r;this.parts=[];let l=0,a=0;const u=t.length-1,d=this.parts,[f,v]=N(t,i);if(this.el=S.createElement(f,e),P.currentNode=this.el.content,2===i||3===i){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(r=P.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(h)){const i=v[a++],s=r.getAttribute(t).split(o$2),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:l,name:e[2],strings:s,ctor:"."===e[1]?I:"?"===e[1]?L:"@"===e[1]?z:H}),r.removeAttribute(t);}else t.startsWith(o$2)&&(d.push({type:6,index:l}),r.removeAttribute(t));if(y.test(r.tagName)){const t=r.textContent.split(o$2),i=t.length-1;if(i>0){r.textContent=s$1?s$1.emptyScript:"";for(let s=0;s<i;s++)r.append(t[s],c()),P.nextNode(),d.push({type:2,index:++l});r.append(t[i],c());}}}else if(8===r.nodeType)if(r.data===n$1)d.push({type:2,index:l});else {let t=-1;for(;-1!==(t=r.data.indexOf(o$2,t+1));)d.push({type:7,index:l}),t+=o$2.length-1;}l++;}}static createElement(t,i){const s=l.createElement("template");return s.innerHTML=t,s}}function M(t,i,s=t,e){if(i===E)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=a(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(false),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=M(t,h._$AS(t,i.values),h,e)),i}class R{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??l).importNode(i,true);P.currentNode=e;let h=P.nextNode(),o=0,n=0,r=s[0];for(;void 0!==r;){if(o===r.index){let i;2===r.type?i=new k(h,h.nextSibling,this,t):1===r.type?i=new r.ctor(h,r.name,r.strings,this,t):6===r.type&&(i=new Z(h,this,t)),this._$AV.push(i),r=s[++n];}o!==r?.index&&(h=P.nextNode(),o++);}return P.currentNode=l,e}p(t){let i=0;for(const s of this._$AV) void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class k{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??true;}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=M(this,t,i),a(t)?t===A||null==t||""===t?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==E&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):d(t)?this.k(t):this._(t);}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t));}_(t){this._$AH!==A&&a(this._$AH)?this._$AA.nextSibling.data=t:this.T(l.createTextNode(t)),this._$AH=t;}$(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=S.createElement(V(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else {const t=new R(e,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t;}}_$AC(t){let i=C.get(t.strings);return void 0===i&&C.set(t.strings,i=new S(t)),i}k(t){u(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new k(this.O(c()),this.O(c()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,s){for(this._$AP?.(false,true,s);t!==this._$AB;){const s=i$1(t).nextSibling;i$1(t).remove(),t=s;}}setConnected(t){ void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t));}}class H{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A;}_$AI(t,i=this,s,e){const h=this.strings;let o=false;if(void 0===h)t=M(this,t,i,0),o=!a(t)||t!==this._$AH&&t!==E,o&&(this._$AH=t);else {const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=M(this,e[s+n],i,n),r===E&&(r=this._$AH[n]),o||=!a(r)||r!==this._$AH[n],r===A?t=A:t!==A&&(t+=(r??"")+h[n+1]),this._$AH[n]=r;}o&&!e&&this.j(t);}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}}class I extends H{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===A?void 0:t;}}class L extends H{constructor(){super(...arguments),this.type=4;}j(t){this.element.toggleAttribute(this.name,!!t&&t!==A);}}class z extends H{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5;}_$AI(t,i=this){if((t=M(this,t,i,0)??A)===E)return;const s=this._$AH,e=t===A&&s!==A||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==A&&(s===A||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}}class Z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){M(this,t);}}const B=t$1.litHtmlPolyfillSupport;B?.(S,k),(t$1.litHtmlVersions??=[]).push("3.3.2");const D=(t,i,s)=>{const e=s?.renderBefore??i;let h=e._$litPart$;if(void 0===h){const t=s?.renderBefore??null;e._$litPart$=h=new k(i.insertBefore(c(),t),t,void 0,s??{});}return h._$AI(t),h};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const s=globalThis;class i extends y$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=D(r,this.renderRoot,this.renderOptions);}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(true);}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(false);}render(){return E}}i._$litElement$=true,i["finalized"]=true,s.litElementHydrateSupport?.({LitElement:i});const o$1=s.litElementPolyfillSupport;o$1?.({LitElement:i});(s.litElementVersions??=[]).push("4.2.2");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=t=>(e,o)=>{ void 0!==o?o.addInitializer(()=>{customElements.define(t,e);}):customElements.define(t,e);};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o={attribute:true,type:String,converter:u$1,reflect:false,hasChanged:f$1},r$1=(t=o,e,r)=>{const{kind:n,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(void 0===s&&globalThis.litPropertyMetadata.set(i,s=new Map),"setter"===n&&((t=Object.create(t)).wrapped=true),s.set(r.name,t),"accessor"===n){const{name:o}=r;return {set(r){const n=e.get.call(this);e.set.call(this,r),this.requestUpdate(o,n,t,true,r);},init(e){return void 0!==e&&this.C(o,void 0,t,e),e}}}if("setter"===n){const{name:o}=r;return function(r){const n=this[o];e.call(this,r),this.requestUpdate(o,n,t,true,r);}}throw Error("Unsupported decorator location: "+n)};function n(t){return (e,o)=>"object"==typeof o?r$1(t,e,o):((t,e,o)=>{const r=e.hasOwnProperty(o);return e.constructor.createProperty(o,t),r?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function r(r){return n({...r,state:true,attribute:false})}

// ============================================================================
// Date/Time Utility Functions for ChoreBot Cards
// ============================================================================
/**
 * Parse UTC timestamp to local date and time strings
 * @param utcString - ISO 8601 UTC timestamp
 * @param isAllDay - Whether this is an all-day task (affects timezone handling)
 * @returns Object with separate date and time strings
 */
function parseUTCToLocal(utcString, isAllDay = false) {
    try {
        const date = new Date(utcString);
        if (isNaN(date.getTime()))
            return { date: null, time: null };
        if (isAllDay) {
            // For all-day tasks, use UTC date directly without timezone conversion
            // This prevents "2026-01-16T00:00:00Z" from becoming "2026-01-15" in EST
            const year = date.getUTCFullYear();
            const month = String(date.getUTCMonth() + 1).padStart(2, "0");
            const day = String(date.getUTCDate()).padStart(2, "0");
            return {
                date: `${year}-${month}-${day}`,
                time: "00:00", // All-day tasks always show midnight
            };
        }
        else {
            // For timed tasks, convert to local timezone
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, "0");
            const day = String(date.getDate()).padStart(2, "0");
            const hours = String(date.getHours()).padStart(2, "0");
            const minutes = String(date.getMinutes()).padStart(2, "0");
            return {
                date: `${year}-${month}-${day}`,
                time: `${hours}:${minutes}`,
            };
        }
    }
    catch (e) {
        console.error("Date parsing error:", e, utcString);
        return { date: null, time: null };
    }
}
/**
 * Format a date relative to today (e.g., "Today", "Tomorrow", "2 days ago")
 * @param date - The date to format
 * @param task - Optional task object to check for all-day flag
 * @returns Human-readable relative date string
 */
function formatRelativeDate(date, task) {
    const isAllDay = task?.is_all_day || false;
    // For all-day tasks, compare dates in UTC to avoid timezone issues
    if (isAllDay) {
        const today = new Date();
        const todayUTC = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
        const targetUTC = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
        const diffTime = targetUTC - todayUTC;
        const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));
        if (diffDays === 0) {
            return "Today";
        }
        else if (diffDays === -1) {
            return "Yesterday";
        }
        else if (diffDays === 1) {
            return "Tomorrow";
        }
        else if (diffDays < -1) {
            return `${Math.abs(diffDays)} days ago`;
        }
        else {
            return `In ${diffDays} days`;
        }
    }
    // For timed tasks, use local time comparison
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const targetDate = new Date(date);
    targetDate.setHours(0, 0, 0, 0);
    const diffTime = targetDate.getTime() - today.getTime();
    const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays === 0) {
        const originalDate = new Date(date);
        return originalDate.toLocaleTimeString(undefined, {
            hour: "numeric",
            minute: "2-digit",
        });
    }
    else if (diffDays === -1) {
        return "Yesterday";
    }
    else if (diffDays === 1) {
        return "Tomorrow";
    }
    else if (diffDays < -1) {
        return `${Math.abs(diffDays)} days ago`;
    }
    else {
        return `In ${diffDays} days`;
    }
}
/**
 * Check if a task is overdue
 * @param task - Task to check
 * @returns True if task is overdue and not completed
 */
function isOverdue(task) {
    if (!task.due || task.status === "completed") {
        return false;
    }
    const isAllDay = task.is_all_day || false;
    const dueDate = new Date(task.due);
    if (isAllDay) {
        // For all-day tasks, compare dates in UTC to avoid timezone issues
        const today = new Date();
        const todayUTC = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
        const dueUTC = Date.UTC(dueDate.getUTCFullYear(), dueDate.getUTCMonth(), dueDate.getUTCDate());
        return dueUTC < todayUTC;
    }
    else {
        // For timed tasks, use local time comparison
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        dueDate.setHours(0, 0, 0, 0);
        return dueDate < today;
    }
}
/**
 * Check if two dates are the same day
 * @param date1 - First date
 * @param date2 - Second date
 * @returns True if dates are on the same day
 */
function isSameDay(date1, date2) {
    return (date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate());
}
/**
 * Create an ISO string from date and optional time
 * For all-day tasks, creates midnight UTC to avoid timezone issues
 * For timed tasks, uses local timezone
 * @param dateStr - Date string in YYYY-MM-DD format
 * @param timeStr - Optional time string in HH:MM or HH:MM:SS format
 * @param isAllDay - Whether this is an all-day task
 * @returns ISO 8601 string in UTC (e.g., "2026-01-16T00:00:00Z")
 */
function createISOString(dateStr, timeStr, isAllDay) {
    // Parse date components
    const [year, month, day] = dateStr.split("-").map(Number);
    if (isAllDay) {
        // For all-day tasks, create date at midnight UTC
        const date = new Date(Date.UTC(year, month - 1, day, 0, 0, 0, 0));
        return date.toISOString();
    }
    else {
        // For timed tasks, use local timezone
        const timeComponents = timeStr ? timeStr.split(":").map(Number) : [0, 0, 0];
        const [hours, minutes, seconds = 0] = timeComponents;
        const date = new Date(year, month - 1, day, hours, minutes, seconds);
        return date.toISOString();
    }
}

// ============================================================================
// Task Utility Functions for ChoreBot Cards
// ============================================================================
/**
 * Filter tasks for today-focused view
 * Shows: incomplete tasks due today, incomplete overdue tasks, tasks completed today, and dateless tasks
 * @param entity - Home Assistant entity containing tasks
 * @param showDatelessTasks - Whether to show tasks without due dates
 * @param filterSectionId - Optional section ID to filter by
 * @returns Filtered array of tasks
 */
function filterTodayTasks(entity, showDatelessTasks = true, filterSectionId) {
    const tasks = entity.attributes.chorebot_tasks || [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    // Apply date/status filtering
    let filteredTasks = tasks.filter((task) => {
        const hasDueDate = !!task.due;
        const isCompleted = task.status === "completed";
        // Handle dateless tasks
        if (!hasDueDate) {
            return showDatelessTasks;
        }
        const dueDate = new Date(task.due);
        dueDate.setHours(0, 0, 0, 0);
        const isToday = isSameDay(dueDate, today);
        const isOverdue = dueDate < today;
        // If task is completed, check if it was completed today
        if (isCompleted) {
            if (task.last_completed) {
                const completedDate = new Date(task.last_completed);
                if (isSameDay(completedDate, new Date())) {
                    return true; // Show if completed today (regardless of due date)
                }
                // If completed but not today, hide it
                return false;
            }
        }
        // Show incomplete tasks due today
        if (isToday) {
            return true;
        }
        // Show incomplete overdue tasks
        if (isOverdue && !isCompleted) {
            return true;
        }
        return false;
    });
    // Apply section filtering if configured
    if (filterSectionId) {
        // Resolve section name to section ID
        const sections = entity.attributes.chorebot_sections || [];
        const filterValue = filterSectionId;
        // Try to find section by name first
        const sectionByName = sections.find((section) => section.name === filterValue);
        // Use the section ID if found by name, otherwise use the filter value as-is (for backward compatibility)
        const sectionIdToMatch = sectionByName ? sectionByName.id : filterValue;
        filteredTasks = filteredTasks.filter((task) => task.section_id === sectionIdToMatch);
    }
    return filteredTasks;
}
/**
 * Calculate progress (completed vs total tasks)
 * @param tasks - Array of tasks to calculate progress for
 * @returns Object with completed and total counts
 */
function calculateProgress(tasks) {
    const completed = tasks.filter((t) => t.status === "completed").length;
    return {
        completed,
        total: tasks.length,
    };
}
/**
 * Calculate progress for only tasks with due dates (excludes dateless tasks)
 * @param tasks - Array of tasks to calculate progress for
 * @returns Object with completed and total counts for dated tasks only
 */
function calculateDatedTasksProgress(tasks) {
    // Filter to only tasks with due dates
    const datedTasks = tasks.filter((t) => !!t.due);
    const completed = datedTasks.filter((t) => t.status === "completed").length;
    return {
        completed,
        total: datedTasks.length,
    };
}
/**
 * Group tasks by their tags
 * Tasks with multiple tags will appear in each tag group
 * @param tasks - Array of tasks to group
 * @param untaggedHeader - Header text for tasks without tags
 * @returns Map of tag name to array of tasks
 */
function groupTasksByTag(tasks, untaggedHeader = "Untagged") {
    const groups = new Map();
    for (const task of tasks) {
        const tags = task.tags || [];
        if (tags.length === 0) {
            // Task has no tags - add to untagged group
            if (!groups.has(untaggedHeader)) {
                groups.set(untaggedHeader, []);
            }
            groups.get(untaggedHeader).push(task);
        }
        else {
            // Task has tags - add to each tag group
            for (const tag of tags) {
                if (!groups.has(tag)) {
                    groups.set(tag, []);
                }
                groups.get(tag).push(task);
            }
        }
    }
    return groups;
}
/**
 * Group tasks by person assignment
 * Returns a Map where keys are person IDs and values are arrays of tasks assigned to that person
 * @param tasks - Array of tasks to group
 * @param personIds - Ordered array of person entity IDs (maintains display order)
 * @returns Map of person ID to task array (initialized for all provided persons)
 */
function groupTasksByPerson(tasks, personIds) {
    const groups = new Map();
    // Initialize empty arrays for each configured person (maintains order)
    for (const personId of personIds) {
        groups.set(personId, []);
    }
    // Group tasks by computed_person_id
    for (const task of tasks) {
        const personId = task.computed_person_id;
        if (personId && groups.has(personId)) {
            groups.get(personId).push(task);
        }
    }
    // Sort each person's tasks: overdue first, then today, then dateless
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    for (const personTasks of groups.values()) {
        personTasks.sort((a, b) => {
            const aHasDue = !!a.due;
            const bHasDue = !!b.due;
            // Dateless tasks go last
            if (!aHasDue && bHasDue)
                return 1;
            if (aHasDue && !bHasDue)
                return -1;
            if (!aHasDue && !bHasDue)
                return 0;
            // Both have due dates - check overdue status
            const aDueDate = new Date(a.due);
            const bDueDate = new Date(b.due);
            aDueDate.setHours(0, 0, 0, 0);
            bDueDate.setHours(0, 0, 0, 0);
            const aIsOverdue = aDueDate < today;
            const bIsOverdue = bDueDate < today;
            // Overdue tasks come first
            if (aIsOverdue && !bIsOverdue)
                return -1;
            if (!aIsOverdue && bIsOverdue)
                return 1;
            // Both overdue or both not overdue - sort by due date (earliest first)
            return aDueDate.getTime() - bDueDate.getTime();
        });
    }
    return groups;
}
/**
 * Sort groups by custom order (works with GroupState[])
 * @param groups - Array of GroupState objects
 * @param tagOrder - Optional array specifying desired tag order
 * @param untaggedHeader - Header text for untagged tasks (placed last if not in tagOrder)
 * @param upcomingHeader - Header text for upcoming tasks (always placed last)
 * @returns Sorted array of GroupState objects
 */
function sortGroups(groups, tagOrder, untaggedHeader = "Untagged", upcomingHeader = "Upcoming") {
    return groups.sort((a, b) => {
        // Always put Upcoming at the end
        if (a.name === upcomingHeader)
            return 1;
        if (b.name === upcomingHeader)
            return -1;
        if (!tagOrder || tagOrder.length === 0) {
            // No custom order - sort alphabetically, with untagged last
            if (a.name === untaggedHeader)
                return 1;
            if (b.name === untaggedHeader)
                return -1;
            return a.name.localeCompare(b.name);
        }
        // Sort by custom order
        const indexA = tagOrder.indexOf(a.name);
        const indexB = tagOrder.indexOf(b.name);
        // If both are in the order list, sort by their position
        if (indexA !== -1 && indexB !== -1) {
            return indexA - indexB;
        }
        // If only one is in the order list, it comes first
        if (indexA !== -1)
            return -1;
        if (indexB !== -1)
            return 1;
        // If neither is in the order list, put untagged last and sort others alphabetically
        if (a.name === untaggedHeader)
            return 1;
        if (b.name === untaggedHeader)
            return -1;
        return a.name.localeCompare(b.name);
    });
}
/**
 * Filter tasks assigned to a specific person across all ChoreBot lists
 * Uses pre-computed person_id from backend (eliminates manual section/list lookups)
 * @param entities - All Home Assistant entities (will filter to todo.chorebot_*)
 * @param personEntityId - Person entity ID (e.g., "person.kyle")
 * @param includeDateless - Whether to include dateless tasks (default: false)
 * @returns Array of tasks assigned to this person (already filtered by today/overdue)
 */
function filterTasksByPerson(entities, personEntityId, includeDateless = false) {
    const allPersonTasks = [];
    // Filter to only ChoreBot todo entities
    const choreботEntities = entities.filter((e) => e.entity_id.startsWith("todo.chorebot_"));
    for (const entity of choreботEntities) {
        // Get today's tasks from this entity
        const todayTasks = filterTodayTasks(entity, includeDateless);
        // Filter to tasks assigned to this person using pre-computed person_id
        // Backend resolves: section.person_id → list.person_id → null
        const personTasks = todayTasks.filter((task) => task.computed_person_id === personEntityId);
        allPersonTasks.push(...personTasks);
    }
    return allPersonTasks;
}
/**
 * Filter and group tasks in a single pass for efficiency
 * Returns array of GroupState objects including tag groups and optional Upcoming group
 * @param entity - Home Assistant entity containing tasks
 * @param showDatelessTasks - Whether to show tasks without due dates
 * @param showFutureTasks - Whether to include future tasks in Upcoming group
 * @param untaggedHeader - Header text for tasks without tags
 * @param upcomingHeader - Header text for future tasks group
 * @param filterSectionId - Optional section ID to filter by
 * @param filterPersonId - Optional person entity ID to filter by
 * @returns Array of GroupState objects with tasks grouped
 */
function filterAndGroupTasks(entity, showDatelessTasks = true, showFutureTasks = false, untaggedHeader = "Untagged", upcomingHeader = "Upcoming", filterSectionId, filterPersonId) {
    const allTasks = entity.attributes.chorebot_tasks || [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const endOfToday = new Date(today);
    endOfToday.setHours(23, 59, 59, 999);
    const tagGroups = new Map();
    const futureTasks = [];
    // Resolve section filter once
    let sectionIdToMatch;
    if (filterSectionId) {
        const sections = entity.attributes.chorebot_sections || [];
        const sectionByName = sections.find((s) => s.name === filterSectionId);
        sectionIdToMatch = sectionByName ? sectionByName.id : filterSectionId;
    }
    // Single pass through all tasks
    for (const task of allTasks) {
        // Apply section filter first (if applicable)
        if (sectionIdToMatch) {
            if (task.section_id !== sectionIdToMatch) {
                continue; // Skip this task
            }
        }
        // Apply person filter (uses pre-computed person_id from backend)
        if (filterPersonId && task.computed_person_id !== filterPersonId) {
            continue; // Skip this task
        }
        const hasDueDate = !!task.due;
        const isCompleted = task.status === "completed";
        // Determine which group this task belongs to
        let isTodayTask = false;
        let isFutureTask = false;
        if (!hasDueDate) {
            // Dateless task
            isTodayTask = showDatelessTasks;
        }
        else if (task.due) {
            const dueDate = new Date(task.due);
            // Check if future task (after end of today)
            if (showFutureTasks && dueDate > endOfToday) {
                isFutureTask = true;
            }
            else {
                // Check if today task
                const dueDateOnly = new Date(dueDate);
                dueDateOnly.setHours(0, 0, 0, 0);
                const isToday = isSameDay(dueDateOnly, today);
                const isOverdue = dueDateOnly < today;
                if (isCompleted) {
                    if (task.last_completed) {
                        if (isSameDay(new Date(task.last_completed), new Date())) {
                            isTodayTask = true; // Show if completed today (regardless of due date)
                        }
                    }
                }
                else if (isToday || isOverdue) {
                    isTodayTask = true;
                }
            }
        }
        // Add to appropriate group
        if (isTodayTask) {
            // Add to tag groups
            const tags = task.tags || [];
            if (tags.length === 0) {
                if (!tagGroups.has(untaggedHeader)) {
                    tagGroups.set(untaggedHeader, []);
                }
                tagGroups.get(untaggedHeader).push(task);
            }
            else {
                for (const tag of tags) {
                    if (!tagGroups.has(tag)) {
                        tagGroups.set(tag, []);
                    }
                    tagGroups.get(tag).push(task);
                }
            }
        }
        else if (isFutureTask) {
            futureTasks.push(task);
        }
    }
    // Sort future tasks by due date (earliest first)
    futureTasks.sort((a, b) => {
        const dateA = new Date(a.due).getTime();
        const dateB = new Date(b.due).getTime();
        return dateA - dateB;
    });
    // Convert Map to GroupState array
    const groups = Array.from(tagGroups.entries()).map(([name, tasks]) => ({
        name,
        tasks,
        isCollapsed: false, // Default collapsed state (will be overridden by component)
    }));
    // Add Upcoming group if enabled and has tasks
    if (showFutureTasks && futureTasks.length > 0) {
        groups.push({
            name: upcomingHeader,
            tasks: futureTasks,
            isCollapsed: false, // Default collapsed state (will be overridden by component)
        });
    }
    return groups;
}

// ============================================================================
// Recurrence Rule (rrule) Utility Functions for ChoreBot Cards
// ============================================================================
/**
 * Parse an rrule string into component parts
 * @param rrule - rrule string (e.g., "FREQ=DAILY;INTERVAL=1")
 * @returns Parsed rrule object or null if invalid
 */
function parseRrule(rrule) {
    if (!rrule) {
        return null;
    }
    try {
        const parts = rrule.split(";");
        let frequency = null;
        let interval = 1;
        const byweekday = [];
        let bymonthday = null;
        for (const part of parts) {
            const [key, value] = part.split("=");
            if (key === "FREQ") {
                if (value === "DAILY" || value === "WEEKLY" || value === "MONTHLY") {
                    frequency = value;
                }
            }
            else if (key === "INTERVAL") {
                const parsedInterval = parseInt(value, 10);
                if (!isNaN(parsedInterval) && parsedInterval > 0) {
                    interval = parsedInterval;
                }
            }
            else if (key === "BYDAY") {
                byweekday.push(...value.split(","));
            }
            else if (key === "BYMONTHDAY") {
                const parsedDay = parseInt(value, 10);
                if (!isNaN(parsedDay) && parsedDay >= 1 && parsedDay <= 31) {
                    bymonthday = parsedDay;
                }
            }
        }
        if (!frequency) {
            return null;
        }
        return { frequency, interval, byweekday, bymonthday };
    }
    catch (e) {
        console.error("rrule parsing error:", e, rrule);
        return null;
    }
}
/**
 * Build an rrule string from editing task data
 * @param editingTask - Task being edited with recurrence fields
 * @returns rrule string or null if recurrence disabled
 */
function buildRrule(editingTask) {
    if (!editingTask || !editingTask.has_recurrence) {
        return null;
    }
    const { recurrence_frequency, recurrence_interval, recurrence_byweekday, recurrence_bymonthday, } = editingTask;
    if (!recurrence_frequency) {
        return null;
    }
    const interval = recurrence_interval || 1;
    let rrule = `FREQ=${recurrence_frequency};INTERVAL=${interval}`;
    if (recurrence_frequency === "WEEKLY" &&
        recurrence_byweekday &&
        recurrence_byweekday.length > 0) {
        rrule += `;BYDAY=${recurrence_byweekday.join(",").toUpperCase()}`;
    }
    else if (recurrence_frequency === "MONTHLY" && recurrence_bymonthday) {
        const day = Math.max(1, Math.min(31, recurrence_bymonthday));
        rrule += `;BYMONTHDAY=${day}`;
    }
    return rrule;
}

// ============================================================================
// Points Display Utilities for ChoreBot Cards
// ============================================================================
/**
 * Get points display configuration from sensor.
 * Returns { icon, text } where icon is MDI icon string (e.g., "mdi:star")
 * and text is display term (e.g., "stars", "coins", "points").
 *
 * Falls back to { icon: "", text: "points" } if sensor is missing or
 * attribute is undefined.
 *
 * Respects empty strings: If backend sends text="" with an icon, that's
 * intentional (icon-only mode) and won't be overridden with "points".
 *
 * @param hass - Home Assistant instance
 * @returns Object with icon and text properties
 */
function getPointsDisplayParts(hass) {
    const sensor = hass.states["sensor.chorebot_points"];
    const config = sensor?.attributes.points_display;
    // If sensor or attribute missing entirely, use defaults
    if (!config) {
        return {
            icon: "",
            text: "points",
        };
    }
    // Otherwise respect exact values from backend (including empty strings)
    return {
        icon: config.icon ?? "",
        text: config.text ?? "points",
    };
}
/**
 * Get capitalized points term for use in field labels.
 * Example: "Stars", "Coins", "Points"
 *
 * Falls back to "Points" if sensor is missing or attribute is undefined.
 * Returns empty string if text is intentionally empty (icon-only mode).
 *
 * @param hass - Home Assistant instance
 * @returns Capitalized term string or empty string
 */
function getPointsTermCapitalized(hass) {
    const parts = getPointsDisplayParts(hass);
    if (!parts.text) {
        return "";
    }
    return parts.text.charAt(0).toUpperCase() + parts.text.slice(1);
}

// ============================================================================
// Dialog Utility Functions for ChoreBot Cards
// ============================================================================
/**
 * Prepare a task for editing by flattening custom fields and parsing dates/rrule
 * @param task - Task to prepare for editing
 * @param templates - Optional array of templates (for looking up recurring task templates)
 * @returns EditingTask with flattened fields
 */
function prepareTaskForEditing(task, templates) {
    const flatTask = {
        ...task,
        is_all_day: task.is_all_day || false,
        tags: task.tags || [],
        section_id: task.section_id,
        points_value: task.points_value || 0,
        streak_bonus_points: task.streak_bonus_points || 0,
        streak_bonus_interval: task.streak_bonus_interval || 0,
    };
    // Extract due date/time if present
    if (task.due) {
        const isAllDay = task.is_all_day || false;
        const parsed = parseUTCToLocal(task.due, isAllDay);
        flatTask.due_date = parsed.date ?? undefined;
        flatTask.due_time = parsed.time ?? undefined;
        flatTask.has_due_date = true;
    }
    else {
        flatTask.has_due_date = false;
    }
    // For recurring instances, look up the template to get rrule and bonus fields
    let rruleToUse = task.rrule;
    if (task.parent_uid && templates) {
        const template = templates.find((t) => t.uid === task.parent_uid);
        if (template) {
            rruleToUse = template.rrule;
            // Also use template's bonus fields if instance doesn't have them
            flatTask.streak_bonus_points = template.streak_bonus_points || 0;
            flatTask.streak_bonus_interval = template.streak_bonus_interval || 0;
        }
    }
    // Parse existing rrule if present
    const parsedRrule = parseRrule(rruleToUse);
    if (parsedRrule) {
        flatTask.has_recurrence = true;
        flatTask.recurrence_frequency = parsedRrule.frequency;
        flatTask.recurrence_interval = parsedRrule.interval;
        flatTask.recurrence_byweekday = parsedRrule.byweekday;
        flatTask.recurrence_bymonthday = parsedRrule.bymonthday || 1;
    }
    else {
        flatTask.has_recurrence = false;
        flatTask.recurrence_frequency = "DAILY";
        flatTask.recurrence_interval = 1;
        flatTask.recurrence_byweekday = [];
        flatTask.recurrence_bymonthday = 1;
    }
    return flatTask;
}
/**
 * Build the schema for the edit dialog form
 * @param task - Task being edited
 * @param sections - Available sections from entity
 * @param availableTags - Available tags from entity
 * @returns Array of form schema objects
 */
function buildEditDialogSchema(task, sections, availableTags) {
    const hasDueDate = task.has_due_date !== undefined ? task.has_due_date : !!task.due;
    const isAllDay = task.is_all_day !== undefined ? task.is_all_day : false;
    const schema = [
        {
            name: "summary",
            required: true,
            selector: { text: {} },
        },
        {
            name: "description",
            selector: { text: { multiline: true } },
        },
    ];
    // Add section dropdown if sections are available
    if (sections.length > 0) {
        schema.push({
            name: "section_id",
            selector: {
                select: {
                    options: sections
                        .sort((a, b) => b.sort_order - a.sort_order)
                        .map((section) => ({
                        label: section.name,
                        value: section.id,
                    })),
                },
            },
        });
    }
    // Add tags multi-select
    schema.push({
        name: "tags",
        selector: {
            select: {
                multiple: true,
                custom_value: true,
                options: availableTags.map((tag) => ({
                    label: tag,
                    value: tag,
                })),
            },
        },
    });
    schema.push({
        name: "has_due_date",
        selector: { boolean: {} },
    });
    if (hasDueDate) {
        schema.push({
            name: "due_date",
            selector: { date: {} },
        });
        if (!isAllDay) {
            schema.push({
                name: "due_time",
                selector: { time: {} },
            });
        }
        schema.push({
            name: "is_all_day",
            selector: { boolean: {} },
        });
    }
    // Recurrence section - only show if task has a due date
    if (hasDueDate) {
        const hasRecurrence = task.has_recurrence !== undefined ? task.has_recurrence : false;
        const recurrenceFrequency = task.recurrence_frequency || "DAILY";
        // Add recurrence toggle
        schema.push({
            name: "has_recurrence",
            selector: { boolean: {} },
        });
        // If recurrence is enabled, add recurrence fields
        if (hasRecurrence) {
            schema.push({
                name: "recurrence_frequency",
                selector: {
                    select: {
                        options: [
                            { label: "Daily", value: "DAILY" },
                            { label: "Weekly", value: "WEEKLY" },
                            { label: "Monthly", value: "MONTHLY" },
                        ],
                    },
                },
            });
            schema.push({
                name: "recurrence_interval",
                selector: {
                    number: {
                        min: 1,
                        max: 999,
                        mode: "box",
                    },
                },
            });
            // Frequency-specific fields
            if (recurrenceFrequency === "WEEKLY") {
                schema.push({
                    name: "recurrence_byweekday",
                    selector: {
                        select: {
                            multiple: true,
                            options: [
                                { label: "Monday", value: "MO" },
                                { label: "Tuesday", value: "TU" },
                                { label: "Wednesday", value: "WE" },
                                { label: "Thursday", value: "TH" },
                                { label: "Friday", value: "FR" },
                                { label: "Saturday", value: "SA" },
                                { label: "Sunday", value: "SU" },
                            ],
                        },
                    },
                });
            }
            else if (recurrenceFrequency === "MONTHLY") {
                schema.push({
                    name: "recurrence_bymonthday",
                    selector: {
                        number: {
                            min: 1,
                            max: 31,
                            mode: "box",
                        },
                    },
                });
            }
        }
    }
    // Points section
    schema.push({
        name: "points_value",
        selector: {
            number: {
                min: 0,
                max: 10000,
                mode: "box",
            },
        },
    });
    // Streak bonus section (only for recurring tasks)
    if (hasDueDate && task.has_recurrence) {
        schema.push({
            name: "streak_bonus_points",
            selector: {
                number: {
                    min: 0,
                    max: 10000,
                    mode: "box",
                },
            },
        });
        schema.push({
            name: "streak_bonus_interval",
            selector: {
                number: {
                    min: 0,
                    max: 999,
                    mode: "box",
                },
            },
        });
    }
    return schema;
}
/**
 * Build the initial data object for the edit dialog form
 * @param task - Task being edited
 * @param sections - Available sections from entity
 * @returns Data object for form initialization
 */
function buildEditDialogData(task, sections) {
    const hasDueDate = task.has_due_date !== undefined ? task.has_due_date : !!task.due;
    const isAllDay = task.is_all_day !== undefined ? task.is_all_day : false;
    let dateValue = task.due_date || null;
    let timeValue = task.due_time || null;
    if (!dateValue && task.due) {
        const parsed = parseUTCToLocal(task.due, isAllDay);
        dateValue = parsed.date;
        timeValue = parsed.time;
    }
    return {
        summary: task.summary || "",
        has_due_date: hasDueDate,
        is_all_day: isAllDay,
        due_date: dateValue || null,
        due_time: timeValue || "00:00",
        description: task.description || "",
        section_id: task.section_id ||
            (sections.length > 0
                ? sections.sort((a, b) => b.sort_order - a.sort_order)[0].id
                : undefined),
        tags: task.tags || [],
        has_recurrence: hasDueDate ? task.has_recurrence || false : false,
        recurrence_frequency: task.recurrence_frequency || "DAILY",
        recurrence_interval: task.recurrence_interval || 1,
        recurrence_byweekday: task.recurrence_byweekday || [],
        recurrence_bymonthday: task.recurrence_bymonthday || 1,
        points_value: task.points_value || 0,
        streak_bonus_points: task.streak_bonus_points || 0,
        streak_bonus_interval: task.streak_bonus_interval || 0,
    };
}
/**
 * Get label text for form fields (factory function that accepts hass for dynamic labels)
 * @param hass - Home Assistant instance for dynamic points terminology
 * @returns Function that computes labels for form fields
 */
function getFieldLabels(hass) {
    const pointsTerm = getPointsTermCapitalized(hass) || "Points";
    return function computeLabel(schema) {
        const labels = {
            summary: "Task Name",
            has_due_date: "Has Due Date",
            is_all_day: "All Day",
            due_date: "Date",
            due_time: "Time",
            description: "Description",
            section_id: "Section",
            tags: "Tags",
            has_recurrence: "Recurring Task",
            recurrence_frequency: "Frequency",
            recurrence_interval: "Repeat Every",
            recurrence_byweekday: "Days of Week",
            recurrence_bymonthday: "Day of Month",
            points_value: `${pointsTerm} Value`,
            streak_bonus_points: `Streak Bonus ${pointsTerm}`,
            streak_bonus_interval: "Bonus Every X Days (0 = no bonus)",
        };
        return labels[schema.name] || schema.name;
    };
}
/**
 * Render the task dialog (for editing or creating tasks)
 * @param isOpen - Whether dialog is open
 * @param task - Task being edited/created
 * @param hass - Home Assistant instance
 * @param sections - Available sections
 * @param availableTags - Available tags from entity
 * @param saving - Whether save is in progress
 * @param onClose - Callback when dialog closes
 * @param onValueChanged - Callback when form values change
 * @param onSave - Callback when save is clicked
 * @param onDelete - Optional callback when delete is clicked
 * @param dialogTitle - Optional dialog title (defaults to "Edit Task")
 * @param showDelete - Whether to show delete button (defaults to true for existing tasks)
 * @returns Lit HTML template
 */
function renderTaskDialog(isOpen, task, hass, sections, availableTags, saving, onClose, onValueChanged, onSave, onDelete, dialogTitle = "Edit Task", showDelete = true) {
    if (!isOpen || !task) {
        return b ``;
    }
    const schema = buildEditDialogSchema(task, sections, availableTags);
    const data = buildEditDialogData(task, sections);
    const computeLabel = getFieldLabels(hass);
    return b `
    <ha-dialog open @closed=${onClose} .heading=${dialogTitle}>
      <ha-form
        .hass=${hass}
        .schema=${schema}
        .data=${data}
        .computeLabel=${computeLabel}
        @value-changed=${onValueChanged}
      ></ha-form>

      ${showDelete && onDelete && task?.uid
        ? b `
            <ha-button
              slot="secondaryAction"
              @click=${onDelete}
              .disabled=${saving}
              class="delete-button"
              dialogAction="delete"
            >
              Delete
            </ha-button>
          `
        : ""}
      
      <ha-button slot="secondaryAction" @click=${onClose} .disabled=${saving}>
        Cancel
      </ha-button>
      
      <ha-button slot="primaryAction" @click=${onSave} .disabled=${saving}>
        ${saving ? "Saving..." : "Save"}
      </ha-button>

      <style>
        ha-dialog {
          --mdc-dialog-min-width: min(500px, 90vw);
        }
        
        /* Position delete button on far left */
        mwc-button.delete-button,
        ha-button.delete-button {
          --mdc-theme-primary: var(--error-color, #db4437);
          --mdc-button-outline-color: var(--error-color, #db4437);
          --mdc-theme-on-primary: white;
          --wa-color-fill-loud: var(--error-color, #db4437);
          --wa-color-neutral-fill-loud: var(--error-color, #db4437);
          background-color: var(--error-color, #db4437);
          color: white;
          position: absolute;
          left: 16px;
        }
      </style>
    </ha-dialog>
  `;
}

// ============================================================================
// Color Utilities for ChoreBot Cards
// ============================================================================
/**
 * Adjust color lightness in HSL color space
 * Handles hex, rgb, rgba, and CSS variable formats
 *
 * @param color - Base color (hex, rgb, or CSS variable like var(--primary-color))
 * @param percent - Percentage to adjust (-100 to 100, negative = darker, positive = lighter)
 * @returns Adjusted color in hex format without # prefix (for canvas-confetti compatibility)
 */
function adjustColorLightness(color, percent) {
    // For CSS variables, resolve the computed value
    if (color.startsWith("var(")) {
        const resolvedColor = getComputedStyle(document.documentElement).getPropertyValue(color.slice(4, -1).trim());
        if (resolvedColor) {
            color = resolvedColor.trim();
        }
        else {
            // Fallback if variable can't be resolved
            return color;
        }
    }
    // Convert hex to rgb
    let r, g, b;
    if (color.startsWith("#")) {
        const hex = color.replace("#", "");
        r = parseInt(hex.substring(0, 2), 16);
        g = parseInt(hex.substring(2, 4), 16);
        b = parseInt(hex.substring(4, 6), 16);
    }
    else if (color.startsWith("rgb")) {
        const match = color.match(/\d+/g);
        if (!match)
            return color;
        [r, g, b] = match.map(Number);
    }
    else {
        return color;
    }
    // Convert RGB to HSL
    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0, s = 0, l = (max + min) / 2;
    if (max !== min) {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
                break;
            case g:
                h = ((b - r) / d + 2) / 6;
                break;
            case b:
                h = ((r - g) / d + 4) / 6;
                break;
        }
    }
    // Adjust lightness
    if (percent > 0) {
        // Lighten: increase lightness but cap to avoid pure white
        l = Math.max(0, Math.min(0.95, l + (percent / 100) * (1 - l)));
    }
    else {
        // Darken: decrease lightness proportionally
        l = Math.max(0.05, l + (percent / 100) * l);
    }
    // Convert HSL back to RGB
    const hue2rgb = (p, q, t) => {
        if (t < 0)
            t += 1;
        if (t > 1)
            t -= 1;
        if (t < 1 / 6)
            return p + (q - p) * 6 * t;
        if (t < 1 / 2)
            return q;
        if (t < 2 / 3)
            return p + (q - p) * (2 / 3 - t) * 6;
        return p;
    };
    let r2, g2, b2;
    if (s === 0) {
        r2 = g2 = b2 = l;
    }
    else {
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r2 = hue2rgb(p, q, h + 1 / 3);
        g2 = hue2rgb(p, q, h);
        b2 = hue2rgb(p, q, h - 1 / 3);
    }
    // Convert to hex format without # prefix (canvas-confetti expects this format)
    const toHex = (c) => {
        const hex = Math.round(c * 255).toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    };
    return `${toHex(r2)}${toHex(g2)}${toHex(b2)}`.toUpperCase();
}
/**
 * Convert any color format to hex without # prefix
 * Used for canvas-confetti which expects hex colors without the # prefix
 *
 * @param color - Color in any format (hex, rgb, or CSS variable)
 * @returns Hex color without # prefix (format: 'RRGGBB')
 */
function toHexWithoutPrefix(color) {
    // If already hex with #, remove it
    if (color.startsWith("#")) {
        return color.substring(1).toUpperCase();
    }
    // If it's already a hex without #, return as-is
    if (/^[0-9A-Fa-f]{6}$/.test(color)) {
        return color.toUpperCase();
    }
    // Otherwise it's rgb() or a CSS variable, adjustColorLightness will handle it
    // and return hex without prefix
    return adjustColorLightness(color, 0);
}
/**
 * Calculate all 5 color shades from a base color
 *
 * @param baseColor - Base color (hex, rgb, or CSS variable)
 * @returns Object with 5 color shades in hex format without # prefix
 */
function calculateColorShades(baseColor) {
    return {
        lighter: adjustColorLightness(baseColor, 30),
        light: adjustColorLightness(baseColor, 15),
        base: toHexWithoutPrefix(baseColor),
        dark: adjustColorLightness(baseColor, -15),
        darker: adjustColorLightness(baseColor, -30),
    };
}
/**
 * Resolve accent color with precedence: config > person profile > theme default
 * This ensures consistent color inheritance across all ChoreBot cards
 *
 * @param hass - Home Assistant instance
 * @param configAccentColor - Optional accent color from card config
 * @param personEntityId - Optional person entity ID to check for profile color
 * @returns Resolved accent color (hex, rgb, or CSS variable)
 */
function resolveAccentColor(hass, configAccentColor, personEntityId) {
    // Precedence: Manual config > Person profile > Theme default
    let baseColor = "var(--primary-color)"; // Default fallback
    // Check for centralized person color from sensor
    if (personEntityId) {
        const sensor = hass.states["sensor.chorebot_points"];
        const people = sensor?.attributes.people || {};
        const personProfile = people[personEntityId];
        if (personProfile?.accent_color) {
            baseColor = personProfile.accent_color;
        }
    }
    // Manual config overrides everything
    if (configAccentColor) {
        baseColor = configAccentColor;
    }
    return baseColor;
}

// canvas-confetti v1.9.4 built on 2025-10-25T05:14:56.640Z
var module$1 = {};

// source content
/* globals Map */

(function main(global, module, isWorker, workerSize) {
  var canUseWorker = !!(
    global.Worker &&
    global.Blob &&
    global.Promise &&
    global.OffscreenCanvas &&
    global.OffscreenCanvasRenderingContext2D &&
    global.HTMLCanvasElement &&
    global.HTMLCanvasElement.prototype.transferControlToOffscreen &&
    global.URL &&
    global.URL.createObjectURL);

  var canUsePaths = typeof Path2D === 'function' && typeof DOMMatrix === 'function';
  var canDrawBitmap = (function () {
    // this mostly supports ssr
    if (!global.OffscreenCanvas) {
      return false;
    }

    try {
      var canvas = new OffscreenCanvas(1, 1);
      var ctx = canvas.getContext('2d');
      ctx.fillRect(0, 0, 1, 1);
      var bitmap = canvas.transferToImageBitmap();
      ctx.createPattern(bitmap, 'no-repeat');
    } catch (e) {
      return false;
    }

    return true;
  })();

  function noop() {}

  // create a promise if it exists, otherwise, just
  // call the function directly
  function promise(func) {
    var ModulePromise = module.exports.Promise;
    var Prom = ModulePromise !== void 0 ? ModulePromise : global.Promise;

    if (typeof Prom === 'function') {
      return new Prom(func);
    }

    func(noop, noop);

    return null;
  }

  var bitmapMapper = (function (skipTransform, map) {
    // see https://github.com/catdad/canvas-confetti/issues/209
    // creating canvases is actually pretty expensive, so we should create a
    // 1:1 map for bitmap:canvas, so that we can animate the confetti in
    // a performant manner, but also not store them forever so that we don't
    // have a memory leak
    return {
      transform: function(bitmap) {
        if (skipTransform) {
          return bitmap;
        }

        if (map.has(bitmap)) {
          return map.get(bitmap);
        }

        var canvas = new OffscreenCanvas(bitmap.width, bitmap.height);
        var ctx = canvas.getContext('2d');
        ctx.drawImage(bitmap, 0, 0);

        map.set(bitmap, canvas);

        return canvas;
      },
      clear: function () {
        map.clear();
      }
    };
  })(canDrawBitmap, new Map());

  var raf = (function () {
    var TIME = Math.floor(1000 / 60);
    var frame, cancel;
    var frames = {};
    var lastFrameTime = 0;

    if (typeof requestAnimationFrame === 'function' && typeof cancelAnimationFrame === 'function') {
      frame = function (cb) {
        var id = Math.random();

        frames[id] = requestAnimationFrame(function onFrame(time) {
          if (lastFrameTime === time || lastFrameTime + TIME - 1 < time) {
            lastFrameTime = time;
            delete frames[id];

            cb();
          } else {
            frames[id] = requestAnimationFrame(onFrame);
          }
        });

        return id;
      };
      cancel = function (id) {
        if (frames[id]) {
          cancelAnimationFrame(frames[id]);
        }
      };
    } else {
      frame = function (cb) {
        return setTimeout(cb, TIME);
      };
      cancel = function (timer) {
        return clearTimeout(timer);
      };
    }

    return { frame: frame, cancel: cancel };
  }());

  var getWorker = (function () {
    var worker;
    var prom;
    var resolves = {};

    function decorate(worker) {
      function execute(options, callback) {
        worker.postMessage({ options: options || {}, callback: callback });
      }
      worker.init = function initWorker(canvas) {
        var offscreen = canvas.transferControlToOffscreen();
        worker.postMessage({ canvas: offscreen }, [offscreen]);
      };

      worker.fire = function fireWorker(options, size, done) {
        if (prom) {
          execute(options, null);
          return prom;
        }

        var id = Math.random().toString(36).slice(2);

        prom = promise(function (resolve) {
          function workerDone(msg) {
            if (msg.data.callback !== id) {
              return;
            }

            delete resolves[id];
            worker.removeEventListener('message', workerDone);

            prom = null;

            bitmapMapper.clear();

            done();
            resolve();
          }

          worker.addEventListener('message', workerDone);
          execute(options, id);

          resolves[id] = workerDone.bind(null, { data: { callback: id }});
        });

        return prom;
      };

      worker.reset = function resetWorker() {
        worker.postMessage({ reset: true });

        for (var id in resolves) {
          resolves[id]();
          delete resolves[id];
        }
      };
    }

    return function () {
      if (worker) {
        return worker;
      }

      if (!isWorker && canUseWorker) {
        var code = [
          'var CONFETTI, SIZE = {}, module = {};',
          '(' + main.toString() + ')(this, module, true, SIZE);',
          'onmessage = function(msg) {',
          '  if (msg.data.options) {',
          '    CONFETTI(msg.data.options).then(function () {',
          '      if (msg.data.callback) {',
          '        postMessage({ callback: msg.data.callback });',
          '      }',
          '    });',
          '  } else if (msg.data.reset) {',
          '    CONFETTI && CONFETTI.reset();',
          '  } else if (msg.data.resize) {',
          '    SIZE.width = msg.data.resize.width;',
          '    SIZE.height = msg.data.resize.height;',
          '  } else if (msg.data.canvas) {',
          '    SIZE.width = msg.data.canvas.width;',
          '    SIZE.height = msg.data.canvas.height;',
          '    CONFETTI = module.exports.create(msg.data.canvas);',
          '  }',
          '}',
        ].join('\n');
        try {
          worker = new Worker(URL.createObjectURL(new Blob([code])));
        } catch (e) {
          // eslint-disable-next-line no-console
          typeof console !== 'undefined' && typeof console.warn === 'function' ? console.warn('🎊 Could not load worker', e) : null;

          return null;
        }

        decorate(worker);
      }

      return worker;
    };
  })();

  var defaults = {
    particleCount: 50,
    angle: 90,
    spread: 45,
    startVelocity: 45,
    decay: 0.9,
    gravity: 1,
    drift: 0,
    ticks: 200,
    x: 0.5,
    y: 0.5,
    shapes: ['square', 'circle'],
    zIndex: 100,
    colors: [
      '#26ccff',
      '#a25afd',
      '#ff5e7e',
      '#88ff5a',
      '#fcff42',
      '#ffa62d',
      '#ff36ff'
    ],
    // probably should be true, but back-compat
    disableForReducedMotion: false,
    scalar: 1
  };

  function convert(val, transform) {
    return transform ? transform(val) : val;
  }

  function isOk(val) {
    return !(val === null || val === undefined);
  }

  function prop(options, name, transform) {
    return convert(
      options && isOk(options[name]) ? options[name] : defaults[name],
      transform
    );
  }

  function onlyPositiveInt(number){
    return number < 0 ? 0 : Math.floor(number);
  }

  function randomInt(min, max) {
    // [min, max)
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function toDecimal(str) {
    return parseInt(str, 16);
  }

  function colorsToRgb(colors) {
    return colors.map(hexToRgb);
  }

  function hexToRgb(str) {
    var val = String(str).replace(/[^0-9a-f]/gi, '');

    if (val.length < 6) {
        val = val[0]+val[0]+val[1]+val[1]+val[2]+val[2];
    }

    return {
      r: toDecimal(val.substring(0,2)),
      g: toDecimal(val.substring(2,4)),
      b: toDecimal(val.substring(4,6))
    };
  }

  function getOrigin(options) {
    var origin = prop(options, 'origin', Object);
    origin.x = prop(origin, 'x', Number);
    origin.y = prop(origin, 'y', Number);

    return origin;
  }

  function setCanvasWindowSize(canvas) {
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
  }

  function setCanvasRectSize(canvas) {
    var rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
  }

  function getCanvas(zIndex) {
    var canvas = document.createElement('canvas');

    canvas.style.position = 'fixed';
    canvas.style.top = '0px';
    canvas.style.left = '0px';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = zIndex;

    return canvas;
  }

  function ellipse(context, x, y, radiusX, radiusY, rotation, startAngle, endAngle, antiClockwise) {
    context.save();
    context.translate(x, y);
    context.rotate(rotation);
    context.scale(radiusX, radiusY);
    context.arc(0, 0, 1, startAngle, endAngle, antiClockwise);
    context.restore();
  }

  function randomPhysics(opts) {
    var radAngle = opts.angle * (Math.PI / 180);
    var radSpread = opts.spread * (Math.PI / 180);

    return {
      x: opts.x,
      y: opts.y,
      wobble: Math.random() * 10,
      wobbleSpeed: Math.min(0.11, Math.random() * 0.1 + 0.05),
      velocity: (opts.startVelocity * 0.5) + (Math.random() * opts.startVelocity),
      angle2D: -radAngle + ((0.5 * radSpread) - (Math.random() * radSpread)),
      tiltAngle: (Math.random() * (0.75 - 0.25) + 0.25) * Math.PI,
      color: opts.color,
      shape: opts.shape,
      tick: 0,
      totalTicks: opts.ticks,
      decay: opts.decay,
      drift: opts.drift,
      random: Math.random() + 2,
      tiltSin: 0,
      tiltCos: 0,
      wobbleX: 0,
      wobbleY: 0,
      gravity: opts.gravity * 3,
      ovalScalar: 0.6,
      scalar: opts.scalar,
      flat: opts.flat
    };
  }

  function updateFetti(context, fetti) {
    fetti.x += Math.cos(fetti.angle2D) * fetti.velocity + fetti.drift;
    fetti.y += Math.sin(fetti.angle2D) * fetti.velocity + fetti.gravity;
    fetti.velocity *= fetti.decay;

    if (fetti.flat) {
      fetti.wobble = 0;
      fetti.wobbleX = fetti.x + (10 * fetti.scalar);
      fetti.wobbleY = fetti.y + (10 * fetti.scalar);

      fetti.tiltSin = 0;
      fetti.tiltCos = 0;
      fetti.random = 1;
    } else {
      fetti.wobble += fetti.wobbleSpeed;
      fetti.wobbleX = fetti.x + ((10 * fetti.scalar) * Math.cos(fetti.wobble));
      fetti.wobbleY = fetti.y + ((10 * fetti.scalar) * Math.sin(fetti.wobble));

      fetti.tiltAngle += 0.1;
      fetti.tiltSin = Math.sin(fetti.tiltAngle);
      fetti.tiltCos = Math.cos(fetti.tiltAngle);
      fetti.random = Math.random() + 2;
    }

    var progress = (fetti.tick++) / fetti.totalTicks;

    var x1 = fetti.x + (fetti.random * fetti.tiltCos);
    var y1 = fetti.y + (fetti.random * fetti.tiltSin);
    var x2 = fetti.wobbleX + (fetti.random * fetti.tiltCos);
    var y2 = fetti.wobbleY + (fetti.random * fetti.tiltSin);

    context.fillStyle = 'rgba(' + fetti.color.r + ', ' + fetti.color.g + ', ' + fetti.color.b + ', ' + (1 - progress) + ')';

    context.beginPath();

    if (canUsePaths && fetti.shape.type === 'path' && typeof fetti.shape.path === 'string' && Array.isArray(fetti.shape.matrix)) {
      context.fill(transformPath2D(
        fetti.shape.path,
        fetti.shape.matrix,
        fetti.x,
        fetti.y,
        Math.abs(x2 - x1) * 0.1,
        Math.abs(y2 - y1) * 0.1,
        Math.PI / 10 * fetti.wobble
      ));
    } else if (fetti.shape.type === 'bitmap') {
      var rotation = Math.PI / 10 * fetti.wobble;
      var scaleX = Math.abs(x2 - x1) * 0.1;
      var scaleY = Math.abs(y2 - y1) * 0.1;
      var width = fetti.shape.bitmap.width * fetti.scalar;
      var height = fetti.shape.bitmap.height * fetti.scalar;

      var matrix = new DOMMatrix([
        Math.cos(rotation) * scaleX,
        Math.sin(rotation) * scaleX,
        -Math.sin(rotation) * scaleY,
        Math.cos(rotation) * scaleY,
        fetti.x,
        fetti.y
      ]);

      // apply the transform matrix from the confetti shape
      matrix.multiplySelf(new DOMMatrix(fetti.shape.matrix));

      var pattern = context.createPattern(bitmapMapper.transform(fetti.shape.bitmap), 'no-repeat');
      pattern.setTransform(matrix);

      context.globalAlpha = (1 - progress);
      context.fillStyle = pattern;
      context.fillRect(
        fetti.x - (width / 2),
        fetti.y - (height / 2),
        width,
        height
      );
      context.globalAlpha = 1;
    } else if (fetti.shape === 'circle') {
      context.ellipse ?
        context.ellipse(fetti.x, fetti.y, Math.abs(x2 - x1) * fetti.ovalScalar, Math.abs(y2 - y1) * fetti.ovalScalar, Math.PI / 10 * fetti.wobble, 0, 2 * Math.PI) :
        ellipse(context, fetti.x, fetti.y, Math.abs(x2 - x1) * fetti.ovalScalar, Math.abs(y2 - y1) * fetti.ovalScalar, Math.PI / 10 * fetti.wobble, 0, 2 * Math.PI);
    } else if (fetti.shape === 'star') {
      var rot = Math.PI / 2 * 3;
      var innerRadius = 4 * fetti.scalar;
      var outerRadius = 8 * fetti.scalar;
      var x = fetti.x;
      var y = fetti.y;
      var spikes = 5;
      var step = Math.PI / spikes;

      while (spikes--) {
        x = fetti.x + Math.cos(rot) * outerRadius;
        y = fetti.y + Math.sin(rot) * outerRadius;
        context.lineTo(x, y);
        rot += step;

        x = fetti.x + Math.cos(rot) * innerRadius;
        y = fetti.y + Math.sin(rot) * innerRadius;
        context.lineTo(x, y);
        rot += step;
      }
    } else {
      context.moveTo(Math.floor(fetti.x), Math.floor(fetti.y));
      context.lineTo(Math.floor(fetti.wobbleX), Math.floor(y1));
      context.lineTo(Math.floor(x2), Math.floor(y2));
      context.lineTo(Math.floor(x1), Math.floor(fetti.wobbleY));
    }

    context.closePath();
    context.fill();

    return fetti.tick < fetti.totalTicks;
  }

  function animate(canvas, fettis, resizer, size, done) {
    var animatingFettis = fettis.slice();
    var context = canvas.getContext('2d');
    var animationFrame;
    var destroy;

    var prom = promise(function (resolve) {
      function onDone() {
        animationFrame = destroy = null;

        context.clearRect(0, 0, size.width, size.height);
        bitmapMapper.clear();

        done();
        resolve();
      }

      function update() {
        if (isWorker && !(size.width === workerSize.width && size.height === workerSize.height)) {
          size.width = canvas.width = workerSize.width;
          size.height = canvas.height = workerSize.height;
        }

        if (!size.width && !size.height) {
          resizer(canvas);
          size.width = canvas.width;
          size.height = canvas.height;
        }

        context.clearRect(0, 0, size.width, size.height);

        animatingFettis = animatingFettis.filter(function (fetti) {
          return updateFetti(context, fetti);
        });

        if (animatingFettis.length) {
          animationFrame = raf.frame(update);
        } else {
          onDone();
        }
      }

      animationFrame = raf.frame(update);
      destroy = onDone;
    });

    return {
      addFettis: function (fettis) {
        animatingFettis = animatingFettis.concat(fettis);

        return prom;
      },
      canvas: canvas,
      promise: prom,
      reset: function () {
        if (animationFrame) {
          raf.cancel(animationFrame);
        }

        if (destroy) {
          destroy();
        }
      }
    };
  }

  function confettiCannon(canvas, globalOpts) {
    var isLibCanvas = !canvas;
    var allowResize = !!prop(globalOpts || {}, 'resize');
    var hasResizeEventRegistered = false;
    var globalDisableForReducedMotion = prop(globalOpts, 'disableForReducedMotion', Boolean);
    var shouldUseWorker = canUseWorker && !!prop(globalOpts || {}, 'useWorker');
    var worker = shouldUseWorker ? getWorker() : null;
    var resizer = isLibCanvas ? setCanvasWindowSize : setCanvasRectSize;
    var initialized = (canvas && worker) ? !!canvas.__confetti_initialized : false;
    var preferLessMotion = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion)').matches;
    var animationObj;

    function fireLocal(options, size, done) {
      var particleCount = prop(options, 'particleCount', onlyPositiveInt);
      var angle = prop(options, 'angle', Number);
      var spread = prop(options, 'spread', Number);
      var startVelocity = prop(options, 'startVelocity', Number);
      var decay = prop(options, 'decay', Number);
      var gravity = prop(options, 'gravity', Number);
      var drift = prop(options, 'drift', Number);
      var colors = prop(options, 'colors', colorsToRgb);
      var ticks = prop(options, 'ticks', Number);
      var shapes = prop(options, 'shapes');
      var scalar = prop(options, 'scalar');
      var flat = !!prop(options, 'flat');
      var origin = getOrigin(options);

      var temp = particleCount;
      var fettis = [];

      var startX = canvas.width * origin.x;
      var startY = canvas.height * origin.y;

      while (temp--) {
        fettis.push(
          randomPhysics({
            x: startX,
            y: startY,
            angle: angle,
            spread: spread,
            startVelocity: startVelocity,
            color: colors[temp % colors.length],
            shape: shapes[randomInt(0, shapes.length)],
            ticks: ticks,
            decay: decay,
            gravity: gravity,
            drift: drift,
            scalar: scalar,
            flat: flat
          })
        );
      }

      // if we have a previous canvas already animating,
      // add to it
      if (animationObj) {
        return animationObj.addFettis(fettis);
      }

      animationObj = animate(canvas, fettis, resizer, size , done);

      return animationObj.promise;
    }

    function fire(options) {
      var disableForReducedMotion = globalDisableForReducedMotion || prop(options, 'disableForReducedMotion', Boolean);
      var zIndex = prop(options, 'zIndex', Number);

      if (disableForReducedMotion && preferLessMotion) {
        return promise(function (resolve) {
          resolve();
        });
      }

      if (isLibCanvas && animationObj) {
        // use existing canvas from in-progress animation
        canvas = animationObj.canvas;
      } else if (isLibCanvas && !canvas) {
        // create and initialize a new canvas
        canvas = getCanvas(zIndex);
        document.body.appendChild(canvas);
      }

      if (allowResize && !initialized) {
        // initialize the size of a user-supplied canvas
        resizer(canvas);
      }

      var size = {
        width: canvas.width,
        height: canvas.height
      };

      if (worker && !initialized) {
        worker.init(canvas);
      }

      initialized = true;

      if (worker) {
        canvas.__confetti_initialized = true;
      }

      function onResize() {
        if (worker) {
          // TODO this really shouldn't be immediate, because it is expensive
          var obj = {
            getBoundingClientRect: function () {
              if (!isLibCanvas) {
                return canvas.getBoundingClientRect();
              }
            }
          };

          resizer(obj);

          worker.postMessage({
            resize: {
              width: obj.width,
              height: obj.height
            }
          });
          return;
        }

        // don't actually query the size here, since this
        // can execute frequently and rapidly
        size.width = size.height = null;
      }

      function done() {
        animationObj = null;

        if (allowResize) {
          hasResizeEventRegistered = false;
          global.removeEventListener('resize', onResize);
        }

        if (isLibCanvas && canvas) {
          if (document.body.contains(canvas)) {
            document.body.removeChild(canvas);
          }
          canvas = null;
          initialized = false;
        }
      }

      if (allowResize && !hasResizeEventRegistered) {
        hasResizeEventRegistered = true;
        global.addEventListener('resize', onResize, false);
      }

      if (worker) {
        return worker.fire(options, size, done);
      }

      return fireLocal(options, size, done);
    }

    fire.reset = function () {
      if (worker) {
        worker.reset();
      }

      if (animationObj) {
        animationObj.reset();
      }
    };

    return fire;
  }

  // Make default export lazy to defer worker creation until called.
  var defaultFire;
  function getDefaultFire() {
    if (!defaultFire) {
      defaultFire = confettiCannon(null, { useWorker: true, resize: true });
    }
    return defaultFire;
  }

  function transformPath2D(pathString, pathMatrix, x, y, scaleX, scaleY, rotation) {
    var path2d = new Path2D(pathString);

    var t1 = new Path2D();
    t1.addPath(path2d, new DOMMatrix(pathMatrix));

    var t2 = new Path2D();
    // see https://developer.mozilla.org/en-US/docs/Web/API/DOMMatrix/DOMMatrix
    t2.addPath(t1, new DOMMatrix([
      Math.cos(rotation) * scaleX,
      Math.sin(rotation) * scaleX,
      -Math.sin(rotation) * scaleY,
      Math.cos(rotation) * scaleY,
      x,
      y
    ]));

    return t2;
  }

  function shapeFromPath(pathData) {
    if (!canUsePaths) {
      throw new Error('path confetti are not supported in this browser');
    }

    var path, matrix;

    if (typeof pathData === 'string') {
      path = pathData;
    } else {
      path = pathData.path;
      matrix = pathData.matrix;
    }

    var path2d = new Path2D(path);
    var tempCanvas = document.createElement('canvas');
    var tempCtx = tempCanvas.getContext('2d');

    if (!matrix) {
      // attempt to figure out the width of the path, up to 1000x1000
      var maxSize = 1000;
      var minX = maxSize;
      var minY = maxSize;
      var maxX = 0;
      var maxY = 0;
      var width, height;

      // do some line skipping... this is faster than checking
      // every pixel and will be mostly still correct
      for (var x = 0; x < maxSize; x += 2) {
        for (var y = 0; y < maxSize; y += 2) {
          if (tempCtx.isPointInPath(path2d, x, y, 'nonzero')) {
            minX = Math.min(minX, x);
            minY = Math.min(minY, y);
            maxX = Math.max(maxX, x);
            maxY = Math.max(maxY, y);
          }
        }
      }

      width = maxX - minX;
      height = maxY - minY;

      var maxDesiredSize = 10;
      var scale = Math.min(maxDesiredSize/width, maxDesiredSize/height);

      matrix = [
        scale, 0, 0, scale,
        -Math.round((width/2) + minX) * scale,
        -Math.round((height/2) + minY) * scale
      ];
    }

    return {
      type: 'path',
      path: path,
      matrix: matrix
    };
  }

  function shapeFromText(textData) {
    var text,
        scalar = 1,
        color = '#000000',
        // see https://nolanlawson.com/2022/04/08/the-struggle-of-using-native-emoji-on-the-web/
        fontFamily = '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';

    if (typeof textData === 'string') {
      text = textData;
    } else {
      text = textData.text;
      scalar = 'scalar' in textData ? textData.scalar : scalar;
      fontFamily = 'fontFamily' in textData ? textData.fontFamily : fontFamily;
      color = 'color' in textData ? textData.color : color;
    }

    // all other confetti are 10 pixels,
    // so this pixel size is the de-facto 100% scale confetti
    var fontSize = 10 * scalar;
    var font = '' + fontSize + 'px ' + fontFamily;

    var canvas = new OffscreenCanvas(fontSize, fontSize);
    var ctx = canvas.getContext('2d');

    ctx.font = font;
    var size = ctx.measureText(text);
    var width = Math.ceil(size.actualBoundingBoxRight + size.actualBoundingBoxLeft);
    var height = Math.ceil(size.actualBoundingBoxAscent + size.actualBoundingBoxDescent);

    var padding = 2;
    var x = size.actualBoundingBoxLeft + padding;
    var y = size.actualBoundingBoxAscent + padding;
    width += padding + padding;
    height += padding + padding;

    canvas = new OffscreenCanvas(width, height);
    ctx = canvas.getContext('2d');
    ctx.font = font;
    ctx.fillStyle = color;

    ctx.fillText(text, x, y);

    var scale = 1 / scalar;

    return {
      type: 'bitmap',
      // TODO these probably need to be transfered for workers
      bitmap: canvas.transferToImageBitmap(),
      matrix: [scale, 0, 0, scale, -width * scale / 2, -height * scale / 2]
    };
  }

  module.exports = function() {
    return getDefaultFire().apply(this, arguments);
  };
  module.exports.reset = function() {
    getDefaultFire().reset();
  };
  module.exports.create = confettiCannon;
  module.exports.shapeFromPath = shapeFromPath;
  module.exports.shapeFromText = shapeFromText;
}((function () {
  if (typeof window !== 'undefined') {
    return window;
  }

  if (typeof self !== 'undefined') {
    return self;
  }

  return this || {};
})(), module$1, false));

// end source content

var confetti = module$1.exports;
module$1.exports.create;

// ============================================================================
// Confetti Utility Functions for ChoreBot Cards
// ============================================================================
/**
 * Extract color variants (lighter and darker shades) from a base color
 * Returns array of 5 colors compatible with canvas-confetti
 *
 * @param baseColor - Base color (hex, rgb, or CSS variable)
 * @returns Array of 5 hex color strings without # prefix (format: 'RRGGBB')
 */
function extractColorVariants(baseColor) {
    const shades = calculateColorShades(baseColor);
    return [
        shades.lighter,
        shades.light,
        shades.base,
        shades.dark,
        shades.darker,
    ];
}
/**
 * Play a small burst of confetti from a specific origin point (task completion)
 * @param origin - Origin point {x: 0-1, y: 0-1} relative to viewport
 * @param colors - Array of color strings to use for confetti
 */
function playCompletionBurst(origin, colors) {
    confetti({
        particleCount: 30,
        spread: 70,
        startVelocity: 25,
        origin,
        colors,
        disableForReducedMotion: true,
    });
}
/**
 * Play fireworks effect from both sides (group completion)
 * @param colors - Array of color strings to use for fireworks
 * @param duration - Duration in milliseconds (default: 3000)
 */
function playFireworks(colors, duration = 3000) {
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }
    const interval = setInterval(function () {
        const timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) {
            return clearInterval(interval);
        }
        const particleCount = 50 * (timeLeft / duration);
        // Launch from left side
        confetti({
            ...defaults,
            particleCount,
            origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
            colors,
            disableForReducedMotion: true,
        });
        // Launch from right side
        confetti({
            ...defaults,
            particleCount,
            origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
            colors,
            disableForReducedMotion: true,
        });
    }, 250);
}
/**
 * Play star shower effect falling from top (all tasks complete)
 * @param colors - Array of color strings to use for stars
 * @param duration - Duration in milliseconds (default: 5000)
 */
function playStarShower(colors, duration = 5000) {
    const animationEnd = Date.now() + duration;
    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }
    (function frame() {
        const timeLeft = animationEnd - Date.now();
        const ticks = Math.max(200, 500 * (timeLeft / duration));
        confetti({
            particleCount: 1,
            startVelocity: 0,
            ticks: ticks,
            origin: {
                x: Math.random(),
                // Keep stars mostly at the top of the screen
                y: Math.random() * 0.3 - 0.1,
            },
            colors: colors,
            shapes: ["star"],
            gravity: randomInRange(1.2, 1.5), // Faster fall (increased from 0.4-0.6)
            scalar: randomInRange(1.2, 2.0), // Larger stars (increased from 0.4-1.0)
            drift: randomInRange(-0.4, 0.4),
            disableForReducedMotion: true,
        });
        if (timeLeft > 0) {
            requestAnimationFrame(frame);
        }
    })();
}
/**
 * Play floating points animation from a specific origin point (task completion with points)
 * Displays "+X" text that scales up and fades out
 * @param origin - Origin point in pixels {x, y} relative to viewport
 * @param totalPoints - Total points awarded (base + bonus)
 */
function playPointsAnimation(origin, totalPoints) {
    // Check for reduced motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
    }
    // Create DOM element
    const pointsEl = document.createElement("div");
    pointsEl.textContent = `+${totalPoints}`;
    // Apply all styles inline (cannot use component CSS since element is appended to body)
    // Use 'fixed' positioning so element stays relative to viewport (like confetti canvas)
    pointsEl.style.position = "fixed";
    pointsEl.style.left = `${origin.x - 20}px`;
    pointsEl.style.top = `${origin.y - 30}px`;
    pointsEl.style.fontSize = "28px";
    pointsEl.style.fontWeight = "bold";
    pointsEl.style.color = "white";
    pointsEl.style.textShadow = "2px 2px 4px rgba(0, 0, 0, 0.8)";
    pointsEl.style.pointerEvents = "none";
    pointsEl.style.zIndex = "9999";
    pointsEl.style.animation = "floatPoints 2s ease-out forwards";
    // Define keyframes animation dynamically if not already defined
    if (!document.getElementById("chorebot-points-animation-styles")) {
        const styleSheet = document.createElement("style");
        styleSheet.id = "chorebot-points-animation-styles";
        styleSheet.textContent = `
      @keyframes floatPoints {
        0% {
          transform: scale(0.5) translateY(0);
          opacity: 1;
        }
        50% {
          transform: scale(1.5) translateY(-30px);
          opacity: 1;
        }
        100% {
          transform: scale(1.5) translateY(-60px);
          opacity: 0;
        }
      }
    `;
        document.head.appendChild(styleSheet);
    }
    // Append to body
    document.body.appendChild(pointsEl);
    // Auto-remove after animation completes (2 seconds)
    setTimeout(() => {
        pointsEl.remove();
    }, 2000);
}

// ============================================================================
// Points Badge Rendering Utility
// ============================================================================
// Shared utility for rendering points badges with bonus detection
/**
 * Render a points badge for a task with automatic bonus detection
 * @param task - Task object to render badge for
 * @param templates - Array of recurring task templates (for bonus detection)
 * @param shades - Color shades for badge styling
 * @param hass - Home Assistant instance for getting points display config
 * @param showPoints - Whether to show points badges at all
 * @param textColor - Text color for badge (usually matches task text)
 * @returns TemplateResult for points badge or empty if no points
 */
function renderPointsBadge(task, templates, shades, hass, showPoints, textColor) {
    // Don't show if points disabled or task has no points
    if (!showPoints || !task.points_value) {
        return b ``;
    }
    // Get configured points display parts
    const parts = getPointsDisplayParts(hass);
    // Check if this is a recurring task with upcoming bonus
    if (task.parent_uid) {
        const template = templates.find((t) => t.uid === task.parent_uid);
        if (template &&
            template.streak_bonus_points &&
            template.streak_bonus_interval) {
            const nextStreak = template.streak_current + 1;
            if (nextStreak % template.streak_bonus_interval === 0) {
                // Next completion will award bonus!
                return b `<span
          class="points-badge bonus-pending"
          style="color: ${textColor};"
        >
          +${task.points_value} + ${template.streak_bonus_points}
          ${parts.icon ? b `<ha-icon icon="${parts.icon}"></ha-icon>` : ""}
          ${parts.text ? parts.text : ""}
        </span>`;
            }
        }
    }
    // Regular points badge (no bonus)
    return b `<span
    class="points-badge"
    style="background: #${shades
        .lighter}; color: ${textColor}; border: 1px solid ${textColor};"
  >
    +${task.points_value}
    ${parts.icon ? b `<ha-icon icon="${parts.icon}"></ha-icon>` : ""}
    ${parts.text ? parts.text : ""}
  </span>`;
}

// ============================================================================
// Task Detail Utility Functions for Expandable Task Tiles
// ============================================================================
/**
 * Format recurrence pattern into human-readable string
 * @param rrule - Recurrence rule string (e.g., "FREQ=DAILY;INTERVAL=1")
 * @returns Human-readable recurrence description
 */
function formatRecurrencePattern(rrule) {
    if (!rrule || rrule.trim() === "") {
        return "";
    }
    const parsed = parseRrule(rrule);
    if (!parsed || !parsed.frequency) {
        return "";
    }
    const { frequency, interval, byweekday, bymonthday } = parsed;
    // Helper: Convert 2-letter day codes to full names
    const dayNameMap = {
        MO: "Mon",
        TU: "Tue",
        WE: "Wed",
        TH: "Thu",
        FR: "Fri",
        SA: "Sat",
        SU: "Sun",
    };
    // Helper: Add ordinal suffix (1st, 2nd, 3rd, 4th, etc.)
    const getOrdinalSuffix = (day) => {
        if (day >= 11 && day <= 13)
            return `${day}th`;
        const lastDigit = day % 10;
        if (lastDigit === 1)
            return `${day}st`;
        if (lastDigit === 2)
            return `${day}nd`;
        if (lastDigit === 3)
            return `${day}rd`;
        return `${day}th`;
    };
    // Format based on frequency
    if (frequency === "DAILY") {
        return interval === 1 ? "Daily" : `Every ${interval} days`;
    }
    if (frequency === "WEEKLY") {
        if (byweekday.length > 0) {
            const dayNames = byweekday.map((d) => dayNameMap[d.toUpperCase()] || d);
            const daysStr = dayNames.join(", ");
            if (interval === 1) {
                return `Weekly on ${daysStr}`;
            }
            else {
                return `Every ${interval} weeks on ${daysStr}`;
            }
        }
        else {
            return interval === 1 ? "Weekly" : `Every ${interval} weeks`;
        }
    }
    if (frequency === "MONTHLY") {
        if (bymonthday !== null) {
            const dayStr = getOrdinalSuffix(bymonthday);
            return interval === 1
                ? `Monthly on ${dayStr}`
                : `Every ${interval} months on ${dayStr}`;
        }
        else {
            return interval === 1 ? "Monthly" : `Every ${interval} months`;
        }
    }
    // Fallback for unknown patterns
    return "";
}
/**
 * Format full date and time in user-friendly format
 * @param isoString - ISO 8601 date string
 * @param isAllDay - Whether this is an all-day task
 * @returns Formatted date/time string
 */
function formatFullDateTime(isoString, isAllDay = false) {
    if (!isoString || isoString.trim() === "") {
        return "";
    }
    try {
        const date = new Date(isoString);
        if (isNaN(date.getTime())) {
            return "";
        }
        // Format options for date
        const dateOptions = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        };
        // Format options for time (12-hour format)
        const timeOptions = {
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
        };
        if (isAllDay) {
            // All-day: "Monday, January 19, 2026"
            return date.toLocaleDateString(undefined, dateOptions);
        }
        else {
            // Timed: "Monday, January 19, 2026 at 3:00 PM"
            const datePart = date.toLocaleDateString(undefined, dateOptions);
            const timePart = date.toLocaleTimeString(undefined, timeOptions);
            return `${datePart} at ${timePart}`;
        }
    }
    catch (e) {
        console.error("Date formatting error:", e, isoString);
        return "";
    }
}
/**
 * Render expanded task details section
 * @param options - Configuration object
 * @returns Lit template for expanded details
 */
function renderExpandedDetails(options) {
    const { task, templates, isExpanded, onEdit, onDelete, shades, textColor } = options;
    // Determine if task is recurring (has rrule or parent_uid)
    let recurrencePattern = "";
    if (task.rrule) {
        // Task has its own rrule
        recurrencePattern = formatRecurrencePattern(task.rrule);
    }
    else if (task.parent_uid) {
        // Task is an instance - get rrule from parent template
        const parentTemplate = templates.find((t) => t.uid === task.parent_uid);
        if (parentTemplate?.rrule) {
            recurrencePattern = formatRecurrencePattern(parentTemplate.rrule);
        }
    }
    // Determine streak bonus info (only if applicable)
    let streakBonusText = "";
    if (task.streak_bonus_points && task.streak_bonus_points > 0) {
        const interval = task.streak_bonus_interval || 0;
        if (interval > 0) {
            const intervalText = interval === 1 ? "day" : `${interval} days`;
            streakBonusText = `+${task.streak_bonus_points} pts every ${intervalText}`;
        }
    }
    // Format full due date/time
    const dueDateTimeText = task.due
        ? formatFullDateTime(task.due, task.is_all_day || false)
        : "";
    // Build detail rows (only show non-empty values)
    const detailRows = [];
    if (recurrencePattern) {
        detailRows.push({
            icon: "mdi:sync",
            label: "Repeats:",
            value: recurrencePattern,
        });
    }
    if (streakBonusText) {
        detailRows.push({
            icon: "mdi:trophy-award",
            label: "Streak Bonus:",
            value: streakBonusText,
        });
    }
    if (task.description && task.description.trim() !== "") {
        detailRows.push({
            icon: "mdi:text",
            label: "Description:",
            value: task.description,
        });
    }
    if (dueDateTimeText) {
        detailRows.push({
            icon: "mdi:calendar-clock",
            label: "Due:",
            value: dueDateTimeText,
        });
    }
    // Always render edit button, even if no detail rows
    return b `
    <div class="todo-details ${isExpanded ? "expanded" : "collapsed"}">
      <div class="todo-details-inner" style="display: flex; align-items: flex-start;">
        ${detailRows.length > 0
        ? b `
              <div class="details-content">
                ${detailRows.map((row) => b `
                    <div class="detail-row">
                      <ha-icon icon="${row.icon}"></ha-icon>
                      <span class="detail-label">${row.label}</span>
                      <span class="detail-value">${row.value}</span>
                    </div>
                  `)}
              </div>
            `
        : ""}
        <div class="details-actions">
          <div
            class="action-button"
            @click=${(e) => {
        e.stopPropagation();
        onEdit();
    }}
            role="button"
            tabindex="0"
            aria-label="Edit task"
          >
            <ha-icon icon="mdi:pencil"></ha-icon>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ============================================================================
// ChoreBot Grouped Card (TypeScript)
// ============================================================================
/**
 * ChoreBot Grouped Card
 *
 * Displays todo items grouped by tags with:
 * - Tag-based grouping (tasks appear in all matching tag groups)
 * - Per-group progress tracking
 * - Today-focused view (tasks due today + incomplete overdue + completed overdue)
 * - Optional dateless tasks
 * - Task editing dialog
 * - Custom tag ordering
 */
let ChoreBotGroupedCard = class ChoreBotGroupedCard extends i {
    constructor() {
        super(...arguments);
        this._editDialogOpen = false;
        this._editingTask = null;
        this._saving = false;
        this._groups = [];
        this._addTaskDialogOpen = false;
        this._newTask = null;
        this._savingNewTask = false;
        this._expandedTaskUid = null;
        this._autoCollapseTimeouts = new Map();
        this._previousGroupProgress = new Map();
        // Cached color shades for performance (recalculated when config changes)
        this.shades = {
            lighter: "",
            light: "",
            base: "",
            dark: "",
            darker: "",
        };
        this.shadesArray = [];
    }
    setConfig(config) {
        if (!config.entity) {
            throw new Error("You need to define an entity");
        }
        this._config = {
            entity: config.entity,
            title: config.title || "Tasks",
            show_title: config.show_title !== false,
            show_dateless_tasks: config.show_dateless_tasks !== false,
            hide_card_background: config.hide_card_background === true,
            accent_color: config.accent_color || "",
            task_text_color: config.task_text_color || "",
            show_points: config.show_points !== false,
            untagged_header: config.untagged_header || "Untagged",
            tag_group_order: config.tag_group_order || [],
            show_future_tasks: config.show_future_tasks === true,
            filter_section_id: config.filter_section_id,
            person_entity: config.person_entity,
            show_add_task_button: config.show_add_task_button !== false,
        };
    }
    getCardSize() {
        return 3;
    }
    willUpdate(changedProperties) {
        // Recalculate color shades when config or hass changes
        if ((changedProperties.has("_config") || changedProperties.has("hass")) &&
            this._config &&
            this.hass) {
            const baseColor = resolveAccentColor(this.hass, this._config.accent_color, this._config.person_entity);
            this.shades = calculateColorShades(baseColor);
            this.shadesArray = Object.values(this.shades);
        }
        // Rebuild groups when hass or config changes
        if (changedProperties.has("hass") || changedProperties.has("_config")) {
            this._updateGroups();
        }
    }
    _updateGroups() {
        if (!this.hass || !this._config)
            return;
        const entity = this.hass.states[this._config.entity];
        if (!entity)
            return;
        // Get new groups from filterAndGroupTasks
        let newGroups = filterAndGroupTasks(entity, this._config.show_dateless_tasks !== false, this._config.show_future_tasks === true, this._config.untagged_header || "Untagged", "Upcoming", this._config.filter_section_id, this._config.person_entity);
        // Sort groups
        newGroups = sortGroups(newGroups, this._config.tag_group_order, this._config.untagged_header, "Upcoming");
        // Preserve collapse state from existing groups
        this._groups = newGroups.map((newGroup) => ({
            ...newGroup,
            isCollapsed: this._findExistingCollapseState(newGroup.name),
        }));
    }
    _findExistingCollapseState(groupName) {
        const existing = this._groups.find((g) => g.name === groupName);
        if (existing !== undefined)
            return existing.isCollapsed;
        // Default: Upcoming starts collapsed, others start expanded
        return groupName === "Upcoming";
    }
    render() {
        if (!this.hass || !this._config) {
            return b `<ha-card>Loading...</ha-card>`;
        }
        const entity = this.hass.states[this._config.entity];
        if (!entity) {
            return b `<ha-card>
        <div class="empty-state">Entity not found: ${this._config.entity}</div>
      </ha-card>`;
        }
        return b `
      <ha-card
        class="${this._config.hide_card_background ? "no-background" : ""}"
      >
        ${this._config.show_title
            ? b `<div class="card-header">${this._config.title}</div>`
            : ""}
        ${this._groups.length === 0
            ? b `<div class="empty-state">No tasks</div>`
            : b `<div class="tag-groups">
              ${this._renderAllGroups(this._groups)}
            </div>`}
        ${this._renderAddTaskButton()}
      </ha-card>

      ${this._renderEditDialog()} ${this._renderAddTaskDialog()}
    `;
    }
    // ============================================================================
    // Tag Group Rendering
    // ============================================================================
    _renderAllGroups(groups) {
        return groups.map((group) => {
            const progress = calculateProgress(group.tasks);
            const textColor = this._config.task_text_color || "white";
            const isCollapsed = group.isCollapsed;
            const allComplete = progress.completed === progress.total;
            const showCheckmark = isCollapsed && allComplete;
            // Calculate progress percentage for progress bar
            const progressPercent = progress.total > 0 ? (progress.completed / progress.total) * 100 : 0;
            // Auto-collapse logic: check if group just became complete
            this._checkAutoCollapse(group.name, progress, allComplete, isCollapsed);
            return b `
        <div class="tag-group-container ${isCollapsed ? "collapsed" : ""}">
          <div
            class="tag-group-header ${isCollapsed ? "collapsed" : ""}"
            style="background: #${this.shades
                .light}; color: ${textColor}; --progress-width: ${progressPercent}%; --darker-color: #${this
                .shades.dark};"
            @click=${() => this._toggleGroup(group.name)}
          >
            <div class="tag-group-header-title">${group.name}</div>
            <div class="tag-group-header-progress">
              ${showCheckmark
                ? b `<ha-icon
                    icon="mdi:check"
                    style="color: ${textColor}; --mdi-icon-size: 20px;"
                  ></ha-icon>`
                : b `${progress.completed}/${progress.total}`}
            </div>
          </div>
          <div class="tag-group-tasks ${isCollapsed ? "collapsed" : ""}">
            <div class="tag-group-tasks-inner">
              ${this._renderTasks(group.tasks, textColor)}
            </div>
          </div>
        </div>
      `;
        });
    }
    _renderTasks(tasks, textColor) {
        const entity = this.hass?.states[this._config.entity];
        const templates = entity?.attributes.chorebot_templates || [];
        return tasks.map((task) => {
            const isCompleted = task.status === "completed";
            // Task styling based on completion
            // When hide_card_background is enabled, incomplete tasks are transparent
            const taskBgColor = isCompleted
                ? `#${this.shades.base}`
                : (this._config?.hide_card_background ? "transparent" : "var(--card-background-color)");
            const taskTextColor = isCompleted
                ? textColor
                : "var(--primary-text-color)";
            // Completion circle styling
            const circleBgColor = isCompleted
                ? `#${this.shades.dark}`
                : "transparent";
            const circleIconColor = isCompleted ? "white" : "var(--divider-color)";
            const circleBorder = isCompleted
                ? "none"
                : `2px solid var(--divider-color)`;
            return b `
        <div class="todo-item-container" style="background: ${taskBgColor}; color: ${taskTextColor};">
          <div
            class="todo-item"
            @click=${() => this._toggleTaskExpanded(task.uid)}
          >
            <div class="todo-content">
              <div class="todo-summary">
                ${task.summary}
                ${this._renderStreakIndicator(task)}
              </div>
              ${task.due || task.points_value || task.parent_uid
                ? b `<div
                    class="todo-due-date"
                    style="color: ${isOverdue(task)
                    ? "var(--error-color)"
                    : "inherit"}"
                  >
                    ${task.due
                    ? formatRelativeDate(new Date(task.due), task)
                    : ""}
                    ${task.parent_uid
                    ? b `<ha-icon
                          icon="mdi:sync"
                          class="recurring-icon"
                        ></ha-icon>`
                    : ""}
                    ${this._renderPointsBadge(task)}
                  </div>`
                : ""}
            </div>
            <div
              class="completion-circle"
              style="background: ${circleBgColor}; border: ${circleBorder};"
              @click=${(e) => this._handleCompletionClick(e, task)}
            >
              <ha-icon
                icon="mdi:check"
                style="color: ${circleIconColor};"
              ></ha-icon>
            </div>
          </div>
          ${renderExpandedDetails({
                task,
                templates,
                isExpanded: this._expandedTaskUid === task.uid,
                onEdit: () => this._openEditDialog(task),
                onDelete: () => this._confirmAndDeleteTask(task),
                shades: this.shades,
                textColor: this._config.task_text_color || "white",
            })}
        </div>
      `;
        });
    }
    _renderPointsBadge(task) {
        const entity = this.hass?.states[this._config.entity];
        const templates = entity?.attributes.chorebot_templates || [];
        const textColor = this._config.task_text_color || "white";
        return renderPointsBadge(task, templates, this.shades, this.hass, this._config?.show_points !== false, textColor);
    }
    _renderStreakIndicator(task) {
        // Only show for recurring instances
        if (!task.parent_uid) {
            return b ``;
        }
        // Get template to access streak data
        const entity = this.hass?.states[this._config.entity];
        const templates = entity?.attributes.chorebot_templates || [];
        const template = templates.find((t) => t.uid === task.parent_uid);
        // Only show if streak exists and is greater than 0
        if (!template || !template.streak_current || template.streak_current <= 0) {
            return b ``;
        }
        return b `
      <span class="streak-indicator">
        <ha-icon icon="mdi:fire"></ha-icon>
        <span>${template.streak_current}</span>
      </span>
    `;
    }
    // ============================================================================
    // Task Filtering
    // ============================================================================
    _getFilteredTasks(entity) {
        return filterTodayTasks(entity, this._config.show_dateless_tasks !== false, this._config?.filter_section_id);
    }
    // ============================================================================
    // Group Collapse/Expand
    // ============================================================================
    _toggleGroup(groupName) {
        // Clear any pending auto-collapse timeout for this group
        if (this._autoCollapseTimeouts.has(groupName)) {
            clearTimeout(this._autoCollapseTimeouts.get(groupName));
            this._autoCollapseTimeouts.delete(groupName);
        }
        // Find the group and toggle its isCollapsed state
        const group = this._groups.find((g) => g.name === groupName);
        if (group) {
            group.isCollapsed = !group.isCollapsed;
            this.requestUpdate();
        }
    }
    _checkAutoCollapse(tagName, progress, allComplete, isCollapsed) {
        const previousProgress = this._previousGroupProgress.get(tagName);
        // Check if group just became complete (wasn't complete before, is complete now)
        const justCompleted = previousProgress &&
            previousProgress.completed < previousProgress.total &&
            allComplete &&
            !isCollapsed;
        // Update the stored progress for next comparison
        this._previousGroupProgress.set(tagName, {
            completed: progress.completed,
            total: progress.total,
        });
        if (justCompleted) {
            // Clear any existing timeout for this group
            if (this._autoCollapseTimeouts.has(tagName)) {
                clearTimeout(this._autoCollapseTimeouts.get(tagName));
            }
            // Set a delay before auto-collapsing (1.5 seconds)
            const timeoutId = window.setTimeout(() => {
                const group = this._groups.find((g) => g.name === tagName);
                if (group) {
                    group.isCollapsed = true;
                    this.requestUpdate();
                }
                this._autoCollapseTimeouts.delete(tagName);
            }, 1500);
            this._autoCollapseTimeouts.set(tagName, timeoutId);
        }
    }
    // ============================================================================
    // Task Expansion
    // ============================================================================
    _toggleTaskExpanded(taskUid) {
        if (this._expandedTaskUid === taskUid) {
            this._expandedTaskUid = null; // Collapse
        }
        else {
            this._expandedTaskUid = taskUid; // Expand (and collapse others)
        }
    }
    // ============================================================================
    // Task Completion
    // ============================================================================
    async _toggleTask(task, confettiOrigin) {
        const newStatus = task.status === "completed" ? "needs_action" : "completed";
        await this.hass.callService("todo", "update_item", {
            entity_id: this._config.entity,
            item: task.uid,
            status: newStatus,
        });
        // Auto-collapse if this task was expanded
        if (newStatus === "completed" && this._expandedTaskUid === task.uid) {
            this._expandedTaskUid = null;
        }
        // Play confetti animations when completing a task
        if (newStatus === "completed" && confettiOrigin) {
            // 1. Always play completion burst
            this._playCompletionConfetti(confettiOrigin);
            // 2. Play floating points animation if task has points
            const totalPoints = this._calculateTotalPointsAwarded(task);
            if (totalPoints !== null && totalPoints > 0) {
                // Convert normalized origin (0-1) to viewport pixel coordinates for points animation
                const pixelOrigin = {
                    x: confettiOrigin.x * window.innerWidth,
                    y: confettiOrigin.y * window.innerHeight,
                };
                playPointsAnimation(pixelOrigin, totalPoints);
            }
            // 3. Check for completion effects with two-tier system
            const allTasksComplete = this._areAllTasksComplete();
            const allDatedTasksComplete = this._areAllDatedTasksComplete();
            const taskHasDueDate = !!task.due;
            if (allTasksComplete) {
                // Everything complete (including dateless) - play star shower
                this._playAllCompleteStarShower();
            }
            else if (allDatedTasksComplete && taskHasDueDate) {
                // All dated tasks complete AND the just-completed task had a due date
                // This means we just completed the final dated task - play fireworks!
                this._playDatedTasksFireworks();
            }
            else if (this._isGroupComplete(task)) {
                // Just this group complete - play group fireworks
                this._playGroupFireworks();
            }
        }
    }
    _handleCompletionClick(e, task) {
        e.stopPropagation();
        // Capture the position NOW before the async call
        const target = e.currentTarget;
        const rect = target.getBoundingClientRect();
        const origin = {
            x: (rect.left + rect.width / 2) / window.innerWidth,
            y: (rect.top + rect.height / 2) / window.innerHeight,
        };
        this._toggleTask(task, origin);
    }
    _playCompletionConfetti(origin) {
        // Small burst of confetti from the checkbox with themed colors
        playCompletionBurst(origin, this.shadesArray);
    }
    /**
     * Check if the group(s) that this task belongs to are 100% complete
     */
    _isGroupComplete(task) {
        const entity = this.hass?.states[this._config.entity];
        if (!entity)
            return false;
        const tasks = this._getFilteredTasks(entity);
        const untaggedHeader = this._config.untagged_header || "Untagged";
        const tagGroups = groupTasksByTag(tasks, untaggedHeader);
        // Get tags for the completed task
        const taskTags = task.tags || [];
        const tagsToCheck = taskTags.length > 0 ? taskTags : [untaggedHeader];
        // Check if any of the task's groups are now complete
        for (const tagName of tagsToCheck) {
            const groupTasks = tagGroups.get(tagName);
            if (!groupTasks)
                continue;
            const progress = calculateProgress(groupTasks);
            if (progress.total > 0 && progress.completed === progress.total) {
                return true;
            }
        }
        return false;
    }
    /**
     * Check if all visible tasks are 100% complete
     */
    _areAllTasksComplete() {
        const entity = this.hass?.states[this._config.entity];
        if (!entity)
            return false;
        const tasks = this._getFilteredTasks(entity);
        const progress = calculateProgress(tasks);
        return progress.total > 0 && progress.completed === progress.total;
    }
    /**
     * Check if all tasks with due dates are 100% complete (excludes dateless tasks)
     */
    _areAllDatedTasksComplete() {
        const entity = this.hass?.states[this._config.entity];
        if (!entity)
            return false;
        const tasks = this._getFilteredTasks(entity);
        const progress = calculateDatedTasksProgress(tasks);
        return progress.total > 0 && progress.completed === progress.total;
    }
    _playGroupFireworks() {
        playFireworks(this.shadesArray);
    }
    _playDatedTasksFireworks() {
        playFireworks(this.shadesArray);
    }
    _playAllCompleteStarShower() {
        playStarShower(this.shadesArray);
    }
    /**
     * Calculate total points awarded for completing this task
     * Includes base points + streak bonus if applicable
     * Returns null if task has no points_value
     */
    _calculateTotalPointsAwarded(task) {
        if (!task.points_value)
            return null;
        let totalPoints = task.points_value;
        // Check for streak bonus (recurring tasks only)
        if (task.parent_uid) {
            const entity = this.hass?.states[this._config.entity];
            const templates = entity?.attributes.chorebot_templates || [];
            const template = templates.find((t) => t.uid === task.parent_uid);
            if (template?.streak_bonus_points && template?.streak_bonus_interval) {
                const nextStreak = template.streak_current + 1;
                if (nextStreak % template.streak_bonus_interval === 0) {
                    totalPoints += template.streak_bonus_points;
                }
            }
        }
        return totalPoints;
    }
    // ============================================================================
    // Edit Dialog
    // ============================================================================
    _openEditDialog(task) {
        if (!this.hass || !this._config?.entity)
            return;
        const entity = this.hass.states[this._config.entity];
        if (!entity)
            return;
        const templates = entity.attributes.chorebot_templates || [];
        this._editingTask = prepareTaskForEditing(task, templates);
        this._editDialogOpen = true;
    }
    _closeEditDialog() {
        this._editDialogOpen = false;
        this._editingTask = null;
    }
    _renderEditDialog() {
        // Get sections and tags from entity attributes
        const entity = this.hass?.states[this._config.entity];
        const sections = entity?.attributes.chorebot_sections || [];
        const availableTags = entity?.attributes.chorebot_tags || [];
        return renderTaskDialog(this._editDialogOpen, this._editingTask, this.hass, sections, availableTags, this._saving, () => this._closeEditDialog(), (ev) => this._formValueChanged(ev), () => this._saveTask(), () => this._handleDeleteTask());
    }
    _formValueChanged(ev) {
        const updatedValues = ev.detail.value;
        this._editingTask = {
            ...this._editingTask,
            ...updatedValues,
        };
        if ("has_due_date" in updatedValues ||
            "is_all_day" in updatedValues ||
            "has_recurrence" in updatedValues ||
            "recurrence_frequency" in updatedValues) {
            this.requestUpdate();
        }
    }
    async _saveTask() {
        if (!this._editingTask ||
            !this._editingTask.summary?.trim() ||
            this._saving) {
            return;
        }
        this._saving = true;
        const serviceData = {
            list_id: this._config.entity,
            uid: this._editingTask.uid,
            summary: this._editingTask.summary.trim(),
        };
        if (this._editingTask.has_due_date && this._editingTask.due_date) {
            const isAllDay = !!this._editingTask.is_all_day;
            const timeStr = this._editingTask.due_time || "00:00";
            try {
                serviceData.due = createISOString(this._editingTask.due_date, timeStr, isAllDay);
                serviceData.is_all_day = isAllDay;
            }
            catch (error) {
                console.error("Invalid date/time combination:", error);
                this._saving = false;
                return;
            }
        }
        else if (this._editingTask.has_due_date === false) {
            serviceData.due = "";
            serviceData.is_all_day = false;
        }
        if (this._editingTask.description) {
            serviceData.description = this._editingTask.description;
        }
        if (this._editingTask.section_id) {
            serviceData.section_id = this._editingTask.section_id;
        }
        // Handle tags
        if (this._editingTask.tags !== undefined) {
            serviceData.tags = this._editingTask.tags;
        }
        // Handle recurrence
        const rrule = buildRrule(this._editingTask);
        if (rrule !== null) {
            serviceData.rrule = rrule;
        }
        else if (this._editingTask.has_recurrence === false) {
            // User explicitly disabled recurrence, send empty string to clear it
            serviceData.rrule = "";
        }
        // Handle points fields
        if (this._editingTask.points_value !== undefined) {
            serviceData.points_value = this._editingTask.points_value;
        }
        if (this._editingTask.streak_bonus_points !== undefined) {
            serviceData.streak_bonus_points = this._editingTask.streak_bonus_points;
        }
        if (this._editingTask.streak_bonus_interval !== undefined) {
            serviceData.streak_bonus_interval =
                this._editingTask.streak_bonus_interval;
        }
        // For recurring task instances, always apply changes to future instances
        const isRecurringInstance = !!this._editingTask.parent_uid;
        if (isRecurringInstance) {
            serviceData.include_future_occurrences = true;
        }
        console.log("Calling chorebot.update_task with payload:", serviceData);
        try {
            await this.hass.callService("chorebot", "update_task", serviceData);
            this._closeEditDialog();
        }
        catch (error) {
            console.error("Error saving task:", error);
            alert("Failed to save task. Please try again.");
        }
        finally {
            this._saving = false;
        }
    }
    async _handleDeleteTask() {
        if (!this._editingTask || this._saving) {
            return;
        }
        const task = this._editingTask;
        const isRecurring = task.has_recurrence || task.parent_uid;
        // Confirmation message based on task type
        const message = isRecurring
            ? "Delete this recurring task? This will remove all future occurrences, but keep completed instances."
            : "Delete this task? This action cannot be undone.";
        if (!confirm(message)) {
            return;
        }
        this._saving = true;
        try {
            // Call HA service to delete
            await this.hass.callService("todo", "remove_item", {
                entity_id: this._config.entity,
                item: task.uid,
            });
            // Close dialog and show success
            this._closeEditDialog();
            // Optional: Show success toast
            this.dispatchEvent(new CustomEvent("hass-notification", {
                detail: { message: "Task deleted successfully" },
                bubbles: true,
                composed: true,
            }));
        }
        catch (error) {
            console.error("Error deleting task:", error);
            alert(`Failed to delete task: ${error}`);
        }
        finally {
            this._saving = false;
        }
    }
    async _confirmAndDeleteTask(task) {
        const isRecurring = task.rrule || task.parent_uid;
        const message = isRecurring
            ? "Delete this recurring task? This will remove all future occurrences, but keep completed instances."
            : "Delete this task? This action cannot be undone.";
        if (!confirm(message))
            return;
        await this.hass.callService("todo", "remove_item", {
            entity_id: this._config.entity,
            item: task.uid,
        });
        // Auto-collapse if this task was expanded
        if (this._expandedTaskUid === task.uid) {
            this._expandedTaskUid = null;
        }
    }
    // ============================================================================
    // Add Task Dialog
    // ============================================================================
    _renderAddTaskButton() {
        if (!this._config?.show_add_task_button) {
            return b ``;
        }
        // Use the same color shades as the rest of the card
        const borderColor = `#${this.shades.light}`;
        const hoverBg = `color-mix(in srgb, #${this.shades.light} 20%, var(--card-background-color))`;
        const hoverColor = `#${this.shades.light}`;
        return b `
      <div
        class="add-task-button-container"
        style="--button-border-color: ${borderColor}; --button-hover-bg: ${hoverBg}; --button-hover-color: ${hoverColor};"
      >
        <div class="add-task-card" @click="${this._openAddTaskDialog}">
          <div class="add-task-icon-section">
            <div class="add-task-icon">
              <ha-icon icon="mdi:plus"></ha-icon>
            </div>
          </div>
          <div class="add-task-info">
            <div class="add-task-text">Add Task</div>
          </div>
        </div>
      </div>
    `;
    }
    _openAddTaskDialog() {
        const entity = this.hass?.states[this._config.entity];
        const sections = entity?.attributes.chorebot_sections || [];
        // Create a blank task with smart defaults
        this._newTask = this._createBlankTask(sections);
        this._addTaskDialogOpen = true;
    }
    _closeAddTaskDialog() {
        this._addTaskDialogOpen = false;
        this._newTask = null;
    }
    _createBlankTask(sections) {
        let defaultSectionId;
        // Priority 1: Explicit section filter (can be either ID or name)
        if (this._config.filter_section_id) {
            // First try to find by ID
            let filtered = sections.find((s) => s.id === this._config.filter_section_id);
            // If not found by ID, try by name (case-insensitive)
            if (!filtered) {
                filtered = sections.find((s) => s.name.toLowerCase() ===
                    this._config.filter_section_id.toLowerCase());
            }
            if (filtered) {
                defaultSectionId = filtered.id;
            }
        }
        // Priority 2: Person's assigned section (find section where person_id matches)
        if (!defaultSectionId && this._config.person_entity) {
            const personSection = sections.find((s) => s.person_id === this._config.person_entity);
            if (personSection) {
                defaultSectionId = personSection.id;
            }
        }
        // Priority 3: First section (highest sort_order)
        if (!defaultSectionId && sections.length > 0) {
            defaultSectionId = sections.sort((a, b) => b.sort_order - a.sort_order)[0].id;
        }
        return {
            uid: "",
            summary: "",
            status: "needs_action",
            has_due_date: false,
            is_all_day: false,
            due_date: undefined,
            due_time: undefined,
            description: "",
            section_id: defaultSectionId,
            tags: [],
            has_recurrence: false,
            recurrence_frequency: "DAILY",
            recurrence_interval: 1,
            recurrence_byweekday: [],
            recurrence_bymonthday: 1,
            points_value: 0,
            streak_bonus_points: 0,
            streak_bonus_interval: 0,
        };
    }
    _renderAddTaskDialog() {
        const entity = this.hass?.states[this._config.entity];
        const sections = entity?.attributes.chorebot_sections || [];
        const availableTags = entity?.attributes.chorebot_tags || [];
        return renderTaskDialog(this._addTaskDialogOpen, this._newTask, this.hass, sections, availableTags, this._savingNewTask, () => this._closeAddTaskDialog(), (ev) => this._formValueChangedForNewTask(ev), () => this._saveNewTask(), undefined, // onDelete - not applicable for new tasks
        "Add Task", // Custom dialog title
        false);
    }
    _formValueChangedForNewTask(ev) {
        const updatedValues = ev.detail.value;
        this._newTask = {
            ...this._newTask,
            ...updatedValues,
        };
        // Trigger re-render for conditional fields
        if ("has_due_date" in updatedValues ||
            "is_all_day" in updatedValues ||
            "has_recurrence" in updatedValues ||
            "recurrence_frequency" in updatedValues) {
            this.requestUpdate();
        }
    }
    async _saveNewTask() {
        if (!this._newTask || !this._newTask.summary?.trim() || this._savingNewTask) {
            return;
        }
        this._savingNewTask = true;
        const serviceData = {
            list_id: this._config.entity,
            summary: this._newTask.summary.trim(),
        };
        // Handle due date
        if (this._newTask.has_due_date && this._newTask.due_date) {
            const isAllDay = !!this._newTask.is_all_day;
            const timeStr = this._newTask.due_time || "00:00";
            try {
                serviceData.due = createISOString(this._newTask.due_date, timeStr, isAllDay);
                serviceData.is_all_day = isAllDay;
            }
            catch (error) {
                console.error("Invalid date/time combination:", error);
                this._savingNewTask = false;
                return;
            }
        }
        // Handle description
        if (this._newTask.description) {
            serviceData.description = this._newTask.description;
        }
        // Handle section
        if (this._newTask.section_id) {
            serviceData.section_id = this._newTask.section_id;
        }
        // Handle tags
        if (this._newTask.tags !== undefined && this._newTask.tags.length > 0) {
            serviceData.tags = this._newTask.tags;
        }
        // Handle recurrence
        const rrule = buildRrule(this._newTask);
        if (rrule !== null) {
            serviceData.rrule = rrule;
        }
        // Handle points
        if (this._newTask.points_value !== undefined &&
            this._newTask.points_value > 0) {
            serviceData.points_value = this._newTask.points_value;
        }
        // Handle streak bonus (only for recurring tasks)
        if (rrule !== null) {
            if (this._newTask.streak_bonus_points !== undefined &&
                this._newTask.streak_bonus_points > 0) {
                serviceData.streak_bonus_points = this._newTask.streak_bonus_points;
            }
            if (this._newTask.streak_bonus_interval !== undefined &&
                this._newTask.streak_bonus_interval > 0) {
                serviceData.streak_bonus_interval = this._newTask.streak_bonus_interval;
            }
        }
        try {
            await this.hass.callService("chorebot", "add_task", serviceData);
            this._closeAddTaskDialog();
            // Reset task for next use
            const entity = this.hass?.states[this._config.entity];
            const sections = entity?.attributes.chorebot_sections || [];
            this._newTask = this._createBlankTask(sections);
        }
        catch (error) {
            console.error("Error adding task:", error);
            alert("Failed to add task. Please try again.");
        }
        finally {
            this._savingNewTask = false;
        }
    }
    // ============================================================================
    // Configuration
    // ============================================================================
    static getStubConfig() {
        return {
            entity: "",
            title: "Tasks",
            show_title: true,
            show_dateless_tasks: true,
            show_future_tasks: false,
            filter_section_id: "",
            person_entity: "",
            hide_card_background: false,
            accent_color: "",
            task_text_color: "",
            untagged_header: "Untagged",
            tag_group_order: [],
            show_add_task_button: true,
        };
    }
    static getConfigForm() {
        return {
            schema: [
                {
                    name: "entity",
                    required: true,
                    selector: {
                        entity: {
                            filter: { domain: "todo" },
                        },
                    },
                },
                {
                    name: "title",
                    default: "Tasks",
                    selector: { text: {} },
                },
                {
                    name: "show_title",
                    default: true,
                    selector: { boolean: {} },
                },
                {
                    name: "show_dateless_tasks",
                    default: true,
                    selector: { boolean: {} },
                },
                {
                    name: "show_future_tasks",
                    default: false,
                    selector: { boolean: {} },
                },
                {
                    name: "filter_section_id",
                    selector: { text: {} },
                },
                {
                    name: "person_entity",
                    selector: {
                        entity: {
                            filter: { domain: "person" },
                        },
                    },
                },
                {
                    name: "hide_card_background",
                    default: false,
                    selector: { boolean: {} },
                },
                {
                    name: "accent_color",
                    selector: { text: {} },
                },
                {
                    name: "task_text_color",
                    selector: { text: {} },
                },
                {
                    name: "untagged_header",
                    default: "Untagged",
                    selector: { text: {} },
                },
                {
                    name: "tag_group_order",
                    selector: {
                        select: {
                            multiple: true,
                            custom_value: true,
                            options: [],
                        },
                    },
                },
                {
                    name: "show_add_task_button",
                    default: true,
                    selector: { boolean: {} },
                },
            ],
            computeLabel: (schema) => {
                const labels = {
                    entity: "Todo Entity",
                    title: "Card Title",
                    show_title: "Show Title",
                    show_dateless_tasks: "Show Tasks Without Due Date",
                    show_future_tasks: "Show Future Tasks",
                    filter_section_id: "Filter by Section",
                    person_entity: "Filter by Person",
                    hide_card_background: "Hide Card Background",
                    accent_color: "Accent Color",
                    task_text_color: "Task Text Color",
                    untagged_header: "Untagged Tasks Header",
                    tag_group_order: "Tag Display Order",
                    show_add_task_button: "Show Add Task Button",
                };
                return labels[schema.name] || undefined;
            },
            computeHelper: (schema) => {
                const helpers = {
                    entity: "Select the ChoreBot todo entity to display",
                    title: "Custom title for the card",
                    show_title: "Show the card title",
                    show_dateless_tasks: "Show tasks that do not have a due date",
                    show_future_tasks: "Show tasks with future due dates in a collapsible 'Upcoming' section (collapsed by default)",
                    filter_section_id: 'Enter section name (e.g., "SECOND SECTION"). Leave empty to show all sections.',
                    person_entity: "Optional: Filter to show only tasks assigned to this person. Also inherits their accent color if set.",
                    hide_card_background: "Hide the card background and padding for a seamless look",
                    accent_color: "Accent color for task items and headers (hex code or CSS variable like var(--primary-color))",
                    task_text_color: "Text color for task items (hex code or CSS variable)",
                    untagged_header: 'Header text for tasks without tags (default: "Untagged")',
                    tag_group_order: "Order to display tag groups. Tags not listed will appear alphabetically after these.",
                    show_add_task_button: "Show the 'Add Task' button below tag groups for creating new tasks",
                };
                return helpers[schema.name] || undefined;
            },
        };
    }
};
ChoreBotGroupedCard.styles = i$3 `
    :host {
      display: block;
    }
    ha-card {
      background: transparent;
      box-shadow: none;
      padding: 0;
      border: none;
    }
    .card-header {
      font-size: 24px;
      font-weight: 500;
      margin-bottom: 16px;
    }

    /* Tag Group Container */
    .tag-groups {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .tag-group-container {
      border-radius: var(--ha-card-border-radius, 12px);
      overflow: hidden;
      border: 1px solid var(--divider-color);
      transition: border-radius 0.3s ease;
    }

    .tag-group-container.collapsed {
      border-radius: var(--ha-card-border-radius, 12px);
    }

    /* Tag Group Header Bar */
    .tag-group-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 16px;
      font-weight: 500;
      font-size: 24px;
      cursor: pointer;
      user-select: none;
      transition:
        filter 0.2s ease,
        border-bottom 0.3s ease;
      position: relative;
      overflow: hidden;
    }

    .tag-group-header::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      background: var(--darker-color);
      width: var(--progress-width, 0%);
      transition: width 0.3s ease;
      z-index: 0;
    }

    .tag-group-header.collapsed {
      border-bottom: none;
    }

    .tag-group-header:active {
      filter: brightness(0.9);
    }

    .tag-group-header-title {
      flex: 1;
      text-transform: capitalize;
      position: relative;
      z-index: 1;
    }

    .tag-group-header-progress {
      font-weight: 400;
      opacity: 0.8;
      position: relative;
      z-index: 1;
    }

    /* Tag Group Tasks (rows, not separate cards) */
    .tag-group-tasks {
      display: grid;
      grid-template-rows: 1fr;
      transition:
        grid-template-rows 0.3s ease,
        opacity 0.3s ease;
      opacity: 1;
    }

    .tag-group-tasks.collapsed {
      grid-template-rows: 0fr;
      opacity: 0;
    }

    .tag-group-tasks-inner {
      overflow: hidden;
    }

    .todo-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px;
      cursor: pointer;
      transition: filter 0.2s ease;
    }

    .todo-item:hover {
      filter: brightness(1.1);
    }

    .todo-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 4px;
      min-width: 0;
    }

    .todo-summary {
      font-size: 20px;
      font-weight: 400;
      word-wrap: break-word;
      line-height: 1.3;
    }

    .todo-due-date {
      font-size: 14px;
      font-weight: normal;
      opacity: 0.9;
      display: flex;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
    }

    .points-badge {
      display: inline-flex;
      align-items: center;
      gap: 3px;
      padding: 2px 8px;
      border-radius: 12px;
      font-size: 11px;
      font-weight: bold;
      white-space: nowrap;
      opacity: 0.9;
    }

    .points-badge ha-icon {
      --mdc-icon-size: 12px;
      display: flex;
    }

    .points-badge.bonus-pending {
      background: linear-gradient(135deg, #ffd700, #ffa500) !important;
      border: 1px solid currentColor !important;
      animation: glow 2s ease-in-out infinite;
      box-shadow: 0 0 8px rgba(255, 215, 0, 0.6);
    }

    @keyframes glow {
      0%,
      100% {
        opacity: 0.9;
      }
      50% {
        opacity: 1;
      }
    }

    .recurring-icon {
      --mdc-icon-size: 14px;
      margin-right: 4px;
      vertical-align: middle;
      line-height: 1;
      display: inline-flex;
      align-items: center;
    }

    .streak-indicator {
      display: inline-flex;
      align-items: center;
      gap: 3px;
      margin-left: 8px;
      font-size: 14px;
      font-weight: normal;
      color: var(--warning-color, #ff9800);
      vertical-align: middle;
      line-height: 1;
    }

    .streak-indicator ha-icon {
      --mdc-icon-size: 13px;
      display: flex;
    }

    .completion-circle {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      transition: all 0.2s ease;
      box-sizing: border-box;
    }

    .completion-circle ha-icon {
      --mdi-icon-size: 28px;
    }

    .empty-state {
      text-align: center;
      padding: 32px;
      color: var(--secondary-text-color);
    }

    /* Add Task Button */
    .add-task-button-container {
      margin-top: 16px;
    }

    .add-task-card {
      border-radius: 12px;
      background: var(--card-background-color);
      border: 2px dashed var(--divider-color);
      display: flex;
      flex-direction: row;
      overflow: hidden;
      cursor: pointer;
      transition: all 0.2s ease;
      min-height: 80px;
      height: 80px;
    }

    .add-task-card:hover {
      border-color: var(--button-border-color);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    .add-task-icon-section {
      flex-shrink: 0;
      width: 80px;
      background: color-mix(in srgb, var(--divider-color) 50%, transparent);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
    }

    .add-task-card:hover .add-task-icon-section {
      background: var(--button-hover-bg);
    }

    .add-task-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--secondary-text-color);
      transition: all 0.2s ease;
    }

    .add-task-card:hover .add-task-icon {
      color: var(--button-hover-color);
    }

    .add-task-icon ha-icon {
      --mdc-icon-size: 36px;
    }

    .add-task-info {
      flex: 1;
      padding: 12px 16px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .add-task-text {
      font-size: 18px;
      font-weight: 500;
      color: var(--secondary-text-color);
      transition: all 0.2s ease;
    }

    .add-task-card:hover .add-task-text {
      color: var(--button-hover-color);
    }

    ha-dialog {
      --mdc-dialog-min-width: min(500px, 90vw);
    }

    /* Task Container */
    .todo-item-container {
      display: flex;
      flex-direction: column;
      border-bottom: 1px solid var(--divider-color);
    }

    .todo-item-container:last-child {
      border-bottom: none;
    }

    /* Expanded Details Section */
    .todo-details {
      display: grid;
      grid-template-rows: 0fr;
      transition: grid-template-rows 0.3s ease;
      overflow: hidden;
    }

    .todo-details.expanded {
      grid-template-rows: 1fr;
    }

    .todo-details-inner {
      min-height: 0;
      overflow: hidden;
      padding: 0 16px;
      opacity: 0;
      transition: padding 0.3s ease, opacity 0.3s ease-in;
    }

    .todo-details.expanded .todo-details-inner {
      padding: 0 16px 16px 16px;
      opacity: 1;
    }

    /* Details Content (Left Side) */
    .details-content {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .detail-row {
      display: flex;
      align-items: flex-start;
      gap: 8px;
      font-size: 14px;
      line-height: 1.4;
    }

    .detail-row ha-icon {
      --mdc-icon-size: 16px;
      color: var(--secondary-text-color);
      flex-shrink: 0;
    }

    .detail-label {
      font-weight: 500;
      color: var(--secondary-text-color);
      flex-shrink: 0;
    }

    .detail-value {
      flex: 1;
      color: var(--primary-text-color);
      word-wrap: break-word;
    }

    /* Edit Button (Inline with Details) */
    .details-actions {
      display: flex;
      align-items: flex-end;
      height: 100%;
      margin-left: auto;
      padding-left: 8px;
    }

    .action-button {
      cursor: pointer;
      transition: opacity 0.2s ease;
      color: var(--secondary-text-color);
    }

    .action-button:hover {
      opacity: 0.7;
    }

    .action-button ha-icon {
      --mdc-icon-size: 20px;
    }

    /* Mobile Adjustments */
    @media (max-width: 600px) {
      .todo-details-inner {
        padding: 0 12px;
      }

      .todo-details.expanded .todo-details-inner {
        padding: 12px;
      }

      .detail-row {
        font-size: 13px;
      }
    }
  `;
__decorate([
    n({ attribute: false })
], ChoreBotGroupedCard.prototype, "hass", void 0);
__decorate([
    r()
], ChoreBotGroupedCard.prototype, "_config", void 0);
__decorate([
    r()
], ChoreBotGroupedCard.prototype, "_editDialogOpen", void 0);
__decorate([
    r()
], ChoreBotGroupedCard.prototype, "_editingTask", void 0);
__decorate([
    r()
], ChoreBotGroupedCard.prototype, "_saving", void 0);
__decorate([
    r()
], ChoreBotGroupedCard.prototype, "_groups", void 0);
__decorate([
    r()
], ChoreBotGroupedCard.prototype, "_addTaskDialogOpen", void 0);
__decorate([
    r()
], ChoreBotGroupedCard.prototype, "_newTask", void 0);
__decorate([
    r()
], ChoreBotGroupedCard.prototype, "_savingNewTask", void 0);
__decorate([
    r()
], ChoreBotGroupedCard.prototype, "_expandedTaskUid", void 0);
ChoreBotGroupedCard = __decorate([
    t("chorebot-grouped-card")
], ChoreBotGroupedCard);
window.customCards = window.customCards || [];
window.customCards.push({
    type: "chorebot-grouped-card",
    name: "ChoreBot Grouped Card",
    description: "Display and manage ChoreBot tasks grouped by tags",
    preview: true,
});
console.info("%c CHOREBOT-GROUPED-CARD %c v0.1.0 ", "color: white; background: #2196F3; font-weight: bold;", "color: #2196F3; background: white; font-weight: bold;");

// ============================================================================
// ChoreBot Add Task Card (TypeScript)
// ============================================================================
/**
 * ChoreBot Add Task Card
 *
 * A simple button card that opens a dialog to create new tasks.
 * Reuses the shared task dialog for consistency with edit operations.
 */
let ChoreBotAddTaskCard = class ChoreBotAddTaskCard extends i {
    constructor() {
        super(...arguments);
        this._dialogOpen = false;
        this._newTask = null;
        this._saving = false;
    }
    setConfig(config) {
        if (!config.entity) {
            throw new Error("You need to define an entity");
        }
        this._config = {
            entity: config.entity,
            button_text: config.button_text || "Add Task",
            button_icon: config.button_icon || "mdi:plus",
            button_color: config.button_color || "var(--primary-color)",
            button_text_color: config.button_text_color || "white",
            button_size: config.button_size || "medium",
            hide_card_background: config.hide_card_background === true,
            default_section_id: config.default_section_id,
            default_tags: config.default_tags || [],
        };
    }
    getCardSize() {
        return 1;
    }
    render() {
        if (!this.hass || !this._config) {
            return b `<ha-card>Loading...</ha-card>`;
        }
        const entity = this.hass.states[this._config.entity];
        if (!entity) {
            return b `<ha-card>
        <div
          style="text-align: center; padding: 16px; color: var(--error-color);"
        >
          Entity not found: ${this._config.entity}
        </div>
      </ha-card>`;
        }
        return b `
      <ha-card
        class="${this._config.hide_card_background ? "no-background" : ""}"
      >
        <div class="button-container">
          <button
            class="add-button ${this._config.button_size} ${this._config
            .button_text
            ? ""
            : "icon-only"}"
            style="background: ${this._config.button_color}; color: ${this
            ._config.button_text_color};"
            @click=${this._openDialog}
          >
            <ha-icon icon="${this._config.button_icon}"></ha-icon>
            ${this._config.button_text
            ? b `<span>${this._config.button_text}</span>`
            : ""}
          </button>
        </div>
      </ha-card>

      ${this._renderDialog()}
    `;
    }
    // ============================================================================
    // Dialog Management
    // ============================================================================
    _openDialog() {
        const entity = this.hass?.states[this._config.entity];
        const sections = entity?.attributes.chorebot_sections || [];
        // Create a blank task with defaults from config
        this._newTask = this._createBlankTask(sections);
        this._dialogOpen = true;
    }
    _closeDialog() {
        this._dialogOpen = false;
        this._newTask = null;
    }
    _createBlankTask(sections) {
        // Determine default section
        let defaultSectionId;
        if (this._config.default_section_id) {
            // Config can specify either the section ID or the section name
            // First try to find a section with matching ID
            const byId = sections.find((s) => s.id === this._config.default_section_id);
            if (byId) {
                defaultSectionId = byId.id;
            }
            else {
                // Try to find a section with matching name (case-insensitive)
                const byName = sections.find((s) => s.name.toLowerCase() ===
                    this._config.default_section_id.toLowerCase());
                if (byName) {
                    defaultSectionId = byName.id;
                }
            }
        }
        else if (sections.length > 0) {
            // Use the first section (highest sort_order)
            defaultSectionId = sections.sort((a, b) => b.sort_order - a.sort_order)[0].id;
        }
        return {
            uid: "", // Will be generated by backend
            summary: "",
            status: "needs_action",
            has_due_date: false,
            is_all_day: false,
            due_date: undefined,
            due_time: undefined,
            description: "",
            section_id: defaultSectionId,
            tags: this._config.default_tags || [],
            has_recurrence: false,
            recurrence_frequency: "DAILY",
            recurrence_interval: 1,
            recurrence_byweekday: [],
            recurrence_bymonthday: 1,
        };
    }
    _renderDialog() {
        const entity = this.hass?.states[this._config.entity];
        const sections = entity?.attributes.chorebot_sections || [];
        const availableTags = entity?.attributes.chorebot_tags || [];
        return renderTaskDialog(this._dialogOpen, this._newTask, this.hass, sections, availableTags, this._saving, () => this._closeDialog(), (ev) => this._formValueChanged(ev), () => this._saveTask(), undefined, // onDelete - not applicable for new tasks
        "Add Task", // Custom dialog title
        false);
    }
    // ============================================================================
    // Form Handling
    // ============================================================================
    _formValueChanged(ev) {
        const updatedValues = ev.detail.value;
        this._newTask = {
            ...this._newTask,
            ...updatedValues,
        };
        // Trigger re-render for conditional fields
        if ("has_due_date" in updatedValues ||
            "is_all_day" in updatedValues ||
            "has_recurrence" in updatedValues ||
            "recurrence_frequency" in updatedValues) {
            this.requestUpdate();
        }
    }
    async _saveTask() {
        if (!this._newTask || !this._newTask.summary?.trim() || this._saving) {
            return;
        }
        this._saving = true;
        const serviceData = {
            list_id: this._config.entity,
            summary: this._newTask.summary.trim(),
        };
        // Handle due date
        if (this._newTask.has_due_date && this._newTask.due_date) {
            const isAllDay = !!this._newTask.is_all_day;
            const timeStr = this._newTask.due_time || "00:00";
            try {
                serviceData.due = createISOString(this._newTask.due_date, timeStr, isAllDay);
                serviceData.is_all_day = isAllDay;
            }
            catch (error) {
                console.error("Invalid date/time combination:", error);
                this._saving = false;
                return;
            }
        }
        // Handle description
        if (this._newTask.description) {
            serviceData.description = this._newTask.description;
        }
        // Handle section
        if (this._newTask.section_id) {
            serviceData.section_id = this._newTask.section_id;
        }
        // Handle tags
        if (this._newTask.tags !== undefined && this._newTask.tags.length > 0) {
            serviceData.tags = this._newTask.tags;
        }
        // Handle recurrence
        const rrule = buildRrule(this._newTask);
        if (rrule !== null) {
            serviceData.rrule = rrule;
        }
        // Handle points
        if (this._newTask.points_value !== undefined &&
            this._newTask.points_value > 0) {
            serviceData.points_value = this._newTask.points_value;
        }
        // Handle streak bonus (only for recurring tasks)
        if (rrule !== null) {
            if (this._newTask.streak_bonus_points !== undefined &&
                this._newTask.streak_bonus_points > 0) {
                serviceData.streak_bonus_points = this._newTask.streak_bonus_points;
            }
            if (this._newTask.streak_bonus_interval !== undefined &&
                this._newTask.streak_bonus_interval > 0) {
                serviceData.streak_bonus_interval = this._newTask.streak_bonus_interval;
            }
        }
        try {
            await this.hass.callService("chorebot", "add_task", serviceData);
            this._closeDialog();
            // Reset task for next use
            const entity = this.hass?.states[this._config.entity];
            const sections = entity?.attributes.chorebot_sections || [];
            this._newTask = this._createBlankTask(sections);
        }
        catch (error) {
            console.error("Error adding task:", error);
            alert("Failed to add task. Please try again.");
        }
        finally {
            this._saving = false;
        }
    }
    // ============================================================================
    // Configuration
    // ============================================================================
    static getStubConfig() {
        return {
            entity: "",
            button_text: "Add Task",
            button_icon: "mdi:plus",
            button_color: "var(--primary-color)",
            button_text_color: "white",
            button_size: "medium",
            hide_card_background: false,
            default_section_id: "",
            default_tags: [],
        };
    }
    static getConfigForm() {
        return {
            schema: [
                {
                    name: "entity",
                    required: true,
                    selector: {
                        entity: {
                            filter: { domain: "todo" },
                        },
                    },
                },
                {
                    name: "button_text",
                    default: "Add Task",
                    selector: { text: {} },
                },
                {
                    name: "button_icon",
                    default: "mdi:plus",
                    selector: { icon: {} },
                },
                {
                    name: "button_color",
                    default: "var(--primary-color)",
                    selector: { text: {} },
                },
                {
                    name: "button_text_color",
                    default: "white",
                    selector: { text: {} },
                },
                {
                    name: "button_size",
                    default: "medium",
                    selector: {
                        select: {
                            options: [
                                { label: "Small", value: "small" },
                                { label: "Medium", value: "medium" },
                                { label: "Large", value: "large" },
                            ],
                        },
                    },
                },
                {
                    name: "hide_card_background",
                    default: false,
                    selector: { boolean: {} },
                },
                {
                    name: "default_section_id",
                    selector: { text: {} },
                },
                {
                    name: "default_tags",
                    selector: {
                        select: {
                            multiple: true,
                            custom_value: true,
                            options: [],
                        },
                    },
                },
            ],
            computeLabel: (schema) => {
                const labels = {
                    entity: "Todo Entity",
                    button_text: "Button Text",
                    button_icon: "Button Icon",
                    button_color: "Button Color",
                    button_text_color: "Button Text Color",
                    button_size: "Button Size",
                    hide_card_background: "Hide Card Background",
                    default_section_id: "Default Section",
                    default_tags: "Default Tags",
                };
                return labels[schema.name] || undefined;
            },
            computeHelper: (schema) => {
                const helpers = {
                    entity: "Select the ChoreBot todo entity for new tasks",
                    button_text: "Text displayed on the button",
                    button_icon: "Icon displayed on the button",
                    button_color: "Button background color (hex code or CSS variable like var(--primary-color))",
                    button_text_color: "Button text color (hex code or CSS variable)",
                    button_size: "Size of the button",
                    hide_card_background: "Hide the card background and padding for a seamless look",
                    default_section_id: 'Default section for new tasks (enter section name like "Kyle" or leave empty for automatic)',
                    default_tags: "Tags to pre-fill when creating new tasks",
                };
                return helpers[schema.name] || undefined;
            },
        };
    }
};
ChoreBotAddTaskCard.styles = i$3 `
    :host {
      display: block;
    }
    ha-card {
      padding: 16px;
      border: none;
    }
    ha-card.no-background {
      padding: 0;
      background: transparent;
      box-shadow: none;
    }
    .button-container {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .add-button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      border: none;
      border-radius: var(--ha-card-border-radius, 12px);
      cursor: pointer;
      font-weight: 500;
      transition:
        transform 0.2s ease,
        box-shadow 0.2s ease,
        filter 0.2s ease;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    .add-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
    .add-button:active {
      transform: translateY(0);
      filter: brightness(0.95);
    }
    .add-button.small {
      padding: 8px 16px;
      font-size: 14px;
    }
    .add-button.medium {
      padding: 12px 24px;
      font-size: 16px;
    }
    .add-button.large {
      padding: 16px 32px;
      font-size: 18px;
    }
    /* Icon-only button styles (when no text) */
    .add-button.icon-only.small {
      padding: 8px;
    }
    .add-button.icon-only.medium {
      padding: 12px;
    }
    .add-button.icon-only.large {
      padding: 16px;
    }
    .add-button ha-icon {
      --mdc-icon-size: 20px;
    }
    .add-button.large ha-icon {
      --mdc-icon-size: 24px;
    }
    ha-dialog {
      --mdc-dialog-min-width: min(500px, 90vw);
    }
  `;
__decorate([
    n({ attribute: false })
], ChoreBotAddTaskCard.prototype, "hass", void 0);
__decorate([
    r()
], ChoreBotAddTaskCard.prototype, "_config", void 0);
__decorate([
    r()
], ChoreBotAddTaskCard.prototype, "_dialogOpen", void 0);
__decorate([
    r()
], ChoreBotAddTaskCard.prototype, "_newTask", void 0);
__decorate([
    r()
], ChoreBotAddTaskCard.prototype, "_saving", void 0);
ChoreBotAddTaskCard = __decorate([
    t("chorebot-add-task-card")
], ChoreBotAddTaskCard);
window.customCards = window.customCards || [];
window.customCards.push({
    type: "chorebot-add-task-card",
    name: "ChoreBot Add Task Card",
    description: "A button card for quickly adding new ChoreBot tasks",
    preview: true,
});
console.info("%c CHOREBOT-ADD-TASK-CARD %c v0.1.0 ", "color: white; background: #4CAF50; font-weight: bold;", "color: #4CAF50; background: white; font-weight: bold;");

// ============================================================================
// Person Display Utilities
// ============================================================================
// Shared utilities for rendering person avatars, points, and profiles
// across multiple ChoreBot cards.
/**
 * Render person avatar (image or initials fallback)
 * @param personEntity - Home Assistant person entity
 * @param personProfile - Person profile with points/settings
 * @param size - Avatar size in pixels (default: 64)
 */
function renderPersonAvatar(hass, personEntityId, personProfile, size = 64) {
    const personEntity = hass.states[personEntityId];
    const pictureUrl = personEntity?.attributes.entity_picture;
    const name = getPersonName(hass, personEntityId);
    const initials = getPersonInitials(name);
    const avatarStyle = `width: ${size}px; height: ${size}px;`;
    const initialsSize = Math.floor(size * 0.375); // 37.5% of avatar size
    if (pictureUrl) {
        return b `
      <div class="person-avatar" style="${avatarStyle}">
        <img src="${pictureUrl}" alt="${name}" />
      </div>
    `;
    }
    return b `
    <div
      class="person-avatar initials"
      style="${avatarStyle} font-size: ${initialsSize}px;"
    >
      ${initials}
    </div>
  `;
}
/**
 * Render person points display with icon/text
 * @param personProfile - Person profile with points balance
 * @param hass - Home Assistant instance for getting points display config
 * @param accentColor - Color for points text (hex or CSS variable)
 */
function renderPersonPoints(personProfile, hass, accentColor) {
    const parts = getPointsDisplayParts(hass);
    return b `
    <div class="person-points" style="color: ${accentColor}">
      ${personProfile.points_balance}
      ${parts.icon ? b `<ha-icon icon="${parts.icon}"></ha-icon>` : ""}
      ${parts.text ? parts.text : ""}
    </div>
  `;
}
/**
 * Get person initials for avatar fallback
 * @param personName - Person's display name
 * @returns Up to 2 uppercase initials
 */
function getPersonInitials(personName) {
    return personName
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2);
}
/**
 * Get person name from entity
 * @param hass - Home Assistant instance
 * @param personId - Person entity ID (e.g., "person.kyle")
 * @returns Friendly name or fallback to entity_id without domain
 */
function getPersonName(hass, personId) {
    const entity = hass.states[personId];
    return entity?.attributes.friendly_name || personId.replace("person.", "");
}
/**
 * Get all person profiles from sensor
 * @param hass - Home Assistant instance
 * @returns Array of PersonProfile objects
 */
function getAllPeople(hass) {
    const sensor = hass.states["sensor.chorebot_points"];
    if (!sensor)
        return [];
    const people = sensor.attributes.people || {};
    return Object.values(people);
}
/**
 * Detect logged-in user's person entity (best-effort)
 * Matches hass.user.name to person entity friendly_name
 * @param hass - Home Assistant instance
 * @returns Person entity ID if detected, null otherwise
 */
function detectCurrentUserPerson(hass) {
    // Check if user info is available
    const userName = hass.user?.name;
    if (!userName)
        return null;
    // Get all person entities
    const personEntities = Object.values(hass.states).filter((e) => e.entity_id.startsWith("person."));
    // Try to find matching person by friendly_name
    const matchingPerson = personEntities.find((p) => p.attributes.friendly_name?.toLowerCase() === userName.toLowerCase());
    return matchingPerson?.entity_id || null;
}

// ============================================================================
// Progress Bar Rendering Utility
// ============================================================================
// Shared utility for rendering progress bars consistently across ChoreBot cards
/**
 * Render a progress bar with fill and text overlay
 * @param progress - Progress object with completed/total counts
 * @param shades - Color shades for styling (lighter for background, darker for fill)
 * @param textColor - Optional text color override (defaults to --text-primary-color)
 * @param ariaLabel - Optional custom aria-label for accessibility
 * @returns TemplateResult for progress bar
 */
function renderProgressBar(progress, shades, textColor, ariaLabel) {
    const percentage = progress.total > 0 ? (progress.completed / progress.total) * 100 : 0;
    const finalTextColor = textColor || "var(--text-primary-color)";
    const label = `${progress.completed} of ${progress.total} tasks completed`;
    return b `
    <div
      class="progress-bar"
      style="background: #${shades.lighter}"
      aria-label="${label}"
    >
      <div
        class="progress-bar-fill"
        style="width: ${percentage}%; background: #${shades.darker}"
      ></div>
      <div class="progress-text" style="color: ${finalTextColor}">
        ${progress.completed}/${progress.total}
      </div>
    </div>
  `;
}

// ============================================================================
// ChoreBot Person Points Card (TypeScript)
// ============================================================================
/**
 * ChoreBot Person Points Card
 *
 * Displays a single person's avatar and current points balance in a compact
 * horizontal layout. Designed to be placed above a person's task list card
 * for quick visual feedback.
 */
let ChoreBotPersonPointsCard = class ChoreBotPersonPointsCard extends i {
    constructor() {
        super(...arguments);
        this.shades = {
            lighter: "",
            light: "",
            base: "",
            dark: "",
            darker: "",
        };
    }
    setConfig(config) {
        if (!config.person_entity) {
            throw new Error("person_entity is required");
        }
        this._config = {
            type: "custom:chorebot-person-points-card",
            person_entity: config.person_entity,
            title: config.title || "Points",
            show_title: config.show_title !== false,
            hide_card_background: config.hide_card_background === true,
            show_progress: config.show_progress !== false, // Default: true
            accent_color: config.accent_color || "",
            progress_text_color: config.progress_text_color || "",
        };
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        // Recalculate color shades when config or hass changes
        if ((changedProperties.has("_config") || changedProperties.has("hass")) &&
            this._config &&
            this.hass) {
            const baseColor = resolveAccentColor(this.hass, this._config.accent_color, this._config.person_entity);
            this.shades = calculateColorShades(baseColor);
        }
        // Recalculate progress when hass or config changes
        if ((changedProperties.has("hass") || changedProperties.has("_config")) &&
            this.hass &&
            this._config) {
            this._progress = this._calculatePersonProgress();
        }
    }
    _calculatePersonProgress() {
        if (!this.hass || !this._config) {
            return { completed: 0, total: 0 };
        }
        // Get all ChoreBot todo entities
        const allStates = Object.values(this.hass.states);
        const todoEntities = allStates.filter((e) => e.entity_id.startsWith("todo."));
        const entities = todoEntities.filter((e) => e.entity_id.startsWith("todo.chorebot_"));
        // Filter tasks assigned to this person (excludes dateless by default)
        const personTasks = filterTasksByPerson(entities, this._config.person_entity, false);
        // Calculate progress for dated tasks only
        return calculateDatedTasksProgress(personTasks);
    }
    static getStubConfig() {
        return {
            type: "custom:chorebot-person-points-card",
            person_entity: "",
            title: "Points",
            show_title: true,
            hide_card_background: false,
            show_progress: true,
            accent_color: "",
            progress_text_color: "",
        };
    }
    static getConfigForm() {
        return {
            schema: [
                {
                    name: "person_entity",
                    required: true,
                    selector: {
                        entity: {
                            filter: { domain: "person" },
                        },
                    },
                },
                {
                    name: "title",
                    default: "Points",
                    selector: { text: {} },
                },
                {
                    name: "show_title",
                    default: true,
                    selector: { boolean: {} },
                },
                {
                    name: "hide_card_background",
                    default: false,
                    selector: { boolean: {} },
                },
                {
                    name: "show_progress",
                    default: true,
                    selector: { boolean: {} },
                },
                {
                    name: "accent_color",
                    selector: { text: {} },
                },
                {
                    name: "progress_text_color",
                    selector: { text: {} },
                },
            ],
            computeLabel: (schema) => {
                const labels = {
                    person_entity: "Person Entity",
                    title: "Card Title",
                    show_title: "Show Title",
                    hide_card_background: "Hide Card Background",
                    show_progress: "Show Progress Bar",
                    accent_color: "Accent Color",
                    progress_text_color: "Progress Text Color",
                };
                return labels[schema.name] || undefined;
            },
            computeHelper: (schema) => {
                const helpers = {
                    person_entity: "Select the person entity to display points for",
                    title: "Custom title for the card",
                    show_title: "Show the card title",
                    hide_card_background: "Hide the card background and padding for a seamless look",
                    show_progress: "Display task completion progress below the person's name",
                    accent_color: "Accent color for progress bar and points text (hex code or CSS variable like var(--primary-color))",
                    progress_text_color: "Text color for progress label (hex code or CSS variable)",
                };
                return helpers[schema.name] || undefined;
            },
        };
    }
    getCardSize() {
        return 1;
    }
    render() {
        if (!this.hass || !this._config) {
            return b ``;
        }
        // Check if ChoreBot sensor exists
        const sensor = this.hass.states["sensor.chorebot_points"];
        if (!sensor) {
            return b `<ha-card>
        <div class="error-message">
          ChoreBot Points sensor not found. Make sure the integration is set up.
        </div>
      </ha-card>`;
        }
        // Check if person entity exists
        const personEntity = this.hass.states[this._config.person_entity];
        if (!personEntity) {
            return b `<ha-card>
        <div class="error-message">
          Person entity not found. Please check your configuration.
        </div>
      </ha-card>`;
        }
        // Get person data from sensor
        const people = sensor.attributes.people || {};
        const personData = people[this._config.person_entity];
        if (!personData) {
            return b `<ha-card>
        <div class="error-message">
          Person not found in points system. Complete tasks to earn points.
        </div>
      </ha-card>`;
        }
        return b `
      <ha-card
        class="${this._config.hide_card_background ? "no-background" : ""}"
      >
        ${this._config.show_title
            ? b `<div class="card-header">${this._config.title}</div>`
            : ""}
        ${this._renderPersonDisplay(personEntity, personData)}
      </ha-card>
    `;
    }
    _renderPersonDisplay(personEntity, personData) {
        const name = getPersonName(this.hass, this._config.person_entity);
        return b `
      <div class="person-container">
        <div class="person-left">
          ${renderPersonAvatar(this.hass, this._config.person_entity, personData, 64)}
        </div>
        <div class="person-info">
          <div class="person-header">
            <div class="person-name">${name}</div>
            ${renderPersonPoints(personData, this.hass, `#${this.shades.base}`)}
          </div>
          ${this._config.show_progress && this._progress
            ? this._renderProgressBar(this._progress)
            : ""}
        </div>
      </div>
    `;
    }
    _renderProgressBar(progress) {
        return renderProgressBar(progress, this.shades, this._config.progress_text_color);
    }
};
ChoreBotPersonPointsCard.styles = i$3 `
    :host {
      display: block;
      margin-bottom: 1em;
    }

    ha-card {
      padding: 16px;
      border: none;
    }

    ha-card.no-background {
      padding: 0;
      background: transparent;
      box-shadow: none;
    }

    .card-header {
      font-size: 24px;
      font-weight: 500;
      margin-bottom: 16px;
    }

    .person-container {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .person-left {
      flex-shrink: 0;
    }

    .person-avatar {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      overflow: hidden;
    }

    .person-avatar img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .person-avatar.initials {
      background: linear-gradient(
        135deg,
        var(--primary-color),
        var(--accent-color)
      );
      color: white;
      font-size: 24px;
      font-weight: bold;
    }

    .person-info {
      display: flex;
      flex-direction: column;
      gap: 6px;
      flex: 1;
      min-width: 0; /* Allow truncation */
    }

    .person-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      line-height: 1;
    }

    .person-name {
      font-size: 24px;
      font-weight: 500;
      color: var(--primary-text-color);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      flex: 1;
      min-width: 0;
      line-height: 1;
    }

    .progress-bar {
      position: relative;
      border-radius: 12px;
      height: 24px;
      overflow: hidden;
      box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
      width: 100%; /* Full width of person-info */
    }

    .progress-bar-fill {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      transition: width 0.3s ease;
      border-radius: 12px;
    }

    .progress-text {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      font-weight: 500;
      z-index: 1;
    }

    .person-points {
      font-size: 24px;
      font-weight: bold;
      color: var(--primary-color);
      white-space: nowrap;
      display: flex;
      align-items: center;
      gap: 4px;
      flex-shrink: 0;
      line-height: 1;
    }

    .person-points ha-icon {
      --mdc-icon-size: 20px;
      display: flex;
    }

    .error-message {
      text-align: center;
      padding: 32px;
      color: var(--error-color);
      font-size: 16px;
    }

    /* Responsive: smaller avatar on mobile */
    @media (max-width: 600px) {
      .person-avatar {
        width: 48px;
        height: 48px;
      }

      .person-avatar.initials {
        font-size: 18px;
      }

      .person-name {
        font-size: 20px;
      }

      .person-points {
        font-size: 20px;
      }

      .person-points ha-icon {
        --mdc-icon-size: 18px;
      }
    }
  `;
__decorate([
    n({ attribute: false })
], ChoreBotPersonPointsCard.prototype, "hass", void 0);
__decorate([
    r()
], ChoreBotPersonPointsCard.prototype, "_config", void 0);
__decorate([
    r()
], ChoreBotPersonPointsCard.prototype, "_progress", void 0);
ChoreBotPersonPointsCard = __decorate([
    t("chorebot-person-points-card")
], ChoreBotPersonPointsCard);
window.customCards = window.customCards || [];
window.customCards.push({
    type: "chorebot-person-points-card",
    name: "ChoreBot Person Points Card",
    description: "Display a person's avatar and points balance",
    preview: true,
});
console.info("%c CHOREBOT-PERSON-POINTS-CARD %c v0.1.0 ", "color: white; background: #FF9800; font-weight: bold;", "color: #FF9800; background: white; font-weight: bold;");

// ============================================================================
// ChoreBot Rewards Card (TypeScript)
// ============================================================================
/**
 * ChoreBot Rewards Card
 *
 * Displays rewards for a single person with:
 * - Filtered rewards grid (only rewards for configured person)
 * - Click reward card to open confirmation modal (no separate redeem button)
 * - "Add Reward" placeholder card at end of grid
 * - Create reward modal with form fields
 * - Confetti animation on successful redemption
 */
let ChoreBotPersonRewardsCard$1 = class ChoreBotPersonRewardsCard extends i {
    constructor() {
        super(...arguments);
        this._redeeming = null; // reward_id being redeemed
        this._showConfirmModal = false; // Show redemption confirmation
        this._showAddRewardModal = false; // Show add reward modal
        this._pendingRedemption = null; // Pending redemption details
        this._rewardFormData = {
            name: "",
            cost: 50,
            icon: "mdi:gift",
            description: "",
        }; // Reward form data for ha-form
        this._showEditRewardModal = false;
        this._editingRewardId = null;
        this._rewardFormSchema = [
            { name: "name", required: true, selector: { text: {} } },
            { name: "cost", required: true, selector: { number: { min: 1, max: 10000, mode: "box" } } },
            { name: "icon", selector: { icon: {} } },
            { name: "description", selector: { text: { multiline: true } } },
        ];
        this._computeRewardFieldLabel = (schema) => {
            const parts = getPointsDisplayParts(this.hass);
            // Use only text for label (can't render icon in text field)
            const displayStr = parts.text
                ? parts.text.charAt(0).toUpperCase() + parts.text.slice(1)
                : "Points";
            const labels = {
                name: "Name",
                cost: `Cost (${displayStr})`,
                icon: "Icon",
                description: "Description (Optional)",
            };
            return labels[schema.name] || schema.name;
        };
        this._computeRewardFieldHelper = (schema) => {
            const parts = getPointsDisplayParts(this.hass);
            // Use only text for helper (can't render icon in text field)
            const displayStr = parts.text || "points";
            const helpers = {
                cost: `Cost between 1 and 10,000 ${displayStr}`,
                icon: "Use Material Design Icons (e.g., mdi:gift, mdi:ice-cream)",
            };
            return helpers[schema.name] || "";
        };
        this._handleRewardFormChange = (ev) => {
            this._rewardFormData = ev.detail.value;
        };
    }
    setConfig(config) {
        if (!config.person_entity) {
            throw new Error("person_entity is required");
        }
        this._config = {
            type: "custom:chorebot-rewards-card",
            person_entity: config.person_entity,
            title: config.title || undefined, // Will default to "{Name}'s Rewards" in render
            show_title: config.show_title !== false,
            hide_card_background: config.hide_card_background === true,
            show_disabled_rewards: config.show_disabled_rewards === true,
            sort_by: config.sort_by || "cost",
            show_add_reward_button: config.show_add_reward_button !== false,
            accent_color: config.accent_color || "",
        };
    }
    static getStubConfig() {
        return {
            type: "custom:chorebot-rewards-card",
            person_entity: "person.example",
            title: "My Rewards",
            show_title: true,
            hide_card_background: false,
            show_disabled_rewards: false,
            sort_by: "cost",
            show_add_reward_button: true,
            accent_color: "",
        };
    }
    getCardSize() {
        return 3;
    }
    static getConfigForm() {
        return {
            schema: [
                {
                    name: "person_entity",
                    required: true,
                    selector: { entity: { domain: "person" } },
                },
                {
                    name: "title",
                    selector: { text: {} },
                },
                {
                    name: "show_title",
                    default: true,
                    selector: { boolean: {} },
                },
                {
                    name: "hide_card_background",
                    default: false,
                    selector: { boolean: {} },
                },
                {
                    name: "show_disabled_rewards",
                    default: false,
                    selector: { boolean: {} },
                },
                {
                    name: "sort_by",
                    default: "cost",
                    selector: {
                        select: {
                            options: [
                                { label: "Cost (Low to High)", value: "cost" },
                                { label: "Name (A-Z)", value: "name" },
                                { label: "Date Created (Oldest First)", value: "created" },
                            ],
                        },
                    },
                },
                {
                    name: "show_add_reward_button",
                    default: true,
                    selector: { boolean: {} },
                },
                {
                    name: "accent_color",
                    selector: { text: {} },
                },
            ],
            computeLabel: (schema) => {
                const labels = {
                    person_entity: "Person Entity",
                    title: "Card Title",
                    show_title: "Show Title",
                    hide_card_background: "Hide Card Background",
                    show_disabled_rewards: "Show Disabled Rewards",
                    sort_by: "Sort Rewards By",
                    show_add_reward_button: "Show Add Reward Button",
                    accent_color: "Accent Color",
                };
                return labels[schema.name] || undefined;
            },
            computeHelper: (schema) => {
                const helpers = {
                    person_entity: "Select the person whose rewards to display",
                    title: 'Custom title for the card (defaults to "{Person Name}\'s Rewards")',
                    show_title: "Show the card title",
                    hide_card_background: "Hide the card background and padding for a seamless look",
                    show_disabled_rewards: "Include rewards that have been disabled in the grid",
                    sort_by: "Choose how to sort the rewards in the grid",
                    show_add_reward_button: "Show the 'Add Reward' card for creating new rewards",
                    accent_color: "Accent color for reward icons and buttons (hex code or CSS variable like var(--primary-color))",
                };
                return helpers[schema.name] || undefined;
            },
        };
    }
    render() {
        if (!this.hass || !this._config) {
            return b `<ha-card>Loading...</ha-card>`;
        }
        // Validate person entity exists
        const personEntity = this.hass.states[this._config.person_entity];
        if (!personEntity) {
            return b `<ha-card>
        <div class="error-state">
          Person entity "${this._config.person_entity}" not found. Please check
          your configuration.
        </div>
      </ha-card>`;
        }
        // Get points sensor entity
        const sensor = this.hass.states["sensor.chorebot_points"];
        if (!sensor) {
            return b `<ha-card>
        <div class="empty-state">
          ChoreBot Points sensor not found. Make sure the integration is set up.
        </div>
      </ha-card>`;
        }
        const people = sensor.attributes.people || {};
        const rewards = sensor.attributes.rewards || [];
        // Precedence: Manual config > Person profile > Theme default
        let accentColor = "var(--primary-color)"; // Default fallback
        // Check for centralized person color from sensor
        if (this._config.person_entity) {
            const personProfile = people[this._config.person_entity];
            if (personProfile?.accent_color) {
                accentColor = personProfile.accent_color;
            }
        }
        // Manual config overrides everything
        if (this._config.accent_color) {
            accentColor = this._config.accent_color;
        }
        // Set CSS variable for accent color
        this.style.setProperty("--accent-color", accentColor);
        // Get person name for default title
        const personName = getPersonName(this.hass, this._config.person_entity);
        const cardTitle = this._config.title || `${personName}'s Rewards`;
        return b `
      <ha-card
        class="${this._config.hide_card_background ? "no-background" : ""}"
      >
        ${this._config.show_title
            ? b `<div class="card-header">${cardTitle}</div>`
            : ""}
        ${this._renderRewardsGrid(rewards, people)}
      </ha-card>
      ${this._showConfirmModal ? this._renderConfirmModal(people, rewards) : ""}
      ${this._showAddRewardModal ? this._renderAddRewardModal() : ""}
      ${this._showEditRewardModal ? this._renderEditRewardModal() : ""}
    `;
    }
    _renderConfirmModal(people, rewards) {
        if (!this._pendingRedemption || !this._config)
            return "";
        const { personId, rewardId } = this._pendingRedemption;
        const person = people[personId];
        const reward = rewards.find((r) => r.id === rewardId);
        if (!person || !reward)
            return "";
        const personName = getPersonName(this.hass, personId);
        const remainingPoints = person.points_balance - reward.cost;
        const canAfford = person.points_balance >= reward.cost;
        const canRedeem = reward.enabled && canAfford;
        const parts = getPointsDisplayParts(this.hass);
        return b `
      <div class="modal-overlay" @click="${this._cancelRedemption}">
        <div
          class="modal-content"
          @click="${(e) => e.stopPropagation()}"
        >
          <div class="modal-header">
            ${canRedeem ? "Are you sure?" : "Reward Details"}
            <button
              class="edit-button"
              @click="${() => this._handleEditButtonClick(reward.id)}"
              title="Edit Reward"
            >
              <ha-icon icon="mdi:pencil"></ha-icon>
            </button>
          </div>
          <div class="modal-body">
            <div class="modal-info">
              <div class="modal-info-row">
                <span class="modal-info-label">Person:</span>
                <span class="modal-info-value">${personName}</span>
              </div>
              <div class="modal-info-row">
                <span class="modal-info-label">Reward:</span>
                <span class="modal-info-value">${reward.name}</span>
              </div>
              <div class="modal-info-row">
                <span class="modal-info-label">Cost:</span>
                <span class="modal-info-value"
                  >${reward.cost}
                  ${parts.icon
            ? b `<ha-icon icon="${parts.icon}"></ha-icon>`
            : ""}
                  ${parts.text ? parts.text : ""}</span
                >
              </div>
              <div class="modal-info-row">
                <span class="modal-info-label">Current Balance:</span>
                <span class="modal-info-value"
                  >${person.points_balance}
                  ${parts.icon
            ? b `<ha-icon icon="${parts.icon}"></ha-icon>`
            : ""}
                  ${parts.text ? parts.text : ""}</span
                >
              </div>
              <div class="modal-info-row">
                <span class="modal-info-label">Remaining Balance:</span>
                <span
                  class="modal-info-value"
                  style="color: ${remainingPoints < 0
            ? "var(--error-color)"
            : "inherit"}"
                  >${remainingPoints}
                  ${parts.icon
            ? b `<ha-icon icon="${parts.icon}"></ha-icon>`
            : ""}
                  ${parts.text ? parts.text : ""}</span
                >
              </div>
              ${!reward.enabled
            ? b `<div
                    style="margin-top: 12px; color: var(--warning-color); font-size: 14px; text-align: center;"
                  >
                    This reward is currently disabled.
                  </div>`
            : ""}
              ${!canAfford
            ? b `<div
                    style="margin-top: 12px; color: var(--error-color); font-size: 14px; text-align: center;"
                  >
                    Not enough points to redeem this reward.
                  </div>`
            : ""}
            </div>
          </div>
          <div class="modal-actions">
            <button
              class="modal-button cancel"
              @click="${this._cancelRedemption}"
            >
              ${canRedeem ? "Cancel" : "Close"}
            </button>
            <button
              class="modal-button confirm"
              ?disabled="${!canRedeem}"
              @click="${this._confirmRedemption}"
            >
              Redeem
            </button>
          </div>
        </div>
      </div>
    `;
    }
    _renderAddRewardModal() {
        if (!this._config)
            return "";
        return b `
      <ha-dialog
        open
        @closed=${this._closeAddRewardModal}
        heading="Add New Reward"
      >
        <ha-form
          .hass=${this.hass}
          .schema=${this._rewardFormSchema}
          .data=${this._rewardFormData}
          .computeLabel=${this._computeRewardFieldLabel}
          .computeHelper=${this._computeRewardFieldHelper}
          @value-changed=${this._handleRewardFormChange}
        ></ha-form>

        <ha-button
          slot="primaryAction"
          @click=${this._createReward}
          ?disabled=${!this._rewardFormData.name?.trim()}
        >
          Create
        </ha-button>
        <ha-button slot="secondaryAction" @click=${this._closeAddRewardModal}>
          Cancel
        </ha-button>
      </ha-dialog>
    `;
    }
    _renderEditRewardModal() {
        if (!this._config)
            return "";
        return b `
      <ha-dialog
        open
        @closed=${this._closeEditRewardModal}
        heading="Edit Reward"
      >
        <ha-form
          .hass=${this.hass}
          .schema=${this._rewardFormSchema}
          .data=${this._rewardFormData}
          .computeLabel=${this._computeRewardFieldLabel}
          .computeHelper=${this._computeRewardFieldHelper}
          @value-changed=${this._handleRewardFormChange}
        ></ha-form>

        <ha-button
          slot="secondaryAction"
          @click=${this._deleteReward}
          class="delete-button"
        >
          Delete
        </ha-button>
        
        <ha-button slot="secondaryAction" @click=${this._closeEditRewardModal}>
          Cancel
        </ha-button>
        
        <ha-button
          slot="primaryAction"
          @click=${this._updateReward}
          ?disabled=${!this._rewardFormData.name?.trim()}
        >
          Save
        </ha-button>
        
        <style>
          .delete-button {
            --mdc-theme-primary: var(--error-color, #db4437);
            --mdc-button-outline-color: var(--error-color, #db4437);
            --mdc-theme-on-primary: white;
            --wa-color-fill-loud: var(--error-color, #db4437);
            --wa-color-neutral-fill-loud: var(--error-color, #db4437);
            background-color: var(--error-color, #db4437);
            color: white;
            position: absolute;
            left: 16px;
          }
        </style>
      </ha-dialog>
    `;
    }
    _renderRewardsGrid(rewards, people) {
        if (!this._config)
            return "";
        // Filter rewards by person_id
        const personRewards = rewards.filter((r) => r.person_id === this._config.person_entity);
        // Filter by enabled/disabled
        const filteredRewards = personRewards.filter((r) => this._config.show_disabled_rewards || r.enabled);
        // Sort rewards
        const sortedRewards = this._sortRewards(filteredRewards);
        // Get person's balance
        const person = people[this._config.person_entity];
        if (sortedRewards.length === 0 && !this._config.show_add_reward_button) {
            return b `<div class="empty-state">
        No rewards configured yet. Use the "Add Reward" button or
        <code>chorebot.manage_reward</code> service to create rewards.
      </div>`;
        }
        return b `
      <div class="rewards-grid">
        ${sortedRewards.map((reward) => this._renderRewardCard(reward, person))}
        ${this._config.show_add_reward_button
            ? this._renderAddRewardCard()
            : ""}
      </div>
    `;
    }
    _renderRewardCard(reward, person) {
        const canAfford = person ? person.points_balance >= reward.cost : false;
        const isDisabled = !reward.enabled || !canAfford;
        const parts = getPointsDisplayParts(this.hass);
        return b `
      <div
        class="reward-card ${isDisabled ? "disabled" : ""}"
        @click="${() => this._handleRewardClick(reward, canAfford)}"
      >
        <div class="reward-icon-section">
          <div class="reward-icon">
            <ha-icon icon="${reward.icon}"></ha-icon>
          </div>
        </div>
        <div class="reward-info">
          <div class="reward-header">
            <div class="reward-name">${reward.name}</div>
            <div class="reward-cost">
              ${reward.cost}
              ${parts.icon
            ? b `<ha-icon icon="${parts.icon}"></ha-icon>`
            : ""}
              ${parts.text ? parts.text : ""}
            </div>
          </div>
          ${reward.description
            ? b `<div class="reward-description">${reward.description}</div>`
            : ""}
        </div>
      </div>
    `;
    }
    _renderAddRewardCard() {
        return b `
      <div class="add-reward-card" @click="${this._openAddRewardModal}">
        <div class="add-reward-icon-section">
          <div class="add-reward-icon">
            <ha-icon icon="mdi:plus"></ha-icon>
          </div>
        </div>
        <div class="add-reward-info">
          <div class="add-reward-text">Add Reward</div>
        </div>
      </div>
    `;
    }
    _sortRewards(rewards) {
        const sorted = [...rewards];
        switch (this._config.sort_by) {
            case "name":
                return sorted.sort((a, b) => a.name.localeCompare(b.name));
            case "created":
                return sorted.sort((a, b) => new Date(a.created || 0).getTime() -
                    new Date(b.created || 0).getTime());
            case "cost":
            default:
                return sorted.sort((a, b) => a.cost - b.cost);
        }
    }
    _handleRewardClick(reward, canAfford) {
        // Always open modal to show reward details (button will be disabled if can't redeem)
        this._pendingRedemption = {
            personId: this._config.person_entity,
            rewardId: reward.id,
        };
        this._showConfirmModal = true;
    }
    _cancelRedemption() {
        this._showConfirmModal = false;
        this._pendingRedemption = null;
    }
    async _confirmRedemption() {
        if (!this._pendingRedemption)
            return;
        const { personId, rewardId } = this._pendingRedemption;
        // Close modal
        this._showConfirmModal = false;
        this._pendingRedemption = null;
        // Set redeeming state
        this._redeeming = rewardId;
        try {
            await this.hass.callService("chorebot", "redeem_reward", {
                person_id: personId,
                reward_id: rewardId,
            });
            // Show success animation (star shower with themed colors)
            this._showRedemptionSuccess();
        }
        catch (err) {
            // Show error message
            const errorMessage = err.message || "Failed to redeem reward. Please try again.";
            alert(errorMessage);
        }
        finally {
            this._redeeming = null;
        }
    }
    _showRedemptionSuccess() {
        // Get base color from accent color (fallback to primary color)
        const baseColor = this._config.accent_color ||
            getComputedStyle(this).getPropertyValue("--primary-color") ||
            "#03a9f4";
        // Extract color variants (lighter and darker shades)
        const colors = extractColorVariants(baseColor);
        // Play star shower animation
        playStarShower(colors, 3000);
    }
    _openAddRewardModal() {
        // Reset form
        this._rewardFormData = {
            name: "",
            cost: 50,
            icon: "mdi:gift",
            description: "",
        };
        this._showAddRewardModal = true;
    }
    _closeAddRewardModal() {
        this._showAddRewardModal = false;
    }
    async _createReward() {
        if (!this._config)
            return;
        const { name, cost, icon, description } = this._rewardFormData;
        if (!name.trim()) {
            alert("Reward name is required");
            return;
        }
        try {
            await this.hass.callService("chorebot", "manage_reward", {
                name: name.trim(),
                cost: Math.max(1, Math.min(10000, cost)), // Clamp between 1 and 10000
                icon: icon || "mdi:gift",
                description: description.trim(),
                person_id: this._config.person_entity, // Pre-filled from config
            });
            // Close modal
            this._closeAddRewardModal();
        }
        catch (err) {
            // Show error message
            const errorMessage = err.message || "Failed to create reward. Please try again.";
            alert(errorMessage);
        }
    }
    _openEditRewardModal(rewardId) {
        if (!this.hass)
            return;
        // Find reward in sensor attributes
        const sensor = this.hass.states["sensor.chorebot_points"];
        if (!sensor)
            return;
        const rewards = sensor.attributes.rewards || [];
        const reward = rewards.find((r) => r.id === rewardId);
        if (!reward) {
            alert("Reward not found");
            return;
        }
        // Populate form with existing reward data
        this._rewardFormData = {
            name: reward.name,
            cost: reward.cost,
            icon: reward.icon,
            description: reward.description || "",
        };
        this._editingRewardId = rewardId;
        this._showEditRewardModal = true;
    }
    _closeEditRewardModal() {
        this._showEditRewardModal = false;
        this._editingRewardId = null;
        // Reset form to defaults
        this._rewardFormData = {
            name: "",
            cost: 50,
            icon: "mdi:gift",
            description: "",
        };
    }
    _handleEditButtonClick(rewardId) {
        // Close redemption modal
        this._showConfirmModal = false;
        this._pendingRedemption = null;
        // Open edit modal
        this._openEditRewardModal(rewardId);
    }
    async _updateReward() {
        if (!this._config || !this._editingRewardId)
            return;
        const { name, cost, icon, description } = this._rewardFormData;
        if (!name.trim()) {
            alert("Reward name is required");
            return;
        }
        try {
            await this.hass.callService("chorebot", "manage_reward", {
                reward_id: this._editingRewardId, // Key difference from _createReward
                name: name.trim(),
                cost: Math.max(1, Math.min(10000, cost)),
                icon: icon || "mdi:gift",
                description: description.trim(),
                person_id: this._config.person_entity,
            });
            // Close modal
            this._closeEditRewardModal();
        }
        catch (err) {
            const errorMessage = err.message || "Failed to update reward. Please try again.";
            alert(errorMessage);
        }
    }
    async _deleteReward() {
        if (!this._config || !this._editingRewardId)
            return;
        if (!confirm("Delete this reward? This action cannot be undone.")) {
            return;
        }
        try {
            await this.hass.callService("chorebot", "delete_reward", {
                reward_id: this._editingRewardId,
            });
            // Close modal
            this._closeEditRewardModal();
        }
        catch (err) {
            const errorMessage = err.message || "Failed to delete reward. Please try again.";
            alert(errorMessage);
        }
    }
};
ChoreBotPersonRewardsCard$1.styles = i$3 `
    :host {
      display: block;
      /* HA Dialog styling */
      --mdc-dialog-content-ink-color: var(--primary-text-color);
      --mdc-dialog-heading-ink-color: var(--primary-text-color);
      --mdc-dialog-max-width: 400px;
      /* HA Form field styling */
      --mdc-text-field-outlined-idle-border-color: var(--divider-color);
      --mdc-text-field-outlined-hover-border-color: var(--primary-color);
      --mdc-theme-primary: var(--primary-color);
      --mdc-text-field-fill-color: var(--card-background-color);
      --mdc-text-field-ink-color: var(--primary-text-color);
      --mdc-text-field-label-ink-color: var(--primary-text-color);
    }

    ha-card {
      padding: 16px;
      border: none;
    }

    ha-card.no-background {
      padding: 0;
      background: transparent;
      box-shadow: none;
    }

    ha-dialog {
      --mdc-dialog-min-width: min(500px, 90vw);
    }

    ha-form {
      display: block;
    }

    .card-header {
      font-size: 24px;
      font-weight: 500;
      margin-bottom: 16px;
    }

    /* Rewards Grid */
    .rewards-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 16px;
    }

    .reward-card {
      border-radius: 12px;
      background: var(--card-background-color);
      border: 1px solid var(--divider-color);
      display: flex;
      flex-direction: row;
      overflow: hidden;
      cursor: pointer;
      transition: all 0.2s ease;
      min-height: 80px;
      height: 80px;
    }

    .reward-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    .reward-card.disabled {
      opacity: 0.6;
    }

    .reward-icon-section {
      flex-shrink: 0;
      width: 80px;
      background: var(--accent-color, var(--primary-color));
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .reward-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
    }

    .reward-icon ha-icon {
      --mdc-icon-size: 36px;
    }

    .reward-info {
      flex: 1;
      padding: 12px 16px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 6px;
      min-width: 0;
    }

    .reward-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      line-height: 1;
    }

    .reward-name {
      font-size: 18px;
      font-weight: 500;
      color: var(--primary-text-color);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      flex: 1;
      min-width: 0;
      line-height: 1;
    }

    .reward-cost {
      font-size: 20px;
      font-weight: bold;
      color: var(--accent-color, var(--primary-color));
      white-space: nowrap;
      display: flex;
      align-items: center;
      gap: 4px;
      flex-shrink: 0;
      line-height: 1;
    }

    .reward-cost ha-icon {
      --mdc-icon-size: 16px;
      display: flex;
    }

    .reward-description {
      font-size: 13px;
      color: var(--secondary-text-color);
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      line-height: 1.3;
    }

    /* Add Reward Card */
    .add-reward-card {
      border-radius: 12px;
      background: var(--card-background-color);
      border: 2px dashed var(--divider-color);
      display: flex;
      flex-direction: row;
      overflow: hidden;
      cursor: pointer;
      transition: all 0.2s ease;
      min-height: 80px;
      height: 80px;
    }

    .add-reward-card:hover {
      border-color: var(--accent-color, var(--primary-color));
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    .add-reward-icon-section {
      flex-shrink: 0;
      width: 80px;
      background: color-mix(in srgb, var(--divider-color) 50%, transparent);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
    }

    .add-reward-card:hover .add-reward-icon-section {
      background: color-mix(
        in srgb,
        var(--accent-color, var(--primary-color)) 20%,
        var(--card-background-color)
      );
    }

    .add-reward-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--secondary-text-color);
      transition: all 0.2s ease;
    }

    .add-reward-card:hover .add-reward-icon {
      color: var(--accent-color, var(--primary-color));
    }

    .add-reward-icon ha-icon {
      --mdc-icon-size: 36px;
    }

    .add-reward-info {
      flex: 1;
      padding: 12px 16px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .add-reward-text {
      font-size: 18px;
      font-weight: 500;
      color: var(--secondary-text-color);
      transition: all 0.2s ease;
    }

    .add-reward-card:hover .add-reward-text {
      color: var(--accent-color, var(--primary-color));
    }

    /* Modal Overlay */
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    }

    .modal-content {
      background: var(--card-background-color);
      border-radius: 12px;
      padding: 24px;
      max-width: 400px;
      width: 90%;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
      max-height: 90vh;
      overflow-y: auto;
    }

    .modal-header {
      position: relative; /* For absolute positioning of edit button */
      font-size: 20px;
      font-weight: 500;
      margin-bottom: 16px;
      color: var(--primary-text-color);
    }

    .edit-button {
      position: absolute;
      top: 8px;
      right: 8px;
      background: transparent;
      border: none;
      cursor: pointer;
      color: var(--primary-text-color);
      padding: 8px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0.7;
      transition: all 0.2s;
    }

    .edit-button:hover {
      opacity: 1;
      background: var(--secondary-background-color);
    }

    .edit-button ha-icon {
      --mdc-icon-size: 20px;
    }

    .modal-body {
      margin-bottom: 24px;
      color: var(--primary-text-color);
    }

    /* Confirmation Modal Info */
    .modal-info {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 16px;
      background: var(--secondary-background-color);
      border-radius: 8px;
      margin-top: 12px;
    }

    .modal-info-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .modal-info-label {
      color: var(--secondary-text-color);
      font-size: 14px;
    }

    .modal-info-value {
      color: var(--primary-text-color);
      font-size: 14px;
      font-weight: 500;
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .modal-info-value ha-icon {
      --mdc-icon-size: 14px;
      display: flex;
    }

    /* Modal Actions (used by confirmation modal only) */
    .modal-actions {
      display: flex;
      gap: 12px;
      justify-content: flex-end;
    }

    .modal-button {
      padding: 10px 20px;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-size: 14px;
      font-weight: 500;
      transition: all 0.2s ease;
    }

    .modal-button.cancel {
      background: var(--secondary-background-color);
      color: var(--primary-text-color);
    }

    .modal-button.cancel:hover {
      background: var(--divider-color);
    }

    .modal-button.confirm {
      background: var(--accent-color, var(--primary-color));
      color: white;
    }

    .modal-button.confirm:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    .modal-button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .modal-button:disabled:hover {
      transform: none;
      box-shadow: none;
    }

    .empty-state {
      text-align: center;
      padding: 32px;
      color: var(--secondary-text-color);
    }

    .error-state {
      text-align: center;
      padding: 32px;
      color: var(--error-color);
    }
  `;
__decorate([
    n({ attribute: false })
], ChoreBotPersonRewardsCard$1.prototype, "hass", void 0);
__decorate([
    r()
], ChoreBotPersonRewardsCard$1.prototype, "_config", void 0);
__decorate([
    r()
], ChoreBotPersonRewardsCard$1.prototype, "_redeeming", void 0);
__decorate([
    r()
], ChoreBotPersonRewardsCard$1.prototype, "_showConfirmModal", void 0);
__decorate([
    r()
], ChoreBotPersonRewardsCard$1.prototype, "_showAddRewardModal", void 0);
__decorate([
    r()
], ChoreBotPersonRewardsCard$1.prototype, "_pendingRedemption", void 0);
__decorate([
    r()
], ChoreBotPersonRewardsCard$1.prototype, "_rewardFormData", void 0);
__decorate([
    r()
], ChoreBotPersonRewardsCard$1.prototype, "_showEditRewardModal", void 0);
__decorate([
    r()
], ChoreBotPersonRewardsCard$1.prototype, "_editingRewardId", void 0);
ChoreBotPersonRewardsCard$1 = __decorate([
    t("chorebot-rewards-card")
], ChoreBotPersonRewardsCard$1);
window.customCards = window.customCards || [];
window.customCards.push({
    type: "chorebot-rewards-card",
    name: "ChoreBot Rewards Card",
    description: "Display person-specific rewards with inline creation and redemption",
    preview: true,
});
console.info("%c CHOREBOT-REWARDS-CARD %c v0.1.0 ", "color: white; background: #9C27B0; font-weight: bold;", "color: #9C27B0; background: white; font-weight: bold;");

// ============================================================================
// Person Dropdown Utilities
// ============================================================================
// Shared utilities for rendering person selection dropdowns across multiple
// ChoreBot cards. Provides person dropdown UI and auto-detection logic.
/**
 * Render person dropdown UI with header and collapsible list
 *
 * CSS Requirements (must be defined in consuming component):
 * - .person-section (container for dropdown positioning)
 * - .person-header (header display with avatar/name/points)
 * - .person-container, .person-left, .person-info (layout containers)
 * - .person-header-row (row for name/points/chevron)
 * - .person-name (person name text)
 * - .person-points-and-chevron (container for points + chevron)
 * - .person-points (points display styling)
 * - .dropdown-chevron (chevron icon with rotation)
 * - .person-dropdown (dropdown container with grid animation)
 * - .person-dropdown-inner (scrollable inner container)
 * - .person-dropdown-item (individual person row)
 * - .person-dropdown-info (person name/points container)
 * - .person-dropdown-name (person name in dropdown)
 * - .person-dropdown-points (points in dropdown)
 * - .person-avatar (avatar styling - see person-display-utils.ts)
 * - .progress-bar, .progress-bar-fill, .progress-text (progress bar - see progress-bar-utils.ts)
 *
 * Note: CSS cannot be extracted due to LitElement shadow DOM scoping.
 * Consumers must define these classes in their static styles block.
 *
 * @param hass - Home Assistant instance
 * @param selectedPersonId - Currently selected person entity ID
 * @param dropdownOpen - Whether dropdown is expanded
 * @param allPeople - All person profiles to display in dropdown
 * @param showProgress - Whether to show progress bar in header
 * @param progress - Progress data for selected person (if showProgress=true)
 * @param shades - Color shades for styling (computed from accent color)
 * @param progressTextColor - Text color for progress label (optional)
 * @param onToggle - Callback when dropdown header is clicked
 * @param onSelect - Callback when a person is selected from dropdown
 * @param hideBackground - Whether to hide background styling (default: false)
 * @returns Template with person header + dropdown
 */
function renderPersonDropdown(hass, selectedPersonId, dropdownOpen, allPeople, showProgress, progress, shades, progressTextColor, onToggle, onSelect, hideBackground = false) {
    const personProfile = selectedPersonId
        ? allPeople.find((p) => p.entity_id === selectedPersonId)
        : null;
    // Determine accent color (precedence: person profile > theme)
    let baseColor = "var(--primary-color)";
    if (personProfile?.accent_color) {
        baseColor = personProfile.accent_color;
    }
    return b `
    <div
      class="person-section ${hideBackground ? "no-background" : ""} ${dropdownOpen
        ? "dropdown-open"
        : ""}"
    >
      <!-- Person Header (Collapsed State) -->
      <div class="person-header" @click=${onToggle}>
        <div class="person-container">
          <div class="person-left">
            ${renderPersonAvatar(hass, selectedPersonId, personProfile, 64)}
          </div>
          <div class="person-info">
            <div class="person-header-row">
              <div class="person-name">
                ${getPersonName(hass, selectedPersonId)}
              </div>
              <div class="person-points-and-chevron">
                ${renderPersonPoints(personProfile, hass, baseColor)}
                <ha-icon
                  icon="mdi:chevron-down"
                  class="dropdown-chevron ${dropdownOpen ? "open" : ""}"
                ></ha-icon>
              </div>
            </div>
            ${showProgress && progress
        ? renderProgressBar(progress, shades, progressTextColor)
        : ""}
          </div>
        </div>
      </div>

      <!-- Person Dropdown (Expanded State) -->
      <div class="person-dropdown ${dropdownOpen ? "open" : ""}">
        <div class="person-dropdown-inner">
          ${allPeople.map((person) => {
        const isSelected = person.entity_id === selectedPersonId;
        const pointsDisplay = getPointsDisplayParts(hass);
        return b `
              <div
                class="person-dropdown-item ${isSelected ? "selected" : ""}"
                @click=${() => onSelect(person.entity_id)}
              >
                ${renderPersonAvatar(hass, person.entity_id, person, 40)}
                <div class="person-dropdown-info">
                  <div class="person-dropdown-name">
                    ${getPersonName(hass, person.entity_id)}
                  </div>
                  <div class="person-dropdown-points">
                    ${person.points_balance}
                    ${pointsDisplay.icon
            ? b `<ha-icon icon="${pointsDisplay.icon}"></ha-icon>`
            : ""}
                    ${pointsDisplay.text}
                  </div>
                </div>
                ${isSelected ? b `<ha-icon icon="mdi:check"></ha-icon>` : ""}
              </div>
            `;
    })}
        </div>
      </div>
    </div>
  `;
}
/**
 * Detect default person to show in dropdown
 *
 * Priority order:
 * 1. Logged-in user's person entity (detected via hass.user.name)
 * 2. Config default (if provided)
 * 3. First person alphabetically by entity_id
 *
 * @param hass - Home Assistant instance
 * @param configDefault - Optional default person from card config
 * @returns Person entity ID or empty string if no people found
 */
function detectDefaultPerson(hass, configDefault) {
    // 1. Try auto-detect logged-in user
    let detectedPerson = detectCurrentUserPerson(hass);
    // 2. Fallback to config default
    if (!detectedPerson && configDefault) {
        detectedPerson = configDefault;
    }
    // 3. Fallback to first person alphabetically
    if (!detectedPerson) {
        const allPeople = getAllPeople(hass);
        if (allPeople.length > 0) {
            // Sort by entity_id and pick first
            const sorted = allPeople.sort((a, b) => a.entity_id.localeCompare(b.entity_id));
            detectedPerson = sorted[0].entity_id;
        }
    }
    // 4. If still no person detected, return empty string
    return detectedPerson || "";
}

// ============================================================================
// ChoreBot Person Grouped Card (TypeScript)
// ============================================================================
/**
 * ChoreBot Person Grouped Card
 *
 * Combines person selection dropdown with tag-based grouped task view.
 * Features:
 * - Person dropdown with avatar/initials display
 * - Auto-detection of default person (logged-in user or first with tasks)
 * - Tag-based task grouping filtered by selected person
 * - Progress tracking for selected person
 * - Inherits all grouped-card task management features
 */
let ChoreBotPersonGroupedCard = class ChoreBotPersonGroupedCard extends i {
    constructor() {
        super(...arguments);
        this._selectedPersonId = "";
        this._dropdownOpen = false;
        this._groups = [];
        this._editDialogOpen = false;
        this._editingTask = null;
        this._saving = false;
        this._expandedTaskUid = null;
        // Cached color shades for performance (recalculated when config changes)
        this.shades = {
            lighter: "",
            light: "",
            base: "",
            dark: "",
            darker: "",
        };
        this.shadesArray = [];
    }
    setConfig(config) {
        if (!config.entity) {
            throw new Error("You must specify an entity (todo list)");
        }
        // Validate entity format
        if (!config.entity.startsWith("todo.")) {
            throw new Error("Entity must be a todo list (todo.*)");
        }
        this._config = {
            show_title: true,
            show_progress: true,
            show_dateless_tasks: true,
            show_future_tasks: false,
            show_points: true,
            show_add_task_button: true,
            show_all_people: false,
            hide_person_background: false,
            hide_tasks_background: false,
            untagged_header: "Untagged",
            ...config,
        };
    }
    static getStubConfig() {
        return {
            type: "custom:chorebot-person-grouped-card",
            entity: "",
            default_person_entity: "",
            show_all_people: false,
            show_progress: true,
            show_title: true,
            hide_person_background: false,
            hide_tasks_background: false,
            accent_color: "",
            show_dateless_tasks: true,
            show_future_tasks: false,
            show_points: true,
            show_add_task_button: true,
            untagged_header: "Untagged",
            tag_group_order: [],
            filter_section_id: "",
        };
    }
    static getConfigForm() {
        return {
            schema: [
                {
                    name: "entity",
                    required: true,
                    selector: {
                        entity: {
                            filter: { domain: "todo" },
                        },
                    },
                },
                {
                    name: "default_person_entity",
                    selector: {
                        entity: {
                            filter: { domain: "person" },
                        },
                    },
                },
                {
                    name: "show_all_people",
                    default: false,
                    selector: { boolean: {} },
                },
                {
                    name: "show_progress",
                    default: true,
                    selector: { boolean: {} },
                },
                {
                    name: "show_title",
                    default: true,
                    selector: { boolean: {} },
                },
                {
                    name: "show_dateless_tasks",
                    default: true,
                    selector: { boolean: {} },
                },
                {
                    name: "show_future_tasks",
                    default: false,
                    selector: { boolean: {} },
                },
                {
                    name: "show_points",
                    default: true,
                    selector: { boolean: {} },
                },
                {
                    name: "show_add_task_button",
                    default: true,
                    selector: { boolean: {} },
                },
                {
                    name: "filter_section_id",
                    selector: { text: {} },
                },
                {
                    name: "hide_person_background",
                    default: false,
                    selector: { boolean: {} },
                },
                {
                    name: "hide_tasks_background",
                    default: false,
                    selector: { boolean: {} },
                },
                {
                    name: "accent_color",
                    selector: { text: {} },
                },
                {
                    name: "task_text_color",
                    selector: { text: {} },
                },
                {
                    name: "progress_text_color",
                    selector: { text: {} },
                },
                {
                    name: "untagged_header",
                    default: "Untagged",
                    selector: { text: {} },
                },
                {
                    name: "tag_group_order",
                    selector: {
                        select: {
                            multiple: true,
                            custom_value: true,
                            options: [],
                        },
                    },
                },
            ],
            computeLabel: (schema) => {
                const labels = {
                    entity: "Todo Entity",
                    default_person_entity: "Default Person",
                    show_all_people: "Show All People",
                    show_progress: "Show Progress Bar",
                    show_title: "Show Title",
                    show_dateless_tasks: "Show Tasks Without Due Date",
                    show_future_tasks: "Show Future Tasks",
                    show_points: "Show Points Badges",
                    show_add_task_button: "Show Add Task Button",
                    filter_section_id: "Filter by Section",
                    hide_person_background: "Hide Person Background",
                    hide_tasks_background: "Hide Tasks Background",
                    accent_color: "Accent Color",
                    task_text_color: "Task Text Color",
                    progress_text_color: "Progress Text Color",
                    untagged_header: "Untagged Tasks Header",
                    tag_group_order: "Tag Display Order",
                };
                return labels[schema.name] || undefined;
            },
            computeHelper: (schema) => {
                const helpers = {
                    entity: "Select the ChoreBot todo entity to display",
                    default_person_entity: "Override auto-detected person. Leave empty to auto-detect logged-in user or use first person alphabetically.",
                    show_all_people: "Show all people in dropdown, or only people with tasks in this list",
                    show_progress: "Display progress bar showing completed/total tasks for selected person",
                    show_title: "Show the person's name as card title",
                    show_dateless_tasks: "Show tasks that do not have a due date",
                    show_future_tasks: "Show tasks with future due dates in a collapsible 'Upcoming' section (collapsed by default)",
                    show_points: "Display points badges on task items",
                    show_add_task_button: "Show the 'Add Task' button below tag groups for creating new tasks",
                    filter_section_id: 'Additional section filter (e.g., "Morning Routine"). Leave empty to show all sections for selected person.',
                    hide_person_background: "Hide the person section background and shadow for a seamless look",
                    hide_tasks_background: "Hide the tasks section background and shadow for a seamless look",
                    accent_color: "Override accent color for person display and tag headers (hex code or CSS variable). By default inherits from person's profile.",
                    task_text_color: "Text color for task items (hex code or CSS variable)",
                    progress_text_color: "Text color for progress label (hex code or CSS variable)",
                    untagged_header: 'Header text for tasks without tags (default: "Untagged")',
                    tag_group_order: "Order to display tag groups. Tags not listed will appear alphabetically after these.",
                };
                return helpers[schema.name] || undefined;
            },
        };
    }
    willUpdate(changedProperties) {
        // Phase 3: Initial person detection
        if (changedProperties.has("hass") && this._selectedPersonId === "") {
            // First load - detect default person using utility
            this._selectedPersonId = detectDefaultPerson(this.hass, this._config?.default_person_entity);
        }
        // Phase 3: Color shade recalculation when config or person changes
        if ((changedProperties.has("_config") || changedProperties.has("_selectedPersonId")) && this._config) {
            const baseColor = resolveAccentColor(this.hass, this._config.accent_color, this._selectedPersonId);
            this.shades = calculateColorShades(baseColor);
            this.shadesArray = [
                this.shades.lighter,
                this.shades.light,
                this.shades.base,
                this.shades.dark,
                this.shades.darker,
            ];
        }
        // Phase 4: Rebuild groups when hass, config, or person changes
        if (changedProperties.has("hass") || changedProperties.has("_config") || changedProperties.has("_selectedPersonId")) {
            this._updateGroups();
        }
    }
    render() {
        if (!this.hass || !this._config) {
            return b ``;
        }
        // If no person detected, show error message
        if (!this._selectedPersonId) {
            return b `
        <ha-card>
          <div class="error-message">
            Please select a person. No people found with ChoreBot access.
          </div>
        </ha-card>
      `;
        }
        // Get available people for dropdown
        const allPeople = this._getAvailablePeople();
        // Compute progress for selected person (for progress bar in header)
        const progress = this._config.show_progress ? this._computeProgress() : undefined;
        return b `
      <div class="card-container">
        ${renderPersonDropdown(this.hass, this._selectedPersonId, this._dropdownOpen, allPeople, this._config.show_progress ?? true, progress, this.shades, this._config.progress_text_color, () => this._toggleDropdown(), (personId) => this._selectPerson(personId), this._config.hide_person_background ?? false)}

        <div class="tasks-section ${this._config.hide_tasks_background ? 'no-background' : ''}">
          ${this._renderGroupedTasks()}
        </div>
      </div>

      ${this._renderEditDialog()}
    `;
    }
    /**
     * Compute progress for selected person (for progress bar)
     * Uses same logic as person-points-card: today's tasks only (due today + overdue), dated tasks only
     */
    _computeProgress() {
        // Get all ChoreBot todo entities
        const allStates = Object.values(this.hass.states);
        const todoEntities = allStates.filter((e) => e.entity_id.startsWith("todo.chorebot_"));
        // Filter tasks assigned to this person (excludes dateless by default)
        const personTasks = filterTasksByPerson(todoEntities, this._selectedPersonId, false);
        // Calculate progress for dated tasks only
        return calculateDatedTasksProgress(personTasks);
    }
    /**
     * Get available people for dropdown
     */
    _getAvailablePeople() {
        const allPeople = getAllPeople(this.hass);
        // If config says show all, return all
        if (this._config.show_all_people) {
            return allPeople;
        }
        // Otherwise, filter to people who have tasks in this entity
        const entity = this.hass?.states[this._config.entity];
        const tasks = entity?.attributes.chorebot_tasks || [];
        const peopleWithTasks = new Set();
        for (const task of tasks) {
            if (task.computed_person_id) {
                peopleWithTasks.add(task.computed_person_id);
            }
        }
        return allPeople.filter(p => peopleWithTasks.has(p.entity_id));
    }
    /**
     * Toggle dropdown open/closed
     */
    _toggleDropdown() {
        this._dropdownOpen = !this._dropdownOpen;
    }
    /**
     * Select a person from dropdown
     */
    _selectPerson(personId) {
        this._selectedPersonId = personId;
        this._dropdownOpen = false; // Close dropdown after selection
    }
    // ============================================================================
    // Phase 4: Task Grouping & Filtering
    // ============================================================================
    /**
     * Update groups with person filtering
     */
    _updateGroups() {
        if (!this.hass || !this._config)
            return;
        const entity = this.hass.states[this._config.entity];
        if (!entity)
            return;
        // Use shared utility from task-utils.ts with person filter
        let newGroups = filterAndGroupTasks(entity, this._config.show_dateless_tasks !== false, this._config.show_future_tasks === true, this._config.untagged_header || "Untagged", "Upcoming", this._config.filter_section_id, this._selectedPersonId);
        // Sort groups
        newGroups = sortGroups(newGroups, this._config.tag_group_order, this._config.untagged_header, "Upcoming");
        // Preserve collapse state from existing groups
        this._groups = newGroups.map((newGroup) => ({
            ...newGroup,
            isCollapsed: this._findExistingCollapseState(newGroup.name),
        }));
    }
    /**
     * Find existing collapse state for a group
     */
    _findExistingCollapseState(groupName) {
        const existing = this._groups.find((g) => g.name === groupName);
        if (existing !== undefined)
            return existing.isCollapsed;
        // Default: Upcoming starts collapsed, others start expanded
        return groupName === "Upcoming";
    }
    // ============================================================================
    // Phase 4: Grouped Task View Rendering
    // ============================================================================
    _renderGroupedTasks() {
        if (this._groups.length === 0) {
            return b `<div class="empty-state">No tasks for this person</div>`;
        }
        return b `
      <div class="tag-groups">
        ${this._renderAllGroups(this._groups)}
      </div>
      ${this._config.show_add_task_button ? this._renderAddTaskButton() : ""}
    `;
    }
    _renderAllGroups(groups) {
        return groups.map((group) => {
            const progress = calculateProgress(group.tasks);
            const textColor = this._config.task_text_color || "white";
            const isCollapsed = group.isCollapsed;
            const allComplete = progress.completed === progress.total;
            const showCheckmark = isCollapsed && allComplete;
            // Calculate progress percentage for progress bar
            const progressPercent = progress.total > 0 ? (progress.completed / progress.total) * 100 : 0;
            return b `
        <div class="tag-group-container ${isCollapsed ? "collapsed" : ""}">
          <div
            class="tag-group-header ${isCollapsed ? "collapsed" : ""}"
            style="background: #${this.shades
                .light}; color: ${textColor}; --progress-width: ${progressPercent}%; --darker-color: #${this
                .shades.dark};"
            @click=${() => this._toggleGroup(group.name)}
          >
            <div class="tag-group-header-title">${group.name}</div>
            <div class="tag-group-header-progress">
              ${showCheckmark
                ? b `<ha-icon
                    icon="mdi:check"
                    style="color: ${textColor}; --mdi-icon-size: 20px;"
                  ></ha-icon>`
                : b `${progress.completed}/${progress.total}`}
            </div>
          </div>
          <div class="tag-group-tasks ${isCollapsed ? "collapsed" : ""}">
            <div class="tag-group-tasks-inner">
              ${this._renderTasks(group.tasks, textColor)}
            </div>
          </div>
        </div>
      `;
        });
    }
    _renderTasks(tasks, textColor) {
        const entity = this.hass?.states[this._config.entity];
        const templates = entity?.attributes.chorebot_templates || [];
        return tasks.map((task) => {
            const isCompleted = task.status === "completed";
            // Task styling based on completion
            // When hide_tasks_background is enabled, incomplete tasks are transparent
            const taskBgColor = isCompleted
                ? `#${this.shades.base}`
                : (this._config?.hide_tasks_background ? "transparent" : "var(--card-background-color)");
            const taskTextColor = isCompleted
                ? textColor
                : "var(--primary-text-color)";
            // Completion circle styling
            const circleBgColor = isCompleted
                ? `#${this.shades.dark}`
                : "transparent";
            const circleIconColor = isCompleted ? "white" : "var(--divider-color)";
            const circleBorder = isCompleted
                ? "none"
                : `2px solid var(--divider-color)`;
            return b `
        <div class="todo-item-container" style="background: ${taskBgColor}; color: ${taskTextColor};">
          <div
            class="todo-item"
            @click=${() => this._toggleTaskExpanded(task.uid)}
          >
            <div class="todo-content">
              <div class="todo-summary">
                ${task.summary}
                ${this._renderStreakIndicator(task)}
              </div>
              ${task.due || task.points_value || task.parent_uid
                ? b `<div
                    class="todo-due-date"
                    style="color: ${isOverdue(task)
                    ? "var(--error-color)"
                    : "inherit"}"
                  >
                    ${task.due
                    ? formatRelativeDate(new Date(task.due), task)
                    : ""}
                    ${task.parent_uid
                    ? b `<ha-icon
                          icon="mdi:sync"
                          class="recurring-icon"
                        ></ha-icon>`
                    : ""}
                    ${this._renderPointsBadge(task)}
                  </div>`
                : ""}
            </div>
            <div
              class="completion-circle"
              style="background: ${circleBgColor}; border: ${circleBorder};"
              @click=${(e) => this._handleCompletionClick(e, task)}
            >
              <ha-icon
                icon="mdi:check"
                style="color: ${circleIconColor};"
              ></ha-icon>
            </div>
          </div>
          ${renderExpandedDetails({
                task,
                templates,
                isExpanded: this._expandedTaskUid === task.uid,
                onEdit: () => this._openEditDialog(task),
                onDelete: () => this._confirmAndDeleteTask(task),
                shades: this.shades,
                textColor: this._config.task_text_color || "white",
            })}
        </div>
      `;
        });
    }
    _renderPointsBadge(task) {
        const entity = this.hass?.states[this._config.entity];
        const templates = entity?.attributes.chorebot_templates || [];
        const textColor = this._config.task_text_color || "white";
        return renderPointsBadge(task, templates, this.shades, this.hass, this._config?.show_points !== false, textColor);
    }
    _renderStreakIndicator(task) {
        // Only show for recurring instances
        if (!task.parent_uid) {
            return b ``;
        }
        // Get template to access streak data
        const entity = this.hass?.states[this._config.entity];
        const templates = entity?.attributes.chorebot_templates || [];
        const template = templates.find((t) => t.uid === task.parent_uid);
        // Only show if streak exists and is greater than 0
        if (!template || !template.streak_current || template.streak_current <= 0) {
            return b ``;
        }
        return b `
      <span class="streak-indicator">
        <ha-icon icon="mdi:fire"></ha-icon>
        <span>${template.streak_current}</span>
      </span>
    `;
    }
    _renderAddTaskButton() {
        if (!this._config?.show_add_task_button) {
            return b ``;
        }
        // Use the same color shades as the rest of the card
        const borderColor = `#${this.shades.light}`;
        const hoverBg = `color-mix(in srgb, #${this.shades.light} 20%, var(--card-background-color))`;
        const hoverColor = `#${this.shades.light}`;
        return b `
      <div
        class="add-task-button-container"
        style="--button-border-color: ${borderColor}; --button-hover-bg: ${hoverBg}; --button-hover-color: ${hoverColor};"
      >
        <div class="add-task-card" @click="${this._openAddTaskDialog}">
          <div class="add-task-icon-section">
            <div class="add-task-icon">
              <ha-icon icon="mdi:plus"></ha-icon>
            </div>
          </div>
          <div class="add-task-info">
            <div class="add-task-text">Add Task</div>
          </div>
        </div>
      </div>
    `;
    }
    // ============================================================================
    // Phase 4: Group Collapse/Expand
    // ============================================================================
    _toggleGroup(groupName) {
        // Find the group and toggle its isCollapsed state
        const group = this._groups.find((g) => g.name === groupName);
        if (group) {
            group.isCollapsed = !group.isCollapsed;
            this.requestUpdate();
        }
    }
    // ============================================================================
    // Task Expansion
    // ============================================================================
    _toggleTaskExpanded(taskUid) {
        if (this._expandedTaskUid === taskUid) {
            this._expandedTaskUid = null; // Collapse
        }
        else {
            this._expandedTaskUid = taskUid; // Expand (and collapse others)
        }
    }
    // ============================================================================
    // Phase 4: Task Completion Handlers
    // ============================================================================
    async _toggleTask(task, confettiOrigin) {
        const newStatus = task.status === "completed" ? "needs_action" : "completed";
        await this.hass.callService("todo", "update_item", {
            entity_id: this._config.entity,
            item: task.uid,
            status: newStatus,
        });
        // Auto-collapse if this task was expanded
        if (newStatus === "completed" && this._expandedTaskUid === task.uid) {
            this._expandedTaskUid = null;
        }
        // Play confetti animations when completing a task
        if (newStatus === "completed" && confettiOrigin) {
            // Play completion burst with themed colors
            playCompletionBurst(confettiOrigin, this.shadesArray);
        }
    }
    _handleCompletionClick(e, task) {
        e.stopPropagation();
        // Capture the position NOW before the async call
        const target = e.currentTarget;
        const rect = target.getBoundingClientRect();
        const origin = {
            x: (rect.left + rect.width / 2) / window.innerWidth,
            y: (rect.top + rect.height / 2) / window.innerHeight,
        };
        this._toggleTask(task, origin);
    }
    // ============================================================================
    // Phase 4: Edit Dialog Logic
    // ============================================================================
    _openEditDialog(task) {
        if (!this.hass || !this._config?.entity)
            return;
        const entity = this.hass.states[this._config.entity];
        if (!entity)
            return;
        const templates = entity.attributes.chorebot_templates || [];
        this._editingTask = prepareTaskForEditing(task, templates);
        this._editDialogOpen = true;
    }
    _closeEditDialog() {
        this._editDialogOpen = false;
        this._editingTask = null;
    }
    _renderEditDialog() {
        // Get sections and tags from entity attributes
        const entity = this.hass?.states[this._config.entity];
        const sections = entity?.attributes.chorebot_sections || [];
        const availableTags = entity?.attributes.chorebot_tags || [];
        return renderTaskDialog(this._editDialogOpen, this._editingTask, this.hass, sections, availableTags, this._saving, () => this._closeEditDialog(), (ev) => this._formValueChanged(ev), () => this._saveTask(), () => this._handleDeleteTask());
    }
    _formValueChanged(ev) {
        const updatedValues = ev.detail.value;
        this._editingTask = {
            ...this._editingTask,
            ...updatedValues,
        };
        if ("has_due_date" in updatedValues ||
            "is_all_day" in updatedValues ||
            "has_recurrence" in updatedValues ||
            "recurrence_frequency" in updatedValues) {
            this.requestUpdate();
        }
    }
    async _saveTask() {
        if (!this._editingTask ||
            !this._editingTask.summary?.trim() ||
            this._saving) {
            return;
        }
        this._saving = true;
        const serviceData = {
            list_id: this._config.entity,
            uid: this._editingTask.uid,
            summary: this._editingTask.summary.trim(),
        };
        if (this._editingTask.has_due_date && this._editingTask.due_date) {
            const isAllDay = !!this._editingTask.is_all_day;
            const timeStr = this._editingTask.due_time || "00:00";
            try {
                serviceData.due = createISOString(this._editingTask.due_date, timeStr, isAllDay);
                serviceData.is_all_day = isAllDay;
            }
            catch (error) {
                console.error("Invalid date/time combination:", error);
                this._saving = false;
                return;
            }
        }
        else if (this._editingTask.has_due_date === false) {
            serviceData.due = "";
            serviceData.is_all_day = false;
        }
        if (this._editingTask.description) {
            serviceData.description = this._editingTask.description;
        }
        if (this._editingTask.section_id) {
            serviceData.section_id = this._editingTask.section_id;
        }
        // Handle tags
        if (this._editingTask.tags !== undefined) {
            serviceData.tags = this._editingTask.tags;
        }
        // Handle recurrence
        const rrule = buildRrule(this._editingTask);
        if (rrule !== null) {
            serviceData.rrule = rrule;
        }
        else if (this._editingTask.has_recurrence === false) {
            // User explicitly disabled recurrence, send empty string to clear it
            serviceData.rrule = "";
        }
        // Handle points fields
        if (this._editingTask.points_value !== undefined) {
            serviceData.points_value = this._editingTask.points_value;
        }
        if (this._editingTask.streak_bonus_points !== undefined) {
            serviceData.streak_bonus_points = this._editingTask.streak_bonus_points;
        }
        if (this._editingTask.streak_bonus_interval !== undefined) {
            serviceData.streak_bonus_interval =
                this._editingTask.streak_bonus_interval;
        }
        // For recurring task instances, always apply changes to future instances
        const isRecurringInstance = !!this._editingTask.parent_uid;
        if (isRecurringInstance) {
            serviceData.include_future_occurrences = true;
        }
        try {
            await this.hass.callService("chorebot", "update_task", serviceData);
            this._closeEditDialog();
        }
        catch (error) {
            console.error("Error saving task:", error);
            alert("Failed to save task. Please try again.");
        }
        finally {
            this._saving = false;
        }
    }
    async _handleDeleteTask() {
        if (!this._editingTask || this._saving) {
            return;
        }
        const task = this._editingTask;
        const isRecurring = task.has_recurrence || task.parent_uid;
        // Confirmation message based on task type
        const message = isRecurring
            ? "Delete this recurring task? This will remove all future occurrences, but keep completed instances."
            : "Delete this task? This action cannot be undone.";
        if (!confirm(message)) {
            return;
        }
        this._saving = true;
        try {
            // Call HA service to delete
            await this.hass.callService("todo", "remove_item", {
                entity_id: this._config.entity,
                item: task.uid,
            });
            // Close dialog
            this._closeEditDialog();
        }
        catch (error) {
            console.error("Error deleting task:", error);
            alert(`Failed to delete task: ${error}`);
        }
        finally {
            this._saving = false;
        }
    }
    async _confirmAndDeleteTask(task) {
        const isRecurring = task.rrule || task.parent_uid;
        const message = isRecurring
            ? "Delete this recurring task? This will remove all future occurrences, but keep completed instances."
            : "Delete this task? This action cannot be undone.";
        if (!confirm(message))
            return;
        await this.hass.callService("todo", "remove_item", {
            entity_id: this._config.entity,
            item: task.uid,
        });
        // Auto-collapse if this task was expanded
        if (this._expandedTaskUid === task.uid) {
            this._expandedTaskUid = null;
        }
    }
    // ============================================================================
    // Phase 4: Add Task Dialog Logic
    // ============================================================================
    _openAddTaskDialog() {
        const entity = this.hass?.states[this._config.entity];
        const sections = entity?.attributes.chorebot_sections || [];
        // Create a blank task with smart defaults (person-specific section)
        this._editingTask = this._createBlankTask(sections);
        this._editDialogOpen = true;
    }
    _createBlankTask(sections) {
        let defaultSectionId;
        // Priority 1: Explicit section filter
        if (this._config.filter_section_id) {
            // First try to find by ID
            let filtered = sections.find((s) => s.id === this._config.filter_section_id);
            // If not found by ID, try by name (case-insensitive)
            if (!filtered) {
                filtered = sections.find((s) => s.name.toLowerCase() ===
                    this._config.filter_section_id.toLowerCase());
            }
            if (filtered) {
                defaultSectionId = filtered.id;
            }
        }
        // Priority 2: Person's assigned section (NEW: prioritize selected person)
        if (!defaultSectionId && this._selectedPersonId) {
            const personSection = sections.find((s) => s.person_id === this._selectedPersonId);
            if (personSection) {
                defaultSectionId = personSection.id;
            }
        }
        // Priority 3: First section (highest sort_order)
        if (!defaultSectionId && sections.length > 0) {
            defaultSectionId = sections.sort((a, b) => b.sort_order - a.sort_order)[0].id;
        }
        return {
            uid: "",
            summary: "",
            status: "needs_action",
            has_due_date: false,
            is_all_day: false,
            due_date: undefined,
            due_time: undefined,
            description: "",
            section_id: defaultSectionId,
            tags: [],
            has_recurrence: false,
            recurrence_frequency: "DAILY",
            recurrence_interval: 1,
            recurrence_byweekday: [],
            recurrence_bymonthday: 1,
            points_value: 0,
            streak_bonus_points: 0,
            streak_bonus_interval: 0,
        };
    }
    getCardSize() {
        return 3;
    }
};
ChoreBotPersonGroupedCard.styles = i$3 `
    :host {
      display: block;
    }

    /* Card Container with Gap */
    .card-container {
      display: flex;
      flex-direction: column;
      gap: 20px; /* Spacing between sections like separate cards */
    }

    /* Person Dropdown Styles - Shared with person-dropdown-utils.ts */
    /* Person Section Container */
    .person-section {
      background: var(--card-background-color);
      border-radius: var(--ha-card-border-radius, 12px);
      box-shadow: var(--ha-card-box-shadow, 0 2px 4px rgba(0, 0, 0, 0.1));
      position: relative;
      z-index: 2;
      transition: border-radius 0.3s ease;
    }

    .person-section.no-background {
      background: transparent;
      box-shadow: none;
    }
    
    .person-section.dropdown-open {
      border-radius: var(--ha-card-border-radius, 12px) var(--ha-card-border-radius, 12px) 0 0;
    }

    /* Tasks Section Container */
    .tasks-section {
      background: transparent;
      box-shadow: none;
      padding: 0;
      position: relative;
      z-index: 1;
    }

    /* Person Display Header (matches person-points-card) */
    .person-header {
      cursor: pointer;
      transition: filter 0.2s ease, border-radius 0.3s ease;
      user-select: none;
      padding: 16px;
      position: relative;
      z-index: 2;
      background: var(--card-background-color);
      border-radius: var(--ha-card-border-radius, 12px);
    }
    
    .dropdown-open .person-header {
      border-radius: var(--ha-card-border-radius, 12px) var(--ha-card-border-radius, 12px) 0 0;
    }

    .person-header:hover {
      filter: brightness(1.05);
    }

    .person-header:active {
      filter: brightness(0.95);
    }

    .person-container {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .person-left {
      flex-shrink: 0;
    }

    .person-info {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 6px;
      min-width: 0;
    }

    .person-header-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      line-height: 1;
    }

    .person-name {
      font-size: 24px;
      font-weight: 500;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      flex: 1;
      min-width: 0;
      line-height: 1;
    }

    .person-points-and-chevron {
      display: flex;
      align-items: center;
      gap: 8px;
      flex-shrink: 0;
    }

    .person-points {
      font-size: 24px;
      font-weight: bold;
      color: var(--primary-color);
      white-space: nowrap;
      display: flex;
      align-items: center;
      gap: 4px;
      line-height: 1;
    }

    .person-points ha-icon {
      --mdc-icon-size: 20px;
      display: flex;
    }

    .dropdown-chevron {
      --mdc-icon-size: 20px;
      transition: transform 0.3s ease;
      color: var(--secondary-text-color);
    }

    .dropdown-chevron.open {
      transform: rotate(180deg);
    }

    /* Person Dropdown */
    .person-dropdown {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: var(--card-background-color);
      border-radius: 0 0 var(--ha-card-border-radius, 12px) var(--ha-card-border-radius, 12px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
      display: grid;
      grid-template-rows: 0fr;
      transition: grid-template-rows 0.3s ease;
      overflow: hidden;
      z-index: 1;
    }

    .person-dropdown.open {
      grid-template-rows: 1fr;
    }

    .person-dropdown-inner {
      overflow: hidden;
      max-height: 400px;
    }
    
    .person-dropdown.open .person-dropdown-inner {
      overflow-y: auto;
    }

    .person-dropdown-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 16px;
      cursor: pointer;
      transition: filter 0.2s ease;
      border-bottom: 1px solid var(--divider-color);
      background: var(--card-background-color);
    }
    
    .person-dropdown-item:last-child {
      border-bottom: none;
    }

    .person-dropdown-item:hover {
      filter: brightness(1.1);
    }

    .person-dropdown-item.selected {
      background: color-mix(in srgb, var(--primary-color) 10%, transparent);
    }

    .person-dropdown-info {
      flex: 1;
      min-width: 0;
    }

    .person-dropdown-name {
      font-size: 16px;
      font-weight: 500;
    }

    .person-dropdown-points {
      font-size: 14px;
      opacity: 0.7;
      display: flex;
      align-items: center;
      gap: 4px;
    }
    
    .person-dropdown-points ha-icon {
      --mdc-icon-size: 14px;
      display: flex;
    }

    /* Person Avatar Styling */
    .person-avatar {
      border-radius: 50%;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .person-avatar img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .person-avatar.initials {
      background: linear-gradient(135deg, var(--primary-color), var(--accent-color, var(--primary-color)));
      color: white;
      font-weight: 600;
    }

    /* Progress Bar (matches person-points-card) */
    .progress-bar {
      position: relative;
      border-radius: 12px;
      height: 24px;
      overflow: hidden;
      box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
      width: 100%;
    }

    .progress-bar-fill {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      transition: width 0.3s ease;
      border-radius: 12px;
    }

    .progress-text {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      font-weight: 500;
      z-index: 1;
    }

    /* Error Message */
    .error-message {
      padding: 16px;
      text-align: center;
      color: var(--error-color);
      font-size: 14px;
    }

    /* Empty State */
    .empty-state {
      text-align: center;
      padding: 32px;
      color: var(--secondary-text-color);
    }

    /* Tag Group Container */
    .tag-groups {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .tag-group-container {
      border-radius: var(--ha-card-border-radius, 12px);
      overflow: hidden;
      border: 1px solid var(--divider-color);
      transition: border-radius 0.3s ease;
    }

    .tag-group-container.collapsed {
      border-radius: var(--ha-card-border-radius, 12px);
    }

    /* Remove border when hide_tasks_background is enabled */
    .tasks-section.no-background .tag-group-container {
      border: none;
    }

    /* Tag Group Header Bar */
    .tag-group-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 16px;
      font-weight: 500;
      font-size: 24px;
      cursor: pointer;
      user-select: none;
      transition:
        filter 0.2s ease,
        border-bottom 0.3s ease;
      position: relative;
      overflow: hidden;
    }

    .tag-group-header::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      background: var(--darker-color);
      width: var(--progress-width, 0%);
      transition: width 0.3s ease;
      z-index: 0;
    }

    .tag-group-header.collapsed {
      border-bottom: none;
    }

    .tag-group-header:active {
      filter: brightness(0.9);
    }

    .tag-group-header-title {
      flex: 1;
      text-transform: capitalize;
      position: relative;
      z-index: 1;
    }

    .tag-group-header-progress {
      font-weight: 400;
      opacity: 0.8;
      position: relative;
      z-index: 1;
    }

    /* Tag Group Tasks (rows, not separate cards) */
    .tag-group-tasks {
      display: grid;
      grid-template-rows: 1fr;
      transition:
        grid-template-rows 0.3s ease,
        opacity 0.3s ease;
      opacity: 1;
    }

    .tag-group-tasks.collapsed {
      grid-template-rows: 0fr;
      opacity: 0;
    }

    .tag-group-tasks-inner {
      overflow: hidden;
    }

    .todo-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px;
      cursor: pointer;
      transition: filter 0.2s ease;
    }

    .todo-item:hover {
      filter: brightness(1.1);
    }

    .todo-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 4px;
      min-width: 0;
    }

    .todo-summary {
      font-size: 20px;
      font-weight: 400;
      word-wrap: break-word;
      line-height: 1.3;
    }

    .todo-due-date {
      font-size: 14px;
      font-weight: normal;
      opacity: 0.9;
      display: flex;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
    }

    .points-badge {
      display: inline-flex;
      align-items: center;
      gap: 3px;
      padding: 2px 8px;
      border-radius: 12px;
      font-size: 11px;
      font-weight: bold;
      white-space: nowrap;
      opacity: 0.9;
    }

    .points-badge ha-icon {
      --mdc-icon-size: 12px;
      display: flex;
    }

    .points-badge.bonus-pending {
      background: linear-gradient(135deg, #ffd700, #ffa500) !important;
      border: 1px solid currentColor !important;
      animation: glow 2s ease-in-out infinite;
      box-shadow: 0 0 8px rgba(255, 215, 0, 0.6);
    }

    @keyframes glow {
      0%,
      100% {
        opacity: 0.9;
      }
      50% {
        opacity: 1;
      }
    }

    .recurring-icon {
      --mdc-icon-size: 14px;
      margin-right: 4px;
      vertical-align: middle;
      line-height: 1;
      display: inline-flex;
      align-items: center;
    }

    .streak-indicator {
      display: inline-flex;
      align-items: center;
      gap: 3px;
      margin-left: 8px;
      font-size: 14px;
      font-weight: normal;
      color: var(--warning-color, #ff9800);
      vertical-align: middle;
      line-height: 1;
    }

    .streak-indicator ha-icon {
      --mdc-icon-size: 13px;
      display: flex;
    }

    .completion-circle {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      transition: all 0.2s ease;
      box-sizing: border-box;
    }

    .completion-circle ha-icon {
      --mdi-icon-size: 28px;
    }

    /* Add Task Button */
    .add-task-button-container {
      margin-top: 16px;
    }

    .add-task-card {
      border-radius: 12px;
      background: var(--card-background-color);
      border: 2px dashed var(--divider-color);
      display: flex;
      flex-direction: row;
      overflow: hidden;
      cursor: pointer;
      transition: all 0.2s ease;
      min-height: 80px;
      height: 80px;
    }

    .add-task-card:hover {
      border-color: var(--button-border-color);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    .add-task-icon-section {
      flex-shrink: 0;
      width: 80px;
      background: color-mix(in srgb, var(--divider-color) 50%, transparent);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
    }

    .add-task-card:hover .add-task-icon-section {
      background: var(--button-hover-bg);
    }

    .add-task-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--secondary-text-color);
      transition: all 0.2s ease;
    }

    .add-task-card:hover .add-task-icon {
      color: var(--button-hover-color);
    }

    .add-task-icon ha-icon {
      --mdc-icon-size: 36px;
    }

    .add-task-info {
      flex: 1;
      padding: 12px 16px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .add-task-text {
      font-size: 18px;
      font-weight: 500;
      color: var(--secondary-text-color);
      transition: all 0.2s ease;
    }

    .add-task-card:hover .add-task-text {
      color: var(--button-hover-color);
    }

    ha-dialog {
      --mdc-dialog-min-width: min(500px, 90vw);
    }

    /* Task Container */
    .todo-item-container {
      display: flex;
      flex-direction: column;
      border-bottom: 1px solid var(--divider-color);
    }

    .todo-item-container:last-child {
      border-bottom: none;
    }

    /* Expanded Details Section */
    .todo-details {
      display: grid;
      grid-template-rows: 0fr;
      transition: grid-template-rows 0.3s ease;
      overflow: hidden;
    }

    .todo-details.expanded {
      grid-template-rows: 1fr;
    }

    .todo-details-inner {
      min-height: 0;
      overflow: hidden;
      padding: 0 16px;
      opacity: 0;
      transition: padding 0.3s ease, opacity 0.3s ease-in;
    }

    .todo-details.expanded .todo-details-inner {
      padding: 0 16px 16px 16px;
      opacity: 1;
    }

    /* Details Content (Left Side) */
    .details-content {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .detail-row {
      display: flex;
      align-items: flex-start;
      gap: 8px;
      font-size: 14px;
      line-height: 1.4;
    }

    .detail-row ha-icon {
      --mdc-icon-size: 16px;
      color: var(--secondary-text-color);
      flex-shrink: 0;
    }

    .detail-label {
      font-weight: 500;
      color: var(--secondary-text-color);
      flex-shrink: 0;
    }

    .detail-value {
      flex: 1;
      color: var(--primary-text-color);
      word-wrap: break-word;
    }

    /* Edit Button (Inline with Details) */
    .details-actions {
      display: flex;
      align-items: flex-end;
      height: 100%;
      margin-left: auto;
      padding-left: 8px;
    }

    .action-button {
      cursor: pointer;
      transition: opacity 0.2s ease;
      color: var(--secondary-text-color);
    }

    .action-button:hover {
      opacity: 0.7;
    }

    .action-button ha-icon {
      --mdc-icon-size: 20px;
    }

    /* Responsive: Smaller elements on mobile */
    @media (max-width: 600px) {
      .person-header {
        padding: 12px;
      }

      .person-left .person-avatar {
        width: 48px;
        height: 48px;
      }

      .person-left .person-avatar.initials {
        font-size: 18px;
      }

      .person-name {
        font-size: 20px;
      }

      .person-points {
        font-size: 20px;
      }

      .person-points ha-icon {
        --mdc-icon-size: 18px;
      }

      .dropdown-chevron {
        --mdc-icon-size: 18px;
      }

      .person-dropdown-inner {
        max-height: 300px;
      }

      .tag-group-header {
        font-size: 20px;
        padding: 10px 14px;
      }

      .todo-summary {
        font-size: 18px;
      }

      .todo-details-inner {
        padding: 0 12px;
      }

      .todo-details.expanded .todo-details-inner {
        padding: 12px;
      }

      .detail-row {
        font-size: 13px;
      }
    }
  `;
__decorate([
    n({ attribute: false })
], ChoreBotPersonGroupedCard.prototype, "hass", void 0);
__decorate([
    r()
], ChoreBotPersonGroupedCard.prototype, "_config", void 0);
__decorate([
    r()
], ChoreBotPersonGroupedCard.prototype, "_selectedPersonId", void 0);
__decorate([
    r()
], ChoreBotPersonGroupedCard.prototype, "_dropdownOpen", void 0);
__decorate([
    r()
], ChoreBotPersonGroupedCard.prototype, "_groups", void 0);
__decorate([
    r()
], ChoreBotPersonGroupedCard.prototype, "_editDialogOpen", void 0);
__decorate([
    r()
], ChoreBotPersonGroupedCard.prototype, "_editingTask", void 0);
__decorate([
    r()
], ChoreBotPersonGroupedCard.prototype, "_saving", void 0);
__decorate([
    r()
], ChoreBotPersonGroupedCard.prototype, "_expandedTaskUid", void 0);
ChoreBotPersonGroupedCard = __decorate([
    t("chorebot-person-grouped-card")
], ChoreBotPersonGroupedCard);
window.customCards = window.customCards || [];
window.customCards.push({
    type: "chorebot-person-grouped-card",
    name: "ChoreBot Person Grouped Card",
    description: "Person-filtered tag-based grouped task view with progress tracking",
    preview: true,
});
console.info("%c CHOREBOT-PERSON-GROUPED-CARD %c v0.1.0 ", "color: white; background: #9C27B0; font-weight: bold;", "color: #9C27B0; background: white; font-weight: bold;");

// ============================================================================
// ChoreBot Person Rewards Card (TypeScript)
// ============================================================================
/**
 * ChoreBot Person Rewards Card
 *
 * Combines person selection dropdown with rewards list view.
 * Features:
 * - Person dropdown with avatar/initials display
 * - Auto-detection of default person (logged-in user or first alphabetically)
 * - Rewards list filtered by selected person
 * - Task progress tracking for selected person
 * - Click reward card to open confirmation modal
 * - "Add Reward" placeholder card
 * - Create/edit reward modals with form fields
 * - Confetti animation on successful redemption
 */
let ChoreBotPersonRewardsCard = class ChoreBotPersonRewardsCard extends i {
    constructor() {
        super(...arguments);
        this._selectedPersonId = "";
        this._dropdownOpen = false;
        this._redeeming = null; // reward_id being redeemed
        this._showConfirmModal = false; // Show redemption confirmation
        this._showAddRewardModal = false; // Show add reward modal
        this._showEditRewardModal = false; // Show edit reward modal
        this._pendingRedemption = null; // Pending redemption details
        this._rewardFormData = {
            name: "",
            cost: 50,
            icon: "mdi:gift",
            description: "",
        }; // Reward form data for ha-form
        this._editingRewardId = null;
        // Cached color shades for performance
        this.shades = {
            lighter: "",
            light: "",
            base: "",
            dark: "",
            darker: "",
        };
        this._rewardFormSchema = [
            { name: "name", required: true, selector: { text: {} } },
            { name: "cost", required: true, selector: { number: { min: 1, max: 10000, mode: "box" } } },
            { name: "icon", selector: { icon: {} } },
            { name: "description", selector: { text: { multiline: true } } },
        ];
        this._computeRewardFieldLabel = (schema) => {
            const parts = getPointsDisplayParts(this.hass);
            // Use only text for label (can't render icon in text field)
            const displayStr = parts.text
                ? parts.text.charAt(0).toUpperCase() + parts.text.slice(1)
                : "Points";
            const labels = {
                name: "Name",
                cost: `Cost (${displayStr})`,
                icon: "Icon",
                description: "Description (Optional)",
            };
            return labels[schema.name] || schema.name;
        };
        this._computeRewardFieldHelper = (schema) => {
            const parts = getPointsDisplayParts(this.hass);
            // Use only text for helper (can't render icon in text field)
            const displayStr = parts.text || "points";
            const helpers = {
                cost: `Cost between 1 and 10,000 ${displayStr}`,
                icon: "Use Material Design Icons (e.g., mdi:gift, mdi:ice-cream)",
            };
            return helpers[schema.name] || "";
        };
        this._handleRewardFormChange = (ev) => {
            this._rewardFormData = ev.detail.value;
        };
    }
    setConfig(config) {
        if (!config.type) {
            throw new Error("type is required");
        }
        this._config = {
            type: "custom:chorebot-person-rewards-card",
            show_progress: config.show_progress !== false,
            hide_rewards_background: config.hide_rewards_background === true,
            show_disabled_rewards: config.show_disabled_rewards === true,
            sort_by: config.sort_by || "cost",
            show_add_reward_button: config.show_add_reward_button !== false,
            accent_color: config.accent_color || "",
            progress_text_color: config.progress_text_color || "",
            default_person_entity: config.default_person_entity || "",
        };
    }
    static getStubConfig() {
        return {
            type: "custom:chorebot-person-rewards-card",
            default_person_entity: "",
            show_progress: true,
            hide_rewards_background: false,
            show_disabled_rewards: false,
            sort_by: "cost",
            show_add_reward_button: true,
            accent_color: "",
            progress_text_color: "",
        };
    }
    static getConfigForm() {
        return {
            schema: [
                {
                    name: "default_person_entity",
                    selector: {
                        entity: {
                            filter: { domain: "person" },
                        },
                    },
                },
                {
                    name: "show_progress",
                    default: true,
                    selector: { boolean: {} },
                },
                {
                    name: "hide_rewards_background",
                    default: false,
                    selector: { boolean: {} },
                },
                {
                    name: "show_disabled_rewards",
                    default: false,
                    selector: { boolean: {} },
                },
                {
                    name: "sort_by",
                    default: "cost",
                    selector: {
                        select: {
                            options: [
                                { label: "Cost (Low to High)", value: "cost" },
                                { label: "Name (A-Z)", value: "name" },
                                { label: "Date Created (Oldest First)", value: "created" },
                            ],
                        },
                    },
                },
                {
                    name: "show_add_reward_button",
                    default: true,
                    selector: { boolean: {} },
                },
                {
                    name: "accent_color",
                    selector: { text: {} },
                },
                {
                    name: "progress_text_color",
                    selector: { text: {} },
                },
            ],
            computeLabel: (schema) => {
                const labels = {
                    default_person_entity: "Default Person",
                    show_progress: "Show Progress Bar",
                    hide_rewards_background: "Hide Rewards Tile Backgrounds",
                    show_disabled_rewards: "Show Disabled Rewards",
                    sort_by: "Sort Rewards By",
                    show_add_reward_button: "Show Add Reward Button",
                    accent_color: "Accent Color",
                    progress_text_color: "Progress Text Color",
                };
                return labels[schema.name] || undefined;
            },
            computeHelper: (schema) => {
                const helpers = {
                    default_person_entity: "Override auto-detected person. Leave empty to auto-detect logged-in user or use first person alphabetically.",
                    show_progress: "Display progress bar showing completed/total tasks for selected person",
                    hide_rewards_background: "Hide individual reward tile backgrounds for a seamless look",
                    show_disabled_rewards: "Include rewards that have been disabled in the grid",
                    sort_by: "Choose how to sort the rewards in the grid",
                    show_add_reward_button: "Show the 'Add Reward' card for creating new rewards",
                    accent_color: "Override accent color (hex code or CSS variable). By default inherits from person's profile.",
                    progress_text_color: "Text color for progress label (hex code or CSS variable)",
                };
                return helpers[schema.name] || undefined;
            },
        };
    }
    willUpdate(changedProperties) {
        // Phase 1: Initial person detection
        if (changedProperties.has("hass") && this._selectedPersonId === "") {
            this._selectedPersonId = detectDefaultPerson(this.hass, this._config?.default_person_entity);
        }
        // Phase 2: Color shade recalculation
        if ((changedProperties.has("_config") ||
            changedProperties.has("_selectedPersonId")) &&
            this._config) {
            const baseColor = resolveAccentColor(this.hass, this._config.accent_color, this._selectedPersonId);
            this.shades = calculateColorShades(baseColor);
        }
        // Phase 3: Calculate task progress for selected person
        if (changedProperties.has("hass") ||
            changedProperties.has("_selectedPersonId")) {
            this._progress = this._computeProgress();
        }
    }
    render() {
        if (!this.hass || !this._config) {
            return b `<ha-card><div class="empty-state">Loading...</div></ha-card>`;
        }
        // Get points sensor entity
        const sensor = this.hass.states["sensor.chorebot_points"];
        if (!sensor) {
            return b `<ha-card>
        <div class="error-state">
          ChoreBot Points sensor not found. Make sure the integration is set up.
        </div>
      </ha-card>`;
        }
        // If no person detected, show error message
        if (!this._selectedPersonId) {
            return b `
        <ha-card>
          <div class="error-state">
            Please select a person. No people found with ChoreBot access.
          </div>
        </ha-card>
      `;
        }
        // Get available people for dropdown
        const allPeople = this._getAvailablePeople();
        const showProgress = this._config.show_progress ?? true;
        return b `
      <ha-card>
        <div class="card-container">
          <!-- Person Dropdown Section -->
          <div
            class="person-section ${this._dropdownOpen ? "dropdown-open" : ""}"
          >
            ${renderPersonDropdown(this.hass, this._selectedPersonId, this._dropdownOpen, allPeople, showProgress, this._progress, this.shades, this._config.progress_text_color, () => this._toggleDropdown(), (personId) => this._selectPerson(personId), false // Person section always has background
        )}
          </div>

          <!-- Rewards List Section -->
          <div class="rewards-section">
            ${this._renderRewardsList()}
          </div>
        </div>

        <!-- Modals -->
        ${this._showConfirmModal ? this._renderConfirmModal() : ""}
        ${this._showAddRewardModal ? this._renderAddRewardModal() : ""}
        ${this._showEditRewardModal ? this._renderEditRewardModal() : ""}
      </ha-card>
    `;
    }
    /**
     * Compute progress for selected person (for progress bar)
     * Uses same logic as person-grouped-card: today's tasks only, dated tasks only
     */
    _computeProgress() {
        // Get all ChoreBot todo entities
        const allStates = Object.values(this.hass.states);
        const todoEntities = allStates.filter((e) => e.entity_id.startsWith("todo.chorebot_"));
        // Filter tasks assigned to this person (excludes dateless by default)
        const personTasks = filterTasksByPerson(todoEntities, this._selectedPersonId, false // Don't include dateless
        );
        // Calculate progress for dated tasks only
        return calculateDatedTasksProgress(personTasks);
    }
    /**
     * Get available people for dropdown
     */
    _getAvailablePeople() {
        return getAllPeople(this.hass);
    }
    /**
     * Toggle dropdown open/closed
     */
    _toggleDropdown() {
        this._dropdownOpen = !this._dropdownOpen;
    }
    /**
     * Select a person from dropdown
     */
    _selectPerson(personId) {
        this._selectedPersonId = personId;
        this._dropdownOpen = false; // Close dropdown after selection
    }
    /**
     * Render rewards list filtered by selected person
     */
    _renderRewardsList() {
        const sensor = this.hass?.states["sensor.chorebot_points"];
        const rewards = sensor?.attributes.rewards || [];
        const people = sensor?.attributes.people || {};
        // Filter rewards by selected person
        const personRewards = rewards.filter((r) => r.person_id === this._selectedPersonId);
        // Filter by enabled/disabled
        const filteredRewards = personRewards.filter((r) => this._config.show_disabled_rewards || r.enabled);
        // Sort rewards
        const sortedRewards = this._sortRewards(filteredRewards);
        // Get person's balance
        const person = people[this._selectedPersonId];
        if (sortedRewards.length === 0 &&
            !this._config.show_add_reward_button) {
            return b `<div class="empty-state">
        No rewards configured yet. Use the "Add Reward" button or
        <code>chorebot.manage_reward</code> service to create rewards.
      </div>`;
        }
        return b `
      <div class="rewards-grid">
        ${sortedRewards.map((reward) => this._renderRewardCard(reward, person))}
        ${this._config.show_add_reward_button
            ? this._renderAddRewardCard()
            : ""}
      </div>
    `;
    }
    _renderRewardCard(reward, person) {
        const canAfford = person ? person.points_balance >= reward.cost : false;
        const isDisabled = !reward.enabled || !canAfford;
        const parts = getPointsDisplayParts(this.hass);
        const hideBackground = this._config?.hide_rewards_background ?? false;
        // Apply person accent color to reward cards
        const iconBg = `#${this.shades.base}`;
        const costColor = `#${this.shades.base}`;
        return b `
      <div
        class="reward-card ${isDisabled ? "disabled" : ""} ${hideBackground
            ? "no-background"
            : ""}"
        @click="${() => this._handleRewardClick(reward, canAfford)}"
      >
        <div class="reward-icon-section" style="background: ${iconBg};">
          <div class="reward-icon">
            <ha-icon icon="${reward.icon}"></ha-icon>
          </div>
        </div>
        <div class="reward-info">
          <div class="reward-header">
            <div class="reward-name">${reward.name}</div>
            <div class="reward-cost" style="color: ${costColor};">
              ${reward.cost}
              ${parts.icon ? b `<ha-icon icon="${parts.icon}"></ha-icon>` : ""}
              ${parts.text ? parts.text : ""}
            </div>
          </div>
          ${reward.description
            ? b `<div class="reward-description">${reward.description}</div>`
            : ""}
        </div>
      </div>
    `;
    }
    _renderAddRewardCard() {
        // Use the same color shades as the rest of the card
        const borderColor = `#${this.shades.light}`;
        const hoverBg = `color-mix(in srgb, #${this.shades.light} 20%, var(--card-background-color))`;
        const hoverColor = `#${this.shades.light}`;
        return b `
      <div
        class="add-reward-card"
        style="--button-border-color: ${borderColor}; --button-hover-bg: ${hoverBg}; --button-hover-color: ${hoverColor};"
        @click="${this._openAddRewardModal}"
      >
        <div class="add-reward-icon-section">
          <div class="add-reward-icon">
            <ha-icon icon="mdi:plus"></ha-icon>
          </div>
        </div>
        <div class="add-reward-info">
          <div class="add-reward-text">Add Reward</div>
        </div>
      </div>
    `;
    }
    _sortRewards(rewards) {
        const sorted = [...rewards];
        switch (this._config.sort_by) {
            case "name":
                return sorted.sort((a, b) => a.name.localeCompare(b.name));
            case "created":
                return sorted.sort((a, b) => new Date(a.created || 0).getTime() -
                    new Date(b.created || 0).getTime());
            case "cost":
            default:
                return sorted.sort((a, b) => a.cost - b.cost);
        }
    }
    _handleRewardClick(reward, canAfford) {
        // Always open modal to show reward details (button will be disabled if can't redeem)
        this._pendingRedemption = {
            personId: this._selectedPersonId,
            rewardId: reward.id,
        };
        this._showConfirmModal = true;
    }
    _renderConfirmModal() {
        if (!this._pendingRedemption || !this._config)
            return "";
        const sensor = this.hass?.states["sensor.chorebot_points"];
        const people = sensor?.attributes.people || {};
        const rewards = sensor?.attributes.rewards || [];
        const { personId, rewardId } = this._pendingRedemption;
        const person = people[personId];
        const reward = rewards.find((r) => r.id === rewardId);
        if (!person || !reward)
            return "";
        const personName = getPersonName(this.hass, personId);
        const remainingPoints = person.points_balance - reward.cost;
        const canAfford = person.points_balance >= reward.cost;
        const canRedeem = reward.enabled && canAfford;
        const parts = getPointsDisplayParts(this.hass);
        // Apply person accent color to modal buttons
        const confirmBg = `#${this.shades.base}`;
        const confirmHoverBg = `#${this.shades.dark}`;
        return b `
      <div class="modal-overlay" @click="${this._cancelRedemption}">
        <div
          class="modal-content"
          style="--modal-confirm-bg: ${confirmBg}; --modal-confirm-hover-bg: ${confirmHoverBg};"
          @click="${(e) => e.stopPropagation()}"
        >
          <div class="modal-header">
            ${canRedeem ? "Are you sure?" : "Reward Details"}
            <button
              class="edit-button"
              @click="${() => this._handleEditButtonClick(reward.id)}"
              title="Edit Reward"
            >
              <ha-icon icon="mdi:pencil"></ha-icon>
            </button>
          </div>
          <div class="modal-body">
            <div class="modal-info">
              <div class="modal-info-row">
                <span class="modal-info-label">Person:</span>
                <span class="modal-info-value">${personName}</span>
              </div>
              <div class="modal-info-row">
                <span class="modal-info-label">Reward:</span>
                <span class="modal-info-value">${reward.name}</span>
              </div>
              <div class="modal-info-row">
                <span class="modal-info-label">Cost:</span>
                <span class="modal-info-value"
                  >${reward.cost}
                  ${parts.icon
            ? b `<ha-icon icon="${parts.icon}"></ha-icon>`
            : ""}
                  ${parts.text ? parts.text : ""}</span
                >
              </div>
              <div class="modal-info-row">
                <span class="modal-info-label">Current Balance:</span>
                <span class="modal-info-value"
                  >${person.points_balance}
                  ${parts.icon
            ? b `<ha-icon icon="${parts.icon}"></ha-icon>`
            : ""}
                  ${parts.text ? parts.text : ""}</span
                >
              </div>
              <div class="modal-info-row">
                <span class="modal-info-label">Remaining Balance:</span>
                <span
                  class="modal-info-value"
                  style="color: ${remainingPoints < 0
            ? "var(--error-color)"
            : "inherit"}"
                  >${remainingPoints}
                  ${parts.icon
            ? b `<ha-icon icon="${parts.icon}"></ha-icon>`
            : ""}
                  ${parts.text ? parts.text : ""}</span
                >
              </div>
              ${!reward.enabled
            ? b `<div
                    style="margin-top: 12px; color: var(--warning-color); font-size: 14px; text-align: center;"
                  >
                    This reward is currently disabled.
                  </div>`
            : ""}
              ${!canAfford
            ? b `<div
                    style="margin-top: 12px; color: var(--error-color); font-size: 14px; text-align: center;"
                  >
                    Not enough points to redeem this reward.
                  </div>`
            : ""}
            </div>
          </div>
          <div class="modal-actions">
            <button
              class="modal-button cancel"
              @click="${this._cancelRedemption}"
            >
              ${canRedeem ? "Cancel" : "Close"}
            </button>
            <button
              class="modal-button confirm"
              ?disabled="${!canRedeem}"
              @click="${this._confirmRedemption}"
            >
              Redeem
            </button>
          </div>
        </div>
      </div>
    `;
    }
    _renderAddRewardModal() {
        if (!this._config)
            return "";
        return b `
      <ha-dialog
        open
        @closed=${this._closeAddRewardModal}
        heading="Add New Reward"
      >
        <ha-form
          .hass=${this.hass}
          .schema=${this._rewardFormSchema}
          .data=${this._rewardFormData}
          .computeLabel=${this._computeRewardFieldLabel}
          .computeHelper=${this._computeRewardFieldHelper}
          @value-changed=${this._handleRewardFormChange}
        ></ha-form>

        <ha-button
          slot="primaryAction"
          @click=${this._createReward}
          ?disabled=${!this._rewardFormData.name?.trim()}
        >
          Create
        </ha-button>
        <ha-button slot="secondaryAction" @click=${this._closeAddRewardModal}>
          Cancel
        </ha-button>
      </ha-dialog>
    `;
    }
    _renderEditRewardModal() {
        if (!this._config)
            return "";
        return b `
      <ha-dialog
        open
        @closed=${this._closeEditRewardModal}
        heading="Edit Reward"
      >
        <ha-form
          .hass=${this.hass}
          .schema=${this._rewardFormSchema}
          .data=${this._rewardFormData}
          .computeLabel=${this._computeRewardFieldLabel}
          .computeHelper=${this._computeRewardFieldHelper}
          @value-changed=${this._handleRewardFormChange}
        ></ha-form>

        <ha-button
          slot="secondaryAction"
          @click=${this._deleteReward}
          class="delete-button"
        >
          Delete
        </ha-button>
        
        <ha-button slot="secondaryAction" @click=${this._closeEditRewardModal}>
          Cancel
        </ha-button>
        
        <ha-button
          slot="primaryAction"
          @click=${this._updateReward}
          ?disabled=${!this._rewardFormData.name?.trim()}
        >
          Save
        </ha-button>
        
        <style>
          .delete-button {
            --mdc-theme-primary: var(--error-color, #db4437);
            --mdc-button-outline-color: var(--error-color, #db4437);
            --mdc-theme-on-primary: white;
            --wa-color-fill-loud: var(--error-color, #db4437);
            --wa-color-neutral-fill-loud: var(--error-color, #db4437);
            background-color: var(--error-color, #db4437);
            color: white;
            position: absolute;
            left: 16px;
          }
        </style>
      </ha-dialog>
    `;
    }
    _cancelRedemption() {
        this._showConfirmModal = false;
        this._pendingRedemption = null;
    }
    async _confirmRedemption() {
        if (!this._pendingRedemption)
            return;
        const { personId, rewardId } = this._pendingRedemption;
        // Close modal
        this._showConfirmModal = false;
        this._pendingRedemption = null;
        // Set redeeming state
        this._redeeming = rewardId;
        try {
            await this.hass.callService("chorebot", "redeem_reward", {
                person_id: personId,
                reward_id: rewardId,
            });
            // Show success animation (star shower with themed colors)
            this._showRedemptionSuccess();
        }
        catch (err) {
            // Show error message
            const errorMessage = err.message || "Failed to redeem reward. Please try again.";
            alert(errorMessage);
        }
        finally {
            this._redeeming = null;
        }
    }
    _showRedemptionSuccess() {
        // Get base color from accent color (fallback to primary color)
        const baseColor = this._config.accent_color ||
            getComputedStyle(this).getPropertyValue("--primary-color") ||
            "#03a9f4";
        // Extract color variants (lighter and darker shades)
        const colors = extractColorVariants(baseColor);
        // Play star shower animation
        playStarShower(colors, 3000);
    }
    _openAddRewardModal() {
        // Reset form and prefill person_id
        this._rewardFormData = {
            name: "",
            cost: 50,
            icon: "mdi:gift",
            description: "",
        };
        this._showAddRewardModal = true;
    }
    _closeAddRewardModal() {
        this._showAddRewardModal = false;
    }
    async _createReward() {
        if (!this._config)
            return;
        const { name, cost, icon, description } = this._rewardFormData;
        if (!name.trim()) {
            alert("Reward name is required");
            return;
        }
        try {
            await this.hass.callService("chorebot", "manage_reward", {
                name: name.trim(),
                cost: Math.max(1, Math.min(10000, cost)), // Clamp between 1 and 10000
                icon: icon || "mdi:gift",
                description: description.trim(),
                person_id: this._selectedPersonId, // Prefill with selected person
            });
            // Close modal
            this._closeAddRewardModal();
        }
        catch (err) {
            // Show error message
            const errorMessage = err.message || "Failed to create reward. Please try again.";
            alert(errorMessage);
        }
    }
    _openEditRewardModal(rewardId) {
        if (!this.hass)
            return;
        // Find reward in sensor attributes
        const sensor = this.hass.states["sensor.chorebot_points"];
        if (!sensor)
            return;
        const rewards = sensor.attributes.rewards || [];
        const reward = rewards.find((r) => r.id === rewardId);
        if (!reward) {
            alert("Reward not found");
            return;
        }
        // Populate form with existing reward data
        this._rewardFormData = {
            name: reward.name,
            cost: reward.cost,
            icon: reward.icon,
            description: reward.description || "",
        };
        this._editingRewardId = rewardId;
        this._showEditRewardModal = true;
    }
    _closeEditRewardModal() {
        this._showEditRewardModal = false;
        this._editingRewardId = null;
        // Reset form to defaults
        this._rewardFormData = {
            name: "",
            cost: 50,
            icon: "mdi:gift",
            description: "",
        };
    }
    _handleEditButtonClick(rewardId) {
        // Close redemption modal
        this._showConfirmModal = false;
        this._pendingRedemption = null;
        // Open edit modal
        this._openEditRewardModal(rewardId);
    }
    async _updateReward() {
        if (!this._config || !this._editingRewardId)
            return;
        const { name, cost, icon, description } = this._rewardFormData;
        if (!name.trim()) {
            alert("Reward name is required");
            return;
        }
        try {
            await this.hass.callService("chorebot", "manage_reward", {
                reward_id: this._editingRewardId, // Key difference from _createReward
                name: name.trim(),
                cost: Math.max(1, Math.min(10000, cost)),
                icon: icon || "mdi:gift",
                description: description.trim(),
                person_id: this._selectedPersonId,
            });
            // Close modal
            this._closeEditRewardModal();
        }
        catch (err) {
            const errorMessage = err.message || "Failed to update reward. Please try again.";
            alert(errorMessage);
        }
    }
    async _deleteReward() {
        if (!this._config || !this._editingRewardId)
            return;
        if (!confirm("Delete this reward? This action cannot be undone.")) {
            return;
        }
        try {
            await this.hass.callService("chorebot", "delete_reward", {
                reward_id: this._editingRewardId,
            });
            // Close modal
            this._closeEditRewardModal();
        }
        catch (err) {
            const errorMessage = err.message || "Failed to delete reward. Please try again.";
            alert(errorMessage);
        }
    }
    getCardSize() {
        return 3;
    }
};
ChoreBotPersonRewardsCard.styles = i$3 `
    :host {
      display: block;
      /* HA Dialog styling */
      --mdc-dialog-content-ink-color: var(--primary-text-color);
      --mdc-dialog-heading-ink-color: var(--primary-text-color);
      --mdc-dialog-max-width: 400px;
      /* HA Form field styling */
      --mdc-text-field-outlined-idle-border-color: var(--divider-color);
      --mdc-text-field-outlined-hover-border-color: var(--primary-color);
      --mdc-theme-primary: var(--primary-color);
      --mdc-text-field-fill-color: var(--card-background-color);
      --mdc-text-field-ink-color: var(--primary-text-color);
      --mdc-text-field-label-ink-color: var(--primary-text-color);
    }

    /* Make ha-card wrapper completely transparent */
    ha-card {
      background: transparent !important;
      box-shadow: none !important;
      border: none !important;
      padding: 0;
    }

    ha-dialog {
      --mdc-dialog-min-width: min(500px, 90vw);
    }

    ha-form {
      display: block;
    }

    /* Card Container with Gap */
    .card-container {
      display: flex;
      flex-direction: column;
      gap: 20px; /* Spacing between person and rewards sections */
    }

    /* Person Dropdown Styles - Shared with person-dropdown-utils.ts */
    /* Person Section Container */
    .person-section {
      background: var(--card-background-color);
      border-radius: var(--ha-card-border-radius, 12px);
      box-shadow: var(--ha-card-box-shadow, 0 2px 4px rgba(0, 0, 0, 0.1));
      position: relative;
      z-index: 2;
      transition: border-radius 0.3s ease;
    }

    .person-section.no-background {
      background: transparent;
      box-shadow: none;
    }

    .person-section.dropdown-open {
      border-radius: var(--ha-card-border-radius, 12px)
        var(--ha-card-border-radius, 12px) 0 0;
    }

    /* Person Display Header (matches person-points-card) */
    .person-header {
      cursor: pointer;
      transition: filter 0.2s ease, border-radius 0.3s ease;
      user-select: none;
      padding: 16px;
      position: relative;
      z-index: 2;
      background: var(--card-background-color);
      border-radius: var(--ha-card-border-radius, 12px);
    }

    .dropdown-open .person-header {
      border-radius: var(--ha-card-border-radius, 12px)
        var(--ha-card-border-radius, 12px) 0 0;
    }

    .person-header:hover {
      filter: brightness(1.05);
    }

    .person-header:active {
      filter: brightness(0.95);
    }

    .person-container {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .person-left {
      flex-shrink: 0;
    }

    .person-info {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 6px;
      min-width: 0;
    }

    .person-header-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      line-height: 1;
    }

    .person-name {
      font-size: 24px;
      font-weight: 500;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      flex: 1;
      min-width: 0;
      line-height: 1;
    }

    .person-points-and-chevron {
      display: flex;
      align-items: center;
      gap: 8px;
      flex-shrink: 0;
    }

    .person-points {
      font-size: 24px;
      font-weight: bold;
      color: var(--primary-color);
      white-space: nowrap;
      display: flex;
      align-items: center;
      gap: 4px;
      line-height: 1;
    }

    .person-points ha-icon {
      --mdc-icon-size: 20px;
      display: flex;
    }

    .dropdown-chevron {
      --mdc-icon-size: 20px;
      transition: transform 0.3s ease;
      color: var(--secondary-text-color);
    }

    .dropdown-chevron.open {
      transform: rotate(180deg);
    }

    /* Person Dropdown */
    .person-dropdown {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: var(--card-background-color);
      border-radius: 0 0 var(--ha-card-border-radius, 12px)
        var(--ha-card-border-radius, 12px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
      display: grid;
      grid-template-rows: 0fr;
      transition: grid-template-rows 0.3s ease;
      overflow: hidden;
      z-index: 1;
    }

    .person-dropdown.open {
      grid-template-rows: 1fr;
    }

    .person-dropdown-inner {
      overflow: hidden;
      max-height: 400px;
    }

    .person-dropdown.open .person-dropdown-inner {
      overflow-y: auto;
    }

    .person-dropdown-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 16px;
      cursor: pointer;
      transition: filter 0.2s ease;
      border-bottom: 1px solid var(--divider-color);
      background: var(--card-background-color);
    }

    .person-dropdown-item:last-child {
      border-bottom: none;
    }

    .person-dropdown-item:hover {
      filter: brightness(1.1);
    }

    .person-dropdown-item.selected {
      background: color-mix(in srgb, var(--primary-color) 10%, transparent);
    }

    .person-dropdown-info {
      flex: 1;
      min-width: 0;
    }

    .person-dropdown-name {
      font-size: 16px;
      font-weight: 500;
    }

    .person-dropdown-points {
      font-size: 14px;
      opacity: 0.7;
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .person-dropdown-points ha-icon {
      --mdc-icon-size: 14px;
      display: flex;
    }

    /* Person Avatar Styling */
    .person-avatar {
      border-radius: 50%;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .person-avatar img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .person-avatar.initials {
      background: linear-gradient(
        135deg,
        var(--primary-color),
        var(--accent-color, var(--primary-color))
      );
      color: white;
      font-weight: 600;
    }

    /* Progress Bar (matches person-points-card) */
    .progress-bar {
      position: relative;
      border-radius: 12px;
      height: 24px;
      overflow: hidden;
      box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
      width: 100%;
    }

    .progress-bar-fill {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      transition: width 0.3s ease;
      border-radius: 12px;
    }

    .progress-text {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      font-weight: 500;
      z-index: 1;
    }

    /* Rewards Section - Always transparent */
    .rewards-section {
      background: transparent;
      box-shadow: none;
      padding: 0;
      position: relative;
      z-index: 1;
    }

    /* Rewards Grid - From rewards-card.ts */
    .rewards-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 16px;
    }

    .reward-card {
      border-radius: 12px;
      background: var(--card-background-color);
      border: 1px solid var(--divider-color);
      display: flex;
      flex-direction: row;
      overflow: hidden;
      cursor: pointer;
      transition: filter 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
      min-height: 80px;
      height: 80px;
    }

    .reward-card.no-background {
      background: transparent;
      box-shadow: none;
      /* Keep border - DO NOT remove it */
      border: 1px solid var(--divider-color);
    }

    .reward-card:hover {
      filter: brightness(1.1);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    .reward-card.no-background:hover {
      box-shadow: none;
    }

    .reward-card.disabled {
      opacity: 0.6;
    }

    .reward-icon-section {
      flex-shrink: 0;
      width: 80px;
      background: var(--accent-color, var(--primary-color));
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .reward-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
    }

    .reward-icon ha-icon {
      --mdc-icon-size: 36px;
    }

    .reward-info {
      flex: 1;
      padding: 12px 16px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 6px;
      min-width: 0;
    }

    .reward-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      line-height: 1;
    }

    .reward-name {
      font-size: 18px;
      font-weight: 500;
      color: var(--primary-text-color);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      flex: 1;
      min-width: 0;
      line-height: 1;
    }

    .reward-cost {
      font-size: 20px;
      font-weight: bold;
      color: var(--accent-color, var(--primary-color));
      white-space: nowrap;
      display: flex;
      align-items: center;
      gap: 4px;
      flex-shrink: 0;
      line-height: 1;
    }

    .reward-cost ha-icon {
      --mdc-icon-size: 16px;
      display: flex;
    }

    .reward-description {
      font-size: 13px;
      color: var(--secondary-text-color);
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      line-height: 1.3;
    }

    /* Add Reward Card */
    .add-reward-card {
      border-radius: 12px;
      background: var(--card-background-color);
      border: 2px dashed var(--divider-color);
      display: flex;
      flex-direction: row;
      overflow: hidden;
      cursor: pointer;
      transition: all 0.2s ease;
      min-height: 80px;
      height: 80px;
    }

    .add-reward-card:hover {
      border-color: var(--button-border-color);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    .add-reward-icon-section {
      flex-shrink: 0;
      width: 80px;
      background: color-mix(in srgb, var(--divider-color) 50%, transparent);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
    }

    .add-reward-card:hover .add-reward-icon-section {
      background: var(--button-hover-bg);
    }

    .add-reward-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--secondary-text-color);
      transition: all 0.2s ease;
    }

    .add-reward-card:hover .add-reward-icon {
      color: var(--button-hover-color);
    }

    .add-reward-icon ha-icon {
      --mdc-icon-size: 36px;
    }

    .add-reward-info {
      flex: 1;
      padding: 12px 16px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .add-reward-text {
      font-size: 18px;
      font-weight: 500;
      color: var(--secondary-text-color);
      transition: all 0.2s ease;
    }

    .add-reward-card:hover .add-reward-text {
      color: var(--button-hover-color);
    }

    /* Modal Overlay */
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    }

    .modal-content {
      background: var(--card-background-color);
      border-radius: 12px;
      padding: 24px;
      max-width: 400px;
      width: 90%;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
      max-height: 90vh;
      overflow-y: auto;
    }

    .modal-header {
      position: relative; /* For absolute positioning of edit button */
      font-size: 20px;
      font-weight: 500;
      margin-bottom: 16px;
      color: var(--primary-text-color);
    }

    .edit-button {
      position: absolute;
      top: -8px;
      right: -8px;
      background: transparent;
      border: none;
      cursor: pointer;
      color: var(--primary-text-color);
      padding: 8px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0.7;
      transition: all 0.2s;
    }

    .edit-button:hover {
      opacity: 1;
      background: var(--secondary-background-color);
    }

    .edit-button ha-icon {
      --mdc-icon-size: 20px;
    }

    .modal-body {
      margin-bottom: 24px;
      color: var(--primary-text-color);
    }

    /* Confirmation Modal Info */
    .modal-info {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 16px;
      background: var(--secondary-background-color);
      border-radius: 8px;
      margin-top: 12px;
    }

    .modal-info-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .modal-info-label {
      color: var(--secondary-text-color);
      font-size: 14px;
    }

    .modal-info-value {
      color: var(--primary-text-color);
      font-size: 14px;
      font-weight: 500;
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .modal-info-value ha-icon {
      --mdc-icon-size: 14px;
      display: flex;
    }

    /* Modal Actions (used by confirmation modal only) */
    .modal-actions {
      display: flex;
      gap: 12px;
      justify-content: flex-end;
    }

    .modal-button {
      padding: 10px 20px;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-size: 14px;
      font-weight: 500;
      transition: all 0.2s ease;
    }

    .modal-button.cancel {
      background: var(--secondary-background-color);
      color: var(--primary-text-color);
    }

    .modal-button.cancel:hover {
      background: var(--divider-color);
    }

    .modal-button.confirm {
      background: var(--modal-confirm-bg, var(--accent-color, var(--primary-color)));
      color: white;
    }

    .modal-button.confirm:hover {
      background: var(--modal-confirm-hover-bg, var(--modal-confirm-bg, var(--accent-color, var(--primary-color))));
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    .modal-button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .modal-button:disabled:hover {
      transform: none;
      box-shadow: none;
    }

    .empty-state {
      text-align: center;
      padding: 32px;
      color: var(--secondary-text-color);
    }

    .error-state {
      text-align: center;
      padding: 32px;
      color: var(--error-color);
    }

    /* Responsive: Smaller elements on mobile */
    @media (max-width: 600px) {
      .person-header {
        padding: 12px;
      }

      .person-left .person-avatar {
        width: 48px;
        height: 48px;
      }

      .person-left .person-avatar.initials {
        font-size: 18px;
      }

      .person-name {
        font-size: 20px;
      }

      .person-points {
        font-size: 20px;
      }

      .person-points ha-icon {
        --mdc-icon-size: 18px;
      }

      .dropdown-chevron {
        --mdc-icon-size: 18px;
      }

      .person-dropdown-inner {
        max-height: 300px;
      }
    }
  `;
__decorate([
    n({ attribute: false })
], ChoreBotPersonRewardsCard.prototype, "hass", void 0);
__decorate([
    r()
], ChoreBotPersonRewardsCard.prototype, "_config", void 0);
__decorate([
    r()
], ChoreBotPersonRewardsCard.prototype, "_selectedPersonId", void 0);
__decorate([
    r()
], ChoreBotPersonRewardsCard.prototype, "_dropdownOpen", void 0);
__decorate([
    r()
], ChoreBotPersonRewardsCard.prototype, "_progress", void 0);
__decorate([
    r()
], ChoreBotPersonRewardsCard.prototype, "_redeeming", void 0);
__decorate([
    r()
], ChoreBotPersonRewardsCard.prototype, "_showConfirmModal", void 0);
__decorate([
    r()
], ChoreBotPersonRewardsCard.prototype, "_showAddRewardModal", void 0);
__decorate([
    r()
], ChoreBotPersonRewardsCard.prototype, "_showEditRewardModal", void 0);
__decorate([
    r()
], ChoreBotPersonRewardsCard.prototype, "_pendingRedemption", void 0);
__decorate([
    r()
], ChoreBotPersonRewardsCard.prototype, "_rewardFormData", void 0);
__decorate([
    r()
], ChoreBotPersonRewardsCard.prototype, "_editingRewardId", void 0);
ChoreBotPersonRewardsCard = __decorate([
    t("chorebot-person-rewards-card")
], ChoreBotPersonRewardsCard);
window.customCards = window.customCards || [];
window.customCards.push({
    type: "chorebot-person-rewards-card",
    name: "ChoreBot Person Rewards Card",
    description: "Combined person selector and rewards list card with progress tracking",
    preview: true,
});
console.info("%c CHOREBOT-PERSON-REWARDS-CARD %c v1.0.0", "color: white; background: #3498db; font-weight: bold;", "color: #3498db; background: white; font-weight: bold;");

/**
 * ChoreBot Multi-Person Overview Card
 *
 * Displays a vertical list of multiple people with their assigned tasks shown in
 * a simple, ungrouped format. Designed for quick family-wide status checks.
 *
 * Example Configuration:
 * ```yaml
 * type: custom:chorebot-multi-person-overview-card
 * entity: todo.chorebot_family_tasks
 * person_entities:
 *   - person.kyle
 *   - person.campbell
 *   - person.sarah
 * title: "Family Tasks Overview"
 * show_title: true
 * show_dateless_tasks: true
 * ```
 */
let ChoreBotMultiPersonOverviewCard = class ChoreBotMultiPersonOverviewCard extends i {
    constructor() {
        super(...arguments);
        this._groupedTasks = new Map();
    }
    /**
     * Set and validate card configuration
     * Note: Accepts empty config for preview mode - validation happens in visual editor
     */
    setConfig(config) {
        // Set configuration with defaults (don't throw errors - let preview render)
        this.config = {
            ...config,
            entity: config.entity || "",
            person_entities: config.person_entities || [],
            title: config.title || "Family Tasks",
            show_title: config.show_title !== false, // Default: true
            hide_card_background: config.hide_card_background || false,
            show_dateless_tasks: config.show_dateless_tasks !== false, // Default: true
        };
    }
    /**
     * Lifecycle hook: Triggered when properties change
     * Processes tasks when entity updates
     */
    updated(changedProps) {
        super.updated(changedProps);
        if (changedProps.has("hass") || changedProps.has("config")) {
            this._updateGroupedTasks();
        }
    }
    /**
     * Process and group tasks by person
     */
    _updateGroupedTasks() {
        if (!this.hass || !this.config)
            return;
        // Handle empty entity gracefully (preview mode)
        if (!this.config.entity) {
            this._groupedTasks = new Map();
            return;
        }
        const entity = this.hass.states[this.config.entity];
        if (!entity) {
            this._groupedTasks = new Map();
            return;
        }
        // Handle empty person_entities gracefully (preview mode)
        if (!this.config.person_entities || this.config.person_entities.length === 0) {
            this._groupedTasks = new Map();
            return;
        }
        // Filter to today's tasks
        const filteredTasks = filterTodayTasks(entity, this.config.show_dateless_tasks, this.config.filter_section_id);
        // Group by person
        this._groupedTasks = groupTasksByPerson(filteredTasks, this.config.person_entities);
    }
    /**
     * Main render method
     */
    render() {
        if (!this.hass || !this.config) {
            return b `<ha-card>
        <div class="card-content">Loading...</div>
      </ha-card>`;
        }
        // Show placeholder if entity not configured (preview mode)
        if (!this.config.entity) {
            return b `<ha-card>
        <div class="card-content">
          <div class="empty-state">
            Please configure a todo entity
          </div>
        </div>
      </ha-card>`;
        }
        // Show placeholder if no people configured (preview mode)
        if (!this.config.person_entities || this.config.person_entities.length === 0) {
            return b `<ha-card>
        <div class="card-content">
          <div class="empty-state">
            Please select at least one person
          </div>
        </div>
      </ha-card>`;
        }
        const cardClass = this.config.hide_card_background
            ? "no-background"
            : "";
        return b `
      <ha-card class="${cardClass}">
        ${this.config.show_title ? this._renderTitle() : ""}
        <div class="card-content">
          ${this.config.person_entities.map((personId) => this._renderPersonSection(personId))}
        </div>
      </ha-card>
    `;
    }
    /**
     * Render card title bar
     */
    _renderTitle() {
        return b `
      <div class="card-header">
        <div class="name">${this.config.title}</div>
      </div>
    `;
    }
    /**
     * Render a person section with their tasks
     */
    _renderPersonSection(personId) {
        const tasks = this._groupedTasks.get(personId) || [];
        const personName = getPersonName(this.hass, personId);
        return b `
      <div class="person-section">
        <div class="person-header">${personName}</div>
        ${tasks.length > 0
            ? b `<div class="task-list">
              ${tasks.map((task) => this._renderTaskRow(task))}
            </div>`
            : b `<div class="empty-state">No tasks for today</div>`}
      </div>
    `;
    }
    /**
     * Render a single task row
     */
    _renderTaskRow(task) {
        const isCompleted = task.status === "completed";
        const isTaskOverdue = isOverdue(task);
        // Determine styling classes
        const classes = [
            "task-row",
            isCompleted ? "completed" : "",
            isTaskOverdue ? "overdue" : "",
        ]
            .filter(Boolean)
            .join(" ");
        return b `
      <div class="${classes}">
        <ha-checkbox
          .checked=${isCompleted}
          @change=${(e) => this._handleTaskToggle(task, e)}
        ></ha-checkbox>
        <span class="task-title">${task.summary}</span>
      </div>
    `;
    }
    /**
     * Handle task completion toggle
     */
    async _handleTaskToggle(task, event) {
        event.stopPropagation();
        const checkbox = event.target;
        const newStatus = checkbox.checked ? "completed" : "needs_action";
        try {
            await this.hass.callService("todo", "update_item", {
                entity_id: this.config.entity,
                item: task.uid,
                status: newStatus,
            });
        }
        catch (error) {
            console.error("Failed to update task:", error);
            // Show error notification
            const event = new CustomEvent("hass-notification", {
                detail: {
                    message: `Failed to update task: ${error}`,
                    duration: 3000,
                },
                bubbles: true,
                composed: true,
            });
            this.dispatchEvent(event);
        }
    }
    /**
     * Component styles
     */
    static get styles() {
        return i$3 `
      :host {
        display: block;
      }

      ha-card {
        overflow: hidden;
      }

      ha-card.no-background {
        background: none;
        box-shadow: none;
      }

      .card-header {
        padding: 16px;
        border-bottom: 1px solid var(--divider-color);
      }

      .card-header .name {
        font-size: 24px;
        font-weight: 500;
        color: var(--primary-text-color);
      }

      .card-content {
        padding: 0;
      }

      /* Person Section Styles */
      .person-section {
        padding: 16px;
        border-bottom: 1px solid var(--divider-color);
      }

      .person-section:last-child {
        border-bottom: none;
      }

      .person-header {
        font-size: 18px;
        font-weight: 600;
        color: var(--primary-text-color);
        margin-bottom: 12px;
        padding-bottom: 8px;
        border-bottom: 1px solid var(--divider-color, rgba(255, 255, 255, 0.12));
      }

      /* Task List Styles */
      .task-list {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      .task-row {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 8px 0;
        min-height: 44px; /* Accessible touch target */
      }

      .task-row:hover {
        background: var(--divider-color, rgba(255, 255, 255, 0.05));
        border-radius: 4px;
        margin: 0 -8px;
        padding: 8px 8px;
      }

      .task-title {
        flex: 1;
        font-size: 16px;
        color: var(--primary-text-color);
        line-height: 1.4;
      }

      /* Status Styling */
      .task-row.completed .task-title {
        text-decoration: line-through;
        opacity: 0.6;
      }

      .task-row.overdue .task-title {
        color: var(--error-color, #f44336);
        font-weight: 500;
      }

      /* Empty State */
      .empty-state {
        font-style: italic;
        color: var(--secondary-text-color);
        padding: 12px 0;
        text-align: center;
        opacity: 0.7;
      }

      /* Checkbox Styling */
      ha-checkbox {
        --mdc-checkbox-size: 20px;
        min-width: 20px;
      }

      /* Mobile Responsiveness */
      @media (max-width: 600px) {
        .card-header .name {
          font-size: 20px;
        }

        .person-header {
          font-size: 16px;
        }

        .task-title {
          font-size: 14px;
        }

        .person-section {
          padding: 12px;
        }
      }

      /* Desktop Enhancements */
      @media (min-width: 601px) {
        .task-row {
          padding: 10px 0;
        }

        .person-section {
          padding: 20px;
        }
      }
    `;
    }
    /**
     * Return card element height stub for HA layout system
     */
    getCardSize() {
        const numPeople = this.config?.person_entities?.length || 0;
        const avgTasksPerPerson = 3; // Rough estimate
        return 1 + numPeople * (1 + avgTasksPerPerson * 0.5);
    }
    /**
     * Return stub config for card picker
     */
    static getStubConfig() {
        return {
            type: "custom:chorebot-multi-person-overview-card",
            entity: "",
            person_entities: [],
            title: "Family Tasks",
            show_title: true,
            hide_card_background: false,
            show_dateless_tasks: true,
            filter_section_id: "",
        };
    }
    /**
     * Return config form schema for visual editor
     */
    static getConfigForm() {
        return {
            schema: [
                {
                    name: "entity",
                    required: true,
                    selector: {
                        entity: {
                            filter: { domain: "todo" },
                        },
                    },
                },
                {
                    name: "person_entities",
                    required: true,
                    selector: {
                        entity: {
                            multiple: true,
                            filter: { domain: "person" },
                        },
                    },
                },
                {
                    name: "title",
                    default: "Family Tasks",
                    selector: { text: {} },
                },
                {
                    name: "show_title",
                    default: true,
                    selector: { boolean: {} },
                },
                {
                    name: "hide_card_background",
                    default: false,
                    selector: { boolean: {} },
                },
                {
                    name: "show_dateless_tasks",
                    default: true,
                    selector: { boolean: {} },
                },
                {
                    name: "filter_section_id",
                    selector: { text: {} },
                },
            ],
            computeLabel: (schema) => {
                const labels = {
                    entity: "Todo Entity",
                    person_entities: "People to Display",
                    title: "Card Title",
                    show_title: "Show Title",
                    hide_card_background: "Hide Card Background",
                    show_dateless_tasks: "Show Tasks Without Due Date",
                    filter_section_id: "Filter by Section",
                };
                return labels[schema.name] || undefined;
            },
            computeHelper: (schema) => {
                const helpers = {
                    entity: "Select the ChoreBot todo entity to display",
                    person_entities: "Select the people whose tasks should appear in this card",
                    title: "Title shown at the top of the card",
                    show_title: "Show or hide the card title",
                    hide_card_background: "Remove card background and shadow for a seamless look",
                    show_dateless_tasks: "Include tasks that do not have a due date",
                    filter_section_id: 'Optional: Show only tasks from a specific section (e.g., "Morning Routine")',
                };
                return helpers[schema.name] || undefined;
            },
        };
    }
};
__decorate([
    n({ attribute: false })
], ChoreBotMultiPersonOverviewCard.prototype, "hass", void 0);
__decorate([
    n({ attribute: false })
], ChoreBotMultiPersonOverviewCard.prototype, "config", void 0);
__decorate([
    r()
], ChoreBotMultiPersonOverviewCard.prototype, "_groupedTasks", void 0);
ChoreBotMultiPersonOverviewCard = __decorate([
    t("chorebot-multi-person-overview-card")
], ChoreBotMultiPersonOverviewCard);
window.customCards = window.customCards || [];
window.customCards.push({
    type: "chorebot-multi-person-overview-card",
    name: "ChoreBot Multi-Person Overview Card",
    description: "Vertical list showing multiple people with their assigned tasks for quick family-wide status checks",
    preview: true,
});
console.info("%c CHOREBOT-MULTI-PERSON-OVERVIEW-CARD %c v1.0.0 ", "color: white; background: #9C27B0; font-weight: bold;", "color: #9C27B0; background: white; font-weight: bold;");

/**
 * ChoreBot Cards - Single Bundle Entry Point
 *
 * This file imports and registers all 7 ChoreBot dashboard cards.
 * Each card self-registers via customElements.define() in its respective module.
 *
 * Cards included:
 * - chorebot-grouped-card: Tag-based grouped task view with progress tracking
 * - chorebot-add-task-card: Quick task creation with full field support
 * - chorebot-person-points-card: Visual points balance display with progress bar
 * - chorebot-rewards-card: Person-specific rewards with inline redemption
 * - chorebot-person-grouped-card: Person-filtered tag-based grouped task view
 * - chorebot-person-rewards-card: Combined person selector and rewards list
 * - chorebot-multi-person-overview-card: Simple multi-person task overview
 */
// Import all card modules - they self-register on import
// Version banner for browser console
console.info('%c CHOREBOT-CARDS %c v0.1.0 ', 'background: #3498db; color: white; font-weight: bold; padding: 2px 4px; border-radius: 3px 0 0 3px;', 'background: #ecf0f1; color: #3498db; font-weight: bold; padding: 2px 4px; border-radius: 0 3px 3px 0;');
//# sourceMappingURL=chorebot-cards.js.map
