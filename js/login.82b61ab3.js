(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{"03c7":function(e,n,t){"use strict";t("9d0a")},"613f":function(e,n,t){e.exports=t.p+"img/ROSA.b652b9c2.png"},"9d0a":function(e,n,t){},a55b:function(e,n,t){"use strict";t.r(n);var r=t("7a23"),a=t("613f"),s=t.n(a),o=function(e){return Object(r["A"])("data-v-86cc657c"),e=e(),Object(r["y"])(),e},c={class:"main__container"},l={class:"section__form display-flex"},i=o((function(){return Object(r["g"])("h1",{class:"h1"},[Object(r["h"])(" Vue "),Object(r["g"])("span",{class:"h1__span"},"jasonwebtoken"),Object(r["h"])(" example ")],-1)})),u={class:"container"},b=o((function(){return Object(r["g"])("div",{class:"container__img"},[Object(r["g"])("img",{class:"img",src:s.a,alt:"Vue form"})],-1)})),p={class:"container__form display-flex"},O=o((function(){return Object(r["g"])("h2",{class:"h2"},"INSERT YOUR USER AND PASSWORD",-1)})),j={class:"label__error"},f={class:"label__error"},d={class:"label__error text-center"},m={key:0,class:"label__span"},g=["disabled"],h={key:0},_=o((function(){return Object(r["g"])("p",{class:"paragraph"},"Doesn't have an account yet?",-1)})),v=Object(r["h"])("Please register here..."),w=o((function(){return Object(r["g"])("h3",{class:"h3"}," A VueJS jasonwebtoken application with form validations ",-1)}));function k(e,n,t,a,s,o){var k=Object(r["E"])("Background"),$=Object(r["E"])("BaseInput"),S=Object(r["E"])("Spinner"),x=Object(r["E"])("router-link");return Object(r["x"])(),Object(r["f"])("div",c,[Object(r["i"])(k),Object(r["g"])("section",l,[i,Object(r["g"])("div",u,[b,Object(r["g"])("div",p,[O,Object(r["g"])("form",{class:"form display-flex",onSubmit:n[2]||(n[2]=Object(r["N"])((function(){return o.login&&o.login.apply(o,arguments)}),["prevent"]))},[Object(r["g"])("label",j,[(Object(r["x"])(!0),Object(r["f"])(r["a"],null,Object(r["D"])(a.v$.form.username.$errors,(function(e,n){return Object(r["x"])(),Object(r["f"])("span",{class:"label__span",key:n},Object(r["G"])(e.$message),1)})),128))]),Object(r["i"])($,{modelValue:a.v$.form.username.$model,"onUpdate:modelValue":n[0]||(n[0]=function(e){return a.v$.form.username.$model=e}),label:"Username",class:Object(r["r"])({input__error:a.v$.form.username.$errors.length})},null,8,["modelValue","class"]),Object(r["g"])("label",f,[(Object(r["x"])(!0),Object(r["f"])(r["a"],null,Object(r["D"])(a.v$.form.password.$errors,(function(e,n){return Object(r["x"])(),Object(r["f"])("span",{class:"label__span",key:n},Object(r["G"])(e.$message),1)})),128))]),Object(r["i"])($,{type:"password",modelValue:a.v$.form.password.$model,"onUpdate:modelValue":n[1]||(n[1]=function(e){return a.v$.form.password.$model=e}),label:"Password",autocomplete:"on",class:Object(r["r"])({input__error:a.v$.form.password.$errors.length})},null,8,["modelValue","class"]),Object(r["g"])("label",d,[s.errorMessage?(Object(r["x"])(),Object(r["f"])("span",m,Object(r["G"])(s.errorMessage),1)):Object(r["e"])("",!0)]),Object(r["g"])("button",{disabled:a.v$.form.$invalid||s.showSpinner,class:"btn__main btn__login",type:"submit"},[s.showSpinner?Object(r["e"])("",!0):(Object(r["x"])(),Object(r["f"])("span",h,"LOGIN")),s.showSpinner?(Object(r["x"])(),Object(r["d"])(S,{key:1})):Object(r["e"])("",!0)],8,g)],32),_,Object(r["i"])(x,{class:"link",to:"/auth/signin"},{default:Object(r["L"])((function(){return[v]})),_:1})])]),w])])}var $=t("1da1"),S=t("5530"),x=(t("96cf"),t("d3b7"),t("e9c4"),t("2f15")),y=t("b3b3"),V=t("2375"),R=t("25a0"),E=t("5502"),I=t("e3e1"),A={name:"Login",components:{Background:x["a"],BaseInput:y["a"],Spinner:V["a"]},setup:function(){return{v$:Object(R["a"])()}},data:function(){return{form:{username:"",password:""},showSpinner:!1,errorMessage:""}},methods:Object(S["a"])(Object(S["a"])({},Object(E["c"])(["setToken"])),{},{login:function(){var e=this;return Object($["a"])(regeneratorRuntime.mark((function n(){var t,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.showSpinner=!0,n.prev=1,n.next=4,fetch("https://backend-node-server.herokuapp.com/api/vueforms/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e.form.username,password:e.form.password})});case 4:return t=n.sent,n.next=7,t.json();case 7:r=n.sent,r.ok?e.afterLogin(r):e.errorHandler(r),n.next=15;break;case 11:n.prev=11,n.t0=n["catch"](1),console.log(n.t0),e.showSpinner=!1;case 15:case"end":return n.stop()}}),n,null,[[1,11]])})))()},afterLogin:function(e){this.setToken(e.token),localStorage.setItem("jwtapptoken",e.token),this.showSpinner=!1,this.$router.push("/auth/me")},errorHandler:function(e){console.log(e);var n=e.message;this.showSpinner=!1,this.errorMessage=n}}),validations:function(){return{form:{username:{required:I["e"]},password:{required:I["e"]}}}}},D=(t("03c7"),t("6b0d")),L=t.n(D);const N=L()(A,[["render",k],["__scopeId","data-v-86cc657c"]]);n["default"]=N}}]);
//# sourceMappingURL=login.82b61ab3.js.map