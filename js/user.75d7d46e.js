(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["user"],{"0b4a":function(t,e,r){t.exports=r.p+"img/phone-flip-solid.1935f349.svg"},1511:function(t,e,r){"use strict";r.r(e);var n=r("7a23"),o=r("0b4a"),i=r.n(o),a=r("f0fb"),c=r.n(a),s=function(t){return Object(n["A"])("data-v-43a3206a"),t=t(),Object(n["y"])(),t},u={class:"main"},f={class:"section section--dark"},l={class:"container"},h={class:"h1"},p=Object(n["h"])("Hi, my name is "),d={class:"h1__span"},g=s((function(){return Object(n["g"])("figure",{class:"profile"},null,-1)})),v={class:"section section--white"},y={class:"container"},b=s((function(){return Object(n["g"])("h2",{class:"h2"},"About me",-1)})),m={class:"paragraph"},w={class:"section section--dark"},j={class:"container"},O=s((function(){return Object(n["g"])("h2",{class:"h2"},"Contact info",-1)})),x={class:"h3"},_=Object(n["h"])("My contact email is "),k=["href"],L={class:"span__type_phone"},E={class:"container__number_phone display-flex"},G=s((function(){return Object(n["g"])("img",{class:"phone__icon phone",src:i.a,alt:"phone flip icon"},null,-1)})),T=s((function(){return Object(n["g"])("img",{class:"phone__icon whatsapp",src:c.a,alt:"whatsapp icon"},null,-1)}));function N(t,e,r,o,i,a){return Object(n["x"])(),Object(n["f"])("main",u,[Object(n["g"])("section",f,[Object(n["g"])("div",l,[Object(n["g"])("h1",h,[p,Object(n["g"])("span",d,Object(n["G"])(i.userinfo.firstname),1)]),g])]),Object(n["g"])("section",v,[Object(n["g"])("div",y,[b,Object(n["g"])("p",m,"My full name is "+Object(n["G"])(i.userinfo.firstname)+" "+Object(n["G"])(i.userinfo.lastname)+" and i'm a "+Object(n["G"])(i.userinfo.gender)+". I chose "+Object(n["G"])(i.userinfo.username)+" as my username and i'm just looking around this web site. ",1)])]),Object(n["g"])("section",w,[Object(n["g"])("div",j,[O,Object(n["g"])("h3",x,[_,Object(n["g"])("a",{class:"link__email",href:"mailto:"+i.userinfo.email},Object(n["G"])(i.userinfo.email),9,k)]),i.contactNumbers?(Object(n["x"])(!0),Object(n["f"])(n["a"],{key:0},Object(n["D"])(i.contactNumbers,(function(t){return Object(n["x"])(),Object(n["f"])("div",{key:t.number,class:"container__phone display-flex"},[Object(n["g"])("span",L,Object(n["G"])(t.type),1),Object(n["g"])("div",E,[Object(n["g"])("span",null,Object(n["G"])(t.number),1),G,T])])})),128)):Object(n["e"])("",!0)])])])}var I=r("1da1"),P=r("5530"),S=(r("96cf"),r("d3b7"),r("b0c0"),r("5502")),F=Object(P["a"])(Object(P["a"])({name:"User",data:function(){return{userinfo:"",contactNumbers:[]}},computed:Object(P["a"])({},Object(S["b"])(["getToken"]))},Object(S["c"])(["setToken"])),{},{methods:{getUserInfo:function(){var t=this;return Object(I["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://backend-node-server.herokuapp.com/api/vueforms/user/info?token=".concat(t.getToken),{method:"GET"});case 3:return r=e.sent,e.next=6,r.json();case 6:n=e.sent,n.ok?t.userinfo=n.user:t.errorHandler(n.err),t.contactNumbers=n.usernumbers,e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()},errorHandler:function(t){if(console.log(t),"TokenExpiredError"===t.name)return localStorage.removeItem("jwtapptoken"),this.setToken(null),this.$router.push("/auth/login")}},created:function(){this.getUserInfo()}}),R=(r("dda1"),r("6b0d")),A=r.n(R);const H=A()(F,[["render",N],["__scopeId","data-v-43a3206a"]]);e["default"]=H},"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("d3b7");function n(t,e,r,n,o,i,a){try{var c=t[i](a),s=c.value}catch(u){return void r(u)}c.done?e(s):Promise.resolve(s).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,s,"next",t)}function s(t){n(a,o,i,c,s,"throw",t)}c(void 0)}))}}},"90f7":function(t,e,r){},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(P){s=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),a=new T(n||[]);return i._invoke=k(t,r,a),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(P){return{type:"throw",arg:P}}}t.wrap=u;var l="suspendedStart",h="suspendedYield",p="executing",d="completed",g={};function v(){}function y(){}function b(){}var m={};s(m,i,(function(){return this}));var w=Object.getPrototypeOf,j=w&&w(w(N([])));j&&j!==r&&n.call(j,i)&&(m=j);var O=b.prototype=v.prototype=Object.create(m);function x(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function r(o,i,a,c){var s=f(t[o],t,i);if("throw"!==s.type){var u=s.arg,l=u.value;return l&&"object"===typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(l).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,c)}))}c(s.arg)}var o;function i(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}this._invoke=i}function k(t,e,r){var n=l;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return I()}r.method=o,r.arg=i;while(1){var a=r.delegate;if(a){var c=L(a,r);if(c){if(c===g)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var s=f(t,e,r);if("normal"===s.type){if(n=r.done?d:h,s.arg===g)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=d,r.method="throw",r.arg=s.arg)}}}function L(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,L(t,r),"throw"===r.method))return g;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var o=f(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,g;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,g):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function G(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function N(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){while(++o<t.length)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:I}}function I(){return{value:e,done:!0}}return y.prototype=b,s(O,"constructor",b),s(b,"constructor",y),y.displayName=s(b,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,s(t,c,"GeneratorFunction")),t.prototype=Object.create(O),t},t.awrap=function(t){return{__await:t}},x(_.prototype),s(_.prototype,a,(function(){return this})),t.AsyncIterator=_,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new _(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(O),s(O,c,"Generator"),s(O,i,(function(){return this})),s(O,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=N,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(G),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),G(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;G(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:N(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),g}},t}(t.exports);try{regeneratorRuntime=n}catch(o){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},dda1:function(t,e,r){"use strict";r("90f7")},f0fb:function(t,e,r){t.exports=r.p+"img/whatsapp-brands.bfb5a35a.svg"}}]);
//# sourceMappingURL=user.75d7d46e.js.map