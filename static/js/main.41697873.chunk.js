(this["webpackJsonpmy-proj-reactjs"]=this["webpackJsonpmy-proj-reactjs"]||[]).push([[0],{67:function(e,t,n){},69:function(e,t,n){},97:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n(0),r=n.n(a),i=n(21),s=n.n(i),o=(n(67),n(36)),l=n.n(o),j=n(52),b=n(39),d=(n(69),n(119)),u=n(53),h=n.n(u),p=function(e){var t={timeout:1e4,params:{method:"flickr.photos.search",api_key:"636e1481b4f3c446d26b8eb6ebfe7127",tags:e,per_page:24,format:"json",nojsoncallback:1},method:"get",baseURL:"https://api.flickr.com/services/rest/"};return h.a.request(t)},m=n(116),x=n(120),f=n(121),O=n(57),g=n.n(O),v=n(58),y=n.n(v),S=n(114),k=Object(S.a)((function(e){return{iconButton:{padding:10},formSearch:{width:"60%",display:"flex"},headerContainer:{justifyContent:"center",alignItems:"center",display:"flex",flexDirection:"column",marginTop:40},input:{flex:1}}})),N=function(){var e=k();return Object(c.jsxs)("div",{className:e.headerContainer,children:[Object(c.jsx)("h2",{style:{fontFamily:"Lobster",fontSize:50},children:"SnapShot"}),Object(c.jsxs)(m.a,{component:"form",className:e.formSearch,children:[Object(c.jsx)(x.a,{className:e.iconButton,"aria-label":"menu",children:Object(c.jsx)(g.a,{})}),Object(c.jsx)(f.a,{className:e.input,placeholder:"Search Google Maps",inputProps:{"aria-label":"search google maps"}}),Object(c.jsx)(x.a,{type:"submit",className:e.iconButton,"aria-label":"search",children:Object(c.jsx)(y.a,{})})]})]})},C=Object(S.a)((function(e){return{mainNav:{display:"flex",justifyContent:"center",alignItems:"center",marginTop:20,marginBottom:30,"& ul":{listStyleType:"none",display:"flex",padding:0,width:"60%",justifyContent:"space-between","& li":{width:"20%",border:"1px solid red",borderRadius:"5px","& a":{textDecoration:"none !important",color:"red",width:"100%",display:"flex",justifyContent:"center",padding:"6px 0px"}}}},font:{fontFamily:"Josefin Sans"}}})),w=n(19),F=function(){var e=C();return Object(c.jsx)("nav",{className:e.mainNav,children:Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:Object(c.jsx)(w.b,{to:"/mountain",children:"Mountain"})}),Object(c.jsx)("li",{children:Object(c.jsx)(w.b,{to:"/beach",children:"Beaches"})}),Object(c.jsx)("li",{children:Object(c.jsx)(w.b,{to:"/bird",children:"Birds"})}),Object(c.jsx)("li",{children:Object(c.jsx)(w.b,{to:"/food",children:"Food"})})]})})},B=n(118),I=Object(S.a)((function(e){return{titleContent:{textAlign:"center","& p":{fontSize:25,fontWeight:"bold"}}}})),L=n(32),T=n(117),z=Object(S.a)((function(e){return{root:{position:"relative"},bottom:{color:e.palette.grey["light"===e.palette.type?200:700]},top:{color:"#1a90ff",animationDuration:"550ms",position:"absolute",left:0},circle:{strokeLinecap:"round"}}})),D=function(e){var t=z();return Object(c.jsxs)("div",{className:t.root,children:[Object(c.jsx)(T.a,Object(L.a)(Object(L.a)({variant:"determinate",className:t.bottom,size:40,thickness:4},e),{},{value:100})),Object(c.jsx)(T.a,Object(L.a)({variant:"indeterminate",disableShrink:!0,className:t.top,classes:{circle:t.circle},size:40,thickness:4},e))]})},M=n(5),P=function(e){var t=e.arrImages,n=e.isLoading,a=I(),r=Object(M.f)();return console.log(r),Object(c.jsx)(c.Fragment,{children:n?Object(c.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",marginTop:80},children:Object(c.jsx)(D,{})}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:a.titleContent,children:Object(c.jsx)("p",{children:"Mountain Pictures"})}),Object(c.jsx)(B.a,{container:!0,spacing:2,children:t.map((function(e,t){return Object(c.jsx)(B.a,{item:!0,xs:6,xl:3,md:4,lg:3,className:"containerImage",children:Object(c.jsx)("img",{width:"100%",src:e.url})},t+"")}))})]})})};var _=function(){var e=r.a.useState(!0),t=Object(b.a)(e,2),n=t[0],i=t[1],s=r.a.useState([]),o=Object(b.a)(s,2),u=o[0],h=o[1],m=function(){var e=Object(j.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p("car");case 3:t=e.sent,n=[],t.data.photos.photo.map((function(e,t){var c=e.farm,a=e.server,r=e.id,i=e.secret,s={title:e.title,url:"https://farm".concat(c,".staticflickr.com/").concat(a,"/").concat(r,"_").concat(i,"_m.jpg")};n.push(s)})),h(n),i(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){m()}),[]),Object(c.jsx)(w.a,{children:Object(c.jsxs)(d.a,{children:[Object(c.jsx)(N,{}),Object(c.jsx)(F,{}),Object(c.jsxs)(M.c,{children:[Object(c.jsx)(M.a,{path:"/mountain",children:Object(c.jsx)(P,{arrImages:u,isLoading:n})}),Object(c.jsx)(M.a,{path:"/beach",children:Object(c.jsx)(D,{})}),Object(c.jsx)(M.a,{path:"/bird",children:Object(c.jsx)(D,{})}),Object(c.jsx)(M.a,{path:"/food",children:Object(c.jsx)(D,{})})]})]})})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,123)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(_,{})}),document.getElementById("root")),J()}},[[97,1,2]]]);
//# sourceMappingURL=main.41697873.chunk.js.map