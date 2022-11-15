import{d as f,I as b,B as r,S as g,i as S,a as y,m as p,u as B,_ as w,r as n,o as V,c as k,f as d,e as t,w as l,a8 as v,l as I,n as C,k as A,t as u,p as $,g as q}from"./index.95d6e41a.js";import{A as L}from"./AppEmptyState.b1d6efec.js";import{u as c}from"./tasks.0502fcf0.js";const N=f({name:"CreateNewTask",components:{Icon:b,BaseTextInput:r,AppEmptyState:L,Spinner:g,BaseButton:S,BaseTextarea:r},data:()=>({showTodoModal:!1,todo:{title:"",description:"",date:"",priority:""}}),mounted(){console.log("mounted")},created(){this.makeTodoRequest(),console.log("created hook")},methods:{...y(c,{makeTodoRequest:"fetchAllTodo",createTodo:"createTodo",deleteTodo:"deleteTodo"}),async makeCreateTodo(){console.log(JSON.stringify({todo:this.todo})),await this.createTodo({...this.todo})&&(Object.assign(this.todo,{}),this.$router.replace({name:"all-task"}))}},computed:{...p(c,["todoArray","isLoading","isFetchingTodoArray","errorFetchingTodo"]),...p(B,{bearerToken:"authorizationToken"}),disabledState(){return this.isLoading===!0}}});const a=e=>($("data-v-14b8361d"),e=e(),q(),e),R={class:"select__form__field"},U=a(()=>t("label",{for:"priority"},"Priority",-1)),z=a(()=>t("option",{disabled:"",value:""},"Please select priority",-1)),M=a(()=>t("option",null,"urgent",-1)),E=a(()=>t("option",null,"not urgent",-1)),F=a(()=>t("option",null,"important",-1)),O=a(()=>t("option",null,"delicate",-1)),P=a(()=>t("option",null,"normal",-1)),j=[z,M,E,F,O,P];function D(e,o,J,G,H,K){const i=n("BaseTextInput"),m=n("BaseTextarea"),_=n("Icon"),h=n("Spinner"),T=n("BaseButton");return V(),k("form",{action:"",onSubmit:o[4]||(o[4]=A((...s)=>e.makeCreateTodo&&e.makeCreateTodo(...s),["prevent"]))},[d(i,{label:"heading",type:"text",placeholder:"heading",modelValue:e.todo.title,"onUpdate:modelValue":o[0]||(o[0]=s=>e.todo.title=s),class:"field"},null,8,["modelValue"]),d(m,{placeholder:"description",label:"description",modelValue:e.todo.description,"onUpdate:modelValue":o[1]||(o[1]=s=>e.todo.description=s),class:"field"},null,8,["modelValue"]),t("div",R,[U,l(t("select",{"onUpdate:modelValue":o[2]||(o[2]=s=>e.todo.priority=s)},j,512),[[v,e.todo.priority]]),d(_,{icon:"mdi:menu-down",class:"select__arrow__down"})]),d(i,{placeholder:"github url",label:"due date",type:"date",modelValue:e.todo.date,"onUpdate:modelValue":o[3]||(o[3]=s=>e.todo.date=s),class:"field"},null,8,["modelValue"]),d(T,{text:"",type:"submit",disabled:e.disabledState,class:C([e.disabledState==!0?"disabled__button":""])},{default:I(()=>[l(t("span",null,"Add Todo",512),[[u,!e.isLoading]]),l(d(h,{"animation-duration":1e3,size:30,color:"#101010"},null,512),[[u,e.isLoading]])]),_:1},8,["disabled","class"])],32)}const Y=w(N,[["render",D],["__scopeId","data-v-14b8361d"]]);export{Y as default};