(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8008],{20640:function(e,t,l){"use strict";var n=l(11742),r={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var l,a,i,s,o,c,d=!1;t||(t={}),l=t.debug||!1;try{if(i=n(),s=document.createRange(),o=document.getSelection(),(c=document.createElement("span")).textContent=e,c.ariaHidden="true",c.style.all="unset",c.style.position="fixed",c.style.top=0,c.style.clip="rect(0, 0, 0, 0)",c.style.whiteSpace="pre",c.style.webkitUserSelect="text",c.style.MozUserSelect="text",c.style.msUserSelect="text",c.style.userSelect="text",c.addEventListener("copy",(function(n){if(n.stopPropagation(),t.format)if(n.preventDefault(),"undefined"===typeof n.clipboardData){l&&console.warn("unable to use e.clipboardData"),l&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var a=r[t.format]||r.default;window.clipboardData.setData(a,e)}else n.clipboardData.clearData(),n.clipboardData.setData(t.format,e);t.onCopy&&(n.preventDefault(),t.onCopy(n.clipboardData))})),document.body.appendChild(c),s.selectNodeContents(c),o.addRange(s),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");d=!0}catch(u){l&&console.error("unable to copy using execCommand: ",u),l&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),d=!0}catch(u){l&&console.error("unable to copy using clipboardData: ",u),l&&console.error("falling back to prompt"),a=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(a,e)}}finally{o&&("function"==typeof o.removeRange?o.removeRange(s):o.removeAllRanges()),c&&document.body.removeChild(c),i()}return d}},57530:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/problem-list/[list]",function(){return l(65253)}])},94312:function(e,t,l){"use strict";l.d(t,{c:function(){return s}});var n=l(67294),r=l(20640),a=l.n(r),i=l(15214);function s(e,t){var l=(0,n.useState)(!1),r=l[0],s=l[1],o=t&&t.successDuration;return(0,n.useEffect)((function(){if(r&&o){var e=setTimeout((function(){s(!1)}),o);return function(){clearTimeout(e)}}}),[r,o]),[r,function(){var l,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,r=n||e;r.length>=80&&(r+=(0,i.Ou)(null!==(l=null===t||void 0===t?void 0:t.copyright)&&void 0!==l?l:null));var o=a()(r);s(o)}]}},15214:function(e,t,l){"use strict";l.d(t,{Of:function(){return d},Ou:function(){return s},d1:function(){return u},yT:function(){return c}});var n=l(85893),r=l(29732),a=l(67294),i=l(75117),s=function(e){return e?"\n\n"+(0,r.Z)([(null===e||void 0===e?void 0:e.author)&&"\u4f5c\u8005\uff1a".concat(e.author),(null===e||void 0===e?void 0:e.link)&&"\u94fe\u63a5\uff1a".concat(e.link),"\u6765\u6e90\uff1a\u529b\u6263\uff08LeetCode\uff09","\u8457\u4f5c\u6743\u5f52\u4f5c\u8005\u6240\u6709\u3002\u5546\u4e1a\u8f6c\u8f7d\u8bf7\u8054\u7cfb\u4f5c\u8005\u83b7\u5f97\u6388\u6743\uff0c\u975e\u5546\u4e1a\u8f6c\u8f7d\u8bf7\u6ce8\u660e\u51fa\u5904\u3002"]).join("\n"):""},o=(0,a.createContext)(null),c=function(e){var t=e.value,l=e.children;return(0,n.jsx)(o.Provider,{value:i.ob?t:null,children:l})},d=function(){return(0,a.useContext)(o)},u=function(e){return(0,a.useCallback)((function(t){if(t.clipboardData&&i.ob){var l,n,r=null!==(n=null===(l=getSelection())||void 0===l?void 0:l.toString())&&void 0!==n?n:"";r.length>=80&&(t.clipboardData.setData("text/plain",r+s(e)),t.preventDefault())}}),[e])}},36733:function(e,t,l){"use strict";l.d(t,{z:function(){return i}});var n=l(26042),r=l(69396),a=l(85893),i=l(67294).forwardRef((function(e,t){return(0,a.jsx)("svg",(0,r.Z)((0,n.Z)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"currentColor",ref:t},e),{children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M11.394 2.074a2.5 2.5 0 011.212 0c.723.181 1.185.735 1.526 1.262.342.528.703 1.259 1.131 2.127l.392.795c.302.61.348.667.386.7a.498.498 0 00.086.063c.043.025.11.052.786.15l.877.128c.958.139 1.764.256 2.372.418.606.162 1.276.43 1.671 1.062a2.5 2.5 0 01.375 1.152c.052.744-.333 1.354-.728 1.841-.397.489-.98 1.058-1.674 1.733l-.634.619c-.489.476-.527.537-.548.583a.5.5 0 00-.033.101c-.01.05-.015.122.1.794l.15.873c.164.954.302 1.758.335 2.386.034.627-.014 1.346-.493 1.918-.263.314-.6.558-.98.712-.692.279-1.39.102-1.976-.124-.588-.226-1.309-.605-2.165-1.056l-.785-.412c-.603-.317-.674-.335-.724-.34a.497.497 0 00-.106 0c-.05.005-.12.023-.724.34l-.785.412c-.856.45-1.577.83-2.165 1.056-.585.226-1.284.403-1.976.124a2.5 2.5 0 01-.98-.712c-.48-.572-.527-1.291-.493-1.918.033-.628.171-1.431.335-2.386l.15-.873c.115-.672.11-.745.1-.794a.5.5 0 00-.033-.101c-.02-.046-.06-.107-.548-.583l-.634-.619c-.694-.675-1.277-1.244-1.674-1.733-.395-.487-.78-1.097-.728-1.841a2.5 2.5 0 01.375-1.152c.395-.633 1.065-.9 1.67-1.062.61-.162 1.415-.28 2.373-.418l.877-.128c.675-.098.743-.125.786-.15a.5.5 0 00.086-.062c.038-.034.084-.09.386-.701l.392-.795c.428-.868.789-1.599 1.131-2.127.341-.527.803-1.08 1.526-1.262z",clipRule:"evenodd"})}))}))},94589:function(e,t,l){"use strict";l.d(t,{I:function(){return i}});var n=l(26042),r=l(69396),a=l(85893),i=l(67294).forwardRef((function(e,t){return(0,a.jsx)("svg",(0,r.Z)((0,n.Z)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"currentColor",ref:t},e),{children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M11.394 2.074a2.5 2.5 0 011.212 0c.723.181 1.185.735 1.526 1.262.342.528.703 1.259 1.131 2.127l.392.795c.302.61.348.667.386.7a.502.502 0 00.086.063c.043.025.11.052.786.15l.877.128c.958.139 1.764.256 2.372.418.606.162 1.276.43 1.671 1.062a2.5 2.5 0 01.375 1.152c.052.744-.333 1.354-.728 1.841-.397.489-.98 1.058-1.674 1.733l-.634.619c-.489.476-.527.537-.548.583a.506.506 0 00-.033.101c-.01.05-.015.122.1.794l.15.873c.164.954.302 1.758.335 2.386.034.627-.014 1.346-.493 1.918a2.5 2.5 0 01-.98.712c-.692.279-1.39.102-1.976-.124-.588-.226-1.309-.605-2.165-1.056l-.785-.412c-.603-.317-.674-.335-.724-.34a.496.496 0 00-.106 0c-.05.005-.12.023-.724.34l-.785.412c-.856.45-1.577.83-2.165 1.056-.585.226-1.284.403-1.976.124a2.501 2.501 0 01-.98-.712c-.48-.572-.527-1.291-.493-1.918.033-.628.171-1.431.335-2.386l.15-.873c.115-.672.11-.745.1-.794a.5.5 0 00-.033-.101c-.02-.046-.06-.107-.548-.583l-.634-.619c-.694-.675-1.277-1.244-1.674-1.733-.395-.487-.78-1.097-.728-1.841a2.5 2.5 0 01.375-1.152c.395-.633 1.065-.9 1.67-1.062.61-.162 1.415-.28 2.373-.418l.877-.128c.675-.098.743-.125.786-.15a.5.5 0 00.086-.062c.038-.034.084-.09.386-.701l.392-.795c.428-.868.789-1.599 1.131-2.127.341-.527.803-1.08 1.526-1.262zm.493 1.939c-.023.013-.132.089-.34.41-.271.418-.58 1.042-1.045 1.982l-.364.738-.05.103c-.213.434-.428.872-.788 1.197a2.5 2.5 0 01-.43.312c-.42.241-.903.31-1.381.379a52.6 52.6 0 00-.114.016l-.815.119c-1.037.15-1.725.252-2.207.38-.37.099-.476.18-.495.197a.5.5 0 00-.07.216c.005.025.044.153.285.45.314.386.811.874 1.562 1.605l.59.575.082.08c.346.336.697.676.895 1.118.072.162.127.332.164.506.1.474.016.955-.067 1.431l-.02.113-.138.811c-.178 1.033-.294 1.72-.32 2.217-.02.382.023.508.034.532.05.058.113.103.183.133.026.003.16.006.516-.132.465-.18 1.082-.502 2.01-.99l.728-.382.102-.054c.427-.226.859-.454 1.34-.505.177-.02.355-.02.532 0 .481.051.913.28 1.34.505l.102.054.728.383c.928.487 1.545.81 2.01.99.357.137.49.134.516.13a.499.499 0 00.183-.132c.01-.024.055-.15.034-.532-.026-.497-.142-1.184-.32-2.217l-.139-.81-.02-.114c-.082-.476-.166-.957-.066-1.431.037-.174.092-.344.164-.506.198-.442.549-.782.895-1.118a20.8 20.8 0 00.083-.08l.59-.575c.75-.731 1.247-1.219 1.561-1.606.241-.296.28-.424.285-.45a.5.5 0 00-.07-.215c-.02-.017-.126-.098-.495-.196-.482-.129-1.17-.23-2.207-.381l-.815-.119-.113-.016c-.479-.068-.963-.138-1.382-.379a2.5 2.5 0 01-.43-.312c-.36-.325-.575-.763-.788-1.197a31.757 31.757 0 00-.05-.103l-.364-.738c-.464-.94-.774-1.564-1.045-1.982-.208-.321-.317-.397-.34-.41a.5.5 0 00-.226 0zm8.326 6.044v.002-.002zm-3.246 9.575h-.002.002zm-9.934 0h.002-.002zm-3.246-9.575v.002-.002z",clipRule:"evenodd"})}))}))},65253:function(e,t,l){"use strict";l.r(t),l.d(t,{__N_SSG:function(){return ke},default:function(){return De}});var n=l(26042),r=l(85893),a=l(94184),i=l.n(a),s=l(19601),o=l(11163),c=l(67294),d=l(77836),u=l(6732),f=l(22177),p=l(73986),m=l(2271),v=l(72004),g=l(23860),h=l(8991),x=function(e){return(0,r.jsx)("button",{className:i()("ml-2 inline-flex items-center px-0 py-0",f.Cj.label3,e.className),onClick:e.onClick,children:e.children})},b=function(e){var t=e.list,l=(0,s.$G)("common").t,n=(0,c.useState)(!1),a=n[0],o=n[1];return(0,c.useEffect)((function(){o(!1)}),[t,t.description]),(0,r.jsx)("div",{className:i()("relative","w-full",{"pb-4":a}),children:a?(0,r.jsxs)("div",{className:i()("whitespace-pre-wrap text-[14px] leading-[20px]",f.Cj.label2),children:[t.description,(0,r.jsxs)(x,{onClick:function(){return o(!1)},className:"float-right",children:[l("collapse"),(0,r.jsx)(v.D,{})]})]}):(0,r.jsx)(u.Z,{lines:2,ellipsis:(0,r.jsxs)(r.Fragment,{children:["...",(0,r.jsxs)(x,{onClick:function(){return o(!0)},children:[l("expand"),(0,r.jsx)(g.H,{})]})]}),children:(0,r.jsx)("div",{className:i()("whitespace-pre-wrap text-[14px] leading-[20px]",f.Cj.label2),children:t.description})})})},j=function(e){var t=e.list;return(0,r.jsxs)("div",{className:"grid grid-cols-1",children:[(0,r.jsxs)("div",{className:"flex space-x-6 pb-6 md:pb-4",children:[(0,r.jsx)("div",{children:(0,r.jsx)(p.y,{className:"w-[88px] max-w-[88px] rounded-lg object-cover",src:t.coverUrl||h.Z,alt:t.name})}),(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsx)("div",{className:"pb-0.5 text-[22px] font-semibold leading-[27px] line-clamp-1",title:t.name,children:t.name}),(0,r.jsx)("div",{className:i()(f.Cj.label2),children:t.creator.realName}),(0,r.jsx)("div",{className:"space-x-2.5 pt-3.5 md:pb-4",children:t.tags&&t.tags.filter((function(e){return!!e})).map((function(e){return(0,r.jsx)(m.V,{children:e.name},e.slug)}))}),(0,r.jsx)("div",{className:"hidden md:block",children:(0,r.jsx)(b,{list:t})})]})]}),(0,r.jsx)("div",{className:"pb-3 md:hidden",children:(0,r.jsx)(b,{list:t})})]})},y=l(14924),C=l(69396),w=l(10253),S=l(29815),T=l(81604),F=l(50632),N=l(13656),k=l(22116),D=l(19085),A=l(44916),Z=l(23874),E=l(9264),R=l(39449),L=l(75117);function z(e,t,l){var n,r,a=null!==(r=null===(n=t.find((function(t){return t.difficulty.toLowerCase()===e.toLowerCase()})))||void 0===n?void 0:n.count)&&void 0!==r?r:0;return l&&a/l}function H(e,t){var l,n;return null!==(n=null===(l=t.find((function(t){return t.difficulty.toLowerCase()===e.toLowerCase()})))||void 0===l?void 0:l.count)&&void 0!==n?n:0}var _="bg-olive dark:bg-dark-olive",B="bg-yellow dark:bg-dark-yellow",M="bg-pink dark:bg-dark-pink",O=function(e){var t=e.progresses;return(0,r.jsxs)("div",{className:"relative h-2 w-full max-w-xl overflow-hidden rounded-full",children:[(0,r.jsx)("div",{className:i()("absolute h-full w-full",f.Cj.fill3)}),(0,r.jsx)("div",{className:"absolute flex h-full w-full",children:t.map((function(e){var t,l=e.percentage,n=e.label,a=e.completed,s=e.color,o=e.difficulty,c=e.roundedLeft,d=e.roundedRight;return(0,r.jsx)(A.ua7,{label:"".concat(n,": ").concat(a),children:(0,r.jsx)("div",{className:i()("h-full","transition-all duration-300 ease-out",(t={},(0,y.Z)(t,_,"green"===s),(0,y.Z)(t,B,"yellow"===s),(0,y.Z)(t,M,"red"===s),(0,y.Z)(t,"z-base-3","EASY"===o),(0,y.Z)(t,"z-base-2","MEDIUM"===o),(0,y.Z)(t,"z-base-1","HARD"===o),(0,y.Z)(t,"rounded-tl rounded-bl",c),(0,y.Z)(t,"rounded-tr rounded-br",d),t)),style:{width:"".concat(100*l,"%")}})},o)}))})]})},U=L.ob?function(e){var t,l=e.listSlug,n=(0,s.$G)(["question-list","featured-list"]).t,a=(0,R.n)({categorySlug:"",filters:{listId:l},limit:1e3}).data,o=null!==(t=null===a||void 0===a?void 0:a.questions.filter((function(e){return e.status===Z.lrT.Ac})).length)&&void 0!==t?t:0,c=(null===a||void 0===a?void 0:a.total)||0,d=c?o/c:0;return l?(0,r.jsxs)("div",{className:"relative flex w-full items-center",children:[(0,r.jsxs)("div",{className:i()(f.Cj.label2,"mr-2"),children:[(0,r.jsx)("span",{className:"mr-2 leading-3",children:n("featured-list:problemsSolved")}),(0,r.jsxs)("span",{children:[o,"/",c]})]}),(0,r.jsx)("div",{className:"relative w-17.5",children:(0,r.jsx)("div",{className:i()("relative h-2 overflow-hidden rounded-full",f.Cj.fill3),children:(0,r.jsx)("div",{className:i()("absolute h-full",f.Cj.bgGreenStandard),style:{width:"".concat(100*d,"%")}})})})]}):null}:function(e){var t,l=e.listSlug,n=null===(t=(0,E.p)().data)||void 0===t?void 0:t.find((function(e){return l&&e.idHash===l})),a=null===n||void 0===n?void 0:n.acStats,o=(null===n||void 0===n?void 0:n.questionCount)||0,d=(0,s.$G)(["question-list","featured-list"]).t,u=(0,c.useMemo)((function(){if(!a)return[];var e=z("EASY",a,o),t=H("EASY",a),l=z("MEDIUM",a,o),n=H("MEDIUM",a),r=z("HARD",a,o),i=H("HARD",a);return[{label:d("difficulty.".concat(Z.FdC.Easy.toLowerCase())),percentage:e,difficulty:Z.FdC.Easy,completed:t,color:"green",roundedLeft:!0,roundedRight:!n&&!i},{label:d("difficulty.".concat(Z.FdC.Medium.toLowerCase())),percentage:l,difficulty:Z.FdC.Medium,completed:n,color:"yellow",roundedLeft:!t,roundedRight:!i},{label:d("difficulty.".concat(Z.FdC.Hard.toLowerCase())),percentage:r,difficulty:Z.FdC.Hard,completed:i,color:"red",roundedLeft:!t&&!n,roundedRight:!0}]}),[a,o,d]),p=null===a||void 0===a?void 0:a.find((function(e){return"All"===e.difficulty}));return l?(0,r.jsxs)("div",{className:"relative flex w-full items-center",children:[(0,r.jsxs)("div",{className:i()(f.Cj.label2,"mr-2"),children:[(0,r.jsx)("span",{className:"mr-2 leading-3",children:d("featured-list:problemsSolved")}),(0,r.jsxs)("span",{children:[(null===p||void 0===p?void 0:p.count)||0,"/",o]})]}),(0,r.jsx)("div",{className:"relative w-17.5",children:(0,r.jsx)(O,{progresses:u})})]}):null},I=l(66827),Q=l(59589),P=l(25810),q=l(76486),G=l(21570),$=L.Oo?646:600,Y=function(e){var t,l=e.difficultyFilter,n=e.setDifficultyFilter,a=e.statusFilter,i=e.setStatusFilter,s=e.topicTagsFilter,o=e.setTopicTagsFilter,d=e.companyTagsFilter,u=e.setCompanyTagsFilter,f=e.premiumQuestionsFilter,p=e.setPremiumQuestionsFilter,m=e.showTopicTags,v=e.setShowTopicTags,g=e.width,h=e.showCompanyTags,x=e.setShowCompanyTags,b=e.topicTagsData,j=e.listSlug,y=(0,k.F)({enabled:!b}).data,C=null!==b&&void 0!==b?b:y,w=null===(t=(0,D.S)())||void 0===t?void 0:t.data,S=function(){return i(void 0)},T=function(){return n(void 0)},F=(0,c.useCallback)((function(){p(!1)}),[p]);return(0,r.jsxs)("div",{className:"mb-3 flex flex-col",children:[g>=$?(0,r.jsxs)("div",{className:"flex space-x-2.5",children:[(0,r.jsx)(U,{listSlug:j}),(0,r.jsx)(I.z,{selected:l,setSelected:n}),(0,r.jsx)(Q.r,{selected:a,setSelected:i}),(0,r.jsx)(P.D,{tags:C||[],selectedTopics:s,setSelectedTopics:o,selectedCompanies:d,setSelectedCompanies:u,tagTypesWithTags:w}),(0,r.jsx)(G._,{showTopicTags:m,setShowTopicTags:v,premiumQuestionsFilter:f,setPremiumQuestionsFilter:p,showCompanyTags:h,setShowCompanyTags:x})]}):(0,r.jsxs)("div",{className:"flex flex-col space-y-2.5",children:[(0,r.jsxs)("div",{className:"mt-2 flex justify-end space-x-2.5",children:[(0,r.jsx)(U,{listSlug:j}),(0,r.jsx)(G._,{showTopicTags:m,setShowTopicTags:v,premiumQuestionsFilter:f,setPremiumQuestionsFilter:p,showCompanyTags:h,setShowCompanyTags:x})]}),(0,r.jsxs)("div",{className:"flex justify-between md:justify-end md:space-x-3",children:[(0,r.jsx)(I.z,{selected:l,setSelected:n}),(0,r.jsx)(Q.r,{selected:a,setSelected:i}),(0,r.jsx)(P.D,{tags:C||[],selectedTopics:s,setSelectedTopics:o,selectedCompanies:d,setSelectedCompanies:u,tagTypesWithTags:w})]})]}),(0,r.jsx)(q.z,{difficultyFilter:l,statusFilter:a,topicTagsFilter:s,companyTagsFilter:d,clearDifficultyFilter:T,clearStatusFilter:S,clearTopicTagFilter:function(e){s.delete(e),o(s)},clearCompanyTagFilter:function(e){d.delete(e),u(d)},clearAll:function(){S(),T(),o(new Map),u(new Map),F()}})]})},W=l(56848),K=l(96784),V=l(25472),X=l(78418),J=l(32354),ee=function(e){var t,l,a,i=e.slug,s=e.questionsData,o=e.topicTagsData,d=e.listSlug,u=e.setFilters,f=(0,w.Z)((0,T.s)("sorting"),2),p=f[0],m=f[1],v=(0,c.useMemo)((function(){return J.Z.deserialise(p)}),[p]),g=(0,W.S)(o),h=(0,c.useState)(0),x=h[0],b=h[1],j=(0,c.useRef)(null),k=(0,c.useMemo)((function(){var e;return Object.entries({orderBy:v[0].orderBy,sortOrder:v[0].sortOrder,difficulty:g.difficultyFilter,status:g.statusFilter,searchKeywords:g.searchQuery,tags:(0,S.Z)(g.topicTagsFilter.keys()),companies:(0,S.Z)(g.companyTagsFilter.keys()),listId:d||(null===(e=g.listFilter)||void 0===e?void 0:e.id),premiumOnly:g.premiumQuestionsFilter}).filter((function(e){var t=(0,w.Z)(e,2)[1];return Array.isArray(t)?t.length:!!t})).reduce((function(e,t){var l=(0,w.Z)(t,2),r=l[0],a=l[1];return(0,C.Z)((0,n.Z)({},e),(0,y.Z)({},r,a))}),{})}),[v,g.difficultyFilter,g.statusFilter,g.searchQuery,g.topicTagsFilter,g.companyTagsFilter,null===(t=g.listFilter)||void 0===t?void 0:t.id,g.premiumQuestionsFilter,d]);(0,c.useEffect)((function(){u(k)}),[k,u]);var D=(0,F.U)().data,A=Boolean(null===D||void 0===D||null===(l=D.userStatus)||void 0===l?void 0:l.isPremium),Z=(0,K.d)(),E=Z.showTopicTags,R=Z.showCompanyTags,L={isPremium:A,showTopicTags:E,topicTagsFilter:g.topicTagsFilter,username:null===D||void 0===D||null===(a=D.userStatus)||void 0===a?void 0:a.username,showCompanyTags:R,listSlug:d},z=(0,c.useCallback)((function(e){m(J.Z.serialise(e))}),[m]),H=(0,V.H)(L),_=(0,N.m)().data,B=g.page,M=g.setPage;return(0,r.jsx)(X.p,{page:B,setPage:M,slug:i,questionsData:s,topicTagsData:o,setSorting:z,filters:k,columns:H,handleSetWidth:function(e){b(e)},width:x,ref:j,showCompanyTags:R,tableClassName:"bg-paper dark:bg-dark-paper",FilterComponent:(0,r.jsx)(Y,(0,C.Z)((0,n.Z)({},g,Z),{listData:_,topicTagsData:o,width:x,listSlug:d}))})},te=l(11459),le=l(37641),ne=l(94312),re=l(1452),ae=l(62611);function ie(e){var t=e.url,l=(0,c.useRef)((0,le.jU)()?window.location.href:""),n=(0,w.Z)((0,ne.c)(l.current,{successDuration:1e3}),2),a=n[0],s=n[1];return(0,c.useEffect)((function(){l.current=window.location.href}),[]),(0,r.jsx)("div",{className:i()("flex cursor-pointer items-center space-x-2.5 whitespace-nowrap rounded px-3 py-1.5",f.Cj.labelBlueStandard,f.Cj.bgBlue0,f.Cj.labelBlueStandardHover,"hover:bg-blue-1 dark:hover:bg-dark-blue-1"),onClick:function(){return s(t||l.current)},children:a?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(re.A,{}),(0,r.jsx)("span",{children:"Copied!"})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(ae.Q,{}),(0,r.jsx)("span",{children:"Share"})]})})}var se=l(54577),oe=l(5152),ce=l.n(oe),de=l(25398),ue=l(36733),fe=l(94589),pe=ce()((function(){return l.e(9819).then(l.bind(l,39819)).then((function(e){return e.FunctionReminder}))}),{loadableGenerated:{webpack:function(){return[39819]}},ssr:!1}),me=function(e){var t=e.collected,l=e.loading,n=e.onToggle,a=i()("px-3 py-1.5 rounded space-x-2.5 flex items-center cursor-pointer whitespace-nowrap font-normal",f.Cj.labelBlueStandard,f.Cj.bgBlue0,f.Cj.labelBlueStandardHover,"hover:bg-blue-1 dark:hover:bg-dark-blue-1");return(0,r.jsx)(pe,{content:(0,r.jsx)("span",{children:"\u9898\u5355\u53ef\u4ee5\u6536\u85cf\u4e86\uff0c\u4f60\u53ef\u4ee5\u5728 \u201c\u6536\u85cf\u5939-\u9898\u5355\u201d \u4e2d\u627e\u5230\u6536\u85cf\u7684\u9898\u5355"}),storageKey:"problem-list-favor",children:(0,r.jsxs)(de.z,{disabled:l,variant:"plain",className:a,onClick:n,children:[t?(0,r.jsx)(ue.z,{className:f.Cj.labelBrandOrange}):(0,r.jsx)(fe.I,{}),(0,r.jsx)("span",{className:"ml-2",children:t?"\u5df2\u6536\u85cf":"\u6536\u85cf"})]})})},ve=function(e){var t=e.onRandomQuestionClick,l=e.onToggleCollectClick,n=e.creatorSlug,a=e.loading,o=e.collected,d=(0,s.$G)("featured-list").t,u=(0,F.U)().data,p=(0,c.useMemo)((function(){var e;return(null===u||void 0===u||null===(e=u.userStatus)||void 0===e?void 0:e.userSlug)===n}),[u,n]),m=i()("px-3 py-1.5 rounded space-x-2.5 flex items-center cursor-pointer whitespace-nowrap",f.Cj.labelBlueStandard,f.Cj.bgBlue0,f.Cj.labelGreenStandardHover,"hover:bg-blue-1 dark:hover:bg-dark-blue-1");return(0,r.jsxs)("div",{className:"flex justify-center space-x-2.5 md:mb-[71px] md:justify-end",children:[!L.Oo&&!p&&(0,r.jsx)(me,{loading:a,collected:o,onToggle:l}),(0,r.jsxs)("div",{onClick:t,className:m,children:[(0,r.jsx)(te.y,{}),(0,r.jsx)("span",{children:d("pickOne")})]}),L.Oo?(0,r.jsx)(ie,{}):(0,r.jsx)(se.T,{shareRowClassName:i()("gap-3"),panelClassName:i()("px-4"),title:"\u529b\u6263",description:"",className:"font-normal hover:bg-blue-1 dark:hover:bg-dark-blue-1"})]})},ge=function(e){return(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:i()(f.Cj.bgPaper,"fixed bottom-0 left-0 w-full px-4 py-[9px] z-overlay md:hidden"),children:(0,r.jsx)(ve,(0,n.Z)({},e))}),(0,r.jsx)("div",{className:"hidden md:block",children:(0,r.jsx)(ve,(0,n.Z)({},e))})]})},he=l(57501),xe=l(81562),be=l(13690),je=l(7649),ye=l(47568),Ce=l(70655),we=l(29732),Se=l(84945),Te=l(56235),Fe=l(56757),Ne=l(76346),ke=!0;function De(e){var t=e.problemsetQuestionList,l=e.featuredLists,a=e.topicTags,u=(0,s.$G)(["problemset","featured-list"]).t;(0,c.useEffect)((function(){be.z.problemsetPageExposure()}),[]);var p=(0,F.U)().data;(0,le.Nk)(p);var m=(0,o.useRouter)(),v=function(e){var t=(0,w.Z)((0,T.s)("list"),1)[0],l=(0,c.useState)(!1),n=l[0],r=l[1],a=(0,Z.HCL)(Te.f6,{favoriteIdHash:t||""},{enabled:!!t&&!L.Oo,onSuccess:function(e){r(e.favoriteDetail.isFavored)}}),i=a.data,s=a.isLoading,o=(0,c.useMemo)((function(){var l=e.find((function(e){return e.idHash===t}));if(i&&l)l.description=i.favoriteDetail.description,l.tags=i.favoriteDetail.tags||[];else if(null===i||void 0===i?void 0:i.favoriteDetail){var n,r=i.favoriteDetail;return{description:r.description,name:r.name,coverUrl:null!==(n=r.coverUrl)&&void 0!==n?n:"",link:r.link,idHash:r.idHash,creator:r.creator,tags:(0,we.Z)(r.tags).map((function(e){return{name:(null===e||void 0===e?void 0:e.nameTranslated)||(null===e||void 0===e?void 0:e.name),slug:null===e||void 0===e?void 0:e.slug}}))}}return l}),[e,t,i]),d=(0,Z.Rr8)(Te.f6,{onSuccess:function(){Se.y.success("\u5df2\u6536\u85cf"),r(!0)}}),u=d.mutateAsync,f=d.isLoading,p=(0,Z.mcV)(Te.f6,{onSuccess:function(){Se.y.success("\u5df2\u53d6\u6d88\u6536\u85cf"),r(!1)}}),m=p.mutateAsync,v=p.isLoading;return{handleToggleCollectClick:(0,c.useCallback)((0,ye.Z)((function(){return(0,Ce.__generator)(this,(function(e){switch(e.label){case 0:if(!t)return[3,7];e.label=1;case 1:return e.trys.push([1,6,,7]),n?[4,m({favoriteIdHash:t})]:[3,3];case 2:return e.sent(),[3,5];case 3:return[4,u({favoriteIdHash:t})];case 4:e.sent(),e.label=5;case 5:return[3,7];case 6:return e.sent(),[3,7];case 7:return[2]}}))})),[u,m,t,n]),collected:n,selectedList:o,isLoading:s||f||v}}(l),g=v.handleToggleCollectClick,h=v.isLoading,x=v.selectedList,b=v.collected,y=m.query.list,C=(0,c.useRef)({}),S=(0,c.useState)(!1),N=S[0],k=S[1],D=(0,R.n)({categorySlug:"",filters:{listId:null===x||void 0===x?void 0:x.idHash},limit:1e3},{enabled:!L.Oo}).data,A=(0,c.useCallback)((function(){if(!N){if(L.Oo)return k(!0),void(0,Fe.i)({categorySlug:"",filters:(0,n.Z)({listId:null===x||void 0===x?void 0:x.idHash},C.current)}).then((function(e){var t=e.randomQuestion;k(!1),(null===t||void 0===t?void 0:t.titleSlug)&&(window.location.href=je.Hb.questionDetail(t.titleSlug))}));var e,t,l=null!==(e=null===D||void 0===D?void 0:D.questions)&&void 0!==e?e:[],r=null!==(t=l.length)&&void 0!==t?t:0;if(r){var a=l[(0,d.Z)(0,r-1)].titleSlug;window.location.href="/problems/".concat(a,"/")}}}),[N,null===D||void 0===D?void 0:D.questions,null===x||void 0===x?void 0:x.idHash]),E=(0,c.useCallback)((function(e){C.current=e}),[]);return(0,r.jsxs)(xe.A,{sourceType:"problems_page_promote_button",className:i()(f.Cj.bgOverlay1,"md:bg-paper md:dark:bg-dark-paper"),children:[(0,r.jsx)(Ne.p,{title:u("featured-list:meta.title",{title:null===x||void 0===x?void 0:x.name})||u("featured-list:listNotFound"),description:(null===x||void 0===x?void 0:x.description)||u("meta.description"),openGraph:{images:[{url:u("meta.ogImage")}]}}),(0,r.jsxs)("div",{className:"grid grid-cols-4 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6",children:[(0,r.jsx)("div",{className:"col-span-4 md:col-span-2 lg:col-span-3",children:x?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(j,{list:x}),(0,r.jsx)(ee,{questionsData:t,slug:"all",topicTagsData:a,listSlug:y,setFilters:E})]}):(0,r.jsx)("div",{children:u("featured-list:listNotFound")})}),(0,r.jsx)("div",{className:"col-span-4 md:col-span-1",children:(0,r.jsxs)("div",{className:"h-full space-y-4",children:[x&&(0,r.jsx)(ge,{loading:h,collected:b,creatorSlug:x.creator.userSlug,onRandomQuestionClick:A,onToggleCollectClick:g}),(0,r.jsx)(he.Y,{className:"md:sticky md:top-3",listsData:l,selectedList:y})]})})]})]})}},52300:function(e,t,l){"use strict";l.d(t,{Jx:function(){return E},cv:function(){return w}});var n=l(48764).Buffer;const r="function"===typeof atob,a="function"===typeof btoa,i="function"===typeof n,s="function"===typeof TextDecoder?new TextDecoder:void 0,o="function"===typeof TextEncoder?new TextEncoder:void 0,c=Array.prototype.slice.call("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="),d=(e=>{let t={};return e.forEach(((e,l)=>t[e]=l)),t})(c),u=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,f=String.fromCharCode.bind(String),p="function"===typeof Uint8Array.from?Uint8Array.from.bind(Uint8Array):e=>new Uint8Array(Array.prototype.slice.call(e,0)),m=e=>e.replace(/=/g,"").replace(/[+\/]/g,(e=>"+"==e?"-":"_")),v=e=>e.replace(/[^A-Za-z0-9\+\/]/g,""),g=e=>{let t,l,n,r,a="";const i=e.length%3;for(let s=0;s<e.length;){if((l=e.charCodeAt(s++))>255||(n=e.charCodeAt(s++))>255||(r=e.charCodeAt(s++))>255)throw new TypeError("invalid character found");t=l<<16|n<<8|r,a+=c[t>>18&63]+c[t>>12&63]+c[t>>6&63]+c[63&t]}return i?a.slice(0,i-3)+"===".substring(i):a},h=a?e=>btoa(e):i?e=>n.from(e,"binary").toString("base64"):g,x=i?e=>n.from(e).toString("base64"):e=>{let t=[];for(let l=0,n=e.length;l<n;l+=4096)t.push(f.apply(null,e.subarray(l,l+4096)));return h(t.join(""))},b=e=>{if(e.length<2)return(t=e.charCodeAt(0))<128?e:t<2048?f(192|t>>>6)+f(128|63&t):f(224|t>>>12&15)+f(128|t>>>6&63)+f(128|63&t);var t=65536+1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320);return f(240|t>>>18&7)+f(128|t>>>12&63)+f(128|t>>>6&63)+f(128|63&t)},j=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,y=e=>e.replace(j,b),C=i?e=>n.from(e,"utf8").toString("base64"):o?e=>x(o.encode(e)):e=>h(y(e)),w=(e,t=!1)=>t?m(C(e)):C(e),S=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,T=e=>{switch(e.length){case 4:var t=((7&e.charCodeAt(0))<<18|(63&e.charCodeAt(1))<<12|(63&e.charCodeAt(2))<<6|63&e.charCodeAt(3))-65536;return f(55296+(t>>>10))+f(56320+(1023&t));case 3:return f((15&e.charCodeAt(0))<<12|(63&e.charCodeAt(1))<<6|63&e.charCodeAt(2));default:return f((31&e.charCodeAt(0))<<6|63&e.charCodeAt(1))}},F=e=>e.replace(S,T),N=e=>{if(e=e.replace(/\s+/g,""),!u.test(e))throw new TypeError("malformed base64.");e+="==".slice(2-(3&e.length));let t,l,n,r="";for(let a=0;a<e.length;)t=d[e.charAt(a++)]<<18|d[e.charAt(a++)]<<12|(l=d[e.charAt(a++)])<<6|(n=d[e.charAt(a++)]),r+=64===l?f(t>>16&255):64===n?f(t>>16&255,t>>8&255):f(t>>16&255,t>>8&255,255&t);return r},k=r?e=>atob(v(e)):i?e=>n.from(e,"base64").toString("binary"):N,D=i?e=>p(n.from(e,"base64")):e=>p(k(e).split("").map((e=>e.charCodeAt(0)))),A=i?e=>n.from(e,"base64").toString("utf8"):s?e=>s.decode(D(e)):e=>F(k(e)),Z=e=>v(e.replace(/[-_]/g,(e=>"-"==e?"+":"/"))),E=e=>A(Z(e))}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[129,4937,1664,5501,1092,8764,1613,930,1033,6732,4116,2212,2475,8712,2970,3946,5427,6060,6746,5282,4494,9774,2888,179],(function(){return t(22449),t(57530)}));var l=e.O();_N_E=l}]);