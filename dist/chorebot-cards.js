function e(e,t,o,r){var s,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,r);else for(var n=e.length-1;n>=0;n--)(s=e[n])&&(a=(i<3?s(a):i>3?s(t,o,a):s(t,o))||a);return i>3&&a&&Object.defineProperty(t,o,a),a}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,o=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),s=new WeakMap;let i=class{constructor(e,t,o){if(this._$cssResult$=!0,o!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(o&&void 0===e){const o=void 0!==t&&1===t.length;o&&(e=s.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&s.set(t,e))}return e}toString(){return this.cssText}};const a=(e,...t)=>{const o=1===e.length?e[0]:t.reduce((t,o,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[r+1],e[0]);return new i(o,e,r)},n=o?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return(e=>new i("string"==typeof e?e:e+"",void 0,r))(t)})(e):e,{is:d,defineProperty:c,getOwnPropertyDescriptor:l,getOwnPropertyNames:h,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,_=globalThis,g=_.trustedTypes,f=g?g.emptyScript:"",m=_.reactiveElementPolyfillSupport,w=(e,t)=>e,b={toAttribute(e,t){switch(t){case Boolean:e=e?f:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},v=(e,t)=>!d(e,t),y={attribute:!0,type:String,converter:b,reflect:!1,useDefault:!1,hasChanged:v};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),_.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=y){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const o=Symbol(),r=this.getPropertyDescriptor(e,o,t);void 0!==r&&c(this.prototype,e,r)}}static getPropertyDescriptor(e,t,o){const{get:r,set:s}=l(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){const i=r?.call(this);s?.call(this,t),this.requestUpdate(e,i,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??y}static _$Ei(){if(this.hasOwnProperty(w("elementProperties")))return;const e=u(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(w("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(w("properties"))){const e=this.properties,t=[...h(e),...p(e)];for(const o of t)this.createProperty(o,e[o])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,o]of t)this.elementProperties.set(e,o)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const o=this._$Eu(e,t);void 0!==o&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(n(e))}else void 0!==e&&t.push(n(e));return t}static _$Eu(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,r)=>{if(o)e.adoptedStyleSheets=r.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const o of r){const r=document.createElement("style"),s=t.litNonce;void 0!==s&&r.setAttribute("nonce",s),r.textContent=o.cssText,e.appendChild(r)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$ET(e,t){const o=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,o);if(void 0!==r&&!0===o.reflect){const s=(void 0!==o.converter?.toAttribute?o.converter:b).toAttribute(t,o.type);this._$Em=e,null==s?this.removeAttribute(r):this.setAttribute(r,s),this._$Em=null}}_$AK(e,t){const o=this.constructor,r=o._$Eh.get(e);if(void 0!==r&&this._$Em!==r){const e=o.getPropertyOptions(r),s="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:b;this._$Em=r;const i=s.fromAttribute(t,e.type);this[r]=i??this._$Ej?.get(r)??i,this._$Em=null}}requestUpdate(e,t,o,r=!1,s){if(void 0!==e){const i=this.constructor;if(!1===r&&(s=this[e]),o??=i.getPropertyOptions(e),!((o.hasChanged??v)(s,t)||o.useDefault&&o.reflect&&s===this._$Ej?.get(e)&&!this.hasAttribute(i._$Eu(e,o))))return;this.C(e,t,o)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:o,reflect:r,wrapped:s},i){o&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,i??t??this[e]),!0!==s||void 0!==i)||(this._$AL.has(e)||(this.hasUpdated||o||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,o]of e){const{wrapped:e}=o,r=this[t];!0!==e||this._$AL.has(t)||void 0===r||this.C(t,void 0,o,r)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[w("elementProperties")]=new Map,x[w("finalized")]=new Map,m?.({ReactiveElement:x}),(_.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const k=globalThis,$=e=>e,T=k.trustedTypes,C=T?T.createPolicy("lit-html",{createHTML:e=>e}):void 0,A="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,R="?"+S,M=`<${R}>`,D=document,E=()=>D.createComment(""),P=e=>null===e||"object"!=typeof e&&"function"!=typeof e,z=Array.isArray,O="[ \t\n\f\r]",I=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,F=/-->/g,B=/>/g,U=RegExp(`>|${O}(?:([^\\s"'>=/]+)(${O}*=${O}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),H=/'/g,N=/"/g,j=/^(?:script|style|textarea|title)$/i,L=(e=>(t,...o)=>({_$litType$:e,strings:t,values:o}))(1),q=Symbol.for("lit-noChange"),Y=Symbol.for("lit-nothing"),W=new WeakMap,G=D.createTreeWalker(D,129);function V(e,t){if(!z(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==C?C.createHTML(t):t}const Z=(e,t)=>{const o=e.length-1,r=[];let s,i=2===t?"<svg>":3===t?"<math>":"",a=I;for(let t=0;t<o;t++){const o=e[t];let n,d,c=-1,l=0;for(;l<o.length&&(a.lastIndex=l,d=a.exec(o),null!==d);)l=a.lastIndex,a===I?"!--"===d[1]?a=F:void 0!==d[1]?a=B:void 0!==d[2]?(j.test(d[2])&&(s=RegExp("</"+d[2],"g")),a=U):void 0!==d[3]&&(a=U):a===U?">"===d[0]?(a=s??I,c=-1):void 0===d[1]?c=-2:(c=a.lastIndex-d[2].length,n=d[1],a=void 0===d[3]?U:'"'===d[3]?N:H):a===N||a===H?a=U:a===F||a===B?a=I:(a=U,s=void 0);const h=a===U&&e[t+1].startsWith("/>")?" ":"";i+=a===I?o+M:c>=0?(r.push(n),o.slice(0,c)+A+o.slice(c)+S+h):o+S+(-2===c?t:h)}return[V(e,i+(e[o]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),r]};class K{constructor({strings:e,_$litType$:t},o){let r;this.parts=[];let s=0,i=0;const a=e.length-1,n=this.parts,[d,c]=Z(e,t);if(this.el=K.createElement(d,o),G.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(r=G.nextNode())&&n.length<a;){if(1===r.nodeType){if(r.hasAttributes())for(const e of r.getAttributeNames())if(e.endsWith(A)){const t=c[i++],o=r.getAttribute(e).split(S),a=/([.?@])?(.*)/.exec(t);n.push({type:1,index:s,name:a[2],strings:o,ctor:"."===a[1]?te:"?"===a[1]?oe:"@"===a[1]?re:ee}),r.removeAttribute(e)}else e.startsWith(S)&&(n.push({type:6,index:s}),r.removeAttribute(e));if(j.test(r.tagName)){const e=r.textContent.split(S),t=e.length-1;if(t>0){r.textContent=T?T.emptyScript:"";for(let o=0;o<t;o++)r.append(e[o],E()),G.nextNode(),n.push({type:2,index:++s});r.append(e[t],E())}}}else if(8===r.nodeType)if(r.data===R)n.push({type:2,index:s});else{let e=-1;for(;-1!==(e=r.data.indexOf(S,e+1));)n.push({type:7,index:s}),e+=S.length-1}s++}}static createElement(e,t){const o=D.createElement("template");return o.innerHTML=e,o}}function X(e,t,o=e,r){if(t===q)return t;let s=void 0!==r?o._$Co?.[r]:o._$Cl;const i=P(t)?void 0:t._$litDirective$;return s?.constructor!==i&&(s?._$AO?.(!1),void 0===i?s=void 0:(s=new i(e),s._$AT(e,o,r)),void 0!==r?(o._$Co??=[])[r]=s:o._$Cl=s),void 0!==s&&(t=X(e,s._$AS(e,t.values),s,r)),t}class J{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:o}=this._$AD,r=(e?.creationScope??D).importNode(t,!0);G.currentNode=r;let s=G.nextNode(),i=0,a=0,n=o[0];for(;void 0!==n;){if(i===n.index){let t;2===n.type?t=new Q(s,s.nextSibling,this,e):1===n.type?t=new n.ctor(s,n.name,n.strings,this,e):6===n.type&&(t=new se(s,this,e)),this._$AV.push(t),n=o[++a]}i!==n?.index&&(s=G.nextNode(),i++)}return G.currentNode=D,r}p(e){let t=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,r){this.type=2,this._$AH=Y,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=X(this,e,t),P(e)?e===Y||null==e||""===e?(this._$AH!==Y&&this._$AR(),this._$AH=Y):e!==this._$AH&&e!==q&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>z(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Y&&P(this._$AH)?this._$AA.nextSibling.data=e:this.T(D.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:o}=e,r="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=K.createElement(V(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===r)this._$AH.p(t);else{const e=new J(r,this),o=e.u(this.options);e.p(t),this.T(o),this._$AH=e}}_$AC(e){let t=W.get(e.strings);return void 0===t&&W.set(e.strings,t=new K(e)),t}k(e){z(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,r=0;for(const s of e)r===t.length?t.push(o=new Q(this.O(E()),this.O(E()),this,this.options)):o=t[r],o._$AI(s),r++;r<t.length&&(this._$AR(o&&o._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=$(e).nextSibling;$(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class ee{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,r,s){this.type=1,this._$AH=Y,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=s,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=Y}_$AI(e,t=this,o,r){const s=this.strings;let i=!1;if(void 0===s)e=X(this,e,t,0),i=!P(e)||e!==this._$AH&&e!==q,i&&(this._$AH=e);else{const r=e;let a,n;for(e=s[0],a=0;a<s.length-1;a++)n=X(this,r[o+a],t,a),n===q&&(n=this._$AH[a]),i||=!P(n)||n!==this._$AH[a],n===Y?e=Y:e!==Y&&(e+=(n??"")+s[a+1]),this._$AH[a]=n}i&&!r&&this.j(e)}j(e){e===Y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class te extends ee{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Y?void 0:e}}class oe extends ee{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Y)}}class re extends ee{constructor(e,t,o,r,s){super(e,t,o,r,s),this.type=5}_$AI(e,t=this){if((e=X(this,e,t,0)??Y)===q)return;const o=this._$AH,r=e===Y&&o!==Y||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,s=e!==Y&&(o===Y||r);r&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class se{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){X(this,e)}}const ie=k.litHtmlPolyfillSupport;ie?.(K,Q),(k.litHtmlVersions??=[]).push("3.3.2");const ae=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ne extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{const r=o?.renderBefore??t;let s=r._$litPart$;if(void 0===s){const e=o?.renderBefore??null;r._$litPart$=s=new Q(t.insertBefore(E(),e),e,void 0,o??{})}return s._$AI(e),s})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return q}}ne._$litElement$=!0,ne.finalized=!0,ae.litElementHydrateSupport?.({LitElement:ne});const de=ae.litElementPolyfillSupport;de?.({LitElement:ne}),(ae.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ce=e=>(t,o)=>{void 0!==o?o.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},le={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:v},he=(e=le,t,o)=>{const{kind:r,metadata:s}=o;let i=globalThis.litPropertyMetadata.get(s);if(void 0===i&&globalThis.litPropertyMetadata.set(s,i=new Map),"setter"===r&&((e=Object.create(e)).wrapped=!0),i.set(o.name,e),"accessor"===r){const{name:r}=o;return{set(o){const s=t.get.call(this);t.set.call(this,o),this.requestUpdate(r,s,e,!0,o)},init(t){return void 0!==t&&this.C(r,void 0,e,t),t}}}if("setter"===r){const{name:r}=o;return function(o){const s=this[r];t.call(this,o),this.requestUpdate(r,s,e,!0,o)}}throw Error("Unsupported decorator location: "+r)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function pe(e){return(t,o)=>"object"==typeof o?he(e,t,o):((e,t,o)=>{const r=t.hasOwnProperty(o);return t.constructor.createProperty(o,e),r?Object.getOwnPropertyDescriptor(t,o):void 0})(e,t,o)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ue(e){return pe({...e,state:!0,attribute:!1})}function _e(e){try{const t=new Date(e);if(isNaN(t.getTime()))return{date:null,time:null};const o=t.getFullYear(),r=String(t.getMonth()+1).padStart(2,"0"),s=String(t.getDate()).padStart(2,"0"),i=String(t.getHours()).padStart(2,"0");return{date:`${o}-${r}-${s}`,time:`${i}:${String(t.getMinutes()).padStart(2,"0")}`}}catch(t){return console.error("Date parsing error:",t,e),{date:null,time:null}}}function ge(e,t){if(t?.is_all_day||!1){const t=new Date,o=Date.UTC(t.getFullYear(),t.getMonth(),t.getDate()),r=Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate())-o,s=Math.round(r/864e5);return 0===s?"Today":-1===s?"Yesterday":1===s?"Tomorrow":s<-1?`${Math.abs(s)} days ago`:`In ${s} days`}const o=new Date;o.setHours(0,0,0,0);const r=new Date(e);r.setHours(0,0,0,0);const s=r.getTime()-o.getTime(),i=Math.round(s/864e5);if(0===i){return new Date(e).toLocaleTimeString(void 0,{hour:"numeric",minute:"2-digit"})}return-1===i?"Yesterday":1===i?"Tomorrow":i<-1?`${Math.abs(i)} days ago`:`In ${i} days`}function fe(e){if(!e.due||"completed"===e.status)return!1;const t=e.is_all_day||!1,o=new Date(e.due);if(t){const e=new Date,t=Date.UTC(e.getFullYear(),e.getMonth(),e.getDate());return Date.UTC(o.getUTCFullYear(),o.getUTCMonth(),o.getUTCDate())<t}{const e=new Date;return e.setHours(0,0,0,0),o.setHours(0,0,0,0),o<e}}function me(e,t){return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()}function we(e,t=!0,o){const r=e.attributes.chorebot_tasks||[],s=new Date;s.setHours(0,0,0,0);let i=r.filter(e=>{const o=!!e.due,r="completed"===e.status;if(!o)return t;const i=new Date(e.due);i.setHours(0,0,0,0);const a=me(i,s),n=i<s;if(r&&e.last_completed){return!!me(new Date(e.last_completed),new Date)}return!!a||!(!n||r)});if(o){const t=e.attributes.chorebot_sections||[],r=o,s=t.find(e=>e.name===r),a=s?s.id:r;i=i.filter(e=>e.section_id===a)}return i}function be(e){const t=e.filter(e=>"completed"===e.status).length;return{completed:t,total:e.length}}function ve(e){const t=e.filter(e=>!!e.due),o=t.filter(e=>"completed"===e.status).length;return{completed:o,total:t.length}}function ye(e,t,o="Untagged",r="Upcoming"){return e.sort((e,s)=>{if(e.name===r)return 1;if(s.name===r)return-1;if(!t||0===t.length)return e.name===o?1:s.name===o?-1:e.name.localeCompare(s.name);const i=t.indexOf(e.name),a=t.indexOf(s.name);return-1!==i&&-1!==a?i-a:-1!==i?-1:-1!==a||e.name===o?1:s.name===o?-1:e.name.localeCompare(s.name)})}function xe(e,t,o=!1){const r=[],s=e.filter(e=>e.entity_id.startsWith("todo.chorebot_"));for(const e of s){const s=we(e,o).filter(e=>e.computed_person_id===t);r.push(...s)}return r}function ke(e,t=!0,o=!1,r="Untagged",s="Upcoming",i,a){const n=e.attributes.chorebot_tasks||[],d=new Date;d.setHours(0,0,0,0);const c=new Date(d);c.setHours(23,59,59,999);const l=new Map,h=[];let p;if(i){const t=(e.attributes.chorebot_sections||[]).find(e=>e.name===i);p=t?t.id:i}for(const e of n){if(p&&e.section_id!==p)continue;if(a&&e.computed_person_id!==a)continue;const s=!!e.due,i="completed"===e.status;let n=!1,u=!1;if(s){if(e.due){const t=new Date(e.due);if(o&&t>c)u=!0;else{const o=new Date(t);o.setHours(0,0,0,0);const r=me(o,d),s=o<d;i?e.last_completed&&me(new Date(e.last_completed),new Date)&&(n=!0):(r||s)&&(n=!0)}}}else n=t;if(n){const t=e.tags||[];if(0===t.length)l.has(r)||l.set(r,[]),l.get(r).push(e);else for(const o of t)l.has(o)||l.set(o,[]),l.get(o).push(e)}else u&&h.push(e)}h.sort((e,t)=>new Date(e.due).getTime()-new Date(t.due).getTime());const u=Array.from(l.entries()).map(([e,t])=>({name:e,tasks:t,isCollapsed:!1}));return o&&h.length>0&&u.push({name:s,tasks:h,isCollapsed:!1}),u}function $e(e){if(!e||!e.has_recurrence)return null;const{recurrence_frequency:t,recurrence_interval:o,recurrence_byweekday:r,recurrence_bymonthday:s}=e;if(!t)return null;let i=`FREQ=${t};INTERVAL=${o||1}`;if("WEEKLY"===t&&r&&r.length>0)i+=`;BYDAY=${r.join(",").toUpperCase()}`;else if("MONTHLY"===t&&s){i+=`;BYMONTHDAY=${Math.max(1,Math.min(31,s))}`}return i}function Te(e){const t=e.states["sensor.chorebot_points"],o=t?.attributes.points_display;return o?{icon:o.icon??"",text:o.text??"points"}:{icon:"",text:"points"}}function Ce(e){const t=Te(e);return t.text?t.text.toLowerCase():""}function Ae(e,t){const o={...e,is_all_day:e.is_all_day||!1,tags:e.tags||[],section_id:e.section_id,points_value:e.points_value||0,streak_bonus_points:e.streak_bonus_points||0,streak_bonus_interval:e.streak_bonus_interval||0};if(e.due){const t=_e(e.due);o.due_date=t.date??void 0,o.due_time=t.time??void 0,o.has_due_date=!0}else o.has_due_date=!1;let r=e.rrule;if(e.parent_uid&&t){const s=t.find(t=>t.uid===e.parent_uid);s&&(r=s.rrule,o.streak_bonus_points=s.streak_bonus_points||0,o.streak_bonus_interval=s.streak_bonus_interval||0)}const s=function(e){if(!e)return null;try{const t=e.split(";");let o=null,r=1;const s=[];let i=null;for(const e of t){const[t,a]=e.split("=");if("FREQ"===t)"DAILY"!==a&&"WEEKLY"!==a&&"MONTHLY"!==a||(o=a);else if("INTERVAL"===t){const e=parseInt(a,10);!isNaN(e)&&e>0&&(r=e)}else if("BYDAY"===t)s.push(...a.split(","));else if("BYMONTHDAY"===t){const e=parseInt(a,10);!isNaN(e)&&e>=1&&e<=31&&(i=e)}}return o?{frequency:o,interval:r,byweekday:s,bymonthday:i}:null}catch(t){return console.error("rrule parsing error:",t,e),null}}(r);return s?(o.has_recurrence=!0,o.recurrence_frequency=s.frequency,o.recurrence_interval=s.interval,o.recurrence_byweekday=s.byweekday,o.recurrence_bymonthday=s.bymonthday||1):(o.has_recurrence=!1,o.recurrence_frequency="DAILY",o.recurrence_interval=1,o.recurrence_byweekday=[],o.recurrence_bymonthday=1),o}function Se(e){const t=function(e){const t=Te(e);return t.text?t.text.charAt(0).toUpperCase()+t.text.slice(1):""}(e)||"Points";return function(e){return{summary:"Task Name",has_due_date:"Has Due Date",is_all_day:"All Day",due_date:"Date",due_time:"Time",description:"Description",section_id:"Section",tags:"Tags",has_recurrence:"Recurring Task",recurrence_frequency:"Frequency",recurrence_interval:"Repeat Every",recurrence_byweekday:"Days of Week",recurrence_bymonthday:"Day of Month",points_value:`${t} Value`,streak_bonus_points:`Streak Bonus ${t}`,streak_bonus_interval:"Bonus Every X Days (0 = no bonus)"}[e.name]||e.name}}function Re(e,t,o,r,s,i,a,n,d,c,l="Edit Task",h=!0){if(!e||!t)return L``;const p=function(e,t,o){const r=void 0!==e.has_due_date?e.has_due_date:!!e.due,s=void 0!==e.is_all_day&&e.is_all_day,i=[{name:"summary",required:!0,selector:{text:{}}},{name:"description",selector:{text:{multiline:!0}}}];if(t.length>0&&i.push({name:"section_id",selector:{select:{options:t.sort((e,t)=>t.sort_order-e.sort_order).map(e=>({label:e.name,value:e.id}))}}}),i.push({name:"tags",selector:{select:{multiple:!0,custom_value:!0,options:o.map(e=>({label:e,value:e}))}}}),i.push({name:"has_due_date",selector:{boolean:{}}}),r&&(i.push({name:"due_date",selector:{date:{}}}),s||i.push({name:"due_time",selector:{time:{}}}),i.push({name:"is_all_day",selector:{boolean:{}}})),r){const t=void 0!==e.has_recurrence&&e.has_recurrence,o=e.recurrence_frequency||"DAILY";i.push({name:"has_recurrence",selector:{boolean:{}}}),t&&(i.push({name:"recurrence_frequency",selector:{select:{options:[{label:"Daily",value:"DAILY"},{label:"Weekly",value:"WEEKLY"},{label:"Monthly",value:"MONTHLY"}]}}}),i.push({name:"recurrence_interval",selector:{number:{min:1,max:999,mode:"box"}}}),"WEEKLY"===o?i.push({name:"recurrence_byweekday",selector:{select:{multiple:!0,options:[{label:"Monday",value:"MO"},{label:"Tuesday",value:"TU"},{label:"Wednesday",value:"WE"},{label:"Thursday",value:"TH"},{label:"Friday",value:"FR"},{label:"Saturday",value:"SA"},{label:"Sunday",value:"SU"}]}}}):"MONTHLY"===o&&i.push({name:"recurrence_bymonthday",selector:{number:{min:1,max:31,mode:"box"}}}))}return i.push({name:"points_value",selector:{number:{min:0,max:1e4,mode:"box"}}}),r&&e.has_recurrence&&(i.push({name:"streak_bonus_points",selector:{number:{min:0,max:1e4,mode:"box"}}}),i.push({name:"streak_bonus_interval",selector:{number:{min:0,max:999,mode:"box"}}})),i}(t,r,s),u=function(e,t){const o=void 0!==e.has_due_date?e.has_due_date:!!e.due,r=void 0!==e.is_all_day&&e.is_all_day;let s=e.due_date||null,i=e.due_time||null;if(!s&&e.due){const t=_e(e.due);s=t.date,i=t.time}return{summary:e.summary||"",has_due_date:o,is_all_day:r,due_date:s||null,due_time:i||"00:00",description:e.description||"",section_id:e.section_id||(t.length>0?t.sort((e,t)=>t.sort_order-e.sort_order)[0].id:void 0),tags:e.tags||[],has_recurrence:o&&e.has_recurrence||!1,recurrence_frequency:e.recurrence_frequency||"DAILY",recurrence_interval:e.recurrence_interval||1,recurrence_byweekday:e.recurrence_byweekday||[],recurrence_bymonthday:e.recurrence_bymonthday||1,points_value:e.points_value||0,streak_bonus_points:e.streak_bonus_points||0,streak_bonus_interval:e.streak_bonus_interval||0}}(t,r),_=Se(o);return L`
    <ha-dialog open @closed=${a} .heading=${l}>
      <ha-form
        .hass=${o}
        .schema=${p}
        .data=${u}
        .computeLabel=${_}
        @value-changed=${n}
      ></ha-form>

      <!-- Delete button (bottom-left positioning via CSS) -->
      ${h&&c&&t?.uid?L`
            <ha-button
              slot="primaryAction"
              @click=${c}
              .disabled=${i}
              class="delete-button"
            >
              Delete
            </ha-button>
          `:""}

      <ha-button slot="primaryAction" @click=${d} .disabled=${i}>
        ${i?"Saving...":"Save"}
      </ha-button>
      <ha-button slot="secondaryAction" @click=${a} .disabled=${i}>
        Cancel
      </ha-button>

      <style>
        ha-dialog {
          --mdc-dialog-min-width: min(500px, 90vw);
        }
        .delete-button {
          --mdc-theme-primary: var(--error-color, #db4437);
          margin-right: auto; /* Push to left */
        }
      </style>
    </ha-dialog>
  `}function Me(e,t){if(e.startsWith("var(")){const t=getComputedStyle(document.documentElement).getPropertyValue(e.slice(4,-1).trim());if(!t)return e;e=t.trim()}let o,r,s;if(e.startsWith("#")){const t=e.replace("#","");o=parseInt(t.substring(0,2),16),r=parseInt(t.substring(2,4),16),s=parseInt(t.substring(4,6),16)}else{if(!e.startsWith("rgb"))return e;{const t=e.match(/\d+/g);if(!t)return e;[o,r,s]=t.map(Number)}}o/=255,r/=255,s/=255;const i=Math.max(o,r,s),a=Math.min(o,r,s);let n=0,d=0,c=(i+a)/2;if(i!==a){const e=i-a;switch(d=c>.5?e/(2-i-a):e/(i+a),i){case o:n=((r-s)/e+(r<s?6:0))/6;break;case r:n=((s-o)/e+2)/6;break;case s:n=((o-r)/e+4)/6}}c=t>0?Math.max(0,Math.min(.95,c+t/100*(1-c))):Math.max(.05,c+t/100*c);const l=(e,t,o)=>(o<0&&(o+=1),o>1&&(o-=1),o<1/6?e+6*(t-e)*o:o<.5?t:o<2/3?e+(t-e)*(2/3-o)*6:e);let h,p,u;if(0===d)h=p=u=c;else{const e=c<.5?c*(1+d):c+d-c*d,t=2*c-e;h=l(t,e,n+1/3),p=l(t,e,n),u=l(t,e,n-1/3)}const _=e=>{const t=Math.round(255*e).toString(16);return 1===t.length?"0"+t:t};return`${_(h)}${_(p)}${_(u)}`.toUpperCase()}function De(e){return{lighter:Me(e,30),light:Me(e,15),base:(t=e,t.startsWith("#")?t.substring(1).toUpperCase():/^[0-9A-Fa-f]{6}$/.test(t)?t.toUpperCase():Me(t,0)),dark:Me(e,-15),darker:Me(e,-30)};var t}function Ee(e,t,o){let r="var(--primary-color)";if(o){const t=e.states["sensor.chorebot_points"],s=(t?.attributes.people||{})[o];s?.accent_color&&(r=s.accent_color)}return t&&(r=t),r}var Pe={};!function e(t,o,r,s){var i=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),a="function"==typeof Path2D&&"function"==typeof DOMMatrix,n=function(){if(!t.OffscreenCanvas)return!1;try{var e=new OffscreenCanvas(1,1),o=e.getContext("2d");o.fillRect(0,0,1,1);var r=e.transferToImageBitmap();o.createPattern(r,"no-repeat")}catch(e){return!1}return!0}();function d(){}function c(e){var r=o.exports.Promise,s=void 0!==r?r:t.Promise;return"function"==typeof s?new s(e):(e(d,d),null)}var l,h,p,u,_,g,f,m,w,b,v,y=(l=n,h=new Map,{transform:function(e){if(l)return e;if(h.has(e))return h.get(e);var t=new OffscreenCanvas(e.width,e.height);return t.getContext("2d").drawImage(e,0,0),h.set(e,t),t},clear:function(){h.clear()}}),x=(_=Math.floor(1e3/60),g={},f=0,"function"==typeof requestAnimationFrame&&"function"==typeof cancelAnimationFrame?(p=function(e){var t=Math.random();return g[t]=requestAnimationFrame(function o(r){f===r||f+_-1<r?(f=r,delete g[t],e()):g[t]=requestAnimationFrame(o)}),t},u=function(e){g[e]&&cancelAnimationFrame(g[e])}):(p=function(e){return setTimeout(e,_)},u=function(e){return clearTimeout(e)}),{frame:p,cancel:u}),k=(b={},function(){if(m)return m;if(!r&&i){var t=["var CONFETTI, SIZE = {}, module = {};","("+e.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join("\n");try{m=new Worker(URL.createObjectURL(new Blob([t])))}catch(e){return"undefined"!=typeof console&&"function"==typeof console.warn&&console.warn("🎊 Could not load worker",e),null}!function(e){function t(t,o){e.postMessage({options:t||{},callback:o})}e.init=function(t){var o=t.transferControlToOffscreen();e.postMessage({canvas:o},[o])},e.fire=function(o,r,s){if(w)return t(o,null),w;var i=Math.random().toString(36).slice(2);return w=c(function(r){function a(t){t.data.callback===i&&(delete b[i],e.removeEventListener("message",a),w=null,y.clear(),s(),r())}e.addEventListener("message",a),t(o,i),b[i]=a.bind(null,{data:{callback:i}})})},e.reset=function(){for(var t in e.postMessage({reset:!0}),b)b[t](),delete b[t]}}(m)}return m}),$={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function T(e,t,o){return function(e,t){return t?t(e):e}(e&&null!=e[t]?e[t]:$[t],o)}function C(e){return e<0?0:Math.floor(e)}function A(e,t){return Math.floor(Math.random()*(t-e))+e}function S(e){return parseInt(e,16)}function R(e){return e.map(M)}function M(e){var t=String(e).replace(/[^0-9a-f]/gi,"");return t.length<6&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:S(t.substring(0,2)),g:S(t.substring(2,4)),b:S(t.substring(4,6))}}function D(e){e.width=document.documentElement.clientWidth,e.height=document.documentElement.clientHeight}function E(e){var t=e.getBoundingClientRect();e.width=t.width,e.height=t.height}function P(e){var t=e.angle*(Math.PI/180),o=e.spread*(Math.PI/180);return{x:e.x,y:e.y,wobble:10*Math.random(),wobbleSpeed:Math.min(.11,.1*Math.random()+.05),velocity:.5*e.startVelocity+Math.random()*e.startVelocity,angle2D:-t+(.5*o-Math.random()*o),tiltAngle:(.5*Math.random()+.25)*Math.PI,color:e.color,shape:e.shape,tick:0,totalTicks:e.ticks,decay:e.decay,drift:e.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:3*e.gravity,ovalScalar:.6,scalar:e.scalar,flat:e.flat}}function z(e,t){t.x+=Math.cos(t.angle2D)*t.velocity+t.drift,t.y+=Math.sin(t.angle2D)*t.velocity+t.gravity,t.velocity*=t.decay,t.flat?(t.wobble=0,t.wobbleX=t.x+10*t.scalar,t.wobbleY=t.y+10*t.scalar,t.tiltSin=0,t.tiltCos=0,t.random=1):(t.wobble+=t.wobbleSpeed,t.wobbleX=t.x+10*t.scalar*Math.cos(t.wobble),t.wobbleY=t.y+10*t.scalar*Math.sin(t.wobble),t.tiltAngle+=.1,t.tiltSin=Math.sin(t.tiltAngle),t.tiltCos=Math.cos(t.tiltAngle),t.random=Math.random()+2);var o=t.tick++/t.totalTicks,r=t.x+t.random*t.tiltCos,s=t.y+t.random*t.tiltSin,i=t.wobbleX+t.random*t.tiltCos,n=t.wobbleY+t.random*t.tiltSin;if(e.fillStyle="rgba("+t.color.r+", "+t.color.g+", "+t.color.b+", "+(1-o)+")",e.beginPath(),a&&"path"===t.shape.type&&"string"==typeof t.shape.path&&Array.isArray(t.shape.matrix))e.fill(function(e,t,o,r,s,i,a){var n=new Path2D(e),d=new Path2D;d.addPath(n,new DOMMatrix(t));var c=new Path2D;return c.addPath(d,new DOMMatrix([Math.cos(a)*s,Math.sin(a)*s,-Math.sin(a)*i,Math.cos(a)*i,o,r])),c}(t.shape.path,t.shape.matrix,t.x,t.y,.1*Math.abs(i-r),.1*Math.abs(n-s),Math.PI/10*t.wobble));else if("bitmap"===t.shape.type){var d=Math.PI/10*t.wobble,c=.1*Math.abs(i-r),l=.1*Math.abs(n-s),h=t.shape.bitmap.width*t.scalar,p=t.shape.bitmap.height*t.scalar,u=new DOMMatrix([Math.cos(d)*c,Math.sin(d)*c,-Math.sin(d)*l,Math.cos(d)*l,t.x,t.y]);u.multiplySelf(new DOMMatrix(t.shape.matrix));var _=e.createPattern(y.transform(t.shape.bitmap),"no-repeat");_.setTransform(u),e.globalAlpha=1-o,e.fillStyle=_,e.fillRect(t.x-h/2,t.y-p/2,h,p),e.globalAlpha=1}else if("circle"===t.shape)e.ellipse?e.ellipse(t.x,t.y,Math.abs(i-r)*t.ovalScalar,Math.abs(n-s)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):function(e,t,o,r,s,i,a,n,d){e.save(),e.translate(t,o),e.rotate(i),e.scale(r,s),e.arc(0,0,1,a,n,d),e.restore()}(e,t.x,t.y,Math.abs(i-r)*t.ovalScalar,Math.abs(n-s)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI);else if("star"===t.shape)for(var g=Math.PI/2*3,f=4*t.scalar,m=8*t.scalar,w=t.x,b=t.y,v=5,x=Math.PI/v;v--;)w=t.x+Math.cos(g)*m,b=t.y+Math.sin(g)*m,e.lineTo(w,b),g+=x,w=t.x+Math.cos(g)*f,b=t.y+Math.sin(g)*f,e.lineTo(w,b),g+=x;else e.moveTo(Math.floor(t.x),Math.floor(t.y)),e.lineTo(Math.floor(t.wobbleX),Math.floor(s)),e.lineTo(Math.floor(i),Math.floor(n)),e.lineTo(Math.floor(r),Math.floor(t.wobbleY));return e.closePath(),e.fill(),t.tick<t.totalTicks}function O(e,o){var a,n=!e,d=!!T(o||{},"resize"),l=!1,h=T(o,"disableForReducedMotion",Boolean),p=i&&!!T(o||{},"useWorker")?k():null,u=n?D:E,_=!(!e||!p)&&!!e.__confetti_initialized,g="function"==typeof matchMedia&&matchMedia("(prefers-reduced-motion)").matches;function f(t,o,i){for(var n=T(t,"particleCount",C),d=T(t,"angle",Number),l=T(t,"spread",Number),h=T(t,"startVelocity",Number),p=T(t,"decay",Number),_=T(t,"gravity",Number),g=T(t,"drift",Number),f=T(t,"colors",R),m=T(t,"ticks",Number),w=T(t,"shapes"),b=T(t,"scalar"),v=!!T(t,"flat"),k=function(e){var t=T(e,"origin",Object);return t.x=T(t,"x",Number),t.y=T(t,"y",Number),t}(t),$=n,S=[],M=e.width*k.x,D=e.height*k.y;$--;)S.push(P({x:M,y:D,angle:d,spread:l,startVelocity:h,color:f[$%f.length],shape:w[A(0,w.length)],ticks:m,decay:p,gravity:_,drift:g,scalar:b,flat:v}));return a?a.addFettis(S):(a=function(e,t,o,i,a){var n,d,l=t.slice(),h=e.getContext("2d"),p=c(function(t){function c(){n=d=null,h.clearRect(0,0,i.width,i.height),y.clear(),a(),t()}n=x.frame(function t(){!r||i.width===s.width&&i.height===s.height||(i.width=e.width=s.width,i.height=e.height=s.height),i.width||i.height||(o(e),i.width=e.width,i.height=e.height),h.clearRect(0,0,i.width,i.height),(l=l.filter(function(e){return z(h,e)})).length?n=x.frame(t):c()}),d=c});return{addFettis:function(e){return l=l.concat(e),p},canvas:e,promise:p,reset:function(){n&&x.cancel(n),d&&d()}}}(e,S,u,o,i),a.promise)}function m(o){var r=h||T(o,"disableForReducedMotion",Boolean),s=T(o,"zIndex",Number);if(r&&g)return c(function(e){e()});n&&a?e=a.canvas:n&&!e&&(e=function(e){var t=document.createElement("canvas");return t.style.position="fixed",t.style.top="0px",t.style.left="0px",t.style.pointerEvents="none",t.style.zIndex=e,t}(s),document.body.appendChild(e)),d&&!_&&u(e);var i={width:e.width,height:e.height};function m(){if(p){var t={getBoundingClientRect:function(){if(!n)return e.getBoundingClientRect()}};return u(t),void p.postMessage({resize:{width:t.width,height:t.height}})}i.width=i.height=null}function w(){a=null,d&&(l=!1,t.removeEventListener("resize",m)),n&&e&&(document.body.contains(e)&&document.body.removeChild(e),e=null,_=!1)}return p&&!_&&p.init(e),_=!0,p&&(e.__confetti_initialized=!0),d&&!l&&(l=!0,t.addEventListener("resize",m,!1)),p?p.fire(o,i,w):f(o,i,w)}return m.reset=function(){p&&p.reset(),a&&a.reset()},m}function I(){return v||(v=O(null,{useWorker:!0,resize:!0})),v}o.exports=function(){return I().apply(this,arguments)},o.exports.reset=function(){I().reset()},o.exports.create=O,o.exports.shapeFromPath=function(e){if(!a)throw new Error("path confetti are not supported in this browser");var t,o;"string"==typeof e?t=e:(t=e.path,o=e.matrix);var r=new Path2D(t),s=document.createElement("canvas").getContext("2d");if(!o){for(var i,n,d=1e3,c=d,l=d,h=0,p=0,u=0;u<d;u+=2)for(var _=0;_<d;_+=2)s.isPointInPath(r,u,_,"nonzero")&&(c=Math.min(c,u),l=Math.min(l,_),h=Math.max(h,u),p=Math.max(p,_));i=h-c,n=p-l;var g=Math.min(10/i,10/n);o=[g,0,0,g,-Math.round(i/2+c)*g,-Math.round(n/2+l)*g]}return{type:"path",path:t,matrix:o}},o.exports.shapeFromText=function(e){var t,o=1,r="#000000",s='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';"string"==typeof e?t=e:(t=e.text,o="scalar"in e?e.scalar:o,s="fontFamily"in e?e.fontFamily:s,r="color"in e?e.color:r);var i=10*o,a=i+"px "+s,n=new OffscreenCanvas(i,i),d=n.getContext("2d");d.font=a;var c=d.measureText(t),l=Math.ceil(c.actualBoundingBoxRight+c.actualBoundingBoxLeft),h=Math.ceil(c.actualBoundingBoxAscent+c.actualBoundingBoxDescent),p=c.actualBoundingBoxLeft+2,u=c.actualBoundingBoxAscent+2;l+=4,h+=4,(d=(n=new OffscreenCanvas(l,h)).getContext("2d")).font=a,d.fillStyle=r,d.fillText(t,p,u);var _=1/o;return{type:"bitmap",bitmap:n.transferToImageBitmap(),matrix:[_,0,0,_,-l*_/2,-h*_/2]}}}(function(){return"undefined"!=typeof window?window:"undefined"!=typeof self?self:this||{}}(),Pe,!1);var ze=Pe.exports;function Oe(e){const t=De(e);return[t.lighter,t.light,t.base,t.dark,t.darker]}function Ie(e,t){ze({particleCount:30,spread:70,startVelocity:25,origin:e,colors:t,disableForReducedMotion:!0})}function Fe(e,t=3e3){const o=Date.now()+t,r={startVelocity:30,spread:360,ticks:60,zIndex:0};function s(e,t){return Math.random()*(t-e)+e}const i=setInterval(function(){const a=o-Date.now();if(a<=0)return clearInterval(i);const n=a/t*50;ze({...r,particleCount:n,origin:{x:s(.1,.3),y:Math.random()-.2},colors:e,disableForReducedMotion:!0}),ze({...r,particleCount:n,origin:{x:s(.7,.9),y:Math.random()-.2},colors:e,disableForReducedMotion:!0})},250)}function Be(e,t=5e3){const o=Date.now()+t;function r(e,t){return Math.random()*(t-e)+e}!function s(){const i=o-Date.now(),a=Math.max(200,i/t*500);ze({particleCount:1,startVelocity:0,ticks:a,origin:{x:Math.random(),y:.3*Math.random()-.1},colors:e,shapes:["star"],gravity:r(1.2,1.5),scalar:r(1.2,2),drift:r(-.4,.4),disableForReducedMotion:!0}),i>0&&requestAnimationFrame(s)}()}function Ue(e,t,o,r,s,i){if(!s||!e.points_value)return L``;const a=Te(r);if(e.parent_uid){const o=t.find(t=>t.uid===e.parent_uid);if(o&&o.streak_bonus_points&&o.streak_bonus_interval){if((o.streak_current+1)%o.streak_bonus_interval===0)return L`<span
          class="points-badge bonus-pending"
          style="color: ${i};"
        >
          +${e.points_value} + ${o.streak_bonus_points}
          ${a.icon?L`<ha-icon icon="${a.icon}"></ha-icon>`:""}
          ${a.text?a.text:""}
        </span>`}}return L`<span
    class="points-badge"
    style="background: #${o.lighter}; color: ${i}; border: 1px solid ${i};"
  >
    +${e.points_value}
    ${a.icon?L`<ha-icon icon="${a.icon}"></ha-icon>`:""}
    ${a.text?a.text:""}
  </span>`}Pe.exports.create;let He=class extends ne{constructor(){super(...arguments),this._editDialogOpen=!1,this._editingTask=null,this._saving=!1,this._groups=[],this._addTaskDialogOpen=!1,this._newTask=null,this._savingNewTask=!1,this._autoCollapseTimeouts=new Map,this._previousGroupProgress=new Map,this.shades={lighter:"",light:"",base:"",dark:"",darker:""},this.shadesArray=[]}setConfig(e){if(!e.entity)throw new Error("You need to define an entity");this._config={entity:e.entity,title:e.title||"Tasks",show_title:!1!==e.show_title,show_dateless_tasks:!1!==e.show_dateless_tasks,hide_card_background:!0===e.hide_card_background,accent_color:e.accent_color||"",task_text_color:e.task_text_color||"",show_points:!1!==e.show_points,untagged_header:e.untagged_header||"Untagged",tag_group_order:e.tag_group_order||[],show_future_tasks:!0===e.show_future_tasks,filter_section_id:e.filter_section_id,person_entity:e.person_entity,show_add_task_button:!1!==e.show_add_task_button}}getCardSize(){return 3}willUpdate(e){if((e.has("_config")||e.has("hass"))&&this._config&&this.hass){const e=Ee(this.hass,this._config.accent_color,this._config.person_entity);this.shades=De(e),this.shadesArray=Object.values(this.shades)}(e.has("hass")||e.has("_config"))&&this._updateGroups()}_updateGroups(){if(!this.hass||!this._config)return;const e=this.hass.states[this._config.entity];if(!e)return;let t=ke(e,!1!==this._config.show_dateless_tasks,!0===this._config.show_future_tasks,this._config.untagged_header||"Untagged","Upcoming",this._config.filter_section_id,this._config.person_entity);t=ye(t,this._config.tag_group_order,this._config.untagged_header,"Upcoming"),this._groups=t.map(e=>({...e,isCollapsed:this._findExistingCollapseState(e.name)}))}_findExistingCollapseState(e){const t=this._groups.find(t=>t.name===e);return void 0!==t?t.isCollapsed:"Upcoming"===e}render(){if(!this.hass||!this._config)return L`<ha-card>Loading...</ha-card>`;return this.hass.states[this._config.entity]?L`
      <ha-card
        class="${this._config.hide_card_background?"no-background":""}"
      >
        ${this._config.show_title?L`<div class="card-header">${this._config.title}</div>`:""}
        ${0===this._groups.length?L`<div class="empty-state">No tasks</div>`:L`<div class="tag-groups">
              ${this._renderAllGroups(this._groups)}
            </div>`}
        ${this._renderAddTaskButton()}
      </ha-card>

      ${this._renderEditDialog()} ${this._renderAddTaskDialog()}
    `:L`<ha-card>
        <div class="empty-state">Entity not found: ${this._config.entity}</div>
      </ha-card>`}_renderAllGroups(e){return e.map(e=>{const t=be(e.tasks),o=this._config.task_text_color||"white",r=e.isCollapsed,s=t.completed===t.total,i=r&&s,a=t.total>0?t.completed/t.total*100:0;return this._checkAutoCollapse(e.name,t,s,r),L`
        <div class="tag-group-container ${r?"collapsed":""}">
          <div
            class="tag-group-header ${r?"collapsed":""}"
            style="background: #${this.shades.light}; color: ${o}; --progress-width: ${a}%; --darker-color: #${this.shades.dark};"
            @click=${()=>this._toggleGroup(e.name)}
          >
            <div class="tag-group-header-title">${e.name}</div>
            <div class="tag-group-header-progress">
              ${i?L`<ha-icon
                    icon="mdi:check"
                    style="color: ${o}; --mdi-icon-size: 20px;"
                  ></ha-icon>`:L`${t.completed}/${t.total}`}
            </div>
          </div>
          <div class="tag-group-tasks ${r?"collapsed":""}">
            <div class="tag-group-tasks-inner">
              ${this._renderTasks(e.tasks,o)}
            </div>
          </div>
        </div>
      `})}_renderTasks(e,t){return e.map(e=>{const o="completed"===e.status,r=o?`#${this.shades.base}`:this._config?.hide_card_background?"transparent":"var(--card-background-color)",s=o?t:"var(--primary-text-color)",i=o?`#${this.shades.dark}`:"transparent",a=o?"white":"var(--divider-color)",n=o?"none":"2px solid var(--divider-color)";return L`
        <div
          class="todo-item"
          style="background: ${r}; color: ${s};"
          @click=${()=>this._openEditDialog(e)}
        >
          <div class="todo-content">
            <div class="todo-summary">${e.summary}</div>
            ${e.due||e.points_value||e.parent_uid?L`<div
                  class="todo-due-date"
                  style="color: ${fe(e)?"var(--error-color)":"inherit"}"
                >
                  ${e.due?ge(new Date(e.due),e):""}
                  ${e.parent_uid?L`<ha-icon
                        icon="mdi:sync"
                        class="recurring-icon"
                      ></ha-icon>`:""}
                  ${this._renderPointsBadge(e)}
                </div>`:""}
          </div>
          <div
            class="completion-circle"
            style="background: ${i}; border: ${n};"
            @click=${t=>this._handleCompletionClick(t,e)}
          >
            <ha-icon
              icon="mdi:check"
              style="color: ${a};"
            ></ha-icon>
          </div>
        </div>
      `})}_renderPointsBadge(e){const t=this.hass?.states[this._config.entity],o=t?.attributes.chorebot_templates||[],r=this._config.task_text_color||"white";return Ue(e,o,this.shades,this.hass,!1!==this._config?.show_points,r)}_getFilteredTasks(e){return we(e,!1!==this._config.show_dateless_tasks,this._config?.filter_section_id)}_toggleGroup(e){this._autoCollapseTimeouts.has(e)&&(clearTimeout(this._autoCollapseTimeouts.get(e)),this._autoCollapseTimeouts.delete(e));const t=this._groups.find(t=>t.name===e);t&&(t.isCollapsed=!t.isCollapsed,this.requestUpdate())}_checkAutoCollapse(e,t,o,r){const s=this._previousGroupProgress.get(e),i=s&&s.completed<s.total&&o&&!r;if(this._previousGroupProgress.set(e,{completed:t.completed,total:t.total}),i){this._autoCollapseTimeouts.has(e)&&clearTimeout(this._autoCollapseTimeouts.get(e));const t=window.setTimeout(()=>{const t=this._groups.find(t=>t.name===e);t&&(t.isCollapsed=!0,this.requestUpdate()),this._autoCollapseTimeouts.delete(e)},1500);this._autoCollapseTimeouts.set(e,t)}}async _toggleTask(e,t){const o="completed"===e.status?"needs_action":"completed";if(await this.hass.callService("todo","update_item",{entity_id:this._config.entity,item:e.uid,status:o}),"completed"===o&&t){this._playCompletionConfetti(t);const o=this._calculateTotalPointsAwarded(e);if(null!==o&&o>0){!function(e,t){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const o=document.createElement("div");if(o.textContent=`+${t}`,o.style.position="fixed",o.style.left=e.x-20+"px",o.style.top=e.y-30+"px",o.style.fontSize="28px",o.style.fontWeight="bold",o.style.color="white",o.style.textShadow="2px 2px 4px rgba(0, 0, 0, 0.8)",o.style.pointerEvents="none",o.style.zIndex="9999",o.style.animation="floatPoints 2s ease-out forwards",!document.getElementById("chorebot-points-animation-styles")){const e=document.createElement("style");e.id="chorebot-points-animation-styles",e.textContent="\n      @keyframes floatPoints {\n        0% {\n          transform: scale(0.5) translateY(0);\n          opacity: 1;\n        }\n        50% {\n          transform: scale(1.5) translateY(-30px);\n          opacity: 1;\n        }\n        100% {\n          transform: scale(1.5) translateY(-60px);\n          opacity: 0;\n        }\n      }\n    ",document.head.appendChild(e)}document.body.appendChild(o),setTimeout(()=>{o.remove()},2e3)}({x:t.x*window.innerWidth,y:t.y*window.innerHeight},o)}const r=this._areAllTasksComplete(),s=this._areAllDatedTasksComplete(),i=!!e.due;r?this._playAllCompleteStarShower():s&&i?this._playDatedTasksFireworks():this._isGroupComplete(e)&&this._playGroupFireworks()}}_handleCompletionClick(e,t){e.stopPropagation();const o=e.currentTarget.getBoundingClientRect(),r={x:(o.left+o.width/2)/window.innerWidth,y:(o.top+o.height/2)/window.innerHeight};this._toggleTask(t,r)}_playCompletionConfetti(e){Ie(e,this.shadesArray)}_isGroupComplete(e){const t=this.hass?.states[this._config.entity];if(!t)return!1;const o=this._getFilteredTasks(t),r=this._config.untagged_header||"Untagged",s=function(e,t="Untagged"){const o=new Map;for(const r of e){const e=r.tags||[];if(0===e.length)o.has(t)||o.set(t,[]),o.get(t).push(r);else for(const t of e)o.has(t)||o.set(t,[]),o.get(t).push(r)}return o}(o,r),i=e.tags||[],a=i.length>0?i:[r];for(const e of a){const t=s.get(e);if(!t)continue;const o=be(t);if(o.total>0&&o.completed===o.total)return!0}return!1}_areAllTasksComplete(){const e=this.hass?.states[this._config.entity];if(!e)return!1;const t=be(this._getFilteredTasks(e));return t.total>0&&t.completed===t.total}_areAllDatedTasksComplete(){const e=this.hass?.states[this._config.entity];if(!e)return!1;const t=ve(this._getFilteredTasks(e));return t.total>0&&t.completed===t.total}_playGroupFireworks(){Fe(this.shadesArray)}_playDatedTasksFireworks(){Fe(this.shadesArray)}_playAllCompleteStarShower(){Be(this.shadesArray)}_calculateTotalPointsAwarded(e){if(!e.points_value)return null;let t=e.points_value;if(e.parent_uid){const o=this.hass?.states[this._config.entity],r=(o?.attributes.chorebot_templates||[]).find(t=>t.uid===e.parent_uid);if(r?.streak_bonus_points&&r?.streak_bonus_interval){(r.streak_current+1)%r.streak_bonus_interval===0&&(t+=r.streak_bonus_points)}}return t}_openEditDialog(e){if(!this.hass||!this._config?.entity)return;const t=this.hass.states[this._config.entity];if(!t)return;const o=t.attributes.chorebot_templates||[];this._editingTask=Ae(e,o),this._editDialogOpen=!0}_closeEditDialog(){this._editDialogOpen=!1,this._editingTask=null}_renderEditDialog(){const e=this.hass?.states[this._config.entity],t=e?.attributes.chorebot_sections||[],o=e?.attributes.chorebot_tags||[];return Re(this._editDialogOpen,this._editingTask,this.hass,t,o,this._saving,()=>this._closeEditDialog(),e=>this._formValueChanged(e),()=>this._saveTask(),()=>this._handleDeleteTask())}_formValueChanged(e){const t=e.detail.value;this._editingTask={...this._editingTask,...t},("has_due_date"in t||"is_all_day"in t||"has_recurrence"in t||"recurrence_frequency"in t)&&this.requestUpdate()}async _saveTask(){if(!this._editingTask||!this._editingTask.summary?.trim()||this._saving)return;this._saving=!0;const e={list_id:this._config.entity,uid:this._editingTask.uid,summary:this._editingTask.summary.trim()};if(this._editingTask.has_due_date&&this._editingTask.due_date){const t=!!this._editingTask.is_all_day;let o;if(t||!this._editingTask.due_time)o=`${this._editingTask.due_date}T00:00:00`;else{const e=3===this._editingTask.due_time.split(":").length?this._editingTask.due_time:`${this._editingTask.due_time}:00`;o=`${this._editingTask.due_date}T${e}`}const r=new Date(o);if(isNaN(r.getTime()))return console.error("Invalid date/time combination:",o),void(this._saving=!1);e.due=r.toISOString(),e.is_all_day=t}else!1===this._editingTask.has_due_date&&(e.due="",e.is_all_day=!1);this._editingTask.description&&(e.description=this._editingTask.description),this._editingTask.section_id&&(e.section_id=this._editingTask.section_id),void 0!==this._editingTask.tags&&(e.tags=this._editingTask.tags);const t=$e(this._editingTask);null!==t?e.rrule=t:!1===this._editingTask.has_recurrence&&(e.rrule=""),void 0!==this._editingTask.points_value&&(e.points_value=this._editingTask.points_value),void 0!==this._editingTask.streak_bonus_points&&(e.streak_bonus_points=this._editingTask.streak_bonus_points),void 0!==this._editingTask.streak_bonus_interval&&(e.streak_bonus_interval=this._editingTask.streak_bonus_interval);!!this._editingTask.parent_uid&&(e.include_future_occurrences=!0),console.log("Calling chorebot.update_task with payload:",e);try{await this.hass.callService("chorebot","update_task",e),this._closeEditDialog()}catch(e){console.error("Error saving task:",e),alert("Failed to save task. Please try again.")}finally{this._saving=!1}}async _handleDeleteTask(){if(!this._editingTask||this._saving)return;const e=this._editingTask,t=e.has_recurrence||e.parent_uid;if(confirm(t?"Delete this recurring task? This will remove all future occurrences, but keep completed instances.":"Delete this task? This action cannot be undone.")){this._saving=!0;try{await this.hass.callService("todo","remove_item",{entity_id:this._config.entity,item:e.uid}),this._closeEditDialog(),this.dispatchEvent(new CustomEvent("hass-notification",{detail:{message:"Task deleted successfully"},bubbles:!0,composed:!0}))}catch(e){console.error("Error deleting task:",e),alert(`Failed to delete task: ${e}`)}finally{this._saving=!1}}}_renderAddTaskButton(){if(!this._config?.show_add_task_button)return L``;const e=`#${this.shades.light}`,t=`color-mix(in srgb, #${this.shades.light} 20%, var(--card-background-color))`,o=`#${this.shades.light}`;return L`
      <div
        class="add-task-button-container"
        style="--button-border-color: ${e}; --button-hover-bg: ${t}; --button-hover-color: ${o};"
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
    `}_openAddTaskDialog(){const e=this.hass?.states[this._config.entity],t=e?.attributes.chorebot_sections||[];this._newTask=this._createBlankTask(t),this._addTaskDialogOpen=!0}_closeAddTaskDialog(){this._addTaskDialogOpen=!1,this._newTask=null}_createBlankTask(e){let t;if(this._config.filter_section_id){let o=e.find(e=>e.id===this._config.filter_section_id);o||(o=e.find(e=>e.name.toLowerCase()===this._config.filter_section_id.toLowerCase())),o&&(t=o.id)}if(!t&&this._config.person_entity){const o=e.find(e=>e.person_id===this._config.person_entity);o&&(t=o.id)}return!t&&e.length>0&&(t=e.sort((e,t)=>t.sort_order-e.sort_order)[0].id),{uid:"",summary:"",status:"needs_action",has_due_date:!1,is_all_day:!1,due_date:void 0,due_time:void 0,description:"",section_id:t,tags:[],has_recurrence:!1,recurrence_frequency:"DAILY",recurrence_interval:1,recurrence_byweekday:[],recurrence_bymonthday:1,points_value:0,streak_bonus_points:0,streak_bonus_interval:0}}_renderAddTaskDialog(){const e=this.hass?.states[this._config.entity],t=e?.attributes.chorebot_sections||[],o=e?.attributes.chorebot_tags||[];return Re(this._addTaskDialogOpen,this._newTask,this.hass,t,o,this._savingNewTask,()=>this._closeAddTaskDialog(),e=>this._formValueChangedForNewTask(e),()=>this._saveNewTask(),void 0,"Add Task",!1)}_formValueChangedForNewTask(e){const t=e.detail.value;this._newTask={...this._newTask,...t},("has_due_date"in t||"is_all_day"in t||"has_recurrence"in t||"recurrence_frequency"in t)&&this.requestUpdate()}async _saveNewTask(){if(!this._newTask||!this._newTask.summary?.trim()||this._savingNewTask)return;this._savingNewTask=!0;const e={list_id:this._config.entity,summary:this._newTask.summary.trim()};if(this._newTask.has_due_date&&this._newTask.due_date){const t=!!this._newTask.is_all_day;let o;if(t||!this._newTask.due_time)o=`${this._newTask.due_date}T00:00:00`;else{const e=3===this._newTask.due_time.split(":").length?this._newTask.due_time:`${this._newTask.due_time}:00`;o=`${this._newTask.due_date}T${e}`}const r=new Date(o);if(isNaN(r.getTime()))return console.error("Invalid date/time combination:",o),void(this._savingNewTask=!1);e.due=r.toISOString(),e.is_all_day=t}this._newTask.description&&(e.description=this._newTask.description),this._newTask.section_id&&(e.section_id=this._newTask.section_id),void 0!==this._newTask.tags&&this._newTask.tags.length>0&&(e.tags=this._newTask.tags);const t=$e(this._newTask);null!==t&&(e.rrule=t),void 0!==this._newTask.points_value&&this._newTask.points_value>0&&(e.points_value=this._newTask.points_value),null!==t&&(void 0!==this._newTask.streak_bonus_points&&this._newTask.streak_bonus_points>0&&(e.streak_bonus_points=this._newTask.streak_bonus_points),void 0!==this._newTask.streak_bonus_interval&&this._newTask.streak_bonus_interval>0&&(e.streak_bonus_interval=this._newTask.streak_bonus_interval));try{await this.hass.callService("chorebot","add_task",e),this._closeAddTaskDialog();const t=this.hass?.states[this._config.entity],o=t?.attributes.chorebot_sections||[];this._newTask=this._createBlankTask(o)}catch(e){console.error("Error adding task:",e),alert("Failed to add task. Please try again.")}finally{this._savingNewTask=!1}}static getStubConfig(){return{entity:"",title:"Tasks",show_title:!0,show_dateless_tasks:!0,show_future_tasks:!1,filter_section_id:"",person_entity:"",hide_card_background:!1,accent_color:"",task_text_color:"",untagged_header:"Untagged",tag_group_order:[],show_add_task_button:!0}}static getConfigForm(){return{schema:[{name:"entity",required:!0,selector:{entity:{filter:{domain:"todo"}}}},{name:"title",default:"Tasks",selector:{text:{}}},{name:"show_title",default:!0,selector:{boolean:{}}},{name:"show_dateless_tasks",default:!0,selector:{boolean:{}}},{name:"show_future_tasks",default:!1,selector:{boolean:{}}},{name:"filter_section_id",selector:{text:{}}},{name:"person_entity",selector:{entity:{filter:{domain:"person"}}}},{name:"hide_card_background",default:!1,selector:{boolean:{}}},{name:"accent_color",selector:{text:{}}},{name:"task_text_color",selector:{text:{}}},{name:"untagged_header",default:"Untagged",selector:{text:{}}},{name:"tag_group_order",selector:{select:{multiple:!0,custom_value:!0,options:[]}}},{name:"show_add_task_button",default:!0,selector:{boolean:{}}}],computeLabel:e=>({entity:"Todo Entity",title:"Card Title",show_title:"Show Title",show_dateless_tasks:"Show Tasks Without Due Date",show_future_tasks:"Show Future Tasks",filter_section_id:"Filter by Section",person_entity:"Filter by Person",hide_card_background:"Hide Card Background",accent_color:"Accent Color",task_text_color:"Task Text Color",untagged_header:"Untagged Tasks Header",tag_group_order:"Tag Display Order",show_add_task_button:"Show Add Task Button"}[e.name]||void 0),computeHelper:e=>({entity:"Select the ChoreBot todo entity to display",title:"Custom title for the card",show_title:"Show the card title",show_dateless_tasks:"Show tasks that do not have a due date",show_future_tasks:"Show tasks with future due dates in a collapsible 'Upcoming' section (collapsed by default)",filter_section_id:'Enter section name (e.g., "SECOND SECTION"). Leave empty to show all sections.',person_entity:"Optional: Filter to show only tasks assigned to this person. Also inherits their accent color if set.",hide_card_background:"Hide the card background and padding for a seamless look",accent_color:"Accent color for task items and headers (hex code or CSS variable like var(--primary-color))",task_text_color:"Text color for task items (hex code or CSS variable)",untagged_header:'Header text for tasks without tags (default: "Untagged")',tag_group_order:"Order to display tag groups. Tags not listed will appear alphabetically after these.",show_add_task_button:"Show the 'Add Task' button below tag groups for creating new tasks"}[e.name]||void 0)}}};He.styles=a`
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
      border-bottom: 1px solid var(--divider-color);
    }

    .todo-item:last-child {
      border-bottom: none;
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
  `,e([pe({attribute:!1})],He.prototype,"hass",void 0),e([ue()],He.prototype,"_config",void 0),e([ue()],He.prototype,"_editDialogOpen",void 0),e([ue()],He.prototype,"_editingTask",void 0),e([ue()],He.prototype,"_saving",void 0),e([ue()],He.prototype,"_groups",void 0),e([ue()],He.prototype,"_addTaskDialogOpen",void 0),e([ue()],He.prototype,"_newTask",void 0),e([ue()],He.prototype,"_savingNewTask",void 0),He=e([ce("chorebot-grouped-card")],He),window.customCards=window.customCards||[],window.customCards.push({type:"chorebot-grouped-card",name:"ChoreBot Grouped Card",description:"Display and manage ChoreBot tasks grouped by tags",preview:!0}),console.info("%c CHOREBOT-GROUPED-CARD %c v0.1.0 ","color: white; background: #2196F3; font-weight: bold;","color: #2196F3; background: white; font-weight: bold;");let Ne=class extends ne{constructor(){super(...arguments),this._dialogOpen=!1,this._newTask=null,this._saving=!1}setConfig(e){if(!e.entity)throw new Error("You need to define an entity");this._config={entity:e.entity,button_text:e.button_text||"Add Task",button_icon:e.button_icon||"mdi:plus",button_color:e.button_color||"var(--primary-color)",button_text_color:e.button_text_color||"white",button_size:e.button_size||"medium",hide_card_background:!0===e.hide_card_background,default_section_id:e.default_section_id,default_tags:e.default_tags||[]}}getCardSize(){return 1}render(){if(!this.hass||!this._config)return L`<ha-card>Loading...</ha-card>`;return this.hass.states[this._config.entity]?L`
      <ha-card
        class="${this._config.hide_card_background?"no-background":""}"
      >
        <div class="button-container">
          <button
            class="add-button ${this._config.button_size} ${this._config.button_text?"":"icon-only"}"
            style="background: ${this._config.button_color}; color: ${this._config.button_text_color};"
            @click=${this._openDialog}
          >
            <ha-icon icon="${this._config.button_icon}"></ha-icon>
            ${this._config.button_text?L`<span>${this._config.button_text}</span>`:""}
          </button>
        </div>
      </ha-card>

      ${this._renderDialog()}
    `:L`<ha-card>
        <div
          style="text-align: center; padding: 16px; color: var(--error-color);"
        >
          Entity not found: ${this._config.entity}
        </div>
      </ha-card>`}_openDialog(){const e=this.hass?.states[this._config.entity],t=e?.attributes.chorebot_sections||[];this._newTask=this._createBlankTask(t),this._dialogOpen=!0}_closeDialog(){this._dialogOpen=!1,this._newTask=null}_createBlankTask(e){let t;if(this._config.default_section_id){const o=e.find(e=>e.id===this._config.default_section_id);if(o)t=o.id;else{const o=e.find(e=>e.name.toLowerCase()===this._config.default_section_id.toLowerCase());o&&(t=o.id)}}else e.length>0&&(t=e.sort((e,t)=>t.sort_order-e.sort_order)[0].id);return{uid:"",summary:"",status:"needs_action",has_due_date:!1,is_all_day:!1,due_date:void 0,due_time:void 0,description:"",section_id:t,tags:this._config.default_tags||[],has_recurrence:!1,recurrence_frequency:"DAILY",recurrence_interval:1,recurrence_byweekday:[],recurrence_bymonthday:1}}_renderDialog(){const e=this.hass?.states[this._config.entity],t=e?.attributes.chorebot_sections||[],o=e?.attributes.chorebot_tags||[];return Re(this._dialogOpen,this._newTask,this.hass,t,o,this._saving,()=>this._closeDialog(),e=>this._formValueChanged(e),()=>this._saveTask(),void 0,"Add Task",!1)}_formValueChanged(e){const t=e.detail.value;this._newTask={...this._newTask,...t},("has_due_date"in t||"is_all_day"in t||"has_recurrence"in t||"recurrence_frequency"in t)&&this.requestUpdate()}async _saveTask(){if(!this._newTask||!this._newTask.summary?.trim()||this._saving)return;this._saving=!0;const e={list_id:this._config.entity,summary:this._newTask.summary.trim()};if(this._newTask.has_due_date&&this._newTask.due_date){const t=!!this._newTask.is_all_day;let o;if(t||!this._newTask.due_time)o=`${this._newTask.due_date}T00:00:00`;else{const e=3===this._newTask.due_time.split(":").length?this._newTask.due_time:`${this._newTask.due_time}:00`;o=`${this._newTask.due_date}T${e}`}const r=new Date(o);if(isNaN(r.getTime()))return console.error("Invalid date/time combination:",o),void(this._saving=!1);e.due=r.toISOString(),e.is_all_day=t}this._newTask.description&&(e.description=this._newTask.description),this._newTask.section_id&&(e.section_id=this._newTask.section_id),void 0!==this._newTask.tags&&this._newTask.tags.length>0&&(e.tags=this._newTask.tags);const t=$e(this._newTask);null!==t&&(e.rrule=t),void 0!==this._newTask.points_value&&this._newTask.points_value>0&&(e.points_value=this._newTask.points_value),null!==t&&(void 0!==this._newTask.streak_bonus_points&&this._newTask.streak_bonus_points>0&&(e.streak_bonus_points=this._newTask.streak_bonus_points),void 0!==this._newTask.streak_bonus_interval&&this._newTask.streak_bonus_interval>0&&(e.streak_bonus_interval=this._newTask.streak_bonus_interval));try{await this.hass.callService("chorebot","add_task",e),this._closeDialog();const t=this.hass?.states[this._config.entity],o=t?.attributes.chorebot_sections||[];this._newTask=this._createBlankTask(o)}catch(e){console.error("Error adding task:",e),alert("Failed to add task. Please try again.")}finally{this._saving=!1}}static getStubConfig(){return{entity:"",button_text:"Add Task",button_icon:"mdi:plus",button_color:"var(--primary-color)",button_text_color:"white",button_size:"medium",hide_card_background:!1,default_section_id:"",default_tags:[]}}static getConfigForm(){return{schema:[{name:"entity",required:!0,selector:{entity:{filter:{domain:"todo"}}}},{name:"button_text",default:"Add Task",selector:{text:{}}},{name:"button_icon",default:"mdi:plus",selector:{icon:{}}},{name:"button_color",default:"var(--primary-color)",selector:{text:{}}},{name:"button_text_color",default:"white",selector:{text:{}}},{name:"button_size",default:"medium",selector:{select:{options:[{label:"Small",value:"small"},{label:"Medium",value:"medium"},{label:"Large",value:"large"}]}}},{name:"hide_card_background",default:!1,selector:{boolean:{}}},{name:"default_section_id",selector:{text:{}}},{name:"default_tags",selector:{select:{multiple:!0,custom_value:!0,options:[]}}}],computeLabel:e=>({entity:"Todo Entity",button_text:"Button Text",button_icon:"Button Icon",button_color:"Button Color",button_text_color:"Button Text Color",button_size:"Button Size",hide_card_background:"Hide Card Background",default_section_id:"Default Section",default_tags:"Default Tags"}[e.name]||void 0),computeHelper:e=>({entity:"Select the ChoreBot todo entity for new tasks",button_text:"Text displayed on the button",button_icon:"Icon displayed on the button",button_color:"Button background color (hex code or CSS variable like var(--primary-color))",button_text_color:"Button text color (hex code or CSS variable)",button_size:"Size of the button",hide_card_background:"Hide the card background and padding for a seamless look",default_section_id:'Default section for new tasks (enter section name like "Kyle" or leave empty for automatic)',default_tags:"Tags to pre-fill when creating new tasks"}[e.name]||void 0)}}};function je(e,t,o,r=64){const s=e.states[t],i=s?.attributes.entity_picture,a=qe(e,t),n=a.split(" ").map(e=>e[0]).join("").toUpperCase().slice(0,2);const d=`width: ${r}px; height: ${r}px;`,c=Math.floor(.375*r);return i?L`
      <div class="person-avatar" style="${d}">
        <img src="${i}" alt="${a}" />
      </div>
    `:L`
    <div
      class="person-avatar initials"
      style="${d} font-size: ${c}px;"
    >
      ${n}
    </div>
  `}function Le(e,t,o){const r=Te(t);return L`
    <div class="person-points" style="color: ${o}">
      ${e.points_balance}
      ${r.icon?L`<ha-icon icon="${r.icon}"></ha-icon>`:""}
      ${r.text?r.text:""}
    </div>
  `}function qe(e,t){const o=e.states[t];return o?.attributes.friendly_name||t.replace("person.","")}function Ye(e){const t=e.states["sensor.chorebot_points"];if(!t)return[];const o=t.attributes.people||{};return Object.values(o)}function We(e,t,o,r){const s=e.total>0?e.completed/e.total*100:0,i=o||"var(--text-primary-color)",a=`${e.completed} of ${e.total} tasks completed`;return L`
    <div
      class="progress-bar"
      style="background: #${t.lighter}"
      aria-label="${a}"
    >
      <div
        class="progress-bar-fill"
        style="width: ${s}%; background: #${t.darker}"
      ></div>
      <div class="progress-text" style="color: ${i}">
        ${e.completed}/${e.total}
      </div>
    </div>
  `}Ne.styles=a`
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
  `,e([pe({attribute:!1})],Ne.prototype,"hass",void 0),e([ue()],Ne.prototype,"_config",void 0),e([ue()],Ne.prototype,"_dialogOpen",void 0),e([ue()],Ne.prototype,"_newTask",void 0),e([ue()],Ne.prototype,"_saving",void 0),Ne=e([ce("chorebot-add-task-card")],Ne),window.customCards=window.customCards||[],window.customCards.push({type:"chorebot-add-task-card",name:"ChoreBot Add Task Card",description:"A button card for quickly adding new ChoreBot tasks",preview:!0}),console.info("%c CHOREBOT-ADD-TASK-CARD %c v0.1.0 ","color: white; background: #4CAF50; font-weight: bold;","color: #4CAF50; background: white; font-weight: bold;");let Ge=class extends ne{constructor(){super(...arguments),this.shades={lighter:"",light:"",base:"",dark:"",darker:""}}setConfig(e){if(!e.person_entity)throw new Error("person_entity is required");this._config={type:"custom:chorebot-person-points-card",person_entity:e.person_entity,title:e.title||"Points",show_title:!1!==e.show_title,hide_card_background:!0===e.hide_card_background,show_progress:!1!==e.show_progress,accent_color:e.accent_color||"",progress_text_color:e.progress_text_color||""}}willUpdate(e){if(super.willUpdate(e),(e.has("_config")||e.has("hass"))&&this._config&&this.hass){const e=Ee(this.hass,this._config.accent_color,this._config.person_entity);this.shades=De(e)}(e.has("hass")||e.has("_config"))&&this.hass&&this._config&&(this._progress=this._calculatePersonProgress())}_calculatePersonProgress(){if(!this.hass||!this._config)return{completed:0,total:0};const e=Object.values(this.hass.states).filter(e=>e.entity_id.startsWith("todo.")),t=e.filter(e=>e.entity_id.startsWith("todo.chorebot_"));return ve(xe(t,this._config.person_entity,!1))}static getStubConfig(){return{type:"custom:chorebot-person-points-card",person_entity:"",title:"Points",show_title:!0,hide_card_background:!1,show_progress:!0,accent_color:"",progress_text_color:""}}static getConfigForm(){return{schema:[{name:"person_entity",required:!0,selector:{entity:{filter:{domain:"person"}}}},{name:"title",default:"Points",selector:{text:{}}},{name:"show_title",default:!0,selector:{boolean:{}}},{name:"hide_card_background",default:!1,selector:{boolean:{}}},{name:"show_progress",default:!0,selector:{boolean:{}}},{name:"accent_color",selector:{text:{}}},{name:"progress_text_color",selector:{text:{}}}],computeLabel:e=>({person_entity:"Person Entity",title:"Card Title",show_title:"Show Title",hide_card_background:"Hide Card Background",show_progress:"Show Progress Bar",accent_color:"Accent Color",progress_text_color:"Progress Text Color"}[e.name]||void 0),computeHelper:e=>({person_entity:"Select the person entity to display points for",title:"Custom title for the card",show_title:"Show the card title",hide_card_background:"Hide the card background and padding for a seamless look",show_progress:"Display task completion progress below the person's name",accent_color:"Accent color for progress bar and points text (hex code or CSS variable like var(--primary-color))",progress_text_color:"Text color for progress label (hex code or CSS variable)"}[e.name]||void 0)}}getCardSize(){return 1}render(){if(!this.hass||!this._config)return L``;const e=this.hass.states["sensor.chorebot_points"];if(!e)return L`<ha-card>
        <div class="error-message">
          ChoreBot Points sensor not found. Make sure the integration is set up.
        </div>
      </ha-card>`;const t=this.hass.states[this._config.person_entity];if(!t)return L`<ha-card>
        <div class="error-message">
          Person entity not found. Please check your configuration.
        </div>
      </ha-card>`;const o=(e.attributes.people||{})[this._config.person_entity];return o?L`
      <ha-card
        class="${this._config.hide_card_background?"no-background":""}"
      >
        ${this._config.show_title?L`<div class="card-header">${this._config.title}</div>`:""}
        ${this._renderPersonDisplay(t,o)}
      </ha-card>
    `:L`<ha-card>
        <div class="error-message">
          Person not found in points system. Complete tasks to earn points.
        </div>
      </ha-card>`}_renderPersonDisplay(e,t){const o=qe(this.hass,this._config.person_entity);return L`
      <div class="person-container">
        <div class="person-left">
          ${je(this.hass,this._config.person_entity,0,64)}
        </div>
        <div class="person-info">
          <div class="person-header">
            <div class="person-name">${o}</div>
            ${Le(t,this.hass,`#${this.shades.base}`)}
          </div>
          ${this._config.show_progress&&this._progress?this._renderProgressBar(this._progress):""}
        </div>
      </div>
    `}_renderProgressBar(e){return We(e,this.shades,this._config.progress_text_color)}};Ge.styles=a`
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
  `,e([pe({attribute:!1})],Ge.prototype,"hass",void 0),e([ue()],Ge.prototype,"_config",void 0),e([ue()],Ge.prototype,"_progress",void 0),Ge=e([ce("chorebot-person-points-card")],Ge),window.customCards=window.customCards||[],window.customCards.push({type:"chorebot-person-points-card",name:"ChoreBot Person Points Card",description:"Display a person's avatar and points balance",preview:!0}),console.info("%c CHOREBOT-PERSON-POINTS-CARD %c v0.1.0 ","color: white; background: #FF9800; font-weight: bold;","color: #FF9800; background: white; font-weight: bold;");let Ve=class extends ne{constructor(){super(...arguments),this._redeeming=null,this._showConfirmModal=!1,this._showAddRewardModal=!1,this._pendingRedemption=null,this._rewardFormData={name:"",cost:50,icon:"mdi:gift",description:""},this._showEditRewardModal=!1,this._editingRewardId=null,this._rewardFormSchema=[{name:"name",required:!0,selector:{text:{}}},{name:"cost",selector:{number:{min:1,max:1e4,mode:"box"}}},{name:"icon",selector:{icon:{}}},{name:"description",selector:{text:{multiline:!0}}}],this._computeRewardFieldLabel=e=>{const t=Ce(this.hass);return{name:"Name",cost:`Cost (${t.charAt(0).toUpperCase()+t.slice(1)})`,icon:"Icon",description:"Description (Optional)"}[e.name]||e.name},this._computeRewardFieldHelper=e=>({cost:`Cost between 1 and 10,000 ${Ce(this.hass)}`,icon:"Use Material Design Icons (e.g., mdi:gift, mdi:ice-cream)"}[e.name]||""),this._handleRewardFormChange=e=>{this._rewardFormData=e.detail.value}}setConfig(e){if(!e.person_entity)throw new Error("person_entity is required");this._config={type:"custom:chorebot-rewards-card",person_entity:e.person_entity,title:e.title||void 0,show_title:!1!==e.show_title,hide_card_background:!0===e.hide_card_background,show_disabled_rewards:!0===e.show_disabled_rewards,sort_by:e.sort_by||"cost",show_add_reward_button:!1!==e.show_add_reward_button,accent_color:e.accent_color||""}}static getStubConfig(){return{type:"custom:chorebot-rewards-card",person_entity:"person.example",title:"My Rewards",show_title:!0,hide_card_background:!1,show_disabled_rewards:!1,sort_by:"cost",show_add_reward_button:!0,accent_color:""}}getCardSize(){return 3}static getConfigForm(){return{schema:[{name:"person_entity",required:!0,selector:{entity:{domain:"person"}}},{name:"title",selector:{text:{}}},{name:"show_title",default:!0,selector:{boolean:{}}},{name:"hide_card_background",default:!1,selector:{boolean:{}}},{name:"show_disabled_rewards",default:!1,selector:{boolean:{}}},{name:"sort_by",default:"cost",selector:{select:{options:[{label:"Cost (Low to High)",value:"cost"},{label:"Name (A-Z)",value:"name"},{label:"Date Created (Oldest First)",value:"created"}]}}},{name:"show_add_reward_button",default:!0,selector:{boolean:{}}},{name:"accent_color",selector:{text:{}}}],computeLabel:e=>({person_entity:"Person Entity",title:"Card Title",show_title:"Show Title",hide_card_background:"Hide Card Background",show_disabled_rewards:"Show Disabled Rewards",sort_by:"Sort Rewards By",show_add_reward_button:"Show Add Reward Button",accent_color:"Accent Color"}[e.name]||void 0),computeHelper:e=>({person_entity:"Select the person whose rewards to display",title:'Custom title for the card (defaults to "{Person Name}\'s Rewards")',show_title:"Show the card title",hide_card_background:"Hide the card background and padding for a seamless look",show_disabled_rewards:"Include rewards that have been disabled in the grid",sort_by:"Choose how to sort the rewards in the grid",show_add_reward_button:"Show the 'Add Reward' card for creating new rewards",accent_color:"Accent color for reward icons and buttons (hex code or CSS variable like var(--primary-color))"}[e.name]||void 0)}}render(){if(!this.hass||!this._config)return L`<ha-card>Loading...</ha-card>`;if(!this.hass.states[this._config.person_entity])return L`<ha-card>
        <div class="error-state">
          Person entity "${this._config.person_entity}" not found. Please check
          your configuration.
        </div>
      </ha-card>`;const e=this.hass.states["sensor.chorebot_points"];if(!e)return L`<ha-card>
        <div class="empty-state">
          ChoreBot Points sensor not found. Make sure the integration is set up.
        </div>
      </ha-card>`;const t=e.attributes.people||{},o=e.attributes.rewards||[];let r="var(--primary-color)";if(this._config.person_entity){const e=t[this._config.person_entity];e?.accent_color&&(r=e.accent_color)}this._config.accent_color&&(r=this._config.accent_color),this.style.setProperty("--accent-color",r);const s=qe(this.hass,this._config.person_entity),i=this._config.title||`${s}'s Rewards`;return L`
      <ha-card
        class="${this._config.hide_card_background?"no-background":""}"
      >
        ${this._config.show_title?L`<div class="card-header">${i}</div>`:""}
        ${this._renderRewardsGrid(o,t)}
      </ha-card>
      ${this._showConfirmModal?this._renderConfirmModal(t,o):""}
      ${this._showAddRewardModal?this._renderAddRewardModal():""}
      ${this._showEditRewardModal?this._renderEditRewardModal():""}
    `}_renderConfirmModal(e,t){if(!this._pendingRedemption||!this._config)return"";const{personId:o,rewardId:r}=this._pendingRedemption,s=e[o],i=t.find(e=>e.id===r);if(!s||!i)return"";const a=qe(this.hass,o),n=s.points_balance-i.cost,d=s.points_balance>=i.cost,c=i.enabled&&d,l=Te(this.hass);return L`
      <div class="modal-overlay" @click="${this._cancelRedemption}">
        <div
          class="modal-content"
          @click="${e=>e.stopPropagation()}"
        >
          <div class="modal-header">
            ${c?"Are you sure?":"Reward Details"}
            <button
              class="edit-button"
              @click="${()=>this._handleEditButtonClick(i.id)}"
              title="Edit Reward"
            >
              <ha-icon icon="mdi:pencil"></ha-icon>
            </button>
          </div>
          <div class="modal-body">
            <div class="modal-info">
              <div class="modal-info-row">
                <span class="modal-info-label">Person:</span>
                <span class="modal-info-value">${a}</span>
              </div>
              <div class="modal-info-row">
                <span class="modal-info-label">Reward:</span>
                <span class="modal-info-value">${i.name}</span>
              </div>
              <div class="modal-info-row">
                <span class="modal-info-label">Cost:</span>
                <span class="modal-info-value"
                  >${i.cost}
                  ${l.icon?L`<ha-icon icon="${l.icon}"></ha-icon>`:""}
                  ${l.text?l.text:""}</span
                >
              </div>
              <div class="modal-info-row">
                <span class="modal-info-label">Current Balance:</span>
                <span class="modal-info-value"
                  >${s.points_balance}
                  ${l.icon?L`<ha-icon icon="${l.icon}"></ha-icon>`:""}
                  ${l.text?l.text:""}</span
                >
              </div>
              <div class="modal-info-row">
                <span class="modal-info-label">Remaining Balance:</span>
                <span
                  class="modal-info-value"
                  style="color: ${n<0?"var(--error-color)":"inherit"}"
                  >${n}
                  ${l.icon?L`<ha-icon icon="${l.icon}"></ha-icon>`:""}
                  ${l.text?l.text:""}</span
                >
              </div>
              ${i.enabled?"":L`<div
                    style="margin-top: 12px; color: var(--warning-color); font-size: 14px; text-align: center;"
                  >
                    This reward is currently disabled.
                  </div>`}
              ${d?"":L`<div
                    style="margin-top: 12px; color: var(--error-color); font-size: 14px; text-align: center;"
                  >
                    Not enough points to redeem this reward.
                  </div>`}
            </div>
          </div>
          <div class="modal-actions">
            <button
              class="modal-button cancel"
              @click="${this._cancelRedemption}"
            >
              ${c?"Cancel":"Close"}
            </button>
            <button
              class="modal-button confirm"
              ?disabled="${!c}"
              @click="${this._confirmRedemption}"
            >
              Redeem
            </button>
          </div>
        </div>
      </div>
    `}_renderAddRewardModal(){return this._config?L`
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
    `:""}_renderEditRewardModal(){return this._config?L`
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
          slot="primaryAction"
          @click=${this._updateReward}
          ?disabled=${!this._rewardFormData.name?.trim()}
        >
          Update
        </ha-button>
        <ha-button slot="secondaryAction" @click=${this._closeEditRewardModal}>
          Cancel
        </ha-button>
      </ha-dialog>
    `:""}_renderRewardsGrid(e,t){if(!this._config)return"";const o=e.filter(e=>e.person_id===this._config.person_entity),r=o.filter(e=>this._config.show_disabled_rewards||e.enabled),s=this._sortRewards(r),i=t[this._config.person_entity];return 0!==s.length||this._config.show_add_reward_button?L`
      <div class="rewards-grid">
        ${s.map(e=>this._renderRewardCard(e,i))}
        ${this._config.show_add_reward_button?this._renderAddRewardCard():""}
      </div>
    `:L`<div class="empty-state">
        No rewards configured yet. Use the "Add Reward" button or
        <code>chorebot.manage_reward</code> service to create rewards.
      </div>`}_renderRewardCard(e,t){const o=!!t&&t.points_balance>=e.cost,r=!e.enabled||!o,s=Te(this.hass);return L`
      <div
        class="reward-card ${r?"disabled":""}"
        @click="${()=>this._handleRewardClick(e,o)}"
      >
        <div class="reward-icon-section">
          <div class="reward-icon">
            <ha-icon icon="${e.icon}"></ha-icon>
          </div>
        </div>
        <div class="reward-info">
          <div class="reward-header">
            <div class="reward-name">${e.name}</div>
            <div class="reward-cost">
              ${e.cost}
              ${s.icon?L`<ha-icon icon="${s.icon}"></ha-icon>`:""}
              ${s.text?s.text:""}
            </div>
          </div>
          ${e.description?L`<div class="reward-description">${e.description}</div>`:""}
        </div>
      </div>
    `}_renderAddRewardCard(){return L`
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
    `}_sortRewards(e){const t=[...e];switch(this._config.sort_by){case"name":return t.sort((e,t)=>e.name.localeCompare(t.name));case"created":return t.sort((e,t)=>new Date(e.created||0).getTime()-new Date(t.created||0).getTime());default:return t.sort((e,t)=>e.cost-t.cost)}}_handleRewardClick(e,t){this._pendingRedemption={personId:this._config.person_entity,rewardId:e.id},this._showConfirmModal=!0}_cancelRedemption(){this._showConfirmModal=!1,this._pendingRedemption=null}async _confirmRedemption(){if(!this._pendingRedemption)return;const{personId:e,rewardId:t}=this._pendingRedemption;this._showConfirmModal=!1,this._pendingRedemption=null,this._redeeming=t;try{await this.hass.callService("chorebot","redeem_reward",{person_id:e,reward_id:t}),this._showRedemptionSuccess()}catch(e){const t=e.message||"Failed to redeem reward. Please try again.";alert(t)}finally{this._redeeming=null}}_showRedemptionSuccess(){Be(Oe(this._config.accent_color||getComputedStyle(this).getPropertyValue("--primary-color")||"#03a9f4"),3e3)}_openAddRewardModal(){this._rewardFormData={name:"",cost:50,icon:"mdi:gift",description:""},this._showAddRewardModal=!0}_closeAddRewardModal(){this._showAddRewardModal=!1}async _createReward(){if(!this._config)return;const{name:e,cost:t,icon:o,description:r}=this._rewardFormData;if(e.trim())try{await this.hass.callService("chorebot","manage_reward",{name:e.trim(),cost:Math.max(1,Math.min(1e4,t)),icon:o||"mdi:gift",description:r.trim(),person_id:this._config.person_entity}),this._closeAddRewardModal()}catch(e){const t=e.message||"Failed to create reward. Please try again.";alert(t)}else alert("Reward name is required")}_openEditRewardModal(e){if(!this.hass)return;const t=this.hass.states["sensor.chorebot_points"];if(!t)return;const o=(t.attributes.rewards||[]).find(t=>t.id===e);o?(this._rewardFormData={name:o.name,cost:o.cost,icon:o.icon,description:o.description||""},this._editingRewardId=e,this._showEditRewardModal=!0):alert("Reward not found")}_closeEditRewardModal(){this._showEditRewardModal=!1,this._editingRewardId=null,this._rewardFormData={name:"",cost:50,icon:"mdi:gift",description:""}}_handleEditButtonClick(e){this._showConfirmModal=!1,this._pendingRedemption=null,this._openEditRewardModal(e)}async _updateReward(){if(!this._config||!this._editingRewardId)return;const{name:e,cost:t,icon:o,description:r}=this._rewardFormData;if(e.trim())try{await this.hass.callService("chorebot","manage_reward",{reward_id:this._editingRewardId,name:e.trim(),cost:Math.max(1,Math.min(1e4,t)),icon:o||"mdi:gift",description:r.trim(),person_id:this._config.person_entity}),this._closeEditRewardModal()}catch(e){const t=e.message||"Failed to update reward. Please try again.";alert(t)}else alert("Reward name is required")}};function Ze(e,t,o,r,s,i,a,n,d,c,l=!1){const h=t?r.find(e=>e.entity_id===t):null;let p="var(--primary-color)";return h?.accent_color&&(p=h.accent_color),L`
    <div
      class="person-section ${l?"no-background":""} ${o?"dropdown-open":""}"
    >
      <!-- Person Header (Collapsed State) -->
      <div class="person-header" @click=${d}>
        <div class="person-container">
          <div class="person-left">
            ${je(e,t,0,64)}
          </div>
          <div class="person-info">
            <div class="person-header-row">
              <div class="person-name">
                ${qe(e,t)}
              </div>
              <div class="person-points-and-chevron">
                ${Le(h,e,p)}
                <ha-icon
                  icon="mdi:chevron-down"
                  class="dropdown-chevron ${o?"open":""}"
                ></ha-icon>
              </div>
            </div>
            ${s&&i?We(i,a,n):""}
          </div>
        </div>
      </div>

      <!-- Person Dropdown (Expanded State) -->
      <div class="person-dropdown ${o?"open":""}">
        <div class="person-dropdown-inner">
          ${r.map(o=>{const r=o.entity_id===t,s=Te(e);return L`
              <div
                class="person-dropdown-item ${r?"selected":""}"
                @click=${()=>c(o.entity_id)}
              >
                ${je(e,o.entity_id,0,40)}
                <div class="person-dropdown-info">
                  <div class="person-dropdown-name">
                    ${qe(e,o.entity_id)}
                  </div>
                  <div class="person-dropdown-points">
                    ${o.points_balance}
                    ${s.icon?L`<ha-icon icon="${s.icon}"></ha-icon>`:""}
                    ${s.text}
                  </div>
                </div>
                ${r?L`<ha-icon icon="mdi:check"></ha-icon>`:""}
              </div>
            `})}
        </div>
      </div>
    </div>
  `}function Ke(e,t){let o=function(e){const t=e.user?.name;if(!t)return null;const o=Object.values(e.states).filter(e=>e.entity_id.startsWith("person.")),r=o.find(e=>e.attributes.friendly_name?.toLowerCase()===t.toLowerCase());return r?.entity_id||null}(e);if(!o&&t&&(o=t),!o){const t=Ye(e);if(t.length>0){const e=t.sort((e,t)=>e.entity_id.localeCompare(t.entity_id));o=e[0].entity_id}}return o||""}Ve.styles=a`
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
      --mdc-dialog-min-width: 90%;
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
  `,e([pe({attribute:!1})],Ve.prototype,"hass",void 0),e([ue()],Ve.prototype,"_config",void 0),e([ue()],Ve.prototype,"_redeeming",void 0),e([ue()],Ve.prototype,"_showConfirmModal",void 0),e([ue()],Ve.prototype,"_showAddRewardModal",void 0),e([ue()],Ve.prototype,"_pendingRedemption",void 0),e([ue()],Ve.prototype,"_rewardFormData",void 0),e([ue()],Ve.prototype,"_showEditRewardModal",void 0),e([ue()],Ve.prototype,"_editingRewardId",void 0),Ve=e([ce("chorebot-rewards-card")],Ve),window.customCards=window.customCards||[],window.customCards.push({type:"chorebot-rewards-card",name:"ChoreBot Rewards Card",description:"Display person-specific rewards with inline creation and redemption",preview:!0}),console.info("%c CHOREBOT-REWARDS-CARD %c v0.1.0 ","color: white; background: #9C27B0; font-weight: bold;","color: #9C27B0; background: white; font-weight: bold;");let Xe=class extends ne{constructor(){super(...arguments),this._selectedPersonId="",this._dropdownOpen=!1,this._groups=[],this._editDialogOpen=!1,this._editingTask=null,this._saving=!1,this.shades={lighter:"",light:"",base:"",dark:"",darker:""},this.shadesArray=[]}setConfig(e){if(!e.entity)throw new Error("You must specify an entity (todo list)");if(!e.entity.startsWith("todo."))throw new Error("Entity must be a todo list (todo.*)");this._config={show_title:!0,show_progress:!0,show_dateless_tasks:!0,show_future_tasks:!1,show_points:!0,show_add_task_button:!0,show_all_people:!1,hide_person_background:!1,hide_tasks_background:!1,untagged_header:"Untagged",...e}}static getStubConfig(){return{type:"custom:chorebot-person-grouped-card",entity:"",default_person_entity:"",show_all_people:!1,show_progress:!0,show_title:!0,hide_person_background:!1,hide_tasks_background:!1,accent_color:"",show_dateless_tasks:!0,show_future_tasks:!1,show_points:!0,show_add_task_button:!0,untagged_header:"Untagged",tag_group_order:[],filter_section_id:""}}static getConfigForm(){return{schema:[{name:"entity",required:!0,selector:{entity:{filter:{domain:"todo"}}}},{name:"default_person_entity",selector:{entity:{filter:{domain:"person"}}}},{name:"show_all_people",default:!1,selector:{boolean:{}}},{name:"show_progress",default:!0,selector:{boolean:{}}},{name:"show_title",default:!0,selector:{boolean:{}}},{name:"show_dateless_tasks",default:!0,selector:{boolean:{}}},{name:"show_future_tasks",default:!1,selector:{boolean:{}}},{name:"show_points",default:!0,selector:{boolean:{}}},{name:"show_add_task_button",default:!0,selector:{boolean:{}}},{name:"filter_section_id",selector:{text:{}}},{name:"hide_person_background",default:!1,selector:{boolean:{}}},{name:"hide_tasks_background",default:!1,selector:{boolean:{}}},{name:"accent_color",selector:{text:{}}},{name:"task_text_color",selector:{text:{}}},{name:"progress_text_color",selector:{text:{}}},{name:"untagged_header",default:"Untagged",selector:{text:{}}},{name:"tag_group_order",selector:{select:{multiple:!0,custom_value:!0,options:[]}}}],computeLabel:e=>({entity:"Todo Entity",default_person_entity:"Default Person",show_all_people:"Show All People",show_progress:"Show Progress Bar",show_title:"Show Title",show_dateless_tasks:"Show Tasks Without Due Date",show_future_tasks:"Show Future Tasks",show_points:"Show Points Badges",show_add_task_button:"Show Add Task Button",filter_section_id:"Filter by Section",hide_person_background:"Hide Person Background",hide_tasks_background:"Hide Tasks Background",accent_color:"Accent Color",task_text_color:"Task Text Color",progress_text_color:"Progress Text Color",untagged_header:"Untagged Tasks Header",tag_group_order:"Tag Display Order"}[e.name]||void 0),computeHelper:e=>({entity:"Select the ChoreBot todo entity to display",default_person_entity:"Override auto-detected person. Leave empty to auto-detect logged-in user or use first person alphabetically.",show_all_people:"Show all people in dropdown, or only people with tasks in this list",show_progress:"Display progress bar showing completed/total tasks for selected person",show_title:"Show the person's name as card title",show_dateless_tasks:"Show tasks that do not have a due date",show_future_tasks:"Show tasks with future due dates in a collapsible 'Upcoming' section (collapsed by default)",show_points:"Display points badges on task items",show_add_task_button:"Show the 'Add Task' button below tag groups for creating new tasks",filter_section_id:'Additional section filter (e.g., "Morning Routine"). Leave empty to show all sections for selected person.',hide_person_background:"Hide the person section background and shadow for a seamless look",hide_tasks_background:"Hide the tasks section background and shadow for a seamless look",accent_color:"Override accent color for person display and tag headers (hex code or CSS variable). By default inherits from person's profile.",task_text_color:"Text color for task items (hex code or CSS variable)",progress_text_color:"Text color for progress label (hex code or CSS variable)",untagged_header:'Header text for tasks without tags (default: "Untagged")',tag_group_order:"Order to display tag groups. Tags not listed will appear alphabetically after these."}[e.name]||void 0)}}willUpdate(e){if(e.has("hass")&&""===this._selectedPersonId&&(this._selectedPersonId=Ke(this.hass,this._config?.default_person_entity)),(e.has("_config")||e.has("_selectedPersonId"))&&this._config){const e=Ee(this.hass,this._config.accent_color,this._selectedPersonId);this.shades=De(e),this.shadesArray=[this.shades.lighter,this.shades.light,this.shades.base,this.shades.dark,this.shades.darker]}(e.has("hass")||e.has("_config")||e.has("_selectedPersonId"))&&this._updateGroups()}render(){if(!this.hass||!this._config)return L``;if(!this._selectedPersonId)return L`
        <ha-card>
          <div class="error-message">
            Please select a person. No people found with ChoreBot access.
          </div>
        </ha-card>
      `;const e=this._getAvailablePeople(),t=this._config.show_progress?this._computeProgress():void 0;return L`
      <div class="card-container">
        ${Ze(this.hass,this._selectedPersonId,this._dropdownOpen,e,this._config.show_progress??!0,t,this.shades,this._config.progress_text_color,()=>this._toggleDropdown(),e=>this._selectPerson(e),this._config.hide_person_background??!1)}

        <div class="tasks-section ${this._config.hide_tasks_background?"no-background":""}">
          ${this._renderGroupedTasks()}
        </div>
      </div>

      ${this._renderEditDialog()}
    `}_computeProgress(){const e=Object.values(this.hass.states).filter(e=>e.entity_id.startsWith("todo.chorebot_"));return ve(xe(e,this._selectedPersonId,!1))}_getAvailablePeople(){const e=Ye(this.hass);if(this._config.show_all_people)return e;const t=this.hass?.states[this._config.entity],o=t?.attributes.chorebot_tasks||[],r=new Set;for(const e of o)e.computed_person_id&&r.add(e.computed_person_id);return e.filter(e=>r.has(e.entity_id))}_toggleDropdown(){this._dropdownOpen=!this._dropdownOpen}_selectPerson(e){this._selectedPersonId=e,this._dropdownOpen=!1}_updateGroups(){if(!this.hass||!this._config)return;const e=this.hass.states[this._config.entity];if(!e)return;let t=ke(e,!1!==this._config.show_dateless_tasks,!0===this._config.show_future_tasks,this._config.untagged_header||"Untagged","Upcoming",this._config.filter_section_id,this._selectedPersonId);t=ye(t,this._config.tag_group_order,this._config.untagged_header,"Upcoming"),this._groups=t.map(e=>({...e,isCollapsed:this._findExistingCollapseState(e.name)}))}_findExistingCollapseState(e){const t=this._groups.find(t=>t.name===e);return void 0!==t?t.isCollapsed:"Upcoming"===e}_renderGroupedTasks(){return 0===this._groups.length?L`<div class="empty-state">No tasks for this person</div>`:L`
      <div class="tag-groups">
        ${this._renderAllGroups(this._groups)}
      </div>
      ${this._config.show_add_task_button?this._renderAddTaskButton():""}
    `}_renderAllGroups(e){return e.map(e=>{const t=be(e.tasks),o=this._config.task_text_color||"white",r=e.isCollapsed,s=t.completed===t.total,i=r&&s,a=t.total>0?t.completed/t.total*100:0;return L`
        <div class="tag-group-container ${r?"collapsed":""}">
          <div
            class="tag-group-header ${r?"collapsed":""}"
            style="background: #${this.shades.light}; color: ${o}; --progress-width: ${a}%; --darker-color: #${this.shades.dark};"
            @click=${()=>this._toggleGroup(e.name)}
          >
            <div class="tag-group-header-title">${e.name}</div>
            <div class="tag-group-header-progress">
              ${i?L`<ha-icon
                    icon="mdi:check"
                    style="color: ${o}; --mdi-icon-size: 20px;"
                  ></ha-icon>`:L`${t.completed}/${t.total}`}
            </div>
          </div>
          <div class="tag-group-tasks ${r?"collapsed":""}">
            <div class="tag-group-tasks-inner">
              ${this._renderTasks(e.tasks,o)}
            </div>
          </div>
        </div>
      `})}_renderTasks(e,t){return e.map(e=>{const o="completed"===e.status,r=o?`#${this.shades.base}`:this._config?.hide_tasks_background?"transparent":"var(--card-background-color)",s=o?t:"var(--primary-text-color)",i=o?`#${this.shades.dark}`:"transparent",a=o?"white":"var(--divider-color)",n=o?"none":"2px solid var(--divider-color)";return L`
        <div
          class="todo-item"
          style="background: ${r}; color: ${s};"
          @click=${()=>this._openEditDialog(e)}
        >
          <div class="todo-content">
            <div class="todo-summary">${e.summary}</div>
            ${e.due||e.points_value||e.parent_uid?L`<div
                  class="todo-due-date"
                  style="color: ${fe(e)?"var(--error-color)":"inherit"}"
                >
                  ${e.due?ge(new Date(e.due),e):""}
                  ${e.parent_uid?L`<ha-icon
                        icon="mdi:sync"
                        class="recurring-icon"
                      ></ha-icon>`:""}
                  ${this._renderPointsBadge(e)}
                </div>`:""}
          </div>
          <div
            class="completion-circle"
            style="background: ${i}; border: ${n};"
            @click=${t=>this._handleCompletionClick(t,e)}
          >
            <ha-icon
              icon="mdi:check"
              style="color: ${a};"
            ></ha-icon>
          </div>
        </div>
      `})}_renderPointsBadge(e){const t=this.hass?.states[this._config.entity],o=t?.attributes.chorebot_templates||[],r=this._config.task_text_color||"white";return Ue(e,o,this.shades,this.hass,!1!==this._config?.show_points,r)}_renderAddTaskButton(){if(!this._config?.show_add_task_button)return L``;const e=`#${this.shades.light}`,t=`color-mix(in srgb, #${this.shades.light} 20%, var(--card-background-color))`,o=`#${this.shades.light}`;return L`
      <div
        class="add-task-button-container"
        style="--button-border-color: ${e}; --button-hover-bg: ${t}; --button-hover-color: ${o};"
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
    `}_toggleGroup(e){const t=this._groups.find(t=>t.name===e);t&&(t.isCollapsed=!t.isCollapsed,this.requestUpdate())}async _toggleTask(e,t){const o="completed"===e.status?"needs_action":"completed";await this.hass.callService("todo","update_item",{entity_id:this._config.entity,item:e.uid,status:o}),"completed"===o&&t&&Ie(t,this.shadesArray)}_handleCompletionClick(e,t){e.stopPropagation();const o=e.currentTarget.getBoundingClientRect(),r={x:(o.left+o.width/2)/window.innerWidth,y:(o.top+o.height/2)/window.innerHeight};this._toggleTask(t,r)}_openEditDialog(e){if(!this.hass||!this._config?.entity)return;const t=this.hass.states[this._config.entity];if(!t)return;const o=t.attributes.chorebot_templates||[];this._editingTask=Ae(e,o),this._editDialogOpen=!0}_closeEditDialog(){this._editDialogOpen=!1,this._editingTask=null}_renderEditDialog(){const e=this.hass?.states[this._config.entity],t=e?.attributes.chorebot_sections||[],o=e?.attributes.chorebot_tags||[];return Re(this._editDialogOpen,this._editingTask,this.hass,t,o,this._saving,()=>this._closeEditDialog(),e=>this._formValueChanged(e),()=>this._saveTask(),()=>this._handleDeleteTask())}_formValueChanged(e){const t=e.detail.value;this._editingTask={...this._editingTask,...t},("has_due_date"in t||"is_all_day"in t||"has_recurrence"in t||"recurrence_frequency"in t)&&this.requestUpdate()}async _saveTask(){if(!this._editingTask||!this._editingTask.summary?.trim()||this._saving)return;this._saving=!0;const e={list_id:this._config.entity,uid:this._editingTask.uid,summary:this._editingTask.summary.trim()};if(this._editingTask.has_due_date&&this._editingTask.due_date){const t=!!this._editingTask.is_all_day;let o;if(t||!this._editingTask.due_time)o=`${this._editingTask.due_date}T00:00:00`;else{const e=3===this._editingTask.due_time.split(":").length?this._editingTask.due_time:`${this._editingTask.due_time}:00`;o=`${this._editingTask.due_date}T${e}`}const r=new Date(o);if(isNaN(r.getTime()))return console.error("Invalid date/time combination:",o),void(this._saving=!1);e.due=r.toISOString(),e.is_all_day=t}else!1===this._editingTask.has_due_date&&(e.due="",e.is_all_day=!1);this._editingTask.description&&(e.description=this._editingTask.description),this._editingTask.section_id&&(e.section_id=this._editingTask.section_id),void 0!==this._editingTask.tags&&(e.tags=this._editingTask.tags);const t=$e(this._editingTask);null!==t?e.rrule=t:!1===this._editingTask.has_recurrence&&(e.rrule=""),void 0!==this._editingTask.points_value&&(e.points_value=this._editingTask.points_value),void 0!==this._editingTask.streak_bonus_points&&(e.streak_bonus_points=this._editingTask.streak_bonus_points),void 0!==this._editingTask.streak_bonus_interval&&(e.streak_bonus_interval=this._editingTask.streak_bonus_interval);!!this._editingTask.parent_uid&&(e.include_future_occurrences=!0);try{await this.hass.callService("chorebot","update_task",e),this._closeEditDialog()}catch(e){console.error("Error saving task:",e),alert("Failed to save task. Please try again.")}finally{this._saving=!1}}async _handleDeleteTask(){if(!this._editingTask||this._saving)return;const e=this._editingTask,t=e.has_recurrence||e.parent_uid;if(confirm(t?"Delete this recurring task? This will remove all future occurrences, but keep completed instances.":"Delete this task? This action cannot be undone.")){this._saving=!0;try{await this.hass.callService("todo","remove_item",{entity_id:this._config.entity,item:e.uid}),this._closeEditDialog()}catch(e){console.error("Error deleting task:",e),alert(`Failed to delete task: ${e}`)}finally{this._saving=!1}}}_openAddTaskDialog(){const e=this.hass?.states[this._config.entity],t=e?.attributes.chorebot_sections||[];this._editingTask=this._createBlankTask(t),this._editDialogOpen=!0}_createBlankTask(e){let t;if(this._config.filter_section_id){let o=e.find(e=>e.id===this._config.filter_section_id);o||(o=e.find(e=>e.name.toLowerCase()===this._config.filter_section_id.toLowerCase())),o&&(t=o.id)}if(!t&&this._selectedPersonId){const o=e.find(e=>e.person_id===this._selectedPersonId);o&&(t=o.id)}return!t&&e.length>0&&(t=e.sort((e,t)=>t.sort_order-e.sort_order)[0].id),{uid:"",summary:"",status:"needs_action",has_due_date:!1,is_all_day:!1,due_date:void 0,due_time:void 0,description:"",section_id:t,tags:[],has_recurrence:!1,recurrence_frequency:"DAILY",recurrence_interval:1,recurrence_byweekday:[],recurrence_bymonthday:1,points_value:0,streak_bonus_points:0,streak_bonus_interval:0}}getCardSize(){return 3}};Xe.styles=a`
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
      border-bottom: 1px solid var(--divider-color);
    }

    .todo-item:last-child {
      border-bottom: none;
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
    }
  `,e([pe({attribute:!1})],Xe.prototype,"hass",void 0),e([ue()],Xe.prototype,"_config",void 0),e([ue()],Xe.prototype,"_selectedPersonId",void 0),e([ue()],Xe.prototype,"_dropdownOpen",void 0),e([ue()],Xe.prototype,"_groups",void 0),e([ue()],Xe.prototype,"_editDialogOpen",void 0),e([ue()],Xe.prototype,"_editingTask",void 0),e([ue()],Xe.prototype,"_saving",void 0),Xe=e([ce("chorebot-person-grouped-card")],Xe),window.customCards=window.customCards||[],window.customCards.push({type:"chorebot-person-grouped-card",name:"ChoreBot Person Grouped Card",description:"Person-filtered tag-based grouped task view with progress tracking",preview:!0}),console.info("%c CHOREBOT-PERSON-GROUPED-CARD %c v0.1.0 ","color: white; background: #9C27B0; font-weight: bold;","color: #9C27B0; background: white; font-weight: bold;");let Je=class extends ne{constructor(){super(...arguments),this._selectedPersonId="",this._dropdownOpen=!1,this._redeeming=null,this._showConfirmModal=!1,this._showAddRewardModal=!1,this._showEditRewardModal=!1,this._pendingRedemption=null,this._rewardFormData={name:"",cost:50,icon:"mdi:gift",description:""},this._editingRewardId=null,this.shades={lighter:"",light:"",base:"",dark:"",darker:""},this._rewardFormSchema=[{name:"name",required:!0,selector:{text:{}}},{name:"cost",selector:{number:{min:1,max:1e4,mode:"box"}}},{name:"icon",selector:{icon:{}}},{name:"description",selector:{text:{multiline:!0}}}],this._computeRewardFieldLabel=e=>{const t=Ce(this.hass);return{name:"Name",cost:`Cost (${t.charAt(0).toUpperCase()+t.slice(1)})`,icon:"Icon",description:"Description (Optional)"}[e.name]||e.name},this._computeRewardFieldHelper=e=>({cost:`Cost between 1 and 10,000 ${Ce(this.hass)}`,icon:"Use Material Design Icons (e.g., mdi:gift, mdi:ice-cream)"}[e.name]||""),this._handleRewardFormChange=e=>{this._rewardFormData=e.detail.value}}setConfig(e){if(!e.type)throw new Error("type is required");this._config={type:"custom:chorebot-person-rewards-card",show_progress:!1!==e.show_progress,hide_rewards_background:!0===e.hide_rewards_background,show_disabled_rewards:!0===e.show_disabled_rewards,sort_by:e.sort_by||"cost",show_add_reward_button:!1!==e.show_add_reward_button,accent_color:e.accent_color||"",progress_text_color:e.progress_text_color||"",default_person_entity:e.default_person_entity||""}}static getStubConfig(){return{type:"custom:chorebot-person-rewards-card",default_person_entity:"",show_progress:!0,hide_rewards_background:!1,show_disabled_rewards:!1,sort_by:"cost",show_add_reward_button:!0,accent_color:"",progress_text_color:""}}static getConfigForm(){return{schema:[{name:"default_person_entity",selector:{entity:{filter:{domain:"person"}}}},{name:"show_progress",default:!0,selector:{boolean:{}}},{name:"hide_rewards_background",default:!1,selector:{boolean:{}}},{name:"show_disabled_rewards",default:!1,selector:{boolean:{}}},{name:"sort_by",default:"cost",selector:{select:{options:[{label:"Cost (Low to High)",value:"cost"},{label:"Name (A-Z)",value:"name"},{label:"Date Created (Oldest First)",value:"created"}]}}},{name:"show_add_reward_button",default:!0,selector:{boolean:{}}},{name:"accent_color",selector:{text:{}}},{name:"progress_text_color",selector:{text:{}}}],computeLabel:e=>({default_person_entity:"Default Person",show_progress:"Show Progress Bar",hide_rewards_background:"Hide Rewards Tile Backgrounds",show_disabled_rewards:"Show Disabled Rewards",sort_by:"Sort Rewards By",show_add_reward_button:"Show Add Reward Button",accent_color:"Accent Color",progress_text_color:"Progress Text Color"}[e.name]||void 0),computeHelper:e=>({default_person_entity:"Override auto-detected person. Leave empty to auto-detect logged-in user or use first person alphabetically.",show_progress:"Display progress bar showing completed/total tasks for selected person",hide_rewards_background:"Hide individual reward tile backgrounds for a seamless look",show_disabled_rewards:"Include rewards that have been disabled in the grid",sort_by:"Choose how to sort the rewards in the grid",show_add_reward_button:"Show the 'Add Reward' card for creating new rewards",accent_color:"Override accent color (hex code or CSS variable). By default inherits from person's profile.",progress_text_color:"Text color for progress label (hex code or CSS variable)"}[e.name]||void 0)}}willUpdate(e){if(e.has("hass")&&""===this._selectedPersonId&&(this._selectedPersonId=Ke(this.hass,this._config?.default_person_entity)),(e.has("_config")||e.has("_selectedPersonId"))&&this._config){const e=Ee(this.hass,this._config.accent_color,this._selectedPersonId);this.shades=De(e)}(e.has("hass")||e.has("_selectedPersonId"))&&(this._progress=this._computeProgress())}render(){if(!this.hass||!this._config)return L`<ha-card><div class="empty-state">Loading...</div></ha-card>`;if(!this.hass.states["sensor.chorebot_points"])return L`<ha-card>
        <div class="error-state">
          ChoreBot Points sensor not found. Make sure the integration is set up.
        </div>
      </ha-card>`;if(!this._selectedPersonId)return L`
        <ha-card>
          <div class="error-state">
            Please select a person. No people found with ChoreBot access.
          </div>
        </ha-card>
      `;const e=this._getAvailablePeople(),t=this._config.show_progress??!0;return L`
      <ha-card>
        <div class="card-container">
          <!-- Person Dropdown Section -->
          <div
            class="person-section ${this._dropdownOpen?"dropdown-open":""}"
          >
            ${Ze(this.hass,this._selectedPersonId,this._dropdownOpen,e,t,this._progress,this.shades,this._config.progress_text_color,()=>this._toggleDropdown(),e=>this._selectPerson(e),!1)}
          </div>

          <!-- Rewards List Section -->
          <div class="rewards-section">
            ${this._renderRewardsList()}
          </div>
        </div>

        <!-- Modals -->
        ${this._showConfirmModal?this._renderConfirmModal():""}
        ${this._showAddRewardModal?this._renderAddRewardModal():""}
        ${this._showEditRewardModal?this._renderEditRewardModal():""}
      </ha-card>
    `}_computeProgress(){const e=Object.values(this.hass.states).filter(e=>e.entity_id.startsWith("todo.chorebot_"));return ve(xe(e,this._selectedPersonId,!1))}_getAvailablePeople(){return Ye(this.hass)}_toggleDropdown(){this._dropdownOpen=!this._dropdownOpen}_selectPerson(e){this._selectedPersonId=e,this._dropdownOpen=!1}_renderRewardsList(){const e=this.hass?.states["sensor.chorebot_points"],t=e?.attributes.rewards||[],o=e?.attributes.people||{},r=t.filter(e=>e.person_id===this._selectedPersonId),s=r.filter(e=>this._config.show_disabled_rewards||e.enabled),i=this._sortRewards(s),a=o[this._selectedPersonId];return 0!==i.length||this._config.show_add_reward_button?L`
      <div class="rewards-grid">
        ${i.map(e=>this._renderRewardCard(e,a))}
        ${this._config.show_add_reward_button?this._renderAddRewardCard():""}
      </div>
    `:L`<div class="empty-state">
        No rewards configured yet. Use the "Add Reward" button or
        <code>chorebot.manage_reward</code> service to create rewards.
      </div>`}_renderRewardCard(e,t){const o=!!t&&t.points_balance>=e.cost,r=!e.enabled||!o,s=Te(this.hass),i=this._config?.hide_rewards_background??!1,a=`#${this.shades.base}`,n=`#${this.shades.base}`;return L`
      <div
        class="reward-card ${r?"disabled":""} ${i?"no-background":""}"
        @click="${()=>this._handleRewardClick(e,o)}"
      >
        <div class="reward-icon-section" style="background: ${a};">
          <div class="reward-icon">
            <ha-icon icon="${e.icon}"></ha-icon>
          </div>
        </div>
        <div class="reward-info">
          <div class="reward-header">
            <div class="reward-name">${e.name}</div>
            <div class="reward-cost" style="color: ${n};">
              ${e.cost}
              ${s.icon?L`<ha-icon icon="${s.icon}"></ha-icon>`:""}
              ${s.text?s.text:""}
            </div>
          </div>
          ${e.description?L`<div class="reward-description">${e.description}</div>`:""}
        </div>
      </div>
    `}_renderAddRewardCard(){const e=`#${this.shades.light}`,t=`color-mix(in srgb, #${this.shades.light} 20%, var(--card-background-color))`,o=`#${this.shades.light}`;return L`
      <div
        class="add-reward-card"
        style="--button-border-color: ${e}; --button-hover-bg: ${t}; --button-hover-color: ${o};"
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
    `}_sortRewards(e){const t=[...e];switch(this._config.sort_by){case"name":return t.sort((e,t)=>e.name.localeCompare(t.name));case"created":return t.sort((e,t)=>new Date(e.created||0).getTime()-new Date(t.created||0).getTime());default:return t.sort((e,t)=>e.cost-t.cost)}}_handleRewardClick(e,t){this._pendingRedemption={personId:this._selectedPersonId,rewardId:e.id},this._showConfirmModal=!0}_renderConfirmModal(){if(!this._pendingRedemption||!this._config)return"";const e=this.hass?.states["sensor.chorebot_points"],t=e?.attributes.people||{},o=e?.attributes.rewards||[],{personId:r,rewardId:s}=this._pendingRedemption,i=t[r],a=o.find(e=>e.id===s);if(!i||!a)return"";const n=qe(this.hass,r),d=i.points_balance-a.cost,c=i.points_balance>=a.cost,l=a.enabled&&c,h=Te(this.hass),p=`#${this.shades.base}`,u=`#${this.shades.dark}`;return L`
      <div class="modal-overlay" @click="${this._cancelRedemption}">
        <div
          class="modal-content"
          style="--modal-confirm-bg: ${p}; --modal-confirm-hover-bg: ${u};"
          @click="${e=>e.stopPropagation()}"
        >
          <div class="modal-header">
            ${l?"Are you sure?":"Reward Details"}
            <button
              class="edit-button"
              @click="${()=>this._handleEditButtonClick(a.id)}"
              title="Edit Reward"
            >
              <ha-icon icon="mdi:pencil"></ha-icon>
            </button>
          </div>
          <div class="modal-body">
            <div class="modal-info">
              <div class="modal-info-row">
                <span class="modal-info-label">Person:</span>
                <span class="modal-info-value">${n}</span>
              </div>
              <div class="modal-info-row">
                <span class="modal-info-label">Reward:</span>
                <span class="modal-info-value">${a.name}</span>
              </div>
              <div class="modal-info-row">
                <span class="modal-info-label">Cost:</span>
                <span class="modal-info-value"
                  >${a.cost}
                  ${h.icon?L`<ha-icon icon="${h.icon}"></ha-icon>`:""}
                  ${h.text?h.text:""}</span
                >
              </div>
              <div class="modal-info-row">
                <span class="modal-info-label">Current Balance:</span>
                <span class="modal-info-value"
                  >${i.points_balance}
                  ${h.icon?L`<ha-icon icon="${h.icon}"></ha-icon>`:""}
                  ${h.text?h.text:""}</span
                >
              </div>
              <div class="modal-info-row">
                <span class="modal-info-label">Remaining Balance:</span>
                <span
                  class="modal-info-value"
                  style="color: ${d<0?"var(--error-color)":"inherit"}"
                  >${d}
                  ${h.icon?L`<ha-icon icon="${h.icon}"></ha-icon>`:""}
                  ${h.text?h.text:""}</span
                >
              </div>
              ${a.enabled?"":L`<div
                    style="margin-top: 12px; color: var(--warning-color); font-size: 14px; text-align: center;"
                  >
                    This reward is currently disabled.
                  </div>`}
              ${c?"":L`<div
                    style="margin-top: 12px; color: var(--error-color); font-size: 14px; text-align: center;"
                  >
                    Not enough points to redeem this reward.
                  </div>`}
            </div>
          </div>
          <div class="modal-actions">
            <button
              class="modal-button cancel"
              @click="${this._cancelRedemption}"
            >
              ${l?"Cancel":"Close"}
            </button>
            <button
              class="modal-button confirm"
              ?disabled="${!l}"
              @click="${this._confirmRedemption}"
            >
              Redeem
            </button>
          </div>
        </div>
      </div>
    `}_renderAddRewardModal(){return this._config?L`
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
    `:""}_renderEditRewardModal(){return this._config?L`
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
          slot="primaryAction"
          @click=${this._updateReward}
          ?disabled=${!this._rewardFormData.name?.trim()}
        >
          Update
        </ha-button>
        <ha-button slot="secondaryAction" @click=${this._closeEditRewardModal}>
          Cancel
        </ha-button>
      </ha-dialog>
    `:""}_cancelRedemption(){this._showConfirmModal=!1,this._pendingRedemption=null}async _confirmRedemption(){if(!this._pendingRedemption)return;const{personId:e,rewardId:t}=this._pendingRedemption;this._showConfirmModal=!1,this._pendingRedemption=null,this._redeeming=t;try{await this.hass.callService("chorebot","redeem_reward",{person_id:e,reward_id:t}),this._showRedemptionSuccess()}catch(e){const t=e.message||"Failed to redeem reward. Please try again.";alert(t)}finally{this._redeeming=null}}_showRedemptionSuccess(){Be(Oe(this._config.accent_color||getComputedStyle(this).getPropertyValue("--primary-color")||"#03a9f4"),3e3)}_openAddRewardModal(){this._rewardFormData={name:"",cost:50,icon:"mdi:gift",description:""},this._showAddRewardModal=!0}_closeAddRewardModal(){this._showAddRewardModal=!1}async _createReward(){if(!this._config)return;const{name:e,cost:t,icon:o,description:r}=this._rewardFormData;if(e.trim())try{await this.hass.callService("chorebot","manage_reward",{name:e.trim(),cost:Math.max(1,Math.min(1e4,t)),icon:o||"mdi:gift",description:r.trim(),person_id:this._selectedPersonId}),this._closeAddRewardModal()}catch(e){const t=e.message||"Failed to create reward. Please try again.";alert(t)}else alert("Reward name is required")}_openEditRewardModal(e){if(!this.hass)return;const t=this.hass.states["sensor.chorebot_points"];if(!t)return;const o=(t.attributes.rewards||[]).find(t=>t.id===e);o?(this._rewardFormData={name:o.name,cost:o.cost,icon:o.icon,description:o.description||""},this._editingRewardId=e,this._showEditRewardModal=!0):alert("Reward not found")}_closeEditRewardModal(){this._showEditRewardModal=!1,this._editingRewardId=null,this._rewardFormData={name:"",cost:50,icon:"mdi:gift",description:""}}_handleEditButtonClick(e){this._showConfirmModal=!1,this._pendingRedemption=null,this._openEditRewardModal(e)}async _updateReward(){if(!this._config||!this._editingRewardId)return;const{name:e,cost:t,icon:o,description:r}=this._rewardFormData;if(e.trim())try{await this.hass.callService("chorebot","manage_reward",{reward_id:this._editingRewardId,name:e.trim(),cost:Math.max(1,Math.min(1e4,t)),icon:o||"mdi:gift",description:r.trim(),person_id:this._selectedPersonId}),this._closeEditRewardModal()}catch(e){const t=e.message||"Failed to update reward. Please try again.";alert(t)}else alert("Reward name is required")}getCardSize(){return 3}};Je.styles=a`
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
      --mdc-dialog-min-width: 90%;
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
  `,e([pe({attribute:!1})],Je.prototype,"hass",void 0),e([ue()],Je.prototype,"_config",void 0),e([ue()],Je.prototype,"_selectedPersonId",void 0),e([ue()],Je.prototype,"_dropdownOpen",void 0),e([ue()],Je.prototype,"_progress",void 0),e([ue()],Je.prototype,"_redeeming",void 0),e([ue()],Je.prototype,"_showConfirmModal",void 0),e([ue()],Je.prototype,"_showAddRewardModal",void 0),e([ue()],Je.prototype,"_showEditRewardModal",void 0),e([ue()],Je.prototype,"_pendingRedemption",void 0),e([ue()],Je.prototype,"_rewardFormData",void 0),e([ue()],Je.prototype,"_editingRewardId",void 0),Je=e([ce("chorebot-person-rewards-card")],Je),window.customCards=window.customCards||[],window.customCards.push({type:"chorebot-person-rewards-card",name:"ChoreBot Person Rewards Card",description:"Combined person selector and rewards list card with progress tracking",preview:!0}),console.info("%c CHOREBOT-PERSON-REWARDS-CARD %c v1.0.0","color: white; background: #3498db; font-weight: bold;","color: #3498db; background: white; font-weight: bold;"),console.info("%c CHOREBOT-CARDS %c v0.1.0 ","background: #3498db; color: white; font-weight: bold; padding: 2px 4px; border-radius: 3px 0 0 3px;","background: #ecf0f1; color: #3498db; font-weight: bold; padding: 2px 4px; border-radius: 0 3px 3px 0;");
