import{ab as $,f as i,R as p,O as l,a6 as K,F as v,s as q,e as b,h as g,aa as k,Q as u,W as G,u as m,an as J,t as I,ao as B,r as V,j as R,a0 as N,U as D,V as U,ap as C,z as Q,aq as X,S as Z,ar as Y,as as ee,at as te,au as ne,al as ae}from"./vue.76fa6288.js";import{E as M,a as oe,b as se,c as re,d as le,e as ie,f as ce,g as ue,h as _e,i as pe,j as de,k as me,l as fe,m as he,n as ve,o as P,I as S}from"./element.8d556bba.js";import{V as ge,x as T,z as be,G as ye,F as Ee,I as xe,S as $e,O as Ie,T as Ce,a as Pe,B as Se,P as Te,b as Le}from"./vxe.4962e5e9.js";const Ae=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=a(o);fetch(o.href,r)}};Ae();var y=(t,e)=>{const a=t.__vccOpts||t;for(const[n,o]of e)a[n]=o;return a};const we={};function Oe(t,e){const a=$("router-view");return i(),p(a)}var ke=y(we,[["render",Oe]]);const Be="modulepreload",L={},Ve="/",d=function(e,a){return!a||a.length===0?e():Promise.all(a.map(n=>{if(n=`${Ve}${n}`,n in L)return;L[n]=!0;const o=n.endsWith(".css"),r=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${r}`))return;const s=document.createElement("link");if(s.rel=o?"stylesheet":Be,o||(s.as="script",s.crossOrigin=""),s.href=n,document.head.appendChild(s),o)return new Promise((_,c)=>{s.addEventListener("load",_),s.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>e())};var Re="/static/logo-cool.ee65ef62.jpg",Ne="/static/logo.03d6d6da.png";function De(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!q(t)}var A=({menu:t})=>{var a,n;let e;return l(v,null,[l(M,null,De(e=K($((a=t.meta)==null?void 0:a.icon)))?e:{default:()=>[e]}),l("span",null,[(n=t.meta)==null?void 0:n.title])])};const Ue=b({name:"subMenu"}),Me=b({...Ue,props:{menuData:{},parentsPath:{}},setup(t){return(e,a)=>{const n=$("sub-menu"),o=oe,r=se;return i(!0),g(v,null,k(e.menuData,s=>{var _,c;return i(),g(v,null,[(_=s.meta)!=null&&_.notLayout?G("",!0):(i(),g(v,{key:0},[((c=s.meta)==null?void 0:c.type)==="sub"?(i(),p(o,{key:0,index:(e.parentsPath?e.parentsPath+"/":"")+s.path},{title:u(()=>[l(m(A),{menu:s},null,8,["menu"])]),default:u(()=>[l(n,{"menu-data":s.children,"parents-path":(e.parentsPath?e.parentsPath+"/":"")+s.path},null,8,["menu-data","parents-path"])]),_:2},1032,["index"])):(i(),p(r,{key:1,index:(e.parentsPath?e.parentsPath+"/":"")+s.path+(s.children?"/"+s.children[0].path:"")},{default:u(()=>[l(m(A),{menu:s},null,8,["menu"])]),_:2},1032,["index"]))],64))],64)}),256)}}});var Fe=y(Me,[["__scopeId","data-v-6156933a"]]);const We="250px",je="#001529",ze="#ecf5ff",He="60px",Ke="#f5f6fa";var qe={aside_width:We,aside_theme:je,header_border_color:ze,logo_height:He,main_background_color:Ke};const Ge={class:"logo-main"},Je=b({__name:"index",props:{isCollapse:{type:Boolean,default:!1}},setup(t){const e=J(),a=I(()=>e.options.routes),n=B(),o=I(()=>n),r=V(o.value.path);return(s,_)=>{const c=re,f=ie,h=le;return i(),g(v,null,[R("div",Ge,[l(N,{name:"logoTransition",appear:!0},{default:u(()=>[t.isCollapse?(i(),p(c,{key:1,src:m(Ne),fit:"contain",class:"project-logo"},null,8,["src"])):(i(),p(c,{key:0,src:m(Re),fit:"contain",class:"project-logo"},null,8,["src"]))]),_:1})]),l(h,{class:"submenu-main"},{default:u(()=>[l(f,{router:"",collapse:t.isCollapse,"default-active":m(r),"background-color":m(qe).aside_theme,"text-color":"#fefefea6",class:"el-menu-vertical-demo"},{default:u(()=>[l(Fe,{"menu-data":m(a)},null,8,["menu-data"])]),_:1},8,["collapse","default-active","background-color"])]),_:1})],64)}}});var Qe=y(Je,[["__scopeId","data-v-1a346fcc"]]);const Xe=b({__name:"index",props:{matched:{}},setup(t){return(e,a)=>{const n=ce,o=ue;return i(),p(o,{separator:"/"},{default:u(()=>[(i(!0),g(v,null,k(e.matched,r=>(i(),p(n,{to:{path:r.path}},{default:u(()=>[D(U(r.meta.title),1)]),_:2},1032,["to"]))),256))]),_:1})}}});const Ze=C("USER",{state:()=>({user:""}),getters:{getUser(){return this.user}},actions:{setUser(t="---"){this.user=t}},persist:{enabled:!0}}),Ye=b({__name:"index",setup(t){const e=Ze();return(a,n)=>{const o=_e;return i(),p(o,null,{default:u(()=>[D(U(m(e).getUser),1)]),_:1})}}});const et={class:"nav-info"},tt=b({__name:"index",props:{isCollapse:{type:Boolean,default:!1}},emits:["update:isCollapse"],setup(t,{emit:e}){const a=t,n=B(),o=I(()=>n),r=e,s=()=>{r("update:isCollapse",!a.isCollapse)};return(_,c)=>{const f=pe,h=de,E=M;return i(),g(v,null,[R("div",et,[l(E,{class:"collpase-btn",onClick:s},{default:u(()=>[t.isCollapse?(i(),p(f,{key:0})):(i(),p(h,{key:1}))]),_:1}),l(Xe,{matched:m(o).matched},null,8,["matched"])]),l(Ye)],64)}}});var nt=y(tt,[["__scopeId","data-v-7b38a555"]]);const at=b({__name:"index",setup(t){const e=V(!1);return(a,n)=>{const o=me,r=fe,s=$("router-view"),_=he,c=ve;return i(),p(c,null,{default:u(()=>[l(o,{width:"auto",height:"100vh"},{default:u(()=>[l(Qe,{"is-collapse":m(e)},null,8,["is-collapse"])]),_:1}),l(c,null,{default:u(()=>[l(r,null,{default:u(()=>[l(nt,{"is-collapse":m(e),"onUpdate:isCollapse":n[0]||(n[0]=f=>Q(e)?e.value=f:null)},null,8,["is-collapse"])]),_:1}),l(_,null,{default:u(()=>[l(s,null,{default:u(({Component:f,route:h})=>[l(N,{mode:"out-in","enter-active-class":"animate__animated animate__fadeIn"},{default:u(()=>[(i(),p(X,null,[(i(),g("div",{key:h.fullPath},[(i(),p(Z(f)))]))],1024))]),_:2},1024)]),_:1})]),_:1})]),_:1})]),_:1})}}});var x=y(at,[["__scopeId","data-v-15639b54"]]);const _t=C("TEST",{state:()=>({number:1,name:"A"}),getters:{getName(){return`get - ${this.name} - ${this.getNumber}`},getNumber(){return this.number}},actions:{setNumber(){this.number++}}}),ot=C("WINDOWTABS",{state:()=>({tabs:[]}),getters:{getWindowTabs(){return this.tabs}},actions:{getWinTabByName(t){return this.tabs.find(e=>t===e.name)}}}),w=(t,e,a)=>{const n=window.open(e,a);t.value.push({instance:n,name:a})},F=[{path:"/",redirect:"/login",meta:{notLayout:!0}},{path:"/:pathMatch(.*)",redirect:"/404",meta:{notLayout:!0}},{path:"/404",name:"404",component:()=>d(()=>import("./error.d14a6beb.js"),["static/error.d14a6beb.js","static/error.c2240740.css","static/el-button.4be9bacf.css","static/vue.76fa6288.js","static/element.8d556bba.js","static/vxe.4962e5e9.js"]),meta:{notLayout:!0}},{path:"/login",name:"Login",component:()=>d(()=>import("./index.aaf50dae.js"),["static/index.aaf50dae.js","static/index.6510e472.css","static/el-form-item.26118593.css","static/el-button.4be9bacf.css","static/el-input.ccaef67f.css","static/vue.76fa6288.js","static/element.8d556bba.js","static/vxe.4962e5e9.js"]),meta:{notLayout:!0}},{path:"/new/index",name:"NewIndex",component:()=>d(()=>import("./index.aa0c7ff9.js"),["static/index.aa0c7ff9.js","static/index.037c2b2e.css","static/el-button.4be9bacf.css","static/el-card.96498d67.css","static/vue.76fa6288.js","static/index.04e1d0eb.js","static/element.8d556bba.js","static/vxe.4962e5e9.js"]),meta:{notLayout:!0,title:"\u65B0\u6807\u7B7E",icon:"el-icon-house"}},{path:"/home",component:x,redirect:"/home/index",meta:{title:"\u9996\u9875",icon:"el-icon-house"},children:[{path:"index",component:()=>d(()=>import("./index.8a99841d.js"),["static/index.8a99841d.js","static/index.1e4198c8.css","static/el-tag.b11bb376.css","static/el-card.96498d67.css","static/index.04e1d0eb.js","static/element.8d556bba.js","static/vue.76fa6288.js","static/vxe.4962e5e9.js"])}]},{path:"/new",component:x,meta:{title:"\u65B0\u6807\u7B7E",icon:"el-icon-eleme"},beforeEnter:(t,e,a)=>{const n=ot(),o=t.fullPath+"/index",r=(t.fullPath.replaceAll("/","")+"index").toUpperCase(),s=n.getWinTabByName(r),{tabs:_}=te(n);s?s.instance.closed?(_.value.splice(_.value.findIndex(c=>c.name=s.name),1),w(_,o,r)):s.instance.focus():w(_,o,r),a(e.fullPath)}},{path:"/test",meta:{type:"sub",title:"\u6D4B\u8BD5",icon:"el-icon-eleme"},component:x,children:[{path:"type-check",component:()=>d(()=>import("./index.d64c9931.js"),["static/index.d64c9931.js","static/el-card.96498d67.css","static/el-button.4be9bacf.css","static/element.8d556bba.js","static/vue.76fa6288.js","static/vxe.4962e5e9.js"]),meta:{title:"\u6570\u7EC4\u64CD\u7EB5",icon:"el-icon-eleme"}},{path:"shuffle",component:()=>d(()=>import("./index.e9d2fcbf.js"),["static/index.e9d2fcbf.js","static/index.fdbefaad.css","static/el-card.96498d67.css","static/el-form-item.26118593.css","static/el-input.ccaef67f.css","static/el-button.4be9bacf.css","static/vue.76fa6288.js","static/element.8d556bba.js","static/vxe.4962e5e9.js"]),meta:{title:"\u968F\u673A",icon:"el-icon-eleme"}},{path:"curry",component:()=>d(()=>import("./index.e5bc4469.js"),["static/index.e5bc4469.js","static/index.a27af12d.css","static/el-card.96498d67.css","static/element.8d556bba.js","static/vue.76fa6288.js","static/vxe.4962e5e9.js"]),meta:{title:"\u67EF\u91CC\u5316",icon:"el-icon-eleme"}},{path:"bus",component:()=>d(()=>import("./index.deca3dde.js"),["static/index.deca3dde.js","static/el-card.96498d67.css","static/el-button.4be9bacf.css","static/vue.76fa6288.js","static/element.8d556bba.js","static/vxe.4962e5e9.js"]),meta:{title:"\u516C\u5171\u4E32\u884CBUS",icon:"el-icon-eleme"}},{path:"pinia",component:()=>d(()=>import("./index.eefe6a28.js"),["static/index.eefe6a28.js","static/el-button.4be9bacf.css","static/el-card.96498d67.css","static/vue.76fa6288.js","static/element.8d556bba.js","static/vxe.4962e5e9.js"]),meta:{title:"Pinia",icon:"el-icon-eleme"}}]},{path:"/components",meta:{type:"sub",title:"\u7EC4\u4EF6",icon:"el-icon-eleme"},component:x,children:[{path:"pagination",component:()=>d(()=>import("./demo.b3580af8.js"),["static/demo.b3580af8.js","static/demo.4677bf41.css","static/el-card.96498d67.css","static/el-input.ccaef67f.css","static/el-tag.b11bb376.css","static/element.8d556bba.js","static/vue.76fa6288.js","static/vxe.4962e5e9.js"]),meta:{title:"\u5206\u9875",icon:"el-icon-documentcopy"}},{path:"vxegrid",component:()=>d(()=>import("./index.a3ef9218.js"),["static/index.a3ef9218.js","static/index.244fcd6d.css","static/el-button.4be9bacf.css","static/el-form-item.26118593.css","static/element.8d556bba.js","static/vue.76fa6288.js","static/vxe.4962e5e9.js"]),meta:{title:"Vxe-Grid",icon:"el-icon-documentcopy"}}]}],W=(t,e="")=>{t.forEach(a=>{var n;(n=a.meta)!=null&&n.notLayout||(a.name=P(e.substring(e.indexOf("/")+1))+P(a.path.substring(a.path.indexOf("/")+1)),a.children&&W(a.children,a.path))})};W(F);const j=Y({history:ee("/"),routes:F});j.beforeEach((t,e,a)=>{const n=t.fullPath.replaceAll("/","").toUpperCase();window.name=n,a()});const O=(t,e)=>{const a=t.storage||sessionStorage,n=t.key||e.$id;if(t.paths){const o=t.paths.reduce((r,s)=>(r[s]=e.$state[s],r),{});a.setItem(n,JSON.stringify(o))}else a.setItem(n,JSON.stringify(e.$state))};var st=({options:t,store:e})=>{var a,n,o,r;if((a=t.persist)!=null&&a.enabled){const s=[{key:e.$id,storage:sessionStorage}],_=(o=(n=t.persist)==null?void 0:n.strategies)!=null&&o.length?(r=t.persist)==null?void 0:r.strategies:s;_.forEach(c=>{const f=c.storage||sessionStorage,h=c.key||e.$id,E=f.getItem(h);E&&(e.$patch(JSON.parse(E)),O(c,e))}),e.$subscribe(()=>{_.forEach(c=>{O(c,e)})})}};const rt=t=>t.replace(/(A-Z)g/,"-$1").toLocaleLowerCase(),z=ne();z.use(st);const H=ae(ke);ge.setup({i18n:(t,e)=>T.toFormatString(T.get(be,t),e)});function lt(t){t.use(ye).use(Ee).use(xe).use($e).use(Ie).use(Ce).use(Pe).use(Se).use(Te).use(Le)}for(const t in S)H.component(`el-icon-${rt(t)}`,S[t]);H.use(j).use(lt).use(z).mount("#app");export{y as _,_t as a,Ze as u};
