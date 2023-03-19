"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[592],{54465:function(e,t,n){n.d(t,{J:function(){return d}});var r="https://js.stripe.com/v3",a=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,l="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",o=null,i=function(e){return null!==o||(o=new Promise((function(t,n){if("undefined"!==typeof window)if(window.Stripe&&e&&console.warn(l),window.Stripe)t(window.Stripe);else try{var o=function(){for(var e=document.querySelectorAll('script[src^="'.concat(r,'"]')),t=0;t<e.length;t++){var n=e[t];if(a.test(n.src))return n}return null}();o&&e?console.warn(l):o||(o=function(e){var t=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",n=document.createElement("script");n.src="".concat(r).concat(t);var a=document.head||document.body;if(!a)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return a.appendChild(n),n}(e)),o.addEventListener("load",(function(){window.Stripe?t(window.Stripe):n(new Error("Stripe.js not available"))})),o.addEventListener("error",(function(){n(new Error("Failed to load Stripe.js"))}))}catch(i){return void n(i)}else t(null)}))),o},c=function(e,t,n){if(null===e)return null;var r=e.apply(void 0,t);return function(e,t){e&&e._registerWrapper&&e._registerWrapper({name:"stripe-js",version:"1.46.0",startTime:t})}(r,n),r},s=Promise.resolve().then((function(){return i(null)})),u=!1;s.catch((function(e){u||console.warn(e)}));var d=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];u=!0;var r=Date.now();return s.then((function(e){return c(e,t,r)}))}},20640:function(e,t,n){var r=n(11742),a={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,l,o,i,c,s,u=!1;t||(t={}),n=t.debug||!1;try{if(o=r(),i=document.createRange(),c=document.getSelection(),(s=document.createElement("span")).textContent=e,s.ariaHidden="true",s.style.all="unset",s.style.position="fixed",s.style.top=0,s.style.clip="rect(0, 0, 0, 0)",s.style.whiteSpace="pre",s.style.webkitUserSelect="text",s.style.MozUserSelect="text",s.style.msUserSelect="text",s.style.userSelect="text",s.addEventListener("copy",(function(r){if(r.stopPropagation(),t.format)if(r.preventDefault(),"undefined"===typeof r.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var l=a[t.format]||a.default;window.clipboardData.setData(l,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e);t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))})),document.body.appendChild(s),i.selectNodeContents(s),c.addRange(i),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(d){n&&console.error("unable to copy using execCommand: ",d),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),u=!0}catch(d){n&&console.error("unable to copy using clipboardData: ",d),n&&console.error("falling back to prompt"),l=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(l,e)}}finally{c&&("function"==typeof c.removeRange?c.removeRange(i):c.removeAllRanges()),s&&document.body.removeChild(s),o()}return u}},6081:function(e,t,n){n.d(t,{X:function(){return l}});var r=n(82010),a=n(37641),l=function(){var e=(0,r.F)().theme;return"system"===e?(0,a.jU)()&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e}},95633:function(e,t,n){n.d(t,{O:function(){return l}});var r=n(67294),a=n(84004);function l(e,t){var n=(0,r.useState)(e),l=n[0],o=n[1],i=(0,a.z)(t),c=(0,r.useCallback)((function(e){o((function(t){var n="function"===typeof e?e(t):e;return n!==t&&i(n),n}))}),[i]);return[l,(0,r.useMemo)((function(){return{on:function(){return c(!0)},off:function(){return c(!1)},toggle:function(){return c((function(e){return!e}))},setBool:c}}),[c])]}},94312:function(e,t,n){n.d(t,{c:function(){return i}});var r=n(67294),a=n(20640),l=n.n(a),o=n(15214);function i(e,t){var n=(0,r.useState)(!1),a=n[0],i=n[1],c=t&&t.successDuration;return(0,r.useEffect)((function(){if(a&&c){var e=setTimeout((function(){i(!1)}),c);return function(){clearTimeout(e)}}}),[a,c]),[a,function(){var n,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,a=r||e;a.length>=80&&(a+=(0,o.Ou)(null!==(n=null===t||void 0===t?void 0:t.copyright)&&void 0!==n?n:null));var c=l()(a);i(c)}]}},84004:function(e,t,n){n.d(t,{z:function(){return o}});var r=n(29815),a=n(67294),l=n(17832);function o(e){var t=(0,a.useRef)(e);return(0,l.L)((function(){t.current=e})),(0,a.useCallback)((function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];var l,o;return null===(o=t.current)||void 0===o?void 0:(l=o).call.apply(l,[t].concat((0,r.Z)(n)))}),[])}},15214:function(e,t,n){n.d(t,{Of:function(){return u},Ou:function(){return i},d1:function(){return d},yT:function(){return s}});var r=n(85893),a=n(29732),l=n(67294),o=n(75117),i=function(e){return e?"\n\n"+(0,a.Z)([(null===e||void 0===e?void 0:e.author)&&"\u4f5c\u8005\uff1a".concat(e.author),(null===e||void 0===e?void 0:e.link)&&"\u94fe\u63a5\uff1a".concat(e.link),"\u6765\u6e90\uff1a\u529b\u6263\uff08LeetCode\uff09","\u8457\u4f5c\u6743\u5f52\u4f5c\u8005\u6240\u6709\u3002\u5546\u4e1a\u8f6c\u8f7d\u8bf7\u8054\u7cfb\u4f5c\u8005\u83b7\u5f97\u6388\u6743\uff0c\u975e\u5546\u4e1a\u8f6c\u8f7d\u8bf7\u6ce8\u660e\u51fa\u5904\u3002"]).join("\n"):""},c=(0,l.createContext)(null),s=function(e){var t=e.value,n=e.children;return(0,r.jsx)(c.Provider,{value:o.ob?t:null,children:n})},u=function(){return(0,l.useContext)(c)},d=function(e){return(0,l.useCallback)((function(t){if(t.clipboardData&&o.ob){var n,r,a=null!==(r=null===(n=getSelection())||void 0===n?void 0:n.toString())&&void 0!==r?r:"";a.length>=80&&(t.clipboardData.setData("text/plain",a+i(e)),t.preventDefault())}}),[e])}},39075:function(e,t,n){n.d(t,{w:function(){return i}});var r=n(85893),a=(n(67294),n(51797)),l=n(73986),o=n(50077),i=function(e){var t=e.title,n=e.href,i=e.onClick;return(0,r.jsx)("a",{href:n,target:"_blank",rel:"noreferrer",onClick:i,children:(0,r.jsxs)("div",{className:"relative flex w-full items-center justify-between gap-5 rounded-xl px-2 py-2 text-xs lc-md:px-4 lc-md:py-4 lc-lg:px-6 lc-lg:text-base",style:{background:"linear-gradient(90.2deg, #FFE3C7 0.12%, #FFE34E 98.4%)"},children:[(0,r.jsxs)("div",{className:"flex items-center gap-2",children:[(0,r.jsx)("div",{className:"left-0 h-10 w-10 flex-none lc-md:absolute lc-md:bottom-0 lc-md:left-4 lc-md:h-[60px] lc-md:w-[60px] lc-lg:left-6 lc-lg:h-20 lc-lg:w-20",children:(0,r.jsx)(l.y,{src:"/_next/static/images/icon-megaphone-d002bacd3cc1b56445f451b8e0fcd8f2.png",className:"h-full w-full",alt:""})}),(0,r.jsx)("div",{className:"ml-0 font-medium text-label-2 lc-md:ml-[76px] lc-lg:ml-[112px]",children:t})]}),(0,r.jsxs)("div",{className:"flex flex-none items-center gap-2 lc-md:gap-4 lc-lg:gap-6",children:[(0,r.jsx)("div",{className:(0,a.yI)("flex-none text-label-2"),children:"View details"}),(0,r.jsx)("div",{className:"h-3 w-3 text-gray-6 lc-lg:h-4 lc-lg:w-4",children:(0,r.jsx)(o.E,{className:"h-full w-full"})})]})]})})}},67752:function(e,t,n){n.d(t,{e:function(){return f}});var r=n(14924),a=n(85893),l=(n(67294),n(44916)),o=n(51797),i=n(22177),c=n(67331),s=function(e){var t=e.isActive;return(0,a.jsx)("div",{className:"absolute !top-0 !right-0 !flex h-full items-center !p-0",children:(0,a.jsx)("div",{className:"h-4.5 w-4.5 lc-md:h-5 lc-md:w-5 lc-lg:h-6 lc-lg:w-6",children:(0,a.jsx)(c.S,{className:(0,o.yI)("h-full w-full transition-transform",i.Cj.labelGrey8,(0,r.Z)({},"rotate-[45deg]",t))})})})},u=function(e){var t=e.children;return(0,a.jsx)("div",{className:(0,o.yI)("py-1 text-left text-base font-medium lc-md:py-3 lc-md:text-lg lc-lg:py-5 lc-lg:text-xl",i.Cj.label1),children:t})},d=function(e){var t=e.children;return(0,a.jsx)("div",{className:(0,o.yI)("text-sm lc-md:text-base",i.Cj.label2),children:t})},f=function(e){var t=e.data;return(0,a.jsx)(l.UQy,{allowMultiple:!0,className:"bg-transparent",border:"0px solid rgba(0,0,0,0)",children:t.map((function(e,t){var n=e.question,r=e.answer;return(0,a.jsx)(l.Qdk,{border:"0px solid rgba(0,0,0,0)",className:(0,o.yI)("!border-b !border-fill-3 p-0 last:border-none dark:!border-dark-divider-4"),children:function(e){var t=e.isExpanded;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(l.KFZ,{className:"relative !py-3 !pl-4 !pr-10 hover:!bg-transparent",children:[(0,a.jsx)(u,{children:n}),(0,a.jsx)(s,{isActive:t})]}),(0,a.jsx)(l.Hk3,{children:(0,a.jsx)(d,{children:r})})]})}},t)}))})}},81562:function(e,t,n){n.d(t,{A:function(){return h}});var r=n(26042),a=n(69396),l=n(99534),o=n(85893),i=n(67294),c=n(2740),s=n(51797),u=n(42970),d=n(22177),f=n(98197),p=n(32689),v=n(75117),m=n(8132),h=i.forwardRef((function(e,t){var n=e.rootClassName,i=e.utmSource,h=e.children,x=e.className,g=e.footerClassName,y=e.sourceType,w=(0,l.Z)(e,["rootClassName","utmSource","children","className","footerClassName","sourceType"]);return(0,o.jsxs)("div",{className:(0,s.yI)("flex min-h-screen min-w-[360px] flex-col",d.Cj.label1,n),children:[(0,o.jsx)(c.h,{children:v.Oo&&(0,o.jsx)(p.$,{})}),(0,o.jsx)(u.l,{sourceInfo:y?{sourceType:y}:void 0}),(0,o.jsx)(m.K,{}),(0,o.jsx)("div",(0,a.Z)((0,r.Z)({ref:t},w),{className:(0,s.yI)("mx-auto mt-[50px] w-full grow p-4 md:mt-0 md:max-w-[888px] md:p-6 lg:max-w-screen-xl",x),children:h})),(0,o.jsx)(f.$,{utmSource:i,className:g})]})}))},8290:function(e,t,n){n.d(t,{u:function(){return f}});var r=n(14924),a=n(85893),l=n(11355),o=n(67294),i=n(11163),c=n.n(i),s=n(51797),u=n(22177),d=n(385);function f(e){var t=e.visible,n=e.onCancel,i=e.title,f=e.children,p=e.afterClose,v=e.className,m=e.titleRowClass,h=e.titleClassName,x=e.closable,g=void 0===x||x,y=e.showCloseIcon,w=void 0===y||y,b=e.maskClosable,C=void 0!==b&&b,j=e.stopMouseDownPropagation,N=e.shouldCloseOnEsc,S=void 0===N||N,k=e.renderPrefixChildren,A=e.noShadow,E=void 0!==A&&A;(0,o.useEffect)((function(){return c().events.on("beforeHistoryChange",n),function(){return c().events.off("beforeHistoryChange",n)}}),[n]),(0,o.useEffect)((function(){if(S){var e=function(e){"Escape"===e.key&&n()};return window.addEventListener("keyup",e),function(){return window.removeEventListener("keyup",e)}}}),[n,S]);var F=(0,o.useCallback)((function(e){return e.stopPropagation()}),[]);return(0,a.jsx)(l.u,{appear:!0,show:t,afterLeave:p,children:(0,a.jsx)("div",{"aria-modal":"true",role:"dialog",className:"fixed inset-0 overflow-y-auto z-modal",onMouseDown:null!==j&&void 0!==j?j:F,children:(0,a.jsxs)("div",{className:"flex min-h-screen items-center justify-center px-4",children:[(0,a.jsx)(l.u.Child,{enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,a.jsx)("div",{"aria-hidden":"true",onClick:C?n:void 0,className:"fixed inset-0 bg-gray-8 opacity-60"})}),null===k||void 0===k?void 0:k.map((function(e,t){return e?(0,a.jsx)(l.u.Child,{as:o.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:e},"prefix-child-".concat(t)):null})),(0,a.jsx)(l.u.Child,{as:o.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:(0,a.jsxs)("div",{className:(0,s.yI)("my-8 inline-block min-w-full transform overflow-hidden rounded-[13px] p-5 text-left transition-all",u.Cj.bgOverlay3,(0,r.Z)({"md:min-w-[420px]":!(null===v||void 0===v?void 0:v.includes("md:min-w-"))},u.eq.modal,!E),v),children:[i?(0,a.jsxs)("div",{className:(0,s.yI)("flex justify-between",m),children:[(0,a.jsx)("h3",{className:(0,s.yI)("text-lg font-medium",h),children:i}),g&&w&&(0,a.jsx)("button",{onClick:n,className:(0,s.yI)("cursor-pointer rounded transition-all",u.Cj.fill3Hover),children:(0,a.jsx)(d.F,{className:"h-6 w-6 text-gray-6 dark:text-dark-gray-6"})})]}):(0,a.jsx)(a.Fragment,{children:g&&(0,a.jsx)("button",{onClick:n,className:(0,s.yI)("cursor-pointer rounded transition-all","absolute top-0 right-0 m-5 z-modal"),children:(0,a.jsx)(d.F,{className:"h-6 w-6 text-gray-6 dark:text-dark-gray-6"})})}),f]})})]})})})}},86823:function(e,t,n){n.d(t,{u:function(){return m}});var r=n(14924),a=n(10253),l=n(85893),o=n(67294),i=n(11163),c=n(94312),s=n(7649),u=n(51797),d=n(22177),f=n(25398),p=n(7030),v=n(50632),m=function(e){var t,n=e.link,m=e.text,h=e.copiedText,x=e.needSignedIn,g=e.onClick,y=(0,i.useRouter)(),w=(0,v.U)().data,b=(null!==(t=null===w||void 0===w?void 0:w.userStatus)&&void 0!==t?t:{}).isSignedIn,C=(0,a.Z)((0,c.c)(n,{successDuration:3e3}),2),j=C[0],N=C[1],S=(0,o.useCallback)((function(){!x||b?(N(),null===g||void 0===g||g()):y.push(s.Hb.signIn())}),[b,x,g,y,N]);return(0,l.jsxs)(f.z,{className:(0,u.yI)("rounded-lg px-4 py-2",d.Cj.label1,d.Cj.fill4,d.Cj.fill3Hover),onClick:S,children:[(0,l.jsx)(p.v,{className:"mr-1.5 h-4 w-4"}),(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsx)("span",{className:(0,u.yI)((0,r.Z)({},"invisible",j)),children:m}),(0,l.jsx)("span",{className:(0,u.yI)("absolute top-0 left-1/2 translate-x-[-50%]",(0,r.Z)({},"invisible",!j)),children:h})]})]})}},31940:function(e,t,n){n.d(t,{E:function(){return s}});var r=n(85893),a=(n(67294),n(51797)),l=n(22177),o=n(25398),i=n(54577),c=n(62611),s=function(e){var t=e.link,n=e.text,s=e.shareTitle,u=e.shareDescription,d=e.needSignedIn,f=e.onClickShare;return(0,r.jsx)(i.T,{panelClassName:(0,a.yI)(l.Cj.bgLayer2),useHover:!0,showLabel:!1,link:t,title:s,description:u,arrowSize:0,trigger:(0,r.jsxs)(o.z,{className:(0,a.yI)("rounded-lg px-4 py-2",l.Cj.label1,l.Cj.fill4,l.Cj.fill3Hover),children:[(0,r.jsx)(c.Q,{className:"mr-1.5 h-4 w-4"}),n]}),onClickShare:f,inset:8,needSignedIn:d})}},43123:function(e,t,n){n.d(t,{Q:function(){return l}});var r=n(56235),a=n(88525),l=function(){return(0,a.lZH)(r.f6,void 0,{select:function(e){return{stripePublicKey:null===e||void 0===e?void 0:e.stripePublicKey}}})}},50077:function(e,t,n){n.d(t,{E:function(){return o}});var r=n(26042),a=n(69396),l=n(85893),o=n(67294).forwardRef((function(e,t){return(0,l.jsx)("svg",(0,a.Z)((0,r.Z)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"currentColor",ref:t},e),{children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M18.586 13H3a1 1 0 110-2h15.586L12 4.414A1 1 0 0113.414 3l8.293 8.293a.997.997 0 01-.003 1.417L13.414 21A1 1 0 0112 19.586L18.586 13z",clipRule:"evenodd"})}))}))},66360:function(e,t,n){n.d(t,{N:function(){return o}});var r=n(26042),a=n(69396),l=n(85893),o=n(67294).forwardRef((function(e,t){return(0,l.jsx)("svg",(0,a.Z)((0,r.Z)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"currentColor",ref:t},e),{children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M9.688 15.898l-3.98-3.98a1 1 0 00-1.415 1.414L8.98 18.02a1 1 0 001.415 0L20.707 7.707a1 1 0 00-1.414-1.414l-9.605 9.605z",clipRule:"evenodd"})}))}))},7030:function(e,t,n){n.d(t,{v:function(){return o}});var r=n(26042),a=n(69396),l=n(85893),o=n(67294).forwardRef((function(e,t){return(0,l.jsx)("svg",(0,a.Z)((0,r.Z)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"currentColor",ref:t},e),{children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M11.3 8.3H19a3 3 0 013 3V19a3 3 0 01-3 3h-7.7a3 3 0 01-3-3v-7.7a3 3 0 013-3zm0 2a1 1 0 00-1 1V19a1 1 0 001 1H19a1 1 0 001-1v-7.7a1 1 0 00-1-1h-7.7zm-5.6 3.4a1 1 0 110 2h-.9A2.8 2.8 0 012 12.9V4.8A2.8 2.8 0 014.8 2h8.1a2.8 2.8 0 012.8 2.8v.9a1 1 0 11-2 0v-.9a.8.8 0 00-.8-.8H4.8a.8.8 0 00-.8.8v8.1a.8.8 0 00.8.8h.9z",clipRule:"evenodd"})}))}))},67331:function(e,t,n){n.d(t,{S:function(){return o}});var r=n(26042),a=n(69396),l=n(85893),o=n(67294).forwardRef((function(e,t){return(0,l.jsx)("svg",(0,a.Z)((0,r.Z)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"currentColor",ref:t},e),{children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M13 11h7a1 1 0 110 2h-7v7a1 1 0 11-2 0v-7H4a1 1 0 110-2h7V4a1 1 0 112 0v7z",clipRule:"evenodd"})}))}))},2740:function(e,t,n){n.d(t,{h:function(){return g}});var r=n(67294),a=n(73935),l=n(12351),o=n(16723),i=n(31438),c=n(82180),s=n(23784),u=n(51074),d=n(81021),f=n(43393);let p=r.Fragment,v=(0,l.yV)((function(e,t){let n=e,v=(0,r.useRef)(null),m=(0,s.T)((0,s.h)((e=>{v.current=e})),t),x=(0,u.i)(v),g=function(e){let t=(0,i.n)(),n=(0,r.useContext)(h),a=(0,u.i)(e),[l,o]=(0,r.useState)((()=>{if(!t&&null!==n||f.s)return null;let e=null==a?void 0:a.getElementById("headlessui-portal-root");if(e)return e;if(null===a)return null;let r=a.createElement("div");return r.setAttribute("id","headlessui-portal-root"),a.body.appendChild(r)}));return(0,r.useEffect)((()=>{null!==l&&(null!=a&&a.body.contains(l)||null==a||a.body.appendChild(l))}),[l,a]),(0,r.useEffect)((()=>{t||null!==n&&o(n.current)}),[n,o,t]),l}(v),[y]=(0,r.useState)((()=>{var e;return f.s?null:null!=(e=null==x?void 0:x.createElement("div"))?e:null})),w=(0,c.H)(),b=(0,r.useRef)(!1);return(0,o.e)((()=>{if(b.current=!1,g&&y)return g.contains(y)||(y.setAttribute("data-headlessui-portal",""),g.appendChild(y)),()=>{b.current=!0,(0,d.Y)((()=>{var e;!b.current||!g||!y||(g.removeChild(y),g.childNodes.length<=0&&(null==(e=g.parentElement)||e.removeChild(g)))}))}}),[g,y]),w&&g&&y?(0,a.createPortal)((0,l.sY)({ourProps:{ref:m},theirProps:n,defaultTag:p,name:"Portal"}),y):null})),m=r.Fragment,h=(0,r.createContext)(null),x=(0,l.yV)((function(e,t){let{target:n,...a}=e,o={ref:(0,s.T)(t)};return r.createElement(h.Provider,{value:n},(0,l.sY)({ourProps:o,theirProps:a,defaultTag:m,name:"Popover.Group"}))})),g=Object.assign(v,{Group:x})},31438:function(e,t,n){n.d(t,{O:function(){return o},n:function(){return l}});var r=n(67294);let a=(0,r.createContext)(!1);function l(){return(0,r.useContext)(a)}function o(e){return r.createElement(a.Provider,{value:e.force},e.children)}},52300:function(e,t,n){n.d(t,{Jx:function(){return I},cv:function(){return j}});var r=n(48764).Buffer;const a="function"===typeof atob,l="function"===typeof btoa,o="function"===typeof r,i="function"===typeof TextDecoder?new TextDecoder:void 0,c="function"===typeof TextEncoder?new TextEncoder:void 0,s=Array.prototype.slice.call("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="),u=(e=>{let t={};return e.forEach(((e,n)=>t[e]=n)),t})(s),d=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,f=String.fromCharCode.bind(String),p="function"===typeof Uint8Array.from?Uint8Array.from.bind(Uint8Array):e=>new Uint8Array(Array.prototype.slice.call(e,0)),v=e=>e.replace(/=/g,"").replace(/[+\/]/g,(e=>"+"==e?"-":"_")),m=e=>e.replace(/[^A-Za-z0-9\+\/]/g,""),h=e=>{let t,n,r,a,l="";const o=e.length%3;for(let i=0;i<e.length;){if((n=e.charCodeAt(i++))>255||(r=e.charCodeAt(i++))>255||(a=e.charCodeAt(i++))>255)throw new TypeError("invalid character found");t=n<<16|r<<8|a,l+=s[t>>18&63]+s[t>>12&63]+s[t>>6&63]+s[63&t]}return o?l.slice(0,o-3)+"===".substring(o):l},x=l?e=>btoa(e):o?e=>r.from(e,"binary").toString("base64"):h,g=o?e=>r.from(e).toString("base64"):e=>{let t=[];for(let n=0,r=e.length;n<r;n+=4096)t.push(f.apply(null,e.subarray(n,n+4096)));return x(t.join(""))},y=e=>{if(e.length<2)return(t=e.charCodeAt(0))<128?e:t<2048?f(192|t>>>6)+f(128|63&t):f(224|t>>>12&15)+f(128|t>>>6&63)+f(128|63&t);var t=65536+1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320);return f(240|t>>>18&7)+f(128|t>>>12&63)+f(128|t>>>6&63)+f(128|63&t)},w=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,b=e=>e.replace(w,y),C=o?e=>r.from(e,"utf8").toString("base64"):c?e=>g(c.encode(e)):e=>x(b(e)),j=(e,t=!1)=>t?v(C(e)):C(e),N=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,S=e=>{switch(e.length){case 4:var t=((7&e.charCodeAt(0))<<18|(63&e.charCodeAt(1))<<12|(63&e.charCodeAt(2))<<6|63&e.charCodeAt(3))-65536;return f(55296+(t>>>10))+f(56320+(1023&t));case 3:return f((15&e.charCodeAt(0))<<12|(63&e.charCodeAt(1))<<6|63&e.charCodeAt(2));default:return f((31&e.charCodeAt(0))<<6|63&e.charCodeAt(1))}},k=e=>e.replace(N,S),A=e=>{if(e=e.replace(/\s+/g,""),!d.test(e))throw new TypeError("malformed base64.");e+="==".slice(2-(3&e.length));let t,n,r,a="";for(let l=0;l<e.length;)t=u[e.charAt(l++)]<<18|u[e.charAt(l++)]<<12|(n=u[e.charAt(l++)])<<6|(r=u[e.charAt(l++)]),a+=64===n?f(t>>16&255):64===r?f(t>>16&255,t>>8&255):f(t>>16&255,t>>8&255,255&t);return a},E=a?e=>atob(m(e)):o?e=>r.from(e,"base64").toString("binary"):A,F=o?e=>p(r.from(e,"base64")):e=>p(E(e).split("").map((e=>e.charCodeAt(0)))),D=o?e=>r.from(e,"base64").toString("utf8"):i?e=>i.decode(F(e)):e=>k(E(e)),T=e=>m(e.replace(/[-_]/g,(e=>"-"==e?"+":"/"))),I=e=>D(T(e))},29732:function(e,t){t.Z=function(e){for(var t=-1,n=null==e?0:e.length,r=0,a=[];++t<n;){var l=e[t];l&&(a[r++]=l)}return a}}}]);