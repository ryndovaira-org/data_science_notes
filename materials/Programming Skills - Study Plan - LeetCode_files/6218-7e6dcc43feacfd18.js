"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6218],{94681:function(n,e,a){a.d(e,{E:function(){return h}});var t=a(85893),l=a(67294),r=a(94184),s=a.n(r),i=a(41664),o=a.n(i),u=a(11163),c=a(27484),d=a.n(c),p=a(19601),f=a(73986),g=a(22177),m=a(27262),x=a(75117),y=x.Oo?"/_next/static/images/ongoing-badge-lcus-a9c67ff4414d888a94c19a49fb4f35c7.png":"/_next/static/images/ongoing-badge-lccn-3c360d891426697fcfe2913882825315.svg";function h(n){var e,a,r=(0,p.$G)("study-plan").t,i=n.planGroup,c=n.className,h=n.progress,v=n.onClick,_=(0,u.useRouter)(),k=(0,l.useCallback)((function(){_.push({pathname:"/study-plan/".concat(i.slug),query:h&&{progress:h.id}}),null===v||void 0===v||v()}),[v,i.slug,h,_]);return(0,t.jsxs)("div",{className:s()("w-[128px] md:w-[200px]",c),children:[(0,t.jsx)(o(),{href:{pathname:"/study-plan/".concat(i.slug),query:h&&{progress:h.id}},passHref:!0,children:(0,t.jsxs)("div",{onClick:k,className:s()("relative h-[128px] w-[128px] overflow-hidden rounded-[13px] hover:shadow-level3 dark:hover:shadow-dark-level4 md:h-[200px] md:w-[200px]",g.eq.card,"bg-overlay-1 dark:bg-dark-overlay-3","cursor-pointer"),children:[(0,t.jsx)(f.y,{src:i.cover,className:"h-full w-full object-cover",alt:i.name}),h&&(0,t.jsxs)("div",{className:s()("absolute bottom-0 left-0 right-0 grid h-14 grid-cols-2 items-center rounded-b-[13px] backdrop-blur-[20px]","bg-[rgba(255,255,255,0.6)] dark:bg-[rgba(0,0,0,0.7)]"),children:[(0,t.jsxs)("div",{className:"text-center text-[12px]",children:[(0,t.jsx)("div",{className:s()(g.Cj.label3),children:r("studyPlanGroup.schedule")}),(0,t.jsx)("div",{className:s()(g.Cj.label2,"font-semibold"),children:d()().isBefore(h.startedAt)?r("studyPlanGroup.notStarted"):r("studyPlanGroup.daysPassed",{daysPassed:h.daysPassed,count:h.plan.days})})]}),(0,t.jsxs)("div",{className:"text-center text-[12px]",children:[(0,t.jsx)("div",{className:s()(g.Cj.label3),children:r("studyPlanGroup.progress")}),(0,t.jsxs)("div",{className:s()(g.Cj.label2,"font-semibold"),children:[(h.completedNum/h.questionNum*100).toFixed(),"%"]})]})]}),(0,t.jsx)("div",{className:"absolute inset-0 flex h-full w-full flex-wrap-reverse content-center items-center justify-center rounded-[13px] bg-black bg-opacity-50 opacity-0 hover:opacity-100",children:h?(0,t.jsx)(f.y,{draggable:!1,className:s()("h-[80px] w-[80px] md:h-[120px] md:w-[120px]",{"brightness-50 filter":!h.plan.awarded}),src:(null===(e=h.plan.medal)||void 0===e?void 0:e.config.icon)||"",alt:(null===(a=h.plan.medal)||void 0===a?void 0:a.name)||""}):(0,t.jsx)(t.Fragment,{children:i.plans.slice(0,4).map((function(n){var e,a;return(0,t.jsx)(f.y,{draggable:!1,className:s()("m-2 h-[40px] w-[40px] md:h-[60px] md:w-[60px]",{"brightness-50 filter":!n.awarded}),src:(null===(e=n.medal)||void 0===e?void 0:e.config.icon)||"",alt:(null===(a=n.medal)||void 0===a?void 0:a.name)||""},n.slug)}))})}),h&&(0,t.jsx)(f.y,{src:y,alt:r("studyPlanGroup.inProgressAlt"),className:s()("absolute top-0 right-0",{'"h-[45px] w-[45px]':!x.Oo,"h-[22px] w-[72px]":x.Oo})})]})}),(0,t.jsx)("div",{className:s()("mt-3 text-[16px] font-medium",m._),children:i.name})]})}},56218:function(n,e,a){a.d(e,{k:function(){return k},b:function(){return _}});var t=a(85893),l=a(94184),r=a.n(l),s=a(67294),i=a(30719),o=a(22177),u=a(27262),c=a(23874),d=a(88525),p=a(56235),f=a(75117),g=function(n){return f.Oo?(0,d.Mb)(p.f6,n):(0,c.Mb)(p.f6,n)};g.getKey=function(n){return["planGroupsByCatalog",n]};var m=a(556),x=a(30123),y=a(4522),h=a(31775),v=a(94681);function _(){return"ontouchstart"in window||navigator.maxTouchPoints>0}function k(n){var e=n.catalog,a=n.pageSize,l=g({catalogSlug:e.slug}).data,c=(0,m.P)().data,d=(0,s.useState)(),p=d[0],f=d[1];if(!l||!l.planGroupsByCatalog.data.length)return null;var x=a<3?16:38;return(0,t.jsxs)("section",{className:"mb-10",children:[(0,t.jsxs)("h1",{className:r()(o.Cj.label2,"mb-[11px] flex justify-between text-[18px] font-medium"),children:[(0,t.jsx)("span",{className:u._,children:e.name}),(0,t.jsx)(C,{swiper:p,pageSize:a})]}),(0,t.jsx)(i.tq,{slidesPerView:"auto",pagination:!1,spaceBetween:x,className:"-m-2 p-2",onSwiper:f,allowTouchMove:_(),children:l.planGroupsByCatalog.data.map((function(n,a){var l=null===c||void 0===c?void 0:c.planOngoingProgress.find((function(e){var a;return(null===(a=e.plan.group)||void 0===a?void 0:a.slug)===n.slug}));return(0,t.jsx)(i.o5,{style:{width:"auto",marginRight:x},children:(0,t.jsx)(v.E,{onClick:function(){h.h.studyPlanGroupClickClick({study_plan_group_name:n.name,study_plan_plan_type:e.name})},planGroup:n,className:r()("inline-block"),progress:l})},a)}))})]})}function C(n){var e=n.swiper,a=n.pageSize,l=(0,s.useState)(!0),i=l[0],u=l[1],c=(0,s.useState)(!0),d=c[0],p=c[1];if((0,s.useEffect)((function(){if(e){var n=function(n){u(n.isBeginning),p(n.isEnd)};return setTimeout((function(){return n(e)})),e.on("resize",n),e.on("transitionStart",n),function(){e.off("resize",n),e.off("transitionStart",n)}}}),[e]),!e||i&&d)return null;var f=r()(o.Cj.fill4,o.Cj.fill2Hover,o.Cj.label2,"rounded transition-all ml-[6px]");return(0,t.jsxs)("div",{className:"flex shrink-0",children:[(0,t.jsx)("button",{className:r()(f,i?"cursor-not-allowed":"cursor-pointer"),onClick:function(){return Array.from({length:a}).forEach((function(){return e.allowSlidePrev&&e.slidePrev()}))},disabled:i,style:{opacity:i?.4:1},children:(0,t.jsx)(x.P,{fontSize:24})}),(0,t.jsx)("button",{className:r()(f,d?"cursor-not-allowed":"cursor-pointer"),onClick:function(){return Array.from({length:a}).forEach((function(){return e.allowSlideNext&&e.slideNext()}))},disabled:d,style:{opacity:d?.4:1},children:(0,t.jsx)(y.h,{fontSize:24})})]})}},556:function(n,e,a){a.d(e,{P:function(){return i},x:function(){return o}});var t=a(23874),l=a(88525),r=a(56235),s=a(75117),i=function(){return s.Oo?(0,l.Pnr)(r.f6):(0,t.Pnr)(r.f6)};i.getKey=function(n){return["planProgressOngoing",n]};var o=function(n){return s.Oo?(0,l.xv7)(r.f6,{id:n||""},{enabled:"string"===typeof n}):(0,t.xv7)(r.f6,{id:n||""},{enabled:"string"===typeof n})}},30123:function(n,e,a){a.d(e,{P:function(){return s}});var t=a(26042),l=a(69396),r=a(85893),s=a(67294).forwardRef((function(n,e){return(0,r.jsx)("svg",(0,l.Z)((0,t.Z)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"currentColor",ref:e},n),{children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M14.707 16.293a1 1 0 01-1.414 1.414l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L10.414 12l4.293 4.293z",clipRule:"evenodd"})}))}))},27262:function(n,e,a){a.d(e,{_:function(){return t}});var t="text-ellipsis whitespace-nowrap overflow-hidden"},31775:function(n,e,a){a.d(e,{h:function(){return r}});var t=a(57646),l=a(23025),r={studyPlanExplorePageExposure:function(){var n={key:"study_plan_explore_page_exposure",data:{}};t.V[l.X.GIO](n),t.V[l.X.CONSOLE](n)},studyPlanOngoingGroupClickClick:function(n){var e={key:"study_plan_ongoing_group_click_click",data:n};t.V[l.X.GIO](e),t.V[l.X.CONSOLE](e)},studyPlanGroupClickClick:function(n){var e={key:"study_plan_group_click_click",data:n};t.V[l.X.GIO](e),t.V[l.X.CONSOLE](e)},studyPlanFinishedPageExposure:function(){var n={key:"study_plan_finished_page_exposure",data:{}};t.V[l.X.GIO](n),t.V[l.X.CONSOLE](n)},studyPlanFinishedPlanClick:function(){var n={key:"study_plan_finished_plan_click",data:{}};t.V[l.X.GIO](n),t.V[l.X.CONSOLE](n)},studyPlanDetailPageExposure:function(){var n={key:"study_plan_detail_page_exposure",data:{}};t.V[l.X.GIO](n),t.V[l.X.CONSOLE](n)},studyPlanStartPlanClick:function(){var n={key:"study_plan_start_plan_click",data:{}};t.V[l.X.GIO](n),t.V[l.X.CONSOLE](n)},studyPlanQuestionClick:function(){var n={key:"study_plan_question_click",data:{}};t.V[l.X.GIO](n),t.V[l.X.CONSOLE](n)},studyPlanShareClick:function(n){var e={key:"study_plan_share_click",data:n};t.V[l.X.GIO](e),t.V[l.X.CONSOLE](e)},studyPlanPremiumClick:function(n){var e={key:"study_plan_premium_click",data:n};t.V[l.X.GIO](e),t.V[l.X.CONSOLE](e)},studyPlanStartPlanConfirmClick:function(n){var e={key:"study_plan_start_plan_confirm_click",data:n};t.V[l.X.GIO](e),t.V[l.X.CONSOLE](e)},studyPlanStartPlanConfirmRenewPremiumClick:function(n){var e={key:"study_plan_start_plan_confirm_renew_premium_click",data:n};t.V[l.X.GIO](e),t.V[l.X.CONSOLE](e)},studyPlanSwitchPlanConfirmClick:function(){var n={key:"study_plan_switch_plan_confirm_click",data:{}};t.V[l.X.GIO](n),t.V[l.X.CONSOLE](n)}}}}]);