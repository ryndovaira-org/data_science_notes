(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3468],{6505:function(e,t,i){"use strict";var n=i(9534),a=i(5893),l=i(1664),r=i.n(l),o=i(5008),s=i.n(o),c=i(6893);t.Z=function(e){var t=e.baseRoute,i=void 0===t?"":t,l=(0,n.Z)(e,["baseRoute"]),o=parseInt(l.currentPage),d=parseInt(l.totalPages);return(0,a.jsx)("nav",{"aria-label":"Pagination",className:"w-full",children:(0,a.jsxs)("div",{className:"grid grid-cols-3 items-center",children:[(0,a.jsx)("div",{className:"justify-self-start",children:o>1&&(0,a.jsx)(r(),{href:"".concat(i).concat(o>2?"/page/"+(o-1):""),children:(0,a.jsxs)("a",{className:"".concat(s().secondary," ").concat(s().small," text-center"),children:[(0,a.jsx)(c.Ao2,{className:"text-xl mr-1 hidden md:block"}),"Newer Posts"]})})}),(0,a.jsxs)("div",{className:"text-sm md:text-base text-slate-500 justify-self-center",children:["Page ",o," of ",d]}),(0,a.jsx)("div",{className:"justify-self-end",children:o<d&&(0,a.jsx)(r(),{href:"".concat(i,"/page/").concat(o+1),children:(0,a.jsxs)("a",{className:"".concat(s().secondary," ").concat(s().small," text-center"),children:["Older Posts",(0,a.jsx)(c.Rgz,{className:"text-xl ml-1 hidden md:block"})]})})})]})})}},5745:function(e,t,i){"use strict";var n=i(5893),a=i(1664),l=i.n(a),r=i(5675),o=i.n(r),s=i(4601);t.Z=function(e){var t=e.title,i=e.eyebrow,a=e.image,r=e.excerpt,c=e.link,d=e.date,u=e.readingTime;return(0,n.jsxs)("article",{className:"bg-white relative rounded-lg shadow-md hover:shadow-sm transition-shadow flex flex-col h-full",children:[(null===a||void 0===a?void 0:a.src)&&(0,n.jsx)("div",{className:"aspect-w-16 aspect-h-9 rounded-t-lg overflow-hidden bg-slate-200",children:(0,n.jsx)(o(),{src:a.src,alt:(null===a||void 0===a?void 0:a.alt)||t,layout:"fill",objectFit:"cover"})}),(0,n.jsxs)("div",{className:"p-6 flex flex-col items-start h-full",children:[(null===i||void 0===i?void 0:i.link)&&(0,n.jsx)(l(),{href:null===i||void 0===i?void 0:i.link,children:(0,n.jsx)("a",{className:"inline-flex rounded-md py-1 px-3 text-[13px] font-medium mb-3 relative z-10 ".concat((null===i||void 0===i?void 0:i.bgColor)||"bg-slate-100"," ").concat((null===i||void 0===i?void 0:i.color)||"text-slate-500"),children:null===i||void 0===i?void 0:i.title})}),!(null===i||void 0===i?void 0:i.link)&&(null===i||void 0===i?void 0:i.title)&&(0,n.jsx)("span",{className:"inline-flex rounded-md py-1 px-3 text-[13px] font-medium mb-3 relative z-10 ".concat((null===i||void 0===i?void 0:i.bgColor)||"bg-slate-100"," ").concat((null===i||void 0===i?void 0:i.color)||"text-slate-500"),children:null===i||void 0===i?void 0:i.title}),(0,n.jsx)("h2",{className:"text-xl lg:text-2xl font-semibold tracking-tight leading-tight text-slate-800 font-primary",children:t}),r&&(0,n.jsx)("div",{className:"text-sm lg:text-[15px] leading-normal text-slate-500 line-clamp-3 mt-3 ",dangerouslySetInnerHTML:{__html:r}}),(null===c||void 0===c?void 0:c.href)&&(0,n.jsx)(l(),{href:c.href,children:(0,n.jsx)("a",{className:"absolute top-0 left-0 w-full h-full "})}),(0,n.jsx)("div",{className:"grow"}),(0,n.jsxs)("footer",{className:"mt-3",children:[d&&(0,n.jsx)("time",{dateTime:d,className:"text-sm text-slate-400",children:(0,s.p6)(d)}),u&&(0,n.jsxs)("span",{className:"text-sm text-slate-400 block mt-[2px]",children:[u," min read"]})]})]})]})}},6277:function(e,t,i){"use strict";i.d(t,{Z:function(){return u}});var n=i(5893),a=(i(7294),i(9008)),l=i.n(a),r=i(1163);function o(e,t){var i=new URL(t,new URL(e,"resolve://"));return"resolve:"===i.protocol?i.pathname+i.search+i.hash:i.toString()}var s=function(e){var t,i,a=e.url,r=e.type,o=void 0===r?"website":r,s=e.title,c=e.desc,d=e.image;return(0,n.jsxs)(l(),{children:[(0,n.jsx)("meta",{property:"og:locale",content:"en_US"}),(0,n.jsx)("meta",{property:"og:url",content:a}),(0,n.jsx)("meta",{property:"og:type",content:o}),(0,n.jsx)("meta",{property:"og:title",content:s}),c&&(0,n.jsx)("meta",{property:"og:description",content:c}),d.url&&(0,n.jsx)("meta",{property:"og:image",content:d.url}),(null===d||void 0===d?void 0:d.width)&&(0,n.jsx)("meta",{property:"og:image:width",content:null===(t=d.width)||void 0===t?void 0:t.toString()}),(null===d||void 0===d?void 0:d.height)&&(0,n.jsx)("meta",{property:"og:image:height",content:null===(i=d.height)||void 0===i?void 0:i.toString()})]})},c=function(e){var t=e.type,i=void 0===t?"summary_large_image":t,a=e.creator,r=e.site,o=e.title,s=e.desc;return(0,n.jsxs)(l(),{children:[a&&(0,n.jsx)("meta",{name:"twitter:creator",content:a}),r&&(0,n.jsx)("meta",{name:"twitter:site",content:r}),(0,n.jsx)("meta",{name:"twitter:card",content:i}),(0,n.jsx)("meta",{name:"twitter:title",content:o}),s&&(0,n.jsx)("meta",{name:"twitter:description",content:s})]})},d={siteUrl:"https://www.deeplearning.ai",siteTitle:"DeepLearning.AI",siteDescription:"Learn the skills to start or advance your AI career | World-class education | Hands-on training | Collaborative community of peers and mentors",siteLanguage:"en",publicationCover:"https://www.deeplearning.ai/publication-cover.png",twitter:{username:"@deeplearningai_"},facebook:{url:"https://www.facebook.com/DeepLearningAIHQ"},organization:{name:"DeepLearning.AI",sameAs:["https://www.facebook.com/DeepLearningAIHQ","https://www.linkedin.com/company/deeplearningai","https://www.youtube.com/channel/UCcIXc5mJsHVYTZR1maL5l9w","https://twitter.com/deeplearningai_"]}},u=function(e){var t,i,a,u,h,m,v,g,p,x=e.title,f=e.description,b=(e.pathname,e.canonical),w=e.image,j=(e.article,e.og),y=e.twitter,N=e.schemaOptions,I=(e.yoastSchema,(0,r.useRouter)()),k={title:x||d.siteTitle,description:f,canonical:b||o(d.siteUrl,"".concat(I.basePath).concat(I.asPath)),image:(null===w||void 0===w?void 0:w.url)?{url:o(d.siteUrl,w.url),width:null===w||void 0===w?void 0:w.width,height:null===w||void 0===w?void 0:w.height}:{url:d.publicationCover,alt:d.siteDescription,width:1024,height:459}},L=[],S={"@type":"Organization","@id":"".concat(d.siteUrl,"/#organization"),name:"DeepLearning.AI",url:null===d||void 0===d?void 0:d.siteUrl,sameAs:["https://www.facebook.com/DeepLearningAIHQ","https://www.linkedin.com/company/deeplearningai","https://www.youtube.com/channel/UCcIXc5mJsHVYTZR1maL5l9w","https://twitter.com/deeplearningai_"],logo:{"@type":"ImageObject","@id":"".concat(d.siteUrl,"/#logo"),inLanguage:"en-US",url:"https://www.deeplearning.ai/images/logo/deeplearning-ai-logo.png",contentUrl:"https://www.deeplearning.ai/images/logo/deeplearning-ai-logo.png",width:400,height:90,caption:"DeepLearning.AI"},image:{"@id":"".concat(d.siteUrl,"/#logo")}};L.push(S);var _={"@type":"WebSite","@id":"".concat(d.siteUrl,"/#website"),url:d.siteUrl,name:"DeepLearning.AI",description:"Learn the skills to start or advance your AI career | World-class education | Hands-on training | Collaborative community of peers and mentors",publisher:{"@id":"".concat(d.siteUrl,"/#organization")},inLanguage:"en-US"};L.push(_);var U={"@type":"ImageObject","@id":"".concat(d.siteUrl,"/#primaryimage"),inLanguage:"en-US",url:null===k||void 0===k||null===(t=k.image)||void 0===t?void 0:t.url,contentUrl:null===k||void 0===k||null===(i=k.image)||void 0===i?void 0:i.url,width:null===k||void 0===k||null===(a=k.image)||void 0===a?void 0:a.width,height:null===k||void 0===k||null===(u=k.image)||void 0===u?void 0:u.height};L.push(U),null===N||void 0===N||null===(h=N.pageType)||void 0===h||h.forEach((function(e){if("WebPage"===e){var t={"@type":(null===N||void 0===N?void 0:N.isCollection)?["WebPage","CollectionPage"]:"WebPage","@id":"".concat(k.canonical,"/#webpage"),url:k.canonical,name:k.title,isPartOf:{"@id":"".concat(d.siteUrl,"/#website")},about:{"@id":"".concat(d.siteUrl,"/#organization")},primaryImageOfPage:{"@id":"".concat(d.siteUrl,"/#primaryimage")},datePublished:null===N||void 0===N?void 0:N.datePublished,dateModified:(null===N||void 0===N?void 0:N.dateModified)||(null===N||void 0===N?void 0:N.datePublished),description:null===k||void 0===k?void 0:k.description,inLanguage:"en-US",potentialAction:[{"@type":"ReadAction",target:[null===k||void 0===k?void 0:k.canonical]}]};if(N.breadcrumb){var i,n={"@id":"".concat(k.canonical,"/#breadcrumb"),"@type":"BreadcrumbList",itemListElement:null===N||void 0===N||null===(i=N.breadcrumb)||void 0===i?void 0:i.map((function(e,t){return e.active?{"@type":"ListItem",position:t+1,name:e.name}:{"@type":"ListItem",position:t+1,name:e.name,item:"".concat(d.siteUrl).concat(e.url)}}))};t.breadcrumb={"@id":"".concat(k.canonical,"/#breadcrumb")},L.push(n)}L.push(t)}if("Article"===e){var a={"@type":"Article","@id":"".concat(k.canonical,"/#article"),isPartOf:{"@id":"".concat(k.canonical,"/#webpage")},headline:k.title,dateModified:null===N||void 0===N?void 0:N.dateModified,datePublished:null===N||void 0===N?void 0:N.datePublished,mainEntityOfPage:{"@id":"".concat(k.canonical,"/#webpage")},publisher:{"@id":"".concat(d.siteUrl,"/#organization")},image:{"@id":"".concat(d.siteUrl,"/#primaryimage")},inLanguage:"en-US"};L.push(a)}}));var P={"@context":"http://schema.org","@graph":L};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(l(),{children:[(0,n.jsx)("title",{children:k.title},"title"),k.description&&(0,n.jsx)("meta",{name:"description",content:k.description}),(0,n.jsx)("link",{rel:"canonical",href:k.canonical}),(0,n.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(P)},id:"json-ld"})]}),(0,n.jsx)(s,{title:(null===j||void 0===j?void 0:j.title)||k.title,desc:(null===j||void 0===j?void 0:j.desc)||k.description,image:{url:(null===j||void 0===j||null===(m=j.image)||void 0===m?void 0:m.url)||(null===d||void 0===d?void 0:d.publicationCover),width:null===j||void 0===j||null===(v=j.image)||void 0===v?void 0:v.width,height:null===j||void 0===j||null===(g=j.image)||void 0===g?void 0:g.height,alt:null===j||void 0===j||null===(p=j.image)||void 0===p?void 0:p.alt},url:k.canonical}),(0,n.jsx)(c,{title:(null===y||void 0===y?void 0:y.title)||k.title,desc:(null===y||void 0===y?void 0:y.desc)||k.description,creator:d.twitter.username,site:d.twitter.username})]})}},2208:function(e,t,i){"use strict";var n=i(5893),a=i(9156),l=i(6183),r=i(6893);t.Z=function(e){var t=e.activeRouteOverride;return(0,n.jsx)(a.Z,{showSubscribeMenu:!1,leftNavItems:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.Z,{href:"/blog/",activeRouteOverride:t,children:(0,n.jsx)(r.m6D,{})}),(0,n.jsx)(l.Z,{href:"/blog/category/breaking-into-ai/",activeRouteOverride:t,children:"Breaking Into AI"}),(0,n.jsx)(l.Z,{href:"/blog/category/working-ai/",activeRouteOverride:t,children:"Working AI"}),(0,n.jsx)(l.Z,{href:"/blog/category/ai-heroes/",activeRouteOverride:t,children:"AI Heroes"}),(0,n.jsx)(l.Z,{href:"/blog/category/ambassador-spotlight/",activeRouteOverride:t,children:"Ambassador Spotlight"}),(0,n.jsx)(l.Z,{href:"/blog/category/news-and-events/",activeRouteOverride:t,children:"News & Events"})]}),showSearch:!1})}},6183:function(e,t,i){"use strict";var n=i(5893),a=i(1664),l=i.n(a),r=i(1163);t.Z=function(e){var t=e.href,i=e.activeRouteOverride,a=e.children,o=(0,r.useRouter)();return(0,n.jsx)("li",{className:"mr-6 last:mr-0 h-full",children:(0,n.jsx)(l(),{href:t,children:(0,n.jsx)("a",{className:"h-full relative flex items-center text-base whitespace-nowrap border-solid border-t-2 border-t-transparent border-b-2 ".concat(i===t||o.asPath===t?"text-brand border-b-brand":"text-slate-400 transition-colors border-b-transparent hover:text-slate-500"),children:a})})})}},9156:function(e,t,i){"use strict";var n=i(5893),a=i(7294),l=i(1664),r=i.n(l),o=i(1355),s=i(6893),c=i(7967),d=i.n(c),u=i(2152),h=i(7060),m=i.n(h);t.Z=function(e){e.activeRouteOverride;var t=e.showSubscribeMenu,i=void 0===t||t,l=e.leftNavItems,c=e.rightNavItems,h=e.showSearch,v=e.maxWidth,g=(0,a.useState)(!1),p=g[0],x=g[1],f=(0,a.useState)("left"),b=f[0],w=f[1],j=(0,a.useState)(!1),y=j[0],N=j[1],I=(0,a.useRef)(null),k=(0,a.useRef)(null),L=(0,a.useRef)(null);return(0,a.useEffect)((function(){var e=function(){var e,t,i,n=(null===(e=I.current)||void 0===e?void 0:e.offsetWidth)-48,a=null===(t=k.current)||void 0===t?void 0:t.offsetWidth,l=null===(i=L.current)||void 0===i?void 0:i.offsetWidth,r=n-a-24;N(l<r),(null===L||void 0===L?void 0:L.current)&&(L.current.style.maxWidth="".concat(r,"px"))};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),(0,n.jsxs)("nav",{"aria-label":"Secondary",className:"h-[66px] bg-white sticky top-[60px] z-40 shadow hidden lg:block",children:[(0,n.jsxs)("div",{ref:I,className:"container--boxed h-full w-full flex items-center justify-between ".concat(v||""),children:[(0,n.jsxs)("div",{className:"h-full flex relative",children:[!y&&(0,n.jsx)("button",{className:"h-full w-14 items-center justify-center absolute top-0 left-0 z-10 group bg-white bg-opacity-75 ".concat("right"===b||"center"===b?"flex":"hidden"),onClick:function(){var e;null===(e=L.current)||void 0===e||e.scrollBy({left:-300,behavior:"smooth"})},children:(0,n.jsx)("span",{className:"flex items-center justify-center h-5 w-5 bg-slate-500 text-white group-hover:bg-slate-700 rounded-full",children:(0,n.jsx)(s.YFh,{})})}),(0,n.jsx)("ul",{id:"nav-secondary",ref:L,className:"list-none p-0 m-0 h-full flex items-center  overflow-x-scroll relative ".concat(m().navItems),onScroll:function(e){var t=e.currentTarget,i=t.scrollLeft/(t.scrollWidth-t.clientWidth);w(i<.1?"left":i>.9?"right":"center")},children:l}),!y&&(0,n.jsx)("button",{className:"h-full w-9 items-center justify-center absolute top-0 right-0 group bg-white bg-opacity-75 ".concat("left"===b||"center"===b?"flex":"hidden"),onClick:function(){var e;null===(e=L.current)||void 0===e||e.scrollBy({left:300,behavior:"smooth"})},children:(0,n.jsx)("span",{className:"flex items-center justify-center h-5 w-5 bg-slate-500 text-white group-hover:bg-slate-700 rounded-full",children:(0,n.jsx)(s.Tfp,{})})})]}),(0,n.jsxs)("div",{ref:k,className:"flex items-center h-full",children:[(0,n.jsx)("ul",{className:"list-none p-0 m-0 h-full flex items-center mr-5",children:c}),i&&(0,n.jsx)("button",{type:"button",className:"bg-white border border-solid border-brand text-brand hover:bg-brand hover:text-white transition-colors px-3 py-1 rounded-md mr-4",onClick:function(){return x(!p)},children:"Subscribe"}),h&&(0,n.jsx)(r(),{href:"/search/",children:(0,n.jsx)("a",{title:"Search",className:"text-slate-400 hover:text-slate-500 transition-colors",children:(0,n.jsx)(s.jRj,{className:"text-2xl","aria-hidden":"true"})})})]})]}),i&&(0,n.jsx)(o.u,{show:p,enter:"transition-opacity duration-75",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition-opacity duration-150",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,n.jsxs)("div",{className:"bg-slate-50 py-10 shadow relative",children:[(0,n.jsxs)("div",{className:"container--boxed-xs",children:[(0,n.jsxs)("div",{className:"flex flex-col items-center text-center mb-6",children:[(0,n.jsx)("span",{className:"text-3xl font-semibold text-slate-800",children:"Subscribe"}),(0,n.jsx)("span",{className:"text-base text-slate-500 mt-2",children:"Stay updated with weekly AI News and Insights delivered to your inbox"})]}),(0,n.jsx)("div",{className:"form--small",children:(0,n.jsx)(d(),{portalId:"5871640",formId:"02d00121-5d22-4d0e-b19e-2e6b67032f18",loading:(0,n.jsx)("div",{className:"flex items-center justify-center",children:(0,n.jsx)(u.Z,{color:"text-brand-teal"})})})})]}),(0,n.jsx)("button",{onClick:function(){return x(!1)},className:"w-[40px] h-[40px] flex items-center justify-center absolute text-2xl top-6 right-6 text-slate-500",children:(0,n.jsx)(s.q5L,{})})]})})]})}},2493:function(e,t,i){"use strict";var n=i(5893),a=i(6505);t.Z=function(e){var t=e.totalPages,i=e.currentPage,l=e.baseRoute,r=e.posts;return(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-11",children:r}),(0,n.jsx)("div",{className:"mt-12",children:(0,n.jsx)(a.Z,{currentPage:i,totalPages:t,baseRoute:l})})]})}},7060:function(e){e.exports={navItems:"SecondaryNav_navItems__Y7vfP"}},5008:function(e){e.exports={primary:"buttons_primary__a72mf",secondary:"buttons_secondary__WCtSf",small:"buttons_small__ETNND",small2x:"buttons_small2x__x_ws4"}}}]);