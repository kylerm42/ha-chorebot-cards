function e(e,t,o,r){var i,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(a=(s<3?i(a):s>3?i(t,o,a):i(t,o))||a);return s>3&&a&&Object.defineProperty(t,o,a),a}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,o=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),i=new WeakMap;let s=class{constructor(e,t,o){if(this._$cssResult$=!0,o!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(o&&void 0===e){const o=void 0!==t&&1===t.length;o&&(e=i.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&i.set(t,e))}return e}toString(){return this.cssText}};const a=(e,...t)=>{const o=1===e.length?e[0]:t.reduce((t,o,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[r+1],e[0]);return new s(o,e,r)},n=o?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return(e=>new s("string"==typeof e?e:e+"",void 0,r))(t)})(e):e,{is:d,defineProperty:c,getOwnPropertyDescriptor:l,getOwnPropertyNames:h,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,_=globalThis,g=_.trustedTypes,f=g?g.emptyScript:"",m=_.reactiveElementPolyfillSupport,w=(e,t)=>e,b={toAttribute(e,t){switch(t){case Boolean:e=e?f:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},v=(e,t)=>!d(e,t),y={attribute:!0,type:String,converter:b,reflect:!1,useDefault:!1,hasChanged:v};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),_.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=y){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const o=Symbol(),r=this.getPropertyDescriptor(e,o,t);void 0!==r&&c(this.prototype,e,r)}}static getPropertyDescriptor(e,t,o){const{get:r,set:i}=l(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){const s=r?.call(this);i?.call(this,t),this.requestUpdate(e,s,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??y}static _$Ei(){if(this.hasOwnProperty(w("elementProperties")))return;const e=u(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(w("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(w("properties"))){const e=this.properties,t=[...h(e),...p(e)];for(const o of t)this.createProperty(o,e[o])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,o]of t)this.elementProperties.set(e,o)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const o=this._$Eu(e,t);void 0!==o&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(n(e))}else void 0!==e&&t.push(n(e));return t}static _$Eu(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,r)=>{if(o)e.adoptedStyleSheets=r.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const o of r){const r=document.createElement("style"),i=t.litNonce;void 0!==i&&r.setAttribute("nonce",i),r.textContent=o.cssText,e.appendChild(r)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$ET(e,t){const o=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,o);if(void 0!==r&&!0===o.reflect){const i=(void 0!==o.converter?.toAttribute?o.converter:b).toAttribute(t,o.type);this._$Em=e,null==i?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){const o=this.constructor,r=o._$Eh.get(e);if(void 0!==r&&this._$Em!==r){const e=o.getPropertyOptions(r),i="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:b;this._$Em=r;const s=i.fromAttribute(t,e.type);this[r]=s??this._$Ej?.get(r)??s,this._$Em=null}}requestUpdate(e,t,o,r=!1,i){if(void 0!==e){const s=this.constructor;if(!1===r&&(i=this[e]),o??=s.getPropertyOptions(e),!((o.hasChanged??v)(i,t)||o.useDefault&&o.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,o))))return;this.C(e,t,o)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:o,reflect:r,wrapped:i},s){o&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),!0!==i||void 0!==s)||(this._$AL.has(e)||(this.hasUpdated||o||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,o]of e){const{wrapped:e}=o,r=this[t];!0!==e||this._$AL.has(t)||void 0===r||this.C(t,void 0,o,r)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[w("elementProperties")]=new Map,x[w("finalized")]=new Map,m?.({ReactiveElement:x}),(_.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const k=globalThis,$=e=>e,T=k.trustedTypes,C=T?T.createPolicy("lit-html",{createHTML:e=>e}):void 0,A="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,R="?"+S,M=`<${R}>`,D=document,E=()=>D.createComment(""),P=e=>null===e||"object"!=typeof e&&"function"!=typeof e,z=Array.isArray,O="[ \t\n\f\r]",I=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,U=/-->/g,F=/>/g,B=RegExp(`>|${O}(?:([^\\s"'>=/]+)(${O}*=${O}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),H=/'/g,N=/"/g,L=/^(?:script|style|textarea|title)$/i,j=(e=>(t,...o)=>({_$litType$:e,strings:t,values:o}))(1),q=Symbol.for("lit-noChange"),Y=Symbol.for("lit-nothing"),W=new WeakMap,G=D.createTreeWalker(D,129);function V(e,t){if(!z(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==C?C.createHTML(t):t}const K=(e,t)=>{const o=e.length-1,r=[];let i,s=2===t?"<svg>":3===t?"<math>":"",a=I;for(let t=0;t<o;t++){const o=e[t];let n,d,c=-1,l=0;for(;l<o.length&&(a.lastIndex=l,d=a.exec(o),null!==d);)l=a.lastIndex,a===I?"!--"===d[1]?a=U:void 0!==d[1]?a=F:void 0!==d[2]?(L.test(d[2])&&(i=RegExp("</"+d[2],"g")),a=B):void 0!==d[3]&&(a=B):a===B?">"===d[0]?(a=i??I,c=-1):void 0===d[1]?c=-2:(c=a.lastIndex-d[2].length,n=d[1],a=void 0===d[3]?B:'"'===d[3]?N:H):a===N||a===H?a=B:a===U||a===F?a=I:(a=B,i=void 0);const h=a===B&&e[t+1].startsWith("/>")?" ":"";s+=a===I?o+M:c>=0?(r.push(n),o.slice(0,c)+A+o.slice(c)+S+h):o+S+(-2===c?t:h)}return[V(e,s+(e[o]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),r]};class Z{constructor({strings:e,_$litType$:t},o){let r;this.parts=[];let i=0,s=0;const a=e.length-1,n=this.parts,[d,c]=K(e,t);if(this.el=Z.createElement(d,o),G.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(r=G.nextNode())&&n.length<a;){if(1===r.nodeType){if(r.hasAttributes())for(const e of r.getAttributeNames())if(e.endsWith(A)){const t=c[s++],o=r.getAttribute(e).split(S),a=/([.?@])?(.*)/.exec(t);n.push({type:1,index:i,name:a[2],strings:o,ctor:"."===a[1]?te:"?"===a[1]?oe:"@"===a[1]?re:ee}),r.removeAttribute(e)}else e.startsWith(S)&&(n.push({type:6,index:i}),r.removeAttribute(e));if(L.test(r.tagName)){const e=r.textContent.split(S),t=e.length-1;if(t>0){r.textContent=T?T.emptyScript:"";for(let o=0;o<t;o++)r.append(e[o],E()),G.nextNode(),n.push({type:2,index:++i});r.append(e[t],E())}}}else if(8===r.nodeType)if(r.data===R)n.push({type:2,index:i});else{let e=-1;for(;-1!==(e=r.data.indexOf(S,e+1));)n.push({type:7,index:i}),e+=S.length-1}i++}}static createElement(e,t){const o=D.createElement("template");return o.innerHTML=e,o}}function X(e,t,o=e,r){if(t===q)return t;let i=void 0!==r?o._$Co?.[r]:o._$Cl;const s=P(t)?void 0:t._$litDirective$;return i?.constructor!==s&&(i?._$AO?.(!1),void 0===s?i=void 0:(i=new s(e),i._$AT(e,o,r)),void 0!==r?(o._$Co??=[])[r]=i:o._$Cl=i),void 0!==i&&(t=X(e,i._$AS(e,t.values),i,r)),t}class J{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:o}=this._$AD,r=(e?.creationScope??D).importNode(t,!0);G.currentNode=r;let i=G.nextNode(),s=0,a=0,n=o[0];for(;void 0!==n;){if(s===n.index){let t;2===n.type?t=new Q(i,i.nextSibling,this,e):1===n.type?t=new n.ctor(i,n.name,n.strings,this,e):6===n.type&&(t=new ie(i,this,e)),this._$AV.push(t),n=o[++a]}s!==n?.index&&(i=G.nextNode(),s++)}return G.currentNode=D,r}p(e){let t=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,r){this.type=2,this._$AH=Y,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=X(this,e,t),P(e)?e===Y||null==e||""===e?(this._$AH!==Y&&this._$AR(),this._$AH=Y):e!==this._$AH&&e!==q&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>z(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Y&&P(this._$AH)?this._$AA.nextSibling.data=e:this.T(D.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:o}=e,r="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=Z.createElement(V(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===r)this._$AH.p(t);else{const e=new J(r,this),o=e.u(this.options);e.p(t),this.T(o),this._$AH=e}}_$AC(e){let t=W.get(e.strings);return void 0===t&&W.set(e.strings,t=new Z(e)),t}k(e){z(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,r=0;for(const i of e)r===t.length?t.push(o=new Q(this.O(E()),this.O(E()),this,this.options)):o=t[r],o._$AI(i),r++;r<t.length&&(this._$AR(o&&o._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=$(e).nextSibling;$(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class ee{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,r,i){this.type=1,this._$AH=Y,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=Y}_$AI(e,t=this,o,r){const i=this.strings;let s=!1;if(void 0===i)e=X(this,e,t,0),s=!P(e)||e!==this._$AH&&e!==q,s&&(this._$AH=e);else{const r=e;let a,n;for(e=i[0],a=0;a<i.length-1;a++)n=X(this,r[o+a],t,a),n===q&&(n=this._$AH[a]),s||=!P(n)||n!==this._$AH[a],n===Y?e=Y:e!==Y&&(e+=(n??"")+i[a+1]),this._$AH[a]=n}s&&!r&&this.j(e)}j(e){e===Y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class te extends ee{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Y?void 0:e}}class oe extends ee{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Y)}}class re extends ee{constructor(e,t,o,r,i){super(e,t,o,r,i),this.type=5}_$AI(e,t=this){if((e=X(this,e,t,0)??Y)===q)return;const o=this._$AH,r=e===Y&&o!==Y||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,i=e!==Y&&(o===Y||r);r&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ie{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){X(this,e)}}const se=k.litHtmlPolyfillSupport;se?.(Z,Q),(k.litHtmlVersions??=[]).push("3.3.2");const ae=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ne extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{const r=o?.renderBefore??t;let i=r._$litPart$;if(void 0===i){const e=o?.renderBefore??null;r._$litPart$=i=new Q(t.insertBefore(E(),e),e,void 0,o??{})}return i._$AI(e),i})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return q}}ne._$litElement$=!0,ne.finalized=!0,ae.litElementHydrateSupport?.({LitElement:ne});const de=ae.litElementPolyfillSupport;de?.({LitElement:ne}),(ae.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ce=e=>(t,o)=>{void 0!==o?o.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},le={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:v},he=(e=le,t,o)=>{const{kind:r,metadata:i}=o;let s=globalThis.litPropertyMetadata.get(i);if(void 0===s&&globalThis.litPropertyMetadata.set(i,s=new Map),"setter"===r&&((e=Object.create(e)).wrapped=!0),s.set(o.name,e),"accessor"===r){const{name:r}=o;return{set(o){const i=t.get.call(this);t.set.call(this,o),this.requestUpdate(r,i,e,!0,o)},init(t){return void 0!==t&&this.C(r,void 0,e,t),t}}}if("setter"===r){const{name:r}=o;return function(o){const i=this[r];t.call(this,o),this.requestUpdate(r,i,e,!0,o)}}throw Error("Unsupported decorator location: "+r)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function pe(e){return(t,o)=>"object"==typeof o?he(e,t,o):((e,t,o)=>{const r=t.hasOwnProperty(o);return t.constructor.createProperty(o,e),r?Object.getOwnPropertyDescriptor(t,o):void 0})(e,t,o)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ue(e){return pe({...e,state:!0,attribute:!1})}function _e(e,t=!1){try{const o=new Date(e);if(isNaN(o.getTime()))return{date:null,time:null};if(t){const e=o.getUTCFullYear(),t=String(o.getUTCMonth()+1).padStart(2,"0");return{date:`${e}-${t}-${String(o.getUTCDate()).padStart(2,"0")}`,time:"00:00"}}{const e=o.getFullYear(),t=String(o.getMonth()+1).padStart(2,"0"),r=String(o.getDate()).padStart(2,"0"),i=String(o.getHours()).padStart(2,"0");return{date:`${e}-${t}-${r}`,time:`${i}:${String(o.getMinutes()).padStart(2,"0")}`}}}catch(t){return console.error("Date parsing error:",t,e),{date:null,time:null}}}function ge(e,t){if(t?.is_all_day||!1){const t=new Date,o=Date.UTC(t.getFullYear(),t.getMonth(),t.getDate()),r=Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate())-o,i=Math.round(r/864e5);return 0===i?"Today":-1===i?"Yesterday":1===i?"Tomorrow":i<-1?`${Math.abs(i)} days ago`:`In ${i} days`}const o=new Date;o.setHours(0,0,0,0);const r=new Date(e);r.setHours(0,0,0,0);const i=r.getTime()-o.getTime(),s=Math.round(i/864e5);if(0===s){return new Date(e).toLocaleTimeString(void 0,{hour:"numeric",minute:"2-digit"})}return-1===s?"Yesterday":1===s?"Tomorrow":s<-1?`${Math.abs(s)} days ago`:`In ${s} days`}function fe(e){if(!e.due||"completed"===e.status)return!1;const t=e.is_all_day||!1,o=new Date(e.due);if(t){const e=new Date,t=Date.UTC(e.getFullYear(),e.getMonth(),e.getDate());return Date.UTC(o.getUTCFullYear(),o.getUTCMonth(),o.getUTCDate())<t}{const e=new Date;return e.setHours(0,0,0,0),o.setHours(0,0,0,0),o<e}}function me(e,t){return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()}function we(e,t,o){const[r,i,s]=e.split("-").map(Number);if(o){return new Date(Date.UTC(r,i-1,s,0,0,0,0)).toISOString()}{const e=t?t.split(":").map(Number):[0,0,0],[o,a,n=0]=e;return new Date(r,i-1,s,o,a,n).toISOString()}}function be(e,t=!0,o){const r=e.attributes.chorebot_tasks||[],i=new Date;i.setHours(0,0,0,0);let s=r.filter(e=>{const o=!!e.due,r="completed"===e.status;if(!o)return t;const s=new Date(e.due);s.setHours(0,0,0,0);const a=me(s,i),n=s<i;if(r&&e.last_completed){return!!me(new Date(e.last_completed),new Date)}return!!a||!(!n||r)});if(o){const t=e.attributes.chorebot_sections||[],r=o,i=t.find(e=>e.name===r),a=i?i.id:r;s=s.filter(e=>e.section_id===a)}return s}function ve(e){const t=e.filter(e=>"completed"===e.status).length;return{completed:t,total:e.length}}function ye(e){const t=e.filter(e=>!!e.due),o=t.filter(e=>"completed"===e.status).length;return{completed:o,total:t.length}}function xe(e,t,o="Untagged",r="Upcoming"){return e.sort((e,i)=>{if(e.name===r)return 1;if(i.name===r)return-1;if(!t||0===t.length)return e.name===o?1:i.name===o?-1:e.name.localeCompare(i.name);const s=t.indexOf(e.name),a=t.indexOf(i.name);return-1!==s&&-1!==a?s-a:-1!==s?-1:-1!==a||e.name===o?1:i.name===o?-1:e.name.localeCompare(i.name)})}function ke(e,t,o=!1){const r=[],i=e.filter(e=>e.entity_id.startsWith("todo.chorebot_"));for(const e of i){const i=be(e,o).filter(e=>e.computed_person_id===t);r.push(...i)}return r}function $e(e,t=!0,o=!1,r="Untagged",i="Upcoming",s,a){const n=e.attributes.chorebot_tasks||[],d=new Date;d.setHours(0,0,0,0);const c=new Date(d);c.setHours(23,59,59,999);const l=new Map,h=[];let p;if(s){const t=(e.attributes.chorebot_sections||[]).find(e=>e.name===s);p=t?t.id:s}for(const e of n){if(p&&e.section_id!==p)continue;if(a&&e.computed_person_id!==a)continue;const i=!!e.due,s="completed"===e.status;let n=!1,u=!1;if(i){if(e.due){const t=new Date(e.due);if(o&&t>c)u=!0;else{const o=new Date(t);o.setHours(0,0,0,0);const r=me(o,d),i=o<d;s?e.last_completed&&me(new Date(e.last_completed),new Date)&&(n=!0):(r||i)&&(n=!0)}}}else n=t;if(n){const t=e.tags||[];if(0===t.length)l.has(r)||l.set(r,[]),l.get(r).push(e);else for(const o of t)l.has(o)||l.set(o,[]),l.get(o).push(e)}else u&&h.push(e)}h.sort((e,t)=>new Date(e.due).getTime()-new Date(t.due).getTime());const u=Array.from(l.entries()).map(([e,t])=>({name:e,tasks:t,isCollapsed:!1}));return o&&h.length>0&&u.push({name:i,tasks:h,isCollapsed:!1}),u}function Te(e){if(!e)return null;try{const t=e.split(";");let o=null,r=1;const i=[];let s=null;for(const e of t){const[t,a]=e.split("=");if("FREQ"===t)"DAILY"!==a&&"WEEKLY"!==a&&"MONTHLY"!==a||(o=a);else if("INTERVAL"===t){const e=parseInt(a,10);!isNaN(e)&&e>0&&(r=e)}else if("BYDAY"===t)i.push(...a.split(","));else if("BYMONTHDAY"===t){const e=parseInt(a,10);!isNaN(e)&&e>=1&&e<=31&&(s=e)}}return o?{frequency:o,interval:r,byweekday:i,bymonthday:s}:null}catch(t){return console.error("rrule parsing error:",t,e),null}}function Ce(e){if(!e||!e.has_recurrence)return null;const{recurrence_frequency:t,recurrence_interval:o,recurrence_byweekday:r,recurrence_bymonthday:i}=e;if(!t)return null;let s=`FREQ=${t};INTERVAL=${o||1}`;if("WEEKLY"===t&&r&&r.length>0)s+=`;BYDAY=${r.join(",").toUpperCase()}`;else if("MONTHLY"===t&&i){s+=`;BYMONTHDAY=${Math.max(1,Math.min(31,i))}`}return s}function Ae(e){const t=e.states["sensor.chorebot_points"],o=t?.attributes.points_display;return o?{icon:o.icon??"",text:o.text??"points"}:{icon:"",text:"points"}}function Se(e,t){const o={...e,is_all_day:e.is_all_day||!1,tags:e.tags||[],section_id:e.section_id,points_value:e.points_value||0,streak_bonus_points:e.streak_bonus_points||0,streak_bonus_interval:e.streak_bonus_interval||0};if(e.due){const t=e.is_all_day||!1,r=_e(e.due,t);o.due_date=r.date??void 0,o.due_time=r.time??void 0,o.has_due_date=!0}else o.has_due_date=!1;let r=e.rrule;if(e.parent_uid&&t){const i=t.find(t=>t.uid===e.parent_uid);i&&(r=i.rrule,o.streak_bonus_points=i.streak_bonus_points||0,o.streak_bonus_interval=i.streak_bonus_interval||0)}const i=Te(r);return i?(o.has_recurrence=!0,o.recurrence_frequency=i.frequency,o.recurrence_interval=i.interval,o.recurrence_byweekday=i.byweekday,o.recurrence_bymonthday=i.bymonthday||1):(o.has_recurrence=!1,o.recurrence_frequency="DAILY",o.recurrence_interval=1,o.recurrence_byweekday=[],o.recurrence_bymonthday=1),o}function Re(e){const t=function(e){const t=Ae(e);return t.text?t.text.charAt(0).toUpperCase()+t.text.slice(1):""}(e)||"Points";return function(e){return{summary:"Task Name",has_due_date:"Has Due Date",is_all_day:"All Day",due_date:"Date",due_time:"Time",description:"Description",section_id:"Section",tags:"Tags",has_recurrence:"Recurring Task",recurrence_frequency:"Frequency",recurrence_interval:"Repeat Every",recurrence_byweekday:"Days of Week",recurrence_bymonthday:"Day of Month",points_value:`${t} Value`,streak_bonus_points:`Streak Bonus ${t}`,streak_bonus_interval:"Bonus Every X Days (0 = no bonus)"}[e.name]||e.name}}function Me(e,t,o,r,i,s,a,n,d,c,l="Edit Task",h=!0){if(!e||!t)return j``;const p=function(e,t,o){const r=void 0!==e.has_due_date?e.has_due_date:!!e.due,i=void 0!==e.is_all_day&&e.is_all_day,s=[{name:"summary",required:!0,selector:{text:{}}},{name:"description",selector:{text:{multiline:!0}}}];if(t.length>0&&s.push({name:"section_id",selector:{select:{options:t.sort((e,t)=>t.sort_order-e.sort_order).map(e=>({label:e.name,value:e.id}))}}}),s.push({name:"tags",selector:{select:{multiple:!0,custom_value:!0,options:o.map(e=>({label:e,value:e}))}}}),s.push({name:"has_due_date",selector:{boolean:{}}}),r&&(s.push({name:"due_date",selector:{date:{}}}),i||s.push({name:"due_time",selector:{time:{}}}),s.push({name:"is_all_day",selector:{boolean:{}}})),r){const t=void 0!==e.has_recurrence&&e.has_recurrence,o=e.recurrence_frequency||"DAILY";s.push({name:"has_recurrence",selector:{boolean:{}}}),t&&(s.push({name:"recurrence_frequency",selector:{select:{options:[{label:"Daily",value:"DAILY"},{label:"Weekly",value:"WEEKLY"},{label:"Monthly",value:"MONTHLY"}]}}}),s.push({name:"recurrence_interval",selector:{number:{min:1,max:999,mode:"box"}}}),"WEEKLY"===o?s.push({name:"recurrence_byweekday",selector:{select:{multiple:!0,options:[{label:"Monday",value:"MO"},{label:"Tuesday",value:"TU"},{label:"Wednesday",value:"WE"},{label:"Thursday",value:"TH"},{label:"Friday",value:"FR"},{label:"Saturday",value:"SA"},{label:"Sunday",value:"SU"}]}}}):"MONTHLY"===o&&s.push({name:"recurrence_bymonthday",selector:{number:{min:1,max:31,mode:"box"}}}))}return s.push({name:"points_value",selector:{number:{min:0,max:1e4,mode:"box"}}}),r&&e.has_recurrence&&(s.push({name:"streak_bonus_points",selector:{number:{min:0,max:1e4,mode:"box"}}}),s.push({name:"streak_bonus_interval",selector:{number:{min:0,max:999,mode:"box"}}})),s}(t,r,i),u=function(e,t){const o=void 0!==e.has_due_date?e.has_due_date:!!e.due,r=void 0!==e.is_all_day&&e.is_all_day;let i=e.due_date||null,s=e.due_time||null;if(!i&&e.due){const t=_e(e.due,r);i=t.date,s=t.time}return{summary:e.summary||"",has_due_date:o,is_all_day:r,due_date:i||null,due_time:s||"00:00",description:e.description||"",section_id:e.section_id||(t.length>0?t.sort((e,t)=>t.sort_order-e.sort_order)[0].id:void 0),tags:e.tags||[],has_recurrence:o&&e.has_recurrence||!1,recurrence_frequency:e.recurrence_frequency||"DAILY",recurrence_interval:e.recurrence_interval||1,recurrence_byweekday:e.recurrence_byweekday||[],recurrence_bymonthday:e.recurrence_bymonthday||1,points_value:e.points_value||0,streak_bonus_points:e.streak_bonus_points||0,streak_bonus_interval:e.streak_bonus_interval||0}}(t,r),_=Re(o);return j`
    <ha-dialog open @closed=${a} .heading=${l}>
      <ha-form
        .hass=${o}
        .schema=${p}
        .data=${u}
        .computeLabel=${_}
        @value-changed=${n}
      ></ha-form>

      ${h&&c&&t?.uid?j`
            <ha-button
              slot="secondaryAction"
              @click=${c}
              .disabled=${s}
              class="delete-button"
              dialogAction="delete"
            >
              Delete
            </ha-button>
          `:""}
      
      <ha-button slot="secondaryAction" @click=${a} .disabled=${s}>
        Cancel
      </ha-button>
      
      <ha-button slot="primaryAction" @click=${d} .disabled=${s}>
        ${s?"Saving...":"Save"}
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
  `}function De(e,t){if(e.startsWith("var(")){const t=getComputedStyle(document.documentElement).getPropertyValue(e.slice(4,-1).trim());if(!t)return e;e=t.trim()}let o,r,i;if(e.startsWith("#")){const t=e.replace("#","");o=parseInt(t.substring(0,2),16),r=parseInt(t.substring(2,4),16),i=parseInt(t.substring(4,6),16)}else{if(!e.startsWith("rgb"))return e;{const t=e.match(/\d+/g);if(!t)return e;[o,r,i]=t.map(Number)}}o/=255,r/=255,i/=255;const s=Math.max(o,r,i),a=Math.min(o,r,i);let n=0,d=0,c=(s+a)/2;if(s!==a){const e=s-a;switch(d=c>.5?e/(2-s-a):e/(s+a),s){case o:n=((r-i)/e+(r<i?6:0))/6;break;case r:n=((i-o)/e+2)/6;break;case i:n=((o-r)/e+4)/6}}c=t>0?Math.max(0,Math.min(.95,c+t/100*(1-c))):Math.max(.05,c+t/100*c);const l=(e,t,o)=>(o<0&&(o+=1),o>1&&(o-=1),o<1/6?e+6*(t-e)*o:o<.5?t:o<2/3?e+(t-e)*(2/3-o)*6:e);let h,p,u;if(0===d)h=p=u=c;else{const e=c<.5?c*(1+d):c+d-c*d,t=2*c-e;h=l(t,e,n+1/3),p=l(t,e,n),u=l(t,e,n-1/3)}const _=e=>{const t=Math.round(255*e).toString(16);return 1===t.length?"0"+t:t};return`${_(h)}${_(p)}${_(u)}`.toUpperCase()}function Ee(e){return{lighter:De(e,30),light:De(e,15),base:(t=e,t.startsWith("#")?t.substring(1).toUpperCase():/^[0-9A-Fa-f]{6}$/.test(t)?t.toUpperCase():De(t,0)),dark:De(e,-15),darker:De(e,-30)};var t}function Pe(e,t,o){let r="var(--primary-color)";if(o){const t=e.states["sensor.chorebot_points"],i=(t?.attributes.people||{})[o];i?.accent_color&&(r=i.accent_color)}return t&&(r=t),r}var ze={};!function e(t,o,r,i){var s=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),a="function"==typeof Path2D&&"function"==typeof DOMMatrix,n=function(){if(!t.OffscreenCanvas)return!1;try{var e=new OffscreenCanvas(1,1),o=e.getContext("2d");o.fillRect(0,0,1,1);var r=e.transferToImageBitmap();o.createPattern(r,"no-repeat")}catch(e){return!1}return!0}();function d(){}function c(e){var r=o.exports.Promise,i=void 0!==r?r:t.Promise;return"function"==typeof i?new i(e):(e(d,d),null)}var l,h,p,u,_,g,f,m,w,b,v,y=(l=n,h=new Map,{transform:function(e){if(l)return e;if(h.has(e))return h.get(e);var t=new OffscreenCanvas(e.width,e.height);return t.getContext("2d").drawImage(e,0,0),h.set(e,t),t},clear:function(){h.clear()}}),x=(_=Math.floor(1e3/60),g={},f=0,"function"==typeof requestAnimationFrame&&"function"==typeof cancelAnimationFrame?(p=function(e){var t=Math.random();return g[t]=requestAnimationFrame(function o(r){f===r||f+_-1<r?(f=r,delete g[t],e()):g[t]=requestAnimationFrame(o)}),t},u=function(e){g[e]&&cancelAnimationFrame(g[e])}):(p=function(e){return setTimeout(e,_)},u=function(e){return clearTimeout(e)}),{frame:p,cancel:u}),k=(b={},function(){if(m)return m;if(!r&&s){var t=["var CONFETTI, SIZE = {}, module = {};","("+e.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join("\n");try{m=new Worker(URL.createObjectURL(new Blob([t])))}catch(e){return"undefined"!=typeof console&&"function"==typeof console.warn&&console.warn("🎊 Could not load worker",e),null}!function(e){function t(t,o){e.postMessage({options:t||{},callback:o})}e.init=function(t){var o=t.transferControlToOffscreen();e.postMessage({canvas:o},[o])},e.fire=function(o,r,i){if(w)return t(o,null),w;var s=Math.random().toString(36).slice(2);return w=c(function(r){function a(t){t.data.callback===s&&(delete b[s],e.removeEventListener("message",a),w=null,y.clear(),i(),r())}e.addEventListener("message",a),t(o,s),b[s]=a.bind(null,{data:{callback:s}})})},e.reset=function(){for(var t in e.postMessage({reset:!0}),b)b[t](),delete b[t]}}(m)}return m}),$={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function T(e,t,o){return function(e,t){return t?t(e):e}(e&&null!=e[t]?e[t]:$[t],o)}function C(e){return e<0?0:Math.floor(e)}function A(e,t){return Math.floor(Math.random()*(t-e))+e}function S(e){return parseInt(e,16)}function R(e){return e.map(M)}function M(e){var t=String(e).replace(/[^0-9a-f]/gi,"");return t.length<6&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:S(t.substring(0,2)),g:S(t.substring(2,4)),b:S(t.substring(4,6))}}function D(e){e.width=document.documentElement.clientWidth,e.height=document.documentElement.clientHeight}function E(e){var t=e.getBoundingClientRect();e.width=t.width,e.height=t.height}function P(e){var t=e.angle*(Math.PI/180),o=e.spread*(Math.PI/180);return{x:e.x,y:e.y,wobble:10*Math.random(),wobbleSpeed:Math.min(.11,.1*Math.random()+.05),velocity:.5*e.startVelocity+Math.random()*e.startVelocity,angle2D:-t+(.5*o-Math.random()*o),tiltAngle:(.5*Math.random()+.25)*Math.PI,color:e.color,shape:e.shape,tick:0,totalTicks:e.ticks,decay:e.decay,drift:e.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:3*e.gravity,ovalScalar:.6,scalar:e.scalar,flat:e.flat}}function z(e,t){t.x+=Math.cos(t.angle2D)*t.velocity+t.drift,t.y+=Math.sin(t.angle2D)*t.velocity+t.gravity,t.velocity*=t.decay,t.flat?(t.wobble=0,t.wobbleX=t.x+10*t.scalar,t.wobbleY=t.y+10*t.scalar,t.tiltSin=0,t.tiltCos=0,t.random=1):(t.wobble+=t.wobbleSpeed,t.wobbleX=t.x+10*t.scalar*Math.cos(t.wobble),t.wobbleY=t.y+10*t.scalar*Math.sin(t.wobble),t.tiltAngle+=.1,t.tiltSin=Math.sin(t.tiltAngle),t.tiltCos=Math.cos(t.tiltAngle),t.random=Math.random()+2);var o=t.tick++/t.totalTicks,r=t.x+t.random*t.tiltCos,i=t.y+t.random*t.tiltSin,s=t.wobbleX+t.random*t.tiltCos,n=t.wobbleY+t.random*t.tiltSin;if(e.fillStyle="rgba("+t.color.r+", "+t.color.g+", "+t.color.b+", "+(1-o)+")",e.beginPath(),a&&"path"===t.shape.type&&"string"==typeof t.shape.path&&Array.isArray(t.shape.matrix))e.fill(function(e,t,o,r,i,s,a){var n=new Path2D(e),d=new Path2D;d.addPath(n,new DOMMatrix(t));var c=new Path2D;return c.addPath(d,new DOMMatrix([Math.cos(a)*i,Math.sin(a)*i,-Math.sin(a)*s,Math.cos(a)*s,o,r])),c}(t.shape.path,t.shape.matrix,t.x,t.y,.1*Math.abs(s-r),.1*Math.abs(n-i),Math.PI/10*t.wobble));else if("bitmap"===t.shape.type){var d=Math.PI/10*t.wobble,c=.1*Math.abs(s-r),l=.1*Math.abs(n-i),h=t.shape.bitmap.width*t.scalar,p=t.shape.bitmap.height*t.scalar,u=new DOMMatrix([Math.cos(d)*c,Math.sin(d)*c,-Math.sin(d)*l,Math.cos(d)*l,t.x,t.y]);u.multiplySelf(new DOMMatrix(t.shape.matrix));var _=e.createPattern(y.transform(t.shape.bitmap),"no-repeat");_.setTransform(u),e.globalAlpha=1-o,e.fillStyle=_,e.fillRect(t.x-h/2,t.y-p/2,h,p),e.globalAlpha=1}else if("circle"===t.shape)e.ellipse?e.ellipse(t.x,t.y,Math.abs(s-r)*t.ovalScalar,Math.abs(n-i)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):function(e,t,o,r,i,s,a,n,d){e.save(),e.translate(t,o),e.rotate(s),e.scale(r,i),e.arc(0,0,1,a,n,d),e.restore()}(e,t.x,t.y,Math.abs(s-r)*t.ovalScalar,Math.abs(n-i)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI);else if("star"===t.shape)for(var g=Math.PI/2*3,f=4*t.scalar,m=8*t.scalar,w=t.x,b=t.y,v=5,x=Math.PI/v;v--;)w=t.x+Math.cos(g)*m,b=t.y+Math.sin(g)*m,e.lineTo(w,b),g+=x,w=t.x+Math.cos(g)*f,b=t.y+Math.sin(g)*f,e.lineTo(w,b),g+=x;else e.moveTo(Math.floor(t.x),Math.floor(t.y)),e.lineTo(Math.floor(t.wobbleX),Math.floor(i)),e.lineTo(Math.floor(s),Math.floor(n)),e.lineTo(Math.floor(r),Math.floor(t.wobbleY));return e.closePath(),e.fill(),t.tick<t.totalTicks}function O(e,o){var a,n=!e,d=!!T(o||{},"resize"),l=!1,h=T(o,"disableForReducedMotion",Boolean),p=s&&!!T(o||{},"useWorker")?k():null,u=n?D:E,_=!(!e||!p)&&!!e.__confetti_initialized,g="function"==typeof matchMedia&&matchMedia("(prefers-reduced-motion)").matches;function f(t,o,s){for(var n=T(t,"particleCount",C),d=T(t,"angle",Number),l=T(t,"spread",Number),h=T(t,"startVelocity",Number),p=T(t,"decay",Number),_=T(t,"gravity",Number),g=T(t,"drift",Number),f=T(t,"colors",R),m=T(t,"ticks",Number),w=T(t,"shapes"),b=T(t,"scalar"),v=!!T(t,"flat"),k=function(e){var t=T(e,"origin",Object);return t.x=T(t,"x",Number),t.y=T(t,"y",Number),t}(t),$=n,S=[],M=e.width*k.x,D=e.height*k.y;$--;)S.push(P({x:M,y:D,angle:d,spread:l,startVelocity:h,color:f[$%f.length],shape:w[A(0,w.length)],ticks:m,decay:p,gravity:_,drift:g,scalar:b,flat:v}));return a?a.addFettis(S):(a=function(e,t,o,s,a){var n,d,l=t.slice(),h=e.getContext("2d"),p=c(function(t){function c(){n=d=null,h.clearRect(0,0,s.width,s.height),y.clear(),a(),t()}n=x.frame(function t(){!r||s.width===i.width&&s.height===i.height||(s.width=e.width=i.width,s.height=e.height=i.height),s.width||s.height||(o(e),s.width=e.width,s.height=e.height),h.clearRect(0,0,s.width,s.height),(l=l.filter(function(e){return z(h,e)})).length?n=x.frame(t):c()}),d=c});return{addFettis:function(e){return l=l.concat(e),p},canvas:e,promise:p,reset:function(){n&&x.cancel(n),d&&d()}}}(e,S,u,o,s),a.promise)}function m(o){var r=h||T(o,"disableForReducedMotion",Boolean),i=T(o,"zIndex",Number);if(r&&g)return c(function(e){e()});n&&a?e=a.canvas:n&&!e&&(e=function(e){var t=document.createElement("canvas");return t.style.position="fixed",t.style.top="0px",t.style.left="0px",t.style.pointerEvents="none",t.style.zIndex=e,t}(i),document.body.appendChild(e)),d&&!_&&u(e);var s={width:e.width,height:e.height};function m(){if(p){var t={getBoundingClientRect:function(){if(!n)return e.getBoundingClientRect()}};return u(t),void p.postMessage({resize:{width:t.width,height:t.height}})}s.width=s.height=null}function w(){a=null,d&&(l=!1,t.removeEventListener("resize",m)),n&&e&&(document.body.contains(e)&&document.body.removeChild(e),e=null,_=!1)}return p&&!_&&p.init(e),_=!0,p&&(e.__confetti_initialized=!0),d&&!l&&(l=!0,t.addEventListener("resize",m,!1)),p?p.fire(o,s,w):f(o,s,w)}return m.reset=function(){p&&p.reset(),a&&a.reset()},m}function I(){return v||(v=O(null,{useWorker:!0,resize:!0})),v}o.exports=function(){return I().apply(this,arguments)},o.exports.reset=function(){I().reset()},o.exports.create=O,o.exports.shapeFromPath=function(e){if(!a)throw new Error("path confetti are not supported in this browser");var t,o;"string"==typeof e?t=e:(t=e.path,o=e.matrix);var r=new Path2D(t),i=document.createElement("canvas").getContext("2d");if(!o){for(var s,n,d=1e3,c=d,l=d,h=0,p=0,u=0;u<d;u+=2)for(var _=0;_<d;_+=2)i.isPointInPath(r,u,_,"nonzero")&&(c=Math.min(c,u),l=Math.min(l,_),h=Math.max(h,u),p=Math.max(p,_));s=h-c,n=p-l;var g=Math.min(10/s,10/n);o=[g,0,0,g,-Math.round(s/2+c)*g,-Math.round(n/2+l)*g]}return{type:"path",path:t,matrix:o}},o.exports.shapeFromText=function(e){var t,o=1,r="#000000",i='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';"string"==typeof e?t=e:(t=e.text,o="scalar"in e?e.scalar:o,i="fontFamily"in e?e.fontFamily:i,r="color"in e?e.color:r);var s=10*o,a=s+"px "+i,n=new OffscreenCanvas(s,s),d=n.getContext("2d");d.font=a;var c=d.measureText(t),l=Math.ceil(c.actualBoundingBoxRight+c.actualBoundingBoxLeft),h=Math.ceil(c.actualBoundingBoxAscent+c.actualBoundingBoxDescent),p=c.actualBoundingBoxLeft+2,u=c.actualBoundingBoxAscent+2;l+=4,h+=4,(d=(n=new OffscreenCanvas(l,h)).getContext("2d")).font=a,d.fillStyle=r,d.fillText(t,p,u);var _=1/o;return{type:"bitmap",bitmap:n.transferToImageBitmap(),matrix:[_,0,0,_,-l*_/2,-h*_/2]}}}(function(){return"undefined"!=typeof window?window:"undefined"!=typeof self?self:this||{}}(),ze,!1);var Oe=ze.exports;function Ie(e){const t=Ee(e);return[t.lighter,t.light,t.base,t.dark,t.darker]}function Ue(e,t){Oe({particleCount:30,spread:70,startVelocity:25,origin:e,colors:t,disableForReducedMotion:!0})}function Fe(e,t=3e3){const o=Date.now()+t,r={startVelocity:30,spread:360,ticks:60,zIndex:0};function i(e,t){return Math.random()*(t-e)+e}const s=setInterval(function(){const a=o-Date.now();if(a<=0)return clearInterval(s);const n=a/t*50;Oe({...r,particleCount:n,origin:{x:i(.1,.3),y:Math.random()-.2},colors:e,disableForReducedMotion:!0}),Oe({...r,particleCount:n,origin:{x:i(.7,.9),y:Math.random()-.2},colors:e,disableForReducedMotion:!0})},250)}function Be(e,t=5e3){const o=Date.now()+t;function r(e,t){return Math.random()*(t-e)+e}!function i(){const s=o-Date.now(),a=Math.max(200,s/t*500);Oe({particleCount:1,startVelocity:0,ticks:a,origin:{x:Math.random(),y:.3*Math.random()-.1},colors:e,shapes:["star"],gravity:r(1.2,1.5),scalar:r(1.2,2),drift:r(-.4,.4),disableForReducedMotion:!0}),s>0&&requestAnimationFrame(i)}()}function He(e,t,o,r,i,s){if(!i||!e.points_value)return j``;const a=Ae(r);if(e.parent_uid){const o=t.find(t=>t.uid===e.parent_uid);if(o&&o.streak_bonus_points&&o.streak_bonus_interval){if((o.streak_current+1)%o.streak_bonus_interval===0)return j`<span
          class="points-badge bonus-pending"
          style="color: ${s};"
        >
          +${e.points_value} + ${o.streak_bonus_points}
          ${a.icon?j`<ha-icon icon="${a.icon}"></ha-icon>`:""}
          ${a.text?a.text:""}
        </span>`}}return j`<span
    class="points-badge"
    style="background: #${o.lighter}; color: ${s}; border: 1px solid ${s};"
  >
    +${e.points_value}
    ${a.icon?j`<ha-icon icon="${a.icon}"></ha-icon>`:""}
    ${a.text?a.text:""}
  </span>`}function Ne(e){if(!e||""===e.trim())return"";const t=Te(e);if(!t||!t.frequency)return"";const{frequency:o,interval:r,byweekday:i,bymonthday:s}=t,a={MO:"Mon",TU:"Tue",WE:"Wed",TH:"Thu",FR:"Fri",SA:"Sat",SU:"Sun"};if("DAILY"===o)return 1===r?"Daily":`Every ${r} days`;if("WEEKLY"===o){if(i.length>0){const e=i.map(e=>a[e.toUpperCase()]||e),t=e.join(", ");return 1===r?`Weekly on ${t}`:`Every ${r} weeks on ${t}`}return 1===r?"Weekly":`Every ${r} weeks`}if("MONTHLY"===o){if(null!==s){const e=(e=>{if(e>=11&&e<=13)return`${e}th`;const t=e%10;return 1===t?`${e}st`:2===t?`${e}nd`:3===t?`${e}rd`:`${e}th`})(s);return 1===r?`Monthly on ${e}`:`Every ${r} months on ${e}`}return 1===r?"Monthly":`Every ${r} months`}return""}function Le(e){const{task:t,templates:o,isExpanded:r,onEdit:i,onDelete:s,shades:a,textColor:n}=e;let d="";if(t.rrule)d=Ne(t.rrule);else if(t.parent_uid){const e=o.find(e=>e.uid===t.parent_uid);e?.rrule&&(d=Ne(e.rrule))}let c="";if(t.streak_bonus_points&&t.streak_bonus_points>0){const e=t.streak_bonus_interval||0;if(e>0){const o=1===e?"day":`${e} days`;c=`+${t.streak_bonus_points} pts every ${o}`}}const l=t.due?function(e,t=!1){if(!e||""===e.trim())return"";try{const o=new Date(e);if(isNaN(o.getTime()))return"";const r={weekday:"long",year:"numeric",month:"long",day:"numeric"},i={hour:"numeric",minute:"2-digit",hour12:!0};if(t)return o.toLocaleDateString(void 0,r);return`${o.toLocaleDateString(void 0,r)} at ${o.toLocaleTimeString(void 0,i)}`}catch(t){return console.error("Date formatting error:",t,e),""}}(t.due,t.is_all_day||!1):"",h=[];return d&&h.push({icon:"mdi:sync",label:"Repeats:",value:d}),c&&h.push({icon:"mdi:trophy-award",label:"Streak Bonus:",value:c}),t.description&&""!==t.description.trim()&&h.push({icon:"mdi:text",label:"Description:",value:t.description}),l&&h.push({icon:"mdi:calendar-clock",label:"Due:",value:l}),j`
    <div class="todo-details ${r?"expanded":"collapsed"}">
      <div class="todo-details-inner" style="display: flex; align-items: flex-start;">
        ${h.length>0?j`
              <div class="details-content">
                ${h.map(e=>j`
                    <div class="detail-row">
                      <ha-icon icon="${e.icon}"></ha-icon>
                      <span class="detail-label">${e.label}</span>
                      <span class="detail-value">${e.value}</span>
                    </div>
                  `)}
              </div>
            `:""}
        <div class="details-actions">
          <div
            class="action-button"
            @click=${e=>{e.stopPropagation(),i()}}
            role="button"
            tabindex="0"
            aria-label="Edit task"
          >
            <ha-icon icon="mdi:pencil"></ha-icon>
          </div>
        </div>
      </div>
    </div>
  `}ze.exports.create;let je=class extends ne{constructor(){super(...arguments),this._editDialogOpen=!1,this._editingTask=null,this._saving=!1,this._groups=[],this._addTaskDialogOpen=!1,this._newTask=null,this._savingNewTask=!1,this._expandedTaskUid=null,this._autoCollapseTimeouts=new Map,this._previousGroupProgress=new Map,this.shades={lighter:"",light:"",base:"",dark:"",darker:""},this.shadesArray=[]}setConfig(e){if(!e.entity)throw new Error("You need to define an entity");this._config={entity:e.entity,show_dateless_tasks:!1!==e.show_dateless_tasks,hide_card_background:!0===e.hide_card_background,accent_color:e.accent_color||"",task_text_color:e.task_text_color||"",show_points:!1!==e.show_points,untagged_header:e.untagged_header||"Untagged",tag_group_order:e.tag_group_order||[],show_future_tasks:!0===e.show_future_tasks,filter_section_id:e.filter_section_id,person_entity:e.person_entity,show_add_task_button:!1!==e.show_add_task_button}}getCardSize(){return 3}willUpdate(e){if((e.has("_config")||e.has("hass"))&&this._config&&this.hass){const e=Pe(this.hass,this._config.accent_color,this._config.person_entity);this.shades=Ee(e),this.shadesArray=Object.values(this.shades)}(e.has("hass")||e.has("_config"))&&this._updateGroups()}_updateGroups(){if(!this.hass||!this._config)return;const e=this.hass.states[this._config.entity];if(!e)return;let t=$e(e,!1!==this._config.show_dateless_tasks,!0===this._config.show_future_tasks,this._config.untagged_header||"Untagged","Upcoming",this._config.filter_section_id,this._config.person_entity);t=xe(t,this._config.tag_group_order,this._config.untagged_header,"Upcoming"),this._groups=t.map(e=>({...e,isCollapsed:this._findExistingCollapseState(e.name)}))}_findExistingCollapseState(e){const t=this._groups.find(t=>t.name===e);return void 0!==t?t.isCollapsed:"Upcoming"===e}render(){if(!this.hass||!this._config)return j`<ha-card>Loading...</ha-card>`;return this.hass.states[this._config.entity]?j`
      <ha-card
        class="${this._config.hide_card_background?"no-background":""}"
      >
        ${0===this._groups.length?j`<div class="empty-state">No tasks</div>`:j`<div class="tag-groups">
              ${this._renderAllGroups(this._groups)}
            </div>`}
        ${this._renderAddTaskButton()}
      </ha-card>

      ${this._renderEditDialog()} ${this._renderAddTaskDialog()}
    `:j`<ha-card>
        <div class="empty-state">Entity not found: ${this._config.entity}</div>
      </ha-card>`}_renderAllGroups(e){return e.map(e=>{const t=ve(e.tasks),o=this._config.task_text_color||"white",r=e.isCollapsed,i=t.completed===t.total,s=r&&i,a=t.total>0?t.completed/t.total*100:0;return this._checkAutoCollapse(e.name,t,i,r),j`
        <div class="tag-group-container ${r?"collapsed":""}">
          <div
            class="tag-group-header ${r?"collapsed":""}"
            style="background: #${this.shades.light}; color: ${o}; --progress-width: ${a}%; --darker-color: #${this.shades.dark};"
            @click=${()=>this._toggleGroup(e.name)}
          >
            <div class="tag-group-header-title">${e.name}</div>
            <div class="tag-group-header-progress">
              ${s?j`<ha-icon
                    icon="mdi:check"
                    style="color: ${o}; --mdi-icon-size: 20px;"
                  ></ha-icon>`:j`${t.completed}/${t.total}`}
            </div>
          </div>
          <div class="tag-group-tasks ${r?"collapsed":""}">
            <div class="tag-group-tasks-inner">
              ${this._renderTasks(e.tasks,o)}
            </div>
          </div>
        </div>
      `})}_renderTasks(e,t){const o=this.hass?.states[this._config.entity],r=o?.attributes.chorebot_templates||[];return e.map(e=>{const o="completed"===e.status,i=o?`#${this.shades.base}`:this._config?.hide_card_background?"transparent":"var(--card-background-color)",s=o?t:"var(--primary-text-color)",a=o?`#${this.shades.dark}`:"transparent",n=o?"white":"var(--divider-color)",d=o?"none":"2px solid var(--divider-color)";return j`
        <div class="todo-item-container" style="background: ${i}; color: ${s};">
          <div
            class="todo-item"
            @click=${()=>this._toggleTaskExpanded(e.uid)}
          >
            <div class="todo-content">
              <div class="todo-summary">
                ${e.summary}
                ${this._renderStreakIndicator(e)}
              </div>
              ${e.due||e.points_value||e.parent_uid?j`<div
                    class="todo-due-date"
                    style="color: ${fe(e)?"var(--error-color)":"inherit"}"
                  >
                    ${e.due?ge(new Date(e.due),e):""}
                    ${e.parent_uid?j`<ha-icon
                          icon="mdi:sync"
                          class="recurring-icon"
                        ></ha-icon>`:""}
                    ${this._renderPointsBadge(e)}
                  </div>`:""}
            </div>
            <div
              class="completion-circle"
              style="background: ${a}; border: ${d};"
              @click=${t=>this._handleCompletionClick(t,e)}
            >
              <ha-icon
                icon="mdi:check"
                style="color: ${n};"
              ></ha-icon>
            </div>
          </div>
          ${Le({task:e,templates:r,isExpanded:this._expandedTaskUid===e.uid,onEdit:()=>this._openEditDialog(e),onDelete:()=>this._confirmAndDeleteTask(e),shades:this.shades,textColor:this._config.task_text_color||"white"})}
        </div>
      `})}_renderPointsBadge(e){const t=this.hass?.states[this._config.entity],o=t?.attributes.chorebot_templates||[],r=this._config.task_text_color||"white";return He(e,o,this.shades,this.hass,!1!==this._config?.show_points,r)}_renderStreakIndicator(e){if(!e.parent_uid)return j``;const t=this.hass?.states[this._config.entity],o=(t?.attributes.chorebot_templates||[]).find(t=>t.uid===e.parent_uid);return!o||!o.streak_current||o.streak_current<=0?j``:j`
      <span class="streak-indicator">
        <ha-icon icon="mdi:fire"></ha-icon>
        <span>${o.streak_current}</span>
      </span>
    `}_getFilteredTasks(e){return be(e,!1!==this._config.show_dateless_tasks,this._config?.filter_section_id)}_toggleGroup(e){this._autoCollapseTimeouts.has(e)&&(clearTimeout(this._autoCollapseTimeouts.get(e)),this._autoCollapseTimeouts.delete(e));const t=this._groups.find(t=>t.name===e);t&&(t.isCollapsed=!t.isCollapsed,this.requestUpdate())}_checkAutoCollapse(e,t,o,r){const i=this._previousGroupProgress.get(e),s=i&&i.completed<i.total&&o&&!r;if(this._previousGroupProgress.set(e,{completed:t.completed,total:t.total}),s){this._autoCollapseTimeouts.has(e)&&clearTimeout(this._autoCollapseTimeouts.get(e));const t=window.setTimeout(()=>{const t=this._groups.find(t=>t.name===e);t&&(t.isCollapsed=!0,this.requestUpdate()),this._autoCollapseTimeouts.delete(e)},1500);this._autoCollapseTimeouts.set(e,t)}}_toggleTaskExpanded(e){this._expandedTaskUid===e?this._expandedTaskUid=null:this._expandedTaskUid=e}async _toggleTask(e,t){const o="completed"===e.status?"needs_action":"completed";if(await this.hass.callService("todo","update_item",{entity_id:this._config.entity,item:e.uid,status:o}),"completed"===o&&this._expandedTaskUid===e.uid&&(this._expandedTaskUid=null),"completed"===o&&t){this._playCompletionConfetti(t);const o=this._calculateTotalPointsAwarded(e);if(null!==o&&o>0){!function(e,t){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const o=document.createElement("div");if(o.textContent=`+${t}`,o.style.position="fixed",o.style.left=e.x-20+"px",o.style.top=e.y-30+"px",o.style.fontSize="28px",o.style.fontWeight="bold",o.style.color="white",o.style.textShadow="2px 2px 4px rgba(0, 0, 0, 0.8)",o.style.pointerEvents="none",o.style.zIndex="9999",o.style.animation="floatPoints 2s ease-out forwards",!document.getElementById("chorebot-points-animation-styles")){const e=document.createElement("style");e.id="chorebot-points-animation-styles",e.textContent="\n      @keyframes floatPoints {\n        0% {\n          transform: scale(0.5) translateY(0);\n          opacity: 1;\n        }\n        50% {\n          transform: scale(1.5) translateY(-30px);\n          opacity: 1;\n        }\n        100% {\n          transform: scale(1.5) translateY(-60px);\n          opacity: 0;\n        }\n      }\n    ",document.head.appendChild(e)}document.body.appendChild(o),setTimeout(()=>{o.remove()},2e3)}({x:t.x*window.innerWidth,y:t.y*window.innerHeight},o)}const r=this._areAllTasksComplete(),i=this._areAllDatedTasksComplete(),s=!!e.due;r?this._playAllCompleteStarShower():i&&s?this._playDatedTasksFireworks():this._isGroupComplete(e)&&this._playGroupFireworks()}}_handleCompletionClick(e,t){e.stopPropagation();const o=e.currentTarget.getBoundingClientRect(),r={x:(o.left+o.width/2)/window.innerWidth,y:(o.top+o.height/2)/window.innerHeight};this._toggleTask(t,r)}_playCompletionConfetti(e){Ue(e,this.shadesArray)}_isGroupComplete(e){const t=this.hass?.states[this._config.entity];if(!t)return!1;const o=this._getFilteredTasks(t),r=this._config.untagged_header||"Untagged",i=function(e,t="Untagged"){const o=new Map;for(const r of e){const e=r.tags||[];if(0===e.length)o.has(t)||o.set(t,[]),o.get(t).push(r);else for(const t of e)o.has(t)||o.set(t,[]),o.get(t).push(r)}return o}(o,r),s=e.tags||[],a=s.length>0?s:[r];for(const e of a){const t=i.get(e);if(!t)continue;const o=ve(t);if(o.total>0&&o.completed===o.total)return!0}return!1}_areAllTasksComplete(){const e=this.hass?.states[this._config.entity];if(!e)return!1;const t=ve(this._getFilteredTasks(e));return t.total>0&&t.completed===t.total}_areAllDatedTasksComplete(){const e=this.hass?.states[this._config.entity];if(!e)return!1;const t=ye(this._getFilteredTasks(e));return t.total>0&&t.completed===t.total}_playGroupFireworks(){Fe(this.shadesArray)}_playDatedTasksFireworks(){Fe(this.shadesArray)}_playAllCompleteStarShower(){Be(this.shadesArray)}_calculateTotalPointsAwarded(e){if(!e.points_value)return null;let t=e.points_value;if(e.parent_uid){const o=this.hass?.states[this._config.entity],r=(o?.attributes.chorebot_templates||[]).find(t=>t.uid===e.parent_uid);if(r?.streak_bonus_points&&r?.streak_bonus_interval){(r.streak_current+1)%r.streak_bonus_interval===0&&(t+=r.streak_bonus_points)}}return t}_openEditDialog(e){if(!this.hass||!this._config?.entity)return;const t=this.hass.states[this._config.entity];if(!t)return;const o=t.attributes.chorebot_templates||[];this._editingTask=Se(e,o),this._editDialogOpen=!0}_closeEditDialog(){this._editDialogOpen=!1,this._editingTask=null}_renderEditDialog(){const e=this.hass?.states[this._config.entity],t=e?.attributes.chorebot_sections||[],o=e?.attributes.chorebot_tags||[];return Me(this._editDialogOpen,this._editingTask,this.hass,t,o,this._saving,()=>this._closeEditDialog(),e=>this._formValueChanged(e),()=>this._saveTask(),()=>this._handleDeleteTask())}_formValueChanged(e){const t=e.detail.value;this._editingTask={...this._editingTask,...t},("has_due_date"in t||"is_all_day"in t||"has_recurrence"in t||"recurrence_frequency"in t)&&this.requestUpdate()}async _saveTask(){if(!this._editingTask||!this._editingTask.summary?.trim()||this._saving)return;this._saving=!0;const e={list_id:this._config.entity,uid:this._editingTask.uid,summary:this._editingTask.summary.trim()};if(this._editingTask.has_due_date&&this._editingTask.due_date){const t=!!this._editingTask.is_all_day,o=this._editingTask.due_time||"00:00";try{e.due=we(this._editingTask.due_date,o,t),e.is_all_day=t}catch(e){return console.error("Invalid date/time combination:",e),void(this._saving=!1)}}else!1===this._editingTask.has_due_date&&(e.due="",e.is_all_day=!1);this._editingTask.description&&(e.description=this._editingTask.description),this._editingTask.section_id&&(e.section_id=this._editingTask.section_id),void 0!==this._editingTask.tags&&(e.tags=this._editingTask.tags);const t=Ce(this._editingTask);null!==t?e.rrule=t:!1===this._editingTask.has_recurrence&&(e.rrule=""),void 0!==this._editingTask.points_value&&(e.points_value=this._editingTask.points_value),void 0!==this._editingTask.streak_bonus_points&&(e.streak_bonus_points=this._editingTask.streak_bonus_points),void 0!==this._editingTask.streak_bonus_interval&&(e.streak_bonus_interval=this._editingTask.streak_bonus_interval);!!this._editingTask.parent_uid&&(e.include_future_occurrences=!0),console.log("Calling chorebot.update_task with payload:",e);try{await this.hass.callService("chorebot","update_task",e),this._closeEditDialog()}catch(e){console.error("Error saving task:",e),alert("Failed to save task. Please try again.")}finally{this._saving=!1}}async _handleDeleteTask(){if(!this._editingTask||this._saving)return;const e=this._editingTask,t=e.has_recurrence||e.parent_uid;if(confirm(t?"Delete this recurring task? This will remove all future occurrences, but keep completed instances.":"Delete this task? This action cannot be undone.")){this._saving=!0;try{await this.hass.callService("todo","remove_item",{entity_id:this._config.entity,item:e.uid}),this._closeEditDialog(),this.dispatchEvent(new CustomEvent("hass-notification",{detail:{message:"Task deleted successfully"},bubbles:!0,composed:!0}))}catch(e){console.error("Error deleting task:",e),alert(`Failed to delete task: ${e}`)}finally{this._saving=!1}}}async _confirmAndDeleteTask(e){const t=e.rrule||e.parent_uid;confirm(t?"Delete this recurring task? This will remove all future occurrences, but keep completed instances.":"Delete this task? This action cannot be undone.")&&(await this.hass.callService("todo","remove_item",{entity_id:this._config.entity,item:e.uid}),this._expandedTaskUid===e.uid&&(this._expandedTaskUid=null))}_renderAddTaskButton(){if(!this._config?.show_add_task_button)return j``;const e=`#${this.shades.light}`,t=`color-mix(in srgb, #${this.shades.light} 20%, var(--card-background-color))`,o=`#${this.shades.light}`;return j`
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
    `}_openAddTaskDialog(){const e=this.hass?.states[this._config.entity],t=e?.attributes.chorebot_sections||[];this._newTask=this._createBlankTask(t),this._addTaskDialogOpen=!0}_closeAddTaskDialog(){this._addTaskDialogOpen=!1,this._newTask=null}_createBlankTask(e){let t;if(this._config.filter_section_id){let o=e.find(e=>e.id===this._config.filter_section_id);o||(o=e.find(e=>e.name.toLowerCase()===this._config.filter_section_id.toLowerCase())),o&&(t=o.id)}if(!t&&this._config.person_entity){const o=e.find(e=>e.person_id===this._config.person_entity);o&&(t=o.id)}return!t&&e.length>0&&(t=e.sort((e,t)=>t.sort_order-e.sort_order)[0].id),{uid:"",summary:"",status:"needs_action",has_due_date:!1,is_all_day:!1,due_date:void 0,due_time:void 0,description:"",section_id:t,tags:[],has_recurrence:!1,recurrence_frequency:"DAILY",recurrence_interval:1,recurrence_byweekday:[],recurrence_bymonthday:1,points_value:0,streak_bonus_points:0,streak_bonus_interval:0}}_renderAddTaskDialog(){const e=this.hass?.states[this._config.entity],t=e?.attributes.chorebot_sections||[],o=e?.attributes.chorebot_tags||[];return Me(this._addTaskDialogOpen,this._newTask,this.hass,t,o,this._savingNewTask,()=>this._closeAddTaskDialog(),e=>this._formValueChangedForNewTask(e),()=>this._saveNewTask(),void 0,"Add Task",!1)}_formValueChangedForNewTask(e){const t=e.detail.value;this._newTask={...this._newTask,...t},("has_due_date"in t||"is_all_day"in t||"has_recurrence"in t||"recurrence_frequency"in t)&&this.requestUpdate()}async _saveNewTask(){if(!this._newTask||!this._newTask.summary?.trim()||this._savingNewTask)return;this._savingNewTask=!0;const e={list_id:this._config.entity,summary:this._newTask.summary.trim()};if(this._newTask.has_due_date&&this._newTask.due_date){const t=!!this._newTask.is_all_day,o=this._newTask.due_time||"00:00";try{e.due=we(this._newTask.due_date,o,t),e.is_all_day=t}catch(e){return console.error("Invalid date/time combination:",e),void(this._savingNewTask=!1)}}this._newTask.description&&(e.description=this._newTask.description),this._newTask.section_id&&(e.section_id=this._newTask.section_id),void 0!==this._newTask.tags&&this._newTask.tags.length>0&&(e.tags=this._newTask.tags);const t=Ce(this._newTask);null!==t&&(e.rrule=t),void 0!==this._newTask.points_value&&this._newTask.points_value>0&&(e.points_value=this._newTask.points_value),null!==t&&(void 0!==this._newTask.streak_bonus_points&&this._newTask.streak_bonus_points>0&&(e.streak_bonus_points=this._newTask.streak_bonus_points),void 0!==this._newTask.streak_bonus_interval&&this._newTask.streak_bonus_interval>0&&(e.streak_bonus_interval=this._newTask.streak_bonus_interval));try{await this.hass.callService("chorebot","add_task",e),this._closeAddTaskDialog();const t=this.hass?.states[this._config.entity],o=t?.attributes.chorebot_sections||[];this._newTask=this._createBlankTask(o)}catch(e){console.error("Error adding task:",e),alert("Failed to add task. Please try again.")}finally{this._savingNewTask=!1}}static getStubConfig(){return{entity:"",show_dateless_tasks:!0,show_future_tasks:!1,filter_section_id:"",person_entity:"",hide_card_background:!1,accent_color:"",task_text_color:"",untagged_header:"Untagged",tag_group_order:[],show_add_task_button:!0}}static getConfigForm(){return{schema:[{name:"entity",required:!0,selector:{entity:{filter:{domain:"todo"}}}},{name:"show_dateless_tasks",default:!0,selector:{boolean:{}}},{name:"show_future_tasks",default:!1,selector:{boolean:{}}},{name:"filter_section_id",selector:{text:{}}},{name:"person_entity",selector:{entity:{filter:{domain:"person"}}}},{name:"hide_card_background",default:!1,selector:{boolean:{}}},{name:"accent_color",selector:{text:{}}},{name:"task_text_color",selector:{text:{}}},{name:"untagged_header",default:"Untagged",selector:{text:{}}},{name:"tag_group_order",selector:{select:{multiple:!0,custom_value:!0,options:[]}}},{name:"show_add_task_button",default:!0,selector:{boolean:{}}}],computeLabel:e=>({entity:"Todo Entity",show_dateless_tasks:"Show Tasks Without Due Date",show_future_tasks:"Show Future Tasks",filter_section_id:"Filter by Section",person_entity:"Filter by Person",hide_card_background:"Hide Card Background",accent_color:"Accent Color",task_text_color:"Task Text Color",untagged_header:"Untagged Tasks Header",tag_group_order:"Tag Display Order",show_add_task_button:"Show Add Task Button"}[e.name]||void 0),computeHelper:e=>({entity:"Select the ChoreBot todo entity to display",show_dateless_tasks:"Show tasks that do not have a due date",show_future_tasks:"Show tasks with future due dates in a collapsible 'Upcoming' section (collapsed by default)",filter_section_id:'Enter section name (e.g., "SECOND SECTION"). Leave empty to show all sections.',person_entity:"Optional: Filter to show only tasks assigned to this person. Also inherits their accent color if set.",hide_card_background:"Hide the card background and padding for a seamless look",accent_color:"Accent color for task items and headers (hex code or CSS variable like var(--primary-color))",task_text_color:"Text color for task items (hex code or CSS variable)",untagged_header:'Header text for tasks without tags (default: "Untagged")',tag_group_order:"Order to display tag groups. Tags not listed will appear alphabetically after these.",show_add_task_button:"Show the 'Add Task' button below tag groups for creating new tasks"}[e.name]||void 0)}}};je.styles=a`
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
  `,e([pe({attribute:!1})],je.prototype,"hass",void 0),e([ue()],je.prototype,"_config",void 0),e([ue()],je.prototype,"_editDialogOpen",void 0),e([ue()],je.prototype,"_editingTask",void 0),e([ue()],je.prototype,"_saving",void 0),e([ue()],je.prototype,"_groups",void 0),e([ue()],je.prototype,"_addTaskDialogOpen",void 0),e([ue()],je.prototype,"_newTask",void 0),e([ue()],je.prototype,"_savingNewTask",void 0),e([ue()],je.prototype,"_expandedTaskUid",void 0),je=e([ce("chorebot-grouped-card")],je),window.customCards=window.customCards||[],window.customCards.push({type:"chorebot-grouped-card",name:"ChoreBot Grouped Card",description:"Display and manage ChoreBot tasks grouped by tags",preview:!0}),console.info("%c CHOREBOT-GROUPED-CARD %c v0.1.0 ","color: white; background: #2196F3; font-weight: bold;","color: #2196F3; background: white; font-weight: bold;");let qe=class extends ne{constructor(){super(...arguments),this._dialogOpen=!1,this._newTask=null,this._saving=!1}setConfig(e){if(!e.entity)throw new Error("You need to define an entity");this._config={entity:e.entity,button_text:e.button_text||"Add Task",button_icon:e.button_icon||"mdi:plus",button_color:e.button_color||"var(--primary-color)",button_text_color:e.button_text_color||"white",button_size:e.button_size||"medium",hide_card_background:!0===e.hide_card_background,default_section_id:e.default_section_id,default_tags:e.default_tags||[]}}getCardSize(){return 1}render(){if(!this.hass||!this._config)return j`<ha-card>Loading...</ha-card>`;return this.hass.states[this._config.entity]?j`
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
            ${this._config.button_text?j`<span>${this._config.button_text}</span>`:""}
          </button>
        </div>
      </ha-card>

      ${this._renderDialog()}
    `:j`<ha-card>
        <div
          style="text-align: center; padding: 16px; color: var(--error-color);"
        >
          Entity not found: ${this._config.entity}
        </div>
      </ha-card>`}_openDialog(){const e=this.hass?.states[this._config.entity],t=e?.attributes.chorebot_sections||[];this._newTask=this._createBlankTask(t),this._dialogOpen=!0}_closeDialog(){this._dialogOpen=!1,this._newTask=null}_createBlankTask(e){let t;if(this._config.default_section_id){const o=e.find(e=>e.id===this._config.default_section_id);if(o)t=o.id;else{const o=e.find(e=>e.name.toLowerCase()===this._config.default_section_id.toLowerCase());o&&(t=o.id)}}else e.length>0&&(t=e.sort((e,t)=>t.sort_order-e.sort_order)[0].id);return{uid:"",summary:"",status:"needs_action",has_due_date:!1,is_all_day:!1,due_date:void 0,due_time:void 0,description:"",section_id:t,tags:this._config.default_tags||[],has_recurrence:!1,recurrence_frequency:"DAILY",recurrence_interval:1,recurrence_byweekday:[],recurrence_bymonthday:1}}_renderDialog(){const e=this.hass?.states[this._config.entity],t=e?.attributes.chorebot_sections||[],o=e?.attributes.chorebot_tags||[];return Me(this._dialogOpen,this._newTask,this.hass,t,o,this._saving,()=>this._closeDialog(),e=>this._formValueChanged(e),()=>this._saveTask(),void 0,"Add Task",!1)}_formValueChanged(e){const t=e.detail.value;this._newTask={...this._newTask,...t},("has_due_date"in t||"is_all_day"in t||"has_recurrence"in t||"recurrence_frequency"in t)&&this.requestUpdate()}async _saveTask(){if(!this._newTask||!this._newTask.summary?.trim()||this._saving)return;this._saving=!0;const e={list_id:this._config.entity,summary:this._newTask.summary.trim()};if(this._newTask.has_due_date&&this._newTask.due_date){const t=!!this._newTask.is_all_day,o=this._newTask.due_time||"00:00";try{e.due=we(this._newTask.due_date,o,t),e.is_all_day=t}catch(e){return console.error("Invalid date/time combination:",e),void(this._saving=!1)}}this._newTask.description&&(e.description=this._newTask.description),this._newTask.section_id&&(e.section_id=this._newTask.section_id),void 0!==this._newTask.tags&&this._newTask.tags.length>0&&(e.tags=this._newTask.tags);const t=Ce(this._newTask);null!==t&&(e.rrule=t),void 0!==this._newTask.points_value&&this._newTask.points_value>0&&(e.points_value=this._newTask.points_value),null!==t&&(void 0!==this._newTask.streak_bonus_points&&this._newTask.streak_bonus_points>0&&(e.streak_bonus_points=this._newTask.streak_bonus_points),void 0!==this._newTask.streak_bonus_interval&&this._newTask.streak_bonus_interval>0&&(e.streak_bonus_interval=this._newTask.streak_bonus_interval));try{await this.hass.callService("chorebot","add_task",e),this._closeDialog();const t=this.hass?.states[this._config.entity],o=t?.attributes.chorebot_sections||[];this._newTask=this._createBlankTask(o)}catch(e){console.error("Error adding task:",e),alert("Failed to add task. Please try again.")}finally{this._saving=!1}}static getStubConfig(){return{entity:"",button_text:"Add Task",button_icon:"mdi:plus",button_color:"var(--primary-color)",button_text_color:"white",button_size:"medium",hide_card_background:!1,default_section_id:"",default_tags:[]}}static getConfigForm(){return{schema:[{name:"entity",required:!0,selector:{entity:{filter:{domain:"todo"}}}},{name:"button_text",default:"Add Task",selector:{text:{}}},{name:"button_icon",default:"mdi:plus",selector:{icon:{}}},{name:"button_color",default:"var(--primary-color)",selector:{text:{}}},{name:"button_text_color",default:"white",selector:{text:{}}},{name:"button_size",default:"medium",selector:{select:{options:[{label:"Small",value:"small"},{label:"Medium",value:"medium"},{label:"Large",value:"large"}]}}},{name:"hide_card_background",default:!1,selector:{boolean:{}}},{name:"default_section_id",selector:{text:{}}},{name:"default_tags",selector:{select:{multiple:!0,custom_value:!0,options:[]}}}],computeLabel:e=>({entity:"Todo Entity",button_text:"Button Text",button_icon:"Button Icon",button_color:"Button Color",button_text_color:"Button Text Color",button_size:"Button Size",hide_card_background:"Hide Card Background",default_section_id:"Default Section",default_tags:"Default Tags"}[e.name]||void 0),computeHelper:e=>({entity:"Select the ChoreBot todo entity for new tasks",button_text:"Text displayed on the button",button_icon:"Icon displayed on the button",button_color:"Button background color (hex code or CSS variable like var(--primary-color))",button_text_color:"Button text color (hex code or CSS variable)",button_size:"Size of the button",hide_card_background:"Hide the card background and padding for a seamless look",default_section_id:'Default section for new tasks (enter section name like "Kyle" or leave empty for automatic)',default_tags:"Tags to pre-fill when creating new tasks"}[e.name]||void 0)}}};function Ye(e,t,o,r=64){const i=e.states[t],s=i?.attributes.entity_picture,a=Ge(e,t),n=a.split(" ").map(e=>e[0]).join("").toUpperCase().slice(0,2);const d=`width: ${r}px; height: ${r}px;`,c=Math.floor(.375*r);return s?j`
      <div class="person-avatar" style="${d}">
        <img src="${s}" alt="${a}" />
      </div>
    `:j`
    <div
      class="person-avatar initials"
      style="${d} font-size: ${c}px;"
    >
      ${n}
    </div>
  `}function We(e,t,o){const r=Ae(t);return j`
    <div class="person-points" style="color: ${o}">
      ${e.points_balance}
      ${r.icon?j`<ha-icon icon="${r.icon}"></ha-icon>`:""}
      ${r.text?r.text:""}
    </div>
  `}function Ge(e,t){const o=e.states[t];return o?.attributes.friendly_name||t.replace("person.","")}function Ve(e){const t=e.states["sensor.chorebot_points"];if(!t)return[];const o=t.attributes.people||{};return Object.values(o)}function Ke(e,t,o,r){const i=e.total>0?e.completed/e.total*100:0,s=o||"var(--text-primary-color)",a=`${e.completed} of ${e.total} tasks completed`;return j`
    <div
      class="progress-bar"
      style="background: #${t.lighter}"
      aria-label="${a}"
    >
      <div
        class="progress-bar-fill"
        style="width: ${i}%; background: #${t.darker}"
      ></div>
      <div class="progress-text" style="color: ${s}">
        ${e.completed}/${e.total}
      </div>
    </div>
  `}qe.styles=a`
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
  `,e([pe({attribute:!1})],qe.prototype,"hass",void 0),e([ue()],qe.prototype,"_config",void 0),e([ue()],qe.prototype,"_dialogOpen",void 0),e([ue()],qe.prototype,"_newTask",void 0),e([ue()],qe.prototype,"_saving",void 0),qe=e([ce("chorebot-add-task-card")],qe),window.customCards=window.customCards||[],window.customCards.push({type:"chorebot-add-task-card",name:"ChoreBot Add Task Card",description:"A button card for quickly adding new ChoreBot tasks",preview:!0}),console.info("%c CHOREBOT-ADD-TASK-CARD %c v0.1.0 ","color: white; background: #4CAF50; font-weight: bold;","color: #4CAF50; background: white; font-weight: bold;");let Ze=class extends ne{constructor(){super(...arguments),this.shades={lighter:"",light:"",base:"",dark:"",darker:""}}setConfig(e){if(!e.person_entity)throw new Error("person_entity is required");this._config={type:"custom:chorebot-person-points-card",person_entity:e.person_entity,hide_card_background:!0===e.hide_card_background,show_progress:!1!==e.show_progress,accent_color:e.accent_color||"",progress_text_color:e.progress_text_color||""}}willUpdate(e){if(super.willUpdate(e),(e.has("_config")||e.has("hass"))&&this._config&&this.hass){const e=Pe(this.hass,this._config.accent_color,this._config.person_entity);this.shades=Ee(e)}(e.has("hass")||e.has("_config"))&&this.hass&&this._config&&(this._progress=this._calculatePersonProgress())}_calculatePersonProgress(){if(!this.hass||!this._config)return{completed:0,total:0};const e=Object.values(this.hass.states).filter(e=>e.entity_id.startsWith("todo.")),t=e.filter(e=>e.entity_id.startsWith("todo.chorebot_"));return ye(ke(t,this._config.person_entity,!1))}static getStubConfig(){return{type:"custom:chorebot-person-points-card",person_entity:"",hide_card_background:!1,show_progress:!0,accent_color:"",progress_text_color:""}}static getConfigForm(){return{schema:[{name:"person_entity",required:!0,selector:{entity:{filter:{domain:"person"}}}},{name:"hide_card_background",default:!1,selector:{boolean:{}}},{name:"show_progress",default:!0,selector:{boolean:{}}},{name:"accent_color",selector:{text:{}}},{name:"progress_text_color",selector:{text:{}}}],computeLabel:e=>({person_entity:"Person Entity",hide_card_background:"Hide Card Background",show_progress:"Show Progress Bar",accent_color:"Accent Color",progress_text_color:"Progress Text Color"}[e.name]||void 0),computeHelper:e=>({person_entity:"Select the person entity to display points for",hide_card_background:"Hide the card background and padding for a seamless look",show_progress:"Display task completion progress below the person's name",accent_color:"Accent color for progress bar and points text (hex code or CSS variable like var(--primary-color))",progress_text_color:"Text color for progress label (hex code or CSS variable)"}[e.name]||void 0)}}getCardSize(){return 1}render(){if(!this.hass||!this._config)return j``;const e=this.hass.states["sensor.chorebot_points"];if(!e)return j`<ha-card>
        <div class="error-message">
          ChoreBot Points sensor not found. Make sure the integration is set up.
        </div>
      </ha-card>`;const t=this.hass.states[this._config.person_entity];if(!t)return j`<ha-card>
        <div class="error-message">
          Person entity not found. Please check your configuration.
        </div>
      </ha-card>`;const o=(e.attributes.people||{})[this._config.person_entity];return o?j`
      <ha-card
        class="${this._config.hide_card_background?"no-background":""}"
      >
        ${this._renderPersonDisplay(t,o)}
      </ha-card>
    `:j`<ha-card>
        <div class="error-message">
          Person not found in points system. Complete tasks to earn points.
        </div>
      </ha-card>`}_renderPersonDisplay(e,t){const o=Ge(this.hass,this._config.person_entity);return j`
      <div class="person-container">
        <div class="person-left">
          ${Ye(this.hass,this._config.person_entity,0,64)}
        </div>
        <div class="person-info">
          <div class="person-header">
            <div class="person-name">${o}</div>
            ${We(t,this.hass,`#${this.shades.base}`)}
          </div>
          ${this._config.show_progress&&this._progress?this._renderProgressBar(this._progress):""}
        </div>
      </div>
    `}_renderProgressBar(e){return Ke(e,this.shades,this._config.progress_text_color)}};Ze.styles=a`
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
  `,e([pe({attribute:!1})],Ze.prototype,"hass",void 0),e([ue()],Ze.prototype,"_config",void 0),e([ue()],Ze.prototype,"_progress",void 0),Ze=e([ce("chorebot-person-points-card")],Ze),window.customCards=window.customCards||[],window.customCards.push({type:"chorebot-person-points-card",name:"ChoreBot Person Points Card",description:"Display a person's avatar and points balance",preview:!0}),console.info("%c CHOREBOT-PERSON-POINTS-CARD %c v0.1.0 ","color: white; background: #FF9800; font-weight: bold;","color: #FF9800; background: white; font-weight: bold;");let Xe=class extends ne{constructor(){super(...arguments),this._redeeming=null,this._showConfirmModal=!1,this._showAddRewardModal=!1,this._pendingRedemption=null,this._rewardFormData={name:"",cost:50,icon:"mdi:gift",description:""},this._showEditRewardModal=!1,this._editingRewardId=null,this._rewardFormSchema=[{name:"name",required:!0,selector:{text:{}}},{name:"cost",required:!0,selector:{number:{min:1,max:1e4,mode:"box"}}},{name:"icon",selector:{icon:{}}},{name:"description",selector:{text:{multiline:!0}}}],this._computeRewardFieldLabel=e=>{const t=Ae(this.hass);return{name:"Name",cost:`Cost (${t.text?t.text.charAt(0).toUpperCase()+t.text.slice(1):"Points"})`,icon:"Icon",description:"Description (Optional)"}[e.name]||e.name},this._computeRewardFieldHelper=e=>({cost:`Cost between 1 and 10,000 ${Ae(this.hass).text||"points"}`,icon:"Use Material Design Icons (e.g., mdi:gift, mdi:ice-cream)"}[e.name]||""),this._handleRewardFormChange=e=>{this._rewardFormData=e.detail.value}}setConfig(e){if(!e.person_entity)throw new Error("person_entity is required");this._config={type:"custom:chorebot-rewards-card",person_entity:e.person_entity,hide_card_background:!0===e.hide_card_background,show_disabled_rewards:!0===e.show_disabled_rewards,sort_by:e.sort_by||"cost",show_add_reward_button:!1!==e.show_add_reward_button,accent_color:e.accent_color||""}}static getStubConfig(){return{type:"custom:chorebot-rewards-card",person_entity:"person.example",hide_card_background:!1,show_disabled_rewards:!1,sort_by:"cost",show_add_reward_button:!0,accent_color:""}}getCardSize(){return 3}static getConfigForm(){return{schema:[{name:"person_entity",required:!0,selector:{entity:{domain:"person"}}},{name:"hide_card_background",default:!1,selector:{boolean:{}}},{name:"show_disabled_rewards",default:!1,selector:{boolean:{}}},{name:"sort_by",default:"cost",selector:{select:{options:[{label:"Cost (Low to High)",value:"cost"},{label:"Name (A-Z)",value:"name"},{label:"Date Created (Oldest First)",value:"created"}]}}},{name:"show_add_reward_button",default:!0,selector:{boolean:{}}},{name:"accent_color",selector:{text:{}}}],computeLabel:e=>({person_entity:"Person Entity",hide_card_background:"Hide Card Background",show_disabled_rewards:"Show Disabled Rewards",sort_by:"Sort Rewards By",show_add_reward_button:"Show Add Reward Button",accent_color:"Accent Color"}[e.name]||void 0),computeHelper:e=>({person_entity:"Select the person whose rewards to display",hide_card_background:"Hide the card background and padding for a seamless look",show_disabled_rewards:"Include rewards that have been disabled in the grid",sort_by:"Choose how to sort the rewards in the grid",show_add_reward_button:"Show the 'Add Reward' card for creating new rewards",accent_color:"Accent color for reward icons and buttons (hex code or CSS variable like var(--primary-color))"}[e.name]||void 0)}}render(){if(!this.hass||!this._config)return j`<ha-card>Loading...</ha-card>`;if(!this.hass.states[this._config.person_entity])return j`<ha-card>
        <div class="error-state">
          Person entity "${this._config.person_entity}" not found. Please check
          your configuration.
        </div>
      </ha-card>`;const e=this.hass.states["sensor.chorebot_points"];if(!e)return j`<ha-card>
        <div class="empty-state">
          ChoreBot Points sensor not found. Make sure the integration is set up.
        </div>
      </ha-card>`;const t=e.attributes.people||{},o=e.attributes.rewards||[];let r="var(--primary-color)";if(this._config.person_entity){const e=t[this._config.person_entity];e?.accent_color&&(r=e.accent_color)}return this._config.accent_color&&(r=this._config.accent_color),this.style.setProperty("--accent-color",r),j`
      <ha-card
        class="${this._config.hide_card_background?"no-background":""}"
      >
        ${this._renderRewardsGrid(o,t)}
      </ha-card>
      ${this._showConfirmModal?this._renderConfirmModal(t,o):""}
      ${this._showAddRewardModal?this._renderAddRewardModal():""}
      ${this._showEditRewardModal?this._renderEditRewardModal():""}
    `}_renderConfirmModal(e,t){if(!this._pendingRedemption||!this._config)return"";const{personId:o,rewardId:r}=this._pendingRedemption,i=e[o],s=t.find(e=>e.id===r);if(!i||!s)return"";const a=Ge(this.hass,o),n=i.points_balance-s.cost,d=i.points_balance>=s.cost,c=s.enabled&&d,l=Ae(this.hass);return j`
      <div class="modal-overlay" @click="${this._cancelRedemption}">
        <div
          class="modal-content"
          @click="${e=>e.stopPropagation()}"
        >
          <div class="modal-header">
            ${c?"Are you sure?":"Reward Details"}
            <button
              class="edit-button"
              @click="${()=>this._handleEditButtonClick(s.id)}"
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
                <span class="modal-info-value">${s.name}</span>
              </div>
              <div class="modal-info-row">
                <span class="modal-info-label">Cost:</span>
                <span class="modal-info-value"
                  >${s.cost}
                  ${l.icon?j`<ha-icon icon="${l.icon}"></ha-icon>`:""}
                  ${l.text?l.text:""}</span
                >
              </div>
              <div class="modal-info-row">
                <span class="modal-info-label">Current Balance:</span>
                <span class="modal-info-value"
                  >${i.points_balance}
                  ${l.icon?j`<ha-icon icon="${l.icon}"></ha-icon>`:""}
                  ${l.text?l.text:""}</span
                >
              </div>
              <div class="modal-info-row">
                <span class="modal-info-label">Remaining Balance:</span>
                <span
                  class="modal-info-value"
                  style="color: ${n<0?"var(--error-color)":"inherit"}"
                  >${n}
                  ${l.icon?j`<ha-icon icon="${l.icon}"></ha-icon>`:""}
                  ${l.text?l.text:""}</span
                >
              </div>
              ${s.enabled?"":j`<div
                    style="margin-top: 12px; color: var(--warning-color); font-size: 14px; text-align: center;"
                  >
                    This reward is currently disabled.
                  </div>`}
              ${d?"":j`<div
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
    `}_renderAddRewardModal(){return this._config?j`
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
    `:""}_renderEditRewardModal(){return this._config?j`
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
    `:""}_renderRewardsGrid(e,t){if(!this._config)return"";const o=e.filter(e=>e.person_id===this._config.person_entity),r=o.filter(e=>this._config.show_disabled_rewards||e.enabled),i=this._sortRewards(r),s=t[this._config.person_entity];return 0!==i.length||this._config.show_add_reward_button?j`
      <div class="rewards-grid">
        ${i.map(e=>this._renderRewardCard(e,s))}
        ${this._config.show_add_reward_button?this._renderAddRewardCard():""}
      </div>
    `:j`<div class="empty-state">
        No rewards configured yet. Use the "Add Reward" button or
        <code>chorebot.manage_reward</code> service to create rewards.
      </div>`}_renderRewardCard(e,t){const o=!!t&&t.points_balance>=e.cost,r=!e.enabled||!o,i=Ae(this.hass);return j`
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
              ${i.icon?j`<ha-icon icon="${i.icon}"></ha-icon>`:""}
              ${i.text?i.text:""}
            </div>
          </div>
          ${e.description?j`<div class="reward-description">${e.description}</div>`:""}
        </div>
      </div>
    `}_renderAddRewardCard(){return j`
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
    `}_sortRewards(e){const t=[...e];switch(this._config.sort_by){case"name":return t.sort((e,t)=>e.name.localeCompare(t.name));case"created":return t.sort((e,t)=>new Date(e.created||0).getTime()-new Date(t.created||0).getTime());default:return t.sort((e,t)=>e.cost-t.cost)}}_handleRewardClick(e,t){this._pendingRedemption={personId:this._config.person_entity,rewardId:e.id},this._showConfirmModal=!0}_cancelRedemption(){this._showConfirmModal=!1,this._pendingRedemption=null}async _confirmRedemption(){if(!this._pendingRedemption)return;const{personId:e,rewardId:t}=this._pendingRedemption;this._showConfirmModal=!1,this._pendingRedemption=null,this._redeeming=t;try{await this.hass.callService("chorebot","redeem_reward",{person_id:e,reward_id:t}),this._showRedemptionSuccess()}catch(e){const t=e.message||"Failed to redeem reward. Please try again.";alert(t)}finally{this._redeeming=null}}_showRedemptionSuccess(){Be(Ie(this._config.accent_color||getComputedStyle(this).getPropertyValue("--primary-color")||"#03a9f4"),3e3)}_openAddRewardModal(){this._rewardFormData={name:"",cost:50,icon:"mdi:gift",description:""},this._showAddRewardModal=!0}_closeAddRewardModal(){this._showAddRewardModal=!1}async _createReward(){if(!this._config)return;const{name:e,cost:t,icon:o,description:r}=this._rewardFormData;if(e.trim())try{await this.hass.callService("chorebot","manage_reward",{name:e.trim(),cost:Math.max(1,Math.min(1e4,t)),icon:o||"mdi:gift",description:r.trim(),person_id:this._config.person_entity}),this._closeAddRewardModal()}catch(e){const t=e.message||"Failed to create reward. Please try again.";alert(t)}else alert("Reward name is required")}_openEditRewardModal(e){if(!this.hass)return;const t=this.hass.states["sensor.chorebot_points"];if(!t)return;const o=(t.attributes.rewards||[]).find(t=>t.id===e);o?(this._rewardFormData={name:o.name,cost:o.cost,icon:o.icon,description:o.description||""},this._editingRewardId=e,this._showEditRewardModal=!0):alert("Reward not found")}_closeEditRewardModal(){this._showEditRewardModal=!1,this._editingRewardId=null,this._rewardFormData={name:"",cost:50,icon:"mdi:gift",description:""}}_handleEditButtonClick(e){this._showConfirmModal=!1,this._pendingRedemption=null,this._openEditRewardModal(e)}async _updateReward(){if(!this._config||!this._editingRewardId)return;const{name:e,cost:t,icon:o,description:r}=this._rewardFormData;if(e.trim())try{await this.hass.callService("chorebot","manage_reward",{reward_id:this._editingRewardId,name:e.trim(),cost:Math.max(1,Math.min(1e4,t)),icon:o||"mdi:gift",description:r.trim(),person_id:this._config.person_entity}),this._closeEditRewardModal()}catch(e){const t=e.message||"Failed to update reward. Please try again.";alert(t)}else alert("Reward name is required")}async _deleteReward(){if(this._config&&this._editingRewardId&&confirm("Delete this reward? This action cannot be undone."))try{await this.hass.callService("chorebot","delete_reward",{reward_id:this._editingRewardId}),this._closeEditRewardModal()}catch(e){const t=e.message||"Failed to delete reward. Please try again.";alert(t)}}};function Je(e,t,o,r,i,s,a,n,d,c,l=!1){const h=t?r.find(e=>e.entity_id===t):null;let p="var(--primary-color)";return h?.accent_color&&(p=h.accent_color),j`
    <div
      class="person-section ${l?"no-background":""} ${o?"dropdown-open":""}"
    >
      <!-- Person Header (Collapsed State) -->
      <div class="person-header" @click=${d}>
        <div class="person-container">
          <div class="person-left">
            ${Ye(e,t,0,64)}
          </div>
          <div class="person-info">
            <div class="person-header-row">
              <div class="person-name">
                ${Ge(e,t)}
              </div>
              <div class="person-points-and-chevron">
                ${We(h,e,p)}
                <ha-icon
                  icon="mdi:chevron-down"
                  class="dropdown-chevron ${o?"open":""}"
                ></ha-icon>
              </div>
            </div>
            ${i&&s?Ke(s,a,n):""}
          </div>
        </div>
      </div>

      <!-- Person Dropdown (Expanded State) -->
      <div class="person-dropdown ${o?"open":""}">
        <div class="person-dropdown-inner">
          ${r.map(o=>{const r=o.entity_id===t,i=Ae(e);return j`
              <div
                class="person-dropdown-item ${r?"selected":""}"
                @click=${()=>c(o.entity_id)}
              >
                ${Ye(e,o.entity_id,0,40)}
                <div class="person-dropdown-info">
                  <div class="person-dropdown-name">
                    ${Ge(e,o.entity_id)}
                  </div>
                  <div class="person-dropdown-points">
                    ${o.points_balance}
                    ${i.icon?j`<ha-icon icon="${i.icon}"></ha-icon>`:""}
                    ${i.text}
                  </div>
                </div>
                ${r?j`<ha-icon icon="mdi:check"></ha-icon>`:""}
              </div>
            `})}
        </div>
      </div>
    </div>
  `}function Qe(e,t){let o=function(e){const t=e.user?.name;if(!t)return null;const o=Object.values(e.states).filter(e=>e.entity_id.startsWith("person.")),r=o.find(e=>e.attributes.friendly_name?.toLowerCase()===t.toLowerCase());return r?.entity_id||null}(e);if(!o&&t&&(o=t),!o){const t=Ve(e);if(t.length>0){const e=t.sort((e,t)=>e.entity_id.localeCompare(t.entity_id));o=e[0].entity_id}}return o||""}Xe.styles=a`
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
  `,e([pe({attribute:!1})],Xe.prototype,"hass",void 0),e([ue()],Xe.prototype,"_config",void 0),e([ue()],Xe.prototype,"_redeeming",void 0),e([ue()],Xe.prototype,"_showConfirmModal",void 0),e([ue()],Xe.prototype,"_showAddRewardModal",void 0),e([ue()],Xe.prototype,"_pendingRedemption",void 0),e([ue()],Xe.prototype,"_rewardFormData",void 0),e([ue()],Xe.prototype,"_showEditRewardModal",void 0),e([ue()],Xe.prototype,"_editingRewardId",void 0),Xe=e([ce("chorebot-rewards-card")],Xe),window.customCards=window.customCards||[],window.customCards.push({type:"chorebot-rewards-card",name:"ChoreBot Rewards Card",description:"Display person-specific rewards with inline creation and redemption",preview:!0}),console.info("%c CHOREBOT-REWARDS-CARD %c v0.1.0 ","color: white; background: #9C27B0; font-weight: bold;","color: #9C27B0; background: white; font-weight: bold;");let et=class extends ne{constructor(){super(...arguments),this._selectedPersonId="",this._dropdownOpen=!1,this._groups=[],this._editDialogOpen=!1,this._editingTask=null,this._saving=!1,this._expandedTaskUid=null,this.shades={lighter:"",light:"",base:"",dark:"",darker:""},this.shadesArray=[]}setConfig(e){if(!e.entity)throw new Error("You must specify an entity (todo list)");if(!e.entity.startsWith("todo."))throw new Error("Entity must be a todo list (todo.*)");this._config={show_progress:!0,show_dateless_tasks:!0,show_future_tasks:!1,show_points:!0,show_add_task_button:!0,show_all_people:!1,hide_person_background:!1,hide_tasks_background:!1,untagged_header:"Untagged",...e}}static getStubConfig(){return{type:"custom:chorebot-person-grouped-card",entity:"",default_person_entity:"",show_all_people:!1,show_progress:!0,hide_person_background:!1,hide_tasks_background:!1,accent_color:"",show_dateless_tasks:!0,show_future_tasks:!1,show_points:!0,show_add_task_button:!0,untagged_header:"Untagged",tag_group_order:[],filter_section_id:""}}static getConfigForm(){return{schema:[{name:"entity",required:!0,selector:{entity:{filter:{domain:"todo"}}}},{name:"default_person_entity",selector:{entity:{filter:{domain:"person"}}}},{name:"show_all_people",default:!1,selector:{boolean:{}}},{name:"show_progress",default:!0,selector:{boolean:{}}},{name:"show_dateless_tasks",default:!0,selector:{boolean:{}}},{name:"show_future_tasks",default:!1,selector:{boolean:{}}},{name:"show_points",default:!0,selector:{boolean:{}}},{name:"show_add_task_button",default:!0,selector:{boolean:{}}},{name:"filter_section_id",selector:{text:{}}},{name:"hide_person_background",default:!1,selector:{boolean:{}}},{name:"hide_tasks_background",default:!1,selector:{boolean:{}}},{name:"accent_color",selector:{text:{}}},{name:"task_text_color",selector:{text:{}}},{name:"progress_text_color",selector:{text:{}}},{name:"untagged_header",default:"Untagged",selector:{text:{}}},{name:"tag_group_order",selector:{select:{multiple:!0,custom_value:!0,options:[]}}}],computeLabel:e=>({entity:"Todo Entity",default_person_entity:"Default Person",show_all_people:"Show All People",show_progress:"Show Progress Bar",show_dateless_tasks:"Show Tasks Without Due Date",show_future_tasks:"Show Future Tasks",show_points:"Show Points Badges",show_add_task_button:"Show Add Task Button",filter_section_id:"Filter by Section",hide_person_background:"Hide Person Background",hide_tasks_background:"Hide Tasks Background",accent_color:"Accent Color",task_text_color:"Task Text Color",progress_text_color:"Progress Text Color",untagged_header:"Untagged Tasks Header",tag_group_order:"Tag Display Order"}[e.name]||void 0),computeHelper:e=>({entity:"Select the ChoreBot todo entity to display",default_person_entity:"Override auto-detected person. Leave empty to auto-detect logged-in user or use first person alphabetically.",show_all_people:"Show all people in dropdown, or only people with tasks in this list",show_progress:"Display progress bar showing completed/total tasks for selected person",show_dateless_tasks:"Show tasks that do not have a due date",show_future_tasks:"Show tasks with future due dates in a collapsible 'Upcoming' section (collapsed by default)",show_points:"Display points badges on task items",show_add_task_button:"Show the 'Add Task' button below tag groups for creating new tasks",filter_section_id:'Additional section filter (e.g., "Morning Routine"). Leave empty to show all sections for selected person.',hide_person_background:"Hide the person section background and shadow for a seamless look",hide_tasks_background:"Hide the tasks section background and shadow for a seamless look",accent_color:"Override accent color for person display and tag headers (hex code or CSS variable). By default inherits from person's profile.",task_text_color:"Text color for task items (hex code or CSS variable)",progress_text_color:"Text color for progress label (hex code or CSS variable)",untagged_header:'Header text for tasks without tags (default: "Untagged")',tag_group_order:"Order to display tag groups. Tags not listed will appear alphabetically after these."}[e.name]||void 0)}}willUpdate(e){if(e.has("hass")&&""===this._selectedPersonId&&(this._selectedPersonId=Qe(this.hass,this._config?.default_person_entity)),(e.has("_config")||e.has("_selectedPersonId"))&&this._config){const e=Pe(this.hass,this._config.accent_color,this._selectedPersonId);this.shades=Ee(e),this.shadesArray=[this.shades.lighter,this.shades.light,this.shades.base,this.shades.dark,this.shades.darker]}(e.has("hass")||e.has("_config")||e.has("_selectedPersonId"))&&this._updateGroups()}render(){if(!this.hass||!this._config)return j``;if(!this._selectedPersonId)return j`
        <ha-card>
          <div class="error-message">
            Please select a person. No people found with ChoreBot access.
          </div>
        </ha-card>
      `;const e=this._getAvailablePeople(),t=this._config.show_progress?this._computeProgress():void 0;return j`
      <div class="card-container">
        ${Je(this.hass,this._selectedPersonId,this._dropdownOpen,e,this._config.show_progress??!0,t,this.shades,this._config.progress_text_color,()=>this._toggleDropdown(),e=>this._selectPerson(e),this._config.hide_person_background??!1)}

        <div class="tasks-section ${this._config.hide_tasks_background?"no-background":""}">
          ${this._renderGroupedTasks()}
        </div>
      </div>

      ${this._renderEditDialog()}
    `}_computeProgress(){const e=Object.values(this.hass.states).filter(e=>e.entity_id.startsWith("todo.chorebot_"));return ye(ke(e,this._selectedPersonId,!1))}_getAvailablePeople(){const e=Ve(this.hass);if(this._config.show_all_people)return e;const t=this.hass?.states[this._config.entity],o=t?.attributes.chorebot_tasks||[],r=new Set;for(const e of o)e.computed_person_id&&r.add(e.computed_person_id);return e.filter(e=>r.has(e.entity_id))}_toggleDropdown(){this._dropdownOpen=!this._dropdownOpen}_selectPerson(e){this._selectedPersonId=e,this._dropdownOpen=!1}_updateGroups(){if(!this.hass||!this._config)return;const e=this.hass.states[this._config.entity];if(!e)return;let t=$e(e,!1!==this._config.show_dateless_tasks,!0===this._config.show_future_tasks,this._config.untagged_header||"Untagged","Upcoming",this._config.filter_section_id,this._selectedPersonId);t=xe(t,this._config.tag_group_order,this._config.untagged_header,"Upcoming"),this._groups=t.map(e=>({...e,isCollapsed:this._findExistingCollapseState(e.name)}))}_findExistingCollapseState(e){const t=this._groups.find(t=>t.name===e);return void 0!==t?t.isCollapsed:"Upcoming"===e}_renderGroupedTasks(){return 0===this._groups.length?j`<div class="empty-state">No tasks for this person</div>`:j`
      <div class="tag-groups">
        ${this._renderAllGroups(this._groups)}
      </div>
      ${this._config.show_add_task_button?this._renderAddTaskButton():""}
    `}_renderAllGroups(e){return e.map(e=>{const t=ve(e.tasks),o=this._config.task_text_color||"white",r=e.isCollapsed,i=t.completed===t.total,s=r&&i,a=t.total>0?t.completed/t.total*100:0;return j`
        <div class="tag-group-container ${r?"collapsed":""}">
          <div
            class="tag-group-header ${r?"collapsed":""}"
            style="background: #${this.shades.light}; color: ${o}; --progress-width: ${a}%; --darker-color: #${this.shades.dark};"
            @click=${()=>this._toggleGroup(e.name)}
          >
            <div class="tag-group-header-title">${e.name}</div>
            <div class="tag-group-header-progress">
              ${s?j`<ha-icon
                    icon="mdi:check"
                    style="color: ${o}; --mdi-icon-size: 20px;"
                  ></ha-icon>`:j`${t.completed}/${t.total}`}
            </div>
          </div>
          <div class="tag-group-tasks ${r?"collapsed":""}">
            <div class="tag-group-tasks-inner">
              ${this._renderTasks(e.tasks,o)}
            </div>
          </div>
        </div>
      `})}_renderTasks(e,t){const o=this.hass?.states[this._config.entity],r=o?.attributes.chorebot_templates||[];return e.map(e=>{const o="completed"===e.status,i=o?`#${this.shades.base}`:this._config?.hide_tasks_background?"transparent":"var(--card-background-color)",s=o?t:"var(--primary-text-color)",a=o?`#${this.shades.dark}`:"transparent",n=o?"white":"var(--divider-color)",d=o?"none":"2px solid var(--divider-color)";return j`
        <div class="todo-item-container" style="background: ${i}; color: ${s};">
          <div
            class="todo-item"
            @click=${()=>this._toggleTaskExpanded(e.uid)}
          >
            <div class="todo-content">
              <div class="todo-summary">
                ${e.summary}
                ${this._renderStreakIndicator(e)}
              </div>
              ${e.due||e.points_value||e.parent_uid?j`<div
                    class="todo-due-date"
                    style="color: ${fe(e)?"var(--error-color)":"inherit"}"
                  >
                    ${e.due?ge(new Date(e.due),e):""}
                    ${e.parent_uid?j`<ha-icon
                          icon="mdi:sync"
                          class="recurring-icon"
                        ></ha-icon>`:""}
                    ${this._renderPointsBadge(e)}
                  </div>`:""}
            </div>
            <div
              class="completion-circle"
              style="background: ${a}; border: ${d};"
              @click=${t=>this._handleCompletionClick(t,e)}
            >
              <ha-icon
                icon="mdi:check"
                style="color: ${n};"
              ></ha-icon>
            </div>
          </div>
          ${Le({task:e,templates:r,isExpanded:this._expandedTaskUid===e.uid,onEdit:()=>this._openEditDialog(e),onDelete:()=>this._confirmAndDeleteTask(e),shades:this.shades,textColor:this._config.task_text_color||"white"})}
        </div>
      `})}_renderPointsBadge(e){const t=this.hass?.states[this._config.entity],o=t?.attributes.chorebot_templates||[],r=this._config.task_text_color||"white";return He(e,o,this.shades,this.hass,!1!==this._config?.show_points,r)}_renderStreakIndicator(e){if(!e.parent_uid)return j``;const t=this.hass?.states[this._config.entity],o=(t?.attributes.chorebot_templates||[]).find(t=>t.uid===e.parent_uid);return!o||!o.streak_current||o.streak_current<=0?j``:j`
      <span class="streak-indicator">
        <ha-icon icon="mdi:fire"></ha-icon>
        <span>${o.streak_current}</span>
      </span>
    `}_renderAddTaskButton(){if(!this._config?.show_add_task_button)return j``;const e=`#${this.shades.light}`,t=`color-mix(in srgb, #${this.shades.light} 20%, var(--card-background-color))`,o=`#${this.shades.light}`;return j`
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
    `}_toggleGroup(e){const t=this._groups.find(t=>t.name===e);t&&(t.isCollapsed=!t.isCollapsed,this.requestUpdate())}_toggleTaskExpanded(e){this._expandedTaskUid===e?this._expandedTaskUid=null:this._expandedTaskUid=e}async _toggleTask(e,t){const o="completed"===e.status?"needs_action":"completed";await this.hass.callService("todo","update_item",{entity_id:this._config.entity,item:e.uid,status:o}),"completed"===o&&this._expandedTaskUid===e.uid&&(this._expandedTaskUid=null),"completed"===o&&t&&Ue(t,this.shadesArray)}_handleCompletionClick(e,t){e.stopPropagation();const o=e.currentTarget.getBoundingClientRect(),r={x:(o.left+o.width/2)/window.innerWidth,y:(o.top+o.height/2)/window.innerHeight};this._toggleTask(t,r)}_openEditDialog(e){if(!this.hass||!this._config?.entity)return;const t=this.hass.states[this._config.entity];if(!t)return;const o=t.attributes.chorebot_templates||[];this._editingTask=Se(e,o),this._editDialogOpen=!0}_closeEditDialog(){this._editDialogOpen=!1,this._editingTask=null}_renderEditDialog(){const e=this.hass?.states[this._config.entity],t=e?.attributes.chorebot_sections||[],o=e?.attributes.chorebot_tags||[];return Me(this._editDialogOpen,this._editingTask,this.hass,t,o,this._saving,()=>this._closeEditDialog(),e=>this._formValueChanged(e),()=>this._saveTask(),()=>this._handleDeleteTask())}_formValueChanged(e){const t=e.detail.value;this._editingTask={...this._editingTask,...t},("has_due_date"in t||"is_all_day"in t||"has_recurrence"in t||"recurrence_frequency"in t)&&this.requestUpdate()}async _saveTask(){if(!this._editingTask||!this._editingTask.summary?.trim()||this._saving)return;this._saving=!0;const e={list_id:this._config.entity,uid:this._editingTask.uid,summary:this._editingTask.summary.trim()};if(this._editingTask.has_due_date&&this._editingTask.due_date){const t=!!this._editingTask.is_all_day,o=this._editingTask.due_time||"00:00";try{e.due=we(this._editingTask.due_date,o,t),e.is_all_day=t}catch(e){return console.error("Invalid date/time combination:",e),void(this._saving=!1)}}else!1===this._editingTask.has_due_date&&(e.due="",e.is_all_day=!1);this._editingTask.description&&(e.description=this._editingTask.description),this._editingTask.section_id&&(e.section_id=this._editingTask.section_id),void 0!==this._editingTask.tags&&(e.tags=this._editingTask.tags);const t=Ce(this._editingTask);null!==t?e.rrule=t:!1===this._editingTask.has_recurrence&&(e.rrule=""),void 0!==this._editingTask.points_value&&(e.points_value=this._editingTask.points_value),void 0!==this._editingTask.streak_bonus_points&&(e.streak_bonus_points=this._editingTask.streak_bonus_points),void 0!==this._editingTask.streak_bonus_interval&&(e.streak_bonus_interval=this._editingTask.streak_bonus_interval);!!this._editingTask.parent_uid&&(e.include_future_occurrences=!0);try{await this.hass.callService("chorebot","update_task",e),this._closeEditDialog()}catch(e){console.error("Error saving task:",e),alert("Failed to save task. Please try again.")}finally{this._saving=!1}}async _handleDeleteTask(){if(!this._editingTask||this._saving)return;const e=this._editingTask,t=e.has_recurrence||e.parent_uid;if(confirm(t?"Delete this recurring task? This will remove all future occurrences, but keep completed instances.":"Delete this task? This action cannot be undone.")){this._saving=!0;try{await this.hass.callService("todo","remove_item",{entity_id:this._config.entity,item:e.uid}),this._closeEditDialog()}catch(e){console.error("Error deleting task:",e),alert(`Failed to delete task: ${e}`)}finally{this._saving=!1}}}async _confirmAndDeleteTask(e){const t=e.rrule||e.parent_uid;confirm(t?"Delete this recurring task? This will remove all future occurrences, but keep completed instances.":"Delete this task? This action cannot be undone.")&&(await this.hass.callService("todo","remove_item",{entity_id:this._config.entity,item:e.uid}),this._expandedTaskUid===e.uid&&(this._expandedTaskUid=null))}_openAddTaskDialog(){const e=this.hass?.states[this._config.entity],t=e?.attributes.chorebot_sections||[];this._editingTask=this._createBlankTask(t),this._editDialogOpen=!0}_createBlankTask(e){let t;if(this._config.filter_section_id){let o=e.find(e=>e.id===this._config.filter_section_id);o||(o=e.find(e=>e.name.toLowerCase()===this._config.filter_section_id.toLowerCase())),o&&(t=o.id)}if(!t&&this._selectedPersonId){const o=e.find(e=>e.person_id===this._selectedPersonId);o&&(t=o.id)}return!t&&e.length>0&&(t=e.sort((e,t)=>t.sort_order-e.sort_order)[0].id),{uid:"",summary:"",status:"needs_action",has_due_date:!1,is_all_day:!1,due_date:void 0,due_time:void 0,description:"",section_id:t,tags:[],has_recurrence:!1,recurrence_frequency:"DAILY",recurrence_interval:1,recurrence_byweekday:[],recurrence_bymonthday:1,points_value:0,streak_bonus_points:0,streak_bonus_interval:0}}getCardSize(){return 3}};et.styles=a`
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
  `,e([pe({attribute:!1})],et.prototype,"hass",void 0),e([ue()],et.prototype,"_config",void 0),e([ue()],et.prototype,"_selectedPersonId",void 0),e([ue()],et.prototype,"_dropdownOpen",void 0),e([ue()],et.prototype,"_groups",void 0),e([ue()],et.prototype,"_editDialogOpen",void 0),e([ue()],et.prototype,"_editingTask",void 0),e([ue()],et.prototype,"_saving",void 0),e([ue()],et.prototype,"_expandedTaskUid",void 0),et=e([ce("chorebot-person-grouped-card")],et),window.customCards=window.customCards||[],window.customCards.push({type:"chorebot-person-grouped-card",name:"ChoreBot Person Grouped Card",description:"Person-filtered tag-based grouped task view with progress tracking",preview:!0}),console.info("%c CHOREBOT-PERSON-GROUPED-CARD %c v0.1.0 ","color: white; background: #9C27B0; font-weight: bold;","color: #9C27B0; background: white; font-weight: bold;");let tt=class extends ne{constructor(){super(...arguments),this._selectedPersonId="",this._dropdownOpen=!1,this._redeeming=null,this._showConfirmModal=!1,this._showAddRewardModal=!1,this._showEditRewardModal=!1,this._pendingRedemption=null,this._rewardFormData={name:"",cost:50,icon:"mdi:gift",description:""},this._editingRewardId=null,this.shades={lighter:"",light:"",base:"",dark:"",darker:""},this._rewardFormSchema=[{name:"name",required:!0,selector:{text:{}}},{name:"cost",required:!0,selector:{number:{min:1,max:1e4,mode:"box"}}},{name:"icon",selector:{icon:{}}},{name:"description",selector:{text:{multiline:!0}}}],this._computeRewardFieldLabel=e=>{const t=Ae(this.hass);return{name:"Name",cost:`Cost (${t.text?t.text.charAt(0).toUpperCase()+t.text.slice(1):"Points"})`,icon:"Icon",description:"Description (Optional)"}[e.name]||e.name},this._computeRewardFieldHelper=e=>({cost:`Cost between 1 and 10,000 ${Ae(this.hass).text||"points"}`,icon:"Use Material Design Icons (e.g., mdi:gift, mdi:ice-cream)"}[e.name]||""),this._handleRewardFormChange=e=>{this._rewardFormData=e.detail.value}}setConfig(e){if(!e.type)throw new Error("type is required");this._config={type:"custom:chorebot-person-rewards-card",show_progress:!1!==e.show_progress,hide_rewards_background:!0===e.hide_rewards_background,show_disabled_rewards:!0===e.show_disabled_rewards,sort_by:e.sort_by||"cost",show_add_reward_button:!1!==e.show_add_reward_button,accent_color:e.accent_color||"",progress_text_color:e.progress_text_color||"",default_person_entity:e.default_person_entity||""}}static getStubConfig(){return{type:"custom:chorebot-person-rewards-card",default_person_entity:"",show_progress:!0,hide_rewards_background:!1,show_disabled_rewards:!1,sort_by:"cost",show_add_reward_button:!0,accent_color:"",progress_text_color:""}}static getConfigForm(){return{schema:[{name:"default_person_entity",selector:{entity:{filter:{domain:"person"}}}},{name:"show_progress",default:!0,selector:{boolean:{}}},{name:"hide_rewards_background",default:!1,selector:{boolean:{}}},{name:"show_disabled_rewards",default:!1,selector:{boolean:{}}},{name:"sort_by",default:"cost",selector:{select:{options:[{label:"Cost (Low to High)",value:"cost"},{label:"Name (A-Z)",value:"name"},{label:"Date Created (Oldest First)",value:"created"}]}}},{name:"show_add_reward_button",default:!0,selector:{boolean:{}}},{name:"accent_color",selector:{text:{}}},{name:"progress_text_color",selector:{text:{}}}],computeLabel:e=>({default_person_entity:"Default Person",show_progress:"Show Progress Bar",hide_rewards_background:"Hide Rewards Tile Backgrounds",show_disabled_rewards:"Show Disabled Rewards",sort_by:"Sort Rewards By",show_add_reward_button:"Show Add Reward Button",accent_color:"Accent Color",progress_text_color:"Progress Text Color"}[e.name]||void 0),computeHelper:e=>({default_person_entity:"Override auto-detected person. Leave empty to auto-detect logged-in user or use first person alphabetically.",show_progress:"Display progress bar showing completed/total tasks for selected person",hide_rewards_background:"Hide individual reward tile backgrounds for a seamless look",show_disabled_rewards:"Include rewards that have been disabled in the grid",sort_by:"Choose how to sort the rewards in the grid",show_add_reward_button:"Show the 'Add Reward' card for creating new rewards",accent_color:"Override accent color (hex code or CSS variable). By default inherits from person's profile.",progress_text_color:"Text color for progress label (hex code or CSS variable)"}[e.name]||void 0)}}willUpdate(e){if(e.has("hass")&&""===this._selectedPersonId&&(this._selectedPersonId=Qe(this.hass,this._config?.default_person_entity)),(e.has("_config")||e.has("_selectedPersonId"))&&this._config){const e=Pe(this.hass,this._config.accent_color,this._selectedPersonId);this.shades=Ee(e)}(e.has("hass")||e.has("_selectedPersonId"))&&(this._progress=this._computeProgress())}render(){if(!this.hass||!this._config)return j`<ha-card><div class="empty-state">Loading...</div></ha-card>`;if(!this.hass.states["sensor.chorebot_points"])return j`<ha-card>
        <div class="error-state">
          ChoreBot Points sensor not found. Make sure the integration is set up.
        </div>
      </ha-card>`;if(!this._selectedPersonId)return j`
        <ha-card>
          <div class="error-state">
            Please select a person. No people found with ChoreBot access.
          </div>
        </ha-card>
      `;const e=this._getAvailablePeople(),t=this._config.show_progress??!0;return j`
      <ha-card>
        <div class="card-container">
          <!-- Person Dropdown Section -->
          <div
            class="person-section ${this._dropdownOpen?"dropdown-open":""}"
          >
            ${Je(this.hass,this._selectedPersonId,this._dropdownOpen,e,t,this._progress,this.shades,this._config.progress_text_color,()=>this._toggleDropdown(),e=>this._selectPerson(e),!1)}
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
    `}_computeProgress(){const e=Object.values(this.hass.states).filter(e=>e.entity_id.startsWith("todo.chorebot_"));return ye(ke(e,this._selectedPersonId,!1))}_getAvailablePeople(){return Ve(this.hass)}_toggleDropdown(){this._dropdownOpen=!this._dropdownOpen}_selectPerson(e){this._selectedPersonId=e,this._dropdownOpen=!1}_renderRewardsList(){const e=this.hass?.states["sensor.chorebot_points"],t=e?.attributes.rewards||[],o=e?.attributes.people||{},r=t.filter(e=>e.person_id===this._selectedPersonId),i=r.filter(e=>this._config.show_disabled_rewards||e.enabled),s=this._sortRewards(i),a=o[this._selectedPersonId];return 0!==s.length||this._config.show_add_reward_button?j`
      <div class="rewards-grid">
        ${s.map(e=>this._renderRewardCard(e,a))}
        ${this._config.show_add_reward_button?this._renderAddRewardCard():""}
      </div>
    `:j`<div class="empty-state">
        No rewards configured yet. Use the "Add Reward" button or
        <code>chorebot.manage_reward</code> service to create rewards.
      </div>`}_renderRewardCard(e,t){const o=!!t&&t.points_balance>=e.cost,r=!e.enabled||!o,i=Ae(this.hass),s=this._config?.hide_rewards_background??!1,a=`#${this.shades.base}`,n=`#${this.shades.base}`;return j`
      <div
        class="reward-card ${r?"disabled":""} ${s?"no-background":""}"
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
              ${i.icon?j`<ha-icon icon="${i.icon}"></ha-icon>`:""}
              ${i.text?i.text:""}
            </div>
          </div>
          ${e.description?j`<div class="reward-description">${e.description}</div>`:""}
        </div>
      </div>
    `}_renderAddRewardCard(){const e=`#${this.shades.light}`,t=`color-mix(in srgb, #${this.shades.light} 20%, var(--card-background-color))`,o=`#${this.shades.light}`;return j`
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
    `}_sortRewards(e){const t=[...e];switch(this._config.sort_by){case"name":return t.sort((e,t)=>e.name.localeCompare(t.name));case"created":return t.sort((e,t)=>new Date(e.created||0).getTime()-new Date(t.created||0).getTime());default:return t.sort((e,t)=>e.cost-t.cost)}}_handleRewardClick(e,t){this._pendingRedemption={personId:this._selectedPersonId,rewardId:e.id},this._showConfirmModal=!0}_renderConfirmModal(){if(!this._pendingRedemption||!this._config)return"";const e=this.hass?.states["sensor.chorebot_points"],t=e?.attributes.people||{},o=e?.attributes.rewards||[],{personId:r,rewardId:i}=this._pendingRedemption,s=t[r],a=o.find(e=>e.id===i);if(!s||!a)return"";const n=Ge(this.hass,r),d=s.points_balance-a.cost,c=s.points_balance>=a.cost,l=a.enabled&&c,h=Ae(this.hass),p=`#${this.shades.base}`,u=`#${this.shades.dark}`;return j`
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
                  ${h.icon?j`<ha-icon icon="${h.icon}"></ha-icon>`:""}
                  ${h.text?h.text:""}</span
                >
              </div>
              <div class="modal-info-row">
                <span class="modal-info-label">Current Balance:</span>
                <span class="modal-info-value"
                  >${s.points_balance}
                  ${h.icon?j`<ha-icon icon="${h.icon}"></ha-icon>`:""}
                  ${h.text?h.text:""}</span
                >
              </div>
              <div class="modal-info-row">
                <span class="modal-info-label">Remaining Balance:</span>
                <span
                  class="modal-info-value"
                  style="color: ${d<0?"var(--error-color)":"inherit"}"
                  >${d}
                  ${h.icon?j`<ha-icon icon="${h.icon}"></ha-icon>`:""}
                  ${h.text?h.text:""}</span
                >
              </div>
              ${a.enabled?"":j`<div
                    style="margin-top: 12px; color: var(--warning-color); font-size: 14px; text-align: center;"
                  >
                    This reward is currently disabled.
                  </div>`}
              ${c?"":j`<div
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
    `}_renderAddRewardModal(){return this._config?j`
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
    `:""}_renderEditRewardModal(){return this._config?j`
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
    `:""}_cancelRedemption(){this._showConfirmModal=!1,this._pendingRedemption=null}async _confirmRedemption(){if(!this._pendingRedemption)return;const{personId:e,rewardId:t}=this._pendingRedemption;this._showConfirmModal=!1,this._pendingRedemption=null,this._redeeming=t;try{await this.hass.callService("chorebot","redeem_reward",{person_id:e,reward_id:t}),this._showRedemptionSuccess()}catch(e){const t=e.message||"Failed to redeem reward. Please try again.";alert(t)}finally{this._redeeming=null}}_showRedemptionSuccess(){Be(Ie(this._config.accent_color||getComputedStyle(this).getPropertyValue("--primary-color")||"#03a9f4"),3e3)}_openAddRewardModal(){this._rewardFormData={name:"",cost:50,icon:"mdi:gift",description:""},this._showAddRewardModal=!0}_closeAddRewardModal(){this._showAddRewardModal=!1}async _createReward(){if(!this._config)return;const{name:e,cost:t,icon:o,description:r}=this._rewardFormData;if(e.trim())try{await this.hass.callService("chorebot","manage_reward",{name:e.trim(),cost:Math.max(1,Math.min(1e4,t)),icon:o||"mdi:gift",description:r.trim(),person_id:this._selectedPersonId}),this._closeAddRewardModal()}catch(e){const t=e.message||"Failed to create reward. Please try again.";alert(t)}else alert("Reward name is required")}_openEditRewardModal(e){if(!this.hass)return;const t=this.hass.states["sensor.chorebot_points"];if(!t)return;const o=(t.attributes.rewards||[]).find(t=>t.id===e);o?(this._rewardFormData={name:o.name,cost:o.cost,icon:o.icon,description:o.description||""},this._editingRewardId=e,this._showEditRewardModal=!0):alert("Reward not found")}_closeEditRewardModal(){this._showEditRewardModal=!1,this._editingRewardId=null,this._rewardFormData={name:"",cost:50,icon:"mdi:gift",description:""}}_handleEditButtonClick(e){this._showConfirmModal=!1,this._pendingRedemption=null,this._openEditRewardModal(e)}async _updateReward(){if(!this._config||!this._editingRewardId)return;const{name:e,cost:t,icon:o,description:r}=this._rewardFormData;if(e.trim())try{await this.hass.callService("chorebot","manage_reward",{reward_id:this._editingRewardId,name:e.trim(),cost:Math.max(1,Math.min(1e4,t)),icon:o||"mdi:gift",description:r.trim(),person_id:this._selectedPersonId}),this._closeEditRewardModal()}catch(e){const t=e.message||"Failed to update reward. Please try again.";alert(t)}else alert("Reward name is required")}async _deleteReward(){if(this._config&&this._editingRewardId&&confirm("Delete this reward? This action cannot be undone."))try{await this.hass.callService("chorebot","delete_reward",{reward_id:this._editingRewardId}),this._closeEditRewardModal()}catch(e){const t=e.message||"Failed to delete reward. Please try again.";alert(t)}}getCardSize(){return 3}};tt.styles=a`
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
  `,e([pe({attribute:!1})],tt.prototype,"hass",void 0),e([ue()],tt.prototype,"_config",void 0),e([ue()],tt.prototype,"_selectedPersonId",void 0),e([ue()],tt.prototype,"_dropdownOpen",void 0),e([ue()],tt.prototype,"_progress",void 0),e([ue()],tt.prototype,"_redeeming",void 0),e([ue()],tt.prototype,"_showConfirmModal",void 0),e([ue()],tt.prototype,"_showAddRewardModal",void 0),e([ue()],tt.prototype,"_showEditRewardModal",void 0),e([ue()],tt.prototype,"_pendingRedemption",void 0),e([ue()],tt.prototype,"_rewardFormData",void 0),e([ue()],tt.prototype,"_editingRewardId",void 0),tt=e([ce("chorebot-person-rewards-card")],tt),window.customCards=window.customCards||[],window.customCards.push({type:"chorebot-person-rewards-card",name:"ChoreBot Person Rewards Card",description:"Combined person selector and rewards list card with progress tracking",preview:!0}),console.info("%c CHOREBOT-PERSON-REWARDS-CARD %c v1.0.0","color: white; background: #3498db; font-weight: bold;","color: #3498db; background: white; font-weight: bold;");let ot=class extends ne{constructor(){super(...arguments),this._groupedTasks=new Map}setConfig(e){this.config={...e,entity:e.entity||"",person_entities:e.person_entities||[],hide_card_background:e.hide_card_background||!1,show_dateless_tasks:!1!==e.show_dateless_tasks}}updated(e){super.updated(e),(e.has("hass")||e.has("config"))&&this._updateGroupedTasks()}_updateGroupedTasks(){if(!this.hass||!this.config)return;if(!this.config.entity)return void(this._groupedTasks=new Map);const e=this.hass.states[this.config.entity];if(!e)return void(this._groupedTasks=new Map);if(!this.config.person_entities||0===this.config.person_entities.length)return void(this._groupedTasks=new Map);const t=be(e,this.config.show_dateless_tasks,this.config.filter_section_id);this._groupedTasks=function(e,t){const o=new Map;for(const e of t)o.set(e,[]);for(const t of e){const e=t.computed_person_id;e&&o.has(e)&&o.get(e).push(t)}const r=new Date;r.setHours(0,0,0,0);for(const e of o.values())e.sort((e,t)=>{const o=!!e.due,i=!!t.due;if(!o&&i)return 1;if(o&&!i)return-1;if(!o&&!i)return 0;const s=new Date(e.due),a=new Date(t.due);s.setHours(0,0,0,0),a.setHours(0,0,0,0);const n=s<r,d=a<r;return n&&!d?-1:!n&&d?1:s.getTime()-a.getTime()});return o}(t,this.config.person_entities)}render(){if(!this.hass||!this.config)return j`<ha-card>
        <div class="card-content">Loading...</div>
      </ha-card>`;if(!this.config.entity)return j`<ha-card>
        <div class="card-content">
          <div class="empty-state">
            Please configure a todo entity
          </div>
        </div>
      </ha-card>`;if(!this.config.person_entities||0===this.config.person_entities.length)return j`<ha-card>
        <div class="card-content">
          <div class="empty-state">
            Please select at least one person
          </div>
        </div>
      </ha-card>`;const e=this.config.hide_card_background?"no-background":"";return j`
      <ha-card class="${e}">
        <div class="card-content">
          ${this.config.person_entities.map(e=>this._renderPersonSection(e))}
        </div>
      </ha-card>
    `}_renderPersonSection(e){const t=this._groupedTasks.get(e)||[],o=Ge(this.hass,e);return j`
      <div class="person-section">
        <div class="person-header">${o}</div>
        ${t.length>0?j`<div class="task-list">
              ${t.map(e=>this._renderTaskRow(e))}
            </div>`:j`<div class="empty-state">No tasks for today</div>`}
      </div>
    `}_renderTaskRow(e){const t=["task-row","completed"===e.status?"completed":"",fe(e)?"overdue":""].filter(Boolean).join(" ");return j`
      <div class="${t}">
        <span class="task-title">${e.summary}</span>
      </div>
    `}static get styles(){return a`
      :host {
        display: block;
      }

      ha-card {
        overflow: hidden;
        padding: 16px;
      }

      ha-card.no-background {
        background: none;
        box-shadow: none;
      }

      .card-header {
        margin: -16px -16px 16px -16px;
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
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      /* Person Section Styles */
      .person-section {
        padding: 0;
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
        gap: 2px;
        padding-left: 20px;
      }

      .task-row {
        display: list-item;
        list-style-type: disc;
        padding: 2px 0;
        color: var(--secondary-text-color);
      }

      .task-row::marker {
        color: var(--secondary-text-color);
      }

      .task-title {
        font-size: 14px;
        color: var(--primary-text-color);
        line-height: 1.3;
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
        padding: 12px 0 0 0;
        text-align: center;
        opacity: 0.7;
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
          font-size: 13px;
        }
      }
    `}getCardSize(){return 1+2.5*(this.config?.person_entities?.length||0)}static getStubConfig(){return{type:"custom:chorebot-multi-person-overview-card",entity:"",person_entities:[],hide_card_background:!1,show_dateless_tasks:!0,filter_section_id:""}}static getConfigForm(){return{schema:[{name:"entity",required:!0,selector:{entity:{filter:{domain:"todo"}}}},{name:"person_entities",required:!0,selector:{entity:{multiple:!0,filter:{domain:"person"}}}},{name:"hide_card_background",default:!1,selector:{boolean:{}}},{name:"show_dateless_tasks",default:!0,selector:{boolean:{}}},{name:"filter_section_id",selector:{text:{}}}],computeLabel:e=>({entity:"Todo Entity",person_entities:"People to Display",hide_card_background:"Hide Card Background",show_dateless_tasks:"Show Tasks Without Due Date",filter_section_id:"Filter by Section"}[e.name]||void 0),computeHelper:e=>({entity:"Select the ChoreBot todo entity to display",person_entities:"Select the people whose tasks should appear in this card",hide_card_background:"Remove card background and shadow for a seamless look",show_dateless_tasks:"Include tasks that do not have a due date",filter_section_id:'Optional: Show only tasks from a specific section (e.g., "Morning Routine")'}[e.name]||void 0)}}};e([pe({attribute:!1})],ot.prototype,"hass",void 0),e([pe({attribute:!1})],ot.prototype,"config",void 0),e([ue()],ot.prototype,"_groupedTasks",void 0),ot=e([ce("chorebot-multi-person-overview-card")],ot),window.customCards=window.customCards||[],window.customCards.push({type:"chorebot-multi-person-overview-card",name:"ChoreBot Multi-Person Overview Card",description:"Vertical list showing multiple people with their assigned tasks for quick family-wide status checks",preview:!0}),console.info("%c CHOREBOT-MULTI-PERSON-OVERVIEW-CARD %c v1.0.0 ","color: white; background: #9C27B0; font-weight: bold;","color: #9C27B0; background: white; font-weight: bold;"),console.info("%c CHOREBOT-CARDS %c v0.1.0 ","background: #3498db; color: white; font-weight: bold; padding: 2px 4px; border-radius: 3px 0 0 3px;","background: #ecf0f1; color: #3498db; font-weight: bold; padding: 2px 4px; border-radius: 0 3px 3px 0;");
