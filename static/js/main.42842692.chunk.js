(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={label:"ContactForm_label__1MOlz",labelText:"ContactForm_labelText__3zO44",input:"ContactForm_input__1NP82",button:"ContactForm_button__3ex8d"}},20:function(t,e,n){t.exports={listItem:"ContactListItem_listItem__3FyR_",listText:"ContactListItem_listText__2I30f",button:"ContactListItem_button__L3tvI"}},25:function(t,e,n){t.exports={label:"Filter_label__2cByh",input:"Filter_input__PR7TG"}},36:function(t,e,n){t.exports={contacts:"ContactsLIst_contacts__2cWxx"}},44:function(t,e,n){},97:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(18),o=n.n(r),s=(n(43),n(44),n(26)),i=n(35),u=n.n(i),l=n(4),b=n(6),p=n.n(b),j=n(10),d=n(5),O=Object(d.b)("app/addContact"),f=Object(d.b)("app/setContacts"),h=Object(d.b)("app/deleteContact"),m=Object(d.b)("app/contactFetchStart"),x=Object(d.b)("app/contactFetchStart"),v=Object(d.b)("app/contactFetchError"),C={addContact:O,setContacts:f,deleteContact:h,setFilter:Object(d.b)("app/setFilter"),contactFetchStarted:m,contactFetchFinished:x,contactFetchError:v},F=n(16),_=n.n(F);_.a.defaults.baseURL="http://localhost:7777";var g={getContacts:function(){var t=Object(j.a)(p.a.mark((function t(){var e,n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.a.get("/contacts");case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),postContact:function(){var t=Object(j.a)(p.a.mark((function t(e){var n,a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.a.post("/contacts",e);case 2:return n=t.sent,a=n.data,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),deleteContact:function(){var t=Object(j.a)(p.a.mark((function t(e){var n,a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("fetch id",e),t.next=3,_.a.delete("/contacts/".concat(e));case 3:return n=t.sent,a=n.data,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},y=C.addContact,w=C.setContacts,N=C.deleteContact,k=C.contactFetchStarted,L=C.contactFetchFinished,S=C.contactFetchError,T={postContactOperation:function(t){return function(){var e=Object(j.a)(p.a.mark((function e(n){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(k()),e.prev=1,e.next=4,g.postContact(t);case 4:a=e.sent,n(y(a)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),n(S(e.t0));case 11:return e.prev=11,n(L()),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(t){return e.apply(this,arguments)}}()},getContactOperation:function(){return function(){var t=Object(j.a)(p.a.mark((function t(e){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(k(!0)),t.prev=1,t.next=4,g.getContacts();case 4:n=t.sent,e(w(n)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e(S(t.t0));case 11:return t.prev=11,e(L(!1)),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})));return function(e){return t.apply(this,arguments)}}()},deleteContactOperation:function(t){return function(){var e=Object(j.a)(p.a.mark((function e(n){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(k(!0)),e.prev=1,e.next=4,g.deleteContact(t);case 4:n(N(t)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n(S(e.t0));case 10:return e.prev=10,n(L(!1)),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[1,7,10,13]])})));return function(t){return e.apply(this,arguments)}}()}},I=n(11),E=n.n(I),z=n(1),A=function(){var t=Object(a.useState)(""),e=Object(s.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),o=Object(s.a)(r,2),i=o[0],b=o[1],p=Object(l.b)(),j=Object(l.c)((function(t){return t.appState.contacts.items})),d=function(t){var e=t.target.value;"name"===t.currentTarget.name&&c(e),"number"===t.currentTarget.name&&b(e)},O=function(){c(""),b("")};return Object(z.jsx)("div",{children:Object(z.jsx)("form",{className:"form",onSubmit:function(t){t.preventDefault();var e=u()(),a={name:n,number:i,id:e};if(j.map((function(t){return t.name.toLowerCase()})).includes(a.name.toLowerCase()))return O(),alert("".concat(a.name," is already in contacts"));p(T.postContactOperation(a)),O()},children:Object(z.jsxs)("div",{className:"form-container",children:[Object(z.jsxs)("label",{className:E.a.label,children:[Object(z.jsx)("p",{className:E.a.labelText,children:"Name"}),Object(z.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:d,value:n,className:E.a.input})]}),Object(z.jsxs)("label",{className:E.a.label,children:[Object(z.jsx)("p",{className:E.a.labelText,children:"Number"}),Object(z.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:d,value:i,className:E.a.input})]}),Object(z.jsx)("button",{type:"submit",className:E.a.button,children:"Add contact"})]})})})},R=n(20),B=n.n(R),P=function(t){var e=t.contactName,n=t.contactNumber,a=t.onClickRemove;return Object(z.jsxs)("li",{className:B.a.listItem,children:[Object(z.jsxs)("p",{className:B.a.listText,children:[e," : ",n]}),Object(z.jsx)("button",{type:"button",className:B.a.button,onClick:a,children:"Delete"})]})},J=n(36),M=n.n(J),Z=(n(77),n(37)),q=n.n(Z),D={contactList:function(t){return t.appState.contacts.items},contactFilter:function(t){return t.appState.filter},contactLoading:function(t){return t.appState.contacts.isLoading},contactError:function(t){return t.appState.contacts.error}},G=function(){var t=Object(l.c)((function(t){return D.contactList(t)})),e=Object(l.c)((function(t){return D.contactFilter(t)})),n=Object(l.c)((function(t){return D.contactLoading(t)})),c=(Object(l.c)((function(t){return D.contactError(t)})),Object(l.b)());Object(a.useEffect)((function(){c(T.getContactOperation())}),[c]);var r=t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}));return n?Object(z.jsx)("h1",{children:Object(z.jsx)(q.a,{type:"Rings",color:"#00BFFF",height:42,width:42})}):Object(z.jsx)("div",{className:M.a.contacts,children:Object(z.jsx)("ul",{children:t.length>0&&r.map((function(t){var e=t.id,n=t.name,a=t.number;return Object(z.jsx)(P,{contactName:n,contactNumber:a,onClickRemove:function(){return t=e,c(T.deleteContactOperation(t));var t}},e)}))})})},U=n(25),W=n.n(U),$=function(){var t=Object(l.c)((function(t){return D.contactFilter(t)})),e=Object(l.b)();return Object(z.jsxs)("label",{children:[Object(z.jsx)("p",{className:W.a.label,children:"Find contacts by name"}),Object(z.jsx)("input",{className:W.a.input,type:"text",value:t,onChange:function(t){return n=t.currentTarget.value,e(C.setFilter(n));var n}})]})},H=$;$.defaultProps={value:""};var K,Q=function(){return Object(z.jsxs)("div",{children:[Object(z.jsx)("h2",{children:"Phonebook"}),Object(z.jsx)(A,{}),Object(z.jsx)("h2",{children:"Contacts"}),Object(z.jsx)(H,{}),Object(z.jsx)(G,{})]})},V=n(15),X=n(3),Y=n(38),tt=n.n(Y),et=n(12),nt=n(9),at=n(8),ct=Object(d.c)({items:[],isLoading:!1,error:""},(K={},Object(nt.a)(K,C.addContact,(function(t,e){var n=e.payload;return Object(at.a)(Object(at.a)({},t),{},{items:[].concat(Object(V.a)(t.items),[n])})})),Object(nt.a)(K,C.deleteContact,(function(t,e){var n=e.payload;return Object(at.a)(Object(at.a)({},t),{},{items:Object(V.a)(t.items.filter((function(t){return t.id!==n})))})})),Object(nt.a)(K,C.setContacts,(function(t,e){var n=e.payload;return console.log(),Object(at.a)(Object(at.a)({},t),{},{items:n})})),Object(nt.a)(K,C.contactFetchStarted,(function(t,e){var n=e.payload;return Object(at.a)(Object(at.a)({},t),{},{isLoading:n})})),Object(nt.a)(K,C.contactFetchFinished,(function(t,e){var n=e.payload;return Object(at.a)(Object(at.a)({},t),{},{isLoading:n})})),Object(nt.a)(K,C.contactFetchError,(function(t,e){var n=e.payload;return Object(at.a)(Object(at.a)({},t),{},{error:n})})),K)),rt=Object(d.c)("",Object(nt.a)({},C.setFilter,(function(t,e){return e.payload}))),ot=Object(X.b)({contacts:ct,filter:rt}),st=n(14),it=Object(X.b)({appState:ot}),ut=[st.a].concat(Object(V.a)(Object(d.d)({serializableCheck:{ignoredActions:[et.a,et.f,et.b,et.c,et.d,et.e]}})),[tt.a]),lt=Object(d.a)({reducer:it,middleware:ut});o.a.render(Object(z.jsx)(c.a.StrictMode,{children:Object(z.jsx)(l.a,{store:lt,children:Object(z.jsx)(Q,{})})}),document.getElementById("root"))}},[[97,1,2]]]);
//# sourceMappingURL=main.42842692.chunk.js.map