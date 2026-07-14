function t(t,e,s,i){var r,n=arguments.length,o=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(o=(n<3?r(o):n>3?r(e,s,o):r(e,s))||o);return n>3&&o&&Object.defineProperty(e,s,o),o}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,s=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),r=new WeakMap;let n=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&r.set(e,t))}return t}toString(){return this.cssText}};const o=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:a,defineProperty:c,getOwnPropertyDescriptor:h,getOwnPropertyNames:l,getOwnPropertySymbols:d,getPrototypeOf:u}=Object,p=globalThis,_=p.trustedTypes,g=_?_.emptyScript:"",f=p.reactiveElementPolyfillSupport,$=(t,e)=>t,m={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},v=(t,e)=>!a(t,e),A={attribute:!0,type:String,converter:m,reflect:!1,useDefault:!1,hasChanged:v};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;let y=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=A){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&c(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:r}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:i,set(e){const n=i?.call(this);r?.call(this,e),this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??A}static _$Ei(){if(this.hasOwnProperty($("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty($("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty($("properties"))){const t=this.properties,e=[...l(t),...d(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(o(t))}else void 0!==t&&e.push(o(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{if(s)t.adoptedStyleSheets=i.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const s of i){const i=document.createElement("style"),r=e.litNonce;void 0!==r&&i.setAttribute("nonce",r),i.textContent=s.cssText,t.appendChild(i)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const r=(void 0!==s.converter?.toAttribute?s.converter:m).toAttribute(e,s.type);this._$Em=t,null==r?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:m;this._$Em=i;const n=r.fromAttribute(e,t.type);this[i]=n??this._$Ej?.get(i)??n,this._$Em=null}}requestUpdate(t,e,s,i=!1,r){if(void 0!==t){const n=this.constructor;if(!1===i&&(r=this[t]),s??=n.getPropertyOptions(t),!((s.hasChanged??v)(r,e)||s.useDefault&&s.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,s))))return;this.C(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:r},n){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==r||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),!0===i&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t){const{wrapped:t}=s,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,s,i)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};y.elementStyles=[],y.shadowRootOptions={mode:"open"},y[$("elementProperties")]=new Map,y[$("finalized")]=new Map,f?.({ReactiveElement:y}),(p.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const w=globalThis,E=t=>t,b=w.trustedTypes,S=b?b.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",x=`lit$${Math.random().toFixed(9).slice(2)}$`,P="?"+x,T=`<${P}>`,U=document,N=()=>U.createComment(""),k=t=>null===t||"object"!=typeof t&&"function"!=typeof t,O=Array.isArray,H="[ \t\n\f\r]",R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,I=/-->/g,M=/>/g,L=RegExp(`>|${H}(?:([^\\s"'>=/]+)(${H}*=${H}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),B=/'/g,D=/"/g,j=/^(?:script|style|textarea|title)$/i,W=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),q=Symbol.for("lit-noChange"),z=Symbol.for("lit-nothing"),F=new WeakMap,V=U.createTreeWalker(U,129);function Z(t,e){if(!O(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(e):e}const G=(t,e)=>{const s=t.length-1,i=[];let r,n=2===e?"<svg>":3===e?"<math>":"",o=R;for(let e=0;e<s;e++){const s=t[e];let a,c,h=-1,l=0;for(;l<s.length&&(o.lastIndex=l,c=o.exec(s),null!==c);)l=o.lastIndex,o===R?"!--"===c[1]?o=I:void 0!==c[1]?o=M:void 0!==c[2]?(j.test(c[2])&&(r=RegExp("</"+c[2],"g")),o=L):void 0!==c[3]&&(o=L):o===L?">"===c[0]?(o=r??R,h=-1):void 0===c[1]?h=-2:(h=o.lastIndex-c[2].length,a=c[1],o=void 0===c[3]?L:'"'===c[3]?D:B):o===D||o===B?o=L:o===I||o===M?o=R:(o=L,r=void 0);const d=o===L&&t[e+1].startsWith("/>")?" ":"";n+=o===R?s+T:h>=0?(i.push(a),s.slice(0,h)+C+s.slice(h)+x+d):s+x+(-2===h?e:d)}return[Z(t,n+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class K{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,n=0;const o=t.length-1,a=this.parts,[c,h]=G(t,e);if(this.el=K.createElement(c,s),V.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=V.nextNode())&&a.length<o;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(C)){const e=h[n++],s=i.getAttribute(t).split(x),o=/([.?@])?(.*)/.exec(e);a.push({type:1,index:r,name:o[2],strings:s,ctor:"."===o[1]?tt:"?"===o[1]?et:"@"===o[1]?st:Y}),i.removeAttribute(t)}else t.startsWith(x)&&(a.push({type:6,index:r}),i.removeAttribute(t));if(j.test(i.tagName)){const t=i.textContent.split(x),e=t.length-1;if(e>0){i.textContent=b?b.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],N()),V.nextNode(),a.push({type:2,index:++r});i.append(t[e],N())}}}else if(8===i.nodeType)if(i.data===P)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=i.data.indexOf(x,t+1));)a.push({type:7,index:r}),t+=x.length-1}r++}}static createElement(t,e){const s=U.createElement("template");return s.innerHTML=t,s}}function J(t,e,s=t,i){if(e===q)return e;let r=void 0!==i?s._$Co?.[i]:s._$Cl;const n=k(e)?void 0:e._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),void 0===n?r=void 0:(r=new n(t),r._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=r:s._$Cl=r),void 0!==r&&(e=J(t,r._$AS(t,e.values),r,i)),e}class X{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??U).importNode(e,!0);V.currentNode=i;let r=V.nextNode(),n=0,o=0,a=s[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new Q(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new it(r,this,t)),this._$AV.push(e),a=s[++o]}n!==a?.index&&(r=V.nextNode(),n++)}return V.currentNode=U,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=z,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=J(this,t,e),k(t)?t===z||null==t||""===t?(this._$AH!==z&&this._$AR(),this._$AH=z):t!==this._$AH&&t!==q&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>O(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==z&&k(this._$AH)?this._$AA.nextSibling.data=t:this.T(U.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=K.createElement(Z(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new X(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=F.get(t.strings);return void 0===e&&F.set(t.strings,e=new K(t)),e}k(t){O(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new Q(this.O(N()),this.O(N()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=E(t).nextSibling;E(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Y{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=z,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=z}_$AI(t,e=this,s,i){const r=this.strings;let n=!1;if(void 0===r)t=J(this,t,e,0),n=!k(t)||t!==this._$AH&&t!==q,n&&(this._$AH=t);else{const i=t;let o,a;for(t=r[0],o=0;o<r.length-1;o++)a=J(this,i[s+o],e,o),a===q&&(a=this._$AH[o]),n||=!k(a)||a!==this._$AH[o],a===z?t=z:t!==z&&(t+=(a??"")+r[o+1]),this._$AH[o]=a}n&&!i&&this.j(t)}j(t){t===z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends Y{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===z?void 0:t}}class et extends Y{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==z)}}class st extends Y{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=J(this,t,e,0)??z)===q)return;const s=this._$AH,i=t===z&&s!==z||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==z&&(s===z||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){J(this,t)}}const rt=w.litHtmlPolyfillSupport;rt?.(K,Q),(w.litHtmlVersions??=[]).push("3.3.3");const nt=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ot extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const i=s?.renderBefore??e;let r=i._$litPart$;if(void 0===r){const t=s?.renderBefore??null;i._$litPart$=r=new Q(e.insertBefore(N(),t),t,void 0,s??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return q}}ot._$litElement$=!0,ot.finalized=!0,nt.litElementHydrateSupport?.({LitElement:ot});const at=nt.litElementPolyfillSupport;at?.({LitElement:ot}),(nt.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ct=t=>(e,s)=>{void 0!==s?s.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},ht={attribute:!0,type:String,converter:m,reflect:!1,hasChanged:v},lt=(t=ht,e,s)=>{const{kind:i,metadata:r}=s;let n=globalThis.litPropertyMetadata.get(r);if(void 0===n&&globalThis.litPropertyMetadata.set(r,n=new Map),"setter"===i&&((t=Object.create(t)).wrapped=!0),n.set(s.name,t),"accessor"===i){const{name:i}=s;return{set(s){const r=e.get.call(this);e.set.call(this,s),this.requestUpdate(i,r,t,!0,s)},init(e){return void 0!==e&&this.C(i,void 0,t,e),e}}}if("setter"===i){const{name:i}=s;return function(s){const r=this[i];e.call(this,s),this.requestUpdate(i,r,t,!0,s)}}throw Error("Unsupported decorator location: "+i)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function dt(t){return(e,s)=>"object"==typeof s?lt(t,e,s):((t,e,s)=>{const i=e.hasOwnProperty(s);return e.constructor.createProperty(s,t),i?Object.getOwnPropertyDescriptor(e,s):void 0})(t,e,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ut(t){return dt({...t,state:!0,attribute:!1})}const pt=(t,e,s)=>({row:t,col:e,len:s}),_t=t=>5*Math.floor(t%60/5),gt=(t,e)=>(t+(e?1:0)+11)%12,ft=pt(0,0,2),$t=pt(0,3,3),mt=pt(0,7,4),vt=pt(1,0,4),At=pt(1,4,7),yt=pt(2,4,7),wt=pt(3,0,3),Et=pt(3,7,4),bt=pt(4,0,4),St=pt(9,8,3),Ct=pt(5,0,3),xt=[pt(5,0,4),pt(5,7,4),pt(6,0,4),pt(6,7,4),pt(4,7,4),pt(7,0,5),pt(8,0,6),pt(7,7,4),pt(9,3,4),pt(9,0,4),pt(4,5,3),pt(8,6,5)],Pt={grid:["ESKISTAFÜNF","ZEHNZWANZIG","DREIVIERTEL","VORFUNKNACH","HALBAELFÜNF","EINSXAMZWEI","DREIPMJVIER","SECHSNLACHT","SIEBENZWÖLF","ZEHNEUNKUHR"],timeToWords(t,e){const s=_t(e),i=gt(t,s>=25),r=xt[i],n=[ft,$t];switch(s){case 0:return[...n,0===i?Ct:r,St];case 5:return[...n,mt,Et,r];case 10:return[...n,vt,Et,r];case 15:return[...n,yt,Et,r];case 20:return[...n,At,Et,r];case 25:return[...n,mt,wt,bt,r];case 30:return[...n,bt,r];case 35:return[...n,mt,Et,bt,r];case 40:return[...n,At,wt,r];case 45:return[...n,yt,wt,r];case 50:return[...n,vt,wt,r];default:return[...n,mt,wt,r]}}},Tt=pt(0,0,2),Ut=pt(0,3,4),Nt=pt(0,8,3),kt=pt(1,0,6),Ot=pt(1,8,3),Ht=pt(2,0,6),Rt=pt(2,8,3),It=pt(3,0,2),Mt=pt(3,3,5),Lt=[pt(4,0,3),pt(4,3,4),pt(4,8,3),pt(5,0,5),pt(5,5,4),pt(6,0,6),pt(6,6,5),pt(7,0,5),pt(7,5,4),pt(8,0,4),pt(8,7,4),pt(9,0,6)],Bt={grid:["ESKISCHAFÜF","VIERTUBFZÄÄ","ZWÄNZGSIVOR","ABOHAUBIEGE","EISZWÖISDRÜ","VIERIFÜFIQT","SÄCHSISIBNI","ACHTINÜNIEL","ZÄNIERBEUFI","ZWÖUFIAMUHR"],timeToWords(t,e){const s=_t(e),i=Lt[gt(t,s>=25)],r=[Tt,Ut];switch(s){case 0:return[...r,i];case 5:return[...r,Nt,It,i];case 10:return[...r,Ot,It,i];case 15:return[...r,kt,It,i];case 20:return[...r,Ht,It,i];case 25:return[...r,Nt,Rt,Mt,i];case 30:return[...r,Mt,i];case 35:return[...r,Nt,It,Mt,i];case 40:return[...r,Ht,Rt,i];case 45:return[...r,kt,Rt,i];case 50:return[...r,Ot,Rt,i];default:return[...r,Nt,Rt,i]}}},Dt=pt(0,0,2),jt=pt(0,3,2),Wt=pt(1,0,1),qt=pt(1,2,7),zt=pt(2,0,6),Ft=pt(2,6,4),Vt=pt(3,0,4),Zt=pt(3,5,3),Gt=pt(3,9,2),Kt=pt(4,0,4),Jt=pt(9,5,6),Xt=[pt(5,0,3),pt(6,8,3),pt(5,6,5),pt(6,0,4),pt(6,4,4),pt(5,3,3),pt(8,0,5),pt(7,0,5),pt(4,7,4),pt(9,0,3),pt(7,5,6),pt(8,5,6)],Qt={grid:["ITLISASAMPM","ACQUARTERDC","TWENTYFIVEX","HALFSTENFTO","PASTERUNINE","ONESIXTHREE","FOURFIVETWO","EIGHTELEVEN","SEVENTWELVE","TENSEOCLOCK"],timeToWords(t,e){const s=_t(e),i=Xt[gt(t,s>=35)],r=[Dt,jt];switch(s){case 0:return[...r,i,Jt];case 5:return[...r,Ft,Kt,i];case 10:return[...r,Zt,Kt,i];case 15:return[...r,Wt,qt,Kt,i];case 20:return[...r,zt,Kt,i];case 25:return[...r,zt,Ft,Kt,i];case 30:return[...r,Vt,Kt,i];case 35:return[...r,zt,Ft,Gt,i];case 40:return[...r,zt,Gt,i];case 45:return[...r,Wt,qt,Gt,i];case 50:return[...r,Zt,Gt,i];default:return[...r,Ft,Gt,i]}}},Yt=t=>{const e=t?.match(/^#?([0-9a-f]{6})$/i);if(!e)return;const s=parseInt(e[1],16);return[s>>16&255,s>>8&255,255&s]},te=t=>Array.isArray(t)?`#${t.map(t=>t.toString(16).padStart(2,"0")).join("")}`:void 0,ee={de:{language:"Sprache",active_color:"Farbe der aktiven Buchstaben",minute_dots:"Minuten-Punkte (+1…+4) anzeigen",advanced:"Erweitert",inactive_color:"Farbe der inaktiven Buchstaben",background:"Hintergrundfarbe",lang_de:"Deutsch",lang_ch:"Schweizerdeutsch (Bärndütsch)",lang_en:"Englisch"},en:{language:"Language",active_color:"Active letter color",minute_dots:"Show minute dots (+1…+4)",advanced:"Advanced",inactive_color:"Inactive letter color",background:"Background color",lang_de:"German",lang_ch:"Swiss German (Bärndütsch)",lang_en:"English"}};let se=class extends ot{setConfig(t){this._config=t}_labels(){return(this.hass?.locale?.language??this.hass?.language??"en").toLowerCase().startsWith("de")?ee.de:ee.en}_schema(t){return[{name:"language",required:!0,selector:{select:{mode:"dropdown",options:[{value:"de",label:t.lang_de},{value:"ch",label:t.lang_ch},{value:"en",label:t.lang_en}]}}},{name:"active_color",selector:{color_rgb:{}}},{name:"minute_dots",selector:{boolean:{}}},{name:"advanced",type:"expandable",flatten:!0,title:t.advanced,schema:[{name:"inactive_color",selector:{color_rgb:{}}},{name:"background",selector:{color_rgb:{}}}]}]}render(){if(!this._config)return z;const t=this._labels(),e={language:this._config.language??"de",active_color:Yt(this._config.active_color??"#ffb300"),minute_dots:this._config.minute_dots??!0,inactive_color:Yt(this._config.inactive_color),background:Yt(this._config.background)};return W`
      <ha-form
        .hass=${this.hass}
        .data=${e}
        .schema=${this._schema(t)}
        .computeLabel=${e=>t[e.name]??e.name}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `}_valueChanged(t){if(t.stopPropagation(),!this._config)return;const e=t.detail.value,s={...this._config,language:e.language,active_color:te(e.active_color)??this._config.active_color,minute_dots:e.minute_dots},i=te(e.inactive_color),r=te(e.background);i&&(s.inactive_color=i),r&&(s.background=r),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:s},bubbles:!0,composed:!0}))}};t([dt({attribute:!1})],se.prototype,"hass",void 0),t([ut()],se.prototype,"_config",void 0),se=t([ct("wordclock-card-editor")],se);const ie={de:Pt,ch:Bt,en:Qt},re={language:"de",active_color:"#ffb300",minute_dots:!0};let ne=class extends ot{constructor(){super(...arguments),this._now=new Date}setConfig(t){if(t.language&&!ie[t.language])throw new Error(`Unknown language: ${t.language}`);this._config={...re,...t}}getCardSize(){return 4}getGridOptions(){return{columns:6,rows:"auto",min_columns:4}}static getStubConfig(){return{...re}}static getConfigElement(){return document.createElement("wordclock-card-editor")}connectedCallback(){super.connectedCallback(),this._tick()}disconnectedCallback(){super.disconnectedCallback(),void 0!==this._timer&&window.clearTimeout(this._timer)}_tick(){this._now=new Date;const t=1e3*(60-this._now.getSeconds())-this._now.getMilliseconds();this._timer=window.setTimeout(()=>this._tick(),t+50)}render(){if(!this._config)return z;const t=ie[this._config.language??"de"],e=this._now.getHours(),s=this._now.getMinutes(),i=new Set;for(const r of t.timeToWords(e,s))for(let t=r.col;t<r.col+r.len;t++)i.add(`${r.row}/${t}`);const r=this._config.minute_dots?(t=>t%5)(s):0,n=[`--wc-active: ${this._config.active_color}`,this._config.inactive_color?`--wc-inactive: ${this._config.inactive_color}`:"",this._config.background?`background: ${this._config.background}`:""].filter(Boolean).join("; ");return W`
      <ha-card style=${n}>
        <div class="frame">
          <div class="inner">
          ${this._config.minute_dots?W`
                <span class="dot tl ${r>=1?"on":""}"></span>
                <span class="dot tr ${r>=2?"on":""}"></span>
                <span class="dot br ${r>=3?"on":""}"></span>
                <span class="dot bl ${r>=4?"on":""}"></span>
              `:z}
          <div class="grid" role="img" aria-label=${this._time24()}>
            ${t.grid.map((t,e)=>[...t].map((t,s)=>W`
                  <span class="cell ${i.has(`${e}/${s}`)?"on":""}">
                    ${t}
                  </span>
                `))}
            </div>
          </div>
        </div>
      </ha-card>
    `}_time24(){return`${String(this._now.getHours()).padStart(2,"0")}:${String(this._now.getMinutes()).padStart(2,"0")}`}};ne.styles=((t,...e)=>{const s=1===t.length?t[0]:e.reduce((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]);return new n(s,t,i)})`
    ha-card {
      overflow: hidden;
      display: flex;
      justify-content: center;
    }
    /* Square clock, capped by viewport height so wide/panel views never clip it. */
    .frame {
      container-type: inline-size;
      width: min(100%, calc(100vh - 130px));
      width: min(100%, calc(100dvh - 130px));
      aspect-ratio: 1;
    }
    .inner {
      position: relative;
      width: 100%;
      height: 100%;
      padding: 7cqw;
      box-sizing: border-box;
    }
    .grid {
      display: grid;
      width: 100%;
      height: 100%;
      grid-template-columns: repeat(11, 1fr);
      grid-template-rows: repeat(10, 1fr);
    }
    .cell {
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Roboto Mono', ui-monospace, monospace;
      font-size: 4.5cqw;
      font-weight: 600;
      color: var(
        --wc-inactive,
        color-mix(in srgb, var(--primary-text-color) 18%, transparent)
      );
      transition: color 0.6s ease, text-shadow 0.6s ease;
      user-select: none;
    }
    .cell.on {
      color: var(--wc-active);
      text-shadow: 0 0 0.5em
        color-mix(in srgb, var(--wc-active) 55%, transparent);
    }
    .dot {
      position: absolute;
      width: 2cqw;
      height: 2cqw;
      border-radius: 50%;
      background: var(
        --wc-inactive,
        color-mix(in srgb, var(--primary-text-color) 18%, transparent)
      );
      transition: background 0.6s ease, box-shadow 0.6s ease;
    }
    .dot.on {
      background: var(--wc-active);
      box-shadow: 0 0 0.5em
        color-mix(in srgb, var(--wc-active) 55%, transparent);
    }
    .dot.tl {
      top: 2.5cqw;
      left: 2.5cqw;
    }
    .dot.tr {
      top: 2.5cqw;
      right: 2.5cqw;
    }
    .dot.br {
      bottom: 2.5cqw;
      right: 2.5cqw;
    }
    .dot.bl {
      bottom: 2.5cqw;
      left: 2.5cqw;
    }
  `,t([ut()],ne.prototype,"_config",void 0),t([ut()],ne.prototype,"_now",void 0),ne=t([ct("wordclock-card")],ne),window.customCards=window.customCards||[],window.customCards.push({type:"wordclock-card",name:"WordClock Card",description:"Word clock with German, Swiss German (Bärndütsch) and English layouts.",documentationURL:"https://github.com/sikelo83/lovelace-wordclock-card",preview:!0});export{ne as WordClockCard};
