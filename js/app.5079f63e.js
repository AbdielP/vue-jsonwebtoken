(function(e){function n(n){for(var o,r,u=n[0],c=n[1],s=n[2],l=0,g=[];l<u.length;l++)r=u[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&g.push(i[r][0]),i[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);f&&f(n);while(g.length)g.shift()();return a.push.apply(a,s||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],o=!0,r=1;r<t.length;r++){var u=t[r];0!==i[u]&&(o=!1)}o&&(a.splice(n--,1),e=c(c.s=t[0]))}return e}var o={},r={app:0},i={app:0},a=[];function u(e){return c.p+"js/"+({"login~signin":"login~signin",login:"login",signin:"signin",token:"token",user:"user"}[e]||e)+"."+{"login~signin":"d61e2f1f",login:"82b61ab3",signin:"9bb54ead",token:"dbae3348",user:"cb2e2a76"}[e]+".js"}function c(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(e){var n=[],t={"login~signin":1,login:1,signin:1,token:1,user:1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise((function(n,t){for(var o="css/"+({"login~signin":"login~signin",login:"login",signin:"signin",token:"token",user:"user"}[e]||e)+"."+{"login~signin":"d67fd29e",login:"a794f6c8",signin:"2e3955fb",token:"96527526",user:"742dc829"}[e]+".css",i=c.p+o,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var s=a[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===o||l===i))return n()}var g=document.getElementsByTagName("style");for(u=0;u<g.length;u++){s=g[u],l=s.getAttribute("data-href");if(l===o||l===i)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var o=n&&n.target&&n.target.src||i,a=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete r[e],f.parentNode.removeChild(f),t(a)},f.href=i;var b=document.getElementsByTagName("head")[0];b.appendChild(f)})).then((function(){r[e]=0})));var o=i[e];if(0!==o)if(o)n.push(o[2]);else{var a=new Promise((function(n,t){o=i[e]=[n,t]}));n.push(o[2]=a);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=u(e);var g=new Error;s=function(n){l.onerror=l.onload=null,clearTimeout(f);var t=i[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;g.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",g.name="ChunkLoadError",g.type=o,g.request=r,t[1](g)}i[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(n)},c.m=e,c.c=o,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)c.d(t,o,function(n){return e[n]}.bind(null,o));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/vue-jsonwebtoken/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=n,s=s.slice();for(var g=0;g<s.length;g++)n(s[g]);var f=l;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"2b3e":function(e,n,t){e.exports=t.p+"img/code-solid.9a499b06.svg"},"397b":function(e,n,t){"use strict";t("a6ef")},"44fc":function(e,n,t){"use strict";t("8fe6")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var o=t("7a23");function r(e,n,t,r,i,a){var u=Object(o["E"])("Navigation"),c=Object(o["E"])("router-view");return Object(o["x"])(),Object(o["f"])("div",null,[!0===e.isLoggedIn?(Object(o["x"])(),Object(o["d"])(u,{key:0})):Object(o["e"])("",!0),Object(o["i"])(c)])}var i=t("5530"),a=t("88a1"),u=t.n(a),c=t("2b3e"),s=t.n(c),l=function(e){return Object(o["A"])("data-v-2fcd3931"),e=e(),Object(o["y"])(),e},g={class:"nav display-flex"},f={class:"container"},b=Object(o["h"])(" My profile "),d=l((function(){return Object(o["g"])("img",{class:"logo",src:u.a,alt:"user logo"},null,-1)})),p=Object(o["h"])(" Token info "),h=l((function(){return Object(o["g"])("img",{class:"logo--xl",src:s.a,alt:"token logo"},null,-1)})),m=Object(o["h"])("Login");function j(e,n,t,r,i,a){var u=Object(o["E"])("router-link");return Object(o["x"])(),Object(o["f"])("nav",g,[Object(o["g"])("div",f,[Object(o["i"])(u,{class:"nav__link",to:"/auth/me"},{default:Object(o["L"])((function(){return[b,d]})),_:1}),Object(o["i"])(u,{class:"nav__link",to:"/auth/token"},{default:Object(o["L"])((function(){return[p,h]})),_:1})]),!1===e.isLoggedIn?(Object(o["x"])(),Object(o["d"])(u,{key:0,class:"nav__link",to:"/auth/login"},{default:Object(o["L"])((function(){return[m]})),_:1})):Object(o["e"])("",!0),!0===e.isLoggedIn?(Object(o["x"])(),Object(o["f"])("button",{key:1,class:"btn__logout",type:"button",onClick:n[0]||(n[0]=function(){return a.logOut&&a.logOut.apply(a,arguments)}),"aria-labelby":"Logout"}," Logout ")):Object(o["e"])("",!0)])}var v=t("5502"),O={computed:Object(i["a"])({},Object(v["b"])(["isLoggedIn","getToken"])),methods:Object(i["a"])(Object(i["a"])({},Object(v["c"])(["setToken"])),{},{logOut:function(){this.setToken(null),localStorage.removeItem("jwtapptoken"),this.$router.push("/auth/login")}})},k=(t("397b"),t("6b0d")),y=t.n(k);const _=y()(O,[["render",j],["__scopeId","data-v-2fcd3931"]]);var w=_,L={components:{Navigation:w},computed:Object(i["a"])({},Object(v["b"])(["isLoggedIn"]))};t("44fc");const x=y()(L,[["render",r]]);var S=x,T=(t("d3b7"),t("3ca3"),t("ddb0"),t("b0c0"),t("6c02")),E=[{path:"/",name:"root",redirect:"/auth/me"},{path:"/auth/login",name:"Login",component:function(){return Promise.all([t.e("login~signin"),t.e("login")]).then(t.bind(null,"a55b"))}},{path:"/auth/signin",name:"Signin",component:function(){return Promise.all([t.e("login~signin"),t.e("signin")]).then(t.bind(null,"4a33"))}},{path:"/auth/me",name:"User",component:function(){return t.e("user").then(t.bind(null,"1511"))}},{path:"/auth/token",name:"Token",component:function(){return t.e("token").then(t.bind(null,"bfb6"))}}],P=Object(T["a"])({history:Object(T["b"])("/vue-jsonwebtoken/"),routes:E});P.beforeEach((function(e,n){return"Login"===e.name||"Signin"===e.name||(!!localStorage.getItem("jwtapptoken")||{name:"Login"})}));var I=P,C=Object(v["a"])({state:{token:localStorage.getItem("jwtapptoken")||null},mutations:{setToken:function(e,n){e.token=n}},getters:{isLoggedIn:function(e){return!!e.token},getToken:function(e){return e.token}},actions:{},modules:{}});Object(o["c"])(S).use(C).use(I).mount("#app")},"88a1":function(e,n,t){e.exports=t.p+"img/user-solid.fd547f76.svg"},"8fe6":function(e,n,t){},a6ef:function(e,n,t){}});
//# sourceMappingURL=app.5079f63e.js.map