(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{234:function(e,t,a){e.exports=a(551)},239:function(e,t,a){},240:function(e,t,a){},551:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),i=a(223),c=a.n(i),s=(a(239),a(30)),l=a(63),o=a(224),u=a(225),m=a(231),h=a(226),p=a(232),d=(a(240),a(96)),b=a.n(d),f=function(e){return r.a.createElement("div",null,r.a.createElement(b.a,{className:"py-4 px-1 bg-light",option:e,notMerge:!0,lazyUpdate:!0,style:{height:"50vh"}}),r.a.createElement("br",null))},g=a(133),v=a.n(g),O=a(227),E=function(e){return"".concat("http://localhost:3000/hotels/","?fields=").concat(e)},j=function(){var e=Object(O.a)(v.a.mark((function e(t){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(E(t));case 2:return a=e.sent,e.abrupt("return",a.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(e){return r.a.createElement("div",null,r.a.createElement(b.a,{className:"py-4 px-1 bg-light ",option:e,notMerge:!0,lazyUpdate:!0,style:{height:"90vh"}}),r.a.createElement("br",null))},x=a(41),w=function(e){var t=Object(x.g)(),a=e.authObj;return a.isAuthenticated?r.a.createElement("button",{className:"btn btn-sm btn-outline-info mr-3 ml-3",onClick:function(){a.signout((function(){return t.push("/react-data-charts/login")}))}},"Sign out"):r.a.createElement("small",{className:"text-right text-muted "},"Please login with: teset@test.com, password: test")},N={title:{text:"Comments Statistics",subtext:"How many comment every hotel has",left:"left"},tooltip:{trigger:"item",formatter:"{b} : ({d}%) <br/> Comment : {c} "},legend:{type:"scroll",orient:"vertical",top:"54%",left:"30%",icon:"circle",align:"left",data:[],selected:{}},series:[{label:{alignTo:"labelLine",margin:"10%"},type:"pie",radius:"38%",center:["50%","30%"],data:[],emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]},k={title:{text:"Distribution",subtext:"Occurrence above 20 in a sample search result"},tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{show:!1}},formatter:"{b0}<br /> Total: {c0} Entries found",position:function(e,t,a,n,r){var i={top:60};return i[["left","right"][+(e[0]<r.viewSize[0]/2)]]=80,i}},xAxis:{nameLocation:"center",type:"category",data:[],axisLabel:{show:!1}},yAxis:{type:"value"},lineStyle:{color:"green"},series:[{name:"Repetition",type:"line",smooth:!0,data:[],areaStyle:{color:"green"}}]},A=a(29),C=a(230),S=function(e){var t=Object(x.g)(),a=Object(x.h)(),i=Object(n.useState)({email:"",password:""}),c=Object(C.a)(i,2),o=c[0],u=c[1],m=Object(s.a)({},e.authObj),h=(a.state||{from:{pathname:"/react-data-charts/piechart"}}).from,p=function(e){var t=e.target,a=t.value,n=t.name;u(Object(s.a)({},o,Object(l.a)({},n,a)))};return r.a.createElement("div",{className:"\r login\r bg-info \r text-white\r d-flex \r flex-column\r flex-lg-row\r flex-xl-row\r align-items-center\r justify-content-lg-around\r justify-content-xl-around\r ",style:{height:"90vh"}},r.a.createElement("div",{className:" px-4 my-4 mt-5 text-center align-self-center "},r.a.createElement("h1",{className:" font-weight-bold"},"Mediterranean Sea Hotels Group"),r.a.createElement("small",{className:" form-text "},"Please sign in to start using our statistics app")),r.a.createElement("form",{className:"mx-1 my-4 form-block ",onSubmit:function(e){e.preventDefault(),m.authenticate(o),t.replace(h)}},r.a.createElement("div",{className:"form-group "},r.a.createElement("label",{className:""},"Email",r.a.createElement("input",{className:"form-control",name:"email",type:"email",value:o.email,onChange:p,placeholder:"mail@domain.com"}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Password",r.a.createElement("input",{className:"form-control",name:"password",type:"password",value:o.password,onChange:p}))),r.a.createElement("input",{className:"btn btn-primary mr-2 ",type:"submit",value:"Login"})))};var D=function(e){var t=e.authObj;return r.a.createElement("nav",{className:"navbar navbar-dark \r justify-content-lg-center \r justify-content-md-between\r justify-content-sm-between\r align-items-center",style:{backgroundColor:"rgb(150,200,100)"}},r.a.createElement(A.b,{className:"nav-link",to:"/react-data-charts/piechart"},"Pie Chart"),r.a.createElement(A.b,{className:"nav-link ",to:"/react-data-charts/linechart1"},"Line Chart One"),r.a.createElement(A.b,{className:"nav-link ",to:"/react-data-charts/linechart2"},"Line Chart Two"),r.a.createElement(w,{authObj:t}))},L=function(e){return r.a.createElement("h1",null,"404 Error")},P=a(233),q=function(e){var t=e.authObj,a=e.children,n=Object(P.a)(e,["authObj","children"]);return r.a.createElement(x.b,Object.assign({},n,{render:function(e){var n=e.location;return t.isAuthenticated?a:r.a.createElement(x.a,{to:{pathname:"/login",state:{from:n}}})}}))},B=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).authenticate=function(e){var t=e.email,n=e.password;t===a.email&&n===a.password&&a.setState({isAuthenticated:!0})},a.signout=function(){a.setState({isAuthenticated:!1})},a.getNames=function(e){var t=[];return e.result.forEach((function(e){t.push(e.hotelname)})),t},a.getDistribution=function(e){var t=[],a=[],n=e.reduce((function(e,t){return Object.assign(e,Object(l.a)({},t,1+(0|e[t])))}),{});for(var r in n)n[r]>20&&(t.push(r),a.push(n[r]));return{uniqueNames:t,uniqueCount:a}},a.getPieOption=function(e,t){var a=[],n=[],r={};return e.map((function(e,i){a.push(e),n.push({name:e,value:t[i]}),r[e]=i<10})),{legendData:a,seriesData:n,selected:r}},a.state={pieOption:{},lineOption1:{},lineOption2:{},data:{},isAuthenticated:!1},a.email="test@test.com",a.password="test",a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;j("hotelname,baseprice,commentcount").then((function(t){var a=t.result.hotelname,n=t.result.baseprice,r=(t.result.commentcount,e.getDistribution(a)),i=r.uniqueNames,c=r.uniqueCount,l=e.getPieOption(i,c);e.setState({pieOption:Object(s.a)({},N,{legend:Object(s.a)({},N.legend,{data:l.legendData,selected:l.selected}),series:[Object(s.a)({},N.series[0],{data:l.seriesData})]}),lineOption1:Object(s.a)({},k,{xAxis:Object(s.a)({},k.xAxis,{data:i}),series:[Object(s.a)({},k.series[0],{data:c})]}),lineOption2:{title:{text:"Base Price",subtext:"Hotels base price in a sample search result"},xAxis:{type:"category",data:a,axisTick:{alignWithLabel:!0},axisLabel:{rotate:-90}},yAxis:{type:"value"},series:[{data:n,type:"line"}]},data:t})}))}},{key:"render",value:function(){var e={isAuthenticated:this.state.isAuthenticated,authenticate:this.authenticate,signout:this.signout};return r.a.createElement(A.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(D,{authObj:e}),r.a.createElement(x.d,null,r.a.createElement(x.b,{exact:!0,path:"/react-data-charts/"},r.a.createElement(S,{authObj:e})),r.a.createElement(x.b,{path:"/react-data-charts/login"},r.a.createElement(S,{authObj:e})),r.a.createElement(q,{authObj:e,path:"/react-data-charts/piechart"},r.a.createElement(y,this.state.pieOption)),r.a.createElement(q,{authObj:e,path:"/react-data-charts/linechart1"},r.a.createElement(f,this.state.lineOption1)),r.a.createElement(q,{authObj:e,path:"/react-data-charts/linechart2"},r.a.createElement(f,this.state.lineOption2)),r.a.createElement(x.b,{component:L}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[234,1,2]]]);
//# sourceMappingURL=main.ff0c8f57.chunk.js.map