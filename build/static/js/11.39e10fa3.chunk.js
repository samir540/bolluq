(this.webpackJsonpbolluq=this.webpackJsonpbolluq||[]).push([[11],{242:function(e,t,s){"use strict";var n=s(1),c=s.n(n),i=s(2),r=function(e){var t=e.title;return Object(i.jsx)("div",{className:"layerTitle",children:Object(i.jsx)("h1",{children:t})})};t.a=c.a.memo(r)},244:function(e,t,s){},245:function(e,t,s){"use strict";var n=s(1),c=s.n(n),i=s(8),r=(s(244),s(239)),a=s(2),l=function(){var e=Object(r.a)().t;return Object(a.jsxs)("div",{className:"menu menuCommon",children:[Object(a.jsx)(i.c,{to:"/about",children:e("haqqimizda")}),Object(a.jsx)(i.c,{to:"/history",children:e("tariximiz")}),Object(a.jsx)(i.c,{to:"/principles",children:e("deyerlerimiz")}),Object(a.jsx)(i.c,{to:"/productions",children:e("istehsalat")}),Object(a.jsx)(i.c,{to:"/news",children:e("xeberler")})]})};t.a=c.a.memo(l)},246:function(e,t,s){"use strict";var n=s(1),c=s.n(n),i=s(558),r=s(2),a=function(e){var t=e.total,s=e.defaultCurrent,n=e.current,c=e.pageSize,a=e.setPage;return Object(r.jsx)(i.a,{onChange:function(e){return a(e)},showSizeChanger:!1,showLessItems:!1,pageSize:c,defaultCurrent:s,total:t,current:n})};t.a=c.a.memo(a)},343:function(e,t,s){},535:function(e,t,s){"use strict";s.r(t);var n=s(27),c=s(1),i=s(8),r=s(45),a=(s(142),s(343),s(245)),l=s(246),j=s(242),o=s(28),u=s(89),d=s.n(u),b=s(30),h=s(239),m=s(2);t.default=function(){var e=Object(c.useState)(0),t=Object(n.a)(e,2),s=t[0],u=t[1],x=Object(h.a)().t,O=Object(c.useRef)(null),f=Object(o.useQuery)(["newsAll",s],b.o,{refetchOnWindowFocus:!1,onSuccess:function(e){O.current=e.meta}}),w=f.data,p=f.isLoading,v=Object(c.useCallback)((function(e){u(e)}),[]);return Object(m.jsxs)("div",{className:"news",children:[Object(m.jsx)(j.a,{title:x("bizkimik")}),Object(m.jsx)("div",{className:"news__info",children:Object(m.jsxs)(r.b,{children:[Object(m.jsxs)("div",{className:"news__wrapper",children:[Object(m.jsx)(a.a,{}),!1===p&&void 0!==w&&w.data.map((function(e,t){return Object(m.jsxs)("div",{className:t+1<3?"newsSlider__items widthHalf":"newsSlider__items",style:{marginLeft:t+1===2?25:0},children:[Object(m.jsx)("div",{className:"newsSlider__items--imgBox",children:Object(m.jsx)("img",{src:e.image,alt:e.title})}),Object(m.jsxs)("div",{className:"newsSlider__items--info",children:[Object(m.jsxs)("h3",{children:[e.title,Object(m.jsx)("span",{children:e.category.title})]}),Object(m.jsx)("div",{className:"newsSlider__items--text",children:d()(e.description)}),Object(m.jsxs)(i.b,{to:"/news/"+e.slug,children:[x("dahaetraflibax"),Object(m.jsx)("svg",{width:15,height:12,viewBox:"0 0 15 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(m.jsx)("path",{d:"M9.32004 0.410522L14.2082 5.66241M14.2082 5.66241L9.32004 10.9143M14.2082 5.66241L0.71936 5.66241",stroke:"#BF0807"})})]})]})]},e.id)}))]}),Object(m.jsx)("div",{className:"d-flex justify-content-center news__pagination",children:null!==O.current&&O.current.total>O.current.per_page&&Object(m.jsx)(l.a,{defaultCurrent:1,total:O.current.total,pageSize:O.current.per_page,setPage:v})})]})})]})}}}]);
//# sourceMappingURL=11.39e10fa3.chunk.js.map