import{ref as e,onMounted as t,onUpdated as a,nextTick as l,openBlock as n,createElementBlock as o,normalizeClass as d,createElementVNode as r,withModifiers as i,createVNode as s,Transition as f,withCtx as u,withDirectives as c,vModelText as p,toDisplayString as v,createCommentVNode as m,Fragment as h,renderList as w,pushScopeId as x,popScopeId as b}from"vue";import{g,d as y}from"./util-ad8364aa.js";import{r as k}from"./form-validator-0e9e5855.js";import{s as S}from"./index-8e56d2a8.js";var B={props:{list:Array,disabled:Boolean,multiple:Boolean,modelValue:[String,Number,Array],label:[String,Array],current:Object,placeholder:{type:String,default:"请选择"},noPlaceholder:Boolean,keyCode:String,validateRule:Object,lazeload:Boolean},setup(n,{emit:o}){const d=e(""),r=e(),i=e(!1),s=e([]),f=e(),u=e(""),c=e([]);let p,v,m=[],h=!0,w=!1,x=!1;async function b(){w&&(w=!1,s.value=(await g(n.keyCode)).data||[])}function S(){const e=c.value;e.length?(m=s.value.filter((t=>t.isSelected=e.findIndex((e=>N(e,t.valueCode)))>-1)),e.length>4?d.value=`已选中${e.length}个`:d.value=m.map((e=>e.valueName)).join("、")):(m=[],d.value="")}function B(){i.value=!1,u.value="",p="",v=[]}function C(){const{modelValue:e}=n;return n.multiple?e||[]:null==e||""===e||isNaN(e)?[]:[e]}k({ref:f,props:n}),t((async()=>{const e=C();n.keyCode?e.length||!n.lazeload?s.value=(await g(n.keyCode)).data||[]:w=!0:s.value=n.list||[],c.value=e,S()})),a((async()=>{let e=0;Array.isArray(n.list)&&n.list.length&&s.value!==n.list&&(s.value=n.list,e=1),c.value.toString()!==C().toString()&&(c.value=C().slice(0),await b(),e=1),e&&S()}));const R=y((function(){if(x&&(x=!1,m.length&&m[0])){const{el:e}=m[0];e&&(n.multiple&&m.length>1?e.scrollIntoView({block:"start"}):e.scrollIntoViewIfNeeded())}}),13);function N(e,t){return e==t}return{viewValue:d,dropdownRef:r,dropdownShowRef:i,listRef:s,elementRef:f,searchText:u,selecteds:c,filter:function(e=""){return(e=e.trim())?(p!==e&&(p=e,v=s.value.filter((t=>t.valueName.includes(e)))),v):s.value},dropdownOpen:function(){i.value?B():(b(),i.value=!0,x=!0,l((()=>{r.value&&r.value.focus()})))},dropdownBlur:function(){setTimeout((()=>{h&&B()}))},scrollToSelfFn:R,searchFocus:function(){h=!1},searchBlur:function(){h=!0,setTimeout((()=>{document.activeElement!==r.value&&B()}))},toggleSelected:function(e){let t=c.value||[];const a=n.multiple;if(e){const{valueCode:l}=e;if(a){const e=t.findIndex((e=>N(e,l)));e>-1?t.splice(e,1):t.push(l)}else{if(i(),1===t.length&&N(t[0],l))return;t=[l]}}else i(),t=[];c.value=t,S();const d=a?t:t[0],r=m.map((e=>e.valueName));function i(){l(B)}o("update:modelValue",d),o("update:current",a?m:m[0]),o("update:label",a?r:r[0]),o("change",d)}}}};const C=["value","placeholder","disabled"],R=(e=>(x("data-v-63108f84"),e=e(),b(),e))((()=>r("span",{class:"arrow"},null,-1))),N={class:"search-wrap"},T={class:"ul-list"},V=["onClick"],F=["checked"],I={flex:"",class:"text"};S(".multiple-select[data-v-63108f84] {\n  user-select: none;\n  position: relative;\n}\n.multiple-select[data-v-63108f84] .form-control[data-v-63108f84] {\n  cursor: default;\n}\n.multiple-select[data-v-63108f84] .form-control[data-v-63108f84][data-v-63108f84],\n.multiple-select[data-v-63108f84] .form-control[data-v-63108f84][data-v-63108f84]::placeholder {\n  color: #000;\n}\n.multiple-select[data-v-63108f84] .arrow[data-v-63108f84] {\n  position: absolute;\n  right: 7px;\n  top: 40%;\n  width: 0;\n  height: 0;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-top: 5px solid #AFB3C2;\n  transition: transform 0.2s ease;\n}\n.multiple-select[data-v-63108f84].open[data-v-63108f84] .form-control[data-v-63108f84] {\n  border-radius: 2px 2px 0 0;\n}\n.multiple-select[data-v-63108f84].open[data-v-63108f84] .arrow[data-v-63108f84] {\n  transform: rotate(180deg);\n}\n.multiple-select[data-v-63108f84] .dropdown[data-v-63108f84] {\n  position: absolute;\n  z-index: 99999;\n  box-sizing: border-box;\n  border: 1px solid #dbdeef;\n  width: 100%;\n  background-color: #fff;\n  top: 100%;\n  margin-top: -2px;\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);\n  border-radius: 0 0 5px 5px;\n}\n.multiple-select[data-v-63108f84] .dropdown[data-v-63108f84][data-v-63108f84]:focus {\n  outline: 0;\n}\n.multiple-select[data-v-63108f84] .dropdown[data-v-63108f84] .ul-list[data-v-63108f84] {\n  max-height: 200px;\n  overflow-y: auto;\n  margin: 0 5px;\n  padding: 4px;\n}\n.multiple-select[data-v-63108f84] .dropdown[data-v-63108f84] .ul-list[data-v-63108f84][data-v-63108f84]::-webkit-scrollbar {\n  width: 8px;\n}\n.multiple-select[data-v-63108f84] .dropdown[data-v-63108f84] .ul-list[data-v-63108f84][data-v-63108f84]::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background: rgba(52, 51, 51, 0.2);\n}\n.multiple-select[data-v-63108f84] .dropdown[data-v-63108f84] .ul-list[data-v-63108f84][data-v-63108f84]::-webkit-scrollbar-track {\n  border-radius: 0;\n  background: transparent;\n}\n.multiple-select[data-v-63108f84] .dropdown[data-v-63108f84] .ul-list[data-v-63108f84] li[data-v-63108f84] {\n  position: relative;\n  list-style: none;\n  height: 26px;\n  line-height: 30px;\n  cursor: default;\n  padding: 0 4px;\n}\n.multiple-select[data-v-63108f84] .dropdown[data-v-63108f84] .ul-list[data-v-63108f84] li[data-v-63108f84] input[type=checkbox][data-v-63108f84] {\n  pointer-events: none;\n  margin-right: 5px;\n}\n.multiple-select[data-v-63108f84] .dropdown[data-v-63108f84] .ul-list[data-v-63108f84] li[data-v-63108f84][data-v-63108f84]:not(:last-child) {\n  border-bottom: 1px solid #f1f1f1;\n}\n.multiple-select[data-v-63108f84] .dropdown[data-v-63108f84] .ul-list[data-v-63108f84] li[data-v-63108f84] .text[data-v-63108f84] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.multiple-select[data-v-63108f84] .dropdown[data-v-63108f84] .ul-list[data-v-63108f84] li[data-v-63108f84] .selected-icon[data-v-63108f84] {\n  display: none;\n  font-size: 6px;\n}\n.multiple-select[data-v-63108f84] .dropdown[data-v-63108f84] .ul-list[data-v-63108f84] li[data-v-63108f84].active-multiple[data-v-63108f84] .text[data-v-63108f84] {\n  color: #355fd6;\n}\n.multiple-select[data-v-63108f84] .dropdown[data-v-63108f84] .ul-list[data-v-63108f84] li[data-v-63108f84].active-multiple[data-v-63108f84] .selected-icon[data-v-63108f84] {\n  display: block;\n}\n.multiple-select[data-v-63108f84] .dropdown[data-v-63108f84] .ul-list[data-v-63108f84] li[data-v-63108f84][data-v-63108f84]:hover {\n  background-color: #e8e8e8;\n  border-color: #e8e8e8;\n}\n.multiple-select[data-v-63108f84] .dropdown[data-v-63108f84] .ul-list[data-v-63108f84] li[data-v-63108f84].active[data-v-63108f84] {\n  background-color: #3c6bff;\n  color: #fff;\n}\n.multiple-select[data-v-63108f84] .dropdown[data-v-63108f84] .search-wrap[data-v-63108f84] {\n  height: 28px;\n  position: relative;\n  padding: 6px 8px;\n}\n"),B.render=function(e,t,a,l,x,b){return n(),o("div",{class:d(["multiple-select",{open:l.dropdownShowRef}])},[r("input",{ref:"elementRef",class:"form-control",type:"text",value:l.viewValue,placeholder:!0!==a.noPlaceholder?a.placeholder:"",disabled:a.disabled,onKeydown:t[0]||(t[0]=i((()=>{}),["prevent","stop"])),onPaste:t[1]||(t[1]=i((()=>{}),["prevent","stop"])),onCut:t[2]||(t[2]=i((()=>{}),["prevent","stop"])),onMousedown:t[3]||(t[3]=i((()=>{}),["prevent","stop"])),onClick:t[4]||(t[4]=(...e)=>l.dropdownOpen&&l.dropdownOpen(...e))},null,40,C),R,s(f,{name:"slide-down"},{default:u((()=>[l.dropdownShowRef?(n(),o("div",{key:0,ref:"dropdownRef",class:"dropdown",tabindex:"-1",onBlur:t[9]||(t[9]=(...e)=>l.dropdownBlur&&l.dropdownBlur(...e))},[r("div",N,[c(r("input",{type:"text",ref:"searchInputRef",class:"form-control",placeholder:"请搜索...","onUpdate:modelValue":t[5]||(t[5]=e=>l.searchText=e),onFocus:t[6]||(t[6]=(...e)=>l.searchFocus&&l.searchFocus(...e)),onBlur:t[7]||(t[7]=(...e)=>l.searchBlur&&l.searchBlur(...e))},null,544),[[p,l.searchText]])]),r("ul",T,[!0===a.noPlaceholder||a.multiple?m("v-if",!0):(n(),o("li",{key:0,onClick:t[8]||(t[8]=e=>l.toggleSelected())},v(a.placeholder),1)),(n(!0),o(h,null,w(l.filter(l.searchText),(e=>(n(),o("li",{class:d({active:!a.multiple&&e.isSelected,"active-multiple":a.multiple&&e.isSelected}),onClick:t=>l.toggleSelected(e),ref_for:!0,ref:t=>(e.el=t)&&l.scrollToSelfFn(),layout:"row","layout-align":"start center"},[a.multiple?(n(),o("input",{key:0,type:"checkbox",tabindex:"-1",checked:e.isSelected},null,8,F)):m("v-if",!0),r("div",I,v(e.valueName),1)],10,V)))),256))])],544)):m("v-if",!0)])),_:1})],2)},B.__scopeId="data-v-63108f84",B.__file="forms/implements/select/select.vue";export{B as default};
