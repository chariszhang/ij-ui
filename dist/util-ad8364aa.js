function t(t,e){let n;return function(...o){clearTimeout(n),n=setTimeout((()=>t.apply(null,o)),e)}}const e={};async function n(t){let n=e[t];n||(n=e[t]=[{valueCode:"0",valueName:"否"},{valueCode:"1",valueName:"是"}]);const o=await n;return"0"===o.code&&Array.isArray(o.data)&&o.data.forEach((function(t){t.optionText&&!t.valueName&&(t.valueCode=t.optionValue,t.valueName=t.optionText)})),o}function o(t){return(t||"uuid")+Math.random().toString(16).substr(2)}function a(t){let e=document.documentElement.clientTop,n=document.documentElement.clientLeft,o=t.getBoundingClientRect();return{top:o.top-e,right:o.right-n,bottom:o.bottom-e,left:o.left-n,width:o.width,height:o.height}}export{o as a,a as b,t as d,n as g};