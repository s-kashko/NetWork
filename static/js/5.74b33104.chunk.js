(window["webpackJsonpmy-app-1"]=window["webpackJsonpmy-app-1"]||[]).push([[5],{299:function(e,t,a){e.exports=a.p+"static/media/userPhoto.5974e044.jpg"},303:function(e,t,a){e.exports={usersPage:"Users_usersPage__mQVSZ",preloader:"Users_preloader__3rtwY",paginator:"Users_paginator__3rjOg",icon__close:"Users_icon__close__2FDkP",icon__open:"Users_icon__open__1ttd5",lastPage:"Users_lastPage__3E52s"}},304:function(e,t,a){e.exports={paginator:"Paginator_paginator__2tyKK",button:"Paginator_button__3JCI_",inpError:"Paginator_inpError__2O9R4"}},305:function(e,t,a){e.exports={user:"User_user__2685s",avatar:"User_avatar__3VMDy",photo:"User_photo__oFDBZ",description:"User_description__YcnNY",descriptionStatus:"User_descriptionStatus__-VyNo",info:"User_info__1uRtW",location:"User_location__NaYgD"}},318:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a.n(n),s=a(19),o=a(40),c=a(41),i=a(44),u=a(42),l=a(45),p=a(0),m=a.n(p),d=a(22),g=a(99),f=a(73),_=a(303),h=a.n(_),P=a(304),E=a.n(P),b=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={inputError:!1,displayNumber:null,inputMode:!1},a.setInputMode=function(e){a.setState({inputMode:!0}),a.checkDisplayValue(e)},a.disableInputMode=function(){a.setState({inputMode:!1})},a.checkDisplayValue=function(e){var t=a.props,n=t.startPage,r=t.finishPage,s=e.currentTarget.value;s>=n&&s<=r?a.setState({inputError:!1,displayNumber:s}):(a.setState({displayNumber:s}),a.setState({inputError:!0}))},a.setPageOnEvent=function(e){var t=a.props,n=t.startPage,r=t.finishPage,s=t.currentPage,o=t.dispatchNewPage,c=+e.currentTarget.value;c>=n&&c<=r&&c!==s?(a.setState({inputError:!1}),o(c)):c!==s&&a.setState({inputError:!0})},a.setPageOnKey=function(e){"Enter"===e.key&&(a.setPageOnEvent(e),a.setState({inputMode:!1}))},a}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.setState({displayNumber:this.props.currentPage})}},{key:"render",value:function(){var e=this.props,t=e.currentPage,a=e.startPage,n=e.finishPage,r=e.dispatchNewPage;return m.a.createElement("section",{className:E.a.paginatorWrapper},m.a.createElement("nav",{className:E.a.paginator},t!==a&&m.a.createElement("span",{className:E.a.button,tabIndex:"0",onClick:function(){return r(a)},onKeyPress:function(e){13===e.charCode&&r(a)}},"First"),this.state.inputMode?m.a.createElement("input",{type:"number",value:this.state.displayNumber,min:a,max:n,className:this.state.inputError?E.a.inpError:"",onClick:this.setPageOnEvent,onKeyPress:this.setPageOnKey,onChange:this.checkDisplayValue,onBlur:this.disableInputMode}):m.a.createElement("input",{type:"number",value:t,min:a,max:n,onInput:this.setInputMode,onClick:this.setPageOnEvent,onChange:function(){}}),t!==n&&m.a.createElement("span",{className:E.a.button,tabIndex:"0",onClick:function(){return r(n)},onKeyPress:function(e){13===e.charCode&&r(n)}},"Last")))}}]),t}(m.a.Component),v=a(97),y=a(12),N=a(305),O=a.n(N),k=function(e){var t=e.setFollow,n=e.user,r=n.id,s=n.photos,o=n.followed,c=n.name,i=n.status,u=n.followInProgress,l=null!==s.small?s.small:a(299);return m.a.createElement("section",{className:O.a.user},m.a.createElement("section",{className:O.a.avatar},m.a.createElement(y.c,{to:"/profile/"+r},m.a.createElement("img",{src:l,alt:"avatar",className:O.a.photo})),o?m.a.createElement("button",{onClick:function(){return t(r,!1)},disabled:u},"Unfollow"):m.a.createElement("button",{onClick:function(){return t(r,!0)},disabled:u},"Follow")),m.a.createElement("section",{className:O.a.description},m.a.createElement("div",{className:O.a.info},m.a.createElement("p",null,c),m.a.createElement("p",{className:O.a.descriptionStatus},i)),m.a.createElement("div",{className:O.a.location},m.a.createElement("p",null,"country",","),m.a.createElement("p",null,"city"))))},C=Object(d.b)(null,{setFollow:g.b})((function(e){return m.a.createElement(k,e)})),S=function(e){var t=Object(p.useState)(!1),a=Object(f.a)(t,2),n=a[0],r=a[1],s=Object(p.useState)(!1),o=Object(f.a)(s,2),c=o[0],i=o[1],u=m.a.createRef(),l=m.a.createRef();Object(p.useEffect)((function(){n&&u.current.focus(),!n&&c&&(l.current.focus(),i(!1))}),[n,u,l,c]);var d=function(){return r(!0)},g=function(){r(!1),i(!0)},_=e.users,P=e.isLoading,E=e.currentPage,y=e.pagesCount,N=_.map((function(e){return m.a.createElement(C,{user:e,key:e.id})}));return m.a.createElement("div",{className:h.a.usersPage},P&&m.a.createElement(v.a,{className:h.a.preloader}),n?m.a.createElement("div",{className:h.a.paginator},m.a.createElement("div",{className:h.a.icon__close,ref:u,tabIndex:"0",onClick:g,onKeyPress:function(e){e.preventDefault(),27!==e.charCode&&13!==e.charCode||g()}}),m.a.createElement(b,{startPage:1,finishPage:y,currentPage:E,dispatchNewPage:function(t,a){t!==e.currentPage&&e.setUsers(t,a)}})):m.a.createElement("div",{className:"".concat(h.a.paginator," ").concat(h.a.icon__open),ref:l,onClick:d,onKeyPress:function(e){e.preventDefault(),32!==e.charCode&&13!==e.charCode||d()},tabIndex:"0"}),N,E===y&&m.a.createElement("div",{className:h.a.lastPage},"You have reached the last page..."))},j=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={usersLoading:!1},a.endlessScroll=Object(s.a)(r.a.mark((function e(){var t,n,s,o,c,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=a.props,n=t.currentPage,s=t.pagesCount,o=t.setUsers,c=a.state.usersLoading,i=document.documentElement,!(i.scrollHeight-i.scrollTop-i.clientHeight<100&&n<s)||c){e.next=9;break}return a.setState({usersLoading:!0}),e.next=8,o(n+1,!0);case 8:a.setState({usersLoading:!1});case 9:case"end":return e.stop()}}),e)}))),a}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("scroll",this.endlessScroll),0===this.props.users.length&&this.props.setUsers(this.props.currentPage)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("scroll",this.endlessScroll)}},{key:"render",value:function(){return m.a.createElement(S,this.props)}}]),t}(m.a.Component);t.default=Object(d.b)((function(e){return{users:e.usersPage.users,pageSize:e.usersPage.pageSize,currentPage:e.usersPage.currentPage,pagesCount:e.usersPage.pagesCount,isLoading:e.usersPage.isLoading}}),{setUsers:g.c})(j)}}]);
//# sourceMappingURL=5.74b33104.chunk.js.map