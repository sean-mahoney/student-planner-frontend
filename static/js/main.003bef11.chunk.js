(this.webpackJsonpstudentplanner=this.webpackJsonpstudentplanner||[]).push([[0],{57:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(34),r=n.n(c),i=n(3),o=n(2),l=n.n(o),u=(n(57),n(4)),j=n(5),d=n(12),h=n(13),p=n(16),b=n(15),O=n(6),m=n(0),x=function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),s=n[0],c=n[1],r=Object(a.useState)(""),o=Object(i.a)(r,2),u=o[0],j=o[1],d=Object(a.useState)(""),h=Object(i.a)(d,2),p=(h[0],h[1]),b=Object(a.useState)(""),O=Object(i.a)(b,2),x=O[0],f=O[1],v=Object(a.useState)(0),g=Object(i.a)(v,2),k=g[0],N=g[1];l.a.defaults.withCredentials=!0;return e.show?Object(m.jsxs)("div",{className:"signupform",children:[Object(m.jsxs)("form",{children:[Object(m.jsx)("h2",{children:"Login"}),Object(m.jsx)("input",{type:"text",onChange:function(e){c(e.target.value)},placeholder:"Username"}),Object(m.jsx)("input",{type:"password",onChange:function(e){j(e.target.value)},placeholder:"Password"})]}),Object(m.jsxs)("div",{className:"formbuttons",children:[Object(m.jsx)("button",{className:"btn-primary",onClick:function(){l.a.post("https://my-student-planner.herokuapp.com/login",{username:s,password:u}).then((function(e){e.data.auth?(localStorage.setItem("token",e.data.token),localStorage.setItem("currentuser",s),p(!0),alert("Logged In"),window.location.reload(!1)):(p(!1),f("Incorrect Username/Password"),N(k+1))}))},children:"Login"}),Object(m.jsx)("button",{className:"btn-outline",onClick:e.onClose,children:"Close"})]}),Object(m.jsxs)("p",{children:["Don't have an account? ",Object(m.jsx)("a",{href:"/",children:"Sign Up"})]}),Object(m.jsxs)("h3",{children:[x," ",k]})]}):null},f=function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),s=n[0],c=n[1],r=Object(a.useState)(""),o=Object(i.a)(r,2),u=o[0],j=o[1],d=Object(a.useState)(""),h=Object(i.a)(d,2),p=h[0],b=h[1],O=Object(a.useState)(""),x=Object(i.a)(O,2),f=x[0],v=x[1];return e.show2?Object(m.jsxs)("div",{className:"signupform",children:[Object(m.jsxs)("form",{children:[Object(m.jsx)("h2",{children:"Sign Up"}),Object(m.jsx)("input",{type:"email",onChange:function(e){j(e.target.value)},placeholder:"E-Mail Address"}),Object(m.jsx)("input",{type:"text",onChange:function(e){b(e.target.value)},placeholder:"Your Name"}),Object(m.jsx)("input",{type:"text",onChange:function(e){c(e.target.value)},placeholder:"Create a Username"}),Object(m.jsx)("h3",{children:"Password"}),Object(m.jsx)("input",{type:"password",onChange:function(e){v(e.target.value)},placeholder:"Choose a Password"})]}),Object(m.jsxs)("div",{className:"formbuttons",children:[Object(m.jsx)("button",{className:"btn-primary",onClick:function(){l.a.post("https://my-student-planner.herokuapp.com/register",{username:s,email:u,fullname:p,password:f}).then((function(e){e.data.userExist?(alert("Account created. Now please log in"),window.location.reload(!1)):alert("That username is already taken")}))},children:"Sign Up"}),Object(m.jsx)("button",{className:"btn-outline",onClick:e.onClose,children:"Close"})]}),Object(m.jsxs)("p",{children:["Already have an account? ",Object(m.jsx)("a",{href:"/",children:"Log in"})]})]}):null};var v=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],s=t[1],c=function(){return s(!1)},r=Object(a.useState)(!1),o=Object(i.a)(r,2),l=o[0],u=o[1],d=Object(a.useState)(!1),h=Object(i.a)(d,2),p=h[0],b=h[1];return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("nav",{className:"navbar",children:Object(m.jsxs)("div",{className:"navbar-container",children:[Object(m.jsx)(j.b,{to:"/",className:"navbar-logo",children:"Student Planner"}),Object(m.jsx)("div",{className:"menu-icon",onClick:function(){return s(!n)},children:Object(m.jsx)(O.d,{})}),Object(m.jsxs)("ul",{className:n?"nav-menu active":"nav-menu",children:[Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(j.b,{to:"/",className:"nav-links",onClick:c,children:"Home"})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)("button",{className:"nav-links",onClick:function(){u(!0),c()},children:"Log In"})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)("button",{className:"nav-links",onClick:function(){b(!0),c()},children:"Sign Up"})})]}),Object(m.jsx)(x,{onClose:function(){return u(!1)},show:l}),Object(m.jsx)(f,{onClose:function(){return b(!1)},show2:p})]})})})},g=n(14);var k=function(){var e=Object(g.b)().isAuthenticated,t=Object(a.useState)(!1),n=Object(i.a)(t,2),s=n[0],c=n[1],r=Object(a.useState)(!1),o=Object(i.a)(r,2),l=o[0],u=o[1];return!e&&Object(m.jsxs)("div",{className:"hero-container",children:[Object(m.jsx)("div",{className:"hero-box-container",children:Object(m.jsxs)("div",{className:"hero-box",children:[Object(m.jsx)("h1",{children:"Plan Your Studies"}),Object(m.jsx)("p",{children:"With the student planner application you can manage your studies in a productive, efficient and fun way. We'll help you advance your academic career with ease."}),Object(m.jsxs)("div",{className:"hero-btns",children:[Object(m.jsx)("button",{className:"btn-outline",onClick:function(){return u(!0)},children:"Sign Up"}),Object(m.jsx)("button",{className:"btn-primary",onClick:function(){return c(!0)},children:"Log In"})]})]})}),Object(m.jsx)(x,{onClose:function(){return c(!1)},show:s}),Object(m.jsx)(f,{onClose:function(){return u(!1)},show2:l})]})},N=n.p+"static/media/kid.47018f4d.jpg",y=n.p+"static/media/desk.095de79f.jpg",C=n.p+"static/media/combo.edf6adb8.jpg";var S=function(){return!Object(g.b)().isAuthenticated&&Object(m.jsxs)("div",{className:"content-container",children:[Object(m.jsxs)("div",{className:"content-wrap",children:[Object(m.jsxs)("div",{className:"content-image",children:[Object(m.jsx)("img",{src:N,alt:"Kid writing at desk"}),";"]}),Object(m.jsxs)("div",{className:"content",children:[Object(m.jsx)("h2",{children:"Make Study Plans"}),Object(m.jsx)("p",{children:"Create detailed and effective study plans to help you power through your courses, essays and homework with ease."})]})]}),Object(m.jsxs)("div",{className:"content-wrap",children:[Object(m.jsxs)("div",{className:"content-image",children:[Object(m.jsx)("img",{src:y,alt:"Child using student planner app for homework"}),";"]}),Object(m.jsxs)("div",{className:"content",children:[Object(m.jsx)("h2",{children:"To Do List Managment"}),Object(m.jsx)("p",{children:"Make lists of all of the tasks you need to manage in order to complete your assignments. Manage your tasks and check them off as you go with Study Planner."})]})]}),Object(m.jsx)("h3",{children:"Interactive Study"}),Object(m.jsxs)("div",{className:"content",children:[Object(m.jsx)("h2",{children:"Keep Track of Your Progress"}),Object(m.jsx)("p",{children:"Make lists of all of the tasks you need to manage in order to complete your assignments. Manage your tasks and check them off as you go with Study Planner."})]}),Object(m.jsxs)("div",{className:"content-image",children:[Object(m.jsx)("img",{src:C,alt:"Combination of two photos of people using the app"}),";"]})]})};var w=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],s=t[1],c=Object(a.useState)(!1),r=Object(i.a)(c,2),o=r[0],l=r[1];return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"contentbar",children:[Object(m.jsx)("h2",{children:"Get Started"}),Object(m.jsxs)("div",{className:"content-btns",children:[Object(m.jsx)("button",{className:"btn-outline",onClick:function(){return l(!0)},children:"Sign Up"}),Object(m.jsx)("button",{className:"btn-primary",onClick:function(){return s(!0)},children:"Log In"})]})]}),Object(m.jsx)(x,{onClose:function(){return s(!1)},show:n}),Object(m.jsx)(f,{onClose:function(){return l(!1)},show2:o})]})},L=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(v,{}),Object(m.jsx)(k,{}),Object(m.jsx)(S,{}),Object(m.jsx)(w,{})]})}}]),n}(a.Component),P=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={LoggedInUser:"",LoggedInEmail:"",LoggedInUsername:""},a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;l.a.get("https://my-student-planner.herokuapp.com/login").then((function(t){!0===t.data.loggedIn&&e.setState({LoggedInUser:t.data.user[0].name})})),l.a.get("https://my-student-planner.herokuapp.com/login").then((function(t){!0===t.data.loggedIn&&e.setState({LoggedInEmail:t.data.user[0].email})})),l.a.get("https://my-student-planner.herokuapp.com/login").then((function(t){!0===t.data.loggedIn&&e.setState({LoggedInUsername:t.data.user[0].username})}))}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"Userprofile",children:[Object(m.jsx)("h2",{children:this.state.LoggedInUser}),Object(m.jsxs)("h4",{children:["Username: ",this.state.LoggedInUsername]}),Object(m.jsx)("p",{children:this.state.LoggedInEmail})]})}}]),n}(s.a.Component),D=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={lists:[],currentUser:window.localStorage.currentuser},a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;l.a.post("https://my-student-planner.herokuapp.com/getLists",{currentUser:this.state.currentUser}).then((function(t){e.setState({lists:t.data})}))}},{key:"render",value:function(){return!this.state.lists.length>0?Object(m.jsx)("div",{className:"ToDoDash",children:Object(m.jsxs)(j.b,{to:"/ToDoLists",children:[Object(m.jsx)("h2",{children:"To-Do Lists"}),Object(m.jsxs)("p",{children:[Object(m.jsx)("em",{children:"No Lists to Show."})," Click here to create some"]})]})}):Object(m.jsx)("div",{className:"ToDoDash",children:Object(m.jsxs)(j.b,{to:"/ToDoLists",children:[Object(m.jsx)("h2",{children:"To-Do Lists"}),Object(m.jsx)("div",{className:"ToDoDash-lists",children:this.state.lists.map((function(e,t){return Object(m.jsx)("div",{children:Object(m.jsx)("p",{children:e.list})})}))})]})})}}]),n}(s.a.Component),T=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={Plans:[],currentUser:window.localStorage.currentuser},a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;l.a.post("https://my-student-planner.herokuapp.com/getPlans",{user:this.state.currentUser}).then((function(t){e.setState({Plans:t.data}),console.log(t.data)}))}},{key:"render",value:function(){return!this.state.Plans.length>0?Object(m.jsx)("div",{className:"ToDoDash",children:Object(m.jsxs)(j.b,{to:"/StudyPlans",children:[Object(m.jsx)("h2",{children:"Study Plans"}),Object(m.jsxs)("p",{children:[Object(m.jsx)("em",{children:"No Plans to Show."})," Click here to create some"]})]})}):Object(m.jsx)("div",{className:"ToDoDash",children:Object(m.jsxs)(j.b,{to:"/StudyPlans",children:[Object(m.jsx)("h2",{children:"Study Plans"}),Object(m.jsx)("div",{className:"ToDoDash-lists",children:this.state.Plans.map((function(e,t){return Object(m.jsx)("div",{children:Object(m.jsx)("p",{children:e.plan})})}))})]})})}}]),n}(s.a.Component);var U=function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),s=(n[0],n[1],Object(a.useState)("")),c=Object(i.a)(s,2),r=c[0],o=c[1],u=Object(a.useState)([]),j=Object(i.a)(u,2),d=j[0],h=j[1],p=Object(a.useState)([]),b=Object(i.a)(p,2),x=b[0],f=b[1];Object(a.useEffect)((function(){l.a.post("https://my-student-planner.herokuapp.com/getTasks",{id:e.currentList}).then((function(e){f(e.data)}))}),[e.currentList]),Object(a.useEffect)((function(){l.a.post("https://my-student-planner.herokuapp.com/getCompletedTasks").then((function(e){h(e.data)}))}),[]);var v=function(t){l.a.delete("https://my-student-planner.herokuapp.com/deleteTask/".concat(t)).then((function(t){l.a.post("https://my-student-planner.herokuapp.com/getTasks",{id:e.currentList}).then((function(e){f(e.data)}))})).then((function(e){l.a.post("https://my-student-planner.herokuapp.com/getCompletedTasks").then((function(e){h(e.data)}))}))};return e.show?Object(m.jsxs)("div",{className:"task-container",children:[Object(m.jsx)("div",{className:"close",children:Object(m.jsx)(O.c,{onClick:e.onClose})}),Object(m.jsx)("h2",{children:"Tasks"}),Object(m.jsx)("div",{className:"task-box",children:x.map((function(t){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"task",children:[Object(m.jsx)("button",{onClick:function(){return n=t.task_id,void l.a.put("https://my-student-planner.herokuapp.com/completeTask",{id:n,complete:!0}).then((function(t){l.a.post("https://my-student-planner.herokuapp.com/getCompletedTasks").then((function(e){h(e.data)})).then((function(t){l.a.post("https://my-student-planner.herokuapp.com/getTasks",{id:e.currentList}).then((function(e){f(e.data)}))}))}));var n},className:"inner-task",children:t.task}),Object(m.jsx)("div",{className:"delete",children:Object(m.jsx)(O.e,{onClick:function(){return v(t.task_id)}})})]})})}))}),Object(m.jsx)("h3",{children:"Create a new task"}),Object(m.jsx)("input",{type:"text",onChange:function(e){o(e.target.value)},placeholder:"Task Name"}),Object(m.jsx)("button",{className:"btn-primary",onClick:function(){return e.currentList,void l.a.post("https://my-student-planner.herokuapp.com/createTask",{id:e.currentList,Task:r,status:"false"}).then((function(t){l.a.post("https://my-student-planner.herokuapp.com/getTasks",{id:e.currentList}).then((function(e){f(e.data)}))}))},children:"Add"}),Object(m.jsx)("h4",{children:"Completed Tasks"}),Object(m.jsx)("div",{className:"task-box",children:d.map((function(t){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"task",children:[Object(m.jsx)("button",{onClick:function(){return n=t.task_id,void l.a.put("https://my-student-planner.herokuapp.com/undoComplete",{id:n,complete:!1}).then((function(t){l.a.post("https://my-student-planner.herokuapp.com/getTasks",{id:e.currentList}).then((function(e){f(e.data)}))})).then((function(e){l.a.post("https://my-student-planner.herokuapp.com/getCompletedTasks").then((function(e){h(e.data)}))}));var n},className:"inner-task-complete",children:t.task}),Object(m.jsx)("div",{className:"delete",children:Object(m.jsx)(O.e,{onClick:function(){return v(t.task_id)}})})]})})}))})]}):null},I=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).createList=function(){l.a.post("https://my-student-planner.herokuapp.com/createList",{list:a.state.newListName,id:a.state.currentID,currentUser:a.state.currentUser}).then((function(e){l.a.post("https://my-student-planner.herokuapp.com/getLists",{currentUser:a.state.currentUser}).then((function(e){a.setState({lists:e.data})}))}))},a.updateList=function(e){l.a.put("https://my-student-planner.herokuapp.com/updateList",{list:a.state.updatedListName,id:e}).then((function(e){l.a.post("https://my-student-planner.herokuapp.com/getLists",{currentUser:a.state.currentUser}).then((function(e){a.setState({lists:e.data})}))}))},a.deleteList=function(e){l.a.delete("https://my-student-planner.herokuapp.com/deleteList/".concat(e)).then((function(e){l.a.post("https://my-student-planner.herokuapp.com/getLists",{currentUser:a.state.currentUser}).then((function(e){a.setState({lists:e.data}),a.setState({show:!1})}))}))},a.setList=function(e){a.setState({currentList:e}),console.log(a.state.currentList)},a.showTasks=function(){a.setState({show:!0})},a.state={lists:[],newListName:"",currentID:"",updatedListName:"",Tasks:[],currentList:0,currentUser:window.localStorage.currentuser,show:!1},a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;l.a.get("https://my-student-planner.herokuapp.com/login").then((function(t){!0===t.data.loggedIn&&e.setState({currentID:t.data.user[0].id})})),l.a.post("https://my-student-planner.herokuapp.com/getLists",{currentUser:this.state.currentUser}).then((function(t){e.setState({lists:t.data})}))}},{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{className:"ToDoList",children:[Object(m.jsxs)("div",{className:"ToDoList-wrapper",children:[Object(m.jsx)("h2",{children:"To do lists"}),Object(m.jsx)("div",{className:"ToDoList-lists",children:this.state.lists.map((function(t){return Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:"list-button",children:[Object(m.jsx)("button",{onClick:function(){e.showTasks(),e.setList(t.list_id)},children:t.list}),Object(m.jsx)("div",{className:"delete",children:Object(m.jsx)(O.e,{onClick:function(){return e.deleteList(t.list_id)}})})]}),Object(m.jsxs)("div",{className:"updateList",children:[Object(m.jsx)("input",{type:"text",onChange:function(t){e.setState({updatedListName:t.target.value})},placeholder:"Update"}),Object(m.jsx)("div",{className:"update",children:Object(m.jsx)(O.a,{onClick:function(){return e.updateList(t.list_id)}})})]})]})}))}),Object(m.jsx)("h3",{children:"Create a new list"}),Object(m.jsx)("input",{type:"text",onChange:function(t){e.setState({newListName:t.target.value})},placeholder:"List Name"}),Object(m.jsx)("button",{className:"btn-primary",onClick:this.createList,children:"Create"})]}),Object(m.jsx)(U,{currentList:this.state.currentList,onClose:function(){return e.setState({show:!1})},show:this.state.show})]})}}]),n}(s.a.Component),M=function(){return Object(m.jsxs)("div",{className:"Dashboard",children:[Object(m.jsx)(P,{}),Object(m.jsx)(D,{}),Object(m.jsx)(T,{})]})};var E=function(){return Object(m.jsx)("button",{onClick:function(){l.a.post("http://localhost:3001/logout",{}).then((function(e){e.data.message?console.log("an error happened"):alert("user logged out")})),window.location.reload(!1)},children:"Log Out"})};var A=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],s=t[1],c=function(){return s(!1)};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"Main-navbar-top",children:Object(m.jsxs)("div",{className:"Main-navbar-top-half",children:[Object(m.jsx)(j.b,{to:"/",className:"navbar-logo",children:"Student Planner"}),Object(m.jsx)("div",{className:"menu-icon",onClick:function(){return s(!n)},children:Object(m.jsx)(O.d,{})})]})}),Object(m.jsx)("nav",{className:"Main-navbar",children:Object(m.jsx)("div",{className:"Main-navbar-container",children:Object(m.jsxs)("ul",{className:n?"nav-menu active":"nav-menu",children:[Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(j.b,{to:"/",className:"nav-links",onClick:c,children:"Dashboard"})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(j.b,{to:"/ToDoLists",className:"nav-links",onClick:c,children:"To Do Lists"})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(j.b,{to:"/StudyPlans",className:"nav-links",onClick:c,children:"Study Plans"})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(E,{})})]})})})]})};var _=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],s=t[1],c=Object(a.useState)(!1),r=Object(i.a)(c,2),o=r[0],l=r[1];return Object(m.jsxs)("div",{className:"footer",children:[Object(m.jsx)(j.b,{to:"/",className:"footer-logo",children:"Student Planner"}),Object(m.jsxs)("ul",{className:"footernav",children:[Object(m.jsx)("li",{children:Object(m.jsx)(j.b,{to:"/",className:"footer-links",children:"Home"})}),Object(m.jsx)("li",{children:Object(m.jsx)("button",{onClick:function(){return l(!0)},children:"Sign Up"})}),Object(m.jsx)("li",{children:Object(m.jsx)("button",{onClick:function(){return s(!0)},children:"Log In"})})]}),Object(m.jsx)(x,{onClose:function(){return s(!1)},show:n}),Object(m.jsx)(f,{onClose:function(){return l(!1)},show2:o})]})};var F=function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),s=n[0],c=n[1],r=Object(a.useState)(0),o=Object(i.a)(r,2),u=o[0],j=o[1],d=Object(a.useState)(0),h=Object(i.a)(d,2),p=h[0],b=h[1],x=Object(a.useState)(""),f=Object(i.a)(x,2),v=f[0],g=f[1],k=Object(a.useState)([]),N=Object(i.a)(k,2),y=N[0],C=N[1],S=Object(a.useState)(""),w=Object(i.a)(S,2),L=w[0],P=w[1],D=Object(a.useState)(""),T=Object(i.a)(D,2),U=T[0],I=T[1],M=Object(a.useState)(""),E=Object(i.a)(M,2),A=E[0],_=E[1],F=Object(a.useState)(""),H=Object(i.a)(F,2),K=H[0],Y=H[1];return Object(a.useEffect)((function(){l.a.post("https://my-student-planner.herokuapp.com/getPla",{id:e.currentPlan}).then((function(e){C(e.data)}))}),[e.currentPlan]),!s.length>0&&c("New Event"),!u.length>0&&j("No Start Date"),!p.length>0&&b("No Due Date"),!v.length>0&&g("No Priority"),e.show?Object(m.jsxs)("div",{className:"pla-wrapper",children:[Object(m.jsx)("div",{className:"close",children:Object(m.jsx)(O.c,{onClick:e.onClose})}),Object(m.jsxs)("div",{className:"inner-pla",children:[Object(m.jsx)("div",{className:"plan-row",children:Object(m.jsx)("h3",{children:e.currentPlanName})}),Object(m.jsx)("div",{className:"title-row",children:Object(m.jsx)("h5",{children:e.currentPlanName})}),Object(m.jsxs)("div",{className:"label-row",children:[Object(m.jsx)("p",{children:"Task/Event"}),Object(m.jsx)("p",{children:"Start Date"}),Object(m.jsx)("p",{children:"Due Date"}),Object(m.jsx)("p",{children:"Priority"})]}),y.map((function(t){return Object(m.jsxs)("div",{className:"subtitle-row",children:[Object(m.jsx)("input",{className:"eventfull",type:"text",placeholder:t.title,onChange:function(e){P(e.target.value)}}),Object(m.jsx)("div",{className:"update-icon",children:Object(m.jsx)(O.a,{onClick:function(){var n,a;n=t.titleid,a=t.title,L?l.a.put("https://my-student-planner.herokuapp.com/updatePlanName",{id:n,title:L}).then((function(t){l.a.post("https://my-student-planner.herokuapp.com/getPla",{id:e.currentPlan}).then((function(e){C(e.data),alert("Event Name Updated")}))})):P(a)}})}),Object(m.jsx)("input",{className:"date1full placeholderclass",type:"date",placeholder:t.startdate,onChange:function(e){I(e.target.value)}}),Object(m.jsx)("input",{className:"date2full placeholderclass",type:"date",placeholder:t.duedate,onChange:function(e){_(e.target.value)}}),Object(m.jsxs)("select",{name:"priority",className:"priority",onChange:function(e){Y(e.target.value)},children:[Object(m.jsx)("option",{value:"",disabled:!0,selected:!0,hidden:!0,children:t.priority}),Object(m.jsx)("option",{value:"low",children:"Low"}),Object(m.jsx)("option",{value:"medium",children:"Medium"}),Object(m.jsx)("option",{value:"high",children:"High"})]}),Object(m.jsx)("div",{className:"update-icon",children:Object(m.jsx)(O.a,{onClick:function(){var n,a,s,c;n=t.titleid,a=t.startdate,s=t.duedate,c=t.priority,U?A?K?l.a.put("https://my-student-planner.herokuapp.com/updatePla",{id:n,title:L,startdate:U,duedate:A,priority:K}).then((function(t){l.a.post("https://my-student-planner.herokuapp.com/getPla",{id:e.currentPlan}).then((function(e){C(e.data),alert("Event Updated")}))})):(Y(c),console.log(K)):(_(s),console.log(A)):I(a)}})}),Object(m.jsx)("div",{className:"delete-icon",children:Object(m.jsx)(O.e,{onClick:function(){return n=t.titleid,void l.a.delete("https://my-student-planner.herokuapp.com/deletePla/".concat(n)).then((function(t){l.a.post("https://my-student-planner.herokuapp.com/getPla",{id:e.currentPlan}).then((function(e){C(e.data)}))}));var n}})})]})})),Object(m.jsx)("div",{className:"title-row",children:Object(m.jsx)("h5",{children:"Create a new event, task or milestone."})}),Object(m.jsxs)("div",{className:"subtitle-row",children:[Object(m.jsx)("input",{className:"event",type:"text",placeholder:"New Task/event name",onChange:function(e){c(e.target.value)}}),Object(m.jsx)("input",{className:"date1",type:"date",onChange:function(e){j(e.target.value)}}),Object(m.jsx)("input",{className:"date2",type:"date",onChange:function(e){b(e.target.value)}}),Object(m.jsxs)("select",{name:"priority",className:"priority",onChange:function(e){g(e.target.value)},children:[Object(m.jsx)("option",{value:"",disabled:!0,selected:!0,hidden:!0,children:"Priority"}),Object(m.jsx)("option",{value:"low",children:"Low"}),Object(m.jsx)("option",{value:"medium",children:"Medium"}),Object(m.jsx)("option",{value:"high",children:"High"})]}),Object(m.jsx)("div",{className:"create",children:Object(m.jsx)(O.b,{onClick:function(){l.a.post("https://my-student-planner.herokuapp.com/createPla",{planid:e.currentPlan,title:s,startdate:u,duedate:p,priority:v}).then((function(t){l.a.post("https://my-student-planner.herokuapp.com/getPla",{id:e.currentPlan}).then((function(e){C(e.data)}))}))}})})]})]})]}):null};var H=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],s=t[1],c=Object(a.useState)(""),r=Object(i.a)(c,2),o=r[0],u=r[1],j=Object(a.useState)(""),d=Object(i.a)(j,2),h=d[0],p=d[1],b=Object(a.useState)("No Due Date"),x=Object(i.a)(b,2),f=x[0],v=x[1],g=Object(a.useState)(""),k=Object(i.a)(g,2),N=k[0],y=k[1],C=Object(a.useState)(""),S=Object(i.a)(C,2),w=S[0],L=S[1],P=Object(a.useState)(0),D=Object(i.a)(P,2),T=D[0],U=D[1],I=Object(a.useState)(!1),M=Object(i.a)(I,2),E=M[0],A=M[1],_=Object(a.useState)(""),H=Object(i.a)(_,2),K=H[0],Y=H[1],J=window.localStorage.currentuser;return Object(a.useEffect)((function(){l.a.get("https://my-student-planner.herokuapp.com/login").then((function(e){!0===e.data.loggedIn&&u(e.data.user[0].id)}))}),[]),Object(a.useEffect)((function(){l.a.post("https://my-student-planner.herokuapp.com/getPlans",{user:J}).then((function(e){s(e.data)}))}),[J]),Object(m.jsxs)("div",{className:"StudyPlans",children:[Object(m.jsxs)("div",{className:"StudyPlans-wrapper",children:[Object(m.jsx)("h2",{children:"Study Plans"}),Object(m.jsx)("div",{className:"StudyPlans-plans",children:n.map((function(e){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"StudyPlans-button",children:[Object(m.jsx)("button",{onClick:function(){var t;A(!0),t=e.planid,U(t),console.log(T),function(e){Y(e),console.log(K)}(e.plan)},children:e.plan}),Object(m.jsxs)("div",{className:"duedate",children:[Object(m.jsx)("p",{children:"Due:"}),Object(m.jsx)("p",{children:e.due})]}),Object(m.jsx)("div",{className:"delete",children:Object(m.jsx)(O.e,{onClick:function(){return t=e.planid,void l.a.delete("https://my-student-planner.herokuapp.com/deletePlan/".concat(t)).then((function(e){l.a.post("https://my-student-planner.herokuapp.com/getPlans",{user:J}).then((function(e){s(e.data),A(!1)}))}));var t}})})]}),Object(m.jsxs)("div",{className:"updateStudy",children:[Object(m.jsx)("input",{type:"text",className:"updateName",onChange:function(e){y(e.target.value)},placeholder:"Update Name"}),Object(m.jsx)("input",{type:"date",className:"updateDate",onChange:function(e){L(e.target.value)}}),Object(m.jsx)("div",{className:"update",children:Object(m.jsx)(O.a,{onClick:function(){return t=e.planid,n=e.plan,a=e.date,void(!N.length>0?y(n):!w.length>0?v(a):l.a.put("https://my-student-planner.herokuapp.com/updatePlan",{plan:N,due:w,id:t}).then((function(e){l.a.post("https://my-student-planner.herokuapp.com/getPlans",{user:J}).then((function(e){s(e.data),y(""),v("")}))})));var t,n,a}})})]})]})}))}),Object(m.jsx)("h3",{children:"Create a new plan/event"}),Object(m.jsx)("input",{type:"text",onChange:function(e){p(e.target.value)},placeholder:"Plan Name"}),Object(m.jsx)("label",{children:"Due Date"}),Object(m.jsx)("input",{type:"date",onChange:function(e){v(e.target.value)}}),Object(m.jsx)("button",{className:"btn-primary",onClick:function(){l.a.post("https://my-student-planner.herokuapp.com/createPlan",{id:o,plan:h,user:J,due:f}).then((function(e){l.a.post("https://my-student-planner.herokuapp.com/getPlans",{user:J}).then((function(e){s(e.data)}))}))},children:"Create"})]}),Object(m.jsx)(F,{show:E,currentPlan:T,currentPlanName:K,onClose:function(){return A(!1)}})]})};var K=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],s=t[1];return l.a.defaults.withCredentials=!0,Object(a.useEffect)((function(){l.a.get("https://my-student-planner.herokuapp.com/isUserAuth",{headers:{"x-access-token":localStorage.getItem("token"),"Access-Control-Allow-Origin":"*"}}).then((function(e){s(!0)}))}),[]),n?Object(m.jsxs)(j.a,{children:[Object(m.jsx)(A,{}),Object(m.jsxs)(u.c,{children:[Object(m.jsx)(u.a,{path:"/",exact:!0,component:M}),Object(m.jsx)(u.a,{path:"/ToDoLists",component:I}),Object(m.jsx)(u.a,{path:"/StudyPlans",component:H})]})]}):Object(m.jsxs)(j.a,{children:[Object(m.jsx)(v,{}),Object(m.jsx)(L,{}),Object(m.jsx)(x,{}),Object(m.jsx)(f,{}),Object(m.jsx)(_,{})]})};r.a.render(Object(m.jsx)(g.a,{domain:"dev-ptcgs9qe.eu.auth0.com",clientId:"IJwileKl8r0eKnSrArNYqckVRsalnfok",redirectUri:window.location.origin,children:Object(m.jsx)(K,{})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.003bef11.chunk.js.map