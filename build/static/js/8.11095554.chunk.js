(this.webpackJsonpbolluq=this.webpackJsonpbolluq||[]).push([[8],{242:function(e,t,c){"use strict";var n=c(1),i=c.n(n),a=c(2),s=function(e){var t=e.title;return Object(a.jsx)("div",{className:"layerTitle",children:Object(a.jsx)("h1",{children:t})})};t.a=i.a.memo(s)},244:function(e,t,c){},246:function(e,t,c){"use strict";var n=c(1),i=c.n(n),a=c(558),s=c(2),r=function(e){var t=e.total,c=e.defaultCurrent,n=e.current,i=e.pageSize,r=e.setPage;return Object(s.jsx)(a.a,{onChange:function(e){return r(e)},showSizeChanger:!1,showLessItems:!1,pageSize:i,defaultCurrent:c,total:t,current:n})};t.a=i.a.memo(r)},249:function(e,t,c){"use strict";var n=c(1),i=c.n(n),a=c(8),s=(c(244),c(239)),r=c(2),l=function(){var e=Object(s.a)().t;return Object(r.jsxs)("div",{className:"menu menuCommon menuHuman",children:[Object(r.jsx)(a.c,{to:"/internship",children:e("tecrubeproqramlari")}),Object(r.jsx)(a.c,{to:"/rules",children:e("isemuracietqaydalari")}),Object(r.jsx)(a.c,{to:"/vacancies",children:e("vakansiyalar")})]})};t.a=i.a.memo(l)},279:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/arrow.5e1ee2ef.svg"},280:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/calendar.edb75364.svg"},284:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/mapIcon.1353b2eb.svg"},454:function(e,t,c){},543:function(e,t,c){"use strict";c.r(t);var n=c(13),i=c(14),a=c(27),s=c(1),r=c(45),l=c(249),o=c(246),d=(c(454),c(242)),j=c(28),u=c(30),b=c(8),h=c(239),x=c(2);t.default=function(){var e=Object(h.a)().t,t=Object(s.useState)(0),p=Object(a.a)(t,2),O=p[0],f=p[1],m=Object(s.useRef)(null),v=Object(s.useState)({position:[],occupation:[]}),_=Object(a.a)(v,2),g=_[0],w=_[1],C=Object(s.useRef)([]),L=Object(j.useQuery)(["vacanciesAll",g,O],u.B,{refetchOnWindowFocus:!1,onSuccess:function(e){m.current=e.meta}}),N=L.data,k=L.isLoading,y=L.refetch,S=Object(j.useQuery)(["vacancyFilter"],u.D,{refetchOnWindowFocus:!1}),E=Object(s.useCallback)((function(e){f(e)}),[]);return Object(s.useEffect)((function(){C.current.forEach((function(e){e.onclick=function(){e.nextElementSibling.classList.contains("hideElem")?e.nextElementSibling.classList.remove("hideElem"):e.nextElementSibling.classList.add("hideElem")}}))}),[]),Object(x.jsxs)("div",{className:"vacancies",children:[Object(x.jsx)(d.a,{title:e("insanresurslari")}),Object(x.jsxs)(r.b,{children:[Object(x.jsxs)("div",{className:"d-flex align-items-baseline vacancies__wrapper",children:[Object(x.jsxs)("div",{className:"vacancies__menuBox",children:[Object(x.jsx)(l.a,{}),Object(x.jsx)("div",{className:"menu__details",children:Object(x.jsxs)("div",{className:"menu__details--item",children:[Object(x.jsxs)("div",{className:"menu__detailsSearch vacancies__searchBox",children:[Object(x.jsx)("input",{type:"search",placeholder:e("axtar")}),Object(x.jsx)("svg",{width:"17",height:"17",viewBox:"0 0 17 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(x.jsx)("path",{d:"M12.1498 10.6918H11.3819L11.1098 10.4294C12.0623 9.32133 12.6358 7.88279 12.6358 6.3179C12.6358 2.82847 9.80732 0 6.3179 0C2.82847 0 0 2.82847 0 6.3179C0 9.80732 2.82847 12.6358 6.3179 12.6358C7.88279 12.6358 9.32133 12.0623 10.4294 11.1098L10.6918 11.3819V12.1498L15.5517 17L17 15.5517L12.1498 10.6918ZM6.3179 10.6918C3.89766 10.6918 1.94397 8.73814 1.94397 6.3179C1.94397 3.89766 3.89766 1.94397 6.3179 1.94397C8.73814 1.94397 10.6918 3.89766 10.6918 6.3179C10.6918 8.73814 8.73814 10.6918 6.3179 10.6918Z",fill:"#C4C4C4"})})]}),Object(x.jsxs)("div",{className:"parent",children:[Object(x.jsxs)("div",{className:"parent__info",children:[Object(x.jsxs)("button",{ref:function(e){return C.current[0]=e},children:[e("vezife"),Object(x.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(x.jsx)("path",{d:"M3.72407 6.64131C3.94596 6.41942 4.29318 6.39925 4.53786 6.5808L4.60796 6.64131L9.99935 12.0324L15.3907 6.64131C15.6126 6.41942 15.9598 6.39925 16.2045 6.58079L16.2746 6.64131C16.4965 6.8632 16.5167 7.21042 16.3351 7.45509L16.2746 7.52519L10.4413 13.3585C10.2194 13.5804 9.87218 13.6006 9.62751 13.419L9.55741 13.3585L3.72407 7.52519C3.48 7.28112 3.48 6.88539 3.72407 6.64131Z",fill:"black"})})]}),Object(x.jsx)("div",{className:"hideElem",children:!1===S.isLoading&&void 0!==S.data&&S.data.positions.map((function(e){return Object(x.jsx)("p",{className:"parent__checkBox",children:Object(x.jsxs)("label",{htmlFor:e.title,children:[Object(x.jsx)("input",{id:e.title,type:"checkbox",onClick:function(t){if(!0===t.target.checked)w((function(t){return Object(i.a)(Object(i.a)({},t),{},{position:[].concat(Object(n.a)(g.position),[e.id])})}));else{var c=g.position.indexOf(e.id,0);c>-1&&(g.position.splice(c,1),w(g),y())}}}),e.title]})},e.id)}))})]}),Object(x.jsxs)("div",{className:"parent__info",children:[Object(x.jsxs)("button",{ref:function(e){return C.current[1]=e},children:[e("fealiyyet"),Object(x.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(x.jsx)("path",{d:"M3.72407 6.64131C3.94596 6.41942 4.29318 6.39925 4.53786 6.5808L4.60796 6.64131L9.99935 12.0324L15.3907 6.64131C15.6126 6.41942 15.9598 6.39925 16.2045 6.58079L16.2746 6.64131C16.4965 6.8632 16.5167 7.21042 16.3351 7.45509L16.2746 7.52519L10.4413 13.3585C10.2194 13.5804 9.87218 13.6006 9.62751 13.419L9.55741 13.3585L3.72407 7.52519C3.48 7.28112 3.48 6.88539 3.72407 6.64131Z",fill:"black"})})]}),Object(x.jsx)("div",{className:"hideElem",children:!1===S.isLoading&&void 0!==S.data&&S.data.occupations.map((function(e){return Object(x.jsx)("p",{className:"parent__checkBox",children:Object(x.jsxs)("label",{htmlFor:e.title,children:[Object(x.jsx)("input",{id:e.title,type:"checkbox",onClick:function(t){if(!0===t.target.checked)w((function(t){return Object(i.a)(Object(i.a)({},t),{},{occupation:[].concat(Object(n.a)(g.occupation),[e.id])})}));else{var c=g.occupation.indexOf(e.id,0);c>=-1&&(g.occupation.splice(c,1),w(g),y())}}}),e.title]})},e.id)}))})]})]})]})})]}),Object(x.jsx)("div",{className:"vacancies__wrapper d-flex justify-content-center flex-column",children:!1===k&&void 0!==N&&N.data.map((function(t){return Object(x.jsxs)("div",{className:"vacancies__wrapper__block d-flex justify-content-around flex-row",children:[Object(x.jsxs)("div",{className:"vacancies__wrapper__block--position-info",children:[Object(x.jsx)("h3",{children:t.title}),Object(x.jsx)("p",{children:t.company}),Object(x.jsxs)("p",{children:[Object(x.jsx)("span",{children:Object(x.jsx)("img",{src:c(284).default,alt:"mapIcon"})})," ",t.location]})]}),Object(x.jsx)("div",{className:"vacancies__wrapper__block--deadline-date d-flex justify-content-center align-items-center",children:Object(x.jsx)("div",{children:Object(x.jsxs)("p",{children:[Object(x.jsx)("span",{children:Object(x.jsx)("img",{src:c(280).default,alt:"mapIcon"})}),e("sonmuraciettarixi"),":"," ",Object(x.jsx)("span",{className:"vacancies__wrapper__block--deadline-date--date",children:t.expired_at})]})})}),Object(x.jsx)("div",{className:"vacancies__wrapper__block--more-info d-flex align-items-end",children:Object(x.jsx)("p",{children:Object(x.jsxs)(b.b,{to:"/vacancies/".concat(t.slug),children:[e("dahaetraflibax"),Object(x.jsx)("span",{children:Object(x.jsx)("img",{src:c(279).default,alt:"mapIcon"})})]})})})]},t.id)}))})]}),Object(x.jsx)("div",{className:"d-flex justify-content-center news__pagination",children:null!==m.current&&m.current.total>m.current.per_page&&Object(x.jsx)(o.a,{defaultCurrent:1,total:m.current.total,pageSize:m.current.per_page,setPage:E})})]})]})}}}]);
//# sourceMappingURL=8.11095554.chunk.js.map