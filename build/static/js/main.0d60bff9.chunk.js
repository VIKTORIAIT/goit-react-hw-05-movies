(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){e.exports={App:"App_App__16ZpL"}},34:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(19),i=n.n(a),s=(n(25),n(2)),o=(n(26),n(12)),u=n(11),j=n.n(u),l=n(15),b="87f9885ae1efa5e26738121aab64796c";function h(){return(h=Object(l.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(b));case 2:if(!(t=e.sent).ok){e.next=9;break}return e.next=6,t.json();case 6:e.t0=e.sent,e.next=10;break;case 9:e.t0=Promise.reject(new Error("Not found"));case 10:return e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return(p=Object(l.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(b,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("Not found");case 5:return e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var f=n(7),x=n(1),O=function(e){var t=e.movies;return Object(x.jsx)(x.Fragment,{children:t&&!!t.length&&Object(x.jsx)("ul",{children:t.map((function(e){return Object(x.jsx)("li",{children:Object(x.jsx)(f.b,{to:"/movies/".concat(e.id),children:e.original_title})},e.id)}))})})};function d(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){(function(){return h.apply(this,arguments)})().then((function(e){return r(e.results)}))}),[]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h2",{children:"TRENDING TODAY"}),Object(x.jsx)(O,{movies:n})]})}function v(){return Object(x.jsx)("p",{children:" 404! Page not found! "})}var m=n(9),g=n.n(m),k=function(){return Object(x.jsxs)("nav",{className:g.a.nav,children:[Object(x.jsx)(f.b,{exact:!0,className:g.a.link,activeClassName:g.a.activeLink,to:"/",children:"Home"}),Object(x.jsx)(f.b,{className:g.a.link,activeClassName:g.a.activeLink,to:"/movies",children:"Movies"})]})};function _(){return Object(x.jsx)("header",{children:Object(x.jsx)(k,{})})}function y(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],a=Object(c.useRef)(null),i=Object(s.h)();console.log(444);var u=Object(s.f)(),j=u.location.search;Object(c.useEffect)((function(){j?function(e){return p.apply(this,arguments)}(j.split("?query=").join("")).then((function(e){r(e.results)})).catch((function(e){console.log(e)})):r([])}),[j]),console.log(u);return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("input",{type:"text",ref:a}),Object(x.jsx)("button",{type:"button",onClick:function(){u.push(i.url+"?query="+a.current.value),a.current.value=""},children:"Search"}),Object(x.jsx)(O,{movies:n})]})}function N(){Object(s.g)().id;return Object(x.jsx)("div",{children:"34"})}function w(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(_,{}),Object(x.jsxs)(s.c,{children:[Object(x.jsx)(s.a,{exact:!0,path:"/",children:Object(x.jsx)(d,{})}),Object(x.jsx)(s.a,{path:"/movies",exact:!0,children:Object(x.jsx)(y,{})}),Object(x.jsx)(s.a,{path:"/movies/:id",children:Object(x.jsx)(N,{})}),Object(x.jsx)(s.a,{children:Object(x.jsx)(v,{})})]})]})}i.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(f.a,{children:Object(x.jsx)(w,{})})}),document.getElementById("root"))},9:function(e,t,n){e.exports={link:"Navigation_link__12o2K",activeLink:"Navigation_activeLink__2rUFB",nav:"Navigation_nav__INfuO"}}},[[34,1,2]]]);
//# sourceMappingURL=main.0d60bff9.chunk.js.map