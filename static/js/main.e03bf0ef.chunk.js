(this.webpackJsonpstudentplanner=this.webpackJsonpstudentplanner||[]).push([[0],{57:function(e,t,s){},69:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),c=s(34),i=s.n(c),o=s(4),r=s(2),l=s.n(r),j=(s(57),s(3)),d=s(5),u=s(12),h=s(13),b=s(15),O=s(14),m=s(7),x=s(0),p=function(e){var t=Object(n.useState)(""),s=Object(o.a)(t,2),a=s[0],c=s[1],i=Object(n.useState)(""),r=Object(o.a)(i,2),j=r[0],d=r[1],u=Object(n.useState)(""),h=Object(o.a)(u,2),b=(h[0],h[1]),O=Object(n.useState)(""),m=Object(o.a)(O,2),p=m[0],f=m[1],g=Object(n.useState)(0),v=Object(o.a)(g,2),k=v[0],N=v[1];l.a.defaults.withCredentials=!0;return Object(n.useEffect)((function(){l.a.get("http://localhost:3001/login").then((function(e){!0===e.data.loggedIn&&b(e.data.user[0].username)}))}),[]),e.show?Object(x.jsxs)("div",{className:"signupform",children:[Object(x.jsxs)("form",{children:[Object(x.jsx)("h2",{children:"Login"}),Object(x.jsx)("input",{type:"text",onChange:function(e){c(e.target.value)},placeholder:"Username"}),Object(x.jsx)("input",{type:"password",onChange:function(e){d(e.target.value)},placeholder:"Password"})]}),Object(x.jsxs)("div",{className:"formbuttons",children:[Object(x.jsx)("button",{className:"btn-primary",onClick:function(){l.a.post("http://localhost:3001/login",{username:a,password:j}).then((function(e){e.data.auth?(localStorage.setItem("token",e.data.token),localStorage.setItem("currentuser",a),b(!0),window.location.reload(!1)):(b(!1),f("Incorrect Username/Password"),N(k+1))}))},children:"Login"}),Object(x.jsx)("button",{className:"btn-outline",onClick:e.onClose,children:"Close"})]}),Object(x.jsxs)("p",{children:["Don't have an account? ",Object(x.jsx)("a",{href:"/",children:"Sign Up"})]}),Object(x.jsxs)("h3",{children:[p," ",k]})]}):null},f=function(e){var t=Object(n.useState)(""),s=Object(o.a)(t,2),a=s[0],c=s[1],i=Object(n.useState)(""),r=Object(o.a)(i,2),j=r[0],d=r[1],u=Object(n.useState)(""),h=Object(o.a)(u,2),b=h[0],O=h[1],m=Object(n.useState)(""),p=Object(o.a)(m,2),f=p[0],g=p[1];return e.show2?Object(x.jsxs)("div",{className:"signupform",children:[Object(x.jsxs)("form",{children:[Object(x.jsx)("h2",{children:"Sign Up"}),Object(x.jsx)("input",{type:"email",onChange:function(e){d(e.target.value)},placeholder:"E-Mail Address"}),Object(x.jsx)("input",{type:"text",onChange:function(e){O(e.target.value)},placeholder:"Your Name"}),Object(x.jsx)("input",{type:"text",onChange:function(e){c(e.target.value)},placeholder:"Create a Username"}),Object(x.jsx)("h3",{children:"Password"}),Object(x.jsx)("input",{type:"password",onChange:function(e){g(e.target.value)},placeholder:"Choose a Password"})]}),Object(x.jsxs)("div",{className:"formbuttons",children:[Object(x.jsx)("button",{className:"btn-primary",onClick:function(){l.a.post("http://localhost:3001/register",{username:a,email:j,fullname:b,password:f}).then((function(e){console.log(e)}))},children:"Sign Up"}),Object(x.jsx)("button",{className:"btn-outline",onClick:e.onClose,children:"Close"})]}),Object(x.jsxs)("p",{children:["Already have an account? ",Object(x.jsx)("a",{href:"/",children:"Log in"})]})]}):null};var g=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),s=t[0],a=t[1],c=Object(m.b)().isAuthenticated,i=Object(n.useState)(!1),r=Object(o.a)(i,2),l=r[0],j=r[1],u=Object(n.useState)(!1),h=Object(o.a)(u,2),b=h[0],O=h[1];return!c&&Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("nav",{className:"navbar",children:Object(x.jsxs)("div",{className:"navbar-container",children:[Object(x.jsx)(d.b,{to:"/",className:"navbar-logo",children:"Student Planner"}),Object(x.jsx)("div",{className:"menu-icon",onClick:function(){return a(!s)},children:Object(x.jsx)("i",{className:s?"fas fa-times":"fas fa-bars"})}),Object(x.jsxs)("ul",{className:s?"nav-menu active":"nav-menu",children:[Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)(d.b,{to:"/",className:"nav-links",onClick:function(){return a(!1)},children:"Home"})}),Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)("button",{onClick:function(){return j(!0)},children:"Log In"})}),Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)("button",{onClick:function(){return O(!0)},children:"Sign Up"})})]}),Object(x.jsx)(p,{onClose:function(){return j(!1)},show:l}),Object(x.jsx)(f,{onClose:function(){return O(!1)},show2:b})]})})})};var v=function(){var e=Object(m.b)().isAuthenticated,t=Object(n.useState)(!1),s=Object(o.a)(t,2),a=(s[0],s[1]),c=Object(n.useState)(!1),i=Object(o.a)(c,2),r=(i[0],i[1]);return!e&&Object(x.jsx)("div",{className:"hero-container",children:Object(x.jsx)("div",{className:"hero-box-container",children:Object(x.jsxs)("div",{className:"hero-box",children:[Object(x.jsx)("h1",{children:"Plan Your Studies"}),Object(x.jsx)("p",{children:"With the student planner application you can manage your studies in a productive, efficient and fun way. We'll help you advance your academic career with ease."}),Object(x.jsxs)("div",{className:"hero-btns",children:[Object(x.jsx)("button",{className:"btn-outline",onClick:function(){return r(!0)},children:"Sign Up"}),Object(x.jsx)("button",{className:"btn-primary",onClick:function(){return a(!0)},children:"Log In"})]})]})})})},k=s.p+"static/media/kid.47018f4d.jpg",N=s.p+"static/media/desk.095de79f.jpg",C=s.p+"static/media/combo.edf6adb8.jpg";var w=function(){return!Object(m.b)().isAuthenticated&&Object(x.jsxs)("div",{className:"content-container",children:[Object(x.jsxs)("div",{className:"content-image",children:[Object(x.jsx)("img",{src:k,alt:"Kid writing at desk"}),";"]}),Object(x.jsxs)("div",{className:"content",children:[Object(x.jsx)("h2",{children:"Make Study Plans"}),Object(x.jsx)("p",{children:"Create detailed and effective study plans to help you power through your courses, essays and homework with ease."})]}),Object(x.jsxs)("div",{className:"content-image",children:[Object(x.jsx)("img",{src:N,alt:"Child using student planner app for homework"}),";"]}),Object(x.jsxs)("div",{className:"content",children:[Object(x.jsx)("h2",{children:"To Do List Managment"}),Object(x.jsx)("p",{children:"Make lists of all of the tasks you need to manage in order to complete your assignments. Manage your tasks and check them off as you go with Study Planner."})]}),Object(x.jsx)("h3",{children:"Interactive Study"}),Object(x.jsxs)("div",{className:"content",children:[Object(x.jsx)("h2",{children:"Keep Track of Your Progress"}),Object(x.jsx)("p",{children:"Make lists of all of the tasks you need to manage in order to complete your assignments. Manage your tasks and check them off as you go with Study Planner."})]}),Object(x.jsxs)("div",{className:"content-image",children:[Object(x.jsx)("img",{src:C,alt:"Combination of two photos of people using the app"}),";"]})]})},L=function(){var e=Object(m.b)(),t=e.loginWithRedirect;return!e.isAuthenticated&&Object(x.jsx)("div",{className:"btn-primary",onClick:function(){return t()},children:"Log In"})},S=function(){var e=Object(m.b)(),t=e.loginWithRedirect;return!e.isAuthenticated&&Object(x.jsx)("div",{className:"btn-outline",onClick:function(){return t()},children:"Sign Up"})};var y=function(){return!Object(m.b)().isAuthenticated&&Object(x.jsxs)("div",{className:"contentbar",children:[Object(x.jsx)("h2",{children:"Get Started"}),Object(x.jsxs)("div",{className:"content-btns",children:[Object(x.jsx)(S,{}),Object(x.jsx)(L,{})]})]})},T=function(e){Object(b.a)(s,e);var t=Object(O.a)(s);function s(){return Object(u.a)(this,s),t.apply(this,arguments)}return Object(h.a)(s,[{key:"render",value:function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)(g,{}),Object(x.jsx)(v,{}),Object(x.jsx)(w,{}),Object(x.jsx)(y,{})]})}}]),s}(n.Component),I=function(e){Object(b.a)(s,e);var t=Object(O.a)(s);function s(e){var n;return Object(u.a)(this,s),(n=t.call(this,e)).state={LoggedInUser:"",LoggedInEmail:"",LoggedInUsername:""},n}return Object(h.a)(s,[{key:"componentDidMount",value:function(){var e=this;l.a.get("http://localhost:3001/login").then((function(t){!0===t.data.loggedIn&&e.setState({LoggedInUser:t.data.user[0].name})})),l.a.get("http://localhost:3001/login").then((function(t){!0===t.data.loggedIn&&e.setState({LoggedInEmail:t.data.user[0].email})})),l.a.get("http://localhost:3001/login").then((function(t){!0===t.data.loggedIn&&e.setState({LoggedInUsername:t.data.user[0].username})}))}},{key:"render",value:function(){return Object(x.jsxs)("div",{className:"Userprofile",children:[Object(x.jsx)("h2",{children:this.state.LoggedInUser}),Object(x.jsxs)("h4",{children:["Username: ",this.state.LoggedInUsername]}),Object(x.jsx)("p",{children:this.state.LoggedInEmail})]})}}]),s}(a.a.Component),D=function(e){Object(b.a)(s,e);var t=Object(O.a)(s);function s(e){var n;return Object(u.a)(this,s),(n=t.call(this,e)).state={lists:[],currentUser:window.localStorage.currentuser},n}return Object(h.a)(s,[{key:"componentDidMount",value:function(){var e=this;l.a.post("http://localhost:3001/getLists",{currentUser:this.state.currentUser}).then((function(t){e.setState({lists:t.data})}))}},{key:"render",value:function(){return Object(x.jsx)("div",{className:"ToDoDash",children:Object(x.jsxs)(d.b,{to:"/ToDoLists",children:[Object(x.jsx)("h2",{children:"To-Do Lists"}),Object(x.jsx)("div",{className:"ToDoDash-lists",children:this.state.lists.map((function(e,t){return Object(x.jsx)("div",{children:Object(x.jsx)("p",{children:e.list})})}))})]})})}}]),s}(a.a.Component);var U=function(){return Object(x.jsx)("div",{className:"ToDoDash",children:Object(x.jsx)("h2",{children:"Study Plans"})})},M=s(17),P=function(e){Object(b.a)(s,e);var t=Object(O.a)(s);function s(e){var n;return Object(u.a)(this,s),(n=t.call(this,e)).CreateTasks=function(){l.a.post("http://localhost:3001/createTask",{id:n.props.currentList,Task:n.state.Task,status:"false"}),console.log(n.props.currentList),alert("Task Added"),window.location.reload(!1),console.log(Response)},n.CompleteTasks=function(e){l.a.put("http://localhost:3001/completeTask",{id:e,complete:!0}),alert("Task Completed"),window.location.reload(!1)},n.undoComplete=function(e){l.a.put("http://localhost:3001/undoComplete",{id:e,complete:!1}),alert("Task Restored"),window.location.reload(!1)},n.deleteTask=function(e){l.a.delete("http://localhost:3001/deleteTask/".concat(e)),alert("Task Deleted"),window.location.reload(!1)},n.state={currentID:"",Task:"",selectedTasks:[]},n}return Object(h.a)(s,[{key:"componentDidMount",value:function(){var e=this;l.a.post("http://localhost:3001/getCompletedTasks",{}).then((function(t){e.setState({selectedTasks:t.data},(function(){console.log(e.state.selectedTasks)}))}))}},{key:"render",value:function(){var e=this;return this.props.show?Object(x.jsxs)("div",{className:"task-container",children:[Object(x.jsx)("h2",{children:"Tasks"}),Object(x.jsx)("div",{className:"task-box",children:this.props.Tasks.map((function(t){return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"task",children:[Object(x.jsx)("button",{onClick:function(){return e.CompleteTasks(t.task_id)},className:"inner-task",children:t.task}),Object(x.jsx)("div",{className:"delete",children:Object(x.jsx)(M.b,{onClick:function(){return e.deleteTask(t.task_id)}})})]})})}))}),Object(x.jsx)("h3",{children:"Create a new task"}),Object(x.jsx)("input",{type:"text",onChange:function(t){e.setState({Task:t.target.value})},placeholder:"Task Name"}),Object(x.jsx)("button",{className:"btn-primary",onClick:function(){return e.CreateTasks(e.currentList)},children:"Add"}),Object(x.jsx)("h4",{children:"Completed Tasks"}),Object(x.jsx)("div",{className:"task-box",children:this.state.selectedTasks.map((function(t){return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"task",children:[Object(x.jsx)("button",{onClick:function(){return e.undoComplete(t.task_id)},className:"inner-task-complete",children:t.task}),Object(x.jsx)("div",{className:"delete",children:Object(x.jsx)(M.b,{onClick:function(){return e.deleteTask(t.task_id)}})})]})})}))})]}):null}}]),s}(a.a.Component),A=function(e){Object(b.a)(s,e);var t=Object(O.a)(s);function s(e){var n;return Object(u.a)(this,s),(n=t.call(this,e)).createList=function(){l.a.post("http://localhost:3001/createList",{list:n.state.newListName,id:n.state.currentID,currentUser:n.state.currentUser}).then((function(e){n.setState({lists:e.data})}))},n.updateList=function(e){l.a.put("http://localhost:3001/updateList",{list:n.state.updatedListName,id:e}),alert("List name changed"),window.location.reload(!1)},n.deleteList=function(e){l.a.delete("http://localhost:3001/deleteList/".concat(e)),alert("List Deleted"),window.location.reload(!1)},n.getTasks=function(e){l.a.post("http://localhost:3001/getTasks",{id:e}).then((function(t){n.setState({Tasks:t.data},(function(){console.log(t.data)})),n.setState({currentList:e},(function(){console.log(n.state.currentList)}))})).catch((function(e){console.log(e)}))},n.showTasks=function(){n.setState({show:!0})},n.state={lists:[],newListName:"",currentID:"",updatedListName:"",Tasks:[],currentList:[],currentUser:window.localStorage.currentuser,show:!1},n}return Object(h.a)(s,[{key:"componentDidMount",value:function(){var e=this;l.a.get("http://localhost:3001/login").then((function(t){!0===t.data.loggedIn&&e.setState({currentID:t.data.user[0].id})})),l.a.post("http://localhost:3001/getLists",{currentUser:this.state.currentUser}).then((function(t){e.setState({lists:t.data})}))}},{key:"render",value:function(){var e=this;return Object(x.jsxs)("div",{className:"ToDoList",children:[Object(x.jsxs)("div",{className:"ToDoList-wrapper",children:[Object(x.jsx)("h2",{children:"To do lists"}),Object(x.jsx)("p",{children:"CLick on a list to see your tasks, or create a new list"}),Object(x.jsx)("div",{className:"ToDoList-lists",children:this.state.lists.map((function(t){return Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{className:"list-button",children:[Object(x.jsx)("button",{onClick:function(){e.getTasks(t.list_id),e.showTasks()},children:t.list}),Object(x.jsx)("div",{className:"delete",children:Object(x.jsx)(M.b,{onClick:function(){return e.deleteList(t.list_id)}})})]}),Object(x.jsxs)("div",{className:"updateList",children:[Object(x.jsx)("input",{type:"text",onChange:function(t){e.setState({updatedListName:t.target.value})},placeholder:"Update"}),Object(x.jsx)("div",{className:"update",children:Object(x.jsx)(M.a,{onClick:function(){return e.updateList(t.list_id)}})})]})]})}))}),Object(x.jsx)("h3",{children:"Create a new list"}),Object(x.jsx)("input",{type:"text",onChange:function(t){e.setState({newListName:t.target.value})},placeholder:"List Name"}),Object(x.jsx)("button",{className:"btn-primary",onClick:this.createList,children:"Create"})]}),Object(x.jsx)(P,{Tasks:this.state.Tasks,currentList:this.state.currentList,show:this.state.show})]})}}]),s}(a.a.Component),E=function(){return Object(x.jsxs)("div",{className:"Dashboard",children:[Object(x.jsx)(I,{}),Object(x.jsx)(D,{}),Object(x.jsx)(U,{})]})};var _=function(){return Object(x.jsx)("button",{onClick:function(){l.a.post("http://localhost:3001/logout",{}).then((function(e){e.data.message?console.log("an error happened"):alert("user logged out")})),window.location.reload(!1)},children:"Log Out"})};var R=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),s=t[0],a=t[1],c=function(){return a(!1)};return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"Main-navbar-top",children:Object(x.jsx)("div",{className:"Main-navbar-top-half",children:Object(x.jsx)(d.b,{to:"/",className:"navbar-logo",children:"Student Planner"})})}),Object(x.jsx)("nav",{className:"Main-navbar",children:Object(x.jsxs)("div",{className:"Main-navbar-container",children:[Object(x.jsx)("div",{className:"menu-icon",onClick:function(){return a(!s)},children:Object(x.jsx)("i",{className:s?"fas fa-times":"fas fa-bars"})}),Object(x.jsxs)("ul",{className:s?"nav-menu active":"nav-menu",children:[Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)(d.b,{to:"/",className:"nav-links",onClick:c,children:"Dashboard"})}),Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)(d.b,{to:"/ToDoLists",className:"nav-links",onClick:c,children:"To Do Lists"})}),Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)(d.b,{to:"/",className:"nav-links",onClick:c,children:"Study Plans"})}),Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)(d.b,{to:"/help",className:"nav-links",onClick:c,children:"My Account"})}),Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)(_,{})})]})]})})]})};var F=function(){return Object(x.jsxs)("div",{className:"footer",children:[Object(x.jsx)(d.b,{to:"/",className:"footer-logo",children:"Student Planner"}),Object(x.jsxs)("ul",{className:"footernav",children:[Object(x.jsx)("li",{children:Object(x.jsx)(d.b,{to:"/",className:"footer-links",children:"Home"})}),Object(x.jsx)("li",{children:Object(x.jsx)(d.b,{to:"/sign-up",className:"footer-links",children:"Sign Up"})}),Object(x.jsx)("li",{children:Object(x.jsx)(d.b,{to:"/log-in",className:"footer-links",children:"Log In"})}),Object(x.jsx)("li",{children:Object(x.jsx)(d.b,{to:"/help",className:"footer-links",children:"Help"})})]})]})};var K=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),s=t[0],a=t[1];return Object(n.useEffect)((function(){l.a.get("http://localhost:3001/login").then((function(e){!0===e.data.loggedIn&&a(!0)}))}),[]),s?Object(x.jsxs)(d.a,{children:[Object(x.jsx)(R,{}),Object(x.jsxs)(j.c,{children:[Object(x.jsx)(j.a,{path:"/",exact:!0,component:E}),Object(x.jsx)(j.a,{path:"/ToDoLists",component:A})]})]}):Object(x.jsxs)(d.a,{children:[Object(x.jsx)(g,{}),Object(x.jsx)(T,{}),Object(x.jsx)(p,{}),Object(x.jsx)(f,{}),Object(x.jsx)(F,{})]})};i.a.render(Object(x.jsx)(m.a,{domain:"dev-ptcgs9qe.eu.auth0.com",clientId:"IJwileKl8r0eKnSrArNYqckVRsalnfok",redirectUri:window.location.origin,children:Object(x.jsx)(K,{})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.e03bf0ef.chunk.js.map