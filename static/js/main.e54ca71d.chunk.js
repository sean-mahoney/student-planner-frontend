(this.webpackJsonpstudentplanner=this.webpackJsonpstudentplanner||[]).push([[0],{57:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(34),i=n.n(c),r=n(3),l=n(2),o=n.n(l),u=(n(57),n(4)),j=n(5),d=n(13),h=n(14),b=n(16),p=n(15),O=n(0),m=function(e){var t=Object(a.useState)(""),n=Object(r.a)(t,2),s=n[0],c=n[1],i=Object(a.useState)(""),l=Object(r.a)(i,2),u=l[0],j=l[1],d=Object(a.useState)(""),h=Object(r.a)(d,2),b=(h[0],h[1]),p=Object(a.useState)(""),m=Object(r.a)(p,2),x=m[0],f=m[1],v=Object(a.useState)(0),g=Object(r.a)(v,2),N=g[0],k=g[1];o.a.defaults.withCredentials=!0;return Object(a.useEffect)((function(){o.a.get("https://my-student-planner.herokuapp.com/login").then((function(e){!0===e.data.loggedIn&&b(e.data.user[0].username)}))}),[]),e.show?Object(O.jsxs)("div",{className:"signupform",children:[Object(O.jsxs)("form",{children:[Object(O.jsx)("h2",{children:"Login"}),Object(O.jsx)("input",{type:"text",onChange:function(e){c(e.target.value)},placeholder:"Username"}),Object(O.jsx)("input",{type:"password",onChange:function(e){j(e.target.value)},placeholder:"Password"})]}),Object(O.jsxs)("div",{className:"formbuttons",children:[Object(O.jsx)("button",{className:"btn-primary",onClick:function(){o.a.post("https://my-student-planner.herokuapp.com/login",{username:s,password:u}).then((function(e){e.data.auth?(localStorage.setItem("token",e.data.token),localStorage.setItem("currentuser",s),b(!0),window.location.reload(!1)):(b(!1),f("Incorrect Username/Password"),k(N+1))}))},children:"Login"}),Object(O.jsx)("button",{className:"btn-outline",onClick:e.onClose,children:"Close"})]}),Object(O.jsxs)("p",{children:["Don't have an account? ",Object(O.jsx)("a",{href:"/",children:"Sign Up"})]}),Object(O.jsxs)("h3",{children:[x," ",N]})]}):null},x=function(e){var t=Object(a.useState)(""),n=Object(r.a)(t,2),s=n[0],c=n[1],i=Object(a.useState)(""),l=Object(r.a)(i,2),u=l[0],j=l[1],d=Object(a.useState)(""),h=Object(r.a)(d,2),b=h[0],p=h[1],m=Object(a.useState)(""),x=Object(r.a)(m,2),f=x[0],v=x[1];return e.show2?Object(O.jsxs)("div",{className:"signupform",children:[Object(O.jsxs)("form",{children:[Object(O.jsx)("h2",{children:"Sign Up"}),Object(O.jsx)("input",{type:"email",onChange:function(e){j(e.target.value)},placeholder:"E-Mail Address"}),Object(O.jsx)("input",{type:"text",onChange:function(e){p(e.target.value)},placeholder:"Your Name"}),Object(O.jsx)("input",{type:"text",onChange:function(e){c(e.target.value)},placeholder:"Create a Username"}),Object(O.jsx)("h3",{children:"Password"}),Object(O.jsx)("input",{type:"password",onChange:function(e){v(e.target.value)},placeholder:"Choose a Password"})]}),Object(O.jsxs)("div",{className:"formbuttons",children:[Object(O.jsx)("button",{className:"btn-primary",onClick:function(){o.a.post("https://my-student-planner.herokuapp.com/register",{username:s,email:u,fullname:b,password:f}).then((function(e){e.data.userExist?(alert("Account created. Now please log in"),window.location.reload(!1)):alert("That username is already taken")}))},children:"Sign Up"}),Object(O.jsx)("button",{className:"btn-outline",onClick:e.onClose,children:"Close"})]}),Object(O.jsxs)("p",{children:["Already have an account? ",Object(O.jsx)("a",{href:"/",children:"Log in"})]})]}):null};var f=function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),n=t[0],s=t[1],c=Object(a.useState)(!1),i=Object(r.a)(c,2),l=i[0],o=i[1],u=Object(a.useState)(!1),d=Object(r.a)(u,2),h=d[0],b=d[1];return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("nav",{className:"navbar",children:Object(O.jsxs)("div",{className:"navbar-container",children:[Object(O.jsx)(j.b,{to:"/",className:"navbar-logo",children:"Student Planner"}),Object(O.jsx)("div",{className:"menu-icon",onClick:function(){return s(!n)},children:Object(O.jsx)("i",{className:n?"fas fa-times":"fas fa-bars"})}),Object(O.jsxs)("ul",{className:n?"nav-menu active":"nav-menu",children:[Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)(j.b,{to:"/",className:"nav-links",onClick:function(){return s(!1)},children:"Home"})}),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)("button",{onClick:function(){return o(!0)},children:"Log In"})}),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)("button",{onClick:function(){return b(!0)},children:"Sign Up"})})]}),Object(O.jsx)(m,{onClose:function(){return o(!1)},show:l}),Object(O.jsx)(x,{onClose:function(){return b(!1)},show2:h})]})})})},v=n(11);var g=function(){var e=Object(v.b)().isAuthenticated,t=Object(a.useState)(!1),n=Object(r.a)(t,2),s=(n[0],n[1]),c=Object(a.useState)(!1),i=Object(r.a)(c,2),l=(i[0],i[1]);return!e&&Object(O.jsx)("div",{className:"hero-container",children:Object(O.jsx)("div",{className:"hero-box-container",children:Object(O.jsxs)("div",{className:"hero-box",children:[Object(O.jsx)("h1",{children:"Plan Your Studies"}),Object(O.jsx)("p",{children:"With the student planner application you can manage your studies in a productive, efficient and fun way. We'll help you advance your academic career with ease."}),Object(O.jsxs)("div",{className:"hero-btns",children:[Object(O.jsx)("button",{className:"btn-outline",onClick:function(){return l(!0)},children:"Sign Up"}),Object(O.jsx)("button",{className:"btn-primary",onClick:function(){return s(!0)},children:"Log In"})]})]})})})},N=n.p+"static/media/kid.47018f4d.jpg",k=n.p+"static/media/desk.095de79f.jpg",y=n.p+"static/media/combo.edf6adb8.jpg";var S=function(){return!Object(v.b)().isAuthenticated&&Object(O.jsxs)("div",{className:"content-container",children:[Object(O.jsxs)("div",{className:"content-image",children:[Object(O.jsx)("img",{src:N,alt:"Kid writing at desk"}),";"]}),Object(O.jsxs)("div",{className:"content",children:[Object(O.jsx)("h2",{children:"Make Study Plans"}),Object(O.jsx)("p",{children:"Create detailed and effective study plans to help you power through your courses, essays and homework with ease."})]}),Object(O.jsxs)("div",{className:"content-image",children:[Object(O.jsx)("img",{src:k,alt:"Child using student planner app for homework"}),";"]}),Object(O.jsxs)("div",{className:"content",children:[Object(O.jsx)("h2",{children:"To Do List Managment"}),Object(O.jsx)("p",{children:"Make lists of all of the tasks you need to manage in order to complete your assignments. Manage your tasks and check them off as you go with Study Planner."})]}),Object(O.jsx)("h3",{children:"Interactive Study"}),Object(O.jsxs)("div",{className:"content",children:[Object(O.jsx)("h2",{children:"Keep Track of Your Progress"}),Object(O.jsx)("p",{children:"Make lists of all of the tasks you need to manage in order to complete your assignments. Manage your tasks and check them off as you go with Study Planner."})]}),Object(O.jsxs)("div",{className:"content-image",children:[Object(O.jsx)("img",{src:y,alt:"Combination of two photos of people using the app"}),";"]})]})},C=function(){var e=Object(v.b)(),t=e.loginWithRedirect;return!e.isAuthenticated&&Object(O.jsx)("div",{className:"btn-primary",onClick:function(){return t()},children:"Log In"})},w=function(){var e=Object(v.b)(),t=e.loginWithRedirect;return!e.isAuthenticated&&Object(O.jsx)("div",{className:"btn-outline",onClick:function(){return t()},children:"Sign Up"})};var L=function(){return!Object(v.b)().isAuthenticated&&Object(O.jsxs)("div",{className:"contentbar",children:[Object(O.jsx)("h2",{children:"Get Started"}),Object(O.jsxs)("div",{className:"content-btns",children:[Object(O.jsx)(w,{}),Object(O.jsx)(C,{})]})]})},P=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(f,{}),Object(O.jsx)(g,{}),Object(O.jsx)(S,{}),Object(O.jsx)(L,{})]})}}]),n}(a.Component),D=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={LoggedInUser:"",LoggedInEmail:"",LoggedInUsername:""},a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;o.a.get("https://my-student-planner.herokuapp.com/login").then((function(t){!0===t.data.loggedIn&&e.setState({LoggedInUser:t.data.user[0].name})})),o.a.get("https://my-student-planner.herokuapp.com/login").then((function(t){!0===t.data.loggedIn&&e.setState({LoggedInEmail:t.data.user[0].email})})),o.a.get("https://my-student-planner.herokuapp.com/login").then((function(t){!0===t.data.loggedIn&&e.setState({LoggedInUsername:t.data.user[0].username})}))}},{key:"render",value:function(){return Object(O.jsxs)("div",{className:"Userprofile",children:[Object(O.jsx)("h2",{children:this.state.LoggedInUser}),Object(O.jsxs)("h4",{children:["Username: ",this.state.LoggedInUsername]}),Object(O.jsx)("p",{children:this.state.LoggedInEmail})]})}}]),n}(s.a.Component),T=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={lists:[],currentUser:window.localStorage.currentuser},a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;o.a.post("https://my-student-planner.herokuapp.com/getLists",{currentUser:this.state.currentUser}).then((function(t){e.setState({lists:t.data})}))}},{key:"render",value:function(){return!this.state.lists.length>0?Object(O.jsx)("div",{className:"ToDoDash",children:Object(O.jsxs)(j.b,{to:"/ToDoLists",children:[Object(O.jsx)("h2",{children:"To-Do Lists"}),Object(O.jsxs)("p",{children:[Object(O.jsx)("em",{children:"No Lists to Show."})," Click here to create some"]})]})}):Object(O.jsx)("div",{className:"ToDoDash",children:Object(O.jsxs)(j.b,{to:"/ToDoLists",children:[Object(O.jsx)("h2",{children:"To-Do Lists"}),Object(O.jsx)("div",{className:"ToDoDash-lists",children:this.state.lists.map((function(e,t){return Object(O.jsx)("div",{children:Object(O.jsx)("p",{children:e.list})})}))})]})})}}]),n}(s.a.Component),U=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={Plans:[],currentUser:window.localStorage.currentuser},a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;o.a.post("https://my-student-planner.herokuapp.com/getPlans",{user:this.state.currentUser}).then((function(t){e.setState({Plans:t.data}),console.log(t.data)}))}},{key:"render",value:function(){return!this.state.Plans.length>0?Object(O.jsx)("div",{className:"ToDoDash",children:Object(O.jsxs)(j.b,{to:"/StudyPlans",children:[Object(O.jsx)("h2",{children:"Study Plans"}),Object(O.jsxs)("p",{children:[Object(O.jsx)("em",{children:"No Plans to Show."})," Click here to create some"]})]})}):Object(O.jsx)("div",{className:"ToDoDash",children:Object(O.jsxs)(j.b,{to:"/StudyPlans",children:[Object(O.jsx)("h2",{children:"Study Plans"}),Object(O.jsx)("div",{className:"ToDoDash-lists",children:this.state.Plans.map((function(e,t){return Object(O.jsx)("div",{children:Object(O.jsx)("p",{children:e.plan})})}))})]})})}}]),n}(s.a.Component),I=n(8);var M=function(e){var t=Object(a.useState)(""),n=Object(r.a)(t,2),s=(n[0],n[1],Object(a.useState)("")),c=Object(r.a)(s,2),i=c[0],l=c[1],u=Object(a.useState)([]),j=Object(r.a)(u,2),d=j[0],h=j[1],b=Object(a.useState)([]),p=Object(r.a)(b,2),m=p[0],x=p[1];Object(a.useEffect)((function(){o.a.post("https://my-student-planner.herokuapp.com/getTasks",{id:e.currentList}).then((function(e){x(e.data)}))}),[e.currentList]),Object(a.useEffect)((function(){o.a.post("https://my-student-planner.herokuapp.com/getCompletedTasks").then((function(e){h(e.data)}))}),[]);var f=function(t){o.a.delete("https://my-student-planner.herokuapp.com/deleteTask/".concat(t)).then((function(t){o.a.post("https://my-student-planner.herokuapp.com/getTasks",{id:e.currentList}).then((function(e){x(e.data)}))}))};return e.show?Object(O.jsxs)("div",{className:"task-container",children:[Object(O.jsx)("h2",{children:"Tasks"}),Object(O.jsx)("div",{className:"task-box",children:m.map((function(t){return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"task",children:[Object(O.jsx)("button",{onClick:function(){return n=t.task_id,void o.a.put("https://my-student-planner.herokuapp.com/completeTask",{id:n,complete:!0}).then((function(t){o.a.post("https://my-student-planner.herokuapp.com/getCompletedTasks").then((function(e){h(e.data)})).then((function(t){o.a.post("https://my-student-planner.herokuapp.com/getTasks",{id:e.currentList}).then((function(e){x(e.data)}))}))}));var n},className:"inner-task",children:t.task}),Object(O.jsx)("div",{className:"delete",children:Object(O.jsx)(I.c,{onClick:function(){return f(t.task_id)}})})]})})}))}),Object(O.jsx)("h3",{children:"Create a new task"}),Object(O.jsx)("input",{type:"text",onChange:function(e){l(e.target.value)},placeholder:"Task Name"}),Object(O.jsx)("button",{className:"btn-primary",onClick:function(){return e.currentList,void o.a.post("https://my-student-planner.herokuapp.com/createTask",{id:e.currentList,Task:i,status:"false"}).then((function(t){o.a.post("https://my-student-planner.herokuapp.com/getTasks",{id:e.currentList}).then((function(e){x(e.data)}))}))},children:"Add"}),Object(O.jsx)("h4",{children:"Completed Tasks"}),Object(O.jsx)("div",{className:"task-box",children:d.map((function(t){return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"task",children:[Object(O.jsx)("button",{onClick:function(){return n=t.task_id,void o.a.put("https://my-student-planner.herokuapp.com/undoComplete",{id:n,complete:!1}).then((function(t){o.a.post("https://my-student-planner.herokuapp.com/getTasks",{id:e.currentList}).then((function(e){x(e.data)}))})).then((function(e){o.a.post("https://my-student-planner.herokuapp.com/getCompletedTasks").then((function(e){h(e.data)}))}));var n},className:"inner-task-complete",children:t.task}),Object(O.jsx)("div",{className:"delete",children:Object(O.jsx)(I.c,{onClick:function(){return f(t.task_id)}})})]})})}))})]}):null},E=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).createList=function(){o.a.post("http://localhost:3001/createList",{list:a.state.newListName,id:a.state.currentID,currentUser:a.state.currentUser}).then((function(e){o.a.post("http://localhost:3001/getLists",{currentUser:a.state.currentUser}).then((function(e){a.setState({lists:e.data})}))}))},a.updateList=function(e){o.a.put("http://localhost:3001/updateList",{list:a.state.updatedListName,id:e}).then((function(e){o.a.post("http://localhost:3001/getLists",{currentUser:a.state.currentUser}).then((function(e){a.setState({lists:e.data})}))}))},a.deleteList=function(e){o.a.delete("http://localhost:3001/deleteList/".concat(e)).then((function(e){o.a.post("http://localhost:3001/getLists",{currentUser:a.state.currentUser}).then((function(e){a.setState({lists:e.data})}))}))},a.setList=function(e){a.setState({currentList:e}),console.log(a.state.currentList)},a.showTasks=function(){a.setState({show:!0})},a.state={lists:[],newListName:"",currentID:"",updatedListName:"",Tasks:[],currentList:0,currentUser:window.localStorage.currentuser,show:!1},a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;o.a.get("http://localhost:3001/login").then((function(t){!0===t.data.loggedIn&&e.setState({currentID:t.data.user[0].id})})),o.a.post("http://localhost:3001/getLists",{currentUser:this.state.currentUser}).then((function(t){e.setState({lists:t.data})}))}},{key:"render",value:function(){var e=this;return Object(O.jsxs)("div",{className:"ToDoList",children:[Object(O.jsxs)("div",{className:"ToDoList-wrapper",children:[Object(O.jsx)("h2",{children:"To do lists"}),Object(O.jsx)("div",{className:"ToDoList-lists",children:this.state.lists.map((function(t){return Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{className:"list-button",children:[Object(O.jsx)("button",{onClick:function(){e.showTasks(),e.setList(t.list_id)},children:t.list}),Object(O.jsx)("div",{className:"delete",children:Object(O.jsx)(I.c,{onClick:function(){return e.deleteList(t.list_id)}})})]}),Object(O.jsxs)("div",{className:"updateList",children:[Object(O.jsx)("input",{type:"text",onChange:function(t){e.setState({updatedListName:t.target.value})},placeholder:"Update"}),Object(O.jsx)("div",{className:"update",children:Object(O.jsx)(I.a,{onClick:function(){return e.updateList(t.list_id)}})})]})]})}))}),Object(O.jsx)("h3",{children:"Create a new list"}),Object(O.jsx)("input",{type:"text",onChange:function(t){e.setState({newListName:t.target.value})},placeholder:"List Name"}),Object(O.jsx)("button",{className:"btn-primary",onClick:this.createList,children:"Create"})]}),Object(O.jsx)(M,{currentList:this.state.currentList,show:this.state.show})]})}}]),n}(s.a.Component),A=function(){return Object(O.jsxs)("div",{className:"Dashboard",children:[Object(O.jsx)(D,{}),Object(O.jsx)(T,{}),Object(O.jsx)(U,{})]})};var _=function(){return Object(O.jsx)("button",{onClick:function(){o.a.post("http://localhost:3001/logout",{}).then((function(e){e.data.message?console.log("an error happened"):alert("user logged out")})),window.location.reload(!1)},children:"Log Out"})};var F=function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),n=t[0],s=t[1],c=function(){return s(!1)};return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"Main-navbar-top",children:Object(O.jsx)("div",{className:"Main-navbar-top-half",children:Object(O.jsx)(j.b,{to:"/",className:"navbar-logo",children:"Student Planner"})})}),Object(O.jsx)("nav",{className:"Main-navbar",children:Object(O.jsxs)("div",{className:"Main-navbar-container",children:[Object(O.jsx)("div",{className:"menu-icon",onClick:function(){return s(!n)},children:Object(O.jsx)("i",{className:n?"fas fa-times":"fas fa-bars"})}),Object(O.jsxs)("ul",{className:n?"nav-menu active":"nav-menu",children:[Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)(j.b,{to:"/",className:"nav-links",onClick:c,children:"Dashboard"})}),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)(j.b,{to:"/ToDoLists",className:"nav-links",onClick:c,children:"To Do Lists"})}),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)(j.b,{to:"/StudyPlans",className:"nav-links",onClick:c,children:"Study Plans"})}),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)(_,{})})]})]})})]})};var H=function(){return Object(O.jsxs)("div",{className:"footer",children:[Object(O.jsx)(j.b,{to:"/",className:"footer-logo",children:"Student Planner"}),Object(O.jsxs)("ul",{className:"footernav",children:[Object(O.jsx)("li",{children:Object(O.jsx)(j.b,{to:"/",className:"footer-links",children:"Home"})}),Object(O.jsx)("li",{children:Object(O.jsx)(j.b,{to:"/sign-up",className:"footer-links",children:"Sign Up"})}),Object(O.jsx)("li",{children:Object(O.jsx)(j.b,{to:"/log-in",className:"footer-links",children:"Log In"})}),Object(O.jsx)("li",{children:Object(O.jsx)(j.b,{to:"/help",className:"footer-links",children:"Help"})})]})]})};var K=function(e){var t=Object(a.useState)(""),n=Object(r.a)(t,2),s=n[0],c=n[1],i=Object(a.useState)(0),l=Object(r.a)(i,2),u=l[0],j=l[1],d=Object(a.useState)(0),h=Object(r.a)(d,2),b=h[0],p=h[1],m=Object(a.useState)(""),x=Object(r.a)(m,2),f=x[0],v=x[1],g=Object(a.useState)([]),N=Object(r.a)(g,2),k=N[0],y=N[1],S=Object(a.useState)(""),C=Object(r.a)(S,2),w=C[0],L=C[1],P=Object(a.useState)(""),D=Object(r.a)(P,2),T=D[0],U=D[1],M=Object(a.useState)(""),E=Object(r.a)(M,2),A=E[0],_=E[1],F=Object(a.useState)(""),H=Object(r.a)(F,2),K=H[0],W=H[1];return Object(a.useEffect)((function(){o.a.post("https://my-student-planner.herokuapp.com/getPla",{id:e.currentPlan}).then((function(e){y(e.data)}))}),[e.currentPlan]),!s.length>0&&c("New Event"),!u.length>0&&j("No Start Date"),!b.length>0&&p("No Due Date"),!f.length>0&&v("No Priority"),e.show?Object(O.jsx)("div",{className:"pla-wrapper",children:Object(O.jsxs)("div",{className:"inner-pla",children:[Object(O.jsx)("div",{className:"plan-row",children:Object(O.jsx)("h3",{children:e.currentPlanName})}),Object(O.jsx)("div",{className:"title-row",children:Object(O.jsx)("h5",{children:e.currentPlanName})}),Object(O.jsxs)("div",{className:"label-row",children:[Object(O.jsx)("p",{children:"Task/Event"}),Object(O.jsx)("p",{children:"Start Date"}),Object(O.jsx)("p",{children:"Due Date"}),Object(O.jsx)("p",{children:"Priority"})]}),k.map((function(t){return Object(O.jsxs)("div",{className:"subtitle-row",children:[Object(O.jsx)("input",{className:"eventfull",type:"text",placeholder:t.title,onChange:function(e){L(e.target.value)}}),Object(O.jsx)("input",{className:"date1full placeholderclass",type:"date",placeholder:t.startdate,onChange:function(e){U(e.target.value)}}),Object(O.jsx)("input",{className:"date2full placeholderclass",type:"date",placeholder:t.duedate,onChange:function(e){_(e.target.value),!A.length>0&&_(t.duedate)}}),Object(O.jsxs)("select",{name:"priority",className:"priority",onChange:function(e){W(e.target.value),!K.length>0&&W(t.priority)},children:[Object(O.jsx)("option",{value:"",disabled:!0,selected:!0,hidden:!0,children:t.priority}),Object(O.jsx)("option",{value:"low",children:"Low"}),Object(O.jsx)("option",{value:"medium",children:"Medium"}),Object(O.jsx)("option",{value:"high",children:"High"})]}),Object(O.jsx)("div",{className:"update-icon",children:Object(O.jsx)(I.a,{onClick:function(){var n,a,s,c,i;n=t.titleid,a=t.title,s=t.startdate,c=t.duedate,i=t.priority,w?T?A?K?o.a.put("https://my-student-planner.herokuapp.com/updatePla",{id:n,title:w,startdate:T,duedate:A,priority:K}).then((function(t){o.a.post("https://my-student-planner.herokuapp.com/getPla",{id:e.currentPlan}).then((function(e){y(e.data),alert("Event Updated")}))})):W(i):_(c):U(s):L(a)}})}),Object(O.jsx)("div",{className:"delete-icon",children:Object(O.jsx)(I.c,{onClick:function(){return n=t.titleid,void o.a.delete("https://my-student-planner.herokuapp.com/deletePla/".concat(n)).then((function(t){o.a.post("https://my-student-planner.herokuapp.com/getPla",{id:e.currentPlan}).then((function(e){y(e.data)}))}));var n}})})]})})),Object(O.jsx)("div",{className:"title-row",children:Object(O.jsx)("h5",{children:"Create a new event, task or milestone."})}),Object(O.jsxs)("div",{className:"subtitle-row",children:[Object(O.jsx)("input",{className:"event",type:"text",placeholder:"New Task/event name",onChange:function(e){c(e.target.value)}}),Object(O.jsx)("input",{className:"date1",type:"date",onChange:function(e){j(e.target.value)}}),Object(O.jsx)("input",{className:"date2",type:"date",onChange:function(e){p(e.target.value)}}),Object(O.jsxs)("select",{name:"priority",className:"priority",onChange:function(e){v(e.target.value)},children:[Object(O.jsx)("option",{value:"",disabled:!0,selected:!0,hidden:!0,children:"Priority"}),Object(O.jsx)("option",{value:"low",children:"Low"}),Object(O.jsx)("option",{value:"medium",children:"Medium"}),Object(O.jsx)("option",{value:"high",children:"High"})]}),Object(O.jsx)("div",{className:"create",children:Object(O.jsx)(I.b,{onClick:function(){o.a.post("https://my-student-planner.herokuapp.com/createPla",{planid:e.currentPlan,title:s,startdate:u,duedate:b,priority:f}).then((function(t){o.a.post("https://my-student-planner.herokuapp.com/getPla",{id:e.currentPlan}).then((function(e){y(e.data)}))}))}})})]})]})}):null};var W=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),n=t[0],s=t[1],c=Object(a.useState)(""),i=Object(r.a)(c,2),l=i[0],u=i[1],j=Object(a.useState)(""),d=Object(r.a)(j,2),h=d[0],b=d[1],p=Object(a.useState)("No Due Date"),m=Object(r.a)(p,2),x=m[0],f=m[1],v=Object(a.useState)(""),g=Object(r.a)(v,2),N=g[0],k=g[1],y=Object(a.useState)(""),S=Object(r.a)(y,2),C=S[0],w=S[1],L=Object(a.useState)(0),P=Object(r.a)(L,2),D=P[0],T=P[1],U=Object(a.useState)(!1),M=Object(r.a)(U,2),E=M[0],A=M[1],_=Object(a.useState)(""),F=Object(r.a)(_,2),H=F[0],W=F[1],Y=window.localStorage.currentuser;return Object(a.useEffect)((function(){o.a.get("http://localhost:3001/login").then((function(e){!0===e.data.loggedIn&&u(e.data.user[0].id)}))}),[]),Object(a.useEffect)((function(){o.a.post("http://localhost:3001/getPlans",{user:Y}).then((function(e){s(e.data)}))}),[Y]),Object(O.jsxs)("div",{className:"StudyPlans",children:[Object(O.jsxs)("div",{className:"StudyPlans-wrapper",children:[Object(O.jsx)("h2",{children:"Study Plans"}),Object(O.jsx)("div",{className:"StudyPlans-plans",children:n.map((function(e){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:"StudyPlans-button",children:[Object(O.jsx)("button",{onClick:function(){var t;A(!0),t=e.planid,T(t),console.log(D),function(e){W(e),console.log(H)}(e.plan)},children:e.plan}),Object(O.jsxs)("div",{className:"duedate",children:[Object(O.jsx)("p",{children:"Due:"}),Object(O.jsx)("p",{children:e.due})]}),Object(O.jsx)("div",{className:"delete",children:Object(O.jsx)(I.c,{onClick:function(){return t=e.planid,void o.a.delete("http://localhost:3001/deletePlan/".concat(t)).then((function(e){o.a.post("http://localhost:3001/getPlans",{user:Y}).then((function(e){s(e.data)}))}));var t}})})]}),Object(O.jsxs)("div",{className:"updateStudy",children:[Object(O.jsx)("input",{type:"text",className:"updateName",onChange:function(e){k(e.target.value)},placeholder:"Update Name"}),Object(O.jsx)("input",{type:"date",className:"updateDate",onChange:function(e){w(e.target.value)}}),Object(O.jsx)("div",{className:"update",children:Object(O.jsx)(I.a,{onClick:function(){return t=e.planid,n=e.plan,a=e.date,void(!N.length>0?k(n):!C.length>0?f(a):o.a.put("http://localhost:3001/updatePlan",{plan:N,due:C,id:t}).then((function(e){o.a.post("http://localhost:3001/getPlans",{user:Y}).then((function(e){s(e.data),k(""),f("")}))})));var t,n,a}})})]})]})}))}),Object(O.jsx)("h3",{children:"Create a new plan/event"}),Object(O.jsx)("input",{type:"text",onChange:function(e){b(e.target.value)},placeholder:"Plan Name"}),Object(O.jsx)("label",{children:"Due Date"}),Object(O.jsx)("input",{type:"date",onChange:function(e){f(e.target.value)}}),Object(O.jsx)("button",{className:"btn-primary",onClick:function(){o.a.post("http://localhost:3001/createPlan",{id:l,plan:h,user:Y,due:x}).then((function(e){o.a.post("http://localhost:3001/getPlans",{user:Y}).then((function(e){s(e.data)}))}))},children:"Create"})]}),Object(O.jsx)(K,{show:E,currentPlan:D,currentPlanName:H})]})};var Y=function(){var e=Object(a.useState)(""),t=Object(r.a)(e,2),n=t[0],s=t[1];return Object(a.useEffect)((function(){o.a.get("https://my-student-planner.herokuapp.com/login").then((function(e){!0===e.data.loggedIn&&s(!0)}))}),[]),n?Object(O.jsxs)(j.a,{children:[Object(O.jsx)(F,{}),Object(O.jsxs)(u.c,{children:[Object(O.jsx)(u.a,{path:"/",exact:!0,component:A}),Object(O.jsx)(u.a,{path:"/ToDoLists",component:E}),Object(O.jsx)(u.a,{path:"/StudyPlans",component:W})]})]}):Object(O.jsxs)(j.a,{children:[Object(O.jsx)(f,{}),Object(O.jsx)(P,{}),Object(O.jsx)(m,{}),Object(O.jsx)(x,{}),Object(O.jsx)(H,{})]})};i.a.render(Object(O.jsx)(v.a,{domain:"dev-ptcgs9qe.eu.auth0.com",clientId:"IJwileKl8r0eKnSrArNYqckVRsalnfok",redirectUri:window.location.origin,children:Object(O.jsx)(Y,{})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.e54ca71d.chunk.js.map