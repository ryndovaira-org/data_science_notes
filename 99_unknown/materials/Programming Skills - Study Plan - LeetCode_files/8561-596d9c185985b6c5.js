(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8561],{3312:function(e,t,r){"use strict";var n=r(48764).Buffer;const i={},a=i.hasOwnProperty,o=(e,t)=>{for(const r in e)a.call(e,r)&&t(r,e[r])},s=e=>"\\u"+("0000"+e).slice(-4),u=(e,t)=>{let r=e.toString(16);return t?r:r.toUpperCase()},c=i.toString,l=Array.isArray,f={"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t"},d=/[\\\b\f\n\r\t]/,p=/[0-9]/,b=/[\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,v=/([\uD800-\uDBFF][\uDC00-\uDFFF])|([\uD800-\uDFFF])|(['"`])|[^]/g,g=/([\uD800-\uDBFF][\uDC00-\uDFFF])|([\uD800-\uDFFF])|(['"`])|[^ !#-&\(-\[\]-_a-~]/g,h=(e,t)=>{const r=()=>{O=w,++t.indentLevel,w=t.indent.repeat(t.indentLevel)},i={escapeEverything:!1,minimal:!1,isScriptContext:!1,quotes:"single",wrap:!1,es6:!1,json:!1,compact:!0,lowercaseHex:!1,numbers:"decimal",indent:"\t",indentLevel:0,__inline1__:!1,__inline2__:!1},a=t&&t.json;var m,T;a&&(i.quotes="double",i.wrap=!0),m=i,t=(T=t)?(o(T,((e,t)=>{m[e]=t})),m):m,"single"!=t.quotes&&"double"!=t.quotes&&"backtick"!=t.quotes&&(t.quotes="single");const y="double"==t.quotes?'"':"backtick"==t.quotes?"`":"'",x=t.compact,$=t.lowercaseHex;let w=t.indent.repeat(t.indentLevel),O="";const _=t.__inline1__,E=t.__inline2__,P=x?"":"\n";let A,F=!0;const S="binary"==t.numbers,R="octal"==t.numbers,C="decimal"==t.numbers,j="hexadecimal"==t.numbers;if(a&&e&&"function"==typeof e.toJSON&&(e=e.toJSON()),!(e=>"string"==typeof e||"[object String]"==c.call(e))(e)){if((e=>"[object Map]"==c.call(e))(e))return 0==e.size?"new Map()":(x||(t.__inline1__=!0,t.__inline2__=!1),"new Map("+h(Array.from(e),t)+")");if((e=>"[object Set]"==c.call(e))(e))return 0==e.size?"new Set()":"new Set("+h(Array.from(e),t)+")";if((e=>"function"===typeof n&&n.isBuffer(e))(e))return 0==e.length?"Buffer.from([])":"Buffer.from("+h(Array.from(e),t)+")";if(l(e))return A=[],t.wrap=!0,_&&(t.__inline1__=!1,t.__inline2__=!0),E||r(),((e,t)=>{const r=e.length;let n=-1;for(;++n<r;)t(e[n])})(e,(e=>{F=!1,E&&(t.__inline2__=!1),A.push((x||E?"":w)+h(e,t))})),F?"[]":E?"["+A.join(", ")+"]":"["+P+A.join(","+P)+P+(x?"":O)+"]";if(!(e=>"number"==typeof e||"[object Number]"==c.call(e))(e))return(e=>"[object Object]"==c.call(e))(e)?(A=[],t.wrap=!0,r(),o(e,((e,r)=>{F=!1,A.push((x?"":w)+h(e,t)+":"+(x?"":" ")+h(r,t))})),F?"{}":"{"+P+A.join(","+P)+P+(x?"":O)+"}"):a?JSON.stringify(e)||"null":String(e);if(a)return JSON.stringify(e);if(C)return String(e);if(j){let t=e.toString(16);return $||(t=t.toUpperCase()),"0x"+t}if(S)return"0b"+e.toString(2);if(R)return"0o"+e.toString(8)}const k=t.escapeEverything?v:g;return A=e.replace(k,((e,r,n,i,o,c)=>{if(r){if(t.minimal)return r;const e=r.charCodeAt(0),n=r.charCodeAt(1);if(t.es6){return"\\u{"+u(1024*(e-55296)+n-56320+65536,$)+"}"}return s(u(e,$))+s(u(n,$))}if(n)return s(u(n.charCodeAt(0),$));if("\0"==e&&!a&&!p.test(c.charAt(o+1)))return"\\0";if(i)return i==y||t.escapeEverything?"\\"+i:i;if(d.test(e))return f[e];if(t.minimal&&!b.test(e))return e;const l=u(e.charCodeAt(0),$);return a||l.length>2?s(l):"\\x"+("00"+l).slice(-2)})),"`"==y&&(A=A.replace(/\$\{/g,"\\${")),t.isScriptContext&&(A=A.replace(/<\/(script|style)/gi,"<\\/$1").replace(/<!--/g,a?"\\u003C!--":"\\x3C!--")),t.wrap&&(A=y+A+y),A};h.version="3.0.2",e.exports=h},74488:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.ContentRect=function(e){if("getBBox"in e){var t=e.getBBox();return Object.freeze({height:t.height,left:0,top:0,width:t.width})}var r=window.getComputedStyle(e);return Object.freeze({height:parseFloat(r.height||"0"),left:parseFloat(r.paddingLeft||"0"),top:parseFloat(r.paddingTop||"0"),width:parseFloat(r.width||"0")})}},28981:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(74488),i=function(){function e(e){this.target=e,this.$$broadcastWidth=this.$$broadcastHeight=0}return Object.defineProperty(e.prototype,"broadcastWidth",{get:function(){return this.$$broadcastWidth},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"broadcastHeight",{get:function(){return this.$$broadcastHeight},enumerable:!0,configurable:!0}),e.prototype.isActive=function(){var e=n.ContentRect(this.target);return!!e&&(e.width!==this.broadcastWidth||e.height!==this.broadcastHeight)},e}();t.ResizeObservation=i},30215:function(e,t,r){"use strict";var n=r(28981),i=r(32778),a=[],o=function(){function e(e){this.$$observationTargets=[],this.$$activeTargets=[],this.$$skippedTargets=[];var t=function(e){if("undefined"===typeof e)return"Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.";if("function"!==typeof e)return"Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function."}(e);if(t)throw TypeError(t);this.$$callback=e}return e.prototype.observe=function(e){var t,r=u("observe",e);if(r)throw TypeError(r);c(this.$$observationTargets,e)>=0||(this.$$observationTargets.push(new n.ResizeObservation(e)),t=this,a.indexOf(t)<0&&(a.push(t),v()))},e.prototype.unobserve=function(e){var t=u("unobserve",e);if(t)throw TypeError(t);var r=c(this.$$observationTargets,e);r<0||(this.$$observationTargets.splice(r,1),0===this.$$observationTargets.length&&s(this))},e.prototype.disconnect=function(){this.$$observationTargets=[],this.$$activeTargets=[],s(this)},e}();function s(e){var t=a.indexOf(e);t>=0&&(a.splice(t,1),h())}function u(e,t){return"undefined"===typeof t?"Failed to execute '"+e+"' on 'ResizeObserver': 1 argument required, but only 0 present.":t&&t.nodeType===window.Node.ELEMENT_NODE?void 0:"Failed to execute '"+e+"' on 'ResizeObserver': parameter 1 is not of type 'Element'."}function c(e,t){for(var r=0;r<e.length;r+=1)if(e[r].target===t)return r;return-1}t.do=o;var l,f=function(e){a.forEach((function(t){t.$$activeTargets=[],t.$$skippedTargets=[],t.$$observationTargets.forEach((function(r){r.isActive()&&(p(r.target)>e?t.$$activeTargets.push(r):t.$$skippedTargets.push(r))}))}))},d=function(){var e=1/0;return a.forEach((function(t){if(t.$$activeTargets.length){var r=[];t.$$activeTargets.forEach((function(t){var n=new i.ResizeObserverEntry(t.target);r.push(n),t.$$broadcastWidth=n.contentRect.width,t.$$broadcastHeight=n.contentRect.height;var a=p(t.target);a<e&&(e=a)})),t.$$callback(r,t),t.$$activeTargets=[]}})),e},p=function(e){for(var t=0;e.parentNode;)e=e.parentNode,t+=1;return t},b=function(){var e=0;for(f(e);a.some((function(e){return!!e.$$activeTargets.length}));)e=d(),f(e);a.some((function(e){return!!e.$$skippedTargets.length}))&&function(){var e=new window.ErrorEvent("ResizeLoopError",{message:"ResizeObserver loop completed with undelivered notifications."});window.dispatchEvent(e)}()},v=function(){l||g()},g=function(){l=window.requestAnimationFrame((function(){b(),g()}))},h=function(){l&&!a.some((function(e){return!!e.$$observationTargets.length}))&&(window.cancelAnimationFrame(l),l=void 0)}},32778:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(74488),i=function(e){this.target=e,this.contentRect=n.ContentRect(e)};t.ResizeObserverEntry=i},30237:function(){String.fromCodePoint||function(){var e=function(){try{var e={},t=Object.defineProperty,r=t(e,e,e)&&t}catch(n){}return r}(),t=String.fromCharCode,r=Math.floor,n=function(e){var n,i,a=16384,o=[],s=-1,u=arguments.length;if(!u)return"";for(var c="";++s<u;){var l=Number(arguments[s]);if(!isFinite(l)||l<0||l>1114111||r(l)!=l)throw RangeError("Invalid code point: "+l);l<=65535?o.push(l):(n=55296+((l-=65536)>>10),i=l%1024+56320,o.push(n,i)),(s+1==u||o.length>a)&&(c+=t.apply(null,o),o.length=0)}return c};e?e(String,"fromCodePoint",{value:n,configurable:!0,writable:!0}):String.fromCodePoint=n}()},75840:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r(30237);var n=/\\(u\{([0-9A-Fa-f]+)\}|u([0-9A-Fa-f]{4})|x([0-9A-Fa-f]{2})|([1-7][0-7]{0,2}|[0-7]{2,3})|(['"tbrnfv0\\]))|\\U([0-9A-Fa-f]{8})/g,i={0:"\0",b:"\b",f:"\f",n:"\n",r:"\r",t:"\t",v:"\v","'":"'",'"':'"',"\\":"\\"},a=function(e){return String.fromCodePoint(parseInt(e,16))};t.default=function(e){return e.replace(n,(function(e,t,r,n,o,s,u,c){return void 0!==r?a(r):void 0!==n?a(n):void 0!==o?a(o):void 0!==s?(l=s,String.fromCodePoint(parseInt(l,8))):void 0!==c?a(c):i[u];var l}))},e.exports=t.default},49808:function(e,t,r){"use strict";r.d(t,{O:function(){return k}});var n=r(67294),i=r(12351),a=r(19946),o=r(32984),s=r(61363),u=r(84575),c=r(16723),l=r(23784),f=r(14157),d=r(3855),p=r(46045);function b({onFocus:e}){let[t,r]=(0,n.useState)(!0);return t?n.createElement(p._,{as:"button",type:"button",features:p.A.Focusable,onFocus:t=>{t.preventDefault();let n,i=50;n=requestAnimationFrame((function t(){if(!(i--<=0))return e()?(r(!1),void cancelAnimationFrame(n)):void(n=requestAnimationFrame(t));n&&cancelAnimationFrame(n)}))}}):null}var v,g=r(73781),h=r(81021),m=((v=m||{})[v.SetSelectedIndex=0]="SetSelectedIndex",v[v.RegisterTab=1]="RegisterTab",v[v.UnregisterTab=2]="UnregisterTab",v[v.RegisterPanel=3]="RegisterPanel",v[v.UnregisterPanel=4]="UnregisterPanel",v);let T={0(e,t){let r=e.tabs.filter((e=>{var t;return!(null!=(t=e.current)&&t.hasAttribute("disabled"))}));if(t.index<0)return{...e,selectedIndex:e.tabs.indexOf(r[0])};if(t.index>e.tabs.length)return{...e,selectedIndex:e.tabs.indexOf(r[r.length-1])};let n=e.tabs.slice(0,t.index),i=[...e.tabs.slice(t.index),...n].find((e=>r.includes(e)));return i?{...e,selectedIndex:e.tabs.indexOf(i)}:e},1(e,t){var r;if(e.tabs.includes(t.tab))return e;let n=e.tabs[e.selectedIndex],i=(0,u.z2)([...e.tabs,t.tab],(e=>e.current)),a=null!=(r=i.indexOf(n))?r:e.selectedIndex;return-1===a&&(a=e.selectedIndex),{...e,tabs:i,selectedIndex:a}},2:(e,t)=>({...e,tabs:e.tabs.filter((e=>e!==t.tab))}),3:(e,t)=>e.panels.includes(t.panel)?e:{...e,panels:(0,u.z2)([...e.panels,t.panel],(e=>e.current))},4:(e,t)=>({...e,panels:e.panels.filter((e=>e!==t.panel))})},y=(0,n.createContext)(null);function x(e){let t=(0,n.useContext)(y);if(null===t){let t=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,x),t}return t}y.displayName="TabsSSRContext";let $=(0,n.createContext)(null);function w(e){let t=(0,n.useContext)($);if(null===t){let t=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,w),t}return t}$.displayName="TabsDataContext";let O=(0,n.createContext)(null);function _(e){let t=(0,n.useContext)(O);if(null===t){let t=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,_),t}return t}function E(e,t){return(0,o.E)(t.type,T,e,t)}O.displayName="TabsActionsContext";let P=n.Fragment,A=(0,i.yV)((function(e,t){let{defaultIndex:r=0,vertical:a=!1,manual:o=!1,onChange:s,selectedIndex:u=null,...f}=e;const p=a?"vertical":"horizontal",v=o?"manual":"auto";let g=null!==u,h=(0,l.T)(t),[m,T]=(0,n.useReducer)(E,{selectedIndex:null!=u?u:r,tabs:[],panels:[]}),x=(0,n.useMemo)((()=>({selectedIndex:m.selectedIndex})),[m.selectedIndex]),w=(0,d.E)(s||(()=>{})),_=(0,d.E)(m.tabs),A=(0,n.useMemo)((()=>({orientation:p,activation:v,...m})),[p,v,m]),F=(0,d.E)(g?e.selectedIndex:m.selectedIndex),S=(0,n.useMemo)((()=>({registerTab:e=>(T({type:1,tab:e}),()=>T({type:2,tab:e})),registerPanel:e=>(T({type:3,panel:e}),()=>T({type:4,panel:e})),change(e){F.current!==e&&w.current(e),g||T({type:0,index:e})}})),[T,g]);(0,c.e)((()=>{T({type:0,index:null!=u?u:r})}),[u]);let R=(0,n.useRef)({tabs:[],panels:[]}),C={ref:h};return n.createElement(y.Provider,{value:R},n.createElement(O.Provider,{value:S},n.createElement($.Provider,{value:A},A.tabs.length<=0&&n.createElement(b,{onFocus:()=>{var e,t;for(let r of _.current)if(0===(null==(e=r.current)?void 0:e.tabIndex))return null==(t=r.current)||t.focus(),!0;return!1}}),(0,i.sY)({ourProps:C,theirProps:f,slot:x,defaultTag:P,name:"Tabs"}))))})),F=(0,i.yV)((function(e,t){let{orientation:r,selectedIndex:n}=w("Tab.List"),a=(0,l.T)(t);return(0,i.sY)({ourProps:{ref:a,role:"tablist","aria-orientation":r},theirProps:e,slot:{selectedIndex:n},defaultTag:"div",name:"Tabs.List"})})),S=(0,i.yV)((function(e,t){var r,d;let p=`headlessui-tabs-tab-${(0,a.M)()}`,{orientation:b,activation:v,selectedIndex:m,tabs:T,panels:y}=w("Tab"),$=_("Tab"),O=x("Tab"),E=(0,n.useRef)(null),P=(0,l.T)(E,t);(0,c.e)((()=>$.registerTab(E)),[$,E]);let A=O.current.tabs.indexOf(p);-1===A&&(A=O.current.tabs.push(p)-1);let F=T.indexOf(E);-1===F&&(F=A);let S=F===m,R=(0,g.z)((e=>{let t=T.map((e=>e.current)).filter(Boolean);if(e.key===s.R.Space||e.key===s.R.Enter)return e.preventDefault(),e.stopPropagation(),void $.change(F);switch(e.key){case s.R.Home:case s.R.PageUp:return e.preventDefault(),e.stopPropagation(),(0,u.jA)(t,u.TO.First);case s.R.End:case s.R.PageDown:return e.preventDefault(),e.stopPropagation(),(0,u.jA)(t,u.TO.Last)}return(0,o.E)(b,{vertical:()=>e.key===s.R.ArrowUp?(0,u.jA)(t,u.TO.Previous|u.TO.WrapAround):e.key===s.R.ArrowDown?(0,u.jA)(t,u.TO.Next|u.TO.WrapAround):void 0,horizontal:()=>e.key===s.R.ArrowLeft?(0,u.jA)(t,u.TO.Previous|u.TO.WrapAround):e.key===s.R.ArrowRight?(0,u.jA)(t,u.TO.Next|u.TO.WrapAround):void 0})?e.preventDefault():void 0})),C=(0,g.z)((()=>{var e;null==(e=E.current)||e.focus()})),j=(0,n.useRef)(!1),k=(0,g.z)((()=>{var e;j.current||(j.current=!0,null==(e=E.current)||e.focus(),$.change(F),(0,h.Y)((()=>{j.current=!1})))})),I=(0,g.z)((e=>{e.preventDefault()})),D=(0,n.useMemo)((()=>({selected:S})),[S]),z=e,M={ref:P,onKeyDown:R,onFocus:"manual"===v?C:k,onMouseDown:I,onClick:k,id:p,role:"tab",type:(0,f.f)(e,E),"aria-controls":null==(d=null==(r=y[F])?void 0:r.current)?void 0:d.id,"aria-selected":S,tabIndex:S?0:-1};return(0,i.sY)({ourProps:M,theirProps:z,slot:D,defaultTag:"button",name:"Tabs.Tab"})})),R=(0,i.yV)((function(e,t){let{selectedIndex:r}=w("Tab.Panels"),a=(0,l.T)(t),o=(0,n.useMemo)((()=>({selectedIndex:r})),[r]);return(0,i.sY)({ourProps:{ref:a},theirProps:e,slot:o,defaultTag:"div",name:"Tabs.Panels"})})),C=i.AN.RenderStrategy|i.AN.Static,j=(0,i.yV)((function(e,t){var r,o,s;let{selectedIndex:u,tabs:f,panels:d}=w("Tab.Panel"),b=_("Tab.Panel"),v=x("Tab.Panel"),g=`headlessui-tabs-panel-${(0,a.M)()}`,h=(0,n.useRef)(null),m=(0,l.T)(h,t);(0,c.e)((()=>b.registerPanel(h)),[b,h]);let T=v.current.panels.indexOf(g);-1===T&&(T=v.current.panels.push(g)-1);let y=d.indexOf(h);-1===y&&(y=T);let $=y===u,O=(0,n.useMemo)((()=>({selected:$})),[$]),E=e,P={ref:m,id:g,role:"tabpanel","aria-labelledby":null==(o=null==(r=f[y])?void 0:r.current)?void 0:o.id,tabIndex:$?0:-1};return $||null!=(s=e.unmount)&&!s?(0,i.sY)({ourProps:P,theirProps:E,slot:O,defaultTag:"div",features:C,visible:$,name:"Tabs.Panel"}):n.createElement(p._,{as:"span",...P})})),k=Object.assign(S,{Group:A,List:F,Panels:R,Panel:j})},51351:function(e,t,r){"use strict";function n(e){throw e}r.d(t,{Z:function(){return n}})},76248:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(e,t)=>("production"!==(null==void 0?void 0:undefined.MODE)&&console.warn("[DEPRECATED] Default export is deprecated. Instead use `import { create } from 'zustand/shallow'`."),function(e,t){if(Object.is(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(const[r,n]of e)if(!Object.is(n,t.get(r)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(const r of e)if(!t.has(r))return!1;return!0}const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!1;for(let n=0;n<r.length;n++)if(!Object.prototype.hasOwnProperty.call(t,r[n])||!Object.is(e[r[n]],t[r[n]]))return!1;return!0}(e,t))}}]);