function t(t,e,o,i){var s,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var n=t.length-1;n>=0;n--)(s=t[n])&&(a=(r<3?s(a):r>3?s(e,o,a):s(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,o=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;let r=class{constructor(t,e,o){if(this._$cssResult$=!0,o!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(o&&void 0===t){const o=void 0!==e&&1===e.length;o&&(t=s.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&s.set(e,t))}return t}toString(){return this.cssText}};const a=(t,...e)=>{const o=1===t.length?t[0]:e.reduce((e,o,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[i+1],t[0]);return new r(o,t,i)},n=o?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:d,defineProperty:c,getOwnPropertyDescriptor:l,getOwnPropertyNames:h,getOwnPropertySymbols:u,getPrototypeOf:p}=Object,_=globalThis,g=_.trustedTypes,f=g?g.emptyScript:"",m=_.reactiveElementPolyfillSupport,b=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=null!==t;break;case Number:o=null===t?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch(t){o=null}}return o}},w=(t,e)=>!d(t,e),v={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:w};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),_.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=v){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const o=Symbol(),i=this.getPropertyDescriptor(t,o,e);void 0!==i&&c(this.prototype,t,i)}}static getPropertyDescriptor(t,e,o){const{get:i,set:s}=l(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:i,set(e){const r=i?.call(this);s?.call(this,e),this.requestUpdate(t,r,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??v}static _$Ei(){if(this.hasOwnProperty(b("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(b("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b("properties"))){const t=this.properties,e=[...h(t),...u(t)];for(const o of e)this.createProperty(o,t[o])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,o]of e)this.elementProperties.set(t,o)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const o=this._$Eu(t,e);void 0!==o&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const t of o)e.unshift(n(t))}else void 0!==t&&e.push(n(t));return e}static _$Eu(t,e){const o=e.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const o of e.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{if(o)t.adoptedStyleSheets=i.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const o of i){const i=document.createElement("style"),s=e.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=o.cssText,t.appendChild(i)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$ET(t,e){const o=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,o);if(void 0!==i&&!0===o.reflect){const s=(void 0!==o.converter?.toAttribute?o.converter:y).toAttribute(e,o.type);this._$Em=t,null==s?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(t,e){const o=this.constructor,i=o._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=o.getPropertyOptions(i),s="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=i;const r=s.fromAttribute(e,t.type);this[i]=r??this._$Ej?.get(i)??r,this._$Em=null}}requestUpdate(t,e,o){if(void 0!==t){const i=this.constructor,s=this[t];if(o??=i.getPropertyOptions(t),!((o.hasChanged??w)(s,e)||o.useDefault&&o.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,o))))return;this.C(t,e,o)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:o,reflect:i,wrapped:s},r){o&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),!0!==s||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||o||(e=void 0),this._$AL.set(t,e)),!0===i&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,o]of t){const{wrapped:t}=o,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,o,i)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[b("elementProperties")]=new Map,x[b("finalized")]=new Map,m?.({ReactiveElement:x}),(_.reactiveElementVersions??=[]).push("2.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const k=globalThis,$=k.trustedTypes,C=$?$.createPolicy("lit-html",{createHTML:t=>t}):void 0,T="$lit$",A=`lit$${Math.random().toFixed(9).slice(2)}$`,M="?"+A,S=`<${M}>`,E=document,R=()=>E.createComment(""),D=t=>null===t||"object"!=typeof t&&"function"!=typeof t,P=Array.isArray,O="[ \t\n\f\r]",U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,F=/-->/g,z=/>/g,I=RegExp(`>|${O}(?:([^\\s"'>=/]+)(${O}*=${O}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),N=/'/g,H=/"/g,B=/^(?:script|style|textarea|title)$/i,L=(t=>(e,...o)=>({_$litType$:t,strings:e,values:o}))(1),j=Symbol.for("lit-noChange"),Y=Symbol.for("lit-nothing"),q=new WeakMap,W=E.createTreeWalker(E,129);function V(t,e){if(!P(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==C?C.createHTML(e):e}const G=(t,e)=>{const o=t.length-1,i=[];let s,r=2===e?"<svg>":3===e?"<math>":"",a=U;for(let e=0;e<o;e++){const o=t[e];let n,d,c=-1,l=0;for(;l<o.length&&(a.lastIndex=l,d=a.exec(o),null!==d);)l=a.lastIndex,a===U?"!--"===d[1]?a=F:void 0!==d[1]?a=z:void 0!==d[2]?(B.test(d[2])&&(s=RegExp("</"+d[2],"g")),a=I):void 0!==d[3]&&(a=I):a===I?">"===d[0]?(a=s??U,c=-1):void 0===d[1]?c=-2:(c=a.lastIndex-d[2].length,n=d[1],a=void 0===d[3]?I:'"'===d[3]?H:N):a===H||a===N?a=I:a===F||a===z?a=U:(a=I,s=void 0);const h=a===I&&t[e+1].startsWith("/>")?" ":"";r+=a===U?o+S:c>=0?(i.push(n),o.slice(0,c)+T+o.slice(c)+A+h):o+A+(-2===c?e:h)}return[V(t,r+(t[o]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class Z{constructor({strings:t,_$litType$:e},o){let i;this.parts=[];let s=0,r=0;const a=t.length-1,n=this.parts,[d,c]=G(t,e);if(this.el=Z.createElement(d,o),W.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=W.nextNode())&&n.length<a;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(T)){const e=c[r++],o=i.getAttribute(t).split(A),a=/([.?@])?(.*)/.exec(e);n.push({type:1,index:s,name:a[2],strings:o,ctor:"."===a[1]?tt:"?"===a[1]?et:"@"===a[1]?ot:Q}),i.removeAttribute(t)}else t.startsWith(A)&&(n.push({type:6,index:s}),i.removeAttribute(t));if(B.test(i.tagName)){const t=i.textContent.split(A),e=t.length-1;if(e>0){i.textContent=$?$.emptyScript:"";for(let o=0;o<e;o++)i.append(t[o],R()),W.nextNode(),n.push({type:2,index:++s});i.append(t[e],R())}}}else if(8===i.nodeType)if(i.data===M)n.push({type:2,index:s});else{let t=-1;for(;-1!==(t=i.data.indexOf(A,t+1));)n.push({type:7,index:s}),t+=A.length-1}s++}}static createElement(t,e){const o=E.createElement("template");return o.innerHTML=t,o}}function K(t,e,o=t,i){if(e===j)return e;let s=void 0!==i?o._$Co?.[i]:o._$Cl;const r=D(e)?void 0:e._$litDirective$;return s?.constructor!==r&&(s?._$AO?.(!1),void 0===r?s=void 0:(s=new r(t),s._$AT(t,o,i)),void 0!==i?(o._$Co??=[])[i]=s:o._$Cl=s),void 0!==s&&(e=K(t,s._$AS(t,e.values),s,i)),e}class X{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:o}=this._$AD,i=(t?.creationScope??E).importNode(e,!0);W.currentNode=i;let s=W.nextNode(),r=0,a=0,n=o[0];for(;void 0!==n;){if(r===n.index){let e;2===n.type?e=new J(s,s.nextSibling,this,t):1===n.type?e=new n.ctor(s,n.name,n.strings,this,t):6===n.type&&(e=new it(s,this,t)),this._$AV.push(e),n=o[++a]}r!==n?.index&&(s=W.nextNode(),r++)}return W.currentNode=E,i}p(t){let e=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class J{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,o,i){this.type=2,this._$AH=Y,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=K(this,t,e),D(t)?t===Y||null==t||""===t?(this._$AH!==Y&&this._$AR(),this._$AH=Y):t!==this._$AH&&t!==j&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>P(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Y&&D(this._$AH)?this._$AA.nextSibling.data=t:this.T(E.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:o}=t,i="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=Z.createElement(V(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new X(i,this),o=t.u(this.options);t.p(e),this.T(o),this._$AH=t}}_$AC(t){let e=q.get(t.strings);return void 0===e&&q.set(t.strings,e=new Z(t)),e}k(t){P(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,i=0;for(const s of t)i===e.length?e.push(o=new J(this.O(R()),this.O(R()),this,this.options)):o=e[i],o._$AI(s),i++;i<e.length&&(this._$AR(o&&o._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,o,i,s){this.type=1,this._$AH=Y,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=s,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=Y}_$AI(t,e=this,o,i){const s=this.strings;let r=!1;if(void 0===s)t=K(this,t,e,0),r=!D(t)||t!==this._$AH&&t!==j,r&&(this._$AH=t);else{const i=t;let a,n;for(t=s[0],a=0;a<s.length-1;a++)n=K(this,i[o+a],e,a),n===j&&(n=this._$AH[a]),r||=!D(n)||n!==this._$AH[a],n===Y?t=Y:t!==Y&&(t+=(n??"")+s[a+1]),this._$AH[a]=n}r&&!i&&this.j(t)}j(t){t===Y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends Q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Y?void 0:t}}class et extends Q{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Y)}}class ot extends Q{constructor(t,e,o,i,s){super(t,e,o,i,s),this.type=5}_$AI(t,e=this){if((t=K(this,t,e,0)??Y)===j)return;const o=this._$AH,i=t===Y&&o!==Y||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,s=t!==Y&&(o===Y||i);i&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){K(this,t)}}const st=k.litHtmlPolyfillSupport;st?.(Z,J),(k.litHtmlVersions??=[]).push("3.3.1");const rt=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class at extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,o)=>{const i=o?.renderBefore??e;let s=i._$litPart$;if(void 0===s){const t=o?.renderBefore??null;i._$litPart$=s=new J(e.insertBefore(R(),t),t,void 0,o??{})}return s._$AI(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return j}}at._$litElement$=!0,at.finalized=!0,rt.litElementHydrateSupport?.({LitElement:at});const nt=rt.litElementPolyfillSupport;nt?.({LitElement:at}),(rt.litElementVersions??=[]).push("4.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const dt=t=>(e,o)=>{void 0!==o?o.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},ct={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:w},lt=(t=ct,e,o)=>{const{kind:i,metadata:s}=o;let r=globalThis.litPropertyMetadata.get(s);if(void 0===r&&globalThis.litPropertyMetadata.set(s,r=new Map),"setter"===i&&((t=Object.create(t)).wrapped=!0),r.set(o.name,t),"accessor"===i){const{name:i}=o;return{set(o){const s=e.get.call(this);e.set.call(this,o),this.requestUpdate(i,s,t)},init(e){return void 0!==e&&this.C(i,void 0,t,e),e}}}if("setter"===i){const{name:i}=o;return function(o){const s=this[i];e.call(this,o),this.requestUpdate(i,s,t)}}throw Error("Unsupported decorator location: "+i)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ht(t){return(e,o)=>"object"==typeof o?lt(t,e,o):((t,e,o)=>{const i=e.hasOwnProperty(o);return e.constructor.createProperty(o,t),i?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ut(t){return ht({...t,state:!0,attribute:!1})}function pt(t){try{const e=new Date(t);if(isNaN(e.getTime()))return{date:null,time:null};const o=e.getFullYear(),i=String(e.getMonth()+1).padStart(2,"0"),s=String(e.getDate()).padStart(2,"0"),r=String(e.getHours()).padStart(2,"0");return{date:`${o}-${i}-${s}`,time:`${r}:${String(e.getMinutes()).padStart(2,"0")}`}}catch(e){return console.error("Date parsing error:",e,t),{date:null,time:null}}}function _t(t,e){return t.getFullYear()===e.getFullYear()&&t.getMonth()===e.getMonth()&&t.getDate()===e.getDate()}function gt(t,e=!0,o){const i=t.attributes.chorebot_tasks||[],s=new Date;s.setHours(0,0,0,0);let r=i.filter(t=>{const o=!!t.due,i="completed"===t.status;if(!o)return e;const r=new Date(t.due);r.setHours(0,0,0,0);const a=_t(r,s),n=r<s;if(i&&t.last_completed){return!!_t(new Date(t.last_completed),new Date)}return!!a||!(!n||i)});if(o){const e=t.attributes.chorebot_sections||[],i=o,s=e.find(t=>t.name===i),a=s?s.id:i;r=r.filter(t=>t.section_id===a)}return r}function ft(t){const e=t.filter(t=>"completed"===t.status).length;return{completed:e,total:t.length}}function mt(t){const e=t.filter(t=>!!t.due),o=e.filter(t=>"completed"===t.status).length;return{completed:o,total:e.length}}function bt(t){if(!t||!t.has_recurrence)return null;const{recurrence_frequency:e,recurrence_interval:o,recurrence_byweekday:i,recurrence_bymonthday:s}=t;if(!e)return null;let r=`FREQ=${e};INTERVAL=${o||1}`;if("WEEKLY"===e&&i&&i.length>0)r+=`;BYDAY=${i.join(",").toUpperCase()}`;else if("MONTHLY"===e&&s){r+=`;BYMONTHDAY=${Math.max(1,Math.min(31,s))}`}return r}function yt(t){const e=t.states["sensor.chorebot_points"],o=e?.attributes.points_display;return o?{icon:o.icon??"",text:o.text??"points"}:{icon:"",text:"points"}}function wt(t){const e=yt(t);return e.text?e.text.toLowerCase():""}function vt(t,e){const o={...t,is_all_day:t.is_all_day||!1,tags:t.tags||[],section_id:t.section_id,points_value:t.points_value||0,streak_bonus_points:t.streak_bonus_points||0,streak_bonus_interval:t.streak_bonus_interval||0};if(t.due){const e=pt(t.due);o.due_date=e.date??void 0,o.due_time=e.time??void 0,o.has_due_date=!0}else o.has_due_date=!1;let i=t.rrule;if(t.parent_uid&&e){const s=e.find(e=>e.uid===t.parent_uid);s&&(i=s.rrule,o.streak_bonus_points=s.streak_bonus_points||0,o.streak_bonus_interval=s.streak_bonus_interval||0)}const s=function(t){if(!t)return null;try{const e=t.split(";");let o=null,i=1;const s=[];let r=null;for(const t of e){const[e,a]=t.split("=");if("FREQ"===e)"DAILY"!==a&&"WEEKLY"!==a&&"MONTHLY"!==a||(o=a);else if("INTERVAL"===e){const t=parseInt(a,10);!isNaN(t)&&t>0&&(i=t)}else if("BYDAY"===e)s.push(...a.split(","));else if("BYMONTHDAY"===e){const t=parseInt(a,10);!isNaN(t)&&t>=1&&t<=31&&(r=t)}}return o?{frequency:o,interval:i,byweekday:s,bymonthday:r}:null}catch(e){return console.error("rrule parsing error:",e,t),null}}(i);return s?(o.has_recurrence=!0,o.recurrence_frequency=s.frequency,o.recurrence_interval=s.interval,o.recurrence_byweekday=s.byweekday,o.recurrence_bymonthday=s.bymonthday||1):(o.has_recurrence=!1,o.recurrence_frequency="DAILY",o.recurrence_interval=1,o.recurrence_byweekday=[],o.recurrence_bymonthday=1),o}function xt(t){const e=function(t){const e=yt(t);return e.text?e.text.charAt(0).toUpperCase()+e.text.slice(1):""}(t)||"Points";return function(t){return{summary:"Task Name",has_due_date:"Has Due Date",is_all_day:"All Day",due_date:"Date",due_time:"Time",description:"Description",section_id:"Section",tags:"Tags",has_recurrence:"Recurring Task",recurrence_frequency:"Frequency",recurrence_interval:"Repeat Every",recurrence_byweekday:"Days of Week",recurrence_bymonthday:"Day of Month",points_value:`${e} Value`,streak_bonus_points:`Streak Bonus ${e}`,streak_bonus_interval:"Bonus Every X Days (0 = no bonus)"}[t.name]||t.name}}function kt(t,e,o,i,s,r,a,n,d,c,l="Edit Task",h=!0){if(!t||!e)return L``;const u=function(t,e,o){const i=void 0!==t.has_due_date?t.has_due_date:!!t.due,s=void 0!==t.is_all_day&&t.is_all_day,r=[{name:"summary",required:!0,selector:{text:{}}},{name:"description",selector:{text:{multiline:!0}}}];if(e.length>0&&r.push({name:"section_id",selector:{select:{options:e.sort((t,e)=>e.sort_order-t.sort_order).map(t=>({label:t.name,value:t.id}))}}}),r.push({name:"tags",selector:{select:{multiple:!0,custom_value:!0,options:o.map(t=>({label:t,value:t}))}}}),r.push({name:"has_due_date",selector:{boolean:{}}}),i&&(r.push({name:"due_date",selector:{date:{}}}),s||r.push({name:"due_time",selector:{time:{}}}),r.push({name:"is_all_day",selector:{boolean:{}}})),i){const e=void 0!==t.has_recurrence&&t.has_recurrence,o=t.recurrence_frequency||"DAILY";r.push({name:"has_recurrence",selector:{boolean:{}}}),e&&(r.push({name:"recurrence_frequency",selector:{select:{options:[{label:"Daily",value:"DAILY"},{label:"Weekly",value:"WEEKLY"},{label:"Monthly",value:"MONTHLY"}]}}}),r.push({name:"recurrence_interval",selector:{number:{min:1,max:999,mode:"box"}}}),"WEEKLY"===o?r.push({name:"recurrence_byweekday",selector:{select:{multiple:!0,options:[{label:"Monday",value:"MO"},{label:"Tuesday",value:"TU"},{label:"Wednesday",value:"WE"},{label:"Thursday",value:"TH"},{label:"Friday",value:"FR"},{label:"Saturday",value:"SA"},{label:"Sunday",value:"SU"}]}}}):"MONTHLY"===o&&r.push({name:"recurrence_bymonthday",selector:{number:{min:1,max:31,mode:"box"}}}))}return r.push({name:"points_value",selector:{number:{min:0,max:1e4,mode:"box"}}}),i&&t.has_recurrence&&(r.push({name:"streak_bonus_points",selector:{number:{min:0,max:1e4,mode:"box"}}}),r.push({name:"streak_bonus_interval",selector:{number:{min:0,max:999,mode:"box"}}})),r}(e,i,s),p=function(t,e){const o=void 0!==t.has_due_date?t.has_due_date:!!t.due,i=void 0!==t.is_all_day&&t.is_all_day;let s=t.due_date||null,r=t.due_time||null;if(!s&&t.due){const e=pt(t.due);s=e.date,r=e.time}return{summary:t.summary||"",has_due_date:o,is_all_day:i,due_date:s||null,due_time:r||"00:00",description:t.description||"",section_id:t.section_id||(e.length>0?e.sort((t,e)=>e.sort_order-t.sort_order)[0].id:void 0),tags:t.tags||[],has_recurrence:o&&t.has_recurrence||!1,recurrence_frequency:t.recurrence_frequency||"DAILY",recurrence_interval:t.recurrence_interval||1,recurrence_byweekday:t.recurrence_byweekday||[],recurrence_bymonthday:t.recurrence_bymonthday||1,points_value:t.points_value||0,streak_bonus_points:t.streak_bonus_points||0,streak_bonus_interval:t.streak_bonus_interval||0}}(e,i),_=xt(o);return L`
    <ha-dialog open @closed=${a} .heading=${l}>
      <ha-form
        .hass=${o}
        .schema=${u}
        .data=${p}
        .computeLabel=${_}
        @value-changed=${n}
      ></ha-form>

      <!-- Delete button (bottom-left positioning via CSS) -->
      ${h&&c&&e?.uid?L`
            <ha-button
              slot="primaryAction"
              @click=${c}
              .disabled=${r}
              class="delete-button"
            >
              Delete
            </ha-button>
          `:""}

      <ha-button slot="primaryAction" @click=${d} .disabled=${r}>
        ${r?"Saving...":"Save"}
      </ha-button>
      <ha-button slot="secondaryAction" @click=${a} .disabled=${r}>
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
  `}function $t(t,e){if(t.startsWith("var(")){const e=getComputedStyle(document.documentElement).getPropertyValue(t.slice(4,-1).trim());if(!e)return t;t=e.trim()}let o,i,s;if(t.startsWith("#")){const e=t.replace("#","");o=parseInt(e.substring(0,2),16),i=parseInt(e.substring(2,4),16),s=parseInt(e.substring(4,6),16)}else{if(!t.startsWith("rgb"))return t;{const e=t.match(/\d+/g);if(!e)return t;[o,i,s]=e.map(Number)}}o/=255,i/=255,s/=255;const r=Math.max(o,i,s),a=Math.min(o,i,s);let n=0,d=0,c=(r+a)/2;if(r!==a){const t=r-a;switch(d=c>.5?t/(2-r-a):t/(r+a),r){case o:n=((i-s)/t+(i<s?6:0))/6;break;case i:n=((s-o)/t+2)/6;break;case s:n=((o-i)/t+4)/6}}c=e>0?Math.max(0,Math.min(.95,c+e/100*(1-c))):Math.max(.05,c+e/100*c);const l=(t,e,o)=>(o<0&&(o+=1),o>1&&(o-=1),o<1/6?t+6*(e-t)*o:o<.5?e:o<2/3?t+(e-t)*(2/3-o)*6:t);let h,u,p;if(0===d)h=u=p=c;else{const t=c<.5?c*(1+d):c+d-c*d,e=2*c-t;h=l(e,t,n+1/3),u=l(e,t,n),p=l(e,t,n-1/3)}const _=t=>{const e=Math.round(255*t).toString(16);return 1===e.length?"0"+e:e};return`${_(h)}${_(u)}${_(p)}`.toUpperCase()}function Ct(t){return{lighter:$t(t,30),light:$t(t,15),base:(e=t,e.startsWith("#")?e.substring(1).toUpperCase():/^[0-9A-Fa-f]{6}$/.test(e)?e.toUpperCase():$t(e,0)),dark:$t(t,-15),darker:$t(t,-30)};var e}var Tt={};!function t(e,o,i,s){var r=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),a="function"==typeof Path2D&&"function"==typeof DOMMatrix,n=function(){if(!e.OffscreenCanvas)return!1;try{var t=new OffscreenCanvas(1,1),o=t.getContext("2d");o.fillRect(0,0,1,1);var i=t.transferToImageBitmap();o.createPattern(i,"no-repeat")}catch(t){return!1}return!0}();function d(){}function c(t){var i=o.exports.Promise,s=void 0!==i?i:e.Promise;return"function"==typeof s?new s(t):(t(d,d),null)}var l,h,u,p,_,g,f,m,b,y,w,v=(l=n,h=new Map,{transform:function(t){if(l)return t;if(h.has(t))return h.get(t);var e=new OffscreenCanvas(t.width,t.height);return e.getContext("2d").drawImage(t,0,0),h.set(t,e),e},clear:function(){h.clear()}}),x=(_=Math.floor(1e3/60),g={},f=0,"function"==typeof requestAnimationFrame&&"function"==typeof cancelAnimationFrame?(u=function(t){var e=Math.random();return g[e]=requestAnimationFrame(function o(i){f===i||f+_-1<i?(f=i,delete g[e],t()):g[e]=requestAnimationFrame(o)}),e},p=function(t){g[t]&&cancelAnimationFrame(g[t])}):(u=function(t){return setTimeout(t,_)},p=function(t){return clearTimeout(t)}),{frame:u,cancel:p}),k=(y={},function(){if(m)return m;if(!i&&r){var e=["var CONFETTI, SIZE = {}, module = {};","("+t.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join("\n");try{m=new Worker(URL.createObjectURL(new Blob([e])))}catch(t){return"undefined"!=typeof console&&"function"==typeof console.warn&&console.warn("🎊 Could not load worker",t),null}!function(t){function e(e,o){t.postMessage({options:e||{},callback:o})}t.init=function(e){var o=e.transferControlToOffscreen();t.postMessage({canvas:o},[o])},t.fire=function(o,i,s){if(b)return e(o,null),b;var r=Math.random().toString(36).slice(2);return b=c(function(i){function a(e){e.data.callback===r&&(delete y[r],t.removeEventListener("message",a),b=null,v.clear(),s(),i())}t.addEventListener("message",a),e(o,r),y[r]=a.bind(null,{data:{callback:r}})})},t.reset=function(){for(var e in t.postMessage({reset:!0}),y)y[e](),delete y[e]}}(m)}return m}),$={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function C(t,e,o){return function(t,e){return e?e(t):t}(t&&null!=t[e]?t[e]:$[e],o)}function T(t){return t<0?0:Math.floor(t)}function A(t,e){return Math.floor(Math.random()*(e-t))+t}function M(t){return parseInt(t,16)}function S(t){return t.map(E)}function E(t){var e=String(t).replace(/[^0-9a-f]/gi,"");return e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),{r:M(e.substring(0,2)),g:M(e.substring(2,4)),b:M(e.substring(4,6))}}function R(t){t.width=document.documentElement.clientWidth,t.height=document.documentElement.clientHeight}function D(t){var e=t.getBoundingClientRect();t.width=e.width,t.height=e.height}function P(t){var e=t.angle*(Math.PI/180),o=t.spread*(Math.PI/180);return{x:t.x,y:t.y,wobble:10*Math.random(),wobbleSpeed:Math.min(.11,.1*Math.random()+.05),velocity:.5*t.startVelocity+Math.random()*t.startVelocity,angle2D:-e+(.5*o-Math.random()*o),tiltAngle:(.5*Math.random()+.25)*Math.PI,color:t.color,shape:t.shape,tick:0,totalTicks:t.ticks,decay:t.decay,drift:t.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:3*t.gravity,ovalScalar:.6,scalar:t.scalar,flat:t.flat}}function O(t,e){e.x+=Math.cos(e.angle2D)*e.velocity+e.drift,e.y+=Math.sin(e.angle2D)*e.velocity+e.gravity,e.velocity*=e.decay,e.flat?(e.wobble=0,e.wobbleX=e.x+10*e.scalar,e.wobbleY=e.y+10*e.scalar,e.tiltSin=0,e.tiltCos=0,e.random=1):(e.wobble+=e.wobbleSpeed,e.wobbleX=e.x+10*e.scalar*Math.cos(e.wobble),e.wobbleY=e.y+10*e.scalar*Math.sin(e.wobble),e.tiltAngle+=.1,e.tiltSin=Math.sin(e.tiltAngle),e.tiltCos=Math.cos(e.tiltAngle),e.random=Math.random()+2);var o=e.tick++/e.totalTicks,i=e.x+e.random*e.tiltCos,s=e.y+e.random*e.tiltSin,r=e.wobbleX+e.random*e.tiltCos,n=e.wobbleY+e.random*e.tiltSin;if(t.fillStyle="rgba("+e.color.r+", "+e.color.g+", "+e.color.b+", "+(1-o)+")",t.beginPath(),a&&"path"===e.shape.type&&"string"==typeof e.shape.path&&Array.isArray(e.shape.matrix))t.fill(function(t,e,o,i,s,r,a){var n=new Path2D(t),d=new Path2D;d.addPath(n,new DOMMatrix(e));var c=new Path2D;return c.addPath(d,new DOMMatrix([Math.cos(a)*s,Math.sin(a)*s,-Math.sin(a)*r,Math.cos(a)*r,o,i])),c}(e.shape.path,e.shape.matrix,e.x,e.y,.1*Math.abs(r-i),.1*Math.abs(n-s),Math.PI/10*e.wobble));else if("bitmap"===e.shape.type){var d=Math.PI/10*e.wobble,c=.1*Math.abs(r-i),l=.1*Math.abs(n-s),h=e.shape.bitmap.width*e.scalar,u=e.shape.bitmap.height*e.scalar,p=new DOMMatrix([Math.cos(d)*c,Math.sin(d)*c,-Math.sin(d)*l,Math.cos(d)*l,e.x,e.y]);p.multiplySelf(new DOMMatrix(e.shape.matrix));var _=t.createPattern(v.transform(e.shape.bitmap),"no-repeat");_.setTransform(p),t.globalAlpha=1-o,t.fillStyle=_,t.fillRect(e.x-h/2,e.y-u/2,h,u),t.globalAlpha=1}else if("circle"===e.shape)t.ellipse?t.ellipse(e.x,e.y,Math.abs(r-i)*e.ovalScalar,Math.abs(n-s)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):function(t,e,o,i,s,r,a,n,d){t.save(),t.translate(e,o),t.rotate(r),t.scale(i,s),t.arc(0,0,1,a,n,d),t.restore()}(t,e.x,e.y,Math.abs(r-i)*e.ovalScalar,Math.abs(n-s)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI);else if("star"===e.shape)for(var g=Math.PI/2*3,f=4*e.scalar,m=8*e.scalar,b=e.x,y=e.y,w=5,x=Math.PI/w;w--;)b=e.x+Math.cos(g)*m,y=e.y+Math.sin(g)*m,t.lineTo(b,y),g+=x,b=e.x+Math.cos(g)*f,y=e.y+Math.sin(g)*f,t.lineTo(b,y),g+=x;else t.moveTo(Math.floor(e.x),Math.floor(e.y)),t.lineTo(Math.floor(e.wobbleX),Math.floor(s)),t.lineTo(Math.floor(r),Math.floor(n)),t.lineTo(Math.floor(i),Math.floor(e.wobbleY));return t.closePath(),t.fill(),e.tick<e.totalTicks}function U(t,o){var a,n=!t,d=!!C(o||{},"resize"),l=!1,h=C(o,"disableForReducedMotion",Boolean),u=r&&!!C(o||{},"useWorker")?k():null,p=n?R:D,_=!(!t||!u)&&!!t.__confetti_initialized,g="function"==typeof matchMedia&&matchMedia("(prefers-reduced-motion)").matches;function f(e,o,r){for(var n=C(e,"particleCount",T),d=C(e,"angle",Number),l=C(e,"spread",Number),h=C(e,"startVelocity",Number),u=C(e,"decay",Number),_=C(e,"gravity",Number),g=C(e,"drift",Number),f=C(e,"colors",S),m=C(e,"ticks",Number),b=C(e,"shapes"),y=C(e,"scalar"),w=!!C(e,"flat"),k=function(t){var e=C(t,"origin",Object);return e.x=C(e,"x",Number),e.y=C(e,"y",Number),e}(e),$=n,M=[],E=t.width*k.x,R=t.height*k.y;$--;)M.push(P({x:E,y:R,angle:d,spread:l,startVelocity:h,color:f[$%f.length],shape:b[A(0,b.length)],ticks:m,decay:u,gravity:_,drift:g,scalar:y,flat:w}));return a?a.addFettis(M):(a=function(t,e,o,r,a){var n,d,l=e.slice(),h=t.getContext("2d"),u=c(function(e){function c(){n=d=null,h.clearRect(0,0,r.width,r.height),v.clear(),a(),e()}n=x.frame(function e(){!i||r.width===s.width&&r.height===s.height||(r.width=t.width=s.width,r.height=t.height=s.height),r.width||r.height||(o(t),r.width=t.width,r.height=t.height),h.clearRect(0,0,r.width,r.height),(l=l.filter(function(t){return O(h,t)})).length?n=x.frame(e):c()}),d=c});return{addFettis:function(t){return l=l.concat(t),u},canvas:t,promise:u,reset:function(){n&&x.cancel(n),d&&d()}}}(t,M,p,o,r),a.promise)}function m(o){var i=h||C(o,"disableForReducedMotion",Boolean),s=C(o,"zIndex",Number);if(i&&g)return c(function(t){t()});n&&a?t=a.canvas:n&&!t&&(t=function(t){var e=document.createElement("canvas");return e.style.position="fixed",e.style.top="0px",e.style.left="0px",e.style.pointerEvents="none",e.style.zIndex=t,e}(s),document.body.appendChild(t)),d&&!_&&p(t);var r={width:t.width,height:t.height};function m(){if(u){var e={getBoundingClientRect:function(){if(!n)return t.getBoundingClientRect()}};return p(e),void u.postMessage({resize:{width:e.width,height:e.height}})}r.width=r.height=null}function b(){a=null,d&&(l=!1,e.removeEventListener("resize",m)),n&&t&&(document.body.contains(t)&&document.body.removeChild(t),t=null,_=!1)}return u&&!_&&u.init(t),_=!0,u&&(t.__confetti_initialized=!0),d&&!l&&(l=!0,e.addEventListener("resize",m,!1)),u?u.fire(o,r,b):f(o,r,b)}return m.reset=function(){u&&u.reset(),a&&a.reset()},m}function F(){return w||(w=U(null,{useWorker:!0,resize:!0})),w}o.exports=function(){return F().apply(this,arguments)},o.exports.reset=function(){F().reset()},o.exports.create=U,o.exports.shapeFromPath=function(t){if(!a)throw new Error("path confetti are not supported in this browser");var e,o;"string"==typeof t?e=t:(e=t.path,o=t.matrix);var i=new Path2D(e),s=document.createElement("canvas").getContext("2d");if(!o){for(var r,n,d=1e3,c=d,l=d,h=0,u=0,p=0;p<d;p+=2)for(var _=0;_<d;_+=2)s.isPointInPath(i,p,_,"nonzero")&&(c=Math.min(c,p),l=Math.min(l,_),h=Math.max(h,p),u=Math.max(u,_));r=h-c,n=u-l;var g=Math.min(10/r,10/n);o=[g,0,0,g,-Math.round(r/2+c)*g,-Math.round(n/2+l)*g]}return{type:"path",path:e,matrix:o}},o.exports.shapeFromText=function(t){var e,o=1,i="#000000",s='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';"string"==typeof t?e=t:(e=t.text,o="scalar"in t?t.scalar:o,s="fontFamily"in t?t.fontFamily:s,i="color"in t?t.color:i);var r=10*o,a=r+"px "+s,n=new OffscreenCanvas(r,r),d=n.getContext("2d");d.font=a;var c=d.measureText(e),l=Math.ceil(c.actualBoundingBoxRight+c.actualBoundingBoxLeft),h=Math.ceil(c.actualBoundingBoxAscent+c.actualBoundingBoxDescent),u=c.actualBoundingBoxLeft+2,p=c.actualBoundingBoxAscent+2;l+=4,h+=4,(d=(n=new OffscreenCanvas(l,h)).getContext("2d")).font=a,d.fillStyle=i,d.fillText(e,u,p);var _=1/o;return{type:"bitmap",bitmap:n.transferToImageBitmap(),matrix:[_,0,0,_,-l*_/2,-h*_/2]}}}(function(){return"undefined"!=typeof window?window:"undefined"!=typeof self?self:this||{}}(),Tt,!1);var At=Tt.exports;function Mt(t,e=3e3){const o=Date.now()+e,i={startVelocity:30,spread:360,ticks:60,zIndex:0};function s(t,e){return Math.random()*(e-t)+t}const r=setInterval(function(){const a=o-Date.now();if(a<=0)return clearInterval(r);const n=a/e*50;At({...i,particleCount:n,origin:{x:s(.1,.3),y:Math.random()-.2},colors:t,disableForReducedMotion:!0}),At({...i,particleCount:n,origin:{x:s(.7,.9),y:Math.random()-.2},colors:t,disableForReducedMotion:!0})},250)}function St(t,e=5e3){const o=Date.now()+e;function i(t,e){return Math.random()*(e-t)+t}!function s(){const r=o-Date.now(),a=Math.max(200,r/e*500);At({particleCount:1,startVelocity:0,ticks:a,origin:{x:Math.random(),y:.3*Math.random()-.1},colors:t,shapes:["star"],gravity:i(1.2,1.5),scalar:i(1.2,2),drift:i(-.4,.4),disableForReducedMotion:!0}),r>0&&requestAnimationFrame(s)}()}Tt.exports.create;let Et=class extends at{constructor(){super(...arguments),this._editDialogOpen=!1,this._editingTask=null,this._saving=!1,this._groups=[],this._autoCollapseTimeouts=new Map,this._previousGroupProgress=new Map,this.shades={lighter:"",light:"",base:"",dark:"",darker:""},this.shadesArray=[]}setConfig(t){if(!t.entity)throw new Error("You need to define an entity");this._config={entity:t.entity,title:t.title||"Tasks",show_title:!1!==t.show_title,show_dateless_tasks:!1!==t.show_dateless_tasks,hide_card_background:!0===t.hide_card_background,accent_color:t.accent_color||"",task_text_color:t.task_text_color||"",show_points:!1!==t.show_points,untagged_header:t.untagged_header||"Untagged",tag_group_order:t.tag_group_order||[],show_future_tasks:!0===t.show_future_tasks,filter_section_id:t.filter_section_id,person_entity:t.person_entity}}getCardSize(){return 3}willUpdate(t){if((t.has("_config")||t.has("hass"))&&this._config&&this.hass){let t="var(--primary-color)";if(this._config.person_entity){const e=this.hass.states["sensor.chorebot_points"],o=(e?.attributes.people||{})[this._config.person_entity];o?.accent_color&&(t=o.accent_color)}this._config.accent_color&&(t=this._config.accent_color),this.shades=Ct(t),this.shadesArray=Object.values(this.shades)}(t.has("hass")||t.has("_config"))&&this._updateGroups()}_updateGroups(){if(!this.hass||!this._config)return;const t=this.hass.states[this._config.entity];if(!t)return;let e=function(t,e=!0,o=!1,i="Untagged",s="Upcoming",r,a){const n=t.attributes.chorebot_tasks||[],d=new Date;d.setHours(0,0,0,0);const c=new Date(d);c.setHours(23,59,59,999);const l=new Map,h=[];let u;if(r){const e=(t.attributes.chorebot_sections||[]).find(t=>t.name===r);u=e?e.id:r}for(const t of n){if(u&&t.section_id!==u)continue;if(a&&t.computed_person_id!==a)continue;const s=!!t.due,r="completed"===t.status;let n=!1,p=!1;if(s){if(t.due){const e=new Date(t.due);if(o&&e>c)p=!0;else{const o=new Date(e);o.setHours(0,0,0,0);const i=_t(o,d),s=o<d;r?t.last_completed&&_t(new Date(t.last_completed),new Date)&&(n=!0):(i||s)&&(n=!0)}}}else n=e;if(n){const e=t.tags||[];if(0===e.length)l.has(i)||l.set(i,[]),l.get(i).push(t);else for(const o of e)l.has(o)||l.set(o,[]),l.get(o).push(t)}else p&&h.push(t)}h.sort((t,e)=>new Date(t.due).getTime()-new Date(e.due).getTime());const p=Array.from(l.entries()).map(([t,e])=>({name:t,tasks:e,isCollapsed:!1}));return o&&h.length>0&&p.push({name:s,tasks:h,isCollapsed:!1}),p}(t,!1!==this._config.show_dateless_tasks,!0===this._config.show_future_tasks,this._config.untagged_header||"Untagged","Upcoming",this._config.filter_section_id,this._config.person_entity);e=function(t,e,o="Untagged",i="Upcoming"){return t.sort((t,s)=>{if(t.name===i)return 1;if(s.name===i)return-1;if(!e||0===e.length)return t.name===o?1:s.name===o?-1:t.name.localeCompare(s.name);const r=e.indexOf(t.name),a=e.indexOf(s.name);return-1!==r&&-1!==a?r-a:-1!==r?-1:-1!==a||t.name===o?1:s.name===o?-1:t.name.localeCompare(s.name)})}(e,this._config.tag_group_order,this._config.untagged_header,"Upcoming"),this._groups=e.map(t=>({...t,isCollapsed:this._findExistingCollapseState(t.name)}))}_findExistingCollapseState(t){const e=this._groups.find(e=>e.name===t);return void 0!==e?e.isCollapsed:"Upcoming"===t}render(){if(!this.hass||!this._config)return L`<ha-card>Loading...</ha-card>`;return this.hass.states[this._config.entity]?L`
      <ha-card
        class="${this._config.hide_card_background?"no-background":""}"
      >
        ${this._config.show_title?L`<div class="card-header">${this._config.title}</div>`:""}
        ${0===this._groups.length?L`<div class="empty-state">No tasks</div>`:L`<div class="tag-groups">
              ${this._renderAllGroups(this._groups)}
            </div>`}
      </ha-card>

      ${this._renderEditDialog()}
    `:L`<ha-card>
        <div class="empty-state">Entity not found: ${this._config.entity}</div>
      </ha-card>`}_renderAllGroups(t){return t.map(t=>{const e=ft(t.tasks),o=this._config.task_text_color||"white",i=t.isCollapsed,s=e.completed===e.total,r=i&&s,a=e.total>0?e.completed/e.total*100:0;return this._checkAutoCollapse(t.name,e,s,i),L`
        <div class="tag-group-container ${i?"collapsed":""}">
          <div
            class="tag-group-header ${i?"collapsed":""}"
            style="background: #${this.shades.light}; color: ${o}; --progress-width: ${a}%; --darker-color: #${this.shades.dark};"
            @click=${()=>this._toggleGroup(t.name)}
          >
            <div class="tag-group-header-title">${t.name}</div>
            <div class="tag-group-header-progress">
              ${r?L`<ha-icon
                    icon="mdi:check"
                    style="color: ${o}; --mdi-icon-size: 20px;"
                  ></ha-icon>`:L`${e.completed}/${e.total}`}
            </div>
          </div>
          <div class="tag-group-tasks ${i?"collapsed":""}">
            <div class="tag-group-tasks-inner">
              ${this._renderTasks(t.tasks,o)}
            </div>
          </div>
        </div>
      `})}_renderTasks(t,e){return t.map(t=>{const o="completed"===t.status,i=o?`#${this.shades.base}`:"transparent",s=o?e:"var(--primary-text-color)",r=o?`#${this.shades.dark}`:"transparent",a=o?"white":"var(--divider-color)",n=o?"none":"2px solid var(--divider-color)";return L`
        <div
          class="todo-item"
          style="background: ${i}; color: ${s};"
          @click=${()=>this._openEditDialog(t)}
        >
          <div class="todo-content">
            <div class="todo-summary">${t.summary}</div>
            ${t.due||t.points_value||t.parent_uid?L`<div
                  class="todo-due-date"
                  style="color: ${function(t){if(!t.due||"completed"===t.status)return!1;const e=t.is_all_day||!1,o=new Date(t.due);if(e){const t=new Date,e=Date.UTC(t.getFullYear(),t.getMonth(),t.getDate());return Date.UTC(o.getUTCFullYear(),o.getUTCMonth(),o.getUTCDate())<e}{const t=new Date;return t.setHours(0,0,0,0),o.setHours(0,0,0,0),o<t}}(t)?"var(--error-color)":"inherit"}"
                >
                  ${t.due?function(t,e){if(e?.is_all_day){const e=new Date,o=Date.UTC(e.getFullYear(),e.getMonth(),e.getDate()),i=Date.UTC(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate())-o,s=Math.round(i/864e5);return 0===s?"Today":-1===s?"Yesterday":1===s?"Tomorrow":s<-1?`${Math.abs(s)} days ago`:`In ${s} days`}const o=new Date;o.setHours(0,0,0,0);const i=new Date(t);i.setHours(0,0,0,0);const s=i.getTime()-o.getTime(),r=Math.round(s/864e5);if(0===r)return new Date(t).toLocaleTimeString(void 0,{hour:"numeric",minute:"2-digit"});return-1===r?"Yesterday":1===r?"Tomorrow":r<-1?`${Math.abs(r)} days ago`:`In ${r} days`}(new Date(t.due),t):""}
                  ${t.parent_uid?L`<ha-icon
                        icon="mdi:sync"
                        class="recurring-icon"
                      ></ha-icon>`:""}
                  ${this._renderPointsBadge(t)}
                </div>`:""}
          </div>
          <div
            class="completion-circle"
            style="background: ${r}; border: ${n};"
            @click=${e=>this._handleCompletionClick(e,t)}
          >
            <ha-icon
              icon="mdi:check"
              style="color: ${a};"
            ></ha-icon>
          </div>
        </div>
      `})}_renderPointsBadge(t){if(!this._config?.show_points||!t.points_value)return L``;const e=this._config.task_text_color||"white",o=yt(this.hass),i=this.hass?.states[this._config.entity],s=i?.attributes.chorebot_templates||[];if(t.parent_uid){const i=s.find(e=>e.uid===t.parent_uid);if(i&&i.streak_bonus_points&&i.streak_bonus_interval){if((i.streak_current+1)%i.streak_bonus_interval===0)return L`<span
            class="points-badge bonus-pending"
            style="color: ${e};"
          >
            +${t.points_value} + ${i.streak_bonus_points}
            ${o.icon?L`<ha-icon icon="${o.icon}"></ha-icon>`:""}
            ${o.text?o.text:""}
          </span>`}}return L`<span
      class="points-badge"
      style="background: #${this.shades.lighter}; color: ${e}; border: 1px solid ${e};"
    >
      +${t.points_value}
      ${o.icon?L`<ha-icon icon="${o.icon}"></ha-icon>`:""}
      ${o.text?o.text:""}
    </span>`}_getFilteredTasks(t){return gt(t,!1!==this._config.show_dateless_tasks,this._config?.filter_section_id)}_toggleGroup(t){this._autoCollapseTimeouts.has(t)&&(clearTimeout(this._autoCollapseTimeouts.get(t)),this._autoCollapseTimeouts.delete(t));const e=this._groups.find(e=>e.name===t);e&&(e.isCollapsed=!e.isCollapsed,this.requestUpdate())}_checkAutoCollapse(t,e,o,i){const s=this._previousGroupProgress.get(t),r=s&&s.completed<s.total&&o&&!i;if(this._previousGroupProgress.set(t,{completed:e.completed,total:e.total}),r){this._autoCollapseTimeouts.has(t)&&clearTimeout(this._autoCollapseTimeouts.get(t));const e=window.setTimeout(()=>{const e=this._groups.find(e=>e.name===t);e&&(e.isCollapsed=!0,this.requestUpdate()),this._autoCollapseTimeouts.delete(t)},1500);this._autoCollapseTimeouts.set(t,e)}}async _toggleTask(t,e){const o="completed"===t.status?"needs_action":"completed";if(await this.hass.callService("todo","update_item",{entity_id:this._config.entity,item:t.uid,status:o}),"completed"===o&&e){this._playCompletionConfetti(e);const o=this._calculateTotalPointsAwarded(t);if(null!==o&&o>0){!function(t,e){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const o=document.createElement("div");o.className="floating-points",o.textContent=`+${e}`,o.style.left=t.x-20+"px",o.style.top=t.y-30+"px",document.body.appendChild(o),setTimeout(()=>{o.remove()},2e3)}({x:e.x*window.innerWidth,y:e.y*window.innerHeight},o)}const i=this._areAllTasksComplete(),s=this._areAllDatedTasksComplete(),r=!!t.due;i?this._playAllCompleteStarShower():s&&r?this._playDatedTasksFireworks():this._isGroupComplete(t)&&this._playGroupFireworks()}}_handleCompletionClick(t,e){t.stopPropagation();const o=t.currentTarget.getBoundingClientRect(),i={x:(o.left+o.width/2)/window.innerWidth,y:(o.top+o.height/2)/window.innerHeight};this._toggleTask(e,i)}_playCompletionConfetti(t){!function(t,e){At({particleCount:30,spread:70,startVelocity:25,origin:t,colors:e,disableForReducedMotion:!0})}(t,this.shadesArray)}_isGroupComplete(t){const e=this.hass?.states[this._config.entity];if(!e)return!1;const o=this._getFilteredTasks(e),i=this._config.untagged_header||"Untagged",s=function(t,e="Untagged"){const o=new Map;for(const i of t){const t=i.tags||[];if(0===t.length)o.has(e)||o.set(e,[]),o.get(e).push(i);else for(const e of t)o.has(e)||o.set(e,[]),o.get(e).push(i)}return o}(o,i),r=t.tags||[],a=r.length>0?r:[i];for(const t of a){const e=s.get(t);if(!e)continue;const o=ft(e);if(o.total>0&&o.completed===o.total)return!0}return!1}_areAllTasksComplete(){const t=this.hass?.states[this._config.entity];if(!t)return!1;const e=ft(this._getFilteredTasks(t));return e.total>0&&e.completed===e.total}_areAllDatedTasksComplete(){const t=this.hass?.states[this._config.entity];if(!t)return!1;const e=mt(this._getFilteredTasks(t));return e.total>0&&e.completed===e.total}_playGroupFireworks(){Mt(this.shadesArray)}_playDatedTasksFireworks(){Mt(this.shadesArray)}_playAllCompleteStarShower(){St(this.shadesArray)}_calculateTotalPointsAwarded(t){if(!t.points_value)return null;let e=t.points_value;if(t.parent_uid){const o=this.hass?.states[this._config.entity],i=(o?.attributes.chorebot_templates||[]).find(e=>e.uid===t.parent_uid);if(i?.streak_bonus_points&&i?.streak_bonus_interval){(i.streak_current+1)%i.streak_bonus_interval===0&&(e+=i.streak_bonus_points)}}return e}_openEditDialog(t){if(!this.hass||!this._config?.entity)return;const e=this.hass.states[this._config.entity];if(!e)return;const o=e.attributes.chorebot_templates||[];this._editingTask=vt(t,o),this._editDialogOpen=!0}_closeEditDialog(){this._editDialogOpen=!1,this._editingTask=null}_renderEditDialog(){const t=this.hass?.states[this._config.entity],e=t?.attributes.chorebot_sections||[],o=t?.attributes.chorebot_tags||[];return kt(this._editDialogOpen,this._editingTask,this.hass,e,o,this._saving,()=>this._closeEditDialog(),t=>this._formValueChanged(t),()=>this._saveTask(),()=>this._handleDeleteTask())}_formValueChanged(t){const e=t.detail.value;this._editingTask={...this._editingTask,...e},("has_due_date"in e||"is_all_day"in e||"has_recurrence"in e||"recurrence_frequency"in e)&&this.requestUpdate()}async _saveTask(){if(!this._editingTask||!this._editingTask.summary?.trim()||this._saving)return;this._saving=!0;const t={list_id:this._config.entity,uid:this._editingTask.uid,summary:this._editingTask.summary.trim()};if(this._editingTask.has_due_date&&this._editingTask.due_date){const e=!!this._editingTask.is_all_day;let o;if(e||!this._editingTask.due_time)o=`${this._editingTask.due_date}T00:00:00`;else{const t=3===this._editingTask.due_time.split(":").length?this._editingTask.due_time:`${this._editingTask.due_time}:00`;o=`${this._editingTask.due_date}T${t}`}const i=new Date(o);if(isNaN(i.getTime()))return console.error("Invalid date/time combination:",o),void(this._saving=!1);t.due=i.toISOString(),t.is_all_day=e}else!1===this._editingTask.has_due_date&&(t.due="",t.is_all_day=!1);this._editingTask.description&&(t.description=this._editingTask.description),this._editingTask.section_id&&(t.section_id=this._editingTask.section_id),void 0!==this._editingTask.tags&&(t.tags=this._editingTask.tags);const e=bt(this._editingTask);null!==e?t.rrule=e:!1===this._editingTask.has_recurrence&&(t.rrule=""),void 0!==this._editingTask.points_value&&(t.points_value=this._editingTask.points_value),void 0!==this._editingTask.streak_bonus_points&&(t.streak_bonus_points=this._editingTask.streak_bonus_points),void 0!==this._editingTask.streak_bonus_interval&&(t.streak_bonus_interval=this._editingTask.streak_bonus_interval);!!this._editingTask.parent_uid&&(t.include_future_occurrences=!0),console.log("Calling chorebot.update_task with payload:",t);try{await this.hass.callService("chorebot","update_task",t),this._closeEditDialog()}catch(t){console.error("Error saving task:",t),alert("Failed to save task. Please try again.")}finally{this._saving=!1}}async _handleDeleteTask(){if(!this._editingTask||this._saving)return;const t=this._editingTask,e=t.has_recurrence||t.parent_uid;if(confirm(e?"Delete this recurring task? This will remove all future occurrences, but keep completed instances.":"Delete this task? This action cannot be undone.")){this._saving=!0;try{await this.hass.callService("todo","remove_item",{entity_id:this._config.entity,item:t.uid}),this._closeEditDialog(),this.dispatchEvent(new CustomEvent("hass-notification",{detail:{message:"Task deleted successfully"},bubbles:!0,composed:!0}))}catch(t){console.error("Error deleting task:",t),alert(`Failed to delete task: ${t}`)}finally{this._saving=!1}}}static getStubConfig(){return{entity:"",title:"Tasks",show_title:!0,show_dateless_tasks:!0,show_future_tasks:!1,filter_section_id:"",person_entity:"",hide_card_background:!1,accent_color:"",task_text_color:"",untagged_header:"Untagged",tag_group_order:[]}}static getConfigForm(){return{schema:[{name:"entity",required:!0,selector:{entity:{filter:{domain:"todo"}}}},{name:"title",default:"Tasks",selector:{text:{}}},{name:"show_title",default:!0,selector:{boolean:{}}},{name:"show_dateless_tasks",default:!0,selector:{boolean:{}}},{name:"show_future_tasks",default:!1,selector:{boolean:{}}},{name:"filter_section_id",selector:{text:{}}},{name:"person_entity",selector:{entity:{filter:{domain:"person"}}}},{name:"hide_card_background",default:!1,selector:{boolean:{}}},{name:"accent_color",selector:{text:{}}},{name:"task_text_color",selector:{text:{}}},{name:"untagged_header",default:"Untagged",selector:{text:{}}},{name:"tag_group_order",selector:{select:{multiple:!0,custom_value:!0,options:[]}}}],computeLabel:t=>({entity:"Todo Entity",title:"Card Title",show_title:"Show Title",show_dateless_tasks:"Show Tasks Without Due Date",show_future_tasks:"Show Future Tasks",filter_section_id:"Filter by Section",person_entity:"Filter by Person",hide_card_background:"Hide Card Background",accent_color:"Accent Color",task_text_color:"Task Text Color",untagged_header:"Untagged Tasks Header",tag_group_order:"Tag Display Order"}[t.name]||void 0),computeHelper:t=>({entity:"Select the ChoreBot todo entity to display",title:"Custom title for the card",show_title:"Show the card title",show_dateless_tasks:"Show tasks that do not have a due date",show_future_tasks:"Show tasks with future due dates in a collapsible 'Upcoming' section (collapsed by default)",filter_section_id:'Enter section name (e.g., "SECOND SECTION"). Leave empty to show all sections.',person_entity:"Optional: Filter to show only tasks assigned to this person. Also inherits their accent color if set.",hide_card_background:"Hide the card background and padding for a seamless look",accent_color:"Accent color for task items and headers (hex code or CSS variable like var(--primary-color))",task_text_color:"Text color for task items (hex code or CSS variable)",untagged_header:'Header text for tasks without tags (default: "Untagged")',tag_group_order:"Order to display tag groups. Tags not listed will appear alphabetically after these."}[t.name]||void 0)}}};Et.styles=a`
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

    ha-dialog {
      --mdc-dialog-min-width: 500px;
    }

    /* Floating Points Animation */
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

    .floating-points {
      position: absolute;
      font-size: 28px;
      font-weight: bold;
      color: white;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
      pointer-events: none;
      z-index: 9999;
      animation: floatPoints 2s ease-out forwards;
    }

    /* Respect reduced motion preference */
    @media (prefers-reduced-motion: reduce) {
      .floating-points {
        animation: none;
        opacity: 0;
      }
    }
  `,t([ht({attribute:!1})],Et.prototype,"hass",void 0),t([ut()],Et.prototype,"_config",void 0),t([ut()],Et.prototype,"_editDialogOpen",void 0),t([ut()],Et.prototype,"_editingTask",void 0),t([ut()],Et.prototype,"_saving",void 0),t([ut()],Et.prototype,"_groups",void 0),Et=t([dt("chorebot-grouped-card")],Et),window.customCards=window.customCards||[],window.customCards.push({type:"chorebot-grouped-card",name:"ChoreBot Grouped Card",description:"Display and manage ChoreBot tasks grouped by tags",preview:!0}),console.info("%c CHOREBOT-GROUPED-CARD %c v0.1.0 ","color: white; background: #2196F3; font-weight: bold;","color: #2196F3; background: white; font-weight: bold;");let Rt=class extends at{constructor(){super(...arguments),this._dialogOpen=!1,this._newTask=null,this._saving=!1}setConfig(t){if(!t.entity)throw new Error("You need to define an entity");this._config={entity:t.entity,button_text:t.button_text||"Add Task",button_icon:t.button_icon||"mdi:plus",button_color:t.button_color||"var(--primary-color)",button_text_color:t.button_text_color||"white",button_size:t.button_size||"medium",hide_card_background:!0===t.hide_card_background,default_section_id:t.default_section_id,default_tags:t.default_tags||[]}}getCardSize(){return 1}render(){if(!this.hass||!this._config)return L`<ha-card>Loading...</ha-card>`;return this.hass.states[this._config.entity]?L`
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
      </ha-card>`}_openDialog(){const t=this.hass?.states[this._config.entity],e=t?.attributes.chorebot_sections||[];this._newTask=this._createBlankTask(e),this._dialogOpen=!0}_closeDialog(){this._dialogOpen=!1,this._newTask=null}_createBlankTask(t){let e;if(this._config.default_section_id){const o=t.find(t=>t.id===this._config.default_section_id);if(o)e=o.id;else{const o=t.find(t=>t.name.toLowerCase()===this._config.default_section_id.toLowerCase());o&&(e=o.id)}}else t.length>0&&(e=t.sort((t,e)=>e.sort_order-t.sort_order)[0].id);return{uid:"",summary:"",status:"needs_action",has_due_date:!1,is_all_day:!1,due_date:void 0,due_time:void 0,description:"",section_id:e,tags:this._config.default_tags||[],has_recurrence:!1,recurrence_frequency:"DAILY",recurrence_interval:1,recurrence_byweekday:[],recurrence_bymonthday:1}}_renderDialog(){const t=this.hass?.states[this._config.entity],e=t?.attributes.chorebot_sections||[],o=t?.attributes.chorebot_tags||[];return kt(this._dialogOpen,this._newTask,this.hass,e,o,this._saving,()=>this._closeDialog(),t=>this._formValueChanged(t),()=>this._saveTask(),void 0,"Add Task",!1)}_formValueChanged(t){const e=t.detail.value;this._newTask={...this._newTask,...e},("has_due_date"in e||"is_all_day"in e||"has_recurrence"in e||"recurrence_frequency"in e)&&this.requestUpdate()}async _saveTask(){if(!this._newTask||!this._newTask.summary?.trim()||this._saving)return;this._saving=!0;const t={list_id:this._config.entity,summary:this._newTask.summary.trim()};if(this._newTask.has_due_date&&this._newTask.due_date){const e=!!this._newTask.is_all_day;let o;if(e||!this._newTask.due_time)o=`${this._newTask.due_date}T00:00:00`;else{const t=3===this._newTask.due_time.split(":").length?this._newTask.due_time:`${this._newTask.due_time}:00`;o=`${this._newTask.due_date}T${t}`}const i=new Date(o);if(isNaN(i.getTime()))return console.error("Invalid date/time combination:",o),void(this._saving=!1);t.due=i.toISOString(),t.is_all_day=e}this._newTask.description&&(t.description=this._newTask.description),this._newTask.section_id&&(t.section_id=this._newTask.section_id),void 0!==this._newTask.tags&&this._newTask.tags.length>0&&(t.tags=this._newTask.tags);const e=bt(this._newTask);null!==e&&(t.rrule=e),void 0!==this._newTask.points_value&&this._newTask.points_value>0&&(t.points_value=this._newTask.points_value),null!==e&&(void 0!==this._newTask.streak_bonus_points&&this._newTask.streak_bonus_points>0&&(t.streak_bonus_points=this._newTask.streak_bonus_points),void 0!==this._newTask.streak_bonus_interval&&this._newTask.streak_bonus_interval>0&&(t.streak_bonus_interval=this._newTask.streak_bonus_interval));try{await this.hass.callService("chorebot","add_task",t),this._closeDialog();const e=this.hass?.states[this._config.entity],o=e?.attributes.chorebot_sections||[];this._newTask=this._createBlankTask(o)}catch(t){console.error("Error adding task:",t),alert("Failed to add task. Please try again.")}finally{this._saving=!1}}static getStubConfig(){return{entity:"",button_text:"Add Task",button_icon:"mdi:plus",button_color:"var(--primary-color)",button_text_color:"white",button_size:"medium",hide_card_background:!1,default_section_id:"",default_tags:[]}}static getConfigForm(){return{schema:[{name:"entity",required:!0,selector:{entity:{filter:{domain:"todo"}}}},{name:"button_text",default:"Add Task",selector:{text:{}}},{name:"button_icon",default:"mdi:plus",selector:{icon:{}}},{name:"button_color",default:"var(--primary-color)",selector:{text:{}}},{name:"button_text_color",default:"white",selector:{text:{}}},{name:"button_size",default:"medium",selector:{select:{options:[{label:"Small",value:"small"},{label:"Medium",value:"medium"},{label:"Large",value:"large"}]}}},{name:"hide_card_background",default:!1,selector:{boolean:{}}},{name:"default_section_id",selector:{text:{}}},{name:"default_tags",selector:{select:{multiple:!0,custom_value:!0,options:[]}}}],computeLabel:t=>({entity:"Todo Entity",button_text:"Button Text",button_icon:"Button Icon",button_color:"Button Color",button_text_color:"Button Text Color",button_size:"Button Size",hide_card_background:"Hide Card Background",default_section_id:"Default Section",default_tags:"Default Tags"}[t.name]||void 0),computeHelper:t=>({entity:"Select the ChoreBot todo entity for new tasks",button_text:"Text displayed on the button",button_icon:"Icon displayed on the button",button_color:"Button background color (hex code or CSS variable like var(--primary-color))",button_text_color:"Button text color (hex code or CSS variable)",button_size:"Size of the button",hide_card_background:"Hide the card background and padding for a seamless look",default_section_id:'Default section for new tasks (enter section name like "Kyle" or leave empty for automatic)',default_tags:"Tags to pre-fill when creating new tasks"}[t.name]||void 0)}}};Rt.styles=a`
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
  `,t([ht({attribute:!1})],Rt.prototype,"hass",void 0),t([ut()],Rt.prototype,"_config",void 0),t([ut()],Rt.prototype,"_dialogOpen",void 0),t([ut()],Rt.prototype,"_newTask",void 0),t([ut()],Rt.prototype,"_saving",void 0),Rt=t([dt("chorebot-add-task-card")],Rt),window.customCards=window.customCards||[],window.customCards.push({type:"chorebot-add-task-card",name:"ChoreBot Add Task Card",description:"A button card for quickly adding new ChoreBot tasks",preview:!0}),console.info("%c CHOREBOT-ADD-TASK-CARD %c v0.1.0 ","color: white; background: #4CAF50; font-weight: bold;","color: #4CAF50; background: white; font-weight: bold;");let Dt=class extends at{constructor(){super(...arguments),this.shades={lighter:"",light:"",base:"",dark:"",darker:""}}setConfig(t){if(!t.person_entity)throw new Error("person_entity is required");this._config={type:"custom:chorebot-person-points-card",person_entity:t.person_entity,title:t.title||"Points",show_title:!1!==t.show_title,hide_card_background:!0===t.hide_card_background,show_progress:!1!==t.show_progress,accent_color:t.accent_color||"",progress_text_color:t.progress_text_color||""}}willUpdate(t){if(super.willUpdate(t),(t.has("_config")||t.has("hass"))&&this._config&&this.hass){let t="var(--primary-color)";if(this._config.person_entity){const e=this.hass.states["sensor.chorebot_points"],o=(e?.attributes.people||{})[this._config.person_entity];o?.accent_color&&(t=o.accent_color)}this._config.accent_color&&(t=this._config.accent_color),this.shades=Ct(t)}(t.has("hass")||t.has("_config"))&&this.hass&&this._config&&(this._progress=this._calculatePersonProgress())}_calculatePersonProgress(){if(!this.hass||!this._config)return{completed:0,total:0};const t=Object.values(this.hass.states).filter(t=>t.entity_id.startsWith("todo.")),e=t.filter(t=>t.entity_id.startsWith("todo.chorebot_")),o=function(t,e,o=!1){const i=[],s=t.filter(t=>t.entity_id.startsWith("todo.chorebot_"));for(const t of s){const s=gt(t,o).filter(t=>t.computed_person_id===e);i.push(...s)}return i}(e,this._config.person_entity,!1);return mt(o)}static getStubConfig(){return{type:"custom:chorebot-person-points-card",person_entity:"",title:"Points",show_title:!0,hide_card_background:!1,show_progress:!0,accent_color:"",progress_text_color:""}}static getConfigForm(){return{schema:[{name:"person_entity",required:!0,selector:{entity:{filter:{domain:"person"}}}},{name:"title",default:"Points",selector:{text:{}}},{name:"show_title",default:!0,selector:{boolean:{}}},{name:"hide_card_background",default:!1,selector:{boolean:{}}},{name:"show_progress",default:!0,selector:{boolean:{}}},{name:"accent_color",selector:{text:{}}},{name:"progress_text_color",selector:{text:{}}}],computeLabel:t=>({person_entity:"Person Entity",title:"Card Title",show_title:"Show Title",hide_card_background:"Hide Card Background",show_progress:"Show Progress Bar",accent_color:"Accent Color",progress_text_color:"Progress Text Color"}[t.name]||void 0),computeHelper:t=>({person_entity:"Select the person entity to display points for",title:"Custom title for the card",show_title:"Show the card title",hide_card_background:"Hide the card background and padding for a seamless look",show_progress:"Display task completion progress below the person's name",accent_color:"Accent color for progress bar and points text (hex code or CSS variable like var(--primary-color))",progress_text_color:"Text color for progress label (hex code or CSS variable)"}[t.name]||void 0)}}getCardSize(){return 1}render(){if(!this.hass||!this._config)return L``;const t=this.hass.states["sensor.chorebot_points"];if(!t)return L`<ha-card>
        <div class="error-message">
          ChoreBot Points sensor not found. Make sure the integration is set up.
        </div>
      </ha-card>`;const e=this.hass.states[this._config.person_entity];if(!e)return L`<ha-card>
        <div class="error-message">
          Person entity not found. Please check your configuration.
        </div>
      </ha-card>`;const o=(t.attributes.people||{})[this._config.person_entity];return o?L`
      <ha-card
        class="${this._config.hide_card_background?"no-background":""}"
      >
        ${this._config.show_title?L`<div class="card-header">${this._config.title}</div>`:""}
        ${this._renderPersonDisplay(e,o)}
      </ha-card>
    `:L`<ha-card>
        <div class="error-message">
          Person not found in points system. Complete tasks to earn points.
        </div>
      </ha-card>`}_renderPersonDisplay(t,e){const o=t.attributes.entity_picture,i=this._getPersonName(this._config.person_entity),s=yt(this.hass);return L`
      <div class="person-container">
        <div class="person-left">
          ${o?L`<div class="person-avatar">
                <img src="${o}" alt="${i}" />
              </div>`:L`<div class="person-avatar initials">
                ${this._getPersonInitials(this._config.person_entity)}
              </div>`}
        </div>
        <div class="person-info">
          <div class="person-header">
            <div class="person-name">${i}</div>
            <div class="person-points" style="color: #${this.shades.base}">
              ${e.points_balance}
              ${s.icon?L`<ha-icon icon="${s.icon}"></ha-icon>`:""}
              ${s.text?s.text:""}
            </div>
          </div>
          ${this._config.show_progress&&this._progress?this._renderProgressBar(this._progress):""}
        </div>
      </div>
    `}_renderProgressBar(t){const e=t.total>0?t.completed/t.total*100:0,o=this._config.progress_text_color||"var(--text-primary-color)";return L`
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
    `}_getPersonName(t){const e=this.hass?.states[t];return e?.attributes.friendly_name||t.replace("person.","")}_getPersonInitials(t){return this._getPersonName(t).split(" ").map(t=>t[0]).join("").toUpperCase().slice(0,2)}};Dt.styles=a`
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
  `,t([ht({attribute:!1})],Dt.prototype,"hass",void 0),t([ut()],Dt.prototype,"_config",void 0),t([ut()],Dt.prototype,"_progress",void 0),Dt=t([dt("chorebot-person-points-card")],Dt),window.customCards=window.customCards||[],window.customCards.push({type:"chorebot-person-points-card",name:"ChoreBot Person Points Card",description:"Display a person's avatar and points balance",preview:!0}),console.info("%c CHOREBOT-PERSON-POINTS-CARD %c v0.1.0 ","color: white; background: #FF9800; font-weight: bold;","color: #FF9800; background: white; font-weight: bold;");let Pt=class extends at{constructor(){super(...arguments),this._redeeming=null,this._showConfirmModal=!1,this._showAddRewardModal=!1,this._pendingRedemption=null,this._rewardFormData={name:"",cost:50,icon:"mdi:gift",description:""},this._showEditRewardModal=!1,this._editingRewardId=null,this._rewardFormSchema=[{name:"name",required:!0,selector:{text:{}}},{name:"cost",selector:{number:{min:1,max:1e4,mode:"box"}}},{name:"icon",selector:{icon:{}}},{name:"description",selector:{text:{multiline:!0}}}],this._computeRewardFieldLabel=t=>{const e=wt(this.hass);return{name:"Name",cost:`Cost (${e.charAt(0).toUpperCase()+e.slice(1)})`,icon:"Icon",description:"Description (Optional)"}[t.name]||t.name},this._computeRewardFieldHelper=t=>({cost:`Cost between 1 and 10,000 ${wt(this.hass)}`,icon:"Use Material Design Icons (e.g., mdi:gift, mdi:ice-cream)"}[t.name]||""),this._handleRewardFormChange=t=>{this._rewardFormData=t.detail.value}}setConfig(t){if(!t.person_entity)throw new Error("person_entity is required");this._config={type:"custom:chorebot-person-rewards-card",person_entity:t.person_entity,title:t.title||void 0,show_title:!1!==t.show_title,hide_card_background:!0===t.hide_card_background,show_disabled_rewards:!0===t.show_disabled_rewards,sort_by:t.sort_by||"cost",show_add_reward_button:!1!==t.show_add_reward_button,accent_color:t.accent_color||""}}static getStubConfig(){return{type:"custom:chorebot-person-rewards-card",person_entity:"person.example",title:"My Rewards",show_title:!0,hide_card_background:!1,show_disabled_rewards:!1,sort_by:"cost",show_add_reward_button:!0,accent_color:""}}getCardSize(){return 3}static getConfigForm(){return{schema:[{name:"person_entity",required:!0,selector:{entity:{domain:"person"}}},{name:"title",selector:{text:{}}},{name:"show_title",default:!0,selector:{boolean:{}}},{name:"hide_card_background",default:!1,selector:{boolean:{}}},{name:"show_disabled_rewards",default:!1,selector:{boolean:{}}},{name:"sort_by",default:"cost",selector:{select:{options:[{label:"Cost (Low to High)",value:"cost"},{label:"Name (A-Z)",value:"name"},{label:"Date Created (Oldest First)",value:"created"}]}}},{name:"show_add_reward_button",default:!0,selector:{boolean:{}}},{name:"accent_color",selector:{text:{}}}],computeLabel:t=>({person_entity:"Person Entity",title:"Card Title",show_title:"Show Title",hide_card_background:"Hide Card Background",show_disabled_rewards:"Show Disabled Rewards",sort_by:"Sort Rewards By",show_add_reward_button:"Show Add Reward Button",accent_color:"Accent Color"}[t.name]||void 0),computeHelper:t=>({person_entity:"Select the person whose rewards to display",title:'Custom title for the card (defaults to "{Person Name}\'s Rewards")',show_title:"Show the card title",hide_card_background:"Hide the card background and padding for a seamless look",show_disabled_rewards:"Include rewards that have been disabled in the grid",sort_by:"Choose how to sort the rewards in the grid",show_add_reward_button:"Show the 'Add Reward' card for creating new rewards",accent_color:"Accent color for reward icons and buttons (hex code or CSS variable like var(--primary-color))"}[t.name]||void 0)}}render(){if(!this.hass||!this._config)return L`<ha-card>Loading...</ha-card>`;if(!this.hass.states[this._config.person_entity])return L`<ha-card>
        <div class="error-state">
          Person entity "${this._config.person_entity}" not found. Please check
          your configuration.
        </div>
      </ha-card>`;const t=this.hass.states["sensor.chorebot_points"];if(!t)return L`<ha-card>
        <div class="empty-state">
          ChoreBot Points sensor not found. Make sure the integration is set up.
        </div>
      </ha-card>`;const e=t.attributes.people||{},o=t.attributes.rewards||[];let i="var(--primary-color)";if(this._config.person_entity){const t=e[this._config.person_entity];t?.accent_color&&(i=t.accent_color)}this._config.accent_color&&(i=this._config.accent_color),this.style.setProperty("--accent-color",i);const s=this._getPersonName(this._config.person_entity),r=this._config.title||`${s}'s Rewards`;return L`
      <ha-card
        class="${this._config.hide_card_background?"no-background":""}"
      >
        ${this._config.show_title?L`<div class="card-header">${r}</div>`:""}
        ${this._renderRewardsGrid(o,e)}
      </ha-card>
      ${this._showConfirmModal?this._renderConfirmModal(e,o):""}
      ${this._showAddRewardModal?this._renderAddRewardModal():""}
      ${this._showEditRewardModal?this._renderEditRewardModal():""}
    `}_renderConfirmModal(t,e){if(!this._pendingRedemption||!this._config)return"";const{personId:o,rewardId:i}=this._pendingRedemption,s=t[o],r=e.find(t=>t.id===i);if(!s||!r)return"";const a=this._getPersonName(o),n=s.points_balance-r.cost,d=s.points_balance>=r.cost,c=r.enabled&&d,l=yt(this.hass);return L`
      <div class="modal-overlay" @click="${this._cancelRedemption}">
        <div
          class="modal-content"
          @click="${t=>t.stopPropagation()}"
        >
          <div class="modal-header">
            ${c?"Are you sure?":"Reward Details"}
            <button
              class="edit-button"
              @click="${()=>this._handleEditButtonClick(r.id)}"
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
                <span class="modal-info-value">${r.name}</span>
              </div>
              <div class="modal-info-row">
                <span class="modal-info-label">Cost:</span>
                <span class="modal-info-value"
                  >${r.cost}
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
              ${r.enabled?"":L`<div
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
    `:""}_renderRewardsGrid(t,e){if(!this._config)return"";const o=t.filter(t=>t.person_id===this._config.person_entity),i=o.filter(t=>this._config.show_disabled_rewards||t.enabled),s=this._sortRewards(i),r=e[this._config.person_entity];return 0!==s.length||this._config.show_add_reward_button?L`
      <div class="rewards-grid">
        ${s.map(t=>this._renderRewardCard(t,r))}
        ${this._config.show_add_reward_button?this._renderAddRewardCard():""}
      </div>
    `:L`<div class="empty-state">
        No rewards configured yet. Use the "Add Reward" button or
        <code>chorebot.manage_reward</code> service to create rewards.
      </div>`}_renderRewardCard(t,e){const o=!!e&&e.points_balance>=t.cost,i=!t.enabled||!o,s=yt(this.hass);return L`
      <div
        class="reward-card ${i?"disabled":""}"
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
              ${s.icon?L`<ha-icon icon="${s.icon}"></ha-icon>`:""}
              ${s.text?s.text:""}
            </div>
          </div>
          ${t.description?L`<div class="reward-description">${t.description}</div>`:""}
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
    `}_sortRewards(t){const e=[...t];switch(this._config.sort_by){case"name":return e.sort((t,e)=>t.name.localeCompare(e.name));case"created":return e.sort((t,e)=>new Date(t.created||0).getTime()-new Date(e.created||0).getTime());default:return e.sort((t,e)=>t.cost-e.cost)}}_handleRewardClick(t,e){this._pendingRedemption={personId:this._config.person_entity,rewardId:t.id},this._showConfirmModal=!0}_cancelRedemption(){this._showConfirmModal=!1,this._pendingRedemption=null}async _confirmRedemption(){if(!this._pendingRedemption)return;const{personId:t,rewardId:e}=this._pendingRedemption;this._showConfirmModal=!1,this._pendingRedemption=null,this._redeeming=e;try{await this.hass.callService("chorebot","redeem_reward",{person_id:t,reward_id:e}),this._showRedemptionSuccess()}catch(t){const e=t.message||"Failed to redeem reward. Please try again.";alert(e)}finally{this._redeeming=null}}_showRedemptionSuccess(){const t=function(t){const e=Ct(t);return[e.lighter,e.light,e.base,e.dark,e.darker]}(this._config.accent_color||getComputedStyle(this).getPropertyValue("--primary-color")||"#03a9f4");St(t,3e3)}_openAddRewardModal(){this._rewardFormData={name:"",cost:50,icon:"mdi:gift",description:""},this._showAddRewardModal=!0}_closeAddRewardModal(){this._showAddRewardModal=!1}async _createReward(){if(!this._config)return;const{name:t,cost:e,icon:o,description:i}=this._rewardFormData;if(t.trim())try{await this.hass.callService("chorebot","manage_reward",{name:t.trim(),cost:Math.max(1,Math.min(1e4,e)),icon:o||"mdi:gift",description:i.trim(),person_id:this._config.person_entity}),this._closeAddRewardModal()}catch(t){const e=t.message||"Failed to create reward. Please try again.";alert(e)}else alert("Reward name is required")}_openEditRewardModal(t){if(!this.hass)return;const e=this.hass.states["sensor.chorebot_points"];if(!e)return;const o=(e.attributes.rewards||[]).find(e=>e.id===t);o?(this._rewardFormData={name:o.name,cost:o.cost,icon:o.icon,description:o.description||""},this._editingRewardId=t,this._showEditRewardModal=!0):alert("Reward not found")}_closeEditRewardModal(){this._showEditRewardModal=!1,this._editingRewardId=null,this._rewardFormData={name:"",cost:50,icon:"mdi:gift",description:""}}_handleEditButtonClick(t){this._showConfirmModal=!1,this._pendingRedemption=null,this._openEditRewardModal(t)}async _updateReward(){if(!this._config||!this._editingRewardId)return;const{name:t,cost:e,icon:o,description:i}=this._rewardFormData;if(t.trim())try{await this.hass.callService("chorebot","manage_reward",{reward_id:this._editingRewardId,name:t.trim(),cost:Math.max(1,Math.min(1e4,e)),icon:o||"mdi:gift",description:i.trim(),person_id:this._config.person_entity}),this._closeEditRewardModal()}catch(t){const e=t.message||"Failed to update reward. Please try again.";alert(e)}else alert("Reward name is required")}_getPersonName(t){const e=this.hass?.states[t];return e?.attributes.friendly_name||t.replace("person.","")}};Pt.styles=a`
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
  `,t([ht({attribute:!1})],Pt.prototype,"hass",void 0),t([ut()],Pt.prototype,"_config",void 0),t([ut()],Pt.prototype,"_redeeming",void 0),t([ut()],Pt.prototype,"_showConfirmModal",void 0),t([ut()],Pt.prototype,"_showAddRewardModal",void 0),t([ut()],Pt.prototype,"_pendingRedemption",void 0),t([ut()],Pt.prototype,"_rewardFormData",void 0),t([ut()],Pt.prototype,"_showEditRewardModal",void 0),t([ut()],Pt.prototype,"_editingRewardId",void 0),Pt=t([dt("chorebot-person-rewards-card")],Pt),window.customCards=window.customCards||[],window.customCards.push({type:"chorebot-person-rewards-card",name:"ChoreBot Person Rewards Card",description:"Display person-specific rewards with inline creation and redemption",preview:!0}),console.info("%c CHOREBOT-PERSON-REWARDS-CARD %c v0.1.0 ","color: white; background: #9C27B0; font-weight: bold;","color: #9C27B0; background: white; font-weight: bold;"),console.info("%c CHOREBOT-CARDS %c v0.1.0 ","background: #3498db; color: white; font-weight: bold; padding: 2px 4px; border-radius: 3px 0 0 3px;","background: #ecf0f1; color: #3498db; font-weight: bold; padding: 2px 4px; border-radius: 0 3px 3px 0;");
