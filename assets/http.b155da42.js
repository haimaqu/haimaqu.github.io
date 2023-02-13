var xe=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function kr(t){if(t.__esModule)return t;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(t).forEach(function(r){var n=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(e,r,n.get?n:{enumerable:!0,get:function(){return t[r]}})}),e}var Y={exports:{}},de=function(e,r){return function(){for(var s=new Array(arguments.length),a=0;a<s.length;a++)s[a]=arguments[a];return e.apply(r,s)}},Pe=de,A=Object.prototype.toString;function Q(t){return A.call(t)==="[object Array]"}function K(t){return typeof t=="undefined"}function Ne(t){return t!==null&&!K(t)&&t.constructor!==null&&!K(t.constructor)&&typeof t.constructor.isBuffer=="function"&&t.constructor.isBuffer(t)}function Te(t){return A.call(t)==="[object ArrayBuffer]"}function Ae(t){return typeof FormData!="undefined"&&t instanceof FormData}function Ue(t){var e;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&t.buffer instanceof ArrayBuffer,e}function $e(t){return typeof t=="string"}function Le(t){return typeof t=="number"}function pe(t){return t!==null&&typeof t=="object"}function _(t){if(A.call(t)!=="[object Object]")return!1;var e=Object.getPrototypeOf(t);return e===null||e===Object.prototype}function Be(t){return A.call(t)==="[object Date]"}function je(t){return A.call(t)==="[object File]"}function ke(t){return A.call(t)==="[object Blob]"}function he(t){return A.call(t)==="[object Function]"}function qe(t){return pe(t)&&he(t.pipe)}function _e(t){return typeof URLSearchParams!="undefined"&&t instanceof URLSearchParams}function De(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function Me(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function Z(t,e){if(!(t===null||typeof t=="undefined"))if(typeof t!="object"&&(t=[t]),Q(t))for(var r=0,n=t.length;r<n;r++)e.call(null,t[r],r,t);else for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.call(null,t[s],s,t)}function G(){var t={};function e(s,a){_(t[a])&&_(s)?t[a]=G(t[a],s):_(s)?t[a]=G({},s):Q(s)?t[a]=s.slice():t[a]=s}for(var r=0,n=arguments.length;r<n;r++)Z(arguments[r],e);return t}function Ie(t,e,r){return Z(e,function(s,a){r&&typeof s=="function"?t[a]=Pe(s,r):t[a]=s}),t}function Fe(t){return t.charCodeAt(0)===65279&&(t=t.slice(1)),t}var S={isArray:Q,isArrayBuffer:Te,isBuffer:Ne,isFormData:Ae,isArrayBufferView:Ue,isString:$e,isNumber:Le,isObject:pe,isPlainObject:_,isUndefined:K,isDate:Be,isFile:je,isBlob:ke,isFunction:he,isStream:qe,isURLSearchParams:_e,isStandardBrowserEnv:Me,forEach:Z,merge:G,extend:Ie,trim:De,stripBOM:Fe},$=S;function te(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var me=function(e,r,n){if(!r)return e;var s;if(n)s=n(r);else if($.isURLSearchParams(r))s=r.toString();else{var a=[];$.forEach(r,function(d,g){d===null||typeof d=="undefined"||($.isArray(d)?g=g+"[]":d=[d],$.forEach(d,function(p){$.isDate(p)?p=p.toISOString():$.isObject(p)&&(p=JSON.stringify(p)),a.push(te(g)+"="+te(p))}))}),s=a.join("&")}if(s){var u=e.indexOf("#");u!==-1&&(e=e.slice(0,u)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e},He=S;function M(){this.handlers=[]}M.prototype.use=function(e,r,n){return this.handlers.push({fulfilled:e,rejected:r,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1};M.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};M.prototype.forEach=function(e){He.forEach(this.handlers,function(n){n!==null&&e(n)})};var Je=M,ze=S,We=function(e,r){ze.forEach(e,function(s,a){a!==r&&a.toUpperCase()===r.toUpperCase()&&(e[r]=s,delete e[a])})},ve=function(e,r,n,s,a){return e.config=r,n&&(e.code=n),e.request=s,e.response=a,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e},Ve=ve,ye=function(e,r,n,s,a){var u=new Error(e);return Ve(u,r,n,s,a)},Xe=ye,Ke=function(e,r,n){var s=n.config.validateStatus;!n.status||!s||s(n.status)?e(n):r(Xe("Request failed with status code "+n.status,n.config,null,n.request,n))},k=S,Ge=k.isStandardBrowserEnv()?function(){return{write:function(r,n,s,a,u,f){var d=[];d.push(r+"="+encodeURIComponent(n)),k.isNumber(s)&&d.push("expires="+new Date(s).toGMTString()),k.isString(a)&&d.push("path="+a),k.isString(u)&&d.push("domain="+u),f===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(r){var n=document.cookie.match(new RegExp("(^|;\\s*)("+r+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(r){this.write(r,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),Ye=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)},Qe=function(e,r){return r?e.replace(/\/+$/,"")+"/"+r.replace(/^\/+/,""):e},Ze=Ye,er=Qe,rr=function(e,r){return e&&!Ze(r)?er(e,r):r},z=S,tr=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],nr=function(e){var r={},n,s,a;return e&&z.forEach(e.split(`
`),function(f){if(a=f.indexOf(":"),n=z.trim(f.substr(0,a)).toLowerCase(),s=z.trim(f.substr(a+1)),n){if(r[n]&&tr.indexOf(n)>=0)return;n==="set-cookie"?r[n]=(r[n]?r[n]:[]).concat([s]):r[n]=r[n]?r[n]+", "+s:s}}),r},ne=S,sr=ne.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a"),n;function s(a){var u=a;return e&&(r.setAttribute("href",u),u=r.href),r.setAttribute("href",u),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return n=s(window.location.href),function(u){var f=ne.isString(u)?s(u):u;return f.protocol===n.protocol&&f.host===n.host}}():function(){return function(){return!0}}();function ee(t){this.message=t}ee.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")};ee.prototype.__CANCEL__=!0;var I=ee,q=S,ir=Ke,ar=Ge,or=me,ur=rr,fr=nr,lr=sr,W=ye,cr=H,dr=I,se=function(e){return new Promise(function(n,s){var a=e.data,u=e.headers,f=e.responseType,d;function g(){e.cancelToken&&e.cancelToken.unsubscribe(d),e.signal&&e.signal.removeEventListener("abort",d)}q.isFormData(a)&&delete u["Content-Type"];var o=new XMLHttpRequest;if(e.auth){var p=e.auth.username||"",y=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";u.Authorization="Basic "+btoa(p+":"+y)}var P=ur(e.baseURL,e.url);o.open(e.method.toUpperCase(),or(P,e.params,e.paramsSerializer),!0),o.timeout=e.timeout;function i(){if(!!o){var c="getAllResponseHeaders"in o?fr(o.getAllResponseHeaders()):null,m=!f||f==="text"||f==="json"?o.responseText:o.response,v={data:m,status:o.status,statusText:o.statusText,headers:c,config:e,request:o};ir(function(h){n(h),g()},function(h){s(h),g()},v),o=null}}if("onloadend"in o?o.onloadend=i:o.onreadystatechange=function(){!o||o.readyState!==4||o.status===0&&!(o.responseURL&&o.responseURL.indexOf("file:")===0)||setTimeout(i)},o.onabort=function(){!o||(s(W("Request aborted",e,"ECONNABORTED",o)),o=null)},o.onerror=function(){s(W("Network Error",e,null,o)),o=null},o.ontimeout=function(){var m=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",v=e.transitional||cr.transitional;e.timeoutErrorMessage&&(m=e.timeoutErrorMessage),s(W(m,e,v.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",o)),o=null},q.isStandardBrowserEnv()){var l=(e.withCredentials||lr(P))&&e.xsrfCookieName?ar.read(e.xsrfCookieName):void 0;l&&(u[e.xsrfHeaderName]=l)}"setRequestHeader"in o&&q.forEach(u,function(m,v){typeof a=="undefined"&&v.toLowerCase()==="content-type"?delete u[v]:o.setRequestHeader(v,m)}),q.isUndefined(e.withCredentials)||(o.withCredentials=!!e.withCredentials),f&&f!=="json"&&(o.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&o.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&o.upload&&o.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(d=function(c){!o||(s(!c||c&&c.type?new dr("canceled"):c),o.abort(),o=null)},e.cancelToken&&e.cancelToken.subscribe(d),e.signal&&(e.signal.aborted?d():e.signal.addEventListener("abort",d))),a||(a=null),o.send(a)})},b=S,ie=We,pr=ve,hr={"Content-Type":"application/x-www-form-urlencoded"};function ae(t,e){!b.isUndefined(t)&&b.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function mr(){var t;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(t=se),t}function vr(t,e,r){if(b.isString(t))try{return(e||JSON.parse)(t),b.trim(t)}catch(n){if(n.name!=="SyntaxError")throw n}return(r||JSON.stringify)(t)}var F={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:mr(),transformRequest:[function(e,r){return ie(r,"Accept"),ie(r,"Content-Type"),b.isFormData(e)||b.isArrayBuffer(e)||b.isBuffer(e)||b.isStream(e)||b.isFile(e)||b.isBlob(e)?e:b.isArrayBufferView(e)?e.buffer:b.isURLSearchParams(e)?(ae(r,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):b.isObject(e)||r&&r["Content-Type"]==="application/json"?(ae(r,"application/json"),vr(e)):e}],transformResponse:[function(e){var r=this.transitional||F.transitional,n=r&&r.silentJSONParsing,s=r&&r.forcedJSONParsing,a=!n&&this.responseType==="json";if(a||s&&b.isString(e)&&e.length)try{return JSON.parse(e)}catch(u){if(a)throw u.name==="SyntaxError"?pr(u,this,"E_JSON_PARSE"):u}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};b.forEach(["delete","get","head"],function(e){F.headers[e]={}});b.forEach(["post","put","patch"],function(e){F.headers[e]=b.merge(hr)});var H=F,yr=S,br=H,gr=function(e,r,n){var s=this||br;return yr.forEach(n,function(u){e=u.call(s,e,r)}),e},be=function(e){return!!(e&&e.__CANCEL__)},oe=S,V=gr,wr=be,Sr=H,Er=I;function X(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Er("canceled")}var Cr=function(e){X(e),e.headers=e.headers||{},e.data=V.call(e,e.data,e.headers,e.transformRequest),e.headers=oe.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),oe.forEach(["delete","get","head","post","put","patch","common"],function(s){delete e.headers[s]});var r=e.adapter||Sr.adapter;return r(e).then(function(s){return X(e),s.data=V.call(e,s.data,s.headers,e.transformResponse),s},function(s){return wr(s)||(X(e),s&&s.response&&(s.response.data=V.call(e,s.response.data,s.response.headers,e.transformResponse))),Promise.reject(s)})},w=S,ge=function(e,r){r=r||{};var n={};function s(o,p){return w.isPlainObject(o)&&w.isPlainObject(p)?w.merge(o,p):w.isPlainObject(p)?w.merge({},p):w.isArray(p)?p.slice():p}function a(o){if(w.isUndefined(r[o])){if(!w.isUndefined(e[o]))return s(void 0,e[o])}else return s(e[o],r[o])}function u(o){if(!w.isUndefined(r[o]))return s(void 0,r[o])}function f(o){if(w.isUndefined(r[o])){if(!w.isUndefined(e[o]))return s(void 0,e[o])}else return s(void 0,r[o])}function d(o){if(o in r)return s(e[o],r[o]);if(o in e)return s(void 0,e[o])}var g={url:u,method:u,data:u,baseURL:f,transformRequest:f,transformResponse:f,paramsSerializer:f,timeout:f,timeoutMessage:f,withCredentials:f,adapter:f,responseType:f,xsrfCookieName:f,xsrfHeaderName:f,onUploadProgress:f,onDownloadProgress:f,decompress:f,maxContentLength:f,maxBodyLength:f,transport:f,httpAgent:f,httpsAgent:f,cancelToken:f,socketPath:f,responseEncoding:f,validateStatus:d};return w.forEach(Object.keys(e).concat(Object.keys(r)),function(p){var y=g[p]||a,P=y(p);w.isUndefined(P)&&y!==d||(n[p]=P)}),n},we={version:"0.24.0"},Or=we.version,re={};["object","boolean","number","function","string","symbol"].forEach(function(t,e){re[t]=function(n){return typeof n===t||"a"+(e<1?"n ":" ")+t}});var ue={};re.transitional=function(e,r,n){function s(a,u){return"[Axios v"+Or+"] Transitional option '"+a+"'"+u+(n?". "+n:"")}return function(a,u,f){if(e===!1)throw new Error(s(u," has been removed"+(r?" in "+r:"")));return r&&!ue[u]&&(ue[u]=!0,console.warn(s(u," has been deprecated since v"+r+" and will be removed in the near future"))),e?e(a,u,f):!0}};function Rr(t,e,r){if(typeof t!="object")throw new TypeError("options must be an object");for(var n=Object.keys(t),s=n.length;s-- >0;){var a=n[s],u=e[a];if(u){var f=t[a],d=f===void 0||u(f,a,t);if(d!==!0)throw new TypeError("option "+a+" must be "+d);continue}if(r!==!0)throw Error("Unknown option "+a)}}var xr={assertOptions:Rr,validators:re},Se=S,Pr=me,fe=Je,le=Cr,J=ge,Ee=xr,L=Ee.validators;function j(t){this.defaults=t,this.interceptors={request:new fe,response:new fe}}j.prototype.request=function(e){typeof e=="string"?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},e=J(this.defaults,e),e.method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var r=e.transitional;r!==void 0&&Ee.assertOptions(r,{silentJSONParsing:L.transitional(L.boolean),forcedJSONParsing:L.transitional(L.boolean),clarifyTimeoutError:L.transitional(L.boolean)},!1);var n=[],s=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(e)===!1||(s=s&&y.synchronous,n.unshift(y.fulfilled,y.rejected))});var a=[];this.interceptors.response.forEach(function(y){a.push(y.fulfilled,y.rejected)});var u;if(!s){var f=[le,void 0];for(Array.prototype.unshift.apply(f,n),f=f.concat(a),u=Promise.resolve(e);f.length;)u=u.then(f.shift(),f.shift());return u}for(var d=e;n.length;){var g=n.shift(),o=n.shift();try{d=g(d)}catch(p){o(p);break}}try{u=le(d)}catch(p){return Promise.reject(p)}for(;a.length;)u=u.then(a.shift(),a.shift());return u};j.prototype.getUri=function(e){return e=J(this.defaults,e),Pr(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")};Se.forEach(["delete","get","head","options"],function(e){j.prototype[e]=function(r,n){return this.request(J(n||{},{method:e,url:r,data:(n||{}).data}))}});Se.forEach(["post","put","patch"],function(e){j.prototype[e]=function(r,n,s){return this.request(J(s||{},{method:e,url:r,data:n}))}});var Nr=j,Tr=I;function B(t){if(typeof t!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(s){e=s});var r=this;this.promise.then(function(n){if(!!r._listeners){var s,a=r._listeners.length;for(s=0;s<a;s++)r._listeners[s](n);r._listeners=null}}),this.promise.then=function(n){var s,a=new Promise(function(u){r.subscribe(u),s=u}).then(n);return a.cancel=function(){r.unsubscribe(s)},a},t(function(s){r.reason||(r.reason=new Tr(s),e(r.reason))})}B.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};B.prototype.subscribe=function(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]};B.prototype.unsubscribe=function(e){if(!!this._listeners){var r=this._listeners.indexOf(e);r!==-1&&this._listeners.splice(r,1)}};B.source=function(){var e,r=new B(function(s){e=s});return{token:r,cancel:e}};var Ar=B,Ur=function(e){return function(n){return e.apply(null,n)}},$r=function(e){return typeof e=="object"&&e.isAxiosError===!0},ce=S,Lr=de,D=Nr,Br=ge,jr=H;function Ce(t){var e=new D(t),r=Lr(D.prototype.request,e);return ce.extend(r,D.prototype,e),ce.extend(r,e),r.create=function(s){return Ce(Br(t,s))},r}var R=Ce(jr);R.Axios=D;R.Cancel=I;R.CancelToken=Ar;R.isCancel=be;R.VERSION=we.version;R.all=function(e){return Promise.all(e)};R.spread=Ur;R.isAxiosError=$r;Y.exports=R;Y.exports.default=R;var T=Y.exports,Oe={exports:{}};/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */(function(t,e){(function(r,n){t.exports=n()})(xe,function(){var r={};r.version="0.2.0";var n=r.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};r.configure=function(i){var l,c;for(l in i)c=i[l],c!==void 0&&i.hasOwnProperty(l)&&(n[l]=c);return this},r.status=null,r.set=function(i){var l=r.isStarted();i=s(i,n.minimum,1),r.status=i===1?null:i;var c=r.render(!l),m=c.querySelector(n.barSelector),v=n.speed,C=n.easing;return c.offsetWidth,f(function(h){n.positionUsing===""&&(n.positionUsing=r.getPositioningCSS()),d(m,u(i,v,C)),i===1?(d(c,{transition:"none",opacity:1}),c.offsetWidth,setTimeout(function(){d(c,{transition:"all "+v+"ms linear",opacity:0}),setTimeout(function(){r.remove(),h()},v)},v)):setTimeout(h,v)}),this},r.isStarted=function(){return typeof r.status=="number"},r.start=function(){r.status||r.set(0);var i=function(){setTimeout(function(){!r.status||(r.trickle(),i())},n.trickleSpeed)};return n.trickle&&i(),this},r.done=function(i){return!i&&!r.status?this:r.inc(.3+.5*Math.random()).set(1)},r.inc=function(i){var l=r.status;return l?(typeof i!="number"&&(i=(1-l)*s(Math.random()*l,.1,.95)),l=s(l+i,0,.994),r.set(l)):r.start()},r.trickle=function(){return r.inc(Math.random()*n.trickleRate)},function(){var i=0,l=0;r.promise=function(c){return!c||c.state()==="resolved"?this:(l===0&&r.start(),i++,l++,c.always(function(){l--,l===0?(i=0,r.done()):r.set((i-l)/i)}),this)}}(),r.render=function(i){if(r.isRendered())return document.getElementById("nprogress");o(document.documentElement,"nprogress-busy");var l=document.createElement("div");l.id="nprogress",l.innerHTML=n.template;var c=l.querySelector(n.barSelector),m=i?"-100":a(r.status||0),v=document.querySelector(n.parent),C;return d(c,{transition:"all 0 linear",transform:"translate3d("+m+"%,0,0)"}),n.showSpinner||(C=l.querySelector(n.spinnerSelector),C&&P(C)),v!=document.body&&o(v,"nprogress-custom-parent"),v.appendChild(l),l},r.remove=function(){p(document.documentElement,"nprogress-busy"),p(document.querySelector(n.parent),"nprogress-custom-parent");var i=document.getElementById("nprogress");i&&P(i)},r.isRendered=function(){return!!document.getElementById("nprogress")},r.getPositioningCSS=function(){var i=document.body.style,l="WebkitTransform"in i?"Webkit":"MozTransform"in i?"Moz":"msTransform"in i?"ms":"OTransform"in i?"O":"";return l+"Perspective"in i?"translate3d":l+"Transform"in i?"translate":"margin"};function s(i,l,c){return i<l?l:i>c?c:i}function a(i){return(-1+i)*100}function u(i,l,c){var m;return n.positionUsing==="translate3d"?m={transform:"translate3d("+a(i)+"%,0,0)"}:n.positionUsing==="translate"?m={transform:"translate("+a(i)+"%,0)"}:m={"margin-left":a(i)+"%"},m.transition="all "+l+"ms "+c,m}var f=function(){var i=[];function l(){var c=i.shift();c&&c(l)}return function(c){i.push(c),i.length==1&&l()}}(),d=function(){var i=["Webkit","O","Moz","ms"],l={};function c(h){return h.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(E,O){return O.toUpperCase()})}function m(h){var E=document.body.style;if(h in E)return h;for(var O=i.length,U=h.charAt(0).toUpperCase()+h.slice(1),N;O--;)if(N=i[O]+U,N in E)return N;return h}function v(h){return h=c(h),l[h]||(l[h]=m(h))}function C(h,E,O){E=v(E),h.style[E]=O}return function(h,E){var O=arguments,U,N;if(O.length==2)for(U in E)N=E[U],N!==void 0&&E.hasOwnProperty(U)&&C(h,U,N);else C(h,O[1],O[2])}}();function g(i,l){var c=typeof i=="string"?i:y(i);return c.indexOf(" "+l+" ")>=0}function o(i,l){var c=y(i),m=c+l;g(c,l)||(i.className=m.substring(1))}function p(i,l){var c=y(i),m;!g(i,l)||(m=c.replace(" "+l+" "," "),i.className=m.substring(1,m.length-1))}function y(i){return(" "+(i.className||"")+" ").replace(/\s+/gi," ")}function P(i){i&&i.parentNode&&i.parentNode.removeChild(i)}return r})})(Oe);var x=Oe.exports;const Re="http://211.154.196.228:18080/pc_2_5";window.console.log("baseURL: ",Re);T.defaults.baseURL=Re;T.defaults.timeout=1e4;T.interceptors.request.use(t=>{const e=window.sessionStorage.getItem("token");return e&&(t.headers.token=e),t},t=>t);T.interceptors.response.use(t=>(t.data.code===111&&sessionStorage.setItem("token",""),t));const qr={get(t,e){return new Promise((r,n)=>{x.start(),T.get(t,{params:e}).then(s=>{x.done(),r(s.data)}).catch(s=>{x.done(),n(s.data)})})},post(t,e){return new Promise((r,n)=>{x.start(),T.post(t,e).then(s=>{x.done(),r(s.data)}).catch(s=>{x.done(),n(s.data)})})},upload(t,e){return new Promise((r,n)=>{x.start(),T.post(t,e,{headers:{"Content-Type":"multipart/form-data"}}).then(s=>{x.done(),r(s.data)}).catch(s=>{x.done(),n(s.data)})})},download(t){const e=document.createElement("iframe");e.style.display="none",e.src=t,e.onload=function(){document.body.removeChild(e)},document.body.appendChild(e)}};export{T as a,kr as g,qr as h};
