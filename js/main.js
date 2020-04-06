!function(e){function t(t){for(var n,c,s=t[0],u=t[1],i=t[2],l=0,p=[];l<s.length;l++)c=s[l],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&p.push(o[c][0]),o[c]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);for(d&&d(t);p.length;)p.shift()();return a.push.apply(a,i||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,s=1;s<r.length;s++){var u=r[s];0!==o[u]&&(n=!1)}n&&(a.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},o={0:0},a=[];function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var s=window.webpackJsonp=window.webpackJsonp||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var d=u;a.push([5,2]),r()}({3:function(e,t){function r(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}r.keys=function(){return[]},r.resolve=r,e.exports=r,r.id=3},5:function(e,t,r){"use strict";r.r(t),r.d(t,"dataLoadSuccessHandler",(function(){return M}));var n=r(0),o=r.n(n),a=r(1),c=r.n(a);const s=document.querySelector("#myChart"),u="Escape",i=document.querySelector(".page-main__country-title"),d=document.querySelector(".time"),l=200,p=400,f=403,y=404,m=500,v=502,b=503,h=(e,t,r)=>{const n=new XMLHttpRequest;n.open("GET",r),((e,t,r)=>{e.responseType="json",e.addEventListener("load",()=>{if(4===e.readyState)if(e.status===l)t(e.response);else switch(e.status){case p:r("Error 400: Bad Request");break;case f:r("Error 403: Forbidden");break;case y:r("Error 404: Not Found");break;case m:r("Error 500: Internal Server Error");break;case v:r("Error 502: Bad Gateway");break;case b:r("Error 503: Service Unavailable");break;default:r(`Request status: ${e.status} ${e.statusText}`)}}),e.addEventListener("error",()=>{r("Network error")}),e.addEventListener("timeout",()=>{r(`Request exited with timeout ${e.timeout} ms`)}),e.timeout=5e3})(n,e,t),n.send()},g=document.querySelector(".page-main"),w=()=>{const e=document.querySelector(".error");g.removeChild(e),document.removeEventListener("click",L),document.removeEventListener("keydown",E)},S=()=>{w()},L=e=>{const t=document.querySelector(".error__inner");e.target!==t&&w()},E=e=>{e.key===u&&w()},k=e=>{const t=document.querySelector("#error").content.querySelector(".error").cloneNode(!0),r=t.querySelector(".error__title"),n=document.createDocumentFragment();r.textContent=e,r.style="line-height: 1.5;",n.appendChild(t),g.appendChild(n),t.querySelector(".error__button").addEventListener("click",S),document.addEventListener("keydown",E),document.addEventListener("click",L)};function _(e,t,r,n){this.label=e,this.data=t,this.fill=!1,this.backgroundColor=r,this.borderColor=n}const q=document.querySelector("#country-search"),C=q.querySelector(".country-search__input"),O=document.querySelector(".page-main .container");let x;const j=e=>{k(e)},M=e=>{const{confirmed:t,dates:r,deaths:n,recovered:a}=e,u=(e=>e.map(e=>o()(e,"MM-DD-YYYY").format("LL")))(r),i=(d=n,l=a,[new _("Confirmed",t,"rgba(255, 0, 0, 1)","rgba(255, 0, 0, 0.5)"),new _("Deaths",d,"rgba(0, 0, 0, 1)","rgba(0, 0, 0, 0.5)"),new _("Recovered",l,"rgba(34, 182, 47, 1)","rgba(34, 182, 47, 0.5)")]);var d,l,p,f;O.classList.contains("container--hidden")&&O.classList.remove("container--hidden"),x?((e,t)=>{e.data.datasets=t,e.update()})(x,i):(p=u,f=i,x=new c.a(s,{type:"line",data:{labels:p,datasets:f},options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}}))};q.onsubmit=e=>{e.preventDefault();const t=C.value,r="https://api-cov19.now.sh/api/countries/"+t.toLowerCase();h(M,j,r),(e=>{i.textContent=e.charAt(0).toUpperCase()+e.slice(1)})(t.toLowerCase());const n=o()().format("LLL");var a;a=n,d.textContent=a}}});