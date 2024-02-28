(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var im=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Yc(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function D2(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}),n}var R2={exports:{}},Mf={},N2={exports:{}},Ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qc=Symbol.for("react.element"),t8=Symbol.for("react.portal"),n8=Symbol.for("react.fragment"),r8=Symbol.for("react.strict_mode"),i8=Symbol.for("react.profiler"),o8=Symbol.for("react.provider"),s8=Symbol.for("react.context"),a8=Symbol.for("react.forward_ref"),l8=Symbol.for("react.suspense"),c8=Symbol.for("react.memo"),u8=Symbol.for("react.lazy"),_w=Symbol.iterator;function d8(t){return t===null||typeof t!="object"?null:(t=_w&&t[_w]||t["@@iterator"],typeof t=="function"?t:null)}var M2={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L2=Object.assign,U2={};function Na(t,e,n){this.props=t,this.context=e,this.refs=U2,this.updater=n||M2}Na.prototype.isReactComponent={};Na.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Na.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function j2(){}j2.prototype=Na.prototype;function om(t,e,n){this.props=t,this.context=e,this.refs=U2,this.updater=n||M2}var sm=om.prototype=new j2;sm.constructor=om;L2(sm,Na.prototype);sm.isPureReactComponent=!0;var Cw=Array.isArray,B2=Object.prototype.hasOwnProperty,am={current:null},F2={key:!0,ref:!0,__self:!0,__source:!0};function W2(t,e,n){var r,i={},o=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)B2.call(e,r)&&!F2.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Qc,type:t,key:o,ref:s,props:i,_owner:am.current}}function f8(t,e){return{$$typeof:Qc,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function lm(t){return typeof t=="object"&&t!==null&&t.$$typeof===Qc}function h8(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Sw=/\/+/g;function Xh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?h8(""+t.key):e.toString(36)}function nd(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case Qc:case t8:s=!0}}if(s)return s=t,i=i(s),t=r===""?"."+Xh(s,0):r,Cw(i)?(n="",t!=null&&(n=t.replace(Sw,"$&/")+"/"),nd(i,e,n,"",function(c){return c})):i!=null&&(lm(i)&&(i=f8(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Sw,"$&/")+"/")+t)),e.push(i)),1;if(s=0,r=r===""?".":r+":",Cw(t))for(var a=0;a<t.length;a++){o=t[a];var l=r+Xh(o,a);s+=nd(o,e,n,l,i)}else if(l=d8(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=r+Xh(o,a++),s+=nd(o,e,n,l,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Tu(t,e,n){if(t==null)return t;var r=[],i=0;return nd(t,r,"","",function(o){return e.call(n,o,i++)}),r}function p8(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var on={current:null},rd={transition:null},m8={ReactCurrentDispatcher:on,ReactCurrentBatchConfig:rd,ReactCurrentOwner:am};Ne.Children={map:Tu,forEach:function(t,e,n){Tu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Tu(t,function(){e++}),e},toArray:function(t){return Tu(t,function(e){return e})||[]},only:function(t){if(!lm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ne.Component=Na;Ne.Fragment=n8;Ne.Profiler=i8;Ne.PureComponent=om;Ne.StrictMode=r8;Ne.Suspense=l8;Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=m8;Ne.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=L2({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=am.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)B2.call(e,l)&&!F2.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Qc,type:t.type,key:i,ref:o,props:r,_owner:s}};Ne.createContext=function(t){return t={$$typeof:s8,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:o8,_context:t},t.Consumer=t};Ne.createElement=W2;Ne.createFactory=function(t){var e=W2.bind(null,t);return e.type=t,e};Ne.createRef=function(){return{current:null}};Ne.forwardRef=function(t){return{$$typeof:a8,render:t}};Ne.isValidElement=lm;Ne.lazy=function(t){return{$$typeof:u8,_payload:{_status:-1,_result:t},_init:p8}};Ne.memo=function(t,e){return{$$typeof:c8,type:t,compare:e===void 0?null:e}};Ne.startTransition=function(t){var e=rd.transition;rd.transition={};try{t()}finally{rd.transition=e}};Ne.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Ne.useCallback=function(t,e){return on.current.useCallback(t,e)};Ne.useContext=function(t){return on.current.useContext(t)};Ne.useDebugValue=function(){};Ne.useDeferredValue=function(t){return on.current.useDeferredValue(t)};Ne.useEffect=function(t,e){return on.current.useEffect(t,e)};Ne.useId=function(){return on.current.useId()};Ne.useImperativeHandle=function(t,e,n){return on.current.useImperativeHandle(t,e,n)};Ne.useInsertionEffect=function(t,e){return on.current.useInsertionEffect(t,e)};Ne.useLayoutEffect=function(t,e){return on.current.useLayoutEffect(t,e)};Ne.useMemo=function(t,e){return on.current.useMemo(t,e)};Ne.useReducer=function(t,e,n){return on.current.useReducer(t,e,n)};Ne.useRef=function(t){return on.current.useRef(t)};Ne.useState=function(t){return on.current.useState(t)};Ne.useSyncExternalStore=function(t,e,n){return on.current.useSyncExternalStore(t,e,n)};Ne.useTransition=function(){return on.current.useTransition()};Ne.version="18.2.0";N2.exports=Ne;var zt=N2.exports;const g8=Yc(zt);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w8=zt,y8=Symbol.for("react.element"),v8=Symbol.for("react.fragment"),b8=Object.prototype.hasOwnProperty,x8=w8.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,E8={key:!0,ref:!0,__self:!0,__source:!0};function z2(t,e,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)b8.call(e,r)&&!E8.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:y8,type:t,key:o,ref:s,props:i,_owner:x8.current}}Mf.Fragment=v8;Mf.jsx=z2;Mf.jsxs=z2;R2.exports=Mf;var Fe=R2.exports,ap={},H2={exports:{}},On={},V2={exports:{}},q2={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(R,W){var z=R.length;R.push(W);e:for(;0<z;){var Z=z-1>>>1,X=R[Z];if(0<i(X,W))R[Z]=W,R[z]=X,z=Z;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var W=R[0],z=R.pop();if(z!==W){R[0]=z;e:for(var Z=0,X=R.length,K=X>>>1;Z<K;){var oe=2*(Z+1)-1,fe=R[oe],pe=oe+1,ye=R[pe];if(0>i(fe,z))pe<X&&0>i(ye,fe)?(R[Z]=ye,R[pe]=z,Z=pe):(R[Z]=fe,R[oe]=z,Z=oe);else if(pe<X&&0>i(ye,z))R[Z]=ye,R[pe]=z,Z=pe;else break e}}return W}function i(R,W){var z=R.sortIndex-W.sortIndex;return z!==0?z:R.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],c=[],u=1,d=null,p=3,w=!1,y=!1,E=!1,C=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(R){for(var W=n(c);W!==null;){if(W.callback===null)r(c);else if(W.startTime<=R)r(c),W.sortIndex=W.expirationTime,e(l,W);else break;W=n(c)}}function x(R){if(E=!1,v(R),!y)if(n(l)!==null)y=!0,j(_);else{var W=n(c);W!==null&&B(x,W.startTime-R)}}function _(R,W){y=!1,E&&(E=!1,b(T),T=-1),w=!0;var z=p;try{for(v(W),d=n(l);d!==null&&(!(d.expirationTime>W)||R&&!M());){var Z=d.callback;if(typeof Z=="function"){d.callback=null,p=d.priorityLevel;var X=Z(d.expirationTime<=W);W=t.unstable_now(),typeof X=="function"?d.callback=X:d===n(l)&&r(l),v(W)}else r(l);d=n(l)}if(d!==null)var K=!0;else{var oe=n(c);oe!==null&&B(x,oe.startTime-W),K=!1}return K}finally{d=null,p=z,w=!1}}var S=!1,f=null,T=-1,O=5,D=-1;function M(){return!(t.unstable_now()-D<O)}function ee(){if(f!==null){var R=t.unstable_now();D=R;var W=!0;try{W=f(!0,R)}finally{W?ne():(S=!1,f=null)}}else S=!1}var ne;if(typeof m=="function")ne=function(){m(ee)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,F=H.port2;H.port1.onmessage=ee,ne=function(){F.postMessage(null)}}else ne=function(){C(ee,0)};function j(R){f=R,S||(S=!0,ne())}function B(R,W){T=C(function(){R(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(R){R.callback=null},t.unstable_continueExecution=function(){y||w||(y=!0,j(_))},t.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<R?Math.floor(1e3/R):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(R){switch(p){case 1:case 2:case 3:var W=3;break;default:W=p}var z=p;p=W;try{return R()}finally{p=z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(R,W){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var z=p;p=R;try{return W()}finally{p=z}},t.unstable_scheduleCallback=function(R,W,z){var Z=t.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?Z+z:Z):z=Z,R){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=z+X,R={id:u++,callback:W,priorityLevel:R,startTime:z,expirationTime:X,sortIndex:-1},z>Z?(R.sortIndex=z,e(c,R),n(l)===null&&R===n(c)&&(E?(b(T),T=-1):E=!0,B(x,z-Z))):(R.sortIndex=X,e(l,R),y||w||(y=!0,j(_))),R},t.unstable_shouldYield=M,t.unstable_wrapCallback=function(R){var W=p;return function(){var z=p;p=W;try{return R.apply(this,arguments)}finally{p=z}}}})(q2);V2.exports=q2;var _8=V2.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z2=zt,In=_8;function V(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var G2=new Set,Ll={};function ps(t,e){ia(t,e),ia(t+"Capture",e)}function ia(t,e){for(Ll[t]=e,t=0;t<e.length;t++)G2.add(e[t])}var ni=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lp=Object.prototype.hasOwnProperty,C8=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Aw={},Tw={};function S8(t){return lp.call(Tw,t)?!0:lp.call(Aw,t)?!1:C8.test(t)?Tw[t]=!0:(Aw[t]=!0,!1)}function A8(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function T8(t,e,n,r){if(e===null||typeof e>"u"||A8(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function sn(t,e,n,r,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var Mt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Mt[t]=new sn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Mt[e]=new sn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Mt[t]=new sn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Mt[t]=new sn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Mt[t]=new sn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Mt[t]=new sn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Mt[t]=new sn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Mt[t]=new sn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Mt[t]=new sn(t,5,!1,t.toLowerCase(),null,!1,!1)});var cm=/[\-:]([a-z])/g;function um(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(cm,um);Mt[e]=new sn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(cm,um);Mt[e]=new sn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(cm,um);Mt[e]=new sn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Mt[t]=new sn(t,1,!1,t.toLowerCase(),null,!1,!1)});Mt.xlinkHref=new sn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Mt[t]=new sn(t,1,!1,t.toLowerCase(),null,!0,!0)});function dm(t,e,n,r){var i=Mt.hasOwnProperty(e)?Mt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(T8(e,n,i,r)&&(n=null),r||i===null?S8(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var di=Z2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Pu=Symbol.for("react.element"),Ds=Symbol.for("react.portal"),Rs=Symbol.for("react.fragment"),fm=Symbol.for("react.strict_mode"),cp=Symbol.for("react.profiler"),K2=Symbol.for("react.provider"),Y2=Symbol.for("react.context"),hm=Symbol.for("react.forward_ref"),up=Symbol.for("react.suspense"),dp=Symbol.for("react.suspense_list"),pm=Symbol.for("react.memo"),xi=Symbol.for("react.lazy"),Q2=Symbol.for("react.offscreen"),Pw=Symbol.iterator;function Ja(t){return t===null||typeof t!="object"?null:(t=Pw&&t[Pw]||t["@@iterator"],typeof t=="function"?t:null)}var lt=Object.assign,e0;function hl(t){if(e0===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);e0=e&&e[1]||""}return`
`+e0+t}var t0=!1;function n0(t,e){if(!t||t0)return"";t0=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{t0=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?hl(t):""}function P8(t){switch(t.tag){case 5:return hl(t.type);case 16:return hl("Lazy");case 13:return hl("Suspense");case 19:return hl("SuspenseList");case 0:case 2:case 15:return t=n0(t.type,!1),t;case 11:return t=n0(t.type.render,!1),t;case 1:return t=n0(t.type,!0),t;default:return""}}function fp(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Rs:return"Fragment";case Ds:return"Portal";case cp:return"Profiler";case fm:return"StrictMode";case up:return"Suspense";case dp:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Y2:return(t.displayName||"Context")+".Consumer";case K2:return(t._context.displayName||"Context")+".Provider";case hm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case pm:return e=t.displayName||null,e!==null?e:fp(t.type)||"Memo";case xi:e=t._payload,t=t._init;try{return fp(t(e))}catch{}}return null}function $8(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fp(e);case 8:return e===fm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function qi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function J2(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function I8(t){var e=J2(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function $u(t){t._valueTracker||(t._valueTracker=I8(t))}function X2(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=J2(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function xd(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function hp(t,e){var n=e.checked;return lt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function $w(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=qi(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function e3(t,e){e=e.checked,e!=null&&dm(t,"checked",e,!1)}function pp(t,e){e3(t,e);var n=qi(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?mp(t,e.type,n):e.hasOwnProperty("defaultValue")&&mp(t,e.type,qi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Iw(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function mp(t,e,n){(e!=="number"||xd(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var pl=Array.isArray;function qs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+qi(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function gp(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(V(91));return lt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function kw(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(V(92));if(pl(n)){if(1<n.length)throw Error(V(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:qi(n)}}function t3(t,e){var n=qi(e.value),r=qi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Ow(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function n3(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wp(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?n3(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Iu,r3=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Iu=Iu||document.createElement("div"),Iu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Iu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ul(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var xl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},k8=["Webkit","ms","Moz","O"];Object.keys(xl).forEach(function(t){k8.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),xl[e]=xl[t]})});function i3(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||xl.hasOwnProperty(t)&&xl[t]?(""+e).trim():e+"px"}function o3(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=i3(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var O8=lt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yp(t,e){if(e){if(O8[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(V(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(V(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(V(61))}if(e.style!=null&&typeof e.style!="object")throw Error(V(62))}}function vp(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bp=null;function mm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var xp=null,Zs=null,Gs=null;function Dw(t){if(t=eu(t)){if(typeof xp!="function")throw Error(V(280));var e=t.stateNode;e&&(e=Ff(e),xp(t.stateNode,t.type,e))}}function s3(t){Zs?Gs?Gs.push(t):Gs=[t]:Zs=t}function a3(){if(Zs){var t=Zs,e=Gs;if(Gs=Zs=null,Dw(t),e)for(t=0;t<e.length;t++)Dw(e[t])}}function l3(t,e){return t(e)}function c3(){}var r0=!1;function u3(t,e,n){if(r0)return t(e,n);r0=!0;try{return l3(t,e,n)}finally{r0=!1,(Zs!==null||Gs!==null)&&(c3(),a3())}}function jl(t,e){var n=t.stateNode;if(n===null)return null;var r=Ff(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(V(231,e,typeof n));return n}var Ep=!1;if(ni)try{var Xa={};Object.defineProperty(Xa,"passive",{get:function(){Ep=!0}}),window.addEventListener("test",Xa,Xa),window.removeEventListener("test",Xa,Xa)}catch{Ep=!1}function D8(t,e,n,r,i,o,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var El=!1,Ed=null,_d=!1,_p=null,R8={onError:function(t){El=!0,Ed=t}};function N8(t,e,n,r,i,o,s,a,l){El=!1,Ed=null,D8.apply(R8,arguments)}function M8(t,e,n,r,i,o,s,a,l){if(N8.apply(this,arguments),El){if(El){var c=Ed;El=!1,Ed=null}else throw Error(V(198));_d||(_d=!0,_p=c)}}function ms(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function d3(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Rw(t){if(ms(t)!==t)throw Error(V(188))}function L8(t){var e=t.alternate;if(!e){if(e=ms(t),e===null)throw Error(V(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Rw(i),t;if(o===r)return Rw(i),e;o=o.sibling}throw Error(V(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(V(189))}}if(n.alternate!==r)throw Error(V(190))}if(n.tag!==3)throw Error(V(188));return n.stateNode.current===n?t:e}function f3(t){return t=L8(t),t!==null?h3(t):null}function h3(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=h3(t);if(e!==null)return e;t=t.sibling}return null}var p3=In.unstable_scheduleCallback,Nw=In.unstable_cancelCallback,U8=In.unstable_shouldYield,j8=In.unstable_requestPaint,gt=In.unstable_now,B8=In.unstable_getCurrentPriorityLevel,gm=In.unstable_ImmediatePriority,m3=In.unstable_UserBlockingPriority,Cd=In.unstable_NormalPriority,F8=In.unstable_LowPriority,g3=In.unstable_IdlePriority,Lf=null,Ir=null;function W8(t){if(Ir&&typeof Ir.onCommitFiberRoot=="function")try{Ir.onCommitFiberRoot(Lf,t,void 0,(t.current.flags&128)===128)}catch{}}var or=Math.clz32?Math.clz32:V8,z8=Math.log,H8=Math.LN2;function V8(t){return t>>>=0,t===0?32:31-(z8(t)/H8|0)|0}var ku=64,Ou=4194304;function ml(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Sd(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=ml(a):(o&=s,o!==0&&(r=ml(o)))}else s=n&~i,s!==0?r=ml(s):o!==0&&(r=ml(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-or(e),i=1<<n,r|=t[n],e&=~i;return r}function q8(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Z8(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-or(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=q8(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function Cp(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function w3(){var t=ku;return ku<<=1,!(ku&4194240)&&(ku=64),t}function i0(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Jc(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-or(e),t[e]=n}function G8(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-or(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function wm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-or(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ze=0;function y3(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var v3,ym,b3,x3,E3,Sp=!1,Du=[],Ri=null,Ni=null,Mi=null,Bl=new Map,Fl=new Map,Ai=[],K8="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Mw(t,e){switch(t){case"focusin":case"focusout":Ri=null;break;case"dragenter":case"dragleave":Ni=null;break;case"mouseover":case"mouseout":Mi=null;break;case"pointerover":case"pointerout":Bl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fl.delete(e.pointerId)}}function el(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=eu(e),e!==null&&ym(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Y8(t,e,n,r,i){switch(e){case"focusin":return Ri=el(Ri,t,e,n,r,i),!0;case"dragenter":return Ni=el(Ni,t,e,n,r,i),!0;case"mouseover":return Mi=el(Mi,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return Bl.set(o,el(Bl.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Fl.set(o,el(Fl.get(o)||null,t,e,n,r,i)),!0}return!1}function _3(t){var e=Po(t.target);if(e!==null){var n=ms(e);if(n!==null){if(e=n.tag,e===13){if(e=d3(n),e!==null){t.blockedOn=e,E3(t.priority,function(){b3(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function id(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ap(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);bp=r,n.target.dispatchEvent(r),bp=null}else return e=eu(n),e!==null&&ym(e),t.blockedOn=n,!1;e.shift()}return!0}function Lw(t,e,n){id(t)&&n.delete(e)}function Q8(){Sp=!1,Ri!==null&&id(Ri)&&(Ri=null),Ni!==null&&id(Ni)&&(Ni=null),Mi!==null&&id(Mi)&&(Mi=null),Bl.forEach(Lw),Fl.forEach(Lw)}function tl(t,e){t.blockedOn===e&&(t.blockedOn=null,Sp||(Sp=!0,In.unstable_scheduleCallback(In.unstable_NormalPriority,Q8)))}function Wl(t){function e(i){return tl(i,t)}if(0<Du.length){tl(Du[0],t);for(var n=1;n<Du.length;n++){var r=Du[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Ri!==null&&tl(Ri,t),Ni!==null&&tl(Ni,t),Mi!==null&&tl(Mi,t),Bl.forEach(e),Fl.forEach(e),n=0;n<Ai.length;n++)r=Ai[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Ai.length&&(n=Ai[0],n.blockedOn===null);)_3(n),n.blockedOn===null&&Ai.shift()}var Ks=di.ReactCurrentBatchConfig,Ad=!0;function J8(t,e,n,r){var i=ze,o=Ks.transition;Ks.transition=null;try{ze=1,vm(t,e,n,r)}finally{ze=i,Ks.transition=o}}function X8(t,e,n,r){var i=ze,o=Ks.transition;Ks.transition=null;try{ze=4,vm(t,e,n,r)}finally{ze=i,Ks.transition=o}}function vm(t,e,n,r){if(Ad){var i=Ap(t,e,n,r);if(i===null)p0(t,e,r,Td,n),Mw(t,r);else if(Y8(i,t,e,n,r))r.stopPropagation();else if(Mw(t,r),e&4&&-1<K8.indexOf(t)){for(;i!==null;){var o=eu(i);if(o!==null&&v3(o),o=Ap(t,e,n,r),o===null&&p0(t,e,r,Td,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else p0(t,e,r,null,n)}}var Td=null;function Ap(t,e,n,r){if(Td=null,t=mm(r),t=Po(t),t!==null)if(e=ms(t),e===null)t=null;else if(n=e.tag,n===13){if(t=d3(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Td=t,null}function C3(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(B8()){case gm:return 1;case m3:return 4;case Cd:case F8:return 16;case g3:return 536870912;default:return 16}default:return 16}}var ki=null,bm=null,od=null;function S3(){if(od)return od;var t,e=bm,n=e.length,r,i="value"in ki?ki.value:ki.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===i[o-r];r++);return od=i.slice(t,1<r?1-r:void 0)}function sd(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ru(){return!0}function Uw(){return!1}function Dn(t){function e(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ru:Uw,this.isPropagationStopped=Uw,this}return lt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ru)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ru)},persist:function(){},isPersistent:Ru}),e}var Ma={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xm=Dn(Ma),Xc=lt({},Ma,{view:0,detail:0}),ex=Dn(Xc),o0,s0,nl,Uf=lt({},Xc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Em,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==nl&&(nl&&t.type==="mousemove"?(o0=t.screenX-nl.screenX,s0=t.screenY-nl.screenY):s0=o0=0,nl=t),o0)},movementY:function(t){return"movementY"in t?t.movementY:s0}}),jw=Dn(Uf),tx=lt({},Uf,{dataTransfer:0}),nx=Dn(tx),rx=lt({},Xc,{relatedTarget:0}),a0=Dn(rx),ix=lt({},Ma,{animationName:0,elapsedTime:0,pseudoElement:0}),ox=Dn(ix),sx=lt({},Ma,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ax=Dn(sx),lx=lt({},Ma,{data:0}),Bw=Dn(lx),cx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ux={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=dx[t])?!!e[t]:!1}function Em(){return fx}var hx=lt({},Xc,{key:function(t){if(t.key){var e=cx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=sd(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ux[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Em,charCode:function(t){return t.type==="keypress"?sd(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?sd(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),px=Dn(hx),mx=lt({},Uf,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fw=Dn(mx),gx=lt({},Xc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Em}),wx=Dn(gx),yx=lt({},Ma,{propertyName:0,elapsedTime:0,pseudoElement:0}),vx=Dn(yx),bx=lt({},Uf,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),xx=Dn(bx),Ex=[9,13,27,32],_m=ni&&"CompositionEvent"in window,_l=null;ni&&"documentMode"in document&&(_l=document.documentMode);var _x=ni&&"TextEvent"in window&&!_l,A3=ni&&(!_m||_l&&8<_l&&11>=_l),Ww=" ",zw=!1;function T3(t,e){switch(t){case"keyup":return Ex.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function P3(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ns=!1;function Cx(t,e){switch(t){case"compositionend":return P3(e);case"keypress":return e.which!==32?null:(zw=!0,Ww);case"textInput":return t=e.data,t===Ww&&zw?null:t;default:return null}}function Sx(t,e){if(Ns)return t==="compositionend"||!_m&&T3(t,e)?(t=S3(),od=bm=ki=null,Ns=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return A3&&e.locale!=="ko"?null:e.data;default:return null}}var Ax={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hw(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Ax[t.type]:e==="textarea"}function $3(t,e,n,r){s3(r),e=Pd(e,"onChange"),0<e.length&&(n=new xm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Cl=null,zl=null;function Tx(t){B3(t,0)}function jf(t){var e=Us(t);if(X2(e))return t}function Px(t,e){if(t==="change")return e}var I3=!1;if(ni){var l0;if(ni){var c0="oninput"in document;if(!c0){var Vw=document.createElement("div");Vw.setAttribute("oninput","return;"),c0=typeof Vw.oninput=="function"}l0=c0}else l0=!1;I3=l0&&(!document.documentMode||9<document.documentMode)}function qw(){Cl&&(Cl.detachEvent("onpropertychange",k3),zl=Cl=null)}function k3(t){if(t.propertyName==="value"&&jf(zl)){var e=[];$3(e,zl,t,mm(t)),u3(Tx,e)}}function $x(t,e,n){t==="focusin"?(qw(),Cl=e,zl=n,Cl.attachEvent("onpropertychange",k3)):t==="focusout"&&qw()}function Ix(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return jf(zl)}function kx(t,e){if(t==="click")return jf(e)}function Ox(t,e){if(t==="input"||t==="change")return jf(e)}function Dx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var cr=typeof Object.is=="function"?Object.is:Dx;function Hl(t,e){if(cr(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!lp.call(e,i)||!cr(t[i],e[i]))return!1}return!0}function Zw(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Gw(t,e){var n=Zw(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Zw(n)}}function O3(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?O3(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function D3(){for(var t=window,e=xd();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=xd(t.document)}return e}function Cm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Rx(t){var e=D3(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&O3(n.ownerDocument.documentElement,n)){if(r!==null&&Cm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=Gw(n,o);var s=Gw(n,r);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Nx=ni&&"documentMode"in document&&11>=document.documentMode,Ms=null,Tp=null,Sl=null,Pp=!1;function Kw(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Pp||Ms==null||Ms!==xd(r)||(r=Ms,"selectionStart"in r&&Cm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Sl&&Hl(Sl,r)||(Sl=r,r=Pd(Tp,"onSelect"),0<r.length&&(e=new xm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ms)))}function Nu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ls={animationend:Nu("Animation","AnimationEnd"),animationiteration:Nu("Animation","AnimationIteration"),animationstart:Nu("Animation","AnimationStart"),transitionend:Nu("Transition","TransitionEnd")},u0={},R3={};ni&&(R3=document.createElement("div").style,"AnimationEvent"in window||(delete Ls.animationend.animation,delete Ls.animationiteration.animation,delete Ls.animationstart.animation),"TransitionEvent"in window||delete Ls.transitionend.transition);function Bf(t){if(u0[t])return u0[t];if(!Ls[t])return t;var e=Ls[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in R3)return u0[t]=e[n];return t}var N3=Bf("animationend"),M3=Bf("animationiteration"),L3=Bf("animationstart"),U3=Bf("transitionend"),j3=new Map,Yw="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function oo(t,e){j3.set(t,e),ps(e,[t])}for(var d0=0;d0<Yw.length;d0++){var f0=Yw[d0],Mx=f0.toLowerCase(),Lx=f0[0].toUpperCase()+f0.slice(1);oo(Mx,"on"+Lx)}oo(N3,"onAnimationEnd");oo(M3,"onAnimationIteration");oo(L3,"onAnimationStart");oo("dblclick","onDoubleClick");oo("focusin","onFocus");oo("focusout","onBlur");oo(U3,"onTransitionEnd");ia("onMouseEnter",["mouseout","mouseover"]);ia("onMouseLeave",["mouseout","mouseover"]);ia("onPointerEnter",["pointerout","pointerover"]);ia("onPointerLeave",["pointerout","pointerover"]);ps("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ps("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ps("onBeforeInput",["compositionend","keypress","textInput","paste"]);ps("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ps("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ps("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ux=new Set("cancel close invalid load scroll toggle".split(" ").concat(gl));function Qw(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,M8(r,e,void 0,t),t.currentTarget=null}function B3(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Qw(i,a,c),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,c=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Qw(i,a,c),o=l}}}if(_d)throw t=_p,_d=!1,_p=null,t}function Xe(t,e){var n=e[Dp];n===void 0&&(n=e[Dp]=new Set);var r=t+"__bubble";n.has(r)||(F3(e,t,2,!1),n.add(r))}function h0(t,e,n){var r=0;e&&(r|=4),F3(n,t,r,e)}var Mu="_reactListening"+Math.random().toString(36).slice(2);function Vl(t){if(!t[Mu]){t[Mu]=!0,G2.forEach(function(n){n!=="selectionchange"&&(Ux.has(n)||h0(n,!1,t),h0(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Mu]||(e[Mu]=!0,h0("selectionchange",!1,e))}}function F3(t,e,n,r){switch(C3(e)){case 1:var i=J8;break;case 4:i=X8;break;default:i=vm}n=i.bind(null,e,n,t),i=void 0,!Ep||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function p0(t,e,n,r,i){var o=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Po(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}u3(function(){var c=o,u=mm(n),d=[];e:{var p=j3.get(t);if(p!==void 0){var w=xm,y=t;switch(t){case"keypress":if(sd(n)===0)break e;case"keydown":case"keyup":w=px;break;case"focusin":y="focus",w=a0;break;case"focusout":y="blur",w=a0;break;case"beforeblur":case"afterblur":w=a0;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=jw;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=nx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=wx;break;case N3:case M3:case L3:w=ox;break;case U3:w=vx;break;case"scroll":w=ex;break;case"wheel":w=xx;break;case"copy":case"cut":case"paste":w=ax;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Fw}var E=(e&4)!==0,C=!E&&t==="scroll",b=E?p!==null?p+"Capture":null:p;E=[];for(var m=c,v;m!==null;){v=m;var x=v.stateNode;if(v.tag===5&&x!==null&&(v=x,b!==null&&(x=jl(m,b),x!=null&&E.push(ql(m,x,v)))),C)break;m=m.return}0<E.length&&(p=new w(p,y,null,n,u),d.push({event:p,listeners:E}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",w=t==="mouseout"||t==="pointerout",p&&n!==bp&&(y=n.relatedTarget||n.fromElement)&&(Po(y)||y[ri]))break e;if((w||p)&&(p=u.window===u?u:(p=u.ownerDocument)?p.defaultView||p.parentWindow:window,w?(y=n.relatedTarget||n.toElement,w=c,y=y?Po(y):null,y!==null&&(C=ms(y),y!==C||y.tag!==5&&y.tag!==6)&&(y=null)):(w=null,y=c),w!==y)){if(E=jw,x="onMouseLeave",b="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(E=Fw,x="onPointerLeave",b="onPointerEnter",m="pointer"),C=w==null?p:Us(w),v=y==null?p:Us(y),p=new E(x,m+"leave",w,n,u),p.target=C,p.relatedTarget=v,x=null,Po(u)===c&&(E=new E(b,m+"enter",y,n,u),E.target=v,E.relatedTarget=C,x=E),C=x,w&&y)t:{for(E=w,b=y,m=0,v=E;v;v=_s(v))m++;for(v=0,x=b;x;x=_s(x))v++;for(;0<m-v;)E=_s(E),m--;for(;0<v-m;)b=_s(b),v--;for(;m--;){if(E===b||b!==null&&E===b.alternate)break t;E=_s(E),b=_s(b)}E=null}else E=null;w!==null&&Jw(d,p,w,E,!1),y!==null&&C!==null&&Jw(d,C,y,E,!0)}}e:{if(p=c?Us(c):window,w=p.nodeName&&p.nodeName.toLowerCase(),w==="select"||w==="input"&&p.type==="file")var _=Px;else if(Hw(p))if(I3)_=Ox;else{_=Ix;var S=$x}else(w=p.nodeName)&&w.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(_=kx);if(_&&(_=_(t,c))){$3(d,_,n,u);break e}S&&S(t,p,c),t==="focusout"&&(S=p._wrapperState)&&S.controlled&&p.type==="number"&&mp(p,"number",p.value)}switch(S=c?Us(c):window,t){case"focusin":(Hw(S)||S.contentEditable==="true")&&(Ms=S,Tp=c,Sl=null);break;case"focusout":Sl=Tp=Ms=null;break;case"mousedown":Pp=!0;break;case"contextmenu":case"mouseup":case"dragend":Pp=!1,Kw(d,n,u);break;case"selectionchange":if(Nx)break;case"keydown":case"keyup":Kw(d,n,u)}var f;if(_m)e:{switch(t){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Ns?T3(t,n)&&(T="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(A3&&n.locale!=="ko"&&(Ns||T!=="onCompositionStart"?T==="onCompositionEnd"&&Ns&&(f=S3()):(ki=u,bm="value"in ki?ki.value:ki.textContent,Ns=!0)),S=Pd(c,T),0<S.length&&(T=new Bw(T,t,null,n,u),d.push({event:T,listeners:S}),f?T.data=f:(f=P3(n),f!==null&&(T.data=f)))),(f=_x?Cx(t,n):Sx(t,n))&&(c=Pd(c,"onBeforeInput"),0<c.length&&(u=new Bw("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=f))}B3(d,e)})}function ql(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Pd(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=jl(t,n),o!=null&&r.unshift(ql(t,o,i)),o=jl(t,e),o!=null&&r.push(ql(t,o,i))),t=t.return}return r}function _s(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Jw(t,e,n,r,i){for(var o=e._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=jl(n,o),l!=null&&s.unshift(ql(n,l,a))):i||(l=jl(n,o),l!=null&&s.push(ql(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var jx=/\r\n?/g,Bx=/\u0000|\uFFFD/g;function Xw(t){return(typeof t=="string"?t:""+t).replace(jx,`
`).replace(Bx,"")}function Lu(t,e,n){if(e=Xw(e),Xw(t)!==e&&n)throw Error(V(425))}function $d(){}var $p=null,Ip=null;function kp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Op=typeof setTimeout=="function"?setTimeout:void 0,Fx=typeof clearTimeout=="function"?clearTimeout:void 0,ey=typeof Promise=="function"?Promise:void 0,Wx=typeof queueMicrotask=="function"?queueMicrotask:typeof ey<"u"?function(t){return ey.resolve(null).then(t).catch(zx)}:Op;function zx(t){setTimeout(function(){throw t})}function m0(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Wl(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Wl(e)}function Li(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ty(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var La=Math.random().toString(36).slice(2),Pr="__reactFiber$"+La,Zl="__reactProps$"+La,ri="__reactContainer$"+La,Dp="__reactEvents$"+La,Hx="__reactListeners$"+La,Vx="__reactHandles$"+La;function Po(t){var e=t[Pr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ri]||n[Pr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ty(t);t!==null;){if(n=t[Pr])return n;t=ty(t)}return e}t=n,n=t.parentNode}return null}function eu(t){return t=t[Pr]||t[ri],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Us(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(V(33))}function Ff(t){return t[Zl]||null}var Rp=[],js=-1;function so(t){return{current:t}}function et(t){0>js||(t.current=Rp[js],Rp[js]=null,js--)}function Qe(t,e){js++,Rp[js]=t.current,t.current=e}var Zi={},Vt=so(Zi),hn=so(!1),Fo=Zi;function oa(t,e){var n=t.type.contextTypes;if(!n)return Zi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function pn(t){return t=t.childContextTypes,t!=null}function Id(){et(hn),et(Vt)}function ny(t,e,n){if(Vt.current!==Zi)throw Error(V(168));Qe(Vt,e),Qe(hn,n)}function W3(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(V(108,$8(t)||"Unknown",i));return lt({},n,r)}function kd(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Zi,Fo=Vt.current,Qe(Vt,t),Qe(hn,hn.current),!0}function ry(t,e,n){var r=t.stateNode;if(!r)throw Error(V(169));n?(t=W3(t,e,Fo),r.__reactInternalMemoizedMergedChildContext=t,et(hn),et(Vt),Qe(Vt,t)):et(hn),Qe(hn,n)}var Gr=null,Wf=!1,g0=!1;function z3(t){Gr===null?Gr=[t]:Gr.push(t)}function qx(t){Wf=!0,z3(t)}function ao(){if(!g0&&Gr!==null){g0=!0;var t=0,e=ze;try{var n=Gr;for(ze=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Gr=null,Wf=!1}catch(i){throw Gr!==null&&(Gr=Gr.slice(t+1)),p3(gm,ao),i}finally{ze=e,g0=!1}}return null}var Bs=[],Fs=0,Od=null,Dd=0,Ln=[],Un=0,Wo=null,Yr=1,Qr="";function Ao(t,e){Bs[Fs++]=Dd,Bs[Fs++]=Od,Od=t,Dd=e}function H3(t,e,n){Ln[Un++]=Yr,Ln[Un++]=Qr,Ln[Un++]=Wo,Wo=t;var r=Yr;t=Qr;var i=32-or(r)-1;r&=~(1<<i),n+=1;var o=32-or(e)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Yr=1<<32-or(e)+i|n<<i|r,Qr=o+t}else Yr=1<<o|n<<i|r,Qr=t}function Sm(t){t.return!==null&&(Ao(t,1),H3(t,1,0))}function Am(t){for(;t===Od;)Od=Bs[--Fs],Bs[Fs]=null,Dd=Bs[--Fs],Bs[Fs]=null;for(;t===Wo;)Wo=Ln[--Un],Ln[Un]=null,Qr=Ln[--Un],Ln[Un]=null,Yr=Ln[--Un],Ln[Un]=null}var $n=null,Tn=null,nt=!1,nr=null;function V3(t,e){var n=jn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function iy(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,$n=t,Tn=Li(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,$n=t,Tn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Wo!==null?{id:Yr,overflow:Qr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=jn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,$n=t,Tn=null,!0):!1;default:return!1}}function Np(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Mp(t){if(nt){var e=Tn;if(e){var n=e;if(!iy(t,e)){if(Np(t))throw Error(V(418));e=Li(n.nextSibling);var r=$n;e&&iy(t,e)?V3(r,n):(t.flags=t.flags&-4097|2,nt=!1,$n=t)}}else{if(Np(t))throw Error(V(418));t.flags=t.flags&-4097|2,nt=!1,$n=t}}}function oy(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;$n=t}function Uu(t){if(t!==$n)return!1;if(!nt)return oy(t),nt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!kp(t.type,t.memoizedProps)),e&&(e=Tn)){if(Np(t))throw q3(),Error(V(418));for(;e;)V3(t,e),e=Li(e.nextSibling)}if(oy(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(V(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Tn=Li(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Tn=null}}else Tn=$n?Li(t.stateNode.nextSibling):null;return!0}function q3(){for(var t=Tn;t;)t=Li(t.nextSibling)}function sa(){Tn=$n=null,nt=!1}function Tm(t){nr===null?nr=[t]:nr.push(t)}var Zx=di.ReactCurrentBatchConfig;function Xn(t,e){if(t&&t.defaultProps){e=lt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Rd=so(null),Nd=null,Ws=null,Pm=null;function $m(){Pm=Ws=Nd=null}function Im(t){var e=Rd.current;et(Rd),t._currentValue=e}function Lp(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ys(t,e){Nd=t,Pm=Ws=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(dn=!0),t.firstContext=null)}function Wn(t){var e=t._currentValue;if(Pm!==t)if(t={context:t,memoizedValue:e,next:null},Ws===null){if(Nd===null)throw Error(V(308));Ws=t,Nd.dependencies={lanes:0,firstContext:t}}else Ws=Ws.next=t;return e}var $o=null;function km(t){$o===null?$o=[t]:$o.push(t)}function Z3(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,km(e)):(n.next=i.next,i.next=n),e.interleaved=n,ii(t,r)}function ii(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ei=!1;function Om(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function G3(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Xr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ui(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Ue&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,ii(t,n)}return i=r.interleaved,i===null?(e.next=e,km(r)):(e.next=i.next,i.next=e),r.interleaved=e,ii(t,n)}function ad(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,wm(t,n)}}function sy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Md(t,e,n,r){var i=t.updateQueue;Ei=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,s===null?o=c:s.next=c,s=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==s&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(o!==null){var d=i.baseState;s=0,u=c=l=null,a=o;do{var p=a.lane,w=a.eventTime;if((r&p)===p){u!==null&&(u=u.next={eventTime:w,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,E=a;switch(p=e,w=n,E.tag){case 1:if(y=E.payload,typeof y=="function"){d=y.call(w,d,p);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=E.payload,p=typeof y=="function"?y.call(w,d,p):y,p==null)break e;d=lt({},d,p);break e;case 2:Ei=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else w={eventTime:w,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=w,l=d):u=u.next=w,s|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(u===null&&(l=d),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);Ho|=s,t.lanes=s,t.memoizedState=d}}function ay(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(V(191,i));i.call(r)}}}var K3=new Z2.Component().refs;function Up(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:lt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var zf={isMounted:function(t){return(t=t._reactInternals)?ms(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=en(),i=Bi(t),o=Xr(r,i);o.payload=e,n!=null&&(o.callback=n),e=Ui(t,o,i),e!==null&&(sr(e,t,i,r),ad(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=en(),i=Bi(t),o=Xr(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Ui(t,o,i),e!==null&&(sr(e,t,i,r),ad(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=en(),r=Bi(t),i=Xr(n,r);i.tag=2,e!=null&&(i.callback=e),e=Ui(t,i,r),e!==null&&(sr(e,t,r,n),ad(e,t,r))}};function ly(t,e,n,r,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,s):e.prototype&&e.prototype.isPureReactComponent?!Hl(n,r)||!Hl(i,o):!0}function Y3(t,e,n){var r=!1,i=Zi,o=e.contextType;return typeof o=="object"&&o!==null?o=Wn(o):(i=pn(e)?Fo:Vt.current,r=e.contextTypes,o=(r=r!=null)?oa(t,i):Zi),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=zf,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function cy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&zf.enqueueReplaceState(e,e.state,null)}function jp(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=K3,Om(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=Wn(o):(o=pn(e)?Fo:Vt.current,i.context=oa(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(Up(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&zf.enqueueReplaceState(i,i.state,null),Md(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function rl(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(V(309));var r=n.stateNode}if(!r)throw Error(V(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=i.refs;a===K3&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(V(284));if(!n._owner)throw Error(V(290,t))}return t}function ju(t,e){throw t=Object.prototype.toString.call(e),Error(V(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function uy(t){var e=t._init;return e(t._payload)}function Q3(t){function e(b,m){if(t){var v=b.deletions;v===null?(b.deletions=[m],b.flags|=16):v.push(m)}}function n(b,m){if(!t)return null;for(;m!==null;)e(b,m),m=m.sibling;return null}function r(b,m){for(b=new Map;m!==null;)m.key!==null?b.set(m.key,m):b.set(m.index,m),m=m.sibling;return b}function i(b,m){return b=Fi(b,m),b.index=0,b.sibling=null,b}function o(b,m,v){return b.index=v,t?(v=b.alternate,v!==null?(v=v.index,v<m?(b.flags|=2,m):v):(b.flags|=2,m)):(b.flags|=1048576,m)}function s(b){return t&&b.alternate===null&&(b.flags|=2),b}function a(b,m,v,x){return m===null||m.tag!==6?(m=_0(v,b.mode,x),m.return=b,m):(m=i(m,v),m.return=b,m)}function l(b,m,v,x){var _=v.type;return _===Rs?u(b,m,v.props.children,x,v.key):m!==null&&(m.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===xi&&uy(_)===m.type)?(x=i(m,v.props),x.ref=rl(b,m,v),x.return=b,x):(x=hd(v.type,v.key,v.props,null,b.mode,x),x.ref=rl(b,m,v),x.return=b,x)}function c(b,m,v,x){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=C0(v,b.mode,x),m.return=b,m):(m=i(m,v.children||[]),m.return=b,m)}function u(b,m,v,x,_){return m===null||m.tag!==7?(m=Mo(v,b.mode,x,_),m.return=b,m):(m=i(m,v),m.return=b,m)}function d(b,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=_0(""+m,b.mode,v),m.return=b,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Pu:return v=hd(m.type,m.key,m.props,null,b.mode,v),v.ref=rl(b,null,m),v.return=b,v;case Ds:return m=C0(m,b.mode,v),m.return=b,m;case xi:var x=m._init;return d(b,x(m._payload),v)}if(pl(m)||Ja(m))return m=Mo(m,b.mode,v,null),m.return=b,m;ju(b,m)}return null}function p(b,m,v,x){var _=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return _!==null?null:a(b,m,""+v,x);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Pu:return v.key===_?l(b,m,v,x):null;case Ds:return v.key===_?c(b,m,v,x):null;case xi:return _=v._init,p(b,m,_(v._payload),x)}if(pl(v)||Ja(v))return _!==null?null:u(b,m,v,x,null);ju(b,v)}return null}function w(b,m,v,x,_){if(typeof x=="string"&&x!==""||typeof x=="number")return b=b.get(v)||null,a(m,b,""+x,_);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Pu:return b=b.get(x.key===null?v:x.key)||null,l(m,b,x,_);case Ds:return b=b.get(x.key===null?v:x.key)||null,c(m,b,x,_);case xi:var S=x._init;return w(b,m,v,S(x._payload),_)}if(pl(x)||Ja(x))return b=b.get(v)||null,u(m,b,x,_,null);ju(m,x)}return null}function y(b,m,v,x){for(var _=null,S=null,f=m,T=m=0,O=null;f!==null&&T<v.length;T++){f.index>T?(O=f,f=null):O=f.sibling;var D=p(b,f,v[T],x);if(D===null){f===null&&(f=O);break}t&&f&&D.alternate===null&&e(b,f),m=o(D,m,T),S===null?_=D:S.sibling=D,S=D,f=O}if(T===v.length)return n(b,f),nt&&Ao(b,T),_;if(f===null){for(;T<v.length;T++)f=d(b,v[T],x),f!==null&&(m=o(f,m,T),S===null?_=f:S.sibling=f,S=f);return nt&&Ao(b,T),_}for(f=r(b,f);T<v.length;T++)O=w(f,b,T,v[T],x),O!==null&&(t&&O.alternate!==null&&f.delete(O.key===null?T:O.key),m=o(O,m,T),S===null?_=O:S.sibling=O,S=O);return t&&f.forEach(function(M){return e(b,M)}),nt&&Ao(b,T),_}function E(b,m,v,x){var _=Ja(v);if(typeof _!="function")throw Error(V(150));if(v=_.call(v),v==null)throw Error(V(151));for(var S=_=null,f=m,T=m=0,O=null,D=v.next();f!==null&&!D.done;T++,D=v.next()){f.index>T?(O=f,f=null):O=f.sibling;var M=p(b,f,D.value,x);if(M===null){f===null&&(f=O);break}t&&f&&M.alternate===null&&e(b,f),m=o(M,m,T),S===null?_=M:S.sibling=M,S=M,f=O}if(D.done)return n(b,f),nt&&Ao(b,T),_;if(f===null){for(;!D.done;T++,D=v.next())D=d(b,D.value,x),D!==null&&(m=o(D,m,T),S===null?_=D:S.sibling=D,S=D);return nt&&Ao(b,T),_}for(f=r(b,f);!D.done;T++,D=v.next())D=w(f,b,T,D.value,x),D!==null&&(t&&D.alternate!==null&&f.delete(D.key===null?T:D.key),m=o(D,m,T),S===null?_=D:S.sibling=D,S=D);return t&&f.forEach(function(ee){return e(b,ee)}),nt&&Ao(b,T),_}function C(b,m,v,x){if(typeof v=="object"&&v!==null&&v.type===Rs&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Pu:e:{for(var _=v.key,S=m;S!==null;){if(S.key===_){if(_=v.type,_===Rs){if(S.tag===7){n(b,S.sibling),m=i(S,v.props.children),m.return=b,b=m;break e}}else if(S.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===xi&&uy(_)===S.type){n(b,S.sibling),m=i(S,v.props),m.ref=rl(b,S,v),m.return=b,b=m;break e}n(b,S);break}else e(b,S);S=S.sibling}v.type===Rs?(m=Mo(v.props.children,b.mode,x,v.key),m.return=b,b=m):(x=hd(v.type,v.key,v.props,null,b.mode,x),x.ref=rl(b,m,v),x.return=b,b=x)}return s(b);case Ds:e:{for(S=v.key;m!==null;){if(m.key===S)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){n(b,m.sibling),m=i(m,v.children||[]),m.return=b,b=m;break e}else{n(b,m);break}else e(b,m);m=m.sibling}m=C0(v,b.mode,x),m.return=b,b=m}return s(b);case xi:return S=v._init,C(b,m,S(v._payload),x)}if(pl(v))return y(b,m,v,x);if(Ja(v))return E(b,m,v,x);ju(b,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(n(b,m.sibling),m=i(m,v),m.return=b,b=m):(n(b,m),m=_0(v,b.mode,x),m.return=b,b=m),s(b)):n(b,m)}return C}var aa=Q3(!0),J3=Q3(!1),tu={},kr=so(tu),Gl=so(tu),Kl=so(tu);function Io(t){if(t===tu)throw Error(V(174));return t}function Dm(t,e){switch(Qe(Kl,e),Qe(Gl,t),Qe(kr,tu),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:wp(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=wp(e,t)}et(kr),Qe(kr,e)}function la(){et(kr),et(Gl),et(Kl)}function X3(t){Io(Kl.current);var e=Io(kr.current),n=wp(e,t.type);e!==n&&(Qe(Gl,t),Qe(kr,n))}function Rm(t){Gl.current===t&&(et(kr),et(Gl))}var ot=so(0);function Ld(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var w0=[];function Nm(){for(var t=0;t<w0.length;t++)w0[t]._workInProgressVersionPrimary=null;w0.length=0}var ld=di.ReactCurrentDispatcher,y0=di.ReactCurrentBatchConfig,zo=0,at=null,St=null,Ot=null,Ud=!1,Al=!1,Yl=0,Gx=0;function Ut(){throw Error(V(321))}function Mm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!cr(t[n],e[n]))return!1;return!0}function Lm(t,e,n,r,i,o){if(zo=o,at=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ld.current=t===null||t.memoizedState===null?Jx:Xx,t=n(r,i),Al){o=0;do{if(Al=!1,Yl=0,25<=o)throw Error(V(301));o+=1,Ot=St=null,e.updateQueue=null,ld.current=eE,t=n(r,i)}while(Al)}if(ld.current=jd,e=St!==null&&St.next!==null,zo=0,Ot=St=at=null,Ud=!1,e)throw Error(V(300));return t}function Um(){var t=Yl!==0;return Yl=0,t}function Tr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ot===null?at.memoizedState=Ot=t:Ot=Ot.next=t,Ot}function zn(){if(St===null){var t=at.alternate;t=t!==null?t.memoizedState:null}else t=St.next;var e=Ot===null?at.memoizedState:Ot.next;if(e!==null)Ot=e,St=t;else{if(t===null)throw Error(V(310));St=t,t={memoizedState:St.memoizedState,baseState:St.baseState,baseQueue:St.baseQueue,queue:St.queue,next:null},Ot===null?at.memoizedState=Ot=t:Ot=Ot.next=t}return Ot}function Ql(t,e){return typeof e=="function"?e(t):e}function v0(t){var e=zn(),n=e.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=t;var r=St,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,c=o;do{var u=c.lane;if((zo&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,s=r):l=l.next=d,at.lanes|=u,Ho|=u}c=c.next}while(c!==null&&c!==o);l===null?s=r:l.next=a,cr(r,e.memoizedState)||(dn=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,at.lanes|=o,Ho|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function b0(t){var e=zn(),n=e.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);cr(o,e.memoizedState)||(dn=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function eb(){}function tb(t,e){var n=at,r=zn(),i=e(),o=!cr(r.memoizedState,i);if(o&&(r.memoizedState=i,dn=!0),r=r.queue,jm(ib.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||Ot!==null&&Ot.memoizedState.tag&1){if(n.flags|=2048,Jl(9,rb.bind(null,n,r,i,e),void 0,null),Dt===null)throw Error(V(349));zo&30||nb(n,e,i)}return i}function nb(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=at.updateQueue,e===null?(e={lastEffect:null,stores:null},at.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function rb(t,e,n,r){e.value=n,e.getSnapshot=r,ob(e)&&sb(t)}function ib(t,e,n){return n(function(){ob(e)&&sb(t)})}function ob(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!cr(t,n)}catch{return!0}}function sb(t){var e=ii(t,1);e!==null&&sr(e,t,1,-1)}function dy(t){var e=Tr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ql,lastRenderedState:t},e.queue=t,t=t.dispatch=Qx.bind(null,at,t),[e.memoizedState,t]}function Jl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=at.updateQueue,e===null?(e={lastEffect:null,stores:null},at.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function ab(){return zn().memoizedState}function cd(t,e,n,r){var i=Tr();at.flags|=t,i.memoizedState=Jl(1|e,n,void 0,r===void 0?null:r)}function Hf(t,e,n,r){var i=zn();r=r===void 0?null:r;var o=void 0;if(St!==null){var s=St.memoizedState;if(o=s.destroy,r!==null&&Mm(r,s.deps)){i.memoizedState=Jl(e,n,o,r);return}}at.flags|=t,i.memoizedState=Jl(1|e,n,o,r)}function fy(t,e){return cd(8390656,8,t,e)}function jm(t,e){return Hf(2048,8,t,e)}function lb(t,e){return Hf(4,2,t,e)}function cb(t,e){return Hf(4,4,t,e)}function ub(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function db(t,e,n){return n=n!=null?n.concat([t]):null,Hf(4,4,ub.bind(null,e,t),n)}function Bm(){}function fb(t,e){var n=zn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Mm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function hb(t,e){var n=zn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Mm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function pb(t,e,n){return zo&21?(cr(n,e)||(n=w3(),at.lanes|=n,Ho|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,dn=!0),t.memoizedState=n)}function Kx(t,e){var n=ze;ze=n!==0&&4>n?n:4,t(!0);var r=y0.transition;y0.transition={};try{t(!1),e()}finally{ze=n,y0.transition=r}}function mb(){return zn().memoizedState}function Yx(t,e,n){var r=Bi(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},gb(t))wb(e,n);else if(n=Z3(t,e,n,r),n!==null){var i=en();sr(n,t,r,i),yb(n,e,r)}}function Qx(t,e,n){var r=Bi(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(gb(t))wb(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,cr(a,s)){var l=e.interleaved;l===null?(i.next=i,km(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Z3(t,e,i,r),n!==null&&(i=en(),sr(n,t,r,i),yb(n,e,r))}}function gb(t){var e=t.alternate;return t===at||e!==null&&e===at}function wb(t,e){Al=Ud=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function yb(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,wm(t,n)}}var jd={readContext:Wn,useCallback:Ut,useContext:Ut,useEffect:Ut,useImperativeHandle:Ut,useInsertionEffect:Ut,useLayoutEffect:Ut,useMemo:Ut,useReducer:Ut,useRef:Ut,useState:Ut,useDebugValue:Ut,useDeferredValue:Ut,useTransition:Ut,useMutableSource:Ut,useSyncExternalStore:Ut,useId:Ut,unstable_isNewReconciler:!1},Jx={readContext:Wn,useCallback:function(t,e){return Tr().memoizedState=[t,e===void 0?null:e],t},useContext:Wn,useEffect:fy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,cd(4194308,4,ub.bind(null,e,t),n)},useLayoutEffect:function(t,e){return cd(4194308,4,t,e)},useInsertionEffect:function(t,e){return cd(4,2,t,e)},useMemo:function(t,e){var n=Tr();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Tr();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Yx.bind(null,at,t),[r.memoizedState,t]},useRef:function(t){var e=Tr();return t={current:t},e.memoizedState=t},useState:dy,useDebugValue:Bm,useDeferredValue:function(t){return Tr().memoizedState=t},useTransition:function(){var t=dy(!1),e=t[0];return t=Kx.bind(null,t[1]),Tr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=at,i=Tr();if(nt){if(n===void 0)throw Error(V(407));n=n()}else{if(n=e(),Dt===null)throw Error(V(349));zo&30||nb(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,fy(ib.bind(null,r,o,t),[t]),r.flags|=2048,Jl(9,rb.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=Tr(),e=Dt.identifierPrefix;if(nt){var n=Qr,r=Yr;n=(r&~(1<<32-or(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Yl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Gx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Xx={readContext:Wn,useCallback:fb,useContext:Wn,useEffect:jm,useImperativeHandle:db,useInsertionEffect:lb,useLayoutEffect:cb,useMemo:hb,useReducer:v0,useRef:ab,useState:function(){return v0(Ql)},useDebugValue:Bm,useDeferredValue:function(t){var e=zn();return pb(e,St.memoizedState,t)},useTransition:function(){var t=v0(Ql)[0],e=zn().memoizedState;return[t,e]},useMutableSource:eb,useSyncExternalStore:tb,useId:mb,unstable_isNewReconciler:!1},eE={readContext:Wn,useCallback:fb,useContext:Wn,useEffect:jm,useImperativeHandle:db,useInsertionEffect:lb,useLayoutEffect:cb,useMemo:hb,useReducer:b0,useRef:ab,useState:function(){return b0(Ql)},useDebugValue:Bm,useDeferredValue:function(t){var e=zn();return St===null?e.memoizedState=t:pb(e,St.memoizedState,t)},useTransition:function(){var t=b0(Ql)[0],e=zn().memoizedState;return[t,e]},useMutableSource:eb,useSyncExternalStore:tb,useId:mb,unstable_isNewReconciler:!1};function ca(t,e){try{var n="",r=e;do n+=P8(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function x0(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Bp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var tE=typeof WeakMap=="function"?WeakMap:Map;function vb(t,e,n){n=Xr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Fd||(Fd=!0,Yp=r),Bp(t,e)},n}function bb(t,e,n){n=Xr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Bp(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Bp(t,e),typeof r!="function"&&(ji===null?ji=new Set([this]):ji.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function hy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new tE;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=mE.bind(null,t,e,n),e.then(t,t))}function py(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function my(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Xr(-1,1),e.tag=2,Ui(n,e,1))),n.lanes|=1),t)}var nE=di.ReactCurrentOwner,dn=!1;function Yt(t,e,n,r){e.child=t===null?J3(e,null,n,r):aa(e,t.child,n,r)}function gy(t,e,n,r,i){n=n.render;var o=e.ref;return Ys(e,i),r=Lm(t,e,n,r,o,i),n=Um(),t!==null&&!dn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,oi(t,e,i)):(nt&&n&&Sm(e),e.flags|=1,Yt(t,e,r,i),e.child)}function wy(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!Gm(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,xb(t,e,o,r,i)):(t=hd(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Hl,n(s,r)&&t.ref===e.ref)return oi(t,e,i)}return e.flags|=1,t=Fi(o,r),t.ref=e.ref,t.return=e,e.child=t}function xb(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(Hl(o,r)&&t.ref===e.ref)if(dn=!1,e.pendingProps=r=o,(t.lanes&i)!==0)t.flags&131072&&(dn=!0);else return e.lanes=t.lanes,oi(t,e,i)}return Fp(t,e,n,r,i)}function Eb(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Qe(Hs,An),An|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Qe(Hs,An),An|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Qe(Hs,An),An|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,Qe(Hs,An),An|=r;return Yt(t,e,i,n),e.child}function _b(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Fp(t,e,n,r,i){var o=pn(n)?Fo:Vt.current;return o=oa(e,o),Ys(e,i),n=Lm(t,e,n,r,o,i),r=Um(),t!==null&&!dn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,oi(t,e,i)):(nt&&r&&Sm(e),e.flags|=1,Yt(t,e,n,i),e.child)}function yy(t,e,n,r,i){if(pn(n)){var o=!0;kd(e)}else o=!1;if(Ys(e,i),e.stateNode===null)ud(t,e),Y3(e,n,r),jp(e,n,r,i),r=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=Wn(c):(c=pn(n)?Fo:Vt.current,c=oa(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==c)&&cy(e,s,r,c),Ei=!1;var p=e.memoizedState;s.state=p,Md(e,r,s,i),l=e.memoizedState,a!==r||p!==l||hn.current||Ei?(typeof u=="function"&&(Up(e,n,u,r),l=e.memoizedState),(a=Ei||ly(e,n,a,r,p,l,c))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),s.props=r,s.state=l,s.context=c,r=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,G3(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Xn(e.type,a),s.props=c,d=e.pendingProps,p=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Wn(l):(l=pn(n)?Fo:Vt.current,l=oa(e,l));var w=n.getDerivedStateFromProps;(u=typeof w=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==d||p!==l)&&cy(e,s,r,l),Ei=!1,p=e.memoizedState,s.state=p,Md(e,r,s,i);var y=e.memoizedState;a!==d||p!==y||hn.current||Ei?(typeof w=="function"&&(Up(e,n,w,r),y=e.memoizedState),(c=Ei||ly(e,n,c,r,p,y,l)||!1)?(u||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),s.props=r,s.state=y,s.context=l,r=c):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),r=!1)}return Wp(t,e,n,r,o,i)}function Wp(t,e,n,r,i,o){_b(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return i&&ry(e,n,!1),oi(t,e,o);r=e.stateNode,nE.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=aa(e,t.child,null,o),e.child=aa(e,null,a,o)):Yt(t,e,a,o),e.memoizedState=r.state,i&&ry(e,n,!0),e.child}function Cb(t){var e=t.stateNode;e.pendingContext?ny(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ny(t,e.context,!1),Dm(t,e.containerInfo)}function vy(t,e,n,r,i){return sa(),Tm(i),e.flags|=256,Yt(t,e,n,r),e.child}var zp={dehydrated:null,treeContext:null,retryLane:0};function Hp(t){return{baseLanes:t,cachePool:null,transitions:null}}function Sb(t,e,n){var r=e.pendingProps,i=ot.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Qe(ot,i&1),t===null)return Mp(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=r.children,t=r.fallback,o?(r=e.mode,o=e.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Zf(s,r,0,null),t=Mo(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=Hp(n),e.memoizedState=zp,t):Fm(e,s));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return rE(t,e,s,r,a,i,n);if(o){o=r.fallback,s=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Fi(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Fi(a,o):(o=Mo(o,s,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,s=t.child.memoizedState,s=s===null?Hp(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=zp,r}return o=t.child,t=o.sibling,r=Fi(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Fm(t,e){return e=Zf({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Bu(t,e,n,r){return r!==null&&Tm(r),aa(e,t.child,null,n),t=Fm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function rE(t,e,n,r,i,o,s){if(n)return e.flags&256?(e.flags&=-257,r=x0(Error(V(422))),Bu(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=Zf({mode:"visible",children:r.children},i,0,null),o=Mo(o,i,s,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&aa(e,t.child,null,s),e.child.memoizedState=Hp(s),e.memoizedState=zp,o);if(!(e.mode&1))return Bu(t,e,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(V(419)),r=x0(o,r,void 0),Bu(t,e,s,r)}if(a=(s&t.childLanes)!==0,dn||a){if(r=Dt,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,ii(t,i),sr(r,t,i,-1))}return Zm(),r=x0(Error(V(421))),Bu(t,e,s,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=gE.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,Tn=Li(i.nextSibling),$n=e,nt=!0,nr=null,t!==null&&(Ln[Un++]=Yr,Ln[Un++]=Qr,Ln[Un++]=Wo,Yr=t.id,Qr=t.overflow,Wo=e),e=Fm(e,r.children),e.flags|=4096,e)}function by(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Lp(t.return,e,n)}function E0(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Ab(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(Yt(t,e,r.children,n),r=ot.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&by(t,n,e);else if(t.tag===19)by(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Qe(ot,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ld(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),E0(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ld(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}E0(e,!0,n,null,o);break;case"together":E0(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ud(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function oi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ho|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(V(153));if(e.child!==null){for(t=e.child,n=Fi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Fi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function iE(t,e,n){switch(e.tag){case 3:Cb(e),sa();break;case 5:X3(e);break;case 1:pn(e.type)&&kd(e);break;case 4:Dm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Qe(Rd,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Qe(ot,ot.current&1),e.flags|=128,null):n&e.child.childLanes?Sb(t,e,n):(Qe(ot,ot.current&1),t=oi(t,e,n),t!==null?t.sibling:null);Qe(ot,ot.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Ab(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Qe(ot,ot.current),r)break;return null;case 22:case 23:return e.lanes=0,Eb(t,e,n)}return oi(t,e,n)}var Tb,Vp,Pb,$b;Tb=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Vp=function(){};Pb=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Io(kr.current);var o=null;switch(n){case"input":i=hp(t,i),r=hp(t,r),o=[];break;case"select":i=lt({},i,{value:void 0}),r=lt({},r,{value:void 0}),o=[];break;case"textarea":i=gp(t,i),r=gp(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=$d)}yp(n,r);var s;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ll.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ll.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Xe("scroll",t),o||a===l||(o=[])):(o=o||[]).push(c,l))}n&&(o=o||[]).push("style",n);var c=o;(e.updateQueue=c)&&(e.flags|=4)}};$b=function(t,e,n,r){n!==r&&(e.flags|=4)};function il(t,e){if(!nt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function jt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function oE(t,e,n){var r=e.pendingProps;switch(Am(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(e),null;case 1:return pn(e.type)&&Id(),jt(e),null;case 3:return r=e.stateNode,la(),et(hn),et(Vt),Nm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Uu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,nr!==null&&(Xp(nr),nr=null))),Vp(t,e),jt(e),null;case 5:Rm(e);var i=Io(Kl.current);if(n=e.type,t!==null&&e.stateNode!=null)Pb(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(V(166));return jt(e),null}if(t=Io(kr.current),Uu(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[Pr]=e,r[Zl]=o,t=(e.mode&1)!==0,n){case"dialog":Xe("cancel",r),Xe("close",r);break;case"iframe":case"object":case"embed":Xe("load",r);break;case"video":case"audio":for(i=0;i<gl.length;i++)Xe(gl[i],r);break;case"source":Xe("error",r);break;case"img":case"image":case"link":Xe("error",r),Xe("load",r);break;case"details":Xe("toggle",r);break;case"input":$w(r,o),Xe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Xe("invalid",r);break;case"textarea":kw(r,o),Xe("invalid",r)}yp(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Lu(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Lu(r.textContent,a,t),i=["children",""+a]):Ll.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&Xe("scroll",r)}switch(n){case"input":$u(r),Iw(r,o,!0);break;case"textarea":$u(r),Ow(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=$d)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=n3(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[Pr]=e,t[Zl]=r,Tb(t,e,!1,!1),e.stateNode=t;e:{switch(s=vp(n,r),n){case"dialog":Xe("cancel",t),Xe("close",t),i=r;break;case"iframe":case"object":case"embed":Xe("load",t),i=r;break;case"video":case"audio":for(i=0;i<gl.length;i++)Xe(gl[i],t);i=r;break;case"source":Xe("error",t),i=r;break;case"img":case"image":case"link":Xe("error",t),Xe("load",t),i=r;break;case"details":Xe("toggle",t),i=r;break;case"input":$w(t,r),i=hp(t,r),Xe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=lt({},r,{value:void 0}),Xe("invalid",t);break;case"textarea":kw(t,r),i=gp(t,r),Xe("invalid",t);break;default:i=r}yp(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?o3(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&r3(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ul(t,l):typeof l=="number"&&Ul(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ll.hasOwnProperty(o)?l!=null&&o==="onScroll"&&Xe("scroll",t):l!=null&&dm(t,o,l,s))}switch(n){case"input":$u(t),Iw(t,r,!1);break;case"textarea":$u(t),Ow(t);break;case"option":r.value!=null&&t.setAttribute("value",""+qi(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?qs(t,!!r.multiple,o,!1):r.defaultValue!=null&&qs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=$d)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return jt(e),null;case 6:if(t&&e.stateNode!=null)$b(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(V(166));if(n=Io(Kl.current),Io(kr.current),Uu(e)){if(r=e.stateNode,n=e.memoizedProps,r[Pr]=e,(o=r.nodeValue!==n)&&(t=$n,t!==null))switch(t.tag){case 3:Lu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Lu(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Pr]=e,e.stateNode=r}return jt(e),null;case 13:if(et(ot),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(nt&&Tn!==null&&e.mode&1&&!(e.flags&128))q3(),sa(),e.flags|=98560,o=!1;else if(o=Uu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(V(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(V(317));o[Pr]=e}else sa(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;jt(e),o=!1}else nr!==null&&(Xp(nr),nr=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ot.current&1?At===0&&(At=3):Zm())),e.updateQueue!==null&&(e.flags|=4),jt(e),null);case 4:return la(),Vp(t,e),t===null&&Vl(e.stateNode.containerInfo),jt(e),null;case 10:return Im(e.type._context),jt(e),null;case 17:return pn(e.type)&&Id(),jt(e),null;case 19:if(et(ot),o=e.memoizedState,o===null)return jt(e),null;if(r=(e.flags&128)!==0,s=o.rendering,s===null)if(r)il(o,!1);else{if(At!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=Ld(t),s!==null){for(e.flags|=128,il(o,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Qe(ot,ot.current&1|2),e.child}t=t.sibling}o.tail!==null&&gt()>ua&&(e.flags|=128,r=!0,il(o,!1),e.lanes=4194304)}else{if(!r)if(t=Ld(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),il(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!nt)return jt(e),null}else 2*gt()-o.renderingStartTime>ua&&n!==1073741824&&(e.flags|=128,r=!0,il(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=gt(),e.sibling=null,n=ot.current,Qe(ot,r?n&1|2:n&1),e):(jt(e),null);case 22:case 23:return qm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?An&1073741824&&(jt(e),e.subtreeFlags&6&&(e.flags|=8192)):jt(e),null;case 24:return null;case 25:return null}throw Error(V(156,e.tag))}function sE(t,e){switch(Am(e),e.tag){case 1:return pn(e.type)&&Id(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return la(),et(hn),et(Vt),Nm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Rm(e),null;case 13:if(et(ot),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(V(340));sa()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return et(ot),null;case 4:return la(),null;case 10:return Im(e.type._context),null;case 22:case 23:return qm(),null;case 24:return null;default:return null}}var Fu=!1,Wt=!1,aE=typeof WeakSet=="function"?WeakSet:Set,ae=null;function zs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){dt(t,e,r)}else n.current=null}function qp(t,e,n){try{n()}catch(r){dt(t,e,r)}}var xy=!1;function lE(t,e){if($p=Ad,t=D3(),Cm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,c=0,u=0,d=t,p=null;t:for(;;){for(var w;d!==n||i!==0&&d.nodeType!==3||(a=s+i),d!==o||r!==0&&d.nodeType!==3||(l=s+r),d.nodeType===3&&(s+=d.nodeValue.length),(w=d.firstChild)!==null;)p=d,d=w;for(;;){if(d===t)break t;if(p===n&&++c===i&&(a=s),p===o&&++u===r&&(l=s),(w=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=w}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ip={focusedElem:t,selectionRange:n},Ad=!1,ae=e;ae!==null;)if(e=ae,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ae=t;else for(;ae!==null;){e=ae;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var E=y.memoizedProps,C=y.memoizedState,b=e.stateNode,m=b.getSnapshotBeforeUpdate(e.elementType===e.type?E:Xn(e.type,E),C);b.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(V(163))}}catch(x){dt(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,ae=t;break}ae=e.return}return y=xy,xy=!1,y}function Tl(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&qp(e,n,o)}i=i.next}while(i!==r)}}function Vf(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Zp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Ib(t){var e=t.alternate;e!==null&&(t.alternate=null,Ib(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Pr],delete e[Zl],delete e[Dp],delete e[Hx],delete e[Vx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function kb(t){return t.tag===5||t.tag===3||t.tag===4}function Ey(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||kb(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Gp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=$d));else if(r!==4&&(t=t.child,t!==null))for(Gp(t,e,n),t=t.sibling;t!==null;)Gp(t,e,n),t=t.sibling}function Kp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Kp(t,e,n),t=t.sibling;t!==null;)Kp(t,e,n),t=t.sibling}var Rt=null,tr=!1;function vi(t,e,n){for(n=n.child;n!==null;)Ob(t,e,n),n=n.sibling}function Ob(t,e,n){if(Ir&&typeof Ir.onCommitFiberUnmount=="function")try{Ir.onCommitFiberUnmount(Lf,n)}catch{}switch(n.tag){case 5:Wt||zs(n,e);case 6:var r=Rt,i=tr;Rt=null,vi(t,e,n),Rt=r,tr=i,Rt!==null&&(tr?(t=Rt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Rt.removeChild(n.stateNode));break;case 18:Rt!==null&&(tr?(t=Rt,n=n.stateNode,t.nodeType===8?m0(t.parentNode,n):t.nodeType===1&&m0(t,n),Wl(t)):m0(Rt,n.stateNode));break;case 4:r=Rt,i=tr,Rt=n.stateNode.containerInfo,tr=!0,vi(t,e,n),Rt=r,tr=i;break;case 0:case 11:case 14:case 15:if(!Wt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&qp(n,e,s),i=i.next}while(i!==r)}vi(t,e,n);break;case 1:if(!Wt&&(zs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){dt(n,e,a)}vi(t,e,n);break;case 21:vi(t,e,n);break;case 22:n.mode&1?(Wt=(r=Wt)||n.memoizedState!==null,vi(t,e,n),Wt=r):vi(t,e,n);break;default:vi(t,e,n)}}function _y(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new aE),e.forEach(function(r){var i=wE.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Yn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:Rt=a.stateNode,tr=!1;break e;case 3:Rt=a.stateNode.containerInfo,tr=!0;break e;case 4:Rt=a.stateNode.containerInfo,tr=!0;break e}a=a.return}if(Rt===null)throw Error(V(160));Ob(o,s,i),Rt=null,tr=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){dt(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Db(e,t),e=e.sibling}function Db(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Yn(e,t),_r(t),r&4){try{Tl(3,t,t.return),Vf(3,t)}catch(E){dt(t,t.return,E)}try{Tl(5,t,t.return)}catch(E){dt(t,t.return,E)}}break;case 1:Yn(e,t),_r(t),r&512&&n!==null&&zs(n,n.return);break;case 5:if(Yn(e,t),_r(t),r&512&&n!==null&&zs(n,n.return),t.flags&32){var i=t.stateNode;try{Ul(i,"")}catch(E){dt(t,t.return,E)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&e3(i,o),vp(a,s);var c=vp(a,o);for(s=0;s<l.length;s+=2){var u=l[s],d=l[s+1];u==="style"?o3(i,d):u==="dangerouslySetInnerHTML"?r3(i,d):u==="children"?Ul(i,d):dm(i,u,d,c)}switch(a){case"input":pp(i,o);break;case"textarea":t3(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?qs(i,!!o.multiple,w,!1):p!==!!o.multiple&&(o.defaultValue!=null?qs(i,!!o.multiple,o.defaultValue,!0):qs(i,!!o.multiple,o.multiple?[]:"",!1))}i[Zl]=o}catch(E){dt(t,t.return,E)}}break;case 6:if(Yn(e,t),_r(t),r&4){if(t.stateNode===null)throw Error(V(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(E){dt(t,t.return,E)}}break;case 3:if(Yn(e,t),_r(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Wl(e.containerInfo)}catch(E){dt(t,t.return,E)}break;case 4:Yn(e,t),_r(t);break;case 13:Yn(e,t),_r(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Hm=gt())),r&4&&_y(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Wt=(c=Wt)||u,Yn(e,t),Wt=c):Yn(e,t),_r(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(ae=t,u=t.child;u!==null;){for(d=ae=u;ae!==null;){switch(p=ae,w=p.child,p.tag){case 0:case 11:case 14:case 15:Tl(4,p,p.return);break;case 1:zs(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){r=p,n=p.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(E){dt(r,n,E)}}break;case 5:zs(p,p.return);break;case 22:if(p.memoizedState!==null){Sy(d);continue}}w!==null?(w.return=p,ae=w):Sy(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{i=d.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=d.stateNode,l=d.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=i3("display",s))}catch(E){dt(t,t.return,E)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(E){dt(t,t.return,E)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Yn(e,t),_r(t),r&4&&_y(t);break;case 21:break;default:Yn(e,t),_r(t)}}function _r(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(kb(n)){var r=n;break e}n=n.return}throw Error(V(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ul(i,""),r.flags&=-33);var o=Ey(t);Kp(t,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Ey(t);Gp(t,a,s);break;default:throw Error(V(161))}}catch(l){dt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function cE(t,e,n){ae=t,Rb(t)}function Rb(t,e,n){for(var r=(t.mode&1)!==0;ae!==null;){var i=ae,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Fu;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Wt;a=Fu;var c=Wt;if(Fu=s,(Wt=l)&&!c)for(ae=i;ae!==null;)s=ae,l=s.child,s.tag===22&&s.memoizedState!==null?Ay(i):l!==null?(l.return=s,ae=l):Ay(i);for(;o!==null;)ae=o,Rb(o),o=o.sibling;ae=i,Fu=a,Wt=c}Cy(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,ae=o):Cy(t)}}function Cy(t){for(;ae!==null;){var e=ae;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Wt||Vf(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Wt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Xn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&ay(e,o,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ay(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&Wl(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(V(163))}Wt||e.flags&512&&Zp(e)}catch(p){dt(e,e.return,p)}}if(e===t){ae=null;break}if(n=e.sibling,n!==null){n.return=e.return,ae=n;break}ae=e.return}}function Sy(t){for(;ae!==null;){var e=ae;if(e===t){ae=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ae=n;break}ae=e.return}}function Ay(t){for(;ae!==null;){var e=ae;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Vf(4,e)}catch(l){dt(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){dt(e,i,l)}}var o=e.return;try{Zp(e)}catch(l){dt(e,o,l)}break;case 5:var s=e.return;try{Zp(e)}catch(l){dt(e,s,l)}}}catch(l){dt(e,e.return,l)}if(e===t){ae=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ae=a;break}ae=e.return}}var uE=Math.ceil,Bd=di.ReactCurrentDispatcher,Wm=di.ReactCurrentOwner,Bn=di.ReactCurrentBatchConfig,Ue=0,Dt=null,Et=null,Nt=0,An=0,Hs=so(0),At=0,Xl=null,Ho=0,qf=0,zm=0,Pl=null,un=null,Hm=0,ua=1/0,qr=null,Fd=!1,Yp=null,ji=null,Wu=!1,Oi=null,Wd=0,$l=0,Qp=null,dd=-1,fd=0;function en(){return Ue&6?gt():dd!==-1?dd:dd=gt()}function Bi(t){return t.mode&1?Ue&2&&Nt!==0?Nt&-Nt:Zx.transition!==null?(fd===0&&(fd=w3()),fd):(t=ze,t!==0||(t=window.event,t=t===void 0?16:C3(t.type)),t):1}function sr(t,e,n,r){if(50<$l)throw $l=0,Qp=null,Error(V(185));Jc(t,n,r),(!(Ue&2)||t!==Dt)&&(t===Dt&&(!(Ue&2)&&(qf|=n),At===4&&Ti(t,Nt)),mn(t,r),n===1&&Ue===0&&!(e.mode&1)&&(ua=gt()+500,Wf&&ao()))}function mn(t,e){var n=t.callbackNode;Z8(t,e);var r=Sd(t,t===Dt?Nt:0);if(r===0)n!==null&&Nw(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Nw(n),e===1)t.tag===0?qx(Ty.bind(null,t)):z3(Ty.bind(null,t)),Wx(function(){!(Ue&6)&&ao()}),n=null;else{switch(y3(r)){case 1:n=gm;break;case 4:n=m3;break;case 16:n=Cd;break;case 536870912:n=g3;break;default:n=Cd}n=Wb(n,Nb.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Nb(t,e){if(dd=-1,fd=0,Ue&6)throw Error(V(327));var n=t.callbackNode;if(Qs()&&t.callbackNode!==n)return null;var r=Sd(t,t===Dt?Nt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=zd(t,r);else{e=r;var i=Ue;Ue|=2;var o=Lb();(Dt!==t||Nt!==e)&&(qr=null,ua=gt()+500,No(t,e));do try{hE();break}catch(a){Mb(t,a)}while(!0);$m(),Bd.current=o,Ue=i,Et!==null?e=0:(Dt=null,Nt=0,e=At)}if(e!==0){if(e===2&&(i=Cp(t),i!==0&&(r=i,e=Jp(t,i))),e===1)throw n=Xl,No(t,0),Ti(t,r),mn(t,gt()),n;if(e===6)Ti(t,r);else{if(i=t.current.alternate,!(r&30)&&!dE(i)&&(e=zd(t,r),e===2&&(o=Cp(t),o!==0&&(r=o,e=Jp(t,o))),e===1))throw n=Xl,No(t,0),Ti(t,r),mn(t,gt()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(V(345));case 2:To(t,un,qr);break;case 3:if(Ti(t,r),(r&130023424)===r&&(e=Hm+500-gt(),10<e)){if(Sd(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){en(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Op(To.bind(null,t,un,qr),e);break}To(t,un,qr);break;case 4:if(Ti(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var s=31-or(r);o=1<<s,s=e[s],s>i&&(i=s),r&=~o}if(r=i,r=gt()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*uE(r/1960))-r,10<r){t.timeoutHandle=Op(To.bind(null,t,un,qr),r);break}To(t,un,qr);break;case 5:To(t,un,qr);break;default:throw Error(V(329))}}}return mn(t,gt()),t.callbackNode===n?Nb.bind(null,t):null}function Jp(t,e){var n=Pl;return t.current.memoizedState.isDehydrated&&(No(t,e).flags|=256),t=zd(t,e),t!==2&&(e=un,un=n,e!==null&&Xp(e)),t}function Xp(t){un===null?un=t:un.push.apply(un,t)}function dE(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!cr(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ti(t,e){for(e&=~zm,e&=~qf,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-or(e),r=1<<n;t[n]=-1,e&=~r}}function Ty(t){if(Ue&6)throw Error(V(327));Qs();var e=Sd(t,0);if(!(e&1))return mn(t,gt()),null;var n=zd(t,e);if(t.tag!==0&&n===2){var r=Cp(t);r!==0&&(e=r,n=Jp(t,r))}if(n===1)throw n=Xl,No(t,0),Ti(t,e),mn(t,gt()),n;if(n===6)throw Error(V(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,To(t,un,qr),mn(t,gt()),null}function Vm(t,e){var n=Ue;Ue|=1;try{return t(e)}finally{Ue=n,Ue===0&&(ua=gt()+500,Wf&&ao())}}function Vo(t){Oi!==null&&Oi.tag===0&&!(Ue&6)&&Qs();var e=Ue;Ue|=1;var n=Bn.transition,r=ze;try{if(Bn.transition=null,ze=1,t)return t()}finally{ze=r,Bn.transition=n,Ue=e,!(Ue&6)&&ao()}}function qm(){An=Hs.current,et(Hs)}function No(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Fx(n)),Et!==null)for(n=Et.return;n!==null;){var r=n;switch(Am(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Id();break;case 3:la(),et(hn),et(Vt),Nm();break;case 5:Rm(r);break;case 4:la();break;case 13:et(ot);break;case 19:et(ot);break;case 10:Im(r.type._context);break;case 22:case 23:qm()}n=n.return}if(Dt=t,Et=t=Fi(t.current,null),Nt=An=e,At=0,Xl=null,zm=qf=Ho=0,un=Pl=null,$o!==null){for(e=0;e<$o.length;e++)if(n=$o[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}$o=null}return t}function Mb(t,e){do{var n=Et;try{if($m(),ld.current=jd,Ud){for(var r=at.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ud=!1}if(zo=0,Ot=St=at=null,Al=!1,Yl=0,Wm.current=null,n===null||n.return===null){At=1,Xl=e,Et=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=Nt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var p=u.alternate;p?(u.updateQueue=p.updateQueue,u.memoizedState=p.memoizedState,u.lanes=p.lanes):(u.updateQueue=null,u.memoizedState=null)}var w=py(s);if(w!==null){w.flags&=-257,my(w,s,a,o,e),w.mode&1&&hy(o,c,e),e=w,l=c;var y=e.updateQueue;if(y===null){var E=new Set;E.add(l),e.updateQueue=E}else y.add(l);break e}else{if(!(e&1)){hy(o,c,e),Zm();break e}l=Error(V(426))}}else if(nt&&a.mode&1){var C=py(s);if(C!==null){!(C.flags&65536)&&(C.flags|=256),my(C,s,a,o,e),Tm(ca(l,a));break e}}o=l=ca(l,a),At!==4&&(At=2),Pl===null?Pl=[o]:Pl.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var b=vb(o,l,e);sy(o,b);break e;case 1:a=l;var m=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(ji===null||!ji.has(v)))){o.flags|=65536,e&=-e,o.lanes|=e;var x=bb(o,a,e);sy(o,x);break e}}o=o.return}while(o!==null)}jb(n)}catch(_){e=_,Et===n&&n!==null&&(Et=n=n.return);continue}break}while(!0)}function Lb(){var t=Bd.current;return Bd.current=jd,t===null?jd:t}function Zm(){(At===0||At===3||At===2)&&(At=4),Dt===null||!(Ho&268435455)&&!(qf&268435455)||Ti(Dt,Nt)}function zd(t,e){var n=Ue;Ue|=2;var r=Lb();(Dt!==t||Nt!==e)&&(qr=null,No(t,e));do try{fE();break}catch(i){Mb(t,i)}while(!0);if($m(),Ue=n,Bd.current=r,Et!==null)throw Error(V(261));return Dt=null,Nt=0,At}function fE(){for(;Et!==null;)Ub(Et)}function hE(){for(;Et!==null&&!U8();)Ub(Et)}function Ub(t){var e=Fb(t.alternate,t,An);t.memoizedProps=t.pendingProps,e===null?jb(t):Et=e,Wm.current=null}function jb(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=sE(n,e),n!==null){n.flags&=32767,Et=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{At=6,Et=null;return}}else if(n=oE(n,e,An),n!==null){Et=n;return}if(e=e.sibling,e!==null){Et=e;return}Et=e=t}while(e!==null);At===0&&(At=5)}function To(t,e,n){var r=ze,i=Bn.transition;try{Bn.transition=null,ze=1,pE(t,e,n,r)}finally{Bn.transition=i,ze=r}return null}function pE(t,e,n,r){do Qs();while(Oi!==null);if(Ue&6)throw Error(V(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(V(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(G8(t,o),t===Dt&&(Et=Dt=null,Nt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Wu||(Wu=!0,Wb(Cd,function(){return Qs(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Bn.transition,Bn.transition=null;var s=ze;ze=1;var a=Ue;Ue|=4,Wm.current=null,lE(t,n),Db(n,t),Rx(Ip),Ad=!!$p,Ip=$p=null,t.current=n,cE(n),j8(),Ue=a,ze=s,Bn.transition=o}else t.current=n;if(Wu&&(Wu=!1,Oi=t,Wd=i),o=t.pendingLanes,o===0&&(ji=null),W8(n.stateNode),mn(t,gt()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Fd)throw Fd=!1,t=Yp,Yp=null,t;return Wd&1&&t.tag!==0&&Qs(),o=t.pendingLanes,o&1?t===Qp?$l++:($l=0,Qp=t):$l=0,ao(),null}function Qs(){if(Oi!==null){var t=y3(Wd),e=Bn.transition,n=ze;try{if(Bn.transition=null,ze=16>t?16:t,Oi===null)var r=!1;else{if(t=Oi,Oi=null,Wd=0,Ue&6)throw Error(V(331));var i=Ue;for(Ue|=4,ae=t.current;ae!==null;){var o=ae,s=o.child;if(ae.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(ae=c;ae!==null;){var u=ae;switch(u.tag){case 0:case 11:case 15:Tl(8,u,o)}var d=u.child;if(d!==null)d.return=u,ae=d;else for(;ae!==null;){u=ae;var p=u.sibling,w=u.return;if(Ib(u),u===c){ae=null;break}if(p!==null){p.return=w,ae=p;break}ae=w}}}var y=o.alternate;if(y!==null){var E=y.child;if(E!==null){y.child=null;do{var C=E.sibling;E.sibling=null,E=C}while(E!==null)}}ae=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,ae=s;else e:for(;ae!==null;){if(o=ae,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Tl(9,o,o.return)}var b=o.sibling;if(b!==null){b.return=o.return,ae=b;break e}ae=o.return}}var m=t.current;for(ae=m;ae!==null;){s=ae;var v=s.child;if(s.subtreeFlags&2064&&v!==null)v.return=s,ae=v;else e:for(s=m;ae!==null;){if(a=ae,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Vf(9,a)}}catch(_){dt(a,a.return,_)}if(a===s){ae=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,ae=x;break e}ae=a.return}}if(Ue=i,ao(),Ir&&typeof Ir.onPostCommitFiberRoot=="function")try{Ir.onPostCommitFiberRoot(Lf,t)}catch{}r=!0}return r}finally{ze=n,Bn.transition=e}}return!1}function Py(t,e,n){e=ca(n,e),e=vb(t,e,1),t=Ui(t,e,1),e=en(),t!==null&&(Jc(t,1,e),mn(t,e))}function dt(t,e,n){if(t.tag===3)Py(t,t,n);else for(;e!==null;){if(e.tag===3){Py(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ji===null||!ji.has(r))){t=ca(n,t),t=bb(e,t,1),e=Ui(e,t,1),t=en(),e!==null&&(Jc(e,1,t),mn(e,t));break}}e=e.return}}function mE(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=en(),t.pingedLanes|=t.suspendedLanes&n,Dt===t&&(Nt&n)===n&&(At===4||At===3&&(Nt&130023424)===Nt&&500>gt()-Hm?No(t,0):zm|=n),mn(t,e)}function Bb(t,e){e===0&&(t.mode&1?(e=Ou,Ou<<=1,!(Ou&130023424)&&(Ou=4194304)):e=1);var n=en();t=ii(t,e),t!==null&&(Jc(t,e,n),mn(t,n))}function gE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Bb(t,n)}function wE(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(V(314))}r!==null&&r.delete(e),Bb(t,n)}var Fb;Fb=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||hn.current)dn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return dn=!1,iE(t,e,n);dn=!!(t.flags&131072)}else dn=!1,nt&&e.flags&1048576&&H3(e,Dd,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ud(t,e),t=e.pendingProps;var i=oa(e,Vt.current);Ys(e,n),i=Lm(null,e,r,t,i,n);var o=Um();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,pn(r)?(o=!0,kd(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Om(e),i.updater=zf,e.stateNode=i,i._reactInternals=e,jp(e,r,t,n),e=Wp(null,e,r,!0,o,n)):(e.tag=0,nt&&o&&Sm(e),Yt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ud(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=vE(r),t=Xn(r,t),i){case 0:e=Fp(null,e,r,t,n);break e;case 1:e=yy(null,e,r,t,n);break e;case 11:e=gy(null,e,r,t,n);break e;case 14:e=wy(null,e,r,Xn(r.type,t),n);break e}throw Error(V(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Xn(r,i),Fp(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Xn(r,i),yy(t,e,r,i,n);case 3:e:{if(Cb(e),t===null)throw Error(V(387));r=e.pendingProps,o=e.memoizedState,i=o.element,G3(t,e),Md(e,r,null,n);var s=e.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=ca(Error(V(423)),e),e=vy(t,e,r,n,i);break e}else if(r!==i){i=ca(Error(V(424)),e),e=vy(t,e,r,n,i);break e}else for(Tn=Li(e.stateNode.containerInfo.firstChild),$n=e,nt=!0,nr=null,n=J3(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(sa(),r===i){e=oi(t,e,n);break e}Yt(t,e,r,n)}e=e.child}return e;case 5:return X3(e),t===null&&Mp(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,kp(r,i)?s=null:o!==null&&kp(r,o)&&(e.flags|=32),_b(t,e),Yt(t,e,s,n),e.child;case 6:return t===null&&Mp(e),null;case 13:return Sb(t,e,n);case 4:return Dm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=aa(e,null,r,n):Yt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Xn(r,i),gy(t,e,r,i,n);case 7:return Yt(t,e,e.pendingProps,n),e.child;case 8:return Yt(t,e,e.pendingProps.children,n),e.child;case 12:return Yt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,Qe(Rd,r._currentValue),r._currentValue=s,o!==null)if(cr(o.value,s)){if(o.children===i.children&&!hn.current){e=oi(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Xr(-1,n&-n),l.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Lp(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(V(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Lp(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Yt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ys(e,n),i=Wn(i),r=r(i),e.flags|=1,Yt(t,e,r,n),e.child;case 14:return r=e.type,i=Xn(r,e.pendingProps),i=Xn(r.type,i),wy(t,e,r,i,n);case 15:return xb(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Xn(r,i),ud(t,e),e.tag=1,pn(r)?(t=!0,kd(e)):t=!1,Ys(e,n),Y3(e,r,i),jp(e,r,i,n),Wp(null,e,r,!0,t,n);case 19:return Ab(t,e,n);case 22:return Eb(t,e,n)}throw Error(V(156,e.tag))};function Wb(t,e){return p3(t,e)}function yE(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(t,e,n,r){return new yE(t,e,n,r)}function Gm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function vE(t){if(typeof t=="function")return Gm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===hm)return 11;if(t===pm)return 14}return 2}function Fi(t,e){var n=t.alternate;return n===null?(n=jn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function hd(t,e,n,r,i,o){var s=2;if(r=t,typeof t=="function")Gm(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case Rs:return Mo(n.children,i,o,e);case fm:s=8,i|=8;break;case cp:return t=jn(12,n,e,i|2),t.elementType=cp,t.lanes=o,t;case up:return t=jn(13,n,e,i),t.elementType=up,t.lanes=o,t;case dp:return t=jn(19,n,e,i),t.elementType=dp,t.lanes=o,t;case Q2:return Zf(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case K2:s=10;break e;case Y2:s=9;break e;case hm:s=11;break e;case pm:s=14;break e;case xi:s=16,r=null;break e}throw Error(V(130,t==null?t:typeof t,""))}return e=jn(s,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function Mo(t,e,n,r){return t=jn(7,t,r,e),t.lanes=n,t}function Zf(t,e,n,r){return t=jn(22,t,r,e),t.elementType=Q2,t.lanes=n,t.stateNode={isHidden:!1},t}function _0(t,e,n){return t=jn(6,t,null,e),t.lanes=n,t}function C0(t,e,n){return e=jn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function bE(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=i0(0),this.expirationTimes=i0(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=i0(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Km(t,e,n,r,i,o,s,a,l){return t=new bE(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=jn(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Om(o),t}function xE(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ds,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function zb(t){if(!t)return Zi;t=t._reactInternals;e:{if(ms(t)!==t||t.tag!==1)throw Error(V(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(pn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(V(171))}if(t.tag===1){var n=t.type;if(pn(n))return W3(t,n,e)}return e}function Hb(t,e,n,r,i,o,s,a,l){return t=Km(n,r,!0,t,i,o,s,a,l),t.context=zb(null),n=t.current,r=en(),i=Bi(n),o=Xr(r,i),o.callback=e??null,Ui(n,o,i),t.current.lanes=i,Jc(t,i,r),mn(t,r),t}function Gf(t,e,n,r){var i=e.current,o=en(),s=Bi(i);return n=zb(n),e.context===null?e.context=n:e.pendingContext=n,e=Xr(o,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Ui(i,e,s),t!==null&&(sr(t,i,s,o),ad(t,i,s)),s}function Hd(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function $y(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ym(t,e){$y(t,e),(t=t.alternate)&&$y(t,e)}function EE(){return null}var Vb=typeof reportError=="function"?reportError:function(t){console.error(t)};function Qm(t){this._internalRoot=t}Kf.prototype.render=Qm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(V(409));Gf(t,e,null,null)};Kf.prototype.unmount=Qm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Vo(function(){Gf(null,t,null,null)}),e[ri]=null}};function Kf(t){this._internalRoot=t}Kf.prototype.unstable_scheduleHydration=function(t){if(t){var e=x3();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ai.length&&e!==0&&e<Ai[n].priority;n++);Ai.splice(n,0,t),n===0&&_3(t)}};function Jm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Yf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Iy(){}function _E(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=Hd(s);o.call(c)}}var s=Hb(e,r,t,0,null,!1,!1,"",Iy);return t._reactRootContainer=s,t[ri]=s.current,Vl(t.nodeType===8?t.parentNode:t),Vo(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Hd(l);a.call(c)}}var l=Km(t,0,!1,null,null,!1,!1,"",Iy);return t._reactRootContainer=l,t[ri]=l.current,Vl(t.nodeType===8?t.parentNode:t),Vo(function(){Gf(e,l,n,r)}),l}function Qf(t,e,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=Hd(s);a.call(l)}}Gf(e,s,t,i)}else s=_E(n,e,t,i,r);return Hd(s)}v3=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ml(e.pendingLanes);n!==0&&(wm(e,n|1),mn(e,gt()),!(Ue&6)&&(ua=gt()+500,ao()))}break;case 13:Vo(function(){var r=ii(t,1);if(r!==null){var i=en();sr(r,t,1,i)}}),Ym(t,1)}};ym=function(t){if(t.tag===13){var e=ii(t,134217728);if(e!==null){var n=en();sr(e,t,134217728,n)}Ym(t,134217728)}};b3=function(t){if(t.tag===13){var e=Bi(t),n=ii(t,e);if(n!==null){var r=en();sr(n,t,e,r)}Ym(t,e)}};x3=function(){return ze};E3=function(t,e){var n=ze;try{return ze=t,e()}finally{ze=n}};xp=function(t,e,n){switch(e){case"input":if(pp(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ff(r);if(!i)throw Error(V(90));X2(r),pp(r,i)}}}break;case"textarea":t3(t,n);break;case"select":e=n.value,e!=null&&qs(t,!!n.multiple,e,!1)}};l3=Vm;c3=Vo;var CE={usingClientEntryPoint:!1,Events:[eu,Us,Ff,s3,a3,Vm]},ol={findFiberByHostInstance:Po,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},SE={bundleType:ol.bundleType,version:ol.version,rendererPackageName:ol.rendererPackageName,rendererConfig:ol.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:di.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=f3(t),t===null?null:t.stateNode},findFiberByHostInstance:ol.findFiberByHostInstance||EE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zu.isDisabled&&zu.supportsFiber)try{Lf=zu.inject(SE),Ir=zu}catch{}}On.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=CE;On.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Jm(e))throw Error(V(200));return xE(t,e,null,n)};On.createRoot=function(t,e){if(!Jm(t))throw Error(V(299));var n=!1,r="",i=Vb;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Km(t,1,!1,null,null,n,!1,r,i),t[ri]=e.current,Vl(t.nodeType===8?t.parentNode:t),new Qm(e)};On.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(V(188)):(t=Object.keys(t).join(","),Error(V(268,t)));return t=f3(e),t=t===null?null:t.stateNode,t};On.flushSync=function(t){return Vo(t)};On.hydrate=function(t,e,n){if(!Yf(e))throw Error(V(200));return Qf(null,t,e,!0,n)};On.hydrateRoot=function(t,e,n){if(!Jm(t))throw Error(V(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Vb;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=Hb(e,null,t,1,n??null,i,!1,o,s),t[ri]=e.current,Vl(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Kf(e)};On.render=function(t,e,n){if(!Yf(e))throw Error(V(200));return Qf(null,t,e,!1,n)};On.unmountComponentAtNode=function(t){if(!Yf(t))throw Error(V(40));return t._reactRootContainer?(Vo(function(){Qf(null,null,t,!1,function(){t._reactRootContainer=null,t[ri]=null})}),!0):!1};On.unstable_batchedUpdates=Vm;On.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Yf(n))throw Error(V(200));if(t==null||t._reactInternals===void 0)throw Error(V(38));return Qf(t,e,n,!1,r)};On.version="18.2.0-next-9e3b772b8-20220608";function qb(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qb)}catch(t){console.error(t)}}qb(),H2.exports=On;var AE=H2.exports,ky=AE;ap.createRoot=ky.createRoot,ap.hydrateRoot=ky.hydrateRoot;const TE="_main_ewogh_1",PE="_wrapper_ewogh_14",$E="_animateGlow_ewogh_1",IE="_content_ewogh_38",kE="_footer_ewogh_42",OE="_container_ewogh_73",DE="_button_ewogh_91",RE="_highlight_ewogh_112",NE="_highlightSelected_ewogh_116",ME="_header_ewogh_150",LE="_buttons_ewogh_158",UE="_backdrop_ewogh_164",Gt={main:TE,wrapper:PE,animateGlow:$E,content:IE,footer:kE,container:OE,button:DE,highlight:RE,highlightSelected:NE,header:ME,buttons:LE,backdrop:UE};function jE(){const[t,e]=zt.useState(!1),[n,r]=zt.useState(!1),i=()=>{e(!1),r(!1)};return Fe.jsxs(Fe.Fragment,{children:[Fe.jsxs("header",{children:[Fe.jsx("div",{className:Gt.backdrop,style:{opacity:n||t?1:0}}),Fe.jsxs("div",{className:Gt.header,children:[Fe.jsx("div",{className:Gt.logo,children:Fe.jsx("img",{src:"/logo.svg",alt:"Skypier Logo",height:"32",width:"203"})}),Fe.jsxs("div",{className:Gt.buttons,children:[Fe.jsx("div",{onClick:i,className:`${Gt.highlight} ${t?Gt.highlightSelected:""}`,children:Fe.jsx("w3m-network-button",{})}),Fe.jsx("div",{onClick:i,className:`${Gt.highlight} ${n?Gt.highlightSelected:""}`,children:Fe.jsx("w3m-button",{})})]})]})]}),Fe.jsx("main",{className:Gt.main,children:Fe.jsxs("div",{className:Gt.wrapper,children:[Fe.jsxs("div",{className:Gt.container,children:[Fe.jsx("h1",{children:"Skypier VPN"}),Fe.jsx("div",{className:Gt.content,children:Fe.jsxs("ul",{children:[Fe.jsxs("li",{children:["Edit ",Fe.jsx("code",{children:"src/App.tsx"})," and save to reload."]}),Fe.jsxs("li",{children:["Click"," ",Fe.jsx("span",{onClick:()=>{r(!n),e(!1)},className:Gt.button,children:"Connect Wallet"})," ","to connect to a WalletConnect v2.0 compatible wallet."]}),Fe.jsxs("li",{children:["Click"," ",Fe.jsx("span",{onClick:()=>{e(!t),r(!1)},className:Gt.button,children:"Select Network"})," ","to change networks."]})]})})]}),Fe.jsxs("div",{className:Gt.footer,children:[Fe.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",height:16,width:16,children:Fe.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"})}),Fe.jsx("a",{href:"https://docs.walletconnect.com/web3modal/react/about?utm_source=react-starter-template&utm_medium=github&utm_campaign=react-starter-template",target:"_blank",children:"Check out the full documentation here"})]})]})})]})}function Ua(t,e={}){const{fees:n=t.fees,formatters:r=t.formatters,serializers:i=t.serializers}=e;return{...t,fees:n,formatters:r,serializers:i}}const BE=Ua({id:42161,name:"Arbitrum One",network:"arbitrum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://arb-mainnet.g.alchemy.com/v2"],webSocket:["wss://arb-mainnet.g.alchemy.com/v2"]},infura:{http:["https://arbitrum-mainnet.infura.io/v3"],webSocket:["wss://arbitrum-mainnet.infura.io/ws/v3"]},default:{http:["https://arb1.arbitrum.io/rpc"]},public:{http:["https://arb1.arbitrum.io/rpc"]}},blockExplorers:{etherscan:{name:"Arbiscan",url:"https://arbiscan.io"},default:{name:"Arbiscan",url:"https://arbiscan.io"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:7654707}}}),FE="1.21.3",WE=t=>t,Jf=t=>t,zE=()=>`viem@${FE}`;class Q extends Error{constructor(e,n={}){var o;super(),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ViemError"}),Object.defineProperty(this,"version",{enumerable:!0,configurable:!0,writable:!0,value:zE()});const r=n.cause instanceof Q?n.cause.details:(o=n.cause)!=null&&o.message?n.cause.message:n.details,i=n.cause instanceof Q&&n.cause.docsPath||n.docsPath;this.message=[e||"An error occurred.","",...n.metaMessages?[...n.metaMessages,""]:[],...i?[`Docs: https://viem.sh${i}.html${n.docsSlug?`#${n.docsSlug}`:""}`]:[],...r?[`Details: ${r}`]:[],`Version: ${this.version}`].join(`
`),n.cause&&(this.cause=n.cause),this.details=r,this.docsPath=i,this.metaMessages=n.metaMessages,this.shortMessage=e}walk(e){return Zb(this,e)}}function Zb(t,e){return e!=null&&e(t)?t:t&&typeof t=="object"&&"cause"in t?Zb(t.cause,e):e?null:t}class HE extends Q{constructor({max:e,min:n,signed:r,size:i,value:o}){super(`Number "${o}" is not in safe ${i?`${i*8}-bit ${r?"signed":"unsigned"} `:""}integer range ${e?`(${n} to ${e})`:`(above ${n})`}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntegerOutOfRangeError"})}}class VE extends Q{constructor(e){super(`Hex value "${e}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidHexBooleanError"})}}class qE extends Q{constructor({givenSize:e,maxSize:n}){super(`Size cannot exceed ${n} bytes. Given size: ${e} bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeOverflowError"})}}function Or(t,{strict:e=!0}={}){return!t||typeof t!="string"?!1:e?/^0x[0-9a-fA-F]*$/.test(t):t.startsWith("0x")}function Tt(t){return Or(t,{strict:!1})?Math.ceil((t.length-2)/2):t.length}function Lo(t,{dir:e="left"}={}){let n=typeof t=="string"?t.replace("0x",""):t,r=0;for(let i=0;i<n.length-1&&n[e==="left"?i:n.length-i-1].toString()==="0";i++)r++;return n=e==="left"?n.slice(r):n.slice(0,n.length-r),typeof t=="string"?(n.length===1&&e==="right"&&(n=`${n}0`),`0x${n.length%2===1?`0${n}`:n}`):n}class Gb extends Q{constructor({offset:e,position:n,size:r}){super(`Slice ${n==="start"?"starting":"ending"} at offset "${e}" is out-of-bounds (size: ${r}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SliceOffsetOutOfBoundsError"})}}class Kb extends Q{constructor({size:e,targetSize:n,type:r}){super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} size (${e}) exceeds padding size (${n}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeExceedsPaddingSizeError"})}}function ja(t,{dir:e,size:n=32}={}){return typeof t=="string"?Wi(t,{dir:e,size:n}):ZE(t,{dir:e,size:n})}function Wi(t,{dir:e,size:n=32}={}){if(n===null)return t;const r=t.replace("0x","");if(r.length>n*2)throw new Kb({size:Math.ceil(r.length/2),targetSize:n,type:"hex"});return`0x${r[e==="right"?"padEnd":"padStart"](n*2,"0")}`}function ZE(t,{dir:e,size:n=32}={}){if(n===null)return t;if(t.length>n)throw new Kb({size:t.length,targetSize:n,type:"bytes"});const r=new Uint8Array(n);for(let i=0;i<n;i++){const o=e==="right";r[o?i:n-i-1]=t[o?i:t.length-i-1]}return r}const GE=Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));function fi(t,e={}){return typeof t=="number"||typeof t=="bigint"?Se(t,e):typeof t=="string"?Xm(t,e):typeof t=="boolean"?Yb(t,e):ec(t,e)}function Yb(t,e={}){const n=`0x${Number(t)}`;return typeof e.size=="number"?(lo(n,{size:e.size}),ja(n,{size:e.size})):n}function ec(t,e={}){let n="";for(let i=0;i<t.length;i++)n+=GE[t[i]];const r=`0x${n}`;return typeof e.size=="number"?(lo(r,{size:e.size}),ja(r,{dir:"right",size:e.size})):r}function Se(t,e={}){const{signed:n,size:r}=e,i=BigInt(t);let o;r?n?o=(1n<<BigInt(r)*8n-1n)-1n:o=2n**(BigInt(r)*8n)-1n:typeof t=="number"&&(o=BigInt(Number.MAX_SAFE_INTEGER));const s=typeof o=="bigint"&&n?-o-1n:0;if(o&&i>o||i<s){const l=typeof t=="bigint"?"n":"";throw new HE({max:o?`${o}${l}`:void 0,min:`${s}${l}`,signed:n,size:r,value:`${t}${l}`})}const a=`0x${(n&&i<0?(1n<<BigInt(r*8))+BigInt(i):i).toString(16)}`;return r?ja(a,{size:r}):a}const KE=new TextEncoder;function Xm(t,e={}){const n=KE.encode(t);return ec(n,e)}const YE=new TextEncoder;function Gi(t,e={}){return typeof t=="number"||typeof t=="bigint"?JE(t,e):typeof t=="boolean"?QE(t,e):Or(t)?eg(t,e):ei(t,e)}function QE(t,e={}){const n=new Uint8Array(1);return n[0]=Number(t),typeof e.size=="number"?(lo(n,{size:e.size}),ja(n,{size:e.size})):n}const zr={zero:48,nine:57,A:65,F:70,a:97,f:102};function Oy(t){if(t>=zr.zero&&t<=zr.nine)return t-zr.zero;if(t>=zr.A&&t<=zr.F)return t-(zr.A-10);if(t>=zr.a&&t<=zr.f)return t-(zr.a-10)}function eg(t,e={}){let n=t;e.size&&(lo(n,{size:e.size}),n=ja(n,{dir:"right",size:e.size}));let r=n.slice(2);r.length%2&&(r=`0${r}`);const i=r.length/2,o=new Uint8Array(i);for(let s=0,a=0;s<i;s++){const l=Oy(r.charCodeAt(a++)),c=Oy(r.charCodeAt(a++));if(l===void 0||c===void 0)throw new Q(`Invalid byte sequence ("${r[a-2]}${r[a-1]}" in "${r}").`);o[s]=l*16+c}return o}function JE(t,e){const n=Se(t,e);return eg(n)}function ei(t,e={}){const n=YE.encode(t);return typeof e.size=="number"?(lo(n,{size:e.size}),ja(n,{dir:"right",size:e.size})):n}function lo(t,{size:e}){if(Tt(t)>e)throw new qE({givenSize:Tt(t),maxSize:e})}function Kr(t,e={}){const{signed:n}=e;e.size&&lo(t,{size:e.size});const r=BigInt(t);if(!n)return r;const i=(t.length-2)/2,o=(1n<<BigInt(i)*8n-1n)-1n;return r<=o?r:r-BigInt(`0x${"f".padStart(i*2,"f")}`)-1n}function XE(t,e={}){let n=t;if(e.size&&(lo(n,{size:e.size}),n=Lo(n)),Lo(n)==="0x00")return!1;if(Lo(n)==="0x01")return!0;throw new VE(n)}function Ht(t,e={}){return Number(Kr(t,e))}function Qb(t,e={}){let n=eg(t);return e.size&&(lo(n,{size:e.size}),n=Lo(n,{dir:"right"})),new TextDecoder().decode(n)}function tg(t,e){return({exclude:n,format:r})=>({exclude:n,format:i=>{const o=e(i);if(n)for(const s of n)delete o[s];return{...o,...r(i)}},type:t})}const Jb={"0x0":"legacy","0x1":"eip2930","0x2":"eip1559"};function Xf(t){const e={...t,blockHash:t.blockHash?t.blockHash:null,blockNumber:t.blockNumber?BigInt(t.blockNumber):null,chainId:t.chainId?Ht(t.chainId):void 0,gas:t.gas?BigInt(t.gas):void 0,gasPrice:t.gasPrice?BigInt(t.gasPrice):void 0,maxFeePerGas:t.maxFeePerGas?BigInt(t.maxFeePerGas):void 0,maxPriorityFeePerGas:t.maxPriorityFeePerGas?BigInt(t.maxPriorityFeePerGas):void 0,nonce:t.nonce?Ht(t.nonce):void 0,to:t.to?t.to:null,transactionIndex:t.transactionIndex?Number(t.transactionIndex):null,type:t.type?Jb[t.type]:void 0,typeHex:t.type?t.type:void 0,value:t.value?BigInt(t.value):void 0,v:t.v?BigInt(t.v):void 0};return e.yParity=(()=>{if(t.yParity)return Number(t.yParity);if(typeof e.v=="bigint"){if(e.v===0n||e.v===27n)return 0;if(e.v===1n||e.v===28n)return 1;if(e.v>=35n)return e.v%2n===0n?1:0}})(),e.type==="legacy"&&(delete e.accessList,delete e.maxFeePerGas,delete e.maxPriorityFeePerGas,delete e.yParity),e.type==="eip2930"&&(delete e.maxFeePerGas,delete e.maxPriorityFeePerGas),e}const e_=tg("transaction",Xf);function ng(t){var n;const e=(n=t.transactions)==null?void 0:n.map(r=>typeof r=="string"?r:Xf(r));return{...t,baseFeePerGas:t.baseFeePerGas?BigInt(t.baseFeePerGas):null,difficulty:t.difficulty?BigInt(t.difficulty):void 0,gasLimit:t.gasLimit?BigInt(t.gasLimit):void 0,gasUsed:t.gasUsed?BigInt(t.gasUsed):void 0,hash:t.hash?t.hash:null,logsBloom:t.logsBloom?t.logsBloom:null,nonce:t.nonce?t.nonce:null,number:t.number?BigInt(t.number):null,size:t.size?BigInt(t.size):void 0,timestamp:t.timestamp?BigInt(t.timestamp):void 0,transactions:e,totalDifficulty:t.totalDifficulty?BigInt(t.totalDifficulty):null}}const t_=tg("block",ng);function ur(t,{args:e,eventName:n}={}){return{...t,blockHash:t.blockHash?t.blockHash:null,blockNumber:t.blockNumber?BigInt(t.blockNumber):null,logIndex:t.logIndex?Number(t.logIndex):null,transactionHash:t.transactionHash?t.transactionHash:null,transactionIndex:t.transactionIndex?Number(t.transactionIndex):null,...n?{args:e,eventName:n}:{}}}const n_={"0x0":"reverted","0x1":"success"};function Xb(t){return{...t,blockNumber:t.blockNumber?BigInt(t.blockNumber):null,contractAddress:t.contractAddress?t.contractAddress:null,cumulativeGasUsed:t.cumulativeGasUsed?BigInt(t.cumulativeGasUsed):null,effectiveGasPrice:t.effectiveGasPrice?BigInt(t.effectiveGasPrice):null,gasUsed:t.gasUsed?BigInt(t.gasUsed):null,logs:t.logs?t.logs.map(e=>ur(e)):null,to:t.to?t.to:null,transactionIndex:t.transactionIndex?Ht(t.transactionIndex):null,status:t.status?n_[t.status]:null,type:t.type?Jb[t.type]||t.type:null}}const r_=tg("transactionReceipt",Xb),i_={block:t_({format(t){var n;return{transactions:(n=t.transactions)==null?void 0:n.map(r=>{if(typeof r=="string")return r;const i=Xf(r);return i.typeHex==="0x7e"&&(i.isSystemTx=r.isSystemTx,i.mint=r.mint?Kr(r.mint):void 0,i.sourceHash=r.sourceHash,i.type="deposit"),i}),stateRoot:t.stateRoot}}}),transaction:e_({format(t){const e={};return t.type==="0x7e"&&(e.isSystemTx=t.isSystemTx,e.mint=t.mint?Kr(t.mint):void 0,e.sourceHash=t.sourceHash,e.type="deposit"),e}}),transactionReceipt:r_({format(t){return{l1GasPrice:t.l1GasPrice?Kr(t.l1GasPrice):null,l1GasUsed:t.l1GasUsed?Kr(t.l1GasUsed):null,l1Fee:t.l1Fee?Kr(t.l1Fee):null,l1FeeScalar:t.l1FeeScalar?Number(t.l1FeeScalar):null}}})},o_={legacy:"0x0",eip2930:"0x1",eip1559:"0x2"};function eh(t){return{...t,gas:typeof t.gas<"u"?Se(t.gas):void 0,gasPrice:typeof t.gasPrice<"u"?Se(t.gasPrice):void 0,maxFeePerGas:typeof t.maxFeePerGas<"u"?Se(t.maxFeePerGas):void 0,maxPriorityFeePerGas:typeof t.maxPriorityFeePerGas<"u"?Se(t.maxPriorityFeePerGas):void 0,nonce:typeof t.nonce<"u"?Se(t.nonce):void 0,type:typeof t.type<"u"?o_[t.type]:void 0,value:typeof t.value<"u"?Se(t.value):void 0}}class tc extends Q{constructor({address:e}){super(`Address "${e}" is invalid.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAddressError"})}}class e1 extends Q{constructor({blockNumber:e,chain:n,contract:r}){super(`Chain "${n.name}" does not support contract "${r.name}".`,{metaMessages:["This could be due to any of the following:",...e&&r.blockCreated&&r.blockCreated>e?[`- The contract "${r.name}" was not deployed until block ${r.blockCreated} (current block ${e}).`]:[`- The chain does not have the contract "${r.name}" configured.`]]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDoesNotSupportContract"})}}class s_ extends Q{constructor({chain:e,currentChainId:n}){super(`The current chain of the wallet (id: ${n}) does not match the target chain for the transaction (id: ${e.id} – ${e.name}).`,{metaMessages:[`Current Chain ID:  ${n}`,`Expected Chain ID: ${e.id} – ${e.name}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainMismatchError"})}}class a_ extends Q{constructor(){super(["No chain was provided to the request.","Please provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient."].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainNotFoundError"})}}class e5 extends Q{constructor(){super("No chain was provided to the Client."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ClientChainNotConfiguredError"})}}const l_={gwei:9,wei:18},c_={ether:-9,wei:9},u_={ether:-18,gwei:-9};function Vd(t,e){let n=t.toString();const r=n.startsWith("-");r&&(n=n.slice(1)),n=n.padStart(e,"0");let[i,o]=[n.slice(0,n.length-e),n.slice(n.length-e)];return o=o.replace(/(0+)$/,""),`${r?"-":""}${i||"0"}${o?`.${o}`:""}`}function gn(t,e="wei"){return Vd(t,c_[e])}class Vs extends Q{constructor({cause:e,message:n}={}){var i;const r=(i=n==null?void 0:n.replace("execution reverted: ",""))==null?void 0:i.replace("execution reverted","");super(`Execution reverted ${r?`with reason: ${r}`:"for an unknown reason"}.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ExecutionRevertedError"})}}Object.defineProperty(Vs,"code",{enumerable:!0,configurable:!0,writable:!0,value:3});Object.defineProperty(Vs,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/execution reverted/});class qd extends Q{constructor({cause:e,maxFeePerGas:n}={}){super(`The fee cap (\`maxFeePerGas\`${n?` = ${gn(n)} gwei`:""}) cannot be higher than the maximum allowed value (2^256-1).`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooHigh"})}}Object.defineProperty(qd,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/});class t1 extends Q{constructor({cause:e,maxFeePerGas:n}={}){super(`The fee cap (\`maxFeePerGas\`${n?` = ${gn(n)}`:""} gwei) cannot be lower than the block base fee.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooLow"})}}Object.defineProperty(t1,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/});class n1 extends Q{constructor({cause:e,nonce:n}={}){super(`Nonce provided for the transaction ${n?`(${n}) `:""}is higher than the next one expected.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooHighError"})}}Object.defineProperty(n1,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too high/});class r1 extends Q{constructor({cause:e,nonce:n}={}){super([`Nonce provided for the transaction ${n?`(${n}) `:""}is lower than the current nonce of the account.`,"Try increasing the nonce or find the latest nonce with `getTransactionCount`."].join(`
`),{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooLowError"})}}Object.defineProperty(r1,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too low|transaction already imported|already known/});class i1 extends Q{constructor({cause:e,nonce:n}={}){super(`Nonce provided for the transaction ${n?`(${n}) `:""}exceeds the maximum allowed nonce.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceMaxValueError"})}}Object.defineProperty(i1,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce has max value/});class o1 extends Q{constructor({cause:e}={}){super(["The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account."].join(`
`),{cause:e,metaMessages:["This error could arise when the account does not have enough funds to:"," - pay for the total gas fee,"," - pay for the value to send."," ","The cost of the transaction is calculated as `gas * gas fee + value`, where:"," - `gas` is the amount of gas needed for transaction to execute,"," - `gas fee` is the gas fee,"," - `value` is the amount of ether to send to the recipient."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InsufficientFundsError"})}}Object.defineProperty(o1,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/insufficient funds/});class s1 extends Q{constructor({cause:e,gas:n}={}){super(`The amount of gas ${n?`(${n}) `:""}provided for the transaction exceeds the limit allowed for the block.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooHighError"})}}Object.defineProperty(s1,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too high|gas limit reached/});class a1 extends Q{constructor({cause:e,gas:n}={}){super(`The amount of gas ${n?`(${n}) `:""}provided for the transaction is too low.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooLowError"})}}Object.defineProperty(a1,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too low/});class l1 extends Q{constructor({cause:e}){super("The transaction type is not supported for this chain.",{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionTypeNotSupportedError"})}}Object.defineProperty(l1,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/transaction type not valid/});class Zd extends Q{constructor({cause:e,maxPriorityFeePerGas:n,maxFeePerGas:r}={}){super([`The provided tip (\`maxPriorityFeePerGas\`${n?` = ${gn(n)} gwei`:""}) cannot be higher than the fee cap (\`maxFeePerGas\`${r?` = ${gn(r)} gwei`:""}).`].join(`
`),{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TipAboveFeeCapError"})}}Object.defineProperty(Zd,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max priority fee per gas higher than max fee per gas|tip higher than fee cap/});class th extends Q{constructor({cause:e}){super(`An error occurred while executing: ${e==null?void 0:e.shortMessage}`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownNodeError"})}}const d_=/^0x[a-fA-F0-9]{40}$/;function Ki(t){return d_.test(t)}function si(t){return typeof t[0]=="string"?rg(t):f_(t)}function f_(t){let e=0;for(const i of t)e+=i.length;const n=new Uint8Array(e);let r=0;for(const i of t)n.set(i,r),r+=i.length;return n}function rg(t){return`0x${t.reduce((e,n)=>e+n.replace("0x",""),"")}`}function h_(t,e){const n=t.exec(e);return n==null?void 0:n.groups}const Dy=/^tuple(?<array>(\[(\d*)\])*)$/;function c1(t){let e=t.type;if(Dy.test(t.type)&&"components"in t){e="(";const n=t.components.length;for(let i=0;i<n;i++){const o=t.components[i];e+=c1(o),i<n-1&&(e+=", ")}const r=h_(Dy,t.type);return e+=`)${(r==null?void 0:r.array)??""}`,c1({...t,type:e})}return"indexed"in t&&t.indexed&&(e=`${e} indexed`),t.name?`${e} ${t.name}`:e}function sl(t){let e="";const n=t.length;for(let r=0;r<n;r++){const i=t[r];e+=c1(i),r!==n-1&&(e+=", ")}return e}function p_(t){return t.type==="function"?`function ${t.name}(${sl(t.inputs)})${t.stateMutability&&t.stateMutability!=="nonpayable"?` ${t.stateMutability}`:""}${t.outputs.length?` returns (${sl(t.outputs)})`:""}`:t.type==="event"?`event ${t.name}(${sl(t.inputs)})`:t.type==="error"?`error ${t.name}(${sl(t.inputs)})`:t.type==="constructor"?`constructor(${sl(t.inputs)})${t.stateMutability==="payable"?" payable":""}`:t.type==="fallback"?"fallback()":"receive() external payable"}function ge(t,e,n){return r=>{var i;return((i=t[e.name||n])==null?void 0:i.call(t,r))??e(t,r)}}function ai(t,{includeName:e=!1}={}){if(t.type!=="function"&&t.type!=="event"&&t.type!=="error")throw new P_(t.type);return`${t.name}(${nh(t.inputs,{includeName:e})})`}function nh(t,{includeName:e=!1}={}){return t?t.map(n=>m_(n,{includeName:e})).join(e?", ":","):""}function m_(t,{includeName:e}){return t.type.startsWith("tuple")?`(${nh(t.components,{includeName:e})})${t.type.slice(5)}`:t.type+(e&&t.name?` ${t.name}`:"")}class g_ extends Q{constructor({docsPath:e}){super(["A constructor was not found on the ABI.","Make sure you are using the correct ABI and that the constructor exists on it."].join(`
`),{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorNotFoundError"})}}class Ry extends Q{constructor({docsPath:e}){super(["Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.","Make sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists."].join(`
`),{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorParamsNotFoundError"})}}class ig extends Q{constructor({data:e,params:n,size:r}){super([`Data size of ${r} bytes is too small for given parameters.`].join(`
`),{metaMessages:[`Params: (${nh(n,{includeName:!0})})`,`Data:   ${e} (${r} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingDataSizeTooSmallError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e,this.params=n,this.size=r}}class rh extends Q{constructor(){super('Cannot decode zero data ("0x") with ABI parameters.'),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingZeroDataError"})}}class w_ extends Q{constructor({expectedLength:e,givenLength:n,type:r}){super([`ABI encoding array length mismatch for type ${r}.`,`Expected length: ${e}`,`Given length: ${n}`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingArrayLengthMismatchError"})}}class y_ extends Q{constructor({expectedSize:e,value:n}){super(`Size of bytes "${n}" (bytes${Tt(n)}) does not match expected size (bytes${e}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingBytesSizeMismatchError"})}}class v_ extends Q{constructor({expectedLength:e,givenLength:n}){super(["ABI encoding params/values length mismatch.",`Expected length (params): ${e}`,`Given length (values): ${n}`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingLengthMismatchError"})}}class t5 extends Q{constructor(e,{docsPath:n}){super([`Encoded error signature "${e}" not found on ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${e}.`].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiErrorSignatureNotFoundError"}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.signature=e}}class b_ extends Q{constructor({docsPath:e}){super("Cannot extract event signature from empty topics.",{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureEmptyTopicsError"})}}class x_ extends Q{constructor(e,{docsPath:n}){super([`Encoded event signature "${e}" not found on ABI.`,"Make sure you are using the correct ABI and that the event exists on it.",`You can look up the signature here: https://openchain.xyz/signatures?query=${e}.`].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureNotFoundError"})}}class Ny extends Q{constructor(e,{docsPath:n}={}){super([`Event ${e?`"${e}" `:""}not found on ABI.`,"Make sure you are using the correct ABI and that the event exists on it."].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventNotFoundError"})}}class Gd extends Q{constructor(e,{docsPath:n}={}){super([`Function ${e?`"${e}" `:""}not found on ABI.`,"Make sure you are using the correct ABI and that the function exists on it."].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionNotFoundError"})}}class E_ extends Q{constructor(e,{docsPath:n}){super([`Function "${e}" does not contain any \`outputs\` on ABI.`,"Cannot decode function result without knowing what the parameter types are.","Make sure you are using the correct ABI and that the function exists on it."].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionOutputsNotFoundError"})}}class __ extends Q{constructor(e,n){super("Found ambiguous types in overloaded ABI items.",{metaMessages:[`\`${e.type}\` in \`${ai(e.abiItem)}\`, and`,`\`${n.type}\` in \`${ai(n.abiItem)}\``,"","These types encode differently and cannot be distinguished at runtime.","Remove one of the ambiguous items in the ABI."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiItemAmbiguityError"})}}class C_ extends Q{constructor({expectedSize:e,givenSize:n}){super(`Expected bytes${e}, got bytes${n}.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BytesSizeMismatchError"})}}class qo extends Q{constructor({abiItem:e,data:n,params:r,size:i}){super([`Data size of ${i} bytes is too small for non-indexed event parameters.`].join(`
`),{metaMessages:[`Params: (${nh(r,{includeName:!0})})`,`Data:   ${n} (${i} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogDataMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=e,this.data=n,this.params=r,this.size=i}}class Ba extends Q{constructor({abiItem:e,param:n}){super([`Expected a topic for indexed event parameter${n.name?` "${n.name}"`:""} on event "${ai(e,{includeName:!0})}".`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogTopicsMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=e}}class S_ extends Q{constructor(e,{docsPath:n}){super([`Type "${e}" is not a valid encoding type.`,"Please provide a valid ABI type."].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiEncodingType"})}}class A_ extends Q{constructor(e,{docsPath:n}){super([`Type "${e}" is not a valid decoding type.`,"Please provide a valid ABI type."].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiDecodingType"})}}class T_ extends Q{constructor(e){super([`Value "${e}" is not a valid array.`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidArrayError"})}}class P_ extends Q{constructor(e){super([`"${e}" is not a valid definition type.`,'Valid types: "function", "event", "error"'].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidDefinitionTypeError"})}}class $_ extends Q{constructor(e){super(`Filter type "${e}" is not supported.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FilterTypeNotSupportedError"})}}function I_(t){let e=!0,n="",r=0,i="",o=!1;for(let s=0;s<t.length;s++){const a=t[s];if(["(",")",","].includes(a)&&(e=!0),a==="("&&r++,a===")"&&r--,!!e){if(r===0){if(a===" "&&["event","function",""].includes(i))i="";else if(i+=a,a===")"){o=!0;break}continue}if(a===" "){t[s-1]!==","&&n!==","&&n!==",("&&(n="",e=!1);continue}i+=a,n+=a}}if(!o)throw new Q("Unable to normalize signature.");return i}const n5=t=>{const e=typeof t=="string"?t:p_(t);return I_(e)},k_=t=>n5(t);function My(t){if(!Number.isSafeInteger(t)||t<0)throw new Error(`Wrong positive integer: ${t}`)}function r5(t,...e){if(!(t instanceof Uint8Array))throw new Error("Expected Uint8Array");if(e.length>0&&!e.includes(t.length))throw new Error(`Expected Uint8Array of length ${e}, not of length=${t.length}`)}function Ly(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}function O_(t,e){r5(t);const n=e.outputLen;if(t.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}const Hu=BigInt(2**32-1),Uy=BigInt(32);function D_(t,e=!1){return e?{h:Number(t&Hu),l:Number(t>>Uy&Hu)}:{h:Number(t>>Uy&Hu)|0,l:Number(t&Hu)|0}}function R_(t,e=!1){let n=new Uint32Array(t.length),r=new Uint32Array(t.length);for(let i=0;i<t.length;i++){const{h:o,l:s}=D_(t[i],e);[n[i],r[i]]=[o,s]}return[n,r]}const N_=(t,e,n)=>t<<n|e>>>32-n,M_=(t,e,n)=>e<<n|t>>>32-n,L_=(t,e,n)=>e<<n-32|t>>>64-n,U_=(t,e,n)=>t<<n-32|e>>>64-n;/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */const j_=t=>t instanceof Uint8Array,B_=t=>new Uint32Array(t.buffer,t.byteOffset,Math.floor(t.byteLength/4)),F_=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!F_)throw new Error("Non little-endian hardware is not supported");function W_(t){if(typeof t!="string")throw new Error(`utf8ToBytes expected string, got ${typeof t}`);return new Uint8Array(new TextEncoder().encode(t))}function i5(t){if(typeof t=="string"&&(t=W_(t)),!j_(t))throw new Error(`expected Uint8Array, got ${typeof t}`);return t}class z_{clone(){return this._cloneInto()}}function H_(t){const e=r=>t().update(i5(r)).digest(),n=t();return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.create=()=>t(),e}const[o5,s5,a5]=[[],[],[]],V_=BigInt(0),al=BigInt(1),q_=BigInt(2),Z_=BigInt(7),G_=BigInt(256),K_=BigInt(113);for(let t=0,e=al,n=1,r=0;t<24;t++){[n,r]=[r,(2*n+3*r)%5],o5.push(2*(5*r+n)),s5.push((t+1)*(t+2)/2%64);let i=V_;for(let o=0;o<7;o++)e=(e<<al^(e>>Z_)*K_)%G_,e&q_&&(i^=al<<(al<<BigInt(o))-al);a5.push(i)}const[Y_,Q_]=R_(a5,!0),jy=(t,e,n)=>n>32?L_(t,e,n):N_(t,e,n),By=(t,e,n)=>n>32?U_(t,e,n):M_(t,e,n);function J_(t,e=24){const n=new Uint32Array(10);for(let r=24-e;r<24;r++){for(let s=0;s<10;s++)n[s]=t[s]^t[s+10]^t[s+20]^t[s+30]^t[s+40];for(let s=0;s<10;s+=2){const a=(s+8)%10,l=(s+2)%10,c=n[l],u=n[l+1],d=jy(c,u,1)^n[a],p=By(c,u,1)^n[a+1];for(let w=0;w<50;w+=10)t[s+w]^=d,t[s+w+1]^=p}let i=t[2],o=t[3];for(let s=0;s<24;s++){const a=s5[s],l=jy(i,o,a),c=By(i,o,a),u=o5[s];i=t[u],o=t[u+1],t[u]=l,t[u+1]=c}for(let s=0;s<50;s+=10){for(let a=0;a<10;a++)n[a]=t[s+a];for(let a=0;a<10;a++)t[s+a]^=~n[(a+2)%10]&n[(a+4)%10]}t[0]^=Y_[r],t[1]^=Q_[r]}n.fill(0)}class og extends z_{constructor(e,n,r,i=!1,o=24){if(super(),this.blockLen=e,this.suffix=n,this.outputLen=r,this.enableXOF=i,this.rounds=o,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,My(r),0>=this.blockLen||this.blockLen>=200)throw new Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=B_(this.state)}keccak(){J_(this.state32,this.rounds),this.posOut=0,this.pos=0}update(e){Ly(this);const{blockLen:n,state:r}=this;e=i5(e);const i=e.length;for(let o=0;o<i;){const s=Math.min(n-this.pos,i-o);for(let a=0;a<s;a++)r[this.pos++]^=e[o++];this.pos===n&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;const{state:e,suffix:n,pos:r,blockLen:i}=this;e[r]^=n,n&128&&r===i-1&&this.keccak(),e[i-1]^=128,this.keccak()}writeInto(e){Ly(this,!1),r5(e),this.finish();const n=this.state,{blockLen:r}=this;for(let i=0,o=e.length;i<o;){this.posOut>=r&&this.keccak();const s=Math.min(r-this.posOut,o-i);e.set(n.subarray(this.posOut,this.posOut+s),i),this.posOut+=s,i+=s}return e}xofInto(e){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(e)}xof(e){return My(e),this.xofInto(new Uint8Array(e))}digestInto(e){if(O_(e,this),this.finished)throw new Error("digest() was already called");return this.writeInto(e),this.destroy(),e}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(e){const{blockLen:n,suffix:r,outputLen:i,rounds:o,enableXOF:s}=this;return e||(e=new og(n,r,i,s,o)),e.state32.set(this.state32),e.pos=this.pos,e.posOut=this.posOut,e.finished=this.finished,e.rounds=o,e.suffix=r,e.outputLen=i,e.enableXOF=s,e.destroyed=this.destroyed,e}}const X_=(t,e,n)=>H_(()=>new og(e,t,n)),eC=X_(1,136,256/8);function Jt(t,e){const n=e||"hex",r=eC(Or(t,{strict:!1})?Gi(t):t);return n==="bytes"?r:fi(r)}const tC=t=>Jt(Gi(t)),sg=t=>tC(k_(t));function _t(t,e,n,{strict:r}={}){return Or(t,{strict:!1})?rC(t,e,n,{strict:r}):nC(t,e,n,{strict:r})}function l5(t,e){if(typeof e=="number"&&e>0&&e>Tt(t)-1)throw new Gb({offset:e,position:"start",size:Tt(t)})}function c5(t,e,n){if(typeof e=="number"&&typeof n=="number"&&Tt(t)!==n-e)throw new Gb({offset:n,position:"end",size:Tt(t)})}function nC(t,e,n,{strict:r}={}){l5(t,e);const i=t.slice(e,n);return r&&c5(i,e,n),i}function rC(t,e,n,{strict:r}={}){l5(t,e);const i=`0x${t.replace("0x","").slice((e??0)*2,(n??t.length)*2)}`;return r&&c5(i,e,n),i}function nu(t,e){if(t.length!==e.length)throw new v_({expectedLength:t.length,givenLength:e.length});const n=iC({params:t,values:e}),r=lg(n);return r.length===0?"0x":r}function iC({params:t,values:e}){const n=[];for(let r=0;r<t.length;r++)n.push(ag({param:t[r],value:e[r]}));return n}function ag({param:t,value:e}){const n=ih(t.type);if(n){const[r,i]=n;return sC(e,{length:r,param:{...t,type:i}})}if(t.type==="tuple")return dC(e,{param:t});if(t.type==="address")return oC(e);if(t.type==="bool")return lC(e);if(t.type.startsWith("uint")||t.type.startsWith("int")){const r=t.type.startsWith("int");return cC(e,{signed:r})}if(t.type.startsWith("bytes"))return aC(e,{param:t});if(t.type==="string")return uC(e);throw new S_(t.type,{docsPath:"/docs/contract/encodeAbiParameters"})}function lg(t){let e=0;for(let o=0;o<t.length;o++){const{dynamic:s,encoded:a}=t[o];s?e+=32:e+=Tt(a)}const n=[],r=[];let i=0;for(let o=0;o<t.length;o++){const{dynamic:s,encoded:a}=t[o];s?(n.push(Se(e+i,{size:32})),r.push(a),i+=Tt(a)):n.push(a)}return si([...n,...r])}function oC(t){if(!Ki(t))throw new tc({address:t});return{dynamic:!1,encoded:Wi(t.toLowerCase())}}function sC(t,{length:e,param:n}){const r=e===null;if(!Array.isArray(t))throw new T_(t);if(!r&&t.length!==e)throw new w_({expectedLength:e,givenLength:t.length,type:`${n.type}[${e}]`});let i=!1;const o=[];for(let s=0;s<t.length;s++){const a=ag({param:n,value:t[s]});a.dynamic&&(i=!0),o.push(a)}if(r||i){const s=lg(o);if(r){const a=Se(o.length,{size:32});return{dynamic:!0,encoded:o.length>0?si([a,s]):a}}if(i)return{dynamic:!0,encoded:s}}return{dynamic:!1,encoded:si(o.map(({encoded:s})=>s))}}function aC(t,{param:e}){const[,n]=e.type.split("bytes"),r=Tt(t);if(!n){let i=t;return r%32!==0&&(i=Wi(i,{dir:"right",size:Math.ceil((t.length-2)/2/32)*32})),{dynamic:!0,encoded:si([Wi(Se(r,{size:32})),i])}}if(r!==parseInt(n))throw new y_({expectedSize:parseInt(n),value:t});return{dynamic:!1,encoded:Wi(t,{dir:"right"})}}function lC(t){return{dynamic:!1,encoded:Wi(Yb(t))}}function cC(t,{signed:e}){return{dynamic:!1,encoded:Se(t,{size:32,signed:e})}}function uC(t){const e=Xm(t),n=Math.ceil(Tt(e)/32),r=[];for(let i=0;i<n;i++)r.push(Wi(_t(e,i*32,(i+1)*32),{dir:"right"}));return{dynamic:!0,encoded:si([Wi(Se(Tt(e),{size:32})),...r])}}function dC(t,{param:e}){let n=!1;const r=[];for(let i=0;i<e.components.length;i++){const o=e.components[i],s=Array.isArray(t)?i:o.name,a=ag({param:o,value:t[s]});r.push(a),a.dynamic&&(n=!0)}return{dynamic:n,encoded:n?lg(r):si(r.map(({encoded:i})=>i))}}function ih(t){const e=t.match(/^(.*)\[(\d+)?\]$/);return e?[e[2]?Number(e[2]):null,e[1]]:void 0}const fC=t=>Jt(Gi(t)),cg=t=>_t(fC(n5(t)),0,4);function ru({abi:t,args:e=[],name:n}){const r=Or(n,{strict:!1}),i=t.filter(s=>r?s.type==="function"?cg(s)===n:s.type==="event"?sg(s)===n:!1:"name"in s&&s.name===n);if(i.length===0)return;if(i.length===1)return i[0];let o;for(const s of i){if(!("inputs"in s))continue;if(!e||e.length===0){if(!s.inputs||s.inputs.length===0)return s;continue}if(!s.inputs||s.inputs.length===0||s.inputs.length!==e.length)continue;if(e.every((l,c)=>{const u="inputs"in s&&s.inputs[c];return u?u1(l,u):!1})){if(o&&"inputs"in o&&o.inputs){const l=u5(s.inputs,o.inputs,e);if(l)throw new __({abiItem:s,type:l[0]},{abiItem:o,type:l[1]})}o=s}}return o||i[0]}function u1(t,e){const n=typeof t,r=e.type;switch(r){case"address":return Ki(t);case"bool":return n==="boolean";case"function":return n==="string";case"string":return n==="string";default:return r==="tuple"&&"components"in e?Object.values(e.components).every((i,o)=>u1(Object.values(t)[o],i)):/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(r)?n==="number"||n==="bigint":/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(r)?n==="string"||t instanceof Uint8Array:/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(r)?Array.isArray(t)&&t.every(i=>u1(i,{...e,type:r.replace(/(\[[0-9]{0,}\])$/,"")})):!1}}function u5(t,e,n){for(const r in t){const i=t[r],o=e[r];if(i.type==="tuple"&&o.type==="tuple"&&"components"in i&&"components"in o)return u5(i.components,o.components,n[r]);const s=[i.type,o.type];if(s.includes("address")&&s.includes("bytes20")?!0:s.includes("address")&&s.includes("string")||s.includes("address")&&s.includes("bytes")?Ki(n[r]):!1)return s}}function iu({abi:t,eventName:e,args:n}){var a;let r=t[0];if(e&&(r=ru({abi:t,args:n,name:e}),!r))throw new Ny(e,{docsPath:"/docs/contract/encodeEventTopics"});if(r.type!=="event")throw new Ny(void 0,{docsPath:"/docs/contract/encodeEventTopics"});const i=ai(r),o=sg(i);let s=[];if(n&&"inputs"in r){const l=(a=r.inputs)==null?void 0:a.filter(u=>"indexed"in u&&u.indexed),c=Array.isArray(n)?n:Object.values(n).length>0?(l==null?void 0:l.map(u=>n[u.name]))??[]:[];c.length>0&&(s=(l==null?void 0:l.map((u,d)=>Array.isArray(c[d])?c[d].map((p,w)=>Fy({param:u,value:c[d][w]})):c[d]?Fy({param:u,value:c[d]}):null))??[])}return[o,...s]}function Fy({param:t,value:e}){if(t.type==="string"||t.type==="bytes")return Jt(Gi(e));if(t.type==="tuple"||t.type.match(/^(.*)\[(\d+)?\]$/))throw new $_(t.type);return nu([t],[e])}function oh(t,{method:e}){var r,i;const n={};return t.transport.type==="fallback"&&((i=(r=t.transport).onResponse)==null||i.call(r,({method:o,response:s,status:a,transport:l})=>{a==="success"&&e===o&&(n[s]=l.request)})),o=>n[o]||t.request}async function d5(t,{address:e,abi:n,args:r,eventName:i,fromBlock:o,strict:s,toBlock:a}){const l=oh(t,{method:"eth_newFilter"}),c=i?iu({abi:n,args:r,eventName:i}):void 0,u=await t.request({method:"eth_newFilter",params:[{address:e,fromBlock:typeof o=="bigint"?Se(o):o,toBlock:typeof a=="bigint"?Se(a):a,topics:c}]});return{abi:n,args:r,eventName:i,id:u,request:l(u),strict:s,type:"event"}}function Zn(t){return typeof t=="string"?{address:t,type:"json-rpc"}:t}function co({abi:t,args:e,functionName:n}){let r=t[0];if(n&&(r=ru({abi:t,args:e,name:n}),!r))throw new Gd(n,{docsPath:"/docs/contract/encodeFunctionData"});if(r.type!=="function")throw new Gd(void 0,{docsPath:"/docs/contract/encodeFunctionData"});const i=ai(r),o=cg(i),s="inputs"in r&&r.inputs?nu(r.inputs,e??[]):void 0;return rg([o,s??"0x"])}const f5={1:"An `assert` condition failed.",17:"Arithmic operation resulted in underflow or overflow.",18:"Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",33:"Attempted to convert to an invalid type.",34:"Attempted to access a storage byte array that is incorrectly encoded.",49:"Performed `.pop()` on an empty array",50:"Array index is out of bounds.",65:"Allocated too much memory or created an array which is too large.",81:"Attempted to call a zero-initialized variable of internal function type."},hC={inputs:[{name:"message",type:"string"}],name:"Error",type:"error"},pC={inputs:[{name:"reason",type:"uint256"}],name:"Panic",type:"error"};function ug(t,e){const n=e?`${e}${t.toLowerCase()}`:t.substring(2).toLowerCase(),r=Jt(ei(n),"bytes"),i=(e?n.substring(`${e}0x`.length):n).split("");for(let o=0;o<40;o+=2)r[o>>1]>>4>=8&&i[o]&&(i[o]=i[o].toUpperCase()),(r[o>>1]&15)>=8&&i[o+1]&&(i[o+1]=i[o+1].toUpperCase());return`0x${i.join("")}`}function Fn(t,e){if(!Ki(t))throw new tc({address:t});return ug(t,e)}function sh(t,e){if(e==="0x"&&t.length>0)throw new rh;if(Tt(e)&&Tt(e)<32)throw new ig({data:e,params:t,size:Tt(e)});return mC({data:e,params:t})}function mC({data:t,params:e}){const n=[];let r=0;for(let i=0;i<e.length;i++){if(r>=Tt(t))throw new ig({data:t,params:e,size:Tt(t)});const o=e[i],{consumed:s,value:a}=Js({data:t,param:o,position:r});n.push(a),r+=s}return n}function Js({data:t,param:e,position:n}){const r=ih(e.type);if(r){const[o,s]=r;return wC(t,{length:o,param:{...e,type:s},position:n})}if(e.type==="tuple")return EC(t,{param:e,position:n});if(e.type==="string")return xC(t,{position:n});if(e.type.startsWith("bytes"))return vC(t,{param:e,position:n});const i=_t(t,n,n+32,{strict:!0});if(e.type.startsWith("uint")||e.type.startsWith("int"))return bC(i,{param:e});if(e.type==="address")return gC(i);if(e.type==="bool")return yC(i);throw new A_(e.type,{docsPath:"/docs/contract/decodeAbiParameters"})}function gC(t){return{consumed:32,value:ug(_t(t,-20))}}function wC(t,{param:e,length:n,position:r}){if(!n){const s=Ht(_t(t,r,r+32,{strict:!0})),a=Ht(_t(t,s,s+32,{strict:!0}));let l=0;const c=[];for(let u=0;u<a;++u){const d=Js({data:_t(t,s+32),param:e,position:l});l+=d.consumed,c.push(d.value)}return{value:c,consumed:32}}if(Kd(e)){const s=ih(e.type),a=!(s!=null&&s[0]);let l=0;const c=[];for(let u=0;u<n;++u){const d=Ht(_t(t,r,r+32,{strict:!0})),p=Js({data:_t(t,d),param:e,position:a?l:u*32});l+=p.consumed,c.push(p.value)}return{value:c,consumed:32}}let i=0;const o=[];for(let s=0;s<n;++s){const a=Js({data:t,param:e,position:r+i});i+=a.consumed,o.push(a.value)}return{value:o,consumed:i}}function yC(t){return{consumed:32,value:XE(t)}}function vC(t,{param:e,position:n}){const[r,i]=e.type.split("bytes");if(!i){const s=Ht(_t(t,n,n+32,{strict:!0})),a=Ht(_t(t,s,s+32,{strict:!0}));return a===0?{consumed:32,value:"0x"}:{consumed:32,value:_t(t,s+32,s+32+a,{strict:!0})}}return{consumed:32,value:_t(t,n,n+parseInt(i),{strict:!0})}}function bC(t,{param:e}){const n=e.type.startsWith("int");return{consumed:32,value:parseInt(e.type.split("int")[1]||"256")>48?Kr(t,{signed:n}):Ht(t,{signed:n})}}function xC(t,{position:e}){const n=Ht(_t(t,e,e+32,{strict:!0})),r=Ht(_t(t,n,n+32,{strict:!0}));return r===0?{consumed:32,value:""}:{consumed:32,value:Qb(Lo(_t(t,n+32,n+32+r,{strict:!0})))}}function EC(t,{param:e,position:n}){const r=e.components.length===0||e.components.some(({name:s})=>!s),i=r?[]:{};let o=0;if(Kd(e)){const s=Ht(_t(t,n,n+32,{strict:!0}));for(let a=0;a<e.components.length;++a){const l=e.components[a],c=Js({data:_t(t,s),param:l,position:o});o+=c.consumed,i[r?a:l==null?void 0:l.name]=c.value}return{consumed:32,value:i}}for(let s=0;s<e.components.length;++s){const a=e.components[s],l=Js({data:t,param:a,position:n+o});o+=l.consumed,i[r?s:a==null?void 0:a.name]=l.value}return{consumed:o,value:i}}function Kd(t){var r;const{type:e}=t;if(e==="string"||e==="bytes"||e.endsWith("[]"))return!0;if(e==="tuple")return(r=t.components)==null?void 0:r.some(Kd);const n=ih(t.type);return!!(n&&Kd({...t,type:n[1]}))}function _C({abi:t,data:e}){const n=_t(e,0,4);if(n==="0x")throw new rh;const i=[...t||[],hC,pC].find(o=>o.type==="error"&&n===cg(ai(o)));if(!i)throw new t5(n,{docsPath:"/docs/contract/decodeErrorResult"});return{abiItem:i,args:"inputs"in i&&i.inputs&&i.inputs.length>0?sh(i.inputs,_t(e,4)):void 0,errorName:i.name}}const tn=(t,e,n)=>JSON.stringify(t,(r,i)=>{const o=typeof i=="bigint"?i.toString():i;return typeof e=="function"?e(r,o):o},n);function h5({abiItem:t,args:e,includeFunctionName:n=!0,includeName:r=!1}){if("name"in t&&"inputs"in t&&t.inputs)return`${n?t.name:""}(${t.inputs.map((i,o)=>`${r&&i.name?`${i.name}: `:""}${typeof e[o]=="object"?tn(e[o]):e[o]}`).join(", ")})`}function dg(t,e="wei"){return Vd(t,l_[e])}function ou(t){const e=Object.entries(t).map(([r,i])=>i===void 0||i===!1?null:[r,i]).filter(Boolean),n=e.reduce((r,[i])=>Math.max(r,i.length),0);return e.map(([r,i])=>`  ${`${r}:`.padEnd(n+1)}  ${i}`).join(`
`)}class CC extends Q{constructor(){super(["Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.","Use `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeConflictError"})}}class SC extends Q{constructor({transaction:e}){super("Cannot infer a transaction type from provided transaction.",{metaMessages:["Provided Transaction:","{",ou(e),"}","","To infer the type, either provide:","- a `type` to the Transaction, or","- an EIP-1559 Transaction with `maxFeePerGas`, or","- an EIP-2930 Transaction with `gasPrice` & `accessList`, or","- a Legacy Transaction with `gasPrice`"]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidSerializableTransactionError"})}}class AC extends Q{constructor(e,{account:n,docsPath:r,chain:i,data:o,gas:s,gasPrice:a,maxFeePerGas:l,maxPriorityFeePerGas:c,nonce:u,to:d,value:p}){var y;const w=ou({chain:i&&`${i==null?void 0:i.name} (id: ${i==null?void 0:i.id})`,from:n==null?void 0:n.address,to:d,value:typeof p<"u"&&`${dg(p)} ${((y=i==null?void 0:i.nativeCurrency)==null?void 0:y.symbol)||"ETH"}`,data:o,gas:s,gasPrice:typeof a<"u"&&`${gn(a)} gwei`,maxFeePerGas:typeof l<"u"&&`${gn(l)} gwei`,maxPriorityFeePerGas:typeof c<"u"&&`${gn(c)} gwei`,nonce:u});super(e.shortMessage,{cause:e,docsPath:r,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Request Arguments:",w].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionExecutionError"}),this.cause=e}}class p5 extends Q{constructor({blockHash:e,blockNumber:n,blockTag:r,hash:i,index:o}){let s="Transaction";r&&o!==void 0&&(s=`Transaction at block time "${r}" at index "${o}"`),e&&o!==void 0&&(s=`Transaction at block hash "${e}" at index "${o}"`),n&&o!==void 0&&(s=`Transaction at block number "${n}" at index "${o}"`),i&&(s=`Transaction with hash "${i}"`),super(`${s} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionNotFoundError"})}}class m5 extends Q{constructor({hash:e}){super(`Transaction receipt with hash "${e}" could not be found. The Transaction may not be processed on a block yet.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionReceiptNotFoundError"})}}class TC extends Q{constructor({hash:e}){super(`Timed out while waiting for transaction with hash "${e}" to be confirmed.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WaitForTransactionReceiptTimeoutError"})}}class g5 extends Q{constructor(e,{account:n,docsPath:r,chain:i,data:o,gas:s,gasPrice:a,maxFeePerGas:l,maxPriorityFeePerGas:c,nonce:u,to:d,value:p}){var E;const w=n?Zn(n):void 0,y=ou({from:w==null?void 0:w.address,to:d,value:typeof p<"u"&&`${dg(p)} ${((E=i==null?void 0:i.nativeCurrency)==null?void 0:E.symbol)||"ETH"}`,data:o,gas:s,gasPrice:typeof a<"u"&&`${gn(a)} gwei`,maxFeePerGas:typeof l<"u"&&`${gn(l)} gwei`,maxPriorityFeePerGas:typeof c<"u"&&`${gn(c)} gwei`,nonce:u});super(e.shortMessage,{cause:e,docsPath:r,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Raw Call Arguments:",y].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"CallExecutionError"}),this.cause=e}}class fg extends Q{constructor(e,{abi:n,args:r,contractAddress:i,docsPath:o,functionName:s,sender:a}){const l=ru({abi:n,args:r,name:s}),c=l?h5({abiItem:l,args:r,includeFunctionName:!1,includeName:!1}):void 0,u=l?ai(l,{includeName:!0}):void 0,d=ou({address:i&&WE(i),function:u,args:c&&c!=="()"&&`${[...Array((s==null?void 0:s.length)??0).keys()].map(()=>" ").join("")}${c}`,sender:a});super(e.shortMessage||`An unknown error occurred while executing the contract function "${s}".`,{cause:e,docsPath:o,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Contract Call:",d].filter(Boolean)}),Object.defineProperty(this,"abi",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"args",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"contractAddress",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"formattedArgs",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"functionName",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sender",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionExecutionError"}),this.abi=n,this.args=r,this.cause=e,this.contractAddress=i,this.functionName=s,this.sender=a}}class d1 extends Q{constructor({abi:e,data:n,functionName:r,message:i}){let o,s,a,l;if(n&&n!=="0x")try{s=_C({abi:e,data:n});const{abiItem:u,errorName:d,args:p}=s;if(d==="Error")l=p[0];else if(d==="Panic"){const[w]=p;l=f5[w]}else{const w=u?ai(u,{includeName:!0}):void 0,y=u&&p?h5({abiItem:u,args:p,includeFunctionName:!1,includeName:!1}):void 0;a=[w?`Error: ${w}`:"",y&&y!=="()"?`       ${[...Array((d==null?void 0:d.length)??0).keys()].map(()=>" ").join("")}${y}`:""]}}catch(u){o=u}else i&&(l=i);let c;o instanceof t5&&(c=o.signature,a=[`Unable to decode signature "${c}" as it was not found on the provided ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${c}.`]),super(l&&l!=="execution reverted"||c?[`The contract function "${r}" reverted with the following ${c?"signature":"reason"}:`,l||c].join(`
`):`The contract function "${r}" reverted.`,{cause:o,metaMessages:a}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionRevertedError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"reason",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=s,this.reason=l,this.signature=c}}class PC extends Q{constructor({functionName:e}){super(`The contract function "${e}" returned no data ("0x").`,{metaMessages:["This could be due to any of the following:",`  - The contract does not have the function "${e}",`,"  - The parameters passed to the contract function may be invalid, or","  - The address is not a contract."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionZeroDataError"})}}class hg extends Q{constructor({data:e,message:n}){super(n||""),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RawContractError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e}}class Il extends Q{constructor({body:e,details:n,headers:r,status:i,url:o}){super("HTTP request failed.",{details:n,metaMessages:[i&&`Status: ${i}`,`URL: ${Jf(o)}`,e&&`Request body: ${tn(e)}`].filter(Boolean)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"HttpRequestError"}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"headers",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"status",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"url",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.body=e,this.headers=r,this.status=i,this.url=o}}class $C extends Q{constructor({body:e,details:n,url:r}){super("WebSocket request failed.",{details:n,metaMessages:[`URL: ${Jf(r)}`,`Request body: ${tn(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WebSocketRequestError"})}}class pg extends Q{constructor({body:e,error:n,url:r}){super("RPC Request failed.",{cause:n,details:n.message,metaMessages:[`URL: ${Jf(r)}`,`Request body: ${tn(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcRequestError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.code=n.code}}class f1 extends Q{constructor({body:e,url:n}){super("The request took too long to respond.",{details:"The request timed out.",metaMessages:[`URL: ${Jf(n)}`,`Request body: ${tn(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TimeoutError"})}}const IC=-1;class vn extends Q{constructor(e,{code:n,docsPath:r,metaMessages:i,shortMessage:o}){super(o,{cause:e,docsPath:r,metaMessages:i||(e==null?void 0:e.metaMessages)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name=e.name,this.code=e instanceof pg?e.code:n??IC}}class Fa extends vn{constructor(e,n){super(e,n),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderRpcError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=n.data}}class nc extends vn{constructor(e){super(e,{code:nc.code,shortMessage:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ParseRpcError"})}}Object.defineProperty(nc,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32700});class rc extends vn{constructor(e){super(e,{code:rc.code,shortMessage:"JSON is not a valid request object."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidRequestRpcError"})}}Object.defineProperty(rc,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32600});class ic extends vn{constructor(e){super(e,{code:ic.code,shortMessage:"The method does not exist / is not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotFoundRpcError"})}}Object.defineProperty(ic,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32601});class oc extends vn{constructor(e){super(e,{code:oc.code,shortMessage:["Invalid parameters were provided to the RPC method.","Double check you have provided the correct parameters."].join(`
`)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidParamsRpcError"})}}Object.defineProperty(oc,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32602});class da extends vn{constructor(e){super(e,{code:da.code,shortMessage:"An internal error was received."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InternalRpcError"})}}Object.defineProperty(da,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32603});class Zo extends vn{constructor(e){super(e,{code:Zo.code,shortMessage:["Missing or invalid parameters.","Double check you have provided the correct parameters."].join(`
`)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidInputRpcError"})}}Object.defineProperty(Zo,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32e3});class sc extends vn{constructor(e){super(e,{code:sc.code,shortMessage:"Requested resource not found."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceNotFoundRpcError"})}}Object.defineProperty(sc,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32001});class fa extends vn{constructor(e){super(e,{code:fa.code,shortMessage:"Requested resource not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceUnavailableRpcError"})}}Object.defineProperty(fa,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32002});class ac extends vn{constructor(e){super(e,{code:ac.code,shortMessage:"Transaction creation failed."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionRejectedRpcError"})}}Object.defineProperty(ac,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32003});class lc extends vn{constructor(e){super(e,{code:lc.code,shortMessage:"Method is not implemented."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotSupportedRpcError"})}}Object.defineProperty(lc,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32004});class cc extends vn{constructor(e){super(e,{code:cc.code,shortMessage:"Request exceeds defined limit."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"LimitExceededRpcError"})}}Object.defineProperty(cc,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32005});class uc extends vn{constructor(e){super(e,{code:uc.code,shortMessage:"Version of JSON-RPC protocol is not supported."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"JsonRpcVersionUnsupportedError"})}}Object.defineProperty(uc,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32006});class fn extends Fa{constructor(e){super(e,{code:fn.code,shortMessage:"User rejected the request."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UserRejectedRequestError"})}}Object.defineProperty(fn,"code",{enumerable:!0,configurable:!0,writable:!0,value:4001});class dc extends Fa{constructor(e){super(e,{code:dc.code,shortMessage:"The requested method and/or account has not been authorized by the user."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnauthorizedProviderError"})}}Object.defineProperty(dc,"code",{enumerable:!0,configurable:!0,writable:!0,value:4100});class fc extends Fa{constructor(e){super(e,{code:fc.code,shortMessage:"The Provider does not support the requested method."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnsupportedProviderMethodError"})}}Object.defineProperty(fc,"code",{enumerable:!0,configurable:!0,writable:!0,value:4200});class hc extends Fa{constructor(e){super(e,{code:hc.code,shortMessage:"The Provider is disconnected from all chains."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderDisconnectedError"})}}Object.defineProperty(hc,"code",{enumerable:!0,configurable:!0,writable:!0,value:4900});class pc extends Fa{constructor(e){super(e,{code:pc.code,shortMessage:"The Provider is not connected to the requested chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDisconnectedError"})}}Object.defineProperty(pc,"code",{enumerable:!0,configurable:!0,writable:!0,value:4901});class dr extends Fa{constructor(e){super(e,{code:dr.code,shortMessage:"An error occurred when attempting to switch chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SwitchChainError"})}}Object.defineProperty(dr,"code",{enumerable:!0,configurable:!0,writable:!0,value:4902});class kC extends vn{constructor(e){super(e,{shortMessage:"An unknown RPC error occurred."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownRpcError"})}}const OC=3;function mc(t,{abi:e,address:n,args:r,docsPath:i,functionName:o,sender:s}){const{code:a,data:l,message:c,shortMessage:u}=t instanceof hg?t:t instanceof Q?t.walk(p=>"data"in p)||t.walk():{},d=t instanceof rh?new PC({functionName:o}):[OC,da.code].includes(a)&&(l||c||u)?new d1({abi:e,data:typeof l=="object"?l.data:l,functionName:o,message:u??c}):t;return new fg(d,{abi:e,args:r,contractAddress:n,docsPath:i,functionName:o,sender:s})}class Wa extends Q{constructor({docsPath:e}={}){super(["Could not find an Account to execute with this Action.","Please provide an Account with the `account` argument on the Action, or by supplying an `account` to the WalletClient."].join(`
`),{docsPath:e,docsSlug:"account"}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AccountNotFoundError"})}}class DC extends Q{constructor(e,{account:n,docsPath:r,chain:i,data:o,gas:s,gasPrice:a,maxFeePerGas:l,maxPriorityFeePerGas:c,nonce:u,to:d,value:p}){var y;const w=ou({from:n==null?void 0:n.address,to:d,value:typeof p<"u"&&`${dg(p)} ${((y=i==null?void 0:i.nativeCurrency)==null?void 0:y.symbol)||"ETH"}`,data:o,gas:s,gasPrice:typeof a<"u"&&`${gn(a)} gwei`,maxFeePerGas:typeof l<"u"&&`${gn(l)} gwei`,maxPriorityFeePerGas:typeof c<"u"&&`${gn(c)} gwei`,nonce:u});super(e.shortMessage,{cause:e,docsPath:r,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Estimate Gas Arguments:",w].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EstimateGasExecutionError"}),this.cause=e}}function mg(t,e){const n=(t.details||"").toLowerCase(),r=t.walk(i=>i.code===Vs.code);return r instanceof Q?new Vs({cause:t,message:r.details}):Vs.nodeMessage.test(n)?new Vs({cause:t,message:t.details}):qd.nodeMessage.test(n)?new qd({cause:t,maxFeePerGas:e==null?void 0:e.maxFeePerGas}):t1.nodeMessage.test(n)?new t1({cause:t,maxFeePerGas:e==null?void 0:e.maxFeePerGas}):n1.nodeMessage.test(n)?new n1({cause:t,nonce:e==null?void 0:e.nonce}):r1.nodeMessage.test(n)?new r1({cause:t,nonce:e==null?void 0:e.nonce}):i1.nodeMessage.test(n)?new i1({cause:t,nonce:e==null?void 0:e.nonce}):o1.nodeMessage.test(n)?new o1({cause:t}):s1.nodeMessage.test(n)?new s1({cause:t,gas:e==null?void 0:e.gas}):a1.nodeMessage.test(n)?new a1({cause:t,gas:e==null?void 0:e.gas}):l1.nodeMessage.test(n)?new l1({cause:t}):Zd.nodeMessage.test(n)?new Zd({cause:t,maxFeePerGas:e==null?void 0:e.maxFeePerGas,maxPriorityFeePerGas:e==null?void 0:e.maxPriorityFeePerGas}):new th({cause:t})}function RC(t,{docsPath:e,...n}){const r=(()=>{const i=mg(t,n);return i instanceof th?t:i})();return new DC(r,{docsPath:e,...n})}function gg(t,{format:e}){if(!e)return{};const n={};function r(o){const s=Object.keys(o);for(const a of s)a in t&&(n[a]=t[a]),o[a]&&typeof o[a]=="object"&&!Array.isArray(o[a])&&r(o[a])}const i=e(t||{});return r(i),n}function su(t){const{account:e,gasPrice:n,maxFeePerGas:r,maxPriorityFeePerGas:i,to:o}=t,s=e?Zn(e):void 0;if(s&&!Ki(s.address))throw new tc({address:s.address});if(o&&!Ki(o))throw new tc({address:o});if(typeof n<"u"&&(typeof r<"u"||typeof i<"u"))throw new CC;if(r&&r>2n**256n-1n)throw new qd({maxFeePerGas:r});if(i&&r&&i>r)throw new Zd({maxFeePerGas:r,maxPriorityFeePerGas:i})}class NC extends Q{constructor(){super("`baseFeeMultiplier` must be greater than 1."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BaseFeeScalarError"})}}class wg extends Q{constructor(){super("Chain does not support EIP-1559 fees."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Eip1559FeesNotSupportedError"})}}class MC extends Q{constructor({maxPriorityFeePerGas:e}){super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${gn(e)} gwei).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MaxFeePerGasTooLowError"})}}class w5 extends Q{constructor({blockHash:e,blockNumber:n}){let r="Block";e&&(r=`Block at hash "${e}"`),n&&(r=`Block at number "${n}"`),super(`${r} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BlockNotFoundError"})}}async function Yi(t,{blockHash:e,blockNumber:n,blockTag:r,includeTransactions:i}={}){var u,d,p;const o=r??"latest",s=i??!1,a=n!==void 0?Se(n):void 0;let l=null;if(e?l=await t.request({method:"eth_getBlockByHash",params:[e,s]}):l=await t.request({method:"eth_getBlockByNumber",params:[a||o,s]}),!l)throw new w5({blockHash:e,blockNumber:n});return(((p=(d=(u=t.chain)==null?void 0:u.formatters)==null?void 0:d.block)==null?void 0:p.format)||ng)(l)}async function yg(t){const e=await t.request({method:"eth_gasPrice"});return BigInt(e)}async function LC(t,e){return y5(t,e)}async function y5(t,e){var o,s,a;const{block:n,chain:r=t.chain,request:i}=e||{};if(typeof((o=r==null?void 0:r.fees)==null?void 0:o.defaultPriorityFee)=="function"){const l=n||await ge(t,Yi,"getBlock")({});return r.fees.defaultPriorityFee({block:l,client:t,request:i})}if(typeof((s=r==null?void 0:r.fees)==null?void 0:s.defaultPriorityFee)<"u")return(a=r==null?void 0:r.fees)==null?void 0:a.defaultPriorityFee;try{const l=await t.request({method:"eth_maxPriorityFeePerGas"});return Kr(l)}catch{const[l,c]=await Promise.all([n?Promise.resolve(n):ge(t,Yi,"getBlock")({}),ge(t,yg,"getGasPrice")({})]);if(typeof l.baseFeePerGas!="bigint")throw new wg;const u=c-l.baseFeePerGas;return u<0n?0n:u}}async function UC(t,e){return h1(t,e)}async function h1(t,e){var p,w;const{block:n,chain:r=t.chain,request:i,type:o="eip1559"}=e||{},s=await(async()=>{var y,E;return typeof((y=r==null?void 0:r.fees)==null?void 0:y.baseFeeMultiplier)=="function"?r.fees.baseFeeMultiplier({block:n,client:t,request:i}):((E=r==null?void 0:r.fees)==null?void 0:E.baseFeeMultiplier)??1.2})();if(s<1)throw new NC;const l=10**(((p=s.toString().split(".")[1])==null?void 0:p.length)??0),c=y=>y*BigInt(Math.ceil(s*l))/BigInt(l),u=n||await ge(t,Yi,"getBlock")({});if(typeof((w=r==null?void 0:r.fees)==null?void 0:w.estimateFeesPerGas)=="function")return r.fees.estimateFeesPerGas({block:n,client:t,multiply:c,request:i,type:o});if(o==="eip1559"){if(typeof u.baseFeePerGas!="bigint")throw new wg;const y=i!=null&&i.maxPriorityFeePerGas?i.maxPriorityFeePerGas:await y5(t,{block:u,chain:r,request:i}),E=c(u.baseFeePerGas);return{maxFeePerGas:(i==null?void 0:i.maxFeePerGas)??E+y,maxPriorityFeePerGas:y}}return{gasPrice:(i==null?void 0:i.gasPrice)??c(await ge(t,yg,"getGasPrice")({}))}}async function v5(t,{address:e,blockTag:n="latest",blockNumber:r}){const i=await t.request({method:"eth_getTransactionCount",params:[e,r?Se(r):n]});return Ht(i)}function jC(t){if(t.type)return t.type;if(typeof t.maxFeePerGas<"u"||typeof t.maxPriorityFeePerGas<"u")return"eip1559";if(typeof t.gasPrice<"u")return typeof t.accessList<"u"?"eip2930":"legacy";throw new SC({transaction:t})}async function ah(t,e){const{account:n=t.account,chain:r,gas:i,nonce:o,type:s}=e;if(!n)throw new Wa;const a=Zn(n),l=await ge(t,Yi,"getBlock")({blockTag:"latest"}),c={...e,from:a.address};if(typeof o>"u"&&(c.nonce=await ge(t,v5,"getTransactionCount")({address:a.address,blockTag:"pending"})),typeof s>"u")try{c.type=jC(c)}catch{c.type=typeof l.baseFeePerGas=="bigint"?"eip1559":"legacy"}if(c.type==="eip1559"){const{maxFeePerGas:u,maxPriorityFeePerGas:d}=await h1(t,{block:l,chain:r,request:c});if(typeof e.maxPriorityFeePerGas>"u"&&e.maxFeePerGas&&e.maxFeePerGas<d)throw new MC({maxPriorityFeePerGas:d});c.maxPriorityFeePerGas=d,c.maxFeePerGas=u}else{if(typeof e.maxFeePerGas<"u"||typeof e.maxPriorityFeePerGas<"u")throw new wg;const{gasPrice:u}=await h1(t,{block:l,chain:r,request:c,type:"legacy"});c.gasPrice=u}return typeof i>"u"&&(c.gas=await ge(t,vg,"estimateGas")({...c,account:{address:a.address,type:"json-rpc"}})),su(c),c}async function vg(t,e){var i,o,s;const n=e.account??t.account;if(!n)throw new Wa({docsPath:"/docs/actions/public/estimateGas"});const r=Zn(n);try{const{accessList:a,blockNumber:l,blockTag:c,data:u,gas:d,gasPrice:p,maxFeePerGas:w,maxPriorityFeePerGas:y,nonce:E,to:C,value:b,...m}=r.type==="local"?await ah(t,e):e,x=(l?Se(l):void 0)||c;su(e);const _=(s=(o=(i=t.chain)==null?void 0:i.formatters)==null?void 0:o.transactionRequest)==null?void 0:s.format,f=(_||eh)({...gg(m,{format:_}),from:r.address,accessList:a,data:u,gas:d,gasPrice:p,maxFeePerGas:w,maxPriorityFeePerGas:y,nonce:E,to:C,value:b}),T=await t.request({method:"eth_estimateGas",params:x?[f,x]:[f]});return BigInt(T)}catch(a){throw RC(a,{...e,account:r,chain:t.chain})}}async function BC(t,{abi:e,address:n,args:r,functionName:i,...o}){const s=co({abi:e,args:r,functionName:i});try{return await ge(t,vg,"estimateGas")({data:s,to:n,...o})}catch(a){const l=o.account?Zn(o.account):void 0;throw mc(a,{abi:e,address:n,args:r,docsPath:"/docs/contract/estimateContractGas",functionName:i,sender:l==null?void 0:l.address})}}const Wy="/docs/contract/decodeEventLog";function au({abi:t,data:e,strict:n,topics:r}){const i=n??!0,[o,...s]=r;if(!o)throw new b_({docsPath:Wy});const a=t.find(y=>y.type==="event"&&o===sg(ai(y)));if(!(a&&"name"in a)||a.type!=="event")throw new x_(o,{docsPath:Wy});const{name:l,inputs:c}=a,u=c==null?void 0:c.some(y=>!("name"in y&&y.name));let d=u?[]:{};const p=c.filter(y=>"indexed"in y&&y.indexed);for(let y=0;y<p.length;y++){const E=p[y],C=s[y];if(!C)throw new Ba({abiItem:a,param:E});d[E.name||y]=FC({param:E,value:C})}const w=c.filter(y=>!("indexed"in y&&y.indexed));if(w.length>0){if(e&&e!=="0x")try{const y=sh(w,e);if(y)if(u)d=[...d,...y];else for(let E=0;E<w.length;E++)d[w[E].name]=y[E]}catch(y){if(i)throw y instanceof ig?new qo({abiItem:a,data:y.data,params:y.params,size:y.size}):y}else if(i)throw new qo({abiItem:a,data:"0x",params:w,size:0})}return{eventName:l,args:Object.values(d).length>0?d:void 0}}function FC({param:t,value:e}){return t.type==="string"||t.type==="bytes"||t.type==="tuple"||t.type.match(/^(.*)\[(\d+)?\]$/)?e:(sh([t],e)||[])[0]}async function bg(t,{address:e,blockHash:n,fromBlock:r,toBlock:i,event:o,events:s,args:a,strict:l}={}){const c=l??!1,u=s??(o?[o]:void 0);let d=[];u&&(d=[u.flatMap(w=>iu({abi:[w],eventName:w.name,args:a}))],o&&(d=d[0]));let p;return n?p=await t.request({method:"eth_getLogs",params:[{address:e,topics:d,blockHash:n}]}):p=await t.request({method:"eth_getLogs",params:[{address:e,topics:d,fromBlock:typeof r=="bigint"?Se(r):r,toBlock:typeof i=="bigint"?Se(i):i}]}),p.map(w=>{var y;try{const{eventName:E,args:C}=u?au({abi:u,data:w.data,topics:w.topics,strict:c}):{eventName:void 0,args:void 0};return ur(w,{args:C,eventName:E})}catch(E){let C,b;if(E instanceof qo||E instanceof Ba){if(c)return;C=E.abiItem.name,b=(y=E.abiItem.inputs)==null?void 0:y.some(m=>!("name"in m&&m.name))}return ur(w,{args:b?[]:{},eventName:C})}}).filter(Boolean)}async function b5(t,{abi:e,address:n,args:r,blockHash:i,eventName:o,fromBlock:s,toBlock:a,strict:l}){const c=o?ru({abi:e,name:o}):void 0,u=c?void 0:e.filter(d=>d.type==="event");return ge(t,bg,"getLogs")({address:n,args:r,blockHash:i,event:c,events:u,fromBlock:s,toBlock:a,strict:l})}const S0="/docs/contract/decodeFunctionResult";function za({abi:t,args:e,functionName:n,data:r}){let i=t[0];if(n&&(i=ru({abi:t,args:e,name:n}),!i))throw new Gd(n,{docsPath:S0});if(i.type!=="function")throw new Gd(void 0,{docsPath:S0});if(!i.outputs)throw new E_(i.name,{docsPath:S0});const o=sh(i.outputs,r);if(o&&o.length>1)return o;if(o&&o.length===1)return o[0]}const WC="modulepreload",zC=function(t){return"/"+t},zy={},ha=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){const o=document.getElementsByTagName("link");i=Promise.all(n.map(s=>{if(s=zC(s),s in zy)return;zy[s]=!0;const a=s.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(!!r)for(let d=o.length-1;d>=0;d--){const p=o[d];if(p.href===s&&(!a||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${l}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":WC,a||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),a)return new Promise((d,p)=>{u.addEventListener("load",d),u.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${s}`)))})}))}return i.then(()=>e()).catch(o=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=o,window.dispatchEvent(s),!s.defaultPrevented)throw o})},p1=[{inputs:[{components:[{name:"target",type:"address"},{name:"allowFailure",type:"bool"},{name:"callData",type:"bytes"}],name:"calls",type:"tuple[]"}],name:"aggregate3",outputs:[{components:[{name:"success",type:"bool"},{name:"returnData",type:"bytes"}],name:"returnData",type:"tuple[]"}],stateMutability:"view",type:"function"}],x5=[{inputs:[],name:"ResolverNotFound",type:"error"},{inputs:[],name:"ResolverWildcardNotSupported",type:"error"}],E5=[...x5,{name:"resolve",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes"},{name:"data",type:"bytes"}],outputs:[{name:"",type:"bytes"},{name:"address",type:"address"}]}],HC=[...x5,{name:"reverse",type:"function",stateMutability:"view",inputs:[{type:"bytes",name:"reverseName"}],outputs:[{type:"string",name:"resolvedName"},{type:"address",name:"resolvedAddress"},{type:"address",name:"reverseResolver"},{type:"address",name:"resolver"}]}],Hy=[{name:"text",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"key",type:"string"}],outputs:[{name:"",type:"string"}]}],Vy=[{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"}],outputs:[{name:"",type:"address"}]},{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"coinType",type:"uint256"}],outputs:[{name:"",type:"bytes"}]}],VC=[{inputs:[{internalType:"address",name:"_signer",type:"address"},{internalType:"bytes32",name:"_hash",type:"bytes32"},{internalType:"bytes",name:"_signature",type:"bytes"}],stateMutability:"nonpayable",type:"constructor"}],qC="0x82ad56cb";function Ha({blockNumber:t,chain:e,contract:n}){var i;const r=(i=e==null?void 0:e.contracts)==null?void 0:i[n];if(!r)throw new e1({chain:e,contract:{name:n}});if(t&&r.blockCreated&&r.blockCreated>t)throw new e1({blockNumber:t,chain:e,contract:{name:n,blockCreated:r.blockCreated}});return r.address}function ZC(t,{docsPath:e,...n}){const r=(()=>{const i=mg(t,n);return i instanceof th?t:i})();return new g5(r,{docsPath:e,...n})}const A0=new Map;function xg({fn:t,id:e,shouldSplitBatch:n,wait:r=0,sort:i}){const o=async()=>{const u=l();s();const d=u.map(({args:p})=>p);d.length!==0&&t(d).then(p=>{var w;i&&Array.isArray(p)&&p.sort(i);for(let y=0;y<u.length;y++){const{pendingPromise:E}=u[y];(w=E.resolve)==null||w.call(E,[p[y],p])}}).catch(p=>{var w;for(let y=0;y<u.length;y++){const{pendingPromise:E}=u[y];(w=E.reject)==null||w.call(E,p)}})},s=()=>A0.delete(e),a=()=>l().map(({args:u})=>u),l=()=>A0.get(e)||[],c=u=>A0.set(e,[...l(),u]);return{flush:s,async schedule(u){const d={},p=new Promise((E,C)=>{d.resolve=E,d.reject=C});return(n==null?void 0:n([...a(),u]))&&o(),l().length>0?(c({args:u,pendingPromise:d}),p):(c({args:u,pendingPromise:d}),setTimeout(o,r),p)}}}async function lh(t,e){var b,m,v,x;const{account:n=t.account,batch:r=!!((b=t.batch)!=null&&b.multicall),blockNumber:i,blockTag:o="latest",accessList:s,data:a,gas:l,gasPrice:c,maxFeePerGas:u,maxPriorityFeePerGas:d,nonce:p,to:w,value:y,...E}=e,C=n?Zn(n):void 0;try{su(e);const S=(i?Se(i):void 0)||o,f=(x=(v=(m=t.chain)==null?void 0:m.formatters)==null?void 0:v.transactionRequest)==null?void 0:x.format,O=(f||eh)({...gg(E,{format:f}),from:C==null?void 0:C.address,accessList:s,data:a,gas:l,gasPrice:c,maxFeePerGas:u,maxPriorityFeePerGas:d,nonce:p,to:w,value:y});if(r&&GC({request:O}))try{return await KC(t,{...O,blockNumber:i,blockTag:o})}catch(M){if(!(M instanceof e5)&&!(M instanceof e1))throw M}const D=await t.request({method:"eth_call",params:S?[O,S]:[O]});return D==="0x"?{data:void 0}:{data:D}}catch(_){const S=YC(_),{offchainLookup:f,offchainLookupSignature:T}=await ha(()=>import("./ccip-DuDArsjp.js"),__vite__mapDeps([]));if((S==null?void 0:S.slice(0,10))===T&&w)return{data:await f(t,{data:S,to:w})};throw ZC(_,{...e,account:C,chain:t.chain})}}function GC({request:t}){const{data:e,to:n,...r}=t;return!(!e||e.startsWith(qC)||!n||Object.values(r).filter(i=>typeof i<"u").length>0)}async function KC(t,e){var E;const{batchSize:n=1024,wait:r=0}=typeof((E=t.batch)==null?void 0:E.multicall)=="object"?t.batch.multicall:{},{blockNumber:i,blockTag:o="latest",data:s,multicallAddress:a,to:l}=e;let c=a;if(!c){if(!t.chain)throw new e5;c=Ha({blockNumber:i,chain:t.chain,contract:"multicall3"})}const d=(i?Se(i):void 0)||o,{schedule:p}=xg({id:`${t.uid}.${d}`,wait:r,shouldSplitBatch(C){return C.reduce((m,{data:v})=>m+(v.length-2),0)>n*2},fn:async C=>{const b=C.map(x=>({allowFailure:!0,callData:x.data,target:x.to})),m=co({abi:p1,args:[b],functionName:"aggregate3"}),v=await t.request({method:"eth_call",params:[{data:m,to:c},d]});return za({abi:p1,args:[b],functionName:"aggregate3",data:v||"0x"})}}),[{returnData:w,success:y}]=await p({data:s,to:l});if(!y)throw new hg({data:w});return w==="0x"?{data:void 0}:{data:w}}function YC(t){if(!(t instanceof Q))return;const e=t.walk();return typeof e.data=="object"?e.data.data:e.data}async function Qi(t,{abi:e,address:n,args:r,functionName:i,...o}){const s=co({abi:e,args:r,functionName:i});try{const{data:a}=await ge(t,lh,"call")({data:s,to:n,...o});return za({abi:e,args:r,functionName:i,data:a||"0x"})}catch(a){throw mc(a,{abi:e,address:n,args:r,docsPath:"/docs/contract/readContract",functionName:i})}}async function QC(t,{abi:e,address:n,args:r,dataSuffix:i,functionName:o,...s}){const a=s.account?Zn(s.account):void 0,l=co({abi:e,args:r,functionName:o});try{const{data:c}=await ge(t,lh,"call")({batch:!1,data:`${l}${i?i.replace("0x",""):""}`,to:n,...s});return{result:za({abi:e,args:r,functionName:o,data:c||"0x"}),request:{abi:e,address:n,args:r,dataSuffix:i,functionName:o,...s}}}catch(c){throw mc(c,{abi:e,address:n,args:r,docsPath:"/docs/contract/simulateContract",functionName:o,sender:a==null?void 0:a.address})}}const T0=new Map,qy=new Map;let JC=0;function Va(t,e,n){const r=++JC,i=()=>T0.get(t)||[],o=()=>{const u=i();T0.set(t,u.filter(d=>d.id!==r))},s=()=>{const u=qy.get(t);i().length===1&&u&&u(),o()},a=i();if(T0.set(t,[...a,{id:r,fns:e}]),a&&a.length>0)return s;const l={};for(const u in e)l[u]=(...d)=>{var w,y;const p=i();if(p.length!==0)for(const E of p)(y=(w=E.fns)[u])==null||y.call(w,...d)};const c=n(l);return typeof c=="function"&&qy.set(t,c),s}async function Yd(t){return new Promise(e=>setTimeout(e,t))}function lu(t,{emitOnBegin:e,initialWaitTime:n,interval:r}){let i=!0;const o=()=>i=!1;return(async()=>{let a;e&&(a=await t({unpoll:o}));const l=await(n==null?void 0:n(a))??r;await Yd(l);const c=async()=>{i&&(await t({unpoll:o}),await Yd(r),c())};c()})(),o}const XC=new Map,e7=new Map;function t7(t){const e=(i,o)=>({clear:()=>o.delete(i),get:()=>o.get(i),set:s=>o.set(i,s)}),n=e(t,XC),r=e(t,e7);return{clear:()=>{n.clear(),r.clear()},promise:n,response:r}}async function n7(t,{cacheKey:e,cacheTime:n=1/0}){const r=t7(e),i=r.response.get();if(i&&n>0&&new Date().getTime()-i.created.getTime()<n)return i.data;let o=r.promise.get();o||(o=t(),r.promise.set(o));try{const s=await o;return r.response.set({created:new Date,data:s}),s}finally{r.promise.clear()}}const r7=t=>`blockNumber.${t}`;async function cu(t,{cacheTime:e=t.cacheTime,maxAge:n}={}){const r=await n7(()=>t.request({method:"eth_blockNumber"}),{cacheKey:r7(t.uid),cacheTime:n??e});return BigInt(r)}async function ch(t,{filter:e}){const n="strict"in e&&e.strict;return(await e.request({method:"eth_getFilterChanges",params:[e.id]})).map(i=>{var o;if(typeof i=="string")return i;try{const{eventName:s,args:a}="abi"in e&&e.abi?au({abi:e.abi,data:i.data,topics:i.topics,strict:n}):{eventName:void 0,args:void 0};return ur(i,{args:a,eventName:s})}catch(s){let a,l;if(s instanceof qo||s instanceof Ba){if("strict"in e&&e.strict)return;a=s.abiItem.name,l=(o=s.abiItem.inputs)==null?void 0:o.some(c=>!("name"in c&&c.name))}return ur(i,{args:l?[]:{},eventName:a})}}).filter(Boolean)}async function uh(t,{filter:e}){return e.request({method:"eth_uninstallFilter",params:[e.id]})}function i7(t,{abi:e,address:n,args:r,batch:i=!0,eventName:o,onError:s,onLogs:a,poll:l,pollingInterval:c=t.pollingInterval,strict:u}){return(typeof l<"u"?l:t.transport.type!=="webSocket")?(()=>{const y=tn(["watchContractEvent",n,r,i,t.uid,o,c]),E=u??!1;return Va(y,{onLogs:a,onError:s},C=>{let b,m,v=!1;const x=lu(async()=>{var _;if(!v){try{m=await ge(t,d5,"createContractEventFilter")({abi:e,address:n,args:r,eventName:o,strict:E})}catch{}v=!0;return}try{let S;if(m)S=await ge(t,ch,"getFilterChanges")({filter:m});else{const f=await ge(t,cu,"getBlockNumber")({});b&&b!==f?S=await ge(t,b5,"getContractEvents")({abi:e,address:n,args:r,eventName:o,fromBlock:b+1n,toBlock:f,strict:E}):S=[],b=f}if(S.length===0)return;if(i)C.onLogs(S);else for(const f of S)C.onLogs([f])}catch(S){m&&S instanceof Zo&&(v=!1),(_=C.onError)==null||_.call(C,S)}},{emitOnBegin:!0,interval:c});return async()=>{m&&await ge(t,uh,"uninstallFilter")({filter:m}),x()}})})():(()=>{let y=!0,E=()=>y=!1;return(async()=>{try{const C=o?iu({abi:e,eventName:o,args:r}):[],{unsubscribe:b}=await t.transport.subscribe({params:["logs",{address:n,topics:C}],onData(m){var x;if(!y)return;const v=m.result;try{const{eventName:_,args:S}=au({abi:e,data:v.data,topics:v.topics,strict:u}),f=ur(v,{args:S,eventName:_});a([f])}catch(_){let S,f;if(_ instanceof qo||_ instanceof Ba){if(u)return;S=_.abiItem.name,f=(x=_.abiItem.inputs)==null?void 0:x.some(O=>!("name"in O&&O.name))}const T=ur(v,{args:f?[]:{},eventName:S});a([T])}},onError(m){s==null||s(m)}});E=b,y||E()}catch(C){s==null||s(C)}})(),E})()}function _5({chain:t,currentChainId:e}){if(!t)throw new a_;if(e!==t.id)throw new s_({chain:t,currentChainId:e})}function o7(t,{docsPath:e,...n}){const r=(()=>{const i=mg(t,n);return i instanceof th?t:i})();return new AC(r,{docsPath:e,...n})}async function gc(t){const e=await t.request({method:"eth_chainId"});return Ht(e)}async function Eg(t,{serializedTransaction:e}){return t.request({method:"eth_sendRawTransaction",params:[e]})}async function _g(t,e){var E,C,b,m;const{account:n=t.account,chain:r=t.chain,accessList:i,data:o,gas:s,gasPrice:a,maxFeePerGas:l,maxPriorityFeePerGas:c,nonce:u,to:d,value:p,...w}=e;if(!n)throw new Wa({docsPath:"/docs/actions/wallet/sendTransaction"});const y=Zn(n);try{su(e);let v;if(r!==null&&(v=await ge(t,gc,"getChainId")({}),_5({currentChainId:v,chain:r})),y.type==="local"){const f=await ge(t,ah,"prepareTransactionRequest")({account:y,accessList:i,chain:r,data:o,gas:s,gasPrice:a,maxFeePerGas:l,maxPriorityFeePerGas:c,nonce:u,to:d,value:p,...w});v||(v=await ge(t,gc,"getChainId")({}));const T=(E=r==null?void 0:r.serializers)==null?void 0:E.transaction,O=await y.signTransaction({...f,chainId:v},{serializer:T});return await ge(t,Eg,"sendRawTransaction")({serializedTransaction:O})}const x=(m=(b=(C=t.chain)==null?void 0:C.formatters)==null?void 0:b.transactionRequest)==null?void 0:m.format,S=(x||eh)({...gg(w,{format:x}),accessList:i,data:o,from:y.address,gas:s,gasPrice:a,maxFeePerGas:l,maxPriorityFeePerGas:c,nonce:u,to:d,value:p});return await t.request({method:"eth_sendTransaction",params:[S]})}catch(v){throw o7(v,{...e,account:y,chain:e.chain||void 0})}}async function s7(t,{abi:e,address:n,args:r,dataSuffix:i,functionName:o,...s}){const a=co({abi:e,args:r,functionName:o});return await ge(t,_g,"sendTransaction")({data:`${a}${i?i.replace("0x",""):""}`,to:n,...s})}async function a7(t,{chain:e}){const{id:n,name:r,nativeCurrency:i,rpcUrls:o,blockExplorers:s}=e;await t.request({method:"wallet_addEthereumChain",params:[{chainId:Se(n),chainName:r,nativeCurrency:i,rpcUrls:o.default.http,blockExplorerUrls:s?Object.values(s).map(({url:a})=>a):void 0}]})}const m1=256;let Vu=m1,qu;function l7(t=11){if(!qu||Vu+t>m1*2){qu="",Vu=0;for(let e=0;e<m1;e++)qu+=(256+Math.random()*256|0).toString(16).substring(1)}return qu.substring(Vu,Vu+++t)}function C5(t){const{batch:e,cacheTime:n=t.pollingInterval??4e3,key:r="base",name:i="Base Client",pollingInterval:o=4e3,type:s="base"}=t,a=t.chain,l=t.account?Zn(t.account):void 0,{config:c,request:u,value:d}=t.transport({chain:a,pollingInterval:o}),p={...c,...d},w={account:l,batch:e,cacheTime:n,chain:a,key:r,name:i,pollingInterval:o,request:u,transport:p,type:s,uid:l7()};function y(E){return C=>{const b=C(E);for(const v in w)delete b[v];const m={...E,...b};return Object.assign(m,{extend:y(m)})}}return Object.assign(w,{extend:y(w)})}function g1(t,{delay:e=100,retryCount:n=2,shouldRetry:r=()=>!0}={}){return new Promise((i,o)=>{const s=async({count:a=0}={})=>{const l=async({error:c})=>{const u=typeof e=="function"?e({count:a,error:c}):e;u&&await Yd(u),s({count:a+1})};try{const c=await t();i(c)}catch(c){if(a<n&&await r({count:a,error:c}))return l({error:c});o(c)}};s()})}const S5=t=>"code"in t?t.code!==-1&&t.code!==-32004&&t.code!==-32005&&t.code!==-32042&&t.code!==-32603:t instanceof Il&&t.status?t.status!==403&&t.status!==408&&t.status!==413&&t.status!==429&&t.status!==500&&t.status!==502&&t.status!==503&&t.status!==504:!1;function c7(t,{retryDelay:e=150,retryCount:n=3}={}){return async r=>g1(async()=>{try{return await t(r)}catch(i){const o=i;switch(o.code){case nc.code:throw new nc(o);case rc.code:throw new rc(o);case ic.code:throw new ic(o);case oc.code:throw new oc(o);case da.code:throw new da(o);case Zo.code:throw new Zo(o);case sc.code:throw new sc(o);case fa.code:throw new fa(o);case ac.code:throw new ac(o);case lc.code:throw new lc(o);case cc.code:throw new cc(o);case uc.code:throw new uc(o);case fn.code:throw new fn(o);case dc.code:throw new dc(o);case fc.code:throw new fc(o);case hc.code:throw new hc(o);case pc.code:throw new pc(o);case dr.code:throw new dr(o);case 5e3:throw new fn(o);default:throw i instanceof Q?i:new kC(o)}}},{delay:({count:i,error:o})=>{var s;if(o&&o instanceof Il){const a=(s=o==null?void 0:o.headers)==null?void 0:s.get("Retry-After");if(a!=null&&a.match(/\d/))return parseInt(a)*1e3}return~~(1<<i)*e},retryCount:n,shouldRetry:({error:i})=>!S5(i)})}function dh({key:t,name:e,request:n,retryCount:r=3,retryDelay:i=150,timeout:o,type:s},a){return{config:{key:t,name:e,request:n,retryCount:r,retryDelay:i,timeout:o,type:s},request:c7(n,{retryCount:r,retryDelay:i}),value:a}}function fh(t,e={}){const{key:n="custom",name:r="Custom Provider",retryDelay:i}=e;return({retryCount:o})=>dh({key:n,name:r,request:t.request.bind(t),retryCount:e.retryCount??o,retryDelay:i,type:"custom"})}function Zy(t,e={}){const{key:n="fallback",name:r="Fallback",rank:i=!1,retryCount:o,retryDelay:s}=e;return({chain:a,pollingInterval:l=4e3,timeout:c})=>{let u=t,d=()=>{};const p=dh({key:n,name:r,async request({method:w,params:y}){const E=async(C=0)=>{const b=u[C]({chain:a,retryCount:0,timeout:c});try{const m=await b.request({method:w,params:y});return d({method:w,params:y,response:m,transport:b,status:"success"}),m}catch(m){if(d({error:m,method:w,params:y,transport:b,status:"error"}),S5(m)||C===u.length-1)throw m;return E(C+1)}};return E()},retryCount:o,retryDelay:s,type:"fallback"},{onResponse:w=>d=w,transports:u.map(w=>w({chain:a,retryCount:0}))});if(i){const w=typeof i=="object"?i:{};u7({chain:a,interval:w.interval??l,onTransports:y=>u=y,sampleCount:w.sampleCount,timeout:w.timeout,transports:u,weights:w.weights})}return p}}function u7({chain:t,interval:e=4e3,onTransports:n,sampleCount:r=10,timeout:i=1e3,transports:o,weights:s={}}){const{stability:a=.7,latency:l=.3}=s,c=[],u=async()=>{const d=await Promise.all(o.map(async y=>{const E=y({chain:t,retryCount:0,timeout:i}),C=Date.now();let b,m;try{await E.request({method:"net_listening"}),m=1}catch{m=0}finally{b=Date.now()}return{latency:b-C,success:m}}));c.push(d),c.length>r&&c.shift();const p=Math.max(...c.map(y=>Math.max(...y.map(({latency:E})=>E)))),w=o.map((y,E)=>{const C=c.map(_=>_[E].latency),m=1-C.reduce((_,S)=>_+S,0)/C.length/p,v=c.map(_=>_[E].success),x=v.reduce((_,S)=>_+S,0)/v.length;return x===0?[0,E]:[l*m+a*x,E]}).sort((y,E)=>E[0]-y[0]);n(w.map(([,y])=>o[y])),await Yd(e),u()};u()}class A5 extends Q{constructor(){super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",{docsPath:"/docs/clients/intro"})}}function d7(){if(typeof WebSocket<"u")return WebSocket;if(typeof global.WebSocket<"u")return global.WebSocket;if(typeof window.WebSocket<"u")return window.WebSocket;if(typeof self.WebSocket<"u")return self.WebSocket;throw new Error("`WebSocket` is not supported in this environment")}const Gy=d7();function T5(t,{errorInstance:e=new Error("timed out"),timeout:n,signal:r}){return new Promise((i,o)=>{(async()=>{let s;try{const a=new AbortController;n>0&&(s=setTimeout(()=>{r?a.abort():o(e)},n)),i(await t({signal:a==null?void 0:a.signal}))}catch(a){a.name==="AbortError"&&o(e),o(a)}finally{clearTimeout(s)}})()})}let w1=0;async function f7(t,{body:e,fetchOptions:n={},timeout:r=1e4}){var a;const{headers:i,method:o,signal:s}=n;try{const l=await T5(async({signal:u})=>await fetch(t,{...n,body:Array.isArray(e)?tn(e.map(p=>({jsonrpc:"2.0",id:p.id??w1++,...p}))):tn({jsonrpc:"2.0",id:e.id??w1++,...e}),headers:{...i,"Content-Type":"application/json"},method:o||"POST",signal:s||(r>0?u:void 0)}),{errorInstance:new f1({body:e,url:t}),timeout:r,signal:!0});let c;if((a=l.headers.get("Content-Type"))!=null&&a.startsWith("application/json")?c=await l.json():c=await l.text(),!l.ok)throw new Il({body:e,details:tn(c.error)||l.statusText,headers:l.headers,status:l.status,url:t});return c}catch(l){throw l instanceof Il||l instanceof f1?l:new Il({body:e,details:l.message,url:t})}}const P0=new Map;async function $0(t){let e=P0.get(t);if(e)return e;const{schedule:n}=xg({id:t,fn:async()=>{const o=new Gy(t),s=new Map,a=new Map,l=({data:u})=>{const d=JSON.parse(u),p=d.method==="eth_subscription",w=p?d.params.subscription:d.id,y=p?a:s,E=y.get(w);E&&E({data:u}),p||y.delete(w)},c=()=>{P0.delete(t),o.removeEventListener("close",c),o.removeEventListener("message",l)};return o.addEventListener("close",c),o.addEventListener("message",l),o.readyState===Gy.CONNECTING&&await new Promise((u,d)=>{o&&(o.onopen=u,o.onerror=d)}),e=Object.assign(o,{requests:s,subscriptions:a}),P0.set(t,e),[e]}}),[r,[i]]=await n();return i}function h7(t,{body:e,onResponse:n}){if(t.readyState===t.CLOSED||t.readyState===t.CLOSING)throw new $C({body:e,url:t.url,details:"Socket is closed."});const r=w1++,i=({data:o})=>{var a;const s=JSON.parse(o);typeof s.id=="number"&&r!==s.id||(n==null||n(s),e.method==="eth_subscribe"&&typeof s.result=="string"&&t.subscriptions.set(s.result,i),e.method==="eth_unsubscribe"&&t.subscriptions.delete((a=e.params)==null?void 0:a[0]))};return t.requests.set(r,i),t.send(JSON.stringify({jsonrpc:"2.0",...e,id:r})),t}async function p7(t,{body:e,timeout:n=1e4}){return T5(()=>new Promise(r=>Xs.webSocket(t,{body:e,onResponse:r})),{errorInstance:new f1({body:e,url:t.url}),timeout:n})}const Xs={http:f7,webSocket:h7,webSocketAsync:p7};function m7(t,e={}){const{batch:n,fetchOptions:r,key:i="http",name:o="HTTP JSON-RPC",retryDelay:s}=e;return({chain:a,retryCount:l,timeout:c})=>{const{batchSize:u=1e3,wait:d=0}=typeof n=="object"?n:{},p=e.retryCount??l,w=c??e.timeout??1e4,y=t||(a==null?void 0:a.rpcUrls.default.http[0]);if(!y)throw new A5;return dh({key:i,name:o,async request({method:E,params:C}){const b={method:E,params:C},{schedule:m}=xg({id:`${t}`,wait:d,shouldSplitBatch(S){return S.length>u},fn:S=>Xs.http(y,{body:S,fetchOptions:r,timeout:w}),sort:(S,f)=>S.id-f.id}),v=async S=>n?m(S):[await Xs.http(y,{body:S,fetchOptions:r,timeout:w})],[{error:x,result:_}]=await v(b);if(x)throw new pg({body:b,error:x,url:y});return _},retryCount:p,retryDelay:s,timeout:w,type:"http"},{fetchOptions:r,url:t})}}function Cg(t,e){var r,i,o;if(!(t instanceof Q))return!1;const n=t.walk(s=>s instanceof d1);return n instanceof d1?!!(((r=n.data)==null?void 0:r.errorName)==="ResolverNotFound"||((i=n.data)==null?void 0:i.errorName)==="ResolverWildcardNotSupported"||(o=n.reason)!=null&&o.includes("Wildcard on non-extended resolvers is not supported")||e==="reverse"&&n.reason===f5[50]):!1}function P5(t){if(t.length!==66||t.indexOf("[")!==0||t.indexOf("]")!==65)return null;const e=`0x${t.slice(1,65)}`;return Or(e)?e:null}function pd(t){let e=new Uint8Array(32).fill(0);if(!t)return ec(e);const n=t.split(".");for(let r=n.length-1;r>=0;r-=1){const i=P5(n[r]),o=i?Gi(i):Jt(ei(n[r]),"bytes");e=Jt(si([e,o]),"bytes")}return ec(e)}function g7(t){return`[${t.slice(2)}]`}function w7(t){const e=new Uint8Array(32).fill(0);return t?P5(t)||Jt(ei(t)):ec(e)}function hh(t){const e=t.replace(/^\.|\.$/gm,"");if(e.length===0)return new Uint8Array(1);const n=new Uint8Array(ei(e).byteLength+2);let r=0;const i=e.split(".");for(let o=0;o<i.length;o++){let s=ei(i[o]);s.byteLength>255&&(s=ei(g7(w7(i[o])))),n[r]=s.length,n.set(s,r+1),r+=s.length+1}return n.byteLength!==r+1?n.slice(0,r+1):n}async function y7(t,{blockNumber:e,blockTag:n,coinType:r,name:i,universalResolverAddress:o}){let s=o;if(!s){if(!t.chain)throw new Error("client chain not configured. universalResolverAddress is required.");s=Ha({blockNumber:e,chain:t.chain,contract:"ensUniversalResolver"})}try{const a=co({abi:Vy,functionName:"addr",...r!=null?{args:[pd(i),BigInt(r)]}:{args:[pd(i)]}}),l=await ge(t,Qi,"readContract")({address:s,abi:E5,functionName:"resolve",args:[fi(hh(i)),a],blockNumber:e,blockTag:n});if(l[0]==="0x")return null;const c=za({abi:Vy,args:r!=null?[pd(i),BigInt(r)]:void 0,functionName:"addr",data:l[0]});return c==="0x"||Lo(c)==="0x00"?null:c}catch(a){if(Cg(a,"resolve"))return null;throw a}}class v7 extends Q{constructor({data:e}){super("Unable to extract image from metadata. The metadata may be malformed or invalid.",{metaMessages:["- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.","",`Provided data: ${JSON.stringify(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidMetadataError"})}}class ll extends Q{constructor({reason:e}){super(`ENS NFT avatar URI is invalid. ${e}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidNftUriError"})}}class Sg extends Q{constructor({uri:e}){super(`Unable to resolve ENS avatar URI "${e}". The URI may be malformed, invalid, or does not respond with a valid image.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUriResolutionError"})}}class b7 extends Q{constructor({namespace:e}){super(`ENS NFT avatar namespace "${e}" is not supported. Must be "erc721" or "erc1155".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUnsupportedNamespaceError"})}}const x7=/(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,E7=/^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,_7=/^data:([a-zA-Z\-/+]*);base64,([^"].*)/,C7=/^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;async function S7(t){try{const e=await fetch(t,{method:"HEAD"});if(e.status===200){const n=e.headers.get("content-type");return n==null?void 0:n.startsWith("image/")}return!1}catch(e){return typeof e=="object"&&typeof e.response<"u"||!globalThis.hasOwnProperty("Image")?!1:new Promise(n=>{const r=new Image;r.onload=()=>{n(!0)},r.onerror=()=>{n(!1)},r.src=t})}}function Ky(t,e){return t?t.endsWith("/")?t.slice(0,-1):t:e}function $5({uri:t,gatewayUrls:e}){const n=_7.test(t);if(n)return{uri:t,isOnChain:!0,isEncoded:n};const r=Ky(e==null?void 0:e.ipfs,"https://ipfs.io"),i=Ky(e==null?void 0:e.arweave,"https://arweave.net"),o=t.match(x7),{protocol:s,subpath:a,target:l,subtarget:c=""}=(o==null?void 0:o.groups)||{},u=s==="ipns:/"||a==="ipns/",d=s==="ipfs:/"||a==="ipfs/"||E7.test(t);if(t.startsWith("http")&&!u&&!d){let w=t;return e!=null&&e.arweave&&(w=t.replace(/https:\/\/arweave.net/g,e==null?void 0:e.arweave)),{uri:w,isOnChain:!1,isEncoded:!1}}if((u||d)&&l)return{uri:`${r}/${u?"ipns":"ipfs"}/${l}${c}`,isOnChain:!1,isEncoded:!1};if(s==="ar:/"&&l)return{uri:`${i}/${l}${c||""}`,isOnChain:!1,isEncoded:!1};let p=t.replace(C7,"");if(p.startsWith("<svg")&&(p=`data:image/svg+xml;base64,${btoa(p)}`),p.startsWith("data:")||p.startsWith("{"))return{uri:p,isOnChain:!0,isEncoded:!1};throw new Sg({uri:t})}function I5(t){if(typeof t!="object"||!("image"in t)&&!("image_url"in t)&&!("image_data"in t))throw new v7({data:t});return t.image||t.image_url||t.image_data}async function A7({gatewayUrls:t,uri:e}){try{const n=await fetch(e).then(i=>i.json());return await Ag({gatewayUrls:t,uri:I5(n)})}catch{throw new Sg({uri:e})}}async function Ag({gatewayUrls:t,uri:e}){const{uri:n,isOnChain:r}=$5({uri:e,gatewayUrls:t});if(r||await S7(n))return n;throw new Sg({uri:e})}function T7(t){let e=t;e.startsWith("did:nft:")&&(e=e.replace("did:nft:","").replace(/_/g,"/"));const[n,r,i]=e.split("/"),[o,s]=n.split(":"),[a,l]=r.split(":");if(!o||o.toLowerCase()!=="eip155")throw new ll({reason:"Only EIP-155 supported"});if(!s)throw new ll({reason:"Chain ID not found"});if(!l)throw new ll({reason:"Contract address not found"});if(!i)throw new ll({reason:"Token ID not found"});if(!a)throw new ll({reason:"ERC namespace not found"});return{chainID:parseInt(s),namespace:a.toLowerCase(),contractAddress:l,tokenID:i}}async function P7(t,{nft:e}){if(e.namespace==="erc721")return Qi(t,{address:e.contractAddress,abi:[{name:"tokenURI",type:"function",stateMutability:"view",inputs:[{name:"tokenId",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"tokenURI",args:[BigInt(e.tokenID)]});if(e.namespace==="erc1155")return Qi(t,{address:e.contractAddress,abi:[{name:"uri",type:"function",stateMutability:"view",inputs:[{name:"_id",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"uri",args:[BigInt(e.tokenID)]});throw new b7({namespace:e.namespace})}async function $7(t,{gatewayUrls:e,record:n}){return/eip155:/i.test(n)?I7(t,{gatewayUrls:e,record:n}):Ag({uri:n,gatewayUrls:e})}async function I7(t,{gatewayUrls:e,record:n}){const r=T7(n),i=await P7(t,{nft:r}),{uri:o,isOnChain:s,isEncoded:a}=$5({uri:i,gatewayUrls:e});if(s&&(o.includes("data:application/json;base64,")||o.startsWith("{"))){const c=a?atob(o.replace("data:application/json;base64,","")):o,u=JSON.parse(c);return Ag({uri:I5(u),gatewayUrls:e})}let l=r.tokenID;return r.namespace==="erc1155"&&(l=l.replace("0x","").padStart(64,"0")),A7({gatewayUrls:e,uri:o.replace(/(?:0x)?{id}/,l)})}async function k5(t,{blockNumber:e,blockTag:n,name:r,key:i,universalResolverAddress:o}){let s=o;if(!s){if(!t.chain)throw new Error("client chain not configured. universalResolverAddress is required.");s=Ha({blockNumber:e,chain:t.chain,contract:"ensUniversalResolver"})}try{const a=await ge(t,Qi,"readContract")({address:s,abi:E5,functionName:"resolve",args:[fi(hh(r)),co({abi:Hy,functionName:"text",args:[pd(r),i]})],blockNumber:e,blockTag:n});if(a[0]==="0x")return null;const l=za({abi:Hy,functionName:"text",data:a[0]});return l===""?null:l}catch(a){if(Cg(a,"resolve"))return null;throw a}}async function k7(t,{blockNumber:e,blockTag:n,gatewayUrls:r,name:i,universalResolverAddress:o}){const s=await ge(t,k5,"getEnsText")({blockNumber:e,blockTag:n,key:"avatar",name:i,universalResolverAddress:o});if(!s)return null;try{return await $7(t,{record:s,gatewayUrls:r})}catch{return null}}async function O7(t,{address:e,blockNumber:n,blockTag:r,universalResolverAddress:i}){let o=i;if(!o){if(!t.chain)throw new Error("client chain not configured. universalResolverAddress is required.");o=Ha({blockNumber:n,chain:t.chain,contract:"ensUniversalResolver"})}const s=`${e.toLowerCase().substring(2)}.addr.reverse`;try{const[a,l]=await ge(t,Qi,"readContract")({address:o,abi:HC,functionName:"reverse",args:[fi(hh(s))],blockNumber:n,blockTag:r});return e.toLowerCase()!==l.toLowerCase()?null:a}catch(a){if(Cg(a,"reverse"))return null;throw a}}async function D7(t,{blockNumber:e,blockTag:n,name:r,universalResolverAddress:i}){let o=i;if(!o){if(!t.chain)throw new Error("client chain not configured. universalResolverAddress is required.");o=Ha({blockNumber:e,chain:t.chain,contract:"ensUniversalResolver"})}const[s]=await ge(t,Qi,"readContract")({address:o,abi:[{inputs:[{type:"bytes"}],name:"findResolver",outputs:[{type:"address"},{type:"bytes32"}],stateMutability:"view",type:"function"}],functionName:"findResolver",args:[fi(hh(r))],blockNumber:e,blockTag:n});return s}async function R7(t){const e=oh(t,{method:"eth_newBlockFilter"}),n=await t.request({method:"eth_newBlockFilter"});return{id:n,request:e(n),type:"block"}}async function O5(t,{address:e,args:n,event:r,events:i,fromBlock:o,strict:s,toBlock:a}={}){const l=i??(r?[r]:void 0),c=oh(t,{method:"eth_newFilter"});let u=[];l&&(u=[l.flatMap(p=>iu({abi:[p],eventName:p.name,args:n}))],r&&(u=u[0]));const d=await t.request({method:"eth_newFilter",params:[{address:e,fromBlock:typeof o=="bigint"?Se(o):o,toBlock:typeof a=="bigint"?Se(a):a,...u.length?{topics:u}:{}}]});return{abi:l,args:n,eventName:r?r.name:void 0,fromBlock:o,id:d,request:c(d),strict:s,toBlock:a,type:"event"}}async function D5(t){const e=oh(t,{method:"eth_newPendingTransactionFilter"}),n=await t.request({method:"eth_newPendingTransactionFilter"});return{id:n,request:e(n),type:"transaction"}}async function N7(t,{address:e,blockNumber:n,blockTag:r="latest"}){const i=n?Se(n):void 0,o=await t.request({method:"eth_getBalance",params:[e,i||r]});return BigInt(o)}async function M7(t,{blockHash:e,blockNumber:n,blockTag:r="latest"}={}){const i=n!==void 0?Se(n):void 0;let o;return e?o=await t.request({method:"eth_getBlockTransactionCountByHash",params:[e]}):o=await t.request({method:"eth_getBlockTransactionCountByNumber",params:[i||r]}),Ht(o)}async function L7(t,{address:e,blockNumber:n,blockTag:r="latest"}){const i=n!==void 0?Se(n):void 0,o=await t.request({method:"eth_getCode",params:[e,i||r]});if(o!=="0x")return o}function U7(t){var e;return{baseFeePerGas:t.baseFeePerGas.map(n=>BigInt(n)),gasUsedRatio:t.gasUsedRatio,oldestBlock:BigInt(t.oldestBlock),reward:(e=t.reward)==null?void 0:e.map(n=>n.map(r=>BigInt(r)))}}async function j7(t,{blockCount:e,blockNumber:n,blockTag:r="latest",rewardPercentiles:i}){const o=n?Se(n):void 0,s=await t.request({method:"eth_feeHistory",params:[Se(e),o||r,i]});return U7(s)}async function B7(t,{filter:e}){const n=e.strict??!1;return(await e.request({method:"eth_getFilterLogs",params:[e.id]})).map(i=>{var o;try{const{eventName:s,args:a}="abi"in e&&e.abi?au({abi:e.abi,data:i.data,topics:i.topics,strict:n}):{eventName:void 0,args:void 0};return ur(i,{args:a,eventName:s})}catch(s){let a,l;if(s instanceof qo||s instanceof Ba){if("strict"in e&&e.strict)return;a=s.abiItem.name,l=(o=s.abiItem.inputs)==null?void 0:o.some(c=>!("name"in c&&c.name))}return ur(i,{args:l?[]:{},eventName:a})}}).filter(Boolean)}const F7=/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,W7=/^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;function z7({domain:t,message:e,primaryType:n,types:r}){const i=typeof t>"u"?{}:t,o={EIP712Domain:j5({domain:i}),...r};U5({domain:i,message:e,primaryType:n,types:o});const s=["0x1901"];return i&&s.push(H7({domain:i,types:o})),n!=="EIP712Domain"&&s.push(R5({data:e,primaryType:n,types:o})),Jt(si(s))}function H7({domain:t,types:e}){return R5({data:t,primaryType:"EIP712Domain",types:e})}function R5({data:t,primaryType:e,types:n}){const r=N5({data:t,primaryType:e,types:n});return Jt(r)}function N5({data:t,primaryType:e,types:n}){const r=[{type:"bytes32"}],i=[V7({primaryType:e,types:n})];for(const o of n[e]){const[s,a]=L5({types:n,name:o.name,type:o.type,value:t[o.name]});r.push(s),i.push(a)}return nu(r,i)}function V7({primaryType:t,types:e}){const n=fi(q7({primaryType:t,types:e}));return Jt(n)}function q7({primaryType:t,types:e}){let n="";const r=M5({primaryType:t,types:e});r.delete(t);const i=[t,...Array.from(r).sort()];for(const o of i)n+=`${o}(${e[o].map(({name:s,type:a})=>`${a} ${s}`).join(",")})`;return n}function M5({primaryType:t,types:e},n=new Set){const r=t.match(/^\w*/u),i=r==null?void 0:r[0];if(n.has(i)||e[i]===void 0)return n;n.add(i);for(const o of e[i])M5({primaryType:o.type,types:e},n);return n}function L5({types:t,name:e,type:n,value:r}){if(t[n]!==void 0)return[{type:"bytes32"},Jt(N5({data:r,primaryType:n,types:t}))];if(n==="bytes")return r=`0x${(r.length%2?"0":"")+r.slice(2)}`,[{type:"bytes32"},Jt(r)];if(n==="string")return[{type:"bytes32"},Jt(fi(r))];if(n.lastIndexOf("]")===n.length-1){const i=n.slice(0,n.lastIndexOf("[")),o=r.map(s=>L5({name:e,type:i,types:t,value:s}));return[{type:"bytes32"},Jt(nu(o.map(([s])=>s),o.map(([,s])=>s)))]}return[{type:n},r]}function U5({domain:t,message:e,primaryType:n,types:r}){const i=r,o=(s,a)=>{for(const l of s){const{name:c,type:u}=l,d=u,p=a[c],w=d.match(W7);if(w&&(typeof p=="number"||typeof p=="bigint")){const[C,b,m]=w;Se(p,{signed:b==="int",size:parseInt(m)/8})}if(d==="address"&&typeof p=="string"&&!Ki(p))throw new tc({address:p});const y=d.match(F7);if(y){const[C,b]=y;if(b&&Tt(p)!==parseInt(b))throw new C_({expectedSize:parseInt(b),givenSize:Tt(p)})}const E=i[d];E&&o(E,p)}};if(i.EIP712Domain&&t&&o(i.EIP712Domain,t),n!=="EIP712Domain"){const s=i[n];o(s,e)}}function j5({domain:t}){return[typeof(t==null?void 0:t.name)=="string"&&{name:"name",type:"string"},(t==null?void 0:t.version)&&{name:"version",type:"string"},typeof(t==null?void 0:t.chainId)=="number"&&{name:"chainId",type:"uint256"},(t==null?void 0:t.verifyingContract)&&{name:"verifyingContract",type:"address"},(t==null?void 0:t.salt)&&{name:"salt",type:"bytes32"}].filter(Boolean)}const I0="/docs/contract/encodeDeployData";function B5({abi:t,args:e,bytecode:n}){if(!e||e.length===0)return n;const r=t.find(o=>"type"in o&&o.type==="constructor");if(!r)throw new g_({docsPath:I0});if(!("inputs"in r))throw new Ry({docsPath:I0});if(!r.inputs||r.inputs.length===0)throw new Ry({docsPath:I0});const i=nu(r.inputs,e);return rg([n,i])}const Z7=`Ethereum Signed Message:
`;function G7(t,e){const n=typeof t=="string"?ei(t):t.raw instanceof Uint8Array?t.raw:Gi(t.raw),r=ei(`${Z7}${n.length}`);return Jt(si([r,n]),e)}function K7(t){return t.map(e=>({...e,value:BigInt(e.value)}))}function Y7(t){return{...t,balance:t.balance?BigInt(t.balance):void 0,nonce:t.nonce?Ht(t.nonce):void 0,storageProof:t.storageProof?K7(t.storageProof):void 0}}async function Q7(t,{address:e,blockNumber:n,blockTag:r,storageKeys:i}){const o=r??"latest",s=n!==void 0?Se(n):void 0,a=await t.request({method:"eth_getProof",params:[e,i,s||o]});return Y7(a)}async function J7(t,{address:e,blockNumber:n,blockTag:r="latest",slot:i}){const o=n!==void 0?Se(n):void 0;return await t.request({method:"eth_getStorageAt",params:[e,i,o||r]})}async function Tg(t,{blockHash:e,blockNumber:n,blockTag:r,hash:i,index:o}){var u,d,p;const s=r||"latest",a=n!==void 0?Se(n):void 0;let l=null;if(i?l=await t.request({method:"eth_getTransactionByHash",params:[i]}):e?l=await t.request({method:"eth_getTransactionByBlockHashAndIndex",params:[e,Se(o)]}):(a||s)&&(l=await t.request({method:"eth_getTransactionByBlockNumberAndIndex",params:[a||s,Se(o)]})),!l)throw new p5({blockHash:e,blockNumber:n,blockTag:s,hash:i,index:o});return(((p=(d=(u=t.chain)==null?void 0:u.formatters)==null?void 0:d.transaction)==null?void 0:p.format)||Xf)(l)}async function X7(t,{hash:e,transactionReceipt:n}){const[r,i]=await Promise.all([ge(t,cu,"getBlockNumber")({}),e?ge(t,Tg,"getBlockNumber")({hash:e}):void 0]),o=(n==null?void 0:n.blockNumber)||(i==null?void 0:i.blockNumber);return o?r-o+1n:0n}async function y1(t,{hash:e}){var i,o,s;const n=await t.request({method:"eth_getTransactionReceipt",params:[e]});if(!n)throw new m5({hash:e});return(((s=(o=(i=t.chain)==null?void 0:i.formatters)==null?void 0:o.transactionReceipt)==null?void 0:s.format)||Xb)(n)}async function e9(t,e){var E;const{allowFailure:n=!0,batchSize:r,blockNumber:i,blockTag:o,contracts:s,multicallAddress:a}=e,l=r??(typeof((E=t.batch)==null?void 0:E.multicall)=="object"&&t.batch.multicall.batchSize||1024);let c=a;if(!c){if(!t.chain)throw new Error("client chain not configured. multicallAddress is required.");c=Ha({blockNumber:i,chain:t.chain,contract:"multicall3"})}const u=[[]];let d=0,p=0;for(let C=0;C<s.length;C++){const{abi:b,address:m,args:v,functionName:x}=s[C];try{const _=co({abi:b,args:v,functionName:x});p+=(_.length-2)/2,l>0&&p>l&&u[d].length>0&&(d++,p=(_.length-2)/2,u[d]=[]),u[d]=[...u[d],{allowFailure:!0,callData:_,target:m}]}catch(_){const S=mc(_,{abi:b,address:m,args:v,docsPath:"/docs/contract/multicall",functionName:x});if(!n)throw S;u[d]=[...u[d],{allowFailure:!0,callData:"0x",target:m}]}}const w=await Promise.allSettled(u.map(C=>ge(t,Qi,"readContract")({abi:p1,address:c,args:[C],blockNumber:i,blockTag:o,functionName:"aggregate3"}))),y=[];for(let C=0;C<w.length;C++){const b=w[C];if(b.status==="rejected"){if(!n)throw b.reason;for(let v=0;v<u[C].length;v++)y.push({status:"failure",error:b.reason,result:void 0});continue}const m=b.value;for(let v=0;v<m.length;v++){const{returnData:x,success:_}=m[v],{callData:S}=u[C][v],{abi:f,address:T,functionName:O,args:D}=s[y.length];try{if(S==="0x")throw new rh;if(!_)throw new hg({data:x});const M=za({abi:f,args:D,data:x,functionName:O});y.push(n?{result:M,status:"success"}:M)}catch(M){const ee=mc(M,{abi:f,address:T,args:D,docsPath:"/docs/contract/multicall",functionName:O});if(!n)throw ee;y.push({error:ee,result:void 0,status:"failure"})}}}if(y.length!==s.length)throw new Q("multicall results mismatch");return y}const t9="0x60806040523480156200001157600080fd5b50604051620007003803806200070083398101604081905262000034916200056f565b6000620000438484846200004f565b9050806000526001601ff35b600080846001600160a01b0316803b806020016040519081016040528181526000908060200190933c90507f6492649264926492649264926492649264926492649264926492649264926492620000a68462000451565b036200021f57600060608085806020019051810190620000c79190620005ce565b8651929550909350915060000362000192576000836001600160a01b031683604051620000f5919062000643565b6000604051808303816000865af19150503d806000811462000134576040519150601f19603f3d011682016040523d82523d6000602084013e62000139565b606091505b5050905080620001905760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b505b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90620001c4908b90869060040162000661565b602060405180830381865afa158015620001e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200020891906200069d565b6001600160e01b031916149450505050506200044a565b805115620002b157604051630b135d3f60e11b808252906001600160a01b03871690631626ba7e9062000259908890889060040162000661565b602060405180830381865afa15801562000277573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200029d91906200069d565b6001600160e01b031916149150506200044a565b8251604114620003195760405162461bcd60e51b815260206004820152603a6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e677468000000000000606482015260840162000187565b620003236200046b565b506020830151604080850151855186939260009185919081106200034b576200034b620006c9565b016020015160f81c9050601b81148015906200036b57508060ff16601c14155b15620003cf5760405162461bcd60e51b815260206004820152603b6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c75650000000000606482015260840162000187565b6040805160008152602081018083528a905260ff83169181019190915260608101849052608081018390526001600160a01b038a169060019060a0016020604051602081039080840390855afa1580156200042e573d6000803e3d6000fd5b505050602060405103516001600160a01b031614955050505050505b9392505050565b60006020825110156200046357600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b03811681146200049f57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620004d5578181015183820152602001620004bb565b50506000910152565b600082601f830112620004f057600080fd5b81516001600160401b03808211156200050d576200050d620004a2565b604051601f8301601f19908116603f01168101908282118183101715620005385762000538620004a2565b816040528381528660208588010111156200055257600080fd5b62000565846020830160208901620004b8565b9695505050505050565b6000806000606084860312156200058557600080fd5b8351620005928162000489565b6020850151604086015191945092506001600160401b03811115620005b657600080fd5b620005c486828701620004de565b9150509250925092565b600080600060608486031215620005e457600080fd5b8351620005f18162000489565b60208501519093506001600160401b03808211156200060f57600080fd5b6200061d87838801620004de565b935060408601519150808211156200063457600080fd5b50620005c486828701620004de565b6000825162000657818460208701620004b8565b9190910192915050565b828152604060208201526000825180604084015262000688816060850160208701620004b8565b601f01601f1916919091016060019392505050565b600060208284031215620006b057600080fd5b81516001600160e01b0319811681146200044a57600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572";/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */BigInt(0);BigInt(1);BigInt(2);function n9(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}function r9(t,e){const n=Or(t)?Gi(t):t,r=Or(e)?Gi(e):e;return n9(n,r)}async function F5(t,{address:e,hash:n,signature:r,...i}){const o=Or(r)?r:fi(r);try{const{data:s}=await ge(t,lh,"call")({data:B5({abi:VC,args:[e,n,o],bytecode:t9}),...i});return r9(s??"0x0","0x1")}catch(s){if(s instanceof g5)return!1;throw s}}async function i9(t,{address:e,message:n,signature:r,...i}){const o=G7(n);return F5(t,{address:e,hash:o,signature:r,...i})}async function o9(t,{address:e,signature:n,message:r,primaryType:i,types:o,domain:s,...a}){const l=z7({message:r,primaryType:i,types:o,domain:s});return F5(t,{address:e,hash:l,signature:n,...a})}function W5(t,{emitOnBegin:e=!1,emitMissed:n=!1,onBlockNumber:r,onError:i,poll:o,pollingInterval:s=t.pollingInterval}){const a=typeof o<"u"?o:t.transport.type!=="webSocket";let l;return a?(()=>{const d=tn(["watchBlockNumber",t.uid,e,n,s]);return Va(d,{onBlockNumber:r,onError:i},p=>lu(async()=>{var w;try{const y=await ge(t,cu,"getBlockNumber")({cacheTime:0});if(l){if(y===l)return;if(y-l>1&&n)for(let E=l+1n;E<y;E++)p.onBlockNumber(E,l),l=E}(!l||y>l)&&(p.onBlockNumber(y,l),l=y)}catch(y){(w=p.onError)==null||w.call(p,y)}},{emitOnBegin:e,interval:s}))})():(()=>{let d=!0,p=()=>d=!1;return(async()=>{try{const{unsubscribe:w}=await t.transport.subscribe({params:["newHeads"],onData(y){var C;if(!d)return;const E=Kr((C=y.result)==null?void 0:C.number);r(E,l),l=E},onError(y){i==null||i(y)}});p=w,d||p()}catch(w){i==null||i(w)}})(),p})()}async function s9(t,{confirmations:e=1,hash:n,onReplaced:r,pollingInterval:i=t.pollingInterval,timeout:o}){const s=tn(["waitForTransactionReceipt",t.uid,n]);let a,l,c,u=!1;return new Promise((d,p)=>{o&&setTimeout(()=>p(new TC({hash:n})),o);const w=Va(s,{onReplaced:r,resolve:d,reject:p},y=>{const E=ge(t,W5,"watchBlockNumber")({emitMissed:!0,emitOnBegin:!0,poll:!0,pollingInterval:i,async onBlockNumber(C){if(u)return;let b=C;const m=v=>{E(),v(),w()};try{if(c){if(e>1&&(!c.blockNumber||b-c.blockNumber+1n<e))return;m(()=>y.resolve(c));return}if(a||(u=!0,await g1(async()=>{a=await ge(t,Tg,"getTransaction")({hash:n}),a.blockNumber&&(b=a.blockNumber)},{delay:({count:v})=>~~(1<<v)*200,retryCount:6}),u=!1),c=await ge(t,y1,"getTransactionReceipt")({hash:n}),e>1&&(!c.blockNumber||b-c.blockNumber+1n<e))return;m(()=>y.resolve(c))}catch(v){if(a&&(v instanceof p5||v instanceof m5))try{l=a,u=!0;const x=await g1(()=>ge(t,Yi,"getBlock")({blockNumber:b,includeTransactions:!0}),{delay:({count:f})=>~~(1<<f)*200,retryCount:6,shouldRetry:({error:f})=>f instanceof w5});u=!1;const _=x.transactions.find(({from:f,nonce:T})=>f===l.from&&T===l.nonce);if(!_||(c=await ge(t,y1,"getTransactionReceipt")({hash:_.hash}),e>1&&(!c.blockNumber||b-c.blockNumber+1n<e)))return;let S="replaced";_.to===l.to&&_.value===l.value?S="repriced":_.from===_.to&&_.value===0n&&(S="cancelled"),m(()=>{var f;(f=y.onReplaced)==null||f.call(y,{reason:S,replacedTransaction:l,transaction:_,transactionReceipt:c}),y.resolve(c)})}catch(x){m(()=>y.reject(x))}else m(()=>y.reject(v))}}})})})}function a9(t,{blockTag:e="latest",emitMissed:n=!1,emitOnBegin:r=!1,onBlock:i,onError:o,includeTransactions:s,poll:a,pollingInterval:l=t.pollingInterval}){const c=typeof a<"u"?a:t.transport.type!=="webSocket",u=s??!1;let d;return c?(()=>{const y=tn(["watchBlocks",t.uid,n,r,u,l]);return Va(y,{onBlock:i,onError:o},E=>lu(async()=>{var C;try{const b=await ge(t,Yi,"getBlock")({blockTag:e,includeTransactions:u});if(b.number&&(d!=null&&d.number)){if(b.number===d.number)return;if(b.number-d.number>1&&n)for(let m=(d==null?void 0:d.number)+1n;m<b.number;m++){const v=await ge(t,Yi,"getBlock")({blockNumber:m,includeTransactions:u});E.onBlock(v,d),d=v}}(!(d!=null&&d.number)||e==="pending"&&!(b!=null&&b.number)||b.number&&b.number>d.number)&&(E.onBlock(b,d),d=b)}catch(b){(C=E.onError)==null||C.call(E,b)}},{emitOnBegin:r,interval:l}))})():(()=>{let y=!0,E=()=>y=!1;return(async()=>{try{const{unsubscribe:C}=await t.transport.subscribe({params:["newHeads"],onData(b){var x,_,S;if(!y)return;const v=(((S=(_=(x=t.chain)==null?void 0:x.formatters)==null?void 0:_.block)==null?void 0:S.format)||ng)(b.result);i(v,d),d=v},onError(b){o==null||o(b)}});E=C,y||E()}catch(C){o==null||o(C)}})(),E})()}function l9(t,{address:e,args:n,batch:r=!0,event:i,events:o,onError:s,onLogs:a,poll:l,pollingInterval:c=t.pollingInterval,strict:u}){const d=typeof l<"u"?l:t.transport.type!=="webSocket",p=u??!1;return d?(()=>{const E=tn(["watchEvent",e,n,r,t.uid,i,c]);return Va(E,{onLogs:a,onError:s},C=>{let b,m,v=!1;const x=lu(async()=>{var _;if(!v){try{m=await ge(t,O5,"createEventFilter")({address:e,args:n,event:i,events:o,strict:p})}catch{}v=!0;return}try{let S;if(m)S=await ge(t,ch,"getFilterChanges")({filter:m});else{const f=await ge(t,cu,"getBlockNumber")({});b&&b!==f?S=await ge(t,bg,"getLogs")({address:e,args:n,event:i,events:o,fromBlock:b+1n,toBlock:f}):S=[],b=f}if(S.length===0)return;if(r)C.onLogs(S);else for(const f of S)C.onLogs([f])}catch(S){m&&S instanceof Zo&&(v=!1),(_=C.onError)==null||_.call(C,S)}},{emitOnBegin:!0,interval:c});return async()=>{m&&await ge(t,uh,"uninstallFilter")({filter:m}),x()}})})():(()=>{let E=!0,C=()=>E=!1;return(async()=>{try{const b=o??(i?[i]:void 0);let m=[];b&&(m=[b.flatMap(x=>iu({abi:[x],eventName:x.name,args:n}))],i&&(m=m[0]));const{unsubscribe:v}=await t.transport.subscribe({params:["logs",{address:e,topics:m}],onData(x){var S;if(!E)return;const _=x.result;try{const{eventName:f,args:T}=au({abi:b,data:_.data,topics:_.topics,strict:p}),O=ur(_,{args:T,eventName:f});a([O])}catch(f){let T,O;if(f instanceof qo||f instanceof Ba){if(u)return;T=f.abiItem.name,O=(S=f.abiItem.inputs)==null?void 0:S.some(M=>!("name"in M&&M.name))}const D=ur(_,{args:O?[]:{},eventName:T});a([D])}},onError(x){s==null||s(x)}});C=v,E||C()}catch(b){s==null||s(b)}})(),C})()}function c9(t,{batch:e=!0,onError:n,onTransactions:r,poll:i,pollingInterval:o=t.pollingInterval}){return(typeof i<"u"?i:t.transport.type!=="webSocket")?(()=>{const c=tn(["watchPendingTransactions",t.uid,e,o]);return Va(c,{onTransactions:r,onError:n},u=>{let d;const p=lu(async()=>{var w;try{if(!d)try{d=await ge(t,D5,"createPendingTransactionFilter")({});return}catch(E){throw p(),E}const y=await ge(t,ch,"getFilterChanges")({filter:d});if(y.length===0)return;if(e)u.onTransactions(y);else for(const E of y)u.onTransactions([E])}catch(y){(w=u.onError)==null||w.call(u,y)}},{emitOnBegin:!0,interval:o});return async()=>{d&&await ge(t,uh,"uninstallFilter")({filter:d}),p()}})})():(()=>{let c=!0,u=()=>c=!1;return(async()=>{try{const{unsubscribe:d}=await t.transport.subscribe({params:["newPendingTransactions"],onData(p){if(!c)return;const w=p.result;r([w])},onError(p){n==null||n(p)}});u=d,c||u()}catch(d){n==null||n(d)}})(),u})()}function u9(t){return{call:e=>lh(t,e),createBlockFilter:()=>R7(t),createContractEventFilter:e=>d5(t,e),createEventFilter:e=>O5(t,e),createPendingTransactionFilter:()=>D5(t),estimateContractGas:e=>BC(t,e),estimateGas:e=>vg(t,e),getBalance:e=>N7(t,e),getBlock:e=>Yi(t,e),getBlockNumber:e=>cu(t,e),getBlockTransactionCount:e=>M7(t,e),getBytecode:e=>L7(t,e),getChainId:()=>gc(t),getContractEvents:e=>b5(t,e),getEnsAddress:e=>y7(t,e),getEnsAvatar:e=>k7(t,e),getEnsName:e=>O7(t,e),getEnsResolver:e=>D7(t,e),getEnsText:e=>k5(t,e),getFeeHistory:e=>j7(t,e),estimateFeesPerGas:e=>UC(t,e),getFilterChanges:e=>ch(t,e),getFilterLogs:e=>B7(t,e),getGasPrice:()=>yg(t),getLogs:e=>bg(t,e),getProof:e=>Q7(t,e),estimateMaxPriorityFeePerGas:e=>LC(t,e),getStorageAt:e=>J7(t,e),getTransaction:e=>Tg(t,e),getTransactionConfirmations:e=>X7(t,e),getTransactionCount:e=>v5(t,e),getTransactionReceipt:e=>y1(t,e),multicall:e=>e9(t,e),prepareTransactionRequest:e=>ah(t,e),readContract:e=>Qi(t,e),sendRawTransaction:e=>Eg(t,e),simulateContract:e=>QC(t,e),verifyMessage:e=>i9(t,e),verifyTypedData:e=>o9(t,e),uninstallFilter:e=>uh(t,e),waitForTransactionReceipt:e=>s9(t,e),watchBlocks:e=>a9(t,e),watchBlockNumber:e=>W5(t,e),watchContractEvent:e=>i7(t,e),watchEvent:e=>l9(t,e),watchPendingTransactions:e=>c9(t,e)}}function Yy(t){const{key:e="public",name:n="Public Client"}=t;return C5({...t,key:e,name:n,type:"publicClient"}).extend(u9)}function d9(t,{abi:e,args:n,bytecode:r,...i}){const o=B5({abi:e,args:n,bytecode:r});return _g(t,{...i,data:o})}async function f9(t){var n;return((n=t.account)==null?void 0:n.type)==="local"?[t.account.address]:(await t.request({method:"eth_accounts"})).map(r=>ug(r))}async function h9(t){return await t.request({method:"wallet_getPermissions"})}async function p9(t){return(await t.request({method:"eth_requestAccounts"})).map(n=>Fn(n))}async function m9(t,e){return t.request({method:"wallet_requestPermissions",params:[e]})}async function g9(t,{account:e=t.account,message:n}){if(!e)throw new Wa({docsPath:"/docs/actions/wallet/signMessage"});const r=Zn(e);if(r.type==="local")return r.signMessage({message:n});const i=typeof n=="string"?Xm(n):n.raw instanceof Uint8Array?fi(n.raw):n.raw;return t.request({method:"personal_sign",params:[i,r.address]})}async function w9(t,e){var c,u,d,p;const{account:n=t.account,chain:r=t.chain,...i}=e;if(!n)throw new Wa({docsPath:"/docs/actions/wallet/signTransaction"});const o=Zn(n);su({account:o,...e});const s=await ge(t,gc,"getChainId")({});r!==null&&_5({currentChainId:s,chain:r});const a=(r==null?void 0:r.formatters)||((c=t.chain)==null?void 0:c.formatters),l=((u=a==null?void 0:a.transactionRequest)==null?void 0:u.format)||eh;return o.type==="local"?o.signTransaction({...i,chainId:s},{serializer:(p=(d=t.chain)==null?void 0:d.serializers)==null?void 0:p.transaction}):await t.request({method:"eth_signTransaction",params:[{...l(i),chainId:Se(s),from:o.address}]})}async function y9(t,{account:e=t.account,domain:n,message:r,primaryType:i,types:o}){if(!e)throw new Wa({docsPath:"/docs/actions/wallet/signTypedData"});const s=Zn(e),a={EIP712Domain:j5({domain:n}),...o};if(U5({domain:n,message:r,primaryType:i,types:a}),s.type==="local")return s.signTypedData({domain:n,primaryType:i,types:a,message:r});const l=tn({domain:n??{},primaryType:i,types:a,message:r},(c,u)=>Or(u)?u.toLowerCase():u);return t.request({method:"eth_signTypedData_v4",params:[s.address,l]})}async function v9(t,{id:e}){await t.request({method:"wallet_switchEthereumChain",params:[{chainId:Se(e)}]})}async function b9(t,e){return await t.request({method:"wallet_watchAsset",params:e})}function x9(t){return{addChain:e=>a7(t,e),deployContract:e=>d9(t,e),getAddresses:()=>f9(t),getChainId:()=>gc(t),getPermissions:()=>h9(t),prepareTransactionRequest:e=>ah(t,e),requestAddresses:()=>p9(t),requestPermissions:e=>m9(t,e),sendRawTransaction:e=>Eg(t,e),sendTransaction:e=>_g(t,e),signMessage:e=>g9(t,e),signTransaction:e=>w9(t,e),signTypedData:e=>y9(t,e),switchChain:e=>v9(t,e),watchAsset:e=>b9(t,e),writeContract:e=>s7(t,e)}}function ph(t){const{key:e="wallet",name:n="Wallet Client",transport:r}=t;return C5({...t,key:e,name:n,transport:o=>r({...o,retryCount:0}),type:"walletClient"}).extend(x9)}function E9(t,e={}){const{key:n="webSocket",name:r="WebSocket JSON-RPC",retryDelay:i}=e;return({chain:o,retryCount:s,timeout:a})=>{var d;const l=e.retryCount??s,c=a??e.timeout??1e4,u=t||((d=o==null?void 0:o.rpcUrls.default.webSocket)==null?void 0:d[0]);if(!u)throw new A5;return dh({key:n,name:r,async request({method:p,params:w}){const y={method:p,params:w},E=await $0(u),{error:C,result:b}=await Xs.webSocketAsync(E,{body:y,timeout:c});if(C)throw new pg({body:y,error:C,url:u});return b},retryCount:l,retryDelay:i,timeout:c,type:"webSocket"},{getSocket(){return $0(u)},async subscribe({params:p,onData:w,onError:y}){const E=await $0(u),{result:C}=await new Promise((b,m)=>Xs.webSocket(E,{body:{method:"eth_subscribe",params:p},onResponse(v){if(v.error){m(v.error),y==null||y(v.error);return}if(typeof v.id=="number"){b(v);return}v.method==="eth_subscription"&&w(v.params)}}));return{subscriptionId:C,async unsubscribe(){return new Promise(b=>Xs.webSocket(E,{body:{method:"eth_unsubscribe",params:[C]},onResponse:b}))}}}})}}const z5=Ua({id:5,network:"goerli",name:"Goerli",nativeCurrency:{name:"Goerli Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://eth-goerli.g.alchemy.com/v2"],webSocket:["wss://eth-goerli.g.alchemy.com/v2"]},infura:{http:["https://goerli.infura.io/v3"],webSocket:["wss://goerli.infura.io/ws/v3"]},default:{http:["https://rpc.ankr.com/eth_goerli"]},public:{http:["https://rpc.ankr.com/eth_goerli"]}},blockExplorers:{etherscan:{name:"Etherscan",url:"https://goerli.etherscan.io"},default:{name:"Etherscan",url:"https://goerli.etherscan.io"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0x56522D00C410a43BFfDF00a9A569489297385790",blockCreated:8765204},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:6507670}},testnet:!0}),_9=Ua({id:100,name:"Gnosis",network:"gnosis",nativeCurrency:{decimals:18,name:"Gnosis",symbol:"xDAI"},rpcUrls:{default:{http:["https://rpc.gnosischain.com"],webSocket:["wss://rpc.gnosischain.com/wss"]},public:{http:["https://rpc.gnosischain.com"],webSocket:["wss://rpc.gnosischain.com/wss"]}},blockExplorers:{etherscan:{name:"Gnosisscan",url:"https://gnosisscan.io"},default:{name:"Gnosis Chain Explorer",url:"https://blockscout.com/xdai/mainnet"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:21022491}}}),Pg=Ua({id:1,network:"homestead",name:"Ethereum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://eth-mainnet.g.alchemy.com/v2"],webSocket:["wss://eth-mainnet.g.alchemy.com/v2"]},infura:{http:["https://mainnet.infura.io/v3"],webSocket:["wss://mainnet.infura.io/ws/v3"]},default:{http:["https://cloudflare-eth.com"]},public:{http:["https://cloudflare-eth.com"]}},blockExplorers:{etherscan:{name:"Etherscan",url:"https://etherscan.io"},default:{name:"Etherscan",url:"https://etherscan.io"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0xc0497E381f536Be9ce14B0dD3817cBcAe57d2F62",blockCreated:16966585},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:14353601}}}),C9=Ua({id:10,name:"OP Mainnet",network:"optimism",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://opt-mainnet.g.alchemy.com/v2"],webSocket:["wss://opt-mainnet.g.alchemy.com/v2"]},infura:{http:["https://optimism-mainnet.infura.io/v3"],webSocket:["wss://optimism-mainnet.infura.io/ws/v3"]},default:{http:["https://mainnet.optimism.io"]},public:{http:["https://mainnet.optimism.io"]}},blockExplorers:{etherscan:{name:"Etherscan",url:"https://optimistic.etherscan.io"},default:{name:"Optimism Explorer",url:"https://explorer.optimism.io"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:4286263}}},{formatters:i_}),S9=Ua({id:137,name:"Polygon",network:"matic",nativeCurrency:{name:"MATIC",symbol:"MATIC",decimals:18},rpcUrls:{alchemy:{http:["https://polygon-mainnet.g.alchemy.com/v2"],webSocket:["wss://polygon-mainnet.g.alchemy.com/v2"]},infura:{http:["https://polygon-mainnet.infura.io/v3"],webSocket:["wss://polygon-mainnet.infura.io/ws/v3"]},default:{http:["https://polygon-rpc.com"]},public:{http:["https://polygon-rpc.com"]}},blockExplorers:{etherscan:{name:"PolygonScan",url:"https://polygonscan.com"},default:{name:"PolygonScan",url:"https://polygonscan.com"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:25770160}}});var H5=class extends Error{constructor({chainId:t,connectorId:e}){super(`Chain "${t}" not configured for connector "${e}".`),this.name="ChainNotConfiguredForConnectorError"}},_i=class extends Error{constructor(){super(...arguments),this.name="ConnectorNotFoundError",this.message="Connector not found"}};function Qd(t){return typeof t=="string"?Number.parseInt(t,t.trim().substring(0,2)==="0x"?16:10):typeof t=="bigint"?Number(t):t}var V5={exports:{}};(function(t){var e=Object.prototype.hasOwnProperty,n="~";function r(){}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(n=!1));function i(l,c,u){this.fn=l,this.context=c,this.once=u||!1}function o(l,c,u,d,p){if(typeof u!="function")throw new TypeError("The listener must be a function");var w=new i(u,d||l,p),y=n?n+c:c;return l._events[y]?l._events[y].fn?l._events[y]=[l._events[y],w]:l._events[y].push(w):(l._events[y]=w,l._eventsCount++),l}function s(l,c){--l._eventsCount===0?l._events=new r:delete l._events[c]}function a(){this._events=new r,this._eventsCount=0}a.prototype.eventNames=function(){var c=[],u,d;if(this._eventsCount===0)return c;for(d in u=this._events)e.call(u,d)&&c.push(n?d.slice(1):d);return Object.getOwnPropertySymbols?c.concat(Object.getOwnPropertySymbols(u)):c},a.prototype.listeners=function(c){var u=n?n+c:c,d=this._events[u];if(!d)return[];if(d.fn)return[d.fn];for(var p=0,w=d.length,y=new Array(w);p<w;p++)y[p]=d[p].fn;return y},a.prototype.listenerCount=function(c){var u=n?n+c:c,d=this._events[u];return d?d.fn?1:d.length:0},a.prototype.emit=function(c,u,d,p,w,y){var E=n?n+c:c;if(!this._events[E])return!1;var C=this._events[E],b=arguments.length,m,v;if(C.fn){switch(C.once&&this.removeListener(c,C.fn,void 0,!0),b){case 1:return C.fn.call(C.context),!0;case 2:return C.fn.call(C.context,u),!0;case 3:return C.fn.call(C.context,u,d),!0;case 4:return C.fn.call(C.context,u,d,p),!0;case 5:return C.fn.call(C.context,u,d,p,w),!0;case 6:return C.fn.call(C.context,u,d,p,w,y),!0}for(v=1,m=new Array(b-1);v<b;v++)m[v-1]=arguments[v];C.fn.apply(C.context,m)}else{var x=C.length,_;for(v=0;v<x;v++)switch(C[v].once&&this.removeListener(c,C[v].fn,void 0,!0),b){case 1:C[v].fn.call(C[v].context);break;case 2:C[v].fn.call(C[v].context,u);break;case 3:C[v].fn.call(C[v].context,u,d);break;case 4:C[v].fn.call(C[v].context,u,d,p);break;default:if(!m)for(_=1,m=new Array(b-1);_<b;_++)m[_-1]=arguments[_];C[v].fn.apply(C[v].context,m)}}return!0},a.prototype.on=function(c,u,d){return o(this,c,u,d,!1)},a.prototype.once=function(c,u,d){return o(this,c,u,d,!0)},a.prototype.removeListener=function(c,u,d,p){var w=n?n+c:c;if(!this._events[w])return this;if(!u)return s(this,w),this;var y=this._events[w];if(y.fn)y.fn===u&&(!p||y.once)&&(!d||y.context===d)&&s(this,w);else{for(var E=0,C=[],b=y.length;E<b;E++)(y[E].fn!==u||p&&!y[E].once||d&&y[E].context!==d)&&C.push(y[E]);C.length?this._events[w]=C.length===1?C[0]:C:s(this,w)}return this},a.prototype.removeAllListeners=function(c){var u;return c?(u=n?n+c:c,this._events[u]&&s(this,u)):(this._events=new r,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=n,a.EventEmitter=a,t.exports=a})(V5);var A9=V5.exports;const T9=Yc(A9);var $g=(t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)},Ve=(t,e,n)=>($g(t,e,"read from private field"),n?n.call(t):e.get(t)),ln=(t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)},wc=(t,e,n,r)=>($g(t,e,"write to private field"),r?r.call(t,n):e.set(t,n),n),kt=(t,e,n)=>($g(t,e,"access private method"),n),mh=class extends T9{constructor({chains:t=[Pg,z5],options:e}){super(),this.chains=t,this.options=e}getBlockExplorerUrls(t){const{default:e,...n}=t.blockExplorers??{};if(e)return[e.url,...Object.values(n).map(r=>r.url)]}isChainUnsupported(t){return!this.chains.some(e=>e.id===t)}setStorage(t){this.storage=t}};function P9(t){var n;if(!t)return"Injected";const e=r=>{if(r.isApexWallet)return"Apex Wallet";if(r.isAvalanche)return"Core Wallet";if(r.isBackpack)return"Backpack";if(r.isBifrost)return"Bifrost Wallet";if(r.isBitKeep)return"BitKeep";if(r.isBitski)return"Bitski";if(r.isBlockWallet)return"BlockWallet";if(r.isBraveWallet)return"Brave Wallet";if(r.isCoin98)return"Coin98 Wallet";if(r.isCoinbaseWallet)return"Coinbase Wallet";if(r.isDawn)return"Dawn Wallet";if(r.isDefiant)return"Defiant";if(r.isDesig)return"Desig Wallet";if(r.isEnkrypt)return"Enkrypt";if(r.isExodus)return"Exodus";if(r.isFordefi)return"Fordefi";if(r.isFrame)return"Frame";if(r.isFrontier)return"Frontier Wallet";if(r.isGamestop)return"GameStop Wallet";if(r.isHaqqWallet)return"HAQQ Wallet";if(r.isHyperPay)return"HyperPay Wallet";if(r.isImToken)return"ImToken";if(r.isHaloWallet)return"Halo Wallet";if(r.isKuCoinWallet)return"KuCoin Wallet";if(r.isMathWallet)return"MathWallet";if(r.isNovaWallet)return"Nova Wallet";if(r.isOkxWallet||r.isOKExWallet)return"OKX Wallet";if(r.isOktoWallet)return"Okto Wallet";if(r.isOneInchIOSWallet||r.isOneInchAndroidWallet)return"1inch Wallet";if(r.isOneKey)return"OneKey Wallet";if(r.isOpera)return"Opera";if(r.isPhantom)return"Phantom";if(r.isPortal)return"Ripio Portal";if(r.isRabby)return"Rabby Wallet";if(r.isRainbow)return"Rainbow";if(r.isSafePal)return"SafePal Wallet";if(r.isStatus)return"Status";if(r.isSubWallet)return"SubWallet";if(r.isTalisman)return"Talisman";if(r.isTally)return"Taho";if(r.isTokenPocket)return"TokenPocket";if(r.isTokenary)return"Tokenary";if(r.isTrust||r.isTrustWallet)return"Trust Wallet";if(r.isTTWallet)return"TTWallet";if(r.isXDEFI)return"XDEFI Wallet";if(r.isZeal)return"Zeal";if(r.isZerion)return"Zerion";if(r.isMetaMask)return"MetaMask"};if((n=t.providers)!=null&&n.length){const r=new Set;let i=1;for(const s of t.providers){let a=e(s);a||(a=`Unknown Wallet #${i}`,i+=1),r.add(a)}const o=[...r];return o.length?o:o[0]??"Injected"}return e(t)??"Injected"}var md,Ig=class extends mh{constructor({chains:t,options:e}={}){const n={shimDisconnect:!0,getProvider(){if(typeof window>"u")return;const i=window.ethereum;return i!=null&&i.providers&&i.providers.length>0?i.providers[0]:i},...e};super({chains:t,options:n}),this.id="injected",ln(this,md,void 0),this.shimDisconnectKey=`${this.id}.shimDisconnect`,this.onAccountsChanged=i=>{i.length===0?this.emit("disconnect"):this.emit("change",{account:Fn(i[0])})},this.onChainChanged=i=>{const o=Qd(i),s=this.isChainUnsupported(o);this.emit("change",{chain:{id:o,unsupported:s}})},this.onDisconnect=async i=>{var o;i.code===1013&&await this.getProvider()&&await this.getAccount()||(this.emit("disconnect"),this.options.shimDisconnect&&((o=this.storage)==null||o.removeItem(this.shimDisconnectKey)))};const r=n.getProvider();if(typeof n.name=="string")this.name=n.name;else if(r){const i=P9(r);n.name?this.name=n.name(i):typeof i=="string"?this.name=i:this.name=i[0]}else this.name="Injected";this.ready=!!r}async connect({chainId:t}={}){var e;try{const n=await this.getProvider();if(!n)throw new _i;n.on&&(n.on("accountsChanged",this.onAccountsChanged),n.on("chainChanged",this.onChainChanged),n.on("disconnect",this.onDisconnect)),this.emit("message",{type:"connecting"});const r=await n.request({method:"eth_requestAccounts"}),i=Fn(r[0]);let o=await this.getChainId(),s=this.isChainUnsupported(o);return t&&o!==t&&(o=(await this.switchChain(t)).id,s=this.isChainUnsupported(o)),this.options.shimDisconnect&&((e=this.storage)==null||e.setItem(this.shimDisconnectKey,!0)),{account:i,chain:{id:o,unsupported:s}}}catch(n){throw this.isUserRejectedRequestError(n)?new fn(n):n.code===-32002?new fa(n):n}}async disconnect(){var e;const t=await this.getProvider();t!=null&&t.removeListener&&(t.removeListener("accountsChanged",this.onAccountsChanged),t.removeListener("chainChanged",this.onChainChanged),t.removeListener("disconnect",this.onDisconnect),this.options.shimDisconnect&&((e=this.storage)==null||e.removeItem(this.shimDisconnectKey)))}async getAccount(){const t=await this.getProvider();if(!t)throw new _i;const e=await t.request({method:"eth_accounts"});return Fn(e[0])}async getChainId(){const t=await this.getProvider();if(!t)throw new _i;return t.request({method:"eth_chainId"}).then(Qd)}async getProvider(){const t=this.options.getProvider();return t&&wc(this,md,t),Ve(this,md)}async getWalletClient({chainId:t}={}){const[e,n]=await Promise.all([this.getProvider(),this.getAccount()]),r=this.chains.find(i=>i.id===t);if(!e)throw new Error("provider is required.");return ph({account:n,chain:r,transport:fh(e)})}async isAuthorized(){var t;try{if(this.options.shimDisconnect&&!((t=this.storage)!=null&&t.getItem(this.shimDisconnectKey)))return!1;if(!await this.getProvider())throw new _i;return!!await this.getAccount()}catch{return!1}}async switchChain(t){var r,i,o;const e=await this.getProvider();if(!e)throw new _i;const n=Se(t);try{return await Promise.all([e.request({method:"wallet_switchEthereumChain",params:[{chainId:n}]}),new Promise(s=>this.on("change",({chain:a})=>{(a==null?void 0:a.id)===t&&s()}))]),this.chains.find(s=>s.id===t)??{id:t,name:`Chain ${n}`,network:`${n}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}}}catch(s){const a=this.chains.find(l=>l.id===t);if(!a)throw new H5({chainId:t,connectorId:this.id});if(s.code===4902||((i=(r=s==null?void 0:s.data)==null?void 0:r.originalError)==null?void 0:i.code)===4902)try{if(await e.request({method:"wallet_addEthereumChain",params:[{chainId:n,chainName:a.name,nativeCurrency:a.nativeCurrency,rpcUrls:[((o=a.rpcUrls.public)==null?void 0:o.http[0])??""],blockExplorerUrls:this.getBlockExplorerUrls(a)}]}),await this.getChainId()!==t)throw new fn(new Error("User rejected switch after adding network."));return a}catch(l){throw new fn(l)}throw this.isUserRejectedRequestError(s)?new fn(s):new dr(s)}}async watchAsset({address:t,decimals:e=18,image:n,symbol:r}){const i=await this.getProvider();if(!i)throw new _i;return i.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:t,decimals:e,image:n,symbol:r}}})}isUserRejectedRequestError(t){return t.code===4001}};md=new WeakMap;var kg=(t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)},k0=(t,e,n)=>(kg(t,e,"read from private field"),n?n.call(t):e.get(t)),O0=(t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)},Zu=(t,e,n,r)=>(kg(t,e,"write to private field"),r?r.call(t,n):e.set(t,n),n),$9=(t,e,n)=>(kg(t,e,"access private method"),n),I9={VITE_PROJECT_ID:"678b2f9229f99e6fd49a7bd85bd1b88a",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const k9=t=>(e,n,r)=>{const i=r.subscribe;return r.subscribe=(s,a,l)=>{let c=s;if(a){const u=(l==null?void 0:l.equalityFn)||Object.is;let d=s(r.getState());c=p=>{const w=s(p);if(!u(d,w)){const y=d;a(d=w,y)}},l!=null&&l.fireImmediately&&a(d,d)}return i(c)},t(e,n,r)},O9=k9;function D9(t,e){let n;try{n=t()}catch{return}return{getItem:i=>{var o;const s=l=>l===null?null:JSON.parse(l,e==null?void 0:e.reviver),a=(o=n.getItem(i))!=null?o:null;return a instanceof Promise?a.then(s):s(a)},setItem:(i,o)=>n.setItem(i,JSON.stringify(o,e==null?void 0:e.replacer)),removeItem:i=>n.removeItem(i)}}const yc=t=>e=>{try{const n=t(e);return n instanceof Promise?n:{then(r){return yc(r)(n)},catch(r){return this}}}catch(n){return{then(r){return this},catch(r){return yc(r)(n)}}}},R9=(t,e)=>(n,r,i)=>{let o={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:C=>C,version:0,merge:(C,b)=>({...b,...C}),...e},s=!1;const a=new Set,l=new Set;let c;try{c=o.getStorage()}catch{}if(!c)return t((...C)=>{console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`),n(...C)},r,i);const u=yc(o.serialize),d=()=>{const C=o.partialize({...r()});let b;const m=u({state:C,version:o.version}).then(v=>c.setItem(o.name,v)).catch(v=>{b=v});if(b)throw b;return m},p=i.setState;i.setState=(C,b)=>{p(C,b),d()};const w=t((...C)=>{n(...C),d()},r,i);let y;const E=()=>{var C;if(!c)return;s=!1,a.forEach(m=>m(r()));const b=((C=o.onRehydrateStorage)==null?void 0:C.call(o,r()))||void 0;return yc(c.getItem.bind(c))(o.name).then(m=>{if(m)return o.deserialize(m)}).then(m=>{if(m)if(typeof m.version=="number"&&m.version!==o.version){if(o.migrate)return o.migrate(m.state,m.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return m.state}).then(m=>{var v;return y=o.merge(m,(v=r())!=null?v:w),n(y,!0),d()}).then(()=>{b==null||b(y,void 0),s=!0,l.forEach(m=>m(y))}).catch(m=>{b==null||b(void 0,m)})};return i.persist={setOptions:C=>{o={...o,...C},C.getStorage&&(c=C.getStorage())},clearStorage:()=>{c==null||c.removeItem(o.name)},getOptions:()=>o,rehydrate:()=>E(),hasHydrated:()=>s,onHydrate:C=>(a.add(C),()=>{a.delete(C)}),onFinishHydration:C=>(l.add(C),()=>{l.delete(C)})},E(),y||w},N9=(t,e)=>(n,r,i)=>{let o={storage:D9(()=>localStorage),partialize:E=>E,version:0,merge:(E,C)=>({...C,...E}),...e},s=!1;const a=new Set,l=new Set;let c=o.storage;if(!c)return t((...E)=>{console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`),n(...E)},r,i);const u=()=>{const E=o.partialize({...r()});return c.setItem(o.name,{state:E,version:o.version})},d=i.setState;i.setState=(E,C)=>{d(E,C),u()};const p=t((...E)=>{n(...E),u()},r,i);i.getInitialState=()=>p;let w;const y=()=>{var E,C;if(!c)return;s=!1,a.forEach(m=>{var v;return m((v=r())!=null?v:p)});const b=((C=o.onRehydrateStorage)==null?void 0:C.call(o,(E=r())!=null?E:p))||void 0;return yc(c.getItem.bind(c))(o.name).then(m=>{if(m)if(typeof m.version=="number"&&m.version!==o.version){if(o.migrate)return o.migrate(m.state,m.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return m.state}).then(m=>{var v;return w=o.merge(m,(v=r())!=null?v:p),n(w,!0),u()}).then(()=>{b==null||b(w,void 0),w=r(),s=!0,l.forEach(m=>m(w))}).catch(m=>{b==null||b(void 0,m)})};return i.persist={setOptions:E=>{o={...o,...E},E.storage&&(c=E.storage)},clearStorage:()=>{c==null||c.removeItem(o.name)},getOptions:()=>o,rehydrate:()=>y(),hasHydrated:()=>s,onHydrate:E=>(a.add(E),()=>{a.delete(E)}),onFinishHydration:E=>(l.add(E),()=>{l.delete(E)})},o.skipHydration||y(),w||p},M9=(t,e)=>"getStorage"in e||"serialize"in e||"deserialize"in e?((I9?"production":void 0)!=="production"&&console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),R9(t,e)):N9(t,e),L9=M9;var U9={VITE_PROJECT_ID:"678b2f9229f99e6fd49a7bd85bd1b88a",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const Qy=t=>{let e;const n=new Set,r=(u,d)=>{const p=typeof u=="function"?u(e):u;if(!Object.is(p,e)){const w=e;e=d??(typeof p!="object"||p===null)?p:Object.assign({},e,p),n.forEach(y=>y(e,w))}},i=()=>e,l={setState:r,getState:i,getInitialState:()=>c,subscribe:u=>(n.add(u),()=>n.delete(u)),destroy:()=>{(U9?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},c=e=t(r,i,l);return l},j9=t=>t?Qy(t):Qy;function q5(t,e){if(Object.is(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;if(t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(const[r,i]of t)if(!Object.is(i,e.get(r)))return!1;return!0}if(t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(const r of t)if(!e.has(r))return!1;return!0}const n=Object.keys(t);if(n.length!==Object.keys(e).length)return!1;for(let r=0;r<n.length;r++)if(!Object.prototype.hasOwnProperty.call(e,n[r])||!Object.is(t[n[r]],e[n[r]]))return!1;return!0}function B9(t,e,{batch:n={multicall:{wait:32}},pollingInterval:r=4e3,rank:i,retryCount:o,retryDelay:s,stallTimeout:a}={}){if(!t.length)throw new Error("must have at least one chain");let l=[];const c={},u={};for(const d of t){let p=!1;for(const w of e){const y=w(d);y&&(p=!0,l.some(({id:E})=>E===d.id)||(l=[...l,y.chain]),c[d.id]=[...c[d.id]||[],...y.rpcUrls.http],y.rpcUrls.webSocket&&(u[d.id]=[...u[d.id]||[],...y.rpcUrls.webSocket]))}if(!p)throw new Error([`Could not find valid provider configuration for chain "${d.name}".
`,"You may need to add `jsonRpcProvider` to `configureChains` with the chain's RPC URLs.","Read more: https://wagmi.sh/core/providers/jsonRpc"].join(`
`))}return{chains:l,publicClient:({chainId:d})=>{const p=l.find(E=>E.id===d)??t[0],w=c[p.id];if(!w||!w[0])throw new Error(`No providers configured for chain "${p.id}"`);const y=Yy({batch:n,chain:p,transport:Zy(w.map(E=>m7(E,{timeout:a})),{rank:i,retryCount:o,retryDelay:s}),pollingInterval:r});return Object.assign(y,{chains:l})},webSocketPublicClient:({chainId:d})=>{const p=l.find(E=>E.id===d)??t[0],w=u[p.id];if(!w||!w[0])return;const y=Yy({batch:n,chain:p,transport:Zy(w.map(E=>E9(E,{timeout:a})),{rank:i,retryCount:o,retryDelay:s}),pollingInterval:r});return Object.assign(y,{chains:l})}}}var F9=class extends Error{constructor({chainId:t,connectorId:e}){super(`Chain "${t}" not configured${e?` for connector "${e}"`:""}.`),this.name="ChainNotConfigured"}},W9=class extends Error{constructor(){super(...arguments),this.name="ConnectorAlreadyConnectedError",this.message="Connector already connected"}},z9=class extends Error{constructor(){super(...arguments),this.name="ConfigChainsNotFound",this.message="No chains were found on the wagmi config. Some functions that require a chain may not work."}},H9=class extends Error{constructor({connector:t}){super(`"${t.name}" does not support programmatic chain switching.`),this.name="SwitchChainNotSupportedError"}},v1=(t,{find:e,replace:n})=>t&&e(t)?n(t):typeof t!="object"?t:Array.isArray(t)?t.map(r=>v1(r,{find:e,replace:n})):t instanceof Object?Object.entries(t).reduce((r,[i,o])=>({...r,[i]:v1(o,{find:e,replace:n})}),{}):t;function V9(t){const e=JSON.parse(t);return v1(e,{find:r=>typeof r=="string"&&r.startsWith("#bigint."),replace:r=>BigInt(r.replace("#bigint.",""))})}function Jy(t){return typeof t=="number"?t:t==="wei"?0:Math.abs(u_[t])}function Xy(t,e){return t.slice(0,e).join(".")||"."}function ev(t,e){const{length:n}=t;for(let r=0;r<n;++r)if(t[r]===e)return r+1;return 0}function q9(t,e){const n=typeof t=="function",r=typeof e=="function",i=[],o=[];return function(a,l){if(typeof l=="object")if(i.length){const c=ev(i,this);c===0?i[i.length]=this:(i.splice(c),o.splice(c)),o[o.length]=a;const u=ev(i,l);if(u!==0)return r?e.call(this,a,l,Xy(o,u)):`[ref=${Xy(o,u)}]`}else i[0]=l,o[0]=a;return n?t.call(this,a,l):l}}function Z9(t,e,n,r){return JSON.stringify(t,q9((i,o)=>{const s=typeof o=="bigint"?`#bigint.${o.toString()}`:o;return(e==null?void 0:e(i,s))||s},r),n??void 0)}var Z5={getItem:t=>"",setItem:(t,e)=>null,removeItem:t=>null};function G5({deserialize:t=V9,key:e="wagmi",serialize:n=Z9,storage:r}){return{...r,getItem:(i,o=null)=>{const s=r.getItem(`${e}.${i}`);try{return s?t(s):o}catch(a){return console.warn(a),o}},setItem:(i,o)=>{if(o===null)r.removeItem(`${e}.${i}`);else try{r.setItem(`${e}.${i}`,n(o))}catch(s){console.error(s)}},removeItem:i=>r.removeItem(`${e}.${i}`)}}var tv="store",Ps,wl,b1,K5,G9=class{constructor({autoConnect:t=!1,connectors:e=[new Ig],publicClient:n,storage:r=G5({storage:typeof window<"u"?window.localStorage:Z5}),logger:i={warn:console.warn},webSocketPublicClient:o}){var c,u;O0(this,b1),this.publicClients=new Map,this.webSocketPublicClients=new Map,O0(this,Ps,void 0),O0(this,wl,void 0),this.args={autoConnect:t,connectors:e,logger:i,publicClient:n,storage:r,webSocketPublicClient:o};let s="disconnected",a;if(t)try{const d=r.getItem(tv),p=(c=d==null?void 0:d.state)==null?void 0:c.data;s=p!=null&&p.account?"reconnecting":"connecting",a=(u=p==null?void 0:p.chain)==null?void 0:u.id}catch{}const l=typeof e=="function"?e():e;l.forEach(d=>d.setStorage(r)),this.store=j9(O9(L9(()=>({connectors:l,publicClient:this.getPublicClient({chainId:a}),status:s,webSocketPublicClient:this.getWebSocketPublicClient({chainId:a})}),{name:tv,storage:r,partialize:d=>{var p,w;return{...t&&{data:{account:(p=d==null?void 0:d.data)==null?void 0:p.account,chain:(w=d==null?void 0:d.data)==null?void 0:w.chain}},chains:d==null?void 0:d.chains}},version:2}))),this.storage=r,Zu(this,wl,r==null?void 0:r.getItem("wallet")),$9(this,b1,K5).call(this),t&&typeof window<"u"&&setTimeout(async()=>await this.autoConnect(),0)}get chains(){return this.store.getState().chains}get connectors(){return this.store.getState().connectors}get connector(){return this.store.getState().connector}get data(){return this.store.getState().data}get error(){return this.store.getState().error}get lastUsedChainId(){var t,e;return(e=(t=this.data)==null?void 0:t.chain)==null?void 0:e.id}get publicClient(){return this.store.getState().publicClient}get status(){return this.store.getState().status}get subscribe(){return this.store.subscribe}get webSocketPublicClient(){return this.store.getState().webSocketPublicClient}setState(t){const e=typeof t=="function"?t(this.store.getState()):t;this.store.setState(e,!0)}clearState(){this.setState(t=>({...t,chains:void 0,connector:void 0,data:void 0,error:void 0,status:"disconnected"}))}async destroy(){var t,e;this.connector&&await((e=(t=this.connector).disconnect)==null?void 0:e.call(t)),Zu(this,Ps,!1),this.clearState(),this.store.destroy()}async autoConnect(){if(k0(this,Ps))return;Zu(this,Ps,!0),this.setState(n=>{var r;return{...n,status:(r=n.data)!=null&&r.account?"reconnecting":"connecting"}});const t=k0(this,wl)?[...this.connectors].sort(n=>n.id===k0(this,wl)?-1:1):this.connectors;let e=!1;for(const n of t){if(!n.ready||!n.isAuthorized||!await n.isAuthorized())continue;const i=await n.connect();this.setState(o=>({...o,connector:n,chains:n==null?void 0:n.chains,data:i,status:"connected"})),e=!0;break}return e||this.setState(n=>({...n,data:void 0,status:"disconnected"})),Zu(this,Ps,!1),this.data}setConnectors(t){this.args={...this.args,connectors:t};const e=typeof t=="function"?t():t;e.forEach(n=>n.setStorage(this.args.storage)),this.setState(n=>({...n,connectors:e}))}getPublicClient({chainId:t}={}){let e=this.publicClients.get(-1);if(e&&(e==null?void 0:e.chain.id)===t||(e=this.publicClients.get(t??-1),e))return e;const{publicClient:n}=this.args;return e=typeof n=="function"?n({chainId:t}):n,this.publicClients.set(t??-1,e),e}setPublicClient(t){var n,r;const e=(r=(n=this.data)==null?void 0:n.chain)==null?void 0:r.id;this.args={...this.args,publicClient:t},this.publicClients.clear(),this.setState(i=>({...i,publicClient:this.getPublicClient({chainId:e})}))}getWebSocketPublicClient({chainId:t}={}){let e=this.webSocketPublicClients.get(-1);if(e&&(e==null?void 0:e.chain.id)===t||(e=this.webSocketPublicClients.get(t??-1),e))return e;const{webSocketPublicClient:n}=this.args;return e=typeof n=="function"?n({chainId:t}):n,e&&this.webSocketPublicClients.set(t??-1,e),e}setWebSocketPublicClient(t){var n,r;const e=(r=(n=this.data)==null?void 0:n.chain)==null?void 0:r.id;this.args={...this.args,webSocketPublicClient:t},this.webSocketPublicClients.clear(),this.setState(i=>({...i,webSocketPublicClient:this.getWebSocketPublicClient({chainId:e})}))}setLastUsedConnector(t=null){var e;(e=this.storage)==null||e.setItem("wallet",t)}};Ps=new WeakMap;wl=new WeakMap;b1=new WeakSet;K5=function(){const t=a=>{this.setState(l=>({...l,data:{...l.data,...a}}))},e=()=>{this.clearState()},n=a=>{this.setState(l=>({...l,error:a}))};this.store.subscribe(({connector:a})=>a,(a,l)=>{var c,u,d,p,w,y;(c=l==null?void 0:l.off)==null||c.call(l,"change",t),(u=l==null?void 0:l.off)==null||u.call(l,"disconnect",e),(d=l==null?void 0:l.off)==null||d.call(l,"error",n),a&&((p=a.on)==null||p.call(a,"change",t),(w=a.on)==null||w.call(a,"disconnect",e),(y=a.on)==null||y.call(a,"error",n))});const{publicClient:r,webSocketPublicClient:i}=this.args;(typeof r=="function"||typeof i=="function")&&this.store.subscribe(({data:a})=>{var l;return(l=a==null?void 0:a.chain)==null?void 0:l.id},a=>{this.setState(l=>({...l,publicClient:this.getPublicClient({chainId:a}),webSocketPublicClient:this.getWebSocketPublicClient({chainId:a})}))})};var x1;function K9(t){const e=new G9(t);return x1=e,e}function Br(){if(!x1)throw new Error("No wagmi config found. Ensure you have set up a config: https://wagmi.sh/react/config");return x1}async function nv({chainId:t,connector:e}){const n=Br(),r=n.connector;if(r&&e.id===r.id)throw new W9;try{n.setState(o=>({...o,status:"connecting"}));const i=await e.connect({chainId:t});return n.setLastUsedConnector(e.id),n.setState(o=>({...o,connector:e,chains:e==null?void 0:e.chains,data:i,status:"connected"})),n.storage.setItem("connected",!0),{...i,connector:e}}catch(i){throw n.setState(o=>({...o,status:o.connector?"connected":"disconnected"})),i}}async function Y9(){const t=Br();t.connector&&await t.connector.disconnect(),t.clearState(),t.storage.removeItem("connected")}var Q9=[{type:"event",name:"Approval",inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"event",name:"Transfer",inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"function",name:"allowance",stateMutability:"view",inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{name:"account",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint8"}]},{type:"function",name:"name",stateMutability:"view",inputs:[],outputs:[{name:"",type:"string"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{name:"",type:"string"}]},{type:"function",name:"totalSupply",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]}],J9=[{type:"event",name:"Approval",inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"event",name:"Transfer",inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"function",name:"allowance",stateMutability:"view",inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{name:"account",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint8"}]},{type:"function",name:"name",stateMutability:"view",inputs:[],outputs:[{name:"",type:"bytes32"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{name:"",type:"bytes32"}]},{type:"function",name:"totalSupply",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]}];function qa({chainId:t}={}){const e=Br();return t&&e.getPublicClient({chainId:t})||e.publicClient}async function X9({chainId:t}={}){var r,i;return await((i=(r=Br().connector)==null?void 0:r.getWalletClient)==null?void 0:i.call(r,{chainId:t}))||null}async function eS({chainId:t,contracts:e,blockNumber:n,blockTag:r,...i}){const o=qa({chainId:t});if(!o.chains)throw new z9;if(t&&o.chain.id!==t)throw new F9({chainId:t});return o.multicall({allowFailure:i.allowFailure??!0,blockNumber:n,blockTag:r,contracts:e})}async function tS({address:t,account:e,chainId:n,abi:r,args:i,functionName:o,blockNumber:s,blockTag:a}){return qa({chainId:n}).readContract({abi:r,address:t,account:e,functionName:o,args:i,blockNumber:s,blockTag:a})}async function nS({contracts:t,blockNumber:e,blockTag:n,...r}){const{allowFailure:i=!0}=r;try{const o=qa(),s=t.reduce((u,d,p)=>{const w=d.chainId??o.chain.id;return{...u,[w]:[...u[w]||[],{contract:d,index:p}]}},{}),a=()=>Object.entries(s).map(([u,d])=>eS({allowFailure:i,chainId:parseInt(u),contracts:d.map(({contract:p})=>p),blockNumber:e,blockTag:n})),l=(await Promise.all(a())).flat(),c=Object.values(s).flatMap(u=>u.map(({index:d})=>d));return l.reduce((u,d,p)=>(u&&(u[c[p]]=d),u),[])}catch(o){if(o instanceof fg)throw o;const s=()=>t.map(a=>tS({...a,blockNumber:e,blockTag:n}));return i?(await Promise.allSettled(s())).map(a=>a.status==="fulfilled"?{result:a.value,status:"success"}:{error:a.reason,result:void 0,status:"failure"}):await Promise.all(s())}}async function rS({address:t,chainId:e,formatUnits:n,token:r}){const i=Br(),o=qa({chainId:e});if(r){const c=async({abi:u})=>{const d={abi:u,address:r,chainId:e},[p,w,y]=await nS({allowFailure:!1,contracts:[{...d,functionName:"balanceOf",args:[t]},{...d,functionName:"decimals"},{...d,functionName:"symbol"}]});return{decimals:w,formatted:Vd(p??"0",Jy(n??w)),symbol:y,value:p}};try{return await c({abi:Q9})}catch(u){if(u instanceof fg){const{symbol:d,...p}=await c({abi:J9});return{symbol:Qb(Lo(d,{dir:"right"})),...p}}throw u}}const s=[...i.publicClient.chains||[],...i.chains??[]],a=await o.getBalance({address:t}),l=s.find(c=>c.id===o.chain.id);return{decimals:(l==null?void 0:l.nativeCurrency.decimals)??18,formatted:Vd(a??"0",Jy(n??18)),symbol:(l==null?void 0:l.nativeCurrency.symbol)??"ETH",value:a}}function E1(){const{data:t,connector:e,status:n}=Br();switch(n){case"connected":return{address:t==null?void 0:t.account,connector:e,isConnected:!0,isConnecting:!1,isDisconnected:!1,isReconnecting:!1,status:n};case"reconnecting":return{address:t==null?void 0:t.account,connector:e,isConnected:!!(t!=null&&t.account),isConnecting:!1,isDisconnected:!1,isReconnecting:!0,status:n};case"connecting":return{address:t==null?void 0:t.account,connector:e,isConnected:!1,isConnecting:!0,isDisconnected:!1,isReconnecting:!1,status:n};case"disconnected":return{address:void 0,connector:void 0,isConnected:!1,isConnecting:!1,isDisconnected:!0,isReconnecting:!1,status:n}}}function _1(){var i,o,s,a;const t=Br(),e=(o=(i=t.data)==null?void 0:i.chain)==null?void 0:o.id,n=t.chains??[],r=[...((s=t.publicClient)==null?void 0:s.chains)||[],...n].find(l=>l.id===e)??{id:e,name:`Chain ${e}`,network:`${e}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}};return{chain:e?{...r,...(a=t.data)==null?void 0:a.chain,id:e}:void 0,chains:n}}async function iS(t){const e=await X9();if(!e)throw new _i;return await e.signMessage({message:t.message})}async function oS({chainId:t}){const{connector:e}=Br();if(!e)throw new _i;if(!e.switchChain)throw new H9({connector:e});return e.switchChain(t)}function sS(t,{selector:e=n=>n}={}){const n=Br(),r=()=>t(E1());return n.subscribe(({data:o,connector:s,status:a})=>e({address:o==null?void 0:o.account,connector:s,status:a}),r,{equalityFn:q5})}function aS(t,{selector:e=n=>n}={}){const n=Br(),r=()=>t(_1());return n.subscribe(({data:o,chains:s})=>{var a;return e({chainId:(a=o==null?void 0:o.chain)==null?void 0:a.id,chains:s})},r,{equalityFn:q5})}async function lS({name:t,chainId:e}){const{normalize:n}=await ha(()=>import("./index-A6qgbysQ.js"),__vite__mapDeps([]));return await qa({chainId:e}).getEnsAvatar({name:n(t)})}async function cS({address:t,chainId:e}){return qa({chainId:e}).getEnsName({address:Fn(t)})}const uS=Symbol(),rv=Object.getPrototypeOf,C1=new WeakMap,dS=t=>t&&(C1.has(t)?C1.get(t):rv(t)===Object.prototype||rv(t)===Array.prototype),fS=t=>dS(t)&&t[uS]||null,iv=(t,e=!0)=>{C1.set(t,e)};var Jd={VITE_PROJECT_ID:"678b2f9229f99e6fd49a7bd85bd1b88a",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const D0=t=>typeof t=="object"&&t!==null,Ci=new WeakMap,yl=new WeakSet,hS=(t=Object.is,e=(c,u)=>new Proxy(c,u),n=c=>D0(c)&&!yl.has(c)&&(Array.isArray(c)||!(Symbol.iterator in c))&&!(c instanceof WeakMap)&&!(c instanceof WeakSet)&&!(c instanceof Error)&&!(c instanceof Number)&&!(c instanceof Date)&&!(c instanceof String)&&!(c instanceof RegExp)&&!(c instanceof ArrayBuffer),r=c=>{switch(c.status){case"fulfilled":return c.value;case"rejected":throw c.reason;default:throw c}},i=new WeakMap,o=(c,u,d=r)=>{const p=i.get(c);if((p==null?void 0:p[0])===u)return p[1];const w=Array.isArray(c)?[]:Object.create(Object.getPrototypeOf(c));return iv(w,!0),i.set(c,[u,w]),Reflect.ownKeys(c).forEach(y=>{if(Object.getOwnPropertyDescriptor(w,y))return;const E=Reflect.get(c,y),C={value:E,enumerable:!0,configurable:!0};if(yl.has(E))iv(E,!1);else if(E instanceof Promise)delete C.value,C.get=()=>d(E);else if(Ci.has(E)){const[b,m]=Ci.get(E);C.value=o(b,m(),d)}Object.defineProperty(w,y,C)}),Object.preventExtensions(w)},s=new WeakMap,a=[1,1],l=c=>{if(!D0(c))throw new Error("object required");const u=s.get(c);if(u)return u;let d=a[0];const p=new Set,w=(O,D=++a[0])=>{d!==D&&(d=D,p.forEach(M=>M(O,D)))};let y=a[1];const E=(O=++a[1])=>(y!==O&&!p.size&&(y=O,b.forEach(([D])=>{const M=D[1](O);M>d&&(d=M)})),d),C=O=>(D,M)=>{const ee=[...D];ee[1]=[O,...ee[1]],w(ee,M)},b=new Map,m=(O,D)=>{if((Jd?"production":void 0)!=="production"&&b.has(O))throw new Error("prop listener already exists");if(p.size){const M=D[3](C(O));b.set(O,[D,M])}else b.set(O,[D])},v=O=>{var D;const M=b.get(O);M&&(b.delete(O),(D=M[1])==null||D.call(M))},x=O=>(p.add(O),p.size===1&&b.forEach(([M,ee],ne)=>{if((Jd?"production":void 0)!=="production"&&ee)throw new Error("remove already exists");const H=M[3](C(ne));b.set(ne,[M,H])}),()=>{p.delete(O),p.size===0&&b.forEach(([M,ee],ne)=>{ee&&(ee(),b.set(ne,[M]))})}),_=Array.isArray(c)?[]:Object.create(Object.getPrototypeOf(c)),f=e(_,{deleteProperty(O,D){const M=Reflect.get(O,D);v(D);const ee=Reflect.deleteProperty(O,D);return ee&&w(["delete",[D],M]),ee},set(O,D,M,ee){const ne=Reflect.has(O,D),H=Reflect.get(O,D,ee);if(ne&&(t(H,M)||s.has(M)&&t(H,s.get(M))))return!0;v(D),D0(M)&&(M=fS(M)||M);let F=M;if(M instanceof Promise)M.then(j=>{M.status="fulfilled",M.value=j,w(["resolve",[D],j])}).catch(j=>{M.status="rejected",M.reason=j,w(["reject",[D],j])});else{!Ci.has(M)&&n(M)&&(F=l(M));const j=!yl.has(F)&&Ci.get(F);j&&m(D,j)}return Reflect.set(O,D,F,ee),w(["set",[D],M,H]),!0}});s.set(c,f);const T=[_,E,o,x];return Ci.set(f,T),Reflect.ownKeys(c).forEach(O=>{const D=Object.getOwnPropertyDescriptor(c,O);"value"in D&&(f[O]=c[O],delete D.value,delete D.writable),Object.defineProperty(_,O,D)}),f})=>[l,Ci,yl,t,e,n,r,i,o,s,a],[pS]=hS();function an(t={}){return pS(t)}function hi(t,e,n){const r=Ci.get(t);(Jd?"production":void 0)!=="production"&&!r&&console.warn("Please use proxy object");let i;const o=[],s=r[3];let a=!1;const c=s(u=>{if(o.push(u),n){e(o.splice(0));return}i||(i=Promise.resolve().then(()=>{i=void 0,a&&e(o.splice(0))}))});return a=!0,()=>{a=!1,c()}}function Y5(t,e){const n=Ci.get(t);(Jd?"production":void 0)!=="production"&&!n&&console.warn("Please use proxy object");const[r,i,o]=n;return o(r,i(),e)}function vc(t){return yl.add(t),t}function vr(t,e,n,r){let i=t[e];return hi(t,()=>{const o=t[e];Object.is(i,o)||n(i=o)},r)}var Q5={exports:{}},J5={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pa=zt;function mS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var gS=typeof Object.is=="function"?Object.is:mS,wS=pa.useState,yS=pa.useEffect,vS=pa.useLayoutEffect,bS=pa.useDebugValue;function xS(t,e){var n=e(),r=wS({inst:{value:n,getSnapshot:e}}),i=r[0].inst,o=r[1];return vS(function(){i.value=n,i.getSnapshot=e,R0(i)&&o({inst:i})},[t,n,e]),yS(function(){return R0(i)&&o({inst:i}),t(function(){R0(i)&&o({inst:i})})},[t]),bS(n),n}function R0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!gS(t,n)}catch{return!0}}function ES(t,e){return e()}var _S=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?ES:xS;J5.useSyncExternalStore=pa.useSyncExternalStore!==void 0?pa.useSyncExternalStore:_S;Q5.exports=J5;var CS=Q5.exports;const N0="https://secure.web3modal.com",Jr={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,ONE_SEC_MS:1e3,SECURE_SITE:N0,SECURE_SITE_DASHBOARD:`${N0}/dashboard`,SECURE_SITE_FAVICON:`${N0}/images/favicon.png`,RESTRICTED_TIMEZONES:["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],CONNECTOR_RDNS_MAP:{coinbaseWallet:"com.coinbase.wallet"}},de={isMobile(){return typeof window<"u"?!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},isAndroid(){const t=window.navigator.userAgent.toLowerCase();return de.isMobile()&&t.includes("android")},isIos(){const t=window.navigator.userAgent.toLowerCase();return de.isMobile()&&(t.includes("iphone")||t.includes("ipad"))},isClient(){return typeof window<"u"},isPairingExpired(t){return t?t-Date.now()<=Jr.TEN_SEC_MS:!0},isAllowedRetry(t){return Date.now()-t>=Jr.ONE_SEC_MS},copyToClopboard(t){navigator.clipboard.writeText(t)},getPairingExpiry(){return Date.now()+Jr.FOUR_MINUTES_MS},getPlainAddress(t){return t.split(":")[2]},async wait(t){return new Promise(e=>{setTimeout(e,t)})},debounce(t,e=500){let n;return(...r)=>{function i(){t(...r)}n&&clearTimeout(n),n=setTimeout(i,e)}},isHttpUrl(t){return t.startsWith("http://")||t.startsWith("https://")},formatNativeUrl(t,e){if(de.isHttpUrl(t))return this.formatUniversalUrl(t,e);let n=t;n.includes("://")||(n=t.replaceAll("/","").replaceAll(":",""),n=`${n}://`),n.endsWith("/")||(n=`${n}/`);const r=encodeURIComponent(e);return{redirect:`${n}wc?uri=${r}`,href:n}},formatUniversalUrl(t,e){if(!de.isHttpUrl(t))return this.formatNativeUrl(t,e);let n=t;n.endsWith("/")||(n=`${n}/`);const r=encodeURIComponent(e);return{redirect:`${n}wc?uri=${r}`,href:n}},openHref(t,e){window.open(t,e,"noreferrer noopener")},async preloadImage(t){const e=new Promise((n,r)=>{const i=new Image;i.onload=n,i.onerror=r,i.crossOrigin="anonymous",i.src=t});return Promise.race([e,de.wait(2e3)])},formatBalance(t,e){var r;let n;if(t==="0")n="0.000";else if(typeof t=="string"){const i=Number(t);i&&(n=(r=i.toString().match(/^-?\d+(?:\.\d{0,3})?/u))==null?void 0:r[0])}return n?`${n} ${e}`:`0.000 ${e}`},isRestrictedRegion(){try{const{timeZone:t}=new Intl.DateTimeFormat().resolvedOptions(),e=t.toUpperCase();return Jr.RESTRICTED_TIMEZONES.includes(e)}catch{return!1}},getApiUrl(){return de.isRestrictedRegion()?"https://api.web3modal.org":"https://api.web3modal.com"},getBlockchainApiUrl(){return de.isRestrictedRegion()?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com"},getAnalyticsUrl(){return de.isRestrictedRegion()?"https://pulse.walletconnect.org":"https://pulse.walletconnect.com"},getUUID(){return crypto!=null&&crypto.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,t=>{const e=Math.random()*16|0;return(t==="x"?e:e&3|8).toString(16)})},parseError(t){var e,n;return typeof t=="string"?t:typeof((n=(e=t==null?void 0:t.issues)==null?void 0:e[0])==null?void 0:n.message)=="string"?t.issues[0].message:t instanceof Error?t.message:"Unknown error"}},bt=an({isConnected:!1}),je={state:bt,subscribe(t){return hi(bt,()=>t(bt))},subscribeKey(t,e){return vr(bt,t,e)},setIsConnected(t){bt.isConnected=t},setCaipAddress(t){bt.caipAddress=t,bt.address=t?de.getPlainAddress(t):void 0},setBalance(t,e){bt.balance=t,bt.balanceSymbol=e},setProfileName(t){bt.profileName=t},setProfileImage(t){bt.profileImage=t},setAddressExplorerUrl(t){bt.addressExplorerUrl=t},resetAccount(){bt.isConnected=!1,bt.caipAddress=void 0,bt.address=void 0,bt.balance=void 0,bt.balanceSymbol=void 0,bt.profileName=void 0,bt.profileImage=void 0,bt.addressExplorerUrl=void 0}};class Og{constructor({baseUrl:e}){this.baseUrl=e}async get({headers:e,...n}){const r=this.createUrl(n);return(await fetch(r,{method:"GET",headers:e})).json()}async getBlob({headers:e,...n}){const r=this.createUrl(n);return(await fetch(r,{method:"GET",headers:e})).blob()}async post({body:e,headers:n,...r}){const i=this.createUrl(r);return(await fetch(i,{method:"POST",headers:n,body:e?JSON.stringify(e):void 0})).json()}async put({body:e,headers:n,...r}){const i=this.createUrl(r);return(await fetch(i,{method:"PUT",headers:n,body:e?JSON.stringify(e):void 0})).json()}async delete({body:e,headers:n,...r}){const i=this.createUrl(r);return(await fetch(i,{method:"DELETE",headers:n,body:e?JSON.stringify(e):void 0})).json()}createUrl({path:e,params:n}){const r=new URL(e,this.baseUrl);return n&&Object.entries(n).forEach(([i,o])=>{o&&r.searchParams.append(i,o)}),r}}const M0="WALLETCONNECT_DEEPLINK_CHOICE",ov="@w3m/recent",sv="@w3m/connected_wallet_image_url",av="@w3m/connected_connector",Xt={setWalletConnectDeepLink({href:t,name:e}){try{localStorage.setItem(M0,JSON.stringify({href:t,name:e}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{const t=localStorage.getItem(M0);if(t)return JSON.parse(t)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{localStorage.removeItem(M0)}catch{console.info("Unable to delete WalletConnect deep link")}},setWeb3ModalRecent(t){try{const e=Xt.getRecentWallets();e.find(r=>r.id===t.id)||(e.unshift(t),e.length>2&&e.pop(),localStorage.setItem(ov,JSON.stringify(e)))}catch{console.info("Unable to set Web3Modal recent")}},getRecentWallets(){try{const t=localStorage.getItem(ov);return t?JSON.parse(t):[]}catch{console.info("Unable to get Web3Modal recent")}return[]},setConnectedWalletImageUrl(t){try{localStorage.setItem(sv,t)}catch{console.info("Unable to set Connected Wallet Image Url")}},getConnectedWalletImageUrl(){try{return localStorage.getItem(sv)}catch{console.info("Unable to set Connected Wallet Image Url")}},setConnectedConnector(t){try{localStorage.setItem(av,t)}catch{console.info("Unable to set Connected Connector")}},getConnectedConnector(){try{return localStorage.getItem(av)}catch{console.info("Unable to get Connected Connector")}}},bi=an({walletImages:{},networkImages:{},connectorImages:{},tokenImages:{}}),ea={state:bi,subscribeNetworkImages(t){return hi(bi.networkImages,()=>t(bi.networkImages))},subscribeKey(t,e){return vr(bi,t,e)},setWalletImage(t,e){bi.walletImages[t]=e},setNetworkImage(t,e){bi.networkImages[t]=e},setConnectorImage(t,e){bi.connectorImages[t]=e},setTokenImage(t,e){bi.tokenImages[t]=e}},En=an({projectId:"",sdkType:"w3m",sdkVersion:"html-wagmi-undefined"}),We={state:En,subscribeKey(t,e){return vr(En,t,e)},setProjectId(t){En.projectId=t},setIncludeWalletIds(t){En.includeWalletIds=t},setExcludeWalletIds(t){En.excludeWalletIds=t},setFeaturedWalletIds(t){En.featuredWalletIds=t},setTokens(t){En.tokens=t},setTermsConditionsUrl(t){En.termsConditionsUrl=t},setPrivacyPolicyUrl(t){En.privacyPolicyUrl=t},setCustomWallets(t){En.customWallets=t},setEnableAnalytics(t){En.enableAnalytics=t},setSdkVersion(t){En.sdkVersion=t},setMetadata(t){En.metadata=t}},vo=an({connectors:[]}),Ge={state:vo,subscribeKey(t,e){return vr(vo,t,e)},setConnectors(t){vo.connectors=t.map(e=>vc(e))},addConnector(t){var e,n;if(vo.connectors.push(vc(t)),t.id==="w3mEmail"){const r=t,i=Y5(We.state);(n=(e=r==null?void 0:r.provider)==null?void 0:e.syncDappData)==null||n.call(e,{metadata:i.metadata,sdkVersion:i.sdkVersion,projectId:i.projectId})}},getEmailConnector(){return vo.connectors.find(t=>t.type==="EMAIL")},getAnnouncedConnectorRdns(){return vo.connectors.filter(t=>t.type==="ANNOUNCED").map(t=>{var e;return(e=t.info)==null?void 0:e.rdns})},getConnectors(){return vo.connectors}},cl=an({open:!1,selectedNetworkId:void 0}),ma={state:cl,subscribe(t){return hi(cl,()=>t(cl))},set(t){Object.assign(cl,{...cl,...t})}},Bt=an({supportsAllNetworks:!0,isDefaultCaipNetwork:!1}),ht={state:Bt,subscribeKey(t,e){return vr(Bt,t,e)},_getClient(){if(!Bt._client)throw new Error("NetworkController client not set");return Bt._client},setClient(t){Bt._client=vc(t)},setCaipNetwork(t){Bt.caipNetwork=t,ma.set({selectedNetworkId:t==null?void 0:t.id})},setDefaultCaipNetwork(t){Bt.caipNetwork=t,ma.set({selectedNetworkId:t==null?void 0:t.id}),Bt.isDefaultCaipNetwork=!0},setRequestedCaipNetworks(t){Bt.requestedCaipNetworks=t},async getApprovedCaipNetworksData(){const t=await this._getClient().getApprovedCaipNetworksData();Bt.supportsAllNetworks=t.supportsAllNetworks,Bt.approvedCaipNetworkIds=t.approvedCaipNetworkIds},async switchActiveNetwork(t){await this._getClient().switchCaipNetwork(t),Bt.caipNetwork=t},resetNetwork(){Bt.isDefaultCaipNetwork||(Bt.caipNetwork=void 0),Bt.approvedCaipNetworkIds=void 0,Bt.supportsAllNetworks=!0}},SS=de.getApiUrl(),Cr=new Og({baseUrl:SS}),AS="40",lv="4",Kt=an({page:1,count:0,featured:[],recommended:[],wallets:[],search:[]}),De={state:Kt,subscribeKey(t,e){return vr(Kt,t,e)},_getApiHeaders(){const{projectId:t,sdkType:e,sdkVersion:n}=We.state;return{"x-project-id":t,"x-sdk-type":e,"x-sdk-version":n}},async _fetchWalletImage(t){const e=`${Cr.baseUrl}/getWalletImage/${t}`,n=await Cr.getBlob({path:e,headers:De._getApiHeaders()});ea.setWalletImage(t,URL.createObjectURL(n))},async _fetchNetworkImage(t){const e=`${Cr.baseUrl}/public/getAssetImage/${t}`,n=await Cr.getBlob({path:e,headers:De._getApiHeaders()});ea.setNetworkImage(t,URL.createObjectURL(n))},async _fetchConnectorImage(t){const e=`${Cr.baseUrl}/public/getAssetImage/${t}`,n=await Cr.getBlob({path:e,headers:De._getApiHeaders()});ea.setConnectorImage(t,URL.createObjectURL(n))},async fetchNetworkImages(){const{requestedCaipNetworks:t}=ht.state,e=t==null?void 0:t.map(({imageId:n})=>n).filter(Boolean);e&&await Promise.allSettled(e.map(n=>De._fetchNetworkImage(n)))},async fetchConnectorImages(){const{connectors:t}=Ge.state,e=t.map(({imageId:n})=>n).filter(Boolean);await Promise.allSettled(e.map(n=>De._fetchConnectorImage(n)))},async fetchFeaturedWallets(){const{featuredWalletIds:t}=We.state;if(t!=null&&t.length){const{data:e}=await Cr.get({path:"/getWallets",headers:De._getApiHeaders(),params:{page:"1",entries:t!=null&&t.length?String(t.length):lv,include:t==null?void 0:t.join(",")}});e.sort((r,i)=>t.indexOf(r.id)-t.indexOf(i.id));const n=e.map(r=>r.image_id).filter(Boolean);await Promise.allSettled(n.map(r=>De._fetchWalletImage(r))),Kt.featured=e}},async fetchRecommendedWallets(){const{includeWalletIds:t,excludeWalletIds:e,featuredWalletIds:n}=We.state,r=[...e??[],...n??[]].filter(Boolean),{data:i,count:o}=await Cr.get({path:"/getWallets",headers:De._getApiHeaders(),params:{page:"1",entries:lv,include:t==null?void 0:t.join(","),exclude:r==null?void 0:r.join(",")}}),s=Xt.getRecentWallets(),a=i.map(c=>c.image_id).filter(Boolean),l=s.map(c=>c.image_id).filter(Boolean);await Promise.allSettled([...a,...l].map(c=>De._fetchWalletImage(c))),Kt.recommended=i,Kt.count=o??0},async fetchWallets({page:t}){const{includeWalletIds:e,excludeWalletIds:n,featuredWalletIds:r}=We.state,i=[...Kt.recommended.map(({id:l})=>l),...n??[],...r??[]].filter(Boolean),{data:o,count:s}=await Cr.get({path:"/getWallets",headers:De._getApiHeaders(),params:{page:String(t),entries:AS,include:e==null?void 0:e.join(","),exclude:i.join(",")}}),a=o.map(l=>l.image_id).filter(Boolean);await Promise.allSettled([...a.map(l=>De._fetchWalletImage(l)),de.wait(300)]),Kt.wallets=[...Kt.wallets,...o],Kt.count=s>Kt.count?s:Kt.count,Kt.page=t},async searchWallet({search:t}){const{includeWalletIds:e,excludeWalletIds:n}=We.state;Kt.search=[];const{data:r}=await Cr.get({path:"/getWallets",headers:De._getApiHeaders(),params:{page:"1",entries:"100",search:t,include:e==null?void 0:e.join(","),exclude:n==null?void 0:n.join(",")}}),i=r.map(o=>o.image_id).filter(Boolean);await Promise.allSettled([...i.map(o=>De._fetchWalletImage(o)),de.wait(300)]),Kt.search=r},prefetch(){Kt.prefetchPromise=Promise.race([Promise.allSettled([De.fetchFeaturedWallets(),De.fetchRecommendedWallets(),De.fetchNetworkImages(),De.fetchConnectorImages()]),de.wait(3e3)])}},TS=de.getAnalyticsUrl(),PS=new Og({baseUrl:TS}),$S=["MODAL_CREATED"],Cs=an({timestamp:Date.now(),data:{type:"track",event:"MODAL_CREATED"}}),xe={state:Cs,subscribe(t){return hi(Cs,()=>t(Cs))},_getApiHeaders(){const{projectId:t,sdkType:e,sdkVersion:n}=We.state;return{"x-project-id":t,"x-sdk-type":e,"x-sdk-version":n}},async _sendAnalyticsEvent(t){try{if($S.includes(t.data.event)||typeof window>"u")return;await PS.post({path:"/e",headers:xe._getApiHeaders(),body:{eventId:de.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:t.timestamp,props:t.data}})}catch{}},sendEvent(t){Cs.timestamp=Date.now(),Cs.data=t,We.state.enableAnalytics&&xe._sendAnalyticsEvent(Cs)}},rt=an({view:"Connect",history:["Connect"]}),ce={state:rt,subscribeKey(t,e){return vr(rt,t,e)},push(t,e){t!==rt.view&&(rt.view=t,rt.history.push(t),rt.data=e)},reset(t){rt.view=t,rt.history=[t]},replace(t,e){rt.history.length>1&&rt.history.at(-1)!==t&&(rt.view=t,rt.history[rt.history.length-1]=t,rt.data=e)},goBack(){if(rt.history.length>1){rt.history.pop();const[t]=rt.history.slice(-1);t&&(rt.view=t)}},goBackToIndex(t){if(rt.history.length>1){rt.history=rt.history.slice(0,t+1);const[e]=rt.history.slice(-1);e&&(rt.view=e)}}},bo=an({loading:!1,open:!1}),Ke={state:bo,subscribe(t){return hi(bo,()=>t(bo))},subscribeKey(t,e){return vr(bo,t,e)},async open(t){await De.state.prefetchPromise,t!=null&&t.view?ce.reset(t.view):je.state.isConnected?ce.reset("Account"):ce.reset("Connect"),bo.open=!0,ma.set({open:!0}),xe.sendEvent({type:"track",event:"MODAL_OPEN"})},close(){bo.open=!1,ma.set({open:!1}),xe.sendEvent({type:"track",event:"MODAL_CLOSE"})},setLoading(t){bo.loading=t}},IS=de.getBlockchainApiUrl(),cv=new Og({baseUrl:IS}),X5={fetchIdentity({caipChainId:t,address:e}){return cv.get({path:`/v1/identity/${e}`,params:{chainId:t,projectId:We.state.projectId}})},fetchTransactions({account:t,projectId:e,cursor:n}){const r=n?{cursor:n}:{};return cv.get({path:`/v1/account/${t}/history?projectId=${e}`,params:r})}},Hr=an({message:"",variant:"success",open:!1}),pt={state:Hr,subscribeKey(t,e){return vr(Hr,t,e)},showSuccess(t){Hr.message=t,Hr.variant="success",Hr.open=!0},showError(t){const e=de.parseError(t);Hr.message=e,Hr.variant="error",Hr.open=!0},hide(){Hr.open=!1}},xt=an({transactions:[],transactionsByYear:{},loading:!1,empty:!1,next:void 0}),Qn={state:xt,subscribe(t){return hi(xt,()=>t(xt))},async fetchTransactions(t){const{projectId:e}=We.state;if(!e||!t)throw new Error("Transactions can't be fetched without a projectId and an accountAddress");xt.loading=!0;try{const n=await X5.fetchTransactions({account:t,projectId:e,cursor:xt.next}),r=this.filterSpamTransactions(n.data),i=[...xt.transactions,...r];xt.loading=!1,xt.transactions=i,xt.transactionsByYear=this.groupTransactionsByYear(xt.transactionsByYear,r),xt.empty=i.length===0,xt.next=n.next?n.next:void 0}catch{xe.sendEvent({type:"track",event:"ERROR_FETCH_TRANSACTIONS",properties:{address:t,projectId:e,cursor:xt.next}}),pt.showError("Failed to fetch transactions"),xt.loading=!1,xt.empty=!0}},groupTransactionsByYear(t={},e=[]){const n=t;return e.forEach(r=>{var o;const i=new Date(r.metadata.minedAt).getFullYear();n[i]||(n[i]=[]),(o=n[i])==null||o.push(r)}),n},filterSpamTransactions(t){return t.filter(e=>!e.transfers.every(r=>{var i;return((i=r.nft_info)==null?void 0:i.flags.is_spam)===!0}))},resetTransactions(){xt.transactions=[],xt.transactionsByYear={},xt.loading=!1,xt.empty=!1,xt.next=void 0}},It=an({wcError:!1,buffering:!1}),Me={state:It,subscribeKey(t,e){return vr(It,t,e)},_getClient(){if(!It._client)throw new Error("ConnectionController client not set");return It._client},setClient(t){It._client=vc(t)},connectWalletConnect(){It.wcPromise=this._getClient().connectWalletConnect(t=>{It.wcUri=t,It.wcPairingExpiry=de.getPairingExpiry()})},async connectExternal(t){var e,n;await((n=(e=this._getClient()).connectExternal)==null?void 0:n.call(e,t)),Xt.setConnectedConnector(t.type)},async signMessage(t){return this._getClient().signMessage(t)},checkInstalled(t){var e,n;return(n=(e=this._getClient()).checkInstalled)==null?void 0:n.call(e,t)},resetWcConnection(){It.wcUri=void 0,It.wcPairingExpiry=void 0,It.wcPromise=void 0,It.wcLinking=void 0,It.recentWallet=void 0,Qn.resetTransactions(),Xt.deleteWalletConnectDeepLink()},setWcLinking(t){It.wcLinking=t},setWcError(t){It.wcError=t,It.buffering=!1},setRecentWallet(t){It.recentWallet=t},setBuffering(t){It.buffering=t},async disconnect(){await this._getClient().disconnect(),this.resetWcConnection()}},_n=an({status:"uninitialized",isSiweEnabled:!1}),wt={state:_n,subscribeKey(t,e){return vr(_n,t,e)},subscribe(t){return hi(_n,()=>t(_n))},_getClient(){if(!_n._client)throw new Error("SIWEController client not set");return _n._client},async getNonce(){const e=await this._getClient().getNonce();return this.setNonce(e),e},async getSession(){const e=await this._getClient().getSession();return e&&(this.setSession(e),this.setStatus("success")),e},createMessage(t){const n=this._getClient().createMessage(t);return this.setMessage(n),n},async verifyMessage(t){return await this._getClient().verifyMessage(t)},async signIn(){return await this._getClient().signIn()},async signOut(){var e;const t=this._getClient();await t.signOut(),this.setStatus("ready"),(e=t.onSignOut)==null||e.call(t)},onSignIn(t){var n;const e=this._getClient();(n=e.onSignIn)==null||n.call(e,t)},onSignOut(){var e;const t=this._getClient();(e=t.onSignOut)==null||e.call(t)},setSIWEClient(t){_n._client=vc(t),_n.status="ready",_n.isSiweEnabled=t.options.enabled},setNonce(t){_n.nonce=t},setStatus(t){_n.status=t},setMessage(t){_n.message=t},setSession(t){_n.session=t}},xo=an({themeMode:"dark",themeVariables:{}}),cn={state:xo,subscribe(t){return hi(xo,()=>t(xo))},setThemeMode(t){xo.themeMode=t},setThemeVariables(t){xo.themeVariables={...xo.themeVariables,...t}},getSnapshot(){return Y5(xo)}},ft={getWalletImage(t){if(t!=null&&t.image_url)return t==null?void 0:t.image_url;if(t!=null&&t.image_id)return ea.state.walletImages[t.image_id]},getNetworkImage(t){if(t!=null&&t.imageUrl)return t==null?void 0:t.imageUrl;if(t!=null&&t.imageId)return ea.state.networkImages[t.imageId]},getConnectorImage(t){if(t!=null&&t.imageUrl)return t.imageUrl;if(t!=null&&t.imageId)return ea.state.connectorImages[t.imageId]}},e4={goBackOrCloseModal(){ce.state.history.length>1?ce.goBack():Ke.close()},navigateAfterNetworkSwitch(){const{history:t}=ce.state,e=t.findIndex(n=>n==="Networks");e>=1?ce.goBackToIndex(e-1):Ke.close()}};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gd=globalThis,Dg=gd.ShadowRoot&&(gd.ShadyCSS===void 0||gd.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Rg=Symbol(),uv=new WeakMap;let t4=class{constructor(e,n,r){if(this._$cssResult$=!0,r!==Rg)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(Dg&&e===void 0){const r=n!==void 0&&n.length===1;r&&(e=uv.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&uv.set(n,e))}return e}toString(){return this.cssText}};const Ar=t=>new t4(typeof t=="string"?t:t+"",void 0,Rg),J=(t,...e)=>{const n=t.length===1?t[0]:e.reduce((r,i,o)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1],t[0]);return new t4(n,t,Rg)},kS=(t,e)=>{if(Dg)t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of e){const r=document.createElement("style"),i=gd.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=n.cssText,t.appendChild(r)}},dv=Dg?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(const r of e.cssRules)n+=r.cssText;return Ar(n)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:OS,defineProperty:DS,getOwnPropertyDescriptor:RS,getOwnPropertyNames:NS,getOwnPropertySymbols:MS,getPrototypeOf:LS}=Object,zi=globalThis,fv=zi.trustedTypes,US=fv?fv.emptyScript:"",L0=zi.reactiveElementPolyfillSupport,kl=(t,e)=>t,Xd={toAttribute(t,e){switch(e){case Boolean:t=t?US:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},Ng=(t,e)=>!OS(t,e),hv={attribute:!0,type:String,converter:Xd,reflect:!1,hasChanged:Ng};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),zi.litPropertyMetadata??(zi.litPropertyMetadata=new WeakMap);let $s=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,n=hv){if(n.state&&(n.attribute=!1),this._$Ei(),this.elementProperties.set(e,n),!n.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(e,r,n);i!==void 0&&DS(this.prototype,e,i)}}static getPropertyDescriptor(e,n,r){const{get:i,set:o}=RS(this.prototype,e)??{get(){return this[n]},set(s){this[n]=s}};return{get(){return i==null?void 0:i.call(this)},set(s){const a=i==null?void 0:i.call(this);o.call(this,s),this.requestUpdate(e,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??hv}static _$Ei(){if(this.hasOwnProperty(kl("elementProperties")))return;const e=LS(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(kl("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(kl("properties"))){const n=this.properties,r=[...NS(n),...MS(n)];for(const i of r)this.createProperty(i,n[i])}const e=this[Symbol.metadata];if(e!==null){const n=litPropertyMetadata.get(e);if(n!==void 0)for(const[r,i]of n)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const i=this._$Eu(n,r);i!==void 0&&this._$Eh.set(i,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const i of r)n.unshift(dv(i))}else e!==void 0&&n.push(dv(e));return n}static _$Eu(e,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(n=>n(this))}addController(e){var n;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)==null||n.call(e))}removeController(e){var n;(n=this._$EO)==null||n.delete(e)}_$E_(){const e=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return kS(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(n=>{var r;return(r=n.hostConnected)==null?void 0:r.call(n)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(n=>{var r;return(r=n.hostDisconnected)==null?void 0:r.call(n)})}attributeChangedCallback(e,n,r){this._$AK(e,r)}_$EC(e,n){var o;const r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(i!==void 0&&r.reflect===!0){const s=(((o=r.converter)==null?void 0:o.toAttribute)!==void 0?r.converter:Xd).toAttribute(n,r.type);this._$Em=e,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(e,n){var o;const r=this.constructor,i=r._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const s=r.getPropertyOptions(i),a=typeof s.converter=="function"?{fromAttribute:s.converter}:((o=s.converter)==null?void 0:o.fromAttribute)!==void 0?s.converter:Xd;this._$Em=i,this[i]=a.fromAttribute(n,s.type),this._$Em=null}}requestUpdate(e,n,r){if(e!==void 0){if(r??(r=this.constructor.getPropertyOptions(e)),!(r.hasChanged??Ng)(this[e],n))return;this.P(e,n,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,n,r){this._$AL.has(e)||this._$AL.set(e,n),r.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,s]of i)s.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],s)}let e=!1;const n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),(r=this._$EO)==null||r.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(n)):this._$EU()}catch(i){throw e=!1,this._$EU(),i}e&&this._$AE(n)}willUpdate(e){}_$AE(e){var n;(n=this._$EO)==null||n.forEach(r=>{var i;return(i=r.hostUpdated)==null?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(n=>this._$EC(n,this[n]))),this._$EU()}updated(e){}firstUpdated(e){}};$s.elementStyles=[],$s.shadowRootOptions={mode:"open"},$s[kl("elementProperties")]=new Map,$s[kl("finalized")]=new Map,L0==null||L0({ReactiveElement:$s}),(zi.reactiveElementVersions??(zi.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ol=globalThis,ef=Ol.trustedTypes,pv=ef?ef.createPolicy("lit-html",{createHTML:t=>t}):void 0,n4="$lit$",Pi=`lit$${(Math.random()+"").slice(9)}$`,r4="?"+Pi,jS=`<${r4}>`,Go=document,bc=()=>Go.createComment(""),xc=t=>t===null||typeof t!="object"&&typeof t!="function",i4=Array.isArray,BS=t=>i4(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",U0=`[ 	
\f\r]`,ul=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,mv=/-->/g,gv=/>/g,Eo=RegExp(`>|${U0}(?:([^\\s"'>=/]+)(${U0}*=${U0}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),wv=/'/g,yv=/"/g,o4=/^(?:script|style|textarea|title)$/i,s4=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),$=s4(1),te=s4(2),Ko=Symbol.for("lit-noChange"),yt=Symbol.for("lit-nothing"),vv=new WeakMap,ko=Go.createTreeWalker(Go,129);function a4(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return pv!==void 0?pv.createHTML(e):e}const FS=(t,e)=>{const n=t.length-1,r=[];let i,o=e===2?"<svg>":"",s=ul;for(let a=0;a<n;a++){const l=t[a];let c,u,d=-1,p=0;for(;p<l.length&&(s.lastIndex=p,u=s.exec(l),u!==null);)p=s.lastIndex,s===ul?u[1]==="!--"?s=mv:u[1]!==void 0?s=gv:u[2]!==void 0?(o4.test(u[2])&&(i=RegExp("</"+u[2],"g")),s=Eo):u[3]!==void 0&&(s=Eo):s===Eo?u[0]===">"?(s=i??ul,d=-1):u[1]===void 0?d=-2:(d=s.lastIndex-u[2].length,c=u[1],s=u[3]===void 0?Eo:u[3]==='"'?yv:wv):s===yv||s===wv?s=Eo:s===mv||s===gv?s=ul:(s=Eo,i=void 0);const w=s===Eo&&t[a+1].startsWith("/>")?" ":"";o+=s===ul?l+jS:d>=0?(r.push(c),l.slice(0,d)+n4+l.slice(d)+Pi+w):l+Pi+(d===-2?a:w)}return[a4(t,o+(t[n]||"<?>")+(e===2?"</svg>":"")),r]};let S1=class l4{constructor({strings:e,_$litType$:n},r){let i;this.parts=[];let o=0,s=0;const a=e.length-1,l=this.parts,[c,u]=FS(e,n);if(this.el=l4.createElement(c,r),ko.currentNode=this.el.content,n===2){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(i=ko.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const d of i.getAttributeNames())if(d.endsWith(n4)){const p=u[s++],w=i.getAttribute(d).split(Pi),y=/([.?@])?(.*)/.exec(p);l.push({type:1,index:o,name:y[2],strings:w,ctor:y[1]==="."?zS:y[1]==="?"?HS:y[1]==="@"?VS:gh}),i.removeAttribute(d)}else d.startsWith(Pi)&&(l.push({type:6,index:o}),i.removeAttribute(d));if(o4.test(i.tagName)){const d=i.textContent.split(Pi),p=d.length-1;if(p>0){i.textContent=ef?ef.emptyScript:"";for(let w=0;w<p;w++)i.append(d[w],bc()),ko.nextNode(),l.push({type:2,index:++o});i.append(d[p],bc())}}}else if(i.nodeType===8)if(i.data===r4)l.push({type:2,index:o});else{let d=-1;for(;(d=i.data.indexOf(Pi,d+1))!==-1;)l.push({type:7,index:o}),d+=Pi.length-1}o++}}static createElement(e,n){const r=Go.createElement("template");return r.innerHTML=e,r}};function ga(t,e,n=t,r){var s,a;if(e===Ko)return e;let i=r!==void 0?(s=n._$Co)==null?void 0:s[r]:n._$Cl;const o=xc(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((a=i==null?void 0:i._$AO)==null||a.call(i,!1),o===void 0?i=void 0:(i=new o(t),i._$AT(t,n,r)),r!==void 0?(n._$Co??(n._$Co=[]))[r]=i:n._$Cl=i),i!==void 0&&(e=ga(t,i._$AS(t,e.values),i,r)),e}let WS=class{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:n},parts:r}=this._$AD,i=((e==null?void 0:e.creationScope)??Go).importNode(n,!0);ko.currentNode=i;let o=ko.nextNode(),s=0,a=0,l=r[0];for(;l!==void 0;){if(s===l.index){let c;l.type===2?c=new uu(o,o.nextSibling,this,e):l.type===1?c=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(c=new qS(o,this,e)),this._$AV.push(c),l=r[++a]}s!==(l==null?void 0:l.index)&&(o=ko.nextNode(),s++)}return ko.currentNode=Go,i}p(e){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,n),n+=r.strings.length-2):r._$AI(e[n])),n++}};class uu{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,n,r,i){this.type=2,this._$AH=yt,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=r,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=ga(this,e,n),xc(e)?e===yt||e==null||e===""?(this._$AH!==yt&&this._$AR(),this._$AH=yt):e!==this._$AH&&e!==Ko&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):BS(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==yt&&xc(this._$AH)?this._$AA.nextSibling.data=e:this.T(Go.createTextNode(e)),this._$AH=e}$(e){var o;const{values:n,_$litType$:r}=e,i=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=S1.createElement(a4(r.h,r.h[0]),this.options)),r);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(n);else{const s=new WS(i,this),a=s.u(this.options);s.p(n),this.T(a),this._$AH=s}}_$AC(e){let n=vv.get(e.strings);return n===void 0&&vv.set(e.strings,n=new S1(e)),n}k(e){i4(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,i=0;for(const o of e)i===n.length?n.push(r=new uu(this.S(bc()),this.S(bc()),this,this.options)):r=n[i],r._$AI(o),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,n){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,n);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var n;this._$AM===void 0&&(this._$Cv=e,(n=this._$AP)==null||n.call(this,e))}}class gh{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,n,r,i,o){this.type=1,this._$AH=yt,this._$AN=void 0,this.element=e,this.name=n,this._$AM=i,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=yt}_$AI(e,n=this,r,i){const o=this.strings;let s=!1;if(o===void 0)e=ga(this,e,n,0),s=!xc(e)||e!==this._$AH&&e!==Ko,s&&(this._$AH=e);else{const a=e;let l,c;for(e=o[0],l=0;l<o.length-1;l++)c=ga(this,a[r+l],n,l),c===Ko&&(c=this._$AH[l]),s||(s=!xc(c)||c!==this._$AH[l]),c===yt?e=yt:e!==yt&&(e+=(c??"")+o[l+1]),this._$AH[l]=c}s&&!i&&this.j(e)}j(e){e===yt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}let zS=class extends gh{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===yt?void 0:e}},HS=class extends gh{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==yt)}};class VS extends gh{constructor(e,n,r,i,o){super(e,n,r,i,o),this.type=5}_$AI(e,n=this){if((e=ga(this,e,n,0)??yt)===Ko)return;const r=this._$AH,i=e===yt&&r!==yt||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,o=e!==yt&&(r===yt||i);i&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n;typeof this._$AH=="function"?this._$AH.call(((n=this.options)==null?void 0:n.host)??this.element,e):this._$AH.handleEvent(e)}}let qS=class{constructor(e,n,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){ga(this,e)}};const j0=Ol.litHtmlPolyfillSupport;j0==null||j0(S1,uu),(Ol.litHtmlVersions??(Ol.litHtmlVersions=[])).push("3.1.2");const ZS=(t,e,n)=>{const r=(n==null?void 0:n.renderBefore)??e;let i=r._$litPart$;if(i===void 0){const o=(n==null?void 0:n.renderBefore)??null;r._$litPart$=i=new uu(e.insertBefore(bc(),o),o,void 0,n??{})}return i._$AI(t),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let G=class extends $s{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var n;const e=super.createRenderRoot();return(n=this.renderOptions).renderBefore??(n.renderBefore=e.firstChild),e}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ZS(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Ko}};var k2;G._$litElement$=!0,G.finalized=!0,(k2=globalThis.litElementHydrateSupport)==null||k2.call(globalThis,{LitElement:G});const B0=globalThis.litElementPolyfillSupport;B0==null||B0({LitElement:G});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");let Dl,Hi,Vi;function c4(t,e){Dl=document.createElement("style"),Hi=document.createElement("style"),Vi=document.createElement("style"),Dl.textContent=ta(t).core.cssText,Hi.textContent=ta(t).dark.cssText,Vi.textContent=ta(t).light.cssText,document.head.appendChild(Dl),document.head.appendChild(Hi),document.head.appendChild(Vi),Mg(e)}function Mg(t){Hi&&Vi&&(t==="light"?(Hi.removeAttribute("media"),Vi.media="enabled"):(Vi.removeAttribute("media"),Hi.media="enabled"))}function u4(t){Dl&&Hi&&Vi&&(Dl.textContent=ta(t).core.cssText,Hi.textContent=ta(t).dark.cssText,Vi.textContent=ta(t).light.cssText)}function ta(t){return{core:J`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      :root {
        --w3m-color-mix-strength: ${Ar(t!=null&&t["--w3m-color-mix-strength"]?`${t["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${Ar((t==null?void 0:t["--w3m-font-family"])||"Inter, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;")};
        --w3m-font-size-master: ${Ar((t==null?void 0:t["--w3m-font-size-master"])||"10px")};
        --w3m-border-radius-master: ${Ar((t==null?void 0:t["--w3m-border-radius-master"])||"4px")};
        --w3m-z-index: ${Ar((t==null?void 0:t["--w3m-z-index"])||100)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-light: 400;
        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-2xl: 32px;
        --wui-spacing-3xl: 40px;
        --wui-spacing-4xl: 90px;

        --wui-icon-box-size-xxs: 14px;
        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-lg: 40px;
        --wui-icon-box-size-xl: 64px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;
        --wui-icon-size-xl: 24px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(20, 20, 20, 0.8);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-blue-100: var(--wui-color-blue-base-100);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-accent-glass-090: var(--wui-accent-glass-base-090);
        --wui-accent-glass-080: var(--wui-accent-glass-base-080);
        --wui-accent-glass-020: var(--wui-accent-glass-base-020);
        --wui-accent-glass-015: var(--wui-accent-glass-base-015);
        --wui-accent-glass-010: var(--wui-accent-glass-base-010);
        --wui-accent-glass-005: var(--wui-accent-glass-base-005);
        --wui-accent-glass-002: var(--wui-accent-glass-base-002);

        --wui-color-fg-100: var(--wui-color-fg-base-100);
        --wui-color-fg-125: var(--wui-color-fg-base-125);
        --wui-color-fg-150: var(--wui-color-fg-base-150);
        --wui-color-fg-175: var(--wui-color-fg-base-175);
        --wui-color-fg-200: var(--wui-color-fg-base-200);
        --wui-color-fg-225: var(--wui-color-fg-base-225);
        --wui-color-fg-250: var(--wui-color-fg-base-250);
        --wui-color-fg-275: var(--wui-color-fg-base-275);
        --wui-color-fg-300: var(--wui-color-fg-base-300);

        --wui-color-bg-100: var(--wui-color-bg-base-100);
        --wui-color-bg-125: var(--wui-color-bg-base-125);
        --wui-color-bg-150: var(--wui-color-bg-base-150);
        --wui-color-bg-175: var(--wui-color-bg-base-175);
        --wui-color-bg-200: var(--wui-color-bg-base-200);
        --wui-color-bg-225: var(--wui-color-bg-base-225);
        --wui-color-bg-250: var(--wui-color-bg-base-250);
        --wui-color-bg-275: var(--wui-color-bg-base-275);
        --wui-color-bg-300: var(--wui-color-bg-base-300);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-error-100: var(--wui-color-error-base-100);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-base-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-box-shadow-blue: rgba(71, 161, 255, 0.16);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 16%, transparent);

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            var(--w3m-default)
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            var(--w3m-default)
          );

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );

          --wui-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-300)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-300)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-base-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );

          --wui-thumbnail-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-thumbnail-border-base)
          );
        }
      }
    `,light:J`
      :root {
        --w3m-color-mix: ${Ar((t==null?void 0:t["--w3m-color-mix"])||"#fff")};
        --w3m-accent: ${Ar((t==null?void 0:t["--w3m-accent"])||"#47a1ff")};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: #191a1a;

        --wui-color-blue-base-100: #47a1ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #59aaff;
        --wui-color-accent-base-080: #6cb4ff;

        --wui-accent-glass-base-090: rgba(71, 161, 255, 0.9);
        --wui-accent-glass-base-080: rgba(71, 161, 255, 0.8);
        --wui-accent-glass-base-020: rgba(71, 161, 255, 0.2);
        --wui-accent-glass-base-015: rgba(71, 161, 255, 0.15);
        --wui-accent-glass-base-010: rgba(71, 161, 255, 0.1);
        --wui-accent-glass-base-005: rgba(71, 161, 255, 0.05);
        --wui-accent-glass-base-002: rgba(71, 161, 255, 0.02);

        --wui-color-fg-base-100: #e4e7e7;
        --wui-color-fg-base-125: #d0d5d5;
        --wui-color-fg-base-150: #a8b1b1;
        --wui-color-fg-base-175: #a8b0b0;
        --wui-color-fg-base-200: #949e9e;
        --wui-color-fg-base-225: #868f8f;
        --wui-color-fg-base-250: #788080;
        --wui-color-fg-base-275: #788181;
        --wui-color-fg-base-300: #6e7777;

        --wui-color-bg-base-100: #141414;
        --wui-color-bg-base-125: #191a1a;
        --wui-color-bg-base-150: #1e1f1f;
        --wui-color-bg-base-175: #222525;
        --wui-color-bg-base-200: #272a2a;
        --wui-color-bg-base-225: #2c3030;
        --wui-color-bg-base-250: #313535;
        --wui-color-bg-base-275: #363b3b;
        --wui-color-bg-base-300: #3b4040;

        --wui-color-success-base-100: #26d962;
        --wui-color-error-base-100: #f25a67;

        --wui-success-glass-001: rgba(38, 217, 98, 0.01);
        --wui-success-glass-002: rgba(38, 217, 98, 0.02);
        --wui-success-glass-005: rgba(38, 217, 98, 0.05);
        --wui-success-glass-010: rgba(38, 217, 98, 0.1);
        --wui-success-glass-015: rgba(38, 217, 98, 0.15);
        --wui-success-glass-020: rgba(38, 217, 98, 0.2);
        --wui-success-glass-025: rgba(38, 217, 98, 0.25);
        --wui-success-glass-030: rgba(38, 217, 98, 0.3);
        --wui-success-glass-060: rgba(38, 217, 98, 0.6);
        --wui-success-glass-080: rgba(38, 217, 98, 0.8);

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: var(--wui-success-glass-015);
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-base-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;

        --wui-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-gray-glass-080: rgba(255, 255, 255, 0.8);
      }
    `,dark:J`
      :root {
        --w3m-color-mix: ${Ar((t==null?void 0:t["--w3m-color-mix"])||"#000")};
        --w3m-accent: ${Ar((t==null?void 0:t["--w3m-accent"])||"#3396ff")};
        --w3m-default: #000;

        --wui-color-modal-bg-base: #fff;

        --wui-color-blue-base-100: #3396ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #2d7dd2;
        --wui-color-accent-base-080: #2978cc;

        --wui-accent-glass-base-090: rgba(51, 150, 255, 0.9);
        --wui-accent-glass-base-080: rgba(51, 150, 255, 0.8);
        --wui-accent-glass-base-020: rgba(51, 150, 255, 0.2);
        --wui-accent-glass-base-015: rgba(51, 150, 255, 0.15);
        --wui-accent-glass-base-010: rgba(51, 150, 255, 0.1);
        --wui-accent-glass-base-005: rgba(51, 150, 255, 0.05);
        --wui-accent-glass-base-002: rgba(51, 150, 255, 0.02);

        --wui-color-fg-base-100: #141414;
        --wui-color-fg-base-125: #2d3131;
        --wui-color-fg-base-150: #474d4d;
        --wui-color-fg-base-175: #636d6d;
        --wui-color-fg-base-200: #798686;
        --wui-color-fg-base-225: #828f8f;
        --wui-color-fg-base-250: #8b9797;
        --wui-color-fg-base-275: #95a0a0;
        --wui-color-fg-base-300: #9ea9a9;

        --wui-color-bg-base-100: #ffffff;
        --wui-color-bg-base-125: #f5fafa;
        --wui-color-bg-base-150: #f3f8f8;
        --wui-color-bg-base-175: #eef4f4;
        --wui-color-bg-base-200: #eaf1f1;
        --wui-color-bg-base-225: #e5eded;
        --wui-color-bg-base-250: #e1e9e9;
        --wui-color-bg-base-275: #dce7e7;
        --wui-color-bg-base-300: #d8e3e3;

        --wui-color-success-base-100: #26b562;
        --wui-color-error-base-100: #f05142;

        --wui-success-glass-001: rgba(38, 181, 98, 0.01);
        --wui-success-glass-002: rgba(38, 181, 98, 0.02);
        --wui-success-glass-005: rgba(38, 181, 98, 0.05);
        --wui-success-glass-010: rgba(38, 181, 98, 0.1);
        --wui-success-glass-015: rgba(38, 181, 98, 0.15);
        --wui-success-glass-020: rgba(38, 181, 98, 0.2);
        --wui-success-glass-025: rgba(38, 181, 98, 0.25);
        --wui-success-glass-030: rgba(38, 181, 98, 0.3);
        --wui-success-glass-060: rgba(38, 181, 98, 0.6);
        --wui-success-glass-080: rgba(38, 181, 98, 0.8);

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-base-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-gray-glass-080: rgba(0, 0, 0, 0.8);
      }
    `}}const we=J`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,ct=J`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    outline: none;
    border: 1px solid transparent;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-005);
    }

    button:active:enabled {
      transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
      background-color: var(--wui-gray-glass-010);
    }

    button[data-variant='fill']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='accentBg']:hover:enabled {
      background: var(--wui-accent-glass-015);
    }

    button[data-variant='accentBg']:active:enabled {
      background: var(--wui-accent-glass-020);
    }
  }

  button:disabled {
    cursor: not-allowed;
    background-color: var(--wui-gray-glass-005);
  }

  button[data-variant='shade']:disabled,
  button[data-variant='accent']:disabled,
  button[data-variant='accentBg']:disabled {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-gray-glass-015);
    filter: grayscale(1);
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  button:focus-visible,
  a:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  button[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  button[data-variant='fill']:disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
  }

  button[data-variant='fill']:disabled > wui-icon {
    color: var(--wui-gray-glass-015);
  }

  button[data-variant='shade'] {
    color: var(--wui-color-fg-200);
  }

  button[data-variant='accent'],
  button[data-variant='accentBg'] {
    color: var(--wui-color-accent-100);
  }

  button[data-variant='accentBg'] {
    background: var(--wui-accent-glass-010);
    border: 1px solid var(--wui-accent-glass-010);
  }

  button[data-variant='fullWidth'] {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    height: 56px;
    border: none;
    background-color: var(--wui-gray-glass-002);
    color: var(--wui-color-fg-200);
    gap: var(--wui-spacing-xs);
  }

  button:active:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  button[data-variant='fill']:active:enabled {
    background-color: var(--wui-color-accent-080);
    border: 1px solid var(--wui-gray-glass-010);
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,Lg=J`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }
`;function GS(t,e){const{kind:n,elements:r}=e;return{kind:n,elements:r,finisher(i){customElements.get(t)||customElements.define(t,i)}}}function KS(t,e){return customElements.get(t)||customElements.define(t,e),e}function q(t){return function(n){return typeof n=="function"?KS(t,n):GS(t,n)}}const YS=J`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }
`;var QS=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let tf=class extends G{render(){return $`<slot></slot>`}};tf.styles=[we,YS];tf=QS([q("wui-card")],tf);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const JS={attribute:!0,type:String,converter:Xd,reflect:!1,hasChanged:Ng},XS=(t=JS,e,n)=>{const{kind:r,metadata:i}=n;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),o.set(n.name,t),r==="accessor"){const{name:s}=n;return{set(a){const l=e.get.call(this);e.set.call(this,a),this.requestUpdate(s,l,t)},init(a){return a!==void 0&&this.P(s,void 0,t),a}}}if(r==="setter"){const{name:s}=n;return function(a){const l=this[s];e.call(this,a),this.requestUpdate(s,l,t)}}throw Error("Unsupported decorator location: "+r)};function I(t){return(e,n)=>typeof n=="object"?XS(t,e,n):((r,i,o)=>{const s=i.hasOwnProperty(o);return i.constructor.createProperty(o,s?{...r,wrapped:!0}:r),s?Object.getOwnPropertyDescriptor(i,o):void 0})(t,e,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ie(t){return I({...t,state:!0,attribute:!1})}const eA=J`
  :host {
    display: flex;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }
`,tA=te`<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`,nA=te`
<svg width="36" height="36">
  <path
    d="M28.724 0H7.271A7.269 7.269 0 0 0 0 7.272v21.46A7.268 7.268 0 0 0 7.271 36H28.73A7.272 7.272 0 0 0 36 28.728V7.272A7.275 7.275 0 0 0 28.724 0Z"
    fill="url(#a)"
  />
  <path
    d="m17.845 8.271.729-1.26a1.64 1.64 0 1 1 2.843 1.638l-7.023 12.159h5.08c1.646 0 2.569 1.935 1.853 3.276H6.434a1.632 1.632 0 0 1-1.638-1.638c0-.909.73-1.638 1.638-1.638h4.176l5.345-9.265-1.67-2.898a1.642 1.642 0 0 1 2.844-1.638l.716 1.264Zm-6.317 17.5-1.575 2.732a1.64 1.64 0 1 1-2.844-1.638l1.17-2.025c1.323-.41 2.398-.095 3.249.931Zm13.56-4.954h4.262c.909 0 1.638.729 1.638 1.638 0 .909-.73 1.638-1.638 1.638h-2.367l1.597 2.772c.45.788.185 1.782-.602 2.241a1.642 1.642 0 0 1-2.241-.603c-2.69-4.666-4.711-8.159-6.052-10.485-1.372-2.367-.391-4.743.576-5.549 1.075 1.846 2.682 4.631 4.828 8.348Z"
    fill="#fff"
  />
  <defs>
    <linearGradient id="a" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB" />
      <stop offset="1" stop-color="#2072F3" />
    </linearGradient>
  </defs>
</svg>`,rA=te`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,iA=te`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,oA=te`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`,sA=te`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,aA=te`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`,lA=te`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4 6.4a1 1 0 0 1-.46.89 6.98 6.98 0 0 0 .38 6.18A7 7 0 0 0 16.46 7.3a1 1 0 0 1-.47-.92 7 7 0 0 0-12 .03Zm-2.02-.5a9 9 0 1 1 16.03 8.2A9 9 0 0 1 1.98 5.9Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.03 8.63c-1.46-.3-2.72-.75-3.6-1.35l-.02-.01-.14-.11a1 1 0 0 1 1.2-1.6l.1.08c.6.4 1.52.74 2.69 1 .16-.99.39-1.88.67-2.65.3-.79.68-1.5 1.15-2.02A2.58 2.58 0 0 1 9.99 1c.8 0 1.45.44 1.92.97.47.52.84 1.23 1.14 2.02.29.77.52 1.66.68 2.64a8 8 0 0 0 2.7-1l.26-.18h.48a1 1 0 0 1 .12 2c-.86.51-2.01.91-3.34 1.18a22.24 22.24 0 0 1-.03 3.19c1.45.29 2.7.73 3.58 1.31a1 1 0 0 1-1.1 1.68c-.6-.4-1.56-.76-2.75-1-.15.8-.36 1.55-.6 2.2-.3.79-.67 1.5-1.14 2.02-.47.53-1.12.97-1.92.97-.8 0-1.45-.44-1.91-.97a6.51 6.51 0 0 1-1.15-2.02c-.24-.65-.44-1.4-.6-2.2-1.18.24-2.13.6-2.73.99a1 1 0 1 1-1.1-1.67c.88-.58 2.12-1.03 3.57-1.31a22.03 22.03 0 0 1-.04-3.2Zm2.2-1.7c.15-.86.34-1.61.58-2.24.24-.65.51-1.12.76-1.4.25-.28.4-.29.42-.29.03 0 .17.01.42.3.25.27.52.74.77 1.4.23.62.43 1.37.57 2.22a19.96 19.96 0 0 1-3.52 0Zm-.18 4.6a20.1 20.1 0 0 1-.03-2.62 21.95 21.95 0 0 0 3.94 0 20.4 20.4 0 0 1-.03 2.63 21.97 21.97 0 0 0-3.88 0Zm.27 2c.13.66.3 1.26.49 1.78.24.65.51 1.12.76 1.4.25.28.4.29.42.29.03 0 .17-.01.42-.3.25-.27.52-.74.77-1.4.19-.5.36-1.1.49-1.78a20.03 20.03 0 0 0-3.35 0Z"
    clip-rule="evenodd"
  />
</svg>`,cA=te`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M12.04 2.65c.47.3.6.91.3 1.38l-5.78 9a1 1 0 0 1-1.61.1L1.73 9.27A1 1 0 1 1 3.27 8L5.6 10.8l5.05-7.85a1 1 0 0 1 1.38-.3Z"
    clip-rule="evenodd"
  />
</svg>`,uA=te`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,dA=te`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,fA=te`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,hA=te`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`,pA=te`<svg width="36" height="36" fill="none">
  <path
    fill="#fff"
    fill-opacity=".05"
    d="M0 14.94c0-5.55 0-8.326 1.182-10.4a9 9 0 0 1 3.359-3.358C6.614 0 9.389 0 14.94 0h6.12c5.55 0 8.326 0 10.4 1.182a9 9 0 0 1 3.358 3.359C36 6.614 36 9.389 36 14.94v6.12c0 5.55 0 8.326-1.182 10.4a9 9 0 0 1-3.359 3.358C29.386 36 26.611 36 21.06 36h-6.12c-5.55 0-8.326 0-10.4-1.182a9 9 0 0 1-3.358-3.359C0 29.386 0 26.611 0 21.06v-6.12Z"
  />
  <path
    stroke="#fff"
    stroke-opacity=".05"
    d="M14.94.5h6.12c2.785 0 4.84 0 6.46.146 1.612.144 2.743.43 3.691.97a8.5 8.5 0 0 1 3.172 3.173c.541.948.826 2.08.971 3.692.145 1.62.146 3.675.146 6.459v6.12c0 2.785 0 4.84-.146 6.46-.145 1.612-.43 2.743-.97 3.691a8.5 8.5 0 0 1-3.173 3.172c-.948.541-2.08.826-3.692.971-1.62.145-3.674.146-6.459.146h-6.12c-2.784 0-4.84 0-6.46-.146-1.612-.145-2.743-.43-3.691-.97a8.5 8.5 0 0 1-3.172-3.173c-.541-.948-.827-2.08-.971-3.692C.5 25.9.5 23.845.5 21.06v-6.12c0-2.784 0-4.84.146-6.46.144-1.612.43-2.743.97-3.691A8.5 8.5 0 0 1 4.79 1.617C5.737 1.076 6.869.79 8.48.646 10.1.5 12.156.5 14.94.5Z"
  />
  <path
    fill="url(#a)"
    d="M17.998 10.8h12.469a14.397 14.397 0 0 0-24.938.001l6.234 10.798.006-.001a7.19 7.19 0 0 1 6.23-10.799Z"
  />
  <path
    fill="url(#b)"
    d="m24.237 21.598-6.234 10.798A14.397 14.397 0 0 0 30.47 10.798H18.002l-.002.006a7.191 7.191 0 0 1 6.237 10.794Z"
  />
  <path
    fill="url(#c)"
    d="M11.765 21.601 5.531 10.803A14.396 14.396 0 0 0 18.001 32.4l6.235-10.798-.004-.004a7.19 7.19 0 0 1-12.466.004Z"
  />
  <path fill="#fff" d="M18 25.2a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" />
  <path fill="#1A73E8" d="M18 23.7a5.7 5.7 0 1 0 0-11.4 5.7 5.7 0 0 0 0 11.4Z" />
  <defs>
    <linearGradient
      id="a"
      x1="6.294"
      x2="41.1"
      y1="5.995"
      y2="5.995"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#D93025" />
      <stop offset="1" stop-color="#EA4335" />
    </linearGradient>
    <linearGradient
      id="b"
      x1="20.953"
      x2="37.194"
      y1="32.143"
      y2="2.701"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FCC934" />
      <stop offset="1" stop-color="#FBBC04" />
    </linearGradient>
    <linearGradient
      id="c"
      x1="25.873"
      x2="9.632"
      y1="31.2"
      y2="1.759"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#1E8E3E" />
      <stop offset="1" stop-color="#34A853" />
    </linearGradient>
  </defs>
</svg>`,mA=te`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 2.99a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm7-4a1 1 0 0 1 1 1v2.58l1.85 1.85a1 1 0 0 1-1.41 1.42L6.29 8.69A1 1 0 0 1 6 8v-3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,gA=te`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,wA=te`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`,yA=te`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`,vA=te`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.5 0h1.67c.68 0 1.26 0 1.73.04.5.05.97.14 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73V6.5c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.43.03-.95.03-1.57.03 0 .62 0 1.14-.04 1.57-.04.5-.14.97-.4 1.42-.29.52-.72.95-1.24 1.24-.44.26-.92.35-1.41.4-.48.04-1.05.04-1.74.04H4.83c-.68 0-1.26 0-1.73-.04-.5-.05-.97-.14-1.42-.4-.52-.3-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.42A20.9 20.9 0 0 1 0 11.17V9.5c0-.69 0-1.26.04-1.74.05-.5.14-.97.4-1.41.3-.52.72-.95 1.24-1.25.45-.25.92-.35 1.42-.4.43-.03.95-.03 1.57-.03 0-.62 0-1.14.04-1.57.04-.5.14-.97.4-1.42.29-.52.72-.95 1.24-1.24.44-.26.92-.35 1.41-.4A20.9 20.9 0 0 1 9.5 0ZM4.67 6.67c-.63 0-1.06 0-1.4.03-.35.03-.5.09-.6.14-.2.12-.38.3-.5.5-.05.1-.1.24-.14.6C2 8.32 2 8.8 2 9.54v1.59c0 .73 0 1.22.03 1.6.04.35.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h1.58c.74 0 1.22 0 1.6-.03.36-.04.5-.1.6-.15.2-.11.38-.29.5-.5.05-.09.1-.24.14-.6.03-.33.03-.76.03-1.39-.6 0-1.13 0-1.57-.04-.5-.04-.97-.14-1.41-.4-.52-.29-.95-.72-1.25-1.24a3.39 3.39 0 0 1-.4-1.41c-.03-.44-.03-.96-.03-1.57Zm3.27-4.64c-.36.04-.5.1-.6.15-.2.11-.38.29-.5.5-.05.09-.1.24-.14.6-.03.37-.03.86-.03 1.6v1.58c0 .74 0 1.22.03 1.6.03.36.09.5.14.6.12.2.3.38.5.5.1.05.24.1.6.14.38.03.86.03 1.6.03h1.59c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6V4.87c0-.73 0-1.22-.03-1.6a1.46 1.46 0 0 0-.15-.6c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.14-.37-.03-.86-.03-1.6-.03H9.55c-.74 0-1.22 0-1.6.03Z"
    clip-rule="evenodd"
  />
</svg>`,bA=te` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`,xA=te`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.66 2H6.34c-1.07 0-1.96 0-2.68.08-.74.08-1.42.25-2.01.68a4 4 0 0 0-.89.89c-.43.6-.6 1.27-.68 2.01C0 6.38 0 7.26 0 8.34v.89c0 1.07 0 1.96.08 2.68.08.74.25 1.42.68 2.01a4 4 0 0 0 .89.89c.6.43 1.27.6 2.01.68a27 27 0 0 0 2.68.08h7.32a27 27 0 0 0 2.68-.08 4.03 4.03 0 0 0 2.01-.68 4 4 0 0 0 .89-.89c.43-.6.6-1.27.68-2.01.08-.72.08-1.6.08-2.68v-.89c0-1.07 0-1.96-.08-2.68a4.04 4.04 0 0 0-.68-2.01 4 4 0 0 0-.89-.89c-.6-.43-1.27-.6-2.01-.68C15.62 2 14.74 2 13.66 2ZM2.82 4.38c.2-.14.48-.25 1.06-.31C4.48 4 5.25 4 6.4 4h7.2c1.15 0 1.93 0 2.52.07.58.06.86.17 1.06.31a2 2 0 0 1 .44.44c.14.2.25.48.31 1.06.07.6.07 1.37.07 2.52v.77c0 1.15 0 1.93-.07 2.52-.06.58-.17.86-.31 1.06a2 2 0 0 1-.44.44c-.2.14-.48.25-1.06.32-.6.06-1.37.06-2.52.06H6.4c-1.15 0-1.93 0-2.52-.06-.58-.07-.86-.18-1.06-.32a2 2 0 0 1-.44-.44c-.14-.2-.25-.48-.31-1.06C2 11.1 2 10.32 2 9.17V8.4c0-1.15 0-1.93.07-2.52.06-.58.17-.86.31-1.06a2 2 0 0 1 .44-.44Z"
    clip-rule="evenodd"
  />
  <path fill="currentColor" d="M6.14 17.57a1 1 0 1 0 0 2h7.72a1 1 0 1 0 0-2H6.14Z" />
</svg>`,EA=te`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.07 1h.57a1 1 0 0 1 0 2h-.52c-.98 0-1.64 0-2.14.06-.48.05-.7.14-.84.24-.13.1-.25.22-.34.35-.1.14-.2.35-.25.83-.05.5-.05 1.16-.05 2.15v2.74c0 .99 0 1.65.05 2.15.05.48.14.7.25.83.1.14.2.25.34.35.14.1.36.2.84.25.5.05 1.16.05 2.14.05h.52a1 1 0 0 1 0 2h-.57c-.92 0-1.69 0-2.3-.07a3.6 3.6 0 0 1-1.8-.61c-.3-.22-.57-.49-.8-.8a3.6 3.6 0 0 1-.6-1.79C.5 11.11.5 10.35.5 9.43V6.58c0-.92 0-1.7.06-2.31a3.6 3.6 0 0 1 .62-1.8c.22-.3.48-.57.79-.79a3.6 3.6 0 0 1 1.8-.61C4.37 1 5.14 1 6.06 1ZM9.5 3a1 1 0 0 1 1.42 0l4.28 4.3a1 1 0 0 1 0 1.4L10.93 13a1 1 0 0 1-1.42-1.42L12.1 9H6.8a1 1 0 1 1 0-2h5.3L9.51 4.42a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,_A=te`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,CA=te`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`,SA=te`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.71 2.99a.57.57 0 0 0-.57.57 1 1 0 0 1-1 1c-.58 0-.96 0-1.24.03-.27.03-.37.07-.42.1a.97.97 0 0 0-.36.35c-.04.08-.09.21-.11.67a2.57 2.57 0 0 1 0 5.13c.02.45.07.6.11.66.09.15.21.28.36.36.07.04.21.1.67.12a2.57 2.57 0 0 1 5.12 0c.46-.03.6-.08.67-.12a.97.97 0 0 0 .36-.36c.03-.04.07-.14.1-.41.02-.29.03-.66.03-1.24a1 1 0 0 1 1-1 .57.57 0 0 0 0-1.15 1 1 0 0 1-1-1c0-.58 0-.95-.03-1.24a1.04 1.04 0 0 0-.1-.42.97.97 0 0 0-.36-.36 1.04 1.04 0 0 0-.42-.1c-.28-.02-.65-.02-1.24-.02a1 1 0 0 1-1-1 .57.57 0 0 0-.57-.57ZM5.15 13.98a1 1 0 0 0 .99-1v-.78a.57.57 0 0 1 1.14 0v.78a1 1 0 0 0 .99 1H8.36a66.26 66.26 0 0 0 .73 0 3.78 3.78 0 0 0 1.84-.38c.46-.26.85-.64 1.1-1.1.23-.4.32-.8.36-1.22.02-.2.03-.4.03-.63a2.57 2.57 0 0 0 0-4.75c0-.23-.01-.44-.03-.63a2.96 2.96 0 0 0-.35-1.22 2.97 2.97 0 0 0-1.1-1.1c-.4-.22-.8-.31-1.22-.35a8.7 8.7 0 0 0-.64-.04 2.57 2.57 0 0 0-4.74 0c-.23 0-.44.02-.63.04-.42.04-.83.13-1.22.35-.46.26-.84.64-1.1 1.1-.33.57-.37 1.2-.39 1.84a21.39 21.39 0 0 0 0 .72v.1a1 1 0 0 0 1 .99h.78a.57.57 0 0 1 0 1.15h-.77a1 1 0 0 0-1 .98v.1a63.87 63.87 0 0 0 0 .73c0 .64.05 1.27.38 1.83.26.47.64.85 1.1 1.11.56.32 1.2.37 1.84.38a20.93 20.93 0 0 0 .72 0h.1Z"
    clip-rule="evenodd"
  />
</svg>`,AA=te`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.74 3.99a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6.26a1 1 0 0 1-2 0V6.4l-6.3 6.3a1 1 0 0 1-1.4-1.42l6.29-6.3H4.74a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,TA=te`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,PA=te`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm2.63 5.25a1 1 0 0 1 1-1h8.75a1 1 0 1 1 0 2H3.63a1 1 0 0 1-1-1Zm2.62 5.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2h-3.5a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,$A=te`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,IA=te`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#fff" fill-opacity=".05" />
      <g clip-path="url(#c)">
        <path
          fill="#4285F4"
          d="M20 17.7v4.65h6.46a5.53 5.53 0 0 1-2.41 3.61l3.9 3.02c2.26-2.09 3.57-5.17 3.57-8.82 0-.85-.08-1.67-.22-2.46H20Z"
        />
        <path
          fill="#34A853"
          d="m13.27 22.17-.87.67-3.11 2.42A12 12 0 0 0 20 31.9c3.24 0 5.96-1.07 7.94-2.9l-3.9-3.03A7.15 7.15 0 0 1 20 27.12a7.16 7.16 0 0 1-6.72-4.94v-.01Z"
        />
        <path
          fill="#FBBC05"
          d="M9.29 14.5a11.85 11.85 0 0 0 0 10.76l3.99-3.1a7.19 7.19 0 0 1 0-4.55l-4-3.1Z"
        />
        <path
          fill="#EA4335"
          d="M20 12.66c1.77 0 3.34.61 4.6 1.8l3.43-3.44A11.51 11.51 0 0 0 20 7.89c-4.7 0-8.74 2.69-10.71 6.62l3.99 3.1A7.16 7.16 0 0 1 20 12.66Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,kA=te`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M8.51 5.66a.83.83 0 0 0-.57-.2.83.83 0 0 0-.52.28.8.8 0 0 0-.25.52 1 1 0 0 1-2 0c0-.75.34-1.43.81-1.91a2.75 2.75 0 0 1 4.78 1.92c0 1.24-.8 1.86-1.25 2.2l-.04.03c-.47.36-.5.43-.5.65a1 1 0 1 1-2 0c0-1.25.8-1.86 1.24-2.2l.04-.04c.47-.36.5-.43.5-.65 0-.3-.1-.49-.24-.6ZM9.12 11.87a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
    clip-rule="evenodd"
  />
</svg>`,OA=te`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    d="M6 10.49a1 1 0 1 0 2 0v-2a1 1 0 0 0-2 0v2ZM7 4.49a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 14.99a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    clip-rule="evenodd"
  />
</svg>`,DA=te`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.83 1.34h6.34c.68 0 1.26 0 1.73.04.5.05.97.15 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73v3.71c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.47.03-1.05.03-1.73.03H4.83c-.68 0-1.26 0-1.73-.04-.5-.04-.97-.14-1.42-.4-.52-.29-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.41A20.9 20.9 0 0 1 0 9.88v-3.7c0-.7 0-1.27.04-1.74.05-.5.14-.97.4-1.42.3-.52.72-.95 1.24-1.24.45-.25.92-.35 1.42-.4.47-.04 1.05-.04 1.73-.04ZM3.28 3.38c-.36.03-.51.08-.6.14-.21.11-.39.29-.5.5a.8.8 0 0 0-.08.19l5.16 3.44c.45.3 1.03.3 1.48 0L13.9 4.2a.79.79 0 0 0-.08-.2c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.13-.37-.04-.86-.04-1.6-.04H4.88c-.73 0-1.22 0-1.6.04ZM14 6.54 9.85 9.31a3.33 3.33 0 0 1-3.7 0L2 6.54v3.3c0 .74 0 1.22.03 1.6.04.36.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h6.25c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6v-3.3Z"
    clip-rule="evenodd"
  />
</svg>`,RA=te`<svg fill="none" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
    clip-rule="evenodd"
  />
</svg>`,NA=te`<svg fill="none" viewBox="0 0 22 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M16.32 13.62a3.14 3.14 0 1 1-.99 1.72l-1.6-.93a3.83 3.83 0 0 1-3.71 1 3.66 3.66 0 0 1-1.74-1l-1.6.94a3.14 3.14 0 1 1-1-1.73l1.6-.94a3.7 3.7 0 0 1 0-2 3.81 3.81 0 0 1 1.8-2.33c.29-.17.6-.3.92-.38V6.1a3.14 3.14 0 1 1 2 0l-.01.02v1.85H12a3.82 3.82 0 0 1 2.33 1.8 3.7 3.7 0 0 1 .39 2.91l1.6.93ZM2.6 16.54a1.14 1.14 0 0 0 1.98-1.14 1.14 1.14 0 0 0-1.98 1.14ZM11 2.01a1.14 1.14 0 1 0 0 2.28 1.14 1.14 0 0 0 0-2.28Zm1.68 10.45c.08-.19.14-.38.16-.58v-.05l.02-.13v-.13a1.92 1.92 0 0 0-.24-.8l-.11-.15a1.89 1.89 0 0 0-.74-.6 1.86 1.86 0 0 0-.77-.17h-.19a1.97 1.97 0 0 0-.89.34 1.98 1.98 0 0 0-.61.74 1.99 1.99 0 0 0-.16.9v.05a1.87 1.87 0 0 0 .24.74l.1.15c.12.16.26.3.42.42l.16.1.13.07.04.02a1.84 1.84 0 0 0 .76.17h.17a2 2 0 0 0 .91-.35 1.78 1.78 0 0 0 .52-.58l.03-.05a.84.84 0 0 0 .05-.11Zm5.15 4.5a1.14 1.14 0 0 0 1.14-1.97 1.13 1.13 0 0 0-1.55.41c-.32.55-.13 1.25.41 1.56Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.63 9.43a1.5 1.5 0 1 0 1.5-2.6 1.5 1.5 0 0 0-1.5 2.6Zm.32-1.55a.5.5 0 0 1 .68-.19.5.5 0 0 1 .18.68.5.5 0 0 1-.68.19.5.5 0 0 1-.18-.68ZM17.94 8.88a1.5 1.5 0 1 1-2.6-1.5 1.5 1.5 0 1 1 2.6 1.5ZM16.9 7.69a.5.5 0 0 0-.68.19.5.5 0 0 0 .18.68.5.5 0 0 0 .68-.19.5.5 0 0 0-.18-.68ZM9.75 17.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 1 1-2.6-1.5Zm1.05 1.18a.5.5 0 0 0 .68-.18.5.5 0 0 0-.18-.68.5.5 0 0 0-.68.18.5.5 0 0 0 .18.68Z"
    clip-rule="evenodd"
  />
</svg>`,MA=te`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.13 1h1.71c1.46 0 2.63 0 3.56.1.97.1 1.8.33 2.53.85a5 5 0 0 1 1.1 1.11c.53.73.75 1.56.86 2.53.1.93.1 2.1.1 3.55v1.72c0 1.45 0 2.62-.1 3.55-.1.97-.33 1.8-.86 2.53a5 5 0 0 1-1.1 1.1c-.73.53-1.56.75-2.53.86-.93.1-2.1.1-3.55.1H9.13c-1.45 0-2.62 0-3.56-.1-.96-.1-1.8-.33-2.52-.85a5 5 0 0 1-1.1-1.11 5.05 5.05 0 0 1-.86-2.53c-.1-.93-.1-2.1-.1-3.55V9.14c0-1.45 0-2.62.1-3.55.1-.97.33-1.8.85-2.53a5 5 0 0 1 1.1-1.1 5.05 5.05 0 0 1 2.53-.86C6.51 1 7.67 1 9.13 1ZM5.79 3.09a3.1 3.1 0 0 0-1.57.48 3 3 0 0 0-.66.67c-.24.32-.4.77-.48 1.56-.1.82-.1 1.88-.1 3.4v1.6c0 1.15 0 2.04.05 2.76l.41-.42c.5-.5.93-.92 1.32-1.24.41-.33.86-.6 1.43-.7a3 3 0 0 1 .94 0c.35.06.66.2.95.37a17.11 17.11 0 0 0 .8.45c.1-.08.2-.2.41-.4l.04-.03a27 27 0 0 1 1.95-1.84 4.03 4.03 0 0 1 1.91-.94 4 4 0 0 1 1.25 0c.73.11 1.33.46 1.91.94l.64.55V9.2c0-1.52 0-2.58-.1-3.4a3.1 3.1 0 0 0-.48-1.56 3 3 0 0 0-.66-.67 3.1 3.1 0 0 0-1.56-.48C13.37 3 12.3 3 10.79 3h-1.6c-1.52 0-2.59 0-3.4.09Zm11.18 10-.04-.05a26.24 26.24 0 0 0-1.83-1.74c-.45-.36-.73-.48-.97-.52a2 2 0 0 0-.63 0c-.24.04-.51.16-.97.52-.46.38-1.01.93-1.83 1.74l-.02.02c-.17.18-.34.34-.49.47a2.04 2.04 0 0 1-1.08.5 1.97 1.97 0 0 1-1.25-.27l-.79-.46-.02-.02a.65.65 0 0 0-.24-.1 1 1 0 0 0-.31 0c-.08.02-.21.06-.49.28-.3.24-.65.59-1.2 1.14l-.56.56-.65.66a3 3 0 0 0 .62.6c.33.24.77.4 1.57.49.81.09 1.88.09 3.4.09h1.6c1.52 0 2.58 0 3.4-.09a3.1 3.1 0 0 0 1.56-.48 3 3 0 0 0 .66-.67c.24-.32.4-.77.49-1.56l.07-1.12Zm-8.02-1.03ZM4.99 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    clip-rule="evenodd"
  />
</svg>`,LA=te`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 0a1 1 0 0 1 1 1v5.38a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM5.26 2.6a1 1 0 0 1-.28 1.39 5.46 5.46 0 1 0 6.04 0 1 1 0 1 1 1.1-1.67 7.46 7.46 0 1 1-8.25 0 1 1 0 0 1 1.4.28Z"
    clip-rule="evenodd"
  />
</svg>`,UA=te` <svg
  width="36"
  height="36"
  fill="none"
>
  <path
    d="M0 8a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8Z"
    fill="#fff"
    fill-opacity=".05"
  />
  <path
    d="m18.262 17.513-8.944 9.49v.01a2.417 2.417 0 0 0 3.56 1.452l.026-.017 10.061-5.803-4.703-5.132Z"
    fill="#EA4335"
  />
  <path
    d="m27.307 15.9-.008-.008-4.342-2.52-4.896 4.36 4.913 4.912 4.325-2.494a2.42 2.42 0 0 0 .008-4.25Z"
    fill="#FBBC04"
  />
  <path
    d="M9.318 8.997c-.05.202-.084.403-.084.622V26.39c0 .218.025.42.084.621l9.246-9.247-9.246-8.768Z"
    fill="#4285F4"
  />
  <path
    d="m18.33 18 4.627-4.628-10.053-5.828a2.427 2.427 0 0 0-3.586 1.444L18.329 18Z"
    fill="#34A853"
  />
  <path
    d="M8 .5h20A7.5 7.5 0 0 1 35.5 8v20a7.5 7.5 0 0 1-7.5 7.5H8A7.5 7.5 0 0 1 .5 28V8A7.5 7.5 0 0 1 8 .5Z"
    stroke="#fff"
    stroke-opacity=".05"
  />
</svg>`,jA=te`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M3 6a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H6a5 5 0 0 0-5 5v1a1 1 0 0 0 2 0V6ZM13 1a1 1 0 1 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 1 0 2 0V6a5 5 0 0 0-5-5h-1ZM3 13a1 1 0 1 0-2 0v1a5 5 0 0 0 5 5h1a1 1 0 1 0 0-2H6a3 3 0 0 1-3-3v-1ZM19 13a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1.01a5 5 0 0 0 5-5v-1ZM5.3 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05A1.5 1.5 0 0 0 9.2 8.14c.06-.2.06-.43.06-.89s0-.7-.06-.89A1.5 1.5 0 0 0 8.14 5.3c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM10.8 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM5.26 12.75c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.19-.05.42-.05.89-.05.46 0 .7 0 .88.05.52.14.93.54 1.06 1.06.06.2.06.43.06.89s0 .7-.06.89a1.5 1.5 0 0 1-1.06 1.06c-.19.05-.42.05-.88.05-.47 0-.7 0-.9-.05a1.5 1.5 0 0 1-1.05-1.06c-.05-.2-.05-.43-.05-.89ZM10.8 11.86c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06Z"
  />
</svg>`,BA=te`<svg fill="none" viewBox="0 0 14 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.94 1.04a1 1 0 0 1 .7 1.23l-.48 1.68a5.85 5.85 0 0 1 8.53 4.32 5.86 5.86 0 0 1-11.4 2.56 1 1 0 0 1 1.9-.57 3.86 3.86 0 1 0 1.83-4.5l1.87.53a1 1 0 0 1-.55 1.92l-4.1-1.15a1 1 0 0 1-.69-1.23l1.16-4.1a1 1 0 0 1 1.23-.7Z"
    clip-rule="evenodd"
  />
</svg>`,FA=te`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.36 4.21a5.14 5.14 0 1 0 0 10.29 5.14 5.14 0 0 0 0-10.29ZM1.64 9.36a7.71 7.71 0 1 1 14 4.47l2.52 2.5a1.29 1.29 0 1 1-1.82 1.83l-2.51-2.51A7.71 7.71 0 0 1 1.65 9.36Z"
    clip-rule="evenodd"
  />
</svg>`,WA=te`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.76.3a1 1 0 0 1 0 1.4L4.07 4.4h9a1 1 0 1 1 0 2h-9l2.69 2.68a1 1 0 1 1-1.42 1.42L.95 6.09a1 1 0 0 1 0-1.4l4.4-4.4a1 1 0 0 1 1.4 0Zm6.49 9.21a1 1 0 0 1 1.41 0l4.39 4.4a1 1 0 0 1 0 1.4l-4.39 4.4a1 1 0 0 1-1.41-1.42l2.68-2.68h-9a1 1 0 0 1 0-2h9l-2.68-2.68a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,zA=te`<svg width="10" height="10" viewBox="0 0 10 10">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.77986 0.566631C4.0589 0.845577 4.0589 1.29784 3.77986 1.57678L3.08261 2.2738H6.34184C6.73647 2.2738 7.05637 2.5936 7.05637 2.98808C7.05637 3.38257 6.73647 3.70237 6.34184 3.70237H3.08261L3.77986 4.39938C4.0589 4.67833 4.0589 5.13059 3.77986 5.40954C3.50082 5.68848 3.04841 5.68848 2.76937 5.40954L0.852346 3.49316C0.573306 3.21421 0.573306 2.76195 0.852346 2.48301L2.76937 0.566631C3.04841 0.287685 3.50082 0.287685 3.77986 0.566631ZM6.22 4.59102C6.49904 4.31208 6.95145 4.31208 7.23049 4.59102L9.14751 6.5074C9.42655 6.78634 9.42655 7.23861 9.14751 7.51755L7.23049 9.43393C6.95145 9.71287 6.49904 9.71287 6.22 9.43393C5.94096 9.15498 5.94096 8.70272 6.22 8.42377L6.91725 7.72676L3.65802 7.72676C3.26339 7.72676 2.94349 7.40696 2.94349 7.01247C2.94349 6.61798 3.26339 6.29819 3.65802 6.29819L6.91725 6.29819L6.22 5.60117C5.94096 5.32223 5.94096 4.86997 6.22 4.59102Z"
    clip-rule="evenodd"
  />
</svg>`,HA=te`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.48 2.18a1 1 0 0 1 1.41 0l2.68 2.68a1 1 0 1 1-1.41 1.42l-.98-.98v4.56a1 1 0 0 1-2 0V5.3l-.97.98A1 1 0 0 1 .79 4.86l2.69-2.68Zm6.34 2.93a1 1 0 0 1 1 1v4.56l.97-.98a1 1 0 1 1 1.42 1.42l-2.69 2.68a1 1 0 0 1-1.41 0l-2.68-2.68a1 1 0 0 1 1.41-1.42l.98.98V6.1a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,VA=te`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg> `,qA=te`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,ZA=te`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1D9BF0" />
      <path
        fill="#fff"
        d="M30 13.81c-.74.33-1.53.55-2.36.65.85-.51 1.5-1.32 1.8-2.27-.79.47-1.66.8-2.6 1a4.1 4.1 0 0 0-7 3.73c-3.4-.17-6.42-1.8-8.45-4.28a4.1 4.1 0 0 0 1.27 5.47c-.67-.02-1.3-.2-1.86-.5a4.1 4.1 0 0 0 3.3 4.07c-.58.15-1.21.19-1.86.07a4.1 4.1 0 0 0 3.83 2.85A8.25 8.25 0 0 1 10 26.3a11.62 11.62 0 0 0 6.29 1.84c7.62 0 11.92-6.44 11.66-12.2.8-.59 1.5-1.3 2.05-2.13Z"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,GA=te`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`,KA=te`<svg fill="none" viewBox="0 0 28 28">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M18.1 4.76c-.42-.73-1.33-1.01-2.09-.66l-1.42.66c-.37.18-.8.18-1.18 0l-1.4-.65a1.63 1.63 0 0 0-2.1.66l-.84 1.45c-.2.34-.53.59-.92.67l-1.7.35c-.83.17-1.39.94-1.3 1.78l.19 1.56c.04.39-.08.78-.33 1.07l-1.12 1.3c-.52.6-.52 1.5 0 2.11L5 16.38c.25.3.37.68.33 1.06l-.18 1.57c-.1.83.46 1.6 1.28 1.78l1.7.35c.4.08.73.32.93.66l.84 1.43a1.63 1.63 0 0 0 2.09.66l1.41-.66c.37-.17.8-.17 1.18 0l1.43.67c.76.35 1.66.07 2.08-.65l.86-1.45c.2-.34.54-.58.92-.66l1.68-.35A1.63 1.63 0 0 0 22.84 19l-.18-1.57a1.4 1.4 0 0 1 .33-1.06l1.12-1.32c.52-.6.52-1.5 0-2.11l-1.12-1.3a1.4 1.4 0 0 1-.33-1.07l.18-1.57c.1-.83-.46-1.6-1.28-1.77l-1.68-.35a1.4 1.4 0 0 1-.92-.66l-.86-1.47Zm-3.27-3.2a4.43 4.43 0 0 1 5.69 1.78l.54.93 1.07.22a4.43 4.43 0 0 1 3.5 4.84l-.11.96.7.83a4.43 4.43 0 0 1 .02 5.76l-.72.85.1.96a4.43 4.43 0 0 1-3.5 4.84l-1.06.22-.54.92a4.43 4.43 0 0 1-5.68 1.77l-.84-.4-.82.39a4.43 4.43 0 0 1-5.7-1.79l-.51-.89-1.09-.22a4.43 4.43 0 0 1-3.5-4.84l.1-.96-.72-.85a4.43 4.43 0 0 1 .01-5.76l.71-.83-.1-.95a4.43 4.43 0 0 1 3.5-4.84l1.08-.23.53-.9a4.43 4.43 0 0 1 5.7-1.8l.81.38.83-.39ZM18.2 9.4c.65.42.84 1.28.42 1.93l-4.4 6.87a1.4 1.4 0 0 1-2.26.14L9.5 15.39a1.4 1.4 0 0 1 2.15-1.8l1.23 1.48 3.38-5.26a1.4 1.4 0 0 1 1.93-.42Z"
    clip-rule="evenodd"
  />
</svg>`,YA=te`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="m4.1 12.43-.45-.78-.93-.2a1.65 1.65 0 0 1-1.31-1.8l.1-.86-.61-.71a1.65 1.65 0 0 1 0-2.16l.6-.7-.09-.85c-.1-.86.47-1.64 1.3-1.81l.94-.2.45-.78A1.65 1.65 0 0 1 6.23.9l.77.36.78-.36c.77-.36 1.69-.07 2.12.66l.47.8.91.2c.84.17 1.4.95 1.31 1.8l-.1.86.6.7c.54.62.54 1.54.01 2.16l-.6.71.09.86c.1.85-.47 1.63-1.3 1.8l-.92.2-.47.79a1.65 1.65 0 0 1-2.12.66L7 12.74l-.77.36c-.78.35-1.7.07-2.13-.67Zm5.74-6.9a1 1 0 1 0-1.68-1.07L6.32 7.3l-.55-.66a1 1 0 0 0-1.54 1.28l1.43 1.71a1 1 0 0 0 1.61-.1l2.57-4Z"
    clip-rule="evenodd"
  />
</svg>`,QA=te`
  <svg fill="none" viewBox="0 0 48 44">
    <path
      style="fill: var(--wui-color-bg-300);"
      d="M4.56 8.64c-1.23 1.68-1.23 4.08-1.23 8.88v8.96c0 4.8 0 7.2 1.23 8.88.39.55.87 1.02 1.41 1.42C7.65 38 10.05 38 14.85 38h14.3c4.8 0 7.2 0 8.88-1.22a6.4 6.4 0 0 0 1.41-1.42c.83-1.14 1.1-2.6 1.19-4.92a6.4 6.4 0 0 0 5.16-4.65c.21-.81.21-1.8.21-3.79 0-1.98 0-2.98-.22-3.79a6.4 6.4 0 0 0-5.15-4.65c-.1-2.32-.36-3.78-1.19-4.92a6.4 6.4 0 0 0-1.41-1.42C36.35 6 33.95 6 29.15 6h-14.3c-4.8 0-7.2 0-8.88 1.22a6.4 6.4 0 0 0-1.41 1.42Z"
    />
    <path
      style="fill: var(--wui-color-fg-200);"
      fill-rule="evenodd"
      d="M2.27 11.33a6.4 6.4 0 0 1 6.4-6.4h26.66a6.4 6.4 0 0 1 6.4 6.4v1.7a6.4 6.4 0 0 1 5.34 6.3v5.34a6.4 6.4 0 0 1-5.34 6.3v1.7a6.4 6.4 0 0 1-6.4 6.4H8.67a6.4 6.4 0 0 1-6.4-6.4V11.33ZM39.6 31.07h-6.93a9.07 9.07 0 1 1 0-18.14h6.93v-1.6a4.27 4.27 0 0 0-4.27-4.26H8.67a4.27 4.27 0 0 0-4.27 4.26v21.34a4.27 4.27 0 0 0 4.27 4.26h26.66a4.27 4.27 0 0 0 4.27-4.26v-1.6Zm-6.93-16a6.93 6.93 0 0 0 0 13.86h8a4.27 4.27 0 0 0 4.26-4.26v-5.34a4.27 4.27 0 0 0-4.26-4.26h-8Z"
      clip-rule="evenodd"
    />
  </svg>
`,JA=te`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`,XA=te`<svg fill="none" viewBox="0 0 96 67">
  <path
    fill="currentColor"
    d="M25.32 18.8a32.56 32.56 0 0 1 45.36 0l1.5 1.47c.63.62.63 1.61 0 2.22l-5.15 5.05c-.31.3-.82.3-1.14 0l-2.07-2.03a22.71 22.71 0 0 0-31.64 0l-2.22 2.18c-.31.3-.82.3-1.14 0l-5.15-5.05a1.55 1.55 0 0 1 0-2.22l1.65-1.62Zm56.02 10.44 4.59 4.5c.63.6.63 1.6 0 2.21l-20.7 20.26c-.62.61-1.63.61-2.26 0L48.28 41.83a.4.4 0 0 0-.56 0L33.03 56.21c-.63.61-1.64.61-2.27 0L10.07 35.95a1.55 1.55 0 0 1 0-2.22l4.59-4.5a1.63 1.63 0 0 1 2.27 0L31.6 43.63a.4.4 0 0 0 .57 0l14.69-14.38a1.63 1.63 0 0 1 2.26 0l14.69 14.38a.4.4 0 0 0 .57 0l14.68-14.38a1.63 1.63 0 0 1 2.27 0Z"
  />
  <path
    stroke="#000"
    stroke-opacity=".1"
    d="M25.67 19.15a32.06 32.06 0 0 1 44.66 0l1.5 1.48c.43.42.43 1.09 0 1.5l-5.15 5.05a.31.31 0 0 1-.44 0l-2.07-2.03a23.21 23.21 0 0 0-32.34 0l-2.22 2.18a.31.31 0 0 1-.44 0l-5.15-5.05a1.05 1.05 0 0 1 0-1.5l1.65-1.63ZM81 29.6l4.6 4.5c.42.41.42 1.09 0 1.5l-20.7 20.26c-.43.43-1.14.43-1.57 0L48.63 41.47a.9.9 0 0 0-1.26 0L32.68 55.85c-.43.43-1.14.43-1.57 0L10.42 35.6a1.05 1.05 0 0 1 0-1.5l4.59-4.5a1.13 1.13 0 0 1 1.57 0l14.68 14.38a.9.9 0 0 0 1.27 0l-.35-.35.35.35L47.22 29.6a1.13 1.13 0 0 1 1.56 0l14.7 14.38a.9.9 0 0 0 1.26 0L79.42 29.6a1.13 1.13 0 0 1 1.57 0Z"
  />
</svg>`,eT=te`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M11 6.67a1 1 0 1 0-2 0v2.66a1 1 0 0 0 2 0V6.67ZM10 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
    clip-rule="evenodd"
  />
</svg>`,tT=te`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.687 0.557043C11.1462 0.671832 11.4254 1.13706 11.3106 1.59615C11.2044 2.02082 11.0975 2.51184 10.9822 3.04102C10.7176 4.25623 10.4091 5.6727 9.96482 6.94907C10.1435 7.58939 10.3065 8.16905 10.4935 8.68429C10.6447 9.10072 10.7858 9.39487 10.9179 9.58289C11.0055 9.70747 11.0597 9.74443 11.0748 9.75277C11.096 9.75724 11.1075 9.75764 11.1531 9.71916C11.2342 9.65067 11.3386 9.50891 11.4426 9.28357C11.5416 9.06892 11.614 8.8366 11.662 8.6497C11.6854 8.55831 11.7019 8.48242 11.7122 8.43111C11.7174 8.40555 11.7209 8.38638 11.723 8.37476L11.725 8.36363C11.8 7.89659 12.2395 7.57864 12.7068 7.65342C13.1742 7.72822 13.4925 8.16766 13.4177 8.63494C13.4153 8.64924 13.42 8.62063 13.4177 8.63494L13.4175 8.63596L13.4173 8.63721L13.4168 8.64037L13.4153 8.64924L13.4105 8.67692C13.4064 8.69961 13.4006 8.73069 13.3929 8.76891C13.3776 8.84516 13.3545 8.95091 13.3224 9.07586C13.2593 9.32166 13.1564 9.66085 12.9992 10.0015C12.8469 10.3315 12.6139 10.7288 12.2595 11.0282C11.8757 11.3523 11.35 11.5553 10.7293 11.4312C10.1645 11.3183 9.77597 10.939 9.51527 10.5681C9.2535 10.1957 9.05129 9.7349 8.88212 9.26898C8.87877 9.25975 8.87542 9.25049 8.87208 9.2412C8.03954 10.4941 6.83375 11.4479 5.03926 11.4479C3.48049 11.4479 2.31021 10.7159 1.56788 9.63945C0.846767 8.5938 0.544023 7.25403 0.573206 5.9702C0.60242 4.68505 0.966023 3.36073 1.69055 2.33272C2.42915 1.28475 3.5614 0.531453 5.03927 0.531453C6.44937 0.531453 7.4408 1.29593 8.1276 2.27567C8.48261 2.7821 8.77248 3.36668 9.0177 3.97383C9.1059 3.59106 9.18901 3.20908 9.27086 2.83294C9.39492 2.26277 9.51606 1.70605 9.64752 1.18046C9.76235 0.721369 10.2277 0.442254 10.687 0.557043ZM8.16354 6.87693C8.08689 6.60534 8.01003 6.33741 7.93241 6.08076C7.59522 4.96581 7.22132 3.969 6.72371 3.25914C6.24674 2.57873 5.72135 2.24516 5.03927 2.24516C4.21565 2.24516 3.56947 2.6422 3.09195 3.31975C2.60035 4.01725 2.31013 4.99361 2.28705 6.00913C2.26393 7.02599 2.51041 7.9869 2.97927 8.66676C3.42691 9.31586 4.08734 9.73417 5.03926 9.73417C6.48097 9.73417 7.4216 8.72164 8.14437 6.9249C8.15079 6.90893 8.15718 6.89294 8.16354 6.87693Z" fill="#47A1FF"/>
</svg>`;var wh=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};const nT={allWallets:tA,alpha:tT,appStore:nA,chromeStore:pA,apple:rA,arrowBottom:iA,arrowLeft:oA,arrowRight:sA,arrowTop:aA,browser:lA,checkmark:cA,chevronBottom:uA,chevronLeft:dA,chevronRight:fA,chevronTop:hA,clock:mA,close:gA,compass:yA,coinPlaceholder:wA,copy:vA,cursor:bA,desktop:xA,disconnect:EA,discord:_A,etherscan:CA,extension:SA,externalLink:AA,facebook:TA,filters:PA,github:$A,google:IA,helpCircle:kA,infoCircle:OA,mail:DA,mobile:RA,networkPlaceholder:NA,nftPlaceholder:MA,off:LA,playStore:UA,qrCode:jA,refresh:BA,search:FA,swapHorizontal:WA,swapHorizontalBold:zA,swapVertical:HA,telegram:VA,twitch:qA,twitter:ZA,twitterIcon:GA,verify:KA,verifyFilled:YA,wallet:JA,walletConnect:XA,walletPlaceholder:QA,warningCircle:eT};let Yo=class extends G{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300"}render(){return this.style.cssText=`
      --local-color: ${`var(--wui-color-${this.color});`}
      --local-width: ${`var(--wui-icon-size-${this.size});`}
    `,$`${nT[this.name]}`}};Yo.styles=[we,Lg,eA];wh([I()],Yo.prototype,"size",void 0);wh([I()],Yo.prototype,"name",void 0);wh([I()],Yo.prototype,"color",void 0);Yo=wh([q("wui-icon")],Yo);const rT=J`
  :host {
    display: block;
    width: 100%;
    height: 100%;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`;var Ug=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let wa=class extends G{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image"}render(){return $`<img src=${this.src} alt=${this.alt} />`}};wa.styles=[we,Lg,rT];Ug([I()],wa.prototype,"src",void 0);Ug([I()],wa.prototype,"alt",void 0);wa=Ug([q("wui-image")],wa);const iT=J`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var oT=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let nf=class extends G{render(){return $`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};nf.styles=[we,iT];nf=oT([q("wui-loading-hexagon")],nf);const sT=J`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`;var jg=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let ya=class extends G{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: var(--wui-color-${this.color});`,this.dataset.size=this.size,$`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};ya.styles=[we,sT];jg([I()],ya.prototype,"color",void 0);jg([I()],ya.prototype,"size",void 0);ya=jg([q("wui-loading-spinner")],ya);const aT=J`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var d4=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Ec=class extends G{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const e=this.radius>50?50:this.radius,r=36-e,i=116+r,o=245+r,s=360+r*1.75;return $`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${i} ${o}"
          stroke-dashoffset=${s}
        />
      </svg>
    `}};Ec.styles=[we,aT];d4([I({type:Number})],Ec.prototype,"radius",void 0);Ec=d4([q("wui-loading-thumbnail")],Ec);const lT=J`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`;var yh=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Qo=class extends G{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m"}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
      border-radius: ${`clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px)`};
    `,$`<slot></slot>`}};Qo.styles=[lT];yh([I()],Qo.prototype,"width",void 0);yh([I()],Qo.prototype,"height",void 0);yh([I()],Qo.prototype,"borderRadius",void 0);Qo=yh([q("wui-shimmer")],Qo);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const f4={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},h4=t=>(...e)=>({_$litDirective$:t,values:e});let p4=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,r){this._$Ct=e,this._$AM=n,this._$Ci=r}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const cT=h4(class extends p4{constructor(t){var e;if(super(t),t.type!==f4.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var r,i;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in e)e[o]&&!((r=this.nt)!=null&&r.has(o))&&this.st.add(o);return this.render(e)}const n=t.element.classList;for(const o of this.st)o in e||(n.remove(o),this.st.delete(o));for(const o in e){const s=!!e[o];s===this.st.has(o)||(i=this.nt)!=null&&i.has(o)||(s?(n.add(o),this.st.add(o)):(n.remove(o),this.st.delete(o)))}return Ko}}),uT=J`
  :host {
    display: flex !important;
  }

  slot {
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-small-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }
`;var vh=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Jo=class extends G{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left"}render(){const e={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,$`<slot class=${cT(e)}></slot>`}};Jo.styles=[we,uT];vh([I()],Jo.prototype,"variant",void 0);vh([I()],Jo.prototype,"color",void 0);vh([I()],Jo.prototype,"align",void 0);Jo=vh([q("wui-text")],Jo);const dT=te`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="30" />
  <circle cx="30" cy="30" r="3" fill="#fff" />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m45.32 17.9-.88-.42.88.42.02-.05c.1-.2.21-.44.26-.7l-.82-.15.82.16a2 2 0 0 0-.24-1.4c-.13-.23-.32-.42-.47-.57a8.42 8.42 0 0 1-.04-.04l-.04-.04a2.9 2.9 0 0 0-.56-.47l-.51.86.5-.86a2 2 0 0 0-1.4-.24c-.26.05-.5.16-.69.26l-.05.02-15.05 7.25-.1.05c-1.14.55-1.85.89-2.46 1.37a7 7 0 0 0-1.13 1.14c-.5.6-.83 1.32-1.38 2.45l-.05.11-7.25 15.05-.02.05c-.1.2-.21.43-.26.69a2 2 0 0 0 .24 1.4l.85-.5-.85.5c.13.23.32.42.47.57l.04.04.04.04c.15.15.34.34.56.47a2 2 0 0 0 1.41.24l-.2-.98.2.98c.25-.05.5-.17.69-.26l.05-.02-.42-.87.42.87 15.05-7.25.1-.05c1.14-.55 1.85-.89 2.46-1.38a7 7 0 0 0 1.13-1.13 12.87 12.87 0 0 0 1.43-2.56l7.25-15.05Z"
  />
  <path
    fill="#1DC956"
    d="M33.38 32.72 30.7 29.3 15.86 44.14l.2.2a1 1 0 0 0 1.14.2l15.1-7.27a3 3 0 0 0 1.08-4.55Z"
  />
  <path
    fill="#86F999"
    d="m26.62 27.28 2.67 3.43 14.85-14.85-.2-.2a1 1 0 0 0-1.14-.2l-15.1 7.27a3 3 0 0 0-1.08 4.55Z"
  />
  <circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
</svg> `,fT=te`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#clip0_7734_50402)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#EB8B47"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M19 52C24.5228 52 29 47.5228 29 42C29 36.4772 24.5228 32 19 32C13.4772 32 9 36.4772 9 42C9 47.5228 13.4772 52 19 52Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.8437 8.3264C42.4507 7.70891 41.5493 7.70891 41.1564 8.32641L28.978 27.4638C28.5544 28.1295 29.0326 29.0007 29.8217 29.0007H54.1783C54.9674 29.0007 55.4456 28.1295 55.022 27.4638L42.8437 8.3264Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.3348 11.6456C42.659 11.7608 42.9061 12.1492 43.4005 12.926L50.7332 24.4488C51.2952 25.332 51.5763 25.7737 51.5254 26.1382C51.4915 26.3808 51.3698 26.6026 51.1833 26.7614C50.9031 27 50.3796 27 49.3327 27H34.6673C33.6204 27 33.0969 27 32.8167 26.7614C32.6302 26.6026 32.5085 26.3808 32.4746 26.1382C32.4237 25.7737 32.7048 25.332 33.2669 24.4488L40.5995 12.926C41.0939 12.1492 41.341 11.7608 41.6652 11.6456C41.8818 11.5687 42.1182 11.5687 42.3348 11.6456ZM35.0001 26.999C38.8661 26.999 42.0001 23.865 42.0001 19.999C42.0001 23.865 45.1341 26.999 49.0001 26.999H35.0001Z"
      fill="#FF974C"
    />
    <path
      d="M10.1061 9.35712C9.9973 9.67775 9.99867 10.0388 9.99978 10.3323C9.99989 10.3611 10 10.3893 10 10.4167V25.5833C10 25.6107 9.99989 25.6389 9.99978 25.6677C9.99867 25.9612 9.9973 26.3222 10.1061 26.6429C10.306 27.2317 10.7683 27.694 11.3571 27.8939C11.6777 28.0027 12.0388 28.0013 12.3323 28.0002C12.3611 28.0001 12.3893 28 12.4167 28H19C24.5228 28 29 23.5228 29 18C29 12.4772 24.5228 8 19 8H12.4167C12.3893 8 12.3611 7.99989 12.3323 7.99978C12.0388 7.99867 11.6778 7.9973 11.3571 8.10614C10.7683 8.306 10.306 8.76834 10.1061 9.35712Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
    <circle cx="19" cy="42" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="clip0_7734_50402">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,hT=te`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#1DC956"
      d="M0 25.01c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02.11 15.65.11 24.9.11h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.13 60 15.76 60 25v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-3.45 1.97-8.08 1.97-17.33 1.97H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 49.1 0 44.46 0 35.21v-10.2Z"
    />
    <path
      fill="#2BEE6C"
      d="M16.1 60c-3.82-.18-6.4-.64-8.53-1.86a15 15 0 0 1-5.6-5.6C.55 50.06.16 46.97.04 41.98L4.2 40.6a4 4 0 0 0 2.48-2.39l4.65-12.4a2 2 0 0 1 2.5-1.2l2.53.84a2 2 0 0 0 2.43-1l2.96-5.94a2 2 0 0 1 3.7.32l3.78 12.58a2 2 0 0 0 3.03 1.09l3.34-2.23a2 2 0 0 0 .65-.7l5.3-9.72a2 2 0 0 1 1.42-1.01l4.14-.69a2 2 0 0 1 1.6.44l3.9 3.24a2 2 0 0 0 2.7-.12l4.62-4.63c.08 2.2.08 4.8.08 7.93v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-2.13 1.22-4.7 1.68-8.54 1.86H16.11Z"
    />
    <path
      fill="#fff"
      d="m.07 43.03-.05-2.1 3.85-1.28a3 3 0 0 0 1.86-1.79l4.66-12.4a3 3 0 0 1 3.75-1.8l2.53.84a1 1 0 0 0 1.21-.5l2.97-5.94a3 3 0 0 1 5.56.48l3.77 12.58a1 1 0 0 0 1.51.55l3.34-2.23a1 1 0 0 0 .33-.35l5.3-9.71a3 3 0 0 1 2.14-1.53l4.13-.69a3 3 0 0 1 2.41.66l3.9 3.24a1 1 0 0 0 1.34-.06l5.28-5.28c.05.85.08 1.75.1 2.73L56 22.41a3 3 0 0 1-4.04.19l-3.9-3.25a1 1 0 0 0-.8-.21l-4.13.69a1 1 0 0 0-.72.5l-5.3 9.72a3 3 0 0 1-.97 1.05l-3.34 2.23a3 3 0 0 1-4.53-1.63l-3.78-12.58a1 1 0 0 0-1.85-.16l-2.97 5.94a3 3 0 0 1-3.63 1.5l-2.53-.84a1 1 0 0 0-1.25.6l-4.65 12.4a5 5 0 0 1-3.1 3L.07 43.02Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M45 .28v59.66l-2 .1V.19c.7.02 1.37.05 2 .1Z" />
    <path fill="#2BEE6C" d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M.5 25.01c0-4.63 0-8.08.24-10.8.25-2.7.73-4.64 1.66-6.28a14.5 14.5 0 0 1 5.42-5.41C9.46 1.58 11.39 1.1 14.1.85A133 133 0 0 1 24.9.61h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.67a14.5 14.5 0 0 1 5.42 5.4c.93 1.65 1.41 3.58 1.66 6.3.24 2.71.24 6.16.24 10.79v10.2c0 4.64 0 8.08-.24 10.8-.25 2.7-.73 4.65-1.66 6.28a14.5 14.5 0 0 1-5.42 5.42c-1.63.93-3.57 1.41-6.28 1.66-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.66a14.5 14.5 0 0 1-5.42-5.42C1.47 50.66 1 48.72.74 46.01A133 133 0 0 1 .5 35.2v-10.2Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg>`,pT=te`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="30" />
    <path
      fill="#E87DE8"
      d="M57.98.01v19.5a4.09 4.09 0 0 0-2.63 2.29L50.7 34.2a2 2 0 0 1-2.5 1.2l-2.53-.84a2 2 0 0 0-2.42 1l-2.97 5.94a2 2 0 0 1-3.7-.32L32.8 28.6a2 2 0 0 0-3.02-1.09l-3.35 2.23a2 2 0 0 0-.64.7l-5.3 9.72a2 2 0 0 1-1.43 1.01l-4.13.69a2 2 0 0 1-1.61-.44l-3.9-3.24a2 2 0 0 0-2.69.12L2.1 42.93.02 43V.01h57.96Z"
    />
    <path
      fill="#fff"
      d="m61.95 16.94.05 2.1-3.85 1.28a3 3 0 0 0-1.86 1.79l-4.65 12.4a3 3 0 0 1-3.76 1.8l-2.53-.84a1 1 0 0 0-1.2.5l-2.98 5.94a3 3 0 0 1-5.55-.48l-3.78-12.58a1 1 0 0 0-1.5-.55l-3.35 2.23a1 1 0 0 0-.32.35l-5.3 9.72a3 3 0 0 1-2.14 1.52l-4.14.69a3 3 0 0 1-2.41-.66l-3.9-3.24a1 1 0 0 0-1.34.06l-5.28 5.28c-.05-.84-.08-1.75-.1-2.73l3.97-3.96a3 3 0 0 1 4.04-.19l3.89 3.25a1 1 0 0 0 .8.21l4.14-.68a1 1 0 0 0 .71-.51l5.3-9.71a3 3 0 0 1 .97-1.06l3.34-2.23a3 3 0 0 1 4.54 1.63l3.77 12.58a1 1 0 0 0 1.86.16l2.96-5.93a3 3 0 0 1 3.64-1.5l2.52.83a1 1 0 0 0 1.25-.6l4.66-12.4a5 5 0 0 1 3.1-2.99l4.43-1.48Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M35.5 27a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M31 0v60h-2V0h2Z" />
    <path fill="#E87DE8" d="M33.5 27a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,mT=te`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#987DE8" rx="30" />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="m15.48 28.37 11.97-19.3a3 3 0 0 1 5.1 0l11.97 19.3a6 6 0 0 1 .9 3.14v.03a6 6 0 0 1-1.16 3.56L33.23 50.2a4 4 0 0 1-6.46 0L15.73 35.1a6 6 0 0 1-1.15-3.54v-.03a6 6 0 0 1 .9-3.16Z"
      clip-rule="evenodd"
    />
    <path
      fill="#643CDD"
      d="M30.84 10.11a1 1 0 0 0-.84-.46V24.5l12.6 5.53a2 2 0 0 0-.28-1.4L30.84 10.11Z"
    />
    <path
      fill="#BDADEB"
      d="M30 9.65a1 1 0 0 0-.85.46L17.66 28.64a2 2 0 0 0-.26 1.39L30 24.5V9.65Z"
    />
    <path
      fill="#643CDD"
      d="M30 50.54a1 1 0 0 0 .8-.4l11.24-15.38c.3-.44-.2-1-.66-.73l-9.89 5.68a3 3 0 0 1-1.5.4v10.43Z"
    />
    <path
      fill="#BDADEB"
      d="m17.97 34.76 11.22 15.37c.2.28.5.41.8.41V40.11a3 3 0 0 1-1.49-.4l-9.88-5.68c-.47-.27-.97.3-.65.73Z"
    />
    <path
      fill="#401AB3"
      d="M42.6 30.03 30 24.5v13.14a3 3 0 0 0 1.5-.4l10.14-5.83a2 2 0 0 0 .95-1.38Z"
    />
    <path
      fill="#7C5AE2"
      d="M30 37.64V24.46l-12.6 5.57a2 2 0 0 0 .97 1.39l10.13 5.82a3 3 0 0 0 1.5.4Z"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,gT=te`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="3" />
  <path
    fill="#1FAD7E"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 29.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 19.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#86F999"
    stroke="#fff"
    stroke-width="2"
    d="m46.69 21.06-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-6.32-3.51-.18-.1c-2.33-1.3-3.72-2.06-5.22-2.33a9 9 0 0 0-3.08 0c-1.5.27-2.9 1.04-5.22 2.33l-.17.1-6.33 3.51-.05.03c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45Z"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,wT=te`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#C653C6" rx="3" />
  <path
    fill="#fff"
    d="M20.03 15.22C20 15.6 20 16.07 20 17v2.8c0 1.14 0 1.7-.2 2.12-.15.31-.3.5-.58.71-.37.28-1.06.42-2.43.7-.59.12-1.11.29-1.6.51a9 9 0 0 0-4.35 4.36C10 30 10 32.34 10 37c0 4.66 0 7 .84 8.8a9 9 0 0 0 4.36 4.36C17 51 19.34 51 24 51h12c4.66 0 7 0 8.8-.84a9 9 0 0 0 4.36-4.36C50 44 50 41.66 50 37c0-4.66 0-7-.84-8.8a9 9 0 0 0-4.36-4.36c-.48-.22-1-.39-1.6-.5-1.36-.29-2.05-.43-2.42-.7-.27-.22-.43-.4-.58-.72-.2-.42-.2-.98-.2-2.11V17c0-.93 0-1.4-.03-1.78a9 9 0 0 0-8.19-8.19C31.4 7 30.93 7 30 7s-1.4 0-1.78.03a9 9 0 0 0-8.19 8.19Z"
  />
  <path
    fill="#E87DE8"
    d="M22 17c0-.93 0-1.4.04-1.78a7 7 0 0 1 6.18-6.18C28.6 9 29.07 9 30 9s1.4 0 1.78.04a7 7 0 0 1 6.18 6.18c.04.39.04.85.04 1.78v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.4-.08-1.78a4 4 0 0 0-3.14-3.14C31.39 12 30.93 12 30 12s-1.4 0-1.78.08a4 4 0 0 0-3.14 3.14c-.08.39-.08.85-.08 1.78v4.5a1.5 1.5 0 0 1-3 0V17Z"
  />
  <path
    fill="#E87DE8"
    fill-rule="evenodd"
    d="M12 36.62c0-4.32 0-6.48.92-8.09a7 7 0 0 1 2.61-2.61C17.14 25 19.3 25 23.62 25h6.86c.46 0 .7 0 .9.02 2.73.22 4.37 2.43 4.62 4.98.27-2.7 2.11-5 5.02-5A6.98 6.98 0 0 1 48 31.98v5.4c0 4.32 0 6.48-.92 8.09a7 7 0 0 1-2.61 2.61c-1.61.92-3.77.92-8.09.92h-5.86c-.46 0-.7 0-.9-.02-2.73-.22-4.37-2.43-4.62-4.98-.26 2.58-1.94 4.82-4.71 4.99l-.7.01c-.55 0-.82 0-1.05-.02a7 7 0 0 1-6.52-6.52c-.02-.23-.02-.5-.02-1.05v-4.79Zm21.24-.27a4 4 0 1 0-6.48 0 31.28 31.28 0 0 1 1.57 2.23c.17.4.17.81.17 1.24V42.5a1.5 1.5 0 0 0 3 0V39.82c0-.43 0-.85.17-1.24.09-.2.58-.87 1.57-2.23Z"
    clip-rule="evenodd"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,yT=te`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#EB8B47"
      d="M0 24.9c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02 0 15.65 0 24.9 0h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.02 60 15.65 60 24.9v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6C48.98 60 44.35 60 35.1 60H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 48.98 0 44.35 0 35.1V24.9Z"
    />
    <path
      stroke="#062B2B"
      stroke-opacity=".1"
      d="M.5 24.9c0-4.64 0-8.08.24-10.8.25-2.7.73-4.65 1.66-6.28A14.5 14.5 0 0 1 7.82 2.4C9.46 1.47 11.39 1 14.1.74A133 133 0 0 1 24.9.5h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.66a14.5 14.5 0 0 1 5.42 5.42c.93 1.63 1.41 3.57 1.66 6.28.24 2.72.24 6.16.24 10.8v10.2c0 4.63 0 8.08-.24 10.8-.25 2.7-.73 4.64-1.66 6.28a14.5 14.5 0 0 1-5.42 5.41c-1.63.94-3.57 1.42-6.28 1.67-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.67a14.5 14.5 0 0 1-5.42-5.4C1.47 50.53 1 48.6.74 45.88A133 133 0 0 1 .5 35.1V24.9Z"
    />
    <path
      fill="#FF974C"
      stroke="#fff"
      stroke-width="2"
      d="M39.2 29.2a13 13 0 1 0-18.4 0l1.3 1.28a12.82 12.82 0 0 1 2.1 2.39 6 6 0 0 1 .6 1.47c.2.76.2 1.56.2 3.17v11.24c0 1.08 0 1.61.13 2.12a4 4 0 0 0 .41.98c.26.45.64.83 1.4 1.6l.3.29c.65.65.98.98 1.36 1.09.26.07.54.07.8 0 .38-.11.7-.44 1.36-1.1l3.48-3.47c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.47-.48c-.65-.65-.98-.98-1.09-1.36a1.5 1.5 0 0 1 0-.8c.1-.38.44-.7 1.1-1.36l.47-.48c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.48-.5c-.65-.64-.98-.97-1.08-1.35a1.5 1.5 0 0 1 0-.79c.1-.38.42-.7 1.06-1.36l5.46-5.55Z"
    />
    <circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg> `,vT=te`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#00ACE6" rx="30" />
    <circle cx="64" cy="39" r="50" fill="#1AC6FF" stroke="#fff" stroke-width="2" />
    <circle cx="78" cy="30" r="50" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="72" cy="15" r="35" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-17" r="45" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-5" r="50" stroke="#fff" stroke-width="2" />
    <circle cx="30" cy="45" r="4" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="39.5" cy="27.5" r="4" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="16" cy="24" r="4" fill="#19C6FF" stroke="#fff" stroke-width="2" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg>`,bT=te`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="3" />
    <path
      fill="#E87DE8"
      stroke="#fff"
      stroke-width="2"
      d="M52.1 47.34c0-4.24-1.44-9.55-5.9-12.4a2.86 2.86 0 0 0-1.6-3.89v-.82c0-1.19-.52-2.26-1.35-3a4.74 4.74 0 0 0-2.4-6.26v-5.5a11.31 11.31 0 1 0-22.63 0v2.15a3.34 3.34 0 0 0-1.18 5.05 4.74 4.74 0 0 0-.68 6.44A5.22 5.22 0 0 0 14 35.92c-3.06 4.13-6.1 8.3-6.1 15.64 0 2.67.37 4.86.74 6.39a20.3 20.3 0 0 0 .73 2.39l.02.04v.01l.92-.39-.92.4.26.6h38.26l.3-.49-.87-.51.86.5.02-.01.03-.07a16.32 16.32 0 0 0 .57-1.05c.36-.72.85-1.74 1.33-2.96a25.51 25.51 0 0 0 1.94-9.07Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M26.5 29.5c-3-.5-5.5-3-5.5-7v-7c0-.47 0-.7.03-.9a3 3 0 0 1 2.58-2.57c.2-.03.42-.03.89-.03 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.4 0 2.1 0 2.65.23a3 3 0 0 1 1.62 1.62c.23.55.23 1.25.23 2.65v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.5 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z"
      clip-rule="evenodd"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="3" /></clipPath>
  </defs>
</svg> `,xT=te`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#794CFF" rx="3" />
  <path
    fill="#987DE8"
    stroke="#fff"
    stroke-width="2"
    d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"
  />
  <path fill="#fff" d="M37.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M42.5 25h5v10h-5z" />
  <path fill="#fff" d="M19.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M24.5 25h5v10h-5z" />
  <path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,ET=te`<svg
  viewBox="0 0 60 60"
  fill="none"
>
  <g clip-path="url(#1)">
    <rect width="60" height="60" rx="30" fill="#00ACE6" />
    <path
      d="M59 73C59 89.0163 46.0163 102 30 102C13.9837 102 1 89.0163 1 73C1 56.9837 12 44 30 44C48 44 59 56.9837 59 73Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M18.6904 19.9015C19.6264 15.3286 23.3466 11.8445 27.9708 11.2096C29.3231 11.024 30.6751 11.0238 32.0289 11.2096C36.6532 11.8445 40.3733 15.3286 41.3094 19.9015C41.4868 20.7681 41.6309 21.6509 41.7492 22.5271C41.8811 23.5041 41.8811 24.4944 41.7492 25.4715C41.6309 26.3476 41.4868 27.2304 41.3094 28.097C40.3733 32.6699 36.6532 36.154 32.0289 36.7889C30.6772 36.9744 29.3216 36.9743 27.9708 36.7889C23.3466 36.154 19.6264 32.6699 18.6904 28.097C18.513 27.2304 18.3689 26.3476 18.2506 25.4715C18.1186 24.4944 18.1186 23.5041 18.2506 22.5271C18.3689 21.6509 18.513 20.7681 18.6904 19.9015Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="24.5" cy="23.5" r="1.5" fill="white" />
    <circle cx="35.5" cy="23.5" r="1.5" fill="white" />
    <path
      d="M31 20L28 28H32"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white" stroke-opacity="0.1" />
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" rx="30" fill="white" />
    </clipPath>
  </defs>
</svg> `,_T=te`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#1)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#794CFF"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M35.1403 31.5016C35.1193 30.9637 35.388 30.4558 35.8446 30.1707C36.1207 29.9982 36.4761 29.8473 36.7921 29.7685C37.3143 29.6382 37.8664 29.7977 38.2386 30.1864C38.8507 30.8257 39.3004 31.6836 39.8033 32.408C40.2796 33.0942 41.4695 33.2512 41.9687 32.5047C42.4839 31.7341 42.9405 30.8229 43.572 30.1399C43.9375 29.7447 44.4866 29.5756 45.0111 29.6967C45.3283 29.7701 45.6863 29.9147 45.9655 30.0823C46.4269 30.3595 46.7045 30.8626 46.6928 31.4008C46.6731 32.3083 46.3764 33.2571 46.2158 34.1473C46.061 35.0048 46.9045 35.8337 47.7592 35.664C48.6464 35.4878 49.5899 35.1747 50.497 35.1391C51.0348 35.1181 51.5427 35.3868 51.8279 35.8433C52.0004 36.1195 52.1513 36.4749 52.2301 36.7908C52.3604 37.3131 52.2009 37.8651 51.8121 38.2374C51.1729 38.8495 50.3151 39.2991 49.5908 39.8019C48.9046 40.2782 48.7473 41.4683 49.4939 41.9675C50.2644 42.4827 51.1757 42.9393 51.8587 43.5708C52.2539 43.9362 52.423 44.4854 52.3018 45.0099C52.2285 45.3271 52.0839 45.6851 51.9162 45.9642C51.6391 46.4257 51.1359 46.7032 50.5978 46.6916C49.6903 46.6719 48.7417 46.3753 47.8516 46.2146C46.9939 46.0598 46.1648 46.9035 46.3346 47.7583C46.5108 48.6454 46.8239 49.5888 46.8594 50.4958C46.8805 51.0336 46.6117 51.5415 46.1552 51.8267C45.879 51.9992 45.5236 52.15 45.2077 52.2289C44.6854 52.3592 44.1334 52.1997 43.7611 51.8109C43.1491 51.1718 42.6996 50.314 42.1968 49.5897C41.7203 48.9034 40.5301 48.7463 40.0309 49.493C39.5157 50.2634 39.0592 51.1746 38.4278 51.8574C38.0623 52.2527 37.5132 52.4218 36.9887 52.3006C36.6715 52.2273 36.3135 52.0826 36.0343 51.915C35.5729 51.6379 35.2953 51.1347 35.307 50.5966C35.3267 49.6891 35.6233 48.7405 35.7839 47.8505C35.9388 46.9928 35.0951 46.1636 34.2402 46.3334C33.3531 46.5096 32.4098 46.8227 31.5028 46.8582C30.9649 46.8793 30.457 46.6105 30.1719 46.154C29.9994 45.8778 29.8485 45.5224 29.7697 45.2065C29.6394 44.6842 29.7989 44.1322 30.1877 43.7599C30.8269 43.1479 31.6847 42.6982 32.4091 42.1954C33.0954 41.7189 33.2522 40.5289 32.5056 40.0297C31.7351 39.5145 30.824 39.058 30.1411 38.4265C29.7459 38.0611 29.5768 37.5119 29.698 36.9875C29.7713 36.6702 29.9159 36.3122 30.0836 36.0331C30.3607 35.5717 30.8638 35.2941 31.402 35.3058C32.3095 35.3255 33.2583 35.6221 34.1485 35.7828C35.006 35.9376 35.8349 35.094 35.6652 34.2393C35.489 33.3521 35.1759 32.4087 35.1403 31.5016Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M20.7706 8.22357C20.9036 7.51411 21.5231 7 22.2449 7H23.7551C24.4769 7 25.0964 7.51411 25.2294 8.22357C25.5051 9.69403 25.4829 11.6321 27.1202 12.2606C27.3092 12.3331 27.4958 12.4105 27.6798 12.4926C29.2818 13.2072 30.6374 11.8199 31.8721 10.9752C32.4678 10.5676 33.2694 10.6421 33.7798 11.1525L34.8477 12.2204C35.3581 12.7308 35.4326 13.5323 35.025 14.128C34.1802 15.3627 32.7931 16.7183 33.5077 18.3202C33.5898 18.5043 33.6672 18.6909 33.7398 18.88C34.3683 20.5171 36.3061 20.4949 37.7764 20.7706C38.4859 20.9036 39 21.5231 39 22.2449V23.7551C39 24.4769 38.4859 25.0964 37.7764 25.2294C36.3061 25.5051 34.3685 25.483 33.7401 27.1201C33.6675 27.3093 33.59 27.4961 33.5079 27.6803C32.7934 29.282 34.1803 30.6374 35.025 31.8719C35.4326 32.4677 35.3581 33.2692 34.8477 33.7796L33.7798 34.8475C33.2694 35.3579 32.4678 35.4324 31.8721 35.0248C30.6376 34.1801 29.2823 32.7934 27.6806 33.508C27.4962 33.5903 27.3093 33.6678 27.12 33.7405C25.483 34.3688 25.5051 36.3062 25.2294 37.7764C25.0964 38.4859 24.4769 39 23.7551 39H22.2449C21.5231 39 20.9036 38.4859 20.7706 37.7764C20.4949 36.3062 20.517 34.3688 18.88 33.7405C18.6908 33.6678 18.5039 33.5903 18.3196 33.5081C16.7179 32.7936 15.3625 34.1804 14.1279 35.0251C13.5322 35.4327 12.7307 35.3582 12.2203 34.8478L11.1524 33.7799C10.642 33.2695 10.5675 32.4679 10.9751 31.8722C11.8198 30.6376 13.2067 29.2822 12.4922 27.6804C12.41 27.4962 12.3325 27.3093 12.2599 27.1201C11.6315 25.483 9.69392 25.5051 8.22357 25.2294C7.51411 25.0964 7 24.4769 7 23.7551V22.2449C7 21.5231 7.51411 20.9036 8.22357 20.7706C9.69394 20.4949 11.6317 20.5171 12.2602 18.88C12.3328 18.6909 12.4103 18.5042 12.4924 18.3201C13.207 16.7181 11.8198 15.3625 10.975 14.1278C10.5674 13.5321 10.6419 12.7305 11.1523 12.2201L12.2202 11.1522C12.7306 10.6418 13.5322 10.5673 14.1279 10.9749C15.3626 11.8197 16.7184 13.2071 18.3204 12.4925C18.5044 12.4105 18.6909 12.3331 18.8799 12.2606C20.5171 11.6321 20.4949 9.69403 20.7706 8.22357Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="23" cy="23" r="6" fill="#794CFF" stroke="white" stroke-width="2" />
    <circle cx="41" cy="41" r="4" fill="#794CFF" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,CT=J`
  :host {
    display: block;
    width: 55px;
    height: 55px;
  }
`;var m4=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};const ST={browser:dT,dao:fT,defi:hT,defiAlt:pT,eth:mT,layers:gT,lock:wT,login:yT,network:vT,nft:bT,noun:xT,profile:ET,system:_T};let _c=class extends G{constructor(){super(...arguments),this.name="browser"}render(){return $`${ST[this.name]}`}};_c.styles=[we,CT];m4([I()],_c.prototype,"name",void 0);_c=m4([q("wui-visual")],_c);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ce=t=>t??yt,He={getSpacingStyles(t,e){if(Array.isArray(t))return t[e]?`var(--wui-spacing-${t[e]})`:void 0;if(typeof t=="string")return`var(--wui-spacing-${t})`},getFormattedDate(t){return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(t)},getHostName(t){return new URL(t).hostname},getTruncateString({string:t,charsStart:e,charsEnd:n,truncate:r}){return t.length<=e+n?t:r==="end"?`${t.substring(0,e)}...`:r==="start"?`...${t.substring(t.length-n)}`:`${t.substring(0,Math.floor(e))}...${t.substring(t.length-Math.floor(n))}`},generateAvatarColors(t){const n=t.toLowerCase().replace(/^0x/iu,"").substring(0,6),r=this.hexToRgb(n),i=getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master"),s=100-3*Number(i==null?void 0:i.replace("px","")),a=`${s}% ${s}% at 65% 40%`,l=[];for(let c=0;c<5;c+=1){const u=this.tintColor(r,.15*c);l.push(`rgb(${u[0]}, ${u[1]}, ${u[2]})`)}return`
    --local-color-1: ${l[0]};
    --local-color-2: ${l[1]};
    --local-color-3: ${l[2]};
    --local-color-4: ${l[3]};
    --local-color-5: ${l[4]};
    --local-radial-circle: ${a}
   `},hexToRgb(t){const e=parseInt(t,16),n=e>>16&255,r=e>>8&255,i=e&255;return[n,r,i]},tintColor(t,e){const[n,r,i]=t,o=Math.round(n+(255-n)*e),s=Math.round(r+(255-r)*e),a=Math.round(i+(255-i)*e);return[o,s,a]},isNumber(t){return{number:/^[0-9]+$/u}.number.test(t)},getColorTheme(t){return t||(typeof window<"u"&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":"dark")}},AT=J`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var Rn=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let qt=class extends G{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&He.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&He.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&He.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&He.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&He.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&He.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&He.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&He.getSpacingStyles(this.margin,3)};
    `,$`<slot></slot>`}};qt.styles=[we,AT];Rn([I()],qt.prototype,"flexDirection",void 0);Rn([I()],qt.prototype,"flexWrap",void 0);Rn([I()],qt.prototype,"flexBasis",void 0);Rn([I()],qt.prototype,"flexGrow",void 0);Rn([I()],qt.prototype,"flexShrink",void 0);Rn([I()],qt.prototype,"alignItems",void 0);Rn([I()],qt.prototype,"justifyContent",void 0);Rn([I()],qt.prototype,"columnGap",void 0);Rn([I()],qt.prototype,"rowGap",void 0);Rn([I()],qt.prototype,"gap",void 0);Rn([I()],qt.prototype,"padding",void 0);Rn([I()],qt.prototype,"margin",void 0);qt=Rn([q("wui-flex")],qt);const TT=J`
  :host {
    display: block;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    background: radial-gradient(
      var(--local-radial-circle),
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`;var bh=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Xo=class extends G{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0}render(){return $`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",$`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";const e=He.generateAvatarColors(this.address);return this.style.cssText=e,null}return this.dataset.variant="default",null}};Xo.styles=[we,TT];bh([I()],Xo.prototype,"imageSrc",void 0);bh([I()],Xo.prototype,"alt",void 0);bh([I()],Xo.prototype,"address",void 0);Xo=bh([q("wui-avatar")],Xo);const PT=J`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-gray-glass-020);
    border-radius: var(--local-border-radius);
    box-shadow: 0 0 0 1px var(--local-border);
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;var pi=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Hn=class extends G{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const e=this.iconSize||this.size,n=this.size==="lg",r=this.size==="xl",i=n?"12%":"16%",o=n?"xxs":r?"s":"3xl",s=this.background==="gray",a=this.background==="opaque",l=this.backgroundColor==="accent-100"&&a||this.backgroundColor==="success-100"&&a||this.backgroundColor==="error-100"&&a||this.backgroundColor==="inverse-100"&&a;let c=`var(--wui-color-${this.backgroundColor})`;return l?c=`var(--wui-icon-box-bg-${this.backgroundColor})`:s&&(c=`var(--wui-gray-${this.backgroundColor})`),this.style.cssText=`
       --local-bg-value: ${c};
       --local-bg-mix: ${l||s?"100%":i};
       --local-border-radius: var(--wui-border-radius-${o});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${this.borderColor==="wui-color-bg-125"?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}
   `,$` <wui-icon color=${this.iconColor} size=${e} name=${this.icon}></wui-icon> `}};Hn.styles=[we,ct,PT];pi([I()],Hn.prototype,"size",void 0);pi([I()],Hn.prototype,"backgroundColor",void 0);pi([I()],Hn.prototype,"iconColor",void 0);pi([I()],Hn.prototype,"iconSize",void 0);pi([I()],Hn.prototype,"background",void 0);pi([I({type:Boolean})],Hn.prototype,"border",void 0);pi([I()],Hn.prototype,"borderColor",void 0);pi([I()],Hn.prototype,"icon",void 0);Hn=pi([q("wui-icon-box")],Hn);const $T=J`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  button.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    box-shadow: 0 0 0 2px var(--wui-accent-glass-010);
  }

  @media (max-width: 500px) {
    button {
      gap: 0px;
      padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) !important;
      height: 32px;
    }
    wui-image,
    wui-icon-box,
    button > wui-text {
      visibility: hidden;
      width: 0px;
      height: 0px;
    }
    button {
      border-radius: 0px;
      border: none;
      background: transparent;
      padding: 0px;
    }
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`;var mi=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Vn=class extends G{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.disabled=!1,this.isProfileName=!1,this.address="",this.charsStart=4,this.charsEnd=6}render(){return $`
      <button
        ?disabled=${this.disabled}
        class=${Ce(this.balance?void 0:"local-no-balance")}
      >
        ${this.balanceTemplate()}
        <wui-flex gap="xxs" alignItems="center">
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${He.getTruncateString({string:this.address,charsStart:this.isProfileName?18:this.charsStart,charsEnd:this.isProfileName?0:this.charsEnd,truncate:this.isProfileName?"end":"middle"})}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.balance){const e=this.networkSrc?$`<wui-image src=${this.networkSrc}></wui-image>`:$`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `;return $`
        ${e}
        <wui-text variant="paragraph-600" color="inherit"> ${this.balance} </wui-text>
      `}return null}};Vn.styles=[we,ct,$T];mi([I()],Vn.prototype,"networkSrc",void 0);mi([I()],Vn.prototype,"avatarSrc",void 0);mi([I()],Vn.prototype,"balance",void 0);mi([I({type:Boolean})],Vn.prototype,"disabled",void 0);mi([I({type:Boolean})],Vn.prototype,"isProfileName",void 0);mi([I()],Vn.prototype,"address",void 0);mi([I()],Vn.prototype,"charsStart",void 0);mi([I()],Vn.prototype,"charsEnd",void 0);Vn=mi([q("wui-account-button")],Vn);const IT=J`
  :host {
    position: relative;
    background-color: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid var(--wui-color-bg-base-150, #1e1f1f);
    padding: 1px;
  }
`;var gs=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Dr=class extends G{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let e="xxs";return this.size==="lg"?e="m":this.size==="md"?e="xs":e="xxs",this.style.cssText=`
       --local-border-radius: var(--wui-border-radius-${e});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),$`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?$`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?$`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:$`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};Dr.styles=[we,IT];gs([I()],Dr.prototype,"size",void 0);gs([I()],Dr.prototype,"name",void 0);gs([I()],Dr.prototype,"imageSrc",void 0);gs([I()],Dr.prototype,"walletIcon",void 0);gs([I({type:Boolean})],Dr.prototype,"installed",void 0);gs([I()],Dr.prototype,"badgeSize",void 0);Dr=gs([q("wui-wallet-image")],Dr);const kT=J`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`;var g4=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};const F0=4;let Cc=class extends G{constructor(){super(...arguments),this.walletImages=[]}render(){const e=this.walletImages.length<F0;return $`${this.walletImages.slice(0,F0).map(({src:n,walletName:r})=>$`
            <wui-wallet-image
              size="inherit"
              imageSrc=${n}
              name=${Ce(r)}
            ></wui-wallet-image>
          `)}
      ${e?[...Array(F0-this.walletImages.length)].map(()=>$` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`}};Cc.styles=[we,kT];g4([I({type:Array})],Cc.prototype,"walletImages",void 0);Cc=g4([q("wui-all-wallets-image")],Cc);const OT=J`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    width: var(--local-width);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-010);
  }

  button[data-size='sm'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-s);
  }

  button[data-size='sm'][data-icon-left='true'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-s) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  button[data-size='sm'][data-icon-right='true'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-xs) var(--wui-spacing-xxs)
      var(--wui-spacing-s);
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button[data-size='md'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'][data-icon-left='true'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-s);
  }

  button[data-size='md'][data-icon-right='true'] {
    padding: 8.2px var(--wui-spacing-s) 9px var(--wui-spacing-l);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transition: all 200ms ease-in-out;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`;var uo=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let fr=class extends G{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="fill",this.hasIconLeft=!1,this.hasIconRight=!1}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
    --local-opacity-100: ${this.loading?0:1};
    --local-opacity-000: ${this.loading?1:0};`;const e=this.size==="md"?"paragraph-600":"small-600";return $`
      <button
        data-variant=${this.variant}
        data-icon-left=${this.hasIconLeft}
        data-icon-right=${this.hasIconRight}
        data-size=${this.size}
        ?disabled=${this.disabled||this.loading}
        ontouchstart
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft" @slotchange=${()=>this.handleSlotLeftChange()}></slot>
        <wui-text variant=${e} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight" @slotchange=${()=>this.handleSlotRightChange()}></slot>
      </button>
    `}handleSlotLeftChange(){this.hasIconLeft=!0}handleSlotRightChange(){this.hasIconRight=!0}loadingTemplate(){return this.loading?$`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:$``}};fr.styles=[we,ct,OT];uo([I()],fr.prototype,"size",void 0);uo([I({type:Boolean})],fr.prototype,"disabled",void 0);uo([I({type:Boolean})],fr.prototype,"fullWidth",void 0);uo([I({type:Boolean})],fr.prototype,"loading",void 0);uo([I()],fr.prototype,"variant",void 0);uo([I({type:Boolean})],fr.prototype,"hasIconLeft",void 0);uo([I({type:Boolean})],fr.prototype,"hasIconRight",void 0);fr=uo([q("wui-button")],fr);const w4=te`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,DT=J`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-gray-glass-010);
    stroke-width: 1px;
  }
`;var y4=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Sc=class extends G{constructor(){super(...arguments),this.type="wallet"}render(){return $`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return this.type==="network"?$` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${w4}`:$`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};Sc.styles=[we,ct,DT];y4([I()],Sc.prototype,"type",void 0);Sc=y4([q("wui-card-select-loader")],Sc);const RT=te`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`,NT=J`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
    transition: stroke var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;var du=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Ji=class extends G{constructor(){super(...arguments),this.size="md",this.name="uknown",this.selected=!1}render(){const e=this.size==="lg";return this.style.cssText=`
      --local-stroke: ${this.selected?"var(--wui-color-accent-100)":"var(--wui-gray-glass-010)"};
      --local-path: ${e?"var(--wui-path-network-lg)":"var(--wui-path-network)"};
      --local-width: ${e?"86px":"48px"};
      --local-height: ${e?"96px":"54px"};
      --local-icon-size: ${e?"42px":"24px"};
    `,$`${this.templateVisual()} ${e?RT:w4}`}templateVisual(){return this.imageSrc?$`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:$`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};Ji.styles=[we,NT];du([I()],Ji.prototype,"size",void 0);du([I()],Ji.prototype,"name",void 0);du([I()],Ji.prototype,"imageSrc",void 0);du([I({type:Boolean})],Ji.prototype,"selected",void 0);Ji=du([q("wui-network-image")],Ji);const MT=J`
  button {
    flex-direction: column;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-0);
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
  }

  button > wui-text {
    color: var(--wui-color-fg-100);
    max-width: var(--wui-icon-box-size-xl);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-accent-glass-010);
  }
`;var ws=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Rr=class extends G{constructor(){super(...arguments),this.name="Unknown",this.type="wallet",this.imageSrc=void 0,this.disabled=!1,this.selected=!1,this.installed=!1}render(){return $`
      <button data-selected=${Ce(this.selected)} ?disabled=${this.disabled} ontouchstart>
        ${this.imageTemplate()}
        <wui-text variant="tiny-500" color=${this.selected?"accent-100":"inherit"}>
          ${this.name}
        </wui-text>
      </button>
    `}imageTemplate(){return this.type==="network"?$`
        <wui-network-image
          .selected=${this.selected}
          imageSrc=${Ce(this.imageSrc)}
          name=${this.name}
        >
        </wui-network-image>
      `:$`
      <wui-wallet-image
        size="md"
        imageSrc=${Ce(this.imageSrc)}
        name=${this.name}
        .installed=${this.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}};Rr.styles=[we,ct,MT];ws([I()],Rr.prototype,"name",void 0);ws([I()],Rr.prototype,"type",void 0);ws([I()],Rr.prototype,"imageSrc",void 0);ws([I({type:Boolean})],Rr.prototype,"disabled",void 0);ws([I({type:Boolean})],Rr.prototype,"selected",void 0);ws([I({type:Boolean})],Rr.prototype,"installed",void 0);Rr=ws([q("wui-card-select")],Rr);const LT=J`
  a {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  a.disabled > wui-icon,
  a.disabled > wui-image {
    filter: grayscale(1);
  }

  a[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  a[data-variant='shade'],
  a[data-variant='shadeSmall'] {
    background-color: transparent;
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  a[data-variant='success'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-success-glass-010);
    background-color: var(--wui-success-glass-010);
    color: var(--wui-color-success-100);
  }

  a[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    color: var(--wui-color-fg-150);
  }

  a[data-variant='transparent'],
  a[data-variant='success'],
  a[data-variant='shadeSmall'] {
    padding: 7px var(--wui-spacing-s) 7px 10px;
  }

  a[data-variant='transparent']:has(wui-text:first-child),
  a[data-variant='success']:has(wui-text:first-child),
  a[data-variant='shadeSmall']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  a[data-variant='fill'],
  a[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  a[data-variant='fill']:has(wui-text:first-child),
  a[data-variant='shade']:has(wui-text:first-child) {
    padding: 9px var(--wui-spacing-m) 9px var(--wui-spacing-m);
  }

  a[data-variant='fill'] > wui-image,
  a[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  a[data-variant='fill'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  a[data-variant='shade'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-010);
  }

  a[data-variant='fill'] > wui-icon,
  a[data-variant='shade'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-image,
  a[data-variant='success'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-icon,
  a[data-variant='success'] > wui-icon,
  a[data-variant='shadeSmall'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  a[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  a[data-variant='shade']:focus-visible,
  a[data-variant='shadeSmall']:focus-visible {
    background-color: var(--wui-gray-glass-015);
  }

  a[data-variant='transparent']:focus-visible {
    background-color: var(--wui-gray-glass-005);
  }

  a[data-variant='success']:focus-visible {
    background-color: var(--wui-success-glass-015);
  }

  a.disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    a[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    a[data-variant='shade']:hover,
    a[data-variant='shadeSmall']:hover {
      background-color: var(--wui-gray-glass-015);
    }

    a[data-variant='transparent']:hover {
      background-color: var(--wui-gray-glass-005);
    }

    a[data-variant='success']:hover {
      background-color: var(--wui-success-glass-015);
    }
  }

  a[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  a[data-variant='shade']:active,
  a[data-variant='shadeSmall']:active {
    background-color: var(--wui-gray-glass-020);
  }

  a[data-variant='transparent']:active {
    background-color: var(--wui-gray-glass-010);
  }

  a[data-variant='success']:active {
    background-color: var(--wui-success-glass-020);
  }
`;var ys=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Nr=class extends G{constructor(){super(...arguments),this.variant="fill",this.imageSrc=void 0,this.disabled=!1,this.icon="externalLink",this.href="",this.text=void 0}render(){const n=this.variant==="success"||this.variant==="transparent"||this.variant==="shadeSmall"?"small-600":"paragraph-600";return $`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${n} color="inherit">
          ${this.title?this.title:He.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `}imageTemplate(){return this.imageSrc?$`<wui-image src=${this.imageSrc}></wui-image>`:null}};Nr.styles=[we,ct,LT];ys([I()],Nr.prototype,"variant",void 0);ys([I()],Nr.prototype,"imageSrc",void 0);ys([I({type:Boolean})],Nr.prototype,"disabled",void 0);ys([I()],Nr.prototype,"icon",void 0);ys([I()],Nr.prototype,"href",void 0);ys([I()],Nr.prototype,"text",void 0);Nr=ys([q("wui-chip")],Nr);const UT=J`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    border: 1px solid var(--wui-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  @media (max-width: 500px) {
    button[data-size='md'] {
      height: 32px;
      padding: 5px 12px;
    }

    button[data-size='md'] > wui-text > slot {
      font-size: 14px !important;
    }
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`;var Bg=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let va=class extends G{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){const e=this.size==="md"?"paragraph-600":"small-600";return $`
      <button data-size=${this.size} ?disabled=${this.loading} ontouchstart>
        ${this.loadingTemplate()}
        <wui-text variant=${e} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?$`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};va.styles=[we,ct,UT];Bg([I()],va.prototype,"size",void 0);Bg([I({type:Boolean})],va.prototype,"loading",void 0);va=Bg([q("wui-connect-button")],va);const jT=J`
  wui-flex {
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var xh=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let es=class extends G{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return $`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-button size="sm" variant="accent">
          ${this.buttonLabel}
          <wui-icon size="xs" color="inherit" slot="iconRight" name="chevronRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};es.styles=[we,ct,jT];xh([I({type:Boolean})],es.prototype,"disabled",void 0);xh([I()],es.prototype,"label",void 0);xh([I()],es.prototype,"buttonLabel",void 0);es=xh([q("wui-cta-button")],es);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const BT=t=>t.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Rl=(t,e)=>{var r;const n=t._$AN;if(n===void 0)return!1;for(const i of n)(r=i._$AO)==null||r.call(i,e,!1),Rl(i,e);return!0},rf=t=>{let e,n;do{if((e=t._$AM)===void 0)break;n=e._$AN,n.delete(t),t=e}while((n==null?void 0:n.size)===0)},v4=t=>{for(let e;e=t._$AM;t=e){let n=e._$AN;if(n===void 0)e._$AN=n=new Set;else if(n.has(t))break;n.add(t),zT(e)}};function FT(t){this._$AN!==void 0?(rf(this),this._$AM=t,v4(this)):this._$AM=t}function WT(t,e=!1,n=0){const r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(e)if(Array.isArray(r))for(let o=n;o<r.length;o++)Rl(r[o],!1),rf(r[o]);else r!=null&&(Rl(r,!1),rf(r));else Rl(this,t)}const zT=t=>{t.type==f4.CHILD&&(t._$AP??(t._$AP=WT),t._$AQ??(t._$AQ=FT))};class HT extends p4{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,n,r){super._$AT(e,n,r),v4(this),this.isConnected=e._$AU}_$AO(e,n=!0){var r,i;e!==this.isConnected&&(this.isConnected=e,e?(r=this.reconnected)==null||r.call(this):(i=this.disconnected)==null||i.call(this)),n&&(Rl(this,e),rf(this))}setValue(e){if(BT(this._$Ct))this._$Ct._$AI(e,this);else{const n=[...this._$Ct._$AH];n[this._$Ci]=e,this._$Ct._$AI(n,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Eh=()=>new VT;let VT=class{};const W0=new WeakMap,_h=h4(class extends HT{render(t){return yt}update(t,[e]){var r;const n=e!==this.Y;return n&&this.Y!==void 0&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.Y=e,this.ht=(r=t.options)==null?void 0:r.host,this.rt(this.ct=t.element)),yt}rt(t){if(typeof this.Y=="function"){const e=this.ht??globalThis;let n=W0.get(e);n===void 0&&(n=new WeakMap,W0.set(e,n)),n.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),n.set(this.Y,t),t!==void 0&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){var t,e;return typeof this.Y=="function"?(t=W0.get(this.ht??globalThis))==null?void 0:t.get(this.Y):(e=this.Y)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),qT=J`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    font-size: var(--wui-font-size-paragraph);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md,
  wui-loading-spinner + .wui-size-md {
    padding: 10.5px var(--wui-spacing-3xl) 10.5px 40px;
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-l);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all var(--wui-ease-in-power-2) var(--wui-duration-md);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`;var fo=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let hr=class extends G{constructor(){super(...arguments),this.inputElementRef=Eh(),this.size="md",this.disabled=!1,this.placeholder="",this.type="text"}render(){const e=`wui-size-${this.size}`;return $` ${this.templateIcon()}
      <input
        ${_h(this.inputElementRef)}
        class=${e}
        type=${this.type}
        enterkeyhint=${Ce(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
        value=${Ce(this.value)}
      />
      <slot></slot>`}templateIcon(){return this.icon?$`<wui-icon
        data-input=${this.size}
        size="sm"
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){var e;this.dispatchEvent(new CustomEvent("inputChange",{detail:(e=this.inputElementRef.value)==null?void 0:e.value,bubbles:!0,composed:!0}))}};hr.styles=[we,ct,qT];fo([I()],hr.prototype,"size",void 0);fo([I()],hr.prototype,"icon",void 0);fo([I({type:Boolean})],hr.prototype,"disabled",void 0);fo([I()],hr.prototype,"placeholder",void 0);fo([I()],hr.prototype,"type",void 0);fo([I()],hr.prototype,"keyHint",void 0);fo([I()],hr.prototype,"value",void 0);hr=fo([q("wui-input-text")],hr);const ZT=J`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;var Ch=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let ts=class extends G{constructor(){super(...arguments),this.disabled=!1}render(){return $`
      <wui-input-text
        placeholder="Email"
        icon="mail"
        size="md"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?$`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};ts.styles=[we,ZT];Ch([I()],ts.prototype,"errorMessage",void 0);Ch([I({type:Boolean})],ts.prototype,"disabled",void 0);Ch([I()],ts.prototype,"value",void 0);ts=Ch([q("wui-email-input")],ts);const GT=J`
  button {
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-fg-100);
    padding: var(--wui-spacing-2xs);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`;var fu=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Xi=class extends G{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){return $`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};Xi.styles=[we,ct,Lg,GT];fu([I()],Xi.prototype,"size",void 0);fu([I({type:Boolean})],Xi.prototype,"disabled",void 0);fu([I()],Xi.prototype,"icon",void 0);fu([I()],Xi.prototype,"iconColor",void 0);Xi=fu([q("wui-icon-link")],Xi);const KT=J`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  button:active:enabled {
    background-color: var(--wui-color-fg-225);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }
  }
`;var b4=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Ac=class extends G{constructor(){super(...arguments),this.icon="copy"}render(){return $`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};Ac.styles=[we,ct,KT];b4([I()],Ac.prototype,"icon",void 0);Ac=b4([q("wui-input-element")],Ac);const YT=J`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    font-family: var(--wui-font-family);
    font-size: var(--wui-font-size-large);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-large);
    text-align: center;
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-005);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-015);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }
  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      background-color: var(--wui-gray-glass-015);
    }
  }
`;var Fg=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let ba=class extends G{constructor(){super(...arguments),this.disabled=!1,this.value=""}render(){return $`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
      value=${this.value}
    /> `}};ba.styles=[we,ct,YT];Fg([I({type:Boolean})],ba.prototype,"disabled",void 0);Fg([I({type:String})],ba.prototype,"value",void 0);ba=Fg([q("wui-input-numeric")],ba);const QT=J`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-gray-glass-015);
  }
`;var Wg=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let xa=class extends G{constructor(){super(...arguments),this.disabled=!1,this.color="inherit"}render(){return $`
      <button ?disabled=${this.disabled} ontouchstart>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};xa.styles=[we,ct,QT];Wg([I({type:Boolean})],xa.prototype,"disabled",void 0);Wg([I()],xa.prototype,"color",void 0);xa=Wg([q("wui-link")],xa);const JT=J`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='blue'] {
    box-shadow: 0 0 0 2px var(--wui-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button[data-loading='true'] > wui-icon {
    transition: opacity 200ms ease-in-out;
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;var Fr=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let kn=class extends G{constructor(){super(...arguments),this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return $`
      <button
        ?disabled=${this.loading?!0:!!this.disabled}
        data-loading=${this.loading}
        data-iconvariant=${Ce(this.iconVariant)}
        ontouchstart
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if(this.variant==="image"&&this.imageSrc)return $`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if(this.iconVariant==="square"&&this.icon&&this.variant==="icon")return $`<wui-icon name=${this.icon}></wui-icon>`;if(this.variant==="icon"&&this.icon&&this.iconVariant){const e=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",n=this.iconVariant==="square-blue"?"mdl":"md",r=this.iconSize?this.iconSize:n;return $`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${r}
          background="transparent"
          iconColor=${e}
          backgroundColor=${e}
          size=${n}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?$`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:$``}chevronTemplate(){return this.chevron?$`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};kn.styles=[we,ct,JT];Fr([I()],kn.prototype,"icon",void 0);Fr([I()],kn.prototype,"iconSize",void 0);Fr([I()],kn.prototype,"variant",void 0);Fr([I()],kn.prototype,"iconVariant",void 0);Fr([I({type:Boolean})],kn.prototype,"disabled",void 0);Fr([I()],kn.prototype,"imageSrc",void 0);Fr([I()],kn.prototype,"alt",void 0);Fr([I({type:Boolean})],kn.prototype,"chevron",void 0);Fr([I({type:Boolean})],kn.prototype,"loading",void 0);kn=Fr([q("wui-list-item")],kn);var A1;(function(t){t.approve="approved",t.bought="bought",t.borrow="borrowed",t.burn="burnt",t.cancel="canceled",t.claim="claimed",t.deploy="deployed",t.deposit="deposited",t.execute="executed",t.mint="minted",t.receive="received",t.repay="repaid",t.send="sent",t.sell="sold",t.stake="staked",t.trade="swapped",t.unstake="unstaked",t.withdraw="withdrawn"})(A1||(A1={}));const XT=J`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-005);
  }

  :host > wui-flex wui-image {
    display: block;
    z-index: -1;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }
`;var vs=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Mr=class extends G{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""}}render(){const[e,n]=this.images,r=(e==null?void 0:e.type)==="NFT",i=n!=null&&n.url?n.type==="NFT":r,o=r?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)",s=i?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)";return this.style.cssText=`
    --local-left-border-radius: ${o};
    --local-right-border-radius: ${s};
    `,$`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){const[e,n]=this.images,r=e==null?void 0:e.type;return this.images.length===2&&(e!=null&&e.url||n!=null&&n.url)?$`<div class="swap-images-container">
        ${e!=null&&e.url?$`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:null}
        ${n!=null&&n.url?$`<wui-image src=${n.url} alt="Transaction image"></wui-image>`:null}
      </div>`:e!=null&&e.url?$`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:r==="NFT"?$`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:$`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}templateIcon(){let e="accent-100",n;return n=this.getIcon(),this.status&&(e=this.getStatusColor()),n?$`
      <wui-icon-box
        size="xxs"
        iconColor=${e}
        backgroundColor=${e}
        background="opaque"
        icon=${n}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():this.type==="trade"?"swapHorizontalBold":this.type==="approve"?"checkmark":this.type==="cancel"?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success-100";case"failed":return"error-100";case"pending":return"inverse-100";default:return"accent-100"}}};Mr.styles=[XT];vs([I()],Mr.prototype,"type",void 0);vs([I()],Mr.prototype,"status",void 0);vs([I()],Mr.prototype,"direction",void 0);vs([I({type:Boolean})],Mr.prototype,"onlyDirectionIcon",void 0);vs([I({type:Array})],Mr.prototype,"images",void 0);vs([I({type:Object})],Mr.prototype,"secondImage",void 0);Mr=vs([q("wui-transaction-visual")],Mr);const eP=J`
  :host > wui-flex:first-child {
    align-items: center;
    column-gap: var(--wui-spacing-s);
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;var ho=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let pr=class extends G{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[]}render(){return $`
      <wui-flex>
        <wui-transaction-visual
          .status=${this.status}
          direction=${Ce(this.direction)}
          type=${this.type}
          onlyDirectionIcon=${Ce(this.onlyDirectionIcon)}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">
            ${A1[this.type]}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){var n;const e=(n=this.descriptions)==null?void 0:n[0];return e?$`
          <wui-text variant="small-500" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}templateSecondDescription(){var n;const e=(n=this.descriptions)==null?void 0:n[1];return e?$`
          <wui-icon class="description-separator-icon" size="xxs" name="arrowRight"></wui-icon>
          <wui-text variant="small-400" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}};pr.styles=[we,eP];ho([I()],pr.prototype,"type",void 0);ho([I({type:Array})],pr.prototype,"descriptions",void 0);ho([I()],pr.prototype,"date",void 0);ho([I({type:Boolean})],pr.prototype,"onlyDirectionIcon",void 0);ho([I()],pr.prototype,"status",void 0);ho([I()],pr.prototype,"direction",void 0);ho([I({type:Array})],pr.prototype,"images",void 0);pr=ho([q("wui-transaction-list-item")],pr);const tP=J`
  :host > wui-flex:first-child {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`;var nP=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let of=class extends G{render(){return $`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px"></wui-shimmer>
        <wui-flex flexDirection="column" gap="2xs">
          <wui-shimmer width="72px" height="16px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="148px" height="14px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" borderRadius="5xs"></wui-shimmer>
      </wui-flex>
    `}};of.styles=[we,tP];of=nP([q("wui-transaction-list-item-loader")],of);const rP=J`
  :host {
    display: block;
    padding: 3.5px 5px !important;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }
`;var x4=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Tc=class extends G{constructor(){super(...arguments),this.variant="main"}render(){return this.dataset.variant=this.variant,$`
      <wui-text data-variant=${this.variant} variant="micro-700" color="inherit">
        <slot></slot>
      </wui-text>
    `}};Tc.styles=[we,rP];x4([I()],Tc.prototype,"variant",void 0);Tc=x4([q("wui-tag")],Tc);const iP=J`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`;var br=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let yn=class extends G{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.installed=!1,this.disabled=!1,this.showAllWallets=!1}render(){return $`
      <button ?disabled=${this.disabled} ontouchstart>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?$` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?$` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?$`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`:!this.showAllWallets&&!this.imageSrc?$`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`:null}templateStatus(){return this.tagLabel&&this.tagVariant?$`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?$`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};yn.styles=[we,ct,iP];br([I({type:Array})],yn.prototype,"walletImages",void 0);br([I()],yn.prototype,"imageSrc",void 0);br([I()],yn.prototype,"name",void 0);br([I()],yn.prototype,"tagLabel",void 0);br([I()],yn.prototype,"tagVariant",void 0);br([I()],yn.prototype,"icon",void 0);br([I()],yn.prototype,"walletIcon",void 0);br([I({type:Boolean})],yn.prototype,"installed",void 0);br([I({type:Boolean})],yn.prototype,"disabled",void 0);br([I({type:Boolean})],yn.prototype,"showAllWallets",void 0);yn=br([q("wui-list-wallet")],yn);const oP=J`
  :host {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-010);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`;var E4=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Pc=class extends G{constructor(){super(...arguments),this.logo="google"}render(){return $`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};Pc.styles=[we,oP];E4([I()],Pc.prototype,"logo",void 0);Pc=E4([q("wui-logo")],Pc);const sP=J`
  :host {
    display: block;
  }

  button {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var zg=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Ea=class extends G{constructor(){super(...arguments),this.logo="google",this.disabled=!1}render(){return $`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};Ea.styles=[we,ct,sP];zg([I()],Ea.prototype,"logo",void 0);zg([I({type:Boolean})],Ea.prototype,"disabled",void 0);Ea=zg([q("wui-logo-select")],Ea);const aP=J`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }
`;var Hg=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let _a=class extends G{constructor(){super(...arguments),this.imageSrc=void 0,this.disabled=!1}render(){return $`
      <button ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.imageSrc?$`<wui-image src=${this.imageSrc}></wui-image>`:$`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};_a.styles=[we,ct,aP];Hg([I()],_a.prototype,"imageSrc",void 0);Hg([I({type:Boolean})],_a.prototype,"disabled",void 0);_a=Hg([q("wui-network-button")],_a);const lP=J`
  :host {
    position: relative;
    display: block;
  }
`;var Sh=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let ns=class extends G{constructor(){super(...arguments),this.length=6,this.otp="",this.values=Array.from({length:this.length}).map(()=>""),this.numerics=[],this.shouldInputBeEnabled=e=>this.values.slice(0,e).every(r=>r!==""),this.handleKeyDown=(e,n)=>{const r=e.target,i=this.getInputElement(r),o=["ArrowLeft","ArrowRight","Shift","Delete"];if(!i)return;o.includes(e.key)&&e.preventDefault();const s=i.selectionStart;switch(e.key){case"ArrowLeft":s&&i.setSelectionRange(s+1,s+1),this.focusInputField("prev",n);break;case"ArrowRight":this.focusInputField("next",n);break;case"Shift":this.focusInputField("next",n);break;case"Delete":i.value===""?this.focusInputField("prev",n):this.updateInput(i,n,"");break;case"Backspace":i.value===""?this.focusInputField("prev",n):this.updateInput(i,n,"");break}},this.focusInputField=(e,n)=>{if(e==="next"){const r=n+1;if(!this.shouldInputBeEnabled(r))return;const i=this.numerics[r<this.length?r:n],o=i?this.getInputElement(i):void 0;o&&(o.disabled=!1,o.focus())}if(e==="prev"){const r=n-1,i=this.numerics[r>-1?r:n],o=i?this.getInputElement(i):void 0;o&&o.focus()}}}firstUpdated(){var n,r;this.otp&&(this.values=this.otp.split(""));const e=(n=this.shadowRoot)==null?void 0:n.querySelectorAll("wui-input-numeric");e&&(this.numerics=Array.from(e)),(r=this.numerics[0])==null||r.focus()}render(){return $`
      <wui-flex gap="xxs" data-testid="wui-otp-input">
        ${Array.from({length:this.length}).map((e,n)=>$`
            <wui-input-numeric
              @input=${r=>this.handleInput(r,n)}
              @keydown=${r=>this.handleKeyDown(r,n)}
              .disabled=${!this.shouldInputBeEnabled(n)}
              .value=${this.values[n]||""}
            >
            </wui-input-numeric>
          `)}
      </wui-flex>
    `}updateInput(e,n,r){const i=this.numerics[n],o=e||(i?this.getInputElement(i):void 0);o&&(o.value=r,this.values=this.values.map((s,a)=>a===n?r:s))}handleInput(e,n){const r=e.target,i=this.getInputElement(r);if(i){const o=i.value;e.inputType==="insertFromPaste"?this.handlePaste(i,o,n):He.isNumber(o)&&e.data?(this.updateInput(i,n,e.data),this.focusInputField("next",n)):this.updateInput(i,n,"")}this.dispatchInputChangeEvent()}handlePaste(e,n,r){const i=n[0];if(i&&He.isNumber(i)){this.updateInput(e,r,i);const s=n.substring(1);if(r+1<this.length&&s.length){const a=this.numerics[r+1],l=a?this.getInputElement(a):void 0;l&&this.handlePaste(l,s,r+1)}else this.focusInputField("next",r)}else this.updateInput(e,r,"")}getInputElement(e){var n;return(n=e.shadowRoot)!=null&&n.querySelector("input")?e.shadowRoot.querySelector("input"):null}dispatchInputChangeEvent(){const e=this.values.join("");this.dispatchEvent(new CustomEvent("inputChange",{detail:e,bubbles:!0,composed:!0}))}};ns.styles=[we,lP];Sh([I({type:Number})],ns.prototype,"length",void 0);Sh([I({type:String})],ns.prototype,"otp",void 0);Sh([ie()],ns.prototype,"values",void 0);ns=Sh([q("wui-otp")],ns);var hu={},cP=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},_4={},Nn={};let Vg;const uP=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];Nn.getSymbolSize=function(e){if(!e)throw new Error('"version" cannot be null or undefined');if(e<1||e>40)throw new Error('"version" should be in range from 1 to 40');return e*4+17};Nn.getSymbolTotalCodewords=function(e){return uP[e]};Nn.getBCHDigit=function(t){let e=0;for(;t!==0;)e++,t>>>=1;return e};Nn.setToSJISFunction=function(e){if(typeof e!="function")throw new Error('"toSJISFunc" is not a valid function.');Vg=e};Nn.isKanjiModeEnabled=function(){return typeof Vg<"u"};Nn.toSJIS=function(e){return Vg(e)};var Ah={};(function(t){t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2};function e(n){if(typeof n!="string")throw new Error("Param is not a string");switch(n.toLowerCase()){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw new Error("Unknown EC Level: "+n)}}t.isValid=function(r){return r&&typeof r.bit<"u"&&r.bit>=0&&r.bit<4},t.from=function(r,i){if(t.isValid(r))return r;try{return e(r)}catch{return i}}})(Ah);function C4(){this.buffer=[],this.length=0}C4.prototype={get:function(t){const e=Math.floor(t/8);return(this.buffer[e]>>>7-t%8&1)===1},put:function(t,e){for(let n=0;n<e;n++)this.putBit((t>>>e-n-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(t){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var dP=C4;function pu(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}pu.prototype.set=function(t,e,n,r){const i=t*this.size+e;this.data[i]=n,r&&(this.reservedBit[i]=!0)};pu.prototype.get=function(t,e){return this.data[t*this.size+e]};pu.prototype.xor=function(t,e,n){this.data[t*this.size+e]^=n};pu.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]};var fP=pu,S4={};(function(t){const e=Nn.getSymbolSize;t.getRowColCoords=function(r){if(r===1)return[];const i=Math.floor(r/7)+2,o=e(r),s=o===145?26:Math.ceil((o-13)/(2*i-2))*2,a=[o-7];for(let l=1;l<i-1;l++)a[l]=a[l-1]-s;return a.push(6),a.reverse()},t.getPositions=function(r){const i=[],o=t.getRowColCoords(r),s=o.length;for(let a=0;a<s;a++)for(let l=0;l<s;l++)a===0&&l===0||a===0&&l===s-1||a===s-1&&l===0||i.push([o[a],o[l]]);return i}})(S4);var A4={};const hP=Nn.getSymbolSize,bv=7;A4.getPositions=function(e){const n=hP(e);return[[0,0],[n-bv,0],[0,n-bv]]};var T4={};(function(t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};t.isValid=function(i){return i!=null&&i!==""&&!isNaN(i)&&i>=0&&i<=7},t.from=function(i){return t.isValid(i)?parseInt(i,10):void 0},t.getPenaltyN1=function(i){const o=i.size;let s=0,a=0,l=0,c=null,u=null;for(let d=0;d<o;d++){a=l=0,c=u=null;for(let p=0;p<o;p++){let w=i.get(d,p);w===c?a++:(a>=5&&(s+=e.N1+(a-5)),c=w,a=1),w=i.get(p,d),w===u?l++:(l>=5&&(s+=e.N1+(l-5)),u=w,l=1)}a>=5&&(s+=e.N1+(a-5)),l>=5&&(s+=e.N1+(l-5))}return s},t.getPenaltyN2=function(i){const o=i.size;let s=0;for(let a=0;a<o-1;a++)for(let l=0;l<o-1;l++){const c=i.get(a,l)+i.get(a,l+1)+i.get(a+1,l)+i.get(a+1,l+1);(c===4||c===0)&&s++}return s*e.N2},t.getPenaltyN3=function(i){const o=i.size;let s=0,a=0,l=0;for(let c=0;c<o;c++){a=l=0;for(let u=0;u<o;u++)a=a<<1&2047|i.get(c,u),u>=10&&(a===1488||a===93)&&s++,l=l<<1&2047|i.get(u,c),u>=10&&(l===1488||l===93)&&s++}return s*e.N3},t.getPenaltyN4=function(i){let o=0;const s=i.data.length;for(let l=0;l<s;l++)o+=i.data[l];return Math.abs(Math.ceil(o*100/s/5)-10)*e.N4};function n(r,i,o){switch(r){case t.Patterns.PATTERN000:return(i+o)%2===0;case t.Patterns.PATTERN001:return i%2===0;case t.Patterns.PATTERN010:return o%3===0;case t.Patterns.PATTERN011:return(i+o)%3===0;case t.Patterns.PATTERN100:return(Math.floor(i/2)+Math.floor(o/3))%2===0;case t.Patterns.PATTERN101:return i*o%2+i*o%3===0;case t.Patterns.PATTERN110:return(i*o%2+i*o%3)%2===0;case t.Patterns.PATTERN111:return(i*o%3+(i+o)%2)%2===0;default:throw new Error("bad maskPattern:"+r)}}t.applyMask=function(i,o){const s=o.size;for(let a=0;a<s;a++)for(let l=0;l<s;l++)o.isReserved(l,a)||o.xor(l,a,n(i,l,a))},t.getBestMask=function(i,o){const s=Object.keys(t.Patterns).length;let a=0,l=1/0;for(let c=0;c<s;c++){o(c),t.applyMask(c,i);const u=t.getPenaltyN1(i)+t.getPenaltyN2(i)+t.getPenaltyN3(i)+t.getPenaltyN4(i);t.applyMask(c,i),u<l&&(l=u,a=c)}return a}})(T4);var Th={};const Di=Ah,Gu=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],Ku=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];Th.getBlocksCount=function(e,n){switch(n){case Di.L:return Gu[(e-1)*4+0];case Di.M:return Gu[(e-1)*4+1];case Di.Q:return Gu[(e-1)*4+2];case Di.H:return Gu[(e-1)*4+3];default:return}};Th.getTotalCodewordsCount=function(e,n){switch(n){case Di.L:return Ku[(e-1)*4+0];case Di.M:return Ku[(e-1)*4+1];case Di.Q:return Ku[(e-1)*4+2];case Di.H:return Ku[(e-1)*4+3];default:return}};var P4={},Ph={};const Nl=new Uint8Array(512),sf=new Uint8Array(256);(function(){let e=1;for(let n=0;n<255;n++)Nl[n]=e,sf[e]=n,e<<=1,e&256&&(e^=285);for(let n=255;n<512;n++)Nl[n]=Nl[n-255]})();Ph.log=function(e){if(e<1)throw new Error("log("+e+")");return sf[e]};Ph.exp=function(e){return Nl[e]};Ph.mul=function(e,n){return e===0||n===0?0:Nl[sf[e]+sf[n]]};(function(t){const e=Ph;t.mul=function(r,i){const o=new Uint8Array(r.length+i.length-1);for(let s=0;s<r.length;s++)for(let a=0;a<i.length;a++)o[s+a]^=e.mul(r[s],i[a]);return o},t.mod=function(r,i){let o=new Uint8Array(r);for(;o.length-i.length>=0;){const s=o[0];for(let l=0;l<i.length;l++)o[l]^=e.mul(i[l],s);let a=0;for(;a<o.length&&o[a]===0;)a++;o=o.slice(a)}return o},t.generateECPolynomial=function(r){let i=new Uint8Array([1]);for(let o=0;o<r;o++)i=t.mul(i,new Uint8Array([1,e.exp(o)]));return i}})(P4);const $4=P4;function qg(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}qg.prototype.initialize=function(e){this.degree=e,this.genPoly=$4.generateECPolynomial(this.degree)};qg.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");const n=new Uint8Array(e.length+this.degree);n.set(e);const r=$4.mod(n,this.genPoly),i=this.degree-r.length;if(i>0){const o=new Uint8Array(this.degree);return o.set(r,i),o}return r};var pP=qg,I4={},po={},Zg={};Zg.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40};var Wr={};const k4="[0-9]+",mP="[A-Z $%*+\\-./:]+";let $c="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";$c=$c.replace(/u/g,"\\u");const gP="(?:(?![A-Z0-9 $%*+\\-./:]|"+$c+`)(?:.|[\r
]))+`;Wr.KANJI=new RegExp($c,"g");Wr.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");Wr.BYTE=new RegExp(gP,"g");Wr.NUMERIC=new RegExp(k4,"g");Wr.ALPHANUMERIC=new RegExp(mP,"g");const wP=new RegExp("^"+$c+"$"),yP=new RegExp("^"+k4+"$"),vP=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");Wr.testKanji=function(e){return wP.test(e)};Wr.testNumeric=function(e){return yP.test(e)};Wr.testAlphanumeric=function(e){return vP.test(e)};(function(t){const e=Zg,n=Wr;t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(o,s){if(!o.ccBits)throw new Error("Invalid mode: "+o);if(!e.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?o.ccBits[0]:s<27?o.ccBits[1]:o.ccBits[2]},t.getBestModeForData=function(o){return n.testNumeric(o)?t.NUMERIC:n.testAlphanumeric(o)?t.ALPHANUMERIC:n.testKanji(o)?t.KANJI:t.BYTE},t.toString=function(o){if(o&&o.id)return o.id;throw new Error("Invalid mode")},t.isValid=function(o){return o&&o.bit&&o.ccBits};function r(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw new Error("Unknown mode: "+i)}}t.from=function(o,s){if(t.isValid(o))return o;try{return r(o)}catch{return s}}})(po);(function(t){const e=Nn,n=Th,r=Ah,i=po,o=Zg,s=7973,a=e.getBCHDigit(s);function l(p,w,y){for(let E=1;E<=40;E++)if(w<=t.getCapacity(E,y,p))return E}function c(p,w){return i.getCharCountIndicator(p,w)+4}function u(p,w){let y=0;return p.forEach(function(E){const C=c(E.mode,w);y+=C+E.getBitsLength()}),y}function d(p,w){for(let y=1;y<=40;y++)if(u(p,y)<=t.getCapacity(y,w,i.MIXED))return y}t.from=function(w,y){return o.isValid(w)?parseInt(w,10):y},t.getCapacity=function(w,y,E){if(!o.isValid(w))throw new Error("Invalid QR Code version");typeof E>"u"&&(E=i.BYTE);const C=e.getSymbolTotalCodewords(w),b=n.getTotalCodewordsCount(w,y),m=(C-b)*8;if(E===i.MIXED)return m;const v=m-c(E,w);switch(E){case i.NUMERIC:return Math.floor(v/10*3);case i.ALPHANUMERIC:return Math.floor(v/11*2);case i.KANJI:return Math.floor(v/13);case i.BYTE:default:return Math.floor(v/8)}},t.getBestVersionForData=function(w,y){let E;const C=r.from(y,r.M);if(Array.isArray(w)){if(w.length>1)return d(w,C);if(w.length===0)return 1;E=w[0]}else E=w;return l(E.mode,E.getLength(),C)},t.getEncodedBits=function(w){if(!o.isValid(w)||w<7)throw new Error("Invalid QR Code version");let y=w<<12;for(;e.getBCHDigit(y)-a>=0;)y^=s<<e.getBCHDigit(y)-a;return w<<12|y}})(I4);var O4={};const T1=Nn,D4=1335,bP=21522,xv=T1.getBCHDigit(D4);O4.getEncodedBits=function(e,n){const r=e.bit<<3|n;let i=r<<10;for(;T1.getBCHDigit(i)-xv>=0;)i^=D4<<T1.getBCHDigit(i)-xv;return(r<<10|i)^bP};var R4={};const xP=po;function Ca(t){this.mode=xP.NUMERIC,this.data=t.toString()}Ca.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)};Ca.prototype.getLength=function(){return this.data.length};Ca.prototype.getBitsLength=function(){return Ca.getBitsLength(this.data.length)};Ca.prototype.write=function(e){let n,r,i;for(n=0;n+3<=this.data.length;n+=3)r=this.data.substr(n,3),i=parseInt(r,10),e.put(i,10);const o=this.data.length-n;o>0&&(r=this.data.substr(n),i=parseInt(r,10),e.put(i,o*3+1))};var EP=Ca;const _P=po,z0=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function Sa(t){this.mode=_P.ALPHANUMERIC,this.data=t}Sa.getBitsLength=function(e){return 11*Math.floor(e/2)+6*(e%2)};Sa.prototype.getLength=function(){return this.data.length};Sa.prototype.getBitsLength=function(){return Sa.getBitsLength(this.data.length)};Sa.prototype.write=function(e){let n;for(n=0;n+2<=this.data.length;n+=2){let r=z0.indexOf(this.data[n])*45;r+=z0.indexOf(this.data[n+1]),e.put(r,11)}this.data.length%2&&e.put(z0.indexOf(this.data[n]),6)};var CP=Sa,SP=function(e){for(var n=[],r=e.length,i=0;i<r;i++){var o=e.charCodeAt(i);if(o>=55296&&o<=56319&&r>i+1){var s=e.charCodeAt(i+1);s>=56320&&s<=57343&&(o=(o-55296)*1024+s-56320+65536,i+=1)}if(o<128){n.push(o);continue}if(o<2048){n.push(o>>6|192),n.push(o&63|128);continue}if(o<55296||o>=57344&&o<65536){n.push(o>>12|224),n.push(o>>6&63|128),n.push(o&63|128);continue}if(o>=65536&&o<=1114111){n.push(o>>18|240),n.push(o>>12&63|128),n.push(o>>6&63|128),n.push(o&63|128);continue}n.push(239,191,189)}return new Uint8Array(n).buffer};const AP=SP,TP=po;function Aa(t){this.mode=TP.BYTE,typeof t=="string"&&(t=AP(t)),this.data=new Uint8Array(t)}Aa.getBitsLength=function(e){return e*8};Aa.prototype.getLength=function(){return this.data.length};Aa.prototype.getBitsLength=function(){return Aa.getBitsLength(this.data.length)};Aa.prototype.write=function(t){for(let e=0,n=this.data.length;e<n;e++)t.put(this.data[e],8)};var PP=Aa;const $P=po,IP=Nn;function Ta(t){this.mode=$P.KANJI,this.data=t}Ta.getBitsLength=function(e){return e*13};Ta.prototype.getLength=function(){return this.data.length};Ta.prototype.getBitsLength=function(){return Ta.getBitsLength(this.data.length)};Ta.prototype.write=function(t){let e;for(e=0;e<this.data.length;e++){let n=IP.toSJIS(this.data[e]);if(n>=33088&&n<=40956)n-=33088;else if(n>=57408&&n<=60351)n-=49472;else throw new Error("Invalid SJIS character: "+this.data[e]+`
Make sure your charset is UTF-8`);n=(n>>>8&255)*192+(n&255),t.put(n,13)}};var kP=Ta,N4={exports:{}};(function(t){var e={single_source_shortest_paths:function(n,r,i){var o={},s={};s[r]=0;var a=e.PriorityQueue.make();a.push(r,0);for(var l,c,u,d,p,w,y,E,C;!a.empty();){l=a.pop(),c=l.value,d=l.cost,p=n[c]||{};for(u in p)p.hasOwnProperty(u)&&(w=p[u],y=d+w,E=s[u],C=typeof s[u]>"u",(C||E>y)&&(s[u]=y,a.push(u,y),o[u]=c))}if(typeof i<"u"&&typeof s[i]>"u"){var b=["Could not find a path from ",r," to ",i,"."].join("");throw new Error(b)}return o},extract_shortest_path_from_predecessor_list:function(n,r){for(var i=[],o=r;o;)i.push(o),n[o],o=n[o];return i.reverse(),i},find_path:function(n,r,i){var o=e.single_source_shortest_paths(n,r,i);return e.extract_shortest_path_from_predecessor_list(o,i)},PriorityQueue:{make:function(n){var r=e.PriorityQueue,i={},o;n=n||{};for(o in r)r.hasOwnProperty(o)&&(i[o]=r[o]);return i.queue=[],i.sorter=n.sorter||r.default_sorter,i},default_sorter:function(n,r){return n.cost-r.cost},push:function(n,r){var i={value:n,cost:r};this.queue.push(i),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};t.exports=e})(N4);var OP=N4.exports;(function(t){const e=po,n=EP,r=CP,i=PP,o=kP,s=Wr,a=Nn,l=OP;function c(b){return unescape(encodeURIComponent(b)).length}function u(b,m,v){const x=[];let _;for(;(_=b.exec(v))!==null;)x.push({data:_[0],index:_.index,mode:m,length:_[0].length});return x}function d(b){const m=u(s.NUMERIC,e.NUMERIC,b),v=u(s.ALPHANUMERIC,e.ALPHANUMERIC,b);let x,_;return a.isKanjiModeEnabled()?(x=u(s.BYTE,e.BYTE,b),_=u(s.KANJI,e.KANJI,b)):(x=u(s.BYTE_KANJI,e.BYTE,b),_=[]),m.concat(v,x,_).sort(function(f,T){return f.index-T.index}).map(function(f){return{data:f.data,mode:f.mode,length:f.length}})}function p(b,m){switch(m){case e.NUMERIC:return n.getBitsLength(b);case e.ALPHANUMERIC:return r.getBitsLength(b);case e.KANJI:return o.getBitsLength(b);case e.BYTE:return i.getBitsLength(b)}}function w(b){return b.reduce(function(m,v){const x=m.length-1>=0?m[m.length-1]:null;return x&&x.mode===v.mode?(m[m.length-1].data+=v.data,m):(m.push(v),m)},[])}function y(b){const m=[];for(let v=0;v<b.length;v++){const x=b[v];switch(x.mode){case e.NUMERIC:m.push([x,{data:x.data,mode:e.ALPHANUMERIC,length:x.length},{data:x.data,mode:e.BYTE,length:x.length}]);break;case e.ALPHANUMERIC:m.push([x,{data:x.data,mode:e.BYTE,length:x.length}]);break;case e.KANJI:m.push([x,{data:x.data,mode:e.BYTE,length:c(x.data)}]);break;case e.BYTE:m.push([{data:x.data,mode:e.BYTE,length:c(x.data)}])}}return m}function E(b,m){const v={},x={start:{}};let _=["start"];for(let S=0;S<b.length;S++){const f=b[S],T=[];for(let O=0;O<f.length;O++){const D=f[O],M=""+S+O;T.push(M),v[M]={node:D,lastCount:0},x[M]={};for(let ee=0;ee<_.length;ee++){const ne=_[ee];v[ne]&&v[ne].node.mode===D.mode?(x[ne][M]=p(v[ne].lastCount+D.length,D.mode)-p(v[ne].lastCount,D.mode),v[ne].lastCount+=D.length):(v[ne]&&(v[ne].lastCount=D.length),x[ne][M]=p(D.length,D.mode)+4+e.getCharCountIndicator(D.mode,m))}}_=T}for(let S=0;S<_.length;S++)x[_[S]].end=0;return{map:x,table:v}}function C(b,m){let v;const x=e.getBestModeForData(b);if(v=e.from(m,x),v!==e.BYTE&&v.bit<x.bit)throw new Error('"'+b+'" cannot be encoded with mode '+e.toString(v)+`.
 Suggested mode is: `+e.toString(x));switch(v===e.KANJI&&!a.isKanjiModeEnabled()&&(v=e.BYTE),v){case e.NUMERIC:return new n(b);case e.ALPHANUMERIC:return new r(b);case e.KANJI:return new o(b);case e.BYTE:return new i(b)}}t.fromArray=function(m){return m.reduce(function(v,x){return typeof x=="string"?v.push(C(x,null)):x.data&&v.push(C(x.data,x.mode)),v},[])},t.fromString=function(m,v){const x=d(m,a.isKanjiModeEnabled()),_=y(x),S=E(_,v),f=l.find_path(S.map,"start","end"),T=[];for(let O=1;O<f.length-1;O++)T.push(S.table[f[O]].node);return t.fromArray(w(T))},t.rawSplit=function(m){return t.fromArray(d(m,a.isKanjiModeEnabled()))}})(R4);const $h=Nn,H0=Ah,DP=dP,RP=fP,NP=S4,MP=A4,P1=T4,$1=Th,LP=pP,af=I4,UP=O4,jP=po,V0=R4;function BP(t,e){const n=t.size,r=MP.getPositions(e);for(let i=0;i<r.length;i++){const o=r[i][0],s=r[i][1];for(let a=-1;a<=7;a++)if(!(o+a<=-1||n<=o+a))for(let l=-1;l<=7;l++)s+l<=-1||n<=s+l||(a>=0&&a<=6&&(l===0||l===6)||l>=0&&l<=6&&(a===0||a===6)||a>=2&&a<=4&&l>=2&&l<=4?t.set(o+a,s+l,!0,!0):t.set(o+a,s+l,!1,!0))}}function FP(t){const e=t.size;for(let n=8;n<e-8;n++){const r=n%2===0;t.set(n,6,r,!0),t.set(6,n,r,!0)}}function WP(t,e){const n=NP.getPositions(e);for(let r=0;r<n.length;r++){const i=n[r][0],o=n[r][1];for(let s=-2;s<=2;s++)for(let a=-2;a<=2;a++)s===-2||s===2||a===-2||a===2||s===0&&a===0?t.set(i+s,o+a,!0,!0):t.set(i+s,o+a,!1,!0)}}function zP(t,e){const n=t.size,r=af.getEncodedBits(e);let i,o,s;for(let a=0;a<18;a++)i=Math.floor(a/3),o=a%3+n-8-3,s=(r>>a&1)===1,t.set(i,o,s,!0),t.set(o,i,s,!0)}function q0(t,e,n){const r=t.size,i=UP.getEncodedBits(e,n);let o,s;for(o=0;o<15;o++)s=(i>>o&1)===1,o<6?t.set(o,8,s,!0):o<8?t.set(o+1,8,s,!0):t.set(r-15+o,8,s,!0),o<8?t.set(8,r-o-1,s,!0):o<9?t.set(8,15-o-1+1,s,!0):t.set(8,15-o-1,s,!0);t.set(r-8,8,1,!0)}function HP(t,e){const n=t.size;let r=-1,i=n-1,o=7,s=0;for(let a=n-1;a>0;a-=2)for(a===6&&a--;;){for(let l=0;l<2;l++)if(!t.isReserved(i,a-l)){let c=!1;s<e.length&&(c=(e[s]>>>o&1)===1),t.set(i,a-l,c),o--,o===-1&&(s++,o=7)}if(i+=r,i<0||n<=i){i-=r,r=-r;break}}}function VP(t,e,n){const r=new DP;n.forEach(function(l){r.put(l.mode.bit,4),r.put(l.getLength(),jP.getCharCountIndicator(l.mode,t)),l.write(r)});const i=$h.getSymbolTotalCodewords(t),o=$1.getTotalCodewordsCount(t,e),s=(i-o)*8;for(r.getLengthInBits()+4<=s&&r.put(0,4);r.getLengthInBits()%8!==0;)r.putBit(0);const a=(s-r.getLengthInBits())/8;for(let l=0;l<a;l++)r.put(l%2?17:236,8);return qP(r,t,e)}function qP(t,e,n){const r=$h.getSymbolTotalCodewords(e),i=$1.getTotalCodewordsCount(e,n),o=r-i,s=$1.getBlocksCount(e,n),a=r%s,l=s-a,c=Math.floor(r/s),u=Math.floor(o/s),d=u+1,p=c-u,w=new LP(p);let y=0;const E=new Array(s),C=new Array(s);let b=0;const m=new Uint8Array(t.buffer);for(let f=0;f<s;f++){const T=f<l?u:d;E[f]=m.slice(y,y+T),C[f]=w.encode(E[f]),y+=T,b=Math.max(b,T)}const v=new Uint8Array(r);let x=0,_,S;for(_=0;_<b;_++)for(S=0;S<s;S++)_<E[S].length&&(v[x++]=E[S][_]);for(_=0;_<p;_++)for(S=0;S<s;S++)v[x++]=C[S][_];return v}function ZP(t,e,n,r){let i;if(Array.isArray(t))i=V0.fromArray(t);else if(typeof t=="string"){let c=e;if(!c){const u=V0.rawSplit(t);c=af.getBestVersionForData(u,n)}i=V0.fromString(t,c||40)}else throw new Error("Invalid data");const o=af.getBestVersionForData(i,n);if(!o)throw new Error("The amount of data is too big to be stored in a QR Code");if(!e)e=o;else if(e<o)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+o+`.
`);const s=VP(e,n,i),a=$h.getSymbolSize(e),l=new RP(a);return BP(l,e),FP(l),WP(l,e),q0(l,n,0),e>=7&&zP(l,e),HP(l,s),isNaN(r)&&(r=P1.getBestMask(l,q0.bind(null,l,n))),P1.applyMask(r,l),q0(l,n,r),{modules:l,version:e,errorCorrectionLevel:n,maskPattern:r,segments:i}}_4.create=function(e,n){if(typeof e>"u"||e==="")throw new Error("No input text");let r=H0.M,i,o;return typeof n<"u"&&(r=H0.from(n.errorCorrectionLevel,H0.M),i=af.from(n.version),o=P1.from(n.maskPattern),n.toSJISFunc&&$h.setToSJISFunction(n.toSJISFunc)),ZP(e,i,r,o)};var M4={},Gg={};(function(t){function e(n){if(typeof n=="number"&&(n=n.toString()),typeof n!="string")throw new Error("Color should be defined as hex string");let r=n.slice().replace("#","").split("");if(r.length<3||r.length===5||r.length>8)throw new Error("Invalid hex color: "+n);(r.length===3||r.length===4)&&(r=Array.prototype.concat.apply([],r.map(function(o){return[o,o]}))),r.length===6&&r.push("F","F");const i=parseInt(r.join(""),16);return{r:i>>24&255,g:i>>16&255,b:i>>8&255,a:i&255,hex:"#"+r.slice(0,6).join("")}}t.getOptions=function(r){r||(r={}),r.color||(r.color={});const i=typeof r.margin>"u"||r.margin===null||r.margin<0?4:r.margin,o=r.width&&r.width>=21?r.width:void 0,s=r.scale||4;return{width:o,scale:o?4:s,margin:i,color:{dark:e(r.color.dark||"#000000ff"),light:e(r.color.light||"#ffffffff")},type:r.type,rendererOpts:r.rendererOpts||{}}},t.getScale=function(r,i){return i.width&&i.width>=r+i.margin*2?i.width/(r+i.margin*2):i.scale},t.getImageWidth=function(r,i){const o=t.getScale(r,i);return Math.floor((r+i.margin*2)*o)},t.qrToImageData=function(r,i,o){const s=i.modules.size,a=i.modules.data,l=t.getScale(s,o),c=Math.floor((s+o.margin*2)*l),u=o.margin*l,d=[o.color.light,o.color.dark];for(let p=0;p<c;p++)for(let w=0;w<c;w++){let y=(p*c+w)*4,E=o.color.light;if(p>=u&&w>=u&&p<c-u&&w<c-u){const C=Math.floor((p-u)/l),b=Math.floor((w-u)/l);E=d[a[C*s+b]?1:0]}r[y++]=E.r,r[y++]=E.g,r[y++]=E.b,r[y]=E.a}}})(Gg);(function(t){const e=Gg;function n(i,o,s){i.clearRect(0,0,o.width,o.height),o.style||(o.style={}),o.height=s,o.width=s,o.style.height=s+"px",o.style.width=s+"px"}function r(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}t.render=function(o,s,a){let l=a,c=s;typeof l>"u"&&(!s||!s.getContext)&&(l=s,s=void 0),s||(c=r()),l=e.getOptions(l);const u=e.getImageWidth(o.modules.size,l),d=c.getContext("2d"),p=d.createImageData(u,u);return e.qrToImageData(p.data,o,l),n(d,c,u),d.putImageData(p,0,0),c},t.renderToDataURL=function(o,s,a){let l=a;typeof l>"u"&&(!s||!s.getContext)&&(l=s,s=void 0),l||(l={});const c=t.render(o,s,l),u=l.type||"image/png",d=l.rendererOpts||{};return c.toDataURL(u,d.quality)}})(M4);var L4={};const GP=Gg;function Ev(t,e){const n=t.a/255,r=e+'="'+t.hex+'"';return n<1?r+" "+e+'-opacity="'+n.toFixed(2).slice(1)+'"':r}function Z0(t,e,n){let r=t+e;return typeof n<"u"&&(r+=" "+n),r}function KP(t,e,n){let r="",i=0,o=!1,s=0;for(let a=0;a<t.length;a++){const l=Math.floor(a%e),c=Math.floor(a/e);!l&&!o&&(o=!0),t[a]?(s++,a>0&&l>0&&t[a-1]||(r+=o?Z0("M",l+n,.5+c+n):Z0("m",i,0),i=0,o=!1),l+1<e&&t[a+1]||(r+=Z0("h",s),s=0)):i++}return r}L4.render=function(e,n,r){const i=GP.getOptions(n),o=e.modules.size,s=e.modules.data,a=o+i.margin*2,l=i.color.light.a?"<path "+Ev(i.color.light,"fill")+' d="M0 0h'+a+"v"+a+'H0z"/>':"",c="<path "+Ev(i.color.dark,"stroke")+' d="'+KP(s,o,i.margin)+'"/>',u='viewBox="0 0 '+a+" "+a+'"',p='<svg xmlns="http://www.w3.org/2000/svg" '+(i.width?'width="'+i.width+'" height="'+i.width+'" ':"")+u+' shape-rendering="crispEdges">'+l+c+`</svg>
`;return typeof r=="function"&&r(null,p),p};const YP=cP,I1=_4,U4=M4,QP=L4;function Kg(t,e,n,r,i){const o=[].slice.call(arguments,1),s=o.length,a=typeof o[s-1]=="function";if(!a&&!YP())throw new Error("Callback required as last argument");if(a){if(s<2)throw new Error("Too few arguments provided");s===2?(i=n,n=e,e=r=void 0):s===3&&(e.getContext&&typeof i>"u"?(i=r,r=void 0):(i=r,r=n,n=e,e=void 0))}else{if(s<1)throw new Error("Too few arguments provided");return s===1?(n=e,e=r=void 0):s===2&&!e.getContext&&(r=n,n=e,e=void 0),new Promise(function(l,c){try{const u=I1.create(n,r);l(t(u,e,r))}catch(u){c(u)}})}try{const l=I1.create(n,r);i(null,t(l,e,r))}catch(l){i(l)}}hu.create=I1.create;hu.toCanvas=Kg.bind(null,U4.render);hu.toDataURL=Kg.bind(null,U4.renderToDataURL);hu.toString=Kg.bind(null,function(t,e,n){return QP.render(t,n)});const JP=.1,_v=2.5,Vr=7;function G0(t,e,n){return t===e?!1:(t-e<0?e-t:t-e)<=n+JP}function XP(t,e){const n=Array.prototype.slice.call(hu.create(t,{errorCorrectionLevel:e}).modules.data,0),r=Math.sqrt(n.length);return n.reduce((i,o,s)=>(s%r===0?i.push([o]):i[i.length-1].push(o))&&i,[])}const e$={generate(t,e,n){const r="#141414",i="transparent",s=[],a=XP(t,"Q"),l=e/a.length,c=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];c.forEach(({x:E,y:C})=>{const b=(a.length-Vr)*l*E,m=(a.length-Vr)*l*C,v=.45;for(let x=0;x<c.length;x+=1){const _=l*(Vr-x*2);s.push(te`
            <rect
              fill=${x===2?r:i}
              width=${x===0?_-5:_}
              rx= ${x===0?(_-5)*v:_*v}
              ry= ${x===0?(_-5)*v:_*v}
              stroke=${r}
              stroke-width=${x===0?5:0}
              height=${x===0?_-5:_}
              x= ${x===0?m+l*x+5/2:m+l*x}
              y= ${x===0?b+l*x+5/2:b+l*x}
            />
          `)}});const u=Math.floor((n+25)/l),d=a.length/2-u/2,p=a.length/2+u/2-1,w=[];a.forEach((E,C)=>{E.forEach((b,m)=>{if(a[C][m]&&!(C<Vr&&m<Vr||C>a.length-(Vr+1)&&m<Vr||C<Vr&&m>a.length-(Vr+1))&&!(C>d&&C<p&&m>d&&m<p)){const v=C*l+l/2,x=m*l+l/2;w.push([v,x])}})});const y={};return w.forEach(([E,C])=>{var b;y[E]?(b=y[E])==null||b.push(C):y[E]=[C]}),Object.entries(y).map(([E,C])=>{const b=C.filter(m=>C.every(v=>!G0(m,v,l)));return[Number(E),b]}).forEach(([E,C])=>{C.forEach(b=>{s.push(te`<circle cx=${E} cy=${b} fill=${r} r=${l/_v} />`)})}),Object.entries(y).filter(([E,C])=>C.length>1).map(([E,C])=>{const b=C.filter(m=>C.some(v=>G0(m,v,l)));return[Number(E),b]}).map(([E,C])=>{C.sort((m,v)=>m<v?-1:1);const b=[];for(const m of C){const v=b.find(x=>x.some(_=>G0(m,_,l)));v?v.push(m):b.push([m])}return[E,b.map(m=>[m[0],m[m.length-1]])]}).forEach(([E,C])=>{C.forEach(([b,m])=>{s.push(te`
              <line
                x1=${E}
                x2=${E}
                y1=${b}
                y2=${m}
                stroke=${r}
                stroke-width=${l/(_v/2)}
                stroke-linecap="round"
              />
            `)})}),s}},t$=J`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    box-shadow: 0 0 0 1px var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`;var Za=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let li=class extends G{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0}render(){return this.dataset.theme=this.theme,this.style.cssText=`--local-size: ${this.size}px`,$`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){const e=this.theme==="light"?this.size:this.size-32;return te`
      <svg height=${e} width=${e}>
        ${e$.generate(this.uri,e,e/4)}
      </svg>
    `}templateVisual(){return this.imageSrc?$`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:$`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};li.styles=[we,t$];Za([I()],li.prototype,"uri",void 0);Za([I({type:Number})],li.prototype,"size",void 0);Za([I()],li.prototype,"theme",void 0);Za([I()],li.prototype,"imageSrc",void 0);Za([I()],li.prototype,"alt",void 0);li=Za([q("wui-qr-code")],li);const n$=J`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var r$=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let lf=class extends G{constructor(){super(...arguments),this.inputComponentRef=Eh()}render(){return $`
      <wui-input-text
        ${_h(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){const e=this.inputComponentRef.value,n=e==null?void 0:e.inputElementRef.value;n&&(n.value="",n.focus(),n.dispatchEvent(new Event("input")))}};lf.styles=[we,n$];lf=r$([q("wui-search-bar")],lf);const i$=J`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-xs);
    align-items: center;
    padding: var(--wui-spacing-xs) var(--wui-spacing-m) var(--wui-spacing-xs) var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);
  }
`;var mu=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let eo=class extends G{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message=""}render(){return $`
      <wui-icon-box
        size="sm"
        iconSize="xs"
        iconColor=${this.iconColor}
        backgroundColor=${this.backgroundColor}
        icon=${this.icon}
        background="opaque"
      ></wui-icon-box>
      <wui-text variant="paragraph-500" color="fg-100">${this.message}</wui-text>
    `}};eo.styles=[we,i$];mu([I()],eo.prototype,"backgroundColor",void 0);mu([I()],eo.prototype,"iconColor",void 0);mu([I()],eo.prototype,"icon",void 0);mu([I()],eo.prototype,"message",void 0);eo=mu([q("wui-snackbar")],eo);const o$=J`
  :host {
    display: inline-flex;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  button {
    width: var(--local-tab-width);
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`;var mo=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let mr=class extends G{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.activeTab=0,this.localTabWidth="100px",this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((e,n)=>{const r=n===this.activeTab;return $`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(n)}
          data-active=${r}
        >
          <wui-icon size="xs" color="inherit" name=${e.icon}></wui-icon>
          <wui-text variant="small-600" color="inherit"> ${e.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}onTabClick(e){this.buttons&&this.animateTabs(e,!1),this.activeTab=e,this.onTabChange(e)}animateTabs(e,n){const r=this.buttons[this.activeTab],i=this.buttons[e],o=r==null?void 0:r.querySelector("wui-text"),s=i==null?void 0:i.querySelector("wui-text"),a=i==null?void 0:i.getBoundingClientRect(),l=s==null?void 0:s.getBoundingClientRect();r&&o&&!n&&e!==this.activeTab&&(o.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),r.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),i&&a&&l&&s&&(e!==this.activeTab||n)&&(this.localTabWidth=`${Math.round(a.width+l.width)+6}px`,i.animate([{width:`${a.width+l.width}px`}],{duration:n?0:500,fill:"forwards",easing:"ease"}),s.animate([{opacity:1}],{duration:n?0:125,delay:n?0:200,fill:"forwards",easing:"ease"}))}};mr.styles=[we,ct,o$];mo([I({type:Array})],mr.prototype,"tabs",void 0);mo([I()],mr.prototype,"onTabChange",void 0);mo([I({type:Array})],mr.prototype,"buttons",void 0);mo([I({type:Boolean})],mr.prototype,"disabled",void 0);mo([ie()],mr.prototype,"activeTab",void 0);mo([ie()],mr.prototype,"localTabWidth",void 0);mo([ie()],mr.prototype,"isDense",void 0);mr=mo([q("wui-tabs")],mr);const s$=J`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    background-color: var(--wui-color-fg-100);
    color: var(--wui-color-bg-100);
    position: relative;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var Yg=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Pa=class extends G{constructor(){super(...arguments),this.placement="top",this.message=""}render(){return $`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name="cursor"
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};Pa.styles=[we,ct,s$];Yg([I()],Pa.prototype,"placement",void 0);Yg([I()],Pa.prototype,"message",void 0);Pa=Yg([q("wui-tooltip")],Pa);const a$=J`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    box-shadow: 0 0 0 8px var(--wui-thumbnail-border);
    border-radius: var(--local-border-radius);
    overflow: hidden;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`;var Ih=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let rs=class extends G{render(){return this.style.cssText=`--local-border-radius: ${this.borderRadiusFull?"1000px":"20px"};`,$`${this.templateVisual()}`}templateVisual(){return this.imageSrc?$`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:$`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};rs.styles=[we,a$];Ih([I()],rs.prototype,"imageSrc",void 0);Ih([I()],rs.prototype,"alt",void 0);Ih([I({type:Boolean})],rs.prototype,"borderRadiusFull",void 0);rs=Ih([q("wui-visual-thumbnail")],rs);const l$=J`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: block;
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-2l);
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-accent-glass-015);
  }

  button:hover {
    background-color: var(--wui-accent-glass-010) !important;
  }

  button:active {
    background-color: var(--wui-accent-glass-020) !important;
  }
`;var kh=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let is=class extends G{constructor(){super(...arguments),this.label="",this.description="",this.icon="wallet"}render(){return $`
      <button>
        <wui-flex gap="m" alignItems="center" justifyContent="space-between">
          <wui-icon-box
            size="lg"
            iconcolor="accent-100"
            backgroundcolor="accent-100"
            icon=${this.icon}
            background="transparent"
          ></wui-icon-box>

          <wui-flex flexDirection="column" gap="3xs">
            <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
            <wui-text variant="small-400" color="fg-200">${this.description}</wui-text>
          </wui-flex>

          <wui-icon size="md" color="fg-200" name="chevronRight"></wui-icon>
        </wui-flex>
      </button>
    `}};is.styles=[we,ct,l$];kh([I()],is.prototype,"label",void 0);kh([I()],is.prototype,"description",void 0);kh([I()],is.prototype,"icon",void 0);is=kh([q("wui-notice-card")],is);const c$=J`
  button {
    height: auto;
    position: relative;
    flex-direction: column;
    gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  .overflowedContent {
    width: 100%;
    overflow: hidden;
  }

  .overflowedContent[data-active='false']:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, var(--wui-color-bg-200), transparent);
    border-bottom-left-radius: var(--wui-border-radius-xs);
    border-bottom-right-radius: var(--wui-border-radius-xs);
  }

  .heightContent {
    max-height: 100px;
  }

  pre {
    text-align: left;
    white-space: pre-wrap;
    height: auto;
    overflow-x: auto;
    overflow-wrap: anywhere;
  }
`;var Qg=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};const K0=100;let $a=class extends G{constructor(){super(...arguments),this.textTitle="",this.overflowedContent="",this.toggled=!1,this.enableAccordion=!1,this.scrollElement=void 0,this.scrollHeightElement=0}firstUpdated(){setTimeout(()=>{var n;const e=(n=this.shadowRoot)==null?void 0:n.querySelector(".heightContent");if(e){this.scrollElement=e;const r=e==null?void 0:e.scrollHeight;r&&r>K0&&(this.enableAccordion=!0,this.scrollHeightElement=r,this.requestUpdate())}},0)}render(){return $`
      <button ontouchstart @click=${()=>this.onClick()}>
        <wui-flex justifyContent="space-between" alignItems="center">
          <wui-text variant="paragraph-500" color="fg-100">${this.textTitle}</wui-text>
          ${this.chevronTemplate()}
        </wui-flex>
        <div
          data-active=${this.enableAccordion?!!this.toggled:!0}
          class="overflowedContent"
        >
          <div class="heightContent">
            <wui-text variant="paragraph-400" color="fg-200">
              <pre>${this.overflowedContent}</pre>
            </wui-text>
          </div>
        </div>
      </button>
    `}onClick(){var n;const e=(n=this.shadowRoot)==null?void 0:n.querySelector("wui-icon");this.enableAccordion&&(this.toggled=!this.toggled,this.requestUpdate(),this.scrollElement&&this.scrollElement.animate([{maxHeight:this.toggled?`${K0}px`:`${this.scrollHeightElement}px`},{maxHeight:this.toggled?`${this.scrollHeightElement}px`:`${K0}px`}],{duration:300,fill:"forwards",easing:"ease"}),e&&e.animate([{transform:this.toggled?"rotate(0deg)":"rotate(180deg)"},{transform:this.toggled?"rotate(180deg)":"rotate(0deg)"}],{duration:300,fill:"forwards",easing:"ease"}))}chevronTemplate(){return this.enableAccordion?$` <wui-icon color="fg-100" size="sm" name="chevronBottom"></wui-icon>`:null}};$a.styles=[we,ct,c$];Qg([I()],$a.prototype,"textTitle",void 0);Qg([I()],$a.prototype,"overflowedContent",void 0);$a=Qg([q("wui-list-accordion")],$a);const u$=J`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`;var Oh=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let os=class extends G{constructor(){super(...arguments),this.imageSrc=void 0,this.textTitle="",this.textValue=void 0}render(){return $`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color=${this.textValue?"fg-200":"fg-100"}>
          ${this.textTitle}
        </wui-text>
        ${this.templateContent()}
      </wui-flex>
    `}templateContent(){return this.imageSrc?$`<wui-image src=${this.imageSrc} alt=${this.textTitle}></wui-image>`:this.textValue?$` <wui-text variant="paragraph-400" color="fg-100"> ${this.textValue} </wui-text>`:$`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};os.styles=[we,ct,u$];Oh([I()],os.prototype,"imageSrc",void 0);Oh([I()],os.prototype,"textTitle",void 0);Oh([I()],os.prototype,"textValue",void 0);os=Oh([q("wui-list-content")],os);const d$=J`
  :host {
    display: flex;
    flex-direction: column;
    gap: var(--wui-spacing-l);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`;var gu=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let to=class extends G{constructor(){super(...arguments),this.amount="",this.networkCurreny="",this.networkImageUrl="",this.receiverAddress=""}render(){return $`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">Sending</wui-text>
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="paragraph-400" color="fg-100">
            ${this.amount} ${this.networkCurreny}
          </wui-text>
          ${this.templateNetworkVisual()}
        </wui-flex>
      </wui-flex>
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">To</wui-text>
        <wui-chip
          icon="externalLink"
          variant="shadeSmall"
          href=${this.receiverAddress}
          title=${this.receiverAddress}
        ></wui-chip>
      </wui-flex>
    `}templateNetworkVisual(){return this.networkImageUrl?$`<wui-image src=${this.networkImageUrl} alt="Network Image"></wui-image>`:$`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};to.styles=[we,ct,d$];gu([I()],to.prototype,"amount",void 0);gu([I()],to.prototype,"networkCurreny",void 0);gu([I()],to.prototype,"networkImageUrl",void 0);gu([I()],to.prototype,"receiverAddress",void 0);to=gu([q("wui-list-wallet-transaction")],to);const f$=J`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var Gn=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let nn=class extends G{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&He.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&He.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&He.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&He.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&He.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&He.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&He.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&He.getSpacingStyles(this.margin,3)};
    `,$`<slot></slot>`}};nn.styles=[we,f$];Gn([I()],nn.prototype,"gridTemplateRows",void 0);Gn([I()],nn.prototype,"gridTemplateColumns",void 0);Gn([I()],nn.prototype,"justifyItems",void 0);Gn([I()],nn.prototype,"alignItems",void 0);Gn([I()],nn.prototype,"justifyContent",void 0);Gn([I()],nn.prototype,"alignContent",void 0);Gn([I()],nn.prototype,"columnGap",void 0);Gn([I()],nn.prototype,"rowGap",void 0);Gn([I()],nn.prototype,"gap",void 0);Gn([I()],nn.prototype,"padding",void 0);Gn([I()],nn.prototype,"margin",void 0);nn=Gn([q("wui-grid")],nn);const h$=J`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-modal-bg);
  }
`;var j4=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Ic=class extends G{constructor(){super(...arguments),this.text=""}render(){return $`${this.template()}`}template(){return this.text?$`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};Ic.styles=[we,h$];j4([I()],Ic.prototype,"text",void 0);Ic=j4([q("wui-separator")],Ic);var B4={exports:{}};(function(t,e){(function(n,r){t.exports=r()})(im,function(){var n=1e3,r=6e4,i=36e5,o="millisecond",s="second",a="minute",l="hour",c="day",u="week",d="month",p="quarter",w="year",y="date",E="Invalid Date",C=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,b=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(H){var F=["th","st","nd","rd"],j=H%100;return"["+H+(F[(j-20)%10]||F[j]||F[0])+"]"}},v=function(H,F,j){var B=String(H);return!B||B.length>=F?H:""+Array(F+1-B.length).join(j)+H},x={s:v,z:function(H){var F=-H.utcOffset(),j=Math.abs(F),B=Math.floor(j/60),R=j%60;return(F<=0?"+":"-")+v(B,2,"0")+":"+v(R,2,"0")},m:function H(F,j){if(F.date()<j.date())return-H(j,F);var B=12*(j.year()-F.year())+(j.month()-F.month()),R=F.clone().add(B,d),W=j-R<0,z=F.clone().add(B+(W?-1:1),d);return+(-(B+(j-R)/(W?R-z:z-R))||0)},a:function(H){return H<0?Math.ceil(H)||0:Math.floor(H)},p:function(H){return{M:d,y:w,w:u,d:c,D:y,h:l,m:a,s,ms:o,Q:p}[H]||String(H||"").toLowerCase().replace(/s$/,"")},u:function(H){return H===void 0}},_="en",S={};S[_]=m;var f="$isDayjsObject",T=function(H){return H instanceof ee||!(!H||!H[f])},O=function H(F,j,B){var R;if(!F)return _;if(typeof F=="string"){var W=F.toLowerCase();S[W]&&(R=W),j&&(S[W]=j,R=W);var z=F.split("-");if(!R&&z.length>1)return H(z[0])}else{var Z=F.name;S[Z]=F,R=Z}return!B&&R&&(_=R),R||!B&&_},D=function(H,F){if(T(H))return H.clone();var j=typeof F=="object"?F:{};return j.date=H,j.args=arguments,new ee(j)},M=x;M.l=O,M.i=T,M.w=function(H,F){return D(H,{locale:F.$L,utc:F.$u,x:F.$x,$offset:F.$offset})};var ee=function(){function H(j){this.$L=O(j.locale,null,!0),this.parse(j),this.$x=this.$x||j.x||{},this[f]=!0}var F=H.prototype;return F.parse=function(j){this.$d=function(B){var R=B.date,W=B.utc;if(R===null)return new Date(NaN);if(M.u(R))return new Date;if(R instanceof Date)return new Date(R);if(typeof R=="string"&&!/Z$/i.test(R)){var z=R.match(C);if(z){var Z=z[2]-1||0,X=(z[7]||"0").substring(0,3);return W?new Date(Date.UTC(z[1],Z,z[3]||1,z[4]||0,z[5]||0,z[6]||0,X)):new Date(z[1],Z,z[3]||1,z[4]||0,z[5]||0,z[6]||0,X)}}return new Date(R)}(j),this.init()},F.init=function(){var j=this.$d;this.$y=j.getFullYear(),this.$M=j.getMonth(),this.$D=j.getDate(),this.$W=j.getDay(),this.$H=j.getHours(),this.$m=j.getMinutes(),this.$s=j.getSeconds(),this.$ms=j.getMilliseconds()},F.$utils=function(){return M},F.isValid=function(){return this.$d.toString()!==E},F.isSame=function(j,B){var R=D(j);return this.startOf(B)<=R&&R<=this.endOf(B)},F.isAfter=function(j,B){return D(j)<this.startOf(B)},F.isBefore=function(j,B){return this.endOf(B)<D(j)},F.$g=function(j,B,R){return M.u(j)?this[B]:this.set(R,j)},F.unix=function(){return Math.floor(this.valueOf()/1e3)},F.valueOf=function(){return this.$d.getTime()},F.startOf=function(j,B){var R=this,W=!!M.u(B)||B,z=M.p(j),Z=function(Pe,ve){var Oe=M.w(R.$u?Date.UTC(R.$y,ve,Pe):new Date(R.$y,ve,Pe),R);return W?Oe:Oe.endOf(c)},X=function(Pe,ve){return M.w(R.toDate()[Pe].apply(R.toDate("s"),(W?[0,0,0,0]:[23,59,59,999]).slice(ve)),R)},K=this.$W,oe=this.$M,fe=this.$D,pe="set"+(this.$u?"UTC":"");switch(z){case w:return W?Z(1,0):Z(31,11);case d:return W?Z(1,oe):Z(0,oe+1);case u:var ye=this.$locale().weekStart||0,_e=(K<ye?K+7:K)-ye;return Z(W?fe-_e:fe+(6-_e),oe);case c:case y:return X(pe+"Hours",0);case l:return X(pe+"Minutes",1);case a:return X(pe+"Seconds",2);case s:return X(pe+"Milliseconds",3);default:return this.clone()}},F.endOf=function(j){return this.startOf(j,!1)},F.$set=function(j,B){var R,W=M.p(j),z="set"+(this.$u?"UTC":""),Z=(R={},R[c]=z+"Date",R[y]=z+"Date",R[d]=z+"Month",R[w]=z+"FullYear",R[l]=z+"Hours",R[a]=z+"Minutes",R[s]=z+"Seconds",R[o]=z+"Milliseconds",R)[W],X=W===c?this.$D+(B-this.$W):B;if(W===d||W===w){var K=this.clone().set(y,1);K.$d[Z](X),K.init(),this.$d=K.set(y,Math.min(this.$D,K.daysInMonth())).$d}else Z&&this.$d[Z](X);return this.init(),this},F.set=function(j,B){return this.clone().$set(j,B)},F.get=function(j){return this[M.p(j)]()},F.add=function(j,B){var R,W=this;j=Number(j);var z=M.p(B),Z=function(oe){var fe=D(W);return M.w(fe.date(fe.date()+Math.round(oe*j)),W)};if(z===d)return this.set(d,this.$M+j);if(z===w)return this.set(w,this.$y+j);if(z===c)return Z(1);if(z===u)return Z(7);var X=(R={},R[a]=r,R[l]=i,R[s]=n,R)[z]||1,K=this.$d.getTime()+j*X;return M.w(K,this)},F.subtract=function(j,B){return this.add(-1*j,B)},F.format=function(j){var B=this,R=this.$locale();if(!this.isValid())return R.invalidDate||E;var W=j||"YYYY-MM-DDTHH:mm:ssZ",z=M.z(this),Z=this.$H,X=this.$m,K=this.$M,oe=R.weekdays,fe=R.months,pe=R.meridiem,ye=function(ve,Oe,Le,Re){return ve&&(ve[Oe]||ve(B,W))||Le[Oe].slice(0,Re)},_e=function(ve){return M.s(Z%12||12,ve,"0")},Pe=pe||function(ve,Oe,Le){var Re=ve<12?"AM":"PM";return Le?Re.toLowerCase():Re};return W.replace(b,function(ve,Oe){return Oe||function(Le){switch(Le){case"YY":return String(B.$y).slice(-2);case"YYYY":return M.s(B.$y,4,"0");case"M":return K+1;case"MM":return M.s(K+1,2,"0");case"MMM":return ye(R.monthsShort,K,fe,3);case"MMMM":return ye(fe,K);case"D":return B.$D;case"DD":return M.s(B.$D,2,"0");case"d":return String(B.$W);case"dd":return ye(R.weekdaysMin,B.$W,oe,2);case"ddd":return ye(R.weekdaysShort,B.$W,oe,3);case"dddd":return oe[B.$W];case"H":return String(Z);case"HH":return M.s(Z,2,"0");case"h":return _e(1);case"hh":return _e(2);case"a":return Pe(Z,X,!0);case"A":return Pe(Z,X,!1);case"m":return String(X);case"mm":return M.s(X,2,"0");case"s":return String(B.$s);case"ss":return M.s(B.$s,2,"0");case"SSS":return M.s(B.$ms,3,"0");case"Z":return z}return null}(ve)||z.replace(":","")})},F.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},F.diff=function(j,B,R){var W,z=this,Z=M.p(B),X=D(j),K=(X.utcOffset()-this.utcOffset())*r,oe=this-X,fe=function(){return M.m(z,X)};switch(Z){case w:W=fe()/12;break;case d:W=fe();break;case p:W=fe()/3;break;case u:W=(oe-K)/6048e5;break;case c:W=(oe-K)/864e5;break;case l:W=oe/i;break;case a:W=oe/r;break;case s:W=oe/n;break;default:W=oe}return R?W:M.a(W)},F.daysInMonth=function(){return this.endOf(d).$D},F.$locale=function(){return S[this.$L]},F.locale=function(j,B){if(!j)return this.$L;var R=this.clone(),W=O(j,B,!0);return W&&(R.$L=W),R},F.clone=function(){return M.w(this.$d,this)},F.toDate=function(){return new Date(this.valueOf())},F.toJSON=function(){return this.isValid()?this.toISOString():null},F.toISOString=function(){return this.$d.toISOString()},F.toString=function(){return this.$d.toUTCString()},H}(),ne=ee.prototype;return D.prototype=ne,[["$ms",o],["$s",s],["$m",a],["$H",l],["$W",c],["$M",d],["$y",w],["$D",y]].forEach(function(H){ne[H[1]]=function(F){return this.$g(F,H[0],H[1])}}),D.extend=function(H,F){return H.$i||(H(F,ee,D),H.$i=!0),D},D.locale=O,D.isDayjs=T,D.unix=function(H){return D(1e3*H)},D.en=S[_],D.Ls=S,D.p={},D})})(B4);var p$=B4.exports;const kc=Yc(p$);var F4={exports:{}};(function(t,e){(function(n,r){t.exports=r()})(im,function(){return function(n,r,i){i.updateLocale=function(o,s){var a=i.Ls[o];if(a)return(s?Object.keys(s):[]).forEach(function(l){a[l]=s[l]}),a}}})})(F4);var m$=F4.exports;const g$=Yc(m$);var W4={exports:{}};(function(t,e){(function(n,r){t.exports=r()})(im,function(){return function(n,r,i){n=n||{};var o=r.prototype,s={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function a(c,u,d,p){return o.fromToBase(c,u,d,p)}i.en.relativeTime=s,o.fromToBase=function(c,u,d,p,w){for(var y,E,C,b=d.$locale().relativeTime||s,m=n.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],v=m.length,x=0;x<v;x+=1){var _=m[x];_.d&&(y=p?i(c).diff(d,_.d,!0):d.diff(c,_.d,!0));var S=(n.rounding||Math.round)(Math.abs(y));if(C=y>0,S<=_.r||!_.r){S<=1&&x>0&&(_=m[x-1]);var f=b[_.l];w&&(S=w(""+S)),E=typeof f=="string"?f.replace("%d",S):f(S,u,_.l,C);break}}if(u)return E;var T=C?b.future:b.past;return typeof T=="function"?T(E):T.replace("%s",E)},o.to=function(c,u){return a(c,u,this,!0)},o.from=function(c,u){return a(c,u,this)};var l=function(c){return c.$u?i.utc():i()};o.toNow=function(c){return this.to(l(this),c)},o.fromNow=function(c){return this.from(l(this),c)}}})})(W4);var w$=W4.exports;const y$=Yc(w$);kc.extend(y$);kc.extend(g$);kc.updateLocale("en",{relativeTime:{future:"in %s",past:"%s ago",s:"%s sec",m:"1 min",mm:"%d min",h:"1 hr",hh:"%d hrs",d:"1 d",dd:"%d d",M:"1 mo",MM:"%d mo",y:"1 yr",yy:"%d yr"}});const z4={getYear(t=new Date().toISOString()){return kc(t).year()},getRelativeDateFromNow(t){return kc(t).fromNow(!0)}},v$=3,b$=["receive","deposit","borrow","claim"],x$=["withdraw","repay","burn"],Oo={getTransactionGroupTitle(t){const e=z4.getYear();return t===e?"This Year":t},getTransactionImages(t){const[e,n]=t,r=!!e&&(t==null?void 0:t.every(s=>!!s.nft_info)),i=(t==null?void 0:t.length)>1;return(t==null?void 0:t.length)===2&&!r?[this.getTransactionImage(e),this.getTransactionImage(n)]:i?t.map(s=>this.getTransactionImage(s)):[this.getTransactionImage(e)]},getTransactionImage(t){return{type:Oo.getTransactionTransferTokenType(t),url:Oo.getTransactionImageURL(t)}},getTransactionImageURL(t){var i,o,s,a,l;let e=null;const n=!!(t!=null&&t.nft_info),r=!!(t!=null&&t.fungible_info);return t&&n?e=(s=(o=(i=t==null?void 0:t.nft_info)==null?void 0:i.content)==null?void 0:o.preview)==null?void 0:s.url:t&&r&&(e=(l=(a=t==null?void 0:t.fungible_info)==null?void 0:a.icon)==null?void 0:l.url),e},getTransactionTransferTokenType(t){return t!=null&&t.fungible_info?"FUNGIBLE":t!=null&&t.nft_info?"NFT":null},getTransactionDescriptions(t){var d,p,w;const e=(d=t.metadata)==null?void 0:d.operationType,n=t.transfers,r=((p=t.transfers)==null?void 0:p.length)>0,i=((w=t.transfers)==null?void 0:w.length)>1,o=r&&(n==null?void 0:n.every(y=>!!y.fungible_info)),[s,a]=n;let l=this.getTransferDescription(s),c=this.getTransferDescription(a);if(!r)return(e==="send"||e==="receive")&&o?(l=He.getTruncateString({string:t.metadata.sentFrom,charsStart:4,charsEnd:6,truncate:"middle"}),c=He.getTruncateString({string:t.metadata.sentTo,charsStart:4,charsEnd:6,truncate:"middle"}),[l,c]):[t.metadata.status];if(i)return n.map(y=>this.getTransferDescription(y));let u="";return b$.includes(e)?u="+":x$.includes(e)&&(u="-"),l=u.concat(l),[l]},getTransferDescription(t){var n;let e="";return t&&(t!=null&&t.nft_info?e=((n=t==null?void 0:t.nft_info)==null?void 0:n.name)||"-":t!=null&&t.fungible_info&&(e=this.getFungibleTransferDescription(t)||"-")),e},getFungibleTransferDescription(t){var r;return t?[this.getQuantityFixedValue(t==null?void 0:t.quantity.numeric),(r=t==null?void 0:t.fungible_info)==null?void 0:r.symbol].join(" ").trim():null},getQuantityFixedValue(t){return t?parseFloat(t).toFixed(v$):null}},E$=Object.freeze(Object.defineProperty({__proto__:null,TransactionUtil:Oo,UiHelperUtil:He,get WuiAccountButton(){return Vn},get WuiAllWalletsImage(){return Cc},get WuiAvatar(){return Xo},get WuiButton(){return fr},get WuiCard(){return tf},get WuiCardSelect(){return Rr},get WuiCardSelectLoader(){return Sc},get WuiChip(){return Nr},get WuiConnectButton(){return va},get WuiCtaButton(){return es},get WuiEmailInput(){return ts},get WuiFlex(){return qt},get WuiGrid(){return nn},get WuiIcon(){return Yo},get WuiIconBox(){return Hn},get WuiIconLink(){return Xi},get WuiImage(){return wa},get WuiInputElement(){return Ac},get WuiInputNumeric(){return ba},get WuiInputText(){return hr},get WuiLink(){return xa},get WuiListAccordion(){return $a},get WuiListContent(){return os},get WuiListItem(){return kn},get WuiListWallet(){return yn},get WuiListWalletTransaction(){return to},get WuiLoadingHexagon(){return nf},get WuiLoadingSpinner(){return ya},get WuiLoadingThumbnail(){return Ec},get WuiLogo(){return Pc},get WuiLogoSelect(){return Ea},get WuiNetworkButton(){return _a},get WuiNetworkImage(){return Ji},get WuiNoticeCard(){return is},get WuiOtp(){return ns},get WuiQrCode(){return li},get WuiSearchBar(){return lf},get WuiSeparator(){return Ic},get WuiShimmer(){return Qo},get WuiSnackbar(){return eo},get WuiTabs(){return mr},get WuiTag(){return Tc},get WuiText(){return Jo},get WuiTooltip(){return Pa},get WuiTransactionListItem(){return pr},get WuiTransactionListItemLoader(){return of},get WuiTransactionVisual(){return Mr},get WuiVisual(){return _c},get WuiVisualThumbnail(){return rs},get WuiWalletImage(){return Dr},customElement:q,initializeTheming:c4,setColorTheme:Mg,setThemeVariables:u4},Symbol.toStringTag,{value:"Module"}));var xr=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let qn=class extends G{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance="show",this.charsStart=4,this.charsEnd=6,this.address=je.state.address,this.balanceVal=je.state.balance,this.balanceSymbol=je.state.balanceSymbol,this.profileName=je.state.profileName,this.profileImage=je.state.profileImage,this.network=ht.state.caipNetwork,this.unsubscribe.push(je.subscribe(e=>{e.isConnected?(this.address=e.address,this.balanceVal=e.balance,this.profileName=e.profileName,this.profileImage=e.profileImage,this.balanceSymbol=e.balanceSymbol):(this.address="",this.balanceVal="",this.profileName="",this.profileImage="",this.balanceSymbol="")}),ht.subscribeKey("caipNetwork",e=>this.network=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=ft.getNetworkImage(this.network),n=this.balance==="show";return $`
      <wui-account-button
        .disabled=${!!this.disabled}
        address=${Ce(this.profileName??this.address)}
        ?isProfileName=${!!this.profileName}
        networkSrc=${Ce(e)}
        avatarSrc=${Ce(this.profileImage)}
        balance=${n?de.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
        data-testid="account-button"
        .charsStart=${this.charsStart}
        .charsEnd=${this.charsEnd}
      >
      </wui-account-button>
    `}onClick(){Ke.open()}};xr([I({type:Boolean})],qn.prototype,"disabled",void 0);xr([I()],qn.prototype,"balance",void 0);xr([I()],qn.prototype,"charsStart",void 0);xr([I()],qn.prototype,"charsEnd",void 0);xr([ie()],qn.prototype,"address",void 0);xr([ie()],qn.prototype,"balanceVal",void 0);xr([ie()],qn.prototype,"balanceSymbol",void 0);xr([ie()],qn.prototype,"profileName",void 0);xr([ie()],qn.prototype,"profileImage",void 0);xr([ie()],qn.prototype,"network",void 0);qn=xr([q("w3m-account-button")],qn);const _$=J`
  :host {
    display: block;
    width: max-content;
  }
`;var gi=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let gr=class extends G{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.charsStart=4,this.charsEnd=6,this.isAccount=je.state.isConnected,this.unsubscribe.push(je.subscribeKey("isConnected",e=>{this.isAccount=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.isAccount?$`
          <w3m-account-button
            .disabled=${!!this.disabled}
            balance=${Ce(this.balance)}
            .charsStart=${Ce(this.charsStart)}
            .charsEnd=${Ce(this.charsEnd)}
          >
          </w3m-account-button>
        `:$`
          <w3m-connect-button
            size=${Ce(this.size)}
            label=${Ce(this.label)}
            loadingLabel=${Ce(this.loadingLabel)}
          ></w3m-connect-button>
        `}};gr.styles=_$;gi([I({type:Boolean})],gr.prototype,"disabled",void 0);gi([I()],gr.prototype,"balance",void 0);gi([I()],gr.prototype,"size",void 0);gi([I()],gr.prototype,"label",void 0);gi([I()],gr.prototype,"loadingLabel",void 0);gi([I()],gr.prototype,"charsStart",void 0);gi([I()],gr.prototype,"charsEnd",void 0);gi([ie()],gr.prototype,"isAccount",void 0);gr=gi([q("w3m-button")],gr);var Ga=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let ss=class extends G{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=Ke.state.open,this.loading=Ke.state.loading,this.unsubscribe.push(Ke.subscribe(e=>{this.open=e.open,this.loading=e.loading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.loading||this.open;return $`
      <wui-connect-button
        size=${Ce(this.size)}
        .loading=${e}
        @click=${this.onClick.bind(this)}
        data-testid="connect-button"
      >
        ${e?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?Ke.close():this.loading||Ke.open()}};Ga([I()],ss.prototype,"size",void 0);Ga([I()],ss.prototype,"label",void 0);Ga([I()],ss.prototype,"loadingLabel",void 0);Ga([ie()],ss.prototype,"open",void 0);Ga([ie()],ss.prototype,"loading",void 0);ss=Ga([q("w3m-connect-button")],ss);const C$=J`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  wui-card {
    max-width: 360px;
    width: 100%;
    position: relative;
    animation-delay: 0.3s;
    animation-duration: 0.2s;
    animation-name: zoom-in;
    animation-fill-mode: backwards;
    animation-timing-function: var(--wui-ease-out-power-2);
    outline: none;
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      animation-name: slide-in;
    }
  }
`;var Dh=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};const Cv="scroll-lock";let as=class extends G{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.open=Ke.state.open,this.caipAddress=je.state.address,this.isSiweEnabled=wt.state.isSiweEnabled,this.initializeTheming(),De.prefetch(),this.unsubscribe.push(Ke.subscribeKey("open",e=>e?this.onOpen():this.onClose()),wt.subscribeKey("isSiweEnabled",e=>{this.isSiweEnabled=e}),je.subscribe(e=>this.onNewAccountState(e))),xe.sendEvent({type:"track",event:"MODAL_LOADED"})}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.onRemoveKeyboardListener()}render(){return this.open?$`
          <wui-flex @click=${this.onOverlayClick.bind(this)}>
            <wui-card role="alertdialog" aria-modal="true" tabindex="0">
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
            </wui-card>
          </wui-flex>
        `:null}async onOverlayClick(e){e.target===e.currentTarget&&await this.handleClose()}async handleClose(){this.isSiweEnabled&&wt.state.status!=="success"&&await Me.disconnect(),Ke.close()}initializeTheming(){const{themeVariables:e,themeMode:n}=cn.state,r=He.getColorTheme(n);c4(e,r)}async onClose(){this.onScrollUnlock(),await this.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished,pt.hide(),this.open=!1,this.onRemoveKeyboardListener()}async onOpen(){this.onScrollLock(),this.open=!0,await this.animate([{opacity:0},{opacity:1}],{duration:200,easing:"ease",fill:"forwards",delay:300}).finished,this.onAddKeyboardListener()}onScrollLock(){const e=document.createElement("style");e.dataset.w3m=Cv,e.textContent=`
      html, body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(e)}onScrollUnlock(){const e=document.head.querySelector(`style[data-w3m="${Cv}"]`);e&&e.remove()}onAddKeyboardListener(){var n;this.abortController=new AbortController;const e=(n=this.shadowRoot)==null?void 0:n.querySelector("wui-card");e==null||e.focus(),window.addEventListener("keydown",r=>{if(r.key==="Escape")this.handleClose();else if(r.key==="Tab"){const{tagName:i}=r.target;i&&!i.includes("W3M-")&&!i.includes("WUI-")&&(e==null||e.focus())}},this.abortController)}onRemoveKeyboardListener(){var e;(e=this.abortController)==null||e.abort(),this.abortController=void 0}async onNewAccountState(e){const{isConnected:n,caipAddress:r}=e;if(this.isSiweEnabled){n&&!this.caipAddress&&(this.caipAddress=r),n&&r&&this.caipAddress!==r&&(await wt.signOut(),this.onSiweNavigation(),this.caipAddress=r);try{const i=await wt.getSession();i&&!n?await wt.signOut():n&&!i&&this.onSiweNavigation()}catch{n&&this.onSiweNavigation()}}}onSiweNavigation(){this.open?ce.push("ConnectingSiwe"):Ke.open({view:"ConnectingSiwe"})}};as.styles=C$;Dh([ie()],as.prototype,"open",void 0);Dh([ie()],as.prototype,"caipAddress",void 0);Dh([ie()],as.prototype,"isSiweEnabled",void 0);as=Dh([q("w3m-modal")],as);const S$=Object.freeze(Object.defineProperty({__proto__:null,get W3mModal(){return as}},Symbol.toStringTag,{value:"Module"})),A$=J`
  :host {
    display: block;
    width: max-content;
  }
`;var wu=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let ls=class extends G{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=ht.state.caipNetwork,this.connected=je.state.isConnected,this.loading=Ke.state.loading,this.unsubscribe.push(ht.subscribeKey("caipNetwork",e=>this.network=e),je.subscribeKey("isConnected",e=>this.connected=e),Ke.subscribeKey("loading",e=>this.loading=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var e;return $`
      <wui-network-button
        .disabled=${!!(this.disabled||this.loading)}
        imageSrc=${Ce(ft.getNetworkImage(this.network))}
        @click=${this.onClick.bind(this)}
      >
        ${((e=this.network)==null?void 0:e.name)??(this.connected?"Unknown Network":"Select Network")}
      </wui-network-button>
    `}onClick(){this.loading||Ke.open({view:"Networks"})}};ls.styles=A$;wu([I({type:Boolean})],ls.prototype,"disabled",void 0);wu([ie()],ls.prototype,"network",void 0);wu([ie()],ls.prototype,"connected",void 0);wu([ie()],ls.prototype,"loading",void 0);ls=wu([q("w3m-network-button")],ls);const T$=J`
  :host {
    display: block;
    will-change: transform, opacity;
  }
`;var H4=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let cf=class extends G{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=ce.state.view,this.unsubscribe.push(ce.subscribeKey("view",e=>this.onViewChange(e)))}firstUpdated(){this.resizeObserver=new ResizeObserver(async([e])=>{const n=`${e==null?void 0:e.contentRect.height}px`;this.prevHeight!=="0px"&&(await this.animate([{height:this.prevHeight},{height:n}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.style.height="auto"),this.prevHeight=n}),this.resizeObserver.observe(this.getWrapper())}disconnectedCallback(){var e;(e=this.resizeObserver)==null||e.unobserve(this.getWrapper()),this.unsubscribe.forEach(n=>n())}render(){return $`<div>${this.viewTemplate()}</div>`}viewTemplate(){switch(this.view){case"Connect":return $`<w3m-connect-view></w3m-connect-view>`;case"ConnectingWalletConnect":return $`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingExternal":return $`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return $`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"AllWallets":return $`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"Networks":return $`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return $`<w3m-network-switch-view></w3m-network-switch-view>`;case"Account":return $`<w3m-account-view></w3m-account-view>`;case"WhatIsAWallet":return $`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"WhatIsANetwork":return $`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"GetWallet":return $`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Downloads":return $`<w3m-downloads-view></w3m-downloads-view>`;case"EmailVerifyOtp":return $`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return $`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"ApproveTransaction":return $`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"Transactions":return $`<w3m-transactions-view></w3m-transactions-view>`;case"UpgradeEmailWallet":return $`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpdateEmailWallet":return $`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailWalletWaiting":return $`<w3m-update-email-wallet-waiting-view></w3m-update-email-wallet-waiting-view>`;default:return $`<w3m-connect-view></w3m-connect-view>`}}async onViewChange(e){const{history:n}=ce.state;let r=-10,i=10;n.length<this.prevHistoryLength&&(r=10,i=-10),this.prevHistoryLength=n.length,await this.animate([{opacity:1,transform:"translateX(0px)"},{opacity:0,transform:`translateX(${r}px)`}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.view=e,await this.animate([{opacity:0,transform:`translateX(${i}px)`},{opacity:1,transform:"translateX(0px)"}],{duration:150,easing:"ease",fill:"forwards",delay:50}).finished}getWrapper(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("div")}};cf.styles=T$;H4([ie()],cf.prototype,"view",void 0);cf=H4([q("w3m-router")],cf);const P$=J`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  wui-notice-card {
    margin-bottom: var(--wui-spacing-3xs);
  }
`;var go=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Lr=class extends G{constructor(){super(),this.usubscribe=[],this.address=je.state.address,this.profileImage=je.state.profileImage,this.profileName=je.state.profileName,this.balance=je.state.balance,this.balanceSymbol=je.state.balanceSymbol,this.network=ht.state.caipNetwork,this.disconecting=!1,this.usubscribe.push(je.subscribe(e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.balance=e.balance,this.balanceSymbol=e.balanceSymbol):Ke.close()}),ht.subscribeKey("caipNetwork",e=>{e!=null&&e.id&&(this.network=e)}))}disconnectedCallback(){this.usubscribe.forEach(e=>e())}render(){var n;if(!this.address)throw new Error("w3m-account-view: No account provided");const e=ft.getNetworkImage(this.network);return $`
      <wui-flex
        flexDirection="column"
        .padding=${["0","s","m","s"]}
        alignItems="center"
        gap="l"
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${Ce(this.profileImage===null?void 0:this.profileImage)}
        ></wui-avatar>

        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="large-600" color="fg-100">
              ${this.profileName?He.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):He.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
          <wui-flex gap="s" flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-200">
              ${de.formatBalance(this.balance,this.balanceSymbol)}
            </wui-text>

            ${this.explorerBtnTemplate()}
          </wui-flex>
        </wui-flex>
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0","s","s","s"]}>
        ${this.emailCardTemplate()} ${this.emailBtnTemplate()}

        <wui-list-item
          .variant=${e?"image":"icon"}
          iconVariant="overlay"
          icon="networkPlaceholder"
          imageSrc=${Ce(e)}
          ?chevron=${this.isAllowedNetworkSwitch()}
          @click=${this.onNetworks.bind(this)}
          data-testid="w3m-account-select-network"
        >
          <wui-text variant="paragraph-500" color="fg-100">
            ${((n=this.network)==null?void 0:n.name)??"Unknown"}
          </wui-text>
        </wui-list-item>
        <wui-list-item
          iconVariant="blue"
          icon="swapHorizontalBold"
          iconSize="sm"
          ?chevron=${!0}
          @click=${this.onTransactions.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">Activity</wui-text>
        </wui-list-item>
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconecting}
          @click=${this.onDisconnect.bind(this)}
          data-testid="disconnect-button"
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>
    `}emailCardTemplate(){const e=Xt.getConnectedConnector(),n=Ge.getEmailConnector(),{origin:r}=location;return!n||e!=="EMAIL"||r.includes(Jr.SECURE_SITE)?null:$`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a non-custodial wallet"
        icon="wallet"
      ></wui-notice-card>
    `}emailBtnTemplate(){const e=Xt.getConnectedConnector(),n=Ge.getEmailConnector();if(!n||e!=="EMAIL")return null;const r=n.provider.getEmail()??"";return $`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="mail"
        iconSize="sm"
        ?chevron=${!0}
        @click=${()=>this.onGoToUpdateEmail(r)}
      >
        <wui-text variant="paragraph-500" color="fg-100">${r}</wui-text>
      </wui-list-item>
    `}explorerBtnTemplate(){const{addressExplorerUrl:e}=je.state;return e?$`
      <wui-button size="sm" variant="shade" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}isAllowedNetworkSwitch(){const{requestedCaipNetworks:e}=ht.state,n=e?e.length>1:!1,r=e==null?void 0:e.find(({id:i})=>{var o;return i===((o=this.network)==null?void 0:o.id)});return n||!r}onCopyAddress(){try{this.address&&(de.copyToClopboard(this.address),pt.showSuccess("Address copied"))}catch{pt.showError("Failed to copy")}}onNetworks(){this.isAllowedNetworkSwitch()&&ce.push("Networks")}onTransactions(){xe.sendEvent({type:"track",event:"CLICK_TRANSACTIONS"}),ce.push("Transactions")}async onDisconnect(){try{this.disconecting=!0,await Me.disconnect(),xe.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),Ke.close()}catch{xe.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),pt.showError("Failed to disconnect")}finally{this.disconecting=!1}}onExplorer(){const{addressExplorerUrl:e}=je.state;e&&de.openHref(e,"_blank")}onGoToUpgradeView(){xe.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),ce.push("UpgradeEmailWallet")}onGoToUpdateEmail(e){ce.push("UpdateEmailWallet",{email:e})}};Lr.styles=P$;go([ie()],Lr.prototype,"address",void 0);go([ie()],Lr.prototype,"profileImage",void 0);go([ie()],Lr.prototype,"profileName",void 0);go([ie()],Lr.prototype,"balance",void 0);go([ie()],Lr.prototype,"balanceSymbol",void 0);go([ie()],Lr.prototype,"network",void 0);go([ie()],Lr.prototype,"disconecting",void 0);Lr=go([q("w3m-account-view")],Lr);var V4=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let k1=class extends G{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=de.debounce(e=>{this.search=e})}render(){const e=this.search.length>=2;return $`
      <wui-flex padding="s" gap="s">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e?$`<w3m-all-wallets-search query=${this.search}></w3m-all-wallets-search>`:$`<w3m-all-wallets-list></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}qrButtonTemplate(){return de.isMobile()?$`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){ce.push("ConnectingWalletConnect")}};V4([ie()],k1.prototype,"search",void 0);k1=V4([q("w3m-all-wallets-view")],k1);const $$=J`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var q4=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let uf=class extends G{constructor(){super(),this.unsubscribe=[],this.connectors=Ge.state.connectors,this.unsubscribe.push(Ge.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return $`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        <w3m-email-login-widget></w3m-email-login-widget>

        ${this.walletConnectConnectorTemplate()} ${this.recentTemplate()}
        ${this.announcedTemplate()} ${this.injectedTemplate()} ${this.featuredTemplate()}
        ${this.customTemplate()} ${this.recommendedTemplate()} ${this.connectorsTemplate()}
        ${this.allWalletsTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}walletConnectConnectorTemplate(){if(de.isMobile())return null;const e=this.connectors.find(n=>n.type==="WALLET_CONNECT");return e?$`
      <wui-list-wallet
        imageSrc=${Ce(ft.getConnectorImage(e))}
        name=${e.name??"Unknown"}
        @click=${()=>this.onConnector(e)}
        tagLabel="qr code"
        tagVariant="main"
        data-testid="wallet-selector-walletconnect"
      >
      </wui-list-wallet>
    `:null}customTemplate(){const{customWallets:e}=We.state;return e!=null&&e.length?this.filterOutDuplicateWallets(e).map(r=>$`
        <wui-list-wallet
          imageSrc=${Ce(ft.getWalletImage(r))}
          name=${r.name??"Unknown"}
          @click=${()=>this.onConnectWallet(r)}
        >
        </wui-list-wallet>
      `):null}featuredTemplate(){if(!this.connectors.find(i=>i.type==="WALLET_CONNECT"))return null;const{featured:n}=De.state;return n.length?this.filterOutDuplicateWallets(n).map(i=>$`
        <wui-list-wallet
          imageSrc=${Ce(ft.getWalletImage(i))}
          name=${i.name??"Unknown"}
          @click=${()=>this.onConnectWallet(i)}
        >
        </wui-list-wallet>
      `):null}recentTemplate(){return Xt.getRecentWallets().map(n=>$`
        <wui-list-wallet
          imageSrc=${Ce(ft.getWalletImage(n))}
          name=${n.name??"Unknown"}
          @click=${()=>this.onConnectWallet(n)}
          tagLabel="recent"
          tagVariant="shade"
        >
        </wui-list-wallet>
      `)}announcedTemplate(){return this.connectors.map(e=>e.type!=="ANNOUNCED"?null:$`
        <wui-list-wallet
          imageSrc=${Ce(ft.getConnectorImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnector(e)}
          tagVariant="success"
          .installed=${!0}
        >
        </wui-list-wallet>
      `)}injectedTemplate(){const e=this.connectors.find(n=>n.type==="ANNOUNCED");return this.connectors.map(n=>n.type!=="INJECTED"||!Me.checkInstalled()?null:$`
        <wui-list-wallet
          imageSrc=${Ce(ft.getConnectorImage(n))}
          .installed=${!!e}
          name=${n.name??"Unknown"}
          @click=${()=>this.onConnector(n)}
        >
        </wui-list-wallet>
      `)}connectorsTemplate(){const e=Ge.getAnnouncedConnectorRdns();return this.connectors.map(n=>["WALLET_CONNECT","INJECTED","ANNOUNCED","EMAIL"].includes(n.type)||e.includes(Jr.CONNECTOR_RDNS_MAP[n.id])?null:$`
        <wui-list-wallet
          imageSrc=${Ce(ft.getConnectorImage(n))}
          name=${n.name??"Unknown"}
          @click=${()=>this.onConnector(n)}
        >
        </wui-list-wallet>
      `)}allWalletsTemplate(){if(!this.connectors.find(a=>a.type==="WALLET_CONNECT"))return null;const n=De.state.count,r=De.state.featured.length,i=n+r,o=i<10?i:Math.floor(i/10)*10,s=o<i?`${o}+`:`${o}`;return $`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${s}
        tagVariant="shade"
        data-testid="all-wallets"
      ></wui-list-wallet>
    `}recommendedTemplate(){if(!this.connectors.find(d=>d.type==="WALLET_CONNECT"))return null;const{recommended:n}=De.state,{customWallets:r,featuredWalletIds:i}=We.state,{connectors:o}=Ge.state,s=Xt.getRecentWallets(),a=o.filter(d=>d.type==="ANNOUNCED");if(i||r||!n.length)return null;const l=a.length+s.length,c=Math.max(0,2-l);return this.filterOutDuplicateWallets(n).slice(0,c).map(d=>$`
        <wui-list-wallet
          imageSrc=${Ce(ft.getWalletImage(d))}
          name=${(d==null?void 0:d.name)??"Unknown"}
          @click=${()=>this.onConnectWallet(d)}
        >
        </wui-list-wallet>
      `)}onConnector(e){e.type==="WALLET_CONNECT"?de.isMobile()?ce.push("AllWallets"):ce.push("ConnectingWalletConnect"):ce.push("ConnectingExternal",{connector:e})}filterOutDuplicateWallets(e){const{connectors:n}=Ge.state,i=Xt.getRecentWallets().map(a=>a.id),o=n.map(a=>{var l;return(l=a.info)==null?void 0:l.rdns}).filter(Boolean);return e.filter(a=>!i.includes(a.id)&&!o.includes(a.rdns??void 0))}onAllWallets(){xe.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),ce.push("AllWallets")}onConnectWallet(e){ce.push("ConnectingWalletConnect",{wallet:e})}};uf.styles=$$;q4([ie()],uf.prototype,"connectors",void 0);uf=q4([q("w3m-connect-view")],uf);const I$=J`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`;var bs=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};class bn extends G{constructor(){var e,n,r,i;super(),this.wallet=(e=ce.state.data)==null?void 0:e.wallet,this.connector=(n=ce.state.data)==null?void 0:n.connector,this.timeout=void 0,this.secondaryBtnLabel="Try again",this.secondaryBtnIcon="refresh",this.secondaryLabel="Accept connection request in the wallet",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=ft.getWalletImage(this.wallet)??ft.getConnectorImage(this.connector),this.name=((r=this.wallet)==null?void 0:r.name)??((i=this.connector)==null?void 0:i.name)??"Wallet",this.isRetrying=!1,this.uri=Me.state.wcUri,this.error=Me.state.wcError,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(Me.subscribeKey("wcUri",o=>{var s;this.uri=o,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,(s=this.onConnect)==null||s.call(this))}),Me.subscribeKey("wcError",o=>this.error=o),Me.subscribeKey("buffering",o=>this.buffering=o))}firstUpdated(){var e;(e=this.onAutoConnect)==null||e.call(this),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),clearTimeout(this.timeout)}render(){var r;(r=this.onRender)==null||r.call(this),this.onShowRetry();const e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let n=`Continue in ${this.name}`;return this.buffering&&(n="Connecting..."),this.error&&(n="Connection declined"),$`
      <wui-flex
        data-error=${Ce(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${Ce(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${n}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${e}</wui-text>
        </wui-flex>

        <wui-button
          variant="accent"
          ?disabled=${!this.error&&this.buffering}
          @click=${this.onTryAgain.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
          ${this.secondaryBtnLabel}
        </wui-button>
      </wui-flex>

      ${this.isWalletConnect?$`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){var e;if(this.error&&!this.showRetry){this.showRetry=!0;const n=(e=this.shadowRoot)==null?void 0:e.querySelector("wui-button");n==null||n.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){var e,n;this.buffering||(Me.setWcError(!1),this.onRetry?(this.isRetrying=!0,(e=this.onRetry)==null||e.call(this)):(n=this.onConnect)==null||n.call(this))}loaderTemplate(){const e=cn.state.themeVariables["--w3m-border-radius-master"],n=e?parseInt(e.replace("px",""),10):4;return $`<wui-loading-thumbnail radius=${n*9}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(de.copyToClopboard(this.uri),pt.showSuccess("Link copied"))}catch{pt.showError("Failed to copy")}}}bn.styles=I$;bs([ie()],bn.prototype,"uri",void 0);bs([ie()],bn.prototype,"error",void 0);bs([ie()],bn.prototype,"ready",void 0);bs([ie()],bn.prototype,"showRetry",void 0);bs([ie()],bn.prototype,"buffering",void 0);bs([I({type:Boolean})],bn.prototype,"isMobile",void 0);bs([I()],bn.prototype,"onRetry",void 0);var k$=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};const O$={INJECTED:"browser",ANNOUNCED:"browser"};let Sv=class extends bn{constructor(){if(super(),!this.connector)throw new Error("w3m-connecting-view: No connector provided");xe.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:O$[this.connector.type]??"external"}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1}async onConnectProxy(){try{this.error=!1,this.connector&&(this.connector.imageUrl&&Xt.setConnectedWalletImageUrl(this.connector.imageUrl),await Me.connectExternal(this.connector),wt.state.isSiweEnabled?ce.push("ConnectingSiwe"):Ke.close(),xe.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"external"}}))}catch(e){xe.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(e==null?void 0:e.message)??"Unknown"}}),this.error=!0}}};Sv=k$([q("w3m-connecting-external-view")],Sv);var Z4=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let O1=class extends G{constructor(){var e;super(...arguments),this.dappName=(e=We.state.metadata)==null?void 0:e.name,this.isSigning=!1}render(){return $`
      <wui-flex justifyContent="center" .padding=${["2xl","0","xxl","0"]}>
        <w3m-connecting-siwe></w3m-connecting-siwe>
      </wui-flex>
      <wui-flex
        .padding=${["0","4xl","l","4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName??"Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex
        .padding=${["0","3xl","l","3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button
          size="md"
          ?fullwidth=${!0}
          variant="shade"
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          Cancel
        </wui-button>
        <wui-button
          size="md"
          ?fullwidth=${!0}
          variant="fill"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning?"Signing...":"Sign"}
        </wui-button>
      </wui-flex>
    `}async onSign(){this.isSigning=!0,xe.sendEvent({event:"CLICK_SIGN_SIWE_MESSAGE",type:"track"});try{wt.setStatus("loading");const e=await wt.signIn();return wt.setStatus("success"),xe.sendEvent({event:"SIWE_AUTH_SUCCESS",type:"track"}),e}catch{return pt.showError("Signature declined"),wt.setStatus("error"),xe.sendEvent({event:"SIWE_AUTH_ERROR",type:"track"})}finally{this.isSigning=!1}}async onCancel(){const{isConnected:e}=je.state;e?(await Me.disconnect(),Ke.close()):ce.push("Connect"),xe.sendEvent({event:"CLICK_CANCEL_SIWE",type:"track"})}};Z4([ie()],O1.prototype,"isSigning",void 0);O1=Z4([q("w3m-connecting-siwe-view")],O1);var Jg=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let df=class extends G{constructor(){var e;super(),this.interval=void 0,this.lastRetry=Date.now(),this.wallet=(e=ce.state.data)==null?void 0:e.wallet,this.platform=void 0,this.platforms=[],this.initializeConnection(),this.interval=setInterval(this.initializeConnection.bind(this),Jr.TEN_SEC_MS)}disconnectedCallback(){clearTimeout(this.interval)}render(){return this.wallet?(this.determinePlatforms(),$`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
    `):$`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`}async initializeConnection(e=!1){try{const{wcPairingExpiry:n}=Me.state;if(e||de.isPairingExpired(n)){if(Me.connectWalletConnect(),this.wallet){const r=ft.getWalletImage(this.wallet);r&&Xt.setConnectedWalletImageUrl(r)}else{const i=Ge.state.connectors.find(s=>s.type==="WALLET_CONNECT"),o=ft.getConnectorImage(i);o&&Xt.setConnectedWalletImageUrl(o)}await Me.state.wcPromise,this.finalizeConnection(),wt.state.isSiweEnabled?ce.push("ConnectingSiwe"):Ke.close()}}catch(n){xe.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(n==null?void 0:n.message)??"Unknown"}}),Me.setWcError(!0),de.isAllowedRetry(this.lastRetry)&&(pt.showError("Declined"),this.lastRetry=Date.now(),this.initializeConnection(!0))}}finalizeConnection(){const{wcLinking:e,recentWallet:n}=Me.state;e&&Xt.setWalletConnectDeepLink(e),n&&Xt.setWeb3ModalRecent(n),xe.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:e?"mobile":"qrcode"}})}determinePlatforms(){if(!this.wallet)throw new Error("w3m-connecting-wc-view:determinePlatforms No wallet");if(this.platform)return;const{mobile_link:e,desktop_link:n,webapp_link:r,injected:i,rdns:o}=this.wallet,s=i==null?void 0:i.map(({injected_id:y})=>y).filter(Boolean),a=o?[o]:s??[],l=a.length,c=e,u=r,d=Me.checkInstalled(a),p=l&&d,w=n&&!de.isMobile();p&&this.platforms.push("browser"),c&&this.platforms.push(de.isMobile()?"mobile":"qrcode"),u&&this.platforms.push("web"),w&&this.platforms.push("desktop"),!p&&l&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return $`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"desktop":return $`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"web":return $`
          <w3m-connecting-wc-web .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-web>
        `;case"mobile":return $`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return $`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return $`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?$`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){var r;const n=(r=this.shadowRoot)==null?void 0:r.querySelector("div");n&&(await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};Jg([ie()],df.prototype,"platform",void 0);Jg([ie()],df.prototype,"platforms",void 0);df=Jg([q("w3m-connecting-wc-view")],df);var D$=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Av=class extends G{constructor(){var e;super(...arguments),this.wallet=(e=ce.state.data)==null?void 0:e.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return $`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){var e;return(e=this.wallet)!=null&&e.chrome_store?$`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){var e;return(e=this.wallet)!=null&&e.app_store?$`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){var e;return(e=this.wallet)!=null&&e.play_store?$`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){var e;return(e=this.wallet)!=null&&e.homepage?$`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){var e;(e=this.wallet)!=null&&e.chrome_store&&de.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){var e;(e=this.wallet)!=null&&e.app_store&&de.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var e;(e=this.wallet)!=null&&e.play_store&&de.openHref(this.wallet.play_store,"_blank")}onHomePage(){var e;(e=this.wallet)!=null&&e.homepage&&de.openHref(this.wallet.homepage,"_blank")}};Av=D$([q("w3m-downloads-view")],Av);var R$=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};const N$="https://walletconnect.com/explorer";let Tv=class extends G{render(){return $`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{de.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){const{recommended:e,featured:n}=De.state,{customWallets:r}=We.state;return[...n,...r??[],...e].slice(0,4).map(o=>$`
        <wui-list-wallet
          name=${o.name??"Unknown"}
          tagVariant="main"
          imageSrc=${Ce(ft.getWalletImage(o))}
          @click=${()=>{de.openHref(o.homepage??N$,"_blank")}}
        ></wui-list-wallet>
      `)}};Tv=R$([q("w3m-get-wallet-view")],Tv);const M$=J`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`;var Xg=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Oc=class extends G{constructor(){var e;super(),this.network=(e=ce.state.data)==null?void 0:e.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw new Error("w3m-network-switch-view: No network provided");this.onShowRetry();const e=this.error?"Switch declined":"Approve in wallet",n=this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet";return $`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${Ce(ft.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:$`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${e}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${n}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="fill"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}onShowRetry(){var e;if(this.error&&!this.showRetry){this.showRetry=!0;const n=(e=this.shadowRoot)==null?void 0:e.querySelector("wui-button");n==null||n.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}async onSwitchNetwork(){try{this.error=!1,this.network&&(await ht.switchActiveNetwork(this.network),wt.state.isSiweEnabled||e4.navigateAfterNetworkSwitch())}catch{this.error=!0}}};Oc.styles=M$;Xg([ie()],Oc.prototype,"showRetry",void 0);Xg([ie()],Oc.prototype,"error",void 0);Oc=Xg([q("w3m-network-switch-view")],Oc);const L$=J`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }
`;var G4=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let ff=class extends G{constructor(){super(),this.unsubscribe=[],this.caipNetwork=ht.state.caipNetwork,this.unsubscribe.push(ht.subscribeKey("caipNetwork",e=>this.caipNetwork=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return $`
      <wui-grid padding="s" gridTemplateColumns="repeat(4, 1fr)" rowGap="l" columnGap="xs">
        ${this.networksTemplate()}
      </wui-grid>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-400" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `}onNetworkHelp(){xe.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),ce.push("WhatIsANetwork")}networksTemplate(){const{approvedCaipNetworkIds:e,requestedCaipNetworks:n,supportsAllNetworks:r}=ht.state,i=e,o=n,s={};return o&&i&&(i.forEach((a,l)=>{s[a]=l}),o.sort((a,l)=>{const c=s[a.id],u=s[l.id];return c!==void 0&&u!==void 0?c-u:c!==void 0?-1:u!==void 0?1:0})),o==null?void 0:o.map(a=>{var l;return $`
        <wui-card-select
          .selected=${((l=this.caipNetwork)==null?void 0:l.id)===a.id}
          imageSrc=${Ce(ft.getNetworkImage(a))}
          type="network"
          name=${a.name??a.id}
          @click=${()=>this.onSwitchNetwork(a)}
          .disabled=${!r&&!(i!=null&&i.includes(a.id))}
          data-testid=${`w3m-network-switch-${a.name??a.id}`}
        ></wui-card-select>
      `})}async onSwitchNetwork(e){const{isConnected:n}=je.state,{approvedCaipNetworkIds:r,supportsAllNetworks:i,caipNetwork:o}=ht.state,{data:s}=ce.state;n&&(o==null?void 0:o.id)!==e.id?r!=null&&r.includes(e.id)?(await ht.switchActiveNetwork(e),e4.navigateAfterNetworkSwitch()):i&&ce.push("SwitchNetwork",{...s,network:e}):n||(ht.setCaipNetwork(e),ce.push("Connect"))}};ff.styles=L$;G4([ie()],ff.prototype,"caipNetwork",void 0);ff=G4([q("w3m-networks-view")],ff);const U$=J`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }
`;var xs=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};const Yu="last-transaction",j$=7;let ci=class extends G{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.address=je.state.address,this.transactions=Qn.state.transactions,this.transactionsByYear=Qn.state.transactionsByYear,this.loading=Qn.state.loading,this.empty=Qn.state.empty,this.next=Qn.state.next,this.unsubscribe.push(je.subscribe(e=>{e.isConnected&&this.address!==e.address&&(this.address=e.address,Qn.resetTransactions(),Qn.fetchTransactions(e.address))}),Qn.subscribe(e=>{this.transactions=e.transactions,this.transactionsByYear=e.transactionsByYear,this.loading=e.loading,this.empty=e.empty,this.next=e.next}))}firstUpdated(){this.transactions.length===0&&Qn.fetchTransactions(this.address),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return $`
      <wui-flex flexDirection="column" padding="s" gap="s">
        ${this.empty?null:this.templateTransactionsByYear()}
        ${this.loading?this.templateLoading():null}
        ${!this.loading&&this.empty?this.templateEmpty():null}
      </wui-flex>
    `}templateTransactionsByYear(){const e=Object.keys(this.transactionsByYear).sort().reverse();return e.map((n,r)=>{const i=r===e.length-1,o=parseInt(n,10),s=Oo.getTransactionGroupTitle(o),a=this.transactionsByYear[o];return a?$`
        <wui-flex flexDirection="column" gap="s">
          <wui-flex
            alignItems="center"
            flexDirection="row"
            .padding=${["xs","s","s","s"]}
          >
            <wui-text variant="paragraph-500" color="fg-200">${s}</wui-text>
          </wui-flex>
          <wui-flex flexDirection="column" gap="xs">
            ${this.templateTransactions(a,i)}
          </wui-flex>
        </wui-flex>
      `:null})}templateRenderTransaction(e,n){const{date:r,descriptions:i,direction:o,isAllNFT:s,images:a,status:l,transfers:c,type:u}=this.getTransactionListItemProps(e),d=(c==null?void 0:c.length)>1;return(c==null?void 0:c.length)===2&&!s?$`
        <wui-transaction-list-item
          date=${r}
          .direction=${o}
          id=${n&&this.next?Yu:""}
          status=${l}
          type=${u}
          .images=${a}
          .descriptions=${i}
        ></wui-transaction-list-item>
      `:d?c.map((w,y)=>{const E=Oo.getTransferDescription(w),C=n&&y===c.length-1;return $` <wui-transaction-list-item
          date=${r}
          direction=${w.direction}
          id=${C&&this.next?Yu:""}
          status=${l}
          type=${u}
          .onlyDirectionIcon=${!0}
          .images=${[a==null?void 0:a[y]]}
          .descriptions=${[E]}
        ></wui-transaction-list-item>`}):$`
      <wui-transaction-list-item
        date=${r}
        .direction=${o}
        id=${n&&this.next?Yu:""}
        status=${l}
        type=${u}
        .images=${a}
        .descriptions=${i}
      ></wui-transaction-list-item>
    `}templateTransactions(e,n){return e.map((r,i)=>{const o=n&&i===e.length-1;return $`${this.templateRenderTransaction(r,o)}`})}templateEmpty(){return $`
      <wui-flex
        flexGrow="1"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-icon-box
          backgroundColor="glass-005"
          background="gray"
          iconColor="fg-200"
          icon="wallet"
          size="lg"
          ?border=${!0}
          borderColor="wui-color-bg-125"
        ></wui-icon-box>
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100"
            >No Transactions yet</wui-text
          >
          <wui-text align="center" variant="small-500" color="fg-200"
            >Start trading on dApps <br />
            to grow your wallet!</wui-text
          >
        </wui-flex>
      </wui-flex>
    `}templateLoading(){return Array(j$).fill($` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(e=>e)}createPaginationObserver(){const{projectId:e}=We.state;this.paginationObserver=new IntersectionObserver(([n])=>{n!=null&&n.isIntersecting&&!this.loading&&(Qn.fetchTransactions(this.address),xe.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:this.address,projectId:e,cursor:this.next}}))},{}),this.setPaginationObserver()}setPaginationObserver(){var n,r,i;(n=this.paginationObserver)==null||n.disconnect();const e=(r=this.shadowRoot)==null?void 0:r.querySelector(`#${Yu}`);e&&((i=this.paginationObserver)==null||i.observe(e))}getTransactionListItemProps(e){var l,c,u,d,p;const n=z4.getRelativeDateFromNow((l=e==null?void 0:e.metadata)==null?void 0:l.minedAt),r=Oo.getTransactionDescriptions(e),i=e==null?void 0:e.transfers,o=(c=e==null?void 0:e.transfers)==null?void 0:c[0],s=!!o&&((u=e==null?void 0:e.transfers)==null?void 0:u.every(w=>!!w.nft_info)),a=Oo.getTransactionImages(i);return{date:n,direction:o==null?void 0:o.direction,descriptions:r,isAllNFT:s,images:a,status:(d=e.metadata)==null?void 0:d.status,transfers:i,type:(p=e.metadata)==null?void 0:p.operationType}}};ci.styles=U$;xs([ie()],ci.prototype,"address",void 0);xs([ie()],ci.prototype,"transactions",void 0);xs([ie()],ci.prototype,"transactionsByYear",void 0);xs([ie()],ci.prototype,"loading",void 0);xs([ie()],ci.prototype,"empty",void 0);xs([ie()],ci.prototype,"next",void 0);ci=xs([q("w3m-transactions-view")],ci);var B$=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};const F$=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}];let Pv=class extends G{render(){return $`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${F$}></w3m-help-widget>
        <wui-button
          variant="fill"
          size="sm"
          @click=${()=>{de.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};Pv=B$([q("w3m-what-is-a-network-view")],Pv);var W$=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};const z$=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}];let $v=class extends G{render(){return $`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${z$}></w3m-help-widget>
        <wui-button variant="fill" size="sm" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){xe.sendEvent({type:"track",event:"CLICK_GET_WALLET"}),ce.push("GetWallet")}};$v=W$([q("w3m-what-is-a-wallet-view")],$v);const H$=J`
  wui-loading-spinner {
    margin: 9px auto;
  }
`,le={SECURE_SITE_SDK:"https://secure.web3modal.com/sdk",APP_EVENT_KEY:"@w3m-app/",FRAME_EVENT_KEY:"@w3m-frame/",RPC_METHOD_KEY:"RPC_",STORAGE_KEY:"@w3m-storage/",SESSION_TOKEN_KEY:"SESSION_TOKEN_KEY",EMAIL_LOGIN_USED_KEY:"EMAIL_LOGIN_USED_KEY",LAST_USED_CHAIN_KEY:"LAST_USED_CHAIN_KEY",LAST_EMAIL_LOGIN_TIME:"LAST_EMAIL_LOGIN_TIME",EMAIL:"EMAIL",APP_SWITCH_NETWORK:"@w3m-app/SWITCH_NETWORK",APP_CONNECT_EMAIL:"@w3m-app/CONNECT_EMAIL",APP_CONNECT_DEVICE:"@w3m-app/CONNECT_DEVICE",APP_CONNECT_OTP:"@w3m-app/CONNECT_OTP",APP_GET_USER:"@w3m-app/GET_USER",APP_SIGN_OUT:"@w3m-app/SIGN_OUT",APP_IS_CONNECTED:"@w3m-app/IS_CONNECTED",APP_GET_CHAIN_ID:"@w3m-app/GET_CHAIN_ID",APP_RPC_REQUEST:"@w3m-app/RPC_REQUEST",APP_UPDATE_EMAIL:"@w3m-app/UPDATE_EMAIL",APP_AWAIT_UPDATE_EMAIL:"@w3m-app/AWAIT_UPDATE_EMAIL",APP_SYNC_THEME:"@w3m-app/SYNC_THEME",APP_SYNC_DAPP_DATA:"@w3m-app/SYNC_DAPP_DATA",FRAME_SWITCH_NETWORK_ERROR:"@w3m-frame/SWITCH_NETWORK_ERROR",FRAME_SWITCH_NETWORK_SUCCESS:"@w3m-frame/SWITCH_NETWORK_SUCCESS",FRAME_CONNECT_EMAIL_ERROR:"@w3m-frame/CONNECT_EMAIL_ERROR",FRAME_CONNECT_EMAIL_SUCCESS:"@w3m-frame/CONNECT_EMAIL_SUCCESS",FRAME_CONNECT_DEVICE_ERROR:"@w3m-frame/CONNECT_DEVICE_ERROR",FRAME_CONNECT_DEVICE_SUCCESS:"@w3m-frame/CONNECT_DEVICE_SUCCESS",FRAME_CONNECT_OTP_SUCCESS:"@w3m-frame/CONNECT_OTP_SUCCESS",FRAME_CONNECT_OTP_ERROR:"@w3m-frame/CONNECT_OTP_ERROR",FRAME_GET_USER_SUCCESS:"@w3m-frame/GET_USER_SUCCESS",FRAME_GET_USER_ERROR:"@w3m-frame/GET_USER_ERROR",FRAME_SIGN_OUT_SUCCESS:"@w3m-frame/SIGN_OUT_SUCCESS",FRAME_SIGN_OUT_ERROR:"@w3m-frame/SIGN_OUT_ERROR",FRAME_IS_CONNECTED_SUCCESS:"@w3m-frame/IS_CONNECTED_SUCCESS",FRAME_IS_CONNECTED_ERROR:"@w3m-frame/IS_CONNECTED_ERROR",FRAME_GET_CHAIN_ID_SUCCESS:"@w3m-frame/GET_CHAIN_ID_SUCCESS",FRAME_GET_CHAIN_ID_ERROR:"@w3m-frame/GET_CHAIN_ID_ERROR",FRAME_RPC_REQUEST_SUCCESS:"@w3m-frame/RPC_REQUEST_SUCCESS",FRAME_RPC_REQUEST_ERROR:"@w3m-frame/RPC_REQUEST_ERROR",FRAME_SESSION_UPDATE:"@w3m-frame/SESSION_UPDATE",FRAME_UPDATE_EMAIL_SUCCESS:"@w3m-frame/UPDATE_EMAIL_SUCCESS",FRAME_UPDATE_EMAIL_ERROR:"@w3m-frame/UPDATE_EMAIL_ERROR",FRAME_AWAIT_UPDATE_EMAIL_SUCCESS:"@w3m-frame/AWAIT_UPDATE_EMAIL_SUCCESS",FRAME_AWAIT_UPDATE_EMAIL_ERROR:"@w3m-frame/AWAIT_UPDATE_EMAIL_ERROR",FRAME_SYNC_THEME_SUCCESS:"@w3m-frame/SYNC_THEME_SUCCESS",FRAME_SYNC_THEME_ERROR:"@w3m-frame/SYNC_THEME_ERROR",FRAME_SYNC_DAPP_DATA_SUCCESS:"@w3m-frame/SYNC_DAPP_DATA_SUCCESS",FRAME_SYNC_DAPP_DATA_ERROR:"@w3m-frame/SYNC_DAPP_DATA_ERROR"},V$={SAFE_RPC_METHODS:["eth_blockNumber","eth_estimateGas","eth_getTransactionByHash"],GET_CHAIN_ID:"eth_chainId"};var Be;(function(t){t.assertEqual=i=>i;function e(i){}t.assertIs=e;function n(i){throw new Error}t.assertNever=n,t.arrayToEnum=i=>{const o={};for(const s of i)o[s]=s;return o},t.getValidEnumValues=i=>{const o=t.objectKeys(i).filter(a=>typeof i[i[a]]!="number"),s={};for(const a of o)s[a]=i[a];return t.objectValues(s)},t.objectValues=i=>t.objectKeys(i).map(function(o){return i[o]}),t.objectKeys=typeof Object.keys=="function"?i=>Object.keys(i):i=>{const o=[];for(const s in i)Object.prototype.hasOwnProperty.call(i,s)&&o.push(s);return o},t.find=(i,o)=>{for(const s of i)if(o(s))return s},t.isInteger=typeof Number.isInteger=="function"?i=>Number.isInteger(i):i=>typeof i=="number"&&isFinite(i)&&Math.floor(i)===i;function r(i,o=" | "){return i.map(s=>typeof s=="string"?`'${s}'`:s).join(o)}t.joinValues=r,t.jsonStringifyReplacer=(i,o)=>typeof o=="bigint"?o.toString():o})(Be||(Be={}));var D1;(function(t){t.mergeShapes=(e,n)=>({...e,...n})})(D1||(D1={}));const re=Be.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),$i=t=>{switch(typeof t){case"undefined":return re.undefined;case"string":return re.string;case"number":return isNaN(t)?re.nan:re.number;case"boolean":return re.boolean;case"function":return re.function;case"bigint":return re.bigint;case"symbol":return re.symbol;case"object":return Array.isArray(t)?re.array:t===null?re.null:t.then&&typeof t.then=="function"&&t.catch&&typeof t.catch=="function"?re.promise:typeof Map<"u"&&t instanceof Map?re.map:typeof Set<"u"&&t instanceof Set?re.set:typeof Date<"u"&&t instanceof Date?re.date:re.object;default:return re.unknown}},Y=Be.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),q$=t=>JSON.stringify(t,null,2).replace(/"([^"]+)":/g,"$1:");class ar extends Error{constructor(e){super(),this.issues=[],this.addIssue=r=>{this.issues=[...this.issues,r]},this.addIssues=(r=[])=>{this.issues=[...this.issues,...r]};const n=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,n):this.__proto__=n,this.name="ZodError",this.issues=e}get errors(){return this.issues}format(e){const n=e||function(o){return o.message},r={_errors:[]},i=o=>{for(const s of o.issues)if(s.code==="invalid_union")s.unionErrors.map(i);else if(s.code==="invalid_return_type")i(s.returnTypeError);else if(s.code==="invalid_arguments")i(s.argumentsError);else if(s.path.length===0)r._errors.push(n(s));else{let a=r,l=0;for(;l<s.path.length;){const c=s.path[l];l===s.path.length-1?(a[c]=a[c]||{_errors:[]},a[c]._errors.push(n(s))):a[c]=a[c]||{_errors:[]},a=a[c],l++}}};return i(this),r}toString(){return this.message}get message(){return JSON.stringify(this.issues,Be.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=n=>n.message){const n={},r=[];for(const i of this.issues)i.path.length>0?(n[i.path[0]]=n[i.path[0]]||[],n[i.path[0]].push(e(i))):r.push(e(i));return{formErrors:r,fieldErrors:n}}get formErrors(){return this.flatten()}}ar.create=t=>new ar(t);const Dc=(t,e)=>{let n;switch(t.code){case Y.invalid_type:t.received===re.undefined?n="Required":n=`Expected ${t.expected}, received ${t.received}`;break;case Y.invalid_literal:n=`Invalid literal value, expected ${JSON.stringify(t.expected,Be.jsonStringifyReplacer)}`;break;case Y.unrecognized_keys:n=`Unrecognized key(s) in object: ${Be.joinValues(t.keys,", ")}`;break;case Y.invalid_union:n="Invalid input";break;case Y.invalid_union_discriminator:n=`Invalid discriminator value. Expected ${Be.joinValues(t.options)}`;break;case Y.invalid_enum_value:n=`Invalid enum value. Expected ${Be.joinValues(t.options)}, received '${t.received}'`;break;case Y.invalid_arguments:n="Invalid function arguments";break;case Y.invalid_return_type:n="Invalid function return type";break;case Y.invalid_date:n="Invalid date";break;case Y.invalid_string:typeof t.validation=="object"?"includes"in t.validation?(n=`Invalid input: must include "${t.validation.includes}"`,typeof t.validation.position=="number"&&(n=`${n} at one or more positions greater than or equal to ${t.validation.position}`)):"startsWith"in t.validation?n=`Invalid input: must start with "${t.validation.startsWith}"`:"endsWith"in t.validation?n=`Invalid input: must end with "${t.validation.endsWith}"`:Be.assertNever(t.validation):t.validation!=="regex"?n=`Invalid ${t.validation}`:n="Invalid";break;case Y.too_small:t.type==="array"?n=`Array must contain ${t.exact?"exactly":t.inclusive?"at least":"more than"} ${t.minimum} element(s)`:t.type==="string"?n=`String must contain ${t.exact?"exactly":t.inclusive?"at least":"over"} ${t.minimum} character(s)`:t.type==="number"?n=`Number must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${t.minimum}`:t.type==="date"?n=`Date must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(t.minimum))}`:n="Invalid input";break;case Y.too_big:t.type==="array"?n=`Array must contain ${t.exact?"exactly":t.inclusive?"at most":"less than"} ${t.maximum} element(s)`:t.type==="string"?n=`String must contain ${t.exact?"exactly":t.inclusive?"at most":"under"} ${t.maximum} character(s)`:t.type==="number"?n=`Number must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="bigint"?n=`BigInt must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="date"?n=`Date must be ${t.exact?"exactly":t.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(t.maximum))}`:n="Invalid input";break;case Y.custom:n="Invalid input";break;case Y.invalid_intersection_types:n="Intersection results could not be merged";break;case Y.not_multiple_of:n=`Number must be a multiple of ${t.multipleOf}`;break;case Y.not_finite:n="Number must be finite";break;default:n=e.defaultError,Be.assertNever(t)}return{message:n}};let K4=Dc;function Z$(t){K4=t}function hf(){return K4}const pf=t=>{const{data:e,path:n,errorMaps:r,issueData:i}=t,o=[...n,...i.path||[]],s={...i,path:o};let a="";const l=r.filter(c=>!!c).slice().reverse();for(const c of l)a=c(s,{data:e,defaultError:a}).message;return{...i,path:o,message:i.message||a}},G$=[];function se(t,e){const n=pf({issueData:e,data:t.data,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,hf(),Dc].filter(r=>!!r)});t.common.issues.push(n)}class Zt{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,n){const r=[];for(const i of n){if(i.status==="aborted")return Ee;i.status==="dirty"&&e.dirty(),r.push(i.value)}return{status:e.value,value:r}}static async mergeObjectAsync(e,n){const r=[];for(const i of n)r.push({key:await i.key,value:await i.value});return Zt.mergeObjectSync(e,r)}static mergeObjectSync(e,n){const r={};for(const i of n){const{key:o,value:s}=i;if(o.status==="aborted"||s.status==="aborted")return Ee;o.status==="dirty"&&e.dirty(),s.status==="dirty"&&e.dirty(),o.value!=="__proto__"&&(typeof s.value<"u"||i.alwaysSet)&&(r[o.value]=s.value)}return{status:e.value,value:r}}}const Ee=Object.freeze({status:"aborted"}),Y4=t=>({status:"dirty",value:t}),rn=t=>({status:"valid",value:t}),R1=t=>t.status==="aborted",N1=t=>t.status==="dirty",Rc=t=>t.status==="valid",mf=t=>typeof Promise<"u"&&t instanceof Promise;var he;(function(t){t.errToObj=e=>typeof e=="string"?{message:e}:e||{},t.toString=e=>typeof e=="string"?e:e==null?void 0:e.message})(he||(he={}));class Ur{constructor(e,n,r,i){this._cachedPath=[],this.parent=e,this.data=n,this._path=r,this._key=i}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const Iv=(t,e)=>{if(Rc(e))return{success:!0,data:e.value};if(!t.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const n=new ar(t.common.issues);return this._error=n,this._error}}};function Ae(t){if(!t)return{};const{errorMap:e,invalid_type_error:n,required_error:r,description:i}=t;if(e&&(n||r))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:i}:{errorMap:(s,a)=>s.code!=="invalid_type"?{message:a.defaultError}:typeof a.data>"u"?{message:r??a.defaultError}:{message:n??a.defaultError},description:i}}class Ie{constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(e){return $i(e.data)}_getOrReturnCtx(e,n){return n||{common:e.parent.common,data:e.data,parsedType:$i(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new Zt,ctx:{common:e.parent.common,data:e.data,parsedType:$i(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){const n=this._parse(e);if(mf(n))throw new Error("Synchronous parse encountered promise.");return n}_parseAsync(e){const n=this._parse(e);return Promise.resolve(n)}parse(e,n){const r=this.safeParse(e,n);if(r.success)return r.data;throw r.error}safeParse(e,n){var r;const i={common:{issues:[],async:(r=n==null?void 0:n.async)!==null&&r!==void 0?r:!1,contextualErrorMap:n==null?void 0:n.errorMap},path:(n==null?void 0:n.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:$i(e)},o=this._parseSync({data:e,path:i.path,parent:i});return Iv(i,o)}async parseAsync(e,n){const r=await this.safeParseAsync(e,n);if(r.success)return r.data;throw r.error}async safeParseAsync(e,n){const r={common:{issues:[],contextualErrorMap:n==null?void 0:n.errorMap,async:!0},path:(n==null?void 0:n.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:$i(e)},i=this._parse({data:e,path:r.path,parent:r}),o=await(mf(i)?i:Promise.resolve(i));return Iv(r,o)}refine(e,n){const r=i=>typeof n=="string"||typeof n>"u"?{message:n}:typeof n=="function"?n(i):n;return this._refinement((i,o)=>{const s=e(i),a=()=>o.addIssue({code:Y.custom,...r(i)});return typeof Promise<"u"&&s instanceof Promise?s.then(l=>l?!0:(a(),!1)):s?!0:(a(),!1)})}refinement(e,n){return this._refinement((r,i)=>e(r)?!0:(i.addIssue(typeof n=="function"?n(r,i):n),!1))}_refinement(e){return new wr({schema:this,typeName:me.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}optional(){return ti.create(this,this._def)}nullable(){return ds.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return lr.create(this,this._def)}promise(){return ka.create(this,this._def)}or(e){return Uc.create([this,e],this._def)}and(e){return jc.create(this,e,this._def)}transform(e){return new wr({...Ae(this._def),schema:this,typeName:me.ZodEffects,effect:{type:"transform",transform:e}})}default(e){const n=typeof e=="function"?e:()=>e;return new Hc({...Ae(this._def),innerType:this,defaultValue:n,typeName:me.ZodDefault})}brand(){return new J4({typeName:me.ZodBranded,type:this,...Ae(this._def)})}catch(e){const n=typeof e=="function"?e:()=>e;return new vf({...Ae(this._def),innerType:this,catchValue:n,typeName:me.ZodCatch})}describe(e){const n=this.constructor;return new n({...this._def,description:e})}pipe(e){return yu.create(this,e)}readonly(){return xf.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const K$=/^c[^\s-]{8,}$/i,Y$=/^[a-z][a-z0-9]*$/,Q$=/^[0-9A-HJKMNP-TV-Z]{26}$/,J$=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,X$=/^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,eI="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";let Y0;const tI=/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,nI=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,rI=t=>t.precision?t.offset?new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}Z$`):t.precision===0?t.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):t.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");function iI(t,e){return!!((e==="v4"||!e)&&tI.test(t)||(e==="v6"||!e)&&nI.test(t))}class rr extends Ie{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==re.string){const o=this._getOrReturnCtx(e);return se(o,{code:Y.invalid_type,expected:re.string,received:o.parsedType}),Ee}const r=new Zt;let i;for(const o of this._def.checks)if(o.kind==="min")e.data.length<o.value&&(i=this._getOrReturnCtx(e,i),se(i,{code:Y.too_small,minimum:o.value,type:"string",inclusive:!0,exact:!1,message:o.message}),r.dirty());else if(o.kind==="max")e.data.length>o.value&&(i=this._getOrReturnCtx(e,i),se(i,{code:Y.too_big,maximum:o.value,type:"string",inclusive:!0,exact:!1,message:o.message}),r.dirty());else if(o.kind==="length"){const s=e.data.length>o.value,a=e.data.length<o.value;(s||a)&&(i=this._getOrReturnCtx(e,i),s?se(i,{code:Y.too_big,maximum:o.value,type:"string",inclusive:!0,exact:!0,message:o.message}):a&&se(i,{code:Y.too_small,minimum:o.value,type:"string",inclusive:!0,exact:!0,message:o.message}),r.dirty())}else if(o.kind==="email")X$.test(e.data)||(i=this._getOrReturnCtx(e,i),se(i,{validation:"email",code:Y.invalid_string,message:o.message}),r.dirty());else if(o.kind==="emoji")Y0||(Y0=new RegExp(eI,"u")),Y0.test(e.data)||(i=this._getOrReturnCtx(e,i),se(i,{validation:"emoji",code:Y.invalid_string,message:o.message}),r.dirty());else if(o.kind==="uuid")J$.test(e.data)||(i=this._getOrReturnCtx(e,i),se(i,{validation:"uuid",code:Y.invalid_string,message:o.message}),r.dirty());else if(o.kind==="cuid")K$.test(e.data)||(i=this._getOrReturnCtx(e,i),se(i,{validation:"cuid",code:Y.invalid_string,message:o.message}),r.dirty());else if(o.kind==="cuid2")Y$.test(e.data)||(i=this._getOrReturnCtx(e,i),se(i,{validation:"cuid2",code:Y.invalid_string,message:o.message}),r.dirty());else if(o.kind==="ulid")Q$.test(e.data)||(i=this._getOrReturnCtx(e,i),se(i,{validation:"ulid",code:Y.invalid_string,message:o.message}),r.dirty());else if(o.kind==="url")try{new URL(e.data)}catch{i=this._getOrReturnCtx(e,i),se(i,{validation:"url",code:Y.invalid_string,message:o.message}),r.dirty()}else o.kind==="regex"?(o.regex.lastIndex=0,o.regex.test(e.data)||(i=this._getOrReturnCtx(e,i),se(i,{validation:"regex",code:Y.invalid_string,message:o.message}),r.dirty())):o.kind==="trim"?e.data=e.data.trim():o.kind==="includes"?e.data.includes(o.value,o.position)||(i=this._getOrReturnCtx(e,i),se(i,{code:Y.invalid_string,validation:{includes:o.value,position:o.position},message:o.message}),r.dirty()):o.kind==="toLowerCase"?e.data=e.data.toLowerCase():o.kind==="toUpperCase"?e.data=e.data.toUpperCase():o.kind==="startsWith"?e.data.startsWith(o.value)||(i=this._getOrReturnCtx(e,i),se(i,{code:Y.invalid_string,validation:{startsWith:o.value},message:o.message}),r.dirty()):o.kind==="endsWith"?e.data.endsWith(o.value)||(i=this._getOrReturnCtx(e,i),se(i,{code:Y.invalid_string,validation:{endsWith:o.value},message:o.message}),r.dirty()):o.kind==="datetime"?rI(o).test(e.data)||(i=this._getOrReturnCtx(e,i),se(i,{code:Y.invalid_string,validation:"datetime",message:o.message}),r.dirty()):o.kind==="ip"?iI(e.data,o.version)||(i=this._getOrReturnCtx(e,i),se(i,{validation:"ip",code:Y.invalid_string,message:o.message}),r.dirty()):Be.assertNever(o);return{status:r.value,value:e.data}}_regex(e,n,r){return this.refinement(i=>e.test(i),{validation:n,code:Y.invalid_string,...he.errToObj(r)})}_addCheck(e){return new rr({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...he.errToObj(e)})}url(e){return this._addCheck({kind:"url",...he.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...he.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...he.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...he.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...he.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...he.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...he.errToObj(e)})}datetime(e){var n;return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,message:e}):this._addCheck({kind:"datetime",precision:typeof(e==null?void 0:e.precision)>"u"?null:e==null?void 0:e.precision,offset:(n=e==null?void 0:e.offset)!==null&&n!==void 0?n:!1,...he.errToObj(e==null?void 0:e.message)})}regex(e,n){return this._addCheck({kind:"regex",regex:e,...he.errToObj(n)})}includes(e,n){return this._addCheck({kind:"includes",value:e,position:n==null?void 0:n.position,...he.errToObj(n==null?void 0:n.message)})}startsWith(e,n){return this._addCheck({kind:"startsWith",value:e,...he.errToObj(n)})}endsWith(e,n){return this._addCheck({kind:"endsWith",value:e,...he.errToObj(n)})}min(e,n){return this._addCheck({kind:"min",value:e,...he.errToObj(n)})}max(e,n){return this._addCheck({kind:"max",value:e,...he.errToObj(n)})}length(e,n){return this._addCheck({kind:"length",value:e,...he.errToObj(n)})}nonempty(e){return this.min(1,he.errToObj(e))}trim(){return new rr({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new rr({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new rr({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isEmoji(){return!!this._def.checks.find(e=>e.kind==="emoji")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get isULID(){return!!this._def.checks.find(e=>e.kind==="ulid")}get isIP(){return!!this._def.checks.find(e=>e.kind==="ip")}get minLength(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxLength(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}}rr.create=t=>{var e;return new rr({checks:[],typeName:me.ZodString,coerce:(e=t==null?void 0:t.coerce)!==null&&e!==void 0?e:!1,...Ae(t)})};function oI(t,e){const n=(t.toString().split(".")[1]||"").length,r=(e.toString().split(".")[1]||"").length,i=n>r?n:r,o=parseInt(t.toFixed(i).replace(".","")),s=parseInt(e.toFixed(i).replace(".",""));return o%s/Math.pow(10,i)}class no extends Ie{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==re.number){const o=this._getOrReturnCtx(e);return se(o,{code:Y.invalid_type,expected:re.number,received:o.parsedType}),Ee}let r;const i=new Zt;for(const o of this._def.checks)o.kind==="int"?Be.isInteger(e.data)||(r=this._getOrReturnCtx(e,r),se(r,{code:Y.invalid_type,expected:"integer",received:"float",message:o.message}),i.dirty()):o.kind==="min"?(o.inclusive?e.data<o.value:e.data<=o.value)&&(r=this._getOrReturnCtx(e,r),se(r,{code:Y.too_small,minimum:o.value,type:"number",inclusive:o.inclusive,exact:!1,message:o.message}),i.dirty()):o.kind==="max"?(o.inclusive?e.data>o.value:e.data>=o.value)&&(r=this._getOrReturnCtx(e,r),se(r,{code:Y.too_big,maximum:o.value,type:"number",inclusive:o.inclusive,exact:!1,message:o.message}),i.dirty()):o.kind==="multipleOf"?oI(e.data,o.value)!==0&&(r=this._getOrReturnCtx(e,r),se(r,{code:Y.not_multiple_of,multipleOf:o.value,message:o.message}),i.dirty()):o.kind==="finite"?Number.isFinite(e.data)||(r=this._getOrReturnCtx(e,r),se(r,{code:Y.not_finite,message:o.message}),i.dirty()):Be.assertNever(o);return{status:i.value,value:e.data}}gte(e,n){return this.setLimit("min",e,!0,he.toString(n))}gt(e,n){return this.setLimit("min",e,!1,he.toString(n))}lte(e,n){return this.setLimit("max",e,!0,he.toString(n))}lt(e,n){return this.setLimit("max",e,!1,he.toString(n))}setLimit(e,n,r,i){return new no({...this._def,checks:[...this._def.checks,{kind:e,value:n,inclusive:r,message:he.toString(i)}]})}_addCheck(e){return new no({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:he.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:he.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:he.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:he.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:he.toString(e)})}multipleOf(e,n){return this._addCheck({kind:"multipleOf",value:e,message:he.toString(n)})}finite(e){return this._addCheck({kind:"finite",message:he.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:he.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:he.toString(e)})}get minValue(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxValue(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&Be.isInteger(e.value))}get isFinite(){let e=null,n=null;for(const r of this._def.checks){if(r.kind==="finite"||r.kind==="int"||r.kind==="multipleOf")return!0;r.kind==="min"?(n===null||r.value>n)&&(n=r.value):r.kind==="max"&&(e===null||r.value<e)&&(e=r.value)}return Number.isFinite(n)&&Number.isFinite(e)}}no.create=t=>new no({checks:[],typeName:me.ZodNumber,coerce:(t==null?void 0:t.coerce)||!1,...Ae(t)});class ro extends Ie{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce&&(e.data=BigInt(e.data)),this._getType(e)!==re.bigint){const o=this._getOrReturnCtx(e);return se(o,{code:Y.invalid_type,expected:re.bigint,received:o.parsedType}),Ee}let r;const i=new Zt;for(const o of this._def.checks)o.kind==="min"?(o.inclusive?e.data<o.value:e.data<=o.value)&&(r=this._getOrReturnCtx(e,r),se(r,{code:Y.too_small,type:"bigint",minimum:o.value,inclusive:o.inclusive,message:o.message}),i.dirty()):o.kind==="max"?(o.inclusive?e.data>o.value:e.data>=o.value)&&(r=this._getOrReturnCtx(e,r),se(r,{code:Y.too_big,type:"bigint",maximum:o.value,inclusive:o.inclusive,message:o.message}),i.dirty()):o.kind==="multipleOf"?e.data%o.value!==BigInt(0)&&(r=this._getOrReturnCtx(e,r),se(r,{code:Y.not_multiple_of,multipleOf:o.value,message:o.message}),i.dirty()):Be.assertNever(o);return{status:i.value,value:e.data}}gte(e,n){return this.setLimit("min",e,!0,he.toString(n))}gt(e,n){return this.setLimit("min",e,!1,he.toString(n))}lte(e,n){return this.setLimit("max",e,!0,he.toString(n))}lt(e,n){return this.setLimit("max",e,!1,he.toString(n))}setLimit(e,n,r,i){return new ro({...this._def,checks:[...this._def.checks,{kind:e,value:n,inclusive:r,message:he.toString(i)}]})}_addCheck(e){return new ro({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:he.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:he.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:he.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:he.toString(e)})}multipleOf(e,n){return this._addCheck({kind:"multipleOf",value:e,message:he.toString(n)})}get minValue(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxValue(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}}ro.create=t=>{var e;return new ro({checks:[],typeName:me.ZodBigInt,coerce:(e=t==null?void 0:t.coerce)!==null&&e!==void 0?e:!1,...Ae(t)})};class Nc extends Ie{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==re.boolean){const r=this._getOrReturnCtx(e);return se(r,{code:Y.invalid_type,expected:re.boolean,received:r.parsedType}),Ee}return rn(e.data)}}Nc.create=t=>new Nc({typeName:me.ZodBoolean,coerce:(t==null?void 0:t.coerce)||!1,...Ae(t)});class cs extends Ie{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==re.date){const o=this._getOrReturnCtx(e);return se(o,{code:Y.invalid_type,expected:re.date,received:o.parsedType}),Ee}if(isNaN(e.data.getTime())){const o=this._getOrReturnCtx(e);return se(o,{code:Y.invalid_date}),Ee}const r=new Zt;let i;for(const o of this._def.checks)o.kind==="min"?e.data.getTime()<o.value&&(i=this._getOrReturnCtx(e,i),se(i,{code:Y.too_small,message:o.message,inclusive:!0,exact:!1,minimum:o.value,type:"date"}),r.dirty()):o.kind==="max"?e.data.getTime()>o.value&&(i=this._getOrReturnCtx(e,i),se(i,{code:Y.too_big,message:o.message,inclusive:!0,exact:!1,maximum:o.value,type:"date"}),r.dirty()):Be.assertNever(o);return{status:r.value,value:new Date(e.data.getTime())}}_addCheck(e){return new cs({...this._def,checks:[...this._def.checks,e]})}min(e,n){return this._addCheck({kind:"min",value:e.getTime(),message:he.toString(n)})}max(e,n){return this._addCheck({kind:"max",value:e.getTime(),message:he.toString(n)})}get minDate(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e!=null?new Date(e):null}}cs.create=t=>new cs({checks:[],coerce:(t==null?void 0:t.coerce)||!1,typeName:me.ZodDate,...Ae(t)});class gf extends Ie{_parse(e){if(this._getType(e)!==re.symbol){const r=this._getOrReturnCtx(e);return se(r,{code:Y.invalid_type,expected:re.symbol,received:r.parsedType}),Ee}return rn(e.data)}}gf.create=t=>new gf({typeName:me.ZodSymbol,...Ae(t)});class Mc extends Ie{_parse(e){if(this._getType(e)!==re.undefined){const r=this._getOrReturnCtx(e);return se(r,{code:Y.invalid_type,expected:re.undefined,received:r.parsedType}),Ee}return rn(e.data)}}Mc.create=t=>new Mc({typeName:me.ZodUndefined,...Ae(t)});class Lc extends Ie{_parse(e){if(this._getType(e)!==re.null){const r=this._getOrReturnCtx(e);return se(r,{code:Y.invalid_type,expected:re.null,received:r.parsedType}),Ee}return rn(e.data)}}Lc.create=t=>new Lc({typeName:me.ZodNull,...Ae(t)});class Ia extends Ie{constructor(){super(...arguments),this._any=!0}_parse(e){return rn(e.data)}}Ia.create=t=>new Ia({typeName:me.ZodAny,...Ae(t)});class Uo extends Ie{constructor(){super(...arguments),this._unknown=!0}_parse(e){return rn(e.data)}}Uo.create=t=>new Uo({typeName:me.ZodUnknown,...Ae(t)});class ui extends Ie{_parse(e){const n=this._getOrReturnCtx(e);return se(n,{code:Y.invalid_type,expected:re.never,received:n.parsedType}),Ee}}ui.create=t=>new ui({typeName:me.ZodNever,...Ae(t)});class wf extends Ie{_parse(e){if(this._getType(e)!==re.undefined){const r=this._getOrReturnCtx(e);return se(r,{code:Y.invalid_type,expected:re.void,received:r.parsedType}),Ee}return rn(e.data)}}wf.create=t=>new wf({typeName:me.ZodVoid,...Ae(t)});class lr extends Ie{_parse(e){const{ctx:n,status:r}=this._processInputParams(e),i=this._def;if(n.parsedType!==re.array)return se(n,{code:Y.invalid_type,expected:re.array,received:n.parsedType}),Ee;if(i.exactLength!==null){const s=n.data.length>i.exactLength.value,a=n.data.length<i.exactLength.value;(s||a)&&(se(n,{code:s?Y.too_big:Y.too_small,minimum:a?i.exactLength.value:void 0,maximum:s?i.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:i.exactLength.message}),r.dirty())}if(i.minLength!==null&&n.data.length<i.minLength.value&&(se(n,{code:Y.too_small,minimum:i.minLength.value,type:"array",inclusive:!0,exact:!1,message:i.minLength.message}),r.dirty()),i.maxLength!==null&&n.data.length>i.maxLength.value&&(se(n,{code:Y.too_big,maximum:i.maxLength.value,type:"array",inclusive:!0,exact:!1,message:i.maxLength.message}),r.dirty()),n.common.async)return Promise.all([...n.data].map((s,a)=>i.type._parseAsync(new Ur(n,s,n.path,a)))).then(s=>Zt.mergeArray(r,s));const o=[...n.data].map((s,a)=>i.type._parseSync(new Ur(n,s,n.path,a)));return Zt.mergeArray(r,o)}get element(){return this._def.type}min(e,n){return new lr({...this._def,minLength:{value:e,message:he.toString(n)}})}max(e,n){return new lr({...this._def,maxLength:{value:e,message:he.toString(n)}})}length(e,n){return new lr({...this._def,exactLength:{value:e,message:he.toString(n)}})}nonempty(e){return this.min(1,e)}}lr.create=(t,e)=>new lr({type:t,minLength:null,maxLength:null,exactLength:null,typeName:me.ZodArray,...Ae(e)});function Is(t){if(t instanceof it){const e={};for(const n in t.shape){const r=t.shape[n];e[n]=ti.create(Is(r))}return new it({...t._def,shape:()=>e})}else return t instanceof lr?new lr({...t._def,type:Is(t.element)}):t instanceof ti?ti.create(Is(t.unwrap())):t instanceof ds?ds.create(Is(t.unwrap())):t instanceof jr?jr.create(t.items.map(e=>Is(e))):t}class it extends Ie{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const e=this._def.shape(),n=Be.objectKeys(e);return this._cached={shape:e,keys:n}}_parse(e){if(this._getType(e)!==re.object){const c=this._getOrReturnCtx(e);return se(c,{code:Y.invalid_type,expected:re.object,received:c.parsedType}),Ee}const{status:r,ctx:i}=this._processInputParams(e),{shape:o,keys:s}=this._getCached(),a=[];if(!(this._def.catchall instanceof ui&&this._def.unknownKeys==="strip"))for(const c in i.data)s.includes(c)||a.push(c);const l=[];for(const c of s){const u=o[c],d=i.data[c];l.push({key:{status:"valid",value:c},value:u._parse(new Ur(i,d,i.path,c)),alwaysSet:c in i.data})}if(this._def.catchall instanceof ui){const c=this._def.unknownKeys;if(c==="passthrough")for(const u of a)l.push({key:{status:"valid",value:u},value:{status:"valid",value:i.data[u]}});else if(c==="strict")a.length>0&&(se(i,{code:Y.unrecognized_keys,keys:a}),r.dirty());else if(c!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const c=this._def.catchall;for(const u of a){const d=i.data[u];l.push({key:{status:"valid",value:u},value:c._parse(new Ur(i,d,i.path,u)),alwaysSet:u in i.data})}}return i.common.async?Promise.resolve().then(async()=>{const c=[];for(const u of l){const d=await u.key;c.push({key:d,value:await u.value,alwaysSet:u.alwaysSet})}return c}).then(c=>Zt.mergeObjectSync(r,c)):Zt.mergeObjectSync(r,l)}get shape(){return this._def.shape()}strict(e){return he.errToObj,new it({...this._def,unknownKeys:"strict",...e!==void 0?{errorMap:(n,r)=>{var i,o,s,a;const l=(s=(o=(i=this._def).errorMap)===null||o===void 0?void 0:o.call(i,n,r).message)!==null&&s!==void 0?s:r.defaultError;return n.code==="unrecognized_keys"?{message:(a=he.errToObj(e).message)!==null&&a!==void 0?a:l}:{message:l}}}:{}})}strip(){return new it({...this._def,unknownKeys:"strip"})}passthrough(){return new it({...this._def,unknownKeys:"passthrough"})}extend(e){return new it({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new it({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:me.ZodObject})}setKey(e,n){return this.augment({[e]:n})}catchall(e){return new it({...this._def,catchall:e})}pick(e){const n={};return Be.objectKeys(e).forEach(r=>{e[r]&&this.shape[r]&&(n[r]=this.shape[r])}),new it({...this._def,shape:()=>n})}omit(e){const n={};return Be.objectKeys(this.shape).forEach(r=>{e[r]||(n[r]=this.shape[r])}),new it({...this._def,shape:()=>n})}deepPartial(){return Is(this)}partial(e){const n={};return Be.objectKeys(this.shape).forEach(r=>{const i=this.shape[r];e&&!e[r]?n[r]=i:n[r]=i.optional()}),new it({...this._def,shape:()=>n})}required(e){const n={};return Be.objectKeys(this.shape).forEach(r=>{if(e&&!e[r])n[r]=this.shape[r];else{let o=this.shape[r];for(;o instanceof ti;)o=o._def.innerType;n[r]=o}}),new it({...this._def,shape:()=>n})}keyof(){return Q4(Be.objectKeys(this.shape))}}it.create=(t,e)=>new it({shape:()=>t,unknownKeys:"strip",catchall:ui.create(),typeName:me.ZodObject,...Ae(e)});it.strictCreate=(t,e)=>new it({shape:()=>t,unknownKeys:"strict",catchall:ui.create(),typeName:me.ZodObject,...Ae(e)});it.lazycreate=(t,e)=>new it({shape:t,unknownKeys:"strip",catchall:ui.create(),typeName:me.ZodObject,...Ae(e)});class Uc extends Ie{_parse(e){const{ctx:n}=this._processInputParams(e),r=this._def.options;function i(o){for(const a of o)if(a.result.status==="valid")return a.result;for(const a of o)if(a.result.status==="dirty")return n.common.issues.push(...a.ctx.common.issues),a.result;const s=o.map(a=>new ar(a.ctx.common.issues));return se(n,{code:Y.invalid_union,unionErrors:s}),Ee}if(n.common.async)return Promise.all(r.map(async o=>{const s={...n,common:{...n.common,issues:[]},parent:null};return{result:await o._parseAsync({data:n.data,path:n.path,parent:s}),ctx:s}})).then(i);{let o;const s=[];for(const l of r){const c={...n,common:{...n.common,issues:[]},parent:null},u=l._parseSync({data:n.data,path:n.path,parent:c});if(u.status==="valid")return u;u.status==="dirty"&&!o&&(o={result:u,ctx:c}),c.common.issues.length&&s.push(c.common.issues)}if(o)return n.common.issues.push(...o.ctx.common.issues),o.result;const a=s.map(l=>new ar(l));return se(n,{code:Y.invalid_union,unionErrors:a}),Ee}}get options(){return this._def.options}}Uc.create=(t,e)=>new Uc({options:t,typeName:me.ZodUnion,...Ae(e)});const wd=t=>t instanceof Fc?wd(t.schema):t instanceof wr?wd(t.innerType()):t instanceof Wc?[t.value]:t instanceof io?t.options:t instanceof zc?Object.keys(t.enum):t instanceof Hc?wd(t._def.innerType):t instanceof Mc?[void 0]:t instanceof Lc?[null]:null;class Rh extends Ie{_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==re.object)return se(n,{code:Y.invalid_type,expected:re.object,received:n.parsedType}),Ee;const r=this.discriminator,i=n.data[r],o=this.optionsMap.get(i);return o?n.common.async?o._parseAsync({data:n.data,path:n.path,parent:n}):o._parseSync({data:n.data,path:n.path,parent:n}):(se(n,{code:Y.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[r]}),Ee)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,n,r){const i=new Map;for(const o of n){const s=wd(o.shape[e]);if(!s)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(const a of s){if(i.has(a))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(a)}`);i.set(a,o)}}return new Rh({typeName:me.ZodDiscriminatedUnion,discriminator:e,options:n,optionsMap:i,...Ae(r)})}}function M1(t,e){const n=$i(t),r=$i(e);if(t===e)return{valid:!0,data:t};if(n===re.object&&r===re.object){const i=Be.objectKeys(e),o=Be.objectKeys(t).filter(a=>i.indexOf(a)!==-1),s={...t,...e};for(const a of o){const l=M1(t[a],e[a]);if(!l.valid)return{valid:!1};s[a]=l.data}return{valid:!0,data:s}}else if(n===re.array&&r===re.array){if(t.length!==e.length)return{valid:!1};const i=[];for(let o=0;o<t.length;o++){const s=t[o],a=e[o],l=M1(s,a);if(!l.valid)return{valid:!1};i.push(l.data)}return{valid:!0,data:i}}else return n===re.date&&r===re.date&&+t==+e?{valid:!0,data:t}:{valid:!1}}class jc extends Ie{_parse(e){const{status:n,ctx:r}=this._processInputParams(e),i=(o,s)=>{if(R1(o)||R1(s))return Ee;const a=M1(o.value,s.value);return a.valid?((N1(o)||N1(s))&&n.dirty(),{status:n.value,value:a.data}):(se(r,{code:Y.invalid_intersection_types}),Ee)};return r.common.async?Promise.all([this._def.left._parseAsync({data:r.data,path:r.path,parent:r}),this._def.right._parseAsync({data:r.data,path:r.path,parent:r})]).then(([o,s])=>i(o,s)):i(this._def.left._parseSync({data:r.data,path:r.path,parent:r}),this._def.right._parseSync({data:r.data,path:r.path,parent:r}))}}jc.create=(t,e,n)=>new jc({left:t,right:e,typeName:me.ZodIntersection,...Ae(n)});class jr extends Ie{_parse(e){const{status:n,ctx:r}=this._processInputParams(e);if(r.parsedType!==re.array)return se(r,{code:Y.invalid_type,expected:re.array,received:r.parsedType}),Ee;if(r.data.length<this._def.items.length)return se(r,{code:Y.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),Ee;!this._def.rest&&r.data.length>this._def.items.length&&(se(r,{code:Y.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),n.dirty());const o=[...r.data].map((s,a)=>{const l=this._def.items[a]||this._def.rest;return l?l._parse(new Ur(r,s,r.path,a)):null}).filter(s=>!!s);return r.common.async?Promise.all(o).then(s=>Zt.mergeArray(n,s)):Zt.mergeArray(n,o)}get items(){return this._def.items}rest(e){return new jr({...this._def,rest:e})}}jr.create=(t,e)=>{if(!Array.isArray(t))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new jr({items:t,typeName:me.ZodTuple,rest:null,...Ae(e)})};class Bc extends Ie{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:n,ctx:r}=this._processInputParams(e);if(r.parsedType!==re.object)return se(r,{code:Y.invalid_type,expected:re.object,received:r.parsedType}),Ee;const i=[],o=this._def.keyType,s=this._def.valueType;for(const a in r.data)i.push({key:o._parse(new Ur(r,a,r.path,a)),value:s._parse(new Ur(r,r.data[a],r.path,a))});return r.common.async?Zt.mergeObjectAsync(n,i):Zt.mergeObjectSync(n,i)}get element(){return this._def.valueType}static create(e,n,r){return n instanceof Ie?new Bc({keyType:e,valueType:n,typeName:me.ZodRecord,...Ae(r)}):new Bc({keyType:rr.create(),valueType:e,typeName:me.ZodRecord,...Ae(n)})}}class yf extends Ie{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:n,ctx:r}=this._processInputParams(e);if(r.parsedType!==re.map)return se(r,{code:Y.invalid_type,expected:re.map,received:r.parsedType}),Ee;const i=this._def.keyType,o=this._def.valueType,s=[...r.data.entries()].map(([a,l],c)=>({key:i._parse(new Ur(r,a,r.path,[c,"key"])),value:o._parse(new Ur(r,l,r.path,[c,"value"]))}));if(r.common.async){const a=new Map;return Promise.resolve().then(async()=>{for(const l of s){const c=await l.key,u=await l.value;if(c.status==="aborted"||u.status==="aborted")return Ee;(c.status==="dirty"||u.status==="dirty")&&n.dirty(),a.set(c.value,u.value)}return{status:n.value,value:a}})}else{const a=new Map;for(const l of s){const c=l.key,u=l.value;if(c.status==="aborted"||u.status==="aborted")return Ee;(c.status==="dirty"||u.status==="dirty")&&n.dirty(),a.set(c.value,u.value)}return{status:n.value,value:a}}}}yf.create=(t,e,n)=>new yf({valueType:e,keyType:t,typeName:me.ZodMap,...Ae(n)});class us extends Ie{_parse(e){const{status:n,ctx:r}=this._processInputParams(e);if(r.parsedType!==re.set)return se(r,{code:Y.invalid_type,expected:re.set,received:r.parsedType}),Ee;const i=this._def;i.minSize!==null&&r.data.size<i.minSize.value&&(se(r,{code:Y.too_small,minimum:i.minSize.value,type:"set",inclusive:!0,exact:!1,message:i.minSize.message}),n.dirty()),i.maxSize!==null&&r.data.size>i.maxSize.value&&(se(r,{code:Y.too_big,maximum:i.maxSize.value,type:"set",inclusive:!0,exact:!1,message:i.maxSize.message}),n.dirty());const o=this._def.valueType;function s(l){const c=new Set;for(const u of l){if(u.status==="aborted")return Ee;u.status==="dirty"&&n.dirty(),c.add(u.value)}return{status:n.value,value:c}}const a=[...r.data.values()].map((l,c)=>o._parse(new Ur(r,l,r.path,c)));return r.common.async?Promise.all(a).then(l=>s(l)):s(a)}min(e,n){return new us({...this._def,minSize:{value:e,message:he.toString(n)}})}max(e,n){return new us({...this._def,maxSize:{value:e,message:he.toString(n)}})}size(e,n){return this.min(e,n).max(e,n)}nonempty(e){return this.min(1,e)}}us.create=(t,e)=>new us({valueType:t,minSize:null,maxSize:null,typeName:me.ZodSet,...Ae(e)});class na extends Ie{constructor(){super(...arguments),this.validate=this.implement}_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==re.function)return se(n,{code:Y.invalid_type,expected:re.function,received:n.parsedType}),Ee;function r(a,l){return pf({data:a,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,hf(),Dc].filter(c=>!!c),issueData:{code:Y.invalid_arguments,argumentsError:l}})}function i(a,l){return pf({data:a,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,hf(),Dc].filter(c=>!!c),issueData:{code:Y.invalid_return_type,returnTypeError:l}})}const o={errorMap:n.common.contextualErrorMap},s=n.data;if(this._def.returns instanceof ka){const a=this;return rn(async function(...l){const c=new ar([]),u=await a._def.args.parseAsync(l,o).catch(w=>{throw c.addIssue(r(l,w)),c}),d=await Reflect.apply(s,this,u);return await a._def.returns._def.type.parseAsync(d,o).catch(w=>{throw c.addIssue(i(d,w)),c})})}else{const a=this;return rn(function(...l){const c=a._def.args.safeParse(l,o);if(!c.success)throw new ar([r(l,c.error)]);const u=Reflect.apply(s,this,c.data),d=a._def.returns.safeParse(u,o);if(!d.success)throw new ar([i(u,d.error)]);return d.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new na({...this._def,args:jr.create(e).rest(Uo.create())})}returns(e){return new na({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,n,r){return new na({args:e||jr.create([]).rest(Uo.create()),returns:n||Uo.create(),typeName:me.ZodFunction,...Ae(r)})}}class Fc extends Ie{get schema(){return this._def.getter()}_parse(e){const{ctx:n}=this._processInputParams(e);return this._def.getter()._parse({data:n.data,path:n.path,parent:n})}}Fc.create=(t,e)=>new Fc({getter:t,typeName:me.ZodLazy,...Ae(e)});class Wc extends Ie{_parse(e){if(e.data!==this._def.value){const n=this._getOrReturnCtx(e);return se(n,{received:n.data,code:Y.invalid_literal,expected:this._def.value}),Ee}return{status:"valid",value:e.data}}get value(){return this._def.value}}Wc.create=(t,e)=>new Wc({value:t,typeName:me.ZodLiteral,...Ae(e)});function Q4(t,e){return new io({values:t,typeName:me.ZodEnum,...Ae(e)})}class io extends Ie{_parse(e){if(typeof e.data!="string"){const n=this._getOrReturnCtx(e),r=this._def.values;return se(n,{expected:Be.joinValues(r),received:n.parsedType,code:Y.invalid_type}),Ee}if(this._def.values.indexOf(e.data)===-1){const n=this._getOrReturnCtx(e),r=this._def.values;return se(n,{received:n.data,code:Y.invalid_enum_value,options:r}),Ee}return rn(e.data)}get options(){return this._def.values}get enum(){const e={};for(const n of this._def.values)e[n]=n;return e}get Values(){const e={};for(const n of this._def.values)e[n]=n;return e}get Enum(){const e={};for(const n of this._def.values)e[n]=n;return e}extract(e){return io.create(e)}exclude(e){return io.create(this.options.filter(n=>!e.includes(n)))}}io.create=Q4;class zc extends Ie{_parse(e){const n=Be.getValidEnumValues(this._def.values),r=this._getOrReturnCtx(e);if(r.parsedType!==re.string&&r.parsedType!==re.number){const i=Be.objectValues(n);return se(r,{expected:Be.joinValues(i),received:r.parsedType,code:Y.invalid_type}),Ee}if(n.indexOf(e.data)===-1){const i=Be.objectValues(n);return se(r,{received:r.data,code:Y.invalid_enum_value,options:i}),Ee}return rn(e.data)}get enum(){return this._def.values}}zc.create=(t,e)=>new zc({values:t,typeName:me.ZodNativeEnum,...Ae(e)});class ka extends Ie{unwrap(){return this._def.type}_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==re.promise&&n.common.async===!1)return se(n,{code:Y.invalid_type,expected:re.promise,received:n.parsedType}),Ee;const r=n.parsedType===re.promise?n.data:Promise.resolve(n.data);return rn(r.then(i=>this._def.type.parseAsync(i,{path:n.path,errorMap:n.common.contextualErrorMap})))}}ka.create=(t,e)=>new ka({type:t,typeName:me.ZodPromise,...Ae(e)});class wr extends Ie{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===me.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){const{status:n,ctx:r}=this._processInputParams(e),i=this._def.effect||null,o={addIssue:s=>{se(r,s),s.fatal?n.abort():n.dirty()},get path(){return r.path}};if(o.addIssue=o.addIssue.bind(o),i.type==="preprocess"){const s=i.transform(r.data,o);return r.common.issues.length?{status:"dirty",value:r.data}:r.common.async?Promise.resolve(s).then(a=>this._def.schema._parseAsync({data:a,path:r.path,parent:r})):this._def.schema._parseSync({data:s,path:r.path,parent:r})}if(i.type==="refinement"){const s=a=>{const l=i.refinement(a,o);if(r.common.async)return Promise.resolve(l);if(l instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return a};if(r.common.async===!1){const a=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});return a.status==="aborted"?Ee:(a.status==="dirty"&&n.dirty(),s(a.value),{status:n.value,value:a.value})}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(a=>a.status==="aborted"?Ee:(a.status==="dirty"&&n.dirty(),s(a.value).then(()=>({status:n.value,value:a.value}))))}if(i.type==="transform")if(r.common.async===!1){const s=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});if(!Rc(s))return s;const a=i.transform(s.value,o);if(a instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:n.value,value:a}}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(s=>Rc(s)?Promise.resolve(i.transform(s.value,o)).then(a=>({status:n.value,value:a})):s);Be.assertNever(i)}}wr.create=(t,e,n)=>new wr({schema:t,typeName:me.ZodEffects,effect:e,...Ae(n)});wr.createWithPreprocess=(t,e,n)=>new wr({schema:e,effect:{type:"preprocess",transform:t},typeName:me.ZodEffects,...Ae(n)});class ti extends Ie{_parse(e){return this._getType(e)===re.undefined?rn(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}ti.create=(t,e)=>new ti({innerType:t,typeName:me.ZodOptional,...Ae(e)});class ds extends Ie{_parse(e){return this._getType(e)===re.null?rn(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}ds.create=(t,e)=>new ds({innerType:t,typeName:me.ZodNullable,...Ae(e)});class Hc extends Ie{_parse(e){const{ctx:n}=this._processInputParams(e);let r=n.data;return n.parsedType===re.undefined&&(r=this._def.defaultValue()),this._def.innerType._parse({data:r,path:n.path,parent:n})}removeDefault(){return this._def.innerType}}Hc.create=(t,e)=>new Hc({innerType:t,typeName:me.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default,...Ae(e)});class vf extends Ie{_parse(e){const{ctx:n}=this._processInputParams(e),r={...n,common:{...n.common,issues:[]}},i=this._def.innerType._parse({data:r.data,path:r.path,parent:{...r}});return mf(i)?i.then(o=>({status:"valid",value:o.status==="valid"?o.value:this._def.catchValue({get error(){return new ar(r.common.issues)},input:r.data})})):{status:"valid",value:i.status==="valid"?i.value:this._def.catchValue({get error(){return new ar(r.common.issues)},input:r.data})}}removeCatch(){return this._def.innerType}}vf.create=(t,e)=>new vf({innerType:t,typeName:me.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch,...Ae(e)});class bf extends Ie{_parse(e){if(this._getType(e)!==re.nan){const r=this._getOrReturnCtx(e);return se(r,{code:Y.invalid_type,expected:re.nan,received:r.parsedType}),Ee}return{status:"valid",value:e.data}}}bf.create=t=>new bf({typeName:me.ZodNaN,...Ae(t)});const sI=Symbol("zod_brand");class J4 extends Ie{_parse(e){const{ctx:n}=this._processInputParams(e),r=n.data;return this._def.type._parse({data:r,path:n.path,parent:n})}unwrap(){return this._def.type}}class yu extends Ie{_parse(e){const{status:n,ctx:r}=this._processInputParams(e);if(r.common.async)return(async()=>{const o=await this._def.in._parseAsync({data:r.data,path:r.path,parent:r});return o.status==="aborted"?Ee:o.status==="dirty"?(n.dirty(),Y4(o.value)):this._def.out._parseAsync({data:o.value,path:r.path,parent:r})})();{const i=this._def.in._parseSync({data:r.data,path:r.path,parent:r});return i.status==="aborted"?Ee:i.status==="dirty"?(n.dirty(),{status:"dirty",value:i.value}):this._def.out._parseSync({data:i.value,path:r.path,parent:r})}}static create(e,n){return new yu({in:e,out:n,typeName:me.ZodPipeline})}}class xf extends Ie{_parse(e){const n=this._def.innerType._parse(e);return Rc(n)&&(n.value=Object.freeze(n.value)),n}}xf.create=(t,e)=>new xf({innerType:t,typeName:me.ZodReadonly,...Ae(e)});const X4=(t,e={},n)=>t?Ia.create().superRefine((r,i)=>{var o,s;if(!t(r)){const a=typeof e=="function"?e(r):typeof e=="string"?{message:e}:e,l=(s=(o=a.fatal)!==null&&o!==void 0?o:n)!==null&&s!==void 0?s:!0,c=typeof a=="string"?{message:a}:a;i.addIssue({code:"custom",...c,fatal:l})}}):Ia.create(),aI={object:it.lazycreate};var me;(function(t){t.ZodString="ZodString",t.ZodNumber="ZodNumber",t.ZodNaN="ZodNaN",t.ZodBigInt="ZodBigInt",t.ZodBoolean="ZodBoolean",t.ZodDate="ZodDate",t.ZodSymbol="ZodSymbol",t.ZodUndefined="ZodUndefined",t.ZodNull="ZodNull",t.ZodAny="ZodAny",t.ZodUnknown="ZodUnknown",t.ZodNever="ZodNever",t.ZodVoid="ZodVoid",t.ZodArray="ZodArray",t.ZodObject="ZodObject",t.ZodUnion="ZodUnion",t.ZodDiscriminatedUnion="ZodDiscriminatedUnion",t.ZodIntersection="ZodIntersection",t.ZodTuple="ZodTuple",t.ZodRecord="ZodRecord",t.ZodMap="ZodMap",t.ZodSet="ZodSet",t.ZodFunction="ZodFunction",t.ZodLazy="ZodLazy",t.ZodLiteral="ZodLiteral",t.ZodEnum="ZodEnum",t.ZodEffects="ZodEffects",t.ZodNativeEnum="ZodNativeEnum",t.ZodOptional="ZodOptional",t.ZodNullable="ZodNullable",t.ZodDefault="ZodDefault",t.ZodCatch="ZodCatch",t.ZodPromise="ZodPromise",t.ZodBranded="ZodBranded",t.ZodPipeline="ZodPipeline",t.ZodReadonly="ZodReadonly"})(me||(me={}));const lI=(t,e={message:`Input not instance of ${t.name}`})=>X4(n=>n instanceof t,e),e6=rr.create,t6=no.create,cI=bf.create,uI=ro.create,n6=Nc.create,dI=cs.create,fI=gf.create,hI=Mc.create,pI=Lc.create,mI=Ia.create,gI=Uo.create,wI=ui.create,yI=wf.create,vI=lr.create,bI=it.create,xI=it.strictCreate,EI=Uc.create,_I=Rh.create,CI=jc.create,SI=jr.create,AI=Bc.create,TI=yf.create,PI=us.create,$I=na.create,II=Fc.create,kI=Wc.create,OI=io.create,DI=zc.create,RI=ka.create,kv=wr.create,NI=ti.create,MI=ds.create,LI=wr.createWithPreprocess,UI=yu.create,jI=()=>e6().optional(),BI=()=>t6().optional(),FI=()=>n6().optional(),WI={string:t=>rr.create({...t,coerce:!0}),number:t=>no.create({...t,coerce:!0}),boolean:t=>Nc.create({...t,coerce:!0}),bigint:t=>ro.create({...t,coerce:!0}),date:t=>cs.create({...t,coerce:!0})},zI=Ee;var L=Object.freeze({__proto__:null,defaultErrorMap:Dc,setErrorMap:Z$,getErrorMap:hf,makeIssue:pf,EMPTY_PATH:G$,addIssueToContext:se,ParseStatus:Zt,INVALID:Ee,DIRTY:Y4,OK:rn,isAborted:R1,isDirty:N1,isValid:Rc,isAsync:mf,get util(){return Be},get objectUtil(){return D1},ZodParsedType:re,getParsedType:$i,ZodType:Ie,ZodString:rr,ZodNumber:no,ZodBigInt:ro,ZodBoolean:Nc,ZodDate:cs,ZodSymbol:gf,ZodUndefined:Mc,ZodNull:Lc,ZodAny:Ia,ZodUnknown:Uo,ZodNever:ui,ZodVoid:wf,ZodArray:lr,ZodObject:it,ZodUnion:Uc,ZodDiscriminatedUnion:Rh,ZodIntersection:jc,ZodTuple:jr,ZodRecord:Bc,ZodMap:yf,ZodSet:us,ZodFunction:na,ZodLazy:Fc,ZodLiteral:Wc,ZodEnum:io,ZodNativeEnum:zc,ZodPromise:ka,ZodEffects:wr,ZodTransformer:wr,ZodOptional:ti,ZodNullable:ds,ZodDefault:Hc,ZodCatch:vf,ZodNaN:bf,BRAND:sI,ZodBranded:J4,ZodPipeline:yu,ZodReadonly:xf,custom:X4,Schema:Ie,ZodSchema:Ie,late:aI,get ZodFirstPartyTypeKind(){return me},coerce:WI,any:mI,array:vI,bigint:uI,boolean:n6,date:dI,discriminatedUnion:_I,effect:kv,enum:OI,function:$I,instanceof:lI,intersection:CI,lazy:II,literal:kI,map:TI,nan:cI,nativeEnum:DI,never:wI,null:pI,nullable:MI,number:t6,object:bI,oboolean:FI,onumber:BI,optional:NI,ostring:jI,pipeline:UI,preprocess:LI,promise:RI,record:AI,set:PI,strictObject:xI,string:e6,symbol:fI,transformer:kv,tuple:SI,undefined:hI,union:EI,unknown:gI,void:yI,NEVER:zI,ZodIssueCode:Y,quotelessJson:q$,ZodError:ar});const Cn=L.object({message:L.string()});function $e(t){return L.literal(le[t])}L.object({accessList:L.array(L.string()),blockHash:L.string().nullable(),blockNumber:L.string().nullable(),chainId:L.string(),from:L.string(),gas:L.string(),hash:L.string(),input:L.string().nullable(),maxFeePerGas:L.string(),maxPriorityFeePerGas:L.string(),nonce:L.string(),r:L.string(),s:L.string(),to:L.string(),transactionIndex:L.string().nullable(),type:L.string(),v:L.string(),value:L.string()});const HI=L.object({chainId:L.number()}),VI=L.object({email:L.string().email()}),qI=L.object({otp:L.string()}),ZI=L.object({chainId:L.optional(L.number())}),GI=L.object({email:L.string().email()}),KI=L.object({themeMode:L.optional(L.enum(["light","dark"])),themeVariables:L.optional(L.record(L.string(),L.string().or(L.number())))}),YI=L.object({metadata:L.object({name:L.string(),description:L.string(),url:L.string(),icons:L.array(L.string())}).optional(),sdkVersion:L.string(),projectId:L.string()}),QI=L.object({action:L.enum(["VERIFY_DEVICE","VERIFY_OTP"])}),JI=L.object({email:L.string().email(),address:L.string(),chainId:L.number()}),XI=L.object({isConnected:L.boolean()}),ek=L.object({chainId:L.number()}),tk=L.object({chainId:L.number()}),nk=L.object({email:L.string().email()}),rk=L.any(),ik=L.object({method:L.literal("personal_sign"),params:L.array(L.any())}),ok=L.object({method:L.literal("eth_sendTransaction"),params:L.array(L.any())}),sk=L.object({method:L.literal("eth_accounts")}),ak=L.object({method:L.literal("eth_getBalance"),params:L.array(L.any())}),lk=L.object({method:L.literal("eth_estimateGas"),params:L.array(L.any())}),ck=L.object({method:L.literal("eth_gasPrice")}),uk=L.object({method:L.literal("eth_signTypedData_v4"),params:L.array(L.any())}),dk=L.object({method:L.literal("eth_getTransactionByHash"),params:L.array(L.any())}),fk=L.object({method:L.literal("eth_blockNumber")}),hk=L.object({method:L.literal("eth_chainId")}),Ov=L.object({token:L.string()}),Qu={appEvent:L.object({type:$e("APP_SWITCH_NETWORK"),payload:HI}).or(L.object({type:$e("APP_CONNECT_EMAIL"),payload:VI})).or(L.object({type:$e("APP_CONNECT_DEVICE")})).or(L.object({type:$e("APP_CONNECT_OTP"),payload:qI})).or(L.object({type:$e("APP_GET_USER"),payload:L.optional(ZI)})).or(L.object({type:$e("APP_SIGN_OUT")})).or(L.object({type:$e("APP_IS_CONNECTED"),payload:L.optional(Ov)})).or(L.object({type:$e("APP_GET_CHAIN_ID")})).or(L.object({type:$e("APP_RPC_REQUEST"),payload:ik.or(ok).or(sk).or(ak).or(lk).or(ck).or(uk).or(fk).or(hk).or(dk)})).or(L.object({type:$e("APP_UPDATE_EMAIL"),payload:GI})).or(L.object({type:$e("APP_AWAIT_UPDATE_EMAIL")})).or(L.object({type:$e("APP_SYNC_THEME"),payload:KI})).or(L.object({type:$e("APP_SYNC_DAPP_DATA"),payload:YI})),frameEvent:L.object({type:$e("FRAME_SWITCH_NETWORK_ERROR"),payload:Cn}).or(L.object({type:$e("FRAME_SWITCH_NETWORK_SUCCESS"),payload:tk})).or(L.object({type:$e("FRAME_CONNECT_EMAIL_ERROR"),payload:Cn})).or(L.object({type:$e("FRAME_CONNECT_EMAIL_SUCCESS"),payload:QI})).or(L.object({type:$e("FRAME_CONNECT_OTP_ERROR"),payload:Cn})).or(L.object({type:$e("FRAME_CONNECT_OTP_SUCCESS")})).or(L.object({type:$e("FRAME_CONNECT_DEVICE_ERROR"),payload:Cn})).or(L.object({type:$e("FRAME_CONNECT_DEVICE_SUCCESS")})).or(L.object({type:$e("FRAME_GET_USER_ERROR"),payload:Cn})).or(L.object({type:$e("FRAME_GET_USER_SUCCESS"),payload:JI})).or(L.object({type:$e("FRAME_SIGN_OUT_ERROR"),payload:Cn})).or(L.object({type:$e("FRAME_SIGN_OUT_SUCCESS")})).or(L.object({type:$e("FRAME_IS_CONNECTED_ERROR"),payload:Cn})).or(L.object({type:$e("FRAME_IS_CONNECTED_SUCCESS"),payload:XI})).or(L.object({type:$e("FRAME_GET_CHAIN_ID_ERROR"),payload:Cn})).or(L.object({type:$e("FRAME_GET_CHAIN_ID_SUCCESS"),payload:ek})).or(L.object({type:$e("FRAME_RPC_REQUEST_ERROR"),payload:Cn})).or(L.object({type:$e("FRAME_RPC_REQUEST_SUCCESS"),payload:rk})).or(L.object({type:$e("FRAME_SESSION_UPDATE"),payload:Ov})).or(L.object({type:$e("FRAME_UPDATE_EMAIL_ERROR"),payload:Cn})).or(L.object({type:$e("FRAME_UPDATE_EMAIL_SUCCESS")})).or(L.object({type:$e("FRAME_AWAIT_UPDATE_EMAIL_ERROR"),payload:Cn})).or(L.object({type:$e("FRAME_AWAIT_UPDATE_EMAIL_SUCCESS"),payload:nk})).or(L.object({type:$e("FRAME_SYNC_THEME_ERROR"),payload:Cn})).or(L.object({type:$e("FRAME_SYNC_THEME_SUCCESS")})).or(L.object({type:$e("FRAME_SYNC_DAPP_DATA_ERROR"),payload:Cn})).or(L.object({type:$e("FRAME_SYNC_DAPP_DATA_SUCCESS")}))},Sn={set(t,e){localStorage.setItem(`${le.STORAGE_KEY}${t}`,e)},get(t){return localStorage.getItem(`${le.STORAGE_KEY}${t}`)},delete(t){localStorage.removeItem(`${le.STORAGE_KEY}${t}`)}},pk=["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],Ju=30*1e3,ra={getBlockchainApiUrl(){try{const{timeZone:t}=new Intl.DateTimeFormat().resolvedOptions(),e=t.toUpperCase();return pk.includes(e)?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com"}catch{return!1}},checkIfAllowedToTriggerEmail(){const t=Sn.get(le.LAST_EMAIL_LOGIN_TIME);if(t){const e=Date.now()-Number(t);if(e<Ju){const n=Math.ceil((Ju-e)/1e3);throw new Error(`Please try again after ${n} seconds`)}}},getTimeToNextEmailLogin(){const t=Sn.get(le.LAST_EMAIL_LOGIN_TIME);if(t){const e=Date.now()-Number(t);if(e<Ju)return Math.ceil((Ju-e)/1e3)}return 0}};class mk{constructor(e,n=!1){if(this.iframe=null,this.rpcUrl=ra.getBlockchainApiUrl(),this.events={onFrameEvent:r=>{window.addEventListener("message",({data:i})=>{var s;if(!((s=i.type)!=null&&s.includes(le.FRAME_EVENT_KEY)))return;const o=Qu.frameEvent.parse(i);r(o)})},onAppEvent:r=>{window.addEventListener("message",({data:i})=>{var s;if(!((s=i.type)!=null&&s.includes(le.APP_EVENT_KEY)))return;const o=Qu.appEvent.parse(i);r(o)})},postAppEvent:r=>{var i;if(!((i=this.iframe)!=null&&i.contentWindow))throw new Error("W3mFrame: iframe is not set");Qu.appEvent.parse(r),window.postMessage(r),this.iframe.contentWindow.postMessage(r,"*")},postFrameEvent:r=>{if(!parent)throw new Error("W3mFrame: parent is not set");Qu.frameEvent.parse(r),parent.postMessage(r,"*")}},this.projectId=e,this.frameLoadPromise=new Promise((r,i)=>{this.frameLoadPromiseResolver={resolve:r,reject:i}}),n){this.frameLoadPromise=new Promise((i,o)=>{this.frameLoadPromiseResolver={resolve:i,reject:o}});const r=document.createElement("iframe");r.id="w3m-iframe",r.src=`${le.SECURE_SITE_SDK}?projectId=${e}`,r.style.position="fixed",r.style.zIndex="999999",r.style.display="none",r.style.opacity="0",r.style.borderRadius="clamp(0px, var(--wui-border-radius-l), 44px)",document.body.appendChild(r),this.iframe=r,this.iframe.onload=()=>{var i;(i=this.frameLoadPromiseResolver)==null||i.resolve(void 0)},this.iframe.onerror=()=>{var i;(i=this.frameLoadPromiseResolver)==null||i.reject("Unable to load email login dependency")}}}get networks(){const e=[1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,324,280,100,8453,84531,7777777,999].map(n=>({[n]:{rpcUrl:`${this.rpcUrl}/v1/?chainId=eip155:${n}&projectId=${this.projectId}`,chainId:n}}));return Object.assign({},...e)}}class gk{constructor(e){this.connectEmailResolver=void 0,this.connectDeviceResolver=void 0,this.connectOtpResolver=void 0,this.connectResolver=void 0,this.disconnectResolver=void 0,this.isConnectedResolver=void 0,this.getChainIdResolver=void 0,this.switchChainResolver=void 0,this.rpcRequestResolver=void 0,this.updateEmailResolver=void 0,this.awaitUpdateEmailResolver=void 0,this.syncThemeResolver=void 0,this.syncDappDataResolver=void 0,this.w3mFrame=new mk(e,!0),this.w3mFrame.events.onFrameEvent(n=>{switch(console.log("💻 received",n),n.type){case le.FRAME_CONNECT_EMAIL_SUCCESS:return this.onConnectEmailSuccess(n);case le.FRAME_CONNECT_EMAIL_ERROR:return this.onConnectEmailError(n);case le.FRAME_CONNECT_DEVICE_SUCCESS:return this.onConnectDeviceSuccess();case le.FRAME_CONNECT_DEVICE_ERROR:return this.onConnectDeviceError(n);case le.FRAME_CONNECT_OTP_SUCCESS:return this.onConnectOtpSuccess();case le.FRAME_CONNECT_OTP_ERROR:return this.onConnectOtpError(n);case le.FRAME_GET_USER_SUCCESS:return this.onConnectSuccess(n);case le.FRAME_GET_USER_ERROR:return this.onConnectError(n);case le.FRAME_IS_CONNECTED_SUCCESS:return this.onIsConnectedSuccess(n);case le.FRAME_IS_CONNECTED_ERROR:return this.onIsConnectedError(n);case le.FRAME_GET_CHAIN_ID_SUCCESS:return this.onGetChainIdSuccess(n);case le.FRAME_GET_CHAIN_ID_ERROR:return this.onGetChainIdError(n);case le.FRAME_SIGN_OUT_SUCCESS:return this.onSignOutSuccess();case le.FRAME_SIGN_OUT_ERROR:return this.onSignOutError(n);case le.FRAME_SWITCH_NETWORK_SUCCESS:return this.onSwitchChainSuccess(n);case le.FRAME_SWITCH_NETWORK_ERROR:return this.onSwitchChainError(n);case le.FRAME_RPC_REQUEST_SUCCESS:return this.onRpcRequestSuccess(n);case le.FRAME_RPC_REQUEST_ERROR:return this.onRpcRequestError(n);case le.FRAME_SESSION_UPDATE:return this.onSessionUpdate(n);case le.FRAME_UPDATE_EMAIL_SUCCESS:return this.onUpdateEmailSuccess();case le.FRAME_UPDATE_EMAIL_ERROR:return this.onUpdateEmailError(n);case le.FRAME_AWAIT_UPDATE_EMAIL_SUCCESS:return this.onAwaitUpdateEmailSuccess(n);case le.FRAME_AWAIT_UPDATE_EMAIL_ERROR:return this.onAwaitUpdateEmailError(n);case le.FRAME_SYNC_THEME_SUCCESS:return this.onSyncThemeSuccess();case le.FRAME_SYNC_THEME_ERROR:return this.onSyncThemeError(n);case le.FRAME_SYNC_DAPP_DATA_SUCCESS:return this.onSyncDappDataSuccess();case le.FRAME_SYNC_DAPP_DATA_ERROR:return this.onSyncDappDataError(n);default:return null}})}getLoginEmailUsed(){return!!Sn.get(le.EMAIL_LOGIN_USED_KEY)}getEmail(){return Sn.get(le.EMAIL)}async connectEmail(e){return await this.w3mFrame.frameLoadPromise,ra.checkIfAllowedToTriggerEmail(),this.w3mFrame.events.postAppEvent({type:le.APP_CONNECT_EMAIL,payload:e}),new Promise((n,r)=>{this.connectEmailResolver={resolve:n,reject:r}})}async connectDevice(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:le.APP_CONNECT_DEVICE}),new Promise((e,n)=>{this.connectDeviceResolver={resolve:e,reject:n}})}async connectOtp(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:le.APP_CONNECT_OTP,payload:e}),new Promise((n,r)=>{this.connectOtpResolver={resolve:n,reject:r}})}async isConnected(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:le.APP_IS_CONNECTED,payload:void 0}),new Promise((e,n)=>{this.isConnectedResolver={resolve:e,reject:n}})}async getChainId(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:le.APP_GET_CHAIN_ID}),new Promise((e,n)=>{this.getChainIdResolver={resolve:e,reject:n}})}async updateEmail(e){return await this.w3mFrame.frameLoadPromise,ra.checkIfAllowedToTriggerEmail(),this.w3mFrame.events.postAppEvent({type:le.APP_UPDATE_EMAIL,payload:e}),new Promise((n,r)=>{this.updateEmailResolver={resolve:n,reject:r}})}async awaitUpdateEmail(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:le.APP_AWAIT_UPDATE_EMAIL}),new Promise((e,n)=>{this.awaitUpdateEmailResolver={resolve:e,reject:n}})}async syncTheme(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:le.APP_SYNC_THEME,payload:e}),new Promise((n,r)=>{this.syncThemeResolver={resolve:n,reject:r}})}async syncDappData(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:le.APP_SYNC_DAPP_DATA,payload:e}),new Promise((n,r)=>{this.syncDappDataResolver={resolve:n,reject:r}})}async connect(e){const n=(e==null?void 0:e.chainId)??this.getLastUsedChainId()??1;return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:le.APP_GET_USER,payload:{chainId:n}}),new Promise((r,i)=>{this.connectResolver={resolve:r,reject:i}})}async switchNetwork(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:le.APP_SWITCH_NETWORK,payload:{chainId:e}}),new Promise((n,r)=>{this.switchChainResolver={resolve:n,reject:r}})}async disconnect(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:le.APP_SIGN_OUT}),new Promise((e,n)=>{this.disconnectResolver={resolve:e,reject:n}})}async request(e){return await this.w3mFrame.frameLoadPromise,V$.GET_CHAIN_ID===e.method?this.getLastUsedChainId():(this.w3mFrame.events.postAppEvent({type:le.APP_RPC_REQUEST,payload:e}),new Promise((n,r)=>{this.rpcRequestResolver={resolve:n,reject:r}}))}onRpcRequest(e){this.w3mFrame.events.onAppEvent(n=>{n.type.includes(le.RPC_METHOD_KEY)&&e(n)})}onRpcResponse(e){this.w3mFrame.events.onFrameEvent(n=>{n.type.includes(le.RPC_METHOD_KEY)&&e(n)})}onIsConnected(e){this.w3mFrame.events.onFrameEvent(n=>{n.type===le.FRAME_GET_USER_SUCCESS&&e()})}onConnectEmailSuccess(e){var n;(n=this.connectEmailResolver)==null||n.resolve(e.payload),this.setNewLastEmailLoginTime()}onConnectEmailError(e){var n;(n=this.connectEmailResolver)==null||n.reject(e.payload.message)}onConnectDeviceSuccess(){var e;(e=this.connectDeviceResolver)==null||e.resolve(void 0)}onConnectDeviceError(e){var n;(n=this.connectDeviceResolver)==null||n.reject(e.payload.message)}onConnectOtpSuccess(){var e;(e=this.connectOtpResolver)==null||e.resolve(void 0)}onConnectOtpError(e){var n;(n=this.connectOtpResolver)==null||n.reject(e.payload.message)}onConnectSuccess(e){var n;this.setEmailLoginSuccess(e.payload.email),this.setLastUsedChainId(e.payload.chainId),(n=this.connectResolver)==null||n.resolve(e.payload)}onConnectError(e){var n;(n=this.connectResolver)==null||n.reject(e.payload.message)}onIsConnectedSuccess(e){var n;e.payload.isConnected||this.deleteEmailLoginCache(),(n=this.isConnectedResolver)==null||n.resolve(e.payload)}onIsConnectedError(e){var n;(n=this.isConnectedResolver)==null||n.reject(e.payload.message)}onGetChainIdSuccess(e){var n;this.setLastUsedChainId(e.payload.chainId),(n=this.getChainIdResolver)==null||n.resolve(e.payload)}onGetChainIdError(e){var n;(n=this.getChainIdResolver)==null||n.reject(e.payload.message)}onSignOutSuccess(){var e;(e=this.disconnectResolver)==null||e.resolve(void 0),this.deleteEmailLoginCache()}onSignOutError(e){var n;(n=this.disconnectResolver)==null||n.reject(e.payload.message)}onSwitchChainSuccess(e){var n;this.setLastUsedChainId(e.payload.chainId),(n=this.switchChainResolver)==null||n.resolve(e.payload)}onSwitchChainError(e){var n;(n=this.switchChainResolver)==null||n.reject(e.payload.message)}onRpcRequestSuccess(e){var n;(n=this.rpcRequestResolver)==null||n.resolve(e.payload)}onRpcRequestError(e){var n;(n=this.rpcRequestResolver)==null||n.reject(e.payload.message)}onSessionUpdate(e){}onUpdateEmailSuccess(){var e;(e=this.updateEmailResolver)==null||e.resolve(void 0),this.setNewLastEmailLoginTime()}onUpdateEmailError(e){var n;(n=this.updateEmailResolver)==null||n.reject(e.payload.message)}onAwaitUpdateEmailSuccess(e){var n;this.setEmailLoginSuccess(e.payload.email),(n=this.awaitUpdateEmailResolver)==null||n.resolve(e.payload)}onAwaitUpdateEmailError(e){var n;(n=this.awaitUpdateEmailResolver)==null||n.reject(e.payload.message)}onSyncThemeSuccess(){var e;(e=this.syncThemeResolver)==null||e.resolve(void 0)}onSyncThemeError(e){var n;(n=this.syncThemeResolver)==null||n.reject(e.payload.message)}onSyncDappDataSuccess(){var e;(e=this.syncDappDataResolver)==null||e.resolve(void 0)}onSyncDappDataError(e){var n;(n=this.syncDappDataResolver)==null||n.reject(e.payload.message)}setNewLastEmailLoginTime(){Sn.set(le.LAST_EMAIL_LOGIN_TIME,Date.now().toString())}setEmailLoginSuccess(e){Sn.set(le.EMAIL,e),Sn.set(le.EMAIL_LOGIN_USED_KEY,"true"),Sn.delete(le.LAST_EMAIL_LOGIN_TIME)}deleteEmailLoginCache(){Sn.delete(le.EMAIL_LOGIN_USED_KEY),Sn.delete(le.EMAIL),Sn.delete(le.LAST_USED_CHAIN_KEY)}setLastUsedChainId(e){Sn.set(le.LAST_USED_CHAIN_KEY,`${e}`)}getLastUsedChainId(){return Number(Sn.get(le.LAST_USED_CHAIN_KEY))}}var Nh=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};const wk=6;let Oa=class extends G{constructor(){var e;super(...arguments),this.email=(e=ce.state.data)==null?void 0:e.email,this.emailConnector=Ge.getEmailConnector(),this.loading=!1,this.timeoutTimeLeft=ra.getTimeToNextEmailLogin(),this.error="",this.otp=""}firstUpdated(){this.startOTPTimeout()}disconnectedCallback(){clearTimeout(this.OTPTimeout)}render(){if(!this.email)throw new Error("w3m-email-verify-otp-view: No email provided");const e=!!this.timeoutTimeLeft;return $`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["l","0","l","0"]}
        gap="l"
      >
        <wui-flex flexDirection="column" alignItems="center">
          <wui-text variant="paragraph-400" color="fg-100"> Enter the code we sent to </wui-text>
          <wui-text variant="paragraph-500" color="fg-100">${this.email}</wui-text>
        </wui-flex>

        <wui-text variant="small-400" color="fg-200">The code expires in 20 minutes</wui-text>

        ${this.loading?$`<wui-loading-spinner size="xl" color="accent-100"></wui-loading-spinner>`:$` <wui-flex flexDirection="column" alignItems="center" gap="xs">
              <wui-otp
                dissabled
                length="6"
                @inputChange=${this.onOtpInputChange.bind(this)}
                .otp=${this.otp}
              ></wui-otp>
              ${this.error?$`<wui-text variant="small-400" color="error-100"
                    >${this.error}. Try Again</wui-text
                  >`:null}
            </wui-flex>`}

        <wui-flex alignItems="center">
          <wui-text variant="small-400" color="fg-200">Didn't receive it?</wui-text>
          <wui-link @click=${this.onResendCode.bind(this)} .disabled=${e}>
            Resend ${e?`in ${this.timeoutTimeLeft}s`:"Code"}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `}startOTPTimeout(){this.timeoutTimeLeft=ra.getTimeToNextEmailLogin(),this.OTPTimeout=setInterval(()=>{this.timeoutTimeLeft>0?this.timeoutTimeLeft=ra.getTimeToNextEmailLogin():clearInterval(this.OTPTimeout)},1e3)}async onOtpInputChange(e){try{this.loading||(this.otp=e.detail,this.emailConnector&&this.otp.length===wk&&(this.loading=!0,await this.emailConnector.provider.connectOtp({otp:this.otp}),xe.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),await Me.connectExternal(this.emailConnector),Ke.close(),xe.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"email"}})))}catch(n){xe.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"}),this.error=de.parseError(n),this.loading=!1}}async onResendCode(){try{if(!this.loading&&!this.timeoutTimeLeft){this.error="",this.otp="";const e=Ge.getEmailConnector();if(!e||!this.email)throw new Error("w3m-email-login-widget: Unable to resend email");this.loading=!0,await e.provider.connectEmail({email:this.email}),xe.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),this.startOTPTimeout(),pt.showSuccess("Code email resent")}}catch(e){pt.showError(e)}finally{this.loading=!1}}};Oa.styles=H$;Nh([ie()],Oa.prototype,"loading",void 0);Nh([ie()],Oa.prototype,"timeoutTimeLeft",void 0);Nh([ie()],Oa.prototype,"error",void 0);Oa=Nh([q("w3m-email-verify-otp-view")],Oa);const yk=J`
  wui-icon-box {
    height: var(--wui-icon-box-size-xl);
    width: var(--wui-icon-box-size-xl);
  }
`;var r6=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Ef=class extends G{constructor(){var e;super(),this.email=(e=ce.state.data)==null?void 0:e.email,this.emailConnector=Ge.getEmailConnector(),this.loading=!1,this.listenForDeviceApproval()}render(){if(!this.email)throw new Error("w3m-email-verify-device-view: No email provided");if(!this.emailConnector)throw new Error("w3m-email-verify-device-view: No email connector provided");return $`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xxl","s","xxl","s"]}
        gap="l"
      >
        <wui-icon-box
          size="xl"
          iconcolor="accent-100"
          backgroundcolor="accent-100"
          icon="verify"
          background="opaque"
        ></wui-icon-box>

        <wui-flex flexDirection="column" alignItems="center" gap="s">
          <wui-flex flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-400" color="fg-100">
              Approve the login link we sent to
            </wui-text>
            <wui-text variant="paragraph-400" color="fg-100"><b>${this.email}</b></wui-text>
          </wui-flex>

          <wui-text variant="small-400" color="fg-200" align="center">
            The code expires in 20 minutes
          </wui-text>

          <wui-flex alignItems="center" id="w3m-resend-section">
            <wui-text variant="small-400" color="fg-100" align="center">
              Didn't receive it?
            </wui-text>
            <wui-link @click=${this.onResendCode.bind(this)} .disabled=${this.loading}>
              Resend email
            </wui-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}async listenForDeviceApproval(){this.emailConnector&&(await this.emailConnector.provider.connectDevice(),xe.sendEvent({type:"track",event:"DEVICE_REGISTERED_FOR_EMAIL"}),xe.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),ce.replace("EmailVerifyOtp",{email:this.email}))}async onResendCode(){try{if(!this.loading){if(!this.emailConnector||!this.email)throw new Error("w3m-email-login-widget: Unable to resend email");this.loading=!0,await this.emailConnector.provider.connectEmail({email:this.email}),pt.showSuccess("Code email resent")}}catch(e){pt.showError(e)}finally{this.loading=!1}}};Ef.styles=yk;r6([ie()],Ef.prototype,"loading",void 0);Ef=r6([q("w3m-email-verify-device-view")],Ef);const vk=J`
  div {
    width: 100%;
    height: 400px;
  }

  [data-ready='false'] {
    transform: scale(1.05);
  }

  @media (max-width: 430px) {
    [data-ready='false'] {
      transform: translateY(-50px);
    }
  }
`;var i6=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let _f=class extends G{constructor(){super(),this.bodyObserver=void 0,this.unsubscribe=[],this.iframe=document.getElementById("w3m-iframe"),this.ready=!1,this.unsubscribe.push(Ke.subscribeKey("open",e=>{e||this.onHideIframe()}))}disconnectedCallback(){var e;this.unsubscribe.forEach(n=>n()),(e=this.bodyObserver)==null||e.unobserve(window.document.body)}firstUpdated(){this.iframe.style.display="block";const n=this.renderRoot.querySelector("div");this.bodyObserver=new ResizeObserver(()=>{const i=(n==null?void 0:n.getBoundingClientRect())??{left:0,top:0,width:0,height:0};this.iframe.style.width=`${i.width}px`,this.iframe.style.height=`${i.height-10}px`,this.iframe.style.left=`${i.left}px`,this.iframe.style.top=`${i.top+10/2}px`,this.ready=!0}),this.bodyObserver.observe(window.document.body)}render(){return this.ready&&this.onShowIframe(),$`<div data-ready=${this.ready}></div>`}onShowIframe(){const e=window.innerWidth<=430;this.iframe.animate([{opacity:0,transform:e?"translateY(50px)":"scale(.95)"},{opacity:1,transform:e?"translateY(0)":"scale(1)"}],{duration:200,easing:"ease",fill:"forwards",delay:300})}async onHideIframe(){await this.iframe.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished,this.iframe.style.display="none"}};_f.styles=vk;i6([ie()],_f.prototype,"ready",void 0);_f=i6([q("w3m-approve-transaction-view")],_f);var bk=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Dv=class extends G{render(){return $`
      <wui-flex flexDirection="column" alignItems="center" gap="xl" padding="xl">
        <wui-text variant="paragraph-400" color="fg-100">Follow the instructions on</wui-text>
        <wui-chip
          icon="externalLink"
          variant="fill"
          href=${Jr.SECURE_SITE_DASHBOARD}
          imageSrc=${Jr.SECURE_SITE_FAVICON}
        >
        </wui-chip>
        <wui-text variant="small-400" color="fg-200">
          You will have to reconnect for security reasons
        </wui-text>
      </wui-flex>
    `}};Dv=bk([q("w3m-upgrade-wallet-view")],Dv);const xk=J`
  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }
`;var ew=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Vc=class extends G{constructor(){var e;super(...arguments),this.formRef=Eh(),this.initialValue=((e=ce.state.data)==null?void 0:e.email)??"",this.email="",this.loading=!1}firstUpdated(){var e;(e=this.formRef.value)==null||e.addEventListener("keydown",n=>{n.key==="Enter"&&this.onSubmitEmail(n)})}render(){const e=!this.loading&&this.email.length>3&&this.email!==this.initialValue;return $`
      <wui-flex flexDirection="column" padding="m" gap="m">
        <form ${_h(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
          <wui-email-input
            value=${this.initialValue}
            .disabled=${this.loading}
            @inputChange=${this.onEmailInputChange.bind(this)}
          >
          </wui-email-input>
          <input type="submit" hidden />
        </form>

        <wui-flex gap="s">
          <wui-button size="md" variant="shade" fullWidth @click=${ce.goBack}>
            Cancel
          </wui-button>

          <wui-button
            size="md"
            variant="fill"
            fullWidth
            @click=${this.onSubmitEmail.bind(this)}
            .disabled=${!e}
            .loading=${this.loading}
          >
            Save
          </wui-button>
        </wui-flex>
      </wui-flex>
    `}onEmailInputChange(e){this.email=e.detail}async onSubmitEmail(e){try{if(this.loading)return;this.loading=!0,e.preventDefault();const n=Ge.getEmailConnector();if(!n)throw new Error("w3m-update-email-wallet: Email connector not found");await n.provider.updateEmail({email:this.email}),xe.sendEvent({type:"track",event:"EMAIL_EDIT"}),ce.replace("UpdateEmailWalletWaiting",{email:this.email})}catch(n){pt.showError(n),this.loading=!1}}};Vc.styles=xk;ew([ie()],Vc.prototype,"email",void 0);ew([ie()],Vc.prototype,"loading",void 0);Vc=ew([q("w3m-update-email-wallet-view")],Vc);const Ek=J`
  wui-icon-box {
    height: var(--wui-icon-box-size-xl);
    width: var(--wui-icon-box-size-xl);
  }
`;var o6=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Cf=class extends G{constructor(){var e;super(),this.email=(e=ce.state.data)==null?void 0:e.email,this.emailConnector=Ge.getEmailConnector(),this.loading=!1,this.listenForEmailUpdateApproval()}render(){if(!this.email)throw new Error("w3m-update-email-wallet-waiting-view: No email provided");if(!this.emailConnector)throw new Error("w3m-update-email-wallet-waiting-view: No email connector provided");return $`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xxl","s","xxl","s"]}
        gap="l"
      >
        <wui-icon-box
          size="xl"
          iconcolor="accent-100"
          backgroundcolor="accent-100"
          icon="mail"
          background="opaque"
        ></wui-icon-box>

        <wui-flex flexDirection="column" alignItems="center" gap="s">
          <wui-flex flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-400" color="fg-100">
              Approve verification link we sent to
            </wui-text>
            <wui-text variant="paragraph-400" color="fg-100">${this.email}</wui-text>
          </wui-flex>

          <wui-text variant="small-400" color="fg-200" align="center">
            You will receive an approval request on your former mail to confirm the new one
          </wui-text>

          <wui-flex alignItems="center" id="w3m-resend-section">
            <wui-text variant="small-400" color="fg-100" align="center">
              Didn't receive it?
            </wui-text>
            <wui-link @click=${this.onResendCode.bind(this)} .disabled=${this.loading}>
              Resend email
            </wui-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}async listenForEmailUpdateApproval(){this.emailConnector&&(await this.emailConnector.provider.awaitUpdateEmail(),ce.replace("Account"),pt.showSuccess("Email updated"))}async onResendCode(){try{if(!this.loading){if(!this.emailConnector||!this.email)throw new Error("w3m-update-email-wallet-waiting-view: Unable to resend email");this.loading=!0,await this.emailConnector.provider.updateEmail({email:this.email}),this.listenForEmailUpdateApproval(),pt.showSuccess("Code email resent")}}catch(e){pt.showError(e)}finally{this.loading=!1}}};Cf.styles=Ek;o6([ie()],Cf.prototype,"loading",void 0);Cf=o6([q("w3m-update-email-wallet-waiting-view")],Cf);const _k=J`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 76px);
  }

  @media (max-width: 435px) {
    wui-grid {
      grid-template-columns: repeat(auto-fill, 77px);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;function s6(t){const{connectors:e}=Ge.state,n=e.filter(o=>o.type==="ANNOUNCED").reduce((o,s)=>{var a;return(a=s.info)!=null&&a.rdns&&(o[s.info.rdns]=!0),o},{});return t.map(o=>({...o,installed:!!o.rdns&&!!n[o.rdns??""]})).sort((o,s)=>Number(s.installed)-Number(o.installed))}var vu=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};const Rv="local-paginator";let fs=class extends G{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.initial=!De.state.wallets.length,this.wallets=De.state.wallets,this.recommended=De.state.recommended,this.featured=De.state.featured,this.unsubscribe.push(De.subscribeKey("wallets",e=>this.wallets=e),De.subscribeKey("recommended",e=>this.recommended=e),De.subscribeKey("featured",e=>this.featured=e))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){var e;this.unsubscribe.forEach(n=>n()),(e=this.paginationObserver)==null||e.disconnect()}render(){return $`
      <wui-grid
        data-scroll=${!this.initial}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.initial?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){var n;const e=(n=this.shadowRoot)==null?void 0:n.querySelector("wui-grid");this.initial&&e&&(await De.fetchWallets({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.initial=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,n){return[...Array(e)].map(()=>$`
        <wui-card-select-loader type="wallet" id=${Ce(n)}></wui-card-select-loader>
      `)}walletsTemplate(){const e=[...this.featured,...this.recommended,...this.wallets];return s6(e).map(r=>$`
        <wui-card-select
          imageSrc=${Ce(ft.getWalletImage(r))}
          type="wallet"
          name=${r.name}
          @click=${()=>this.onConnectWallet(r)}
          .installed=${r.installed}
        ></wui-card-select>
      `)}paginationLoaderTemplate(){const{wallets:e,recommended:n,featured:r,count:i}=De.state,o=window.innerWidth<352?3:4,s=e.length+n.length;let l=Math.ceil(s/o)*o-s+o;return l-=e.length?r.length%o:0,i===0&&r.length>0?null:i===0||[...r,...e,...n].length<i?this.shimmerTemplate(l,Rv):null}createPaginationObserver(){var n;const e=(n=this.shadowRoot)==null?void 0:n.querySelector(`#${Rv}`);e&&(this.paginationObserver=new IntersectionObserver(([r])=>{if(r!=null&&r.isIntersecting&&!this.initial){const{page:i,count:o,wallets:s}=De.state;s.length<o&&De.fetchWallets({page:i+1})}}),this.paginationObserver.observe(e))}onConnectWallet(e){const{connectors:n}=Ge.state,r=n.find(({explorerId:i})=>i===e.id);r?ce.push("ConnectingExternal",{connector:r}):ce.push("ConnectingWalletConnect",{wallet:e})}};fs.styles=_k;vu([ie()],fs.prototype,"initial",void 0);vu([ie()],fs.prototype,"wallets",void 0);vu([ie()],fs.prototype,"recommended",void 0);vu([ie()],fs.prototype,"featured",void 0);fs=vu([q("w3m-all-wallets-list")],fs);const Ck=J`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }
`;var tw=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let qc=class extends G{constructor(){super(...arguments),this.prevQuery="",this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?$`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query!==this.prevQuery&&(this.prevQuery=this.query,this.loading=!0,await De.searchWallet({search:this.query}),this.loading=!1)}walletsTemplate(){const{search:e}=De.state,n=s6(e);return e.length?$`
      <wui-grid
        .padding=${["0","s","s","s"]}
        gridTemplateColumns="repeat(4, 1fr)"
        rowGap="l"
        columnGap="xs"
      >
        ${n.map(r=>$`
            <wui-card-select
              imageSrc=${Ce(ft.getWalletImage(r))}
              type="wallet"
              name=${r.name}
              @click=${()=>this.onConnectWallet(r)}
              .installed=${r.installed}
            ></wui-card-select>
          `)}
      </wui-grid>
    `:$`
        <wui-flex justifyContent="center" alignItems="center" gap="s" flexDirection="column">
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text color="fg-200" variant="paragraph-500">No Wallet found</wui-text>
        </wui-flex>
      `}onConnectWallet(e){const{connectors:n}=Ge.state,r=n.find(({explorerId:i})=>i===e.id);r?ce.push("ConnectingExternal",{connector:r}):ce.push("ConnectingWalletConnect",{wallet:e})}};qc.styles=Ck;tw([ie()],qc.prototype,"loading",void 0);tw([I()],qc.prototype,"query",void 0);qc=tw([q("w3m-all-wallets-search")],qc);var Mh=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Zc=class extends G{constructor(){super(),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0,this.buffering=!1,this.unsubscribe.push(Me.subscribeKey("buffering",e=>this.buffering=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.generateTabs();return $`
      <wui-flex justifyContent="center" .padding=${["l","0","0","0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${e}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `}generateTabs(){const e=this.platforms.map(n=>n==="browser"?{label:"Browser",icon:"extension",platform:"browser"}:n==="mobile"?{label:"Mobile",icon:"mobile",platform:"mobile"}:n==="qrcode"?{label:"Mobile",icon:"mobile",platform:"qrcode"}:n==="web"?{label:"Webapp",icon:"browser",platform:"web"}:n==="desktop"?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=e.map(({platform:n})=>n),e}onTabChange(e){var r;const n=this.platformTabs[e];n&&((r=this.onSelectPlatfrom)==null||r.call(this,n))}};Mh([I({type:Array})],Zc.prototype,"platforms",void 0);Mh([I()],Zc.prototype,"onSelectPlatfrom",void 0);Mh([ie()],Zc.prototype,"buffering",void 0);Zc=Mh([q("w3m-connecting-header")],Zc);var Sk=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Nv=class extends bn{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),xe.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){try{this.error=!1;const{connectors:e}=Ge.state,n=e.find(i=>{var o,s;return i.type==="ANNOUNCED"&&((o=i.info)==null?void 0:o.rdns)===((s=this.wallet)==null?void 0:s.rdns)}),r=e.find(i=>i.type==="INJECTED");n?await Me.connectExternal(n):r&&await Me.connectExternal(r),Ke.close(),xe.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser"}})}catch(e){xe.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(e==null?void 0:e.message)??"Unknown"}}),this.error=!0}}};Nv=Sk([q("w3m-connecting-wc-browser")],Nv);var Ak=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Mv=class extends bn{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),xe.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.timeout=setTimeout(()=>{var e;(e=this.onConnect)==null||e.call(this)},200))}onConnectProxy(){var e;if((e=this.wallet)!=null&&e.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:n,name:r}=this.wallet,{redirect:i,href:o}=de.formatNativeUrl(n,this.uri);Me.setWcLinking({name:r,href:o}),Me.setRecentWallet(this.wallet),de.openHref(i,"_blank")}catch{this.error=!0}}};Mv=Ak([q("w3m-connecting-wc-desktop")],Mv);var Tk=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Lv=class extends bn{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),document.addEventListener("visibilitychange",this.onBuffering.bind(this)),xe.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onBuffering.bind(this))}onRenderProxy(){var e;!this.ready&&this.uri&&(this.ready=!0,(e=this.onConnect)==null||e.call(this))}onConnectProxy(){var e;if((e=this.wallet)!=null&&e.mobile_link&&this.uri)try{this.error=!1;const{mobile_link:n,name:r}=this.wallet,{redirect:i,href:o}=de.formatNativeUrl(n,this.uri);Me.setWcLinking({name:r,href:o}),Me.setRecentWallet(this.wallet),de.openHref(i,"_self")}catch{this.error=!0}}onBuffering(){const e=de.isIos();(document==null?void 0:document.visibilityState)==="visible"&&!this.error&&e&&(Me.setBuffering(!0),setTimeout(()=>{Me.setBuffering(!1)},5e3))}};Lv=Tk([q("w3m-connecting-wc-mobile")],Lv);const Pk=J`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;var $k=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let L1=class extends bn{constructor(){var e;super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),xe.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:((e=this.wallet)==null?void 0:e.name)??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),$`
      <wui-flex padding="xl" flexDirection="column" gap="xl" alignItems="center">
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>
        ${this.copyTemplate()}
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const e=this.getBoundingClientRect().width-40,n=this.wallet?this.wallet.name:void 0;return Me.setWcLinking(void 0),Me.setRecentWallet(this.wallet),$` <wui-qr-code
      size=${e}
      theme=${cn.state.themeMode}
      uri=${this.uri}
      imageSrc=${Ce(ft.getWalletImage(this.wallet))}
      alt=${Ce(n)}
    ></wui-qr-code>`}copyTemplate(){const e=!this.uri||!this.ready;return $`<wui-link
      .disabled=${e}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}};L1.styles=Pk;L1=$k([q("w3m-connecting-wc-qrcode")],L1);const Ik=J`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;var kk=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let U1=class extends G{constructor(){var e;super(...arguments),this.dappImageUrl=(e=We.state.metadata)==null?void 0:e.icons,this.walletImageUrl=Xt.getConnectedWalletImageUrl()}firstUpdated(){var n;const e=(n=this.shadowRoot)==null?void 0:n.querySelectorAll("wui-visual-thumbnail");e!=null&&e[0]&&this.createAnimation(e[0],"translate(18px)"),e!=null&&e[1]&&this.createAnimation(e[1],"translate(-18px)")}render(){var e;return $`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${(e=this.dappImageUrl)==null?void 0:e[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(e,n){e.animate([{transform:"translateX(0px)"},{transform:n}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};U1.styles=Ik;U1=kk([q("w3m-connecting-siwe")],U1);var Ok=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Uv=class extends G{constructor(){var e;if(super(),this.wallet=(e=ce.state.data)==null?void 0:e.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");xe.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return $`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${Ce(ft.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};Uv=Ok([q("w3m-connecting-wc-unsupported")],Uv);var Dk=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let jv=class extends bn{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel="Open and continue in a new browser tab",this.secondaryBtnIcon="externalLink",xe.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}onConnectProxy(){var e;if((e=this.wallet)!=null&&e.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:n,name:r}=this.wallet,{redirect:i,href:o}=de.formatUniversalUrl(n,this.uri);Me.setWcLinking({name:r,href:o}),Me.setRecentWallet(this.wallet),de.openHref(i,"_blank")}catch{this.error=!0}}};jv=Dk([q("w3m-connecting-wc-web")],jv);const Rk=J`
  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }
`;var Lh=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};function Bv(){var s,a,l,c,u,d,p;const t=(a=(s=ce.state.data)==null?void 0:s.connector)==null?void 0:a.name,e=(c=(l=ce.state.data)==null?void 0:l.wallet)==null?void 0:c.name,n=(d=(u=ce.state.data)==null?void 0:u.network)==null?void 0:d.name,r=e??t,i=Ge.getConnectors();return{Connect:`Connect ${i.length===1&&((p=i[0])==null?void 0:p.id)==="w3m-email"?"Email":""} Wallet`,Account:void 0,ConnectingExternal:r??"Connect Wallet",ConnectingWalletConnect:r??"WalletConnect",ConnectingSiwe:"Sign In",Networks:"Choose Network",SwitchNetwork:n??"Switch Network",AllWallets:"All Wallets",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",GetWallet:"Get a wallet",Downloads:r?`Get ${r}`:"Downloads",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",ApproveTransaction:"Approve Transaction",Transactions:"Activity",UpgradeEmailWallet:"Upgrade your Wallet",UpdateEmailWallet:"Edit Email",UpdateEmailWalletWaiting:"Approve Email"}}let Da=class extends G{constructor(){super(),this.unsubscribe=[],this.heading=Bv()[ce.state.view],this.buffering=!1,this.showBack=!1,this.unsubscribe.push(ce.subscribeKey("view",e=>{this.onViewChange(e),this.onHistoryChange()}),Me.subscribeKey("buffering",e=>this.buffering=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){return $`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.dynamicButtonTemplate()} ${this.titleTemplate()}
        <wui-icon-link
          ?disabled=${this.buffering}
          icon="close"
          @click=${this.onClose.bind(this)}
          data-testid="w3m-header-close"
        ></wui-icon-link>
      </wui-flex>
      ${this.separatorTemplate()}
    `}onWalletHelp(){xe.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),ce.push("WhatIsAWallet")}async onClose(){wt.state.isSiweEnabled&&wt.state.status!=="success"&&await Me.disconnect(),Ke.close()}titleTemplate(){return $`<wui-text variant="paragraph-700" color="fg-100">${this.heading}</wui-text>`}dynamicButtonTemplate(){const{view:e}=ce.state,n=e==="Connect",r=e==="ApproveTransaction";return this.showBack&&!r?$`<wui-icon-link
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-link>`:$`<wui-icon-link
      data-hidden=${!n}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}separatorTemplate(){return this.heading?$`<wui-separator></wui-separator>`:null}getPadding(){return this.heading?["l","2l","l","2l"]:["l","2l","0","2l"]}async onViewChange(e){var r;const n=(r=this.shadowRoot)==null?void 0:r.querySelector("wui-text");if(n){const i=Bv()[e];await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.heading=i,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})}}async onHistoryChange(){var r;const{history:e}=ce.state,n=(r=this.shadowRoot)==null?void 0:r.querySelector("#dynamic");e.length>1&&!this.showBack&&n?(await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):e.length<=1&&this.showBack&&n&&(await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}onGoBack(){ce.state.view==="ConnectingSiwe"?ce.push("Connect"):ce.goBack()}};Da.styles=[Rk];Lh([ie()],Da.prototype,"heading",void 0);Lh([ie()],Da.prototype,"buffering",void 0);Lh([ie()],Da.prototype,"showBack",void 0);Da=Lh([q("w3m-header")],Da);var a6=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let j1=class extends G{constructor(){super(...arguments),this.data=[]}render(){return $`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map(e=>$`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${e.images.map(n=>$`<wui-visual name=${n}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${e.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${e.text}</wui-text>
            </wui-flex>
          `)}
      </wui-flex>
    `}};a6([I({type:Array})],j1.prototype,"data",void 0);j1=a6([q("w3m-help-widget")],j1);const Nk=J`
  wui-flex {
    background-color: var(--wui-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
  }
`;var Mk=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let B1=class extends G{render(){const{termsConditionsUrl:e,privacyPolicyUrl:n}=We.state;return!e&&!n?null:$`
      <wui-flex .padding=${["m","s","s","s"]} justifyContent="center">
        <wui-text color="fg-250" variant="small-400" align="center">
          By connecting your wallet, you agree to our <br />
          ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-flex>
    `}andTemplate(){const{termsConditionsUrl:e,privacyPolicyUrl:n}=We.state;return e&&n?"and":""}termsTemplate(){const{termsConditionsUrl:e}=We.state;return e?$`<a href=${e}>Terms of Service</a>`:null}privacyTemplate(){const{privacyPolicyUrl:e}=We.state;return e?$`<a href=${e}>Privacy Policy</a>`:null}};B1.styles=[Nk];B1=Mk([q("w3m-legal-footer")],B1);const Lk=J`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`;var l6=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Sf=class extends G{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:e,app_store:n,play_store:r,chrome_store:i,homepage:o}=this.wallet,s=de.isMobile(),a=de.isIos(),l=de.isAndroid(),c=[n,r,o,i].filter(Boolean).length>1,u=He.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return c&&!s?$`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${()=>ce.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!c&&o?$`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:n&&a?$`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:r&&l?$`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){var e;(e=this.wallet)!=null&&e.app_store&&de.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var e;(e=this.wallet)!=null&&e.play_store&&de.openHref(this.wallet.play_store,"_blank")}onHomePage(){var e;(e=this.wallet)!=null&&e.homepage&&de.openHref(this.wallet.homepage,"_blank")}};Sf.styles=[Lk];l6([I({type:Object})],Sf.prototype,"wallet",void 0);Sf=l6([q("w3m-mobile-download-links")],Sf);const Uk=J`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`;var c6=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};const jk={success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}};let Af=class extends G{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=pt.state.open,this.unsubscribe.push(pt.subscribeKey("open",e=>{this.open=e,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(e=>e())}render(){const{message:e,variant:n}=pt.state,r=jk[n];return $`
      <wui-snackbar
        message=${e}
        backgroundColor=${r.backgroundColor}
        iconColor=${r.iconColor}
        icon=${r.icon}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout=setTimeout(()=>pt.hide(),2500)):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};Af.styles=Uk;c6([ie()],Af.prototype,"open",void 0);Af=c6([q("w3m-snackbar")],Af);const Bk=J`
  wui-separator {
    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }

  wui-icon-link,
  wui-loading-spinner {
    position: absolute;
    top: 21px;
    transform: translateY(-50%);
  }

  wui-icon-link {
    right: var(--wui-spacing-xs);
  }

  wui-loading-spinner {
    right: var(--wui-spacing-m);
  }

  .alphaBanner {
    padding: 10px 12px 10px 10px;
    border-radius: var(--wui-border-radius-s);
    background: var(--wui-accent-glass-010);
    margin-bottom: var(--wui-spacing-s);
  }
`;var bu=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let hs=class extends G{constructor(){super(),this.unsubscribe=[],this.formRef=Eh(),this.connectors=Ge.state.connectors,this.email="",this.loading=!1,this.error="",this.unsubscribe.push(Ge.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){var e;(e=this.formRef.value)==null||e.addEventListener("keydown",n=>{n.key==="Enter"&&this.onSubmitEmail(n)})}render(){const e=this.connectors.length>1;return this.connectors.find(r=>r.type==="EMAIL")?$`
      ${this.alphaWarningTemplate()}
      <form ${_h(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          @focus=${this.onFocusEvent.bind(this)}
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
          .errorMessage=${this.error}
        >
        </wui-email-input>

        ${this.submitButtonTemplate()}${this.loadingTemplate()}
        <input type="submit" hidden />
      </form>

      ${e?$`<wui-separator text="or"></wui-separator>`:null}
    `:null}alphaWarningTemplate(){return $`
          <wui-flex class="alphaBanner" gap="xs" alignItems="center" justifyContent="center">
            <wui-icon-box
              size="sm"
              icon="alpha"
              iconColor="accent-100"
              background="opaque"
              backgroundColor="accent-100"
            ></wui-icon-box>
            <wui-text variant="small-400" color="accent-100">
              This is an alpha version to test before launch
            </wui-text>
          </wui-flex>
        `}submitButtonTemplate(){return!this.loading&&this.email.length>3?$`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitEmail.bind(this)}
          >
          </wui-icon-link>
        `:null}loadingTemplate(){return this.loading?$`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:null}onEmailInputChange(e){this.email=e.detail,this.error=""}async onSubmitEmail(e){try{if(this.loading)return;this.loading=!0,e.preventDefault();const n=Ge.getEmailConnector();if(!n)throw new Error("w3m-email-login-widget: Email connector not found");const{action:r}=await n.provider.connectEmail({email:this.email});xe.sendEvent({type:"track",event:"EMAIL_SUBMITTED"}),r==="VERIFY_OTP"?(xe.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),ce.push("EmailVerifyOtp",{email:this.email})):r==="VERIFY_DEVICE"&&ce.push("EmailVerifyDevice",{email:this.email})}catch(n){const r=de.parseError(n);r!=null&&r.includes("Invalid email")?this.error="Invalid email. Try again.":pt.showError(n)}finally{this.loading=!1}}onFocusEvent(){xe.sendEvent({type:"track",event:"EMAIL_LOGIN_SELECTED"})}};hs.styles=Bk;bu([ie()],hs.prototype,"connectors",void 0);bu([ie()],hs.prototype,"email",void 0);bu([ie()],hs.prototype,"loading",void 0);bu([ie()],hs.prototype,"error",void 0);hs=bu([q("w3m-email-login-widget")],hs);let Fv=!1;class Fk{constructor(e){this.initPromise=void 0,this.setIsConnected=n=>{je.setIsConnected(n)},this.setCaipAddress=n=>{je.setCaipAddress(n)},this.setBalance=(n,r)=>{je.setBalance(n,r)},this.setProfileName=n=>{je.setProfileName(n)},this.setProfileImage=n=>{je.setProfileImage(n)},this.resetAccount=()=>{je.resetAccount()},this.setCaipNetwork=n=>{ht.setCaipNetwork(n)},this.getCaipNetwork=()=>ht.state.caipNetwork,this.setRequestedCaipNetworks=n=>{ht.setRequestedCaipNetworks(n)},this.getApprovedCaipNetworksData=()=>ht.getApprovedCaipNetworksData(),this.resetNetwork=()=>{ht.resetNetwork()},this.setConnectors=n=>{Ge.setConnectors(n)},this.addConnector=n=>{Ge.addConnector(n)},this.getConnectors=()=>Ge.getConnectors(),this.resetWcConnection=()=>{Me.resetWcConnection()},this.fetchIdentity=n=>X5.fetchIdentity(n),this.setAddressExplorerUrl=n=>{je.setAddressExplorerUrl(n)},this.setSIWENonce=n=>{wt.setNonce(n)},this.setSIWESession=n=>{wt.setSession(n)},this.setSIWEStatus=n=>{wt.setStatus(n)},this.setSIWEMessage=n=>{wt.setMessage(n)},this.initControllers(e),this.initOrContinue()}async open(e){await this.initOrContinue(),Ke.open(e)}async close(){await this.initOrContinue(),Ke.close()}setLoading(e){Ke.setLoading(e)}getThemeMode(){return cn.state.themeMode}getThemeVariables(){return cn.state.themeVariables}setThemeMode(e){cn.setThemeMode(e),Mg(cn.state.themeMode);try{const n=Ge.getEmailConnector();n&&n.provider.syncTheme({themeMode:cn.getSnapshot().themeMode})}catch{console.info("Unable to sync theme to email connector")}}setThemeVariables(e){cn.setThemeVariables(e),u4(cn.state.themeVariables);try{const n=Ge.getEmailConnector();n&&n.provider.syncTheme({themeVariables:cn.getSnapshot().themeVariables})}catch{console.info("Unable to sync theme to email connector")}}subscribeTheme(e){return cn.subscribe(e)}getState(){return{...ma.state}}subscribeState(e){return ma.subscribe(e)}getEvent(){return{...xe.state}}subscribeEvents(e){return xe.subscribe(e)}subscribeSIWEState(e){return wt.subscribe(e)}initControllers(e){if(ht.setClient(e.networkControllerClient),ht.setDefaultCaipNetwork(e.defaultChain),We.setProjectId(e.projectId),We.setIncludeWalletIds(e.includeWalletIds),We.setExcludeWalletIds(e.excludeWalletIds),We.setFeaturedWalletIds(e.featuredWalletIds),We.setTokens(e.tokens),We.setTermsConditionsUrl(e.termsConditionsUrl),We.setPrivacyPolicyUrl(e.privacyPolicyUrl),We.setCustomWallets(e.customWallets),We.setEnableAnalytics(e.enableAnalytics),We.setSdkVersion(e._sdkVersion),Me.setClient(e.connectionControllerClient),e.siweControllerClient){const n=e.siweControllerClient;wt.setSIWEClient(n)}e.metadata&&We.setMetadata(e.metadata),e.themeMode&&cn.setThemeMode(e.themeMode),e.themeVariables&&cn.setThemeVariables(e.themeVariables)}async initOrContinue(){return!this.initPromise&&!Fv&&de.isClient()&&(Fv=!0,this.initPromise=new Promise(async e=>{await Promise.all([ha(()=>Promise.resolve().then(()=>E$),void 0),ha(()=>Promise.resolve().then(()=>S$),void 0)]);const n=document.createElement("w3m-modal");document.body.insertAdjacentElement("beforeend",n),e()})),this.initPromise}}const be={WALLET_CONNECT_CONNECTOR_ID:"walletConnect",INJECTED_CONNECTOR_ID:"injected",COINBASE_CONNECTOR_ID:"coinbaseWallet",SAFE_CONNECTOR_ID:"safe",LEDGER_CONNECTOR_ID:"ledger",EIP6963_CONNECTOR_ID:"eip6963",EMAIL_CONNECTOR_ID:"w3mEmail",EIP155:"eip155",ADD_CHAIN_METHOD:"wallet_addEthereumChain",EIP6963_ANNOUNCE_EVENT:"eip6963:announceProvider",EIP6963_REQUEST_EVENT:"eip6963:requestProvider",VERSION:"3.5.7"},Zr={ConnectorExplorerIds:{[be.COINBASE_CONNECTOR_ID]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[be.SAFE_CONNECTOR_ID]:"225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",[be.LEDGER_CONNECTOR_ID]:"19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927"},EIP155NetworkImageIds:{1:"692ed6ba-e569-459a-556a-776476829e00",42161:"600a9a04-c1b9-42ca-6785-9b4b6ff85200",43114:"30c46e53-e989-45fb-4549-be3bd4eb3b00",56:"93564157-2e8e-4ce7-81df-b264dbee9b00",250:"06b26297-fe0c-4733-5d6b-ffa5498aac00",10:"ab9c186a-c52f-464b-2906-ca59d760a400",137:"41d04d42-da3b-4453-8506-668cc0727900",100:"02b53f6a-e3d4-479e-1cb4-21178987d100",9001:"f926ff41-260d-4028-635e-91913fc28e00",324:"b310f07f-4ef7-49f3-7073-2a0a39685800",314:"5a73b3dd-af74-424e-cae0-0de859ee9400",4689:"34e68754-e536-40da-c153-6ef2e7188a00",1088:"3897a66d-40b9-4833-162f-a2c90531c900",1284:"161038da-44ae-4ec7-1208-0ea569454b00",1285:"f1d73bb6-5450-4e18-38f7-fb6484264a00",7777777:"845c60df-d429-4991-e687-91ae45791600",42220:"ab781bbc-ccc6-418d-d32d-789b15da1f00",8453:"7289c336-3981-4081-c5f4-efc26ac64a00",1313161554:"3ff73439-a619-4894-9262-4470c773a100"},ConnectorImageIds:{[be.COINBASE_CONNECTOR_ID]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[be.SAFE_CONNECTOR_ID]:"461db637-8616-43ce-035a-d89b8a1d5800",[be.LEDGER_CONNECTOR_ID]:"54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",[be.WALLET_CONNECT_CONNECTOR_ID]:"ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",[be.INJECTED_CONNECTOR_ID]:"07ba87ed-43aa-4adf-4540-9e6a2b9cae00"},ConnectorNamesMap:{[be.INJECTED_CONNECTOR_ID]:"Browser Wallet",[be.WALLET_CONNECT_CONNECTOR_ID]:"WalletConnect",[be.COINBASE_CONNECTOR_ID]:"Coinbase",[be.LEDGER_CONNECTOR_ID]:"Ledger",[be.SAFE_CONNECTOR_ID]:"Safe"},ConnectorTypesMap:{[be.INJECTED_CONNECTOR_ID]:"INJECTED",[be.WALLET_CONNECT_CONNECTOR_ID]:"WALLET_CONNECT",[be.EIP6963_CONNECTOR_ID]:"ANNOUNCED",[be.EMAIL_CONNECTOR_ID]:"EMAIL"},WalletConnectRpcChainIds:[1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,100,8453,84531,7777777,999,324,280]},Ss={caipNetworkIdToNumber(t){return t?Number(t.split(":")[1]):void 0},getCaipTokens(t){if(!t)return;const e={};return Object.entries(t).forEach(([n,r])=>{e[`${be.EIP155}:${n}`]=r}),e}};function Wk(t){if(t)return{id:`${be.EIP155}:${t.id}`,name:t.name,imageId:Zr.EIP155NetworkImageIds[t.id]}}const zk="wagmi.wallet";class Hk extends Fk{constructor(e){const{wagmiConfig:n,siweConfig:r,chains:i,defaultChain:o,tokens:s,_sdkVersion:a,...l}=e;if(!n)throw new Error("web3modal:constructor - wagmiConfig is undefined");if(!l.projectId)throw new Error("web3modal:constructor - projectId is undefined");const c={switchCaipNetwork:async d=>{const p=Ss.caipNetworkIdToNumber(d==null?void 0:d.id);p&&await oS({chainId:p})},async getApprovedCaipNetworksData(){var p,w,y,E;const d=localStorage.getItem(zk);if(d!=null&&d.includes(be.EMAIL_CONNECTOR_ID))return{supportsAllNetworks:!1,approvedCaipNetworkIds:Zr.WalletConnectRpcChainIds.map(C=>`${be.EIP155}:${C}`)};if(d!=null&&d.includes(be.WALLET_CONNECT_CONNECTOR_ID)){const C=n.connectors.find(_=>_.id===be.WALLET_CONNECT_CONNECTOR_ID);if(!C)throw new Error("networkControllerClient:getApprovedCaipNetworks - connector is undefined");const m=(w=(p=(await C.getProvider()).signer)==null?void 0:p.session)==null?void 0:w.namespaces,v=(y=m==null?void 0:m[be.EIP155])==null?void 0:y.methods,x=(E=m==null?void 0:m[be.EIP155])==null?void 0:E.chains;return{supportsAllNetworks:v==null?void 0:v.includes(be.ADD_CHAIN_METHOD),approvedCaipNetworkIds:x}}return{approvedCaipNetworkIds:void 0,supportsAllNetworks:!0}}},u={connectWalletConnect:async d=>{var y;const p=n.connectors.find(E=>E.id===be.WALLET_CONNECT_CONNECTOR_ID);if(!p)throw new Error("connectionControllerClient:getWalletConnectUri - connector is undefined");p.on("message",E=>{E.type==="display_uri"&&(d(E.data),p.removeAllListeners())});const w=Ss.caipNetworkIdToNumber((y=this.getCaipNetwork())==null?void 0:y.id);await nv({connector:p,chainId:w})},connectExternal:async({id:d,provider:p,info:w})=>{var C,b;const y=n.connectors.find(m=>m.id===d);if(!y)throw new Error("connectionControllerClient:connectExternal - connector is undefined");p&&w&&y.id===be.EIP6963_CONNECTOR_ID&&((C=y.setEip6963Wallet)==null||C.call(y,{provider:p,info:w}));const E=Ss.caipNetworkIdToNumber((b=this.getCaipNetwork())==null?void 0:b.id);await nv({connector:y,chainId:E})},checkInstalled:d=>{const p=this.getConnectors().filter(y=>y.type==="ANNOUNCED"),w=this.getConnectors().find(y=>y.type==="INJECTED");return d?p.length&&d.some(E=>p.some(C=>{var b;return((b=C.info)==null?void 0:b.rdns)===E}))?!0:w&&window!=null&&window.ethereum?d.some(y=>{var E;return!!((E=window.ethereum)!=null&&E[String(y)])}):!1:!!window.ethereum},disconnect:async()=>{var d;await Y9(),(d=r==null?void 0:r.options)!=null&&d.signOutOnDisconnect&&await r.signOut()},signMessage:async d=>iS({message:d})};super({networkControllerClient:c,connectionControllerClient:u,siweControllerClient:r,defaultChain:Wk(o),tokens:Ss.getCaipTokens(s),_sdkVersion:a??`html-wagmi-${be.VERSION}`,...l}),this.hasSyncedConnectedAccount=!1,this.options=void 0,this.options=e,this.syncRequestedNetworks(i),this.syncConnectors(n),this.syncEmailConnector(n),this.listenEIP6963Connector(n),this.listenEmailConnector(n),sS(()=>this.syncAccount()),aS(()=>this.syncNetwork())}getState(){const e=super.getState();return{...e,selectedNetworkId:Ss.caipNetworkIdToNumber(e.selectedNetworkId)}}subscribeState(e){return super.subscribeState(n=>e({...n,selectedNetworkId:Ss.caipNetworkIdToNumber(n.selectedNetworkId)}))}syncRequestedNetworks(e){const n=e==null?void 0:e.map(r=>{var i,o;return{id:`${be.EIP155}:${r.id}`,name:r.name,imageId:Zr.EIP155NetworkImageIds[r.id],imageUrl:(o=(i=this.options)==null?void 0:i.chainImages)==null?void 0:o[r.id]}});this.setRequestedCaipNetworks(n??[])}async syncAccount(){const{address:e,isConnected:n}=E1(),{chain:r}=_1();if(this.resetAccount(),n&&e&&r){const i=`${be.EIP155}:${r.id}:${e}`;this.setIsConnected(n),this.setCaipAddress(i),await Promise.all([this.syncProfile(e,r),this.syncBalance(e,r),this.getApprovedCaipNetworksData()]),this.hasSyncedConnectedAccount=!0}else!n&&this.hasSyncedConnectedAccount&&(this.resetWcConnection(),this.resetNetwork())}async syncNetwork(){var i,o,s,a;const{address:e,isConnected:n}=E1(),{chain:r}=_1();if(r){const l=String(r.id),c=`${be.EIP155}:${l}`;if(this.setCaipNetwork({id:c,name:r.name,imageId:Zr.EIP155NetworkImageIds[r.id],imageUrl:(o=(i=this.options)==null?void 0:i.chainImages)==null?void 0:o[r.id]}),n&&e){const u=`${be.EIP155}:${r.id}:${e}`;if(this.setCaipAddress(u),(a=(s=r.blockExplorers)==null?void 0:s.default)!=null&&a.url){const d=`${r.blockExplorers.default.url}/address/${e}`;this.setAddressExplorerUrl(d)}else this.setAddressExplorerUrl(void 0);this.hasSyncedConnectedAccount&&(await this.syncProfile(e,r),await this.syncBalance(e,r))}}}async syncProfile(e,n){if(n.id!==Pg.id){this.setProfileName(null),this.setProfileImage(null);return}try{const{name:r,avatar:i}=await this.fetchIdentity({caipChainId:`${be.EIP155}:${n.id}`,address:e});this.setProfileName(r),this.setProfileImage(i)}catch{const r=await cS({address:e,chainId:n.id});if(r){this.setProfileName(r);const i=await lS({name:r,chainId:n.id});i&&this.setProfileImage(i)}}}async syncBalance(e,n){var i,o,s;const r=await rS({address:e,chainId:n.id,token:(s=(o=(i=this.options)==null?void 0:i.tokens)==null?void 0:o[n.id])==null?void 0:s.address});this.setBalance(r.formatted,r.symbol)}syncConnectors(e){const n=[];e.connectors.forEach(({id:r,name:i})=>{var o,s;[be.EIP6963_CONNECTOR_ID,be.EMAIL_CONNECTOR_ID].includes(r)||n.push({id:r,explorerId:Zr.ConnectorExplorerIds[r],imageId:Zr.ConnectorImageIds[r],imageUrl:(s=(o=this.options)==null?void 0:o.connectorImages)==null?void 0:s[r],name:Zr.ConnectorNamesMap[r]??i,type:Zr.ConnectorTypesMap[r]??"EXTERNAL"})}),this.setConnectors(n)}async syncEmailConnector(e){const n=e.connectors.find(({id:r})=>r==="w3mEmail");if(n){const r=await n.getProvider();this.addConnector({id:be.EMAIL_CONNECTOR_ID,type:"EMAIL",name:"Email",provider:r})}}eip6963EventHandler(e,n){var r,i;if(n.detail){const{info:o,provider:s}=n.detail;this.getConnectors().find(c=>c.name===o.name)||(this.addConnector({id:be.EIP6963_CONNECTOR_ID,type:"ANNOUNCED",imageUrl:o.icon??((i=(r=this.options)==null?void 0:r.connectorImages)==null?void 0:i[be.EIP6963_CONNECTOR_ID]),name:o.name,provider:s,info:o}),e.isAuthorized({info:o,provider:s}))}}listenEIP6963Connector(e){const n=e.connectors.find(r=>r.id===be.EIP6963_CONNECTOR_ID);if(typeof window<"u"&&n){const r=this.eip6963EventHandler.bind(this,n);window.addEventListener(be.EIP6963_ANNOUNCE_EVENT,r),window.dispatchEvent(new Event(be.EIP6963_REQUEST_EVENT))}}async listenEmailConnector(e){const n=e.connectors.find(r=>r.id===be.EMAIL_CONNECTOR_ID);if(typeof window<"u"&&n){super.setLoading(!0);const r=await n.getProvider(),i=r.getLoginEmailUsed();super.setLoading(i),r.onRpcRequest(()=>{super.open({view:"ApproveTransaction"})}),r.onRpcResponse(()=>{super.close()}),r.onIsConnected(()=>{super.setLoading(!1)})}}}var Xu=function(t,e,n,r,i){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!i)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?t!==e||!i:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?i.call(t,n):i?i.value=n:e.set(t,n),n},_o=function(t,e,n,r){if(n==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?t!==e||!r:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return n==="m"?r:n==="a"?r.call(t):r?r.value:e.get(t)},yd,Jn;const ed="connectedRdns";class Vk extends Ig{constructor(e){super({chains:e.chains,options:{shimDisconnect:!0}}),this.id="eip6963",this.name="EIP6963",yd.set(this,void 0),Jn.set(this,void 0),this.onAccountsChanged=n=>{var r;n.length===0?((r=this.storage)==null||r.removeItem(ed),this.emit("disconnect")):n[0]&&this.emit("change",{account:Fn(n[0])})},Xu(this,yd,this.options.getProvider(),"f")}async connect(e){var r;const n=await super.connect(e);return _o(this,Jn,"f")&&((r=this.storage)==null||r.setItem(ed,_o(this,Jn,"f").info.rdns)),n}async disconnect(){var e;await super.disconnect(),(e=this.storage)==null||e.removeItem(ed),Xu(this,Jn,void 0,"f")}async isAuthorized(e){var r;const n=(r=this.storage)==null?void 0:r.getItem(ed);if(n){if(_o(this,Jn,"f")&&n===_o(this,Jn,"f").info.rdns&&(await _o(this,Jn,"f").provider.request({method:"eth_accounts"})).length)return!0;e&&Xu(this,Jn,e,"f")}return super.isAuthorized()}async getProvider(){var e;return Promise.resolve(((e=_o(this,Jn,"f"))==null?void 0:e.provider)??_o(this,yd,"f"))}setEip6963Wallet(e){Xu(this,Jn,e,"f")}}yd=new WeakMap,Jn=new WeakMap;var u6={},Uh={};Uh.byteLength=Gk;Uh.toByteArray=Yk;Uh.fromByteArray=Xk;var $r=[],Mn=[],qk=typeof Uint8Array<"u"?Uint8Array:Array,Q0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var As=0,Zk=Q0.length;As<Zk;++As)$r[As]=Q0[As],Mn[Q0.charCodeAt(As)]=As;Mn[45]=62;Mn[95]=63;function d6(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=t.indexOf("=");n===-1&&(n=e);var r=n===e?0:4-n%4;return[n,r]}function Gk(t){var e=d6(t),n=e[0],r=e[1];return(n+r)*3/4-r}function Kk(t,e,n){return(e+n)*3/4-n}function Yk(t){var e,n=d6(t),r=n[0],i=n[1],o=new qk(Kk(t,r,i)),s=0,a=i>0?r-4:r,l;for(l=0;l<a;l+=4)e=Mn[t.charCodeAt(l)]<<18|Mn[t.charCodeAt(l+1)]<<12|Mn[t.charCodeAt(l+2)]<<6|Mn[t.charCodeAt(l+3)],o[s++]=e>>16&255,o[s++]=e>>8&255,o[s++]=e&255;return i===2&&(e=Mn[t.charCodeAt(l)]<<2|Mn[t.charCodeAt(l+1)]>>4,o[s++]=e&255),i===1&&(e=Mn[t.charCodeAt(l)]<<10|Mn[t.charCodeAt(l+1)]<<4|Mn[t.charCodeAt(l+2)]>>2,o[s++]=e>>8&255,o[s++]=e&255),o}function Qk(t){return $r[t>>18&63]+$r[t>>12&63]+$r[t>>6&63]+$r[t&63]}function Jk(t,e,n){for(var r,i=[],o=e;o<n;o+=3)r=(t[o]<<16&16711680)+(t[o+1]<<8&65280)+(t[o+2]&255),i.push(Qk(r));return i.join("")}function Xk(t){for(var e,n=t.length,r=n%3,i=[],o=16383,s=0,a=n-r;s<a;s+=o)i.push(Jk(t,s,s+o>a?a:s+o));return r===1?(e=t[n-1],i.push($r[e>>2]+$r[e<<4&63]+"==")):r===2&&(e=(t[n-2]<<8)+t[n-1],i.push($r[e>>10]+$r[e>>4&63]+$r[e<<2&63]+"=")),i.join("")}var nw={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */nw.read=function(t,e,n,r,i){var o,s,a=i*8-r-1,l=(1<<a)-1,c=l>>1,u=-7,d=n?i-1:0,p=n?-1:1,w=t[e+d];for(d+=p,o=w&(1<<-u)-1,w>>=-u,u+=a;u>0;o=o*256+t[e+d],d+=p,u-=8);for(s=o&(1<<-u)-1,o>>=-u,u+=r;u>0;s=s*256+t[e+d],d+=p,u-=8);if(o===0)o=1-c;else{if(o===l)return s?NaN:(w?-1:1)*(1/0);s=s+Math.pow(2,r),o=o-c}return(w?-1:1)*s*Math.pow(2,o-r)};nw.write=function(t,e,n,r,i,o){var s,a,l,c=o*8-i-1,u=(1<<c)-1,d=u>>1,p=i===23?Math.pow(2,-24)-Math.pow(2,-77):0,w=r?0:o-1,y=r?1:-1,E=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,s=u):(s=Math.floor(Math.log(e)/Math.LN2),e*(l=Math.pow(2,-s))<1&&(s--,l*=2),s+d>=1?e+=p/l:e+=p*Math.pow(2,1-d),e*l>=2&&(s++,l/=2),s+d>=u?(a=0,s=u):s+d>=1?(a=(e*l-1)*Math.pow(2,i),s=s+d):(a=e*Math.pow(2,d-1)*Math.pow(2,i),s=0));i>=8;t[n+w]=a&255,w+=y,a/=256,i-=8);for(s=s<<i|a,c+=i;c>0;t[n+w]=s&255,w+=y,s/=256,c-=8);t[n+w-y]|=E*128};/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */(function(t){const e=Uh,n=nw,r=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;t.Buffer=a,t.SlowBuffer=m,t.INSPECT_MAX_BYTES=50;const i=2147483647;t.kMaxLength=i,a.TYPED_ARRAY_SUPPORT=o(),!a.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function o(){try{const A=new Uint8Array(1),h={foo:function(){return 42}};return Object.setPrototypeOf(h,Uint8Array.prototype),Object.setPrototypeOf(A,h),A.foo()===42}catch{return!1}}Object.defineProperty(a.prototype,"parent",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.buffer}}),Object.defineProperty(a.prototype,"offset",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.byteOffset}});function s(A){if(A>i)throw new RangeError('The value "'+A+'" is invalid for option "size"');const h=new Uint8Array(A);return Object.setPrototypeOf(h,a.prototype),h}function a(A,h,g){if(typeof A=="number"){if(typeof h=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return d(A)}return l(A,h,g)}a.poolSize=8192;function l(A,h,g){if(typeof A=="string")return p(A,h);if(ArrayBuffer.isView(A))return y(A);if(A==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof A);if(qe(A,ArrayBuffer)||A&&qe(A.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(qe(A,SharedArrayBuffer)||A&&qe(A.buffer,SharedArrayBuffer)))return E(A,h,g);if(typeof A=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const P=A.valueOf&&A.valueOf();if(P!=null&&P!==A)return a.from(P,h,g);const k=C(A);if(k)return k;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof A[Symbol.toPrimitive]=="function")return a.from(A[Symbol.toPrimitive]("string"),h,g);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof A)}a.from=function(A,h,g){return l(A,h,g)},Object.setPrototypeOf(a.prototype,Uint8Array.prototype),Object.setPrototypeOf(a,Uint8Array);function c(A){if(typeof A!="number")throw new TypeError('"size" argument must be of type number');if(A<0)throw new RangeError('The value "'+A+'" is invalid for option "size"')}function u(A,h,g){return c(A),A<=0?s(A):h!==void 0?typeof g=="string"?s(A).fill(h,g):s(A).fill(h):s(A)}a.alloc=function(A,h,g){return u(A,h,g)};function d(A){return c(A),s(A<0?0:b(A)|0)}a.allocUnsafe=function(A){return d(A)},a.allocUnsafeSlow=function(A){return d(A)};function p(A,h){if((typeof h!="string"||h==="")&&(h="utf8"),!a.isEncoding(h))throw new TypeError("Unknown encoding: "+h);const g=v(A,h)|0;let P=s(g);const k=P.write(A,h);return k!==g&&(P=P.slice(0,k)),P}function w(A){const h=A.length<0?0:b(A.length)|0,g=s(h);for(let P=0;P<h;P+=1)g[P]=A[P]&255;return g}function y(A){if(qe(A,Uint8Array)){const h=new Uint8Array(A);return E(h.buffer,h.byteOffset,h.byteLength)}return w(A)}function E(A,h,g){if(h<0||A.byteLength<h)throw new RangeError('"offset" is outside of buffer bounds');if(A.byteLength<h+(g||0))throw new RangeError('"length" is outside of buffer bounds');let P;return h===void 0&&g===void 0?P=new Uint8Array(A):g===void 0?P=new Uint8Array(A,h):P=new Uint8Array(A,h,g),Object.setPrototypeOf(P,a.prototype),P}function C(A){if(a.isBuffer(A)){const h=b(A.length)|0,g=s(h);return g.length===0||A.copy(g,0,0,h),g}if(A.length!==void 0)return typeof A.length!="number"||vt(A.length)?s(0):w(A);if(A.type==="Buffer"&&Array.isArray(A.data))return w(A.data)}function b(A){if(A>=i)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+i.toString(16)+" bytes");return A|0}function m(A){return+A!=A&&(A=0),a.alloc(+A)}a.isBuffer=function(h){return h!=null&&h._isBuffer===!0&&h!==a.prototype},a.compare=function(h,g){if(qe(h,Uint8Array)&&(h=a.from(h,h.offset,h.byteLength)),qe(g,Uint8Array)&&(g=a.from(g,g.offset,g.byteLength)),!a.isBuffer(h)||!a.isBuffer(g))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(h===g)return 0;let P=h.length,k=g.length;for(let N=0,U=Math.min(P,k);N<U;++N)if(h[N]!==g[N]){P=h[N],k=g[N];break}return P<k?-1:k<P?1:0},a.isEncoding=function(h){switch(String(h).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},a.concat=function(h,g){if(!Array.isArray(h))throw new TypeError('"list" argument must be an Array of Buffers');if(h.length===0)return a.alloc(0);let P;if(g===void 0)for(g=0,P=0;P<h.length;++P)g+=h[P].length;const k=a.allocUnsafe(g);let N=0;for(P=0;P<h.length;++P){let U=h[P];if(qe(U,Uint8Array))N+U.length>k.length?(a.isBuffer(U)||(U=a.from(U)),U.copy(k,N)):Uint8Array.prototype.set.call(k,U,N);else if(a.isBuffer(U))U.copy(k,N);else throw new TypeError('"list" argument must be an Array of Buffers');N+=U.length}return k};function v(A,h){if(a.isBuffer(A))return A.length;if(ArrayBuffer.isView(A)||qe(A,ArrayBuffer))return A.byteLength;if(typeof A!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof A);const g=A.length,P=arguments.length>2&&arguments[2]===!0;if(!P&&g===0)return 0;let k=!1;for(;;)switch(h){case"ascii":case"latin1":case"binary":return g;case"utf8":case"utf-8":return yi(A).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return g*2;case"hex":return g>>>1;case"base64":return Ct(A).length;default:if(k)return P?-1:yi(A).length;h=(""+h).toLowerCase(),k=!0}}a.byteLength=v;function x(A,h,g){let P=!1;if((h===void 0||h<0)&&(h=0),h>this.length||((g===void 0||g>this.length)&&(g=this.length),g<=0)||(g>>>=0,h>>>=0,g<=h))return"";for(A||(A="utf8");;)switch(A){case"hex":return W(this,h,g);case"utf8":case"utf-8":return H(this,h,g);case"ascii":return B(this,h,g);case"latin1":case"binary":return R(this,h,g);case"base64":return ne(this,h,g);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return z(this,h,g);default:if(P)throw new TypeError("Unknown encoding: "+A);A=(A+"").toLowerCase(),P=!0}}a.prototype._isBuffer=!0;function _(A,h,g){const P=A[h];A[h]=A[g],A[g]=P}a.prototype.swap16=function(){const h=this.length;if(h%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let g=0;g<h;g+=2)_(this,g,g+1);return this},a.prototype.swap32=function(){const h=this.length;if(h%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let g=0;g<h;g+=4)_(this,g,g+3),_(this,g+1,g+2);return this},a.prototype.swap64=function(){const h=this.length;if(h%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let g=0;g<h;g+=8)_(this,g,g+7),_(this,g+1,g+6),_(this,g+2,g+5),_(this,g+3,g+4);return this},a.prototype.toString=function(){const h=this.length;return h===0?"":arguments.length===0?H(this,0,h):x.apply(this,arguments)},a.prototype.toLocaleString=a.prototype.toString,a.prototype.equals=function(h){if(!a.isBuffer(h))throw new TypeError("Argument must be a Buffer");return this===h?!0:a.compare(this,h)===0},a.prototype.inspect=function(){let h="";const g=t.INSPECT_MAX_BYTES;return h=this.toString("hex",0,g).replace(/(.{2})/g,"$1 ").trim(),this.length>g&&(h+=" ... "),"<Buffer "+h+">"},r&&(a.prototype[r]=a.prototype.inspect),a.prototype.compare=function(h,g,P,k,N){if(qe(h,Uint8Array)&&(h=a.from(h,h.offset,h.byteLength)),!a.isBuffer(h))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof h);if(g===void 0&&(g=0),P===void 0&&(P=h?h.length:0),k===void 0&&(k=0),N===void 0&&(N=this.length),g<0||P>h.length||k<0||N>this.length)throw new RangeError("out of range index");if(k>=N&&g>=P)return 0;if(k>=N)return-1;if(g>=P)return 1;if(g>>>=0,P>>>=0,k>>>=0,N>>>=0,this===h)return 0;let U=N-k,ue=P-g;const ke=Math.min(U,ue),tt=this.slice(k,N),ut=h.slice(g,P);for(let Ze=0;Ze<ke;++Ze)if(tt[Ze]!==ut[Ze]){U=tt[Ze],ue=ut[Ze];break}return U<ue?-1:ue<U?1:0};function S(A,h,g,P,k){if(A.length===0)return-1;if(typeof g=="string"?(P=g,g=0):g>2147483647?g=2147483647:g<-2147483648&&(g=-2147483648),g=+g,vt(g)&&(g=k?0:A.length-1),g<0&&(g=A.length+g),g>=A.length){if(k)return-1;g=A.length-1}else if(g<0)if(k)g=0;else return-1;if(typeof h=="string"&&(h=a.from(h,P)),a.isBuffer(h))return h.length===0?-1:f(A,h,g,P,k);if(typeof h=="number")return h=h&255,typeof Uint8Array.prototype.indexOf=="function"?k?Uint8Array.prototype.indexOf.call(A,h,g):Uint8Array.prototype.lastIndexOf.call(A,h,g):f(A,[h],g,P,k);throw new TypeError("val must be string, number or Buffer")}function f(A,h,g,P,k){let N=1,U=A.length,ue=h.length;if(P!==void 0&&(P=String(P).toLowerCase(),P==="ucs2"||P==="ucs-2"||P==="utf16le"||P==="utf-16le")){if(A.length<2||h.length<2)return-1;N=2,U/=2,ue/=2,g/=2}function ke(ut,Ze){return N===1?ut[Ze]:ut.readUInt16BE(Ze*N)}let tt;if(k){let ut=-1;for(tt=g;tt<U;tt++)if(ke(A,tt)===ke(h,ut===-1?0:tt-ut)){if(ut===-1&&(ut=tt),tt-ut+1===ue)return ut*N}else ut!==-1&&(tt-=tt-ut),ut=-1}else for(g+ue>U&&(g=U-ue),tt=g;tt>=0;tt--){let ut=!0;for(let Ze=0;Ze<ue;Ze++)if(ke(A,tt+Ze)!==ke(h,Ze)){ut=!1;break}if(ut)return tt}return-1}a.prototype.includes=function(h,g,P){return this.indexOf(h,g,P)!==-1},a.prototype.indexOf=function(h,g,P){return S(this,h,g,P,!0)},a.prototype.lastIndexOf=function(h,g,P){return S(this,h,g,P,!1)};function T(A,h,g,P){g=Number(g)||0;const k=A.length-g;P?(P=Number(P),P>k&&(P=k)):P=k;const N=h.length;P>N/2&&(P=N/2);let U;for(U=0;U<P;++U){const ue=parseInt(h.substr(U*2,2),16);if(vt(ue))return U;A[g+U]=ue}return U}function O(A,h,g,P){return mt(yi(h,A.length-g),A,g,P)}function D(A,h,g,P){return mt(Qa(h),A,g,P)}function M(A,h,g,P){return mt(Ct(h),A,g,P)}function ee(A,h,g,P){return mt(Au(h,A.length-g),A,g,P)}a.prototype.write=function(h,g,P,k){if(g===void 0)k="utf8",P=this.length,g=0;else if(P===void 0&&typeof g=="string")k=g,P=this.length,g=0;else if(isFinite(g))g=g>>>0,isFinite(P)?(P=P>>>0,k===void 0&&(k="utf8")):(k=P,P=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");const N=this.length-g;if((P===void 0||P>N)&&(P=N),h.length>0&&(P<0||g<0)||g>this.length)throw new RangeError("Attempt to write outside buffer bounds");k||(k="utf8");let U=!1;for(;;)switch(k){case"hex":return T(this,h,g,P);case"utf8":case"utf-8":return O(this,h,g,P);case"ascii":case"latin1":case"binary":return D(this,h,g,P);case"base64":return M(this,h,g,P);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ee(this,h,g,P);default:if(U)throw new TypeError("Unknown encoding: "+k);k=(""+k).toLowerCase(),U=!0}},a.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function ne(A,h,g){return h===0&&g===A.length?e.fromByteArray(A):e.fromByteArray(A.slice(h,g))}function H(A,h,g){g=Math.min(A.length,g);const P=[];let k=h;for(;k<g;){const N=A[k];let U=null,ue=N>239?4:N>223?3:N>191?2:1;if(k+ue<=g){let ke,tt,ut,Ze;switch(ue){case 1:N<128&&(U=N);break;case 2:ke=A[k+1],(ke&192)===128&&(Ze=(N&31)<<6|ke&63,Ze>127&&(U=Ze));break;case 3:ke=A[k+1],tt=A[k+2],(ke&192)===128&&(tt&192)===128&&(Ze=(N&15)<<12|(ke&63)<<6|tt&63,Ze>2047&&(Ze<55296||Ze>57343)&&(U=Ze));break;case 4:ke=A[k+1],tt=A[k+2],ut=A[k+3],(ke&192)===128&&(tt&192)===128&&(ut&192)===128&&(Ze=(N&15)<<18|(ke&63)<<12|(tt&63)<<6|ut&63,Ze>65535&&Ze<1114112&&(U=Ze))}}U===null?(U=65533,ue=1):U>65535&&(U-=65536,P.push(U>>>10&1023|55296),U=56320|U&1023),P.push(U),k+=ue}return j(P)}const F=4096;function j(A){const h=A.length;if(h<=F)return String.fromCharCode.apply(String,A);let g="",P=0;for(;P<h;)g+=String.fromCharCode.apply(String,A.slice(P,P+=F));return g}function B(A,h,g){let P="";g=Math.min(A.length,g);for(let k=h;k<g;++k)P+=String.fromCharCode(A[k]&127);return P}function R(A,h,g){let P="";g=Math.min(A.length,g);for(let k=h;k<g;++k)P+=String.fromCharCode(A[k]);return P}function W(A,h,g){const P=A.length;(!h||h<0)&&(h=0),(!g||g<0||g>P)&&(g=P);let k="";for(let N=h;N<g;++N)k+=Pt[A[N]];return k}function z(A,h,g){const P=A.slice(h,g);let k="";for(let N=0;N<P.length-1;N+=2)k+=String.fromCharCode(P[N]+P[N+1]*256);return k}a.prototype.slice=function(h,g){const P=this.length;h=~~h,g=g===void 0?P:~~g,h<0?(h+=P,h<0&&(h=0)):h>P&&(h=P),g<0?(g+=P,g<0&&(g=0)):g>P&&(g=P),g<h&&(g=h);const k=this.subarray(h,g);return Object.setPrototypeOf(k,a.prototype),k};function Z(A,h,g){if(A%1!==0||A<0)throw new RangeError("offset is not uint");if(A+h>g)throw new RangeError("Trying to access beyond buffer length")}a.prototype.readUintLE=a.prototype.readUIntLE=function(h,g,P){h=h>>>0,g=g>>>0,P||Z(h,g,this.length);let k=this[h],N=1,U=0;for(;++U<g&&(N*=256);)k+=this[h+U]*N;return k},a.prototype.readUintBE=a.prototype.readUIntBE=function(h,g,P){h=h>>>0,g=g>>>0,P||Z(h,g,this.length);let k=this[h+--g],N=1;for(;g>0&&(N*=256);)k+=this[h+--g]*N;return k},a.prototype.readUint8=a.prototype.readUInt8=function(h,g){return h=h>>>0,g||Z(h,1,this.length),this[h]},a.prototype.readUint16LE=a.prototype.readUInt16LE=function(h,g){return h=h>>>0,g||Z(h,2,this.length),this[h]|this[h+1]<<8},a.prototype.readUint16BE=a.prototype.readUInt16BE=function(h,g){return h=h>>>0,g||Z(h,2,this.length),this[h]<<8|this[h+1]},a.prototype.readUint32LE=a.prototype.readUInt32LE=function(h,g){return h=h>>>0,g||Z(h,4,this.length),(this[h]|this[h+1]<<8|this[h+2]<<16)+this[h+3]*16777216},a.prototype.readUint32BE=a.prototype.readUInt32BE=function(h,g){return h=h>>>0,g||Z(h,4,this.length),this[h]*16777216+(this[h+1]<<16|this[h+2]<<8|this[h+3])},a.prototype.readBigUInt64LE=Je(function(h){h=h>>>0,Re(h,"offset");const g=this[h],P=this[h+7];(g===void 0||P===void 0)&&xn(h,this.length-8);const k=g+this[++h]*2**8+this[++h]*2**16+this[++h]*2**24,N=this[++h]+this[++h]*2**8+this[++h]*2**16+P*2**24;return BigInt(k)+(BigInt(N)<<BigInt(32))}),a.prototype.readBigUInt64BE=Je(function(h){h=h>>>0,Re(h,"offset");const g=this[h],P=this[h+7];(g===void 0||P===void 0)&&xn(h,this.length-8);const k=g*2**24+this[++h]*2**16+this[++h]*2**8+this[++h],N=this[++h]*2**24+this[++h]*2**16+this[++h]*2**8+P;return(BigInt(k)<<BigInt(32))+BigInt(N)}),a.prototype.readIntLE=function(h,g,P){h=h>>>0,g=g>>>0,P||Z(h,g,this.length);let k=this[h],N=1,U=0;for(;++U<g&&(N*=256);)k+=this[h+U]*N;return N*=128,k>=N&&(k-=Math.pow(2,8*g)),k},a.prototype.readIntBE=function(h,g,P){h=h>>>0,g=g>>>0,P||Z(h,g,this.length);let k=g,N=1,U=this[h+--k];for(;k>0&&(N*=256);)U+=this[h+--k]*N;return N*=128,U>=N&&(U-=Math.pow(2,8*g)),U},a.prototype.readInt8=function(h,g){return h=h>>>0,g||Z(h,1,this.length),this[h]&128?(255-this[h]+1)*-1:this[h]},a.prototype.readInt16LE=function(h,g){h=h>>>0,g||Z(h,2,this.length);const P=this[h]|this[h+1]<<8;return P&32768?P|4294901760:P},a.prototype.readInt16BE=function(h,g){h=h>>>0,g||Z(h,2,this.length);const P=this[h+1]|this[h]<<8;return P&32768?P|4294901760:P},a.prototype.readInt32LE=function(h,g){return h=h>>>0,g||Z(h,4,this.length),this[h]|this[h+1]<<8|this[h+2]<<16|this[h+3]<<24},a.prototype.readInt32BE=function(h,g){return h=h>>>0,g||Z(h,4,this.length),this[h]<<24|this[h+1]<<16|this[h+2]<<8|this[h+3]},a.prototype.readBigInt64LE=Je(function(h){h=h>>>0,Re(h,"offset");const g=this[h],P=this[h+7];(g===void 0||P===void 0)&&xn(h,this.length-8);const k=this[h+4]+this[h+5]*2**8+this[h+6]*2**16+(P<<24);return(BigInt(k)<<BigInt(32))+BigInt(g+this[++h]*2**8+this[++h]*2**16+this[++h]*2**24)}),a.prototype.readBigInt64BE=Je(function(h){h=h>>>0,Re(h,"offset");const g=this[h],P=this[h+7];(g===void 0||P===void 0)&&xn(h,this.length-8);const k=(g<<24)+this[++h]*2**16+this[++h]*2**8+this[++h];return(BigInt(k)<<BigInt(32))+BigInt(this[++h]*2**24+this[++h]*2**16+this[++h]*2**8+P)}),a.prototype.readFloatLE=function(h,g){return h=h>>>0,g||Z(h,4,this.length),n.read(this,h,!0,23,4)},a.prototype.readFloatBE=function(h,g){return h=h>>>0,g||Z(h,4,this.length),n.read(this,h,!1,23,4)},a.prototype.readDoubleLE=function(h,g){return h=h>>>0,g||Z(h,8,this.length),n.read(this,h,!0,52,8)},a.prototype.readDoubleBE=function(h,g){return h=h>>>0,g||Z(h,8,this.length),n.read(this,h,!1,52,8)};function X(A,h,g,P,k,N){if(!a.isBuffer(A))throw new TypeError('"buffer" argument must be a Buffer instance');if(h>k||h<N)throw new RangeError('"value" argument is out of bounds');if(g+P>A.length)throw new RangeError("Index out of range")}a.prototype.writeUintLE=a.prototype.writeUIntLE=function(h,g,P,k){if(h=+h,g=g>>>0,P=P>>>0,!k){const ue=Math.pow(2,8*P)-1;X(this,h,g,P,ue,0)}let N=1,U=0;for(this[g]=h&255;++U<P&&(N*=256);)this[g+U]=h/N&255;return g+P},a.prototype.writeUintBE=a.prototype.writeUIntBE=function(h,g,P,k){if(h=+h,g=g>>>0,P=P>>>0,!k){const ue=Math.pow(2,8*P)-1;X(this,h,g,P,ue,0)}let N=P-1,U=1;for(this[g+N]=h&255;--N>=0&&(U*=256);)this[g+N]=h/U&255;return g+P},a.prototype.writeUint8=a.prototype.writeUInt8=function(h,g,P){return h=+h,g=g>>>0,P||X(this,h,g,1,255,0),this[g]=h&255,g+1},a.prototype.writeUint16LE=a.prototype.writeUInt16LE=function(h,g,P){return h=+h,g=g>>>0,P||X(this,h,g,2,65535,0),this[g]=h&255,this[g+1]=h>>>8,g+2},a.prototype.writeUint16BE=a.prototype.writeUInt16BE=function(h,g,P){return h=+h,g=g>>>0,P||X(this,h,g,2,65535,0),this[g]=h>>>8,this[g+1]=h&255,g+2},a.prototype.writeUint32LE=a.prototype.writeUInt32LE=function(h,g,P){return h=+h,g=g>>>0,P||X(this,h,g,4,4294967295,0),this[g+3]=h>>>24,this[g+2]=h>>>16,this[g+1]=h>>>8,this[g]=h&255,g+4},a.prototype.writeUint32BE=a.prototype.writeUInt32BE=function(h,g,P){return h=+h,g=g>>>0,P||X(this,h,g,4,4294967295,0),this[g]=h>>>24,this[g+1]=h>>>16,this[g+2]=h>>>8,this[g+3]=h&255,g+4};function K(A,h,g,P,k){Le(h,P,k,A,g,7);let N=Number(h&BigInt(4294967295));A[g++]=N,N=N>>8,A[g++]=N,N=N>>8,A[g++]=N,N=N>>8,A[g++]=N;let U=Number(h>>BigInt(32)&BigInt(4294967295));return A[g++]=U,U=U>>8,A[g++]=U,U=U>>8,A[g++]=U,U=U>>8,A[g++]=U,g}function oe(A,h,g,P,k){Le(h,P,k,A,g,7);let N=Number(h&BigInt(4294967295));A[g+7]=N,N=N>>8,A[g+6]=N,N=N>>8,A[g+5]=N,N=N>>8,A[g+4]=N;let U=Number(h>>BigInt(32)&BigInt(4294967295));return A[g+3]=U,U=U>>8,A[g+2]=U,U=U>>8,A[g+1]=U,U=U>>8,A[g]=U,g+8}a.prototype.writeBigUInt64LE=Je(function(h,g=0){return K(this,h,g,BigInt(0),BigInt("0xffffffffffffffff"))}),a.prototype.writeBigUInt64BE=Je(function(h,g=0){return oe(this,h,g,BigInt(0),BigInt("0xffffffffffffffff"))}),a.prototype.writeIntLE=function(h,g,P,k){if(h=+h,g=g>>>0,!k){const ke=Math.pow(2,8*P-1);X(this,h,g,P,ke-1,-ke)}let N=0,U=1,ue=0;for(this[g]=h&255;++N<P&&(U*=256);)h<0&&ue===0&&this[g+N-1]!==0&&(ue=1),this[g+N]=(h/U>>0)-ue&255;return g+P},a.prototype.writeIntBE=function(h,g,P,k){if(h=+h,g=g>>>0,!k){const ke=Math.pow(2,8*P-1);X(this,h,g,P,ke-1,-ke)}let N=P-1,U=1,ue=0;for(this[g+N]=h&255;--N>=0&&(U*=256);)h<0&&ue===0&&this[g+N+1]!==0&&(ue=1),this[g+N]=(h/U>>0)-ue&255;return g+P},a.prototype.writeInt8=function(h,g,P){return h=+h,g=g>>>0,P||X(this,h,g,1,127,-128),h<0&&(h=255+h+1),this[g]=h&255,g+1},a.prototype.writeInt16LE=function(h,g,P){return h=+h,g=g>>>0,P||X(this,h,g,2,32767,-32768),this[g]=h&255,this[g+1]=h>>>8,g+2},a.prototype.writeInt16BE=function(h,g,P){return h=+h,g=g>>>0,P||X(this,h,g,2,32767,-32768),this[g]=h>>>8,this[g+1]=h&255,g+2},a.prototype.writeInt32LE=function(h,g,P){return h=+h,g=g>>>0,P||X(this,h,g,4,2147483647,-2147483648),this[g]=h&255,this[g+1]=h>>>8,this[g+2]=h>>>16,this[g+3]=h>>>24,g+4},a.prototype.writeInt32BE=function(h,g,P){return h=+h,g=g>>>0,P||X(this,h,g,4,2147483647,-2147483648),h<0&&(h=4294967295+h+1),this[g]=h>>>24,this[g+1]=h>>>16,this[g+2]=h>>>8,this[g+3]=h&255,g+4},a.prototype.writeBigInt64LE=Je(function(h,g=0){return K(this,h,g,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),a.prototype.writeBigInt64BE=Je(function(h,g=0){return oe(this,h,g,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function fe(A,h,g,P,k,N){if(g+P>A.length)throw new RangeError("Index out of range");if(g<0)throw new RangeError("Index out of range")}function pe(A,h,g,P,k){return h=+h,g=g>>>0,k||fe(A,h,g,4),n.write(A,h,g,P,23,4),g+4}a.prototype.writeFloatLE=function(h,g,P){return pe(this,h,g,!0,P)},a.prototype.writeFloatBE=function(h,g,P){return pe(this,h,g,!1,P)};function ye(A,h,g,P,k){return h=+h,g=g>>>0,k||fe(A,h,g,8),n.write(A,h,g,P,52,8),g+8}a.prototype.writeDoubleLE=function(h,g,P){return ye(this,h,g,!0,P)},a.prototype.writeDoubleBE=function(h,g,P){return ye(this,h,g,!1,P)},a.prototype.copy=function(h,g,P,k){if(!a.isBuffer(h))throw new TypeError("argument should be a Buffer");if(P||(P=0),!k&&k!==0&&(k=this.length),g>=h.length&&(g=h.length),g||(g=0),k>0&&k<P&&(k=P),k===P||h.length===0||this.length===0)return 0;if(g<0)throw new RangeError("targetStart out of bounds");if(P<0||P>=this.length)throw new RangeError("Index out of range");if(k<0)throw new RangeError("sourceEnd out of bounds");k>this.length&&(k=this.length),h.length-g<k-P&&(k=h.length-g+P);const N=k-P;return this===h&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(g,P,k):Uint8Array.prototype.set.call(h,this.subarray(P,k),g),N},a.prototype.fill=function(h,g,P,k){if(typeof h=="string"){if(typeof g=="string"?(k=g,g=0,P=this.length):typeof P=="string"&&(k=P,P=this.length),k!==void 0&&typeof k!="string")throw new TypeError("encoding must be a string");if(typeof k=="string"&&!a.isEncoding(k))throw new TypeError("Unknown encoding: "+k);if(h.length===1){const U=h.charCodeAt(0);(k==="utf8"&&U<128||k==="latin1")&&(h=U)}}else typeof h=="number"?h=h&255:typeof h=="boolean"&&(h=Number(h));if(g<0||this.length<g||this.length<P)throw new RangeError("Out of range index");if(P<=g)return this;g=g>>>0,P=P===void 0?this.length:P>>>0,h||(h=0);let N;if(typeof h=="number")for(N=g;N<P;++N)this[N]=h;else{const U=a.isBuffer(h)?h:a.from(h,k),ue=U.length;if(ue===0)throw new TypeError('The value "'+h+'" is invalid for argument "value"');for(N=0;N<P-g;++N)this[N+g]=U[N%ue]}return this};const _e={};function Pe(A,h,g){_e[A]=class extends g{constructor(){super(),Object.defineProperty(this,"message",{value:h.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${A}]`,this.stack,delete this.name}get code(){return A}set code(k){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:k,writable:!0})}toString(){return`${this.name} [${A}]: ${this.message}`}}}Pe("ERR_BUFFER_OUT_OF_BOUNDS",function(A){return A?`${A} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),Pe("ERR_INVALID_ARG_TYPE",function(A,h){return`The "${A}" argument must be of type number. Received type ${typeof h}`},TypeError),Pe("ERR_OUT_OF_RANGE",function(A,h,g){let P=`The value of "${A}" is out of range.`,k=g;return Number.isInteger(g)&&Math.abs(g)>2**32?k=ve(String(g)):typeof g=="bigint"&&(k=String(g),(g>BigInt(2)**BigInt(32)||g<-(BigInt(2)**BigInt(32)))&&(k=ve(k)),k+="n"),P+=` It must be ${h}. Received ${k}`,P},RangeError);function ve(A){let h="",g=A.length;const P=A[0]==="-"?1:0;for(;g>=P+4;g-=3)h=`_${A.slice(g-3,g)}${h}`;return`${A.slice(0,g)}${h}`}function Oe(A,h,g){Re(h,"offset"),(A[h]===void 0||A[h+g]===void 0)&&xn(h,A.length-(g+1))}function Le(A,h,g,P,k,N){if(A>g||A<h){const U=typeof h=="bigint"?"n":"";let ue;throw N>3?h===0||h===BigInt(0)?ue=`>= 0${U} and < 2${U} ** ${(N+1)*8}${U}`:ue=`>= -(2${U} ** ${(N+1)*8-1}${U}) and < 2 ** ${(N+1)*8-1}${U}`:ue=`>= ${h}${U} and <= ${g}${U}`,new _e.ERR_OUT_OF_RANGE("value",ue,A)}Oe(P,k,N)}function Re(A,h){if(typeof A!="number")throw new _e.ERR_INVALID_ARG_TYPE(h,"number",A)}function xn(A,h,g){throw Math.floor(A)!==A?(Re(A,g),new _e.ERR_OUT_OF_RANGE(g||"offset","an integer",A)):h<0?new _e.ERR_BUFFER_OUT_OF_BOUNDS:new _e.ERR_OUT_OF_RANGE(g||"offset",`>= ${g?1:0} and <= ${h}`,A)}const wi=/[^+/0-9A-Za-z-_]/g;function yo(A){if(A=A.split("=")[0],A=A.trim().replace(wi,""),A.length<2)return"";for(;A.length%4!==0;)A=A+"=";return A}function yi(A,h){h=h||1/0;let g;const P=A.length;let k=null;const N=[];for(let U=0;U<P;++U){if(g=A.charCodeAt(U),g>55295&&g<57344){if(!k){if(g>56319){(h-=3)>-1&&N.push(239,191,189);continue}else if(U+1===P){(h-=3)>-1&&N.push(239,191,189);continue}k=g;continue}if(g<56320){(h-=3)>-1&&N.push(239,191,189),k=g;continue}g=(k-55296<<10|g-56320)+65536}else k&&(h-=3)>-1&&N.push(239,191,189);if(k=null,g<128){if((h-=1)<0)break;N.push(g)}else if(g<2048){if((h-=2)<0)break;N.push(g>>6|192,g&63|128)}else if(g<65536){if((h-=3)<0)break;N.push(g>>12|224,g>>6&63|128,g&63|128)}else if(g<1114112){if((h-=4)<0)break;N.push(g>>18|240,g>>12&63|128,g>>6&63|128,g&63|128)}else throw new Error("Invalid code point")}return N}function Qa(A){const h=[];for(let g=0;g<A.length;++g)h.push(A.charCodeAt(g)&255);return h}function Au(A,h){let g,P,k;const N=[];for(let U=0;U<A.length&&!((h-=2)<0);++U)g=A.charCodeAt(U),P=g>>8,k=g%256,N.push(k),N.push(P);return N}function Ct(A){return e.toByteArray(yo(A))}function mt(A,h,g,P){let k;for(k=0;k<P&&!(k+g>=h.length||k>=A.length);++k)h[k+g]=A[k];return k}function qe(A,h){return A instanceof h||A!=null&&A.constructor!=null&&A.constructor.name!=null&&A.constructor.name===h.name}function vt(A){return A!==A}const Pt=function(){const A="0123456789abcdef",h=new Array(256);for(let g=0;g<16;++g){const P=g*16;for(let k=0;k<16;++k)h[P+k]=A[g]+A[k]}return h}();function Je(A){return typeof BigInt>"u"?$t:A}function $t(){throw new Error("BigInt not supported")}})(u6);var O2;typeof window<"u"&&(window.Buffer||(window.Buffer=u6.Buffer),window.global||(window.global=window),window.process||(window.process={}),(O2=window.process)!=null&&O2.env||(window.process={env:{}}));function eO({storage:t,key:e="REACT_QUERY_OFFLINE_CACHE",throttleTime:n=1e3,serialize:r=JSON.stringify,deserialize:i=JSON.parse,retry:o}){if(t){const s=a=>{try{t.setItem(e,r(a));return}catch(l){return l}};return{persistClient:tO(a=>{let l=a,c=s(l),u=0;for(;c&&l;)u++,l=o==null?void 0:o({persistedClient:l,error:c,errorCount:u}),l&&(c=s(l))},n),restoreClient:()=>{const a=t.getItem(e);if(a)return i(a)},removeClient:()=>{t.removeItem(e)}}}return{persistClient:Wv,restoreClient:()=>{},removeClient:Wv}}function tO(t,e=100){let n=null,r;return function(...i){r=i,n===null&&(n=setTimeout(()=>{t(...r),n=null},e))}}function Wv(){}class jh{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){const n={listener:e};return this.listeners.add(n),this.onSubscribe(),()=>{this.listeners.delete(n),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}}const rw=typeof window>"u"||"Deno"in window;function er(){}function nO(t,e){return typeof t=="function"?t(e):t}function rO(t){return typeof t=="number"&&t>=0&&t!==1/0}function iO(t,e){return Math.max(t+(e||0)-Date.now(),0)}function td(t,e,n){return Bh(t)?typeof e=="function"?{...n,queryKey:t,queryFn:e}:{...e,queryKey:t}:t}function Si(t,e,n){return Bh(t)?[{...e,queryKey:t},n]:[t||{},e]}function zv(t,e){const{type:n="all",exact:r,fetchStatus:i,predicate:o,queryKey:s,stale:a}=t;if(Bh(s)){if(r){if(e.queryHash!==iw(s,e.options))return!1}else if(!Tf(e.queryKey,s))return!1}if(n!=="all"){const l=e.isActive();if(n==="active"&&!l||n==="inactive"&&l)return!1}return!(typeof a=="boolean"&&e.isStale()!==a||typeof i<"u"&&i!==e.state.fetchStatus||o&&!o(e))}function Hv(t,e){const{exact:n,fetching:r,predicate:i,mutationKey:o}=t;if(Bh(o)){if(!e.options.mutationKey)return!1;if(n){if(Do(e.options.mutationKey)!==Do(o))return!1}else if(!Tf(e.options.mutationKey,o))return!1}return!(typeof r=="boolean"&&e.state.status==="loading"!==r||i&&!i(e))}function iw(t,e){return((e==null?void 0:e.queryKeyHashFn)||Do)(t)}function Do(t){return JSON.stringify(t,(e,n)=>F1(n)?Object.keys(n).sort().reduce((r,i)=>(r[i]=n[i],r),{}):n)}function Tf(t,e){return f6(t,e)}function f6(t,e){return t===e?!0:typeof t!=typeof e?!1:t&&e&&typeof t=="object"&&typeof e=="object"?!Object.keys(e).some(n=>!f6(t[n],e[n])):!1}function h6(t,e){if(t===e)return t;const n=Vv(t)&&Vv(e);if(n||F1(t)&&F1(e)){const r=n?t.length:Object.keys(t).length,i=n?e:Object.keys(e),o=i.length,s=n?[]:{};let a=0;for(let l=0;l<o;l++){const c=n?l:i[l];s[c]=h6(t[c],e[c]),s[c]===t[c]&&a++}return r===o&&a===r?t:s}return e}function Vv(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function F1(t){if(!qv(t))return!1;const e=t.constructor;if(typeof e>"u")return!0;const n=e.prototype;return!(!qv(n)||!n.hasOwnProperty("isPrototypeOf"))}function qv(t){return Object.prototype.toString.call(t)==="[object Object]"}function Bh(t){return Array.isArray(t)}function p6(t){return new Promise(e=>{setTimeout(e,t)})}function Zv(t){p6(0).then(t)}function oO(){if(typeof AbortController=="function")return new AbortController}function sO(t,e,n){return n.isDataEqual!=null&&n.isDataEqual(t,e)?t:typeof n.structuralSharing=="function"?n.structuralSharing(t,e):n.structuralSharing!==!1?h6(t,e):e}class aO extends jh{constructor(){super(),this.setup=e=>{if(!rw&&window.addEventListener){const n=()=>e();return window.addEventListener("visibilitychange",n,!1),window.addEventListener("focus",n,!1),()=>{window.removeEventListener("visibilitychange",n),window.removeEventListener("focus",n)}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var e;(e=this.cleanup)==null||e.call(this),this.cleanup=void 0}}setEventListener(e){var n;this.setup=e,(n=this.cleanup)==null||n.call(this),this.cleanup=e(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()})}setFocused(e){this.focused!==e&&(this.focused=e,this.onFocus())}onFocus(){this.listeners.forEach(({listener:e})=>{e()})}isFocused(){return typeof this.focused=="boolean"?this.focused:typeof document>"u"?!0:[void 0,"visible","prerender"].includes(document.visibilityState)}}const W1=new aO,Gv=["online","offline"];class lO extends jh{constructor(){super(),this.setup=e=>{if(!rw&&window.addEventListener){const n=()=>e();return Gv.forEach(r=>{window.addEventListener(r,n,!1)}),()=>{Gv.forEach(r=>{window.removeEventListener(r,n)})}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var e;(e=this.cleanup)==null||e.call(this),this.cleanup=void 0}}setEventListener(e){var n;this.setup=e,(n=this.cleanup)==null||n.call(this),this.cleanup=e(r=>{typeof r=="boolean"?this.setOnline(r):this.onOnline()})}setOnline(e){this.online!==e&&(this.online=e,this.onOnline())}onOnline(){this.listeners.forEach(({listener:e})=>{e()})}isOnline(){return typeof this.online=="boolean"?this.online:typeof navigator>"u"||typeof navigator.onLine>"u"?!0:navigator.onLine}}const Pf=new lO;function cO(t){return Math.min(1e3*2**t,3e4)}function ow(t){return(t??"online")==="online"?Pf.isOnline():!0}class m6{constructor(e){this.revert=e==null?void 0:e.revert,this.silent=e==null?void 0:e.silent}}function J0(t){return t instanceof m6}function g6(t){let e=!1,n=0,r=!1,i,o,s;const a=new Promise((C,b)=>{o=C,s=b}),l=C=>{r||(w(new m6(C)),t.abort==null||t.abort())},c=()=>{e=!0},u=()=>{e=!1},d=()=>!W1.isFocused()||t.networkMode!=="always"&&!Pf.isOnline(),p=C=>{r||(r=!0,t.onSuccess==null||t.onSuccess(C),i==null||i(),o(C))},w=C=>{r||(r=!0,t.onError==null||t.onError(C),i==null||i(),s(C))},y=()=>new Promise(C=>{i=b=>{const m=r||!d();return m&&C(b),m},t.onPause==null||t.onPause()}).then(()=>{i=void 0,r||t.onContinue==null||t.onContinue()}),E=()=>{if(r)return;let C;try{C=t.fn()}catch(b){C=Promise.reject(b)}Promise.resolve(C).then(p).catch(b=>{var m,v;if(r)return;const x=(m=t.retry)!=null?m:3,_=(v=t.retryDelay)!=null?v:cO,S=typeof _=="function"?_(n,b):_,f=x===!0||typeof x=="number"&&n<x||typeof x=="function"&&x(n,b);if(e||!f){w(b);return}n++,t.onFail==null||t.onFail(n,b),p6(S).then(()=>{if(d())return y()}).then(()=>{e?w(b):E()})})};return ow(t.networkMode)?E():y().then(E),{promise:a,cancel:l,continue:()=>(i==null?void 0:i())?a:Promise.resolve(),cancelRetry:c,continueRetry:u}}const sw=console;function uO(){let t=[],e=0,n=u=>{u()},r=u=>{u()};const i=u=>{let d;e++;try{d=u()}finally{e--,e||a()}return d},o=u=>{e?t.push(u):Zv(()=>{n(u)})},s=u=>(...d)=>{o(()=>{u(...d)})},a=()=>{const u=t;t=[],u.length&&Zv(()=>{r(()=>{u.forEach(d=>{n(d)})})})};return{batch:i,batchCalls:s,schedule:o,setNotifyFunction:u=>{n=u},setBatchNotifyFunction:u=>{r=u}}}const Qt=uO();class w6{destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),rO(this.cacheTime)&&(this.gcTimeout=setTimeout(()=>{this.optionalRemove()},this.cacheTime))}updateCacheTime(e){this.cacheTime=Math.max(this.cacheTime||0,e??(rw?1/0:5*60*1e3))}clearGcTimeout(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)}}class dO extends w6{constructor(e){super(),this.abortSignalConsumed=!1,this.defaultOptions=e.defaultOptions,this.setOptions(e.options),this.observers=[],this.cache=e.cache,this.logger=e.logger||sw,this.queryKey=e.queryKey,this.queryHash=e.queryHash,this.initialState=e.state||fO(this.options),this.state=this.initialState,this.scheduleGc()}get meta(){return this.options.meta}setOptions(e){this.options={...this.defaultOptions,...e},this.updateCacheTime(this.options.cacheTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&this.cache.remove(this)}setData(e,n){const r=sO(this.state.data,e,this.options);return this.dispatch({data:r,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),r}setState(e,n){this.dispatch({type:"setState",state:e,setStateOptions:n})}cancel(e){var n;const r=this.promise;return(n=this.retryer)==null||n.cancel(e),r?r.then(er).catch(er):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.initialState)}isActive(){return this.observers.some(e=>e.options.enabled!==!1)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(e=>e.getCurrentResult().isStale)}isStaleByTime(e=0){return this.state.isInvalidated||!this.state.dataUpdatedAt||!iO(this.state.dataUpdatedAt,e)}onFocus(){var e;const n=this.observers.find(r=>r.shouldFetchOnWindowFocus());n&&n.refetch({cancelRefetch:!1}),(e=this.retryer)==null||e.continue()}onOnline(){var e;const n=this.observers.find(r=>r.shouldFetchOnReconnect());n&&n.refetch({cancelRefetch:!1}),(e=this.retryer)==null||e.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(n=>n!==e),this.observers.length||(this.retryer&&(this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.scheduleGc()),this.cache.notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.dispatch({type:"invalidate"})}fetch(e,n){var r,i;if(this.state.fetchStatus!=="idle"){if(this.state.dataUpdatedAt&&n!=null&&n.cancelRefetch)this.cancel({silent:!0});else if(this.promise){var o;return(o=this.retryer)==null||o.continueRetry(),this.promise}}if(e&&this.setOptions(e),!this.options.queryFn){const w=this.observers.find(y=>y.options.queryFn);w&&this.setOptions(w.options)}const s=oO(),a={queryKey:this.queryKey,pageParam:void 0,meta:this.meta},l=w=>{Object.defineProperty(w,"signal",{enumerable:!0,get:()=>{if(s)return this.abortSignalConsumed=!0,s.signal}})};l(a);const c=()=>this.options.queryFn?(this.abortSignalConsumed=!1,this.options.queryFn(a)):Promise.reject("Missing queryFn for queryKey '"+this.options.queryHash+"'"),u={fetchOptions:n,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:c};if(l(u),(r=this.options.behavior)==null||r.onFetch(u),this.revertState=this.state,this.state.fetchStatus==="idle"||this.state.fetchMeta!==((i=u.fetchOptions)==null?void 0:i.meta)){var d;this.dispatch({type:"fetch",meta:(d=u.fetchOptions)==null?void 0:d.meta})}const p=w=>{if(J0(w)&&w.silent||this.dispatch({type:"error",error:w}),!J0(w)){var y,E,C,b;(y=(E=this.cache.config).onError)==null||y.call(E,w,this),(C=(b=this.cache.config).onSettled)==null||C.call(b,this.state.data,w,this)}this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return this.retryer=g6({fn:u.fetchFn,abort:s==null?void 0:s.abort.bind(s),onSuccess:w=>{var y,E,C,b;if(typeof w>"u"){p(new Error(this.queryHash+" data is undefined"));return}this.setData(w),(y=(E=this.cache.config).onSuccess)==null||y.call(E,w,this),(C=(b=this.cache.config).onSettled)==null||C.call(b,w,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:p,onFail:(w,y)=>{this.dispatch({type:"failed",failureCount:w,error:y})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:u.options.retry,retryDelay:u.options.retryDelay,networkMode:u.options.networkMode}),this.promise=this.retryer.promise,this.promise}dispatch(e){const n=r=>{var i,o;switch(e.type){case"failed":return{...r,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:(i=e.meta)!=null?i:null,fetchStatus:ow(this.options.networkMode)?"fetching":"paused",...!r.dataUpdatedAt&&{error:null,status:"loading"}};case"success":return{...r,data:e.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:(o=e.dataUpdatedAt)!=null?o:Date.now(),error:null,isInvalidated:!1,status:"success",...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const s=e.error;return J0(s)&&s.revert&&this.revertState?{...this.revertState,fetchStatus:"idle"}:{...r,error:s,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:s,fetchStatus:"idle",status:"error"};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...e.state}}};this.state=n(this.state),Qt.batch(()=>{this.observers.forEach(r=>{r.onQueryUpdate(e)}),this.cache.notify({query:this,type:"updated",action:e})})}}function fO(t){const e=typeof t.initialData=="function"?t.initialData():t.initialData,n=typeof e<"u",r=n?typeof t.initialDataUpdatedAt=="function"?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:n?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"loading",fetchStatus:"idle"}}class hO extends jh{constructor(e){super(),this.config=e||{},this.queries=[],this.queriesMap={}}build(e,n,r){var i;const o=n.queryKey,s=(i=n.queryHash)!=null?i:iw(o,n);let a=this.get(s);return a||(a=new dO({cache:this,logger:e.getLogger(),queryKey:o,queryHash:s,options:e.defaultQueryOptions(n),state:r,defaultOptions:e.getQueryDefaults(o)}),this.add(a)),a}add(e){this.queriesMap[e.queryHash]||(this.queriesMap[e.queryHash]=e,this.queries.push(e),this.notify({type:"added",query:e}))}remove(e){const n=this.queriesMap[e.queryHash];n&&(e.destroy(),this.queries=this.queries.filter(r=>r!==e),n===e&&delete this.queriesMap[e.queryHash],this.notify({type:"removed",query:e}))}clear(){Qt.batch(()=>{this.queries.forEach(e=>{this.remove(e)})})}get(e){return this.queriesMap[e]}getAll(){return this.queries}find(e,n){const[r]=Si(e,n);return typeof r.exact>"u"&&(r.exact=!0),this.queries.find(i=>zv(r,i))}findAll(e,n){const[r]=Si(e,n);return Object.keys(r).length>0?this.queries.filter(i=>zv(r,i)):this.queries}notify(e){Qt.batch(()=>{this.listeners.forEach(({listener:n})=>{n(e)})})}onFocus(){Qt.batch(()=>{this.queries.forEach(e=>{e.onFocus()})})}onOnline(){Qt.batch(()=>{this.queries.forEach(e=>{e.onOnline()})})}}class pO extends w6{constructor(e){super(),this.defaultOptions=e.defaultOptions,this.mutationId=e.mutationId,this.mutationCache=e.mutationCache,this.logger=e.logger||sw,this.observers=[],this.state=e.state||mO(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options={...this.defaultOptions,...e},this.updateCacheTime(this.options.cacheTime)}get meta(){return this.options.meta}setState(e){this.dispatch({type:"setState",state:e})}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),this.mutationCache.notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){this.observers=this.observers.filter(n=>n!==e),this.scheduleGc(),this.mutationCache.notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){this.observers.length||(this.state.status==="loading"?this.scheduleGc():this.mutationCache.remove(this))}continue(){var e,n;return(e=(n=this.retryer)==null?void 0:n.continue())!=null?e:this.execute()}async execute(){const e=()=>{var f;return this.retryer=g6({fn:()=>this.options.mutationFn?this.options.mutationFn(this.state.variables):Promise.reject("No mutationFn found"),onFail:(T,O)=>{this.dispatch({type:"failed",failureCount:T,error:O})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:(f=this.options.retry)!=null?f:0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.retryer.promise},n=this.state.status==="loading";try{var r,i,o,s,a,l,c,u;if(!n){var d,p,w,y;this.dispatch({type:"loading",variables:this.options.variables}),await((d=(p=this.mutationCache.config).onMutate)==null?void 0:d.call(p,this.state.variables,this));const T=await((w=(y=this.options).onMutate)==null?void 0:w.call(y,this.state.variables));T!==this.state.context&&this.dispatch({type:"loading",context:T,variables:this.state.variables})}const f=await e();return await((r=(i=this.mutationCache.config).onSuccess)==null?void 0:r.call(i,f,this.state.variables,this.state.context,this)),await((o=(s=this.options).onSuccess)==null?void 0:o.call(s,f,this.state.variables,this.state.context)),await((a=(l=this.mutationCache.config).onSettled)==null?void 0:a.call(l,f,null,this.state.variables,this.state.context,this)),await((c=(u=this.options).onSettled)==null?void 0:c.call(u,f,null,this.state.variables,this.state.context)),this.dispatch({type:"success",data:f}),f}catch(f){try{var E,C,b,m,v,x,_,S;throw await((E=(C=this.mutationCache.config).onError)==null?void 0:E.call(C,f,this.state.variables,this.state.context,this)),await((b=(m=this.options).onError)==null?void 0:b.call(m,f,this.state.variables,this.state.context)),await((v=(x=this.mutationCache.config).onSettled)==null?void 0:v.call(x,void 0,f,this.state.variables,this.state.context,this)),await((_=(S=this.options).onSettled)==null?void 0:_.call(S,void 0,f,this.state.variables,this.state.context)),f}finally{this.dispatch({type:"error",error:f})}}}dispatch(e){const n=r=>{switch(e.type){case"failed":return{...r,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...r,isPaused:!0};case"continue":return{...r,isPaused:!1};case"loading":return{...r,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!ow(this.options.networkMode),status:"loading",variables:e.variables};case"success":return{...r,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...r,data:void 0,error:e.error,failureCount:r.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"};case"setState":return{...r,...e.state}}};this.state=n(this.state),Qt.batch(()=>{this.observers.forEach(r=>{r.onMutationUpdate(e)}),this.mutationCache.notify({mutation:this,type:"updated",action:e})})}}function mO(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0}}class gO extends jh{constructor(e){super(),this.config=e||{},this.mutations=[],this.mutationId=0}build(e,n,r){const i=new pO({mutationCache:this,logger:e.getLogger(),mutationId:++this.mutationId,options:e.defaultMutationOptions(n),state:r,defaultOptions:n.mutationKey?e.getMutationDefaults(n.mutationKey):void 0});return this.add(i),i}add(e){this.mutations.push(e),this.notify({type:"added",mutation:e})}remove(e){this.mutations=this.mutations.filter(n=>n!==e),this.notify({type:"removed",mutation:e})}clear(){Qt.batch(()=>{this.mutations.forEach(e=>{this.remove(e)})})}getAll(){return this.mutations}find(e){return typeof e.exact>"u"&&(e.exact=!0),this.mutations.find(n=>Hv(e,n))}findAll(e){return this.mutations.filter(n=>Hv(e,n))}notify(e){Qt.batch(()=>{this.listeners.forEach(({listener:n})=>{n(e)})})}resumePausedMutations(){var e;return this.resuming=((e=this.resuming)!=null?e:Promise.resolve()).then(()=>{const n=this.mutations.filter(r=>r.state.isPaused);return Qt.batch(()=>n.reduce((r,i)=>r.then(()=>i.continue().catch(er)),Promise.resolve()))}).then(()=>{this.resuming=void 0}),this.resuming}}function wO(){return{onFetch:t=>{t.fetchFn=()=>{var e,n,r,i,o,s;const a=(e=t.fetchOptions)==null||(n=e.meta)==null?void 0:n.refetchPage,l=(r=t.fetchOptions)==null||(i=r.meta)==null?void 0:i.fetchMore,c=l==null?void 0:l.pageParam,u=(l==null?void 0:l.direction)==="forward",d=(l==null?void 0:l.direction)==="backward",p=((o=t.state.data)==null?void 0:o.pages)||[],w=((s=t.state.data)==null?void 0:s.pageParams)||[];let y=w,E=!1;const C=S=>{Object.defineProperty(S,"signal",{enumerable:!0,get:()=>{var f;if((f=t.signal)!=null&&f.aborted)E=!0;else{var T;(T=t.signal)==null||T.addEventListener("abort",()=>{E=!0})}return t.signal}})},b=t.options.queryFn||(()=>Promise.reject("Missing queryFn for queryKey '"+t.options.queryHash+"'")),m=(S,f,T,O)=>(y=O?[f,...y]:[...y,f],O?[T,...S]:[...S,T]),v=(S,f,T,O)=>{if(E)return Promise.reject("Cancelled");if(typeof T>"u"&&!f&&S.length)return Promise.resolve(S);const D={queryKey:t.queryKey,pageParam:T,meta:t.options.meta};C(D);const M=b(D);return Promise.resolve(M).then(ne=>m(S,T,ne,O))};let x;if(!p.length)x=v([]);else if(u){const S=typeof c<"u",f=S?c:Kv(t.options,p);x=v(p,S,f)}else if(d){const S=typeof c<"u",f=S?c:yO(t.options,p);x=v(p,S,f,!0)}else{y=[];const S=typeof t.options.getNextPageParam>"u";x=(a&&p[0]?a(p[0],0,p):!0)?v([],S,w[0]):Promise.resolve(m([],w[0],p[0]));for(let T=1;T<p.length;T++)x=x.then(O=>{if(a&&p[T]?a(p[T],T,p):!0){const M=S?w[T]:Kv(t.options,O);return v(O,S,M)}return Promise.resolve(m(O,w[T],p[T]))})}return x.then(S=>({pages:S,pageParams:y}))}}}}function Kv(t,e){return t.getNextPageParam==null?void 0:t.getNextPageParam(e[e.length-1],e)}function yO(t,e){return t.getPreviousPageParam==null?void 0:t.getPreviousPageParam(e[0],e)}class vO{constructor(e={}){this.queryCache=e.queryCache||new hO,this.mutationCache=e.mutationCache||new gO,this.logger=e.logger||sw,this.defaultOptions=e.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[],this.mountCount=0}mount(){this.mountCount++,this.mountCount===1&&(this.unsubscribeFocus=W1.subscribe(()=>{W1.isFocused()&&(this.resumePausedMutations(),this.queryCache.onFocus())}),this.unsubscribeOnline=Pf.subscribe(()=>{Pf.isOnline()&&(this.resumePausedMutations(),this.queryCache.onOnline())}))}unmount(){var e,n;this.mountCount--,this.mountCount===0&&((e=this.unsubscribeFocus)==null||e.call(this),this.unsubscribeFocus=void 0,(n=this.unsubscribeOnline)==null||n.call(this),this.unsubscribeOnline=void 0)}isFetching(e,n){const[r]=Si(e,n);return r.fetchStatus="fetching",this.queryCache.findAll(r).length}isMutating(e){return this.mutationCache.findAll({...e,fetching:!0}).length}getQueryData(e,n){var r;return(r=this.queryCache.find(e,n))==null?void 0:r.state.data}ensureQueryData(e,n,r){const i=td(e,n,r),o=this.getQueryData(i.queryKey);return o?Promise.resolve(o):this.fetchQuery(i)}getQueriesData(e){return this.getQueryCache().findAll(e).map(({queryKey:n,state:r})=>{const i=r.data;return[n,i]})}setQueryData(e,n,r){const i=this.queryCache.find(e),o=i==null?void 0:i.state.data,s=nO(n,o);if(typeof s>"u")return;const a=td(e),l=this.defaultQueryOptions(a);return this.queryCache.build(this,l).setData(s,{...r,manual:!0})}setQueriesData(e,n,r){return Qt.batch(()=>this.getQueryCache().findAll(e).map(({queryKey:i})=>[i,this.setQueryData(i,n,r)]))}getQueryState(e,n){var r;return(r=this.queryCache.find(e,n))==null?void 0:r.state}removeQueries(e,n){const[r]=Si(e,n),i=this.queryCache;Qt.batch(()=>{i.findAll(r).forEach(o=>{i.remove(o)})})}resetQueries(e,n,r){const[i,o]=Si(e,n,r),s=this.queryCache,a={type:"active",...i};return Qt.batch(()=>(s.findAll(i).forEach(l=>{l.reset()}),this.refetchQueries(a,o)))}cancelQueries(e,n,r){const[i,o={}]=Si(e,n,r);typeof o.revert>"u"&&(o.revert=!0);const s=Qt.batch(()=>this.queryCache.findAll(i).map(a=>a.cancel(o)));return Promise.all(s).then(er).catch(er)}invalidateQueries(e,n,r){const[i,o]=Si(e,n,r);return Qt.batch(()=>{var s,a;if(this.queryCache.findAll(i).forEach(c=>{c.invalidate()}),i.refetchType==="none")return Promise.resolve();const l={...i,type:(s=(a=i.refetchType)!=null?a:i.type)!=null?s:"active"};return this.refetchQueries(l,o)})}refetchQueries(e,n,r){const[i,o]=Si(e,n,r),s=Qt.batch(()=>this.queryCache.findAll(i).filter(l=>!l.isDisabled()).map(l=>{var c;return l.fetch(void 0,{...o,cancelRefetch:(c=o==null?void 0:o.cancelRefetch)!=null?c:!0,meta:{refetchPage:i.refetchPage}})}));let a=Promise.all(s).then(er);return o!=null&&o.throwOnError||(a=a.catch(er)),a}fetchQuery(e,n,r){const i=td(e,n,r),o=this.defaultQueryOptions(i);typeof o.retry>"u"&&(o.retry=!1);const s=this.queryCache.build(this,o);return s.isStaleByTime(o.staleTime)?s.fetch(o):Promise.resolve(s.state.data)}prefetchQuery(e,n,r){return this.fetchQuery(e,n,r).then(er).catch(er)}fetchInfiniteQuery(e,n,r){const i=td(e,n,r);return i.behavior=wO(),this.fetchQuery(i)}prefetchInfiniteQuery(e,n,r){return this.fetchInfiniteQuery(e,n,r).then(er).catch(er)}resumePausedMutations(){return this.mutationCache.resumePausedMutations()}getQueryCache(){return this.queryCache}getMutationCache(){return this.mutationCache}getLogger(){return this.logger}getDefaultOptions(){return this.defaultOptions}setDefaultOptions(e){this.defaultOptions=e}setQueryDefaults(e,n){const r=this.queryDefaults.find(i=>Do(e)===Do(i.queryKey));r?r.defaultOptions=n:this.queryDefaults.push({queryKey:e,defaultOptions:n})}getQueryDefaults(e){if(!e)return;const n=this.queryDefaults.find(r=>Tf(e,r.queryKey));return n==null?void 0:n.defaultOptions}setMutationDefaults(e,n){const r=this.mutationDefaults.find(i=>Do(e)===Do(i.mutationKey));r?r.defaultOptions=n:this.mutationDefaults.push({mutationKey:e,defaultOptions:n})}getMutationDefaults(e){if(!e)return;const n=this.mutationDefaults.find(r=>Tf(e,r.mutationKey));return n==null?void 0:n.defaultOptions}defaultQueryOptions(e){if(e!=null&&e._defaulted)return e;const n={...this.defaultOptions.queries,...this.getQueryDefaults(e==null?void 0:e.queryKey),...e,_defaulted:!0};return!n.queryHash&&n.queryKey&&(n.queryHash=iw(n.queryKey,n)),typeof n.refetchOnReconnect>"u"&&(n.refetchOnReconnect=n.networkMode!=="always"),typeof n.useErrorBoundary>"u"&&(n.useErrorBoundary=!!n.suspense),n}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{...this.defaultOptions.mutations,...this.getMutationDefaults(e==null?void 0:e.mutationKey),...e,_defaulted:!0}}clear(){this.queryCache.clear(),this.mutationCache.clear()}}function bO(t){return{mutationKey:t.options.mutationKey,state:t.state}}function xO(t){return{state:t.state,queryKey:t.queryKey,queryHash:t.queryHash}}function EO(t){return t.state.isPaused}function _O(t){return t.state.status==="success"}function CO(t,e={}){const n=[],r=[];if(e.dehydrateMutations!==!1){const i=e.shouldDehydrateMutation||EO;t.getMutationCache().getAll().forEach(o=>{i(o)&&n.push(bO(o))})}if(e.dehydrateQueries!==!1){const i=e.shouldDehydrateQuery||_O;t.getQueryCache().getAll().forEach(o=>{i(o)&&r.push(xO(o))})}return{mutations:n,queries:r}}function SO(t,e,n){if(typeof e!="object"||e===null)return;const r=t.getMutationCache(),i=t.getQueryCache(),o=e.mutations||[],s=e.queries||[];o.forEach(a=>{var l;r.build(t,{...n==null||(l=n.defaultOptions)==null?void 0:l.mutations,mutationKey:a.mutationKey},a.state)}),s.forEach(({queryKey:a,state:l,queryHash:c})=>{var u;const d=i.get(c);if(d){if(d.state.dataUpdatedAt<l.dataUpdatedAt){const{fetchStatus:p,...w}=l;d.setState(w)}return}i.build(t,{...n==null||(u=n.defaultOptions)==null?void 0:u.queries,queryKey:a,queryHash:c},{...l,fetchStatus:"idle"})})}const Yv=zt.createContext(void 0),AO=zt.createContext(!1);function TO(t,e){return t||(e&&typeof window<"u"?(window.ReactQueryClientContext||(window.ReactQueryClientContext=Yv),window.ReactQueryClientContext):Yv)}const PO=({client:t,children:e,context:n,contextSharing:r=!1})=>{zt.useEffect(()=>(t.mount(),()=>{t.unmount()}),[t]);const i=TO(n,r);return zt.createElement(AO.Provider,{value:!n&&r},zt.createElement(i.Provider,{value:t},e))},$O=["added","removed","updated"];function Qv(t){return $O.includes(t)}async function IO({queryClient:t,persister:e,maxAge:n=1e3*60*60*24,buster:r="",hydrateOptions:i}){try{const o=await e.restoreClient();if(o)if(o.timestamp){const s=Date.now()-o.timestamp>n,a=o.buster!==r;s||a?e.removeClient():SO(t,o.clientState,i)}else e.removeClient()}catch{e.removeClient()}}async function Jv({queryClient:t,persister:e,buster:n="",dehydrateOptions:r}){const i={buster:n,timestamp:Date.now(),clientState:CO(t,r)};await e.persistClient(i)}function kO(t){const e=t.queryClient.getQueryCache().subscribe(r=>{Qv(r.type)&&Jv(t)}),n=t.queryClient.getMutationCache().subscribe(r=>{Qv(r.type)&&Jv(t)});return()=>{e(),n()}}function OO(t){let e=!1,n;const r=()=>{e=!0,n==null||n()},i=IO(t).then(()=>{e||(n=kO(t))});return[r,i]}var DO={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fh=zt,RO=CS;function NO(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var MO=typeof Object.is=="function"?Object.is:NO,LO=RO.useSyncExternalStore,UO=Fh.useRef,jO=Fh.useEffect,BO=Fh.useMemo,FO=Fh.useDebugValue;DO.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var o=UO(null);if(o.current===null){var s={hasValue:!1,value:null};o.current=s}else s=o.current;o=BO(function(){function l(w){if(!c){if(c=!0,u=w,w=r(w),i!==void 0&&s.hasValue){var y=s.value;if(i(y,w))return d=y}return d=w}if(y=d,MO(u,w))return y;var E=r(w);return i!==void 0&&i(y,E)?y:(u=w,d=E)}var c=!1,u,d,p=n===void 0?null:n;return[function(){return l(e())},p===null?void 0:function(){return l(p())}]},[e,n,r,i]);var a=LO(t,o[0],o[1]);return jO(function(){s.hasValue=!0,s.value=a},[a]),FO(a),a};function WO({queryClient:t=new vO({defaultOptions:{queries:{cacheTime:1e3*60*60*24,networkMode:"offlineFirst",refetchOnWindowFocus:!1,retry:0},mutations:{networkMode:"offlineFirst"}}}),storage:e=G5({storage:typeof window<"u"&&window.localStorage?window.localStorage:Z5}),persister:n=typeof window<"u"?eO({key:"cache",storage:e,serialize:i=>i,deserialize:i=>i}):void 0,...r}){const i=K9({...r,storage:e});return n&&OO({queryClient:t,persister:n,dehydrateOptions:{shouldDehydrateQuery:o=>o.cacheTime!==0&&o.queryKey[0].persist!==!1}}),Object.assign(i,{queryClient:t})}var zO=zt.createContext(void 0),HO=zt.createContext(void 0);function VO({children:t,config:e}){return zt.createElement(zO.Provider,{children:zt.createElement(PO,{children:t,client:e.queryClient,context:HO}),value:e})}var vl,ks,qO=class extends mh{constructor({chains:t,options:e}){super({chains:t,options:{reloadOnDisconnect:!1,...e}}),this.id="coinbaseWallet",this.name="Coinbase Wallet",this.ready=!0,ln(this,vl,void 0),ln(this,ks,void 0),this.onAccountsChanged=n=>{n.length===0?this.emit("disconnect"):this.emit("change",{account:Fn(n[0])})},this.onChainChanged=n=>{const r=Qd(n),i=this.isChainUnsupported(r);this.emit("change",{chain:{id:r,unsupported:i}})},this.onDisconnect=()=>{this.emit("disconnect")}}async connect({chainId:t}={}){try{const e=await this.getProvider();e.on("accountsChanged",this.onAccountsChanged),e.on("chainChanged",this.onChainChanged),e.on("disconnect",this.onDisconnect),this.emit("message",{type:"connecting"});const n=await e.enable(),r=Fn(n[0]);let i=await this.getChainId(),o=this.isChainUnsupported(i);return t&&i!==t&&(i=(await this.switchChain(t)).id,o=this.isChainUnsupported(i)),{account:r,chain:{id:i,unsupported:o}}}catch(e){throw/(user closed modal|accounts received is empty)/i.test(e.message)?new fn(e):e}}async disconnect(){if(!Ve(this,ks))return;const t=await this.getProvider();t.removeListener("accountsChanged",this.onAccountsChanged),t.removeListener("chainChanged",this.onChainChanged),t.removeListener("disconnect",this.onDisconnect),t.disconnect(),t.close()}async getAccount(){const e=await(await this.getProvider()).request({method:"eth_accounts"});return Fn(e[0])}async getChainId(){const t=await this.getProvider();return Qd(t.chainId)}async getProvider(){var t;if(!Ve(this,ks)){let e=(await ha(()=>import("./index-DS48olc_.js").then(s=>s.i),__vite__mapDeps([0,1]))).default;typeof e!="function"&&typeof e.default=="function"&&(e=e.default),wc(this,vl,new e(this.options));const n=(t=Ve(this,vl).walletExtension)==null?void 0:t.getChainId(),r=this.chains.find(s=>this.options.chainId?s.id===this.options.chainId:s.id===n)||this.chains[0],i=this.options.chainId||(r==null?void 0:r.id),o=this.options.jsonRpcUrl||(r==null?void 0:r.rpcUrls.default.http[0]);wc(this,ks,Ve(this,vl).makeWeb3Provider(o,i))}return Ve(this,ks)}async getWalletClient({chainId:t}={}){const[e,n]=await Promise.all([this.getProvider(),this.getAccount()]),r=this.chains.find(i=>i.id===t);if(!e)throw new Error("provider is required.");return ph({account:n,chain:r,transport:fh(e)})}async isAuthorized(){try{return!!await this.getAccount()}catch{return!1}}async switchChain(t){var r;const e=await this.getProvider(),n=Se(t);try{return await e.request({method:"wallet_switchEthereumChain",params:[{chainId:n}]}),this.chains.find(i=>i.id===t)??{id:t,name:`Chain ${n}`,network:`${n}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}}}catch(i){const o=this.chains.find(s=>s.id===t);if(!o)throw new H5({chainId:t,connectorId:this.id});if(i.code===4902)try{return await e.request({method:"wallet_addEthereumChain",params:[{chainId:n,chainName:o.name,nativeCurrency:o.nativeCurrency,rpcUrls:[((r=o.rpcUrls.public)==null?void 0:r.http[0])??""],blockExplorerUrls:this.getBlockExplorerUrls(o)}]}),o}catch(s){throw new fn(s)}throw new dr(i)}}async watchAsset({address:t,decimals:e=18,image:n,symbol:r}){return(await this.getProvider()).request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:t,decimals:e,image:n,symbol:r}}})}};vl=new WeakMap;ks=new WeakMap;var aw={},Wh={},Te={},y6={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});function e(a,l){var c=a>>>16&65535,u=a&65535,d=l>>>16&65535,p=l&65535;return u*p+(c*p+u*d<<16>>>0)|0}t.mul=Math.imul||e;function n(a,l){return a+l|0}t.add=n;function r(a,l){return a-l|0}t.sub=r;function i(a,l){return a<<l|a>>>32-l}t.rotl=i;function o(a,l){return a<<32-l|a>>>l}t.rotr=o;function s(a){return typeof a=="number"&&isFinite(a)&&Math.floor(a)===a}t.isInteger=Number.isInteger||s,t.MAX_SAFE_INTEGER=9007199254740991,t.isSafeInteger=function(a){return t.isInteger(a)&&a>=-t.MAX_SAFE_INTEGER&&a<=t.MAX_SAFE_INTEGER}})(y6);Object.defineProperty(Te,"__esModule",{value:!0});var v6=y6;function ZO(t,e){return e===void 0&&(e=0),(t[e+0]<<8|t[e+1])<<16>>16}Te.readInt16BE=ZO;function GO(t,e){return e===void 0&&(e=0),(t[e+0]<<8|t[e+1])>>>0}Te.readUint16BE=GO;function KO(t,e){return e===void 0&&(e=0),(t[e+1]<<8|t[e])<<16>>16}Te.readInt16LE=KO;function YO(t,e){return e===void 0&&(e=0),(t[e+1]<<8|t[e])>>>0}Te.readUint16LE=YO;function b6(t,e,n){return e===void 0&&(e=new Uint8Array(2)),n===void 0&&(n=0),e[n+0]=t>>>8,e[n+1]=t>>>0,e}Te.writeUint16BE=b6;Te.writeInt16BE=b6;function x6(t,e,n){return e===void 0&&(e=new Uint8Array(2)),n===void 0&&(n=0),e[n+0]=t>>>0,e[n+1]=t>>>8,e}Te.writeUint16LE=x6;Te.writeInt16LE=x6;function z1(t,e){return e===void 0&&(e=0),t[e]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3]}Te.readInt32BE=z1;function H1(t,e){return e===void 0&&(e=0),(t[e]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3])>>>0}Te.readUint32BE=H1;function V1(t,e){return e===void 0&&(e=0),t[e+3]<<24|t[e+2]<<16|t[e+1]<<8|t[e]}Te.readInt32LE=V1;function q1(t,e){return e===void 0&&(e=0),(t[e+3]<<24|t[e+2]<<16|t[e+1]<<8|t[e])>>>0}Te.readUint32LE=q1;function $f(t,e,n){return e===void 0&&(e=new Uint8Array(4)),n===void 0&&(n=0),e[n+0]=t>>>24,e[n+1]=t>>>16,e[n+2]=t>>>8,e[n+3]=t>>>0,e}Te.writeUint32BE=$f;Te.writeInt32BE=$f;function If(t,e,n){return e===void 0&&(e=new Uint8Array(4)),n===void 0&&(n=0),e[n+0]=t>>>0,e[n+1]=t>>>8,e[n+2]=t>>>16,e[n+3]=t>>>24,e}Te.writeUint32LE=If;Te.writeInt32LE=If;function QO(t,e){e===void 0&&(e=0);var n=z1(t,e),r=z1(t,e+4);return n*4294967296+r-(r>>31)*4294967296}Te.readInt64BE=QO;function JO(t,e){e===void 0&&(e=0);var n=H1(t,e),r=H1(t,e+4);return n*4294967296+r}Te.readUint64BE=JO;function XO(t,e){e===void 0&&(e=0);var n=V1(t,e),r=V1(t,e+4);return r*4294967296+n-(n>>31)*4294967296}Te.readInt64LE=XO;function eD(t,e){e===void 0&&(e=0);var n=q1(t,e),r=q1(t,e+4);return r*4294967296+n}Te.readUint64LE=eD;function E6(t,e,n){return e===void 0&&(e=new Uint8Array(8)),n===void 0&&(n=0),$f(t/4294967296>>>0,e,n),$f(t>>>0,e,n+4),e}Te.writeUint64BE=E6;Te.writeInt64BE=E6;function _6(t,e,n){return e===void 0&&(e=new Uint8Array(8)),n===void 0&&(n=0),If(t>>>0,e,n),If(t/4294967296>>>0,e,n+4),e}Te.writeUint64LE=_6;Te.writeInt64LE=_6;function tD(t,e,n){if(n===void 0&&(n=0),t%8!==0)throw new Error("readUintBE supports only bitLengths divisible by 8");if(t/8>e.length-n)throw new Error("readUintBE: array is too short for the given bitLength");for(var r=0,i=1,o=t/8+n-1;o>=n;o--)r+=e[o]*i,i*=256;return r}Te.readUintBE=tD;function nD(t,e,n){if(n===void 0&&(n=0),t%8!==0)throw new Error("readUintLE supports only bitLengths divisible by 8");if(t/8>e.length-n)throw new Error("readUintLE: array is too short for the given bitLength");for(var r=0,i=1,o=n;o<n+t/8;o++)r+=e[o]*i,i*=256;return r}Te.readUintLE=nD;function rD(t,e,n,r){if(n===void 0&&(n=new Uint8Array(t/8)),r===void 0&&(r=0),t%8!==0)throw new Error("writeUintBE supports only bitLengths divisible by 8");if(!v6.isSafeInteger(e))throw new Error("writeUintBE value must be an integer");for(var i=1,o=t/8+r-1;o>=r;o--)n[o]=e/i&255,i*=256;return n}Te.writeUintBE=rD;function iD(t,e,n,r){if(n===void 0&&(n=new Uint8Array(t/8)),r===void 0&&(r=0),t%8!==0)throw new Error("writeUintLE supports only bitLengths divisible by 8");if(!v6.isSafeInteger(e))throw new Error("writeUintLE value must be an integer");for(var i=1,o=r;o<r+t/8;o++)n[o]=e/i&255,i*=256;return n}Te.writeUintLE=iD;function oD(t,e){e===void 0&&(e=0);var n=new DataView(t.buffer,t.byteOffset,t.byteLength);return n.getFloat32(e)}Te.readFloat32BE=oD;function sD(t,e){e===void 0&&(e=0);var n=new DataView(t.buffer,t.byteOffset,t.byteLength);return n.getFloat32(e,!0)}Te.readFloat32LE=sD;function aD(t,e){e===void 0&&(e=0);var n=new DataView(t.buffer,t.byteOffset,t.byteLength);return n.getFloat64(e)}Te.readFloat64BE=aD;function lD(t,e){e===void 0&&(e=0);var n=new DataView(t.buffer,t.byteOffset,t.byteLength);return n.getFloat64(e,!0)}Te.readFloat64LE=lD;function cD(t,e,n){e===void 0&&(e=new Uint8Array(4)),n===void 0&&(n=0);var r=new DataView(e.buffer,e.byteOffset,e.byteLength);return r.setFloat32(n,t),e}Te.writeFloat32BE=cD;function uD(t,e,n){e===void 0&&(e=new Uint8Array(4)),n===void 0&&(n=0);var r=new DataView(e.buffer,e.byteOffset,e.byteLength);return r.setFloat32(n,t,!0),e}Te.writeFloat32LE=uD;function dD(t,e,n){e===void 0&&(e=new Uint8Array(8)),n===void 0&&(n=0);var r=new DataView(e.buffer,e.byteOffset,e.byteLength);return r.setFloat64(n,t),e}Te.writeFloat64BE=dD;function fD(t,e,n){e===void 0&&(e=new Uint8Array(8)),n===void 0&&(n=0);var r=new DataView(e.buffer,e.byteOffset,e.byteLength);return r.setFloat64(n,t,!0),e}Te.writeFloat64LE=fD;var Er={};Object.defineProperty(Er,"__esModule",{value:!0});function hD(t){for(var e=0;e<t.length;e++)t[e]=0;return t}Er.wipe=hD;Object.defineProperty(Wh,"__esModule",{value:!0});var Ft=Te,Z1=Er,pD=20;function mD(t,e,n){for(var r=1634760805,i=857760878,o=2036477234,s=1797285236,a=n[3]<<24|n[2]<<16|n[1]<<8|n[0],l=n[7]<<24|n[6]<<16|n[5]<<8|n[4],c=n[11]<<24|n[10]<<16|n[9]<<8|n[8],u=n[15]<<24|n[14]<<16|n[13]<<8|n[12],d=n[19]<<24|n[18]<<16|n[17]<<8|n[16],p=n[23]<<24|n[22]<<16|n[21]<<8|n[20],w=n[27]<<24|n[26]<<16|n[25]<<8|n[24],y=n[31]<<24|n[30]<<16|n[29]<<8|n[28],E=e[3]<<24|e[2]<<16|e[1]<<8|e[0],C=e[7]<<24|e[6]<<16|e[5]<<8|e[4],b=e[11]<<24|e[10]<<16|e[9]<<8|e[8],m=e[15]<<24|e[14]<<16|e[13]<<8|e[12],v=r,x=i,_=o,S=s,f=a,T=l,O=c,D=u,M=d,ee=p,ne=w,H=y,F=E,j=C,B=b,R=m,W=0;W<pD;W+=2)v=v+f|0,F^=v,F=F>>>16|F<<16,M=M+F|0,f^=M,f=f>>>20|f<<12,x=x+T|0,j^=x,j=j>>>16|j<<16,ee=ee+j|0,T^=ee,T=T>>>20|T<<12,_=_+O|0,B^=_,B=B>>>16|B<<16,ne=ne+B|0,O^=ne,O=O>>>20|O<<12,S=S+D|0,R^=S,R=R>>>16|R<<16,H=H+R|0,D^=H,D=D>>>20|D<<12,_=_+O|0,B^=_,B=B>>>24|B<<8,ne=ne+B|0,O^=ne,O=O>>>25|O<<7,S=S+D|0,R^=S,R=R>>>24|R<<8,H=H+R|0,D^=H,D=D>>>25|D<<7,x=x+T|0,j^=x,j=j>>>24|j<<8,ee=ee+j|0,T^=ee,T=T>>>25|T<<7,v=v+f|0,F^=v,F=F>>>24|F<<8,M=M+F|0,f^=M,f=f>>>25|f<<7,v=v+T|0,R^=v,R=R>>>16|R<<16,ne=ne+R|0,T^=ne,T=T>>>20|T<<12,x=x+O|0,F^=x,F=F>>>16|F<<16,H=H+F|0,O^=H,O=O>>>20|O<<12,_=_+D|0,j^=_,j=j>>>16|j<<16,M=M+j|0,D^=M,D=D>>>20|D<<12,S=S+f|0,B^=S,B=B>>>16|B<<16,ee=ee+B|0,f^=ee,f=f>>>20|f<<12,_=_+D|0,j^=_,j=j>>>24|j<<8,M=M+j|0,D^=M,D=D>>>25|D<<7,S=S+f|0,B^=S,B=B>>>24|B<<8,ee=ee+B|0,f^=ee,f=f>>>25|f<<7,x=x+O|0,F^=x,F=F>>>24|F<<8,H=H+F|0,O^=H,O=O>>>25|O<<7,v=v+T|0,R^=v,R=R>>>24|R<<8,ne=ne+R|0,T^=ne,T=T>>>25|T<<7;Ft.writeUint32LE(v+r|0,t,0),Ft.writeUint32LE(x+i|0,t,4),Ft.writeUint32LE(_+o|0,t,8),Ft.writeUint32LE(S+s|0,t,12),Ft.writeUint32LE(f+a|0,t,16),Ft.writeUint32LE(T+l|0,t,20),Ft.writeUint32LE(O+c|0,t,24),Ft.writeUint32LE(D+u|0,t,28),Ft.writeUint32LE(M+d|0,t,32),Ft.writeUint32LE(ee+p|0,t,36),Ft.writeUint32LE(ne+w|0,t,40),Ft.writeUint32LE(H+y|0,t,44),Ft.writeUint32LE(F+E|0,t,48),Ft.writeUint32LE(j+C|0,t,52),Ft.writeUint32LE(B+b|0,t,56),Ft.writeUint32LE(R+m|0,t,60)}function C6(t,e,n,r,i){if(i===void 0&&(i=0),t.length!==32)throw new Error("ChaCha: key size must be 32 bytes");if(r.length<n.length)throw new Error("ChaCha: destination is shorter than source");var o,s;if(i===0){if(e.length!==8&&e.length!==12)throw new Error("ChaCha nonce must be 8 or 12 bytes");o=new Uint8Array(16),s=o.length-e.length,o.set(e,s)}else{if(e.length!==16)throw new Error("ChaCha nonce with counter must be 16 bytes");o=e,s=i}for(var a=new Uint8Array(64),l=0;l<n.length;l+=64){mD(a,o,t);for(var c=l;c<l+64&&c<n.length;c++)r[c]=n[c]^a[c-l];wD(o,0,s)}return Z1.wipe(a),i===0&&Z1.wipe(o),r}Wh.streamXOR=C6;function gD(t,e,n,r){return r===void 0&&(r=0),Z1.wipe(n),C6(t,e,n,n,r)}Wh.stream=gD;function wD(t,e,n){for(var r=1;n--;)r=r+(t[e]&255)|0,t[e]=r&255,r>>>=8,e++;if(r>0)throw new Error("ChaCha: counter overflow")}var S6={},wo={};Object.defineProperty(wo,"__esModule",{value:!0});function yD(t,e,n){return~(t-1)&e|t-1&n}wo.select=yD;function vD(t,e){return(t|0)-(e|0)-1>>>31&1}wo.lessOrEqual=vD;function A6(t,e){if(t.length!==e.length)return 0;for(var n=0,r=0;r<t.length;r++)n|=t[r]^e[r];return 1&n-1>>>8}wo.compare=A6;function bD(t,e){return t.length===0||e.length===0?!1:A6(t,e)!==0}wo.equal=bD;(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e=wo,n=Er;t.DIGEST_LENGTH=16;var r=function(){function s(a){this.digestLength=t.DIGEST_LENGTH,this._buffer=new Uint8Array(16),this._r=new Uint16Array(10),this._h=new Uint16Array(10),this._pad=new Uint16Array(8),this._leftover=0,this._fin=0,this._finished=!1;var l=a[0]|a[1]<<8;this._r[0]=l&8191;var c=a[2]|a[3]<<8;this._r[1]=(l>>>13|c<<3)&8191;var u=a[4]|a[5]<<8;this._r[2]=(c>>>10|u<<6)&7939;var d=a[6]|a[7]<<8;this._r[3]=(u>>>7|d<<9)&8191;var p=a[8]|a[9]<<8;this._r[4]=(d>>>4|p<<12)&255,this._r[5]=p>>>1&8190;var w=a[10]|a[11]<<8;this._r[6]=(p>>>14|w<<2)&8191;var y=a[12]|a[13]<<8;this._r[7]=(w>>>11|y<<5)&8065;var E=a[14]|a[15]<<8;this._r[8]=(y>>>8|E<<8)&8191,this._r[9]=E>>>5&127,this._pad[0]=a[16]|a[17]<<8,this._pad[1]=a[18]|a[19]<<8,this._pad[2]=a[20]|a[21]<<8,this._pad[3]=a[22]|a[23]<<8,this._pad[4]=a[24]|a[25]<<8,this._pad[5]=a[26]|a[27]<<8,this._pad[6]=a[28]|a[29]<<8,this._pad[7]=a[30]|a[31]<<8}return s.prototype._blocks=function(a,l,c){for(var u=this._fin?0:2048,d=this._h[0],p=this._h[1],w=this._h[2],y=this._h[3],E=this._h[4],C=this._h[5],b=this._h[6],m=this._h[7],v=this._h[8],x=this._h[9],_=this._r[0],S=this._r[1],f=this._r[2],T=this._r[3],O=this._r[4],D=this._r[5],M=this._r[6],ee=this._r[7],ne=this._r[8],H=this._r[9];c>=16;){var F=a[l+0]|a[l+1]<<8;d+=F&8191;var j=a[l+2]|a[l+3]<<8;p+=(F>>>13|j<<3)&8191;var B=a[l+4]|a[l+5]<<8;w+=(j>>>10|B<<6)&8191;var R=a[l+6]|a[l+7]<<8;y+=(B>>>7|R<<9)&8191;var W=a[l+8]|a[l+9]<<8;E+=(R>>>4|W<<12)&8191,C+=W>>>1&8191;var z=a[l+10]|a[l+11]<<8;b+=(W>>>14|z<<2)&8191;var Z=a[l+12]|a[l+13]<<8;m+=(z>>>11|Z<<5)&8191;var X=a[l+14]|a[l+15]<<8;v+=(Z>>>8|X<<8)&8191,x+=X>>>5|u;var K=0,oe=K;oe+=d*_,oe+=p*(5*H),oe+=w*(5*ne),oe+=y*(5*ee),oe+=E*(5*M),K=oe>>>13,oe&=8191,oe+=C*(5*D),oe+=b*(5*O),oe+=m*(5*T),oe+=v*(5*f),oe+=x*(5*S),K+=oe>>>13,oe&=8191;var fe=K;fe+=d*S,fe+=p*_,fe+=w*(5*H),fe+=y*(5*ne),fe+=E*(5*ee),K=fe>>>13,fe&=8191,fe+=C*(5*M),fe+=b*(5*D),fe+=m*(5*O),fe+=v*(5*T),fe+=x*(5*f),K+=fe>>>13,fe&=8191;var pe=K;pe+=d*f,pe+=p*S,pe+=w*_,pe+=y*(5*H),pe+=E*(5*ne),K=pe>>>13,pe&=8191,pe+=C*(5*ee),pe+=b*(5*M),pe+=m*(5*D),pe+=v*(5*O),pe+=x*(5*T),K+=pe>>>13,pe&=8191;var ye=K;ye+=d*T,ye+=p*f,ye+=w*S,ye+=y*_,ye+=E*(5*H),K=ye>>>13,ye&=8191,ye+=C*(5*ne),ye+=b*(5*ee),ye+=m*(5*M),ye+=v*(5*D),ye+=x*(5*O),K+=ye>>>13,ye&=8191;var _e=K;_e+=d*O,_e+=p*T,_e+=w*f,_e+=y*S,_e+=E*_,K=_e>>>13,_e&=8191,_e+=C*(5*H),_e+=b*(5*ne),_e+=m*(5*ee),_e+=v*(5*M),_e+=x*(5*D),K+=_e>>>13,_e&=8191;var Pe=K;Pe+=d*D,Pe+=p*O,Pe+=w*T,Pe+=y*f,Pe+=E*S,K=Pe>>>13,Pe&=8191,Pe+=C*_,Pe+=b*(5*H),Pe+=m*(5*ne),Pe+=v*(5*ee),Pe+=x*(5*M),K+=Pe>>>13,Pe&=8191;var ve=K;ve+=d*M,ve+=p*D,ve+=w*O,ve+=y*T,ve+=E*f,K=ve>>>13,ve&=8191,ve+=C*S,ve+=b*_,ve+=m*(5*H),ve+=v*(5*ne),ve+=x*(5*ee),K+=ve>>>13,ve&=8191;var Oe=K;Oe+=d*ee,Oe+=p*M,Oe+=w*D,Oe+=y*O,Oe+=E*T,K=Oe>>>13,Oe&=8191,Oe+=C*f,Oe+=b*S,Oe+=m*_,Oe+=v*(5*H),Oe+=x*(5*ne),K+=Oe>>>13,Oe&=8191;var Le=K;Le+=d*ne,Le+=p*ee,Le+=w*M,Le+=y*D,Le+=E*O,K=Le>>>13,Le&=8191,Le+=C*T,Le+=b*f,Le+=m*S,Le+=v*_,Le+=x*(5*H),K+=Le>>>13,Le&=8191;var Re=K;Re+=d*H,Re+=p*ne,Re+=w*ee,Re+=y*M,Re+=E*D,K=Re>>>13,Re&=8191,Re+=C*O,Re+=b*T,Re+=m*f,Re+=v*S,Re+=x*_,K+=Re>>>13,Re&=8191,K=(K<<2)+K|0,K=K+oe|0,oe=K&8191,K=K>>>13,fe+=K,d=oe,p=fe,w=pe,y=ye,E=_e,C=Pe,b=ve,m=Oe,v=Le,x=Re,l+=16,c-=16}this._h[0]=d,this._h[1]=p,this._h[2]=w,this._h[3]=y,this._h[4]=E,this._h[5]=C,this._h[6]=b,this._h[7]=m,this._h[8]=v,this._h[9]=x},s.prototype.finish=function(a,l){l===void 0&&(l=0);var c=new Uint16Array(10),u,d,p,w;if(this._leftover){for(w=this._leftover,this._buffer[w++]=1;w<16;w++)this._buffer[w]=0;this._fin=1,this._blocks(this._buffer,0,16)}for(u=this._h[1]>>>13,this._h[1]&=8191,w=2;w<10;w++)this._h[w]+=u,u=this._h[w]>>>13,this._h[w]&=8191;for(this._h[0]+=u*5,u=this._h[0]>>>13,this._h[0]&=8191,this._h[1]+=u,u=this._h[1]>>>13,this._h[1]&=8191,this._h[2]+=u,c[0]=this._h[0]+5,u=c[0]>>>13,c[0]&=8191,w=1;w<10;w++)c[w]=this._h[w]+u,u=c[w]>>>13,c[w]&=8191;for(c[9]-=8192,d=(u^1)-1,w=0;w<10;w++)c[w]&=d;for(d=~d,w=0;w<10;w++)this._h[w]=this._h[w]&d|c[w];for(this._h[0]=(this._h[0]|this._h[1]<<13)&65535,this._h[1]=(this._h[1]>>>3|this._h[2]<<10)&65535,this._h[2]=(this._h[2]>>>6|this._h[3]<<7)&65535,this._h[3]=(this._h[3]>>>9|this._h[4]<<4)&65535,this._h[4]=(this._h[4]>>>12|this._h[5]<<1|this._h[6]<<14)&65535,this._h[5]=(this._h[6]>>>2|this._h[7]<<11)&65535,this._h[6]=(this._h[7]>>>5|this._h[8]<<8)&65535,this._h[7]=(this._h[8]>>>8|this._h[9]<<5)&65535,p=this._h[0]+this._pad[0],this._h[0]=p&65535,w=1;w<8;w++)p=(this._h[w]+this._pad[w]|0)+(p>>>16)|0,this._h[w]=p&65535;return a[l+0]=this._h[0]>>>0,a[l+1]=this._h[0]>>>8,a[l+2]=this._h[1]>>>0,a[l+3]=this._h[1]>>>8,a[l+4]=this._h[2]>>>0,a[l+5]=this._h[2]>>>8,a[l+6]=this._h[3]>>>0,a[l+7]=this._h[3]>>>8,a[l+8]=this._h[4]>>>0,a[l+9]=this._h[4]>>>8,a[l+10]=this._h[5]>>>0,a[l+11]=this._h[5]>>>8,a[l+12]=this._h[6]>>>0,a[l+13]=this._h[6]>>>8,a[l+14]=this._h[7]>>>0,a[l+15]=this._h[7]>>>8,this._finished=!0,this},s.prototype.update=function(a){var l=0,c=a.length,u;if(this._leftover){u=16-this._leftover,u>c&&(u=c);for(var d=0;d<u;d++)this._buffer[this._leftover+d]=a[l+d];if(c-=u,l+=u,this._leftover+=u,this._leftover<16)return this;this._blocks(this._buffer,0,16),this._leftover=0}if(c>=16&&(u=c-c%16,this._blocks(a,l,u),l+=u,c-=u),c){for(var d=0;d<c;d++)this._buffer[this._leftover+d]=a[l+d];this._leftover+=c}return this},s.prototype.digest=function(){if(this._finished)throw new Error("Poly1305 was finished");var a=new Uint8Array(16);return this.finish(a),a},s.prototype.clean=function(){return n.wipe(this._buffer),n.wipe(this._r),n.wipe(this._h),n.wipe(this._pad),this._leftover=0,this._fin=0,this._finished=!0,this},s}();t.Poly1305=r;function i(s,a){var l=new r(s);l.update(a);var c=l.digest();return l.clean(),c}t.oneTimeAuth=i;function o(s,a){return s.length!==t.DIGEST_LENGTH||a.length!==t.DIGEST_LENGTH?!1:e.equal(s,a)}t.equal=o})(S6);(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e=Wh,n=S6,r=Er,i=Te,o=wo;t.KEY_LENGTH=32,t.NONCE_LENGTH=12,t.TAG_LENGTH=16;var s=new Uint8Array(16),a=function(){function l(c){if(this.nonceLength=t.NONCE_LENGTH,this.tagLength=t.TAG_LENGTH,c.length!==t.KEY_LENGTH)throw new Error("ChaCha20Poly1305 needs 32-byte key");this._key=new Uint8Array(c)}return l.prototype.seal=function(c,u,d,p){if(c.length>16)throw new Error("ChaCha20Poly1305: incorrect nonce length");var w=new Uint8Array(16);w.set(c,w.length-c.length);var y=new Uint8Array(32);e.stream(this._key,w,y,4);var E=u.length+this.tagLength,C;if(p){if(p.length!==E)throw new Error("ChaCha20Poly1305: incorrect destination length");C=p}else C=new Uint8Array(E);return e.streamXOR(this._key,w,u,C,4),this._authenticate(C.subarray(C.length-this.tagLength,C.length),y,C.subarray(0,C.length-this.tagLength),d),r.wipe(w),C},l.prototype.open=function(c,u,d,p){if(c.length>16)throw new Error("ChaCha20Poly1305: incorrect nonce length");if(u.length<this.tagLength)return null;var w=new Uint8Array(16);w.set(c,w.length-c.length);var y=new Uint8Array(32);e.stream(this._key,w,y,4);var E=new Uint8Array(this.tagLength);if(this._authenticate(E,y,u.subarray(0,u.length-this.tagLength),d),!o.equal(E,u.subarray(u.length-this.tagLength,u.length)))return null;var C=u.length-this.tagLength,b;if(p){if(p.length!==C)throw new Error("ChaCha20Poly1305: incorrect destination length");b=p}else b=new Uint8Array(C);return e.streamXOR(this._key,w,u.subarray(0,u.length-this.tagLength),b,4),r.wipe(w),b},l.prototype.clean=function(){return r.wipe(this._key),this},l.prototype._authenticate=function(c,u,d,p){var w=new n.Poly1305(u);p&&(w.update(p),p.length%16>0&&w.update(s.subarray(p.length%16))),w.update(d),d.length%16>0&&w.update(s.subarray(d.length%16));var y=new Uint8Array(8);p&&i.writeUint64LE(p.length,y),w.update(y),i.writeUint64LE(d.length,y),w.update(y);for(var E=w.digest(),C=0;C<E.length;C++)c[C]=E[C];w.clean(),r.wipe(E),r.wipe(y)},l}();t.ChaCha20Poly1305=a})(aw);var T6={},xu={},lw={};Object.defineProperty(lw,"__esModule",{value:!0});function xD(t){return typeof t.saveState<"u"&&typeof t.restoreState<"u"&&typeof t.cleanSavedState<"u"}lw.isSerializableHash=xD;Object.defineProperty(xu,"__esModule",{value:!0});var Sr=lw,ED=wo,_D=Er,P6=function(){function t(e,n){this._finished=!1,this._inner=new e,this._outer=new e,this.blockSize=this._outer.blockSize,this.digestLength=this._outer.digestLength;var r=new Uint8Array(this.blockSize);n.length>this.blockSize?this._inner.update(n).finish(r).clean():r.set(n);for(var i=0;i<r.length;i++)r[i]^=54;this._inner.update(r);for(var i=0;i<r.length;i++)r[i]^=106;this._outer.update(r),Sr.isSerializableHash(this._inner)&&Sr.isSerializableHash(this._outer)&&(this._innerKeyedState=this._inner.saveState(),this._outerKeyedState=this._outer.saveState()),_D.wipe(r)}return t.prototype.reset=function(){if(!Sr.isSerializableHash(this._inner)||!Sr.isSerializableHash(this._outer))throw new Error("hmac: can't reset() because hash doesn't implement restoreState()");return this._inner.restoreState(this._innerKeyedState),this._outer.restoreState(this._outerKeyedState),this._finished=!1,this},t.prototype.clean=function(){Sr.isSerializableHash(this._inner)&&this._inner.cleanSavedState(this._innerKeyedState),Sr.isSerializableHash(this._outer)&&this._outer.cleanSavedState(this._outerKeyedState),this._inner.clean(),this._outer.clean()},t.prototype.update=function(e){return this._inner.update(e),this},t.prototype.finish=function(e){return this._finished?(this._outer.finish(e),this):(this._inner.finish(e),this._outer.update(e.subarray(0,this.digestLength)).finish(e),this._finished=!0,this)},t.prototype.digest=function(){var e=new Uint8Array(this.digestLength);return this.finish(e),e},t.prototype.saveState=function(){if(!Sr.isSerializableHash(this._inner))throw new Error("hmac: can't saveState() because hash doesn't implement it");return this._inner.saveState()},t.prototype.restoreState=function(e){if(!Sr.isSerializableHash(this._inner)||!Sr.isSerializableHash(this._outer))throw new Error("hmac: can't restoreState() because hash doesn't implement it");return this._inner.restoreState(e),this._outer.restoreState(this._outerKeyedState),this._finished=!1,this},t.prototype.cleanSavedState=function(e){if(!Sr.isSerializableHash(this._inner))throw new Error("hmac: can't cleanSavedState() because hash doesn't implement it");this._inner.cleanSavedState(e)},t}();xu.HMAC=P6;function CD(t,e,n){var r=new P6(t,e);r.update(n);var i=r.digest();return r.clean(),i}xu.hmac=CD;xu.equal=ED.equal;Object.defineProperty(T6,"__esModule",{value:!0});var Xv=xu,e2=Er,SD=function(){function t(e,n,r,i){r===void 0&&(r=new Uint8Array(0)),this._counter=new Uint8Array(1),this._hash=e,this._info=i;var o=Xv.hmac(this._hash,r,n);this._hmac=new Xv.HMAC(e,o),this._buffer=new Uint8Array(this._hmac.digestLength),this._bufpos=this._buffer.length}return t.prototype._fillBuffer=function(){this._counter[0]++;var e=this._counter[0];if(e===0)throw new Error("hkdf: cannot expand more");this._hmac.reset(),e>1&&this._hmac.update(this._buffer),this._info&&this._hmac.update(this._info),this._hmac.update(this._counter),this._hmac.finish(this._buffer),this._bufpos=0},t.prototype.expand=function(e){for(var n=new Uint8Array(e),r=0;r<n.length;r++)this._bufpos===this._buffer.length&&this._fillBuffer(),n[r]=this._buffer[this._bufpos++];return n},t.prototype.clean=function(){this._hmac.clean(),e2.wipe(this._buffer),e2.wipe(this._counter),this._bufpos=0},t}(),AD=T6.HKDF=SD,zh={},Hh={},Vh={};Object.defineProperty(Vh,"__esModule",{value:!0});Vh.BrowserRandomSource=void 0;const t2=65536;class TD{constructor(){this.isAvailable=!1,this.isInstantiated=!1;const e=typeof self<"u"?self.crypto||self.msCrypto:null;e&&e.getRandomValues!==void 0&&(this._crypto=e,this.isAvailable=!0,this.isInstantiated=!0)}randomBytes(e){if(!this.isAvailable||!this._crypto)throw new Error("Browser random byte generator is not available.");const n=new Uint8Array(e);for(let r=0;r<n.length;r+=t2)this._crypto.getRandomValues(n.subarray(r,r+Math.min(n.length-r,t2)));return n}}Vh.BrowserRandomSource=TD;function PD(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var qh={};const $D={},ID=Object.freeze(Object.defineProperty({__proto__:null,default:$D},Symbol.toStringTag,{value:"Module"})),kD=D2(ID);Object.defineProperty(qh,"__esModule",{value:!0});qh.NodeRandomSource=void 0;const OD=Er;class DD{constructor(){if(this.isAvailable=!1,this.isInstantiated=!1,typeof PD<"u"){const e=kD;e&&e.randomBytes&&(this._crypto=e,this.isAvailable=!0,this.isInstantiated=!0)}}randomBytes(e){if(!this.isAvailable||!this._crypto)throw new Error("Node.js random byte generator is not available.");let n=this._crypto.randomBytes(e);if(n.length!==e)throw new Error("NodeRandomSource: got fewer bytes than requested");const r=new Uint8Array(e);for(let i=0;i<r.length;i++)r[i]=n[i];return(0,OD.wipe)(n),r}}qh.NodeRandomSource=DD;Object.defineProperty(Hh,"__esModule",{value:!0});Hh.SystemRandomSource=void 0;const RD=Vh,ND=qh;class MD{constructor(){if(this.isAvailable=!1,this.name="",this._source=new RD.BrowserRandomSource,this._source.isAvailable){this.isAvailable=!0,this.name="Browser";return}if(this._source=new ND.NodeRandomSource,this._source.isAvailable){this.isAvailable=!0,this.name="Node";return}}randomBytes(e){if(!this.isAvailable)throw new Error("System random byte generator is not available.");return this._source.randomBytes(e)}}Hh.SystemRandomSource=MD;(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.randomStringForEntropy=t.randomString=t.randomUint32=t.randomBytes=t.defaultRandomSource=void 0;const e=Hh,n=Te,r=Er;t.defaultRandomSource=new e.SystemRandomSource;function i(c,u=t.defaultRandomSource){return u.randomBytes(c)}t.randomBytes=i;function o(c=t.defaultRandomSource){const u=i(4,c),d=(0,n.readUint32LE)(u);return(0,r.wipe)(u),d}t.randomUint32=o;const s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";function a(c,u=s,d=t.defaultRandomSource){if(u.length<2)throw new Error("randomString charset is too short");if(u.length>256)throw new Error("randomString charset is too long");let p="";const w=u.length,y=256-256%w;for(;c>0;){const E=i(Math.ceil(c*256/y),d);for(let C=0;C<E.length&&c>0;C++){const b=E[C];b<y&&(p+=u.charAt(b%w),c--)}(0,r.wipe)(E)}return p}t.randomString=a;function l(c,u=s,d=t.defaultRandomSource){const p=Math.ceil(c/(Math.log(u.length)/Math.LN2));return a(p,u,d)}t.randomStringForEntropy=l})(zh);var Zh={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e=Te,n=Er;t.DIGEST_LENGTH=32,t.BLOCK_SIZE=64;var r=function(){function a(){this.digestLength=t.DIGEST_LENGTH,this.blockSize=t.BLOCK_SIZE,this._state=new Int32Array(8),this._temp=new Int32Array(64),this._buffer=new Uint8Array(128),this._bufferLength=0,this._bytesHashed=0,this._finished=!1,this.reset()}return a.prototype._initState=function(){this._state[0]=1779033703,this._state[1]=3144134277,this._state[2]=1013904242,this._state[3]=2773480762,this._state[4]=1359893119,this._state[5]=2600822924,this._state[6]=528734635,this._state[7]=1541459225},a.prototype.reset=function(){return this._initState(),this._bufferLength=0,this._bytesHashed=0,this._finished=!1,this},a.prototype.clean=function(){n.wipe(this._buffer),n.wipe(this._temp),this.reset()},a.prototype.update=function(l,c){if(c===void 0&&(c=l.length),this._finished)throw new Error("SHA256: can't update because hash was finished.");var u=0;if(this._bytesHashed+=c,this._bufferLength>0){for(;this._bufferLength<this.blockSize&&c>0;)this._buffer[this._bufferLength++]=l[u++],c--;this._bufferLength===this.blockSize&&(o(this._temp,this._state,this._buffer,0,this.blockSize),this._bufferLength=0)}for(c>=this.blockSize&&(u=o(this._temp,this._state,l,u,c),c%=this.blockSize);c>0;)this._buffer[this._bufferLength++]=l[u++],c--;return this},a.prototype.finish=function(l){if(!this._finished){var c=this._bytesHashed,u=this._bufferLength,d=c/536870912|0,p=c<<3,w=c%64<56?64:128;this._buffer[u]=128;for(var y=u+1;y<w-8;y++)this._buffer[y]=0;e.writeUint32BE(d,this._buffer,w-8),e.writeUint32BE(p,this._buffer,w-4),o(this._temp,this._state,this._buffer,0,w),this._finished=!0}for(var y=0;y<this.digestLength/4;y++)e.writeUint32BE(this._state[y],l,y*4);return this},a.prototype.digest=function(){var l=new Uint8Array(this.digestLength);return this.finish(l),l},a.prototype.saveState=function(){if(this._finished)throw new Error("SHA256: cannot save finished state");return{state:new Int32Array(this._state),buffer:this._bufferLength>0?new Uint8Array(this._buffer):void 0,bufferLength:this._bufferLength,bytesHashed:this._bytesHashed}},a.prototype.restoreState=function(l){return this._state.set(l.state),this._bufferLength=l.bufferLength,l.buffer&&this._buffer.set(l.buffer),this._bytesHashed=l.bytesHashed,this._finished=!1,this},a.prototype.cleanSavedState=function(l){n.wipe(l.state),l.buffer&&n.wipe(l.buffer),l.bufferLength=0,l.bytesHashed=0},a}();t.SHA256=r;var i=new Int32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]);function o(a,l,c,u,d){for(;d>=64;){for(var p=l[0],w=l[1],y=l[2],E=l[3],C=l[4],b=l[5],m=l[6],v=l[7],x=0;x<16;x++){var _=u+x*4;a[x]=e.readUint32BE(c,_)}for(var x=16;x<64;x++){var S=a[x-2],f=(S>>>17|S<<15)^(S>>>19|S<<13)^S>>>10;S=a[x-15];var T=(S>>>7|S<<25)^(S>>>18|S<<14)^S>>>3;a[x]=(f+a[x-7]|0)+(T+a[x-16]|0)}for(var x=0;x<64;x++){var f=(((C>>>6|C<<26)^(C>>>11|C<<21)^(C>>>25|C<<7))+(C&b^~C&m)|0)+(v+(i[x]+a[x]|0)|0)|0,T=((p>>>2|p<<30)^(p>>>13|p<<19)^(p>>>22|p<<10))+(p&w^p&y^w&y)|0;v=m,m=b,b=C,C=E+f|0,E=y,y=w,w=p,p=f+T|0}l[0]+=p,l[1]+=w,l[2]+=y,l[3]+=E,l[4]+=C,l[5]+=b,l[6]+=m,l[7]+=v,u+=64,d-=64}return u}function s(a){var l=new r;l.update(a);var c=l.digest();return l.clean(),c}t.hash=s})(Zh);var cw={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.sharedKey=t.generateKeyPair=t.generateKeyPairFromSeed=t.scalarMultBase=t.scalarMult=t.SHARED_KEY_LENGTH=t.SECRET_KEY_LENGTH=t.PUBLIC_KEY_LENGTH=void 0;const e=zh,n=Er;t.PUBLIC_KEY_LENGTH=32,t.SECRET_KEY_LENGTH=32,t.SHARED_KEY_LENGTH=32;function r(x){const _=new Float64Array(16);if(x)for(let S=0;S<x.length;S++)_[S]=x[S];return _}const i=new Uint8Array(32);i[0]=9;const o=r([56129,1]);function s(x){let _=1;for(let S=0;S<16;S++){let f=x[S]+_+65535;_=Math.floor(f/65536),x[S]=f-_*65536}x[0]+=_-1+37*(_-1)}function a(x,_,S){const f=~(S-1);for(let T=0;T<16;T++){const O=f&(x[T]^_[T]);x[T]^=O,_[T]^=O}}function l(x,_){const S=r(),f=r();for(let T=0;T<16;T++)f[T]=_[T];s(f),s(f),s(f);for(let T=0;T<2;T++){S[0]=f[0]-65517;for(let D=1;D<15;D++)S[D]=f[D]-65535-(S[D-1]>>16&1),S[D-1]&=65535;S[15]=f[15]-32767-(S[14]>>16&1);const O=S[15]>>16&1;S[14]&=65535,a(f,S,1-O)}for(let T=0;T<16;T++)x[2*T]=f[T]&255,x[2*T+1]=f[T]>>8}function c(x,_){for(let S=0;S<16;S++)x[S]=_[2*S]+(_[2*S+1]<<8);x[15]&=32767}function u(x,_,S){for(let f=0;f<16;f++)x[f]=_[f]+S[f]}function d(x,_,S){for(let f=0;f<16;f++)x[f]=_[f]-S[f]}function p(x,_,S){let f,T,O=0,D=0,M=0,ee=0,ne=0,H=0,F=0,j=0,B=0,R=0,W=0,z=0,Z=0,X=0,K=0,oe=0,fe=0,pe=0,ye=0,_e=0,Pe=0,ve=0,Oe=0,Le=0,Re=0,xn=0,wi=0,yo=0,yi=0,Qa=0,Au=0,Ct=S[0],mt=S[1],qe=S[2],vt=S[3],Pt=S[4],Je=S[5],$t=S[6],A=S[7],h=S[8],g=S[9],P=S[10],k=S[11],N=S[12],U=S[13],ue=S[14],ke=S[15];f=_[0],O+=f*Ct,D+=f*mt,M+=f*qe,ee+=f*vt,ne+=f*Pt,H+=f*Je,F+=f*$t,j+=f*A,B+=f*h,R+=f*g,W+=f*P,z+=f*k,Z+=f*N,X+=f*U,K+=f*ue,oe+=f*ke,f=_[1],D+=f*Ct,M+=f*mt,ee+=f*qe,ne+=f*vt,H+=f*Pt,F+=f*Je,j+=f*$t,B+=f*A,R+=f*h,W+=f*g,z+=f*P,Z+=f*k,X+=f*N,K+=f*U,oe+=f*ue,fe+=f*ke,f=_[2],M+=f*Ct,ee+=f*mt,ne+=f*qe,H+=f*vt,F+=f*Pt,j+=f*Je,B+=f*$t,R+=f*A,W+=f*h,z+=f*g,Z+=f*P,X+=f*k,K+=f*N,oe+=f*U,fe+=f*ue,pe+=f*ke,f=_[3],ee+=f*Ct,ne+=f*mt,H+=f*qe,F+=f*vt,j+=f*Pt,B+=f*Je,R+=f*$t,W+=f*A,z+=f*h,Z+=f*g,X+=f*P,K+=f*k,oe+=f*N,fe+=f*U,pe+=f*ue,ye+=f*ke,f=_[4],ne+=f*Ct,H+=f*mt,F+=f*qe,j+=f*vt,B+=f*Pt,R+=f*Je,W+=f*$t,z+=f*A,Z+=f*h,X+=f*g,K+=f*P,oe+=f*k,fe+=f*N,pe+=f*U,ye+=f*ue,_e+=f*ke,f=_[5],H+=f*Ct,F+=f*mt,j+=f*qe,B+=f*vt,R+=f*Pt,W+=f*Je,z+=f*$t,Z+=f*A,X+=f*h,K+=f*g,oe+=f*P,fe+=f*k,pe+=f*N,ye+=f*U,_e+=f*ue,Pe+=f*ke,f=_[6],F+=f*Ct,j+=f*mt,B+=f*qe,R+=f*vt,W+=f*Pt,z+=f*Je,Z+=f*$t,X+=f*A,K+=f*h,oe+=f*g,fe+=f*P,pe+=f*k,ye+=f*N,_e+=f*U,Pe+=f*ue,ve+=f*ke,f=_[7],j+=f*Ct,B+=f*mt,R+=f*qe,W+=f*vt,z+=f*Pt,Z+=f*Je,X+=f*$t,K+=f*A,oe+=f*h,fe+=f*g,pe+=f*P,ye+=f*k,_e+=f*N,Pe+=f*U,ve+=f*ue,Oe+=f*ke,f=_[8],B+=f*Ct,R+=f*mt,W+=f*qe,z+=f*vt,Z+=f*Pt,X+=f*Je,K+=f*$t,oe+=f*A,fe+=f*h,pe+=f*g,ye+=f*P,_e+=f*k,Pe+=f*N,ve+=f*U,Oe+=f*ue,Le+=f*ke,f=_[9],R+=f*Ct,W+=f*mt,z+=f*qe,Z+=f*vt,X+=f*Pt,K+=f*Je,oe+=f*$t,fe+=f*A,pe+=f*h,ye+=f*g,_e+=f*P,Pe+=f*k,ve+=f*N,Oe+=f*U,Le+=f*ue,Re+=f*ke,f=_[10],W+=f*Ct,z+=f*mt,Z+=f*qe,X+=f*vt,K+=f*Pt,oe+=f*Je,fe+=f*$t,pe+=f*A,ye+=f*h,_e+=f*g,Pe+=f*P,ve+=f*k,Oe+=f*N,Le+=f*U,Re+=f*ue,xn+=f*ke,f=_[11],z+=f*Ct,Z+=f*mt,X+=f*qe,K+=f*vt,oe+=f*Pt,fe+=f*Je,pe+=f*$t,ye+=f*A,_e+=f*h,Pe+=f*g,ve+=f*P,Oe+=f*k,Le+=f*N,Re+=f*U,xn+=f*ue,wi+=f*ke,f=_[12],Z+=f*Ct,X+=f*mt,K+=f*qe,oe+=f*vt,fe+=f*Pt,pe+=f*Je,ye+=f*$t,_e+=f*A,Pe+=f*h,ve+=f*g,Oe+=f*P,Le+=f*k,Re+=f*N,xn+=f*U,wi+=f*ue,yo+=f*ke,f=_[13],X+=f*Ct,K+=f*mt,oe+=f*qe,fe+=f*vt,pe+=f*Pt,ye+=f*Je,_e+=f*$t,Pe+=f*A,ve+=f*h,Oe+=f*g,Le+=f*P,Re+=f*k,xn+=f*N,wi+=f*U,yo+=f*ue,yi+=f*ke,f=_[14],K+=f*Ct,oe+=f*mt,fe+=f*qe,pe+=f*vt,ye+=f*Pt,_e+=f*Je,Pe+=f*$t,ve+=f*A,Oe+=f*h,Le+=f*g,Re+=f*P,xn+=f*k,wi+=f*N,yo+=f*U,yi+=f*ue,Qa+=f*ke,f=_[15],oe+=f*Ct,fe+=f*mt,pe+=f*qe,ye+=f*vt,_e+=f*Pt,Pe+=f*Je,ve+=f*$t,Oe+=f*A,Le+=f*h,Re+=f*g,xn+=f*P,wi+=f*k,yo+=f*N,yi+=f*U,Qa+=f*ue,Au+=f*ke,O+=38*fe,D+=38*pe,M+=38*ye,ee+=38*_e,ne+=38*Pe,H+=38*ve,F+=38*Oe,j+=38*Le,B+=38*Re,R+=38*xn,W+=38*wi,z+=38*yo,Z+=38*yi,X+=38*Qa,K+=38*Au,T=1,f=O+T+65535,T=Math.floor(f/65536),O=f-T*65536,f=D+T+65535,T=Math.floor(f/65536),D=f-T*65536,f=M+T+65535,T=Math.floor(f/65536),M=f-T*65536,f=ee+T+65535,T=Math.floor(f/65536),ee=f-T*65536,f=ne+T+65535,T=Math.floor(f/65536),ne=f-T*65536,f=H+T+65535,T=Math.floor(f/65536),H=f-T*65536,f=F+T+65535,T=Math.floor(f/65536),F=f-T*65536,f=j+T+65535,T=Math.floor(f/65536),j=f-T*65536,f=B+T+65535,T=Math.floor(f/65536),B=f-T*65536,f=R+T+65535,T=Math.floor(f/65536),R=f-T*65536,f=W+T+65535,T=Math.floor(f/65536),W=f-T*65536,f=z+T+65535,T=Math.floor(f/65536),z=f-T*65536,f=Z+T+65535,T=Math.floor(f/65536),Z=f-T*65536,f=X+T+65535,T=Math.floor(f/65536),X=f-T*65536,f=K+T+65535,T=Math.floor(f/65536),K=f-T*65536,f=oe+T+65535,T=Math.floor(f/65536),oe=f-T*65536,O+=T-1+37*(T-1),T=1,f=O+T+65535,T=Math.floor(f/65536),O=f-T*65536,f=D+T+65535,T=Math.floor(f/65536),D=f-T*65536,f=M+T+65535,T=Math.floor(f/65536),M=f-T*65536,f=ee+T+65535,T=Math.floor(f/65536),ee=f-T*65536,f=ne+T+65535,T=Math.floor(f/65536),ne=f-T*65536,f=H+T+65535,T=Math.floor(f/65536),H=f-T*65536,f=F+T+65535,T=Math.floor(f/65536),F=f-T*65536,f=j+T+65535,T=Math.floor(f/65536),j=f-T*65536,f=B+T+65535,T=Math.floor(f/65536),B=f-T*65536,f=R+T+65535,T=Math.floor(f/65536),R=f-T*65536,f=W+T+65535,T=Math.floor(f/65536),W=f-T*65536,f=z+T+65535,T=Math.floor(f/65536),z=f-T*65536,f=Z+T+65535,T=Math.floor(f/65536),Z=f-T*65536,f=X+T+65535,T=Math.floor(f/65536),X=f-T*65536,f=K+T+65535,T=Math.floor(f/65536),K=f-T*65536,f=oe+T+65535,T=Math.floor(f/65536),oe=f-T*65536,O+=T-1+37*(T-1),x[0]=O,x[1]=D,x[2]=M,x[3]=ee,x[4]=ne,x[5]=H,x[6]=F,x[7]=j,x[8]=B,x[9]=R,x[10]=W,x[11]=z,x[12]=Z,x[13]=X,x[14]=K,x[15]=oe}function w(x,_){p(x,_,_)}function y(x,_){const S=r();for(let f=0;f<16;f++)S[f]=_[f];for(let f=253;f>=0;f--)w(S,S),f!==2&&f!==4&&p(S,S,_);for(let f=0;f<16;f++)x[f]=S[f]}function E(x,_){const S=new Uint8Array(32),f=new Float64Array(80),T=r(),O=r(),D=r(),M=r(),ee=r(),ne=r();for(let B=0;B<31;B++)S[B]=x[B];S[31]=x[31]&127|64,S[0]&=248,c(f,_);for(let B=0;B<16;B++)O[B]=f[B];T[0]=M[0]=1;for(let B=254;B>=0;--B){const R=S[B>>>3]>>>(B&7)&1;a(T,O,R),a(D,M,R),u(ee,T,D),d(T,T,D),u(D,O,M),d(O,O,M),w(M,ee),w(ne,T),p(T,D,T),p(D,O,ee),u(ee,T,D),d(T,T,D),w(O,T),d(D,M,ne),p(T,D,o),u(T,T,M),p(D,D,T),p(T,M,ne),p(M,O,f),w(O,ee),a(T,O,R),a(D,M,R)}for(let B=0;B<16;B++)f[B+16]=T[B],f[B+32]=D[B],f[B+48]=O[B],f[B+64]=M[B];const H=f.subarray(32),F=f.subarray(16);y(H,H),p(F,F,H);const j=new Uint8Array(32);return l(j,F),j}t.scalarMult=E;function C(x){return E(x,i)}t.scalarMultBase=C;function b(x){if(x.length!==t.SECRET_KEY_LENGTH)throw new Error(`x25519: seed must be ${t.SECRET_KEY_LENGTH} bytes`);const _=new Uint8Array(x);return{publicKey:C(_),secretKey:_}}t.generateKeyPairFromSeed=b;function m(x){const _=(0,e.randomBytes)(32,x),S=b(_);return(0,n.wipe)(_),S}t.generateKeyPair=m;function v(x,_,S=!1){if(x.length!==t.PUBLIC_KEY_LENGTH)throw new Error("X25519: incorrect secret key length");if(_.length!==t.PUBLIC_KEY_LENGTH)throw new Error("X25519: incorrect public key length");const f=E(x,_);if(S){let T=0;for(let O=0;O<f.length;O++)T|=f[O];if(T===0)throw new Error("X25519: invalid shared key")}return f}t.sharedKey=v})(cw);function uw(t){return globalThis.Buffer!=null?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):t}function $6(t=0){return globalThis.Buffer!=null&&globalThis.Buffer.allocUnsafe!=null?uw(globalThis.Buffer.allocUnsafe(t)):new Uint8Array(t)}function n2(t,e){e||(e=t.reduce((i,o)=>i+o.length,0));const n=$6(e);let r=0;for(const i of t)n.set(i,r),r+=i.length;return uw(n)}function LD(t,e){if(t.length>=255)throw new TypeError("Alphabet too long");for(var n=new Uint8Array(256),r=0;r<n.length;r++)n[r]=255;for(var i=0;i<t.length;i++){var o=t.charAt(i),s=o.charCodeAt(0);if(n[s]!==255)throw new TypeError(o+" is ambiguous");n[s]=i}var a=t.length,l=t.charAt(0),c=Math.log(a)/Math.log(256),u=Math.log(256)/Math.log(a);function d(y){if(y instanceof Uint8Array||(ArrayBuffer.isView(y)?y=new Uint8Array(y.buffer,y.byteOffset,y.byteLength):Array.isArray(y)&&(y=Uint8Array.from(y))),!(y instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(y.length===0)return"";for(var E=0,C=0,b=0,m=y.length;b!==m&&y[b]===0;)b++,E++;for(var v=(m-b)*u+1>>>0,x=new Uint8Array(v);b!==m;){for(var _=y[b],S=0,f=v-1;(_!==0||S<C)&&f!==-1;f--,S++)_+=256*x[f]>>>0,x[f]=_%a>>>0,_=_/a>>>0;if(_!==0)throw new Error("Non-zero carry");C=S,b++}for(var T=v-C;T!==v&&x[T]===0;)T++;for(var O=l.repeat(E);T<v;++T)O+=t.charAt(x[T]);return O}function p(y){if(typeof y!="string")throw new TypeError("Expected String");if(y.length===0)return new Uint8Array;var E=0;if(y[E]!==" "){for(var C=0,b=0;y[E]===l;)C++,E++;for(var m=(y.length-E)*c+1>>>0,v=new Uint8Array(m);y[E];){var x=n[y.charCodeAt(E)];if(x===255)return;for(var _=0,S=m-1;(x!==0||_<b)&&S!==-1;S--,_++)x+=a*v[S]>>>0,v[S]=x%256>>>0,x=x/256>>>0;if(x!==0)throw new Error("Non-zero carry");b=_,E++}if(y[E]!==" "){for(var f=m-b;f!==m&&v[f]===0;)f++;for(var T=new Uint8Array(C+(m-f)),O=C;f!==m;)T[O++]=v[f++];return T}}}function w(y){var E=p(y);if(E)return E;throw new Error(`Non-${e} character`)}return{encode:d,decodeUnsafe:p,decode:w}}var UD=LD,jD=UD;const BD=t=>{if(t instanceof Uint8Array&&t.constructor.name==="Uint8Array")return t;if(t instanceof ArrayBuffer)return new Uint8Array(t);if(ArrayBuffer.isView(t))return new Uint8Array(t.buffer,t.byteOffset,t.byteLength);throw new Error("Unknown type, must be binary type")},FD=t=>new TextEncoder().encode(t),WD=t=>new TextDecoder().decode(t);class zD{constructor(e,n,r){this.name=e,this.prefix=n,this.baseEncode=r}encode(e){if(e instanceof Uint8Array)return`${this.prefix}${this.baseEncode(e)}`;throw Error("Unknown type, must be binary type")}}class HD{constructor(e,n,r){if(this.name=e,this.prefix=n,n.codePointAt(0)===void 0)throw new Error("Invalid prefix character");this.prefixCodePoint=n.codePointAt(0),this.baseDecode=r}decode(e){if(typeof e=="string"){if(e.codePointAt(0)!==this.prefixCodePoint)throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);return this.baseDecode(e.slice(this.prefix.length))}else throw Error("Can only multibase decode strings")}or(e){return I6(this,e)}}class VD{constructor(e){this.decoders=e}or(e){return I6(this,e)}decode(e){const n=e[0],r=this.decoders[n];if(r)return r.decode(e);throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)}}const I6=(t,e)=>new VD({...t.decoders||{[t.prefix]:t},...e.decoders||{[e.prefix]:e}});class qD{constructor(e,n,r,i){this.name=e,this.prefix=n,this.baseEncode=r,this.baseDecode=i,this.encoder=new zD(e,n,r),this.decoder=new HD(e,n,i)}encode(e){return this.encoder.encode(e)}decode(e){return this.decoder.decode(e)}}const Gh=({name:t,prefix:e,encode:n,decode:r})=>new qD(t,e,n,r),Eu=({prefix:t,name:e,alphabet:n})=>{const{encode:r,decode:i}=jD(n,e);return Gh({prefix:t,name:e,encode:r,decode:o=>BD(i(o))})},ZD=(t,e,n,r)=>{const i={};for(let u=0;u<e.length;++u)i[e[u]]=u;let o=t.length;for(;t[o-1]==="=";)--o;const s=new Uint8Array(o*n/8|0);let a=0,l=0,c=0;for(let u=0;u<o;++u){const d=i[t[u]];if(d===void 0)throw new SyntaxError(`Non-${r} character`);l=l<<n|d,a+=n,a>=8&&(a-=8,s[c++]=255&l>>a)}if(a>=n||255&l<<8-a)throw new SyntaxError("Unexpected end of data");return s},GD=(t,e,n)=>{const r=e[e.length-1]==="=",i=(1<<n)-1;let o="",s=0,a=0;for(let l=0;l<t.length;++l)for(a=a<<8|t[l],s+=8;s>n;)s-=n,o+=e[i&a>>s];if(s&&(o+=e[i&a<<n-s]),r)for(;o.length*n&7;)o+="=";return o},Lt=({name:t,prefix:e,bitsPerChar:n,alphabet:r})=>Gh({prefix:e,name:t,encode(i){return GD(i,r,n)},decode(i){return ZD(i,r,n,t)}}),KD=Gh({prefix:"\0",name:"identity",encode:t=>WD(t),decode:t=>FD(t)}),YD=Object.freeze(Object.defineProperty({__proto__:null,identity:KD},Symbol.toStringTag,{value:"Module"})),QD=Lt({prefix:"0",name:"base2",alphabet:"01",bitsPerChar:1}),JD=Object.freeze(Object.defineProperty({__proto__:null,base2:QD},Symbol.toStringTag,{value:"Module"})),XD=Lt({prefix:"7",name:"base8",alphabet:"01234567",bitsPerChar:3}),eR=Object.freeze(Object.defineProperty({__proto__:null,base8:XD},Symbol.toStringTag,{value:"Module"})),tR=Eu({prefix:"9",name:"base10",alphabet:"0123456789"}),nR=Object.freeze(Object.defineProperty({__proto__:null,base10:tR},Symbol.toStringTag,{value:"Module"})),rR=Lt({prefix:"f",name:"base16",alphabet:"0123456789abcdef",bitsPerChar:4}),iR=Lt({prefix:"F",name:"base16upper",alphabet:"0123456789ABCDEF",bitsPerChar:4}),oR=Object.freeze(Object.defineProperty({__proto__:null,base16:rR,base16upper:iR},Symbol.toStringTag,{value:"Module"})),sR=Lt({prefix:"b",name:"base32",alphabet:"abcdefghijklmnopqrstuvwxyz234567",bitsPerChar:5}),aR=Lt({prefix:"B",name:"base32upper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",bitsPerChar:5}),lR=Lt({prefix:"c",name:"base32pad",alphabet:"abcdefghijklmnopqrstuvwxyz234567=",bitsPerChar:5}),cR=Lt({prefix:"C",name:"base32padupper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",bitsPerChar:5}),uR=Lt({prefix:"v",name:"base32hex",alphabet:"0123456789abcdefghijklmnopqrstuv",bitsPerChar:5}),dR=Lt({prefix:"V",name:"base32hexupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV",bitsPerChar:5}),fR=Lt({prefix:"t",name:"base32hexpad",alphabet:"0123456789abcdefghijklmnopqrstuv=",bitsPerChar:5}),hR=Lt({prefix:"T",name:"base32hexpadupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV=",bitsPerChar:5}),pR=Lt({prefix:"h",name:"base32z",alphabet:"ybndrfg8ejkmcpqxot1uwisza345h769",bitsPerChar:5}),mR=Object.freeze(Object.defineProperty({__proto__:null,base32:sR,base32hex:uR,base32hexpad:fR,base32hexpadupper:hR,base32hexupper:dR,base32pad:lR,base32padupper:cR,base32upper:aR,base32z:pR},Symbol.toStringTag,{value:"Module"})),gR=Eu({prefix:"k",name:"base36",alphabet:"0123456789abcdefghijklmnopqrstuvwxyz"}),wR=Eu({prefix:"K",name:"base36upper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"}),yR=Object.freeze(Object.defineProperty({__proto__:null,base36:gR,base36upper:wR},Symbol.toStringTag,{value:"Module"})),vR=Eu({name:"base58btc",prefix:"z",alphabet:"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"}),bR=Eu({name:"base58flickr",prefix:"Z",alphabet:"123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"}),xR=Object.freeze(Object.defineProperty({__proto__:null,base58btc:vR,base58flickr:bR},Symbol.toStringTag,{value:"Module"})),ER=Lt({prefix:"m",name:"base64",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",bitsPerChar:6}),_R=Lt({prefix:"M",name:"base64pad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",bitsPerChar:6}),CR=Lt({prefix:"u",name:"base64url",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",bitsPerChar:6}),SR=Lt({prefix:"U",name:"base64urlpad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",bitsPerChar:6}),AR=Object.freeze(Object.defineProperty({__proto__:null,base64:ER,base64pad:_R,base64url:CR,base64urlpad:SR},Symbol.toStringTag,{value:"Module"})),k6=Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"),TR=k6.reduce((t,e,n)=>(t[n]=e,t),[]),PR=k6.reduce((t,e,n)=>(t[e.codePointAt(0)]=n,t),[]);function $R(t){return t.reduce((e,n)=>(e+=TR[n],e),"")}function IR(t){const e=[];for(const n of t){const r=PR[n.codePointAt(0)];if(r===void 0)throw new Error(`Non-base256emoji character: ${n}`);e.push(r)}return new Uint8Array(e)}const kR=Gh({prefix:"🚀",name:"base256emoji",encode:$R,decode:IR}),OR=Object.freeze(Object.defineProperty({__proto__:null,base256emoji:kR},Symbol.toStringTag,{value:"Module"}));new TextEncoder;new TextDecoder;const r2={...YD,...JD,...eR,...nR,...oR,...mR,...yR,...xR,...AR,...OR};function O6(t,e,n,r){return{name:t,prefix:e,encoder:{name:t,prefix:e,encode:n},decoder:{decode:r}}}const i2=O6("utf8","u",t=>"u"+new TextDecoder("utf8").decode(t),t=>new TextEncoder().encode(t.substring(1))),X0=O6("ascii","a",t=>{let e="a";for(let n=0;n<t.length;n++)e+=String.fromCharCode(t[n]);return e},t=>{t=t.substring(1);const e=$6(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}),D6={utf8:i2,"utf-8":i2,hex:r2.base16,latin1:X0,ascii:X0,binary:X0,...r2};function ir(t,e="utf8"){const n=D6[e];if(!n)throw new Error(`Unsupported encoding "${e}"`);return(e==="utf8"||e==="utf-8")&&globalThis.Buffer!=null&&globalThis.Buffer.from!=null?uw(globalThis.Buffer.from(t,"utf-8")):n.decoder.decode(`${n.prefix}${t}`)}function yr(t,e="utf8"){const n=D6[e];if(!n)throw new Error(`Unsupported encoding "${e}"`);return(e==="utf8"||e==="utf-8")&&globalThis.Buffer!=null&&globalThis.Buffer.from!=null?globalThis.Buffer.from(t.buffer,t.byteOffset,t.byteLength).toString("utf8"):n.encoder.encode(t).substring(1)}var o2=function(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,o;r<i;r++)(o||!(r in e))&&(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return t.concat(o||Array.prototype.slice.call(e))},DR=function(){function t(e,n,r){this.name=e,this.version=n,this.os=r,this.type="browser"}return t}(),RR=function(){function t(e){this.version=e,this.type="node",this.name="node",this.os=process.platform}return t}(),NR=function(){function t(e,n,r,i){this.name=e,this.version=n,this.os=r,this.bot=i,this.type="bot-device"}return t}(),MR=function(){function t(){this.type="bot",this.bot=!0,this.name="bot",this.version=null,this.os=null}return t}(),LR=function(){function t(){this.type="react-native",this.name="react-native",this.version=null,this.os=null}return t}(),UR=/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,jR=/(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,s2=3,BR=[["aol",/AOLShield\/([0-9\._]+)/],["edge",/Edge\/([0-9\._]+)/],["edge-ios",/EdgiOS\/([0-9\._]+)/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["kakaotalk",/KAKAOTALK\s([0-9\.]+)/],["samsung",/SamsungBrowser\/([0-9\.]+)/],["silk",/\bSilk\/([0-9._-]+)\b/],["miui",/MiuiBrowser\/([0-9\.]+)$/],["beaker",/BeakerBrowser\/([0-9\.]+)/],["edge-chromium",/EdgA?\/([0-9\.]+)/],["chromium-webview",/(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["phantomjs",/PhantomJS\/([0-9\.]+)(:?\s|$)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/],["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["fxios",/FxiOS\/([0-9\.]+)/],["opera-mini",/Opera Mini.*Version\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)/],["pie",/^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],["pie",/^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],["netfront",/^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["safari",/Version\/([0-9\._]+).*Safari/],["facebook",/FB[AS]V\/([0-9\.]+)/],["instagram",/Instagram\s([0-9\.]+)/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Mobile/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Gecko\)$/],["curl",/^curl\/([0-9\.]+)$/],["searchbot",UR]],a2=[["iOS",/iP(hone|od|ad)/],["Android OS",/Android/],["BlackBerry OS",/BlackBerry|BB10/],["Windows Mobile",/IEMobile/],["Amazon OS",/Kindle/],["Windows 3.11",/Win16/],["Windows 95",/(Windows 95)|(Win95)|(Windows_95)/],["Windows 98",/(Windows 98)|(Win98)/],["Windows 2000",/(Windows NT 5.0)|(Windows 2000)/],["Windows XP",/(Windows NT 5.1)|(Windows XP)/],["Windows Server 2003",/(Windows NT 5.2)/],["Windows Vista",/(Windows NT 6.0)/],["Windows 7",/(Windows NT 6.1)/],["Windows 8",/(Windows NT 6.2)/],["Windows 8.1",/(Windows NT 6.3)/],["Windows 10",/(Windows NT 10.0)/],["Windows ME",/Windows ME/],["Windows CE",/Windows CE|WinCE|Microsoft Pocket Internet Explorer/],["Open BSD",/OpenBSD/],["Sun OS",/SunOS/],["Chrome OS",/CrOS/],["Linux",/(Linux)|(X11)/],["Mac OS",/(Mac_PowerPC)|(Macintosh)/],["QNX",/QNX/],["BeOS",/BeOS/],["OS/2",/OS\/2/]];function FR(t){return t?l2(t):typeof document>"u"&&typeof navigator<"u"&&navigator.product==="ReactNative"?new LR:typeof navigator<"u"?l2(navigator.userAgent):HR()}function WR(t){return t!==""&&BR.reduce(function(e,n){var r=n[0],i=n[1];if(e)return e;var o=i.exec(t);return!!o&&[r,o]},!1)}function l2(t){var e=WR(t);if(!e)return null;var n=e[0],r=e[1];if(n==="searchbot")return new MR;var i=r[1]&&r[1].split(".").join("_").split("_").slice(0,3);i?i.length<s2&&(i=o2(o2([],i,!0),VR(s2-i.length),!0)):i=[];var o=i.join("."),s=zR(t),a=jR.exec(t);return a&&a[1]?new NR(n,o,s,a[1]):new DR(n,o,s)}function zR(t){for(var e=0,n=a2.length;e<n;e++){var r=a2[e],i=r[0],o=r[1],s=o.exec(t);if(s)return i}return null}function HR(){var t=typeof process<"u"&&process.version;return t?new RR(process.version.slice(1)):null}function VR(t){for(var e=[],n=0;n<t;n++)e.push("0");return e}var jo={};/*! *****************************************************************************
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
***************************************************************************** */var G1=function(t,e){return G1=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)r.hasOwnProperty(i)&&(n[i]=r[i])},G1(t,e)};function qR(t,e){G1(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}var K1=function(){return K1=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},K1.apply(this,arguments)};function ZR(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function GR(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o}function KR(t,e){return function(n,r){e(n,r,t)}}function YR(t,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(t,e)}function QR(t,e,n,r){function i(o){return o instanceof n?o:new n(function(s){s(o)})}return new(n||(n=Promise))(function(o,s){function a(u){try{c(r.next(u))}catch(d){s(d)}}function l(u){try{c(r.throw(u))}catch(d){s(d)}}function c(u){u.done?o(u.value):i(u.value).then(a,l)}c((r=r.apply(t,e||[])).next())})}function JR(t,e){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(c){return function(u){return l([c,u])}}function l(c){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(o=c[0]&2?i.return:c[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,c[1])).done)return o;switch(i=0,o&&(c=[c[0]&2,o.value]),c[0]){case 0:case 1:o=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,i=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!o||c[1]>o[0]&&c[1]<o[3])){n.label=c[1];break}if(c[0]===6&&n.label<o[1]){n.label=o[1],o=c;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(c);break}o[2]&&n.ops.pop(),n.trys.pop();continue}c=e.call(t,n)}catch(u){c=[6,u],i=0}finally{r=o=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function XR(t,e,n,r){r===void 0&&(r=n),t[r]=e[n]}function eN(t,e){for(var n in t)n!=="default"&&!e.hasOwnProperty(n)&&(e[n]=t[n])}function Y1(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function R6(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),i,o=[],s;try{for(;(e===void 0||e-- >0)&&!(i=r.next()).done;)o.push(i.value)}catch(a){s={error:a}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(s)throw s.error}}return o}function tN(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(R6(arguments[e]));return t}function nN(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;for(var r=Array(t),i=0,e=0;e<n;e++)for(var o=arguments[e],s=0,a=o.length;s<a;s++,i++)r[i]=o[s];return r}function Gc(t){return this instanceof Gc?(this.v=t,this):new Gc(t)}function rN(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(t,e||[]),i,o=[];return i={},s("next"),s("throw"),s("return"),i[Symbol.asyncIterator]=function(){return this},i;function s(p){r[p]&&(i[p]=function(w){return new Promise(function(y,E){o.push([p,w,y,E])>1||a(p,w)})})}function a(p,w){try{l(r[p](w))}catch(y){d(o[0][3],y)}}function l(p){p.value instanceof Gc?Promise.resolve(p.value.v).then(c,u):d(o[0][2],p)}function c(p){a("next",p)}function u(p){a("throw",p)}function d(p,w){p(w),o.shift(),o.length&&a(o[0][0],o[0][1])}}function iN(t){var e,n;return e={},r("next"),r("throw",function(i){throw i}),r("return"),e[Symbol.iterator]=function(){return this},e;function r(i,o){e[i]=t[i]?function(s){return(n=!n)?{value:Gc(t[i](s)),done:i==="return"}:o?o(s):s}:o}}function oN(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=t[Symbol.asyncIterator],n;return e?e.call(t):(t=typeof Y1=="function"?Y1(t):t[Symbol.iterator](),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(o){n[o]=t[o]&&function(s){return new Promise(function(a,l){s=t[o](s),i(a,l,s.done,s.value)})}}function i(o,s,a,l){Promise.resolve(l).then(function(c){o({value:c,done:a})},s)}}function sN(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t}function aN(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function lN(t){return t&&t.__esModule?t:{default:t}}function cN(t,e){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return e.get(t)}function uN(t,e,n){if(!e.has(t))throw new TypeError("attempted to set private field on non-instance");return e.set(t,n),n}const dN=Object.freeze(Object.defineProperty({__proto__:null,get __assign(){return K1},__asyncDelegator:iN,__asyncGenerator:rN,__asyncValues:oN,__await:Gc,__awaiter:QR,__classPrivateFieldGet:cN,__classPrivateFieldSet:uN,__createBinding:XR,__decorate:GR,__exportStar:eN,__extends:qR,__generator:JR,__importDefault:lN,__importStar:aN,__makeTemplateObject:sN,__metadata:YR,__param:KR,__read:R6,__rest:ZR,__spread:tN,__spreadArrays:nN,__values:Y1},Symbol.toStringTag,{value:"Module"})),Kh=D2(dN);var ep={},dl={},c2;function fN(){if(c2)return dl;c2=1,Object.defineProperty(dl,"__esModule",{value:!0}),dl.delay=void 0;function t(e){return new Promise(n=>{setTimeout(()=>{n(!0)},e)})}return dl.delay=t,dl}var Co={},tp={},So={},u2;function hN(){return u2||(u2=1,Object.defineProperty(So,"__esModule",{value:!0}),So.ONE_THOUSAND=So.ONE_HUNDRED=void 0,So.ONE_HUNDRED=100,So.ONE_THOUSAND=1e3),So}var np={},d2;function pN(){return d2||(d2=1,function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.ONE_YEAR=t.FOUR_WEEKS=t.THREE_WEEKS=t.TWO_WEEKS=t.ONE_WEEK=t.THIRTY_DAYS=t.SEVEN_DAYS=t.FIVE_DAYS=t.THREE_DAYS=t.ONE_DAY=t.TWENTY_FOUR_HOURS=t.TWELVE_HOURS=t.SIX_HOURS=t.THREE_HOURS=t.ONE_HOUR=t.SIXTY_MINUTES=t.THIRTY_MINUTES=t.TEN_MINUTES=t.FIVE_MINUTES=t.ONE_MINUTE=t.SIXTY_SECONDS=t.THIRTY_SECONDS=t.TEN_SECONDS=t.FIVE_SECONDS=t.ONE_SECOND=void 0,t.ONE_SECOND=1,t.FIVE_SECONDS=5,t.TEN_SECONDS=10,t.THIRTY_SECONDS=30,t.SIXTY_SECONDS=60,t.ONE_MINUTE=t.SIXTY_SECONDS,t.FIVE_MINUTES=t.ONE_MINUTE*5,t.TEN_MINUTES=t.ONE_MINUTE*10,t.THIRTY_MINUTES=t.ONE_MINUTE*30,t.SIXTY_MINUTES=t.ONE_MINUTE*60,t.ONE_HOUR=t.SIXTY_MINUTES,t.THREE_HOURS=t.ONE_HOUR*3,t.SIX_HOURS=t.ONE_HOUR*6,t.TWELVE_HOURS=t.ONE_HOUR*12,t.TWENTY_FOUR_HOURS=t.ONE_HOUR*24,t.ONE_DAY=t.TWENTY_FOUR_HOURS,t.THREE_DAYS=t.ONE_DAY*3,t.FIVE_DAYS=t.ONE_DAY*5,t.SEVEN_DAYS=t.ONE_DAY*7,t.THIRTY_DAYS=t.ONE_DAY*30,t.ONE_WEEK=t.SEVEN_DAYS,t.TWO_WEEKS=t.ONE_WEEK*2,t.THREE_WEEKS=t.ONE_WEEK*3,t.FOUR_WEEKS=t.ONE_WEEK*4,t.ONE_YEAR=t.ONE_DAY*365}(np)),np}var f2;function N6(){return f2||(f2=1,function(t){Object.defineProperty(t,"__esModule",{value:!0});const e=Kh;e.__exportStar(hN(),t),e.__exportStar(pN(),t)}(tp)),tp}var h2;function mN(){if(h2)return Co;h2=1,Object.defineProperty(Co,"__esModule",{value:!0}),Co.fromMiliseconds=Co.toMiliseconds=void 0;const t=N6();function e(r){return r*t.ONE_THOUSAND}Co.toMiliseconds=e;function n(r){return Math.floor(r/t.ONE_THOUSAND)}return Co.fromMiliseconds=n,Co}var p2;function gN(){return p2||(p2=1,function(t){Object.defineProperty(t,"__esModule",{value:!0});const e=Kh;e.__exportStar(fN(),t),e.__exportStar(mN(),t)}(ep)),ep}var Ts={},m2;function wN(){if(m2)return Ts;m2=1,Object.defineProperty(Ts,"__esModule",{value:!0}),Ts.Watch=void 0;class t{constructor(){this.timestamps=new Map}start(n){if(this.timestamps.has(n))throw new Error(`Watch already started for label: ${n}`);this.timestamps.set(n,{started:Date.now()})}stop(n){const r=this.get(n);if(typeof r.elapsed<"u")throw new Error(`Watch already stopped for label: ${n}`);const i=Date.now()-r.started;this.timestamps.set(n,{started:r.started,elapsed:i})}get(n){const r=this.timestamps.get(n);if(typeof r>"u")throw new Error(`No timestamp found for label: ${n}`);return r}elapsed(n){const r=this.get(n);return r.elapsed||Date.now()-r.started}}return Ts.Watch=t,Ts.default=t,Ts}var rp={},fl={},g2;function yN(){if(g2)return fl;g2=1,Object.defineProperty(fl,"__esModule",{value:!0}),fl.IWatch=void 0;class t{}return fl.IWatch=t,fl}var w2;function vN(){return w2||(w2=1,function(t){Object.defineProperty(t,"__esModule",{value:!0}),Kh.__exportStar(yN(),t)}(rp)),rp}(function(t){Object.defineProperty(t,"__esModule",{value:!0});const e=Kh;e.__exportStar(gN(),t),e.__exportStar(wN(),t),e.__exportStar(vN(),t),e.__exportStar(N6(),t)})(jo);var Ye={};Object.defineProperty(Ye,"__esModule",{value:!0});Ye.getLocalStorage=Ye.getLocalStorageOrThrow=Ye.getCrypto=Ye.getCryptoOrThrow=M6=Ye.getLocation=Ye.getLocationOrThrow=fw=Ye.getNavigator=Ye.getNavigatorOrThrow=dw=Ye.getDocument=Ye.getDocumentOrThrow=Ye.getFromWindowOrThrow=Ye.getFromWindow=void 0;function Es(t){let e;return typeof window<"u"&&typeof window[t]<"u"&&(e=window[t]),e}Ye.getFromWindow=Es;function Ka(t){const e=Es(t);if(!e)throw new Error(`${t} is not defined in Window`);return e}Ye.getFromWindowOrThrow=Ka;function bN(){return Ka("document")}Ye.getDocumentOrThrow=bN;function xN(){return Es("document")}var dw=Ye.getDocument=xN;function EN(){return Ka("navigator")}Ye.getNavigatorOrThrow=EN;function _N(){return Es("navigator")}var fw=Ye.getNavigator=_N;function CN(){return Ka("location")}Ye.getLocationOrThrow=CN;function SN(){return Es("location")}var M6=Ye.getLocation=SN;function AN(){return Ka("crypto")}Ye.getCryptoOrThrow=AN;function TN(){return Es("crypto")}Ye.getCrypto=TN;function PN(){return Ka("localStorage")}Ye.getLocalStorageOrThrow=PN;function $N(){return Es("localStorage")}Ye.getLocalStorage=$N;var hw={};Object.defineProperty(hw,"__esModule",{value:!0});var L6=hw.getWindowMetadata=void 0;const y2=Ye;function IN(){let t,e;try{t=y2.getDocumentOrThrow(),e=y2.getLocationOrThrow()}catch{return null}function n(){const d=t.getElementsByTagName("link"),p=[];for(let w=0;w<d.length;w++){const y=d[w],E=y.getAttribute("rel");if(E&&E.toLowerCase().indexOf("icon")>-1){const C=y.getAttribute("href");if(C)if(C.toLowerCase().indexOf("https:")===-1&&C.toLowerCase().indexOf("http:")===-1&&C.indexOf("//")!==0){let b=e.protocol+"//"+e.host;if(C.indexOf("/")===0)b+=C;else{const m=e.pathname.split("/");m.pop();const v=m.join("/");b+=v+"/"+C}p.push(b)}else if(C.indexOf("//")===0){const b=e.protocol+C;p.push(b)}else p.push(C)}}return p}function r(...d){const p=t.getElementsByTagName("meta");for(let w=0;w<p.length;w++){const y=p[w],E=["itemprop","property","name"].map(C=>y.getAttribute(C)).filter(C=>C?d.includes(C):!1);if(E.length&&E){const C=y.getAttribute("content");if(C)return C}}return""}function i(){let d=r("name","og:site_name","og:title","twitter:title");return d||(d=t.title),d}function o(){return r("description","og:description","twitter:description","keywords")}const s=i(),a=o(),l=e.origin,c=n();return{description:a,url:l,icons:c,name:s}}L6=hw.getWindowMetadata=IN;var Kc={},kN=t=>encodeURIComponent(t).replace(/[!'()*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`),U6="%[a-f0-9]{2}",v2=new RegExp("("+U6+")|([^%]+?)","gi"),b2=new RegExp("("+U6+")+","gi");function Q1(t,e){try{return[decodeURIComponent(t.join(""))]}catch{}if(t.length===1)return t;e=e||1;var n=t.slice(0,e),r=t.slice(e);return Array.prototype.concat.call([],Q1(n),Q1(r))}function ON(t){try{return decodeURIComponent(t)}catch{for(var e=t.match(v2)||[],n=1;n<e.length;n++)t=Q1(e,n).join(""),e=t.match(v2)||[];return t}}function DN(t){for(var e={"%FE%FF":"��","%FF%FE":"��"},n=b2.exec(t);n;){try{e[n[0]]=decodeURIComponent(n[0])}catch{var r=ON(n[0]);r!==n[0]&&(e[n[0]]=r)}n=b2.exec(t)}e["%C2"]="�";for(var i=Object.keys(e),o=0;o<i.length;o++){var s=i[o];t=t.replace(new RegExp(s,"g"),e[s])}return t}var RN=function(t){if(typeof t!="string")throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch{return DN(t)}},NN=(t,e)=>{if(!(typeof t=="string"&&typeof e=="string"))throw new TypeError("Expected the arguments to be of type `string`");if(e==="")return[t];const n=t.indexOf(e);return n===-1?[t]:[t.slice(0,n),t.slice(n+e.length)]},MN=function(t,e){for(var n={},r=Object.keys(t),i=Array.isArray(e),o=0;o<r.length;o++){var s=r[o],a=t[s];(i?e.indexOf(s)!==-1:e(s,a,t))&&(n[s]=a)}return n};(function(t){const e=kN,n=RN,r=NN,i=MN,o=m=>m==null,s=Symbol("encodeFragmentIdentifier");function a(m){switch(m.arrayFormat){case"index":return v=>(x,_)=>{const S=x.length;return _===void 0||m.skipNull&&_===null||m.skipEmptyString&&_===""?x:_===null?[...x,[u(v,m),"[",S,"]"].join("")]:[...x,[u(v,m),"[",u(S,m),"]=",u(_,m)].join("")]};case"bracket":return v=>(x,_)=>_===void 0||m.skipNull&&_===null||m.skipEmptyString&&_===""?x:_===null?[...x,[u(v,m),"[]"].join("")]:[...x,[u(v,m),"[]=",u(_,m)].join("")];case"colon-list-separator":return v=>(x,_)=>_===void 0||m.skipNull&&_===null||m.skipEmptyString&&_===""?x:_===null?[...x,[u(v,m),":list="].join("")]:[...x,[u(v,m),":list=",u(_,m)].join("")];case"comma":case"separator":case"bracket-separator":{const v=m.arrayFormat==="bracket-separator"?"[]=":"=";return x=>(_,S)=>S===void 0||m.skipNull&&S===null||m.skipEmptyString&&S===""?_:(S=S===null?"":S,_.length===0?[[u(x,m),v,u(S,m)].join("")]:[[_,u(S,m)].join(m.arrayFormatSeparator)])}default:return v=>(x,_)=>_===void 0||m.skipNull&&_===null||m.skipEmptyString&&_===""?x:_===null?[...x,u(v,m)]:[...x,[u(v,m),"=",u(_,m)].join("")]}}function l(m){let v;switch(m.arrayFormat){case"index":return(x,_,S)=>{if(v=/\[(\d*)\]$/.exec(x),x=x.replace(/\[\d*\]$/,""),!v){S[x]=_;return}S[x]===void 0&&(S[x]={}),S[x][v[1]]=_};case"bracket":return(x,_,S)=>{if(v=/(\[\])$/.exec(x),x=x.replace(/\[\]$/,""),!v){S[x]=_;return}if(S[x]===void 0){S[x]=[_];return}S[x]=[].concat(S[x],_)};case"colon-list-separator":return(x,_,S)=>{if(v=/(:list)$/.exec(x),x=x.replace(/:list$/,""),!v){S[x]=_;return}if(S[x]===void 0){S[x]=[_];return}S[x]=[].concat(S[x],_)};case"comma":case"separator":return(x,_,S)=>{const f=typeof _=="string"&&_.includes(m.arrayFormatSeparator),T=typeof _=="string"&&!f&&d(_,m).includes(m.arrayFormatSeparator);_=T?d(_,m):_;const O=f||T?_.split(m.arrayFormatSeparator).map(D=>d(D,m)):_===null?_:d(_,m);S[x]=O};case"bracket-separator":return(x,_,S)=>{const f=/(\[\])$/.test(x);if(x=x.replace(/\[\]$/,""),!f){S[x]=_&&d(_,m);return}const T=_===null?[]:_.split(m.arrayFormatSeparator).map(O=>d(O,m));if(S[x]===void 0){S[x]=T;return}S[x]=[].concat(S[x],T)};default:return(x,_,S)=>{if(S[x]===void 0){S[x]=_;return}S[x]=[].concat(S[x],_)}}}function c(m){if(typeof m!="string"||m.length!==1)throw new TypeError("arrayFormatSeparator must be single character string")}function u(m,v){return v.encode?v.strict?e(m):encodeURIComponent(m):m}function d(m,v){return v.decode?n(m):m}function p(m){return Array.isArray(m)?m.sort():typeof m=="object"?p(Object.keys(m)).sort((v,x)=>Number(v)-Number(x)).map(v=>m[v]):m}function w(m){const v=m.indexOf("#");return v!==-1&&(m=m.slice(0,v)),m}function y(m){let v="";const x=m.indexOf("#");return x!==-1&&(v=m.slice(x)),v}function E(m){m=w(m);const v=m.indexOf("?");return v===-1?"":m.slice(v+1)}function C(m,v){return v.parseNumbers&&!Number.isNaN(Number(m))&&typeof m=="string"&&m.trim()!==""?m=Number(m):v.parseBooleans&&m!==null&&(m.toLowerCase()==="true"||m.toLowerCase()==="false")&&(m=m.toLowerCase()==="true"),m}function b(m,v){v=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},v),c(v.arrayFormatSeparator);const x=l(v),_=Object.create(null);if(typeof m!="string"||(m=m.trim().replace(/^[?#&]/,""),!m))return _;for(const S of m.split("&")){if(S==="")continue;let[f,T]=r(v.decode?S.replace(/\+/g," "):S,"=");T=T===void 0?null:["comma","separator","bracket-separator"].includes(v.arrayFormat)?T:d(T,v),x(d(f,v),T,_)}for(const S of Object.keys(_)){const f=_[S];if(typeof f=="object"&&f!==null)for(const T of Object.keys(f))f[T]=C(f[T],v);else _[S]=C(f,v)}return v.sort===!1?_:(v.sort===!0?Object.keys(_).sort():Object.keys(_).sort(v.sort)).reduce((S,f)=>{const T=_[f];return T&&typeof T=="object"&&!Array.isArray(T)?S[f]=p(T):S[f]=T,S},Object.create(null))}t.extract=E,t.parse=b,t.stringify=(m,v)=>{if(!m)return"";v=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},v),c(v.arrayFormatSeparator);const x=T=>v.skipNull&&o(m[T])||v.skipEmptyString&&m[T]==="",_=a(v),S={};for(const T of Object.keys(m))x(T)||(S[T]=m[T]);const f=Object.keys(S);return v.sort!==!1&&f.sort(v.sort),f.map(T=>{const O=m[T];return O===void 0?"":O===null?u(T,v):Array.isArray(O)?O.length===0&&v.arrayFormat==="bracket-separator"?u(T,v)+"[]":O.reduce(_(T),[]).join("&"):u(T,v)+"="+u(O,v)}).filter(T=>T.length>0).join("&")},t.parseUrl=(m,v)=>{v=Object.assign({decode:!0},v);const[x,_]=r(m,"#");return Object.assign({url:x.split("?")[0]||"",query:b(E(m),v)},v&&v.parseFragmentIdentifier&&_?{fragmentIdentifier:d(_,v)}:{})},t.stringifyUrl=(m,v)=>{v=Object.assign({encode:!0,strict:!0,[s]:!0},v);const x=w(m.url).split("?")[0]||"",_=t.extract(m.url),S=t.parse(_,{sort:!1}),f=Object.assign(S,m.query);let T=t.stringify(f,v);T&&(T=`?${T}`);let O=y(m.url);return m.fragmentIdentifier&&(O=`#${v[s]?u(m.fragmentIdentifier,v):m.fragmentIdentifier}`),`${x}${T}${O}`},t.pick=(m,v,x)=>{x=Object.assign({parseFragmentIdentifier:!0,[s]:!1},x);const{url:_,query:S,fragmentIdentifier:f}=t.parseUrl(m,x);return t.stringifyUrl({url:_,query:i(S,v),fragmentIdentifier:f},x)},t.exclude=(m,v,x)=>{const _=Array.isArray(v)?S=>!v.includes(S):(S,f)=>!v(S,f);return t.pick(m,_,x)}})(Kc);const LN={waku:{publish:"waku_publish",batchPublish:"waku_batchPublish",subscribe:"waku_subscribe",batchSubscribe:"waku_batchSubscribe",subscription:"waku_subscription",unsubscribe:"waku_unsubscribe",batchUnsubscribe:"waku_batchUnsubscribe"},irn:{publish:"irn_publish",batchPublish:"irn_batchPublish",subscribe:"irn_subscribe",batchSubscribe:"irn_batchSubscribe",subscription:"irn_subscription",unsubscribe:"irn_unsubscribe",batchUnsubscribe:"irn_batchUnsubscribe"},iridium:{publish:"iridium_publish",batchPublish:"iridium_batchPublish",subscribe:"iridium_subscribe",batchSubscribe:"iridium_batchSubscribe",subscription:"iridium_subscription",unsubscribe:"iridium_unsubscribe",batchUnsubscribe:"iridium_batchUnsubscribe"}},UN=":";function MU(t){const[e,n]=t.split(UN);return{namespace:e,reference:n}}function LU(t,e=[]){const n=[];return Object.keys(t).forEach(r=>{if(e.length&&!e.includes(r))return;const i=t[r];n.push(...i.accounts)}),n}function j6(t,e){return t.includes(":")?[t]:e.chains||[]}const B6="base10",wn="base16",J1="base64pad",pw="utf8",F6=0,_u=1,jN=0,x2=1,X1=12,mw=32;function UU(){const t=cw.generateKeyPair();return{privateKey:yr(t.secretKey,wn),publicKey:yr(t.publicKey,wn)}}function jU(){const t=zh.randomBytes(mw);return yr(t,wn)}function BU(t,e){const n=cw.sharedKey(ir(t,wn),ir(e,wn),!0),r=new AD(Zh.SHA256,n).expand(mw);return yr(r,wn)}function FU(t){const e=Zh.hash(ir(t,wn));return yr(e,wn)}function WU(t){const e=Zh.hash(ir(t,pw));return yr(e,wn)}function BN(t){return ir(`${t}`,B6)}function Yh(t){return Number(yr(t,B6))}function zU(t){const e=BN(typeof t.type<"u"?t.type:F6);if(Yh(e)===_u&&typeof t.senderPublicKey>"u")throw new Error("Missing sender public key for type 1 envelope");const n=typeof t.senderPublicKey<"u"?ir(t.senderPublicKey,wn):void 0,r=typeof t.iv<"u"?ir(t.iv,wn):zh.randomBytes(X1),i=new aw.ChaCha20Poly1305(ir(t.symKey,wn)).seal(r,ir(t.message,pw));return FN({type:e,sealed:i,iv:r,senderPublicKey:n})}function HU(t){const e=new aw.ChaCha20Poly1305(ir(t.symKey,wn)),{sealed:n,iv:r}=W6(t.encoded),i=e.open(r,n);if(i===null)throw new Error("Failed to decrypt");return yr(i,pw)}function FN(t){if(Yh(t.type)===_u){if(typeof t.senderPublicKey>"u")throw new Error("Missing sender public key for type 1 envelope");return yr(n2([t.type,t.senderPublicKey,t.iv,t.sealed]),J1)}return yr(n2([t.type,t.iv,t.sealed]),J1)}function W6(t){const e=ir(t,J1),n=e.slice(jN,x2),r=x2;if(Yh(n)===_u){const a=r+mw,l=a+X1,c=e.slice(r,a),u=e.slice(a,l),d=e.slice(l);return{type:n,sealed:d,iv:u,senderPublicKey:c}}const i=r+X1,o=e.slice(r,i),s=e.slice(i);return{type:n,sealed:s,iv:o}}function VU(t,e){const n=W6(t);return WN({type:Yh(n.type),senderPublicKey:typeof n.senderPublicKey<"u"?yr(n.senderPublicKey,wn):void 0,receiverPublicKey:e==null?void 0:e.receiverPublicKey})}function WN(t){const e=(t==null?void 0:t.type)||F6;if(e===_u){if(typeof(t==null?void 0:t.senderPublicKey)>"u")throw new Error("missing sender public key");if(typeof(t==null?void 0:t.receiverPublicKey)>"u")throw new Error("missing receiver public key")}return{type:e,senderPublicKey:t==null?void 0:t.senderPublicKey,receiverPublicKey:t==null?void 0:t.receiverPublicKey}}function qU(t){return t.type===_u&&typeof t.senderPublicKey=="string"&&typeof t.receiverPublicKey=="string"}var zN=Object.defineProperty,E2=Object.getOwnPropertySymbols,HN=Object.prototype.hasOwnProperty,VN=Object.prototype.propertyIsEnumerable,_2=(t,e,n)=>e in t?zN(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,C2=(t,e)=>{for(var n in e||(e={}))HN.call(e,n)&&_2(t,n,e[n]);if(E2)for(var n of E2(e))VN.call(e,n)&&_2(t,n,e[n]);return t};const qN="ReactNative",Pn={reactNative:"react-native",node:"node",browser:"browser",unknown:"unknown"},ZN="js";function z6(){return typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u"}function Cu(){return!dw()&&!!fw()&&navigator.product===qN}function Qh(){return!z6()&&!!fw()&&!!dw()}function Su(){return Cu()?Pn.reactNative:z6()?Pn.node:Qh()?Pn.browser:Pn.unknown}function ZU(){var t;try{return Cu()&&typeof global<"u"&&typeof(global==null?void 0:global.Application)<"u"?(t=global.Application)==null?void 0:t.applicationId:void 0}catch{return}}function GN(t,e){let n=Kc.parse(t);return n=C2(C2({},n),e),t=Kc.stringify(n),t}function GU(){return L6()||{name:"",description:"",url:"",icons:[""]}}function KN(){if(Su()===Pn.reactNative&&typeof global<"u"&&typeof(global==null?void 0:global.Platform)<"u"){const{OS:n,Version:r}=global.Platform;return[n,r].join("-")}const t=FR();if(t===null)return"unknown";const e=t.os?t.os.replace(" ","").toLowerCase():"unknown";return t.type==="browser"?[e,t.name,t.version].join("-"):[e,t.version].join("-")}function YN(){var t;const e=Su();return e===Pn.browser?[e,((t=M6())==null?void 0:t.host)||"unknown"].join(":"):e}function QN(t,e,n){const r=KN(),i=YN();return[[t,e].join("-"),[ZN,n].join("-"),r,i].join("/")}function KU({protocol:t,version:e,relayUrl:n,sdkVersion:r,auth:i,projectId:o,useOnCloseEvent:s,bundleId:a}){const l=n.split("?"),c=QN(t,e,r),u={auth:i,ua:c,projectId:o,useOnCloseEvent:s||void 0,origin:a||void 0},d=GN(l[1]||"",u);return l[0]+"?"+d}function Ro(t,e){return t.filter(n=>e.includes(n)).length===t.length}function YU(t){return Object.fromEntries(t.entries())}function QU(t){return new Map(Object.entries(t))}function JU(t=jo.FIVE_MINUTES,e){const n=jo.toMiliseconds(t||jo.FIVE_MINUTES);let r,i,o;return{resolve:s=>{o&&r&&(clearTimeout(o),r(s))},reject:s=>{o&&i&&(clearTimeout(o),i(s))},done:()=>new Promise((s,a)=>{o=setTimeout(()=>{a(new Error(e))},n),r=s,i=a})}}function XU(t,e,n){return new Promise(async(r,i)=>{const o=setTimeout(()=>i(new Error(n)),e);try{const s=await t;r(s)}catch(s){i(s)}clearTimeout(o)})}function H6(t,e){if(typeof e=="string"&&e.startsWith(`${t}:`))return e;if(t.toLowerCase()==="topic"){if(typeof e!="string")throw new Error('Value must be "string" for expirer target type: topic');return`topic:${e}`}else if(t.toLowerCase()==="id"){if(typeof e!="number")throw new Error('Value must be "number" for expirer target type: id');return`id:${e}`}throw new Error(`Unknown expirer target type: ${t}`)}function ej(t){return H6("topic",t)}function tj(t){return H6("id",t)}function nj(t){const[e,n]=t.split(":"),r={id:void 0,topic:void 0};if(e==="topic"&&typeof n=="string")r.topic=n;else if(e==="id"&&Number.isInteger(Number(n)))r.id=Number(n);else throw new Error(`Invalid target, expected id:number or topic:string, got ${e}:${n}`);return r}function rj(t,e){return jo.fromMiliseconds((e||Date.now())+jo.toMiliseconds(t))}function ij(t){return Date.now()>=jo.toMiliseconds(t)}function oj(t,e){return`${t}${e?`:${e}`:""}`}function ip(t=[],e=[]){return[...new Set([...t,...e])]}async function sj({id:t,topic:e,wcDeepLink:n}){try{if(!n)return;const r=typeof n=="string"?JSON.parse(n):n;let i=r==null?void 0:r.href;if(typeof i!="string")return;i.endsWith("/")&&(i=i.slice(0,-1));const o=`${i}/wc?requestId=${t}&sessionTopic=${e}`,s=Su();s===Pn.browser?o.startsWith("https://")?window.open(o,"_blank","noreferrer noopener"):window.open(o,"_self","noreferrer noopener"):s===Pn.reactNative&&typeof(global==null?void 0:global.Linking)<"u"&&await global.Linking.openURL(o)}catch(r){console.error(r)}}async function aj(t,e){try{return await t.getItem(e)||(Qh()?localStorage.getItem(e):void 0)}catch(n){console.error(n)}}const JN="irn";function lj(t){return(t==null?void 0:t.relay)||{protocol:JN}}function cj(t){const e=LN[t];if(typeof e>"u")throw new Error(`Relay Protocol not supported: ${t}`);return e}var XN=Object.defineProperty,S2=Object.getOwnPropertySymbols,eM=Object.prototype.hasOwnProperty,tM=Object.prototype.propertyIsEnumerable,A2=(t,e,n)=>e in t?XN(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,nM=(t,e)=>{for(var n in e||(e={}))eM.call(e,n)&&A2(t,n,e[n]);if(S2)for(var n of S2(e))tM.call(e,n)&&A2(t,n,e[n]);return t};function rM(t,e="-"){const n={},r="relay"+e;return Object.keys(t).forEach(i=>{if(i.startsWith(r)){const o=i.replace(r,""),s=t[i];n[o]=s}}),n}function uj(t){t=t.includes("wc://")?t.replace("wc://",""):t,t=t.includes("wc:")?t.replace("wc:",""):t;const e=t.indexOf(":"),n=t.indexOf("?")!==-1?t.indexOf("?"):void 0,r=t.substring(0,e),i=t.substring(e+1,n).split("@"),o=typeof n<"u"?t.substring(n):"",s=Kc.parse(o);return{protocol:r,topic:iM(i[0]),version:parseInt(i[1],10),symKey:s.symKey,relay:rM(s)}}function iM(t){return t.startsWith("//")?t.substring(2):t}function oM(t,e="-"){const n="relay",r={};return Object.keys(t).forEach(i=>{const o=n+e+i;t[i]&&(r[o]=t[i])}),r}function dj(t){return`${t.protocol}:${t.topic}@${t.version}?`+Kc.stringify(nM({symKey:t.symKey},oM(t.relay)))}var sM=Object.defineProperty,aM=Object.defineProperties,lM=Object.getOwnPropertyDescriptors,T2=Object.getOwnPropertySymbols,cM=Object.prototype.hasOwnProperty,uM=Object.prototype.propertyIsEnumerable,P2=(t,e,n)=>e in t?sM(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,dM=(t,e)=>{for(var n in e||(e={}))cM.call(e,n)&&P2(t,n,e[n]);if(T2)for(var n of T2(e))uM.call(e,n)&&P2(t,n,e[n]);return t},fM=(t,e)=>aM(t,lM(e));function Ya(t){const e=[];return t.forEach(n=>{const[r,i]=n.split(":");e.push(`${r}:${i}`)}),e}function hM(t){const e=[];return Object.values(t).forEach(n=>{e.push(...Ya(n.accounts))}),e}function pM(t,e){const n=[];return Object.values(t).forEach(r=>{Ya(r.accounts).includes(e)&&n.push(...r.methods)}),n}function mM(t,e){const n=[];return Object.values(t).forEach(r=>{Ya(r.accounts).includes(e)&&n.push(...r.events)}),n}function fj(t,e){const n=SM(t,e);if(n)throw new Error(n.message);const r={};for(const[i,o]of Object.entries(t))r[i]={methods:o.methods,events:o.events,chains:o.accounts.map(s=>`${s.split(":")[0]}:${s.split(":")[1]}`)};return r}function V6(t){return t.includes(":")}function gM(t){return V6(t)?t.split(":")[0]:t}function q6(t){var e,n,r;const i={};if(!gw(t))return i;for(const[o,s]of Object.entries(t)){const a=V6(o)?[o]:s.chains,l=s.methods||[],c=s.events||[],u=gM(o);i[u]=fM(dM({},i[u]),{chains:ip(a,(e=i[u])==null?void 0:e.chains),methods:ip(l,(n=i[u])==null?void 0:n.methods),events:ip(c,(r=i[u])==null?void 0:r.events)})}return i}const wM={INVALID_METHOD:{message:"Invalid method.",code:1001},INVALID_EVENT:{message:"Invalid event.",code:1002},INVALID_UPDATE_REQUEST:{message:"Invalid update request.",code:1003},INVALID_EXTEND_REQUEST:{message:"Invalid extend request.",code:1004},INVALID_SESSION_SETTLE_REQUEST:{message:"Invalid session settle request.",code:1005},UNAUTHORIZED_METHOD:{message:"Unauthorized method.",code:3001},UNAUTHORIZED_EVENT:{message:"Unauthorized event.",code:3002},UNAUTHORIZED_UPDATE_REQUEST:{message:"Unauthorized update request.",code:3003},UNAUTHORIZED_EXTEND_REQUEST:{message:"Unauthorized extend request.",code:3004},USER_REJECTED:{message:"User rejected.",code:5e3},USER_REJECTED_CHAINS:{message:"User rejected chains.",code:5001},USER_REJECTED_METHODS:{message:"User rejected methods.",code:5002},USER_REJECTED_EVENTS:{message:"User rejected events.",code:5003},UNSUPPORTED_CHAINS:{message:"Unsupported chains.",code:5100},UNSUPPORTED_METHODS:{message:"Unsupported methods.",code:5101},UNSUPPORTED_EVENTS:{message:"Unsupported events.",code:5102},UNSUPPORTED_ACCOUNTS:{message:"Unsupported accounts.",code:5103},UNSUPPORTED_NAMESPACE_KEY:{message:"Unsupported namespace key.",code:5104},USER_DISCONNECTED:{message:"User disconnected.",code:6e3},SESSION_SETTLEMENT_FAILED:{message:"Session settlement failed.",code:7e3},WC_METHOD_UNSUPPORTED:{message:"Unsupported wc_ method.",code:10001}},yM={NOT_INITIALIZED:{message:"Not initialized.",code:1},NO_MATCHING_KEY:{message:"No matching key.",code:2},RESTORE_WILL_OVERRIDE:{message:"Restore will override.",code:3},RESUBSCRIBED:{message:"Resubscribed.",code:4},MISSING_OR_INVALID:{message:"Missing or invalid.",code:5},EXPIRED:{message:"Expired.",code:6},UNKNOWN_TYPE:{message:"Unknown type.",code:7},MISMATCHED_TOPIC:{message:"Mismatched topic.",code:8},NON_CONFORMING_NAMESPACES:{message:"Non conforming namespaces.",code:9}};function Ii(t,e){const{message:n,code:r}=yM[t];return{message:e?`${n} ${e}`:n,code:r}}function Ra(t,e){const{message:n,code:r}=wM[t];return{message:e?`${n} ${e}`:n,code:r}}function Jh(t,e){return Array.isArray(t)?typeof e<"u"&&t.length?t.every(e):!0:!1}function gw(t){return Object.getPrototypeOf(t)===Object.prototype&&Object.keys(t).length}function Bo(t){return typeof t>"u"}function Kn(t,e){return e&&Bo(t)?!0:typeof t=="string"&&!!t.trim().length}function ww(t,e){return e&&Bo(t)?!0:typeof t=="number"&&!isNaN(t)}function hj(t,e){const{requiredNamespaces:n}=e,r=Object.keys(t.namespaces),i=Object.keys(n);let o=!0;return Ro(i,r)?(r.forEach(s=>{const{accounts:a,methods:l,events:c}=t.namespaces[s],u=Ya(a),d=n[s];(!Ro(j6(s,d),u)||!Ro(d.methods,l)||!Ro(d.events,c))&&(o=!1)}),o):!1}function kf(t){return Kn(t,!1)&&t.includes(":")?t.split(":").length===2:!1}function vM(t){if(Kn(t,!1)&&t.includes(":")){const e=t.split(":");if(e.length===3){const n=e[0]+":"+e[1];return!!e[2]&&kf(n)}}return!1}function pj(t){if(Kn(t,!1))try{return typeof new URL(t)<"u"}catch{return!1}return!1}function mj(t){var e;return(e=t==null?void 0:t.proposer)==null?void 0:e.publicKey}function gj(t){return t==null?void 0:t.topic}function wj(t,e){let n=null;return Kn(t==null?void 0:t.publicKey,!1)||(n=Ii("MISSING_OR_INVALID",`${e} controller public key should be a string`)),n}function $2(t){let e=!0;return Jh(t)?t.length&&(e=t.every(n=>Kn(n,!1))):e=!1,e}function bM(t,e,n){let r=null;return Jh(e)&&e.length?e.forEach(i=>{r||kf(i)||(r=Ra("UNSUPPORTED_CHAINS",`${n}, chain ${i} should be a string and conform to "namespace:chainId" format`))}):kf(t)||(r=Ra("UNSUPPORTED_CHAINS",`${n}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)),r}function xM(t,e,n){let r=null;return Object.entries(t).forEach(([i,o])=>{if(r)return;const s=bM(i,j6(i,o),`${e} ${n}`);s&&(r=s)}),r}function EM(t,e){let n=null;return Jh(t)?t.forEach(r=>{n||vM(r)||(n=Ra("UNSUPPORTED_ACCOUNTS",`${e}, account ${r} should be a string and conform to "namespace:chainId:address" format`))}):n=Ra("UNSUPPORTED_ACCOUNTS",`${e}, accounts should be an array of strings conforming to "namespace:chainId:address" format`),n}function _M(t,e){let n=null;return Object.values(t).forEach(r=>{if(n)return;const i=EM(r==null?void 0:r.accounts,`${e} namespace`);i&&(n=i)}),n}function CM(t,e){let n=null;return $2(t==null?void 0:t.methods)?$2(t==null?void 0:t.events)||(n=Ra("UNSUPPORTED_EVENTS",`${e}, events should be an array of strings or empty array for no events`)):n=Ra("UNSUPPORTED_METHODS",`${e}, methods should be an array of strings or empty array for no methods`),n}function Z6(t,e){let n=null;return Object.values(t).forEach(r=>{if(n)return;const i=CM(r,`${e}, namespace`);i&&(n=i)}),n}function yj(t,e,n){let r=null;if(t&&gw(t)){const i=Z6(t,e);i&&(r=i);const o=xM(t,e,n);o&&(r=o)}else r=Ii("MISSING_OR_INVALID",`${e}, ${n} should be an object with data`);return r}function SM(t,e){let n=null;if(t&&gw(t)){const r=Z6(t,e);r&&(n=r);const i=_M(t,e);i&&(n=i)}else n=Ii("MISSING_OR_INVALID",`${e}, namespaces should be an object with data`);return n}function AM(t){return Kn(t.protocol,!0)}function vj(t,e){let n=!1;return e&&!t?n=!0:t&&Jh(t)&&t.length&&t.forEach(r=>{n=AM(r)}),n}function bj(t){return typeof t=="number"}function xj(t){return typeof t<"u"&&typeof t!==null}function Ej(t){return!(!t||typeof t!="object"||!t.code||!ww(t.code,!1)||!t.message||!Kn(t.message,!1))}function _j(t){return!(Bo(t)||!Kn(t.method,!1))}function Cj(t){return!(Bo(t)||Bo(t.result)&&Bo(t.error)||!ww(t.id,!1)||!Kn(t.jsonrpc,!1))}function Sj(t){return!(Bo(t)||!Kn(t.name,!1))}function Aj(t,e){return!(!kf(e)||!hM(t).includes(e))}function Tj(t,e,n){return Kn(n,!1)?pM(t,e).includes(n):!1}function Pj(t,e,n){return Kn(n,!1)?mM(t,e).includes(n):!1}function $j(t,e,n){let r=null;const i=TM(t),o=PM(e),s=Object.keys(i),a=Object.keys(o),l=I2(Object.keys(t)),c=I2(Object.keys(e)),u=l.filter(d=>!c.includes(d));return u.length&&(r=Ii("NON_CONFORMING_NAMESPACES",`${n} namespaces keys don't satisfy requiredNamespaces.
      Required: ${u.toString()}
      Received: ${Object.keys(e).toString()}`)),Ro(s,a)||(r=Ii("NON_CONFORMING_NAMESPACES",`${n} namespaces chains don't satisfy required namespaces.
      Required: ${s.toString()}
      Approved: ${a.toString()}`)),Object.keys(e).forEach(d=>{if(!d.includes(":")||r)return;const p=Ya(e[d].accounts);p.includes(d)||(r=Ii("NON_CONFORMING_NAMESPACES",`${n} namespaces accounts don't satisfy namespace accounts for ${d}
        Required: ${d}
        Approved: ${p.toString()}`))}),s.forEach(d=>{r||(Ro(i[d].methods,o[d].methods)?Ro(i[d].events,o[d].events)||(r=Ii("NON_CONFORMING_NAMESPACES",`${n} namespaces events don't satisfy namespace events for ${d}`)):r=Ii("NON_CONFORMING_NAMESPACES",`${n} namespaces methods don't satisfy namespace methods for ${d}`))}),r}function TM(t){const e={};return Object.keys(t).forEach(n=>{var r;n.includes(":")?e[n]=t[n]:(r=t[n].chains)==null||r.forEach(i=>{e[i]={methods:t[n].methods,events:t[n].events}})}),e}function I2(t){return[...new Set(t.map(e=>e.includes(":")?e.split(":")[0]:e))]}function PM(t){const e={};return Object.keys(t).forEach(n=>{if(n.includes(":"))e[n]=t[n];else{const r=Ya(t[n].accounts);r==null||r.forEach(i=>{e[i]={accounts:t[n].accounts.filter(o=>o.includes(`${i}:`)),methods:t[n].methods,events:t[n].events}})}}),e}function Ij(t,e){return ww(t,!1)&&t<=e.max&&t>=e.min}function kj(){const t=Su();return new Promise(e=>{switch(t){case Pn.browser:e($M());break;case Pn.reactNative:e(IM());break;case Pn.node:e(kM());break;default:e(!0)}})}function $M(){return Qh()&&(navigator==null?void 0:navigator.onLine)}async function IM(){if(Cu()&&typeof global<"u"&&global!=null&&global.NetInfo){const t=await(global==null?void 0:global.NetInfo.fetch());return t==null?void 0:t.isConnected}return!0}function kM(){return!0}function Oj(t){switch(Su()){case Pn.browser:OM(t);break;case Pn.reactNative:DM(t);break}}function OM(t){!Cu()&&Qh()&&(window.addEventListener("online",()=>t(!0)),window.addEventListener("offline",()=>t(!1)))}function DM(t){Cu()&&typeof global<"u"&&global!=null&&global.NetInfo&&(global==null||global.NetInfo.addEventListener(e=>t(e==null?void 0:e.isConnected)))}const op={};class Dj{static get(e){return op[e]}static set(e,n){op[e]=n}static delete(e){delete op[e]}}var G6="eip155",RM="store",K6="requestedChains",em="wallet_addEthereumChain",st,Ml,vd,tm,yw,Y6,bd,nm,rm,Q6,Of,vw,Os,bl,Df,bw,Rf,xw,Nf,Ew,NM=class extends mh{constructor(t){super({...t,options:{isNewChainsStale:!0,...t.options}}),ln(this,vd),ln(this,yw),ln(this,bd),ln(this,rm),ln(this,Of),ln(this,Os),ln(this,Df),ln(this,Rf),ln(this,Nf),this.id="walletConnect",this.name="WalletConnect",this.ready=!0,ln(this,st,void 0),ln(this,Ml,void 0),this.onAccountsChanged=e=>{e.length===0?this.emit("disconnect"):this.emit("change",{account:Fn(e[0])})},this.onChainChanged=e=>{const n=Number(e),r=this.isChainUnsupported(n);this.emit("change",{chain:{id:n,unsupported:r}})},this.onDisconnect=()=>{kt(this,Os,bl).call(this,[]),this.emit("disconnect")},this.onDisplayUri=e=>{this.emit("message",{type:"display_uri",data:e})},this.onConnect=()=>{this.emit("connect",{})},kt(this,vd,tm).call(this)}async connect({chainId:t,pairingTopic:e}={}){var n,r,i,o,s;try{let a=t;if(!a){const y=(n=this.storage)==null?void 0:n.getItem(RM),E=(o=(i=(r=y==null?void 0:y.state)==null?void 0:r.data)==null?void 0:i.chain)==null?void 0:o.id;E&&!this.isChainUnsupported(E)?a=E:a=(s=this.chains[0])==null?void 0:s.id}if(!a)throw new Error("No chains found on connector.");const l=await this.getProvider();kt(this,rm,Q6).call(this);const c=kt(this,bd,nm).call(this);if(l.session&&c&&await l.disconnect(),!l.session||c){const y=this.chains.filter(E=>E.id!==a).map(E=>E.id);this.emit("message",{type:"connecting"}),await l.connect({pairingTopic:e,optionalChains:[a,...y]}),kt(this,Os,bl).call(this,this.chains.map(({id:E})=>E))}const u=await l.enable(),d=Fn(u[0]),p=await this.getChainId(),w=this.isChainUnsupported(p);return{account:d,chain:{id:p,unsupported:w}}}catch(a){throw/user rejected/i.test(a==null?void 0:a.message)?new fn(a):a}}async disconnect(){const t=await this.getProvider();try{await t.disconnect()}catch(e){if(!/No matching key/i.test(e.message))throw e}finally{kt(this,Of,vw).call(this),kt(this,Os,bl).call(this,[])}}async getAccount(){const{accounts:t}=await this.getProvider();return Fn(t[0])}async getChainId(){const{chainId:t}=await this.getProvider();return t}async getProvider({chainId:t}={}){return Ve(this,st)||await kt(this,vd,tm).call(this),t&&await this.switchChain(t),Ve(this,st)}async getWalletClient({chainId:t}={}){const[e,n]=await Promise.all([this.getProvider({chainId:t}),this.getAccount()]),r=this.chains.find(i=>i.id===t);if(!e)throw new Error("provider is required.");return ph({account:n,chain:r,transport:fh(e)})}async isAuthorized(){try{const[t,e]=await Promise.all([this.getAccount(),this.getProvider()]),n=kt(this,bd,nm).call(this);if(!t)return!1;if(n&&e.session){try{await e.disconnect()}catch{}return!1}return!0}catch{return!1}}async switchChain(t){var n,r;const e=this.chains.find(i=>i.id===t);if(!e)throw new dr(new Error("chain not found on connector."));try{const i=await this.getProvider(),o=kt(this,Rf,xw).call(this),s=kt(this,Nf,Ew).call(this);if(!o.includes(t)&&s.includes(em)){await i.request({method:em,params:[{chainId:Se(e.id),blockExplorerUrls:[(r=(n=e.blockExplorers)==null?void 0:n.default)==null?void 0:r.url],chainName:e.name,nativeCurrency:e.nativeCurrency,rpcUrls:[...e.rpcUrls.default.http]}]});const l=kt(this,Df,bw).call(this);l.push(t),kt(this,Os,bl).call(this,l)}return await i.request({method:"wallet_switchEthereumChain",params:[{chainId:Se(t)}]}),e}catch(i){const o=typeof i=="string"?i:i==null?void 0:i.message;throw/user rejected request/i.test(o)?new fn(i):new dr(i)}}};st=new WeakMap;Ml=new WeakMap;vd=new WeakSet;tm=async function(){return!Ve(this,Ml)&&typeof window<"u"&&wc(this,Ml,kt(this,yw,Y6).call(this)),Ve(this,Ml)};yw=new WeakSet;Y6=async function(){const{EthereumProvider:t}=await ha(()=>import("./index.es-CWLgovZL.js"),__vite__mapDeps([2,1])),e=this.chains.map(({id:n})=>n);if(e.length){const{projectId:n,showQrModal:r=!0,qrModalOptions:i,metadata:o,relayUrl:s}=this.options;wc(this,st,await t.init({showQrModal:r,qrModalOptions:i,projectId:n,optionalChains:e,rpcMap:Object.fromEntries(this.chains.map(a=>[a.id,a.rpcUrls.default.http[0]])),metadata:o,relayUrl:s}))}};bd=new WeakSet;nm=function(){if(kt(this,Nf,Ew).call(this).includes(em)||!this.options.isNewChainsStale)return!1;const e=kt(this,Df,bw).call(this),n=this.chains.map(({id:i})=>i),r=kt(this,Rf,xw).call(this);return r.length&&!r.some(i=>n.includes(i))?!1:!n.every(i=>e.includes(i))};rm=new WeakSet;Q6=function(){Ve(this,st)&&(kt(this,Of,vw).call(this),Ve(this,st).on("accountsChanged",this.onAccountsChanged),Ve(this,st).on("chainChanged",this.onChainChanged),Ve(this,st).on("disconnect",this.onDisconnect),Ve(this,st).on("session_delete",this.onDisconnect),Ve(this,st).on("display_uri",this.onDisplayUri),Ve(this,st).on("connect",this.onConnect))};Of=new WeakSet;vw=function(){Ve(this,st)&&(Ve(this,st).removeListener("accountsChanged",this.onAccountsChanged),Ve(this,st).removeListener("chainChanged",this.onChainChanged),Ve(this,st).removeListener("disconnect",this.onDisconnect),Ve(this,st).removeListener("session_delete",this.onDisconnect),Ve(this,st).removeListener("display_uri",this.onDisplayUri),Ve(this,st).removeListener("connect",this.onConnect))};Os=new WeakSet;bl=function(t){var e;(e=this.storage)==null||e.setItem(K6,t)};Df=new WeakSet;bw=function(){var t;return((t=this.storage)==null?void 0:t.getItem(K6))??[]};Rf=new WeakSet;xw=function(){var r,i,o;if(!Ve(this,st))return[];const t=(r=Ve(this,st).session)==null?void 0:r.namespaces;return t?((o=(i=q6(t)[G6])==null?void 0:i.chains)==null?void 0:o.map(s=>parseInt(s.split(":")[1]||"")))??[]:[]};Nf=new WeakSet;Ew=function(){var r,i;if(!Ve(this,st))return[];const t=(r=Ve(this,st).session)==null?void 0:r.namespaces;return t?((i=q6(t)[G6])==null?void 0:i.methods)??[]:[]};function MM(){return function(t){return t.rpcUrls.public.http[0]?{chain:t,rpcUrls:t.rpcUrls.public}:null}}class LM extends mh{constructor(e){super(e),this.id="w3mEmail",this.name="Web3Modal Email",this.ready=!0,this.provider={},typeof window<"u"&&(this.provider=new gk(e.options.projectId))}async getProvider(){return Promise.resolve(this.provider)}async connect(e={}){const{address:n,chainId:r}=await this.provider.connect({chainId:e.chainId});return{account:n,chain:{id:r,unsupported:this.isChainUnsupported(1)}}}async switchChain(e){try{const n=this.chains.find(i=>i.id===e);if(!n)throw new dr(new Error("chain not found on connector."));await this.provider.switchNetwork(e);const r=this.isChainUnsupported(e);return this.emit("change",{chain:{id:e,unsupported:r}}),n}catch(n){throw n instanceof Error?new dr(n):n}}async disconnect(){await this.provider.disconnect()}async getAccount(){const{address:e}=await this.provider.connect();return e}async getChainId(){const{chainId:e}=await this.provider.getChainId();return e}async getWalletClient(){const{address:e,chainId:n}=await this.provider.connect();return Promise.resolve(ph({account:e,chain:{id:n},transport:fh(this.provider)}))}async isAuthorized(){const{isConnected:e}=await this.provider.isConnected();return e}onAccountsChanged(){}onChainChanged(){}onDisconnect(){}}const UM=de.getBlockchainApiUrl();function jM({projectId:t}){return function(n){if(!Zr.WalletConnectRpcChainIds.includes(n.id))return null;const r=`${UM}/v1/?chainId=${be.EIP155}:${n.id}&projectId=${t}`;return{chain:{...n,rpcUrls:{...n.rpcUrls,default:{http:[r]}}},rpcUrls:{http:[r]}}}}function BM({projectId:t,chains:e,metadata:n,enableInjected:r,enableCoinbase:i,enableEIP6963:o,enableEmail:s,enableWalletConnect:a}){const{publicClient:l}=B9(e,[jM({projectId:t}),MM()]),c=[];return a!==!1&&c.push(new NM({chains:e,options:{projectId:t,showQrModal:!1,metadata:n}})),r!==!1&&c.push(new Ig({chains:e,options:{shimDisconnect:!0}})),o!==!1&&c.push(new Vk({chains:e})),i!==!1&&c.push(new qO({chains:e,options:{appName:(n==null?void 0:n.name)??"Unknown"}})),s===!0&&c.push(new LM({chains:e,options:{projectId:t}})),WO({autoConnect:!0,connectors:c,publicClient:l})}let sp;function FM(t){return sp||(sp=new Hk({...t,_sdkVersion:`react-wagmi-${be.VERSION}`})),sp}const J6=[Pg,S9,z5,BE,C9,_9],X6="678b2f9229f99e6fd49a7bd85bd1b88a",WM={name:"Skypier VPN",description:"Skypier VPN",url:"https://skypier.io",icons:["https://avatars.githubusercontent.com/u/145208723"]},e8=BM({chains:J6,projectId:X6,metadata:WM});FM({wagmiConfig:e8,projectId:X6,chains:J6,themeVariables:{"--w3m-color-mix":"#010101","--w3m-color-mix-strength":40}});ap.createRoot(document.getElementById("root")).render(Fe.jsx(g8.StrictMode,{children:Fe.jsx(VO,{config:e8,children:Fe.jsx(jE,{})})}));export{Yh as $,zh as A,Q as B,ir as C,yr as D,n2 as E,im as F,Bo as G,Il as H,tc as I,UU as J,jU as K,BU as L,gj as M,Ii as N,FU as O,WN as P,qU as Q,zU as R,VU as S,HU as T,W6 as U,mj as V,wn as W,ZU as X,XU as Y,kj as Z,ha as _,k7 as a,KU as a0,Oj as a1,_u as a2,rj as a3,dj as a4,uj as a5,JU as a6,oj as a7,Ra as a8,ij as a9,Ej as aA,AM as aB,wj as aC,Aj as aD,_j as aE,Tj as aF,Ij as aG,Cj as aH,Sj as aI,Pj as aJ,bj as aK,gM as aL,V6 as aM,ip as aN,MU as aO,LU as aP,kD as aQ,u6 as aR,qR as aS,xj as aa,pj as ab,Kn as ac,nj as ad,ej as ae,tj as af,Cu as ag,Qh as ah,z6 as ai,YU as aj,QU as ak,WU as al,lj as am,cj as an,Jh as ao,GU as ap,gw as aq,fj as ar,aj as as,sj as at,hj as au,Dj as av,vj as aw,yj as ax,SM as ay,$j as az,O7 as b,D7 as c,k5 as d,Yc as e,Y5 as f,y7 as g,Jf as h,tn as i,Ki as j,_C as k,w7 as l,lh as m,pd as n,si as o,an as p,nu as q,Or as r,hi as s,te as t,hu as u,D2 as v,Kh as w,jo as x,Te as y,Er as z};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-DS48olc_.js","assets/events-GkilH_0e.js","assets/index.es-CWLgovZL.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
