(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{12:function(t,e,n){t.exports={filter:"Filter_filter__1E5tH"}},19:function(t,e,n){},2:function(t,e,n){t.exports={list:"ContactList_list__2T7aG",item:"ContactList_item__3YsZK",entry:"ContactList_entry__12DSb",number:"ContactList_number__14V4G"}},21:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(10),r=n.n(c),s=(n(19),n(13)),i=n(4),o=n(5),l=n(7),u=n(6),d=n(2),m=n.n(d),b=n(0),h=function(t){var e=t.filter,n=t.contacts,a=t.onDeleteContact;return Object(b.jsx)("ul",{className:m.a.list,children:n.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())})).map((function(t){var e=t.id,n=t.name,c=t.number;return Object(b.jsxs)("li",{className:m.a.item,id:e,children:[Object(b.jsxs)("p",{className:m.a.entry,children:[Object(b.jsx)("span",{children:n}),Object(b.jsx)("span",{className:m.a.number,children:c})]}),Object(b.jsx)("button",{type:"button",onClick:a,children:"Delete"})]},e)}))})},p=n(11),j=n(3),f=n.n(j),O=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleInputContact=function(e){t.setState(Object(p.a)({},e.target.name,e.target.value))},t.handleAddContact=function(e){e.preventDefault(),t.props.onAddContact(t.state.name,t.state.number),t.setState({name:"",number:""})},t}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("form",{className:f.a.form,onSubmit:this.handleAddContact,children:[Object(b.jsxs)("label",{className:f.a.field,children:["Name",Object(b.jsx)("input",{type:"text",name:"name",value:this.state.name,onChange:this.handleInputContact,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),Object(b.jsxs)("label",{className:f.a.field,children:["Number",Object(b.jsx)("input",{type:"tel",name:"number",value:this.state.number,onChange:this.handleInputContact,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),Object(b.jsx)("button",{className:f.a.button,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),C=n(12),x=n.n(C),_=function(t){var e=t.onFilter,n=t.filter;return Object(b.jsxs)("div",{className:x.a.filter,children:[Object(b.jsx)("p",{children:"Find contacts by name"}),Object(b.jsx)("input",{type:"text",name:"filter",onChange:e,value:n})]})},v=n(8),y=n.n(v),A=n(14),N=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.normalize=function(t){return t.split(" ").map((function(t){var e=t.charAt(0).toUpperCase(),n=t.substring(1);return"".concat(e).concat(n)})).join(" ")},t.handleAddContact=function(e,n){var a=t.normalize(e);if(t.state.contacts.find((function(t){return t.name===a})))alert("".concat(a," is already in contacts."));else{var c={name:a,number:n,id:Object(A.a)()};t.setState((function(t){return{contacts:[].concat(Object(s.a)(t.contacts),[c])}}))}},t.handleFilter=function(e){t.setState({filter:e.target.value})},t.handleDeleteContact=function(e){var n=e.target.parentNode.id;t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==n}))}}))},t}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:y.a.app,children:[Object(b.jsx)("h1",{className:y.a.title,children:"Phonebook"}),Object(b.jsx)(O,{onAddContact:this.handleAddContact}),Object(b.jsx)("h2",{className:y.a.title,children:"Contacts"}),Object(b.jsx)(_,{filter:this.state.filter,onFilter:this.handleFilter}),Object(b.jsx)(h,{filter:this.state.filter,contacts:this.state.contacts,onDeleteContact:this.handleDeleteContact})]})}}]),n}(a.Component);r.a.render(Object(b.jsx)(a.StrictMode,{children:Object(b.jsx)(N,{})}),document.getElementById("root"))},3:function(t,e,n){t.exports={form:"ContactForm_form__1fuOn",button:"ContactForm_button__1MLZK",field:"ContactForm_field__2c9Zi"}},8:function(t,e,n){t.exports={app:"App_app__1IksY",title:"App_title__1YcTA"}}},[[21,1,2]]]);
//# sourceMappingURL=main.e5140d80.chunk.js.map