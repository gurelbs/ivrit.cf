(this["webpackJsonpivrit-client-app"]=this["webpackJsonpivrit-client-app"]||[]).push([[0],{136:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(75),a=n.n(r),i=(n(98),n(35)),s=n(11),o=n(7),l=(n(99),n(1));function j(e){var t=e.name,n=e.heName,c=e.path;return Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{to:c,title:t,children:n})})}function u(){var e=[{name:"assistant",heName:"\u05e2\u05d5\u05d6\u05e8\u05ea \u05e7\u05d5\u05dc\u05d9\u05ea",to:"/assistant"},{name:"playground",heName:"\u05de\u05d2\u05e8\u05e9 \u05de\u05e9\u05d7\u05e7\u05d9\u05dd",to:"/playground"},{name:"docs",heName:"\u05d3\u05d5\u05e7\u05d5\u05de\u05e0\u05d8\u05e6\u05d9\u05d4",to:"/docs"},{name:"examples",heName:"\u05d3\u05d5\u05d2\u05de\u05d0\u05d5\u05ea",to:"/examples"}].map((function(e){var t=e.name,n=e.heName,c=e.to;return Object(l.jsx)(j,{name:t,heName:n,path:c},t)}));return Object(l.jsx)("ul",{children:e})}function b(){var e=Object(c.useState)(null),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){var e=function(){return r(window.scrollY)};return document.addEventListener("scroll",e),function(){return document.removeEventListener("scroll",e)}}),[n]),Object(l.jsxs)("nav",{className:"".concat(n>100?"line":""),children:[Object(l.jsx)("div",{className:"logo_wrap",children:Object(l.jsx)(i.b,{to:"/",children:Object(l.jsx)("span",{children:Object(l.jsx)("img",{className:"logo",src:"./logo.png",alt:"logo"})})})}),Object(l.jsx)("div",{className:"list_wrap",children:Object(l.jsx)(u,{})})]})}var d=n(163),h=n(162),x=n(165),m=n(164);function p(){return Object(l.jsxs)(h.a,{sx:{display:"flex",flexDirection:"column",minHeight:"calc(100vh - 5rem)"},children:[Object(l.jsx)(d.a,{}),Object(l.jsxs)(m.a,{component:"main",sx:{mt:8,mb:2},maxWidth:"sm",children:[Object(l.jsx)(x.a,{variant:"h2",component:"h1",gutterBottom:!0,children:"\u05d1\u05e8\u05d5\u05db\u05d9\u05dd \u05d4\u05d1\u05d0\u05d9\u05dd \u05dc-IVRIT"}),Object(l.jsx)(x.a,{variant:"h5",component:"h2",gutterBottom:!0,children:"API \u05dc\u05de\u05d9\u05d3\u05e2 \u05d1\u05e2\u05d1\u05e8\u05d9\u05ea \u05d1\u05d6\u05de\u05df \u05d0\u05de\u05ea"}),Object(l.jsxs)(x.a,{variant:"body1",children:["\u05dc\u05d4\u05ea\u05e7\u05e0\u05ea \u05d4\u05d7\u05d1\u05d9\u05dc\u05d4 ",Object(l.jsx)("span",{dir:"ltr",children:"(Node.js)"})]}),Object(l.jsx)(x.a,{variant:"h5",gutterBottom:!0,children:Object(l.jsx)("code",{style:{backgroundColor:"lightgray"},children:"npm i ivrit"})}),Object(l.jsx)("div",{className:"list_wrap",children:Object(l.jsx)(u,{})})]})]})}function O(){return Object(l.jsx)("div",{children:"Docs page"})}var f=n(27),g=n.n(f),v=n(32),y=n(51),w=n(34),k=n.n(w),C=[{name:"quickAnswer",heName:"\u05ea\u05e9\u05d5\u05d1\u05d4 \u05de\u05d4\u05d9\u05e8\u05d4",description:"\u05ea\u05e9\u05d5\u05d1\u05d4 \u05de\u05d4\u05d9\u05e8\u05d4 \u05dc\u05e9\u05d0\u05dc\u05d5\u05ea \u05d9\u05d3\u05e2",url:"",result:[]},{name:"lyrics",heName:"\u05de\u05d9\u05dc\u05d9\u05dd \u05dc\u05e9\u05d9\u05e8\u05d9\u05dd",description:"\u05de\u05d9\u05dc\u05d9\u05dd \u05dc\u05e9\u05d9\u05e8\u05d9\u05dd \u05d1\u05e2\u05d1\u05e8\u05d9\u05ea \u05d5\u05d1\u05dc\u05d5\u05e2\u05d6\u05d9\u05ea",url:"",result:[]},{name:"news",heName:"\u05d7\u05d3\u05e9\u05d5\u05ea",description:"\u05d7\u05d3\u05e9\u05d5\u05ea \u05d0\u05d7\u05e8\u05d5\u05e0\u05d5\u05ea \u05dc\u05e4\u05d9 \u05de\u05d9\u05dc\u05d5\u05ea \u05de\u05e4\u05ea\u05d7",url:"",result:[]}];function N(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(C),i=Object(o.a)(a,2),s=i[0],j=i[1],u=Object(c.useState)(s[0].name),b=Object(o.a)(u,2),d=b[0],h=b[1],x=Object(c.useState)(null),m=Object(o.a)(x,2),p=m[0],O=m[1],f="https://ivrit.herokuapp.com";function w(){return(w=Object(y.a)(g.a.mark((function e(t){var n,c,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r(""),j((function(e){return e.map((function(e){return Object(v.a)(Object(v.a)({},e),{},{result:[]})}))})),n=s.find((function(e){return e.name===d})),e.next=6,k.a.get(n.url);case 6:return c=e.sent,a=c.data,j((function(e){return e.map((function(e){return e.name===n.name?Object(v.a)(Object(v.a)({},n),{},{result:a}):e}))})),e.abrupt("return",N(n));case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(e){"news"===e.name&&O(e.result.map((function(e,t){return Object(l.jsx)("div",{children:Object(l.jsx)("a",{href:e.link,children:Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:e.header}),Object(l.jsxs)("p",{children:[Object(l.jsx)("code",{children:e.origin}),"*",Object(l.jsx)("small",{children:e.time})]})]})})},t)}))),"lyrics"===e.name&&O(e.result.map((function(e,t){return Object(l.jsx)("div",{children:Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:e.singer}),Object(l.jsx)("p",{children:e.songName}),Object(l.jsx)("p",{children:e.lyric})]})},t)}))),"quickAnswer"===e.name&&O(e.result.map((function(e,t){return"string"===typeof e?Object(l.jsx)("p",{children:e},t):Object(l.jsx)("ul",{children:Object.values(e).map((function(e,t){return Object(l.jsx)("li",{children:e},t)}))},t)})))}return Object(c.useEffect)((function(){d&&j((function(e){return e.map((function(e){return Object(v.a)(Object(v.a)({},e),{},{url:"".concat(f,"/api/").concat(e.name,"?q=").concat(n)})}))}))}),[d,f,n]),Object(c.useEffect)((function(){console.log(s)}),[s]),Object(c.useEffect)((function(){console.log(p)}),[p]),Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"services",children:"\u05d1\u05d7\u05d9\u05e8\u05ea \u05e1\u05d5\u05d2 \u05e9\u05d9\u05e8\u05d5\u05ea:"}),Object(l.jsx)("select",{onChange:function(e){return h(e.target.value)},name:"services",id:"services",children:null===s||void 0===s?void 0:s.map((function(e,t){return Object(l.jsx)("option",{value:e.name,children:e.heName},t)}))})]}),Object(l.jsx)("div",{children:Object(l.jsx)("textarea",{value:n,onChange:function(e){return r(e.target.value)},cols:"100",rows:"2",placeholder:d?s.find((function(e){return e.name===d})).description:"\u05d4\u05d6\u05e0\u05ea \u05e9\u05d0\u05dc\u05d4"})}),Object(l.jsx)("button",{type:"submit",onClick:function(e){return w.apply(this,arguments)},disabled:"news"!==d&&n.length<1,children:"\u05e7\u05d1\u05dc\u05ea \u05ea\u05e9\u05d5\u05d1\u05d4 \u05d1\u05e2\u05d1\u05e8\u05d9\u05ea"}),p?Object(l.jsx)("div",{children:p}):null]})}function S(){return Object(l.jsx)("div",{children:"Examples page"})}function E(){return Object(l.jsx)("div",{children:"NotFound"})}var T,L=n(81),D=n.n(L),I=n(45),A=n.n(I);T="/api";var F=Object(w.create)({baseURL:T}),_=n(159),R=n(158),q=n(83),B=n.n(q),P=n(84),W=n.n(P);function H(){var e=k.a.CancelToken.source(),t=Object(c.useState)(null),n=Object(o.a)(t,2),r=n[0],a=n[1],i=Object(c.useState)(!1),s=Object(o.a)(i,2),j=s[0],u=s[1],b=Object(c.useState)(null),d=Object(o.a)(b,2),m=d[0],p=d[1],O=Object(I.useSpeechRecognition)(),f=O.transcript,v=O.interimTranscript,w=O.finalTranscript,C=O.listening,N=O.resetTranscript,S=O.browserSupportsSpeechRecognition,E=A.a.startListening,T=A.a.stopListening,L=A.a.abortListening,q=function(){return E({continuous:!0,interimResults:!0,language:"iw-IL"})},P=function(){return T()};function H(){return Object(l.jsx)("div",{dangerouslySetInnerHTML:{__html:m}})}function J(){return(J=Object(y.a)(g.a.mark((function t(n){var c,r,i,s,o;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,F.get("/answer?q=".concat(n),{CancelToken:e.token});case 3:return c=t.sent,r=c.config,t.next=7,F.get("/dataAnswer",{CancelToken:e.token});case 7:i=t.sent,s=i.data,console.log(s),o=r.baseURL,a("".concat(o,"/answer?q=").concat(w)),p(s.result),t.next=19;break;case 15:t.prev=15,t.t0=t.catch(0),console.log(t.t0),p("\u05dc\u05d0 \u05de\u05e6\u05d0\u05ea\u05d9 \u05ea\u05e9\u05d5\u05d1\u05d4, \u05d0\u05d1\u05dc \u05d0\u05e4\u05e9\u05e8 \u05dc\u05e0\u05e1\u05d5\u05ea \u05e9\u05d5\u05d1 \u05e2\u05dd \u05d1\u05d9\u05d8\u05d5\u05d9 \u05d3\u05d5\u05de\u05d4");case 19:case"end":return t.stop()}}),t,null,[[0,15]])})))).apply(this,arguments)}return Object(c.useEffect)((function(){"\u05d3\u05d5\u05e8\u05d9\u05df"===w&&(p(null),a(null),u(!1),N(),L(),q())})),Object(c.useEffect)((function(){w===f&&""!==w&&"\u05d3\u05d5\u05e8\u05d9\u05df"!==w&&(u(!0),function(e){J.apply(this,arguments)}(w))}),[w,f]),S?Object(l.jsxs)(h.a,{sx:{display:"flex",flexDirection:"column",minHeight:"calc(100vh - 5rem)",justifyContent:"center",gap:"1.5rem",alignItems:"center",textAlign:"center"},children:[Object(l.jsx)(_.a,{color:"secondary",variant:C?"dot":null,overlap:"circular",badgeContent:C?" ":null,children:Object(l.jsx)(R.a,{variant:C?"extended":"circular",disabled:j,onClick:C?P:q,maxwidth:"sm",children:C?Object(l.jsx)(B.a,{}):Object(l.jsx)(W.a,{})})}),Object(l.jsxs)("div",{children:[Object(l.jsx)(x.a,{fontWeight:400,children:v||w}),m&&Object(l.jsx)(h.a,{sx:{display:"flex",flexDirection:"column",maxWidth:400,justifyContent:"center",alignItems:"center",textAlign:"center"},children:Object(l.jsx)(H,{})}),r&&Object(l.jsx)("div",{style:{marginTop:"1rem"},children:Object(l.jsx)(D.a,{src:r,autoPlay:!0,controls:!0,onCanPlay:function(){return u(!1)},onPlay:function(){return P()},onEnded:function(){N(),q()},onAbort:function(){N(),q()},onPause:function(){N(),q()}})})]})]}):Object(l.jsx)("span",{children:"Browser doesn't support speech recognition."})}function J(){return Object(l.jsxs)(x.a,{variant:"body2",color:"text.secondary",children:["Copyright \xa9 ",Object(l.jsx)("a",{href:"https://guribs.com/",target:"_blank",children:"guribs"})," ",(new Date).getFullYear(),"."]})}var U=function(e){return"light"===e.palette.mode?e.palette.grey[200]:e.palette.grey[800]};function Y(){return Object(l.jsx)(h.a,{style:{position:"fixed",left:0,bottom:0,width:"100%"},component:"footer",sx:{py:3,px:2,mt:"auto",backgroundColor:U},children:Object(l.jsxs)(m.a,{maxWidth:"sm",children:[Object(l.jsxs)(x.a,{variant:"body1",children:['\u05e0\u05d1\u05e0\u05d4 \u05d1\u05d0\u05d4\u05d1\u05d4 \u05e2"\u05d9'," ",Object(l.jsx)("a",{target:"_blank",href:"https://github.com/gurelbs",children:"\u05d2\u05d5\u05e8\u05d0\u05dc \u05d1\u05df \u05e9\u05d1\u05ea"}),"."]}),Object(l.jsx)(J,{})]})})}var M=n(85),V=n(161),z=Object(M.a)({direction:"rtl"});function G(){var e=[{path:"/",name:"homepage",Component:p},{path:"/docs",name:"documentation",Component:function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(b,{}),Object(l.jsx)(O,{})]})}},{path:"/playground",name:"recognition",Component:function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(b,{}),Object(l.jsx)(N,{})]})}},{path:"/examples",name:"homepage",Component:function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(b,{}),Object(l.jsx)(S,{})]})}},{path:"/assistant",name:"homepage",Component:function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(b,{}),Object(l.jsx)(H,{})]})}}];return Object(l.jsx)(V.a,{theme:z,children:Object(l.jsxs)(h.a,{sx:{display:"flex",flexDirection:"column"},children:[Object(l.jsx)(d.a,{}),Object(l.jsx)(i.a,{children:Object(l.jsx)(h.a,{sx:{display:"flex",flexDirection:"column",marginTop:"5rem"},children:Object(l.jsxs)(s.c,{children:[e.map((function(e){var t=e.path,n=e.Component;return Object(l.jsx)(s.a,{component:n,path:t,exact:!0},t)})),Object(l.jsx)(s.a,{component:E})]})})}),Object(l.jsx)(Y,{})]})})}a.a.render(Object(l.jsx)(G,{}),document.getElementById("root"))},98:function(e,t,n){},99:function(e,t,n){}},[[136,1,2]]]);
//# sourceMappingURL=main.075f05f4.chunk.js.map