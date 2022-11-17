(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var Kr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ja(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function lp(e){var t=e.default;if(typeof t=="function"){var n=function(){return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var K={exports:{}},ue={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ni=Symbol.for("react.element"),Pv=Symbol.for("react.portal"),Tv=Symbol.for("react.fragment"),Lv=Symbol.for("react.strict_mode"),Mv=Symbol.for("react.profiler"),Rv=Symbol.for("react.provider"),jv=Symbol.for("react.context"),Dv=Symbol.for("react.forward_ref"),zv=Symbol.for("react.suspense"),$v=Symbol.for("react.memo"),Av=Symbol.for("react.lazy"),Vc=Symbol.iterator;function Nv(e){return e===null||typeof e!="object"?null:(e=Vc&&e[Vc]||e["@@iterator"],typeof e=="function"?e:null)}var sp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},up=Object.assign,cp={};function Tr(e,t,n){this.props=e,this.context=t,this.refs=cp,this.updater=n||sp}Tr.prototype.isReactComponent={};Tr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Tr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function dp(){}dp.prototype=Tr.prototype;function Lu(e,t,n){this.props=e,this.context=t,this.refs=cp,this.updater=n||sp}var Mu=Lu.prototype=new dp;Mu.constructor=Lu;up(Mu,Tr.prototype);Mu.isPureReactComponent=!0;var Qc=Array.isArray,fp=Object.prototype.hasOwnProperty,Ru={current:null},pp={key:!0,ref:!0,__self:!0,__source:!0};function hp(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)fp.call(t,r)&&!pp.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ni,type:e,key:o,ref:l,props:i,_owner:Ru.current}}function Iv(e,t){return{$$typeof:Ni,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ju(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ni}function Fv(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var qc=/\/+/g;function yl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Fv(""+e.key):t.toString(36)}function Ro(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Ni:case Pv:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+yl(l,0):r,Qc(i)?(n="",e!=null&&(n=e.replace(qc,"$&/")+"/"),Ro(i,t,n,"",function(u){return u})):i!=null&&(ju(i)&&(i=Iv(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(qc,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",Qc(e))for(var a=0;a<e.length;a++){o=e[a];var s=r+yl(o,a);l+=Ro(o,t,n,s,i)}else if(s=Nv(e),typeof s=="function")for(e=s.call(e),a=0;!(o=e.next()).done;)o=o.value,s=r+yl(o,a++),l+=Ro(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Xi(e,t,n){if(e==null)return e;var r=[],i=0;return Ro(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Hv(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ke={current:null},jo={transition:null},Uv={ReactCurrentDispatcher:Ke,ReactCurrentBatchConfig:jo,ReactCurrentOwner:Ru};ue.Children={map:Xi,forEach:function(e,t,n){Xi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Xi(e,function(){t++}),t},toArray:function(e){return Xi(e,function(t){return t})||[]},only:function(e){if(!ju(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ue.Component=Tr;ue.Fragment=Tv;ue.Profiler=Mv;ue.PureComponent=Lu;ue.StrictMode=Lv;ue.Suspense=zv;ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Uv;ue.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=up({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=Ru.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)fp.call(t,s)&&!pp.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ni,type:e.type,key:i,ref:o,props:r,_owner:l}};ue.createContext=function(e){return e={$$typeof:jv,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Rv,_context:e},e.Consumer=e};ue.createElement=hp;ue.createFactory=function(e){var t=hp.bind(null,e);return t.type=e,t};ue.createRef=function(){return{current:null}};ue.forwardRef=function(e){return{$$typeof:Dv,render:e}};ue.isValidElement=ju;ue.lazy=function(e){return{$$typeof:Av,_payload:{_status:-1,_result:e},_init:Hv}};ue.memo=function(e,t){return{$$typeof:$v,type:e,compare:t===void 0?null:t}};ue.startTransition=function(e){var t=jo.transition;jo.transition={};try{e()}finally{jo.transition=t}};ue.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ue.useCallback=function(e,t){return Ke.current.useCallback(e,t)};ue.useContext=function(e){return Ke.current.useContext(e)};ue.useDebugValue=function(){};ue.useDeferredValue=function(e){return Ke.current.useDeferredValue(e)};ue.useEffect=function(e,t){return Ke.current.useEffect(e,t)};ue.useId=function(){return Ke.current.useId()};ue.useImperativeHandle=function(e,t,n){return Ke.current.useImperativeHandle(e,t,n)};ue.useInsertionEffect=function(e,t){return Ke.current.useInsertionEffect(e,t)};ue.useLayoutEffect=function(e,t){return Ke.current.useLayoutEffect(e,t)};ue.useMemo=function(e,t){return Ke.current.useMemo(e,t)};ue.useReducer=function(e,t,n){return Ke.current.useReducer(e,t,n)};ue.useRef=function(e){return Ke.current.useRef(e)};ue.useState=function(e){return Ke.current.useState(e)};ue.useSyncExternalStore=function(e,t,n){return Ke.current.useSyncExternalStore(e,t,n)};ue.useTransition=function(){return Ke.current.useTransition()};ue.version="18.2.0";(function(e){e.exports=ue})(K);const Lr=ja(K.exports);var cs={},Du={exports:{}},ct={},mp={exports:{}},vp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,D){var U=T.length;T.push(D);e:for(;0<U;){var V=U-1>>>1,H=T[V];if(0<i(H,D))T[V]=D,T[U]=H,U=V;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var D=T[0],U=T.pop();if(U!==D){T[0]=U;e:for(var V=0,H=T.length,b=H>>>1;V<b;){var q=2*(V+1)-1,F=T[q],L=q+1,J=T[L];if(0>i(F,U))L<H&&0>i(J,F)?(T[V]=J,T[L]=U,V=L):(T[V]=F,T[q]=U,V=q);else if(L<H&&0>i(J,U))T[V]=J,T[L]=U,V=L;else break e}}return D}function i(T,D){var U=T.sortIndex-D.sortIndex;return U!==0?U:T.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],u=[],d=1,c=null,f=3,h=!1,v=!1,y=!1,k=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(T){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=T)r(u),D.sortIndex=D.expirationTime,t(s,D);else break;D=n(u)}}function x(T){if(y=!1,g(T),!v)if(n(s)!==null)v=!0,Y(O);else{var D=n(u);D!==null&&R(x,D.startTime-T)}}function O(T,D){v=!1,y&&(y=!1,m(S),S=-1),h=!0;var U=f;try{for(g(D),c=n(s);c!==null&&(!(c.expirationTime>D)||T&&!z());){var V=c.callback;if(typeof V=="function"){c.callback=null,f=c.priorityLevel;var H=V(c.expirationTime<=D);D=e.unstable_now(),typeof H=="function"?c.callback=H:c===n(s)&&r(s),g(D)}else r(s);c=n(s)}if(c!==null)var b=!0;else{var q=n(u);q!==null&&R(x,q.startTime-D),b=!1}return b}finally{c=null,f=U,h=!1}}var P=!1,E=null,S=-1,M=5,j=-1;function z(){return!(e.unstable_now()-j<M)}function A(){if(E!==null){var T=e.unstable_now();j=T;var D=!0;try{D=E(!0,T)}finally{D?$():(P=!1,E=null)}}else P=!1}var $;if(typeof p=="function")$=function(){p(A)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,I=N.port2;N.port1.onmessage=A,$=function(){I.postMessage(null)}}else $=function(){k(A,0)};function Y(T){E=T,P||(P=!0,$())}function R(T,D){S=k(function(){T(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){v||h||(v=!0,Y(O))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(T){switch(f){case 1:case 2:case 3:var D=3;break;default:D=f}var U=f;f=D;try{return T()}finally{f=U}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,D){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var U=f;f=T;try{return D()}finally{f=U}},e.unstable_scheduleCallback=function(T,D,U){var V=e.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?V+U:V):U=V,T){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=U+H,T={id:d++,callback:D,priorityLevel:T,startTime:U,expirationTime:H,sortIndex:-1},U>V?(T.sortIndex=U,t(u,T),n(s)===null&&T===n(u)&&(y?(m(S),S=-1):y=!0,R(x,U-V))):(T.sortIndex=H,t(s,T),v||h||(v=!0,Y(O))),T},e.unstable_shouldYield=z,e.unstable_wrapCallback=function(T){var D=f;return function(){var U=f;f=D;try{return T.apply(this,arguments)}finally{f=U}}}})(vp);(function(e){e.exports=vp})(mp);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gp=K.exports,ut=mp.exports;function B(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var yp=new Set,mi={};function Wn(e,t){gr(e,t),gr(e+"Capture",t)}function gr(e,t){for(mi[e]=t,e=0;e<t.length;e++)yp.add(t[e])}var qt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ds=Object.prototype.hasOwnProperty,Wv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Yc={},Gc={};function Bv(e){return ds.call(Gc,e)?!0:ds.call(Yc,e)?!1:Wv.test(e)?Gc[e]=!0:(Yc[e]=!0,!1)}function Vv(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Qv(e,t,n,r){if(t===null||typeof t>"u"||Vv(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Je(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var He={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){He[e]=new Je(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];He[t]=new Je(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){He[e]=new Je(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){He[e]=new Je(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){He[e]=new Je(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){He[e]=new Je(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){He[e]=new Je(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){He[e]=new Je(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){He[e]=new Je(e,5,!1,e.toLowerCase(),null,!1,!1)});var zu=/[\-:]([a-z])/g;function $u(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(zu,$u);He[t]=new Je(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(zu,$u);He[t]=new Je(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(zu,$u);He[t]=new Je(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){He[e]=new Je(e,1,!1,e.toLowerCase(),null,!1,!1)});He.xlinkHref=new Je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){He[e]=new Je(e,1,!1,e.toLowerCase(),null,!0,!0)});function Au(e,t,n,r){var i=He.hasOwnProperty(t)?He[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Qv(t,n,i,r)&&(n=null),r||i===null?Bv(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Kt=gp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ki=Symbol.for("react.element"),Xn=Symbol.for("react.portal"),Kn=Symbol.for("react.fragment"),Nu=Symbol.for("react.strict_mode"),fs=Symbol.for("react.profiler"),wp=Symbol.for("react.provider"),xp=Symbol.for("react.context"),Iu=Symbol.for("react.forward_ref"),ps=Symbol.for("react.suspense"),hs=Symbol.for("react.suspense_list"),Fu=Symbol.for("react.memo"),tn=Symbol.for("react.lazy"),Sp=Symbol.for("react.offscreen"),Xc=Symbol.iterator;function $r(e){return e===null||typeof e!="object"?null:(e=Xc&&e[Xc]||e["@@iterator"],typeof e=="function"?e:null)}var be=Object.assign,wl;function Jr(e){if(wl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);wl=t&&t[1]||""}return`
`+wl+e}var xl=!1;function Sl(e,t){if(!e||xl)return"";xl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,a=o.length-1;1<=l&&0<=a&&i[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==o[a]){var s=`
`+i[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{xl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Jr(e):""}function qv(e){switch(e.tag){case 5:return Jr(e.type);case 16:return Jr("Lazy");case 13:return Jr("Suspense");case 19:return Jr("SuspenseList");case 0:case 2:case 15:return e=Sl(e.type,!1),e;case 11:return e=Sl(e.type.render,!1),e;case 1:return e=Sl(e.type,!0),e;default:return""}}function ms(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Kn:return"Fragment";case Xn:return"Portal";case fs:return"Profiler";case Nu:return"StrictMode";case ps:return"Suspense";case hs:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case xp:return(e.displayName||"Context")+".Consumer";case wp:return(e._context.displayName||"Context")+".Provider";case Iu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Fu:return t=e.displayName||null,t!==null?t:ms(e.type)||"Memo";case tn:t=e._payload,e=e._init;try{return ms(e(t))}catch{}}return null}function Yv(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ms(t);case 8:return t===Nu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function xn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function kp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Gv(e){var t=kp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ji(e){e._valueTracker||(e._valueTracker=Gv(e))}function Ep(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=kp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Vo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function vs(e,t){var n=t.checked;return be({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function Kc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=xn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function bp(e,t){t=t.checked,t!=null&&Au(e,"checked",t,!1)}function gs(e,t){bp(e,t);var n=xn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ys(e,t.type,n):t.hasOwnProperty("defaultValue")&&ys(e,t.type,xn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Jc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ys(e,t,n){(t!=="number"||Vo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Zr=Array.isArray;function cr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+xn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ws(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(B(91));return be({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Zc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(B(92));if(Zr(n)){if(1<n.length)throw Error(B(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:xn(n)}}function _p(e,t){var n=xn(t.value),r=xn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ed(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Cp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Cp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Zi,Op=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Zi=Zi||document.createElement("div"),Zi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Zi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function vi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ni={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Xv=["Webkit","ms","Moz","O"];Object.keys(ni).forEach(function(e){Xv.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ni[t]=ni[e]})});function Pp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ni.hasOwnProperty(e)&&ni[e]?(""+t).trim():t+"px"}function Tp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Pp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Kv=be({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ss(e,t){if(t){if(Kv[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(B(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(B(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(B(61))}if(t.style!=null&&typeof t.style!="object")throw Error(B(62))}}function ks(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Es=null;function Hu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var bs=null,dr=null,fr=null;function td(e){if(e=Hi(e)){if(typeof bs!="function")throw Error(B(280));var t=e.stateNode;t&&(t=Na(t),bs(e.stateNode,e.type,t))}}function Lp(e){dr?fr?fr.push(e):fr=[e]:dr=e}function Mp(){if(dr){var e=dr,t=fr;if(fr=dr=null,td(e),t)for(e=0;e<t.length;e++)td(t[e])}}function Rp(e,t){return e(t)}function jp(){}var kl=!1;function Dp(e,t,n){if(kl)return e(t,n);kl=!0;try{return Rp(e,t,n)}finally{kl=!1,(dr!==null||fr!==null)&&(jp(),Mp())}}function gi(e,t){var n=e.stateNode;if(n===null)return null;var r=Na(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(B(231,t,typeof n));return n}var _s=!1;if(qt)try{var Ar={};Object.defineProperty(Ar,"passive",{get:function(){_s=!0}}),window.addEventListener("test",Ar,Ar),window.removeEventListener("test",Ar,Ar)}catch{_s=!1}function Jv(e,t,n,r,i,o,l,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var ri=!1,Qo=null,qo=!1,Cs=null,Zv={onError:function(e){ri=!0,Qo=e}};function eg(e,t,n,r,i,o,l,a,s){ri=!1,Qo=null,Jv.apply(Zv,arguments)}function tg(e,t,n,r,i,o,l,a,s){if(eg.apply(this,arguments),ri){if(ri){var u=Qo;ri=!1,Qo=null}else throw Error(B(198));qo||(qo=!0,Cs=u)}}function Bn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function zp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function nd(e){if(Bn(e)!==e)throw Error(B(188))}function ng(e){var t=e.alternate;if(!t){if(t=Bn(e),t===null)throw Error(B(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return nd(i),e;if(o===r)return nd(i),t;o=o.sibling}throw Error(B(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l)throw Error(B(189))}}if(n.alternate!==r)throw Error(B(190))}if(n.tag!==3)throw Error(B(188));return n.stateNode.current===n?e:t}function $p(e){return e=ng(e),e!==null?Ap(e):null}function Ap(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ap(e);if(t!==null)return t;e=e.sibling}return null}var Np=ut.unstable_scheduleCallback,rd=ut.unstable_cancelCallback,rg=ut.unstable_shouldYield,ig=ut.unstable_requestPaint,Ce=ut.unstable_now,og=ut.unstable_getCurrentPriorityLevel,Uu=ut.unstable_ImmediatePriority,Ip=ut.unstable_UserBlockingPriority,Yo=ut.unstable_NormalPriority,ag=ut.unstable_LowPriority,Fp=ut.unstable_IdlePriority,Da=null,At=null;function lg(e){if(At&&typeof At.onCommitFiberRoot=="function")try{At.onCommitFiberRoot(Da,e,void 0,(e.current.flags&128)===128)}catch{}}var Ot=Math.clz32?Math.clz32:cg,sg=Math.log,ug=Math.LN2;function cg(e){return e>>>=0,e===0?32:31-(sg(e)/ug|0)|0}var eo=64,to=4194304;function ei(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Go(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~i;a!==0?r=ei(a):(o&=l,o!==0&&(r=ei(o)))}else l=n&~i,l!==0?r=ei(l):o!==0&&(r=ei(o));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ot(t),i=1<<n,r|=e[n],t&=~i;return r}function dg(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fg(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Ot(o),a=1<<l,s=i[l];s===-1?((a&n)===0||(a&r)!==0)&&(i[l]=dg(a,t)):s<=t&&(e.expiredLanes|=a),o&=~a}}function Os(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Hp(){var e=eo;return eo<<=1,(eo&4194240)===0&&(eo=64),e}function El(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ii(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ot(t),e[t]=n}function pg(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ot(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Wu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ot(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var fe=0;function Up(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Wp,Bu,Bp,Vp,Qp,Ps=!1,no=[],cn=null,dn=null,fn=null,yi=new Map,wi=new Map,on=[],hg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function id(e,t){switch(e){case"focusin":case"focusout":cn=null;break;case"dragenter":case"dragleave":dn=null;break;case"mouseover":case"mouseout":fn=null;break;case"pointerover":case"pointerout":yi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":wi.delete(t.pointerId)}}function Nr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Hi(t),t!==null&&Bu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function mg(e,t,n,r,i){switch(t){case"focusin":return cn=Nr(cn,e,t,n,r,i),!0;case"dragenter":return dn=Nr(dn,e,t,n,r,i),!0;case"mouseover":return fn=Nr(fn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return yi.set(o,Nr(yi.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,wi.set(o,Nr(wi.get(o)||null,e,t,n,r,i)),!0}return!1}function qp(e){var t=Tn(e.target);if(t!==null){var n=Bn(t);if(n!==null){if(t=n.tag,t===13){if(t=zp(n),t!==null){e.blockedOn=t,Qp(e.priority,function(){Bp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Do(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ts(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Es=r,n.target.dispatchEvent(r),Es=null}else return t=Hi(n),t!==null&&Bu(t),e.blockedOn=n,!1;t.shift()}return!0}function od(e,t,n){Do(e)&&n.delete(t)}function vg(){Ps=!1,cn!==null&&Do(cn)&&(cn=null),dn!==null&&Do(dn)&&(dn=null),fn!==null&&Do(fn)&&(fn=null),yi.forEach(od),wi.forEach(od)}function Ir(e,t){e.blockedOn===t&&(e.blockedOn=null,Ps||(Ps=!0,ut.unstable_scheduleCallback(ut.unstable_NormalPriority,vg)))}function xi(e){function t(i){return Ir(i,e)}if(0<no.length){Ir(no[0],e);for(var n=1;n<no.length;n++){var r=no[n];r.blockedOn===e&&(r.blockedOn=null)}}for(cn!==null&&Ir(cn,e),dn!==null&&Ir(dn,e),fn!==null&&Ir(fn,e),yi.forEach(t),wi.forEach(t),n=0;n<on.length;n++)r=on[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<on.length&&(n=on[0],n.blockedOn===null);)qp(n),n.blockedOn===null&&on.shift()}var pr=Kt.ReactCurrentBatchConfig,Xo=!0;function gg(e,t,n,r){var i=fe,o=pr.transition;pr.transition=null;try{fe=1,Vu(e,t,n,r)}finally{fe=i,pr.transition=o}}function yg(e,t,n,r){var i=fe,o=pr.transition;pr.transition=null;try{fe=4,Vu(e,t,n,r)}finally{fe=i,pr.transition=o}}function Vu(e,t,n,r){if(Xo){var i=Ts(e,t,n,r);if(i===null)jl(e,t,r,Ko,n),id(e,r);else if(mg(i,e,t,n,r))r.stopPropagation();else if(id(e,r),t&4&&-1<hg.indexOf(e)){for(;i!==null;){var o=Hi(i);if(o!==null&&Wp(o),o=Ts(e,t,n,r),o===null&&jl(e,t,r,Ko,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else jl(e,t,r,null,n)}}var Ko=null;function Ts(e,t,n,r){if(Ko=null,e=Hu(r),e=Tn(e),e!==null)if(t=Bn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=zp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ko=e,null}function Yp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(og()){case Uu:return 1;case Ip:return 4;case Yo:case ag:return 16;case Fp:return 536870912;default:return 16}default:return 16}}var ln=null,Qu=null,zo=null;function Gp(){if(zo)return zo;var e,t=Qu,n=t.length,r,i="value"in ln?ln.value:ln.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return zo=i.slice(e,1<r?1-r:void 0)}function $o(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ro(){return!0}function ad(){return!1}function dt(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ro:ad,this.isPropagationStopped=ad,this}return be(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ro)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ro)},persist:function(){},isPersistent:ro}),t}var Mr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qu=dt(Mr),Fi=be({},Mr,{view:0,detail:0}),wg=dt(Fi),bl,_l,Fr,za=be({},Fi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Fr&&(Fr&&e.type==="mousemove"?(bl=e.screenX-Fr.screenX,_l=e.screenY-Fr.screenY):_l=bl=0,Fr=e),bl)},movementY:function(e){return"movementY"in e?e.movementY:_l}}),ld=dt(za),xg=be({},za,{dataTransfer:0}),Sg=dt(xg),kg=be({},Fi,{relatedTarget:0}),Cl=dt(kg),Eg=be({},Mr,{animationName:0,elapsedTime:0,pseudoElement:0}),bg=dt(Eg),_g=be({},Mr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Cg=dt(_g),Og=be({},Mr,{data:0}),sd=dt(Og),Pg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Tg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Lg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Lg[e])?!!t[e]:!1}function Yu(){return Mg}var Rg=be({},Fi,{key:function(e){if(e.key){var t=Pg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=$o(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Tg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yu,charCode:function(e){return e.type==="keypress"?$o(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$o(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),jg=dt(Rg),Dg=be({},za,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ud=dt(Dg),zg=be({},Fi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yu}),$g=dt(zg),Ag=be({},Mr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ng=dt(Ag),Ig=be({},za,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Fg=dt(Ig),Hg=[9,13,27,32],Gu=qt&&"CompositionEvent"in window,ii=null;qt&&"documentMode"in document&&(ii=document.documentMode);var Ug=qt&&"TextEvent"in window&&!ii,Xp=qt&&(!Gu||ii&&8<ii&&11>=ii),cd=String.fromCharCode(32),dd=!1;function Kp(e,t){switch(e){case"keyup":return Hg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Jn=!1;function Wg(e,t){switch(e){case"compositionend":return Jp(t);case"keypress":return t.which!==32?null:(dd=!0,cd);case"textInput":return e=t.data,e===cd&&dd?null:e;default:return null}}function Bg(e,t){if(Jn)return e==="compositionend"||!Gu&&Kp(e,t)?(e=Gp(),zo=Qu=ln=null,Jn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Xp&&t.locale!=="ko"?null:t.data;default:return null}}var Vg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Vg[e.type]:t==="textarea"}function Zp(e,t,n,r){Lp(r),t=Jo(t,"onChange"),0<t.length&&(n=new qu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var oi=null,Si=null;function Qg(e){ch(e,0)}function $a(e){var t=tr(e);if(Ep(t))return e}function qg(e,t){if(e==="change")return t}var eh=!1;if(qt){var Ol;if(qt){var Pl="oninput"in document;if(!Pl){var pd=document.createElement("div");pd.setAttribute("oninput","return;"),Pl=typeof pd.oninput=="function"}Ol=Pl}else Ol=!1;eh=Ol&&(!document.documentMode||9<document.documentMode)}function hd(){oi&&(oi.detachEvent("onpropertychange",th),Si=oi=null)}function th(e){if(e.propertyName==="value"&&$a(Si)){var t=[];Zp(t,Si,e,Hu(e)),Dp(Qg,t)}}function Yg(e,t,n){e==="focusin"?(hd(),oi=t,Si=n,oi.attachEvent("onpropertychange",th)):e==="focusout"&&hd()}function Gg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $a(Si)}function Xg(e,t){if(e==="click")return $a(t)}function Kg(e,t){if(e==="input"||e==="change")return $a(t)}function Jg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Lt=typeof Object.is=="function"?Object.is:Jg;function ki(e,t){if(Lt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ds.call(t,i)||!Lt(e[i],t[i]))return!1}return!0}function md(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function vd(e,t){var n=md(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=md(n)}}function nh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?nh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function rh(){for(var e=window,t=Vo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Vo(e.document)}return t}function Xu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Zg(e){var t=rh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&nh(n.ownerDocument.documentElement,n)){if(r!==null&&Xu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=vd(n,o);var l=vd(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var e0=qt&&"documentMode"in document&&11>=document.documentMode,Zn=null,Ls=null,ai=null,Ms=!1;function gd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ms||Zn==null||Zn!==Vo(r)||(r=Zn,"selectionStart"in r&&Xu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ai&&ki(ai,r)||(ai=r,r=Jo(Ls,"onSelect"),0<r.length&&(t=new qu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Zn)))}function io(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var er={animationend:io("Animation","AnimationEnd"),animationiteration:io("Animation","AnimationIteration"),animationstart:io("Animation","AnimationStart"),transitionend:io("Transition","TransitionEnd")},Tl={},ih={};qt&&(ih=document.createElement("div").style,"AnimationEvent"in window||(delete er.animationend.animation,delete er.animationiteration.animation,delete er.animationstart.animation),"TransitionEvent"in window||delete er.transitionend.transition);function Aa(e){if(Tl[e])return Tl[e];if(!er[e])return e;var t=er[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ih)return Tl[e]=t[n];return e}var oh=Aa("animationend"),ah=Aa("animationiteration"),lh=Aa("animationstart"),sh=Aa("transitionend"),uh=new Map,yd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kn(e,t){uh.set(e,t),Wn(t,[e])}for(var Ll=0;Ll<yd.length;Ll++){var Ml=yd[Ll],t0=Ml.toLowerCase(),n0=Ml[0].toUpperCase()+Ml.slice(1);kn(t0,"on"+n0)}kn(oh,"onAnimationEnd");kn(ah,"onAnimationIteration");kn(lh,"onAnimationStart");kn("dblclick","onDoubleClick");kn("focusin","onFocus");kn("focusout","onBlur");kn(sh,"onTransitionEnd");gr("onMouseEnter",["mouseout","mouseover"]);gr("onMouseLeave",["mouseout","mouseover"]);gr("onPointerEnter",["pointerout","pointerover"]);gr("onPointerLeave",["pointerout","pointerover"]);Wn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Wn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Wn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Wn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Wn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Wn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ti="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),r0=new Set("cancel close invalid load scroll toggle".split(" ").concat(ti));function wd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,tg(r,t,void 0,e),e.currentTarget=null}function ch(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==o&&i.isPropagationStopped())break e;wd(i,a,u),o=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,u=a.currentTarget,a=a.listener,s!==o&&i.isPropagationStopped())break e;wd(i,a,u),o=s}}}if(qo)throw e=Cs,qo=!1,Cs=null,e}function ge(e,t){var n=t[$s];n===void 0&&(n=t[$s]=new Set);var r=e+"__bubble";n.has(r)||(dh(t,e,2,!1),n.add(r))}function Rl(e,t,n){var r=0;t&&(r|=4),dh(n,e,r,t)}var oo="_reactListening"+Math.random().toString(36).slice(2);function Ei(e){if(!e[oo]){e[oo]=!0,yp.forEach(function(n){n!=="selectionchange"&&(r0.has(n)||Rl(n,!1,e),Rl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[oo]||(t[oo]=!0,Rl("selectionchange",!1,t))}}function dh(e,t,n,r){switch(Yp(t)){case 1:var i=gg;break;case 4:i=yg;break;default:i=Vu}n=i.bind(null,t,n,e),i=void 0,!_s||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function jl(e,t,n,r,i){var o=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;l=l.return}for(;a!==null;){if(l=Tn(a),l===null)return;if(s=l.tag,s===5||s===6){r=o=l;continue e}a=a.parentNode}}r=r.return}Dp(function(){var u=o,d=Hu(n),c=[];e:{var f=uh.get(e);if(f!==void 0){var h=qu,v=e;switch(e){case"keypress":if($o(n)===0)break e;case"keydown":case"keyup":h=jg;break;case"focusin":v="focus",h=Cl;break;case"focusout":v="blur",h=Cl;break;case"beforeblur":case"afterblur":h=Cl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=ld;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=Sg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=$g;break;case oh:case ah:case lh:h=bg;break;case sh:h=Ng;break;case"scroll":h=wg;break;case"wheel":h=Fg;break;case"copy":case"cut":case"paste":h=Cg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=ud}var y=(t&4)!==0,k=!y&&e==="scroll",m=y?f!==null?f+"Capture":null:f;y=[];for(var p=u,g;p!==null;){g=p;var x=g.stateNode;if(g.tag===5&&x!==null&&(g=x,m!==null&&(x=gi(p,m),x!=null&&y.push(bi(p,x,g)))),k)break;p=p.return}0<y.length&&(f=new h(f,v,null,n,d),c.push({event:f,listeners:y}))}}if((t&7)===0){e:{if(f=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",f&&n!==Es&&(v=n.relatedTarget||n.fromElement)&&(Tn(v)||v[Yt]))break e;if((h||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,h?(v=n.relatedTarget||n.toElement,h=u,v=v?Tn(v):null,v!==null&&(k=Bn(v),v!==k||v.tag!==5&&v.tag!==6)&&(v=null)):(h=null,v=u),h!==v)){if(y=ld,x="onMouseLeave",m="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(y=ud,x="onPointerLeave",m="onPointerEnter",p="pointer"),k=h==null?f:tr(h),g=v==null?f:tr(v),f=new y(x,p+"leave",h,n,d),f.target=k,f.relatedTarget=g,x=null,Tn(d)===u&&(y=new y(m,p+"enter",v,n,d),y.target=g,y.relatedTarget=k,x=y),k=x,h&&v)t:{for(y=h,m=v,p=0,g=y;g;g=qn(g))p++;for(g=0,x=m;x;x=qn(x))g++;for(;0<p-g;)y=qn(y),p--;for(;0<g-p;)m=qn(m),g--;for(;p--;){if(y===m||m!==null&&y===m.alternate)break t;y=qn(y),m=qn(m)}y=null}else y=null;h!==null&&xd(c,f,h,y,!1),v!==null&&k!==null&&xd(c,k,v,y,!0)}}e:{if(f=u?tr(u):window,h=f.nodeName&&f.nodeName.toLowerCase(),h==="select"||h==="input"&&f.type==="file")var O=qg;else if(fd(f))if(eh)O=Kg;else{O=Gg;var P=Yg}else(h=f.nodeName)&&h.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(O=Xg);if(O&&(O=O(e,u))){Zp(c,O,n,d);break e}P&&P(e,f,u),e==="focusout"&&(P=f._wrapperState)&&P.controlled&&f.type==="number"&&ys(f,"number",f.value)}switch(P=u?tr(u):window,e){case"focusin":(fd(P)||P.contentEditable==="true")&&(Zn=P,Ls=u,ai=null);break;case"focusout":ai=Ls=Zn=null;break;case"mousedown":Ms=!0;break;case"contextmenu":case"mouseup":case"dragend":Ms=!1,gd(c,n,d);break;case"selectionchange":if(e0)break;case"keydown":case"keyup":gd(c,n,d)}var E;if(Gu)e:{switch(e){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else Jn?Kp(e,n)&&(S="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(S="onCompositionStart");S&&(Xp&&n.locale!=="ko"&&(Jn||S!=="onCompositionStart"?S==="onCompositionEnd"&&Jn&&(E=Gp()):(ln=d,Qu="value"in ln?ln.value:ln.textContent,Jn=!0)),P=Jo(u,S),0<P.length&&(S=new sd(S,e,null,n,d),c.push({event:S,listeners:P}),E?S.data=E:(E=Jp(n),E!==null&&(S.data=E)))),(E=Ug?Wg(e,n):Bg(e,n))&&(u=Jo(u,"onBeforeInput"),0<u.length&&(d=new sd("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=E))}ch(c,t)})}function bi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Jo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=gi(e,n),o!=null&&r.unshift(bi(e,o,i)),o=gi(e,t),o!=null&&r.push(bi(e,o,i))),e=e.return}return r}function qn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function xd(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,i?(s=gi(n,o),s!=null&&l.unshift(bi(n,s,a))):i||(s=gi(n,o),s!=null&&l.push(bi(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var i0=/\r\n?/g,o0=/\u0000|\uFFFD/g;function Sd(e){return(typeof e=="string"?e:""+e).replace(i0,`
`).replace(o0,"")}function ao(e,t,n){if(t=Sd(t),Sd(e)!==t&&n)throw Error(B(425))}function Zo(){}var Rs=null,js=null;function Ds(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var zs=typeof setTimeout=="function"?setTimeout:void 0,a0=typeof clearTimeout=="function"?clearTimeout:void 0,kd=typeof Promise=="function"?Promise:void 0,l0=typeof queueMicrotask=="function"?queueMicrotask:typeof kd<"u"?function(e){return kd.resolve(null).then(e).catch(s0)}:zs;function s0(e){setTimeout(function(){throw e})}function Dl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),xi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);xi(t)}function pn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ed(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Rr=Math.random().toString(36).slice(2),$t="__reactFiber$"+Rr,_i="__reactProps$"+Rr,Yt="__reactContainer$"+Rr,$s="__reactEvents$"+Rr,u0="__reactListeners$"+Rr,c0="__reactHandles$"+Rr;function Tn(e){var t=e[$t];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Yt]||n[$t]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ed(e);e!==null;){if(n=e[$t])return n;e=Ed(e)}return t}e=n,n=e.parentNode}return null}function Hi(e){return e=e[$t]||e[Yt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function tr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(B(33))}function Na(e){return e[_i]||null}var As=[],nr=-1;function En(e){return{current:e}}function ye(e){0>nr||(e.current=As[nr],As[nr]=null,nr--)}function me(e,t){nr++,As[nr]=e.current,e.current=t}var Sn={},qe=En(Sn),nt=En(!1),An=Sn;function yr(e,t){var n=e.type.contextTypes;if(!n)return Sn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function rt(e){return e=e.childContextTypes,e!=null}function ea(){ye(nt),ye(qe)}function bd(e,t,n){if(qe.current!==Sn)throw Error(B(168));me(qe,t),me(nt,n)}function fh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(B(108,Yv(e)||"Unknown",i));return be({},n,r)}function ta(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Sn,An=qe.current,me(qe,e),me(nt,nt.current),!0}function _d(e,t,n){var r=e.stateNode;if(!r)throw Error(B(169));n?(e=fh(e,t,An),r.__reactInternalMemoizedMergedChildContext=e,ye(nt),ye(qe),me(qe,e)):ye(nt),me(nt,n)}var Ut=null,Ia=!1,zl=!1;function ph(e){Ut===null?Ut=[e]:Ut.push(e)}function d0(e){Ia=!0,ph(e)}function bn(){if(!zl&&Ut!==null){zl=!0;var e=0,t=fe;try{var n=Ut;for(fe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ut=null,Ia=!1}catch(i){throw Ut!==null&&(Ut=Ut.slice(e+1)),Np(Uu,bn),i}finally{fe=t,zl=!1}}return null}var rr=[],ir=0,na=null,ra=0,ht=[],mt=0,Nn=null,Wt=1,Bt="";function Cn(e,t){rr[ir++]=ra,rr[ir++]=na,na=e,ra=t}function hh(e,t,n){ht[mt++]=Wt,ht[mt++]=Bt,ht[mt++]=Nn,Nn=e;var r=Wt;e=Bt;var i=32-Ot(r)-1;r&=~(1<<i),n+=1;var o=32-Ot(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Wt=1<<32-Ot(t)+i|n<<i|r,Bt=o+e}else Wt=1<<o|n<<i|r,Bt=e}function Ku(e){e.return!==null&&(Cn(e,1),hh(e,1,0))}function Ju(e){for(;e===na;)na=rr[--ir],rr[ir]=null,ra=rr[--ir],rr[ir]=null;for(;e===Nn;)Nn=ht[--mt],ht[mt]=null,Bt=ht[--mt],ht[mt]=null,Wt=ht[--mt],ht[mt]=null}var st=null,lt=null,xe=!1,_t=null;function mh(e,t){var n=vt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Cd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,st=e,lt=pn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,st=e,lt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Nn!==null?{id:Wt,overflow:Bt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=vt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,st=e,lt=null,!0):!1;default:return!1}}function Ns(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Is(e){if(xe){var t=lt;if(t){var n=t;if(!Cd(e,t)){if(Ns(e))throw Error(B(418));t=pn(n.nextSibling);var r=st;t&&Cd(e,t)?mh(r,n):(e.flags=e.flags&-4097|2,xe=!1,st=e)}}else{if(Ns(e))throw Error(B(418));e.flags=e.flags&-4097|2,xe=!1,st=e}}}function Od(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;st=e}function lo(e){if(e!==st)return!1;if(!xe)return Od(e),xe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ds(e.type,e.memoizedProps)),t&&(t=lt)){if(Ns(e))throw vh(),Error(B(418));for(;t;)mh(e,t),t=pn(t.nextSibling)}if(Od(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(B(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){lt=pn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}lt=null}}else lt=st?pn(e.stateNode.nextSibling):null;return!0}function vh(){for(var e=lt;e;)e=pn(e.nextSibling)}function wr(){lt=st=null,xe=!1}function Zu(e){_t===null?_t=[e]:_t.push(e)}var f0=Kt.ReactCurrentBatchConfig;function kt(e,t){if(e&&e.defaultProps){t=be({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var ia=En(null),oa=null,or=null,ec=null;function tc(){ec=or=oa=null}function nc(e){var t=ia.current;ye(ia),e._currentValue=t}function Fs(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function hr(e,t){oa=e,ec=or=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(tt=!0),e.firstContext=null)}function yt(e){var t=e._currentValue;if(ec!==e)if(e={context:e,memoizedValue:t,next:null},or===null){if(oa===null)throw Error(B(308));or=e,oa.dependencies={lanes:0,firstContext:e}}else or=or.next=e;return t}var Ln=null;function rc(e){Ln===null?Ln=[e]:Ln.push(e)}function gh(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,rc(t)):(n.next=i.next,i.next=n),t.interleaved=n,Gt(e,r)}function Gt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var nn=!1;function ic(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function hn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(de&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Gt(e,n)}return i=r.interleaved,i===null?(t.next=t,rc(r)):(t.next=i.next,i.next=t),r.interleaved=t,Gt(e,n)}function Ao(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Wu(e,n)}}function Pd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function aa(e,t,n,r){var i=e.updateQueue;nn=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var s=a,u=s.next;s.next=null,l===null?o=u:l.next=u,l=s;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==l&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=s))}if(o!==null){var c=i.baseState;l=0,d=u=s=null,a=o;do{var f=a.lane,h=a.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:h,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,y=a;switch(f=t,h=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){c=v.call(h,c,f);break e}c=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,f=typeof v=="function"?v.call(h,c,f):v,f==null)break e;c=be({},c,f);break e;case 2:nn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else h={eventTime:h,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=h,s=c):d=d.next=h,l|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(d===null&&(s=c),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Fn|=l,e.lanes=l,e.memoizedState=c}}function Td(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(B(191,i));i.call(r)}}}var wh=new gp.Component().refs;function Hs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:be({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Fa={isMounted:function(e){return(e=e._reactInternals)?Bn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Xe(),i=vn(e),o=Qt(r,i);o.payload=t,n!=null&&(o.callback=n),t=hn(e,o,i),t!==null&&(Pt(t,e,i,r),Ao(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Xe(),i=vn(e),o=Qt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=hn(e,o,i),t!==null&&(Pt(t,e,i,r),Ao(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Xe(),r=vn(e),i=Qt(n,r);i.tag=2,t!=null&&(i.callback=t),t=hn(e,i,r),t!==null&&(Pt(t,e,r,n),Ao(t,e,r))}};function Ld(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!ki(n,r)||!ki(i,o):!0}function xh(e,t,n){var r=!1,i=Sn,o=t.contextType;return typeof o=="object"&&o!==null?o=yt(o):(i=rt(t)?An:qe.current,r=t.contextTypes,o=(r=r!=null)?yr(e,i):Sn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Fa,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Md(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Fa.enqueueReplaceState(t,t.state,null)}function Us(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=wh,ic(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=yt(o):(o=rt(t)?An:qe.current,i.context=yr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Hs(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Fa.enqueueReplaceState(i,i.state,null),aa(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Hr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(B(309));var r=n.stateNode}if(!r)throw Error(B(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var a=i.refs;a===wh&&(a=i.refs={}),l===null?delete a[o]:a[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(B(284));if(!n._owner)throw Error(B(290,e))}return e}function so(e,t){throw e=Object.prototype.toString.call(t),Error(B(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Rd(e){var t=e._init;return t(e._payload)}function Sh(e){function t(m,p){if(e){var g=m.deletions;g===null?(m.deletions=[p],m.flags|=16):g.push(p)}}function n(m,p){if(!e)return null;for(;p!==null;)t(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=gn(m,p),m.index=0,m.sibling=null,m}function o(m,p,g){return m.index=g,e?(g=m.alternate,g!==null?(g=g.index,g<p?(m.flags|=2,p):g):(m.flags|=2,p)):(m.flags|=1048576,p)}function l(m){return e&&m.alternate===null&&(m.flags|=2),m}function a(m,p,g,x){return p===null||p.tag!==6?(p=Ul(g,m.mode,x),p.return=m,p):(p=i(p,g),p.return=m,p)}function s(m,p,g,x){var O=g.type;return O===Kn?d(m,p,g.props.children,x,g.key):p!==null&&(p.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===tn&&Rd(O)===p.type)?(x=i(p,g.props),x.ref=Hr(m,p,g),x.return=m,x):(x=Wo(g.type,g.key,g.props,null,m.mode,x),x.ref=Hr(m,p,g),x.return=m,x)}function u(m,p,g,x){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=Wl(g,m.mode,x),p.return=m,p):(p=i(p,g.children||[]),p.return=m,p)}function d(m,p,g,x,O){return p===null||p.tag!==7?(p=Dn(g,m.mode,x,O),p.return=m,p):(p=i(p,g),p.return=m,p)}function c(m,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Ul(""+p,m.mode,g),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Ki:return g=Wo(p.type,p.key,p.props,null,m.mode,g),g.ref=Hr(m,null,p),g.return=m,g;case Xn:return p=Wl(p,m.mode,g),p.return=m,p;case tn:var x=p._init;return c(m,x(p._payload),g)}if(Zr(p)||$r(p))return p=Dn(p,m.mode,g,null),p.return=m,p;so(m,p)}return null}function f(m,p,g,x){var O=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return O!==null?null:a(m,p,""+g,x);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ki:return g.key===O?s(m,p,g,x):null;case Xn:return g.key===O?u(m,p,g,x):null;case tn:return O=g._init,f(m,p,O(g._payload),x)}if(Zr(g)||$r(g))return O!==null?null:d(m,p,g,x,null);so(m,g)}return null}function h(m,p,g,x,O){if(typeof x=="string"&&x!==""||typeof x=="number")return m=m.get(g)||null,a(p,m,""+x,O);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ki:return m=m.get(x.key===null?g:x.key)||null,s(p,m,x,O);case Xn:return m=m.get(x.key===null?g:x.key)||null,u(p,m,x,O);case tn:var P=x._init;return h(m,p,g,P(x._payload),O)}if(Zr(x)||$r(x))return m=m.get(g)||null,d(p,m,x,O,null);so(p,x)}return null}function v(m,p,g,x){for(var O=null,P=null,E=p,S=p=0,M=null;E!==null&&S<g.length;S++){E.index>S?(M=E,E=null):M=E.sibling;var j=f(m,E,g[S],x);if(j===null){E===null&&(E=M);break}e&&E&&j.alternate===null&&t(m,E),p=o(j,p,S),P===null?O=j:P.sibling=j,P=j,E=M}if(S===g.length)return n(m,E),xe&&Cn(m,S),O;if(E===null){for(;S<g.length;S++)E=c(m,g[S],x),E!==null&&(p=o(E,p,S),P===null?O=E:P.sibling=E,P=E);return xe&&Cn(m,S),O}for(E=r(m,E);S<g.length;S++)M=h(E,m,S,g[S],x),M!==null&&(e&&M.alternate!==null&&E.delete(M.key===null?S:M.key),p=o(M,p,S),P===null?O=M:P.sibling=M,P=M);return e&&E.forEach(function(z){return t(m,z)}),xe&&Cn(m,S),O}function y(m,p,g,x){var O=$r(g);if(typeof O!="function")throw Error(B(150));if(g=O.call(g),g==null)throw Error(B(151));for(var P=O=null,E=p,S=p=0,M=null,j=g.next();E!==null&&!j.done;S++,j=g.next()){E.index>S?(M=E,E=null):M=E.sibling;var z=f(m,E,j.value,x);if(z===null){E===null&&(E=M);break}e&&E&&z.alternate===null&&t(m,E),p=o(z,p,S),P===null?O=z:P.sibling=z,P=z,E=M}if(j.done)return n(m,E),xe&&Cn(m,S),O;if(E===null){for(;!j.done;S++,j=g.next())j=c(m,j.value,x),j!==null&&(p=o(j,p,S),P===null?O=j:P.sibling=j,P=j);return xe&&Cn(m,S),O}for(E=r(m,E);!j.done;S++,j=g.next())j=h(E,m,S,j.value,x),j!==null&&(e&&j.alternate!==null&&E.delete(j.key===null?S:j.key),p=o(j,p,S),P===null?O=j:P.sibling=j,P=j);return e&&E.forEach(function(A){return t(m,A)}),xe&&Cn(m,S),O}function k(m,p,g,x){if(typeof g=="object"&&g!==null&&g.type===Kn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ki:e:{for(var O=g.key,P=p;P!==null;){if(P.key===O){if(O=g.type,O===Kn){if(P.tag===7){n(m,P.sibling),p=i(P,g.props.children),p.return=m,m=p;break e}}else if(P.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===tn&&Rd(O)===P.type){n(m,P.sibling),p=i(P,g.props),p.ref=Hr(m,P,g),p.return=m,m=p;break e}n(m,P);break}else t(m,P);P=P.sibling}g.type===Kn?(p=Dn(g.props.children,m.mode,x,g.key),p.return=m,m=p):(x=Wo(g.type,g.key,g.props,null,m.mode,x),x.ref=Hr(m,p,g),x.return=m,m=x)}return l(m);case Xn:e:{for(P=g.key;p!==null;){if(p.key===P)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){n(m,p.sibling),p=i(p,g.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else t(m,p);p=p.sibling}p=Wl(g,m.mode,x),p.return=m,m=p}return l(m);case tn:return P=g._init,k(m,p,P(g._payload),x)}if(Zr(g))return v(m,p,g,x);if($r(g))return y(m,p,g,x);so(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,g),p.return=m,m=p):(n(m,p),p=Ul(g,m.mode,x),p.return=m,m=p),l(m)):n(m,p)}return k}var xr=Sh(!0),kh=Sh(!1),Ui={},Nt=En(Ui),Ci=En(Ui),Oi=En(Ui);function Mn(e){if(e===Ui)throw Error(B(174));return e}function oc(e,t){switch(me(Oi,t),me(Ci,e),me(Nt,Ui),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:xs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=xs(t,e)}ye(Nt),me(Nt,t)}function Sr(){ye(Nt),ye(Ci),ye(Oi)}function Eh(e){Mn(Oi.current);var t=Mn(Nt.current),n=xs(t,e.type);t!==n&&(me(Ci,e),me(Nt,n))}function ac(e){Ci.current===e&&(ye(Nt),ye(Ci))}var ke=En(0);function la(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var $l=[];function lc(){for(var e=0;e<$l.length;e++)$l[e]._workInProgressVersionPrimary=null;$l.length=0}var No=Kt.ReactCurrentDispatcher,Al=Kt.ReactCurrentBatchConfig,In=0,Ee=null,Re=null,ze=null,sa=!1,li=!1,Pi=0,p0=0;function Ue(){throw Error(B(321))}function sc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Lt(e[n],t[n]))return!1;return!0}function uc(e,t,n,r,i,o){if(In=o,Ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,No.current=e===null||e.memoizedState===null?g0:y0,e=n(r,i),li){o=0;do{if(li=!1,Pi=0,25<=o)throw Error(B(301));o+=1,ze=Re=null,t.updateQueue=null,No.current=w0,e=n(r,i)}while(li)}if(No.current=ua,t=Re!==null&&Re.next!==null,In=0,ze=Re=Ee=null,sa=!1,t)throw Error(B(300));return e}function cc(){var e=Pi!==0;return Pi=0,e}function zt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ze===null?Ee.memoizedState=ze=e:ze=ze.next=e,ze}function wt(){if(Re===null){var e=Ee.alternate;e=e!==null?e.memoizedState:null}else e=Re.next;var t=ze===null?Ee.memoizedState:ze.next;if(t!==null)ze=t,Re=e;else{if(e===null)throw Error(B(310));Re=e,e={memoizedState:Re.memoizedState,baseState:Re.baseState,baseQueue:Re.baseQueue,queue:Re.queue,next:null},ze===null?Ee.memoizedState=ze=e:ze=ze.next=e}return ze}function Ti(e,t){return typeof t=="function"?t(e):t}function Nl(e){var t=wt(),n=t.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=e;var r=Re,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=l=null,s=null,u=o;do{var d=u.lane;if((In&d)===d)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=c,l=r):s=s.next=c,Ee.lanes|=d,Fn|=d}u=u.next}while(u!==null&&u!==o);s===null?l=r:s.next=a,Lt(r,t.memoizedState)||(tt=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Ee.lanes|=o,Fn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Il(e){var t=wt(),n=t.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Lt(o,t.memoizedState)||(tt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function bh(){}function _h(e,t){var n=Ee,r=wt(),i=t(),o=!Lt(r.memoizedState,i);if(o&&(r.memoizedState=i,tt=!0),r=r.queue,dc(Ph.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ze!==null&&ze.memoizedState.tag&1){if(n.flags|=2048,Li(9,Oh.bind(null,n,r,i,t),void 0,null),$e===null)throw Error(B(349));(In&30)!==0||Ch(n,t,i)}return i}function Ch(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ee.updateQueue,t===null?(t={lastEffect:null,stores:null},Ee.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Oh(e,t,n,r){t.value=n,t.getSnapshot=r,Th(t)&&Lh(e)}function Ph(e,t,n){return n(function(){Th(t)&&Lh(e)})}function Th(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Lt(e,n)}catch{return!0}}function Lh(e){var t=Gt(e,1);t!==null&&Pt(t,e,1,-1)}function jd(e){var t=zt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ti,lastRenderedState:e},t.queue=e,e=e.dispatch=v0.bind(null,Ee,e),[t.memoizedState,e]}function Li(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ee.updateQueue,t===null?(t={lastEffect:null,stores:null},Ee.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Mh(){return wt().memoizedState}function Io(e,t,n,r){var i=zt();Ee.flags|=e,i.memoizedState=Li(1|t,n,void 0,r===void 0?null:r)}function Ha(e,t,n,r){var i=wt();r=r===void 0?null:r;var o=void 0;if(Re!==null){var l=Re.memoizedState;if(o=l.destroy,r!==null&&sc(r,l.deps)){i.memoizedState=Li(t,n,o,r);return}}Ee.flags|=e,i.memoizedState=Li(1|t,n,o,r)}function Dd(e,t){return Io(8390656,8,e,t)}function dc(e,t){return Ha(2048,8,e,t)}function Rh(e,t){return Ha(4,2,e,t)}function jh(e,t){return Ha(4,4,e,t)}function Dh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function zh(e,t,n){return n=n!=null?n.concat([e]):null,Ha(4,4,Dh.bind(null,t,e),n)}function fc(){}function $h(e,t){var n=wt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&sc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ah(e,t){var n=wt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&sc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Nh(e,t,n){return(In&21)===0?(e.baseState&&(e.baseState=!1,tt=!0),e.memoizedState=n):(Lt(n,t)||(n=Hp(),Ee.lanes|=n,Fn|=n,e.baseState=!0),t)}function h0(e,t){var n=fe;fe=n!==0&&4>n?n:4,e(!0);var r=Al.transition;Al.transition={};try{e(!1),t()}finally{fe=n,Al.transition=r}}function Ih(){return wt().memoizedState}function m0(e,t,n){var r=vn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Fh(e))Hh(t,n);else if(n=gh(e,t,n,r),n!==null){var i=Xe();Pt(n,e,r,i),Uh(n,t,r)}}function v0(e,t,n){var r=vn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Fh(e))Hh(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,a=o(l,n);if(i.hasEagerState=!0,i.eagerState=a,Lt(a,l)){var s=t.interleaved;s===null?(i.next=i,rc(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=gh(e,t,i,r),n!==null&&(i=Xe(),Pt(n,e,r,i),Uh(n,t,r))}}function Fh(e){var t=e.alternate;return e===Ee||t!==null&&t===Ee}function Hh(e,t){li=sa=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Uh(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Wu(e,n)}}var ua={readContext:yt,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useInsertionEffect:Ue,useLayoutEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useMutableSource:Ue,useSyncExternalStore:Ue,useId:Ue,unstable_isNewReconciler:!1},g0={readContext:yt,useCallback:function(e,t){return zt().memoizedState=[e,t===void 0?null:t],e},useContext:yt,useEffect:Dd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Io(4194308,4,Dh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Io(4194308,4,e,t)},useInsertionEffect:function(e,t){return Io(4,2,e,t)},useMemo:function(e,t){var n=zt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=zt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=m0.bind(null,Ee,e),[r.memoizedState,e]},useRef:function(e){var t=zt();return e={current:e},t.memoizedState=e},useState:jd,useDebugValue:fc,useDeferredValue:function(e){return zt().memoizedState=e},useTransition:function(){var e=jd(!1),t=e[0];return e=h0.bind(null,e[1]),zt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ee,i=zt();if(xe){if(n===void 0)throw Error(B(407));n=n()}else{if(n=t(),$e===null)throw Error(B(349));(In&30)!==0||Ch(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Dd(Ph.bind(null,r,o,e),[e]),r.flags|=2048,Li(9,Oh.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=zt(),t=$e.identifierPrefix;if(xe){var n=Bt,r=Wt;n=(r&~(1<<32-Ot(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Pi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=p0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},y0={readContext:yt,useCallback:$h,useContext:yt,useEffect:dc,useImperativeHandle:zh,useInsertionEffect:Rh,useLayoutEffect:jh,useMemo:Ah,useReducer:Nl,useRef:Mh,useState:function(){return Nl(Ti)},useDebugValue:fc,useDeferredValue:function(e){var t=wt();return Nh(t,Re.memoizedState,e)},useTransition:function(){var e=Nl(Ti)[0],t=wt().memoizedState;return[e,t]},useMutableSource:bh,useSyncExternalStore:_h,useId:Ih,unstable_isNewReconciler:!1},w0={readContext:yt,useCallback:$h,useContext:yt,useEffect:dc,useImperativeHandle:zh,useInsertionEffect:Rh,useLayoutEffect:jh,useMemo:Ah,useReducer:Il,useRef:Mh,useState:function(){return Il(Ti)},useDebugValue:fc,useDeferredValue:function(e){var t=wt();return Re===null?t.memoizedState=e:Nh(t,Re.memoizedState,e)},useTransition:function(){var e=Il(Ti)[0],t=wt().memoizedState;return[e,t]},useMutableSource:bh,useSyncExternalStore:_h,useId:Ih,unstable_isNewReconciler:!1};function kr(e,t){try{var n="",r=t;do n+=qv(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Fl(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function Ws(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var x0=typeof WeakMap=="function"?WeakMap:Map;function Wh(e,t,n){n=Qt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){da||(da=!0,Zs=r),Ws(e,t)},n}function Bh(e,t,n){n=Qt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ws(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Ws(e,t),typeof r!="function"&&(mn===null?mn=new Set([this]):mn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function zd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new x0;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=D0.bind(null,e,t,n),t.then(e,e))}function $d(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ad(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Qt(-1,1),t.tag=2,hn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var S0=Kt.ReactCurrentOwner,tt=!1;function Ge(e,t,n,r){t.child=e===null?kh(t,null,n,r):xr(t,e.child,n,r)}function Nd(e,t,n,r,i){n=n.render;var o=t.ref;return hr(t,i),r=uc(e,t,n,r,o,i),n=cc(),e!==null&&!tt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Xt(e,t,i)):(xe&&n&&Ku(t),t.flags|=1,Ge(e,t,r,i),t.child)}function Id(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!xc(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Vh(e,t,o,r,i)):(e=Wo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,(e.lanes&i)===0){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:ki,n(l,r)&&e.ref===t.ref)return Xt(e,t,i)}return t.flags|=1,e=gn(o,r),e.ref=t.ref,e.return=t,t.child=e}function Vh(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(ki(o,r)&&e.ref===t.ref)if(tt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)(e.flags&131072)!==0&&(tt=!0);else return t.lanes=e.lanes,Xt(e,t,i)}return Bs(e,t,n,r,i)}function Qh(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},me(lr,at),at|=n;else{if((n&1073741824)===0)return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,me(lr,at),at|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,me(lr,at),at|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,me(lr,at),at|=r;return Ge(e,t,i,n),t.child}function qh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Bs(e,t,n,r,i){var o=rt(n)?An:qe.current;return o=yr(t,o),hr(t,i),n=uc(e,t,n,r,o,i),r=cc(),e!==null&&!tt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Xt(e,t,i)):(xe&&r&&Ku(t),t.flags|=1,Ge(e,t,n,i),t.child)}function Fd(e,t,n,r,i){if(rt(n)){var o=!0;ta(t)}else o=!1;if(hr(t,i),t.stateNode===null)Fo(e,t),xh(t,n,r),Us(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=yt(u):(u=rt(n)?An:qe.current,u=yr(t,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function";c||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==u)&&Md(t,l,r,u),nn=!1;var f=t.memoizedState;l.state=f,aa(t,r,l,i),s=t.memoizedState,a!==r||f!==s||nt.current||nn?(typeof d=="function"&&(Hs(t,n,d,r),s=t.memoizedState),(a=nn||Ld(t,n,a,r,f,s,u))?(c||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,yh(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:kt(t.type,a),l.props=u,c=t.pendingProps,f=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=yt(s):(s=rt(n)?An:qe.current,s=yr(t,s));var h=n.getDerivedStateFromProps;(d=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==c||f!==s)&&Md(t,l,r,s),nn=!1,f=t.memoizedState,l.state=f,aa(t,r,l,i);var v=t.memoizedState;a!==c||f!==v||nt.current||nn?(typeof h=="function"&&(Hs(t,n,h,r),v=t.memoizedState),(u=nn||Ld(t,n,u,r,f,v,s)||!1)?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,v,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,v,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),l.props=r,l.state=v,l.context=s,r=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Vs(e,t,n,r,o,i)}function Vs(e,t,n,r,i,o){qh(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&_d(t,n,!1),Xt(e,t,o);r=t.stateNode,S0.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=xr(t,e.child,null,o),t.child=xr(t,null,a,o)):Ge(e,t,a,o),t.memoizedState=r.state,i&&_d(t,n,!0),t.child}function Yh(e){var t=e.stateNode;t.pendingContext?bd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&bd(e,t.context,!1),oc(e,t.containerInfo)}function Hd(e,t,n,r,i){return wr(),Zu(i),t.flags|=256,Ge(e,t,n,r),t.child}var Qs={dehydrated:null,treeContext:null,retryLane:0};function qs(e){return{baseLanes:e,cachePool:null,transitions:null}}function Gh(e,t,n){var r=t.pendingProps,i=ke.current,o=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),me(ke,i&1),e===null)return Is(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},(r&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Ba(l,r,0,null),e=Dn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=qs(n),t.memoizedState=Qs,e):pc(t,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return k0(e,t,l,r,a,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,a=i.sibling;var s={mode:"hidden",children:r.children};return(l&1)===0&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=gn(i,s),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=gn(a,o):(o=Dn(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?qs(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=Qs,r}return o=e.child,e=o.sibling,r=gn(o,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function pc(e,t){return t=Ba({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function uo(e,t,n,r){return r!==null&&Zu(r),xr(t,e.child,null,n),e=pc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function k0(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=Fl(Error(B(422))),uo(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Ba({mode:"visible",children:r.children},i,0,null),o=Dn(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,(t.mode&1)!==0&&xr(t,e.child,null,l),t.child.memoizedState=qs(l),t.memoizedState=Qs,o);if((t.mode&1)===0)return uo(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(B(419)),r=Fl(o,r,void 0),uo(e,t,l,r)}if(a=(l&e.childLanes)!==0,tt||a){if(r=$e,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|l))!==0?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Gt(e,i),Pt(r,e,i,-1))}return wc(),r=Fl(Error(B(421))),uo(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=z0.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,lt=pn(i.nextSibling),st=t,xe=!0,_t=null,e!==null&&(ht[mt++]=Wt,ht[mt++]=Bt,ht[mt++]=Nn,Wt=e.id,Bt=e.overflow,Nn=t),t=pc(t,r.children),t.flags|=4096,t)}function Ud(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Fs(e.return,t,n)}function Hl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Xh(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Ge(e,t,r.children,n),r=ke.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ud(e,n,t);else if(e.tag===19)Ud(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(me(ke,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&la(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Hl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&la(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Hl(t,!0,n,null,o);break;case"together":Hl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Fo(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Xt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Fn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(B(153));if(t.child!==null){for(e=t.child,n=gn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=gn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function E0(e,t,n){switch(t.tag){case 3:Yh(t),wr();break;case 5:Eh(t);break;case 1:rt(t.type)&&ta(t);break;case 4:oc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;me(ia,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(me(ke,ke.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Gh(e,t,n):(me(ke,ke.current&1),e=Xt(e,t,n),e!==null?e.sibling:null);me(ke,ke.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Xh(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),me(ke,ke.current),r)break;return null;case 22:case 23:return t.lanes=0,Qh(e,t,n)}return Xt(e,t,n)}var Kh,Ys,Jh,Zh;Kh=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ys=function(){};Jh=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Mn(Nt.current);var o=null;switch(n){case"input":i=vs(e,i),r=vs(e,r),o=[];break;case"select":i=be({},i,{value:void 0}),r=be({},r,{value:void 0}),o=[];break;case"textarea":i=ws(e,i),r=ws(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Zo)}Ss(n,r);var l;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(mi.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var s=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(o||(o=[]),o.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(mi.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&ge("scroll",e),o||a===s||(o=[])):(o=o||[]).push(u,s))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Zh=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ur(e,t){if(!xe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function We(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function b0(e,t,n){var r=t.pendingProps;switch(Ju(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(t),null;case 1:return rt(t.type)&&ea(),We(t),null;case 3:return r=t.stateNode,Sr(),ye(nt),ye(qe),lc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(lo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,_t!==null&&(nu(_t),_t=null))),Ys(e,t),We(t),null;case 5:ac(t);var i=Mn(Oi.current);if(n=t.type,e!==null&&t.stateNode!=null)Jh(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(B(166));return We(t),null}if(e=Mn(Nt.current),lo(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[$t]=t,r[_i]=o,e=(t.mode&1)!==0,n){case"dialog":ge("cancel",r),ge("close",r);break;case"iframe":case"object":case"embed":ge("load",r);break;case"video":case"audio":for(i=0;i<ti.length;i++)ge(ti[i],r);break;case"source":ge("error",r);break;case"img":case"image":case"link":ge("error",r),ge("load",r);break;case"details":ge("toggle",r);break;case"input":Kc(r,o),ge("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ge("invalid",r);break;case"textarea":Zc(r,o),ge("invalid",r)}Ss(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&ao(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&ao(r.textContent,a,e),i=["children",""+a]):mi.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&ge("scroll",r)}switch(n){case"input":Ji(r),Jc(r,o,!0);break;case"textarea":Ji(r),ed(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Zo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Cp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[$t]=t,e[_i]=r,Kh(e,t,!1,!1),t.stateNode=e;e:{switch(l=ks(n,r),n){case"dialog":ge("cancel",e),ge("close",e),i=r;break;case"iframe":case"object":case"embed":ge("load",e),i=r;break;case"video":case"audio":for(i=0;i<ti.length;i++)ge(ti[i],e);i=r;break;case"source":ge("error",e),i=r;break;case"img":case"image":case"link":ge("error",e),ge("load",e),i=r;break;case"details":ge("toggle",e),i=r;break;case"input":Kc(e,r),i=vs(e,r),ge("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=be({},r,{value:void 0}),ge("invalid",e);break;case"textarea":Zc(e,r),i=ws(e,r),ge("invalid",e);break;default:i=r}Ss(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="style"?Tp(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Op(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&vi(e,s):typeof s=="number"&&vi(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(mi.hasOwnProperty(o)?s!=null&&o==="onScroll"&&ge("scroll",e):s!=null&&Au(e,o,s,l))}switch(n){case"input":Ji(e),Jc(e,r,!1);break;case"textarea":Ji(e),ed(e);break;case"option":r.value!=null&&e.setAttribute("value",""+xn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?cr(e,!!r.multiple,o,!1):r.defaultValue!=null&&cr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Zo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return We(t),null;case 6:if(e&&t.stateNode!=null)Zh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(B(166));if(n=Mn(Oi.current),Mn(Nt.current),lo(t)){if(r=t.stateNode,n=t.memoizedProps,r[$t]=t,(o=r.nodeValue!==n)&&(e=st,e!==null))switch(e.tag){case 3:ao(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ao(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[$t]=t,t.stateNode=r}return We(t),null;case 13:if(ye(ke),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(xe&&lt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)vh(),wr(),t.flags|=98560,o=!1;else if(o=lo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(B(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(B(317));o[$t]=t}else wr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;We(t),o=!1}else _t!==null&&(nu(_t),_t=null),o=!0;if(!o)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(ke.current&1)!==0?je===0&&(je=3):wc())),t.updateQueue!==null&&(t.flags|=4),We(t),null);case 4:return Sr(),Ys(e,t),e===null&&Ei(t.stateNode.containerInfo),We(t),null;case 10:return nc(t.type._context),We(t),null;case 17:return rt(t.type)&&ea(),We(t),null;case 19:if(ye(ke),o=t.memoizedState,o===null)return We(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)Ur(o,!1);else{if(je!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=la(e),l!==null){for(t.flags|=128,Ur(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return me(ke,ke.current&1|2),t.child}e=e.sibling}o.tail!==null&&Ce()>Er&&(t.flags|=128,r=!0,Ur(o,!1),t.lanes=4194304)}else{if(!r)if(e=la(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ur(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!xe)return We(t),null}else 2*Ce()-o.renderingStartTime>Er&&n!==1073741824&&(t.flags|=128,r=!0,Ur(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ce(),t.sibling=null,n=ke.current,me(ke,r?n&1|2:n&1),t):(We(t),null);case 22:case 23:return yc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(at&1073741824)!==0&&(We(t),t.subtreeFlags&6&&(t.flags|=8192)):We(t),null;case 24:return null;case 25:return null}throw Error(B(156,t.tag))}function _0(e,t){switch(Ju(t),t.tag){case 1:return rt(t.type)&&ea(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Sr(),ye(nt),ye(qe),lc(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return ac(t),null;case 13:if(ye(ke),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(B(340));wr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ye(ke),null;case 4:return Sr(),null;case 10:return nc(t.type._context),null;case 22:case 23:return yc(),null;case 24:return null;default:return null}}var co=!1,Qe=!1,C0=typeof WeakSet=="function"?WeakSet:Set,X=null;function ar(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){_e(e,t,r)}else n.current=null}function Gs(e,t,n){try{n()}catch(r){_e(e,t,r)}}var Wd=!1;function O0(e,t){if(Rs=Xo,e=rh(),Xu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,u=0,d=0,c=e,f=null;t:for(;;){for(var h;c!==n||i!==0&&c.nodeType!==3||(a=l+i),c!==o||r!==0&&c.nodeType!==3||(s=l+r),c.nodeType===3&&(l+=c.nodeValue.length),(h=c.firstChild)!==null;)f=c,c=h;for(;;){if(c===e)break t;if(f===n&&++u===i&&(a=l),f===o&&++d===r&&(s=l),(h=c.nextSibling)!==null)break;c=f,f=c.parentNode}c=h}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(js={focusedElem:e,selectionRange:n},Xo=!1,X=t;X!==null;)if(t=X,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,X=e;else for(;X!==null;){t=X;try{var v=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,k=v.memoizedState,m=t.stateNode,p=m.getSnapshotBeforeUpdate(t.elementType===t.type?y:kt(t.type,y),k);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(x){_e(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,X=e;break}X=t.return}return v=Wd,Wd=!1,v}function si(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Gs(t,n,o)}i=i.next}while(i!==r)}}function Ua(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Xs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function em(e){var t=e.alternate;t!==null&&(e.alternate=null,em(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[$t],delete t[_i],delete t[$s],delete t[u0],delete t[c0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function tm(e){return e.tag===5||e.tag===3||e.tag===4}function Bd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||tm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ks(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Zo));else if(r!==4&&(e=e.child,e!==null))for(Ks(e,t,n),e=e.sibling;e!==null;)Ks(e,t,n),e=e.sibling}function Js(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Js(e,t,n),e=e.sibling;e!==null;)Js(e,t,n),e=e.sibling}var Ie=null,bt=!1;function Zt(e,t,n){for(n=n.child;n!==null;)nm(e,t,n),n=n.sibling}function nm(e,t,n){if(At&&typeof At.onCommitFiberUnmount=="function")try{At.onCommitFiberUnmount(Da,n)}catch{}switch(n.tag){case 5:Qe||ar(n,t);case 6:var r=Ie,i=bt;Ie=null,Zt(e,t,n),Ie=r,bt=i,Ie!==null&&(bt?(e=Ie,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ie.removeChild(n.stateNode));break;case 18:Ie!==null&&(bt?(e=Ie,n=n.stateNode,e.nodeType===8?Dl(e.parentNode,n):e.nodeType===1&&Dl(e,n),xi(e)):Dl(Ie,n.stateNode));break;case 4:r=Ie,i=bt,Ie=n.stateNode.containerInfo,bt=!0,Zt(e,t,n),Ie=r,bt=i;break;case 0:case 11:case 14:case 15:if(!Qe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&((o&2)!==0||(o&4)!==0)&&Gs(n,t,l),i=i.next}while(i!==r)}Zt(e,t,n);break;case 1:if(!Qe&&(ar(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){_e(n,t,a)}Zt(e,t,n);break;case 21:Zt(e,t,n);break;case 22:n.mode&1?(Qe=(r=Qe)||n.memoizedState!==null,Zt(e,t,n),Qe=r):Zt(e,t,n);break;default:Zt(e,t,n)}}function Vd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new C0),t.forEach(function(r){var i=$0.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function xt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:Ie=a.stateNode,bt=!1;break e;case 3:Ie=a.stateNode.containerInfo,bt=!0;break e;case 4:Ie=a.stateNode.containerInfo,bt=!0;break e}a=a.return}if(Ie===null)throw Error(B(160));nm(o,l,i),Ie=null,bt=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){_e(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)rm(t,e),t=t.sibling}function rm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(xt(t,e),Dt(e),r&4){try{si(3,e,e.return),Ua(3,e)}catch(y){_e(e,e.return,y)}try{si(5,e,e.return)}catch(y){_e(e,e.return,y)}}break;case 1:xt(t,e),Dt(e),r&512&&n!==null&&ar(n,n.return);break;case 5:if(xt(t,e),Dt(e),r&512&&n!==null&&ar(n,n.return),e.flags&32){var i=e.stateNode;try{vi(i,"")}catch(y){_e(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&bp(i,o),ks(a,l);var u=ks(a,o);for(l=0;l<s.length;l+=2){var d=s[l],c=s[l+1];d==="style"?Tp(i,c):d==="dangerouslySetInnerHTML"?Op(i,c):d==="children"?vi(i,c):Au(i,d,c,u)}switch(a){case"input":gs(i,o);break;case"textarea":_p(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var h=o.value;h!=null?cr(i,!!o.multiple,h,!1):f!==!!o.multiple&&(o.defaultValue!=null?cr(i,!!o.multiple,o.defaultValue,!0):cr(i,!!o.multiple,o.multiple?[]:"",!1))}i[_i]=o}catch(y){_e(e,e.return,y)}}break;case 6:if(xt(t,e),Dt(e),r&4){if(e.stateNode===null)throw Error(B(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){_e(e,e.return,y)}}break;case 3:if(xt(t,e),Dt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{xi(t.containerInfo)}catch(y){_e(e,e.return,y)}break;case 4:xt(t,e),Dt(e);break;case 13:xt(t,e),Dt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(vc=Ce())),r&4&&Vd(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Qe=(u=Qe)||d,xt(t,e),Qe=u):xt(t,e),Dt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&(e.mode&1)!==0)for(X=e,d=e.child;d!==null;){for(c=X=d;X!==null;){switch(f=X,h=f.child,f.tag){case 0:case 11:case 14:case 15:si(4,f,f.return);break;case 1:ar(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(y){_e(r,n,y)}}break;case 5:ar(f,f.return);break;case 22:if(f.memoizedState!==null){qd(c);continue}}h!==null?(h.return=f,X=h):qd(c)}d=d.sibling}e:for(d=null,c=e;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=c.stateNode,s=c.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Pp("display",l))}catch(y){_e(e,e.return,y)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(y){_e(e,e.return,y)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:xt(t,e),Dt(e),r&4&&Vd(e);break;case 21:break;default:xt(t,e),Dt(e)}}function Dt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(tm(n)){var r=n;break e}n=n.return}throw Error(B(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(vi(i,""),r.flags&=-33);var o=Bd(e);Js(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=Bd(e);Ks(e,a,l);break;default:throw Error(B(161))}}catch(s){_e(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function P0(e,t,n){X=e,im(e)}function im(e,t,n){for(var r=(e.mode&1)!==0;X!==null;){var i=X,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||co;if(!l){var a=i.alternate,s=a!==null&&a.memoizedState!==null||Qe;a=co;var u=Qe;if(co=l,(Qe=s)&&!u)for(X=i;X!==null;)l=X,s=l.child,l.tag===22&&l.memoizedState!==null?Yd(i):s!==null?(s.return=l,X=s):Yd(i);for(;o!==null;)X=o,im(o),o=o.sibling;X=i,co=a,Qe=u}Qd(e)}else(i.subtreeFlags&8772)!==0&&o!==null?(o.return=i,X=o):Qd(e)}}function Qd(e){for(;X!==null;){var t=X;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Qe||Ua(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Qe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:kt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Td(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Td(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&xi(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}Qe||t.flags&512&&Xs(t)}catch(f){_e(t,t.return,f)}}if(t===e){X=null;break}if(n=t.sibling,n!==null){n.return=t.return,X=n;break}X=t.return}}function qd(e){for(;X!==null;){var t=X;if(t===e){X=null;break}var n=t.sibling;if(n!==null){n.return=t.return,X=n;break}X=t.return}}function Yd(e){for(;X!==null;){var t=X;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ua(4,t)}catch(s){_e(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){_e(t,i,s)}}var o=t.return;try{Xs(t)}catch(s){_e(t,o,s)}break;case 5:var l=t.return;try{Xs(t)}catch(s){_e(t,l,s)}}}catch(s){_e(t,t.return,s)}if(t===e){X=null;break}var a=t.sibling;if(a!==null){a.return=t.return,X=a;break}X=t.return}}var T0=Math.ceil,ca=Kt.ReactCurrentDispatcher,hc=Kt.ReactCurrentOwner,gt=Kt.ReactCurrentBatchConfig,de=0,$e=null,Le=null,Fe=0,at=0,lr=En(0),je=0,Mi=null,Fn=0,Wa=0,mc=0,ui=null,et=null,vc=0,Er=1/0,Ht=null,da=!1,Zs=null,mn=null,fo=!1,sn=null,fa=0,ci=0,eu=null,Ho=-1,Uo=0;function Xe(){return(de&6)!==0?Ce():Ho!==-1?Ho:Ho=Ce()}function vn(e){return(e.mode&1)===0?1:(de&2)!==0&&Fe!==0?Fe&-Fe:f0.transition!==null?(Uo===0&&(Uo=Hp()),Uo):(e=fe,e!==0||(e=window.event,e=e===void 0?16:Yp(e.type)),e)}function Pt(e,t,n,r){if(50<ci)throw ci=0,eu=null,Error(B(185));Ii(e,n,r),((de&2)===0||e!==$e)&&(e===$e&&((de&2)===0&&(Wa|=n),je===4&&an(e,Fe)),it(e,r),n===1&&de===0&&(t.mode&1)===0&&(Er=Ce()+500,Ia&&bn()))}function it(e,t){var n=e.callbackNode;fg(e,t);var r=Go(e,e===$e?Fe:0);if(r===0)n!==null&&rd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&rd(n),t===1)e.tag===0?d0(Gd.bind(null,e)):ph(Gd.bind(null,e)),l0(function(){(de&6)===0&&bn()}),n=null;else{switch(Up(r)){case 1:n=Uu;break;case 4:n=Ip;break;case 16:n=Yo;break;case 536870912:n=Fp;break;default:n=Yo}n=fm(n,om.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function om(e,t){if(Ho=-1,Uo=0,(de&6)!==0)throw Error(B(327));var n=e.callbackNode;if(mr()&&e.callbackNode!==n)return null;var r=Go(e,e===$e?Fe:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=pa(e,r);else{t=r;var i=de;de|=2;var o=lm();($e!==e||Fe!==t)&&(Ht=null,Er=Ce()+500,jn(e,t));do try{R0();break}catch(a){am(e,a)}while(1);tc(),ca.current=o,de=i,Le!==null?t=0:($e=null,Fe=0,t=je)}if(t!==0){if(t===2&&(i=Os(e),i!==0&&(r=i,t=tu(e,i))),t===1)throw n=Mi,jn(e,0),an(e,r),it(e,Ce()),n;if(t===6)an(e,r);else{if(i=e.current.alternate,(r&30)===0&&!L0(i)&&(t=pa(e,r),t===2&&(o=Os(e),o!==0&&(r=o,t=tu(e,o))),t===1))throw n=Mi,jn(e,0),an(e,r),it(e,Ce()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(B(345));case 2:On(e,et,Ht);break;case 3:if(an(e,r),(r&130023424)===r&&(t=vc+500-Ce(),10<t)){if(Go(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Xe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=zs(On.bind(null,e,et,Ht),t);break}On(e,et,Ht);break;case 4:if(an(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-Ot(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=Ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*T0(r/1960))-r,10<r){e.timeoutHandle=zs(On.bind(null,e,et,Ht),r);break}On(e,et,Ht);break;case 5:On(e,et,Ht);break;default:throw Error(B(329))}}}return it(e,Ce()),e.callbackNode===n?om.bind(null,e):null}function tu(e,t){var n=ui;return e.current.memoizedState.isDehydrated&&(jn(e,t).flags|=256),e=pa(e,t),e!==2&&(t=et,et=n,t!==null&&nu(t)),e}function nu(e){et===null?et=e:et.push.apply(et,e)}function L0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Lt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function an(e,t){for(t&=~mc,t&=~Wa,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ot(t),r=1<<n;e[n]=-1,t&=~r}}function Gd(e){if((de&6)!==0)throw Error(B(327));mr();var t=Go(e,0);if((t&1)===0)return it(e,Ce()),null;var n=pa(e,t);if(e.tag!==0&&n===2){var r=Os(e);r!==0&&(t=r,n=tu(e,r))}if(n===1)throw n=Mi,jn(e,0),an(e,t),it(e,Ce()),n;if(n===6)throw Error(B(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,On(e,et,Ht),it(e,Ce()),null}function gc(e,t){var n=de;de|=1;try{return e(t)}finally{de=n,de===0&&(Er=Ce()+500,Ia&&bn())}}function Hn(e){sn!==null&&sn.tag===0&&(de&6)===0&&mr();var t=de;de|=1;var n=gt.transition,r=fe;try{if(gt.transition=null,fe=1,e)return e()}finally{fe=r,gt.transition=n,de=t,(de&6)===0&&bn()}}function yc(){at=lr.current,ye(lr)}function jn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,a0(n)),Le!==null)for(n=Le.return;n!==null;){var r=n;switch(Ju(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ea();break;case 3:Sr(),ye(nt),ye(qe),lc();break;case 5:ac(r);break;case 4:Sr();break;case 13:ye(ke);break;case 19:ye(ke);break;case 10:nc(r.type._context);break;case 22:case 23:yc()}n=n.return}if($e=e,Le=e=gn(e.current,null),Fe=at=t,je=0,Mi=null,mc=Wa=Fn=0,et=ui=null,Ln!==null){for(t=0;t<Ln.length;t++)if(n=Ln[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}Ln=null}return e}function am(e,t){do{var n=Le;try{if(tc(),No.current=ua,sa){for(var r=Ee.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}sa=!1}if(In=0,ze=Re=Ee=null,li=!1,Pi=0,hc.current=null,n===null||n.return===null){je=1,Mi=t,Le=null;break}e:{var o=e,l=n.return,a=n,s=t;if(t=Fe,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,d=a,c=d.tag;if((d.mode&1)===0&&(c===0||c===11||c===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=$d(l);if(h!==null){h.flags&=-257,Ad(h,l,a,o,t),h.mode&1&&zd(o,u,t),t=h,s=u;var v=t.updateQueue;if(v===null){var y=new Set;y.add(s),t.updateQueue=y}else v.add(s);break e}else{if((t&1)===0){zd(o,u,t),wc();break e}s=Error(B(426))}}else if(xe&&a.mode&1){var k=$d(l);if(k!==null){(k.flags&65536)===0&&(k.flags|=256),Ad(k,l,a,o,t),Zu(kr(s,a));break e}}o=s=kr(s,a),je!==4&&(je=2),ui===null?ui=[o]:ui.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var m=Wh(o,s,t);Pd(o,m);break e;case 1:a=s;var p=o.type,g=o.stateNode;if((o.flags&128)===0&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(mn===null||!mn.has(g)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=Bh(o,a,t);Pd(o,x);break e}}o=o.return}while(o!==null)}um(n)}catch(O){t=O,Le===n&&n!==null&&(Le=n=n.return);continue}break}while(1)}function lm(){var e=ca.current;return ca.current=ua,e===null?ua:e}function wc(){(je===0||je===3||je===2)&&(je=4),$e===null||(Fn&268435455)===0&&(Wa&268435455)===0||an($e,Fe)}function pa(e,t){var n=de;de|=2;var r=lm();($e!==e||Fe!==t)&&(Ht=null,jn(e,t));do try{M0();break}catch(i){am(e,i)}while(1);if(tc(),de=n,ca.current=r,Le!==null)throw Error(B(261));return $e=null,Fe=0,je}function M0(){for(;Le!==null;)sm(Le)}function R0(){for(;Le!==null&&!rg();)sm(Le)}function sm(e){var t=dm(e.alternate,e,at);e.memoizedProps=e.pendingProps,t===null?um(e):Le=t,hc.current=null}function um(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=b0(n,t,at),n!==null){Le=n;return}}else{if(n=_0(n,t),n!==null){n.flags&=32767,Le=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{je=6,Le=null;return}}if(t=t.sibling,t!==null){Le=t;return}Le=t=e}while(t!==null);je===0&&(je=5)}function On(e,t,n){var r=fe,i=gt.transition;try{gt.transition=null,fe=1,j0(e,t,n,r)}finally{gt.transition=i,fe=r}return null}function j0(e,t,n,r){do mr();while(sn!==null);if((de&6)!==0)throw Error(B(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(B(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(pg(e,o),e===$e&&(Le=$e=null,Fe=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||fo||(fo=!0,fm(Yo,function(){return mr(),null})),o=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||o){o=gt.transition,gt.transition=null;var l=fe;fe=1;var a=de;de|=4,hc.current=null,O0(e,n),rm(n,e),Zg(js),Xo=!!Rs,js=Rs=null,e.current=n,P0(n),ig(),de=a,fe=l,gt.transition=o}else e.current=n;if(fo&&(fo=!1,sn=e,fa=i),o=e.pendingLanes,o===0&&(mn=null),lg(n.stateNode),it(e,Ce()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(da)throw da=!1,e=Zs,Zs=null,e;return(fa&1)!==0&&e.tag!==0&&mr(),o=e.pendingLanes,(o&1)!==0?e===eu?ci++:(ci=0,eu=e):ci=0,bn(),null}function mr(){if(sn!==null){var e=Up(fa),t=gt.transition,n=fe;try{if(gt.transition=null,fe=16>e?16:e,sn===null)var r=!1;else{if(e=sn,sn=null,fa=0,(de&6)!==0)throw Error(B(331));var i=de;for(de|=4,X=e.current;X!==null;){var o=X,l=o.child;if((X.flags&16)!==0){var a=o.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(X=u;X!==null;){var d=X;switch(d.tag){case 0:case 11:case 15:si(8,d,o)}var c=d.child;if(c!==null)c.return=d,X=c;else for(;X!==null;){d=X;var f=d.sibling,h=d.return;if(em(d),d===u){X=null;break}if(f!==null){f.return=h,X=f;break}X=h}}}var v=o.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var k=y.sibling;y.sibling=null,y=k}while(y!==null)}}X=o}}if((o.subtreeFlags&2064)!==0&&l!==null)l.return=o,X=l;else e:for(;X!==null;){if(o=X,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:si(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,X=m;break e}X=o.return}}var p=e.current;for(X=p;X!==null;){l=X;var g=l.child;if((l.subtreeFlags&2064)!==0&&g!==null)g.return=l,X=g;else e:for(l=p;X!==null;){if(a=X,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:Ua(9,a)}}catch(O){_e(a,a.return,O)}if(a===l){X=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,X=x;break e}X=a.return}}if(de=i,bn(),At&&typeof At.onPostCommitFiberRoot=="function")try{At.onPostCommitFiberRoot(Da,e)}catch{}r=!0}return r}finally{fe=n,gt.transition=t}}return!1}function Xd(e,t,n){t=kr(n,t),t=Wh(e,t,1),e=hn(e,t,1),t=Xe(),e!==null&&(Ii(e,1,t),it(e,t))}function _e(e,t,n){if(e.tag===3)Xd(e,e,n);else for(;t!==null;){if(t.tag===3){Xd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(mn===null||!mn.has(r))){e=kr(n,e),e=Bh(t,e,1),t=hn(t,e,1),e=Xe(),t!==null&&(Ii(t,1,e),it(t,e));break}}t=t.return}}function D0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Xe(),e.pingedLanes|=e.suspendedLanes&n,$e===e&&(Fe&n)===n&&(je===4||je===3&&(Fe&130023424)===Fe&&500>Ce()-vc?jn(e,0):mc|=n),it(e,t)}function cm(e,t){t===0&&((e.mode&1)===0?t=1:(t=to,to<<=1,(to&130023424)===0&&(to=4194304)));var n=Xe();e=Gt(e,t),e!==null&&(Ii(e,t,n),it(e,n))}function z0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),cm(e,n)}function $0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(t),cm(e,n)}var dm;dm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||nt.current)tt=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return tt=!1,E0(e,t,n);tt=(e.flags&131072)!==0}else tt=!1,xe&&(t.flags&1048576)!==0&&hh(t,ra,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Fo(e,t),e=t.pendingProps;var i=yr(t,qe.current);hr(t,n),i=uc(null,t,r,e,i,n);var o=cc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,rt(r)?(o=!0,ta(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ic(t),i.updater=Fa,t.stateNode=i,i._reactInternals=t,Us(t,r,e,n),t=Vs(null,t,r,!0,o,n)):(t.tag=0,xe&&o&&Ku(t),Ge(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Fo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=N0(r),e=kt(r,e),i){case 0:t=Bs(null,t,r,e,n);break e;case 1:t=Fd(null,t,r,e,n);break e;case 11:t=Nd(null,t,r,e,n);break e;case 14:t=Id(null,t,r,kt(r.type,e),n);break e}throw Error(B(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:kt(r,i),Bs(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:kt(r,i),Fd(e,t,r,i,n);case 3:e:{if(Yh(t),e===null)throw Error(B(387));r=t.pendingProps,o=t.memoizedState,i=o.element,yh(e,t),aa(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=kr(Error(B(423)),t),t=Hd(e,t,r,n,i);break e}else if(r!==i){i=kr(Error(B(424)),t),t=Hd(e,t,r,n,i);break e}else for(lt=pn(t.stateNode.containerInfo.firstChild),st=t,xe=!0,_t=null,n=kh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(wr(),r===i){t=Xt(e,t,n);break e}Ge(e,t,r,n)}t=t.child}return t;case 5:return Eh(t),e===null&&Is(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,Ds(r,i)?l=null:o!==null&&Ds(r,o)&&(t.flags|=32),qh(e,t),Ge(e,t,l,n),t.child;case 6:return e===null&&Is(t),null;case 13:return Gh(e,t,n);case 4:return oc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=xr(t,null,r,n):Ge(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:kt(r,i),Nd(e,t,r,i,n);case 7:return Ge(e,t,t.pendingProps,n),t.child;case 8:return Ge(e,t,t.pendingProps.children,n),t.child;case 12:return Ge(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,me(ia,r._currentValue),r._currentValue=l,o!==null)if(Lt(o.value,l)){if(o.children===i.children&&!nt.current){t=Xt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Qt(-1,n&-n),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?s.next=s:(s.next=d.next,d.next=s),u.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Fs(o.return,n,t),a.lanes|=n;break}s=s.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(B(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Fs(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}Ge(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,hr(t,n),i=yt(i),r=r(i),t.flags|=1,Ge(e,t,r,n),t.child;case 14:return r=t.type,i=kt(r,t.pendingProps),i=kt(r.type,i),Id(e,t,r,i,n);case 15:return Vh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:kt(r,i),Fo(e,t),t.tag=1,rt(r)?(e=!0,ta(t)):e=!1,hr(t,n),xh(t,r,i),Us(t,r,i,n),Vs(null,t,r,!0,e,n);case 19:return Xh(e,t,n);case 22:return Qh(e,t,n)}throw Error(B(156,t.tag))};function fm(e,t){return Np(e,t)}function A0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vt(e,t,n,r){return new A0(e,t,n,r)}function xc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function N0(e){if(typeof e=="function")return xc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Iu)return 11;if(e===Fu)return 14}return 2}function gn(e,t){var n=e.alternate;return n===null?(n=vt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Wo(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")xc(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Kn:return Dn(n.children,i,o,t);case Nu:l=8,i|=8;break;case fs:return e=vt(12,n,t,i|2),e.elementType=fs,e.lanes=o,e;case ps:return e=vt(13,n,t,i),e.elementType=ps,e.lanes=o,e;case hs:return e=vt(19,n,t,i),e.elementType=hs,e.lanes=o,e;case Sp:return Ba(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case wp:l=10;break e;case xp:l=9;break e;case Iu:l=11;break e;case Fu:l=14;break e;case tn:l=16,r=null;break e}throw Error(B(130,e==null?e:typeof e,""))}return t=vt(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Dn(e,t,n,r){return e=vt(7,e,r,t),e.lanes=n,e}function Ba(e,t,n,r){return e=vt(22,e,r,t),e.elementType=Sp,e.lanes=n,e.stateNode={isHidden:!1},e}function Ul(e,t,n){return e=vt(6,e,null,t),e.lanes=n,e}function Wl(e,t,n){return t=vt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function I0(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=El(0),this.expirationTimes=El(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=El(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Sc(e,t,n,r,i,o,l,a,s){return e=new I0(e,t,n,a,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=vt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ic(o),e}function F0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function pm(e){if(!e)return Sn;e=e._reactInternals;e:{if(Bn(e)!==e||e.tag!==1)throw Error(B(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(rt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(B(171))}if(e.tag===1){var n=e.type;if(rt(n))return fh(e,n,t)}return t}function hm(e,t,n,r,i,o,l,a,s){return e=Sc(n,r,!0,e,i,o,l,a,s),e.context=pm(null),n=e.current,r=Xe(),i=vn(n),o=Qt(r,i),o.callback=t!=null?t:null,hn(n,o,i),e.current.lanes=i,Ii(e,i,r),it(e,r),e}function Va(e,t,n,r){var i=t.current,o=Xe(),l=vn(i);return n=pm(n),t.context===null?t.context=n:t.pendingContext=n,t=Qt(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=hn(i,t,l),e!==null&&(Pt(e,i,l,o),Ao(e,i,l)),l}function ha(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Kd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function kc(e,t){Kd(e,t),(e=e.alternate)&&Kd(e,t)}function H0(){return null}var mm=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ec(e){this._internalRoot=e}Qa.prototype.render=Ec.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(B(409));Va(e,t,null,null)};Qa.prototype.unmount=Ec.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Hn(function(){Va(null,e,null,null)}),t[Yt]=null}};function Qa(e){this._internalRoot=e}Qa.prototype.unstable_scheduleHydration=function(e){if(e){var t=Vp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<on.length&&t!==0&&t<on[n].priority;n++);on.splice(n,0,e),n===0&&qp(e)}};function bc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function qa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Jd(){}function U0(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=ha(l);o.call(u)}}var l=hm(t,r,e,0,null,!1,!1,"",Jd);return e._reactRootContainer=l,e[Yt]=l.current,Ei(e.nodeType===8?e.parentNode:e),Hn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=ha(s);a.call(u)}}var s=Sc(e,0,!1,null,null,!1,!1,"",Jd);return e._reactRootContainer=s,e[Yt]=s.current,Ei(e.nodeType===8?e.parentNode:e),Hn(function(){Va(t,s,n,r)}),s}function Ya(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var a=i;i=function(){var s=ha(l);a.call(s)}}Va(t,l,e,i)}else l=U0(n,t,e,i,r);return ha(l)}Wp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ei(t.pendingLanes);n!==0&&(Wu(t,n|1),it(t,Ce()),(de&6)===0&&(Er=Ce()+500,bn()))}break;case 13:Hn(function(){var r=Gt(e,1);if(r!==null){var i=Xe();Pt(r,e,1,i)}}),kc(e,1)}};Bu=function(e){if(e.tag===13){var t=Gt(e,134217728);if(t!==null){var n=Xe();Pt(t,e,134217728,n)}kc(e,134217728)}};Bp=function(e){if(e.tag===13){var t=vn(e),n=Gt(e,t);if(n!==null){var r=Xe();Pt(n,e,t,r)}kc(e,t)}};Vp=function(){return fe};Qp=function(e,t){var n=fe;try{return fe=e,t()}finally{fe=n}};bs=function(e,t,n){switch(t){case"input":if(gs(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Na(r);if(!i)throw Error(B(90));Ep(r),gs(r,i)}}}break;case"textarea":_p(e,n);break;case"select":t=n.value,t!=null&&cr(e,!!n.multiple,t,!1)}};Rp=gc;jp=Hn;var W0={usingClientEntryPoint:!1,Events:[Hi,tr,Na,Lp,Mp,gc]},Wr={findFiberByHostInstance:Tn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},B0={bundleType:Wr.bundleType,version:Wr.version,rendererPackageName:Wr.rendererPackageName,rendererConfig:Wr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Kt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=$p(e),e===null?null:e.stateNode},findFiberByHostInstance:Wr.findFiberByHostInstance||H0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var po=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!po.isDisabled&&po.supportsFiber)try{Da=po.inject(B0),At=po}catch{}}ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W0;ct.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bc(t))throw Error(B(200));return F0(e,t,null,n)};ct.createRoot=function(e,t){if(!bc(e))throw Error(B(299));var n=!1,r="",i=mm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Sc(e,1,!1,null,null,n,!1,r,i),e[Yt]=t.current,Ei(e.nodeType===8?e.parentNode:e),new Ec(t)};ct.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(B(188)):(e=Object.keys(e).join(","),Error(B(268,e)));return e=$p(t),e=e===null?null:e.stateNode,e};ct.flushSync=function(e){return Hn(e)};ct.hydrate=function(e,t,n){if(!qa(t))throw Error(B(200));return Ya(null,e,t,!0,n)};ct.hydrateRoot=function(e,t,n){if(!bc(e))throw Error(B(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=mm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=hm(t,null,e,1,n!=null?n:null,i,!1,o,l),e[Yt]=t.current,Ei(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Qa(t)};ct.render=function(e,t,n){if(!qa(t))throw Error(B(200));return Ya(null,e,t,!1,n)};ct.unmountComponentAtNode=function(e){if(!qa(e))throw Error(B(40));return e._reactRootContainer?(Hn(function(){Ya(null,null,e,!1,function(){e._reactRootContainer=null,e[Yt]=null})}),!0):!1};ct.unstable_batchedUpdates=gc;ct.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!qa(n))throw Error(B(200));if(e==null||e._reactInternals===void 0)throw Error(B(38));return Ya(e,t,n,!1,r)};ct.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=ct})(Du);var Zd=Du.exports;cs.createRoot=Zd.createRoot,cs.hydrateRoot=Zd.hydrateRoot;var Ga={exports:{}},pe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ae=typeof Symbol=="function"&&Symbol.for,_c=Ae?Symbol.for("react.element"):60103,Cc=Ae?Symbol.for("react.portal"):60106,Xa=Ae?Symbol.for("react.fragment"):60107,Ka=Ae?Symbol.for("react.strict_mode"):60108,Ja=Ae?Symbol.for("react.profiler"):60114,Za=Ae?Symbol.for("react.provider"):60109,el=Ae?Symbol.for("react.context"):60110,Oc=Ae?Symbol.for("react.async_mode"):60111,tl=Ae?Symbol.for("react.concurrent_mode"):60111,nl=Ae?Symbol.for("react.forward_ref"):60112,rl=Ae?Symbol.for("react.suspense"):60113,V0=Ae?Symbol.for("react.suspense_list"):60120,il=Ae?Symbol.for("react.memo"):60115,ol=Ae?Symbol.for("react.lazy"):60116,Q0=Ae?Symbol.for("react.block"):60121,q0=Ae?Symbol.for("react.fundamental"):60117,Y0=Ae?Symbol.for("react.responder"):60118,G0=Ae?Symbol.for("react.scope"):60119;function ft(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case _c:switch(e=e.type,e){case Oc:case tl:case Xa:case Ja:case Ka:case rl:return e;default:switch(e=e&&e.$$typeof,e){case el:case nl:case ol:case il:case Za:return e;default:return t}}case Cc:return t}}}function vm(e){return ft(e)===tl}pe.AsyncMode=Oc;pe.ConcurrentMode=tl;pe.ContextConsumer=el;pe.ContextProvider=Za;pe.Element=_c;pe.ForwardRef=nl;pe.Fragment=Xa;pe.Lazy=ol;pe.Memo=il;pe.Portal=Cc;pe.Profiler=Ja;pe.StrictMode=Ka;pe.Suspense=rl;pe.isAsyncMode=function(e){return vm(e)||ft(e)===Oc};pe.isConcurrentMode=vm;pe.isContextConsumer=function(e){return ft(e)===el};pe.isContextProvider=function(e){return ft(e)===Za};pe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===_c};pe.isForwardRef=function(e){return ft(e)===nl};pe.isFragment=function(e){return ft(e)===Xa};pe.isLazy=function(e){return ft(e)===ol};pe.isMemo=function(e){return ft(e)===il};pe.isPortal=function(e){return ft(e)===Cc};pe.isProfiler=function(e){return ft(e)===Ja};pe.isStrictMode=function(e){return ft(e)===Ka};pe.isSuspense=function(e){return ft(e)===rl};pe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Xa||e===tl||e===Ja||e===Ka||e===rl||e===V0||typeof e=="object"&&e!==null&&(e.$$typeof===ol||e.$$typeof===il||e.$$typeof===Za||e.$$typeof===el||e.$$typeof===nl||e.$$typeof===q0||e.$$typeof===Y0||e.$$typeof===G0||e.$$typeof===Q0)};pe.typeOf=ft;(function(e){e.exports=pe})(Ga);function X0(e){function t(H,b,q,F,L){for(var J=0,W=0,ee=0,ie=0,se,ne,Oe=0,Ne=0,oe,De=oe=se=0,ce=0,Me=0,_n=0,Pe=0,Jt=q.length,Ft=Jt-1,ot,te="",he="",Qn="",zr="",jt;ce<Jt;){if(ne=q.charCodeAt(ce),ce===Ft&&W+ie+ee+J!==0&&(W!==0&&(ne=W===47?10:47),ie=ee=J=0,Jt++,Ft++),W+ie+ee+J===0){if(ce===Ft&&(0<Me&&(te=te.replace(f,"")),0<te.trim().length)){switch(ne){case 32:case 9:case 59:case 13:case 10:break;default:te+=q.charAt(ce)}ne=59}switch(ne){case 123:for(te=te.trim(),se=te.charCodeAt(0),oe=1,Pe=++ce;ce<Jt;){switch(ne=q.charCodeAt(ce)){case 123:oe++;break;case 125:oe--;break;case 47:switch(ne=q.charCodeAt(ce+1)){case 42:case 47:e:{for(De=ce+1;De<Ft;++De)switch(q.charCodeAt(De)){case 47:if(ne===42&&q.charCodeAt(De-1)===42&&ce+2!==De){ce=De+1;break e}break;case 10:if(ne===47){ce=De+1;break e}}ce=De}}break;case 91:ne++;case 40:ne++;case 34:case 39:for(;ce++<Ft&&q.charCodeAt(ce)!==ne;);}if(oe===0)break;ce++}switch(oe=q.substring(Pe,ce),se===0&&(se=(te=te.replace(c,"").trim()).charCodeAt(0)),se){case 64:switch(0<Me&&(te=te.replace(f,"")),ne=te.charCodeAt(1),ne){case 100:case 109:case 115:case 45:Me=b;break;default:Me=Y}if(oe=t(b,Me,oe,ne,L+1),Pe=oe.length,0<T&&(Me=n(Y,te,_n),jt=a(3,oe,Me,b,$,A,Pe,ne,L,F),te=Me.join(""),jt!==void 0&&(Pe=(oe=jt.trim()).length)===0&&(ne=0,oe="")),0<Pe)switch(ne){case 115:te=te.replace(P,l);case 100:case 109:case 45:oe=te+"{"+oe+"}";break;case 107:te=te.replace(p,"$1 $2"),oe=te+"{"+oe+"}",oe=I===1||I===2&&o("@"+oe,3)?"@-webkit-"+oe+"@"+oe:"@"+oe;break;default:oe=te+oe,F===112&&(oe=(he+=oe,""))}else oe="";break;default:oe=t(b,n(b,te,_n),oe,F,L+1)}Qn+=oe,oe=_n=Me=De=se=0,te="",ne=q.charCodeAt(++ce);break;case 125:case 59:if(te=(0<Me?te.replace(f,""):te).trim(),1<(Pe=te.length))switch(De===0&&(se=te.charCodeAt(0),se===45||96<se&&123>se)&&(Pe=(te=te.replace(" ",":")).length),0<T&&(jt=a(1,te,b,H,$,A,he.length,F,L,F))!==void 0&&(Pe=(te=jt.trim()).length)===0&&(te="\0\0"),se=te.charCodeAt(0),ne=te.charCodeAt(1),se){case 0:break;case 64:if(ne===105||ne===99){zr+=te+q.charAt(ce);break}default:te.charCodeAt(Pe-1)!==58&&(he+=i(te,se,ne,te.charCodeAt(2)))}_n=Me=De=se=0,te="",ne=q.charCodeAt(++ce)}}switch(ne){case 13:case 10:W===47?W=0:1+se===0&&F!==107&&0<te.length&&(Me=1,te+="\0"),0<T*U&&a(0,te,b,H,$,A,he.length,F,L,F),A=1,$++;break;case 59:case 125:if(W+ie+ee+J===0){A++;break}default:switch(A++,ot=q.charAt(ce),ne){case 9:case 32:if(ie+J+W===0)switch(Oe){case 44:case 58:case 9:case 32:ot="";break;default:ne!==32&&(ot=" ")}break;case 0:ot="\\0";break;case 12:ot="\\f";break;case 11:ot="\\v";break;case 38:ie+W+J===0&&(Me=_n=1,ot="\f"+ot);break;case 108:if(ie+W+J+N===0&&0<De)switch(ce-De){case 2:Oe===112&&q.charCodeAt(ce-3)===58&&(N=Oe);case 8:Ne===111&&(N=Ne)}break;case 58:ie+W+J===0&&(De=ce);break;case 44:W+ee+ie+J===0&&(Me=1,ot+="\r");break;case 34:case 39:W===0&&(ie=ie===ne?0:ie===0?ne:ie);break;case 91:ie+W+ee===0&&J++;break;case 93:ie+W+ee===0&&J--;break;case 41:ie+W+J===0&&ee--;break;case 40:if(ie+W+J===0){if(se===0)switch(2*Oe+3*Ne){case 533:break;default:se=1}ee++}break;case 64:W+ee+ie+J+De+oe===0&&(oe=1);break;case 42:case 47:if(!(0<ie+J+ee))switch(W){case 0:switch(2*ne+3*q.charCodeAt(ce+1)){case 235:W=47;break;case 220:Pe=ce,W=42}break;case 42:ne===47&&Oe===42&&Pe+2!==ce&&(q.charCodeAt(Pe+2)===33&&(he+=q.substring(Pe,ce+1)),ot="",W=0)}}W===0&&(te+=ot)}Ne=Oe,Oe=ne,ce++}if(Pe=he.length,0<Pe){if(Me=b,0<T&&(jt=a(2,he,Me,H,$,A,Pe,F,L,F),jt!==void 0&&(he=jt).length===0))return zr+he+Qn;if(he=Me.join(",")+"{"+he+"}",I*N!==0){switch(I!==2||o(he,2)||(N=0),N){case 111:he=he.replace(x,":-moz-$1")+he;break;case 112:he=he.replace(g,"::-webkit-input-$1")+he.replace(g,"::-moz-$1")+he.replace(g,":-ms-input-$1")+he}N=0}}return zr+he+Qn}function n(H,b,q){var F=b.trim().split(k);b=F;var L=F.length,J=H.length;switch(J){case 0:case 1:var W=0;for(H=J===0?"":H[0]+" ";W<L;++W)b[W]=r(H,b[W],q).trim();break;default:var ee=W=0;for(b=[];W<L;++W)for(var ie=0;ie<J;++ie)b[ee++]=r(H[ie]+" ",F[W],q).trim()}return b}function r(H,b,q){var F=b.charCodeAt(0);switch(33>F&&(F=(b=b.trim()).charCodeAt(0)),F){case 38:return b.replace(m,"$1"+H.trim());case 58:return H.trim()+b.replace(m,"$1"+H.trim());default:if(0<1*q&&0<b.indexOf("\f"))return b.replace(m,(H.charCodeAt(0)===58?"":"$1")+H.trim())}return H+b}function i(H,b,q,F){var L=H+";",J=2*b+3*q+4*F;if(J===944){H=L.indexOf(":",9)+1;var W=L.substring(H,L.length-1).trim();return W=L.substring(0,H).trim()+W+";",I===1||I===2&&o(W,1)?"-webkit-"+W+W:W}if(I===0||I===2&&!o(L,1))return L;switch(J){case 1015:return L.charCodeAt(10)===97?"-webkit-"+L+L:L;case 951:return L.charCodeAt(3)===116?"-webkit-"+L+L:L;case 963:return L.charCodeAt(5)===110?"-webkit-"+L+L:L;case 1009:if(L.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+L+L;case 978:return"-webkit-"+L+"-moz-"+L+L;case 1019:case 983:return"-webkit-"+L+"-moz-"+L+"-ms-"+L+L;case 883:if(L.charCodeAt(8)===45)return"-webkit-"+L+L;if(0<L.indexOf("image-set(",11))return L.replace(z,"$1-webkit-$2")+L;break;case 932:if(L.charCodeAt(4)===45)switch(L.charCodeAt(5)){case 103:return"-webkit-box-"+L.replace("-grow","")+"-webkit-"+L+"-ms-"+L.replace("grow","positive")+L;case 115:return"-webkit-"+L+"-ms-"+L.replace("shrink","negative")+L;case 98:return"-webkit-"+L+"-ms-"+L.replace("basis","preferred-size")+L}return"-webkit-"+L+"-ms-"+L+L;case 964:return"-webkit-"+L+"-ms-flex-"+L+L;case 1023:if(L.charCodeAt(8)!==99)break;return W=L.substring(L.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+W+"-webkit-"+L+"-ms-flex-pack"+W+L;case 1005:return v.test(L)?L.replace(h,":-webkit-")+L.replace(h,":-moz-")+L:L;case 1e3:switch(W=L.substring(13).trim(),b=W.indexOf("-")+1,W.charCodeAt(0)+W.charCodeAt(b)){case 226:W=L.replace(O,"tb");break;case 232:W=L.replace(O,"tb-rl");break;case 220:W=L.replace(O,"lr");break;default:return L}return"-webkit-"+L+"-ms-"+W+L;case 1017:if(L.indexOf("sticky",9)===-1)break;case 975:switch(b=(L=H).length-10,W=(L.charCodeAt(b)===33?L.substring(0,b):L).substring(H.indexOf(":",7)+1).trim(),J=W.charCodeAt(0)+(W.charCodeAt(7)|0)){case 203:if(111>W.charCodeAt(8))break;case 115:L=L.replace(W,"-webkit-"+W)+";"+L;break;case 207:case 102:L=L.replace(W,"-webkit-"+(102<J?"inline-":"")+"box")+";"+L.replace(W,"-webkit-"+W)+";"+L.replace(W,"-ms-"+W+"box")+";"+L}return L+";";case 938:if(L.charCodeAt(5)===45)switch(L.charCodeAt(6)){case 105:return W=L.replace("-items",""),"-webkit-"+L+"-webkit-box-"+W+"-ms-flex-"+W+L;case 115:return"-webkit-"+L+"-ms-flex-item-"+L.replace(S,"")+L;default:return"-webkit-"+L+"-ms-flex-line-pack"+L.replace("align-content","").replace(S,"")+L}break;case 973:case 989:if(L.charCodeAt(3)!==45||L.charCodeAt(4)===122)break;case 931:case 953:if(j.test(H)===!0)return(W=H.substring(H.indexOf(":")+1)).charCodeAt(0)===115?i(H.replace("stretch","fill-available"),b,q,F).replace(":fill-available",":stretch"):L.replace(W,"-webkit-"+W)+L.replace(W,"-moz-"+W.replace("fill-",""))+L;break;case 962:if(L="-webkit-"+L+(L.charCodeAt(5)===102?"-ms-"+L:"")+L,q+F===211&&L.charCodeAt(13)===105&&0<L.indexOf("transform",10))return L.substring(0,L.indexOf(";",27)+1).replace(y,"$1-webkit-$2")+L}return L}function o(H,b){var q=H.indexOf(b===1?":":"{"),F=H.substring(0,b!==3?q:10);return q=H.substring(q+1,H.length-1),D(b!==2?F:F.replace(M,"$1"),q,b)}function l(H,b){var q=i(b,b.charCodeAt(0),b.charCodeAt(1),b.charCodeAt(2));return q!==b+";"?q.replace(E," or ($1)").substring(4):"("+b+")"}function a(H,b,q,F,L,J,W,ee,ie,se){for(var ne=0,Oe=b,Ne;ne<T;++ne)switch(Ne=R[ne].call(d,H,Oe,q,F,L,J,W,ee,ie,se)){case void 0:case!1:case!0:case null:break;default:Oe=Ne}if(Oe!==b)return Oe}function s(H){switch(H){case void 0:case null:T=R.length=0;break;default:if(typeof H=="function")R[T++]=H;else if(typeof H=="object")for(var b=0,q=H.length;b<q;++b)s(H[b]);else U=!!H|0}return s}function u(H){return H=H.prefix,H!==void 0&&(D=null,H?typeof H!="function"?I=1:(I=2,D=H):I=0),u}function d(H,b){var q=H;if(33>q.charCodeAt(0)&&(q=q.trim()),V=q,q=[V],0<T){var F=a(-1,b,q,q,$,A,0,0,0,0);F!==void 0&&typeof F=="string"&&(b=F)}var L=t(Y,q,b,0,0);return 0<T&&(F=a(-2,L,q,q,$,A,L.length,0,0,0),F!==void 0&&(L=F)),V="",N=0,A=$=1,L}var c=/^\0+/g,f=/[\0\r\f]/g,h=/: */g,v=/zoo|gra/,y=/([,: ])(transform)/g,k=/,\r+?/g,m=/([\t\r\n ])*\f?&/g,p=/@(k\w+)\s*(\S*)\s*/,g=/::(place)/g,x=/:(read-only)/g,O=/[svh]\w+-[tblr]{2}/,P=/\(\s*(.*)\s*\)/g,E=/([\s\S]*?);/g,S=/-self|flex-/g,M=/[^]*?(:[rp][el]a[\w-]+)[^]*/,j=/stretch|:\s*\w+\-(?:conte|avail)/,z=/([^-])(image-set\()/,A=1,$=1,N=0,I=1,Y=[],R=[],T=0,D=null,U=0,V="";return d.use=s,d.set=u,e!==void 0&&u(e),d}var K0={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function J0(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Z0=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,ef=J0(function(e){return Z0.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Pc=Ga.exports,ey={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ty={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ny={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},gm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Tc={};Tc[Pc.ForwardRef]=ny;Tc[Pc.Memo]=gm;function tf(e){return Pc.isMemo(e)?gm:Tc[e.$$typeof]||ey}var ry=Object.defineProperty,iy=Object.getOwnPropertyNames,nf=Object.getOwnPropertySymbols,oy=Object.getOwnPropertyDescriptor,ay=Object.getPrototypeOf,rf=Object.prototype;function ym(e,t,n){if(typeof t!="string"){if(rf){var r=ay(t);r&&r!==rf&&ym(e,r,n)}var i=iy(t);nf&&(i=i.concat(nf(t)));for(var o=tf(e),l=tf(t),a=0;a<i.length;++a){var s=i[a];if(!ty[s]&&!(n&&n[s])&&!(l&&l[s])&&!(o&&o[s])){var u=oy(t,s);try{ry(e,s,u)}catch{}}}}return e}var wm=ym;function Vt(){return(Vt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var of=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},ru=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Ga.exports.typeOf(e)},ma=Object.freeze([]),yn=Object.freeze({});function Ri(e){return typeof e=="function"}function af(e){return e.displayName||e.name||"Component"}function Lc(e){return e&&typeof e.styledComponentId=="string"}var br=typeof process<"u"&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",Mc=typeof window<"u"&&"HTMLElement"in window,ly=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""?process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY:!1);function Wi(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var sy=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,l=o;n>=l;)(l<<=1)<0&&Wi(16,""+n);this.groupSizes=new Uint32Array(l),this.groupSizes.set(i),this.length=l;for(var a=o;a<l;a++)this.groupSizes[a]=0}for(var s=this.indexOfGroup(n+1),u=0,d=r.length;u<d;u++)this.tag.insertRule(s,r[u])&&(this.groupSizes[n]++,s++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var l=i;l<o;l++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),l=o+i,a=o;a<l;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},e}(),Bo=new Map,va=new Map,di=1,ho=function(e){if(Bo.has(e))return Bo.get(e);for(;va.has(di);)di++;var t=di++;return Bo.set(e,t),va.set(t,e),t},uy=function(e){return va.get(e)},cy=function(e,t){t>=di&&(di=t+1),Bo.set(e,t),va.set(t,e)},dy="style["+br+'][data-styled-version="5.3.5"]',fy=new RegExp("^"+br+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),py=function(e,t,n){for(var r,i=n.split(","),o=0,l=i.length;o<l;o++)(r=i[o])&&e.registerName(t,r)},hy=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var l=n[i].trim();if(l){var a=l.match(fy);if(a){var s=0|parseInt(a[1],10),u=a[2];s!==0&&(cy(u,s),py(e,u,a[3]),e.getTag().insertRules(s,r)),r.length=0}else r.push(l)}}},my=function(){return typeof window<"u"&&window.__webpack_nonce__!==void 0?window.__webpack_nonce__:null},xm=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){for(var s=a.childNodes,u=s.length;u>=0;u--){var d=s[u];if(d&&d.nodeType===1&&d.hasAttribute(br))return d}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(br,"active"),r.setAttribute("data-styled-version","5.3.5");var l=my();return l&&r.setAttribute("nonce",l),n.insertBefore(r,o),r},vy=function(){function e(n){var r=this.element=xm(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,l=0,a=o.length;l<a;l++){var s=o[l];if(s.ownerNode===i)return s}Wi(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),gy=function(){function e(n){var r=this.element=xm(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),yy=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),lf=Mc,wy={isServer:!Mc,useCSSOMInjection:!ly},Sm=function(){function e(n,r,i){n===void 0&&(n=yn),r===void 0&&(r={}),this.options=Vt({},wy,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Mc&&lf&&(lf=!1,function(o){for(var l=document.querySelectorAll(dy),a=0,s=l.length;a<s;a++){var u=l[a];u&&u.getAttribute(br)!=="active"&&(hy(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return ho(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Vt({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,l=r.target,n=i?new yy(l):o?new vy(l):new gy(l),new sy(n)));var n,r,i,o,l},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(ho(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(ho(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(ho(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",l=0;l<i;l++){var a=uy(l);if(a!==void 0){var s=n.names.get(a),u=r.getGroup(l);if(s&&u&&s.size){var d=br+".g"+l+'[id="'+a+'"]',c="";s!==void 0&&s.forEach(function(f){f.length>0&&(c+=f+",")}),o+=""+u+d+'{content:"'+c+`"}/*!sc*/
`}}}return o}(this)},e}(),xy=/(a)(d)/gi,sf=function(e){return String.fromCharCode(e+(e>25?39:97))};function iu(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=sf(t%52)+n;return(sf(t%52)+n).replace(xy,"$1-$2")}var sr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},km=function(e){return sr(5381,e)};function Sy(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ri(n)&&!Lc(n))return!1}return!0}var ky=km("5.3.5"),Ey=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Sy(t),this.componentId=n,this.baseHash=sr(ky,n),this.baseStyle=r,Sm.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var l=_r(this.rules,t,n,r).join(""),a=iu(sr(this.baseHash,l)>>>0);if(!n.hasNameForId(i,a)){var s=r(l,"."+a,void 0,i);n.insertRules(i,a,s)}o.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,d=sr(this.baseHash,r.hash),c="",f=0;f<u;f++){var h=this.rules[f];if(typeof h=="string")c+=h;else if(h){var v=_r(h,t,n,r),y=Array.isArray(v)?v.join(""):v;d=sr(d,y+f),c+=y}}if(c){var k=iu(d>>>0);if(!n.hasNameForId(i,k)){var m=r(c,"."+k,void 0,i);n.insertRules(i,k,m)}o.push(k)}}return o.join(" ")},e}(),by=/^\s*\/\/.*$/gm,_y=[":","[",".","#"];function Cy(e){var t,n,r,i,o=e===void 0?yn:e,l=o.options,a=l===void 0?yn:l,s=o.plugins,u=s===void 0?ma:s,d=new X0(a),c=[],f=function(y){function k(m){if(m)try{y(m+"}")}catch{}}return function(m,p,g,x,O,P,E,S,M,j){switch(m){case 1:if(M===0&&p.charCodeAt(0)===64)return y(p+";"),"";break;case 2:if(S===0)return p+"/*|*/";break;case 3:switch(S){case 102:case 112:return y(g[0]+p),"";default:return p+(j===0?"/*|*/":"")}case-2:p.split("/*|*/}").forEach(k)}}}(function(y){c.push(y)}),h=function(y,k,m){return k===0&&_y.indexOf(m[n.length])!==-1||m.match(i)?y:"."+t};function v(y,k,m,p){p===void 0&&(p="&");var g=y.replace(by,""),x=k&&m?m+" "+k+" { "+g+" }":g;return t=p,n=k,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),d(m||!k?"":k,x)}return d.use([].concat(u,[function(y,k,m){y===2&&m.length&&m[0].lastIndexOf(n)>0&&(m[0]=m[0].replace(r,h))},f,function(y){if(y===-2){var k=c;return c=[],k}}])),v.hash=u.length?u.reduce(function(y,k){return k.name||Wi(15),sr(y,k.name)},5381).toString():"",v}var Em=Lr.createContext();Em.Consumer;var bm=Lr.createContext(),Oy=(bm.Consumer,new Sm),ou=Cy();function Py(){return K.exports.useContext(Em)||Oy}function Ty(){return K.exports.useContext(bm)||ou}var Ly=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=ou);var l=r.name+o.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,o(r.rules,l,"@keyframes"))},this.toString=function(){return Wi(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=ou),this.name+t.hash},e}(),My=/([A-Z])/,Ry=/([A-Z])/g,jy=/^ms-/,Dy=function(e){return"-"+e.toLowerCase()};function uf(e){return My.test(e)?e.replace(Ry,Dy).replace(jy,"-ms-"):e}var cf=function(e){return e==null||e===!1||e===""};function _r(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],l=0,a=e.length;l<a;l+=1)(i=_r(e[l],t,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(cf(e))return"";if(Lc(e))return"."+e.styledComponentId;if(Ri(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var s=e(t);return _r(s,t,n,r)}var u;return e instanceof Ly?n?(e.inject(n,r),e.getName(r)):e:ru(e)?function d(c,f){var h,v,y=[];for(var k in c)c.hasOwnProperty(k)&&!cf(c[k])&&(Array.isArray(c[k])&&c[k].isCss||Ri(c[k])?y.push(uf(k)+":",c[k],";"):ru(c[k])?y.push.apply(y,d(c[k],k)):y.push(uf(k)+": "+(h=k,(v=c[k])==null||typeof v=="boolean"||v===""?"":typeof v!="number"||v===0||h in K0?String(v).trim():v+"px")+";"));return f?[f+" {"].concat(y,["}"]):y}(e):e.toString()}var df=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function zy(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Ri(e)||ru(e)?df(_r(of(ma,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:df(_r(of(e,n)))}var $y=function(e,t,n){return n===void 0&&(n=yn),e.theme!==n.theme&&e.theme||t||n.theme},Ay=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ny=/(^-|-$)/g;function Bl(e){return e.replace(Ay,"-").replace(Ny,"")}var Iy=function(e){return iu(km(e)>>>0)};function mo(e){return typeof e=="string"&&!0}var au=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},Fy=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function Hy(e,t,n){var r=e[n];au(t)&&au(r)?_m(r,t):e[n]=t}function _m(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var l=o[i];if(au(l))for(var a in l)Fy(a)&&Hy(e,l[a],a)}return e}var Cm=Lr.createContext();Cm.Consumer;var Vl={};function Om(e,t,n){var r=Lc(e),i=!mo(e),o=t.attrs,l=o===void 0?ma:o,a=t.componentId,s=a===void 0?function(p,g){var x=typeof p!="string"?"sc":Bl(p);Vl[x]=(Vl[x]||0)+1;var O=x+"-"+Iy("5.3.5"+x+Vl[x]);return g?g+"-"+O:O}(t.displayName,t.parentComponentId):a,u=t.displayName,d=u===void 0?function(p){return mo(p)?"styled."+p:"Styled("+af(p)+")"}(e):u,c=t.displayName&&t.componentId?Bl(t.displayName)+"-"+t.componentId:t.componentId||s,f=r&&e.attrs?Array.prototype.concat(e.attrs,l).filter(Boolean):l,h=t.shouldForwardProp;r&&e.shouldForwardProp&&(h=t.shouldForwardProp?function(p,g,x){return e.shouldForwardProp(p,g,x)&&t.shouldForwardProp(p,g,x)}:e.shouldForwardProp);var v,y=new Ey(n,c,r?e.componentStyle:void 0),k=y.isStatic&&l.length===0,m=function(p,g){return function(x,O,P,E){var S=x.attrs,M=x.componentStyle,j=x.defaultProps,z=x.foldedComponentIds,A=x.shouldForwardProp,$=x.styledComponentId,N=x.target,I=function(F,L,J){F===void 0&&(F=yn);var W=Vt({},L,{theme:F}),ee={};return J.forEach(function(ie){var se,ne,Oe,Ne=ie;for(se in Ri(Ne)&&(Ne=Ne(W)),Ne)W[se]=ee[se]=se==="className"?(ne=ee[se],Oe=Ne[se],ne&&Oe?ne+" "+Oe:ne||Oe):Ne[se]}),[W,ee]}($y(O,K.exports.useContext(Cm),j)||yn,O,S),Y=I[0],R=I[1],T=function(F,L,J,W){var ee=Py(),ie=Ty(),se=L?F.generateAndInjectStyles(yn,ee,ie):F.generateAndInjectStyles(J,ee,ie);return se}(M,E,Y),D=P,U=R.$as||O.$as||R.as||O.as||N,V=mo(U),H=R!==O?Vt({},O,{},R):O,b={};for(var q in H)q[0]!=="$"&&q!=="as"&&(q==="forwardedAs"?b.as=H[q]:(A?A(q,ef,U):!V||ef(q))&&(b[q]=H[q]));return O.style&&R.style!==O.style&&(b.style=Vt({},O.style,{},R.style)),b.className=Array.prototype.concat(z,$,T!==$?T:null,O.className,R.className).filter(Boolean).join(" "),b.ref=D,K.exports.createElement(U,b)}(v,p,g,k)};return m.displayName=d,(v=Lr.forwardRef(m)).attrs=f,v.componentStyle=y,v.displayName=d,v.shouldForwardProp=h,v.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):ma,v.styledComponentId=c,v.target=r?e.target:e,v.withComponent=function(p){var g=t.componentId,x=function(P,E){if(P==null)return{};var S,M,j={},z=Object.keys(P);for(M=0;M<z.length;M++)S=z[M],E.indexOf(S)>=0||(j[S]=P[S]);return j}(t,["componentId"]),O=g&&g+"-"+(mo(p)?p:Bl(af(p)));return Om(p,Vt({},x,{attrs:f,componentId:O}),n)},Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(p){this._foldedDefaultProps=r?_m({},e.defaultProps,p):p}}),v.toString=function(){return"."+v.styledComponentId},i&&wm(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),v}var lu=function(e){return function t(n,r,i){if(i===void 0&&(i=yn),!Ga.exports.isValidElementType(r))return Wi(1,String(r));var o=function(){return n(r,i,zy.apply(void 0,arguments))};return o.withConfig=function(l){return t(n,r,Vt({},i,{},l))},o.attrs=function(l){return t(n,r,Vt({},i,{attrs:Array.prototype.concat(i.attrs,l).filter(Boolean)}))},o}(Om,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){lu[e]=lu(e)});const C=lu,_={mobile:"390px",largeMobile:"500px",tablet:"820px",notebook:"1024px",largeNotebook:"1440px",desktop:"1920px",largeDesktop:"2560px",extraLargeDesktop:"3840px"},Uy=C.div`
	margin: 0;   
`,Wy=C.a`
	
`,By=C.img`
    width: 250px;
	margin: 0;
	transition: 0.5s;
	overflow: hidden;

    &:hover{
	    transition: 0.5s;
        opacity: 0.7;
    }

    @media screen and (max-width: ${_.largeMobile}) {
	    width: 150px;
    }
    @media screen and (min-width: ${_.desktop}) {
	    width: 350px;
    }
    @media screen and (min-width: ${_.extraLargeDesktop}) {
	    width: 450px;
    }
`;var al={exports:{}},ll={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vy=K.exports,Qy=Symbol.for("react.element"),qy=Symbol.for("react.fragment"),Yy=Object.prototype.hasOwnProperty,Gy=Vy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Xy={key:!0,ref:!0,__self:!0,__source:!0};function Pm(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Yy.call(t,r)&&!Xy.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Qy,type:e,key:o,ref:l,props:i,_owner:Gy.current}}ll.Fragment=qy;ll.jsx=Pm;ll.jsxs=Pm;(function(e){e.exports=ll})(al);const Tm=al.exports.Fragment,w=al.exports.jsx,Q=al.exports.jsxs,ve=({image:e,altText:t,redirect:n})=>w(Uy,{children:w(Wy,{href:n,target:"_blank",rel:"noopener noreferrer",children:w(By,{src:e,alt:t})})}),Br="/Site-Serra/assets/voitto.e51ea618.svg",Vr="/Site-Serra/assets/iprj.03355e19.svg",Qr="/Site-Serra/assets/inovafri.c4b07fe0.svg",qr="/Site-Serra/assets/wiseup.d9d06fa3.svg",Yr="/Site-Serra/assets/ligajr.52feeabf.svg",Ky=C.div`
    background: #D9D9D9;
	-webkit-box-shadow: 0 0px 0px 0px rgba(0, 0, 0, 0.125);
	box-shadow: 0 0px 0px 0px rgba(0, 0, 0, 0.125);
	overflow: hidden;
	position: relative;
	width: 100%;

    &::before{
        content: "";
        height: 250px;
        position: absolute;
        width: 200px;
        z-index: 2;
        left: 0;
	    top: 0;
    }

    &::after{
        content: "";
        height: 250px;
        position: absolute;
        width: 200px;
        z-index: 2;
        right: 0;
        top: 0;
        -webkit-transform: rotateZ(180deg);
        transform: rotateZ(180deg);
    }
`,Jy=C.div`
    -webkit-animation: logo-scroll 60s linear infinite;
	animation: logo-scroll 60s linear infinite;
	display: flex;
	width: calc(250px * 14);
	animation-duration: 30s;
	animation-iteration-count: infinite;
	margin: 0;

    @-webkit-keyframes logo-scroll {
        0% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
        }

        100% {
            -webkit-transform: translateX(calc(-250px * 7));
            transform: translateX(calc(-250px * 7));
        }
    }

    @keyframes logo-scroll {
        0% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
        }

        100% {
            -webkit-transform: translateX(calc(-250px * 7));
            transform: translateX(calc(-250px * 7));
        }
    }
`;function Zy(){return w(Ky,{children:Q(Jy,{children:[w(ve,{image:Br,altText:"Voitto",redirect:"https://www.voitto.com.br"}),w(ve,{image:Vr,altText:"IPRJ",redirect:"http://www.iprj.uerj.br/"}),w(ve,{image:Qr,altText:"Inova Fri",redirect:"https://inovafri.com.br/"}),w(ve,{image:qr,altText:"WiseUp",redirect:"https://wiseup.com/"}),w(ve,{image:Yr,altText:"Liga J\xFAnior",redirect:"https://www.instagram.com/ligajuniornf/"}),w(ve,{image:Br,altText:"Voitto",redirect:"https://www.voitto.com.br"}),w(ve,{image:Vr,altText:"IPRJ",redirect:"http://www.iprj.uerj.br/"}),w(ve,{image:Qr,altText:"Inova Fri",redirect:"https://inovafri.com.br/"}),w(ve,{image:qr,altText:"WiseUp",redirect:"https://wiseup.com/"}),w(ve,{image:Yr,altText:"Liga J\xFAnior",redirect:"https://www.instagram.com/ligajuniornf/"}),w(ve,{image:Br,altText:"Voitto",redirect:"https://www.voitto.com.br"}),w(ve,{image:Vr,altText:"IPRJ",redirect:"http://www.iprj.uerj.br/"}),w(ve,{image:Qr,altText:"Inova Fri",redirect:"https://inovafri.com.br/"}),w(ve,{image:qr,altText:"WiseUp",redirect:"https://wiseup.com/"}),w(ve,{image:Yr,altText:"Liga J\xFAnior",redirect:"https://www.instagram.com/ligajuniornf/"}),w(ve,{image:Br,altText:"Voitto",redirect:"https://www.voitto.com.br"}),w(ve,{image:Vr,altText:"IPRJ",redirect:"http://www.iprj.uerj.br/"}),w(ve,{image:Qr,altText:"Inova Fri",redirect:"https://inovafri.com.br/"}),w(ve,{image:qr,altText:"WiseUp",redirect:"https://wiseup.com/"}),w(ve,{image:Yr,altText:"Liga J\xFAnior",redirect:"https://www.instagram.com/ligajuniornf/"}),w(ve,{image:Br,altText:"Voitto",redirect:"https://www.voitto.com.br"}),w(ve,{image:Vr,altText:"IPRJ",redirect:"http://www.iprj.uerj.br/"}),w(ve,{image:Qr,altText:"Inova Fri",redirect:"https://inovafri.com.br/"}),w(ve,{image:qr,altText:"WiseUp",redirect:"https://wiseup.com/"}),w(ve,{image:Yr,altText:"Liga J\xFAnior",redirect:"https://www.instagram.com/ligajuniornf/"})]})})}const e1=C.footer`
    width: 100%;
    background-color: #001830;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-bottom: 1%;
`,t1=C.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin-top: 3%;
`,Ql=C.div`
    margin-left: 2rem;
    width: 100%;
    @media screen and (min-width: ${_.mobile}){
        flex-direction: column;
    }
`,ql=C.span`
    color: white;
    font-weight: 500;
`,vo=C.p`
    color: rgb(180, 180, 180);
`,n1=C.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: ${_.mobile}) {
        flex-direction: column;
        padding-top: 10%;
    }

    @media screen and (max-width: ${_.largeMobile}) {
        flex-direction: column;
    }

    @media screen and (min-width: ${_.largeDesktop}){
        width: 50%;
    }

`,Yl=C.img`
    width: 1.4rem;
    margin-right: 0.8rem;
    
    @media screen and (max-width: ${_.mobile}) {
        margin-top: 30%;
    }
    @media screen and (min-width: ${_.desktop}) {
        width: 3rem;
    }
    @media screen and (min-width: ${_.extraLargeDesktop}) {
        width: 3.5rem;
    }
`,Gl=C.a`
    text-decoration: none;

`,r1=C.div`
    width: 40%;
    padding: 2rem 2rem 2rem 0;

    @media screen and (max-width: ${_.mobile}) {
        flex-wrap: wrap;
        width: 20%;
    }
`,i1=C.div`
    width: 90vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: ${_.desktop}) {
        font-size: 2em;
    }
    @media screen and (min-width: ${_.extraLargeDesktop}) {
        font-size: 3em;
    }
`,o1=C.hr`
    width: 90%;
`,a1=C.div`
    color: rgb(180, 180, 180);
    width: 90%;
    display: flex;
    justify-content: space-between;
`,l1=C.span`
    height: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: 600;
    font-size: 1.3rem;
    color: #535353;

    @media screen and (min-width: ${_.desktop}) {
        font-size: 2em;
    }
    @media screen and (min-width: ${_.extraLargeDesktop}) {
        font-size: 3em;
    }
`,s1=C.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
`;C.a`
    height: 90%;

    &:hover{
        opacity: 0.8;
    }
`;C.img`
    height: 20vh;

    @media screen and (max-width: ${_.notebook}){
        height: 10vh;
        
    }
    
`;const u1=C.div`
    width: 100%;
    background-color: #D9D9D9;
    display: flex;
    align-items: center;
    flex-direction: column;
`,c1="/Site-Serra/assets/facebook.e9ec1758.svg",d1="/Site-Serra/assets/instagram.a8d6cb3d.svg",f1="/Site-Serra/assets/linkedin.3daaec60.svg",p1=()=>Q(e1,{children:[Q(u1,{children:[w(l1,{children:"Parceiros"}),w(s1,{children:w(Zy,{})})]}),Q(i1,{children:[Q(t1,{children:[Q(r1,{children:[Q(Gl,{href:"https://pt-br.facebook.com/pg/serrajreng/posts/",target:"_blank",children:[" ",w(Yl,{src:c1,alt:"Facebook Serra.Jr"})]}),Q(Gl,{href:"https://www.instagram.com/serrajreng/",target:"_blank",children:[" ",w(Yl,{src:d1,alt:"Instagram Serra.Jr"})]}),Q(Gl,{href:"https://www.linkedin.com/company/serrajreng/?originalSubdomain=br",target:"_blank",children:[" ",w(Yl,{src:f1,alt:""})," "]})]}),Q(n1,{children:[Q(Ql,{children:[w(ql,{children:"Institucional"}),w(vo,{children:"Serra Jr Engenharia"})]}),Q(Ql,{children:[w(ql,{children:"Atendimento"}),w(vo,{children:"Segunda a sexta"}),w(vo,{children:"9h \xE0s 19h"})]}),Q(Ql,{children:[w(ql,{children:"Contato"}),w(vo,{children:"serrajr@iprj.uerj.br "})]})]})]}),w(o1,{}),Q(a1,{children:[w("span",{children:"\xA9 Serra Jr. Engenharia 2022"}),w("span",{children:"Todos os direitos reservados"})]})]})]}),h1="/Site-Serra/assets/LogoSiteSerraJr.3ee0f8b0.svg",m1="/Site-Serra/assets/arrow-header.98a9eade.svg";function ga(){return ga=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ga.apply(this,arguments)}var Rn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Rn||(Rn={}));var ff=function(e){return e},pf="beforeunload",v1="popstate";function g1(e){e===void 0&&(e={});var t=e,n=t.window,r=n===void 0?document.defaultView:n,i=r.history;function o(){var E=r.location,S=E.pathname,M=E.search,j=E.hash,z=i.state||{};return[z.idx,ff({pathname:S,search:M,hash:j,state:z.usr||null,key:z.key||"default"})]}var l=null;function a(){if(l)h.call(l),l=null;else{var E=Rn.Pop,S=o(),M=S[0],j=S[1];if(h.length){if(M!=null){var z=d-M;z&&(l={action:E,location:j,retry:function(){O(z*-1)}},O(z))}}else p(E)}}r.addEventListener(v1,a);var s=Rn.Pop,u=o(),d=u[0],c=u[1],f=mf(),h=mf();d==null&&(d=0,i.replaceState(ga({},i.state,{idx:d}),""));function v(E){return typeof E=="string"?E:su(E)}function y(E,S){return S===void 0&&(S=null),ff(ga({pathname:c.pathname,hash:"",search:""},typeof E=="string"?Vn(E):E,{state:S,key:y1()}))}function k(E,S){return[{usr:E.state,key:E.key,idx:S},v(E)]}function m(E,S,M){return!h.length||(h.call({action:E,location:S,retry:M}),!1)}function p(E){s=E;var S=o();d=S[0],c=S[1],f.call({action:s,location:c})}function g(E,S){var M=Rn.Push,j=y(E,S);function z(){g(E,S)}if(m(M,j,z)){var A=k(j,d+1),$=A[0],N=A[1];try{i.pushState($,"",N)}catch{r.location.assign(N)}p(M)}}function x(E,S){var M=Rn.Replace,j=y(E,S);function z(){x(E,S)}if(m(M,j,z)){var A=k(j,d),$=A[0],N=A[1];i.replaceState($,"",N),p(M)}}function O(E){i.go(E)}var P={get action(){return s},get location(){return c},createHref:v,push:g,replace:x,go:O,back:function(){O(-1)},forward:function(){O(1)},listen:function(S){return f.push(S)},block:function(S){var M=h.push(S);return h.length===1&&r.addEventListener(pf,hf),function(){M(),h.length||r.removeEventListener(pf,hf)}}};return P}function hf(e){e.preventDefault(),e.returnValue=""}function mf(){var e=[];return{get length(){return e.length},push:function(n){return e.push(n),function(){e=e.filter(function(r){return r!==n})}},call:function(n){e.forEach(function(r){return r&&r(n)})}}}function y1(){return Math.random().toString(36).substr(2,8)}function su(e){var t=e.pathname,n=t===void 0?"/":t,r=e.search,i=r===void 0?"":r,o=e.hash,l=o===void 0?"":o;return i&&i!=="?"&&(n+=i.charAt(0)==="?"?i:"?"+i),l&&l!=="#"&&(n+=l.charAt(0)==="#"?l:"#"+l),n}function Vn(e){var t={};if(e){var n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));var r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Rc=K.exports.createContext(null),jc=K.exports.createContext(null),sl=K.exports.createContext({outlet:null,matches:[]});function It(e,t){if(!e)throw new Error(t)}function w1(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Vn(t):t,i=Rm(r.pathname||"/",n);if(i==null)return null;let o=Lm(e);x1(o);let l=null;for(let a=0;l==null&&a<o.length;++a)l=T1(o[a],i);return l}function Lm(e,t,n,r){return t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r=""),e.forEach((i,o)=>{let l={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};l.relativePath.startsWith("/")&&(l.relativePath.startsWith(r)||It(!1),l.relativePath=l.relativePath.slice(r.length));let a=wn([r,l.relativePath]),s=n.concat(l);i.children&&i.children.length>0&&(i.index===!0&&It(!1),Lm(i.children,t,s,a)),!(i.path==null&&!i.index)&&t.push({path:a,score:O1(a,i.index),routesMeta:s})}),t}function x1(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:P1(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const S1=/^:\w+$/,k1=3,E1=2,b1=1,_1=10,C1=-2,vf=e=>e==="*";function O1(e,t){let n=e.split("/"),r=n.length;return n.some(vf)&&(r+=C1),t&&(r+=E1),n.filter(i=>!vf(i)).reduce((i,o)=>i+(S1.test(o)?k1:o===""?b1:_1),r)}function P1(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function T1(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let l=0;l<n.length;++l){let a=n[l],s=l===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",d=L1({path:a.relativePath,caseSensitive:a.caseSensitive,end:s},u);if(!d)return null;Object.assign(r,d.params);let c=a.route;o.push({params:r,pathname:wn([i,d.pathname]),pathnameBase:jm(wn([i,d.pathnameBase])),route:c}),d.pathnameBase!=="/"&&(i=wn([i,d.pathnameBase]))}return o}function L1(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=M1(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,c)=>{if(d==="*"){let f=a[c]||"";l=o.slice(0,o.length-f.length).replace(/(.)\/+$/,"$1")}return u[d]=R1(a[c]||""),u},{}),pathname:o,pathnameBase:l,pattern:e}}function M1(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0);let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(l,a)=>(r.push(a),"([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i+=n?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(i,t?void 0:"i"),r]}function R1(e,t){try{return decodeURIComponent(e)}catch{return e}}function j1(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Vn(e):e;return{pathname:n?n.startsWith("/")?n:D1(n,t):t,search:$1(r),hash:A1(i)}}function D1(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Mm(e,t,n){let r=typeof e=="string"?Vn(e):e,i=e===""||r.pathname===""?"/":r.pathname,o;if(i==null)o=n;else{let a=t.length-1;if(i.startsWith("..")){let s=i.split("/");for(;s[0]==="..";)s.shift(),a-=1;r.pathname=s.join("/")}o=a>=0?t[a]:"/"}let l=j1(r,o);return i&&i!=="/"&&i.endsWith("/")&&!l.pathname.endsWith("/")&&(l.pathname+="/"),l}function z1(e){return e===""||e.pathname===""?"/":typeof e=="string"?Vn(e).pathname:e.pathname}function Rm(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=e.charAt(t.length);return n&&n!=="/"?null:e.slice(t.length)||"/"}const wn=e=>e.join("/").replace(/\/\/+/g,"/"),jm=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),$1=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,A1=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function N1(e){Bi()||It(!1);let{basename:t,navigator:n}=K.exports.useContext(Rc),{hash:r,pathname:i,search:o}=Dm(e),l=i;if(t!=="/"){let a=z1(e),s=a!=null&&a.endsWith("/");l=i==="/"?t+(s?"/":""):wn([t,i])}return n.createHref({pathname:l,search:o,hash:r})}function Bi(){return K.exports.useContext(jc)!=null}function ul(){return Bi()||It(!1),K.exports.useContext(jc).location}function Dc(){Bi()||It(!1);let{basename:e,navigator:t}=K.exports.useContext(Rc),{matches:n}=K.exports.useContext(sl),{pathname:r}=ul(),i=JSON.stringify(n.map(a=>a.pathnameBase)),o=K.exports.useRef(!1);return K.exports.useEffect(()=>{o.current=!0}),K.exports.useCallback(function(a,s){if(s===void 0&&(s={}),!o.current)return;if(typeof a=="number"){t.go(a);return}let u=Mm(a,JSON.parse(i),r);e!=="/"&&(u.pathname=wn([e,u.pathname])),(s.replace?t.replace:t.push)(u,s.state)},[e,t,i,r])}function Dm(e){let{matches:t}=K.exports.useContext(sl),{pathname:n}=ul(),r=JSON.stringify(t.map(i=>i.pathnameBase));return K.exports.useMemo(()=>Mm(e,JSON.parse(r),n),[e,r,n])}function I1(e,t){Bi()||It(!1);let{matches:n}=K.exports.useContext(sl),r=n[n.length-1],i=r?r.params:{};r&&r.pathname;let o=r?r.pathnameBase:"/";r&&r.route;let l=ul(),a;if(t){var s;let f=typeof t=="string"?Vn(t):t;o==="/"||((s=f.pathname)==null?void 0:s.startsWith(o))||It(!1),a=f}else a=l;let u=a.pathname||"/",d=o==="/"?u:u.slice(o.length)||"/",c=w1(e,{pathname:d});return F1(c&&c.map(f=>Object.assign({},f,{params:Object.assign({},i,f.params),pathname:wn([o,f.pathname]),pathnameBase:f.pathnameBase==="/"?o:wn([o,f.pathnameBase])})),n)}function F1(e,t){return t===void 0&&(t=[]),e==null?null:e.reduceRight((n,r,i)=>K.exports.createElement(sl.Provider,{children:r.route.element!==void 0?r.route.element:n,value:{outlet:n,matches:t.concat(e.slice(0,i+1))}}),null)}function Gn(e){It(!1)}function H1(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Rn.Pop,navigator:o,static:l=!1}=e;Bi()&&It(!1);let a=jm(t),s=K.exports.useMemo(()=>({basename:a,navigator:o,static:l}),[a,o,l]);typeof r=="string"&&(r=Vn(r));let{pathname:u="/",search:d="",hash:c="",state:f=null,key:h="default"}=r,v=K.exports.useMemo(()=>{let y=Rm(u,a);return y==null?null:{pathname:y,search:d,hash:c,state:f,key:h}},[a,u,d,c,f,h]);return v==null?null:K.exports.createElement(Rc.Provider,{value:s},K.exports.createElement(jc.Provider,{children:n,value:{location:v,navigationType:i}}))}function U1(e){let{children:t,location:n}=e;return I1(uu(t),n)}function uu(e){let t=[];return K.exports.Children.forEach(e,n=>{if(!K.exports.isValidElement(n))return;if(n.type===K.exports.Fragment){t.push.apply(t,uu(n.props.children));return}n.type!==Gn&&It(!1);let r={caseSensitive:n.props.caseSensitive,element:n.props.element,index:n.props.index,path:n.props.path};n.props.children&&(r.children=uu(n.props.children)),t.push(r)}),t}/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function cu(){return cu=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},cu.apply(this,arguments)}function W1(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}const B1=["onClick","reloadDocument","replace","state","target","to"];function V1(e){let{basename:t,children:n,window:r}=e,i=K.exports.useRef();i.current==null&&(i.current=g1({window:r}));let o=i.current,[l,a]=K.exports.useState({action:o.action,location:o.location});return K.exports.useLayoutEffect(()=>o.listen(a),[o]),K.exports.createElement(H1,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:o})}function Q1(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}const Ct=K.exports.forwardRef(function(t,n){let{onClick:r,reloadDocument:i,replace:o=!1,state:l,target:a,to:s}=t,u=W1(t,B1),d=N1(s),c=q1(s,{replace:o,state:l,target:a});function f(h){r&&r(h),!h.defaultPrevented&&!i&&c(h)}return K.exports.createElement("a",cu({},u,{href:d,onClick:f,ref:n,target:a}))});function q1(e,t){let{target:n,replace:r,state:i}=t===void 0?{}:t,o=Dc(),l=ul(),a=Dm(e);return K.exports.useCallback(s=>{if(s.button===0&&(!n||n==="_self")&&!Q1(s)){s.preventDefault();let u=!!r||su(l)===su(a);o(e,{replace:u,state:i})}},[l,o,a,r,i,n,e])}const Y1=C.ul`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    /* background-color: red; */
    @media screen and (min-width: ${_.extraLargeDesktop}){
        width: 50%;
        height: 50%;
    }
`,G1=C.p`
    color: #fff;
    font-size: 1.4rem;

    @media screen and (min-width: ${_.largeDesktop}){
        font-size: 2.3rem;    
    }
    @media screen and (min-width: ${_.extraLargeDesktop}){
        font-size: 3.3rem;    
    }
`,X1=C.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: visible;
    cursor: pointer;
    
`,K1=C.img`
    margin-top: 10px;
    margin-left: 2px;
    ${({activeStyle:e})=>e?`transform: rotate(-180deg);
        transition: 0.5s;`:`transform: rotate(0deg);
        transition: 0.5s;`}
    @media screen and (min-width: ${_.extraLargeDesktop}){
        width: 1vw;
    }
`,J1=C.div`
    display: flex;
    justify-content: center;
    align-items: center;
`,Z1=C.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #999999;
    top: 17vh;
    width: 20vw;
    border-radius: 0px 0px 20px 20px;
    
    ${({activeStyle:e})=>e?`opacity: 0.9;
        visibility: visible;
        transition: opacity 0.5s;`:`opacity: 0;
        visibility: hidden;
        transition: opacity 0.5s;`}
    
    @media screen and (min-width: ${_.largeDesktop}){
        top: 10vh;
        
    }
    @media screen and (min-width: ${_.extraLargeDesktop}){
        top: 13vh;
        
    }

    @media screen and (min-width: ${_.largeNotebook}){
        width: 10vw;
    }

    @media screen and (min-width: ${_.largeDesktop}){
        width: 15vw;
    }
`;C.div`
    width: 95%;
    height: 0.4px;
    background-color: #fff;
`;const gf=C.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 10px;
    padding-top: 10px;
    width: 100%;

    &:hover{
        opacity: 0.7;
    }
`,go=C.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    margin-left: 2rem;  
    text-decoration: none;
    list-style: none;

    a{
        text-decoration: none;
        color: white;
        list-style: none;
        
        @media screen and (min-width: ${_.largeDesktop}){
            font-size: 2.3rem;    
        }
        @media screen and (min-width: ${_.extraLargeDesktop}){
            font-size: 3.3rem;    
        }
    }
    
    @media screen and (min-width: ${_.extraLargeDesktop}) {
        width: 100%;
        height: 100%;
        font-size: 2.5rem;
    }
`,ew=C.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    margin-right: 10%;
    margin-top: 0%;

    @media screen and (max-width: ${_.notebook}){
        display: none;
    }
`,tw=()=>{const[e,t]=K.exports.useState(!1);return w(ew,{children:Q(Y1,{children:[w(go,{children:w(Ct,{to:"/",children:"Home"})}),w(go,{children:w(Ct,{to:"/quemSomos",children:"Sobre N\xF3s"})}),w(go,{children:Q(X1,{onClick:()=>t(!e),children:[Q(J1,{children:[w(G1,{children:"Servi\xE7os"}),w(K1,{activeStyle:e,src:m1,alt:"Seta"})]}),Q(Z1,{activeStyle:e,children:[w(gf,{children:w(Ct,{to:"/computacao",children:"Computa\xE7\xE3o"})}),w(gf,{children:w(Ct,{to:"/mecanica",children:"Mec\xE2nica"})})]})]})}),w(go,{children:w(Ct,{to:"/contatos",children:"Contato"})})]})})},Gr=C.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    text-decoration: none;
    list-style: none;
    padding-bottom: 10px;
    padding-top: 10px;
    width: 100%;

    &:hover{
        opacity: 0.7;
    }

    a{
        text-decoration: none;
        color: white;
        list-style: none;
        opacity: 1;
    }

    @media screen and (min-width: ${_.extraLargeDesktop}) {
        width: 100%;
        height: 100%;
        font-size: 2.5rem;
    }
`,nw=C.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #999999;
    border-radius: 0px 0px 20px 20px;
    position: absolute;
    top: 17vh;
    right: 0;
    width: 40vw;
    margin-right: 10px;
    color: #fff;

    ${({activeStyle:e})=>e?`opacity: 0.9;
        visibility: visible;
        transition: opacity 0.5s;`:`opacity: 0;
        visibility: hidden;
        transition: opacity 0.5s;`}

    @media screen and (min-width: ${_.notebook}){
        visibility: hidden;
    }   
`,rw=({status:e,toogle:t})=>Q(nw,{activeStyle:e,children:[w(Gr,{children:w(Ct,{onClick:()=>t(!e),to:"/",children:"Home"})}),w(Gr,{children:w(Ct,{onClick:()=>t(!e),to:"/quemSomos",children:"Sobre N\xF3s"})}),w(Gr,{children:w(Ct,{onClick:()=>t(!e),to:"/computacao",children:"Computa\xE7\xE3o"})}),w(Gr,{children:w(Ct,{onClick:()=>t(!e),to:"/mecanica",children:"Mec\xE2nica"})}),w(Gr,{children:w(Ct,{onClick:()=>t(!e),to:"/contatos",children:"Contatos"})})]}),Xl=C.div`
    height: 3px;
    background-color: #fff;
    width: 30px;
    margin: 3px;

    ${({active:e,type:t})=>e&&t==="first-line"?`transform: rotate(45deg);
        position: absolute;`:e&&t==="mid-line"?"display: none;":e&&t==="last-line"?`transform: rotate(-45deg);
        position: absolute;`:null}

    transition: 0.2s;
`,iw=C.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background: transparent;
    border: none;
    display: none;
    transition: 0.3s;

    &:hover{
        opacity: 0.6;
        cursor: pointer;
    }
    @media screen and (max-width: ${_.notebook}){
        display: flex;
        margin-right: 20px;
    }
`,ow=({status:e})=>(console.log(e),Q(iw,{children:[w(Xl,{active:e,type:"first-line"}),w(Xl,{active:e,type:"mid-line"}),w(Xl,{active:e,type:"last-line"})]})),aw=C.img`
    width: 12rem;
    margin-left: 25%;

    @media screen and (max-width: ${_.mobile}){
        width: 6rem;
    }

    @media screen and (min-width: ${_.largeDesktop}){
        width: 20rem;
        margin-left: 50%;
    }

    @media screen and (min-width: ${_.extraLargeDesktop}){
        width: 30rem;
        margin-left: 60%;
    }
    
`,lw=C.div`
    width: 100%;
    height: 17vh;
    background-color: #001830;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: ${_.notebook}){
        justify-content: space-between;
        align-items: center;
    }
    @media screen and (min-width: ${_.largeDesktop}){
        height: 10vh;
        
    }
    @media screen and (min-width: ${_.extraLargeDesktop}){
        height: 13vh;
    }
`,sw=C.div`
    margin-right: 7%;
`,uw=()=>{const[e,t]=K.exports.useState(!1);return Q(lw,{children:[w(Ct,{to:"/",children:w(aw,{src:h1,alt:"Logo Serra Jr"})}),w(sw,{onClick:()=>{t(!e)},children:w(ow,{status:e})}),w(tw,{}),w(rw,{status:e,toogle:t})]})},cw=C.img`
    height: 15vh;

    @media screen and (max-width: ${_.notebook}) {
        height: 10vh;
    }
`,dw=C.p`
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 30px;
    min-height: 90px;
    margin-bottom: 0;
    width: 200px;
    text-align: center;
    color: #000000;

    @media screen and (min-width: ${_.largeDesktop}) {
        line-height: 50px;
        font-size: 40px;
        width: 400px;
    }

    @media screen and (min-width: ${_.extraLargeDesktop}) {
        line-height: 60px;
        font-size: 60px;
        width: 500px;
    }
`,fw=C.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 10px;
    margin-top: 50px;
    margin-bottom: 50px;

    @media screen  and (max-width: ${_.tablet}){
        margin-top: 30px;
        margin-bottom: 0;
    }
`,pw=({icon:e,text:t,alt:n})=>Q(fw,{children:[w(cw,{src:e,alt:n}),w(dw,{children:t})]}),hw=C.div`
    border-bottom-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
    background-color: #EDEDED;
    height: 100%;
    width: 100%;
    -webkit-box-shadow: 7px 7px 16px -3px #000000; 
    box-shadow: 7px 7px 16px -3px #000000;

    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`,mw=C.p`
    margin: 0;
    width: 100%;
    height: 4rem;
    min-height: 30px;
    background-color:${({titleColor:e})=>e!=null?e:"#FD6300"};
    border-top-right-radius: 1rem;
    border-top-left-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 1.6rem;
    font-weight: 600;
    text-align: center;

    @media screen and (min-width: ${_.largeDesktop}) {
        font-size: 60px;
        height: 8rem;
    }
`,vw=C.a`
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;

    @media screen and (min-width: ${_.notebook}){
        width: 40%;
    }
`,gw=C.button`
    background-color: ${({buttonColor:e})=>e!=null?e:"#FD6300"};
    border: none;
    width: 100%;
    padding: 0.6rem;
    font-size: 1.5rem;
    font-weight: 500;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    cursor: pointer;
    margin-bottom: 30px;

    &:hover{
        opacity: 0.8;
        box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.2);
    }

    @media screen and (min-width: ${_.largeDesktop}) {
        font-size: 60px;
        width: 60%;
    }
`,yw=C.div`
    background-color: #EDEDED;
    height: 100%;
    width: 100%;
    
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;

`,ww=C.div`
    width: 100%;
    height: 100%;
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
`,yf=({title:e,buttonUrl:t,buttonTitle:n,color:r,images:i,texts:o})=>Q(ww,{children:[w(mw,{titleColor:r,children:e}),Q(hw,{children:[w(yw,{children:i.map((l,a)=>w(pw,{icon:l,text:o[a],alt:o[a]},a))}),w(vw,{href:t,children:w(gw,{buttonColor:r,children:n})})]})]}),xw=C.p`
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    text-align: center;
    color: #001830;
    margin-bottom: 10px;

    @media screen and (max-width: ${_.tablet}) {
        font-size: 30px;
    }
    
    @media screen and (min-width: ${_.largeMobile}) {
        font-size: 40px;
    }

    @media screen and (min-width: ${_.notebook}) {
        font-size: 38px;
        width: 80%;
    }

    @media screen and (min-width: ${_.largeDesktop}) {
        font-size: 60px;
    }

    @media screen and (min-width: ${_.extraLargeDesktop}) {
        font-size: 100px;
    }
`,Sw=C.hr`
    margin: 0px;
    border: 0px;
    height: 10px;
    width: 80%;
    background: linear-gradient(90deg, rgba(4,173,215,1) 0%, rgba(4,173,215,1) 41%, rgba(255,116,0,1) 69%);

    @media screen and (max-width: ${_.tablet}) {
        height: 7px;
    }
    @media screen and (max-width: ${_.notebook}) {
        width: 60%;
    }
`,kw=C.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
`,Ew=C.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,zc=({text:e,fontSize:t,titleWidth:n})=>w(kw,{children:Q(Ew,{children:[w(xw,{style:{fontSize:t},children:e}),w(Sw,{gradientWidth:n})]})});var zm={},$m={},cl={},Am={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0},n=t;e.default=n})(Am);var bw="Expected a function",wf=0/0,_w="[object Symbol]",Cw=/^\s+|\s+$/g,Ow=/^[-+]0x[0-9a-f]+$/i,Pw=/^0b[01]+$/i,Tw=/^0o[0-7]+$/i,Lw=parseInt,Mw=typeof Kr=="object"&&Kr&&Kr.Object===Object&&Kr,Rw=typeof self=="object"&&self&&self.Object===Object&&self,jw=Mw||Rw||Function("return this")(),Dw=Object.prototype,zw=Dw.toString,$w=Math.max,Aw=Math.min,Kl=function(){return jw.Date.now()};function Nw(e,t,n){var r,i,o,l,a,s,u=0,d=!1,c=!1,f=!0;if(typeof e!="function")throw new TypeError(bw);t=xf(t)||0,du(n)&&(d=!!n.leading,c="maxWait"in n,o=c?$w(xf(n.maxWait)||0,t):o,f="trailing"in n?!!n.trailing:f);function h(P){var E=r,S=i;return r=i=void 0,u=P,l=e.apply(S,E),l}function v(P){return u=P,a=setTimeout(m,t),d?h(P):l}function y(P){var E=P-s,S=P-u,M=t-E;return c?Aw(M,o-S):M}function k(P){var E=P-s,S=P-u;return s===void 0||E>=t||E<0||c&&S>=o}function m(){var P=Kl();if(k(P))return p(P);a=setTimeout(m,y(P))}function p(P){return a=void 0,f&&r?h(P):(r=i=void 0,l)}function g(){a!==void 0&&clearTimeout(a),u=0,r=s=i=a=void 0}function x(){return a===void 0?l:p(Kl())}function O(){var P=Kl(),E=k(P);if(r=arguments,i=this,s=P,E){if(a===void 0)return v(s);if(c)return a=setTimeout(m,t),h(s)}return a===void 0&&(a=setTimeout(m,t)),l}return O.cancel=g,O.flush=x,O}function du(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function Iw(e){return!!e&&typeof e=="object"}function Fw(e){return typeof e=="symbol"||Iw(e)&&zw.call(e)==_w}function xf(e){if(typeof e=="number")return e;if(Fw(e))return wf;if(du(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=du(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(Cw,"");var n=Pw.test(e);return n||Tw.test(e)?Lw(e.slice(2),n?2:8):Ow.test(e)?wf:+e}var Hw=Nw,Vi={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var r=[],i=0;i<arguments.length;i++){var o=arguments[i];if(!!o){var l=typeof o;if(l==="string"||l==="number")r.push(o);else if(Array.isArray(o)){if(o.length){var a=n.apply(null,o);a&&r.push(a)}}else if(l==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){r.push(o.toString());continue}for(var s in o)t.call(o,s)&&o[s]&&r.push(s)}}}return r.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(Vi);var G={};Object.defineProperty(G,"__esModule",{value:!0});G.checkSpecKeys=G.checkNavigable=G.changeSlide=G.canUseDOM=G.canGoNext=void 0;G.clamp=Nm;G.swipeStart=G.swipeMove=G.swipeEnd=G.slidesOnRight=G.slidesOnLeft=G.slideHandler=G.siblingDirection=G.safePreventDefault=G.lazyStartIndex=G.lazySlidesOnRight=G.lazySlidesOnLeft=G.lazyEndIndex=G.keyHandler=G.initializedState=G.getWidth=G.getTrackLeft=G.getTrackCSS=G.getTrackAnimateCSS=G.getTotalSlides=G.getSwipeDirection=G.getSlideCount=G.getRequiredLazySlides=G.getPreClones=G.getPostClones=G.getOnDemandLazySlides=G.getNavigableIndexes=G.getHeight=G.extractObject=void 0;var Uw=Ww(K.exports);function Ww(e){return e&&e.__esModule?e:{default:e}}function Sf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function we(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Sf(Object(n),!0).forEach(function(r){Bw(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Sf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Bw(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Nm(e,t,n){return Math.max(t,Math.min(e,n))}var zn=function(t){var n=["onTouchStart","onTouchMove","onWheel"];n.includes(t._reactName)||t.preventDefault()};G.safePreventDefault=zn;var $c=function(t){for(var n=[],r=Ac(t),i=Nc(t),o=r;o<i;o++)t.lazyLoadedList.indexOf(o)<0&&n.push(o);return n};G.getOnDemandLazySlides=$c;var Vw=function(t){for(var n=[],r=Ac(t),i=Nc(t),o=r;o<i;o++)n.push(o);return n};G.getRequiredLazySlides=Vw;var Ac=function(t){return t.currentSlide-Im(t)};G.lazyStartIndex=Ac;var Nc=function(t){return t.currentSlide+Fm(t)};G.lazyEndIndex=Nc;var Im=function(t){return t.centerMode?Math.floor(t.slidesToShow/2)+(parseInt(t.centerPadding)>0?1:0):0};G.lazySlidesOnLeft=Im;var Fm=function(t){return t.centerMode?Math.floor((t.slidesToShow-1)/2)+1+(parseInt(t.centerPadding)>0?1:0):t.slidesToShow};G.lazySlidesOnRight=Fm;var ya=function(t){return t&&t.offsetWidth||0};G.getWidth=ya;var Ic=function(t){return t&&t.offsetHeight||0};G.getHeight=Ic;var Fc=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r,i,o,l;return r=t.startX-t.curX,i=t.startY-t.curY,o=Math.atan2(i,r),l=Math.round(o*180/Math.PI),l<0&&(l=360-Math.abs(l)),l<=45&&l>=0||l<=360&&l>=315?"left":l>=135&&l<=225?"right":n===!0?l>=35&&l<=135?"up":"down":"vertical"};G.getSwipeDirection=Fc;var Hc=function(t){var n=!0;return t.infinite||(t.centerMode&&t.currentSlide>=t.slideCount-1||t.slideCount<=t.slidesToShow||t.currentSlide>=t.slideCount-t.slidesToShow)&&(n=!1),n};G.canGoNext=Hc;var Qw=function(t,n){var r={};return n.forEach(function(i){return r[i]=t[i]}),r};G.extractObject=Qw;var qw=function(t){var n=Uw.default.Children.count(t.children),r=t.listRef,i=Math.ceil(ya(r)),o=t.trackRef&&t.trackRef.node,l=Math.ceil(ya(o)),a;if(t.vertical)a=i;else{var s=t.centerMode&&parseInt(t.centerPadding)*2;typeof t.centerPadding=="string"&&t.centerPadding.slice(-1)==="%"&&(s*=i/100),a=Math.ceil((i-s)/t.slidesToShow)}var u=r&&Ic(r.querySelector('[data-index="0"]')),d=u*t.slidesToShow,c=t.currentSlide===void 0?t.initialSlide:t.currentSlide;t.rtl&&t.currentSlide===void 0&&(c=n-1-t.initialSlide);var f=t.lazyLoadedList||[],h=$c(we(we({},t),{},{currentSlide:c,lazyLoadedList:f}));f=f.concat(h);var v={slideCount:n,slideWidth:a,listWidth:i,trackWidth:l,currentSlide:c,slideHeight:u,listHeight:d,lazyLoadedList:f};return t.autoplaying===null&&t.autoplay&&(v.autoplaying="playing"),v};G.initializedState=qw;var Yw=function(t){var n=t.waitForAnimate,r=t.animating,i=t.fade,o=t.infinite,l=t.index,a=t.slideCount,s=t.lazyLoad,u=t.currentSlide,d=t.centerMode,c=t.slidesToScroll,f=t.slidesToShow,h=t.useCSS,v=t.lazyLoadedList;if(n&&r)return{};var y=l,k,m,p,g={},x={},O=o?l:Nm(l,0,a-1);if(i){if(!o&&(l<0||l>=a))return{};l<0?y=l+a:l>=a&&(y=l-a),s&&v.indexOf(y)<0&&(v=v.concat(y)),g={animating:!0,currentSlide:y,lazyLoadedList:v,targetSlide:y},x={animating:!1,targetSlide:y}}else k=y,y<0?(k=y+a,o?a%c!==0&&(k=a-a%c):k=0):!Hc(t)&&y>u?y=k=u:d&&y>=a?(y=o?a:a-1,k=o?0:a-1):y>=a&&(k=y-a,o?a%c!==0&&(k=0):k=a-f),!o&&y+f>=a&&(k=a-f),m=Di(we(we({},t),{},{slideIndex:y})),p=Di(we(we({},t),{},{slideIndex:k})),o||(m===p&&(y=k),m=p),s&&(v=v.concat($c(we(we({},t),{},{currentSlide:y})))),h?(g={animating:!0,currentSlide:k,trackStyle:Uc(we(we({},t),{},{left:m})),lazyLoadedList:v,targetSlide:O},x={animating:!1,currentSlide:k,trackStyle:ji(we(we({},t),{},{left:p})),swipeLeft:null,targetSlide:O}):g={currentSlide:k,trackStyle:ji(we(we({},t),{},{left:p})),lazyLoadedList:v,targetSlide:O};return{state:g,nextState:x}};G.slideHandler=Yw;var Gw=function(t,n){var r,i,o,l,a,s=t.slidesToScroll,u=t.slidesToShow,d=t.slideCount,c=t.currentSlide,f=t.targetSlide,h=t.lazyLoad,v=t.infinite;if(l=d%s!==0,r=l?0:(d-c)%s,n.message==="previous")o=r===0?s:u-r,a=c-o,h&&!v&&(i=c-o,a=i===-1?d-1:i),v||(a=f-s);else if(n.message==="next")o=r===0?s:r,a=c+o,h&&!v&&(a=(c+s)%d+r),v||(a=f+s);else if(n.message==="dots")a=n.index*n.slidesToScroll;else if(n.message==="children"){if(a=n.index,v){var y=Bm(we(we({},t),{},{targetSlide:a}));a>n.currentSlide&&y==="left"?a=a-d:a<n.currentSlide&&y==="right"&&(a=a+d)}}else n.message==="index"&&(a=Number(n.index));return a};G.changeSlide=Gw;var Xw=function(t,n,r){return t.target.tagName.match("TEXTAREA|INPUT|SELECT")||!n?"":t.keyCode===37?r?"next":"previous":t.keyCode===39?r?"previous":"next":""};G.keyHandler=Xw;var Kw=function(t,n,r){return t.target.tagName==="IMG"&&zn(t),!n||!r&&t.type.indexOf("mouse")!==-1?"":{dragging:!0,touchObject:{startX:t.touches?t.touches[0].pageX:t.clientX,startY:t.touches?t.touches[0].pageY:t.clientY,curX:t.touches?t.touches[0].pageX:t.clientX,curY:t.touches?t.touches[0].pageY:t.clientY}}};G.swipeStart=Kw;var Jw=function(t,n){var r=n.scrolling,i=n.animating,o=n.vertical,l=n.swipeToSlide,a=n.verticalSwiping,s=n.rtl,u=n.currentSlide,d=n.edgeFriction,c=n.edgeDragged,f=n.onEdge,h=n.swiped,v=n.swiping,y=n.slideCount,k=n.slidesToScroll,m=n.infinite,p=n.touchObject,g=n.swipeEvent,x=n.listHeight,O=n.listWidth;if(!r){if(i)return zn(t);o&&l&&a&&zn(t);var P,E={},S=Di(n);p.curX=t.touches?t.touches[0].pageX:t.clientX,p.curY=t.touches?t.touches[0].pageY:t.clientY,p.swipeLength=Math.round(Math.sqrt(Math.pow(p.curX-p.startX,2)));var M=Math.round(Math.sqrt(Math.pow(p.curY-p.startY,2)));if(!a&&!v&&M>10)return{scrolling:!0};a&&(p.swipeLength=M);var j=(s?-1:1)*(p.curX>p.startX?1:-1);a&&(j=p.curY>p.startY?1:-1);var z=Math.ceil(y/k),A=Fc(n.touchObject,a),$=p.swipeLength;return m||(u===0&&(A==="right"||A==="down")||u+1>=z&&(A==="left"||A==="up")||!Hc(n)&&(A==="left"||A==="up"))&&($=p.swipeLength*d,c===!1&&f&&(f(A),E.edgeDragged=!0)),!h&&g&&(g(A),E.swiped=!0),o?P=S+$*(x/O)*j:s?P=S-$*j:P=S+$*j,a&&(P=S+$*j),E=we(we({},E),{},{touchObject:p,swipeLeft:P,trackStyle:ji(we(we({},n),{},{left:P}))}),Math.abs(p.curX-p.startX)<Math.abs(p.curY-p.startY)*.8||p.swipeLength>10&&(E.swiping=!0,zn(t)),E}};G.swipeMove=Jw;var Zw=function(t,n){var r=n.dragging,i=n.swipe,o=n.touchObject,l=n.listWidth,a=n.touchThreshold,s=n.verticalSwiping,u=n.listHeight,d=n.swipeToSlide,c=n.scrolling,f=n.onSwipe,h=n.targetSlide,v=n.currentSlide,y=n.infinite;if(!r)return i&&zn(t),{};var k=s?u/a:l/a,m=Fc(o,s),p={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(c||!o.swipeLength)return p;if(o.swipeLength>k){zn(t),f&&f(m);var g,x,O=y?v:h;switch(m){case"left":case"up":x=O+pu(n),g=d?fu(n,x):x,p.currentDirection=0;break;case"right":case"down":x=O-pu(n),g=d?fu(n,x):x,p.currentDirection=1;break;default:g=O}p.triggerSlideHandler=g}else{var P=Di(n);p.trackStyle=Uc(we(we({},n),{},{left:P}))}return p};G.swipeEnd=Zw;var Hm=function(t){for(var n=t.infinite?t.slideCount*2:t.slideCount,r=t.infinite?t.slidesToShow*-1:0,i=t.infinite?t.slidesToShow*-1:0,o=[];r<n;)o.push(r),r=i+t.slidesToScroll,i+=Math.min(t.slidesToScroll,t.slidesToShow);return o};G.getNavigableIndexes=Hm;var fu=function(t,n){var r=Hm(t),i=0;if(n>r[r.length-1])n=r[r.length-1];else for(var o in r){if(n<r[o]){n=i;break}i=r[o]}return n};G.checkNavigable=fu;var pu=function(t){var n=t.centerMode?t.slideWidth*Math.floor(t.slidesToShow/2):0;if(t.swipeToSlide){var r,i=t.listRef,o=i.querySelectorAll&&i.querySelectorAll(".slick-slide")||[];if(Array.from(o).every(function(s){if(t.vertical){if(s.offsetTop+Ic(s)/2>t.swipeLeft*-1)return r=s,!1}else if(s.offsetLeft-n+ya(s)/2>t.swipeLeft*-1)return r=s,!1;return!0}),!r)return 0;var l=t.rtl===!0?t.slideCount-t.currentSlide:t.currentSlide,a=Math.abs(r.dataset.index-l)||1;return a}else return t.slidesToScroll};G.getSlideCount=pu;var dl=function(t,n){return n.reduce(function(r,i){return r&&t.hasOwnProperty(i)},!0)?null:console.error("Keys Missing:",t)};G.checkSpecKeys=dl;var ji=function(t){dl(t,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var n,r,i=t.slideCount+2*t.slidesToShow;t.vertical?r=i*t.slideHeight:n=Wm(t)*t.slideWidth;var o={opacity:1,transition:"",WebkitTransition:""};if(t.useTransform){var l=t.vertical?"translate3d(0px, "+t.left+"px, 0px)":"translate3d("+t.left+"px, 0px, 0px)",a=t.vertical?"translate3d(0px, "+t.left+"px, 0px)":"translate3d("+t.left+"px, 0px, 0px)",s=t.vertical?"translateY("+t.left+"px)":"translateX("+t.left+"px)";o=we(we({},o),{},{WebkitTransform:l,transform:a,msTransform:s})}else t.vertical?o.top=t.left:o.left=t.left;return t.fade&&(o={opacity:1}),n&&(o.width=n),r&&(o.height=r),window&&!window.addEventListener&&window.attachEvent&&(t.vertical?o.marginTop=t.left+"px":o.marginLeft=t.left+"px"),o};G.getTrackCSS=ji;var Uc=function(t){dl(t,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var n=ji(t);return t.useTransform?(n.WebkitTransition="-webkit-transform "+t.speed+"ms "+t.cssEase,n.transition="transform "+t.speed+"ms "+t.cssEase):t.vertical?n.transition="top "+t.speed+"ms "+t.cssEase:n.transition="left "+t.speed+"ms "+t.cssEase,n};G.getTrackAnimateCSS=Uc;var Di=function(t){if(t.unslick)return 0;dl(t,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var n=t.slideIndex,r=t.trackRef,i=t.infinite,o=t.centerMode,l=t.slideCount,a=t.slidesToShow,s=t.slidesToScroll,u=t.slideWidth,d=t.listWidth,c=t.variableWidth,f=t.slideHeight,h=t.fade,v=t.vertical,y=0,k,m,p=0;if(h||t.slideCount===1)return 0;var g=0;if(i?(g=-fi(t),l%s!==0&&n+s>l&&(g=-(n>l?a-(n-l):l%s)),o&&(g+=parseInt(a/2))):(l%s!==0&&n+s>l&&(g=a-l%s),o&&(g=parseInt(a/2))),y=g*u,p=g*f,v?k=n*f*-1+p:k=n*u*-1+y,c===!0){var x,O=r&&r.node;if(x=n+fi(t),m=O&&O.childNodes[x],k=m?m.offsetLeft*-1:0,o===!0){x=i?n+fi(t):n,m=O&&O.children[x],k=0;for(var P=0;P<x;P++)k-=O&&O.children[P]&&O.children[P].offsetWidth;k-=parseInt(t.centerPadding),k+=m&&(d-m.offsetWidth)/2}}return k};G.getTrackLeft=Di;var fi=function(t){return t.unslick||!t.infinite?0:t.variableWidth?t.slideCount:t.slidesToShow+(t.centerMode?1:0)};G.getPreClones=fi;var Um=function(t){return t.unslick||!t.infinite?0:t.slideCount};G.getPostClones=Um;var Wm=function(t){return t.slideCount===1?1:fi(t)+t.slideCount+Um(t)};G.getTotalSlides=Wm;var Bm=function(t){return t.targetSlide>t.currentSlide?t.targetSlide>t.currentSlide+Vm(t)?"left":"right":t.targetSlide<t.currentSlide-Qm(t)?"right":"left"};G.siblingDirection=Bm;var Vm=function(t){var n=t.slidesToShow,r=t.centerMode,i=t.rtl,o=t.centerPadding;if(r){var l=(n-1)/2+1;return parseInt(o)>0&&(l+=1),i&&n%2===0&&(l+=1),l}return i?0:n-1};G.slidesOnRight=Vm;var Qm=function(t){var n=t.slidesToShow,r=t.centerMode,i=t.rtl,o=t.centerPadding;if(r){var l=(n-1)/2+1;return parseInt(o)>0&&(l+=1),!i&&n%2===0&&(l+=1),l}return i?n-1:0};G.slidesOnLeft=Qm;var ex=function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)};G.canUseDOM=ex;var fl={};function hu(e){return hu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},hu(e)}Object.defineProperty(fl,"__esModule",{value:!0});fl.Track=void 0;var rn=qm(K.exports),Jl=qm(Vi.exports),Zl=G;function qm(e){return e&&e.__esModule?e:{default:e}}function mu(){return mu=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},mu.apply(this,arguments)}function tx(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function kf(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function nx(e,t,n){return t&&kf(e.prototype,t),n&&kf(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function rx(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&vu(e,t)}function vu(e,t){return vu=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},vu(e,t)}function ix(e){var t=ax();return function(){var r=wa(e),i;if(t){var o=wa(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return ox(this,i)}}function ox(e,t){if(t&&(hu(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return gu(e)}function gu(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ax(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function wa(e){return wa=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},wa(e)}function Ef(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Ze(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ef(Object(n),!0).forEach(function(r){yu(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ef(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function yu(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var es=function(t){var n,r,i,o,l;t.rtl?l=t.slideCount-1-t.index:l=t.index,i=l<0||l>=t.slideCount,t.centerMode?(o=Math.floor(t.slidesToShow/2),r=(l-t.currentSlide)%t.slideCount===0,l>t.currentSlide-o-1&&l<=t.currentSlide+o&&(n=!0)):n=t.currentSlide<=l&&l<t.currentSlide+t.slidesToShow;var a;t.targetSlide<0?a=t.targetSlide+t.slideCount:t.targetSlide>=t.slideCount?a=t.targetSlide-t.slideCount:a=t.targetSlide;var s=l===a;return{"slick-slide":!0,"slick-active":n,"slick-center":r,"slick-cloned":i,"slick-current":s}},lx=function(t){var n={};return(t.variableWidth===void 0||t.variableWidth===!1)&&(n.width=t.slideWidth),t.fade&&(n.position="relative",t.vertical?n.top=-t.index*parseInt(t.slideHeight):n.left=-t.index*parseInt(t.slideWidth),n.opacity=t.currentSlide===t.index?1:0,t.useCSS&&(n.transition="opacity "+t.speed+"ms "+t.cssEase+", visibility "+t.speed+"ms "+t.cssEase)),n},ts=function(t,n){return t.key||n},sx=function(t){var n,r=[],i=[],o=[],l=rn.default.Children.count(t.children),a=(0,Zl.lazyStartIndex)(t),s=(0,Zl.lazyEndIndex)(t);return rn.default.Children.forEach(t.children,function(u,d){var c,f={message:"children",index:d,slidesToScroll:t.slidesToScroll,currentSlide:t.currentSlide};!t.lazyLoad||t.lazyLoad&&t.lazyLoadedList.indexOf(d)>=0?c=u:c=rn.default.createElement("div",null);var h=lx(Ze(Ze({},t),{},{index:d})),v=c.props.className||"",y=es(Ze(Ze({},t),{},{index:d}));if(r.push(rn.default.cloneElement(c,{key:"original"+ts(c,d),"data-index":d,className:(0,Jl.default)(y,v),tabIndex:"-1","aria-hidden":!y["slick-active"],style:Ze(Ze({outline:"none"},c.props.style||{}),h),onClick:function(p){c.props&&c.props.onClick&&c.props.onClick(p),t.focusOnSelect&&t.focusOnSelect(f)}})),t.infinite&&t.fade===!1){var k=l-d;k<=(0,Zl.getPreClones)(t)&&l!==t.slidesToShow&&(n=-k,n>=a&&(c=u),y=es(Ze(Ze({},t),{},{index:n})),i.push(rn.default.cloneElement(c,{key:"precloned"+ts(c,n),"data-index":n,tabIndex:"-1",className:(0,Jl.default)(y,v),"aria-hidden":!y["slick-active"],style:Ze(Ze({},c.props.style||{}),h),onClick:function(p){c.props&&c.props.onClick&&c.props.onClick(p),t.focusOnSelect&&t.focusOnSelect(f)}}))),l!==t.slidesToShow&&(n=l+d,n<s&&(c=u),y=es(Ze(Ze({},t),{},{index:n})),o.push(rn.default.cloneElement(c,{key:"postcloned"+ts(c,n),"data-index":n,tabIndex:"-1",className:(0,Jl.default)(y,v),"aria-hidden":!y["slick-active"],style:Ze(Ze({},c.props.style||{}),h),onClick:function(p){c.props&&c.props.onClick&&c.props.onClick(p),t.focusOnSelect&&t.focusOnSelect(f)}})))}}),t.rtl?i.concat(r,o).reverse():i.concat(r,o)},ux=function(e){rx(n,e);var t=ix(n);function n(){var r;tx(this,n);for(var i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];return r=t.call.apply(t,[this].concat(o)),yu(gu(r),"node",null),yu(gu(r),"handleRef",function(a){r.node=a}),r}return nx(n,[{key:"render",value:function(){var i=sx(this.props),o=this.props,l=o.onMouseEnter,a=o.onMouseOver,s=o.onMouseLeave,u={onMouseEnter:l,onMouseOver:a,onMouseLeave:s};return rn.default.createElement("div",mu({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},u),i)}}]),n}(rn.default.PureComponent);fl.Track=ux;var pl={};function wu(e){return wu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},wu(e)}Object.defineProperty(pl,"__esModule",{value:!0});pl.Dots=void 0;var yo=Ym(K.exports),cx=Ym(Vi.exports),bf=G;function Ym(e){return e&&e.__esModule?e:{default:e}}function _f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function dx(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?_f(Object(n),!0).forEach(function(r){fx(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_f(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function fx(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function px(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Cf(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function hx(e,t,n){return t&&Cf(e.prototype,t),n&&Cf(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function mx(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&xu(e,t)}function xu(e,t){return xu=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},xu(e,t)}function vx(e){var t=wx();return function(){var r=xa(e),i;if(t){var o=xa(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return gx(this,i)}}function gx(e,t){if(t&&(wu(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return yx(e)}function yx(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function wx(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function xa(e){return xa=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},xa(e)}var xx=function(t){var n;return t.infinite?n=Math.ceil(t.slideCount/t.slidesToScroll):n=Math.ceil((t.slideCount-t.slidesToShow)/t.slidesToScroll)+1,n},Sx=function(e){mx(n,e);var t=vx(n);function n(){return px(this,n),t.apply(this,arguments)}return hx(n,[{key:"clickHandler",value:function(i,o){o.preventDefault(),this.props.clickHandler(i)}},{key:"render",value:function(){for(var i=this.props,o=i.onMouseEnter,l=i.onMouseOver,a=i.onMouseLeave,s=i.infinite,u=i.slidesToScroll,d=i.slidesToShow,c=i.slideCount,f=i.currentSlide,h=xx({slideCount:c,slidesToScroll:u,slidesToShow:d,infinite:s}),v={onMouseEnter:o,onMouseOver:l,onMouseLeave:a},y=[],k=0;k<h;k++){var m=(k+1)*u-1,p=s?m:(0,bf.clamp)(m,0,c-1),g=p-(u-1),x=s?g:(0,bf.clamp)(g,0,c-1),O=(0,cx.default)({"slick-active":s?f>=x&&f<=p:f===x}),P={message:"dots",index:k,slidesToScroll:u,currentSlide:f},E=this.clickHandler.bind(this,P);y=y.concat(yo.default.createElement("li",{key:k,className:O},yo.default.cloneElement(this.props.customPaging(k),{onClick:E})))}return yo.default.cloneElement(this.props.appendDots(y),dx({className:this.props.dotsClass},v))}}]),n}(yo.default.PureComponent);pl.Dots=Sx;var Cr={};function Su(e){return Su=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Su(e)}Object.defineProperty(Cr,"__esModule",{value:!0});Cr.PrevArrow=Cr.NextArrow=void 0;var vr=Xm(K.exports),Gm=Xm(Vi.exports),kx=G;function Xm(e){return e&&e.__esModule?e:{default:e}}function Sa(){return Sa=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Sa.apply(this,arguments)}function Of(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function ka(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Of(Object(n),!0).forEach(function(r){Ex(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Of(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ex(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Km(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Pf(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Jm(e,t,n){return t&&Pf(e.prototype,t),n&&Pf(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Zm(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&ku(e,t)}function ku(e,t){return ku=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},ku(e,t)}function ev(e){var t=Cx();return function(){var r=Ea(e),i;if(t){var o=Ea(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return bx(this,i)}}function bx(e,t){if(t&&(Su(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return _x(e)}function _x(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Cx(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Ea(e){return Ea=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Ea(e)}var Ox=function(e){Zm(n,e);var t=ev(n);function n(){return Km(this,n),t.apply(this,arguments)}return Jm(n,[{key:"clickHandler",value:function(i,o){o&&o.preventDefault(),this.props.clickHandler(i,o)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-prev":!0},o=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(this.props.currentSlide===0||this.props.slideCount<=this.props.slidesToShow)&&(i["slick-disabled"]=!0,o=null);var l={key:"0","data-role":"none",className:(0,Gm.default)(i),style:{display:"block"},onClick:o},a={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},s;return this.props.prevArrow?s=vr.default.cloneElement(this.props.prevArrow,ka(ka({},l),a)):s=vr.default.createElement("button",Sa({key:"0",type:"button"},l)," ","Previous"),s}}]),n}(vr.default.PureComponent);Cr.PrevArrow=Ox;var Px=function(e){Zm(n,e);var t=ev(n);function n(){return Km(this,n),t.apply(this,arguments)}return Jm(n,[{key:"clickHandler",value:function(i,o){o&&o.preventDefault(),this.props.clickHandler(i,o)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-next":!0},o=this.clickHandler.bind(this,{message:"next"});(0,kx.canGoNext)(this.props)||(i["slick-disabled"]=!0,o=null);var l={key:"1","data-role":"none",className:(0,Gm.default)(i),style:{display:"block"},onClick:o},a={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},s;return this.props.nextArrow?s=vr.default.cloneElement(this.props.nextArrow,ka(ka({},l),a)):s=vr.default.createElement("button",Sa({key:"1",type:"button"},l)," ","Next"),s}}]),n}(vr.default.PureComponent);Cr.NextArrow=Px;var tv=function(){if(typeof Map<"u")return Map;function e(t,n){var r=-1;return t.some(function(i,o){return i[0]===n?(r=o,!0):!1}),r}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(n){var r=e(this.__entries__,n),i=this.__entries__[r];return i&&i[1]},t.prototype.set=function(n,r){var i=e(this.__entries__,n);~i?this.__entries__[i][1]=r:this.__entries__.push([n,r])},t.prototype.delete=function(n){var r=this.__entries__,i=e(r,n);~i&&r.splice(i,1)},t.prototype.has=function(n){return!!~e(this.__entries__,n)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(n,r){r===void 0&&(r=null);for(var i=0,o=this.__entries__;i<o.length;i++){var l=o[i];n.call(r,l[1],l[0])}},t}()}(),Eu=typeof window<"u"&&typeof document<"u"&&window.document===document,ba=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),Tx=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(ba):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),Lx=2;function Mx(e,t){var n=!1,r=!1,i=0;function o(){n&&(n=!1,e()),r&&a()}function l(){Tx(o)}function a(){var s=Date.now();if(n){if(s-i<Lx)return;r=!0}else n=!0,r=!1,setTimeout(l,t);i=s}return a}var Rx=20,jx=["top","right","bottom","left","width","height","size","weight"],Dx=typeof MutationObserver<"u",zx=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=Mx(this.refresh.bind(this),Rx)}return e.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},e.prototype.removeObserver=function(t){var n=this.observers_,r=n.indexOf(t);~r&&n.splice(r,1),!n.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var t=this.updateObservers_();t&&this.refresh()},e.prototype.updateObservers_=function(){var t=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return t.forEach(function(n){return n.broadcastActive()}),t.length>0},e.prototype.connect_=function(){!Eu||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),Dx?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!Eu||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(t){var n=t.propertyName,r=n===void 0?"":n,i=jx.some(function(o){return!!~r.indexOf(o)});i&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),nv=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var i=r[n];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e},Or=function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||ba},rv=hl(0,0,0,0);function _a(e){return parseFloat(e)||0}function Tf(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce(function(r,i){var o=e["border-"+i+"-width"];return r+_a(o)},0)}function $x(e){for(var t=["top","right","bottom","left"],n={},r=0,i=t;r<i.length;r++){var o=i[r],l=e["padding-"+o];n[o]=_a(l)}return n}function Ax(e){var t=e.getBBox();return hl(0,0,t.width,t.height)}function Nx(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return rv;var r=Or(e).getComputedStyle(e),i=$x(r),o=i.left+i.right,l=i.top+i.bottom,a=_a(r.width),s=_a(r.height);if(r.boxSizing==="border-box"&&(Math.round(a+o)!==t&&(a-=Tf(r,"left","right")+o),Math.round(s+l)!==n&&(s-=Tf(r,"top","bottom")+l)),!Fx(e)){var u=Math.round(a+o)-t,d=Math.round(s+l)-n;Math.abs(u)!==1&&(a-=u),Math.abs(d)!==1&&(s-=d)}return hl(i.left,i.top,a,s)}var Ix=function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof Or(e).SVGGraphicsElement}:function(e){return e instanceof Or(e).SVGElement&&typeof e.getBBox=="function"}}();function Fx(e){return e===Or(e).document.documentElement}function Hx(e){return Eu?Ix(e)?Ax(e):Nx(e):rv}function Ux(e){var t=e.x,n=e.y,r=e.width,i=e.height,o=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,l=Object.create(o.prototype);return nv(l,{x:t,y:n,width:r,height:i,top:n,right:t+r,bottom:i+n,left:t}),l}function hl(e,t,n,r){return{x:e,y:t,width:n,height:r}}var Wx=function(){function e(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=hl(0,0,0,0),this.target=t}return e.prototype.isActive=function(){var t=Hx(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},e}(),Bx=function(){function e(t,n){var r=Ux(n);nv(this,{target:t,contentRect:r})}return e}(),Vx=function(){function e(t,n,r){if(this.activeObservations_=[],this.observations_=new tv,typeof t!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=n,this.callbackCtx_=r}return e.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof Or(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)||(n.set(t,new Wx(t)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof Or(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;!n.has(t)||(n.delete(t),n.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&t.activeObservations_.push(n)})},e.prototype.broadcastActive=function(){if(!!this.hasActive()){var t=this.callbackCtx_,n=this.activeObservations_.map(function(r){return new Bx(r.target,r.broadcastRect())});this.callback_.call(t,n,t),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),iv=typeof WeakMap<"u"?new WeakMap:new tv,ov=function(){function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=zx.getInstance(),r=new Vx(t,n,this);iv.set(this,r)}return e}();["observe","unobserve","disconnect"].forEach(function(e){ov.prototype[e]=function(){var t;return(t=iv.get(this))[e].apply(t,arguments)}});var Qx=function(){return typeof ba.ResizeObserver<"u"?ba.ResizeObserver:ov}();const qx=Object.freeze(Object.defineProperty({__proto__:null,default:Qx},Symbol.toStringTag,{value:"Module"})),Yx=lp(qx);Object.defineProperty(cl,"__esModule",{value:!0});cl.InnerSlider=void 0;var Ye=Qi(K.exports),Gx=Qi(Am),Xx=Qi(Hw),Kx=Qi(Vi.exports),Se=G,Jx=fl,Zx=pl,Lf=Cr,eS=Qi(Yx);function Qi(e){return e&&e.__esModule?e:{default:e}}function Ca(e){return Ca=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ca(e)}function Oa(){return Oa=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Oa.apply(this,arguments)}function tS(e,t){if(e==null)return{};var n=nS(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function nS(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Mf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Mf(Object(n),!0).forEach(function(r){le(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Mf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function rS(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Rf(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function iS(e,t,n){return t&&Rf(e.prototype,t),n&&Rf(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function oS(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&bu(e,t)}function bu(e,t){return bu=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},bu(e,t)}function aS(e){var t=sS();return function(){var r=Pa(e),i;if(t){var o=Pa(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return lS(this,i)}}function lS(e,t){if(t&&(Ca(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ae(e)}function ae(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function sS(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Pa(e){return Pa=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Pa(e)}function le(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var uS=function(e){oS(n,e);var t=aS(n);function n(r){var i;rS(this,n),i=t.call(this,r),le(ae(i),"listRefHandler",function(l){return i.list=l}),le(ae(i),"trackRefHandler",function(l){return i.track=l}),le(ae(i),"adaptHeight",function(){if(i.props.adaptiveHeight&&i.list){var l=i.list.querySelector('[data-index="'.concat(i.state.currentSlide,'"]'));i.list.style.height=(0,Se.getHeight)(l)+"px"}}),le(ae(i),"componentDidMount",function(){if(i.props.onInit&&i.props.onInit(),i.props.lazyLoad){var l=(0,Se.getOnDemandLazySlides)(Z(Z({},i.props),i.state));l.length>0&&(i.setState(function(s){return{lazyLoadedList:s.lazyLoadedList.concat(l)}}),i.props.onLazyLoad&&i.props.onLazyLoad(l))}var a=Z({listRef:i.list,trackRef:i.track},i.props);i.updateState(a,!0,function(){i.adaptHeight(),i.props.autoplay&&i.autoPlay("update")}),i.props.lazyLoad==="progressive"&&(i.lazyLoadTimer=setInterval(i.progressiveLazyLoad,1e3)),i.ro=new eS.default(function(){i.state.animating?(i.onWindowResized(!1),i.callbackTimers.push(setTimeout(function(){return i.onWindowResized()},i.props.speed))):i.onWindowResized()}),i.ro.observe(i.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),function(s){s.onfocus=i.props.pauseOnFocus?i.onSlideFocus:null,s.onblur=i.props.pauseOnFocus?i.onSlideBlur:null}),window.addEventListener?window.addEventListener("resize",i.onWindowResized):window.attachEvent("onresize",i.onWindowResized)}),le(ae(i),"componentWillUnmount",function(){i.animationEndCallback&&clearTimeout(i.animationEndCallback),i.lazyLoadTimer&&clearInterval(i.lazyLoadTimer),i.callbackTimers.length&&(i.callbackTimers.forEach(function(l){return clearTimeout(l)}),i.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",i.onWindowResized):window.detachEvent("onresize",i.onWindowResized),i.autoplayTimer&&clearInterval(i.autoplayTimer),i.ro.disconnect()}),le(ae(i),"componentDidUpdate",function(l){if(i.checkImagesLoad(),i.props.onReInit&&i.props.onReInit(),i.props.lazyLoad){var a=(0,Se.getOnDemandLazySlides)(Z(Z({},i.props),i.state));a.length>0&&(i.setState(function(d){return{lazyLoadedList:d.lazyLoadedList.concat(a)}}),i.props.onLazyLoad&&i.props.onLazyLoad(a))}i.adaptHeight();var s=Z(Z({listRef:i.list,trackRef:i.track},i.props),i.state),u=i.didPropsChange(l);u&&i.updateState(s,u,function(){i.state.currentSlide>=Ye.default.Children.count(i.props.children)&&i.changeSlide({message:"index",index:Ye.default.Children.count(i.props.children)-i.props.slidesToShow,currentSlide:i.state.currentSlide}),i.props.autoplay?i.autoPlay("update"):i.pause("paused")})}),le(ae(i),"onWindowResized",function(l){i.debouncedResize&&i.debouncedResize.cancel(),i.debouncedResize=(0,Xx.default)(function(){return i.resizeWindow(l)},50),i.debouncedResize()}),le(ae(i),"resizeWindow",function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,a=Boolean(i.track&&i.track.node);if(!!a){var s=Z(Z({listRef:i.list,trackRef:i.track},i.props),i.state);i.updateState(s,l,function(){i.props.autoplay?i.autoPlay("update"):i.pause("paused")}),i.setState({animating:!1}),clearTimeout(i.animationEndCallback),delete i.animationEndCallback}}),le(ae(i),"updateState",function(l,a,s){var u=(0,Se.initializedState)(l);l=Z(Z(Z({},l),u),{},{slideIndex:u.currentSlide});var d=(0,Se.getTrackLeft)(l);l=Z(Z({},l),{},{left:d});var c=(0,Se.getTrackCSS)(l);(a||Ye.default.Children.count(i.props.children)!==Ye.default.Children.count(l.children))&&(u.trackStyle=c),i.setState(u,s)}),le(ae(i),"ssrInit",function(){if(i.props.variableWidth){var l=0,a=0,s=[],u=(0,Se.getPreClones)(Z(Z(Z({},i.props),i.state),{},{slideCount:i.props.children.length})),d=(0,Se.getPostClones)(Z(Z(Z({},i.props),i.state),{},{slideCount:i.props.children.length}));i.props.children.forEach(function(E){s.push(E.props.style.width),l+=E.props.style.width});for(var c=0;c<u;c++)a+=s[s.length-1-c],l+=s[s.length-1-c];for(var f=0;f<d;f++)l+=s[f];for(var h=0;h<i.state.currentSlide;h++)a+=s[h];var v={width:l+"px",left:-a+"px"};if(i.props.centerMode){var y="".concat(s[i.state.currentSlide],"px");v.left="calc(".concat(v.left," + (100% - ").concat(y,") / 2 ) ")}return{trackStyle:v}}var k=Ye.default.Children.count(i.props.children),m=Z(Z(Z({},i.props),i.state),{},{slideCount:k}),p=(0,Se.getPreClones)(m)+(0,Se.getPostClones)(m)+k,g=100/i.props.slidesToShow*p,x=100/p,O=-x*((0,Se.getPreClones)(m)+i.state.currentSlide)*g/100;i.props.centerMode&&(O+=(100-x*g/100)/2);var P={width:g+"%",left:O+"%"};return{slideWidth:x+"%",trackStyle:P}}),le(ae(i),"checkImagesLoad",function(){var l=i.list&&i.list.querySelectorAll&&i.list.querySelectorAll(".slick-slide img")||[],a=l.length,s=0;Array.prototype.forEach.call(l,function(u){var d=function(){return++s&&s>=a&&i.onWindowResized()};if(!u.onclick)u.onclick=function(){return u.parentNode.focus()};else{var c=u.onclick;u.onclick=function(){c(),u.parentNode.focus()}}u.onload||(i.props.lazyLoad?u.onload=function(){i.adaptHeight(),i.callbackTimers.push(setTimeout(i.onWindowResized,i.props.speed))}:(u.onload=d,u.onerror=function(){d(),i.props.onLazyLoadError&&i.props.onLazyLoadError()}))})}),le(ae(i),"progressiveLazyLoad",function(){for(var l=[],a=Z(Z({},i.props),i.state),s=i.state.currentSlide;s<i.state.slideCount+(0,Se.getPostClones)(a);s++)if(i.state.lazyLoadedList.indexOf(s)<0){l.push(s);break}for(var u=i.state.currentSlide-1;u>=-(0,Se.getPreClones)(a);u--)if(i.state.lazyLoadedList.indexOf(u)<0){l.push(u);break}l.length>0?(i.setState(function(d){return{lazyLoadedList:d.lazyLoadedList.concat(l)}}),i.props.onLazyLoad&&i.props.onLazyLoad(l)):i.lazyLoadTimer&&(clearInterval(i.lazyLoadTimer),delete i.lazyLoadTimer)}),le(ae(i),"slideHandler",function(l){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=i.props,u=s.asNavFor,d=s.beforeChange,c=s.onLazyLoad,f=s.speed,h=s.afterChange,v=i.state.currentSlide,y=(0,Se.slideHandler)(Z(Z(Z({index:l},i.props),i.state),{},{trackRef:i.track,useCSS:i.props.useCSS&&!a})),k=y.state,m=y.nextState;if(!!k){d&&d(v,k.currentSlide);var p=k.lazyLoadedList.filter(function(g){return i.state.lazyLoadedList.indexOf(g)<0});c&&p.length>0&&c(p),!i.props.waitForAnimate&&i.animationEndCallback&&(clearTimeout(i.animationEndCallback),h&&h(v),delete i.animationEndCallback),i.setState(k,function(){u&&i.asNavForIndex!==l&&(i.asNavForIndex=l,u.innerSlider.slideHandler(l)),m&&(i.animationEndCallback=setTimeout(function(){var g=m.animating,x=tS(m,["animating"]);i.setState(x,function(){i.callbackTimers.push(setTimeout(function(){return i.setState({animating:g})},10)),h&&h(k.currentSlide),delete i.animationEndCallback})},f))})}}),le(ae(i),"changeSlide",function(l){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=Z(Z({},i.props),i.state),u=(0,Se.changeSlide)(s,l);if(!(u!==0&&!u)&&(a===!0?i.slideHandler(u,a):i.slideHandler(u),i.props.autoplay&&i.autoPlay("update"),i.props.focusOnSelect)){var d=i.list.querySelectorAll(".slick-current");d[0]&&d[0].focus()}}),le(ae(i),"clickHandler",function(l){i.clickable===!1&&(l.stopPropagation(),l.preventDefault()),i.clickable=!0}),le(ae(i),"keyHandler",function(l){var a=(0,Se.keyHandler)(l,i.props.accessibility,i.props.rtl);a!==""&&i.changeSlide({message:a})}),le(ae(i),"selectHandler",function(l){i.changeSlide(l)}),le(ae(i),"disableBodyScroll",function(){var l=function(s){s=s||window.event,s.preventDefault&&s.preventDefault(),s.returnValue=!1};window.ontouchmove=l}),le(ae(i),"enableBodyScroll",function(){window.ontouchmove=null}),le(ae(i),"swipeStart",function(l){i.props.verticalSwiping&&i.disableBodyScroll();var a=(0,Se.swipeStart)(l,i.props.swipe,i.props.draggable);a!==""&&i.setState(a)}),le(ae(i),"swipeMove",function(l){var a=(0,Se.swipeMove)(l,Z(Z(Z({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));!a||(a.swiping&&(i.clickable=!1),i.setState(a))}),le(ae(i),"swipeEnd",function(l){var a=(0,Se.swipeEnd)(l,Z(Z(Z({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));if(!!a){var s=a.triggerSlideHandler;delete a.triggerSlideHandler,i.setState(a),s!==void 0&&(i.slideHandler(s),i.props.verticalSwiping&&i.enableBodyScroll())}}),le(ae(i),"touchEnd",function(l){i.swipeEnd(l),i.clickable=!0}),le(ae(i),"slickPrev",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"previous"})},0))}),le(ae(i),"slickNext",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"next"})},0))}),le(ae(i),"slickGoTo",function(l){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(l=Number(l),isNaN(l))return"";i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"index",index:l,currentSlide:i.state.currentSlide},a)},0))}),le(ae(i),"play",function(){var l;if(i.props.rtl)l=i.state.currentSlide-i.props.slidesToScroll;else if((0,Se.canGoNext)(Z(Z({},i.props),i.state)))l=i.state.currentSlide+i.props.slidesToScroll;else return!1;i.slideHandler(l)}),le(ae(i),"autoPlay",function(l){i.autoplayTimer&&clearInterval(i.autoplayTimer);var a=i.state.autoplaying;if(l==="update"){if(a==="hovered"||a==="focused"||a==="paused")return}else if(l==="leave"){if(a==="paused"||a==="focused")return}else if(l==="blur"&&(a==="paused"||a==="hovered"))return;i.autoplayTimer=setInterval(i.play,i.props.autoplaySpeed+50),i.setState({autoplaying:"playing"})}),le(ae(i),"pause",function(l){i.autoplayTimer&&(clearInterval(i.autoplayTimer),i.autoplayTimer=null);var a=i.state.autoplaying;l==="paused"?i.setState({autoplaying:"paused"}):l==="focused"?(a==="hovered"||a==="playing")&&i.setState({autoplaying:"focused"}):a==="playing"&&i.setState({autoplaying:"hovered"})}),le(ae(i),"onDotsOver",function(){return i.props.autoplay&&i.pause("hovered")}),le(ae(i),"onDotsLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),le(ae(i),"onTrackOver",function(){return i.props.autoplay&&i.pause("hovered")}),le(ae(i),"onTrackLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),le(ae(i),"onSlideFocus",function(){return i.props.autoplay&&i.pause("focused")}),le(ae(i),"onSlideBlur",function(){return i.props.autoplay&&i.state.autoplaying==="focused"&&i.autoPlay("blur")}),le(ae(i),"render",function(){var l=(0,Kx.default)("slick-slider",i.props.className,{"slick-vertical":i.props.vertical,"slick-initialized":!0}),a=Z(Z({},i.props),i.state),s=(0,Se.extractObject)(a,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),u=i.props.pauseOnHover;s=Z(Z({},s),{},{onMouseEnter:u?i.onTrackOver:null,onMouseLeave:u?i.onTrackLeave:null,onMouseOver:u?i.onTrackOver:null,focusOnSelect:i.props.focusOnSelect&&i.clickable?i.selectHandler:null});var d;if(i.props.dots===!0&&i.state.slideCount>=i.props.slidesToShow){var c=(0,Se.extractObject)(a,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),f=i.props.pauseOnDotsHover;c=Z(Z({},c),{},{clickHandler:i.changeSlide,onMouseEnter:f?i.onDotsLeave:null,onMouseOver:f?i.onDotsOver:null,onMouseLeave:f?i.onDotsLeave:null}),d=Ye.default.createElement(Zx.Dots,c)}var h,v,y=(0,Se.extractObject)(a,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);y.clickHandler=i.changeSlide,i.props.arrows&&(h=Ye.default.createElement(Lf.PrevArrow,y),v=Ye.default.createElement(Lf.NextArrow,y));var k=null;i.props.vertical&&(k={height:i.state.listHeight});var m=null;i.props.vertical===!1?i.props.centerMode===!0&&(m={padding:"0px "+i.props.centerPadding}):i.props.centerMode===!0&&(m={padding:i.props.centerPadding+" 0px"});var p=Z(Z({},k),m),g=i.props.touchMove,x={className:"slick-list",style:p,onClick:i.clickHandler,onMouseDown:g?i.swipeStart:null,onMouseMove:i.state.dragging&&g?i.swipeMove:null,onMouseUp:g?i.swipeEnd:null,onMouseLeave:i.state.dragging&&g?i.swipeEnd:null,onTouchStart:g?i.swipeStart:null,onTouchMove:i.state.dragging&&g?i.swipeMove:null,onTouchEnd:g?i.touchEnd:null,onTouchCancel:i.state.dragging&&g?i.swipeEnd:null,onKeyDown:i.props.accessibility?i.keyHandler:null},O={className:l,dir:"ltr",style:i.props.style};return i.props.unslick&&(x={className:"slick-list"},O={className:l}),Ye.default.createElement("div",O,i.props.unslick?"":h,Ye.default.createElement("div",Oa({ref:i.listRefHandler},x),Ye.default.createElement(Jx.Track,Oa({ref:i.trackRefHandler},s),i.props.children)),i.props.unslick?"":v,i.props.unslick?"":d)}),i.list=null,i.track=null,i.state=Z(Z({},Gx.default),{},{currentSlide:i.props.initialSlide,slideCount:Ye.default.Children.count(i.props.children)}),i.callbackTimers=[],i.clickable=!0,i.debouncedResize=null;var o=i.ssrInit();return i.state=Z(Z({},i.state),o),i}return iS(n,[{key:"didPropsChange",value:function(i){for(var o=!1,l=0,a=Object.keys(this.props);l<a.length;l++){var s=a[l];if(!i.hasOwnProperty(s)){o=!0;break}if(!(Ca(i[s])==="object"||typeof i[s]=="function")&&i[s]!==this.props[s]){o=!0;break}}return o||Ye.default.Children.count(this.props.children)!==Ye.default.Children.count(i.children)}}]),n}(Ye.default.Component);cl.InnerSlider=uS;var cS=function(e){return e.replace(/[A-Z]/g,function(t){return"-"+t.toLowerCase()}).toLowerCase()},dS=cS,fS=dS,pS=function(e){var t=/[height|width]$/;return t.test(e)},jf=function(e){var t="",n=Object.keys(e);return n.forEach(function(r,i){var o=e[r];r=fS(r),pS(r)&&typeof o=="number"&&(o=o+"px"),o===!0?t+=r:o===!1?t+="not "+r:t+="("+r+": "+o+")",i<n.length-1&&(t+=" and ")}),t},hS=function(e){var t="";return typeof e=="string"?e:e instanceof Array?(e.forEach(function(n,r){t+=jf(n),r<e.length-1&&(t+=", ")}),t):jf(e)},mS=hS,av={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(K.exports);function n(o){return o&&o.__esModule?o:{default:o}}var r={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(l){return t.default.createElement("ul",{style:{display:"block"}},l)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(l){return t.default.createElement("button",null,l+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0},i=r;e.default=i})(av);var ns,Df;function vS(){if(Df)return ns;Df=1;function e(t){this.options=t,!t.deferSetup&&this.setup()}return e.prototype={constructor:e,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(t){return this.options===t||this.options.match===t}},ns=e,ns}var rs,zf;function lv(){if(zf)return rs;zf=1;function e(r,i){var o=0,l=r.length,a;for(o;o<l&&(a=i(r[o],o),a!==!1);o++);}function t(r){return Object.prototype.toString.apply(r)==="[object Array]"}function n(r){return typeof r=="function"}return rs={isFunction:n,isArray:t,each:e},rs}var is,$f;function gS(){if($f)return is;$f=1;var e=vS(),t=lv().each;function n(r,i){this.query=r,this.isUnconditional=i,this.handlers=[],this.mql=window.matchMedia(r);var o=this;this.listener=function(l){o.mql=l.currentTarget||l,o.assess()},this.mql.addListener(this.listener)}return n.prototype={constuctor:n,addHandler:function(r){var i=new e(r);this.handlers.push(i),this.matches()&&i.on()},removeHandler:function(r){var i=this.handlers;t(i,function(o,l){if(o.equals(r))return o.destroy(),!i.splice(l,1)})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){t(this.handlers,function(r){r.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var r=this.matches()?"on":"off";t(this.handlers,function(i){i[r]()})}},is=n,is}var os,Af;function yS(){if(Af)return os;Af=1;var e=gS(),t=lv(),n=t.each,r=t.isFunction,i=t.isArray;function o(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}return o.prototype={constructor:o,register:function(l,a,s){var u=this.queries,d=s&&this.browserIsIncapable;return u[l]||(u[l]=new e(l,d)),r(a)&&(a={match:a}),i(a)||(a=[a]),n(a,function(c){r(c)&&(c={match:c}),u[l].addHandler(c)}),this},unregister:function(l,a){var s=this.queries[l];return s&&(a?s.removeHandler(a):(s.clear(),delete this.queries[l])),this}},os=o,os}var as,Nf;function wS(){if(Nf)return as;Nf=1;var e=yS();return as=new e,as}(function(e){function t(S){return t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(M){return typeof M}:function(M){return M&&typeof Symbol=="function"&&M.constructor===Symbol&&M!==Symbol.prototype?"symbol":typeof M},t(S)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(K.exports),r=cl,i=a(mS),o=a(av),l=G;function a(S){return S&&S.__esModule?S:{default:S}}function s(){return s=Object.assign||function(S){for(var M=1;M<arguments.length;M++){var j=arguments[M];for(var z in j)Object.prototype.hasOwnProperty.call(j,z)&&(S[z]=j[z])}return S},s.apply(this,arguments)}function u(S,M){var j=Object.keys(S);if(Object.getOwnPropertySymbols){var z=Object.getOwnPropertySymbols(S);M&&(z=z.filter(function(A){return Object.getOwnPropertyDescriptor(S,A).enumerable})),j.push.apply(j,z)}return j}function d(S){for(var M=1;M<arguments.length;M++){var j=arguments[M]!=null?arguments[M]:{};M%2?u(Object(j),!0).forEach(function(z){O(S,z,j[z])}):Object.getOwnPropertyDescriptors?Object.defineProperties(S,Object.getOwnPropertyDescriptors(j)):u(Object(j)).forEach(function(z){Object.defineProperty(S,z,Object.getOwnPropertyDescriptor(j,z))})}return S}function c(S,M){if(!(S instanceof M))throw new TypeError("Cannot call a class as a function")}function f(S,M){for(var j=0;j<M.length;j++){var z=M[j];z.enumerable=z.enumerable||!1,z.configurable=!0,"value"in z&&(z.writable=!0),Object.defineProperty(S,z.key,z)}}function h(S,M,j){return M&&f(S.prototype,M),j&&f(S,j),Object.defineProperty(S,"prototype",{writable:!1}),S}function v(S,M){if(typeof M!="function"&&M!==null)throw new TypeError("Super expression must either be null or a function");S.prototype=Object.create(M&&M.prototype,{constructor:{value:S,writable:!0,configurable:!0}}),Object.defineProperty(S,"prototype",{writable:!1}),M&&y(S,M)}function y(S,M){return y=Object.setPrototypeOf||function(z,A){return z.__proto__=A,z},y(S,M)}function k(S){var M=g();return function(){var z=x(S),A;if(M){var $=x(this).constructor;A=Reflect.construct(z,arguments,$)}else A=z.apply(this,arguments);return m(this,A)}}function m(S,M){if(M&&(t(M)==="object"||typeof M=="function"))return M;if(M!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return p(S)}function p(S){if(S===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return S}function g(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function x(S){return x=Object.setPrototypeOf?Object.getPrototypeOf:function(j){return j.__proto__||Object.getPrototypeOf(j)},x(S)}function O(S,M,j){return M in S?Object.defineProperty(S,M,{value:j,enumerable:!0,configurable:!0,writable:!0}):S[M]=j,S}var P=(0,l.canUseDOM)()&&wS(),E=function(S){v(j,S);var M=k(j);function j(z){var A;return c(this,j),A=M.call(this,z),O(p(A),"innerSliderRefHandler",function($){return A.innerSlider=$}),O(p(A),"slickPrev",function(){return A.innerSlider.slickPrev()}),O(p(A),"slickNext",function(){return A.innerSlider.slickNext()}),O(p(A),"slickGoTo",function($){var N=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return A.innerSlider.slickGoTo($,N)}),O(p(A),"slickPause",function(){return A.innerSlider.pause("paused")}),O(p(A),"slickPlay",function(){return A.innerSlider.autoPlay("play")}),A.state={breakpoint:null},A._responsiveMediaHandlers=[],A}return h(j,[{key:"media",value:function(A,$){P.register(A,$),this._responsiveMediaHandlers.push({query:A,handler:$})}},{key:"componentDidMount",value:function(){var A=this;if(this.props.responsive){var $=this.props.responsive.map(function(I){return I.breakpoint});$.sort(function(I,Y){return I-Y}),$.forEach(function(I,Y){var R;Y===0?R=(0,i.default)({minWidth:0,maxWidth:I}):R=(0,i.default)({minWidth:$[Y-1]+1,maxWidth:I}),(0,l.canUseDOM)()&&A.media(R,function(){A.setState({breakpoint:I})})});var N=(0,i.default)({minWidth:$.slice(-1)[0]});(0,l.canUseDOM)()&&this.media(N,function(){A.setState({breakpoint:null})})}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach(function(A){P.unregister(A.query,A.handler)})}},{key:"render",value:function(){var A=this,$,N;this.state.breakpoint?(N=this.props.responsive.filter(function(q){return q.breakpoint===A.state.breakpoint}),$=N[0].settings==="unslick"?"unslick":d(d(d({},o.default),this.props),N[0].settings)):$=d(d({},o.default),this.props),$.centerMode&&($.slidesToScroll>1,$.slidesToScroll=1),$.fade&&($.slidesToShow>1,$.slidesToScroll>1,$.slidesToShow=1,$.slidesToScroll=1);var I=n.default.Children.toArray(this.props.children);I=I.filter(function(q){return typeof q=="string"?!!q.trim():!!q}),$.variableWidth&&($.rows>1||$.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),$.variableWidth=!1);for(var Y=[],R=null,T=0;T<I.length;T+=$.rows*$.slidesPerRow){for(var D=[],U=T;U<T+$.rows*$.slidesPerRow;U+=$.slidesPerRow){for(var V=[],H=U;H<U+$.slidesPerRow&&($.variableWidth&&I[H].props.style&&(R=I[H].props.style.width),!(H>=I.length));H+=1)V.push(n.default.cloneElement(I[H],{key:100*T+10*U+H,tabIndex:-1,style:{width:"".concat(100/$.slidesPerRow,"%"),display:"inline-block"}}));D.push(n.default.createElement("div",{key:10*T+U},V))}$.variableWidth?Y.push(n.default.createElement("div",{key:T,style:{width:R}},D)):Y.push(n.default.createElement("div",{key:T},D))}if($==="unslick"){var b="regular slider "+(this.props.className||"");return n.default.createElement("div",{className:b},I)}else Y.length<=$.slidesToShow&&($.unslick=!0);return n.default.createElement(r.InnerSlider,s({style:this.props.style,ref:this.innerSliderRefHandler},$),Y)}}]),j}(n.default.Component);e.default=E})($m);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n($m);function n(i){return i&&i.__esModule?i:{default:i}}var r=t.default;e.default=r})(zm);const sv=ja(zm);const xS=C.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    overflow: hidden;
    background-color: transparent;
`,SS=C.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    

    @media screen and (max-width: ${_.tablet}) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }   
`,kS=C.img`
    height: 40vh;
    border-radius: 20px;
`,ES=C.div`
    margin: 20px;
    display: inline-block;

    @media screen and (max-width: ${_.notebook}) {
        width: 90%;
    }

    ${({containerWidth:e})=>e?`width: ${e}`:"width: 100%"}

`,bS=e=>{const t={dots:!0,infinite:!0,speed:1e3,slidesToShow:1,slidesToScroll:1,arrows:!1,autoplay:!0,autoplaySpeed:2500};return w(ES,{containerWidth:e.width,children:w(sv,{...t,children:e.carouselData.map((n,r)=>w(xS,{children:w(SS,{children:w(kS,{src:n.image,alt:n.alt})})},r))})})},_S="/Site-Serra/assets/membros-1.26cb4867.svg",CS="/Site-Serra/assets/membros-2.457898e5.svg",OS="/Site-Serra/assets/missao-icon.4dc65479.svg",PS="/Site-Serra/assets/visao-icon.75e2e4de.svg",TS="/Site-Serra/assets/valores-icon.b6d7390b.svg",Te={members:[{image:_S,alt:"Foto tirada na \xFAltima imers\xE3o da Serra Jr. Engenharia"},{image:CS,alt:"Foto tirada na \xFAltima imers\xE3o da Serra Jr. Engenharia"}],membersText:"A Serra Jr. Engenharia, \xE9 uma Empresa J\xFAnior vinculada ao Instituto Polit\xE9cnico da Universidade do Estado do Rio de Janeiro, localizada em Nova Friburgo. Tem como escopo a presta\xE7\xE3o de servi\xE7os como prototipagem, automa\xE7\xE3o, desenho t\xE9cnico industrial, projeto e manuten\xE7\xE3o de equipamentos e o desenvolvimento de websites e sistemas web. Tem como membros alunos dos cursos de Engenharia Mec\xE2nica e de Computa\xE7\xE3o atuando em regime de voluntariado, determinados a adquirir experi\xEAncia colocando seus conhecimentos em pr\xE1tica, com o objetivo de trazer inova\xE7\xE3o e excel\xEAncia ao mercado. Al\xE9m disso, conta com o suporte e orienta\xE7\xE3o dos professores doutores e t\xE9cnicos da institui\xE7\xE3o. O faturamento \xE9 integralmente destinado \xE0 manuten\xE7\xE3o financeira da empresa e para o desenvolvimento t\xE9cnico e intelectual de seus membros, com cursos, treinamentos ou outras oportunidades que contribuam para a capacita\xE7\xE3o profissional, al\xE9m das viv\xEAncias experienciadas na Universidade.",icons:[{image:OS,imageAlt:"Miss\xE3o",titleText:"Miss\xE3o",hasList:!1,list:void 0,content:"Promover o desenvolvimento e evolu\xE7\xE3o dos acad\xEAmicos para que sejam capazes de impactar e agregar valores \xE0s pessoas e empresas de Nova Friburgo e regi\xE3o, atrav\xE9s de projetos mec\xE2nicos e de computa\xE7\xE3o."},{image:PS,imageAlt:"Vis\xE3o",titleText:"Vis\xE3o",hasList:!1,list:void 0,content:"Idealizar nossa empresa como exemplo em inova\xE7\xE3o e qualidade de servi\xE7os."},{image:TS,imageAlt:"Valores",titleText:"Valores",hasList:!0,list:["Dedica\xE7\xE3o por excel\xEAncia;","Gest\xE3o segura;","Impactar nossa era;","Evolu\xE7\xE3o constante;","Responsabilidade com os clientes."],content:void 0}]},LS=C.div`
    width: 100%;
    height: 6rem;
    min-height: 30px;
    background-color: ${({titleColor:e})=>e!=null?e:"#FD6300"};
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 1.6rem;
    font-weight: 600;
    margin-bottom: 20px;

    @media screen and (min-width: ${_.largeDesktop}) {
        font-size: 2.5rem;
        height: 8rem;
    }

    @media screen and (min-width: ${_.extraLargeDesktop}) {
        font-size: 4.5rem;
        height: 10rem;
    }
`,If=C.div`
    border-radius: 1rem;
    background-color: #EDEDED;
    height: 100%;
    width: 80vw;
    background-color: #fff;
    margin-top: 5%;
    margin-bottom: 5%;

    @media screen and (max-width: ${_.tablet}) {
        width: 95vw;
    }


    @media screen and (min-width: ${_.largeDesktop}) {
        width: 90vw;
    }

    @media screen and (min-width: ${_.extraLargeDesktop}) {
        width: 85vw;
        padding: 80px 0px;
    }
`,Ff=C.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media screen and (max-width: ${_.notebook}) {
        flex-direction: column;
        padding-bottom: 4%;
    }

`,MS=C.a`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 1.2rem;
    padding-bottom: 1.2rem;
    text-decoration: none;
`,RS=C.button`
    background-color: ${({buttonColor:e})=>e!=null?e:"#FD6300"};
    border: none;
    width: 50%;
    padding: 0.6rem;
    font-size: 1.5rem;
    font-weight: 500;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    cursor: pointer;

    &:hover{
        opacity: 0.8;
    }

    @media screen and (min-width: ${_.desktop}) {
        width: 30%;
        font-size: 30px;
    }
    @media screen and (min-width: ${_.largeDesktop}) {
        width: 30%;
        font-size: 40px;
    }
    @media screen and (min-width: ${_.extraLargeDesktop}) {
        width: 30%;
        font-size: 60px;
    }
`,jS=C.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2.5rem;
    padding-bottom: 2.5rem;
    background-color: #E6E6E5;
    width: 100%;
    
    ${({carouselStyle:e})=>e?null:`display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;`}

    
`,DS=C.span`
    color: black;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    text-align: justify;
    padding-left: 4%;
    padding-top: 2%;
    padding-bottom: 6%;

    @media screen and (max-width: ${_.tablet}) {
        font-size: 20px;
        padding-left: 1%;
    }

    @media screen and (min-width: ${_.desktop}) {
        font-size: 25px;
    }

    @media screen and (min-width: ${_.largeDesktop}) {
        font-size: 40px;
    }

    @media screen and (min-width: ${_.extraLargeDesktop}) {
        font-size: 50px;
    }
`,zS=C.span`
    color: black;
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    text-align: justify;
    padding: 20px 30px;

    @media screen and (max-width: ${_.tablet}) {
        font-size: 20px;
    }

    @media screen and (min-width: ${_.desktop}) {
        font-size: 30px;
        width: 90%;
    }

    @media screen and (min-width: ${_.largeDesktop}) {
        font-size: 40px;
        width: 80%;
    }

    @media screen and (min-width: ${_.extraLargeDesktop}) {
        font-size: 60px;
        width: 80%;
    }
`,Hf=C.div`
    width: 80%;
    margin-top: 2%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: ${_.tablet}) {
        width: 90%;
    }
    
`,$S=C.img`
    width: 45%;
    height: 45%;
    display: flex;
    justify-self: center;
    align-self: center;
    margin: 40px;
    border-radius: 1rem;

    @media screen and (max-width: ${_.tablet}) {
        width:70%;
        height: 70%;
    }

    @media screen and (min-width: ${_.extraLargeDesktop}) {
        width: 90%;
        height: 90%;
    }
`,uv=({title:e,buttonUrl:t,buttonTitle:n,color:r,hasButton:i,text:o,image:l,alt:a,hasCarousel:s})=>Q(jS,{carouselStyle:s,children:[w(LS,{titleColor:r,children:e}),s?w(If,{children:Q(Ff,{children:[w(Hf,{children:w(DS,{children:Te.membersText})}),w(bS,{width:"50%",carouselData:Te.members})]})}):Q(If,{children:[Q(Ff,{children:[w(Hf,{children:w(zS,{children:o})}),w($S,{src:l,alt:a})]}),i?w(MS,{href:t,children:w(RS,{buttonColor:r,children:n})}):null]})]});var cv={exports:{}};(function(e,t){(function(n,r){e.exports=r(K.exports)})(typeof self<"u"?self:Kr,n=>(()=>{var r={7403:(a,s,u)=>{u.d(s,{default:()=>R});var d=u(4087),c=u.n(d);const f=function(T){return new RegExp(/<[a-z][\s\S]*>/i).test(T)},h=function(T){var D=document.createElement("div");return D.innerHTML=T,D.childNodes},v=function(T,D){return Math.floor(Math.random()*(D-T+1))+T};var y="TYPE_CHARACTER",k="REMOVE_CHARACTER",m="REMOVE_ALL",p="REMOVE_LAST_VISIBLE_NODE",g="PAUSE_FOR",x="CALL_FUNCTION",O="ADD_HTML_TAG_ELEMENT",P="CHANGE_DELETE_SPEED",E="CHANGE_DELAY",S="CHANGE_CURSOR",M="PASTE_STRING",j="HTML_TAG";function z(T,D){var U=Object.keys(T);if(Object.getOwnPropertySymbols){var V=Object.getOwnPropertySymbols(T);D&&(V=V.filter(function(H){return Object.getOwnPropertyDescriptor(T,H).enumerable})),U.push.apply(U,V)}return U}function A(T){for(var D=1;D<arguments.length;D++){var U=arguments[D]!=null?arguments[D]:{};D%2?z(Object(U),!0).forEach(function(V){Y(T,V,U[V])}):Object.getOwnPropertyDescriptors?Object.defineProperties(T,Object.getOwnPropertyDescriptors(U)):z(Object(U)).forEach(function(V){Object.defineProperty(T,V,Object.getOwnPropertyDescriptor(U,V))})}return T}function $(T){return function(D){if(Array.isArray(D))return N(D)}(T)||function(D){if(typeof Symbol<"u"&&D[Symbol.iterator]!=null||D["@@iterator"]!=null)return Array.from(D)}(T)||function(D,U){if(D){if(typeof D=="string")return N(D,U);var V=Object.prototype.toString.call(D).slice(8,-1);return V==="Object"&&D.constructor&&(V=D.constructor.name),V==="Map"||V==="Set"?Array.from(D):V==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(V)?N(D,U):void 0}}(T)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function N(T,D){(D==null||D>T.length)&&(D=T.length);for(var U=0,V=new Array(D);U<D;U++)V[U]=T[U];return V}function I(T,D){for(var U=0;U<D.length;U++){var V=D[U];V.enumerable=V.enumerable||!1,V.configurable=!0,"value"in V&&(V.writable=!0),Object.defineProperty(T,V.key,V)}}function Y(T,D,U){return D in T?Object.defineProperty(T,D,{value:U,enumerable:!0,configurable:!0,writable:!0}):T[D]=U,T}const R=function(){function T(V,H){var b=this;if(function(F,L){if(!(F instanceof L))throw new TypeError("Cannot call a class as a function")}(this,T),Y(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),Y(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),Y(this,"setupWrapperElement",function(){b.state.elements.container&&(b.state.elements.wrapper.className=b.options.wrapperClassName,b.state.elements.cursor.className=b.options.cursorClassName,b.state.elements.cursor.innerHTML=b.options.cursor,b.state.elements.container.innerHTML="",b.state.elements.container.appendChild(b.state.elements.wrapper),b.state.elements.container.appendChild(b.state.elements.cursor))}),Y(this,"start",function(){return b.state.eventLoopPaused=!1,b.runEventLoop(),b}),Y(this,"pause",function(){return b.state.eventLoopPaused=!0,b}),Y(this,"stop",function(){return b.state.eventLoop&&((0,d.cancel)(b.state.eventLoop),b.state.eventLoop=null),b}),Y(this,"pauseFor",function(F){return b.addEventToQueue(g,{ms:F}),b}),Y(this,"typeOutAllStrings",function(){return typeof b.options.strings=="string"?(b.typeString(b.options.strings).pauseFor(b.options.pauseFor),b):(b.options.strings.forEach(function(F){b.typeString(F).pauseFor(b.options.pauseFor).deleteAll(b.options.deleteSpeed)}),b)}),Y(this,"typeString",function(F){var L=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(f(F))return b.typeOutHTMLString(F,L);if(F){var J=b.options||{},W=J.stringSplitter,ee=typeof W=="function"?W(F):F.split("");b.typeCharacters(ee,L)}return b}),Y(this,"pasteString",function(F){var L=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return f(F)?b.typeOutHTMLString(F,L,!0):(F&&b.addEventToQueue(M,{character:F,node:L}),b)}),Y(this,"typeOutHTMLString",function(F){var L=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,J=arguments.length>2?arguments[2]:void 0,W=h(F);if(W.length>0)for(var ee=0;ee<W.length;ee++){var ie=W[ee],se=ie.innerHTML;ie&&ie.nodeType!==3?(ie.innerHTML="",b.addEventToQueue(O,{node:ie,parentNode:L}),J?b.pasteString(se,ie):b.typeString(se,ie)):ie.textContent&&(J?b.pasteString(ie.textContent,L):b.typeString(ie.textContent,L))}return b}),Y(this,"deleteAll",function(){var F=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"natural";return b.addEventToQueue(m,{speed:F}),b}),Y(this,"changeDeleteSpeed",function(F){if(!F)throw new Error("Must provide new delete speed");return b.addEventToQueue(P,{speed:F}),b}),Y(this,"changeDelay",function(F){if(!F)throw new Error("Must provide new delay");return b.addEventToQueue(E,{delay:F}),b}),Y(this,"changeCursor",function(F){if(!F)throw new Error("Must provide new cursor");return b.addEventToQueue(S,{cursor:F}),b}),Y(this,"deleteChars",function(F){if(!F)throw new Error("Must provide amount of characters to delete");for(var L=0;L<F;L++)b.addEventToQueue(k);return b}),Y(this,"callFunction",function(F,L){if(!F||typeof F!="function")throw new Error("Callbak must be a function");return b.addEventToQueue(x,{cb:F,thisArg:L}),b}),Y(this,"typeCharacters",function(F){var L=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!F||!Array.isArray(F))throw new Error("Characters must be an array");return F.forEach(function(J){b.addEventToQueue(y,{character:J,node:L})}),b}),Y(this,"removeCharacters",function(F){if(!F||!Array.isArray(F))throw new Error("Characters must be an array");return F.forEach(function(){b.addEventToQueue(k)}),b}),Y(this,"addEventToQueue",function(F,L){var J=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return b.addEventToStateProperty(F,L,J,"eventQueue")}),Y(this,"addReverseCalledEvent",function(F,L){var J=arguments.length>2&&arguments[2]!==void 0&&arguments[2],W=b.options.loop;return W?b.addEventToStateProperty(F,L,J,"reverseCalledEvents"):b}),Y(this,"addEventToStateProperty",function(F,L){var J=arguments.length>2&&arguments[2]!==void 0&&arguments[2],W=arguments.length>3?arguments[3]:void 0,ee={eventName:F,eventArgs:L||{}};return b.state[W]=J?[ee].concat($(b.state[W])):[].concat($(b.state[W]),[ee]),b}),Y(this,"runEventLoop",function(){b.state.lastFrameTime||(b.state.lastFrameTime=Date.now());var F=Date.now(),L=F-b.state.lastFrameTime;if(!b.state.eventQueue.length){if(!b.options.loop)return;b.state.eventQueue=$(b.state.calledEvents),b.state.calledEvents=[],b.options=A({},b.state.initialOptions)}if(b.state.eventLoop=c()(b.runEventLoop),!b.state.eventLoopPaused){if(b.state.pauseUntil){if(F<b.state.pauseUntil)return;b.state.pauseUntil=null}var J,W=$(b.state.eventQueue),ee=W.shift();if(!(L<=(J=ee.eventName===p||ee.eventName===k?b.options.deleteSpeed==="natural"?v(40,80):b.options.deleteSpeed:b.options.delay==="natural"?v(120,160):b.options.delay))){var ie=ee.eventName,se=ee.eventArgs;switch(b.logInDevMode({currentEvent:ee,state:b.state,delay:J}),ie){case M:case y:var ne=se.character,Oe=se.node,Ne=document.createTextNode(ne),oe=Ne;b.options.onCreateTextNode&&typeof b.options.onCreateTextNode=="function"&&(oe=b.options.onCreateTextNode(ne,Ne)),oe&&(Oe?Oe.appendChild(oe):b.state.elements.wrapper.appendChild(oe)),b.state.visibleNodes=[].concat($(b.state.visibleNodes),[{type:"TEXT_NODE",character:ne,node:oe}]);break;case k:W.unshift({eventName:p,eventArgs:{removingCharacterNode:!0}});break;case g:var De=ee.eventArgs.ms;b.state.pauseUntil=Date.now()+parseInt(De);break;case x:var ce=ee.eventArgs,Me=ce.cb,_n=ce.thisArg;Me.call(_n,{elements:b.state.elements});break;case O:var Pe=ee.eventArgs,Jt=Pe.node,Ft=Pe.parentNode;Ft?Ft.appendChild(Jt):b.state.elements.wrapper.appendChild(Jt),b.state.visibleNodes=[].concat($(b.state.visibleNodes),[{type:j,node:Jt,parentNode:Ft||b.state.elements.wrapper}]);break;case m:var ot=b.state.visibleNodes,te=se.speed,he=[];te&&he.push({eventName:P,eventArgs:{speed:te,temp:!0}});for(var Qn=0,zr=ot.length;Qn<zr;Qn++)he.push({eventName:p,eventArgs:{removingCharacterNode:!1}});te&&he.push({eventName:P,eventArgs:{speed:b.options.deleteSpeed,temp:!0}}),W.unshift.apply(W,he);break;case p:var jt=ee.eventArgs.removingCharacterNode;if(b.state.visibleNodes.length){var gl=b.state.visibleNodes.pop(),Cv=gl.type,Gi=gl.node,Ov=gl.character;b.options.onRemoveNode&&typeof b.options.onRemoveNode=="function"&&b.options.onRemoveNode({node:Gi,character:Ov}),Gi&&Gi.parentNode.removeChild(Gi),Cv===j&&jt&&W.unshift({eventName:p,eventArgs:{}})}break;case P:b.options.deleteSpeed=ee.eventArgs.speed;break;case E:b.options.delay=ee.eventArgs.delay;break;case S:b.options.cursor=ee.eventArgs.cursor,b.state.elements.cursor.innerHTML=ee.eventArgs.cursor}b.options.loop&&(ee.eventName===p||ee.eventArgs&&ee.eventArgs.temp||(b.state.calledEvents=[].concat($(b.state.calledEvents),[ee]))),b.state.eventQueue=W,b.state.lastFrameTime=F}}}),V)if(typeof V=="string"){var q=document.querySelector(V);if(!q)throw new Error("Could not find container element");this.state.elements.container=q}else this.state.elements.container=V;H&&(this.options=A(A({},this.options),H)),this.state.initialOptions=A({},this.options),this.init()}var D,U;return D=T,(U=[{key:"init",value:function(){var V,H;this.setupWrapperElement(),this.addEventToQueue(S,{cursor:this.options.cursor},!0),this.addEventToQueue(m,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(V=".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}",(H=document.createElement("style")).appendChild(document.createTextNode(V)),document.head.appendChild(H),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),this.options.autoStart===!0&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(V){this.options.devMode&&console.log(V)}}])&&I(D.prototype,U),Object.defineProperty(D,"prototype",{writable:!1}),T}()},8552:(a,s,u)=>{var d=u(852)(u(5639),"DataView");a.exports=d},1989:(a,s,u)=>{var d=u(1789),c=u(401),f=u(7667),h=u(1327),v=u(1866);function y(k){var m=-1,p=k==null?0:k.length;for(this.clear();++m<p;){var g=k[m];this.set(g[0],g[1])}}y.prototype.clear=d,y.prototype.delete=c,y.prototype.get=f,y.prototype.has=h,y.prototype.set=v,a.exports=y},8407:(a,s,u)=>{var d=u(7040),c=u(4125),f=u(2117),h=u(7518),v=u(4705);function y(k){var m=-1,p=k==null?0:k.length;for(this.clear();++m<p;){var g=k[m];this.set(g[0],g[1])}}y.prototype.clear=d,y.prototype.delete=c,y.prototype.get=f,y.prototype.has=h,y.prototype.set=v,a.exports=y},7071:(a,s,u)=>{var d=u(852)(u(5639),"Map");a.exports=d},3369:(a,s,u)=>{var d=u(4785),c=u(1285),f=u(6e3),h=u(9916),v=u(5265);function y(k){var m=-1,p=k==null?0:k.length;for(this.clear();++m<p;){var g=k[m];this.set(g[0],g[1])}}y.prototype.clear=d,y.prototype.delete=c,y.prototype.get=f,y.prototype.has=h,y.prototype.set=v,a.exports=y},3818:(a,s,u)=>{var d=u(852)(u(5639),"Promise");a.exports=d},8525:(a,s,u)=>{var d=u(852)(u(5639),"Set");a.exports=d},8668:(a,s,u)=>{var d=u(3369),c=u(619),f=u(2385);function h(v){var y=-1,k=v==null?0:v.length;for(this.__data__=new d;++y<k;)this.add(v[y])}h.prototype.add=h.prototype.push=c,h.prototype.has=f,a.exports=h},6384:(a,s,u)=>{var d=u(8407),c=u(7465),f=u(3779),h=u(7599),v=u(4758),y=u(4309);function k(m){var p=this.__data__=new d(m);this.size=p.size}k.prototype.clear=c,k.prototype.delete=f,k.prototype.get=h,k.prototype.has=v,k.prototype.set=y,a.exports=k},2705:(a,s,u)=>{var d=u(5639).Symbol;a.exports=d},1149:(a,s,u)=>{var d=u(5639).Uint8Array;a.exports=d},577:(a,s,u)=>{var d=u(852)(u(5639),"WeakMap");a.exports=d},4963:a=>{a.exports=function(s,u){for(var d=-1,c=s==null?0:s.length,f=0,h=[];++d<c;){var v=s[d];u(v,d,s)&&(h[f++]=v)}return h}},4636:(a,s,u)=>{var d=u(2545),c=u(5694),f=u(1469),h=u(4144),v=u(5776),y=u(6719),k=Object.prototype.hasOwnProperty;a.exports=function(m,p){var g=f(m),x=!g&&c(m),O=!g&&!x&&h(m),P=!g&&!x&&!O&&y(m),E=g||x||O||P,S=E?d(m.length,String):[],M=S.length;for(var j in m)!p&&!k.call(m,j)||E&&(j=="length"||O&&(j=="offset"||j=="parent")||P&&(j=="buffer"||j=="byteLength"||j=="byteOffset")||v(j,M))||S.push(j);return S}},2488:a=>{a.exports=function(s,u){for(var d=-1,c=u.length,f=s.length;++d<c;)s[f+d]=u[d];return s}},2908:a=>{a.exports=function(s,u){for(var d=-1,c=s==null?0:s.length;++d<c;)if(u(s[d],d,s))return!0;return!1}},8470:(a,s,u)=>{var d=u(7813);a.exports=function(c,f){for(var h=c.length;h--;)if(d(c[h][0],f))return h;return-1}},8866:(a,s,u)=>{var d=u(2488),c=u(1469);a.exports=function(f,h,v){var y=h(f);return c(f)?y:d(y,v(f))}},4239:(a,s,u)=>{var d=u(2705),c=u(9607),f=u(2333),h=d?d.toStringTag:void 0;a.exports=function(v){return v==null?v===void 0?"[object Undefined]":"[object Null]":h&&h in Object(v)?c(v):f(v)}},9454:(a,s,u)=>{var d=u(4239),c=u(7005);a.exports=function(f){return c(f)&&d(f)=="[object Arguments]"}},939:(a,s,u)=>{var d=u(2492),c=u(7005);a.exports=function f(h,v,y,k,m){return h===v||(h==null||v==null||!c(h)&&!c(v)?h!=h&&v!=v:d(h,v,y,k,f,m))}},2492:(a,s,u)=>{var d=u(6384),c=u(7114),f=u(8351),h=u(6096),v=u(4160),y=u(1469),k=u(4144),m=u(6719),p="[object Arguments]",g="[object Array]",x="[object Object]",O=Object.prototype.hasOwnProperty;a.exports=function(P,E,S,M,j,z){var A=y(P),$=y(E),N=A?g:v(P),I=$?g:v(E),Y=(N=N==p?x:N)==x,R=(I=I==p?x:I)==x,T=N==I;if(T&&k(P)){if(!k(E))return!1;A=!0,Y=!1}if(T&&!Y)return z||(z=new d),A||m(P)?c(P,E,S,M,j,z):f(P,E,N,S,M,j,z);if(!(1&S)){var D=Y&&O.call(P,"__wrapped__"),U=R&&O.call(E,"__wrapped__");if(D||U){var V=D?P.value():P,H=U?E.value():E;return z||(z=new d),j(V,H,S,M,z)}}return!!T&&(z||(z=new d),h(P,E,S,M,j,z))}},8458:(a,s,u)=>{var d=u(3560),c=u(5346),f=u(3218),h=u(346),v=/^\[object .+?Constructor\]$/,y=Function.prototype,k=Object.prototype,m=y.toString,p=k.hasOwnProperty,g=RegExp("^"+m.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");a.exports=function(x){return!(!f(x)||c(x))&&(d(x)?g:v).test(h(x))}},8749:(a,s,u)=>{var d=u(4239),c=u(1780),f=u(7005),h={};h["[object Float32Array]"]=h["[object Float64Array]"]=h["[object Int8Array]"]=h["[object Int16Array]"]=h["[object Int32Array]"]=h["[object Uint8Array]"]=h["[object Uint8ClampedArray]"]=h["[object Uint16Array]"]=h["[object Uint32Array]"]=!0,h["[object Arguments]"]=h["[object Array]"]=h["[object ArrayBuffer]"]=h["[object Boolean]"]=h["[object DataView]"]=h["[object Date]"]=h["[object Error]"]=h["[object Function]"]=h["[object Map]"]=h["[object Number]"]=h["[object Object]"]=h["[object RegExp]"]=h["[object Set]"]=h["[object String]"]=h["[object WeakMap]"]=!1,a.exports=function(v){return f(v)&&c(v.length)&&!!h[d(v)]}},280:(a,s,u)=>{var d=u(5726),c=u(6916),f=Object.prototype.hasOwnProperty;a.exports=function(h){if(!d(h))return c(h);var v=[];for(var y in Object(h))f.call(h,y)&&y!="constructor"&&v.push(y);return v}},2545:a=>{a.exports=function(s,u){for(var d=-1,c=Array(s);++d<s;)c[d]=u(d);return c}},1717:a=>{a.exports=function(s){return function(u){return s(u)}}},4757:a=>{a.exports=function(s,u){return s.has(u)}},4429:(a,s,u)=>{var d=u(5639)["__core-js_shared__"];a.exports=d},7114:(a,s,u)=>{var d=u(8668),c=u(2908),f=u(4757);a.exports=function(h,v,y,k,m,p){var g=1&y,x=h.length,O=v.length;if(x!=O&&!(g&&O>x))return!1;var P=p.get(h),E=p.get(v);if(P&&E)return P==v&&E==h;var S=-1,M=!0,j=2&y?new d:void 0;for(p.set(h,v),p.set(v,h);++S<x;){var z=h[S],A=v[S];if(k)var $=g?k(A,z,S,v,h,p):k(z,A,S,h,v,p);if($!==void 0){if($)continue;M=!1;break}if(j){if(!c(v,function(N,I){if(!f(j,I)&&(z===N||m(z,N,y,k,p)))return j.push(I)})){M=!1;break}}else if(z!==A&&!m(z,A,y,k,p)){M=!1;break}}return p.delete(h),p.delete(v),M}},8351:(a,s,u)=>{var d=u(2705),c=u(1149),f=u(7813),h=u(7114),v=u(8776),y=u(1814),k=d?d.prototype:void 0,m=k?k.valueOf:void 0;a.exports=function(p,g,x,O,P,E,S){switch(x){case"[object DataView]":if(p.byteLength!=g.byteLength||p.byteOffset!=g.byteOffset)return!1;p=p.buffer,g=g.buffer;case"[object ArrayBuffer]":return!(p.byteLength!=g.byteLength||!E(new c(p),new c(g)));case"[object Boolean]":case"[object Date]":case"[object Number]":return f(+p,+g);case"[object Error]":return p.name==g.name&&p.message==g.message;case"[object RegExp]":case"[object String]":return p==g+"";case"[object Map]":var M=v;case"[object Set]":var j=1&O;if(M||(M=y),p.size!=g.size&&!j)return!1;var z=S.get(p);if(z)return z==g;O|=2,S.set(p,g);var A=h(M(p),M(g),O,P,E,S);return S.delete(p),A;case"[object Symbol]":if(m)return m.call(p)==m.call(g)}return!1}},6096:(a,s,u)=>{var d=u(8234),c=Object.prototype.hasOwnProperty;a.exports=function(f,h,v,y,k,m){var p=1&v,g=d(f),x=g.length;if(x!=d(h).length&&!p)return!1;for(var O=x;O--;){var P=g[O];if(!(p?P in h:c.call(h,P)))return!1}var E=m.get(f),S=m.get(h);if(E&&S)return E==h&&S==f;var M=!0;m.set(f,h),m.set(h,f);for(var j=p;++O<x;){var z=f[P=g[O]],A=h[P];if(y)var $=p?y(A,z,P,h,f,m):y(z,A,P,f,h,m);if(!($===void 0?z===A||k(z,A,v,y,m):$)){M=!1;break}j||(j=P=="constructor")}if(M&&!j){var N=f.constructor,I=h.constructor;N==I||!("constructor"in f)||!("constructor"in h)||typeof N=="function"&&N instanceof N&&typeof I=="function"&&I instanceof I||(M=!1)}return m.delete(f),m.delete(h),M}},1957:(a,s,u)=>{var d=typeof u.g=="object"&&u.g&&u.g.Object===Object&&u.g;a.exports=d},8234:(a,s,u)=>{var d=u(8866),c=u(9551),f=u(3674);a.exports=function(h){return d(h,f,c)}},5050:(a,s,u)=>{var d=u(7019);a.exports=function(c,f){var h=c.__data__;return d(f)?h[typeof f=="string"?"string":"hash"]:h.map}},852:(a,s,u)=>{var d=u(8458),c=u(7801);a.exports=function(f,h){var v=c(f,h);return d(v)?v:void 0}},9607:(a,s,u)=>{var d=u(2705),c=Object.prototype,f=c.hasOwnProperty,h=c.toString,v=d?d.toStringTag:void 0;a.exports=function(y){var k=f.call(y,v),m=y[v];try{y[v]=void 0;var p=!0}catch{}var g=h.call(y);return p&&(k?y[v]=m:delete y[v]),g}},9551:(a,s,u)=>{var d=u(4963),c=u(479),f=Object.prototype.propertyIsEnumerable,h=Object.getOwnPropertySymbols,v=h?function(y){return y==null?[]:(y=Object(y),d(h(y),function(k){return f.call(y,k)}))}:c;a.exports=v},4160:(a,s,u)=>{var d=u(8552),c=u(7071),f=u(3818),h=u(8525),v=u(577),y=u(4239),k=u(346),m="[object Map]",p="[object Promise]",g="[object Set]",x="[object WeakMap]",O="[object DataView]",P=k(d),E=k(c),S=k(f),M=k(h),j=k(v),z=y;(d&&z(new d(new ArrayBuffer(1)))!=O||c&&z(new c)!=m||f&&z(f.resolve())!=p||h&&z(new h)!=g||v&&z(new v)!=x)&&(z=function(A){var $=y(A),N=$=="[object Object]"?A.constructor:void 0,I=N?k(N):"";if(I)switch(I){case P:return O;case E:return m;case S:return p;case M:return g;case j:return x}return $}),a.exports=z},7801:a=>{a.exports=function(s,u){return s==null?void 0:s[u]}},1789:(a,s,u)=>{var d=u(4536);a.exports=function(){this.__data__=d?d(null):{},this.size=0}},401:a=>{a.exports=function(s){var u=this.has(s)&&delete this.__data__[s];return this.size-=u?1:0,u}},7667:(a,s,u)=>{var d=u(4536),c=Object.prototype.hasOwnProperty;a.exports=function(f){var h=this.__data__;if(d){var v=h[f];return v==="__lodash_hash_undefined__"?void 0:v}return c.call(h,f)?h[f]:void 0}},1327:(a,s,u)=>{var d=u(4536),c=Object.prototype.hasOwnProperty;a.exports=function(f){var h=this.__data__;return d?h[f]!==void 0:c.call(h,f)}},1866:(a,s,u)=>{var d=u(4536);a.exports=function(c,f){var h=this.__data__;return this.size+=this.has(c)?0:1,h[c]=d&&f===void 0?"__lodash_hash_undefined__":f,this}},5776:a=>{var s=/^(?:0|[1-9]\d*)$/;a.exports=function(u,d){var c=typeof u;return!!(d=d==null?9007199254740991:d)&&(c=="number"||c!="symbol"&&s.test(u))&&u>-1&&u%1==0&&u<d}},7019:a=>{a.exports=function(s){var u=typeof s;return u=="string"||u=="number"||u=="symbol"||u=="boolean"?s!=="__proto__":s===null}},5346:(a,s,u)=>{var d,c=u(4429),f=(d=/[^.]+$/.exec(c&&c.keys&&c.keys.IE_PROTO||""))?"Symbol(src)_1."+d:"";a.exports=function(h){return!!f&&f in h}},5726:a=>{var s=Object.prototype;a.exports=function(u){var d=u&&u.constructor;return u===(typeof d=="function"&&d.prototype||s)}},7040:a=>{a.exports=function(){this.__data__=[],this.size=0}},4125:(a,s,u)=>{var d=u(8470),c=Array.prototype.splice;a.exports=function(f){var h=this.__data__,v=d(h,f);return!(v<0||(v==h.length-1?h.pop():c.call(h,v,1),--this.size,0))}},2117:(a,s,u)=>{var d=u(8470);a.exports=function(c){var f=this.__data__,h=d(f,c);return h<0?void 0:f[h][1]}},7518:(a,s,u)=>{var d=u(8470);a.exports=function(c){return d(this.__data__,c)>-1}},4705:(a,s,u)=>{var d=u(8470);a.exports=function(c,f){var h=this.__data__,v=d(h,c);return v<0?(++this.size,h.push([c,f])):h[v][1]=f,this}},4785:(a,s,u)=>{var d=u(1989),c=u(8407),f=u(7071);a.exports=function(){this.size=0,this.__data__={hash:new d,map:new(f||c),string:new d}}},1285:(a,s,u)=>{var d=u(5050);a.exports=function(c){var f=d(this,c).delete(c);return this.size-=f?1:0,f}},6e3:(a,s,u)=>{var d=u(5050);a.exports=function(c){return d(this,c).get(c)}},9916:(a,s,u)=>{var d=u(5050);a.exports=function(c){return d(this,c).has(c)}},5265:(a,s,u)=>{var d=u(5050);a.exports=function(c,f){var h=d(this,c),v=h.size;return h.set(c,f),this.size+=h.size==v?0:1,this}},8776:a=>{a.exports=function(s){var u=-1,d=Array(s.size);return s.forEach(function(c,f){d[++u]=[f,c]}),d}},4536:(a,s,u)=>{var d=u(852)(Object,"create");a.exports=d},6916:(a,s,u)=>{var d=u(5569)(Object.keys,Object);a.exports=d},1167:(a,s,u)=>{a=u.nmd(a);var d=u(1957),c=s&&!s.nodeType&&s,f=c&&a&&!a.nodeType&&a,h=f&&f.exports===c&&d.process,v=function(){try{return f&&f.require&&f.require("util").types||h&&h.binding&&h.binding("util")}catch{}}();a.exports=v},2333:a=>{var s=Object.prototype.toString;a.exports=function(u){return s.call(u)}},5569:a=>{a.exports=function(s,u){return function(d){return s(u(d))}}},5639:(a,s,u)=>{var d=u(1957),c=typeof self=="object"&&self&&self.Object===Object&&self,f=d||c||Function("return this")();a.exports=f},619:a=>{a.exports=function(s){return this.__data__.set(s,"__lodash_hash_undefined__"),this}},2385:a=>{a.exports=function(s){return this.__data__.has(s)}},1814:a=>{a.exports=function(s){var u=-1,d=Array(s.size);return s.forEach(function(c){d[++u]=c}),d}},7465:(a,s,u)=>{var d=u(8407);a.exports=function(){this.__data__=new d,this.size=0}},3779:a=>{a.exports=function(s){var u=this.__data__,d=u.delete(s);return this.size=u.size,d}},7599:a=>{a.exports=function(s){return this.__data__.get(s)}},4758:a=>{a.exports=function(s){return this.__data__.has(s)}},4309:(a,s,u)=>{var d=u(8407),c=u(7071),f=u(3369);a.exports=function(h,v){var y=this.__data__;if(y instanceof d){var k=y.__data__;if(!c||k.length<199)return k.push([h,v]),this.size=++y.size,this;y=this.__data__=new f(k)}return y.set(h,v),this.size=y.size,this}},346:a=>{var s=Function.prototype.toString;a.exports=function(u){if(u!=null){try{return s.call(u)}catch{}try{return u+""}catch{}}return""}},7813:a=>{a.exports=function(s,u){return s===u||s!=s&&u!=u}},5694:(a,s,u)=>{var d=u(9454),c=u(7005),f=Object.prototype,h=f.hasOwnProperty,v=f.propertyIsEnumerable,y=d(function(){return arguments}())?d:function(k){return c(k)&&h.call(k,"callee")&&!v.call(k,"callee")};a.exports=y},1469:a=>{var s=Array.isArray;a.exports=s},8612:(a,s,u)=>{var d=u(3560),c=u(1780);a.exports=function(f){return f!=null&&c(f.length)&&!d(f)}},4144:(a,s,u)=>{a=u.nmd(a);var d=u(5639),c=u(5062),f=s&&!s.nodeType&&s,h=f&&a&&!a.nodeType&&a,v=h&&h.exports===f?d.Buffer:void 0,y=(v?v.isBuffer:void 0)||c;a.exports=y},8446:(a,s,u)=>{var d=u(939);a.exports=function(c,f){return d(c,f)}},3560:(a,s,u)=>{var d=u(4239),c=u(3218);a.exports=function(f){if(!c(f))return!1;var h=d(f);return h=="[object Function]"||h=="[object GeneratorFunction]"||h=="[object AsyncFunction]"||h=="[object Proxy]"}},1780:a=>{a.exports=function(s){return typeof s=="number"&&s>-1&&s%1==0&&s<=9007199254740991}},3218:a=>{a.exports=function(s){var u=typeof s;return s!=null&&(u=="object"||u=="function")}},7005:a=>{a.exports=function(s){return s!=null&&typeof s=="object"}},6719:(a,s,u)=>{var d=u(8749),c=u(1717),f=u(1167),h=f&&f.isTypedArray,v=h?c(h):d;a.exports=v},3674:(a,s,u)=>{var d=u(4636),c=u(280),f=u(8612);a.exports=function(h){return f(h)?d(h):c(h)}},479:a=>{a.exports=function(){return[]}},5062:a=>{a.exports=function(){return!1}},75:function(a){(function(){var s,u,d,c,f,h;typeof performance<"u"&&performance!==null&&performance.now?a.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(a.exports=function(){return(s()-f)/1e6},u=process.hrtime,c=(s=function(){var v;return 1e9*(v=u())[0]+v[1]})(),h=1e9*process.uptime(),f=c-h):Date.now?(a.exports=function(){return Date.now()-d},d=Date.now()):(a.exports=function(){return new Date().getTime()-d},d=new Date().getTime())}).call(this)},4087:(a,s,u)=>{for(var d=u(75),c=typeof window>"u"?u.g:window,f=["moz","webkit"],h="AnimationFrame",v=c["request"+h],y=c["cancel"+h]||c["cancelRequest"+h],k=0;!v&&k<f.length;k++)v=c[f[k]+"Request"+h],y=c[f[k]+"Cancel"+h]||c[f[k]+"CancelRequest"+h];if(!v||!y){var m=0,p=0,g=[];v=function(x){if(g.length===0){var O=d(),P=Math.max(0,16.666666666666668-(O-m));m=P+O,setTimeout(function(){var E=g.slice(0);g.length=0;for(var S=0;S<E.length;S++)if(!E[S].cancelled)try{E[S].callback(m)}catch(M){setTimeout(function(){throw M},0)}},Math.round(P))}return g.push({handle:++p,callback:x,cancelled:!1}),p},y=function(x){for(var O=0;O<g.length;O++)g[O].handle===x&&(g[O].cancelled=!0)}}a.exports=function(x){return v.call(c,x)},a.exports.cancel=function(){y.apply(c,arguments)},a.exports.polyfill=function(x){x||(x=c),x.requestAnimationFrame=v,x.cancelAnimationFrame=y}},8156:a=>{a.exports=n}},i={};function o(a){var s=i[a];if(s!==void 0)return s.exports;var u=i[a]={id:a,loaded:!1,exports:{}};return r[a].call(u.exports,u,u.exports,o),u.loaded=!0,u.exports}o.n=a=>{var s=a&&a.__esModule?()=>a.default:()=>a;return o.d(s,{a:s}),s},o.d=(a,s)=>{for(var u in s)o.o(s,u)&&!o.o(a,u)&&Object.defineProperty(a,u,{enumerable:!0,get:s[u]})},o.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),o.o=(a,s)=>Object.prototype.hasOwnProperty.call(a,s),o.nmd=a=>(a.paths=[],a.children||(a.children=[]),a);var l={};return(()=>{o.d(l,{default:()=>O});var a=o(8156),s=o.n(a),u=o(7403),d=o(8446),c=o.n(d);function f(P){return f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(E){return typeof E}:function(E){return E&&typeof Symbol=="function"&&E.constructor===Symbol&&E!==Symbol.prototype?"symbol":typeof E},f(P)}function h(P,E){if(!(P instanceof E))throw new TypeError("Cannot call a class as a function")}function v(P,E){for(var S=0;S<E.length;S++){var M=E[S];M.enumerable=M.enumerable||!1,M.configurable=!0,"value"in M&&(M.writable=!0),Object.defineProperty(P,M.key,M)}}function y(P,E){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(S,M){return S.__proto__=M,S},y(P,E)}function k(P,E){if(E&&(f(E)==="object"||typeof E=="function"))return E;if(E!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return m(P)}function m(P){if(P===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return P}function p(P){return p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(E){return E.__proto__||Object.getPrototypeOf(E)},p(P)}function g(P,E,S){return E in P?Object.defineProperty(P,E,{value:S,enumerable:!0,configurable:!0,writable:!0}):P[E]=S,P}var x=function(P){(function($,N){if(typeof N!="function"&&N!==null)throw new TypeError("Super expression must either be null or a function");$.prototype=Object.create(N&&N.prototype,{constructor:{value:$,writable:!0,configurable:!0}}),Object.defineProperty($,"prototype",{writable:!1}),N&&y($,N)})(A,P);var E,S,M,j,z=(M=A,j=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var $,N=p(M);if(j){var I=p(this).constructor;$=Reflect.construct(N,arguments,I)}else $=N.apply(this,arguments);return k(this,$)});function A(){var $;h(this,A);for(var N=arguments.length,I=new Array(N),Y=0;Y<N;Y++)I[Y]=arguments[Y];return g(m($=z.call.apply(z,[this].concat(I))),"state",{instance:null}),$}return E=A,(S=[{key:"componentDidMount",value:function(){var $=this,N=new u.default(this.typewriter,this.props.options);this.setState({instance:N},function(){var I=$.props.onInit;I&&I(N)})}},{key:"componentDidUpdate",value:function($){c()(this.props.options,$.options)||this.setState({instance:new u.default(this.typewriter,this.props.options)})}},{key:"componentWillUnmount",value:function(){this.state.instance&&this.state.instance.stop()}},{key:"render",value:function(){var $=this,N=this.props.component;return s().createElement(N,{ref:function(I){return $.typewriter=I},className:"Typewriter","data-testid":"typewriter-wrapper"})}}])&&v(E.prototype,S),Object.defineProperty(E,"prototype",{writable:!1}),A}(a.Component);x.defaultProps={component:"div"};const O=x})(),l.default})())})(cv);const AS=ja(cv.exports),NS=C.div`
    width: 100%;
    /* background-color: red; */

    .writer{
        font-family: 'Courier Prime';
        font-size: 45px;
        color: #001830;
        font-weight: 700;

        @media screen and (min-width: ${_.largeDesktop}){
            font-size: 120px;
        }
    }

    .writer-cursor{
        font-family: 'Courier Prime';
        font-size: 45px;
        color: orange;
        font-weight: 700;
        animation: blink 0.5s infinite;

        @media screen and (min-width: ${_.largeDesktop}){
            font-size: 90px;
        }

    }

    @keyframes blink {
        50%{
            opacity: 1;
        }
        100%{
            opacity: 0;
        }
    }
`,IS=()=>w(NS,{children:w(AS,{onInit:e=>{e.typeString("Engrenando ideias, inovando o mercado.").pauseFor(2e3).deleteAll().start()},options:{wrapperClassName:"writer",cursorClassName:"writer-cursor",loop:!0}})}),FS="/Site-Serra/assets/presentation-image.40ce3de4.png",HS="/Site-Serra/assets/Sites.a0112d0d.svg",US="/Site-Serra/assets/sistemas-web.d1b27032.svg",WS="/Site-Serra/assets/manutencao.33f9dd1a.svg",BS="/Site-Serra/assets/desenho-tecnico.22fbb0fb.svg",VS="/Site-Serra/assets/braco-robo.2b026e48.svg",QS="/Site-Serra/assets/impressora-3d.75613d7d.svg",qS="/Site-Serra/assets/membros-2.457898e5.svg",YS="/Site-Serra/assets/background-image.668c0125.svg",GS=C.div`
    background-color: #DBDBDB;
    display: flex;
    flex-direction: row; 
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    

    @media screen and (max-width: ${_.tablet}){
        flex-direction: column-reverse; 
        align-items: space-around;
        justify-content: center;
        min-height: 500px;
    }
`,XS=C.img`
    width: 45%;
    
    @media screen and (max-width: ${_.tablet}){
        width: 60%;
    }
`,KS=C.div`
    display: block;
    justify-content: center;
    flex-direction: column;
    width: 45%;

    @media screen and (max-width: ${_.tablet}){
        width: 80%;
        margin-top: 4%;
    }
`,JS=C.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,ZS=C.div`
    width: 80vw;
    
    animation: fade-in-bottom 0.6s ease-in 0.5s both;
    @keyframes fade-in-bottom {
    0% {
    transform: translateY(50px);
    transform: translateY(50px);
    opacity: 0;
    }
    100% {
    transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
    }
    }

`,ek=C.div`
    background-image: url(${YS});
`;C.p`
    color: black;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    text-align: justify;
    width: 40%;
    margin-top: 5%;
`;C.img`
    width: 40%;
    height: 40%;
    border-radius: 20px;
    margin-top: 5%;
`;C.div`
    display: flex;
    justify-content: center;
    justify-content: space-around;
    margin-bottom: 5%;
`;const tk=()=>Q(ek,{children:[Q(GS,{children:[w(KS,{children:w(IS,{})}),w(XS,{src:FS,alt:"apresenta\xE7\xE3o"})]}),w(zc,{text:"O que fazemos"}),Q(JS,{children:[Q(ZS,{children:[w(yf,{title:"Projetos de Computa\xE7\xE3o",buttonTitle:"Saiba Mais",buttonUrl:"/Site-Serra/computacao",images:[HS,US],texts:["Desenvolvimento de WebSites","Desenvolvimento de Sistemas Web"]}),w(yf,{title:"Projetos de Mec\xE2nica",buttonTitle:"Saiba Mais",buttonUrl:"/Site-Serra/mecanica",color:"#04ADD7",images:[WS,BS,VS,QS],texts:["Projeto e Manuten\xE7\xE3o de Equipamentos","Desenho T\xE9cnico e Industrial","Projetos de Automa\xE7\xE3o","Prototipagem"]})]}),w(uv,{title:"Nossa Hist\xF3ria",buttonTitle:"Saiba Mais",buttonUrl:"/Site-Serra/quemsomos",color:"#001830",hasButton:!0,text:"A Serra Jr. Engenharia, criada em 08 de maio de 2002, \xE9 uma empresa formada exclusivamente por alunos do curso de gradua\xE7\xE3o de Engenharia Mec\xE2nica e de Engenharia de Computa\xE7\xE3o do Instituto Polit\xE9cnico da Universidade do Estado do Rio de Janeiro \u2013 IPRJ/UERJ e tem como objetivo central o incentivo \xE0 inser\xE7\xE3o e desenvolvimento dos alunos na pr\xE1tica empresarial. Teve suas atividades paradas no ano de 2011 devido a trag\xE9dia clim\xE1tica que abalou Nova Friburgo. Em 2013, retomou com for\xE7a total seus projetos. Hoje, est\xE1 melhor do que nunca oferecendo solu\xE7\xF5es em engenharia mec\xE2nica e computa\xE7\xE3o para todo o mercado.",image:qS,alt:"Imagem com os membros da Serra Jr. Engenharia",hasCarousel:!1})]})]}),nk="/Site-Serra/assets/presentation-image.73570450.svg",rk=C.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    margin: 10px;
    width: 30%;
    min-height: 50vh;

    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 32px;



    @media screen and (max-width: ${_.mobile}) {
        font-size: 16px;
        line-height: 25px;
        margin: 2px;
        padding: 2px;
        text-align: justify;
        width: 70%;
    }

    @media screen and (max-width: ${_.tablet}) {
        font-size: 16px;
        line-height: 25px;
        margin: 2px;
        padding: 2px;
        text-align: justify;
        width: 70%;
    }

    @media screen and (min-width: ${_.extraLargeDesktop}) {
        width: 30%;
    }
    
`,ik=C.p`
    padding-bottom: 2%;
    border-image: linear-gradient(90deg, rgba(4,173,215,1) 0%, rgba(4,173,215,1) 41%, rgba(255,116,0,1) 69%);
    border-bottom: 5px solid;
    border-image-slice: 1;
    font-weight: 500;

    @media screen and (max-width: ${_.largeMobile}) {
        font-size: 1.4rem;
        padding-bottom: 3%;
    }
    
    @media screen and (min-width: ${_.largeDesktop}) {
        font-size: 3rem;
        padding-bottom: 3%;
        border-image-width: 0px 0px 10px 0px;
    }

    @media screen and (min-width: ${_.extraLargeDesktop}) {
        font-size: 4.5rem;
        padding-bottom: 3%;
        border-image-width: 0px 0px 15px 0px;
    }
`,ok=C.p`
    width: 95%;
    text-align: justify;

    @media screen and (min-width: 2048px) {
        font-size: 35px;
        line-height: 40px;
        text-align: justify;
    }

    @media screen and (min-width: ${_.extraLargeDesktop}) {
        font-size: 3.2rem;
        line-height: 70px;
    }
`,ak=C.ul`

    @media screen and (min-width: 2048px) {
        font-size: 35px;
        line-height: 40px;
        
    }

    @media screen and (min-width: ${_.extraLargeDesktop}) {
        font-size: 3.2rem;
        line-height: 70px;
    }
`,lk=C.li`
    list-style-type: none;

    &:before {
        content: "•";
        color: #001830;
        padding-right: 10px;
        margin-right: 2%;
    }
`,sk=C.img`
    width: 150px;
    height: 140px;

    @media screen and (max-width: ${_.mobile}) {
        width: 98px;
        height: 98px;
    }

    @media screen and (max-width: ${_.tablet}) {
        width: 100px;
        height: 100px;
    }

    @media screen and (min-width: ${_.largeDesktop}) {
        width: 200px;
        height: 200px;
    }

    @media screen and (min-width: ${_.extraLargeDesktop}) {
        width: 300px;
        height: 300px;
    }
`,ls=({image:e,titleText:t,imageAlt:n,hasList:r,content:i,list:o})=>Q(rk,{children:[w(sk,{src:e,alt:n}),w(ik,{children:t}),r?w(ak,{children:o?o.map((l,a)=>w(lk,{children:l},a)):null}):w(ok,{children:i})]}),uk=C.div`
    background-color: #FF7400;
    display: flex;
    justify-content: space-around;
    border-radius: 0px 0px 0px 100px;
    min-height: 50vh;
    
    @media screen and (max-width: 390px) {
        order: 1;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        
    }

    @media screen and (max-width: 500px) {
        /* flex-direction: column; */
        flex-wrap: wrap;
    }

    @media screen and (max-width: 820px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    @media screen and (max-width: 1000px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`,ck=C.div`
   

`,dk=C.div`

    
`,fk=C.p`
    margin: 0px;
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 76px;
    text-align: center;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    
    @media screen and (max-width: 390px) {
        font-size: 50px;
    }

    @media screen and (max-width: 500px) {
        font-size: 70px;
    }

    @media screen and (max-width: 820px) {
        margin-bottom: 5%;
    }

    @media screen and (min-width: 1000px) {
        margin-bottom: 5%;
        font-size: 120px;
    }

    @media screen and (min-width: ${_.largeDesktop}) {
        font-size: 180px;
    }

    @media screen and (min-width: ${_.extraLargeDesktop}) {
        font-size: 250px;
    }

    
`,pk=C.img`
    @media screen and (max-width: 500px) {
        width: 70%;
    }

    @media screen and (min-width: 500px) {
        width: 60%;
    }

    @media screen and (min-width: 1000px) {
        width: 50%;
    }
`,hk=C.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    margin-top: 5%;
    margin-bottom: 5%;

    @media screen and (max-width: 390px) {
        order: 1;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }

    @media screen and (max-width: 500px) {
        order: 1;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
`,Uf=C.div`
    border: 1px solid #001830;
    height: 80vh;

    @media screen and (max-width: 390px) {
        transform: rotate(90deg);
        margin: 0px;
        height: 20vh;
    }

    @media screen and (max-width: 500px) {
        transform: rotate(90deg);
        margin: 0px;
        height: 20vh;
    }

    @media screen and (min-width: ${_.largeDesktop}) {
        height: 45vh;
    }

    @media screen and (min-width: ${_.extraLargeDesktop}) {
        height: 50vh;
    }
`,mk=()=>Q(Tm,{children:[w(ck,{children:Q(uk,{children:[w(fk,{children:"Sobre N\xF3s"}),w(pk,{src:nk,alt:"imagem sobre n\xF3s"})]})}),w(dk,{children:Q(hk,{children:[w(ls,{image:Te.icons[0].image,imageAlt:Te.icons[0].imageAlt,list:Te.icons[0].list,hasList:Te.icons[0].hasList,content:Te.icons[0].content,titleText:Te.icons[0].titleText}),w(Uf,{}),w(ls,{image:Te.icons[1].image,imageAlt:Te.icons[1].imageAlt,list:Te.icons[1].list,hasList:Te.icons[1].hasList,content:Te.icons[1].content,titleText:Te.icons[1].titleText}),w(Uf,{}),w(ls,{image:Te.icons[2].image,imageAlt:Te.icons[2].imageAlt,list:Te.icons[2].list,hasList:Te.icons[2].hasList,content:Te.icons[2].content,titleText:Te.icons[2].titleText})]})}),w(uv,{title:"Quem Somos",color:"#001830",hasButton:!1,hasCarousel:!0})]}),zi={_origin:"https://api.emailjs.com"},vk=(e,t="https://api.emailjs.com")=>{zi._userID=e,zi._origin=t},dv=(e,t,n)=>{if(!e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class Wf{constructor(t){this.status=t?t.status:0,this.text=t?t.responseText:"Network Error"}}const fv=(e,t,n={})=>new Promise((r,i)=>{const o=new XMLHttpRequest;o.addEventListener("load",({target:l})=>{const a=new Wf(l);a.status===200||a.text==="OK"?r(a):i(a)}),o.addEventListener("error",({target:l})=>{i(new Wf(l))}),o.open("POST",zi._origin+e,!0),Object.keys(n).forEach(l=>{o.setRequestHeader(l,n[l])}),o.send(t)}),gk=(e,t,n,r)=>{const i=r||zi._userID;dv(i,e,t);const o={lib_version:"3.9.1",user_id:i,service_id:e,template_id:t,template_params:n};return fv("/api/v1.0/email/send",JSON.stringify(o),{"Content-type":"application/json"})},yk=e=>{let t;if(typeof e=="string"?t=document.querySelector(e):t=e,!t||t.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t},wk=(e,t,n,r)=>{const i=r||zi._userID,o=yk(n);dv(i,e,t);const l=new FormData(o);return l.append("lib_version","3.9.1"),l.append("service_id",e),l.append("template_id",t),l.append("user_id",i),fv("/api/v1.0/email/send-form",l)},xk={init:vk,send:gk,sendForm:wk};var Ve={exports:{}},Sk="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",kk=Sk,Ek=kk;function pv(){}function hv(){}hv.resetWarningCache=pv;var bk=function(){function e(r,i,o,l,a,s){if(s!==Ek){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:hv,resetWarningCache:pv};return n.PropTypes=n,n};Ve.exports=bk();function _k(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function wo(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ck(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var ml=function(e){Ck(t,e);function t(){var r;return r=e.call(this)||this,r.handleExpired=r.handleExpired.bind(wo(r)),r.handleErrored=r.handleErrored.bind(wo(r)),r.handleChange=r.handleChange.bind(wo(r)),r.handleRecaptchaRef=r.handleRecaptchaRef.bind(wo(r)),r}var n=t.prototype;return n.getValue=function(){return this.props.grecaptcha&&this._widgetId!==void 0?this.props.grecaptcha.getResponse(this._widgetId):null},n.getWidgetId=function(){return this.props.grecaptcha&&this._widgetId!==void 0?this._widgetId:null},n.execute=function(){var i=this.props.grecaptcha;if(i&&this._widgetId!==void 0)return i.execute(this._widgetId);this._executeRequested=!0},n.executeAsync=function(){var i=this;return new Promise(function(o,l){i.executionResolve=o,i.executionReject=l,i.execute()})},n.reset=function(){this.props.grecaptcha&&this._widgetId!==void 0&&this.props.grecaptcha.reset(this._widgetId)},n.handleExpired=function(){this.props.onExpired?this.props.onExpired():this.handleChange(null)},n.handleErrored=function(){this.props.onErrored&&this.props.onErrored(),this.executionReject&&(this.executionReject(),delete this.executionResolve,delete this.executionReject)},n.handleChange=function(i){this.props.onChange&&this.props.onChange(i),this.executionResolve&&(this.executionResolve(i),delete this.executionReject,delete this.executionResolve)},n.explicitRender=function(){if(this.props.grecaptcha&&this.props.grecaptcha.render&&this._widgetId===void 0){var i=document.createElement("div");this._widgetId=this.props.grecaptcha.render(i,{sitekey:this.props.sitekey,callback:this.handleChange,theme:this.props.theme,type:this.props.type,tabindex:this.props.tabindex,"expired-callback":this.handleExpired,"error-callback":this.handleErrored,size:this.props.size,stoken:this.props.stoken,hl:this.props.hl,badge:this.props.badge}),this.captcha.appendChild(i)}this._executeRequested&&this.props.grecaptcha&&this._widgetId!==void 0&&(this._executeRequested=!1,this.execute())},n.componentDidMount=function(){this.explicitRender()},n.componentDidUpdate=function(){this.explicitRender()},n.componentWillUnmount=function(){this._widgetId!==void 0&&(this.delayOfCaptchaIframeRemoving(),this.reset())},n.delayOfCaptchaIframeRemoving=function(){var i=document.createElement("div");for(document.body.appendChild(i),i.style.display="none";this.captcha.firstChild;)i.appendChild(this.captcha.firstChild);setTimeout(function(){document.body.removeChild(i)},5e3)},n.handleRecaptchaRef=function(i){this.captcha=i},n.render=function(){var i=this.props;i.sitekey,i.onChange,i.theme,i.type,i.tabindex,i.onExpired,i.onErrored,i.size,i.stoken,i.grecaptcha,i.badge,i.hl;var o=_k(i,["sitekey","onChange","theme","type","tabindex","onExpired","onErrored","size","stoken","grecaptcha","badge","hl"]);return w("div",{...o,ref:this.handleRecaptchaRef})},t}(Lr.Component);ml.displayName="ReCAPTCHA";ml.propTypes={sitekey:Ve.exports.string.isRequired,onChange:Ve.exports.func,grecaptcha:Ve.exports.object,theme:Ve.exports.oneOf(["dark","light"]),type:Ve.exports.oneOf(["image","audio"]),tabindex:Ve.exports.number,onExpired:Ve.exports.func,onErrored:Ve.exports.func,size:Ve.exports.oneOf(["compact","normal","invisible"]),stoken:Ve.exports.string,hl:Ve.exports.string,badge:Ve.exports.oneOf(["bottomright","bottomleft","inline"])};ml.defaultProps={onChange:function(){},theme:"light",type:"image",tabindex:0,size:"normal",badge:"bottomright"};function _u(){return _u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_u.apply(this,arguments)}function Ok(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Pk(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var St={},Tk=0;function Lk(e,t){return t=t||{},function(r){var i=r.displayName||r.name||"Component",o=function(a){Pk(s,a);function s(d,c){var f;return f=a.call(this,d,c)||this,f.state={},f.__scriptURL="",f}var u=s.prototype;return u.asyncScriptLoaderGetScriptLoaderID=function(){return this.__scriptLoaderID||(this.__scriptLoaderID="async-script-loader-"+Tk++),this.__scriptLoaderID},u.setupScriptURL=function(){return this.__scriptURL=typeof e=="function"?e():e,this.__scriptURL},u.asyncScriptLoaderHandleLoad=function(c){var f=this;this.setState(c,function(){return f.props.asyncScriptOnLoad&&f.props.asyncScriptOnLoad(f.state)})},u.asyncScriptLoaderTriggerOnScriptLoaded=function(){var c=St[this.__scriptURL];if(!c||!c.loaded)throw new Error("Script is not loaded.");for(var f in c.observers)c.observers[f](c);delete window[t.callbackName]},u.componentDidMount=function(){var c=this,f=this.setupScriptURL(),h=this.asyncScriptLoaderGetScriptLoaderID(),v=t,y=v.globalName,k=v.callbackName,m=v.scriptId;if(y&&typeof window[y]<"u"&&(St[f]={loaded:!0,observers:{}}),St[f]){var p=St[f];if(p&&(p.loaded||p.errored)){this.asyncScriptLoaderHandleLoad(p);return}p.observers[h]=function(E){return c.asyncScriptLoaderHandleLoad(E)};return}var g={};g[h]=function(E){return c.asyncScriptLoaderHandleLoad(E)},St[f]={loaded:!1,observers:g};var x=document.createElement("script");x.src=f,x.async=!0;for(var O in t.attributes)x.setAttribute(O,t.attributes[O]);m&&(x.id=m);var P=function(S){if(St[f]){var M=St[f],j=M.observers;for(var z in j)S(j[z])&&delete j[z]}};k&&typeof window<"u"&&(window[k]=function(){return c.asyncScriptLoaderTriggerOnScriptLoaded()}),x.onload=function(){var E=St[f];E&&(E.loaded=!0,P(function(S){return k?!1:(S(E),!0)}))},x.onerror=function(){var E=St[f];E&&(E.errored=!0,P(function(S){return S(E),!0}))},document.body.appendChild(x)},u.componentWillUnmount=function(){var c=this.__scriptURL;if(t.removeOnUnmount===!0)for(var f=document.getElementsByTagName("script"),h=0;h<f.length;h+=1)f[h].src.indexOf(c)>-1&&f[h].parentNode&&f[h].parentNode.removeChild(f[h]);var v=St[c];v&&(delete v.observers[this.asyncScriptLoaderGetScriptLoaderID()],t.removeOnUnmount===!0&&delete St[c])},u.render=function(){var c=t.globalName,f=this.props;f.asyncScriptOnLoad;var h=f.forwardedRef,v=Ok(f,["asyncScriptOnLoad","forwardedRef"]);return c&&typeof window<"u"&&(v[c]=typeof window[c]<"u"?window[c]:void 0),v.ref=h,K.exports.createElement(r,v)},s}(K.exports.Component),l=K.exports.forwardRef(function(a,s){return K.exports.createElement(o,_u({},a,{forwardedRef:s}))});return l.displayName="AsyncScriptLoader("+i+")",l.propTypes={asyncScriptOnLoad:Ve.exports.func},wm(l,r)}}var mv="onloadcallback",Mk="grecaptcha";function Rk(){return typeof window<"u"&&window.recaptchaOptions||{}}function jk(){var e=Rk(),t=e.useRecaptchaNet?"recaptcha.net":"www.google.com";return"https://"+t+"/recaptcha/api.js?onload="+mv+"&render=explicit"}const Dk=Lk(jk,{callbackName:mv,globalName:Mk})(ml),zk="/Site-Serra/assets/agenda.6fff4078.svg",$k="/Site-Serra/assets/email.946bdff8.svg",Ak="/Site-Serra/assets/localizacao.69982f44.svg",Nk="/Site-Serra/assets/telefone.9ca94e72.svg",xo=C.span`
    align-self: center;
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 300;
    font-size: 25px;
    line-height: 25px;
    color: #000000;
    margin-left: 5%;

    @media screen and (min-width: ${_.tablet}) {
        font-size: 20px;
        line-height: 20px;
    }

    @media screen and (min-width: ${_.largeDesktop}) {
        font-weight: 300;
        font-size: 40px;
        line-height: 40px;
    }
    
    @media screen and (min-width: ${_.extraLargeDesktop}) {
        font-weight: 300;
        font-size: 60px;
        line-height: 100px;
    }

`,So=C.img`

    width: 3em;
    height: 3em;

    @media screen and (min-width: ${_.tablet}) {
        width: 4em;
        height: 4em;
    }

    @media screen and (min-width: ${_.largeDesktop}) {
        width: 4em;
        height: 4em;
    }
    
    @media screen and (min-width: ${_.extraLargeDesktop}) {
        width: 10em;
        height: 10em;
    }
   
`,Ik=C.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 80%;
    height: 100%;
    margin-right: 2%;

    @media screen and (max-width: ${_.notebook}) {
        order: 1;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin-top: 7%;
        justify-content: center;
        align-items: center;
    }

    @media screen and (max-width: ${_.mobile}) {
        margin-top: 20%;
    }


    
`,Fk=C.div`
    width: 100%;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
`,Hk=C.div`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 7%;

    @media screen and (max-width: 390px) {
        width: 80%;
    }

    @media screen and (max-width: 500px) {
        width: 80%;
    }
`,Uk=C.div`
    display: flex;
    margin-top: 5%;
    align-items: center;
    justify-content: space-between;
    width: 60%;
    margin-bottom: 5%;

    @media screen and (max-width: ${_.notebook}) {
        flex-direction: column;
    }

    @media screen and (max-width: ${_.largeMobile}) {
        width: 90%;
    } 

`,ko=C.div`
   display: flex;
   margin-bottom: 20%;
   width: 100%;
   

   @media screen and (min-width: ${_.notebook}) {
        margin-bottom: 10%;
    }
   @media screen and (min-width: ${_.largeDesktop}) {
        margin-bottom: 7%;
    }
   @media screen and (min-width: ${_.extraLargeDesktop}) {
        margin-bottom: 7%;
    }
`,Wk=C.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #D2D2D2;
    border-radius: 20px;
    flex-grow: 1;
    padding-bottom: 20px;

    @media screen and (max-width: ${_.notebook}) {
        width: 100%;
    }

    @media screen and (min-width: ${_.largeNotebook}) {
        width: 60%;
    }

    @media screen and (min-width: ${_.extraLargeDesktop}) {
        width: 80%;
    }
    
`,Bk=C.div`
    margin-left: 10%;
    width: 100%;
`,Xr=C.p`
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 300;
    font-size: 28px;
    line-height: 10px;
    margin-bottom: 20px;
    
    @media screen and (min-width: ${_.extraLargeDesktop}) {
        font-size: 3rem;
        line-height: 25px;
    }

`,Eo=C.input`
    padding-left: 30px;
    border-radius: 10px;
    font-size: 1.8rem;
    border: 1px;
    width: calc(90% - 30px);
    height: 2.5rem;
    background: #EEEEEE;
    &:focus{
        outline: none;
    }
    &::placeholder{
        font-size: 20px;
        font-weight: 400;
    }

    @media screen and (min-width: ${_.extraLargeDesktop}) {
        padding-bottom: 10px;
        height: 4rem;

        &::placeholder{
            font-size: 1.8rem;
        }
    }

`,Vk=C.button`
    margin-top: 20px;
    border: 0px;
    background: #FF7400;
    border-radius: 10px;
    width: 90%;
    height: 2.5rem;
    color: #fff;
    font-size: 20px;
    margin-bottom: 20px;

    @media screen and (min-width: ${_.extraLargeDesktop}) {
        width: 85%;
        height: 5rem;
        font-size: 2.5rem;
    }
`,Qk=C.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;

`,qk=C.input`
    padding-left: 30px;
    border-radius: 10px;
    font-size: 1.8rem;
    border: 1px;
    width: calc(90% - 30px);
    height: 10rem;
    background: #EEEEEE;
    margin-bottom: 10px;
    &:focus{
        outline: none;
    }
    &::placeholder{
        font-size: 20px;
        font-weight: 400;
    }

    @media screen and (min-width: ${_.extraLargeDesktop}) {
        height: 15rem;

        &::placeholder{
            font-size: 1.8rem;
        }
    }
`,Yk=C.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 70%;

    @media screen and (max-width: ${_.notebook}) {
        width: 100%;
    }

    
`,Gk=C.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,Xk=C.div`  

`,Kk=()=>{const[e,t]=K.exports.useState(""),[n,r]=K.exports.useState(""),[i,o]=K.exports.useState(""),[l,a]=K.exports.useState(""),[s,u]=K.exports.useState(""),d=c=>{if(c.preventDefault(),e===""||n===""||i===""||l===""||s===""){alert("Preencha todos os campos");return}const f={from_name:e,message:s,from_email:n,from_phone:i,subject:l};xk.send("service_al540kd","template_4eqf2kl",f,"HRfoO7P69RR47ZQ0c").then(h=>{console.log("Email enviado",h.status,h.text),t(""),r(""),o(""),a(""),u("")},h=>{console.log("Erro: ",h)})};return Q(Gk,{children:[w(zc,{titleWidth:"40%",text:"Entre em contato conosco!"}),Q(Uk,{children:[Q(Ik,{children:[Q(ko,{children:[w(So,{src:Ak,alt:""}),w(xo,{children:"Rua Bonfim, 25 em Vila Am\xE9lia, "})]}),Q(ko,{children:[w(So,{src:Nk,alt:""}),w(xo,{children:"(22) 2533-2265"})]}),Q(ko,{children:[w(So,{src:$k,alt:""}),w(xo,{children:"serrajr@iprj.uerj.br"})]}),Q(ko,{children:[w(So,{src:zk,alt:""}),Q(xo,{children:["Hor\xE1rio de atendimento: ",w("br",{}),"Segunda a Sexta, das 09hrs ",w("br",{}),"\xE0s 17hrs."]})]})]}),w(Yk,{children:w(Wk,{children:Q(Bk,{children:[w(Xr,{children:"Nome"}),w(Eo,{type:"text",placeholder:"Insira seu nome",value:e,onChange:c=>t(c.target.value)}),w(Xr,{children:"Email"}),w(Eo,{type:"text",placeholder:"Insira seu email",value:n,onChange:c=>r(c.target.value)}),w(Xr,{children:"Telefone"}),w(Eo,{type:"text",placeholder:"(XX) XXXXX-XXXX",value:i,onChange:c=>o(c.target.value)}),w(Xr,{children:"Assunto"}),w(Eo,{type:"text",placeholder:"Digite o assunto",value:l,onChange:c=>a(c.target.value)}),w(Xr,{children:"Mensagem"}),w(qk,{type:"text",placeholder:"Digite a mensagem",value:s,onChange:c=>u(c.target.value)}),w(Xk,{children:w(Dk,{sitekey:"6LftIRYjAAAAABYVGiNblWwK1r4oIrUQJ0Lr_EUq",onChange:c=>d(c)})}),w(Qk,{children:w(Vk,{onClick:c=>d(c),children:"Enviar"})})]})})})]}),w(Hk,{children:w(Fk,{})})]})};var Cu={exports:{}},Un={},Ou={exports:{}},Mt={},Ta={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=d;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var n="none",r="contents",i=/input|select|textarea|button|object|iframe/;function o(c,f){return f.getPropertyValue("overflow")!=="visible"||c.scrollWidth<=0&&c.scrollHeight<=0}function l(c){var f=c.offsetWidth<=0&&c.offsetHeight<=0;if(f&&!c.innerHTML)return!0;try{var h=window.getComputedStyle(c),v=h.getPropertyValue("display");return f?v!==r&&o(c,h):v===n}catch{return console.warn("Failed to inspect element style"),!1}}function a(c){for(var f=c,h=c.getRootNode&&c.getRootNode();f&&f!==document.body;){if(h&&f===h&&(f=h.host.parentNode),l(f))return!1;f=f.parentNode}return!0}function s(c,f){var h=c.nodeName.toLowerCase(),v=i.test(h)&&!c.disabled||h==="a"&&c.href||f;return v&&a(c)}function u(c){var f=c.getAttribute("tabindex");f===null&&(f=void 0);var h=isNaN(f);return(h||f>=0)&&s(c,!h)}function d(c){var f=[].slice.call(c.querySelectorAll("*"),0).reduce(function(h,v){return h.concat(v.shadowRoot?d(v.shadowRoot):[v])},[]);return f.filter(u)}e.exports=t.default})(Ta,Ta.exports);Object.defineProperty(Mt,"__esModule",{value:!0});Mt.resetState=tE;Mt.log=nE;Mt.handleBlur=$i;Mt.handleFocus=Ai;Mt.markForFocusLater=rE;Mt.returnFocus=iE;Mt.popWithoutFocus=oE;Mt.setupScopedFocus=aE;Mt.teardownScopedFocus=lE;var Jk=Ta.exports,Zk=eE(Jk);function eE(e){return e&&e.__esModule?e:{default:e}}var Pr=[],ur=null,Pu=!1;function tE(){Pr=[]}function nE(){}function $i(){Pu=!0}function Ai(){if(Pu){if(Pu=!1,!ur)return;setTimeout(function(){if(!ur.contains(document.activeElement)){var e=(0,Zk.default)(ur)[0]||ur;e.focus()}},0)}}function rE(){Pr.push(document.activeElement)}function iE(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=null;try{Pr.length!==0&&(t=Pr.pop(),t.focus({preventScroll:e}));return}catch{console.warn(["You tried to return focus to",t,"but it is not in the DOM anymore"].join(" "))}}function oE(){Pr.length>0&&Pr.pop()}function aE(e){ur=e,window.addEventListener?(window.addEventListener("blur",$i,!1),document.addEventListener("focus",Ai,!0)):(window.attachEvent("onBlur",$i),document.attachEvent("onFocus",Ai))}function lE(){ur=null,window.addEventListener?(window.removeEventListener("blur",$i),document.removeEventListener("focus",Ai)):(window.detachEvent("onBlur",$i),document.detachEvent("onFocus",Ai))}var Tu={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=l;var n=Ta.exports,r=i(n);function i(a){return a&&a.__esModule?a:{default:a}}function o(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return a.activeElement.shadowRoot?o(a.activeElement.shadowRoot):a.activeElement}function l(a,s){var u=(0,r.default)(a);if(!u.length){s.preventDefault();return}var d=void 0,c=s.shiftKey,f=u[0],h=u[u.length-1],v=o();if(a===v){if(!c)return;d=h}if(h===v&&!c&&(d=f),f===v&&c&&(d=h),d){s.preventDefault(),d.focus();return}var y=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),k=y!=null&&y[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(!!k){var m=u.indexOf(v);if(m>-1&&(m+=c?-1:1),d=u[m],typeof d>"u"){s.preventDefault(),d=c?h:f,d.focus();return}s.preventDefault(),d.focus()}}e.exports=t.default})(Tu,Tu.exports);var Rt={},sE=function(){},uE=sE,Tt={},vv={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(e){(function(){var t=!!(typeof window<"u"&&window.document&&window.document.createElement),n={canUseDOM:t,canUseWorkers:typeof Worker<"u",canUseEventListeners:t&&!!(window.addEventListener||window.attachEvent),canUseViewport:t&&!!window.screen};e.exports?e.exports=n:window.ExecutionEnvironment=n})()})(vv);Object.defineProperty(Tt,"__esModule",{value:!0});Tt.canUseDOM=Tt.SafeNodeList=Tt.SafeHTMLCollection=void 0;var cE=vv.exports,dE=fE(cE);function fE(e){return e&&e.__esModule?e:{default:e}}var vl=dE.default,pE=vl.canUseDOM?window.HTMLElement:{};Tt.SafeHTMLCollection=vl.canUseDOM?window.HTMLCollection:{};Tt.SafeNodeList=vl.canUseDOM?window.NodeList:{};Tt.canUseDOM=vl.canUseDOM;Tt.default=pE;Object.defineProperty(Rt,"__esModule",{value:!0});Rt.resetState=yE;Rt.log=wE;Rt.assertNodeList=gv;Rt.setElement=xE;Rt.validateElement=Wc;Rt.hide=SE;Rt.show=kE;Rt.documentNotReadyOrSSRTesting=EE;var hE=uE,mE=gE(hE),vE=Tt;function gE(e){return e&&e.__esModule?e:{default:e}}var pt=null;function yE(){pt&&(pt.removeAttribute?pt.removeAttribute("aria-hidden"):pt.length!=null?pt.forEach(function(e){return e.removeAttribute("aria-hidden")}):document.querySelectorAll(pt).forEach(function(e){return e.removeAttribute("aria-hidden")})),pt=null}function wE(){}function gv(e,t){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+t+".")}function xE(e){var t=e;if(typeof t=="string"&&vE.canUseDOM){var n=document.querySelectorAll(t);gv(n,t),t=n}return pt=t||pt,pt}function Wc(e){var t=e||pt;return t?Array.isArray(t)||t instanceof HTMLCollection||t instanceof NodeList?t:[t]:((0,mE.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function SE(e){var t=!0,n=!1,r=void 0;try{for(var i=Wc(e)[Symbol.iterator](),o;!(t=(o=i.next()).done);t=!0){var l=o.value;l.setAttribute("aria-hidden","true")}}catch(a){n=!0,r=a}finally{try{!t&&i.return&&i.return()}finally{if(n)throw r}}}function kE(e){var t=!0,n=!1,r=void 0;try{for(var i=Wc(e)[Symbol.iterator](),o;!(t=(o=i.next()).done);t=!0){var l=o.value;l.removeAttribute("aria-hidden")}}catch(a){n=!0,r=a}finally{try{!t&&i.return&&i.return()}finally{if(n)throw r}}}function EE(){pt=null}var jr={};Object.defineProperty(jr,"__esModule",{value:!0});jr.resetState=bE;jr.log=_E;var pi={},hi={};function Bf(e,t){e.classList.remove(t)}function bE(){var e=document.getElementsByTagName("html")[0];for(var t in pi)Bf(e,pi[t]);var n=document.body;for(var r in hi)Bf(n,hi[r]);pi={},hi={}}function _E(){}var CE=function(t,n){return t[n]||(t[n]=0),t[n]+=1,n},OE=function(t,n){return t[n]&&(t[n]-=1),n},PE=function(t,n,r){r.forEach(function(i){CE(n,i),t.add(i)})},TE=function(t,n,r){r.forEach(function(i){OE(n,i),n[i]===0&&t.remove(i)})};jr.add=function(t,n){return PE(t.classList,t.nodeName.toLowerCase()=="html"?pi:hi,n.split(" "))};jr.remove=function(t,n){return TE(t.classList,t.nodeName.toLowerCase()=="html"?pi:hi,n.split(" "))};var Dr={};Object.defineProperty(Dr,"__esModule",{value:!0});Dr.log=ME;Dr.resetState=RE;function LE(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var yv=function e(){var t=this;LE(this,e),this.register=function(n){t.openInstances.indexOf(n)===-1&&(t.openInstances.push(n),t.emit("register"))},this.deregister=function(n){var r=t.openInstances.indexOf(n);r!==-1&&(t.openInstances.splice(r,1),t.emit("deregister"))},this.subscribe=function(n){t.subscribers.push(n)},this.emit=function(n){t.subscribers.forEach(function(r){return r(n,t.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},La=new yv;function ME(){console.log("portalOpenInstances ----------"),console.log(La.openInstances.length),La.openInstances.forEach(function(e){return console.log(e)}),console.log("end portalOpenInstances ----------")}function RE(){La=new yv}Dr.default=La;var Bc={};Object.defineProperty(Bc,"__esModule",{value:!0});Bc.resetState=$E;Bc.log=AE;var jE=Dr,DE=zE(jE);function zE(e){return e&&e.__esModule?e:{default:e}}var Be=void 0,Et=void 0,$n=[];function $E(){for(var e=[Be,Et],t=0;t<e.length;t++){var n=e[t];!n||n.parentNode&&n.parentNode.removeChild(n)}Be=Et=null,$n=[]}function AE(){console.log("bodyTrap ----------"),console.log($n.length);for(var e=[Be,Et],t=0;t<e.length;t++){var n=e[t],r=n||{};console.log(r.nodeName,r.className,r.id)}console.log("edn bodyTrap ----------")}function Vf(){$n.length!==0&&$n[$n.length-1].focusContent()}function NE(e,t){!Be&&!Et&&(Be=document.createElement("div"),Be.setAttribute("data-react-modal-body-trap",""),Be.style.position="absolute",Be.style.opacity="0",Be.setAttribute("tabindex","0"),Be.addEventListener("focus",Vf),Et=Be.cloneNode(),Et.addEventListener("focus",Vf)),$n=t,$n.length>0?(document.body.firstChild!==Be&&document.body.insertBefore(Be,document.body.firstChild),document.body.lastChild!==Et&&document.body.appendChild(Et)):(Be.parentElement&&Be.parentElement.removeChild(Be),Et.parentElement&&Et.parentElement.removeChild(Et))}DE.default.subscribe(NE);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(N){for(var I=1;I<arguments.length;I++){var Y=arguments[I];for(var R in Y)Object.prototype.hasOwnProperty.call(Y,R)&&(N[R]=Y[R])}return N},r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(N){return typeof N}:function(N){return N&&typeof Symbol=="function"&&N.constructor===Symbol&&N!==Symbol.prototype?"symbol":typeof N},i=function(){function N(I,Y){for(var R=0;R<Y.length;R++){var T=Y[R];T.enumerable=T.enumerable||!1,T.configurable=!0,"value"in T&&(T.writable=!0),Object.defineProperty(I,T.key,T)}}return function(I,Y,R){return Y&&N(I.prototype,Y),R&&N(I,R),I}}(),o=K.exports,l=Ve.exports,a=O(l),s=Mt,u=x(s),d=Tu.exports,c=O(d),f=Rt,h=x(f),v=jr,y=x(v),k=Tt,m=O(k),p=Dr,g=O(p);function x(N){if(N&&N.__esModule)return N;var I={};if(N!=null)for(var Y in N)Object.prototype.hasOwnProperty.call(N,Y)&&(I[Y]=N[Y]);return I.default=N,I}function O(N){return N&&N.__esModule?N:{default:N}}function P(N,I){if(!(N instanceof I))throw new TypeError("Cannot call a class as a function")}function E(N,I){if(!N)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return I&&(typeof I=="object"||typeof I=="function")?I:N}function S(N,I){if(typeof I!="function"&&I!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof I);N.prototype=Object.create(I&&I.prototype,{constructor:{value:N,enumerable:!1,writable:!0,configurable:!0}}),I&&(Object.setPrototypeOf?Object.setPrototypeOf(N,I):N.__proto__=I)}var M={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},j=function(I){return I.code==="Tab"||I.keyCode===9},z=function(I){return I.code==="Escape"||I.keyCode===27},A=0,$=function(N){S(I,N);function I(Y){P(this,I);var R=E(this,(I.__proto__||Object.getPrototypeOf(I)).call(this,Y));return R.setOverlayRef=function(T){R.overlay=T,R.props.overlayRef&&R.props.overlayRef(T)},R.setContentRef=function(T){R.content=T,R.props.contentRef&&R.props.contentRef(T)},R.afterClose=function(){var T=R.props,D=T.appElement,U=T.ariaHideApp,V=T.htmlOpenClassName,H=T.bodyOpenClassName,b=T.parentSelector,q=b&&b().ownerDocument||document;H&&y.remove(q.body,H),V&&y.remove(q.getElementsByTagName("html")[0],V),U&&A>0&&(A-=1,A===0&&h.show(D)),R.props.shouldFocusAfterRender&&(R.props.shouldReturnFocusAfterClose?(u.returnFocus(R.props.preventScroll),u.teardownScopedFocus()):u.popWithoutFocus()),R.props.onAfterClose&&R.props.onAfterClose(),g.default.deregister(R)},R.open=function(){R.beforeOpen(),R.state.afterOpen&&R.state.beforeClose?(clearTimeout(R.closeTimer),R.setState({beforeClose:!1})):(R.props.shouldFocusAfterRender&&(u.setupScopedFocus(R.node),u.markForFocusLater()),R.setState({isOpen:!0},function(){R.openAnimationFrame=requestAnimationFrame(function(){R.setState({afterOpen:!0}),R.props.isOpen&&R.props.onAfterOpen&&R.props.onAfterOpen({overlayEl:R.overlay,contentEl:R.content})})}))},R.close=function(){R.props.closeTimeoutMS>0?R.closeWithTimeout():R.closeWithoutTimeout()},R.focusContent=function(){return R.content&&!R.contentHasFocus()&&R.content.focus({preventScroll:!0})},R.closeWithTimeout=function(){var T=Date.now()+R.props.closeTimeoutMS;R.setState({beforeClose:!0,closesAt:T},function(){R.closeTimer=setTimeout(R.closeWithoutTimeout,R.state.closesAt-Date.now())})},R.closeWithoutTimeout=function(){R.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},R.afterClose)},R.handleKeyDown=function(T){j(T)&&(0,c.default)(R.content,T),R.props.shouldCloseOnEsc&&z(T)&&(T.stopPropagation(),R.requestClose(T))},R.handleOverlayOnClick=function(T){R.shouldClose===null&&(R.shouldClose=!0),R.shouldClose&&R.props.shouldCloseOnOverlayClick&&(R.ownerHandlesClose()?R.requestClose(T):R.focusContent()),R.shouldClose=null},R.handleContentOnMouseUp=function(){R.shouldClose=!1},R.handleOverlayOnMouseDown=function(T){!R.props.shouldCloseOnOverlayClick&&T.target==R.overlay&&T.preventDefault()},R.handleContentOnClick=function(){R.shouldClose=!1},R.handleContentOnMouseDown=function(){R.shouldClose=!1},R.requestClose=function(T){return R.ownerHandlesClose()&&R.props.onRequestClose(T)},R.ownerHandlesClose=function(){return R.props.onRequestClose},R.shouldBeClosed=function(){return!R.state.isOpen&&!R.state.beforeClose},R.contentHasFocus=function(){return document.activeElement===R.content||R.content.contains(document.activeElement)},R.buildClassName=function(T,D){var U=(typeof D>"u"?"undefined":r(D))==="object"?D:{base:M[T],afterOpen:M[T]+"--after-open",beforeClose:M[T]+"--before-close"},V=U.base;return R.state.afterOpen&&(V=V+" "+U.afterOpen),R.state.beforeClose&&(V=V+" "+U.beforeClose),typeof D=="string"&&D?V+" "+D:V},R.attributesFromObject=function(T,D){return Object.keys(D).reduce(function(U,V){return U[T+"-"+V]=D[V],U},{})},R.state={afterOpen:!1,beforeClose:!1},R.shouldClose=null,R.moveFromContentToOverlay=null,R}return i(I,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(R,T){this.props.isOpen&&!R.isOpen?this.open():!this.props.isOpen&&R.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!T.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var R=this.props,T=R.appElement,D=R.ariaHideApp,U=R.htmlOpenClassName,V=R.bodyOpenClassName,H=R.parentSelector,b=H&&H().ownerDocument||document;V&&y.add(b.body,V),U&&y.add(b.getElementsByTagName("html")[0],U),D&&(A+=1,h.hide(T)),g.default.register(this)}},{key:"render",value:function(){var R=this.props,T=R.id,D=R.className,U=R.overlayClassName,V=R.defaultStyles,H=R.children,b=D?{}:V.content,q=U?{}:V.overlay;if(this.shouldBeClosed())return null;var F={ref:this.setOverlayRef,className:this.buildClassName("overlay",U),style:n({},q,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},L=n({id:T,ref:this.setContentRef,style:n({},b,this.props.style.content),className:this.buildClassName("content",D),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",n({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),J=this.props.contentElement(L,H);return this.props.overlayElement(F,J)}}]),I}(o.Component);$.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},$.propTypes={isOpen:a.default.bool.isRequired,defaultStyles:a.default.shape({content:a.default.object,overlay:a.default.object}),style:a.default.shape({content:a.default.object,overlay:a.default.object}),className:a.default.oneOfType([a.default.string,a.default.object]),overlayClassName:a.default.oneOfType([a.default.string,a.default.object]),parentSelector:a.default.func,bodyOpenClassName:a.default.string,htmlOpenClassName:a.default.string,ariaHideApp:a.default.bool,appElement:a.default.oneOfType([a.default.instanceOf(m.default),a.default.instanceOf(k.SafeHTMLCollection),a.default.instanceOf(k.SafeNodeList),a.default.arrayOf(a.default.instanceOf(m.default))]),onAfterOpen:a.default.func,onAfterClose:a.default.func,onRequestClose:a.default.func,closeTimeoutMS:a.default.number,shouldFocusAfterRender:a.default.bool,shouldCloseOnOverlayClick:a.default.bool,shouldReturnFocusAfterClose:a.default.bool,preventScroll:a.default.bool,role:a.default.string,contentLabel:a.default.string,aria:a.default.object,data:a.default.object,children:a.default.node,shouldCloseOnEsc:a.default.bool,overlayRef:a.default.func,contentRef:a.default.func,id:a.default.string,overlayElement:a.default.func,contentElement:a.default.func,testId:a.default.string},t.default=$,e.exports=t.default})(Ou,Ou.exports);function wv(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);e!=null&&this.setState(e)}function xv(e){function t(n){var r=this.constructor.getDerivedStateFromProps(e,n);return r!=null?r:null}this.setState(t.bind(this))}function Sv(e,t){try{var n=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}wv.__suppressDeprecationWarning=!0;xv.__suppressDeprecationWarning=!0;Sv.__suppressDeprecationWarning=!0;function IE(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if(typeof e.getDerivedStateFromProps!="function"&&typeof t.getSnapshotBeforeUpdate!="function")return e;var n=null,r=null,i=null;if(typeof t.componentWillMount=="function"?n="componentWillMount":typeof t.UNSAFE_componentWillMount=="function"&&(n="UNSAFE_componentWillMount"),typeof t.componentWillReceiveProps=="function"?r="componentWillReceiveProps":typeof t.UNSAFE_componentWillReceiveProps=="function"&&(r="UNSAFE_componentWillReceiveProps"),typeof t.componentWillUpdate=="function"?i="componentWillUpdate":typeof t.UNSAFE_componentWillUpdate=="function"&&(i="UNSAFE_componentWillUpdate"),n!==null||r!==null||i!==null){var o=e.displayName||e.name,l=typeof e.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+o+" uses "+l+" but also contains the following legacy lifecycles:"+(n!==null?`
  `+n:"")+(r!==null?`
  `+r:"")+(i!==null?`
  `+i:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof e.getDerivedStateFromProps=="function"&&(t.componentWillMount=wv,t.componentWillReceiveProps=xv),typeof t.getSnapshotBeforeUpdate=="function"){if(typeof t.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=Sv;var a=t.componentDidUpdate;t.componentDidUpdate=function(u,d,c){var f=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:c;a.call(this,u,d,f)}}return e}const FE=Object.freeze(Object.defineProperty({__proto__:null,polyfill:IE},Symbol.toStringTag,{value:"Module"})),HE=lp(FE);Object.defineProperty(Un,"__esModule",{value:!0});Un.bodyOpenClassName=Un.portalClassName=void 0;var Qf=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},UE=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),kv=K.exports,Ma=qi(kv),WE=Du.exports,Ra=qi(WE),BE=Ve.exports,re=qi(BE),VE=Ou.exports,qf=qi(VE),QE=Rt,qE=GE(QE),un=Tt,Yf=qi(un),YE=HE;function GE(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function qi(e){return e&&e.__esModule?e:{default:e}}function XE(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Gf(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function KE(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var JE=Un.portalClassName="ReactModalPortal",ZE=Un.bodyOpenClassName="ReactModal__Body--open",Pn=un.canUseDOM&&Ra.default.createPortal!==void 0,Xf=function(t){return document.createElement(t)},Kf=function(){return Pn?Ra.default.createPortal:Ra.default.unstable_renderSubtreeIntoContainer};function bo(e){return e()}var Yi=function(e){KE(t,e);function t(){var n,r,i,o;XE(this,t);for(var l=arguments.length,a=Array(l),s=0;s<l;s++)a[s]=arguments[s];return o=(r=(i=Gf(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this].concat(a))),i),i.removePortal=function(){!Pn&&Ra.default.unmountComponentAtNode(i.node);var u=bo(i.props.parentSelector);u&&u.contains(i.node)?u.removeChild(i.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},i.portalRef=function(u){i.portal=u},i.renderPortal=function(u){var d=Kf(),c=d(i,Ma.default.createElement(qf.default,Qf({defaultStyles:t.defaultStyles},u)),i.node);i.portalRef(c)},r),Gf(i,o)}return UE(t,[{key:"componentDidMount",value:function(){if(!!un.canUseDOM){Pn||(this.node=Xf("div")),this.node.className=this.props.portalClassName;var r=bo(this.props.parentSelector);r.appendChild(this.node),!Pn&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(r){var i=bo(r.parentSelector),o=bo(this.props.parentSelector);return{prevParent:i,nextParent:o}}},{key:"componentDidUpdate",value:function(r,i,o){if(!!un.canUseDOM){var l=this.props,a=l.isOpen,s=l.portalClassName;r.portalClassName!==s&&(this.node.className=s);var u=o.prevParent,d=o.nextParent;d!==u&&(u.removeChild(this.node),d.appendChild(this.node)),!(!r.isOpen&&!a)&&!Pn&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!un.canUseDOM||!this.node||!this.portal)){var r=this.portal.state,i=Date.now(),o=r.isOpen&&this.props.closeTimeoutMS&&(r.closesAt||i+this.props.closeTimeoutMS);o?(r.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,o-i)):this.removePortal()}}},{key:"render",value:function(){if(!un.canUseDOM||!Pn)return null;!this.node&&Pn&&(this.node=Xf("div"));var r=Kf();return r(Ma.default.createElement(qf.default,Qf({ref:this.portalRef,defaultStyles:t.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(r){qE.setElement(r)}}]),t}(kv.Component);Yi.propTypes={isOpen:re.default.bool.isRequired,style:re.default.shape({content:re.default.object,overlay:re.default.object}),portalClassName:re.default.string,bodyOpenClassName:re.default.string,htmlOpenClassName:re.default.string,className:re.default.oneOfType([re.default.string,re.default.shape({base:re.default.string.isRequired,afterOpen:re.default.string.isRequired,beforeClose:re.default.string.isRequired})]),overlayClassName:re.default.oneOfType([re.default.string,re.default.shape({base:re.default.string.isRequired,afterOpen:re.default.string.isRequired,beforeClose:re.default.string.isRequired})]),appElement:re.default.oneOfType([re.default.instanceOf(Yf.default),re.default.instanceOf(un.SafeHTMLCollection),re.default.instanceOf(un.SafeNodeList),re.default.arrayOf(re.default.instanceOf(Yf.default))]),onAfterOpen:re.default.func,onRequestClose:re.default.func,closeTimeoutMS:re.default.number,ariaHideApp:re.default.bool,shouldFocusAfterRender:re.default.bool,shouldCloseOnOverlayClick:re.default.bool,shouldReturnFocusAfterClose:re.default.bool,preventScroll:re.default.bool,parentSelector:re.default.func,aria:re.default.object,data:re.default.object,role:re.default.string,contentLabel:re.default.string,shouldCloseOnEsc:re.default.bool,overlayRef:re.default.func,contentRef:re.default.func,id:re.default.string,overlayElement:re.default.func,contentElement:re.default.func};Yi.defaultProps={isOpen:!1,portalClassName:JE,bodyOpenClassName:ZE,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(t,n){return Ma.default.createElement("div",t,n)},contentElement:function(t,n){return Ma.default.createElement("div",t,n)}};Yi.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,YE.polyfill)(Yi);Un.default=Yi;(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=Un,r=i(n);function i(o){return o&&o.__esModule?o:{default:o}}t.default=r.default,e.exports=t.default})(Cu,Cu.exports);const Ev=ja(Cu.exports),eb=C.div`
    display: flex;
    flex-direction: column;

    @media screen and (min-width: ${_.largeDesktop}){
        font-size: 40px;
    }

    @media screen and (min-width: ${_.extraLargeDesktop}){
        font-size: 50px;
    }
`,tb=C.div`
    position: sticky;
    top: 0;
    background-color: #fff;
    width: 100%;
`,nb=C.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: ${_.largeMobile}){
        font-size: 12px;
    }
`,ss=C.h2`
`,rb=C.div`
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    justify-content: center;
    width: 100%;
`,ib=C.a`
    text-decoration: none;
    color: #FF7400;

    background-color: #fff;
    border: 2px solid #FF7400;
    align-self: center;
    justify-self: center;
    
    padding: 5px 10px;
    border-radius: 7px;

    &:hover{
        border: 2px solid #fff;
        background-color: #FF7400;
        transition: 0.3s;
        color: #fff;
        cursor: pointer;
    }

    @media screen and (min-width: ${_.largeDesktop}){
        padding: 10px 20px;
    }
`,ob=C.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`,ab=C.img`
    width: 300px;

    @media screen and (max-width: ${_.largeMobile}){
        width: 200px;
    }

    @media screen and (min-width: ${_.largeDesktop}){
        width: 600px;
    }

    @media screen and (min-width: ${_.extraLargeDesktop}){
        width: 800px;
    }
`,lb=C.button`
    background-color: #fff;
    border: 1px solid #FF7400;
    font-size: 1.5em;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    color: #FF7400;

    &:hover{
        border: 1px solid #fff;
        background-color: red;
        transition: 0.3s;
        color: #fff;
        cursor: pointer;
    }

    @media screen and (max-width: ${_.largeMobile}){
        width: 30px;
        height: 30px;
        border-radius: 15px;
    }

    @media screen and (min-width: ${_.largeDesktop}){
        width: 80px;
        height: 80px;
        border-radius: 40px;
    }

    @media screen and (min-width: ${_.extraLargeDesktop}){
        width: 100px;
        height: 100px;
        border-radius: 50px;
    }
`,Jf=C.p`

`,sb=C.hr`
    background: linear-gradient(90deg, rgba(4,173,215,1) 0%, rgba(4,173,215,1) 41%, rgba(255,116,0,1) 69%);
    height: 2px;
    width: 100%;
    border: 0;
`,ub=C.ul`
    
`,cb=C.li`
    list-style: none;
`;Ev.setAppElement("#root");const db=({status:e,setStatus:t,data:n})=>{const r={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",width:"60vw",height:"70vh",overflow:"scroll",color:"#001830",paddingTop:0},overlay:{backgroundColor:"#0000004f"}};return n?w(Ev,{isOpen:e,onRequestClose:()=>t(!1),contentLabel:"Example Modal",style:r,children:Q(eb,{children:[Q(tb,{children:[Q(nb,{children:[w("h1",{children:n.title}),w(lb,{onClick:()=>t(!1),children:"X"})]}),w(sb,{})]}),w(ss,{children:"Resumo do projeto"}),Q(ob,{children:[w(ab,{src:n.image,alt:n.title}),w(Jf,{children:n.content})]}),w(ss,{children:"Membros envolvidos"}),w(ub,{children:n.members.map((i,o)=>w(cb,{children:i},o))}),w(ss,{children:"Depoimento de clientes"}),n.opinions.map((i,o)=>w(Jf,{children:i},o)),n.acess?w(rb,{children:w(ib,{target:"_blank",rel:"noopener noreferrer",href:n.acess,children:"Acesse o projeto"})}):null]})}):null},fb=C.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    overflow: hidden;
    background-color: transparent;
`,pb=C.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: ${_.notebook}) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`,hb=C.section`
    width: 85%;
    min-height: 100vh;
    padding-bottom: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    margin-bottom: 3%;
  
    background-color: lightgrey;
    border-radius: 3rem;
    
    @media screen and (max-width: ${_.tablet}) {
        width: 80%;
        min-height: 100vh;
    }

    @media screen and (min-width: ${_.largeDesktop}) {
        min-height: 65vh;
    }
`,mb=C.div`
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 0 0 10px 0;
    margin-bottom: 3%;

    @media screen and (max-width: ${_.notebook}) {
        height: 20%;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        padding: 0 0 10px 0;
    }
`,vb=C.div`
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: center;
    flex-direction: row;
    
    @media screen and (max-width: ${_.notebook}) {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column !important;
    }
`,gb=C.img`
    width: 60%;
    max-height: 40vh;
    border-radius: 20px;

    @media screen and (max-width: ${_.tablet}) {    
        width: 50%;
        max-height: 40vh;
        border-radius: 20px;
    }
`,yb=C.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: ${_.notebook}) {    
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 2%;
    }
    
`,wb=C.span`
    width: 90%;
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--blue);


    @media screen and (max-width: ${_.notebook}) {
        width: 85%;
        font-size: 1rem;
        color: var(--blue);
    }

    @media screen and (min-width: ${_.largeDesktop}) {
        font-size: 2.0rem;
    }

    @media screen and (min-width: ${_.extraLargeDesktop}) {
        font-size: 3.5rem;
    }
`,xb=C.button`
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    padding: 20px;
    color: #fff;
    width: 90%;
    background-color: #FF7400;
    border-radius: 1rem;
    margin-top: 40px;
    border: 0px;

    &:hover{
        opacity: 0.8;
        cursor: pointer;
    }

    @media screen and (max-width: ${_.largeMobile}) {
        width: 80%;
        font-size: 1rem;
    }

    @media screen and (min-width: ${_.largeDesktop}) {
        width: 90%;
        font-size: 2rem;
    }

`,Sb=C.div`
    display:flex;
    justify-content: center;
    align-items: start;
    width: 50%;
    text-align: justify;
    flex-direction: column;

    @media screen and (max-width: ${_.notebook}) {
        display:flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    
`,kb=C.div`
    display: inline-block;
    ${({containerWidth:e})=>e?`width: ${e}`:"width: 100%"}
    
`,bv=e=>{const t={dots:!1,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,arrows:!0},[n,r]=K.exports.useState(!1),[i,o]=K.exports.useState();return w(kb,{containerWidth:e.width,children:w(sv,{...t,children:e.carouselData.map((l,a)=>w(fb,{children:w(pb,{children:Q(hb,{children:[w(mb,{children:w(zc,{text:l.title})}),Q(vb,{children:[w(yb,{children:w(gb,{src:l.image,alt:l.title})}),Q(Sb,{children:[w(wb,{children:l.content}),w(xb,{onClick:()=>{r(!n),o(l)},children:"Saiba Mais"}),w(db,{data:i,status:n,setStatus:r})]})]})]})})},a))})})},Eb="/Site-Serra/assets/marmitex.857922f9.svg",bb={mechanicsProjects:[{title:"Projeto Marmitex",image:Eb,content:"O problema apresentado foi a necessidade do aumento do rendimento da m\xE1quina e, consequentemente aumento da sua produtividade. Executou-se o desenvolvimento de desenho mec\xE2nico 3D e 2D de um maquin\xE1rio de fabrica\xE7\xE3o de quentinhas j\xE1 existente (Marmitex ANEC). A entrega do projeto conteve o modelo em 3D da m\xE1quina montada e uma ficha t\xE9cnica com o desenho mec\xE2nico.",members:["alguem","alguem","alguem","alguem","alguem","alguem"],opinions:["dskadksoapdka","msakdlmsakdlas","dsaklmsakdlsmadlas","sal\xE7ds,a\xE7lds,al\xE7dsa,\xE7"]},{title:"Projeto Lar Abrigo Amor a Jesus",image:"https://cdn.discordapp.com/attachments/816415993680625714/1029096504603967578/mec-rodas.PNG",content:"O problema enfrentado foi em rela\xE7\xE3o a utiliza\xE7\xE3o das cadeiras de rodas presente no abrigo, o qual foi constatado alto \xEDndice de oxida\xE7\xE3o e/ou rompimentos de suas pe\xE7as. Ap\xF3s a realiza\xE7\xE3o de testes em laborat\xF3rio, quanto a oxida\xE7\xE3o e an\xE1lise estrutral e testes no pr\xF3prio equipamento foi desenvolvido um manual de uso com a especifica\xE7\xE3o de cada cadeira com o objetivo de aumento da durabilidade.",members:["alguem","alguem","alguem","alguem","alguem","alguem"],opinions:["dskadksoapdka","msakdlmsakdlas","dsaklmsakdlsmadlas","sal\xE7ds,a\xE7lds,al\xE7dsa,\xE7"]}]},_o="/Site-Serra/assets/seta.7067b273.svg",_b="/Site-Serra/assets/presentation-image.0aa1e0e9.svg",Cb="/Site-Serra/assets/hammer-icon.c370caae.svg",Ob="/Site-Serra/assets/bot-icon.237c34bd.svg",Pb="/Site-Serra/assets/3d-icon.6c010241.svg",Tb="/Site-Serra/assets/drawing-icon.462650d6.svg",_v="/Site-Serra/assets/arrow-up.1b45090f.svg",Lb="/Site-Serra/assets/background-mecanica.81e45f94.svg",Mb=C.div`
`,Rb=C.div`
    background-image: url(${Lb});
    background-repeat: no-repeat; 
    background-size: cover;
    background-position: top;
    padding-top: 2%;
`,jb=C.div`
    background-color: #04ADD7;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 0px 0px 0px 100px;

    @media screen and (max-width: ${_.largeMobile}) {
        flex-wrap: wrap;
    } 
`,Co=C.h3`
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
    line-height: 22px;
    margin-top: 0px;
    margin-bottom: 0px;

    @media screen and (max-width: ${_.largeMobile}) {
        font-size: 22px;
    }
    
    @media screen and (min-width: 2048px) {
        font-size: 35px;
        line-height: 40px;
    }

    @media screen and (min-width: ${_.extraLargeDesktop}) {
        font-size: 60px;
        line-height: 60px;
    }

    
`,Oo=C.p`
    width: 400px;
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 200;
    font-size: 26px;
    line-height: 30px;
    text-align: left;
    margin-top: 0px;

    @media screen and (max-width: ${_.largeMobile}) {
        width: 70%;
        font-size: 16px;
        line-height: 25px;
        text-align: justify;
    }

    @media screen and (min-width: 1280px){
        font-size: 20px;
        line-height: 30px;
    }

    @media screen and (min-width: 1920px) {
        font-size: 35px;
        line-height: 40px;
    }

    @media screen and (min-width: 2048px) {
        font-size: 35px;
        line-height: 40px;
    }

    @media screen and (min-width: ${_.extraLargeDesktop}) {
        font-size: 60px;
        width: 50%;
        height: 30vh;
        line-height: 70px;
    }

    
`,Zf=C.p`
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 700;
    font-size: 56px;
    text-align: center;  
    color: #FFFFFF;
    margin: 20px;

    @media screen and (max-width: ${_.largeMobile}) {
        margin-top: 20%;
        line-height: 5%;
        font-size: 50px;
    }  

    @media screen and (min-width: 1280px){
        font-size: 70px;
        line-height: 100px;
        
    }

    @media screen and (min-width: 1920px) {
        font-size: 106px;
        line-height: 120px;
    }

    @media screen and (min-width: 2048px) {
        font-size: 126px;
        line-height: 130px;
    }
`,Db=C.div`
    
`,zb=C.h1`
    text-align: center;
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 76px;
    line-height: 113px;
    margin-top: 0;
    margin-bottom: 0px;

    @media screen and (max-width: ${_.largeMobile}) {
        font-size: 38px;
    }

    @media screen and (min-width: ${_.extraLargeDesktop}) {
        font-size: 100px;
    }
`,$b=C.h2`
    text-align: center;
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 56px;

    @media screen and (max-width: ${_.largeMobile}) {
        margin-top: -5%;
        font-size: 22px;
       } 

    @media screen and (min-width: 1280px){
        font-size: 30px;
        line-height: 40px;
        
    }

    @media screen and (min-width: 1920px) {
        font-size: 35px;
        line-height: 40px;
    }

    @media screen and (min-width: 2048px) {
        font-size: 35px;
        line-height: 40px;
    }

    @media screen and (min-width: ${_.extraLargeDesktop}) {
        font-size: 60px;
    }

       
`,ep=C.div`
    display: flex;
    justify-content: space-around;

    @media screen and (max-width: 420px) {
        flex-direction: column;
    }  
    
    @media screen and (min-width: ${_.extraLargeDesktop}) {
        margin-left: 10%;
    }
`,Po=C.div`
    margin-top: 3%;
    margin-bottom: 3%;

    @media screen and (max-width: ${_.largeMobile}) {
        margin-bottom: 12%;
    }

    @media screen and (max-width: ${_.tablet}) {
        width: 40%;
        margin-bottom: 12%;
    } 

    @media screen and (max-width: 420px) {
        flex-direction: column;
        width: 95%;
    }

    @media screen and (min-width: ${_.extraLargeDesktop}) {
        margin-bottom: 10%;
        width: 50%;
    }

`,en=C.img`
    display: flex;
    width: 3.5vw;
    margin-right: 4%;

    @media screen and (max-width: ${_.largeMobile}) {
        width: 8%;
        margin-left: 5%;
    }

    @media screen and (max-width: ${_.tablet}) {
        width: 10%;
    } 
`,To=C.div`
    display: flex;
    min-height: 20%;
    margin-bottom: 5%;
    align-items: center;

`,Lo=C.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
`,Ab=C.img`
    width: 40%;

    @media screen and (max-width: ${_.largeMobile}) {
        width: 80%;
    }
`,Nb=C.hr`
    margin: 0px;   
    height: 4px;
    margin: 0px;
    border: 0;
    background: linear-gradient(90deg, rgba(4,173,215,1) 0%, rgba(4,173,215,1) 41%, rgba(255,116,0,1) 69%);

    @media screen and (max-width: ${_.largeMobile}) {
        font-size: 16px;
        line-height: 20px;
    }

    @media screen and (min-width: ${_.largeDesktop}) {
        height: 6px;
    }
`,Ib=C.p`
    border: 3px solid #04ADD7;
    text-align: center;
    margin: 0px;
    padding: 2%;
    margin-top: 3%;
    border-radius: 20px;
    cursor: pointer;
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    /* line-height: 47px; */
    text-align: center;
    

    color: #04ADD7;

    &:hover{
        background-color: #04ADD7;
        color: #fff;
        transition: background-color 0.8s;
    }

    @media screen and (max-width: ${_.largeMobile}) {
        width: 80%;
        font-size: 1.2em;
        margin-top: 10%;
        margin-bottom: 10%;
    }

    @media screen and (min-width: 2048px) {
        font-size: 35px;
        line-height: 40px;
    }

    @media screen and (min-width: ${_.extraLargeDesktop}) {
        font-size: 50px;
        border: 6px solid #04ADD7;
    }
`,Fb=C.div`
    display: flex;
    justify-content: center;
    align-items: center;    
    margin: 0px;
    width: 100%;
    height: 30%;

    @media screen and (max-width: ${_.largeMobile}) {
        margin: 25px 0px;
    }
`;C.div`
    
    /* justify-content: flex-end;
    align-items: center;
    margin-top: 2%;
    margin-bottom: 2%; */
`;C.img`
    margin-right: 2%;
    width: 3.5rem;

    @media screen and (max-width: ${_.largeMobile}) {
        width: 2.5rem;
    }
`;const Hb=C.img`
    position: fixed;
    z-index: 3;
    bottom: 20px;
    right: 20px;
    width: 2rem;
    height: 2rem;

    &:hover{
        opacity: 0.7;
        transition: 0.5s;
        cursor: pointer;
    }

    @media screen and (min-width: ${_.largeDesktop}) {
        width: 4rem;
        height: 4rem;
    }
`,Ub=C.div`
    margin-top: 3%;

    @media screen and (max-width: ${_.largeMobile}) {
        margin-top: 20%;
    }
`,Wb=()=>{const e=Dc();return Q(Mb,{children:[Q(jb,{children:[Q(Db,{children:[w(Zf,{children:"Engenharia"}),w(Zf,{children:"Mec\xE2nica"})]}),w(Ab,{src:_b,alt:"Imagem de Mec\xE2nica"})]}),Q(Rb,{children:[w(zb,{children:"Carta de Servi\xE7os"}),w($b,{children:"Engenharia Mec\xE2nica"}),Q(ep,{children:[Q(Po,{children:[Q(To,{children:[w(en,{src:Cb,alt:"Imagem Sistemas"}),w(Co,{children:"Projeto e Manuten\xE7\xE3o de Equipamentos"})]}),Q(Lo,{children:[w(en,{src:_o,alt:"Seta"}),w(Oo,{children:"Como nosso principal servi\xE7o, desenvolvemos os mais diversos equipamentos para atender cada demanda da melhor maneira. Assim, nosso time ir\xE1 estudar a fundo a necessidade do cliente para ent\xE3o passar por cada fase do projeto, apresentando um estudo minucioso, seu desenho t\xE9cnico, op\xE7\xF5es de prot\xF3tipo e ent\xE3o colocando na pr\xE1tica e suas necess\xE1rias manuten\xE7\xF5es."})]})]}),Q(Po,{children:[Q(To,{children:[w(en,{src:Tb,alt:"Imagem Site"}),w(Co,{children:"Desenho T\xE9cnico e Industrial"})]}),Q(Lo,{children:[w(en,{src:_o,alt:"Seta"}),w(Oo,{children:"Com aux\xEDlio de programas CAD, a Serra Jr oferece servi\xE7os de desenhos de pe\xE7as e maquin\xE1rios, em 2D e 3D, para dar vida ao conceito proposto pelo cliente seguindo todas as normas necess\xE1rias nesse processo t\xE3o significante de um projeto."})]})]})]}),Q(ep,{children:[Q(Po,{children:[Q(To,{children:[w(en,{src:Ob,alt:"Imagem Sistemas"}),w(Co,{children:"Projetos de Automa\xE7\xE3o"})]}),Q(Lo,{children:[w(en,{src:_o,alt:"Seta"}),w(Oo,{children:"A partir da demanda do cliente desenvolvemos projetos para automa\xE7\xE3o e otimiza\xE7\xE3o de tarefas. Tendo em vista que o tempo \xE9 um recurso precioso e precisa ser sempre melhor aproveitado, nosso time ir\xE1 desenvolver o melhor estudo para otimiza\xE7\xE3o do seu projeto al\xE9m de cria\xE7\xE3o de prot\xF3tipos usando microcontroladores, CLP's e outras tecnologias da ind\xFAstria 4.0."})]})]}),Q(Po,{children:[Q(To,{children:[w(en,{src:Pb,alt:"Imagem Site"}),w(Co,{children:"Prototipagem"})]}),Q(Lo,{children:[w(en,{src:_o,alt:"Seta"}),w(Oo,{children:"A experimenta\xE7\xE3o de ideias iniciais de um projeto \xE9 uma fase muito importante de seu desenvolvimento, e por isso a utiliza\xE7\xE3o de prot\xF3tipos antes do projeto final \xE9 essencial. Na Serra Jr contamos com equipamentos como impressoras 3D e CNC de corte a laser onde nossos membros capacitados podem desenvolver o melhor prot\xF3tipo a baixo custo de seu projeto."})]})]})]})]}),w(Nb,{}),w(Fb,{children:w(Ib,{onClick:()=>e("/contatos"),children:"Quer colocar um projeto em pr\xE1tica? \u2192"})}),w(Ub,{children:w(bv,{carouselData:bb.mechanicsProjects})}),w(Hb,{onClick:()=>window.scrollTo(0,0),src:_v,alt:"ScrollUp"})]})},Bb="/Site-Serra/assets/friburguense.ba8886f5.svg",Vb="/Site-Serra/assets/projeto-tmf.f6316197.svg",Qb={computingProjects:[{title:"Projeto Friburguense",image:Bb,content:`O projeto consistiu no desenvolvimento de um Website voltado \xE0 aquisi\xE7\xE3o de planos 
            de s\xF3cio torcedor do Friburguense Atl\xE9tico Clube. O site cont\xE9m as funcionalidades de cadastro e 
            login, com um sistema de pagamentos integrado. Al\xE9m disso, possui uma aba dedicada aos patrocinadores 
            do clube, com um slider para exibi\xE7\xE3o de seus logotipos.`,members:["alguem","alguem","alguem","alguem","alguem","alguem"],opinions:["dskadksoapdka","msakdlmsakdlas","dsaklmsakdlsmadlas","sal\xE7ds,a\xE7lds,al\xE7dsa,\xE7"]},{title:"Projeto TMF",image:Vb,content:`O projeto consistiu no desenvolvimento de um website para a TMF Usinagem, para exibi\xE7\xE3o 
            de produtos e servi\xE7os oferecidos pela empresa. O site conta com o cat\xE1logo de produtos, al\xE9m da 
            possibilidade de agendamento de or\xE7amento dos servi\xE7os oferecidos pela funcionalidade de 
            envio de e-mails. Tamb\xE9m h\xE1 p\xE1ginas de informa\xE7\xF5es sobre a empresa e um mapa integrado exibindo a 
            localiza\xE7\xE3o da mesma.`,members:["alguem","alguem","alguem","alguem","alguem","alguem"],opinions:["dskadksoapdka","msakdlmsakdlas","dsaklmsakdlsmadlas","sal\xE7ds,a\xE7lds,al\xE7dsa,\xE7"],acess:"https://usinagemtmf.com.br/"}]},qb="/Site-Serra/assets/presentation-image.3bba7d23.svg",Yb="/Site-Serra/assets/desenvolvimento-sistemas.85c54f6d.svg",Gb="/Site-Serra/assets/desenvolvimento-sites.cef968a9.svg",tp="/Site-Serra/assets/seta.13cafa5d.svg",Xb="/Site-Serra/assets/css-icon.e1a4dd78.svg",Kb="/Site-Serra/assets/html-icon.e0dc6b68.svg",Jb="/Site-Serra/assets/js-icon.f4d001af.svg",Zb="/Site-Serra/assets/react-icon.f937629c.svg",e_="/Site-Serra/assets/ts-icon.bf061be4.svg",t_="/Site-Serra/assets/styled-icon.35b18102.svg",n_="/Site-Serra/assets/background-computacao.dbcf66d3.svg",r_=C.div`
    scroll-behavior: smooth;

`,i_=C.div`
    background-color: #FF7400;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 0px 0px 0px 100px;

    @media screen and (max-width: ${_.largeMobile}) {
        flex-wrap: wrap;
    } 
`,o_=C.img`
    margin-top: 10px;
    width: 40%;

    @media screen and (max-width: ${_.largeMobile}) {
        width: 70%;
    }
`,a_=C.div`
    padding-top: 2%;
    background-image: url(${n_});
    background-repeat: no-repeat; 
    background-size: cover; 
`,us=C.p`
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 700;
    font-size: 56px;
    text-align: center;  
    color: #FFFFFF;
    margin: 20px;

    @media screen and (max-width: ${_.largeMobile}) {
        margin-top: 20%;
        line-height: 5%;
        font-size: 40px;
    }  

    @media screen and (min-width: 1280px){
        font-size: 70px;
        line-height: 100px;
        
    }

    @media screen and (min-width: 1920px) {
        font-size: 106px;
        line-height: 120px;
    }

    @media screen and (min-width: 2048px) {
        font-size: 126px;
        line-height: 130px;
    }
`,l_=C.div`
`,s_=C.h1`
    text-align: center;
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 76px;
    line-height: 113px;
    margin-bottom: 0px;

    @media screen and (max-width: ${_.largeMobile}) {
        font-size: 38px;
    }

    @media screen and (min-width: ${_.extraLargeDesktop}) {
        font-size: 100px;
    }
`,u_=C.h2`
    text-align: center;
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 56px;

    @media screen and (max-width: ${_.largeMobile}) {
        margin-top: -5%;
        font-size: 22px;
       } 

    @media screen and (min-width: 1280px){
        font-size: 30px;
        line-height: 40px;
        
    }

    @media screen and (min-width: 1920px) {
        font-size: 35px;
        line-height: 40px;
    }

    @media screen and (min-width: 2048px) {
        font-size: 35px;
        line-height: 40px;
    }

    @media screen and (min-width: ${_.extraLargeDesktop}) {
        font-size: 60px;
    }

       
`,c_=C.div`
    display: flex;
    justify-content: space-around;
    
    @media screen and (max-width: ${_.largeMobile}) {
        flex-directiom: row;
        flex-wrap: wrap;
    }

    @media screen and (max-width: 420px) {
        flex-direction: column;
    }    

    @media screen and (min-width: ${_.extraLargeDesktop}) {
        margin-left: 10%;
    }
`,np=C.div`
    margin-top: 3%;
    margin-bottom: 3%;

    @media screen and (max-width: ${_.largeMobile}) {
        margin-bottom: 12%;
    }

    @media screen and (max-width: ${_.tablet}) {
        width: 40%;
        margin-bottom: 12%;
    } 

    @media screen and (max-width: 420px) {
        flex-direction: column;
        width: 95%;
    }

`,Mo=C.img`
    display: flex;
    width: 3.5vw;
    margin-right: 4%;

    @media screen and (max-width: ${_.largeMobile}) {
        width: 8%;
        margin-left: 5%;
    }

    @media screen and (max-width: ${_.tablet}) {
        width: 10%;
    } 
`,rp=C.div`
    display: flex;
    min-height: 20%;
    margin-bottom: 5%;
    align-items: center;

`,ip=C.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
`,op=C.h3`
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
    line-height: 22px;
    margin-top: 0px;
    margin-bottom: 0px;

    @media screen and (min-width: ${_.largeDesktop}){
        font-size: 2em;
        line-height: 40px;
    }

    @media screen and (min-width: 2048px) {
        font-size: 35px;
        line-height: 40px;
        
    }

    @media screen and (min-width: ${_.extraLargeDesktop}) {
        font-size: 60px;
        line-height: 60px;
    }
`,ap=C.p`
    width: 400px;
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 200;
    font-size: 26px;
    line-height: 30px;
    text-align: left;
    margin-top: 0px;

    @media screen and (max-width: ${_.largeMobile}) {
        width: 70%;
        font-size: 16px;
        line-height: 25px;
        text-align: justify;
    }

    @media screen and (min-width: 1280px){
        font-size: 20px;
        line-height: 30px;
        
    }

    @media screen and (min-width: 1920px) {
        font-size: 35px;
        line-height: 40px;
    }

    @media screen and (min-width: 2048px) {
        font-size: 35px;
        line-height: 40px;
    }

    @media screen and (min-width: ${_.extraLargeDesktop}) {
        font-size: 60px;
        width: 60%;
        height: 30vh;
        line-height: 70px;
    }

    
`,d_=C.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;


`;C.div`
    width: 100%;
    
`;const Yn=C.img`

    @media screen and (max-width: ${_.tablet}){
        width: 50px;
        height: 50px;
    }

    @media screen and (min-width: ${_.extraLargeDesktop}) {
        width: 200px;
        height: 200px;
        margin-bottom: 2%;
    }
`;C.div`
    display: flex;
    justify-content: center;
    align-items: center;    
    margin: 0px;
    width: 920px;
    height: 30%;
    
`;const f_=C.img`
    position: fixed;
    z-index: 3;
    bottom: 20px;
    right: 20px;
    width: 2rem;
    height: 2rem;

    &:hover{
        opacity: 0.7;
        transition: 0.5s;
        cursor: pointer;
    }

    @media screen and (min-width: ${_.largeDesktop}) {
        width: 4rem;
        height: 4rem;
    }
`;C.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 2%;
    margin-bottom: 2%;
    
`;const p_=C.div`
    margin-top: 3%;
`,h_=C.p`
    border: 3px solid #FD6300;
    text-align: center;
    margin: 0px;
    padding: 2%;
    margin-top: 3%;
    border-radius: 20px;
    cursor: pointer;
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    /* line-height: 47px; */
    text-align: center;
    

    color: #FD6300;

    &:hover{
        background-color: #FD6300;
        color: #fff;
        transition: background-color 0.8s;
    }

    @media screen and (max-width: ${_.largeMobile}) {
        width: 80%;
        font-size: 1.2em;
        margin-top: 10%;
        margin-bottom: 10%;
    }

    @media screen and (min-width: 2048px) {
        font-size: 35px;
        line-height: 40px;
    }

    @media screen and (min-width: ${_.extraLargeDesktop}) {
        font-size: 50px;
        border: 6px solid #FD6300;
    }
`,m_=C.div`
    display: flex;
    justify-content: center;
    align-items: center;    
    margin: 0px;
    width: 100%;
    height: 30%;
`,v_=C.hr`
    margin: 0px;   
    height: 4px;
    margin: 0px;
    border: 0;
    background: linear-gradient(90deg, rgba(4,173,215,1) 0%, rgba(4,173,215,1) 41%, rgba(255,116,0,1) 69%);
`,g_=()=>{const e=Dc();return Q(r_,{children:[Q(i_,{children:[Q(l_,{children:[w(us,{children:"Engenharia"}),w(us,{children:"de"}),w(us,{children:"Computa\xE7\xE3o"})]}),w(o_,{src:qb,alt:"Imagem de Computa\xE7\xE3o"})]}),Q(a_,{children:[w(s_,{children:"Carta de Servi\xE7os"}),w(u_,{children:"Engenharia de Computa\xE7\xE3o"}),Q(c_,{children:[Q(np,{children:[Q(rp,{children:[w(Mo,{src:Gb,alt:"Imagem Site"}),w(op,{children:"Desenvolvimento de Websites"})]}),Q(ip,{children:[w(Mo,{src:tp,alt:"Seta"}),w(ap,{children:"Desenvolvemos do zero um site pensado exclusivamente para atender as necessidades do seu neg\xF3cio. Utilizamos das ferramentas mais modernas do mercado para criar uma solu\xE7\xE3o \xFAnica que ir\xE1 alavancar a visibilidade do seu produto!"})]})]}),Q(np,{children:[Q(rp,{children:[w(Mo,{src:Yb,alt:"Imagem Sistemas"}),w(op,{children:"Desenvolvimento de Sistemas Web"})]}),Q(ip,{children:[w(Mo,{src:tp,alt:"Seta"}),w(ap,{children:"Com aux\xEDlio das mais completas linguagens de programa\xE7\xE3o, fornecemos aplicativos e sistemas pr\xF3prios para a sua empresa que ir\xE3o acelerar e auxiliar internamente no gerenciamento e desenvolvimento do seu neg\xF3cio."})]})]})]}),Q(d_,{children:[w(Yn,{src:Kb,alt:"ImagemHtml"}),w(Yn,{src:Xb,alt:"Imagemcss"}),w(Yn,{src:Jb,alt:"ImagemJS"}),w(Yn,{src:e_,alt:"ImagemTS"}),w(Yn,{src:Zb,alt:"ImagemREACT"}),w(Yn,{src:t_,alt:"ImagemStyled"})]})]}),w(v_,{}),w(m_,{children:w(h_,{onClick:()=>e("/contatos"),children:"Quer colocar um projeto em pr\xE1tica? \u2192"})}),w(p_,{children:w(bv,{carouselData:Qb.computingProjects})}),w(f_,{onClick:()=>window.scrollTo(0,0),src:_v,alt:"ScrollUp"})]})},y_=()=>Q(Tm,{children:[w(uw,{}),Q(U1,{children:[w(Gn,{path:"/",element:w(tk,{})}),w(Gn,{path:"/computacao",element:w(g_,{})}),w(Gn,{path:"/mecanica",element:w(Wb,{})}),w(Gn,{path:"/quemSomos",element:w(mk,{})}),w(Gn,{path:"/contatos",element:w(Kk,{})})]}),w(p1,{})]});function w_(){return w("div",{className:"App",children:w(V1,{basename:"/Site-Serra",children:w(y_,{})})})}cs.createRoot(document.getElementById("root")).render(w(Lr.StrictMode,{children:w(w_,{})}));
