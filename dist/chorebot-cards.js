function t(t,e,o,s){var i,a=arguments.length,r=a<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,s);else for(var n=t.length-1;n>=0;n--)(i=t[n])&&(r=(a<3?i(r):a>3?i(e,o,r):i(e,o))||r);return a>3&&r&&Object.defineProperty(e,o,r),r}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,o=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),i=new WeakMap;let a=class{constructor(t,e,o){if(this._$cssResult$=!0,o!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(o&&void 0===t){const o=void 0!==e&&1===e.length;o&&(t=i.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&i.set(e,t))}return t}toString(){return this.cssText}};const r=(t,...e)=>{const o=1===t.length?t[0]:e.reduce((e,o,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[s+1],t[0]);return new a(o,t,s)},n=o?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return(t=>new a("string"==typeof t?t:t+"",void 0,s))(e)})(t):t,{is:d,defineProperty:c,getOwnPropertyDescriptor:l,getOwnPropertyNames:h,getOwnPropertySymbols:u,getPrototypeOf:p}=Object,_=globalThis,g=_.trustedTypes,f=g?g.emptyScript:"",m=_.reactiveElementPolyfillSupport,b=(t,e)=>t,w={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=null!==t;break;case Number:o=null===t?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch(t){o=null}}return o}},y=(t,e)=>!d(t,e),v={attribute:!0,type:String,converter:w,reflect:!1,useDefault:!1,hasChanged:y};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),_.litPropertyMetadata??=new WeakMap;let k=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=v){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const o=Symbol(),s=this.getPropertyDescriptor(t,o,e);void 0!==s&&c(this.prototype,t,s)}}static getPropertyDescriptor(t,e,o){const{get:s,set:i}=l(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const a=s?.call(this);i?.call(this,e),this.requestUpdate(t,a,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??v}static _$Ei(){if(this.hasOwnProperty(b("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(b("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b("properties"))){const t=this.properties,e=[...h(t),...u(t)];for(const o of e)this.createProperty(o,t[o])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,o]of e)this.elementProperties.set(t,o)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const o=this._$Eu(t,e);void 0!==o&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const t of o)e.unshift(n(t))}else void 0!==t&&e.push(n(t));return e}static _$Eu(t,e){const o=e.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const o of e.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{if(o)t.adoptedStyleSheets=s.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const o of s){const s=document.createElement("style"),i=e.litNonce;void 0!==i&&s.setAttribute("nonce",i),s.textContent=o.cssText,t.appendChild(s)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$ET(t,e){const o=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,o);if(void 0!==s&&!0===o.reflect){const i=(void 0!==o.converter?.toAttribute?o.converter:w).toAttribute(e,o.type);this._$Em=t,null==i?this.removeAttribute(s):this.setAttribute(s,i),this._$Em=null}}_$AK(t,e){const o=this.constructor,s=o._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=o.getPropertyOptions(s),i="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:w;this._$Em=s;const a=i.fromAttribute(e,t.type);this[s]=a??this._$Ej?.get(s)??a,this._$Em=null}}requestUpdate(t,e,o,s=!1,i){if(void 0!==t){const a=this.constructor;if(!1===s&&(i=this[t]),o??=a.getPropertyOptions(t),!((o.hasChanged??y)(i,e)||o.useDefault&&o.reflect&&i===this._$Ej?.get(t)&&!this.hasAttribute(a._$Eu(t,o))))return;this.C(t,e,o)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:o,reflect:s,wrapped:i},a){o&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??e??this[t]),!0!==i||void 0!==a)||(this._$AL.has(t)||(this.hasUpdated||o||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,o]of t){const{wrapped:t}=o,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,o,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};k.elementStyles=[],k.shadowRootOptions={mode:"open"},k[b("elementProperties")]=new Map,k[b("finalized")]=new Map,m?.({ReactiveElement:k}),(_.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const x=globalThis,$=t=>t,T=x.trustedTypes,C=T?T.createPolicy("lit-html",{createHTML:t=>t}):void 0,A="$lit$",M=`lit$${Math.random().toFixed(9).slice(2)}$`,S="?"+M,E=`<${S}>`,D=document,R=()=>D.createComment(""),P=t=>null===t||"object"!=typeof t&&"function"!=typeof t,O=Array.isArray,F="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,U=/-->/g,z=/>/g,I=RegExp(`>|${F}(?:([^\\s"'>=/]+)(${F}*=${F}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),B=/'/g,H=/"/g,L=/^(?:script|style|textarea|title)$/i,j=(t=>(e,...o)=>({_$litType$:t,strings:e,values:o}))(1),Y=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),W=new WeakMap,V=D.createTreeWalker(D,129);function G(t,e){if(!O(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==C?C.createHTML(e):e}const Z=(t,e)=>{const o=t.length-1,s=[];let i,a=2===e?"<svg>":3===e?"<math>":"",r=N;for(let e=0;e<o;e++){const o=t[e];let n,d,c=-1,l=0;for(;l<o.length&&(r.lastIndex=l,d=r.exec(o),null!==d);)l=r.lastIndex,r===N?"!--"===d[1]?r=U:void 0!==d[1]?r=z:void 0!==d[2]?(L.test(d[2])&&(i=RegExp("</"+d[2],"g")),r=I):void 0!==d[3]&&(r=I):r===I?">"===d[0]?(r=i??N,c=-1):void 0===d[1]?c=-2:(c=r.lastIndex-d[2].length,n=d[1],r=void 0===d[3]?I:'"'===d[3]?H:B):r===H||r===B?r=I:r===U||r===z?r=N:(r=I,i=void 0);const h=r===I&&t[e+1].startsWith("/>")?" ":"";a+=r===N?o+E:c>=0?(s.push(n),o.slice(0,c)+A+o.slice(c)+M+h):o+M+(-2===c?e:h)}return[G(t,a+(t[o]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class K{constructor({strings:t,_$litType$:e},o){let s;this.parts=[];let i=0,a=0;const r=t.length-1,n=this.parts,[d,c]=Z(t,e);if(this.el=K.createElement(d,o),V.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=V.nextNode())&&n.length<r;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(A)){const e=c[a++],o=s.getAttribute(t).split(M),r=/([.?@])?(.*)/.exec(e);n.push({type:1,index:i,name:r[2],strings:o,ctor:"."===r[1]?et:"?"===r[1]?ot:"@"===r[1]?st:tt}),s.removeAttribute(t)}else t.startsWith(M)&&(n.push({type:6,index:i}),s.removeAttribute(t));if(L.test(s.tagName)){const t=s.textContent.split(M),e=t.length-1;if(e>0){s.textContent=T?T.emptyScript:"";for(let o=0;o<e;o++)s.append(t[o],R()),V.nextNode(),n.push({type:2,index:++i});s.append(t[e],R())}}}else if(8===s.nodeType)if(s.data===S)n.push({type:2,index:i});else{let t=-1;for(;-1!==(t=s.data.indexOf(M,t+1));)n.push({type:7,index:i}),t+=M.length-1}i++}}static createElement(t,e){const o=D.createElement("template");return o.innerHTML=t,o}}function X(t,e,o=t,s){if(e===Y)return e;let i=void 0!==s?o._$Co?.[s]:o._$Cl;const a=P(e)?void 0:e._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),void 0===a?i=void 0:(i=new a(t),i._$AT(t,o,s)),void 0!==s?(o._$Co??=[])[s]=i:o._$Cl=i),void 0!==i&&(e=X(t,i._$AS(t,e.values),i,s)),e}class J{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:o}=this._$AD,s=(t?.creationScope??D).importNode(e,!0);V.currentNode=s;let i=V.nextNode(),a=0,r=0,n=o[0];for(;void 0!==n;){if(a===n.index){let e;2===n.type?e=new Q(i,i.nextSibling,this,t):1===n.type?e=new n.ctor(i,n.name,n.strings,this,t):6===n.type&&(e=new it(i,this,t)),this._$AV.push(e),n=o[++r]}a!==n?.index&&(i=V.nextNode(),a++)}return V.currentNode=D,s}p(t){let e=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,o,s){this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=X(this,t,e),P(t)?t===q||null==t||""===t?(this._$AH!==q&&this._$AR(),this._$AH=q):t!==this._$AH&&t!==Y&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>O(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==q&&P(this._$AH)?this._$AA.nextSibling.data=t:this.T(D.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:o}=t,s="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=K.createElement(G(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new J(s,this),o=t.u(this.options);t.p(e),this.T(o),this._$AH=t}}_$AC(t){let e=W.get(t.strings);return void 0===e&&W.set(t.strings,e=new K(t)),e}k(t){O(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,s=0;for(const i of t)s===e.length?e.push(o=new Q(this.O(R()),this.O(R()),this,this.options)):o=e[s],o._$AI(i),s++;s<e.length&&(this._$AR(o&&o._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=$(t).nextSibling;$(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,o,s,i){this.type=1,this._$AH=q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=i,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=q}_$AI(t,e=this,o,s){const i=this.strings;let a=!1;if(void 0===i)t=X(this,t,e,0),a=!P(t)||t!==this._$AH&&t!==Y,a&&(this._$AH=t);else{const s=t;let r,n;for(t=i[0],r=0;r<i.length-1;r++)n=X(this,s[o+r],e,r),n===Y&&(n=this._$AH[r]),a||=!P(n)||n!==this._$AH[r],n===q?t=q:t!==q&&(t+=(n??"")+i[r+1]),this._$AH[r]=n}a&&!s&&this.j(t)}j(t){t===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===q?void 0:t}}class ot extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==q)}}class st extends tt{constructor(t,e,o,s,i){super(t,e,o,s,i),this.type=5}_$AI(t,e=this){if((t=X(this,t,e,0)??q)===Y)return;const o=this._$AH,s=t===q&&o!==q||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,i=t!==q&&(o===q||s);s&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){X(this,t)}}const at=x.litHtmlPolyfillSupport;at?.(K,Q),(x.litHtmlVersions??=[]).push("3.3.2");const rt=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class nt extends k{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,o)=>{const s=o?.renderBefore??e;let i=s._$litPart$;if(void 0===i){const t=o?.renderBefore??null;s._$litPart$=i=new Q(e.insertBefore(R(),t),t,void 0,o??{})}return i._$AI(t),i})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Y}}nt._$litElement$=!0,nt.finalized=!0,rt.litElementHydrateSupport?.({LitElement:nt});const dt=rt.litElementPolyfillSupport;dt?.({LitElement:nt}),(rt.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ct=t=>(e,o)=>{void 0!==o?o.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},lt={attribute:!0,type:String,converter:w,reflect:!1,hasChanged:y},ht=(t=lt,e,o)=>{const{kind:s,metadata:i}=o;let a=globalThis.litPropertyMetadata.get(i);if(void 0===a&&globalThis.litPropertyMetadata.set(i,a=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),a.set(o.name,t),"accessor"===s){const{name:s}=o;return{set(o){const i=e.get.call(this);e.set.call(this,o),this.requestUpdate(s,i,t,!0,o)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=o;return function(o){const i=this[s];e.call(this,o),this.requestUpdate(s,i,t,!0,o)}}throw Error("Unsupported decorator location: "+s)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ut(t){return(e,o)=>"object"==typeof o?ht(t,e,o):((t,e,o)=>{const s=e.hasOwnProperty(o);return e.constructor.createProperty(o,t),s?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function pt(t){return ut({...t,state:!0,attribute:!1})}function _t(t){try{const e=new Date(t);if(isNaN(e.getTime()))return{date:null,time:null};const o=e.getFullYear(),s=String(e.getMonth()+1).padStart(2,"0"),i=String(e.getDate()).padStart(2,"0"),a=String(e.getHours()).padStart(2,"0");return{date:`${o}-${s}-${i}`,time:`${a}:${String(e.getMinutes()).padStart(2,"0")}`}}catch(e){return console.error("Date parsing error:",e,t),{date:null,time:null}}}function gt(t,e){return t.getFullYear()===e.getFullYear()&&t.getMonth()===e.getMonth()&&t.getDate()===e.getDate()}function ft(t,e=!0,o){const s=t.attributes.chorebot_tasks||[],i=new Date;i.setHours(0,0,0,0);let a=s.filter(t=>{const o=!!t.due,s="completed"===t.status;if(!o)return e;const a=new Date(t.due);a.setHours(0,0,0,0);const r=gt(a,i),n=a<i;if(s&&t.last_completed){return!!gt(new Date(t.last_completed),new Date)}return!!r||!(!n||s)});if(o){const e=t.attributes.chorebot_sections||[],s=o,i=e.find(t=>t.name===s),r=i?i.id:s;a=a.filter(t=>t.section_id===r)}return a}function mt(t){const e=t.filter(t=>"completed"===t.status).length;return{completed:e,total:t.length}}function bt(t){const e=t.filter(t=>!!t.due),o=e.filter(t=>"completed"===t.status).length;return{completed:o,total:e.length}}function wt(t){if(!t||!t.has_recurrence)return null;const{recurrence_frequency:e,recurrence_interval:o,recurrence_byweekday:s,recurrence_bymonthday:i}=t;if(!e)return null;let a=`FREQ=${e};INTERVAL=${o||1}`;if("WEEKLY"===e&&s&&s.length>0)a+=`;BYDAY=${s.join(",").toUpperCase()}`;else if("MONTHLY"===e&&i){a+=`;BYMONTHDAY=${Math.max(1,Math.min(31,i))}`}return a}function yt(t){const e=t.states["sensor.chorebot_points"],o=e?.attributes.points_display;return o?{icon:o.icon??"",text:o.text??"points"}:{icon:"",text:"points"}}function vt(t){const e=yt(t);return e.text?e.text.toLowerCase():""}function kt(t,e){const o={...t,is_all_day:t.is_all_day||!1,tags:t.tags||[],section_id:t.section_id,points_value:t.points_value||0,streak_bonus_points:t.streak_bonus_points||0,streak_bonus_interval:t.streak_bonus_interval||0};if(t.due){const e=_t(t.due);o.due_date=e.date??void 0,o.due_time=e.time??void 0,o.has_due_date=!0}else o.has_due_date=!1;let s=t.rrule;if(t.parent_uid&&e){const i=e.find(e=>e.uid===t.parent_uid);i&&(s=i.rrule,o.streak_bonus_points=i.streak_bonus_points||0,o.streak_bonus_interval=i.streak_bonus_interval||0)}const i=function(t){if(!t)return null;try{const e=t.split(";");let o=null,s=1;const i=[];let a=null;for(const t of e){const[e,r]=t.split("=");if("FREQ"===e)"DAILY"!==r&&"WEEKLY"!==r&&"MONTHLY"!==r||(o=r);else if("INTERVAL"===e){const t=parseInt(r,10);!isNaN(t)&&t>0&&(s=t)}else if("BYDAY"===e)i.push(...r.split(","));else if("BYMONTHDAY"===e){const t=parseInt(r,10);!isNaN(t)&&t>=1&&t<=31&&(a=t)}}return o?{frequency:o,interval:s,byweekday:i,bymonthday:a}:null}catch(e){return console.error("rrule parsing error:",e,t),null}}(s);return i?(o.has_recurrence=!0,o.recurrence_frequency=i.frequency,o.recurrence_interval=i.interval,o.recurrence_byweekday=i.byweekday,o.recurrence_bymonthday=i.bymonthday||1):(o.has_recurrence=!1,o.recurrence_frequency="DAILY",o.recurrence_interval=1,o.recurrence_byweekday=[],o.recurrence_bymonthday=1),o}function xt(t){const e=function(t){const e=yt(t);return e.text?e.text.charAt(0).toUpperCase()+e.text.slice(1):""}(t)||"Points";return function(t){return{summary:"Task Name",has_due_date:"Has Due Date",is_all_day:"All Day",due_date:"Date",due_time:"Time",description:"Description",section_id:"Section",tags:"Tags",has_recurrence:"Recurring Task",recurrence_frequency:"Frequency",recurrence_interval:"Repeat Every",recurrence_byweekday:"Days of Week",recurrence_bymonthday:"Day of Month",points_value:`${e} Value`,streak_bonus_points:`Streak Bonus ${e}`,streak_bonus_interval:"Bonus Every X Days (0 = no bonus)"}[t.name]||t.name}}function $t(t,e,o,s,i,a,r,n,d,c,l="Edit Task",h=!0){if(!t||!e)return j``;const u=function(t,e,o){const s=void 0!==t.has_due_date?t.has_due_date:!!t.due,i=void 0!==t.is_all_day&&t.is_all_day,a=[{name:"summary",required:!0,selector:{text:{}}},{name:"description",selector:{text:{multiline:!0}}}];if(e.length>0&&a.push({name:"section_id",selector:{select:{options:e.sort((t,e)=>e.sort_order-t.sort_order).map(t=>({label:t.name,value:t.id}))}}}),a.push({name:"tags",selector:{select:{multiple:!0,custom_value:!0,options:o.map(t=>({label:t,value:t}))}}}),a.push({name:"has_due_date",selector:{boolean:{}}}),s&&(a.push({name:"due_date",selector:{date:{}}}),i||a.push({name:"due_time",selector:{time:{}}}),a.push({name:"is_all_day",selector:{boolean:{}}})),s){const e=void 0!==t.has_recurrence&&t.has_recurrence,o=t.recurrence_frequency||"DAILY";a.push({name:"has_recurrence",selector:{boolean:{}}}),e&&(a.push({name:"recurrence_frequency",selector:{select:{options:[{label:"Daily",value:"DAILY"},{label:"Weekly",value:"WEEKLY"},{label:"Monthly",value:"MONTHLY"}]}}}),a.push({name:"recurrence_interval",selector:{number:{min:1,max:999,mode:"box"}}}),"WEEKLY"===o?a.push({name:"recurrence_byweekday",selector:{select:{multiple:!0,options:[{label:"Monday",value:"MO"},{label:"Tuesday",value:"TU"},{label:"Wednesday",value:"WE"},{label:"Thursday",value:"TH"},{label:"Friday",value:"FR"},{label:"Saturday",value:"SA"},{label:"Sunday",value:"SU"}]}}}):"MONTHLY"===o&&a.push({name:"recurrence_bymonthday",selector:{number:{min:1,max:31,mode:"box"}}}))}return a.push({name:"points_value",selector:{number:{min:0,max:1e4,mode:"box"}}}),s&&t.has_recurrence&&(a.push({name:"streak_bonus_points",selector:{number:{min:0,max:1e4,mode:"box"}}}),a.push({name:"streak_bonus_interval",selector:{number:{min:0,max:999,mode:"box"}}})),a}(e,s,i),p=function(t,e){const o=void 0!==t.has_due_date?t.has_due_date:!!t.due,s=void 0!==t.is_all_day&&t.is_all_day;let i=t.due_date||null,a=t.due_time||null;if(!i&&t.due){const e=_t(t.due);i=e.date,a=e.time}return{summary:t.summary||"",has_due_date:o,is_all_day:s,due_date:i||null,due_time:a||"00:00",description:t.description||"",section_id:t.section_id||(e.length>0?e.sort((t,e)=>e.sort_order-t.sort_order)[0].id:void 0),tags:t.tags||[],has_recurrence:o&&t.has_recurrence||!1,recurrence_frequency:t.recurrence_frequency||"DAILY",recurrence_interval:t.recurrence_interval||1,recurrence_byweekday:t.recurrence_byweekday||[],recurrence_bymonthday:t.recurrence_bymonthday||1,points_value:t.points_value||0,streak_bonus_points:t.streak_bonus_points||0,streak_bonus_interval:t.streak_bonus_interval||0}}(e,s),_=xt(o);return j`
    <ha-dialog open @closed=${r} .heading=${l}>
      <ha-form
        .hass=${o}
        .schema=${u}
        .data=${p}
        .computeLabel=${_}
        @value-changed=${n}
      ></ha-form>

      <!-- Delete button (bottom-left positioning via CSS) -->
      ${h&&c&&e?.uid?j`
            <ha-button
              slot="primaryAction"
              @click=${c}
              .disabled=${a}
              class="delete-button"
            >
              Delete
            </ha-button>
          `:""}

      <ha-button slot="primaryAction" @click=${d} .disabled=${a}>
        ${a?"Saving...":"Save"}
      </ha-button>
      <ha-button slot="secondaryAction" @click=${r} .disabled=${a}>
        Cancel
      </ha-button>

      <style>
        ha-dialog {
          --mdc-dialog-min-width: 500px;
        }
        .delete-button {
          --mdc-theme-primary: var(--error-color, #db4437);
          margin-right: auto; /* Push to left */
        }
      </style>
    </ha-dialog>
  `}function Tt(t,e){if(t.startsWith("var(")){const e=getComputedStyle(document.documentElement).getPropertyValue(t.slice(4,-1).trim());if(!e)return t;t=e.trim()}let o,s,i;if(t.startsWith("#")){const e=t.replace("#","");o=parseInt(e.substring(0,2),16),s=parseInt(e.substring(2,4),16),i=parseInt(e.substring(4,6),16)}else{if(!t.startsWith("rgb"))return t;{const e=t.match(/\d+/g);if(!e)return t;[o,s,i]=e.map(Number)}}o/=255,s/=255,i/=255;const a=Math.max(o,s,i),r=Math.min(o,s,i);let n=0,d=0,c=(a+r)/2;if(a!==r){const t=a-r;switch(d=c>.5?t/(2-a-r):t/(a+r),a){case o:n=((s-i)/t+(s<i?6:0))/6;break;case s:n=((i-o)/t+2)/6;break;case i:n=((o-s)/t+4)/6}}c=e>0?Math.max(0,Math.min(.95,c+e/100*(1-c))):Math.max(.05,c+e/100*c);const l=(t,e,o)=>(o<0&&(o+=1),o>1&&(o-=1),o<1/6?t+6*(e-t)*o:o<.5?e:o<2/3?t+(e-t)*(2/3-o)*6:t);let h,u,p;if(0===d)h=u=p=c;else{const t=c<.5?c*(1+d):c+d-c*d,e=2*c-t;h=l(e,t,n+1/3),u=l(e,t,n),p=l(e,t,n-1/3)}const _=t=>{const e=Math.round(255*t).toString(16);return 1===e.length?"0"+e:e};return`${_(h)}${_(u)}${_(p)}`.toUpperCase()}function Ct(t){return{lighter:Tt(t,30),light:Tt(t,15),base:(e=t,e.startsWith("#")?e.substring(1).toUpperCase():/^[0-9A-Fa-f]{6}$/.test(e)?e.toUpperCase():Tt(e,0)),dark:Tt(t,-15),darker:Tt(t,-30)};var e}var At={};!function t(e,o,s,i){var a=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),r="function"==typeof Path2D&&"function"==typeof DOMMatrix,n=function(){if(!e.OffscreenCanvas)return!1;try{var t=new OffscreenCanvas(1,1),o=t.getContext("2d");o.fillRect(0,0,1,1);var s=t.transferToImageBitmap();o.createPattern(s,"no-repeat")}catch(t){return!1}return!0}();function d(){}function c(t){var s=o.exports.Promise,i=void 0!==s?s:e.Promise;return"function"==typeof i?new i(t):(t(d,d),null)}var l,h,u,p,_,g,f,m,b,w,y,v=(l=n,h=new Map,{transform:function(t){if(l)return t;if(h.has(t))return h.get(t);var e=new OffscreenCanvas(t.width,t.height);return e.getContext("2d").drawImage(t,0,0),h.set(t,e),e},clear:function(){h.clear()}}),k=(_=Math.floor(1e3/60),g={},f=0,"function"==typeof requestAnimationFrame&&"function"==typeof cancelAnimationFrame?(u=function(t){var e=Math.random();return g[e]=requestAnimationFrame(function o(s){f===s||f+_-1<s?(f=s,delete g[e],t()):g[e]=requestAnimationFrame(o)}),e},p=function(t){g[t]&&cancelAnimationFrame(g[t])}):(u=function(t){return setTimeout(t,_)},p=function(t){return clearTimeout(t)}),{frame:u,cancel:p}),x=(w={},function(){if(m)return m;if(!s&&a){var e=["var CONFETTI, SIZE = {}, module = {};","("+t.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join("\n");try{m=new Worker(URL.createObjectURL(new Blob([e])))}catch(t){return"undefined"!=typeof console&&"function"==typeof console.warn&&console.warn("🎊 Could not load worker",t),null}!function(t){function e(e,o){t.postMessage({options:e||{},callback:o})}t.init=function(e){var o=e.transferControlToOffscreen();t.postMessage({canvas:o},[o])},t.fire=function(o,s,i){if(b)return e(o,null),b;var a=Math.random().toString(36).slice(2);return b=c(function(s){function r(e){e.data.callback===a&&(delete w[a],t.removeEventListener("message",r),b=null,v.clear(),i(),s())}t.addEventListener("message",r),e(o,a),w[a]=r.bind(null,{data:{callback:a}})})},t.reset=function(){for(var e in t.postMessage({reset:!0}),w)w[e](),delete w[e]}}(m)}return m}),$={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function T(t,e,o){return function(t,e){return e?e(t):t}(t&&null!=t[e]?t[e]:$[e],o)}function C(t){return t<0?0:Math.floor(t)}function A(t,e){return Math.floor(Math.random()*(e-t))+t}function M(t){return parseInt(t,16)}function S(t){return t.map(E)}function E(t){var e=String(t).replace(/[^0-9a-f]/gi,"");return e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),{r:M(e.substring(0,2)),g:M(e.substring(2,4)),b:M(e.substring(4,6))}}function D(t){t.width=document.documentElement.clientWidth,t.height=document.documentElement.clientHeight}function R(t){var e=t.getBoundingClientRect();t.width=e.width,t.height=e.height}function P(t){var e=t.angle*(Math.PI/180),o=t.spread*(Math.PI/180);return{x:t.x,y:t.y,wobble:10*Math.random(),wobbleSpeed:Math.min(.11,.1*Math.random()+.05),velocity:.5*t.startVelocity+Math.random()*t.startVelocity,angle2D:-e+(.5*o-Math.random()*o),tiltAngle:(.5*Math.random()+.25)*Math.PI,color:t.color,shape:t.shape,tick:0,totalTicks:t.ticks,decay:t.decay,drift:t.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:3*t.gravity,ovalScalar:.6,scalar:t.scalar,flat:t.flat}}function O(t,e){e.x+=Math.cos(e.angle2D)*e.velocity+e.drift,e.y+=Math.sin(e.angle2D)*e.velocity+e.gravity,e.velocity*=e.decay,e.flat?(e.wobble=0,e.wobbleX=e.x+10*e.scalar,e.wobbleY=e.y+10*e.scalar,e.tiltSin=0,e.tiltCos=0,e.random=1):(e.wobble+=e.wobbleSpeed,e.wobbleX=e.x+10*e.scalar*Math.cos(e.wobble),e.wobbleY=e.y+10*e.scalar*Math.sin(e.wobble),e.tiltAngle+=.1,e.tiltSin=Math.sin(e.tiltAngle),e.tiltCos=Math.cos(e.tiltAngle),e.random=Math.random()+2);var o=e.tick++/e.totalTicks,s=e.x+e.random*e.tiltCos,i=e.y+e.random*e.tiltSin,a=e.wobbleX+e.random*e.tiltCos,n=e.wobbleY+e.random*e.tiltSin;if(t.fillStyle="rgba("+e.color.r+", "+e.color.g+", "+e.color.b+", "+(1-o)+")",t.beginPath(),r&&"path"===e.shape.type&&"string"==typeof e.shape.path&&Array.isArray(e.shape.matrix))t.fill(function(t,e,o,s,i,a,r){var n=new Path2D(t),d=new Path2D;d.addPath(n,new DOMMatrix(e));var c=new Path2D;return c.addPath(d,new DOMMatrix([Math.cos(r)*i,Math.sin(r)*i,-Math.sin(r)*a,Math.cos(r)*a,o,s])),c}(e.shape.path,e.shape.matrix,e.x,e.y,.1*Math.abs(a-s),.1*Math.abs(n-i),Math.PI/10*e.wobble));else if("bitmap"===e.shape.type){var d=Math.PI/10*e.wobble,c=.1*Math.abs(a-s),l=.1*Math.abs(n-i),h=e.shape.bitmap.width*e.scalar,u=e.shape.bitmap.height*e.scalar,p=new DOMMatrix([Math.cos(d)*c,Math.sin(d)*c,-Math.sin(d)*l,Math.cos(d)*l,e.x,e.y]);p.multiplySelf(new DOMMatrix(e.shape.matrix));var _=t.createPattern(v.transform(e.shape.bitmap),"no-repeat");_.setTransform(p),t.globalAlpha=1-o,t.fillStyle=_,t.fillRect(e.x-h/2,e.y-u/2,h,u),t.globalAlpha=1}else if("circle"===e.shape)t.ellipse?t.ellipse(e.x,e.y,Math.abs(a-s)*e.ovalScalar,Math.abs(n-i)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):function(t,e,o,s,i,a,r,n,d){t.save(),t.translate(e,o),t.rotate(a),t.scale(s,i),t.arc(0,0,1,r,n,d),t.restore()}(t,e.x,e.y,Math.abs(a-s)*e.ovalScalar,Math.abs(n-i)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI);else if("star"===e.shape)for(var g=Math.PI/2*3,f=4*e.scalar,m=8*e.scalar,b=e.x,w=e.y,y=5,k=Math.PI/y;y--;)b=e.x+Math.cos(g)*m,w=e.y+Math.sin(g)*m,t.lineTo(b,w),g+=k,b=e.x+Math.cos(g)*f,w=e.y+Math.sin(g)*f,t.lineTo(b,w),g+=k;else t.moveTo(Math.floor(e.x),Math.floor(e.y)),t.lineTo(Math.floor(e.wobbleX),Math.floor(i)),t.lineTo(Math.floor(a),Math.floor(n)),t.lineTo(Math.floor(s),Math.floor(e.wobbleY));return t.closePath(),t.fill(),e.tick<e.totalTicks}function F(t,o){var r,n=!t,d=!!T(o||{},"resize"),l=!1,h=T(o,"disableForReducedMotion",Boolean),u=a&&!!T(o||{},"useWorker")?x():null,p=n?D:R,_=!(!t||!u)&&!!t.__confetti_initialized,g="function"==typeof matchMedia&&matchMedia("(prefers-reduced-motion)").matches;function f(e,o,a){for(var n=T(e,"particleCount",C),d=T(e,"angle",Number),l=T(e,"spread",Number),h=T(e,"startVelocity",Number),u=T(e,"decay",Number),_=T(e,"gravity",Number),g=T(e,"drift",Number),f=T(e,"colors",S),m=T(e,"ticks",Number),b=T(e,"shapes"),w=T(e,"scalar"),y=!!T(e,"flat"),x=function(t){var e=T(t,"origin",Object);return e.x=T(e,"x",Number),e.y=T(e,"y",Number),e}(e),$=n,M=[],E=t.width*x.x,D=t.height*x.y;$--;)M.push(P({x:E,y:D,angle:d,spread:l,startVelocity:h,color:f[$%f.length],shape:b[A(0,b.length)],ticks:m,decay:u,gravity:_,drift:g,scalar:w,flat:y}));return r?r.addFettis(M):(r=function(t,e,o,a,r){var n,d,l=e.slice(),h=t.getContext("2d"),u=c(function(e){function c(){n=d=null,h.clearRect(0,0,a.width,a.height),v.clear(),r(),e()}n=k.frame(function e(){!s||a.width===i.width&&a.height===i.height||(a.width=t.width=i.width,a.height=t.height=i.height),a.width||a.height||(o(t),a.width=t.width,a.height=t.height),h.clearRect(0,0,a.width,a.height),(l=l.filter(function(t){return O(h,t)})).length?n=k.frame(e):c()}),d=c});return{addFettis:function(t){return l=l.concat(t),u},canvas:t,promise:u,reset:function(){n&&k.cancel(n),d&&d()}}}(t,M,p,o,a),r.promise)}function m(o){var s=h||T(o,"disableForReducedMotion",Boolean),i=T(o,"zIndex",Number);if(s&&g)return c(function(t){t()});n&&r?t=r.canvas:n&&!t&&(t=function(t){var e=document.createElement("canvas");return e.style.position="fixed",e.style.top="0px",e.style.left="0px",e.style.pointerEvents="none",e.style.zIndex=t,e}(i),document.body.appendChild(t)),d&&!_&&p(t);var a={width:t.width,height:t.height};function m(){if(u){var e={getBoundingClientRect:function(){if(!n)return t.getBoundingClientRect()}};return p(e),void u.postMessage({resize:{width:e.width,height:e.height}})}a.width=a.height=null}function b(){r=null,d&&(l=!1,e.removeEventListener("resize",m)),n&&t&&(document.body.contains(t)&&document.body.removeChild(t),t=null,_=!1)}return u&&!_&&u.init(t),_=!0,u&&(t.__confetti_initialized=!0),d&&!l&&(l=!0,e.addEventListener("resize",m,!1)),u?u.fire(o,a,b):f(o,a,b)}return m.reset=function(){u&&u.reset(),r&&r.reset()},m}function N(){return y||(y=F(null,{useWorker:!0,resize:!0})),y}o.exports=function(){return N().apply(this,arguments)},o.exports.reset=function(){N().reset()},o.exports.create=F,o.exports.shapeFromPath=function(t){if(!r)throw new Error("path confetti are not supported in this browser");var e,o;"string"==typeof t?e=t:(e=t.path,o=t.matrix);var s=new Path2D(e),i=document.createElement("canvas").getContext("2d");if(!o){for(var a,n,d=1e3,c=d,l=d,h=0,u=0,p=0;p<d;p+=2)for(var _=0;_<d;_+=2)i.isPointInPath(s,p,_,"nonzero")&&(c=Math.min(c,p),l=Math.min(l,_),h=Math.max(h,p),u=Math.max(u,_));a=h-c,n=u-l;var g=Math.min(10/a,10/n);o=[g,0,0,g,-Math.round(a/2+c)*g,-Math.round(n/2+l)*g]}return{type:"path",path:e,matrix:o}},o.exports.shapeFromText=function(t){var e,o=1,s="#000000",i='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';"string"==typeof t?e=t:(e=t.text,o="scalar"in t?t.scalar:o,i="fontFamily"in t?t.fontFamily:i,s="color"in t?t.color:s);var a=10*o,r=a+"px "+i,n=new OffscreenCanvas(a,a),d=n.getContext("2d");d.font=r;var c=d.measureText(e),l=Math.ceil(c.actualBoundingBoxRight+c.actualBoundingBoxLeft),h=Math.ceil(c.actualBoundingBoxAscent+c.actualBoundingBoxDescent),u=c.actualBoundingBoxLeft+2,p=c.actualBoundingBoxAscent+2;l+=4,h+=4,(d=(n=new OffscreenCanvas(l,h)).getContext("2d")).font=r,d.fillStyle=s,d.fillText(e,u,p);var _=1/o;return{type:"bitmap",bitmap:n.transferToImageBitmap(),matrix:[_,0,0,_,-l*_/2,-h*_/2]}}}(function(){return"undefined"!=typeof window?window:"undefined"!=typeof self?self:this||{}}(),At,!1);var Mt=At.exports;function St(t,e=3e3){const o=Date.now()+e,s={startVelocity:30,spread:360,ticks:60,zIndex:0};function i(t,e){return Math.random()*(e-t)+t}const a=setInterval(function(){const r=o-Date.now();if(r<=0)return clearInterval(a);const n=r/e*50;Mt({...s,particleCount:n,origin:{x:i(.1,.3),y:Math.random()-.2},colors:t,disableForReducedMotion:!0}),Mt({...s,particleCount:n,origin:{x:i(.7,.9),y:Math.random()-.2},colors:t,disableForReducedMotion:!0})},250)}function Et(t,e=5e3){const o=Date.now()+e;function s(t,e){return Math.random()*(e-t)+t}!function i(){const a=o-Date.now(),r=Math.max(200,a/e*500);Mt({particleCount:1,startVelocity:0,ticks:r,origin:{x:Math.random(),y:.3*Math.random()-.1},colors:t,shapes:["star"],gravity:s(1.2,1.5),scalar:s(1.2,2),drift:s(-.4,.4),disableForReducedMotion:!0}),a>0&&requestAnimationFrame(i)}()}At.exports.create;let Dt=class extends nt{constructor(){super(...arguments),this._editDialogOpen=!1,this._editingTask=null,this._saving=!1,this._groups=[],this._addTaskDialogOpen=!1,this._newTask=null,this._savingNewTask=!1,this._autoCollapseTimeouts=new Map,this._previousGroupProgress=new Map,this.shades={lighter:"",light:"",base:"",dark:"",darker:""},this.shadesArray=[]}setConfig(t){if(!t.entity)throw new Error("You need to define an entity");this._config={entity:t.entity,title:t.title||"Tasks",show_title:!1!==t.show_title,show_dateless_tasks:!1!==t.show_dateless_tasks,hide_card_background:!0===t.hide_card_background,accent_color:t.accent_color||"",task_text_color:t.task_text_color||"",show_points:!1!==t.show_points,untagged_header:t.untagged_header||"Untagged",tag_group_order:t.tag_group_order||[],show_future_tasks:!0===t.show_future_tasks,filter_section_id:t.filter_section_id,person_entity:t.person_entity,show_add_task_button:!1!==t.show_add_task_button}}getCardSize(){return 3}willUpdate(t){if((t.has("_config")||t.has("hass"))&&this._config&&this.hass){let t="var(--primary-color)";if(this._config.person_entity){const e=this.hass.states["sensor.chorebot_points"],o=(e?.attributes.people||{})[this._config.person_entity];o?.accent_color&&(t=o.accent_color)}this._config.accent_color&&(t=this._config.accent_color),this.shades=Ct(t),this.shadesArray=Object.values(this.shades)}(t.has("hass")||t.has("_config"))&&this._updateGroups()}_updateGroups(){if(!this.hass||!this._config)return;const t=this.hass.states[this._config.entity];if(!t)return;let e=function(t,e=!0,o=!1,s="Untagged",i="Upcoming",a,r){const n=t.attributes.chorebot_tasks||[],d=new Date;d.setHours(0,0,0,0);const c=new Date(d);c.setHours(23,59,59,999);const l=new Map,h=[];let u;if(a){const e=(t.attributes.chorebot_sections||[]).find(t=>t.name===a);u=e?e.id:a}for(const t of n){if(u&&t.section_id!==u)continue;if(r&&t.computed_person_id!==r)continue;const i=!!t.due,a="completed"===t.status;let n=!1,p=!1;if(i){if(t.due){const e=new Date(t.due);if(o&&e>c)p=!0;else{const o=new Date(e);o.setHours(0,0,0,0);const s=gt(o,d),i=o<d;a?t.last_completed&&gt(new Date(t.last_completed),new Date)&&(n=!0):(s||i)&&(n=!0)}}}else n=e;if(n){const e=t.tags||[];if(0===e.length)l.has(s)||l.set(s,[]),l.get(s).push(t);else for(const o of e)l.has(o)||l.set(o,[]),l.get(o).push(t)}else p&&h.push(t)}h.sort((t,e)=>new Date(t.due).getTime()-new Date(e.due).getTime());const p=Array.from(l.entries()).map(([t,e])=>({name:t,tasks:e,isCollapsed:!1}));return o&&h.length>0&&p.push({name:i,tasks:h,isCollapsed:!1}),p}(t,!1!==this._config.show_dateless_tasks,!0===this._config.show_future_tasks,this._config.untagged_header||"Untagged","Upcoming",this._config.filter_section_id,this._config.person_entity);e=function(t,e,o="Untagged",s="Upcoming"){return t.sort((t,i)=>{if(t.name===s)return 1;if(i.name===s)return-1;if(!e||0===e.length)return t.name===o?1:i.name===o?-1:t.name.localeCompare(i.name);const a=e.indexOf(t.name),r=e.indexOf(i.name);return-1!==a&&-1!==r?a-r:-1!==a?-1:-1!==r||t.name===o?1:i.name===o?-1:t.name.localeCompare(i.name)})}(e,this._config.tag_group_order,this._config.untagged_header,"Upcoming"),this._groups=e.map(t=>({...t,isCollapsed:this._findExistingCollapseState(t.name)}))}_findExistingCollapseState(t){const e=this._groups.find(e=>e.name===t);return void 0!==e?e.isCollapsed:"Upcoming"===t}render(){if(!this.hass||!this._config)return j`<ha-card>Loading...</ha-card>`;return this.hass.states[this._config.entity]?j`
      <ha-card
        class="${this._config.hide_card_background?"no-background":""}"
      >
        ${this._config.show_title?j`<div class="card-header">${this._config.title}</div>`:""}
        ${0===this._groups.length?j`<div class="empty-state">No tasks</div>`:j`<div class="tag-groups">
              ${this._renderAllGroups(this._groups)}
            </div>`}
        ${this._renderAddTaskButton()}
      </ha-card>

      ${this._renderEditDialog()} ${this._renderAddTaskDialog()}
    `:j`<ha-card>
        <div class="empty-state">Entity not found: ${this._config.entity}</div>
      </ha-card>`}_renderAllGroups(t){return t.map(t=>{const e=mt(t.tasks),o=this._config.task_text_color||"white",s=t.isCollapsed,i=e.completed===e.total,a=s&&i,r=e.total>0?e.completed/e.total*100:0;return this._checkAutoCollapse(t.name,e,i,s),j`
        <div class="tag-group-container ${s?"collapsed":""}">
          <div
            class="tag-group-header ${s?"collapsed":""}"
            style="background: #${this.shades.light}; color: ${o}; --progress-width: ${r}%; --darker-color: #${this.shades.dark};"
            @click=${()=>this._toggleGroup(t.name)}
          >
            <div class="tag-group-header-title">${t.name}</div>
            <div class="tag-group-header-progress">
              ${a?j`<ha-icon
                    icon="mdi:check"
                    style="color: ${o}; --mdi-icon-size: 20px;"
                  ></ha-icon>`:j`${e.completed}/${e.total}`}
            </div>
          </div>
          <div class="tag-group-tasks ${s?"collapsed":""}">
            <div class="tag-group-tasks-inner">
              ${this._renderTasks(t.tasks,o)}
            </div>
          </div>
        </div>
      `})}_renderTasks(t,e){return t.map(t=>{const o="completed"===t.status,s=o?`#${this.shades.base}`:"transparent",i=o?e:"var(--primary-text-color)",a=o?`#${this.shades.dark}`:"transparent",r=o?"white":"var(--divider-color)",n=o?"none":"2px solid var(--divider-color)";return j`
        <div
          class="todo-item"
          style="background: ${s}; color: ${i};"
          @click=${()=>this._openEditDialog(t)}
        >
          <div class="todo-content">
            <div class="todo-summary">${t.summary}</div>
            ${t.due||t.points_value||t.parent_uid?j`<div
                  class="todo-due-date"
                  style="color: ${function(t){if(!t.due||"completed"===t.status)return!1;const e=t.is_all_day||!1,o=new Date(t.due);if(e){const t=new Date,e=Date.UTC(t.getFullYear(),t.getMonth(),t.getDate());return Date.UTC(o.getUTCFullYear(),o.getUTCMonth(),o.getUTCDate())<e}{const t=new Date;return t.setHours(0,0,0,0),o.setHours(0,0,0,0),o<t}}(t)?"var(--error-color)":"inherit"}"
                >
                  ${t.due?function(t,e){if(e?.is_all_day){const e=new Date,o=Date.UTC(e.getFullYear(),e.getMonth(),e.getDate()),s=Date.UTC(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate())-o,i=Math.round(s/864e5);return 0===i?"Today":-1===i?"Yesterday":1===i?"Tomorrow":i<-1?`${Math.abs(i)} days ago`:`In ${i} days`}const o=new Date;o.setHours(0,0,0,0);const s=new Date(t);s.setHours(0,0,0,0);const i=s.getTime()-o.getTime(),a=Math.round(i/864e5);if(0===a)return new Date(t).toLocaleTimeString(void 0,{hour:"numeric",minute:"2-digit"});return-1===a?"Yesterday":1===a?"Tomorrow":a<-1?`${Math.abs(a)} days ago`:`In ${a} days`}(new Date(t.due),t):""}
                  ${t.parent_uid?j`<ha-icon
                        icon="mdi:sync"
                        class="recurring-icon"
                      ></ha-icon>`:""}
                  ${this._renderPointsBadge(t)}
                </div>`:""}
          </div>
          <div
            class="completion-circle"
            style="background: ${a}; border: ${n};"
            @click=${e=>this._handleCompletionClick(e,t)}
          >
            <ha-icon
              icon="mdi:check"
              style="color: ${r};"
            ></ha-icon>
          </div>
        </div>
      `})}_renderPointsBadge(t){if(!this._config?.show_points||!t.points_value)return j``;const e=this._config.task_text_color||"white",o=yt(this.hass),s=this.hass?.states[this._config.entity],i=s?.attributes.chorebot_templates||[];if(t.parent_uid){const s=i.find(e=>e.uid===t.parent_uid);if(s&&s.streak_bonus_points&&s.streak_bonus_interval){if((s.streak_current+1)%s.streak_bonus_interval===0)return j`<span
            class="points-badge bonus-pending"
            style="color: ${e};"
          >
            +${t.points_value} + ${s.streak_bonus_points}
            ${o.icon?j`<ha-icon icon="${o.icon}"></ha-icon>`:""}
            ${o.text?o.text:""}
          </span>`}}return j`<span
      class="points-badge"
      style="background: #${this.shades.lighter}; color: ${e}; border: 1px solid ${e};"
    >
      +${t.points_value}
      ${o.icon?j`<ha-icon icon="${o.icon}"></ha-icon>`:""}
      ${o.text?o.text:""}
    </span>`}_getFilteredTasks(t){return ft(t,!1!==this._config.show_dateless_tasks,this._config?.filter_section_id)}_toggleGroup(t){this._autoCollapseTimeouts.has(t)&&(clearTimeout(this._autoCollapseTimeouts.get(t)),this._autoCollapseTimeouts.delete(t));const e=this._groups.find(e=>e.name===t);e&&(e.isCollapsed=!e.isCollapsed,this.requestUpdate())}_checkAutoCollapse(t,e,o,s){const i=this._previousGroupProgress.get(t),a=i&&i.completed<i.total&&o&&!s;if(this._previousGroupProgress.set(t,{completed:e.completed,total:e.total}),a){this._autoCollapseTimeouts.has(t)&&clearTimeout(this._autoCollapseTimeouts.get(t));const e=window.setTimeout(()=>{const e=this._groups.find(e=>e.name===t);e&&(e.isCollapsed=!0,this.requestUpdate()),this._autoCollapseTimeouts.delete(t)},1500);this._autoCollapseTimeouts.set(t,e)}}async _toggleTask(t,e){const o="completed"===t.status?"needs_action":"completed";if(await this.hass.callService("todo","update_item",{entity_id:this._config.entity,item:t.uid,status:o}),"completed"===o&&e){this._playCompletionConfetti(e);const o=this._calculateTotalPointsAwarded(t);if(null!==o&&o>0){!function(t,e){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const o=document.createElement("div");if(o.textContent=`+${e}`,o.style.position="fixed",o.style.left=t.x-20+"px",o.style.top=t.y-30+"px",o.style.fontSize="28px",o.style.fontWeight="bold",o.style.color="white",o.style.textShadow="2px 2px 4px rgba(0, 0, 0, 0.8)",o.style.pointerEvents="none",o.style.zIndex="9999",o.style.animation="floatPoints 2s ease-out forwards",!document.getElementById("chorebot-points-animation-styles")){const t=document.createElement("style");t.id="chorebot-points-animation-styles",t.textContent="\n      @keyframes floatPoints {\n        0% {\n          transform: scale(0.5) translateY(0);\n          opacity: 1;\n        }\n        50% {\n          transform: scale(1.5) translateY(-30px);\n          opacity: 1;\n        }\n        100% {\n          transform: scale(1.5) translateY(-60px);\n          opacity: 0;\n        }\n      }\n    ",document.head.appendChild(t)}document.body.appendChild(o),setTimeout(()=>{o.remove()},2e3)}({x:e.x*window.innerWidth,y:e.y*window.innerHeight},o)}const s=this._areAllTasksComplete(),i=this._areAllDatedTasksComplete(),a=!!t.due;s?this._playAllCompleteStarShower():i&&a?this._playDatedTasksFireworks():this._isGroupComplete(t)&&this._playGroupFireworks()}}_handleCompletionClick(t,e){t.stopPropagation();const o=t.currentTarget.getBoundingClientRect(),s={x:(o.left+o.width/2)/window.innerWidth,y:(o.top+o.height/2)/window.innerHeight};this._toggleTask(e,s)}_playCompletionConfetti(t){!function(t,e){Mt({particleCount:30,spread:70,startVelocity:25,origin:t,colors:e,disableForReducedMotion:!0})}(t,this.shadesArray)}_isGroupComplete(t){const e=this.hass?.states[this._config.entity];if(!e)return!1;const o=this._getFilteredTasks(e),s=this._config.untagged_header||"Untagged",i=function(t,e="Untagged"){const o=new Map;for(const s of t){const t=s.tags||[];if(0===t.length)o.has(e)||o.set(e,[]),o.get(e).push(s);else for(const e of t)o.has(e)||o.set(e,[]),o.get(e).push(s)}return o}(o,s),a=t.tags||[],r=a.length>0?a:[s];for(const t of r){const e=i.get(t);if(!e)continue;const o=mt(e);if(o.total>0&&o.completed===o.total)return!0}return!1}_areAllTasksComplete(){const t=this.hass?.states[this._config.entity];if(!t)return!1;const e=mt(this._getFilteredTasks(t));return e.total>0&&e.completed===e.total}_areAllDatedTasksComplete(){const t=this.hass?.states[this._config.entity];if(!t)return!1;const e=bt(this._getFilteredTasks(t));return e.total>0&&e.completed===e.total}_playGroupFireworks(){St(this.shadesArray)}_playDatedTasksFireworks(){St(this.shadesArray)}_playAllCompleteStarShower(){Et(this.shadesArray)}_calculateTotalPointsAwarded(t){if(!t.points_value)return null;let e=t.points_value;if(t.parent_uid){const o=this.hass?.states[this._config.entity],s=(o?.attributes.chorebot_templates||[]).find(e=>e.uid===t.parent_uid);if(s?.streak_bonus_points&&s?.streak_bonus_interval){(s.streak_current+1)%s.streak_bonus_interval===0&&(e+=s.streak_bonus_points)}}return e}_openEditDialog(t){if(!this.hass||!this._config?.entity)return;const e=this.hass.states[this._config.entity];if(!e)return;const o=e.attributes.chorebot_templates||[];this._editingTask=kt(t,o),this._editDialogOpen=!0}_closeEditDialog(){this._editDialogOpen=!1,this._editingTask=null}_renderEditDialog(){const t=this.hass?.states[this._config.entity],e=t?.attributes.chorebot_sections||[],o=t?.attributes.chorebot_tags||[];return $t(this._editDialogOpen,this._editingTask,this.hass,e,o,this._saving,()=>this._closeEditDialog(),t=>this._formValueChanged(t),()=>this._saveTask(),()=>this._handleDeleteTask())}_formValueChanged(t){const e=t.detail.value;this._editingTask={...this._editingTask,...e},("has_due_date"in e||"is_all_day"in e||"has_recurrence"in e||"recurrence_frequency"in e)&&this.requestUpdate()}async _saveTask(){if(!this._editingTask||!this._editingTask.summary?.trim()||this._saving)return;this._saving=!0;const t={list_id:this._config.entity,uid:this._editingTask.uid,summary:this._editingTask.summary.trim()};if(this._editingTask.has_due_date&&this._editingTask.due_date){const e=!!this._editingTask.is_all_day;let o;if(e||!this._editingTask.due_time)o=`${this._editingTask.due_date}T00:00:00`;else{const t=3===this._editingTask.due_time.split(":").length?this._editingTask.due_time:`${this._editingTask.due_time}:00`;o=`${this._editingTask.due_date}T${t}`}const s=new Date(o);if(isNaN(s.getTime()))return console.error("Invalid date/time combination:",o),void(this._saving=!1);t.due=s.toISOString(),t.is_all_day=e}else!1===this._editingTask.has_due_date&&(t.due="",t.is_all_day=!1);this._editingTask.description&&(t.description=this._editingTask.description),this._editingTask.section_id&&(t.section_id=this._editingTask.section_id),void 0!==this._editingTask.tags&&(t.tags=this._editingTask.tags);const e=wt(this._editingTask);null!==e?t.rrule=e:!1===this._editingTask.has_recurrence&&(t.rrule=""),void 0!==this._editingTask.points_value&&(t.points_value=this._editingTask.points_value),void 0!==this._editingTask.streak_bonus_points&&(t.streak_bonus_points=this._editingTask.streak_bonus_points),void 0!==this._editingTask.streak_bonus_interval&&(t.streak_bonus_interval=this._editingTask.streak_bonus_interval);!!this._editingTask.parent_uid&&(t.include_future_occurrences=!0),console.log("Calling chorebot.update_task with payload:",t);try{await this.hass.callService("chorebot","update_task",t),this._closeEditDialog()}catch(t){console.error("Error saving task:",t),alert("Failed to save task. Please try again.")}finally{this._saving=!1}}async _handleDeleteTask(){if(!this._editingTask||this._saving)return;const t=this._editingTask,e=t.has_recurrence||t.parent_uid;if(confirm(e?"Delete this recurring task? This will remove all future occurrences, but keep completed instances.":"Delete this task? This action cannot be undone.")){this._saving=!0;try{await this.hass.callService("todo","remove_item",{entity_id:this._config.entity,item:t.uid}),this._closeEditDialog(),this.dispatchEvent(new CustomEvent("hass-notification",{detail:{message:"Task deleted successfully"},bubbles:!0,composed:!0}))}catch(t){console.error("Error deleting task:",t),alert(`Failed to delete task: ${t}`)}finally{this._saving=!1}}}_renderAddTaskButton(){if(!this._config?.show_add_task_button)return j``;const t=`#${this.shades.light}`,e=`color-mix(in srgb, #${this.shades.light} 20%, var(--card-background-color))`,o=`#${this.shades.light}`;return j`
      <div
        class="add-task-button-container"
        style="--button-border-color: ${t}; --button-hover-bg: ${e}; --button-hover-color: ${o};"
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
    `}_openAddTaskDialog(){const t=this.hass?.states[this._config.entity],e=t?.attributes.chorebot_sections||[];this._newTask=this._createBlankTask(e),this._addTaskDialogOpen=!0}_closeAddTaskDialog(){this._addTaskDialogOpen=!1,this._newTask=null}_createBlankTask(t){let e;if(this._config.filter_section_id){let o=t.find(t=>t.id===this._config.filter_section_id);o||(o=t.find(t=>t.name.toLowerCase()===this._config.filter_section_id.toLowerCase())),o&&(e=o.id)}if(!e&&this._config.person_entity){const o=t.find(t=>t.person_id===this._config.person_entity);o&&(e=o.id)}return!e&&t.length>0&&(e=t.sort((t,e)=>e.sort_order-t.sort_order)[0].id),{uid:"",summary:"",status:"needs_action",has_due_date:!1,is_all_day:!1,due_date:void 0,due_time:void 0,description:"",section_id:e,tags:[],has_recurrence:!1,recurrence_frequency:"DAILY",recurrence_interval:1,recurrence_byweekday:[],recurrence_bymonthday:1,points_value:0,streak_bonus_points:0,streak_bonus_interval:0}}_renderAddTaskDialog(){const t=this.hass?.states[this._config.entity],e=t?.attributes.chorebot_sections||[],o=t?.attributes.chorebot_tags||[];return $t(this._addTaskDialogOpen,this._newTask,this.hass,e,o,this._savingNewTask,()=>this._closeAddTaskDialog(),t=>this._formValueChangedForNewTask(t),()=>this._saveNewTask(),void 0,"Add Task",!1)}_formValueChangedForNewTask(t){const e=t.detail.value;this._newTask={...this._newTask,...e},("has_due_date"in e||"is_all_day"in e||"has_recurrence"in e||"recurrence_frequency"in e)&&this.requestUpdate()}async _saveNewTask(){if(!this._newTask||!this._newTask.summary?.trim()||this._savingNewTask)return;this._savingNewTask=!0;const t={list_id:this._config.entity,summary:this._newTask.summary.trim()};if(this._newTask.has_due_date&&this._newTask.due_date){const e=!!this._newTask.is_all_day;let o;if(e||!this._newTask.due_time)o=`${this._newTask.due_date}T00:00:00`;else{const t=3===this._newTask.due_time.split(":").length?this._newTask.due_time:`${this._newTask.due_time}:00`;o=`${this._newTask.due_date}T${t}`}const s=new Date(o);if(isNaN(s.getTime()))return console.error("Invalid date/time combination:",o),void(this._savingNewTask=!1);t.due=s.toISOString(),t.is_all_day=e}this._newTask.description&&(t.description=this._newTask.description),this._newTask.section_id&&(t.section_id=this._newTask.section_id),void 0!==this._newTask.tags&&this._newTask.tags.length>0&&(t.tags=this._newTask.tags);const e=wt(this._newTask);null!==e&&(t.rrule=e),void 0!==this._newTask.points_value&&this._newTask.points_value>0&&(t.points_value=this._newTask.points_value),null!==e&&(void 0!==this._newTask.streak_bonus_points&&this._newTask.streak_bonus_points>0&&(t.streak_bonus_points=this._newTask.streak_bonus_points),void 0!==this._newTask.streak_bonus_interval&&this._newTask.streak_bonus_interval>0&&(t.streak_bonus_interval=this._newTask.streak_bonus_interval));try{await this.hass.callService("chorebot","add_task",t),this._closeAddTaskDialog();const e=this.hass?.states[this._config.entity],o=e?.attributes.chorebot_sections||[];this._newTask=this._createBlankTask(o)}catch(t){console.error("Error adding task:",t),alert("Failed to add task. Please try again.")}finally{this._savingNewTask=!1}}static getStubConfig(){return{entity:"",title:"Tasks",show_title:!0,show_dateless_tasks:!0,show_future_tasks:!1,filter_section_id:"",person_entity:"",hide_card_background:!1,accent_color:"",task_text_color:"",untagged_header:"Untagged",tag_group_order:[],show_add_task_button:!0}}static getConfigForm(){return{schema:[{name:"entity",required:!0,selector:{entity:{filter:{domain:"todo"}}}},{name:"title",default:"Tasks",selector:{text:{}}},{name:"show_title",default:!0,selector:{boolean:{}}},{name:"show_dateless_tasks",default:!0,selector:{boolean:{}}},{name:"show_future_tasks",default:!1,selector:{boolean:{}}},{name:"filter_section_id",selector:{text:{}}},{name:"person_entity",selector:{entity:{filter:{domain:"person"}}}},{name:"hide_card_background",default:!1,selector:{boolean:{}}},{name:"accent_color",selector:{text:{}}},{name:"task_text_color",selector:{text:{}}},{name:"untagged_header",default:"Untagged",selector:{text:{}}},{name:"tag_group_order",selector:{select:{multiple:!0,custom_value:!0,options:[]}}},{name:"show_add_task_button",default:!0,selector:{boolean:{}}}],computeLabel:t=>({entity:"Todo Entity",title:"Card Title",show_title:"Show Title",show_dateless_tasks:"Show Tasks Without Due Date",show_future_tasks:"Show Future Tasks",filter_section_id:"Filter by Section",person_entity:"Filter by Person",hide_card_background:"Hide Card Background",accent_color:"Accent Color",task_text_color:"Task Text Color",untagged_header:"Untagged Tasks Header",tag_group_order:"Tag Display Order",show_add_task_button:"Show Add Task Button"}[t.name]||void 0),computeHelper:t=>({entity:"Select the ChoreBot todo entity to display",title:"Custom title for the card",show_title:"Show the card title",show_dateless_tasks:"Show tasks that do not have a due date",show_future_tasks:"Show tasks with future due dates in a collapsible 'Upcoming' section (collapsed by default)",filter_section_id:'Enter section name (e.g., "SECOND SECTION"). Leave empty to show all sections.',person_entity:"Optional: Filter to show only tasks assigned to this person. Also inherits their accent color if set.",hide_card_background:"Hide the card background and padding for a seamless look",accent_color:"Accent color for task items and headers (hex code or CSS variable like var(--primary-color))",task_text_color:"Text color for task items (hex code or CSS variable)",untagged_header:'Header text for tasks without tags (default: "Untagged")',tag_group_order:"Order to display tag groups. Tags not listed will appear alphabetically after these.",show_add_task_button:"Show the 'Add Task' button below tag groups for creating new tasks"}[t.name]||void 0)}}};Dt.styles=r`
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
      --mdc-dialog-min-width: 500px;
    }
  `,t([ut({attribute:!1})],Dt.prototype,"hass",void 0),t([pt()],Dt.prototype,"_config",void 0),t([pt()],Dt.prototype,"_editDialogOpen",void 0),t([pt()],Dt.prototype,"_editingTask",void 0),t([pt()],Dt.prototype,"_saving",void 0),t([pt()],Dt.prototype,"_groups",void 0),t([pt()],Dt.prototype,"_addTaskDialogOpen",void 0),t([pt()],Dt.prototype,"_newTask",void 0),t([pt()],Dt.prototype,"_savingNewTask",void 0),Dt=t([ct("chorebot-grouped-card")],Dt),window.customCards=window.customCards||[],window.customCards.push({type:"chorebot-grouped-card",name:"ChoreBot Grouped Card",description:"Display and manage ChoreBot tasks grouped by tags",preview:!0}),console.info("%c CHOREBOT-GROUPED-CARD %c v0.1.0 ","color: white; background: #2196F3; font-weight: bold;","color: #2196F3; background: white; font-weight: bold;");let Rt=class extends nt{constructor(){super(...arguments),this._dialogOpen=!1,this._newTask=null,this._saving=!1}setConfig(t){if(!t.entity)throw new Error("You need to define an entity");this._config={entity:t.entity,button_text:t.button_text||"Add Task",button_icon:t.button_icon||"mdi:plus",button_color:t.button_color||"var(--primary-color)",button_text_color:t.button_text_color||"white",button_size:t.button_size||"medium",hide_card_background:!0===t.hide_card_background,default_section_id:t.default_section_id,default_tags:t.default_tags||[]}}getCardSize(){return 1}render(){if(!this.hass||!this._config)return j`<ha-card>Loading...</ha-card>`;return this.hass.states[this._config.entity]?j`
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
      </ha-card>`}_openDialog(){const t=this.hass?.states[this._config.entity],e=t?.attributes.chorebot_sections||[];this._newTask=this._createBlankTask(e),this._dialogOpen=!0}_closeDialog(){this._dialogOpen=!1,this._newTask=null}_createBlankTask(t){let e;if(this._config.default_section_id){const o=t.find(t=>t.id===this._config.default_section_id);if(o)e=o.id;else{const o=t.find(t=>t.name.toLowerCase()===this._config.default_section_id.toLowerCase());o&&(e=o.id)}}else t.length>0&&(e=t.sort((t,e)=>e.sort_order-t.sort_order)[0].id);return{uid:"",summary:"",status:"needs_action",has_due_date:!1,is_all_day:!1,due_date:void 0,due_time:void 0,description:"",section_id:e,tags:this._config.default_tags||[],has_recurrence:!1,recurrence_frequency:"DAILY",recurrence_interval:1,recurrence_byweekday:[],recurrence_bymonthday:1}}_renderDialog(){const t=this.hass?.states[this._config.entity],e=t?.attributes.chorebot_sections||[],o=t?.attributes.chorebot_tags||[];return $t(this._dialogOpen,this._newTask,this.hass,e,o,this._saving,()=>this._closeDialog(),t=>this._formValueChanged(t),()=>this._saveTask(),void 0,"Add Task",!1)}_formValueChanged(t){const e=t.detail.value;this._newTask={...this._newTask,...e},("has_due_date"in e||"is_all_day"in e||"has_recurrence"in e||"recurrence_frequency"in e)&&this.requestUpdate()}async _saveTask(){if(!this._newTask||!this._newTask.summary?.trim()||this._saving)return;this._saving=!0;const t={list_id:this._config.entity,summary:this._newTask.summary.trim()};if(this._newTask.has_due_date&&this._newTask.due_date){const e=!!this._newTask.is_all_day;let o;if(e||!this._newTask.due_time)o=`${this._newTask.due_date}T00:00:00`;else{const t=3===this._newTask.due_time.split(":").length?this._newTask.due_time:`${this._newTask.due_time}:00`;o=`${this._newTask.due_date}T${t}`}const s=new Date(o);if(isNaN(s.getTime()))return console.error("Invalid date/time combination:",o),void(this._saving=!1);t.due=s.toISOString(),t.is_all_day=e}this._newTask.description&&(t.description=this._newTask.description),this._newTask.section_id&&(t.section_id=this._newTask.section_id),void 0!==this._newTask.tags&&this._newTask.tags.length>0&&(t.tags=this._newTask.tags);const e=wt(this._newTask);null!==e&&(t.rrule=e),void 0!==this._newTask.points_value&&this._newTask.points_value>0&&(t.points_value=this._newTask.points_value),null!==e&&(void 0!==this._newTask.streak_bonus_points&&this._newTask.streak_bonus_points>0&&(t.streak_bonus_points=this._newTask.streak_bonus_points),void 0!==this._newTask.streak_bonus_interval&&this._newTask.streak_bonus_interval>0&&(t.streak_bonus_interval=this._newTask.streak_bonus_interval));try{await this.hass.callService("chorebot","add_task",t),this._closeDialog();const e=this.hass?.states[this._config.entity],o=e?.attributes.chorebot_sections||[];this._newTask=this._createBlankTask(o)}catch(t){console.error("Error adding task:",t),alert("Failed to add task. Please try again.")}finally{this._saving=!1}}static getStubConfig(){return{entity:"",button_text:"Add Task",button_icon:"mdi:plus",button_color:"var(--primary-color)",button_text_color:"white",button_size:"medium",hide_card_background:!1,default_section_id:"",default_tags:[]}}static getConfigForm(){return{schema:[{name:"entity",required:!0,selector:{entity:{filter:{domain:"todo"}}}},{name:"button_text",default:"Add Task",selector:{text:{}}},{name:"button_icon",default:"mdi:plus",selector:{icon:{}}},{name:"button_color",default:"var(--primary-color)",selector:{text:{}}},{name:"button_text_color",default:"white",selector:{text:{}}},{name:"button_size",default:"medium",selector:{select:{options:[{label:"Small",value:"small"},{label:"Medium",value:"medium"},{label:"Large",value:"large"}]}}},{name:"hide_card_background",default:!1,selector:{boolean:{}}},{name:"default_section_id",selector:{text:{}}},{name:"default_tags",selector:{select:{multiple:!0,custom_value:!0,options:[]}}}],computeLabel:t=>({entity:"Todo Entity",button_text:"Button Text",button_icon:"Button Icon",button_color:"Button Color",button_text_color:"Button Text Color",button_size:"Button Size",hide_card_background:"Hide Card Background",default_section_id:"Default Section",default_tags:"Default Tags"}[t.name]||void 0),computeHelper:t=>({entity:"Select the ChoreBot todo entity for new tasks",button_text:"Text displayed on the button",button_icon:"Icon displayed on the button",button_color:"Button background color (hex code or CSS variable like var(--primary-color))",button_text_color:"Button text color (hex code or CSS variable)",button_size:"Size of the button",hide_card_background:"Hide the card background and padding for a seamless look",default_section_id:'Default section for new tasks (enter section name like "Kyle" or leave empty for automatic)',default_tags:"Tags to pre-fill when creating new tasks"}[t.name]||void 0)}}};Rt.styles=r`
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
      --mdc-dialog-min-width: 500px;
    }
  `,t([ut({attribute:!1})],Rt.prototype,"hass",void 0),t([pt()],Rt.prototype,"_config",void 0),t([pt()],Rt.prototype,"_dialogOpen",void 0),t([pt()],Rt.prototype,"_newTask",void 0),t([pt()],Rt.prototype,"_saving",void 0),Rt=t([ct("chorebot-add-task-card")],Rt),window.customCards=window.customCards||[],window.customCards.push({type:"chorebot-add-task-card",name:"ChoreBot Add Task Card",description:"A button card for quickly adding new ChoreBot tasks",preview:!0}),console.info("%c CHOREBOT-ADD-TASK-CARD %c v0.1.0 ","color: white; background: #4CAF50; font-weight: bold;","color: #4CAF50; background: white; font-weight: bold;");let Pt=class extends nt{constructor(){super(...arguments),this.shades={lighter:"",light:"",base:"",dark:"",darker:""}}setConfig(t){if(!t.person_entity)throw new Error("person_entity is required");this._config={type:"custom:chorebot-person-points-card",person_entity:t.person_entity,title:t.title||"Points",show_title:!1!==t.show_title,hide_card_background:!0===t.hide_card_background,show_progress:!1!==t.show_progress,accent_color:t.accent_color||"",progress_text_color:t.progress_text_color||""}}willUpdate(t){if(super.willUpdate(t),(t.has("_config")||t.has("hass"))&&this._config&&this.hass){let t="var(--primary-color)";if(this._config.person_entity){const e=this.hass.states["sensor.chorebot_points"],o=(e?.attributes.people||{})[this._config.person_entity];o?.accent_color&&(t=o.accent_color)}this._config.accent_color&&(t=this._config.accent_color),this.shades=Ct(t)}(t.has("hass")||t.has("_config"))&&this.hass&&this._config&&(this._progress=this._calculatePersonProgress())}_calculatePersonProgress(){if(!this.hass||!this._config)return{completed:0,total:0};const t=Object.values(this.hass.states).filter(t=>t.entity_id.startsWith("todo.")),e=t.filter(t=>t.entity_id.startsWith("todo.chorebot_")),o=function(t,e,o=!1){const s=[],i=t.filter(t=>t.entity_id.startsWith("todo.chorebot_"));for(const t of i){const i=ft(t,o).filter(t=>t.computed_person_id===e);s.push(...i)}return s}(e,this._config.person_entity,!1);return bt(o)}static getStubConfig(){return{type:"custom:chorebot-person-points-card",person_entity:"",title:"Points",show_title:!0,hide_card_background:!1,show_progress:!0,accent_color:"",progress_text_color:""}}static getConfigForm(){return{schema:[{name:"person_entity",required:!0,selector:{entity:{filter:{domain:"person"}}}},{name:"title",default:"Points",selector:{text:{}}},{name:"show_title",default:!0,selector:{boolean:{}}},{name:"hide_card_background",default:!1,selector:{boolean:{}}},{name:"show_progress",default:!0,selector:{boolean:{}}},{name:"accent_color",selector:{text:{}}},{name:"progress_text_color",selector:{text:{}}}],computeLabel:t=>({person_entity:"Person Entity",title:"Card Title",show_title:"Show Title",hide_card_background:"Hide Card Background",show_progress:"Show Progress Bar",accent_color:"Accent Color",progress_text_color:"Progress Text Color"}[t.name]||void 0),computeHelper:t=>({person_entity:"Select the person entity to display points for",title:"Custom title for the card",show_title:"Show the card title",hide_card_background:"Hide the card background and padding for a seamless look",show_progress:"Display task completion progress below the person's name",accent_color:"Accent color for progress bar and points text (hex code or CSS variable like var(--primary-color))",progress_text_color:"Text color for progress label (hex code or CSS variable)"}[t.name]||void 0)}}getCardSize(){return 1}render(){if(!this.hass||!this._config)return j``;const t=this.hass.states["sensor.chorebot_points"];if(!t)return j`<ha-card>
        <div class="error-message">
          ChoreBot Points sensor not found. Make sure the integration is set up.
        </div>
      </ha-card>`;const e=this.hass.states[this._config.person_entity];if(!e)return j`<ha-card>
        <div class="error-message">
          Person entity not found. Please check your configuration.
        </div>
      </ha-card>`;const o=(t.attributes.people||{})[this._config.person_entity];return o?j`
      <ha-card
        class="${this._config.hide_card_background?"no-background":""}"
      >
        ${this._config.show_title?j`<div class="card-header">${this._config.title}</div>`:""}
        ${this._renderPersonDisplay(e,o)}
      </ha-card>
    `:j`<ha-card>
        <div class="error-message">
          Person not found in points system. Complete tasks to earn points.
        </div>
      </ha-card>`}_renderPersonDisplay(t,e){const o=t.attributes.entity_picture,s=this._getPersonName(this._config.person_entity),i=yt(this.hass);return j`
      <div class="person-container">
        <div class="person-left">
          ${o?j`<div class="person-avatar">
                <img src="${o}" alt="${s}" />
              </div>`:j`<div class="person-avatar initials">
                ${this._getPersonInitials(this._config.person_entity)}
              </div>`}
        </div>
        <div class="person-info">
          <div class="person-header">
            <div class="person-name">${s}</div>
            <div class="person-points" style="color: #${this.shades.base}">
              ${e.points_balance}
              ${i.icon?j`<ha-icon icon="${i.icon}"></ha-icon>`:""}
              ${i.text?i.text:""}
            </div>
          </div>
          ${this._config.show_progress&&this._progress?this._renderProgressBar(this._progress):""}
        </div>
      </div>
    `}_renderProgressBar(t){const e=t.total>0?t.completed/t.total*100:0,o=this._config.progress_text_color||"var(--text-primary-color)";return j`
      <div
        class="progress-bar"
        style="background: #${this.shades.lighter}"
        aria-label="${t.completed} of ${t.total} tasks completed"
      >
        <div
          class="progress-bar-fill"
          style="width: ${e}%; background: #${this.shades.darker}"
        ></div>
        <div class="progress-text" style="color: ${o}">
          ${t.completed}/${t.total}
        </div>
      </div>
    `}_getPersonName(t){const e=this.hass?.states[t];return e?.attributes.friendly_name||t.replace("person.","")}_getPersonInitials(t){return this._getPersonName(t).split(" ").map(t=>t[0]).join("").toUpperCase().slice(0,2)}};Pt.styles=r`
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
  `,t([ut({attribute:!1})],Pt.prototype,"hass",void 0),t([pt()],Pt.prototype,"_config",void 0),t([pt()],Pt.prototype,"_progress",void 0),Pt=t([ct("chorebot-person-points-card")],Pt),window.customCards=window.customCards||[],window.customCards.push({type:"chorebot-person-points-card",name:"ChoreBot Person Points Card",description:"Display a person's avatar and points balance",preview:!0}),console.info("%c CHOREBOT-PERSON-POINTS-CARD %c v0.1.0 ","color: white; background: #FF9800; font-weight: bold;","color: #FF9800; background: white; font-weight: bold;");let Ot=class extends nt{constructor(){super(...arguments),this._redeeming=null,this._showConfirmModal=!1,this._showAddRewardModal=!1,this._pendingRedemption=null,this._rewardFormData={name:"",cost:50,icon:"mdi:gift",description:""},this._showEditRewardModal=!1,this._editingRewardId=null,this._rewardFormSchema=[{name:"name",required:!0,selector:{text:{}}},{name:"cost",selector:{number:{min:1,max:1e4,mode:"box"}}},{name:"icon",selector:{icon:{}}},{name:"description",selector:{text:{multiline:!0}}}],this._computeRewardFieldLabel=t=>{const e=vt(this.hass);return{name:"Name",cost:`Cost (${e.charAt(0).toUpperCase()+e.slice(1)})`,icon:"Icon",description:"Description (Optional)"}[t.name]||t.name},this._computeRewardFieldHelper=t=>({cost:`Cost between 1 and 10,000 ${vt(this.hass)}`,icon:"Use Material Design Icons (e.g., mdi:gift, mdi:ice-cream)"}[t.name]||""),this._handleRewardFormChange=t=>{this._rewardFormData=t.detail.value}}setConfig(t){if(!t.person_entity)throw new Error("person_entity is required");this._config={type:"custom:chorebot-person-rewards-card",person_entity:t.person_entity,title:t.title||void 0,show_title:!1!==t.show_title,hide_card_background:!0===t.hide_card_background,show_disabled_rewards:!0===t.show_disabled_rewards,sort_by:t.sort_by||"cost",show_add_reward_button:!1!==t.show_add_reward_button,accent_color:t.accent_color||""}}static getStubConfig(){return{type:"custom:chorebot-person-rewards-card",person_entity:"person.example",title:"My Rewards",show_title:!0,hide_card_background:!1,show_disabled_rewards:!1,sort_by:"cost",show_add_reward_button:!0,accent_color:""}}getCardSize(){return 3}static getConfigForm(){return{schema:[{name:"person_entity",required:!0,selector:{entity:{domain:"person"}}},{name:"title",selector:{text:{}}},{name:"show_title",default:!0,selector:{boolean:{}}},{name:"hide_card_background",default:!1,selector:{boolean:{}}},{name:"show_disabled_rewards",default:!1,selector:{boolean:{}}},{name:"sort_by",default:"cost",selector:{select:{options:[{label:"Cost (Low to High)",value:"cost"},{label:"Name (A-Z)",value:"name"},{label:"Date Created (Oldest First)",value:"created"}]}}},{name:"show_add_reward_button",default:!0,selector:{boolean:{}}},{name:"accent_color",selector:{text:{}}}],computeLabel:t=>({person_entity:"Person Entity",title:"Card Title",show_title:"Show Title",hide_card_background:"Hide Card Background",show_disabled_rewards:"Show Disabled Rewards",sort_by:"Sort Rewards By",show_add_reward_button:"Show Add Reward Button",accent_color:"Accent Color"}[t.name]||void 0),computeHelper:t=>({person_entity:"Select the person whose rewards to display",title:'Custom title for the card (defaults to "{Person Name}\'s Rewards")',show_title:"Show the card title",hide_card_background:"Hide the card background and padding for a seamless look",show_disabled_rewards:"Include rewards that have been disabled in the grid",sort_by:"Choose how to sort the rewards in the grid",show_add_reward_button:"Show the 'Add Reward' card for creating new rewards",accent_color:"Accent color for reward icons and buttons (hex code or CSS variable like var(--primary-color))"}[t.name]||void 0)}}render(){if(!this.hass||!this._config)return j`<ha-card>Loading...</ha-card>`;if(!this.hass.states[this._config.person_entity])return j`<ha-card>
        <div class="error-state">
          Person entity "${this._config.person_entity}" not found. Please check
          your configuration.
        </div>
      </ha-card>`;const t=this.hass.states["sensor.chorebot_points"];if(!t)return j`<ha-card>
        <div class="empty-state">
          ChoreBot Points sensor not found. Make sure the integration is set up.
        </div>
      </ha-card>`;const e=t.attributes.people||{},o=t.attributes.rewards||[];let s="var(--primary-color)";if(this._config.person_entity){const t=e[this._config.person_entity];t?.accent_color&&(s=t.accent_color)}this._config.accent_color&&(s=this._config.accent_color),this.style.setProperty("--accent-color",s);const i=this._getPersonName(this._config.person_entity),a=this._config.title||`${i}'s Rewards`;return j`
      <ha-card
        class="${this._config.hide_card_background?"no-background":""}"
      >
        ${this._config.show_title?j`<div class="card-header">${a}</div>`:""}
        ${this._renderRewardsGrid(o,e)}
      </ha-card>
      ${this._showConfirmModal?this._renderConfirmModal(e,o):""}
      ${this._showAddRewardModal?this._renderAddRewardModal():""}
      ${this._showEditRewardModal?this._renderEditRewardModal():""}
    `}_renderConfirmModal(t,e){if(!this._pendingRedemption||!this._config)return"";const{personId:o,rewardId:s}=this._pendingRedemption,i=t[o],a=e.find(t=>t.id===s);if(!i||!a)return"";const r=this._getPersonName(o),n=i.points_balance-a.cost,d=i.points_balance>=a.cost,c=a.enabled&&d,l=yt(this.hass);return j`
      <div class="modal-overlay" @click="${this._cancelRedemption}">
        <div
          class="modal-content"
          @click="${t=>t.stopPropagation()}"
        >
          <div class="modal-header">
            ${c?"Are you sure?":"Reward Details"}
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
                <span class="modal-info-value">${r}</span>
              </div>
              <div class="modal-info-row">
                <span class="modal-info-label">Reward:</span>
                <span class="modal-info-value">${a.name}</span>
              </div>
              <div class="modal-info-row">
                <span class="modal-info-label">Cost:</span>
                <span class="modal-info-value"
                  >${a.cost}
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
              ${a.enabled?"":j`<div
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
    `:""}_renderRewardsGrid(t,e){if(!this._config)return"";const o=t.filter(t=>t.person_id===this._config.person_entity),s=o.filter(t=>this._config.show_disabled_rewards||t.enabled),i=this._sortRewards(s),a=e[this._config.person_entity];return 0!==i.length||this._config.show_add_reward_button?j`
      <div class="rewards-grid">
        ${i.map(t=>this._renderRewardCard(t,a))}
        ${this._config.show_add_reward_button?this._renderAddRewardCard():""}
      </div>
    `:j`<div class="empty-state">
        No rewards configured yet. Use the "Add Reward" button or
        <code>chorebot.manage_reward</code> service to create rewards.
      </div>`}_renderRewardCard(t,e){const o=!!e&&e.points_balance>=t.cost,s=!t.enabled||!o,i=yt(this.hass);return j`
      <div
        class="reward-card ${s?"disabled":""}"
        @click="${()=>this._handleRewardClick(t,o)}"
      >
        <div class="reward-icon-section">
          <div class="reward-icon">
            <ha-icon icon="${t.icon}"></ha-icon>
          </div>
        </div>
        <div class="reward-info">
          <div class="reward-header">
            <div class="reward-name">${t.name}</div>
            <div class="reward-cost">
              ${t.cost}
              ${i.icon?j`<ha-icon icon="${i.icon}"></ha-icon>`:""}
              ${i.text?i.text:""}
            </div>
          </div>
          ${t.description?j`<div class="reward-description">${t.description}</div>`:""}
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
    `}_sortRewards(t){const e=[...t];switch(this._config.sort_by){case"name":return e.sort((t,e)=>t.name.localeCompare(e.name));case"created":return e.sort((t,e)=>new Date(t.created||0).getTime()-new Date(e.created||0).getTime());default:return e.sort((t,e)=>t.cost-e.cost)}}_handleRewardClick(t,e){this._pendingRedemption={personId:this._config.person_entity,rewardId:t.id},this._showConfirmModal=!0}_cancelRedemption(){this._showConfirmModal=!1,this._pendingRedemption=null}async _confirmRedemption(){if(!this._pendingRedemption)return;const{personId:t,rewardId:e}=this._pendingRedemption;this._showConfirmModal=!1,this._pendingRedemption=null,this._redeeming=e;try{await this.hass.callService("chorebot","redeem_reward",{person_id:t,reward_id:e}),this._showRedemptionSuccess()}catch(t){const e=t.message||"Failed to redeem reward. Please try again.";alert(e)}finally{this._redeeming=null}}_showRedemptionSuccess(){const t=function(t){const e=Ct(t);return[e.lighter,e.light,e.base,e.dark,e.darker]}(this._config.accent_color||getComputedStyle(this).getPropertyValue("--primary-color")||"#03a9f4");Et(t,3e3)}_openAddRewardModal(){this._rewardFormData={name:"",cost:50,icon:"mdi:gift",description:""},this._showAddRewardModal=!0}_closeAddRewardModal(){this._showAddRewardModal=!1}async _createReward(){if(!this._config)return;const{name:t,cost:e,icon:o,description:s}=this._rewardFormData;if(t.trim())try{await this.hass.callService("chorebot","manage_reward",{name:t.trim(),cost:Math.max(1,Math.min(1e4,e)),icon:o||"mdi:gift",description:s.trim(),person_id:this._config.person_entity}),this._closeAddRewardModal()}catch(t){const e=t.message||"Failed to create reward. Please try again.";alert(e)}else alert("Reward name is required")}_openEditRewardModal(t){if(!this.hass)return;const e=this.hass.states["sensor.chorebot_points"];if(!e)return;const o=(e.attributes.rewards||[]).find(e=>e.id===t);o?(this._rewardFormData={name:o.name,cost:o.cost,icon:o.icon,description:o.description||""},this._editingRewardId=t,this._showEditRewardModal=!0):alert("Reward not found")}_closeEditRewardModal(){this._showEditRewardModal=!1,this._editingRewardId=null,this._rewardFormData={name:"",cost:50,icon:"mdi:gift",description:""}}_handleEditButtonClick(t){this._showConfirmModal=!1,this._pendingRedemption=null,this._openEditRewardModal(t)}async _updateReward(){if(!this._config||!this._editingRewardId)return;const{name:t,cost:e,icon:o,description:s}=this._rewardFormData;if(t.trim())try{await this.hass.callService("chorebot","manage_reward",{reward_id:this._editingRewardId,name:t.trim(),cost:Math.max(1,Math.min(1e4,e)),icon:o||"mdi:gift",description:s.trim(),person_id:this._config.person_entity}),this._closeEditRewardModal()}catch(t){const e=t.message||"Failed to update reward. Please try again.";alert(e)}else alert("Reward name is required")}_getPersonName(t){const e=this.hass?.states[t];return e?.attributes.friendly_name||t.replace("person.","")}};Ot.styles=r`
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
      --mdi-icon-size: 36px;
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
  `,t([ut({attribute:!1})],Ot.prototype,"hass",void 0),t([pt()],Ot.prototype,"_config",void 0),t([pt()],Ot.prototype,"_redeeming",void 0),t([pt()],Ot.prototype,"_showConfirmModal",void 0),t([pt()],Ot.prototype,"_showAddRewardModal",void 0),t([pt()],Ot.prototype,"_pendingRedemption",void 0),t([pt()],Ot.prototype,"_rewardFormData",void 0),t([pt()],Ot.prototype,"_showEditRewardModal",void 0),t([pt()],Ot.prototype,"_editingRewardId",void 0),Ot=t([ct("chorebot-person-rewards-card")],Ot),window.customCards=window.customCards||[],window.customCards.push({type:"chorebot-person-rewards-card",name:"ChoreBot Person Rewards Card",description:"Display person-specific rewards with inline creation and redemption",preview:!0}),console.info("%c CHOREBOT-PERSON-REWARDS-CARD %c v0.1.0 ","color: white; background: #9C27B0; font-weight: bold;","color: #9C27B0; background: white; font-weight: bold;"),console.info("%c CHOREBOT-CARDS %c v0.1.0 ","background: #3498db; color: white; font-weight: bold; padding: 2px 4px; border-radius: 3px 0 0 3px;","background: #ecf0f1; color: #3498db; font-weight: bold; padding: 2px 4px; border-radius: 0 3px 3px 0;");
