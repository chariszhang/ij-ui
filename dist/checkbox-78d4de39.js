import{ref as e,onMounted as l,watchEffect as a,openBlock as t,createElementBlock as i,Fragment as o,renderList as d,createElementVNode as r,toDisplayString as u}from"vue";import{a as n,g as s}from"./util-ad8364aa.js";import{r as c}from"./form-validator-0e9e5855.js";import{s as m}from"./index-8e56d2a8.js";var f={props:{modelValue:Array,keyCode:String,list:Array,disabled:Boolean,validateRule:Object},setup(t,{emit:i}){const o=e([]),d=e([]),r=n(),u=e([]);return c({ref:d,props:t}),l((async()=>{t.keyCode?o.value=(await s(t.keyCode)).data:o.value=t.list,Array.isArray(t.modelValue)&&t.modelValue.length&&(u.value=t.modelValue.slice(0))})),a((()=>{u.value.toString()!==(t.modelValue||"").toString()&&(u.value=(t.modelValue||[]).slice(0))})),{listRef:o,change:function(e,l){if(e.target.checked)u.value.push(l.valueCode);else{let e=u.value.indexOf(l.valueCode);u.value.splice(e,1)}i("update:modelValue",u.value.slice(0).sort())},isSelected:function(e){return u.value.includes(e)},elementRef:d,uuid:r,selectedListRef:u}}};const v={class:"checkbox"},p=["disabled","onClick","id","checked"],h=["for"];m("\n.checkbox[data-v-07205844] {\n    margin-right: 10px;\n}\n.checkbox input[data-v-07205844] {\n    margin-right: 5px;\n}\n"),f.render=function(e,l,a,n,s,c){return t(),i("div",null,[(t(!0),i(o,null,d(n.listRef,((e,l)=>(t(),i("span",v,[r("input",{disabled:a.disabled,onClick:l=>n.change(l,e),id:n.uuid+l,type:"checkbox",checked:n.isSelected(e.valueCode),ref_for:!0,ref:e=>n.elementRef[l]=e},null,8,p),r("label",{for:n.uuid+l},u(e.valueName),9,h)])))),256))])},f.__scopeId="data-v-07205844",f.__file="forms/implements/checkbox/checkbox.vue";export{f as default};