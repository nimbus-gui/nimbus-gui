import{r as x}from"./index-76fb7be0.js";import{w as Wt}from"./index-02b6f90c.js";import{r as Ft}from"./index-d3ea75b5.js";function zt(e){e()}let wt=zt;const Ut=e=>wt=e,Kt=()=>wt,Ye=Symbol.for("react-redux-context"),Je=typeof globalThis<"u"?globalThis:{};function Bt(){var e;if(!x.createContext)return{};const t=(e=Je[Ye])!=null?e:Je[Ye]=new Map;let r=t.get(x.createContext);return r||(r=x.createContext(null),t.set(x.createContext,r)),r}const Z=Bt();function St(e=Z){return function(){return x.useContext(e)}}const Ht=St(),Gt=()=>{throw new Error("uSES not initialized!")};let Pt=Gt;const Xt=e=>{Pt=e},Yt=(e,t)=>e===t;function Jt(e=Z){const t=e===Z?Ht:St(e);return function(n,o={}){const{equalityFn:i=Yt,stabilityCheck:a=void 0,noopCheck:c=void 0}=typeof o=="function"?{equalityFn:o}:o,{store:f,subscription:u,getServerState:s,stabilityCheck:d,noopCheck:l}=t();x.useRef(!0);const p=x.useCallback({[n.name](y){return n(y)}}[n.name],[n,d,a]),v=Pt(u.addNestedSub,f.getState,s||f.getState,p,i);return x.useDebugValue(v),v}}const cn=Jt();var Ot={exports:{}},g={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O=typeof Symbol=="function"&&Symbol.for,ke=O?Symbol.for("react.element"):60103,qe=O?Symbol.for("react.portal"):60106,ie=O?Symbol.for("react.fragment"):60107,ue=O?Symbol.for("react.strict_mode"):60108,ae=O?Symbol.for("react.profiler"):60114,ce=O?Symbol.for("react.provider"):60109,fe=O?Symbol.for("react.context"):60110,Le=O?Symbol.for("react.async_mode"):60111,se=O?Symbol.for("react.concurrent_mode"):60111,le=O?Symbol.for("react.forward_ref"):60112,de=O?Symbol.for("react.suspense"):60113,Qt=O?Symbol.for("react.suspense_list"):60120,pe=O?Symbol.for("react.memo"):60115,ye=O?Symbol.for("react.lazy"):60116,Zt=O?Symbol.for("react.block"):60121,er=O?Symbol.for("react.fundamental"):60117,tr=O?Symbol.for("react.responder"):60118,rr=O?Symbol.for("react.scope"):60119;function j(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case ke:switch(e=e.type,e){case Le:case se:case ie:case ae:case ue:case de:return e;default:switch(e=e&&e.$$typeof,e){case fe:case le:case ye:case pe:case ce:return e;default:return t}}case qe:return t}}}function _t(e){return j(e)===se}g.AsyncMode=Le;g.ConcurrentMode=se;g.ContextConsumer=fe;g.ContextProvider=ce;g.Element=ke;g.ForwardRef=le;g.Fragment=ie;g.Lazy=ye;g.Memo=pe;g.Portal=qe;g.Profiler=ae;g.StrictMode=ue;g.Suspense=de;g.isAsyncMode=function(e){return _t(e)||j(e)===Le};g.isConcurrentMode=_t;g.isContextConsumer=function(e){return j(e)===fe};g.isContextProvider=function(e){return j(e)===ce};g.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===ke};g.isForwardRef=function(e){return j(e)===le};g.isFragment=function(e){return j(e)===ie};g.isLazy=function(e){return j(e)===ye};g.isMemo=function(e){return j(e)===pe};g.isPortal=function(e){return j(e)===qe};g.isProfiler=function(e){return j(e)===ae};g.isStrictMode=function(e){return j(e)===ue};g.isSuspense=function(e){return j(e)===de};g.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ie||e===se||e===ae||e===ue||e===de||e===Qt||typeof e=="object"&&e!==null&&(e.$$typeof===ye||e.$$typeof===pe||e.$$typeof===ce||e.$$typeof===fe||e.$$typeof===le||e.$$typeof===er||e.$$typeof===tr||e.$$typeof===rr||e.$$typeof===Zt)};g.typeOf=j;Ot.exports=g;var nr=Ot.exports,Et=nr,or={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ir={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},xt={};xt[Et.ForwardRef]=or;xt[Et.Memo]=ir;var w={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ve=Symbol.for("react.element"),We=Symbol.for("react.portal"),ve=Symbol.for("react.fragment"),me=Symbol.for("react.strict_mode"),he=Symbol.for("react.profiler"),be=Symbol.for("react.provider"),ge=Symbol.for("react.context"),ur=Symbol.for("react.server_context"),we=Symbol.for("react.forward_ref"),Se=Symbol.for("react.suspense"),Pe=Symbol.for("react.suspense_list"),Oe=Symbol.for("react.memo"),_e=Symbol.for("react.lazy"),ar=Symbol.for("react.offscreen"),$t;$t=Symbol.for("react.module.reference");function C(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Ve:switch(e=e.type,e){case ve:case he:case me:case Se:case Pe:return e;default:switch(e=e&&e.$$typeof,e){case ur:case ge:case we:case _e:case Oe:case be:return e;default:return t}}case We:return t}}}w.ContextConsumer=ge;w.ContextProvider=be;w.Element=Ve;w.ForwardRef=we;w.Fragment=ve;w.Lazy=_e;w.Memo=Oe;w.Portal=We;w.Profiler=he;w.StrictMode=me;w.Suspense=Se;w.SuspenseList=Pe;w.isAsyncMode=function(){return!1};w.isConcurrentMode=function(){return!1};w.isContextConsumer=function(e){return C(e)===ge};w.isContextProvider=function(e){return C(e)===be};w.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ve};w.isForwardRef=function(e){return C(e)===we};w.isFragment=function(e){return C(e)===ve};w.isLazy=function(e){return C(e)===_e};w.isMemo=function(e){return C(e)===Oe};w.isPortal=function(e){return C(e)===We};w.isProfiler=function(e){return C(e)===he};w.isStrictMode=function(e){return C(e)===me};w.isSuspense=function(e){return C(e)===Se};w.isSuspenseList=function(e){return C(e)===Pe};w.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ve||e===he||e===me||e===Se||e===Pe||e===ar||typeof e=="object"&&e!==null&&(e.$$typeof===_e||e.$$typeof===Oe||e.$$typeof===be||e.$$typeof===ge||e.$$typeof===we||e.$$typeof===$t||e.getModuleId!==void 0)};w.typeOf=C;function cr(){const e=Kt();let t=null,r=null;return{clear(){t=null,r=null},notify(){e(()=>{let n=t;for(;n;)n.callback(),n=n.next})},get(){let n=[],o=t;for(;o;)n.push(o),o=o.next;return n},subscribe(n){let o=!0,i=r={callback:n,next:null,prev:r};return i.prev?i.prev.next=i:t=i,function(){!o||t===null||(o=!1,i.next?i.next.prev=i.prev:r=i.prev,i.prev?i.prev.next=i.next:t=i.next)}}}}const Qe={notify(){},get:()=>[]};function fr(e,t){let r,n=Qe;function o(d){return f(),n.subscribe(d)}function i(){n.notify()}function a(){s.onStateChange&&s.onStateChange()}function c(){return!!r}function f(){r||(r=t?t.addNestedSub(a):e.subscribe(a),n=cr())}function u(){r&&(r(),r=void 0,n.clear(),n=Qe)}const s={addNestedSub:o,notifyNestedSubs:i,handleChangeWrapper:a,isSubscribed:c,trySubscribe:f,tryUnsubscribe:u,getListeners:()=>n};return s}const sr=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",lr=sr?x.useLayoutEffect:x.useEffect;function fn({store:e,context:t,children:r,serverState:n,stabilityCheck:o="once",noopCheck:i="once"}){const a=x.useMemo(()=>{const u=fr(e);return{store:e,subscription:u,getServerState:n?()=>n:void 0,stabilityCheck:o,noopCheck:i}},[e,n,o,i]),c=x.useMemo(()=>e.getState(),[e]);lr(()=>{const{subscription:u}=a;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),c!==e.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[a,c]);const f=t||Z;return x.createElement(f.Provider,{value:a},r)}Xt(Wt.useSyncExternalStoreWithSelector);Ut(Ft.unstable_batchedUpdates);function M(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];throw Error("[Immer] minified error nr: "+e+(r.length?" "+r.map(function(o){return"'"+o+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function q(e){return!!e&&!!e[P]}function I(e){var t;return!!e&&(function(r){if(!r||typeof r!="object")return!1;var n=Object.getPrototypeOf(r);if(n===null)return!0;var o=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return o===Object||typeof o=="function"&&Function.toString.call(o)===wr}(e)||Array.isArray(e)||!!e[it]||!!(!((t=e.constructor)===null||t===void 0)&&t[it])||Fe(e)||ze(e))}function V(e,t,r){r===void 0&&(r=!1),K(e)===0?(r?Object.keys:z)(e).forEach(function(n){r&&typeof n=="symbol"||t(n,e[n],e)}):e.forEach(function(n,o){return t(o,n,e)})}function K(e){var t=e[P];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:Fe(e)?2:ze(e)?3:0}function F(e,t){return K(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function dr(e,t){return K(e)===2?e.get(t):e[t]}function jt(e,t,r){var n=K(e);n===2?e.set(t,r):n===3?e.add(r):e[t]=r}function Ct(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function Fe(e){return br&&e instanceof Map}function ze(e){return gr&&e instanceof Set}function L(e){return e.o||e.t}function Ue(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=Rt(e);delete t[P];for(var r=z(t),n=0;n<r.length;n++){var o=r[n],i=t[o];i.writable===!1&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(t[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[o]})}return Object.create(Object.getPrototypeOf(e),t)}function Ke(e,t){return t===void 0&&(t=!1),Be(e)||q(e)||!I(e)||(K(e)>1&&(e.set=e.add=e.clear=e.delete=pr),Object.freeze(e),t&&V(e,function(r,n){return Ke(n,!0)},!0)),e}function pr(){M(2)}function Be(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function N(e){var t=Te[e];return t||M(18,e),t}function yr(e,t){Te[e]||(Te[e]=t)}function Me(){return Y}function Ee(e,t){t&&(N("Patches"),e.u=[],e.s=[],e.v=t)}function ee(e){Ne(e),e.p.forEach(vr),e.p=null}function Ne(e){e===Y&&(Y=e.l)}function Ze(e){return Y={p:[],l:Y,h:e,m:!0,_:0}}function vr(e){var t=e[P];t.i===0||t.i===1?t.j():t.g=!0}function xe(e,t){t._=t.p.length;var r=t.p[0],n=e!==void 0&&e!==r;return t.h.O||N("ES5").S(t,e,n),n?(r[P].P&&(ee(t),M(4)),I(e)&&(e=te(t,e),t.l||re(t,e)),t.u&&N("Patches").M(r[P].t,e,t.u,t.s)):e=te(t,r,[]),ee(t),t.u&&t.v(t.u,t.s),e!==At?e:void 0}function te(e,t,r){if(Be(t))return t;var n=t[P];if(!n)return V(t,function(c,f){return et(e,n,t,c,f,r)},!0),t;if(n.A!==e)return t;if(!n.P)return re(e,n.t,!0),n.t;if(!n.I){n.I=!0,n.A._--;var o=n.i===4||n.i===5?n.o=Ue(n.k):n.o,i=o,a=!1;n.i===3&&(i=new Set(o),o.clear(),a=!0),V(i,function(c,f){return et(e,n,o,c,f,r,a)}),re(e,o,!1),r&&e.u&&N("Patches").N(n,r,e.u,e.s)}return n.o}function et(e,t,r,n,o,i,a){if(q(o)){var c=te(e,o,i&&t&&t.i!==3&&!F(t.R,n)?i.concat(n):void 0);if(jt(r,n,c),!q(c))return;e.m=!1}else a&&r.add(o);if(I(o)&&!Be(o)){if(!e.h.D&&e._<1)return;te(e,o),t&&t.A.l||re(e,o)}}function re(e,t,r){r===void 0&&(r=!1),!e.l&&e.h.D&&e.m&&Ke(t,r)}function $e(e,t){var r=e[P];return(r?L(r):e)[t]}function tt(e,t){if(t in e)for(var r=Object.getPrototypeOf(e);r;){var n=Object.getOwnPropertyDescriptor(r,t);if(n)return n;r=Object.getPrototypeOf(r)}}function T(e){e.P||(e.P=!0,e.l&&T(e.l))}function je(e){e.o||(e.o=Ue(e.t))}function Ie(e,t,r){var n=Fe(t)?N("MapSet").F(t,r):ze(t)?N("MapSet").T(t,r):e.O?function(o,i){var a=Array.isArray(o),c={i:a?1:0,A:i?i.A:Me(),P:!1,I:!1,R:{},l:i,t:o,k:null,o:null,j:null,C:!1},f=c,u=J;a&&(f=[c],u=X);var s=Proxy.revocable(f,u),d=s.revoke,l=s.proxy;return c.k=l,c.j=d,l}(t,r):N("ES5").J(t,r);return(r?r.A:Me()).p.push(n),n}function mr(e){return q(e)||M(22,e),function t(r){if(!I(r))return r;var n,o=r[P],i=K(r);if(o){if(!o.P&&(o.i<4||!N("ES5").K(o)))return o.t;o.I=!0,n=rt(r,i),o.I=!1}else n=rt(r,i);return V(n,function(a,c){o&&dr(o.t,a)===c||jt(n,a,t(c))}),i===3?new Set(n):n}(e)}function rt(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return Ue(e)}function hr(){function e(i,a){var c=o[i];return c?c.enumerable=a:o[i]=c={configurable:!0,enumerable:a,get:function(){var f=this[P];return J.get(f,i)},set:function(f){var u=this[P];J.set(u,i,f)}},c}function t(i){for(var a=i.length-1;a>=0;a--){var c=i[a][P];if(!c.P)switch(c.i){case 5:n(c)&&T(c);break;case 4:r(c)&&T(c)}}}function r(i){for(var a=i.t,c=i.k,f=z(c),u=f.length-1;u>=0;u--){var s=f[u];if(s!==P){var d=a[s];if(d===void 0&&!F(a,s))return!0;var l=c[s],p=l&&l[P];if(p?p.t!==d:!Ct(l,d))return!0}}var v=!!a[P];return f.length!==z(a).length+(v?0:1)}function n(i){var a=i.k;if(a.length!==i.t.length)return!0;var c=Object.getOwnPropertyDescriptor(a,a.length-1);if(c&&!c.get)return!0;for(var f=0;f<a.length;f++)if(!a.hasOwnProperty(f))return!0;return!1}var o={};yr("ES5",{J:function(i,a){var c=Array.isArray(i),f=function(s,d){if(s){for(var l=Array(d.length),p=0;p<d.length;p++)Object.defineProperty(l,""+p,e(p,!0));return l}var v=Rt(d);delete v[P];for(var y=z(v),m=0;m<y.length;m++){var b=y[m];v[b]=e(b,s||!!v[b].enumerable)}return Object.create(Object.getPrototypeOf(d),v)}(c,i),u={i:c?5:4,A:a?a.A:Me(),P:!1,I:!1,R:{},l:a,t:i,k:f,o:null,g:!1,C:!1};return Object.defineProperty(f,P,{value:u,writable:!0}),f},S:function(i,a,c){c?q(a)&&a[P].A===i&&t(i.p):(i.u&&function f(u){if(u&&typeof u=="object"){var s=u[P];if(s){var d=s.t,l=s.k,p=s.R,v=s.i;if(v===4)V(l,function(S){S!==P&&(d[S]!==void 0||F(d,S)?p[S]||f(l[S]):(p[S]=!0,T(s)))}),V(d,function(S){l[S]!==void 0||F(l,S)||(p[S]=!1,T(s))});else if(v===5){if(n(s)&&(T(s),p.length=!0),l.length<d.length)for(var y=l.length;y<d.length;y++)p[y]=!1;else for(var m=d.length;m<l.length;m++)p[m]=!0;for(var b=Math.min(l.length,d.length),h=0;h<b;h++)l.hasOwnProperty(h)||(p[h]=!0),p[h]===void 0&&f(l[h])}}}}(i.p[0]),t(i.p))},K:function(i){return i.i===4?r(i):n(i)}})}var nt,Y,He=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",br=typeof Map<"u",gr=typeof Set<"u",ot=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",At=He?Symbol.for("immer-nothing"):((nt={})["immer-nothing"]=!0,nt),it=He?Symbol.for("immer-draftable"):"__$immer_draftable",P=He?Symbol.for("immer-state"):"__$immer_state",wr=""+Object.prototype.constructor,z=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,Rt=Object.getOwnPropertyDescriptors||function(e){var t={};return z(e).forEach(function(r){t[r]=Object.getOwnPropertyDescriptor(e,r)}),t},Te={},J={get:function(e,t){if(t===P)return e;var r=L(e);if(!F(r,t))return function(o,i,a){var c,f=tt(i,a);return f?"value"in f?f.value:(c=f.get)===null||c===void 0?void 0:c.call(o.k):void 0}(e,r,t);var n=r[t];return e.I||!I(n)?n:n===$e(e.t,t)?(je(e),e.o[t]=Ie(e.A.h,n,e)):n},has:function(e,t){return t in L(e)},ownKeys:function(e){return Reflect.ownKeys(L(e))},set:function(e,t,r){var n=tt(L(e),t);if(n!=null&&n.set)return n.set.call(e.k,r),!0;if(!e.P){var o=$e(L(e),t),i=o==null?void 0:o[P];if(i&&i.t===r)return e.o[t]=r,e.R[t]=!1,!0;if(Ct(r,o)&&(r!==void 0||F(e.t,t)))return!0;je(e),T(e)}return e.o[t]===r&&(r!==void 0||t in e.o)||Number.isNaN(r)&&Number.isNaN(e.o[t])||(e.o[t]=r,e.R[t]=!0),!0},deleteProperty:function(e,t){return $e(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,je(e),T(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var r=L(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:n.enumerable,value:r[t]}},defineProperty:function(){M(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){M(12)}},X={};V(J,function(e,t){X[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),X.deleteProperty=function(e,t){return X.set.call(this,e,t,void 0)},X.set=function(e,t,r){return J.set.call(this,e[0],t,r,e[0])};var Sr=function(){function e(r){var n=this;this.O=ot,this.D=!0,this.produce=function(o,i,a){if(typeof o=="function"&&typeof i!="function"){var c=i;i=o;var f=n;return function(y){var m=this;y===void 0&&(y=c);for(var b=arguments.length,h=Array(b>1?b-1:0),S=1;S<b;S++)h[S-1]=arguments[S];return f.produce(y,function(E){var A;return(A=i).call.apply(A,[m,E].concat(h))})}}var u;if(typeof i!="function"&&M(6),a!==void 0&&typeof a!="function"&&M(7),I(o)){var s=Ze(n),d=Ie(n,o,void 0),l=!0;try{u=i(d),l=!1}finally{l?ee(s):Ne(s)}return typeof Promise<"u"&&u instanceof Promise?u.then(function(y){return Ee(s,a),xe(y,s)},function(y){throw ee(s),y}):(Ee(s,a),xe(u,s))}if(!o||typeof o!="object"){if((u=i(o))===void 0&&(u=o),u===At&&(u=void 0),n.D&&Ke(u,!0),a){var p=[],v=[];N("Patches").M(o,u,p,v),a(p,v)}return u}M(21,o)},this.produceWithPatches=function(o,i){if(typeof o=="function")return function(u){for(var s=arguments.length,d=Array(s>1?s-1:0),l=1;l<s;l++)d[l-1]=arguments[l];return n.produceWithPatches(u,function(p){return o.apply(void 0,[p].concat(d))})};var a,c,f=n.produce(o,i,function(u,s){a=u,c=s});return typeof Promise<"u"&&f instanceof Promise?f.then(function(u){return[u,a,c]}):[f,a,c]},typeof(r==null?void 0:r.useProxies)=="boolean"&&this.setUseProxies(r.useProxies),typeof(r==null?void 0:r.autoFreeze)=="boolean"&&this.setAutoFreeze(r.autoFreeze)}var t=e.prototype;return t.createDraft=function(r){I(r)||M(8),q(r)&&(r=mr(r));var n=Ze(this),o=Ie(this,r,void 0);return o[P].C=!0,Ne(n),o},t.finishDraft=function(r,n){var o=r&&r[P],i=o.A;return Ee(i,n),xe(void 0,i)},t.setAutoFreeze=function(r){this.D=r},t.setUseProxies=function(r){r&&!ot&&M(20),this.O=r},t.applyPatches=function(r,n){var o;for(o=n.length-1;o>=0;o--){var i=n[o];if(i.path.length===0&&i.op==="replace"){r=i.value;break}}o>-1&&(n=n.slice(o+1));var a=N("Patches").$;return q(r)?a(r,n):this.produce(r,function(c){return a(c,n)})},e}(),$=new Sr,Mt=$.produce;$.produceWithPatches.bind($);$.setAutoFreeze.bind($);$.setUseProxies.bind($);$.applyPatches.bind($);$.createDraft.bind($);$.finishDraft.bind($);function Q(e){"@babel/helpers - typeof";return Q=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Q(e)}function Pr(e,t){if(Q(e)!=="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(Q(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Or(e){var t=Pr(e,"string");return Q(t)==="symbol"?t:String(t)}function _r(e,t,r){return t=Or(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ut(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function at(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?ut(Object(r),!0).forEach(function(n){_r(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ut(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function _(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var ct=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),Ce=function(){return Math.random().toString(36).substring(7).split("").join(".")},ne={INIT:"@@redux/INIT"+Ce(),REPLACE:"@@redux/REPLACE"+Ce(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Ce()}};function Er(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function Nt(e,t,r){var n;if(typeof t=="function"&&typeof r=="function"||typeof r=="function"&&typeof arguments[3]=="function")throw new Error(_(0));if(typeof t=="function"&&typeof r>"u"&&(r=t,t=void 0),typeof r<"u"){if(typeof r!="function")throw new Error(_(1));return r(Nt)(e,t)}if(typeof e!="function")throw new Error(_(2));var o=e,i=t,a=[],c=a,f=!1;function u(){c===a&&(c=a.slice())}function s(){if(f)throw new Error(_(3));return i}function d(y){if(typeof y!="function")throw new Error(_(4));if(f)throw new Error(_(5));var m=!0;return u(),c.push(y),function(){if(m){if(f)throw new Error(_(6));m=!1,u();var h=c.indexOf(y);c.splice(h,1),a=null}}}function l(y){if(!Er(y))throw new Error(_(7));if(typeof y.type>"u")throw new Error(_(8));if(f)throw new Error(_(9));try{f=!0,i=o(i,y)}finally{f=!1}for(var m=a=c,b=0;b<m.length;b++){var h=m[b];h()}return y}function p(y){if(typeof y!="function")throw new Error(_(10));o=y,l({type:ne.REPLACE})}function v(){var y,m=d;return y={subscribe:function(h){if(typeof h!="object"||h===null)throw new Error(_(11));function S(){h.next&&h.next(s())}S();var E=m(S);return{unsubscribe:E}}},y[ct]=function(){return this},y}return l({type:ne.INIT}),n={dispatch:l,subscribe:d,getState:s,replaceReducer:p},n[ct]=v,n}function xr(e){Object.keys(e).forEach(function(t){var r=e[t],n=r(void 0,{type:ne.INIT});if(typeof n>"u")throw new Error(_(12));if(typeof r(void 0,{type:ne.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(_(13))})}function $r(e){for(var t=Object.keys(e),r={},n=0;n<t.length;n++){var o=t[n];typeof e[o]=="function"&&(r[o]=e[o])}var i=Object.keys(r),a;try{xr(r)}catch(c){a=c}return function(f,u){if(f===void 0&&(f={}),a)throw a;for(var s=!1,d={},l=0;l<i.length;l++){var p=i[l],v=r[p],y=f[p],m=v(y,u);if(typeof m>"u")throw u&&u.type,new Error(_(14));d[p]=m,s=s||m!==y}return s=s||i.length!==Object.keys(f).length,s?d:f}}function oe(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.length===0?function(n){return n}:t.length===1?t[0]:t.reduce(function(n,o){return function(){return n(o.apply(void 0,arguments))}})}function jr(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(n){return function(){var o=n.apply(void 0,arguments),i=function(){throw new Error(_(15))},a={getState:o.getState,dispatch:function(){return i.apply(void 0,arguments)}},c=t.map(function(f){return f(a)});return i=oe.apply(void 0,c)(o.dispatch),at(at({},o),{},{dispatch:i})}}}function It(e){var t=function(n){var o=n.dispatch,i=n.getState;return function(a){return function(c){return typeof c=="function"?c(o,i,e):a(c)}}};return t}var Tt=It();Tt.withExtraArgument=It;const ft=Tt;var Dt=globalThis&&globalThis.__extends||function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,o){n.__proto__=o}||function(n,o){for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(n[i]=o[i])},e(t,r)};return function(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),Cr=globalThis&&globalThis.__generator||function(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,o,i,a;return a={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function c(u){return function(s){return f([u,s])}}function f(u){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,o&&(i=u[0]&2?o.return:u[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,u[1])).done)return i;switch(o=0,i&&(u=[u[0]&2,i.value]),u[0]){case 0:case 1:i=u;break;case 4:return r.label++,{value:u[1],done:!1};case 5:r.label++,o=u[1],u=[0];continue;case 7:u=r.ops.pop(),r.trys.pop();continue;default:if(i=r.trys,!(i=i.length>0&&i[i.length-1])&&(u[0]===6||u[0]===2)){r=0;continue}if(u[0]===3&&(!i||u[1]>i[0]&&u[1]<i[3])){r.label=u[1];break}if(u[0]===6&&r.label<i[1]){r.label=i[1],i=u;break}if(i&&r.label<i[2]){r.label=i[2],r.ops.push(u);break}i[2]&&r.ops.pop(),r.trys.pop();continue}u=t.call(e,r)}catch(s){u=[6,s],o=0}finally{n=i=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}},U=globalThis&&globalThis.__spreadArray||function(e,t){for(var r=0,n=t.length,o=e.length;r<n;r++,o++)e[o]=t[r];return e},Ar=Object.defineProperty,Rr=Object.defineProperties,Mr=Object.getOwnPropertyDescriptors,st=Object.getOwnPropertySymbols,Nr=Object.prototype.hasOwnProperty,Ir=Object.prototype.propertyIsEnumerable,lt=function(e,t,r){return t in e?Ar(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r},D=function(e,t){for(var r in t||(t={}))Nr.call(t,r)&&lt(e,r,t[r]);if(st)for(var n=0,o=st(t);n<o.length;n++){var r=o[n];Ir.call(t,r)&&lt(e,r,t[r])}return e},Ae=function(e,t){return Rr(e,Mr(t))},Tr=function(e,t,r){return new Promise(function(n,o){var i=function(f){try{c(r.next(f))}catch(u){o(u)}},a=function(f){try{c(r.throw(f))}catch(u){o(u)}},c=function(f){return f.done?n(f.value):Promise.resolve(f.value).then(i,a)};c((r=r.apply(e,t)).next())})},Dr=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?oe:oe.apply(null,arguments)};function kr(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var r=t;Object.getPrototypeOf(r)!==null;)r=Object.getPrototypeOf(r);return t===r}var qr=function(e){Dt(t,e);function t(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var o=e.apply(this,r)||this;return Object.setPrototypeOf(o,t.prototype),o}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return e.prototype.concat.apply(this,r)},t.prototype.prepend=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return r.length===1&&Array.isArray(r[0])?new(t.bind.apply(t,U([void 0],r[0].concat(this)))):new(t.bind.apply(t,U([void 0],r.concat(this))))},t}(Array),Lr=function(e){Dt(t,e);function t(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var o=e.apply(this,r)||this;return Object.setPrototypeOf(o,t.prototype),o}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return e.prototype.concat.apply(this,r)},t.prototype.prepend=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return r.length===1&&Array.isArray(r[0])?new(t.bind.apply(t,U([void 0],r[0].concat(this)))):new(t.bind.apply(t,U([void 0],r.concat(this))))},t}(Array);function De(e){return I(e)?Mt(e,function(){}):e}function Vr(e){return typeof e=="boolean"}function Wr(){return function(t){return Fr(t)}}function Fr(e){e===void 0&&(e={});var t=e.thunk,r=t===void 0?!0:t;e.immutableCheck,e.serializableCheck;var n=new qr;return r&&(Vr(r)?n.push(ft):n.push(ft.withExtraArgument(r.extraArgument))),n}var zr=!0;function Ur(e){var t=Wr(),r=e||{},n=r.reducer,o=n===void 0?void 0:n,i=r.middleware,a=i===void 0?t():i,c=r.devTools,f=c===void 0?!0:c,u=r.preloadedState,s=u===void 0?void 0:u,d=r.enhancers,l=d===void 0?void 0:d,p;if(typeof o=="function")p=o;else if(kr(o))p=$r(o);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var v=a;typeof v=="function"&&(v=v(t));var y=jr.apply(void 0,v),m=oe;f&&(m=Dr(D({trace:!zr},typeof f=="object"&&f)));var b=new Lr(y),h=b;Array.isArray(l)?h=U([y],l):typeof l=="function"&&(h=l(b));var S=m.apply(void 0,h);return Nt(p,s,S)}function k(e,t){function r(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];if(t){var i=t.apply(void 0,n);if(!i)throw new Error("prepareAction did not return an object");return D(D({type:e,payload:i.payload},"meta"in i&&{meta:i.meta}),"error"in i&&{error:i.error})}return{type:e,payload:n[0]}}return r.toString=function(){return""+e},r.type=e,r.match=function(n){return n.type===e},r}function kt(e){var t={},r=[],n,o={addCase:function(i,a){var c=typeof i=="string"?i:i.type;if(c in t)throw new Error("addCase cannot be called with two reducers for the same action type");return t[c]=a,o},addMatcher:function(i,a){return r.push({matcher:i,reducer:a}),o},addDefaultCase:function(i){return n=i,o}};return e(o),[t,r,n]}function Kr(e){return typeof e=="function"}function Br(e,t,r,n){r===void 0&&(r=[]);var o=typeof t=="function"?kt(t):[t,r,n],i=o[0],a=o[1],c=o[2],f;if(Kr(e))f=function(){return De(e())};else{var u=De(e);f=function(){return u}}function s(d,l){d===void 0&&(d=f());var p=U([i[l.type]],a.filter(function(v){var y=v.matcher;return y(l)}).map(function(v){var y=v.reducer;return y}));return p.filter(function(v){return!!v}).length===0&&(p=[c]),p.reduce(function(v,y){if(y)if(q(v)){var m=v,b=y(m,l);return b===void 0?v:b}else{if(I(v))return Mt(v,function(h){return y(h,l)});var b=y(v,l);if(b===void 0){if(v===null)return v;throw Error("A case reducer on a non-draftable value must not return undefined")}return b}return v},d)}return s.getInitialState=f,s}function Hr(e,t){return e+"/"+t}function qt(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");typeof process<"u";var r=typeof e.initialState=="function"?e.initialState:De(e.initialState),n=e.reducers||{},o=Object.keys(n),i={},a={},c={};o.forEach(function(s){var d=n[s],l=Hr(t,s),p,v;"reducer"in d?(p=d.reducer,v=d.prepare):p=d,i[s]=p,a[l]=p,c[s]=v?k(l,v):k(l)});function f(){var s=typeof e.extraReducers=="function"?kt(e.extraReducers):[e.extraReducers],d=s[0],l=d===void 0?{}:d,p=s[1],v=p===void 0?[]:p,y=s[2],m=y===void 0?void 0:y,b=D(D({},l),a);return Br(r,function(h){for(var S in b)h.addCase(S,b[S]);for(var E=0,A=v;E<A.length;E++){var B=A[E];h.addMatcher(B.matcher,B.reducer)}m&&h.addDefaultCase(m)})}var u;return{name:t,reducer:function(s,d){return u||(u=f()),u(s,d)},actions:c,caseReducers:i,getInitialState:function(){return u||(u=f()),u.getInitialState()}}}var Gr="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",Xr=function(e){e===void 0&&(e=21);for(var t="",r=e;r--;)t+=Gr[Math.random()*64|0];return t},Yr=["name","message","stack","code"],Re=function(){function e(t,r){this.payload=t,this.meta=r}return e}(),dt=function(){function e(t,r){this.payload=t,this.meta=r}return e}(),Jr=function(e){if(typeof e=="object"&&e!==null){for(var t={},r=0,n=Yr;r<n.length;r++){var o=n[r];typeof e[o]=="string"&&(t[o]=e[o])}return t}return{message:String(e)}};(function(){function e(t,r,n){var o=k(t+"/fulfilled",function(u,s,d,l){return{payload:u,meta:Ae(D({},l||{}),{arg:d,requestId:s,requestStatus:"fulfilled"})}}),i=k(t+"/pending",function(u,s,d){return{payload:void 0,meta:Ae(D({},d||{}),{arg:s,requestId:u,requestStatus:"pending"})}}),a=k(t+"/rejected",function(u,s,d,l,p){return{payload:l,error:(n&&n.serializeError||Jr)(u||"Rejected"),meta:Ae(D({},p||{}),{arg:d,requestId:s,rejectedWithValue:!!l,requestStatus:"rejected",aborted:(u==null?void 0:u.name)==="AbortError",condition:(u==null?void 0:u.name)==="ConditionError"})}}),c=typeof AbortController<"u"?AbortController:function(){function u(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return u.prototype.abort=function(){},u}();function f(u){return function(s,d,l){var p=n!=null&&n.idGenerator?n.idGenerator(u):Xr(),v=new c,y;function m(h){y=h,v.abort()}var b=function(){return Tr(this,null,function(){var h,S,E,A,B,H,Xe;return Cr(this,function(W){switch(W.label){case 0:return W.trys.push([0,4,,5]),A=(h=n==null?void 0:n.condition)==null?void 0:h.call(n,u,{getState:d,extra:l}),Zr(A)?[4,A]:[3,2];case 1:A=W.sent(),W.label=2;case 2:if(A===!1||v.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return B=new Promise(function(R,G){return v.signal.addEventListener("abort",function(){return G({name:"AbortError",message:y||"Aborted"})})}),s(i(p,u,(S=n==null?void 0:n.getPendingMeta)==null?void 0:S.call(n,{requestId:p,arg:u},{getState:d,extra:l}))),[4,Promise.race([B,Promise.resolve(r(u,{dispatch:s,getState:d,extra:l,requestId:p,signal:v.signal,abort:m,rejectWithValue:function(R,G){return new Re(R,G)},fulfillWithValue:function(R,G){return new dt(R,G)}})).then(function(R){if(R instanceof Re)throw R;return R instanceof dt?o(R.payload,p,u,R.meta):o(R,p,u)})])];case 3:return E=W.sent(),[3,5];case 4:return H=W.sent(),E=H instanceof Re?a(null,p,u,H.payload,H.meta):a(H,p,u),[3,5];case 5:return Xe=n&&!n.dispatchConditionRejection&&a.match(E)&&E.meta.condition,Xe||s(E),[2,E]}})})}();return Object.assign(b,{abort:m,requestId:p,arg:u,unwrap:function(){return b.then(Qr)}})}}return Object.assign(f,{pending:i,rejected:a,fulfilled:o,typePrefix:t})}return e.withTypes=function(){return e},e})();function Qr(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function Zr(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var Ge="listenerMiddleware";k(Ge+"/add");k(Ge+"/removeAll");k(Ge+"/remove");var pt;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);hr();const en={storage:44,maxStorage:100,cpuLoad:[12,123,4,90],memory:[25,31,5,14,20,81],maxMemory:120,uploadRate:[1,4,25,65],downloadRate:[20,3,50,30]},Lt=qt({name:"deviceHealth",initialState:en,reducers:{setStorage:(e,t)=>{e.storage=t.payload.storage,e.maxStorage=t.payload.maxStorage},setCpuLoad:(e,t)=>{e.cpuLoad=t.payload},setMemory:(e,t)=>{e.memory=t.payload.memory,e.maxMemory=t.payload.maxMemory},setNetworkHealth:(e,t)=>{e.uploadRate=t.payload.uploadRate,e.downloadRate=t.payload.downloadRate}}}),{setStorage:yt,setCpuLoad:vt,setMemory:mt,setNetworkHealth:ht}=Lt.actions,tn=Lt.reducer;try{yt.displayName="setStorage",yt.__docgenInfo={description:"",displayName:"setStorage",props:{storage:{defaultValue:null,description:"",name:"storage",required:!0,type:{name:"number"}},maxStorage:{defaultValue:null,description:"",name:"maxStorage",required:!0,type:{name:"number"}}}}}catch{}try{vt.displayName="setCpuLoad",vt.__docgenInfo={description:"",displayName:"setCpuLoad",props:{}}}catch{}try{mt.displayName="setMemory",mt.__docgenInfo={description:"",displayName:"setMemory",props:{memory:{defaultValue:null,description:"",name:"memory",required:!0,type:{name:"number[]"}},maxMemory:{defaultValue:null,description:"",name:"maxMemory",required:!0,type:{name:"number"}}}}}catch{}try{ht.displayName="setNetworkHealth",ht.__docgenInfo={description:"",displayName:"setNetworkHealth",props:{uploadRate:{defaultValue:null,description:"",name:"uploadRate",required:!0,type:{name:"number[]"}},downloadRate:{defaultValue:null,description:"",name:"downloadRate",required:!0,type:{name:"number[]"}}}}}catch{}const rn={},Vt=qt({name:"pinnedMessage",initialState:rn,reducers:{setPinnedMessage:(e,t)=>{e.pinnedMessage=t.payload},clearPinnedMessage:e=>{e.pinnedMessage=void 0}}}),{setPinnedMessage:bt,clearPinnedMessage:gt}=Vt.actions,nn=Vt.reducer;try{bt.displayName="setPinnedMessage",bt.__docgenInfo={description:"",displayName:"setPinnedMessage",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},images:{defaultValue:null,description:"",name:"images",required:!1,type:{name:"{ url: string; }[]"}},reply:{defaultValue:null,description:"",name:"reply",required:!1,type:{name:"boolean"}},pinned:{defaultValue:null,description:"",name:"pinned",required:!0,type:{name:"boolean"}}}}}catch{}try{gt.displayName="clearPinnedMessage",gt.__docgenInfo={description:"",displayName:"clearPinnedMessage",props:{}}}catch{}const sn=Ur({reducer:{deviceHealth:tn,pinnedMessage:nn}});export{fn as P,Z as R,Ht as a,bt as b,St as c,sn as s,cn as u};
//# sourceMappingURL=store-f1ee2607.js.map
