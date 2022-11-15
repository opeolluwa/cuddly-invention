import{d as u,D as h,V as p,I as g,m as a,a as n,u as i,b as d,_,r,o as w,c as b,e as t,f as m,n as f,w as v,v as M,p as k,g as S}from"./index.95d6e41a.js";const I=u({components:{DashboardHeader:h,ViewLayout:p,Icon:g},data:()=>({crumbs:["Home","Category","Sub category"],showSidebar:!1,userTheme:"light-theme",newMessage:"",messages:[]}),computed:{...a(i,["authorizationToken","userInformation"]),...a(d,["enabledDarkMode"])},created(){this.makeAuthRequest()},mounted(){this.showSidebar=!window.matchMedia("(max-width: 400px)").matches;let e=localStorage.getItem("theme");document.documentElement.setAttribute("data-theme",e);const s=()=>{this.refreshToken()};window.setInterval(s,1e3*20*60)},methods:{...n(i,{getUser:"getUserInformation",refreshToken:"getRefreshToken"}),...n(d,["toggleColorTheme"]),sendMessage(){const e={user:"me",timestamp:new Date().getTime(),message:this.newMessage};this.messages.push(e),console.log(JSON.stringify(e)),this.newMessage=""},getTheme(){return localStorage.getItem("user-theme")},setTheme(e){localStorage.setItem("user-theme",e),this.userTheme=e,document.documentElement.className=e},selected(e){console.log(e)},makeAuthRequest(){const e=String(this.authorizationToken);this.getUser(e)},isDeviceMobile(){if(!window.matchMedia("(max-width: 400px)").matches)return!0}}});const T=e=>(k("data-v-b66a3e14"),e=e(),S(),e),D={class:"container"},y=T(()=>t("div",{id:"conversation"},null,-1)),V={id:"input__field"};function C(e,s,A,H,$,x){const l=r("DashboardHeader"),c=r("Icon");return w(),b("div",D,[t("main",null,[m(l,{onOpenSidebar:s[0]||(s[0]=o=>e.showSidebar=!e.showSidebar)}),t("div",{id:"view__box",class:f({dark__mode:e.enabledDarkMode})},[y,t("form",{action:"",id:"message__box",onSubmit:s[2]||(s[2]=(...o)=>e.sendMessage&&e.sendMessage(...o))},[t("div",V,[v(t("input",{type:"text",placeholder:"type a message","onUpdate:modelValue":s[1]||(s[1]=o=>e.newMessage=o)},null,512),[[M,e.newMessage]]),m(c,{icon:"mdi:send",id:"send__icon",onClick:e.sendMessage},null,8,["onClick"])])],32)],2)])])}const U=_(I,[["render",C],["__scopeId","data-v-b66a3e14"]]);export{U as default};
