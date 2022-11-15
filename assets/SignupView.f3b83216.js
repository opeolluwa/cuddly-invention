import{d as w,h as S,B,i as V,S as y,j as b,_ as L,r as d,o as U,c as I,e as t,k as T,f as n,l as c,n as k,q as _,w as u,s as m,p as x,g as N,t as R,x as C,y as M}from"./index.b5d03910.js";const p=S(),$=w({name:"AuthView",components:{BaseTextInput:B,BaseButton:V,Spinner:y},data:()=>({form:{email:"",password:"",fullname:""},isLoading:!1,apiResponseMsg:""}),methods:{async signUp(){this.isLoading=!0;const{email:e,password:s,fullname:r}=this.form;try{const{data:a}=await b.post("/auth/sign-up",{email:e,fullname:r,password:s});console.log(JSON.stringify(a)),a.success?p.success(a.message):p.error(a.message),this.apiResponseMsg=a.message,this.isLoading=!1;return}catch(a){this.isLoading=!1;const{data:i}=a.response;i.success||(this.apiResponseMsg=i.message,p.error(i.message))}}},computed:{disabledState(){return this.isLoading===!0}}});const f=e=>(x("data-v-d66989e0"),e=e(),N(),e),j={id:"sign__up__page"},z={class:"container"},A=f(()=>t("div",null,null,-1)),D=k('<div class="title" data-v-d66989e0><h1 data-v-d66989e0>Sign Up</h1><p class="sub__her__text" data-v-d66989e0>Proceed with your social account</p></div><div class="social__login__icons d-none" data-v-d66989e0><div class="icon" data-v-d66989e0><img src="'+R+'" alt="google" data-v-d66989e0></div><div class="icon" data-v-d66989e0><img src="'+C+'" alt="github" data-v-d66989e0></div><div class="icon" data-v-d66989e0><img src="'+M+'" alt="twitter" data-v-d66989e0></div></div><small class="continue__with__email d-none" data-v-d66989e0><span class="divider__line" data-v-d66989e0> ------------------ </span><span data-v-d66989e0> continue with email </span><span class="divider__line" data-v-d66989e0> ---------------- </span></small>',3),J=f(()=>t("hr",null,null,-1)),q={class:"goto__sign__up"},E=_("Already have an account? "),O=_("Login ");function P(e,s,r,a,i,F){const l=d("BaseTextInput"),g=d("Spinner"),v=d("BaseButton"),h=d("RouterLink");return U(),I("div",j,[t("div",z,[A,t("div",null,[D,t("form",{action:"",method:"post",onSubmit:s[3]||(s[3]=T((...o)=>e.signUp&&e.signUp(...o),["prevent"]))},[n(l,{placeholder:"Jane Doe",label:"fullname",modelValue:e.form.fullname,"onUpdate:modelValue":s[0]||(s[0]=o=>e.form.fullname=o),type:"text",class:"field"},null,8,["modelValue"]),n(l,{placeholder:"jane@mailer.com",label:"email",modelValue:e.form.email,"onUpdate:modelValue":s[1]||(s[1]=o=>e.form.email=o),type:"email",class:"field"},null,8,["modelValue"]),n(l,{placeholder:"password",type:"password",label:"password",modelValue:e.form.password,"onUpdate:modelValue":s[2]||(s[2]=o=>e.form.password=o),class:"field"},null,8,["modelValue"]),n(v,{text:"",disabled:e.disabledState},{default:c(()=>[u(t("span",null,"Sign Up",512),[[m,!e.isLoading]]),u(n(g,{"animation-duration":1e3,size:30,color:"#ffffff"},null,512),[[m,e.isLoading]])]),_:1},8,["disabled"])],32),J,t("small",q,[E,n(h,{to:{name:"login"},class:"emphasis",style:{"font-size":"13px"}},{default:c(()=>[O]),_:1})])])])])}const H=L($,[["render",P],["__scopeId","data-v-d66989e0"]]);export{H as default};