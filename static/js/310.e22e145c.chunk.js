"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[310],{310:function(n,e,t){t.r(e),t.d(e,{default:function(){return L}});var r,a,i,s,c,o,u=t(791),d=t(420),l=t(895),m=t(168),f=t(924),p=(f.ZP.div(r||(r=(0,m.Z)(["\n  display: flex;\n  padding: 0 20px;\n  gap: 20px;\n  border-bottom: 3px solid rgba(151, 151, 151, 0.31);\n"]))),f.ZP.label(a||(a=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 10px 0;\n  gap: 10px;\n  margin: 0;\n"])))),x=f.ZP.input(i||(i=(0,m.Z)(["\n  width: 200px;\n"]))),h=f.ZP.ul(s||(s=(0,m.Z)(["\n  padding: 0 20px;\n  margin: 0;\n"]))),b=f.ZP.button(c||(c=(0,m.Z)(["\n  margin-left: 10px;\n"]))),v=f.ZP.label(o||(o=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 10px 0;\n  gap: 10px;\n"]))),j=t(184),g=function(){var n=(0,d.I0)(),e=(0,u.useRef)();return(0,j.jsxs)(v,{children:["Find contacts by name:",(0,j.jsx)(x,{type:"text",ref:e,placeholder:"Search by name...",onChange:function(e){var t=e.target.value.trim();n((0,l.T)(t))}})]})},Z=t(234),y=t(553),C=function(n){return n.contact.error},w=function(n){return n.contact.items},F=function(n){return n.contact.isLoading},P=(0,y.P1)([w,function(n){return n.filter}],(function(n,e){var t=e.toLowerCase();return t?n.filter((function(n){return n.name.toLowerCase().includes(t)})):n})),k=function(){var n=(0,d.I0)(),e=(0,d.v9)(P);return(0,j.jsxs)("div",{children:[(0,j.jsx)("h2",{children:"Contacts"}),(0,j.jsx)(h,{children:e.map((function(e){return(0,j.jsxs)("li",{children:[e.name,": ",e.number,(0,j.jsx)(b,{onClick:function(){return t=e.id,void n((0,Z.GK)(t));var t},children:"Delete"})]},e.id)}))})]})},A=function(){var n=(0,d.I0)(),e=(0,d.v9)(w),t=(0,u.useRef)(),r=(0,u.useRef)();return(0,j.jsxs)("form",{onSubmit:function(a){a.preventDefault();var i=a.target,s=t.current.value.trim(),c=r.current.value.trim(),o="".concat(c.slice(0,3),"-").concat(c.slice(3,5),"-").concat(c.slice(5));/^[a-zA-Z\u0400-\u04FF]+(([' -][a-zA-Z\u0400-\u04FF ])?[a-zA-Z\u0400-\u04FF]*)*$/.test(s)?/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/.test(o)?(!function(t){e.some((function(n){return n.name.toLowerCase()===t.name.toLowerCase()}))?alert("".concat(t.name," is already in contacts.")):n((0,Z.uK)({name:t.name,number:t.number}))}({name:s,number:o}),i.reset()):alert("Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"):alert("Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan")},children:[(0,j.jsxs)(p,{children:["Name:",(0,j.jsx)(x,{type:"text",required:!0,ref:t})]}),(0,j.jsxs)(p,{children:["Phone Number:",(0,j.jsx)(x,{type:"tel",required:!0,ref:r})]}),(0,j.jsx)("button",{type:"submit",children:"Add Contact"})]})},L=function(){var n=(0,d.I0)(),e=(0,d.v9)(F),t=(0,d.v9)(C);return(0,u.useEffect)((function(){n((0,Z.yF)())}),[n]),(0,j.jsxs)("div",{children:[(0,j.jsx)("h1",{children:"Contact Book"}),(0,j.jsx)(A,{}),(0,j.jsx)(g,{}),e&&!t&&(0,j.jsx)("b",{children:"Request in progress..."}),(0,j.jsx)(k,{})]})}}}]);
//# sourceMappingURL=310.e22e145c.chunk.js.map