"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[742],{2742:function(e,n,t){t.r(n),t.d(n,{default:function(){return I}});var r=t(5861),a=t(885),s=t(7757),o=t.n(s),i=t(2791),c=t(577),u=t(2079),l=(t(5462),t(3027)),d=t(3360),h=(t(7632),t(3317)),m=t(3329);var p,f=function(e){var n=e.nameId,t=e.numberId,s=(0,i.useState)(""),p=(0,a.Z)(s,2),f=p[0],b=p[1],g=(0,i.useState)(""),j=(0,a.Z)(g,2),v=j[0],Z=j[1],y=(0,h.Tn)(),C=(0,a.Z)(y,1)[0],w=(0,h.Jx)().data,k=function(){var e=(0,r.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.some((function(e){return e.name.trim().toLowerCase().includes(f.toLowerCase())}));case 2:if(!e.sent){e.next=7;break}return e.abrupt("return",c.Am.error("".concat(f," is already in contacts!")));case 7:return e.next=9,C({name:f,number:v});case 9:case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(l.Z,{onSubmit:function(e){e.preventDefault(),k(),b(""),Z("")},children:[(0,m.jsx)(l.Z.Group,{className:"mb-3",children:(0,m.jsxs)(l.Z.Label,{htmlFor:n,children:["Name",(0,m.jsx)(l.Z.Control,{style:x.input,type:"text",value:f,name:"name",onChange:function(e){var n=e.currentTarget.name,t=e.currentTarget.value;switch(n){case"name":b(t);break;case"number":Z(t);break;default:return}},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]})}),(0,m.jsx)(l.Z.Group,{className:"mb-3",children:(0,m.jsxs)(l.Z.Label,{htmlFor:t,children:["Number",(0,m.jsx)(u.ZP,{type:"tel",value:v,name:"phone",onChange:Z,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]})}),(0,m.jsx)(d.Z,{variant:"success",type:"submit",children:"Add contact"})]}),(0,m.jsx)(c.Ix,{position:"top-center",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,theme:"dark",pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})},x={input:{width:"155%",marginTop:"16px"}},b=t(5048),g=t(375),j=t(1398),v=function(){var e=(0,h.Jx)(),n=e.data,t=void 0===n?[]:n,r=e.isFetching,s=e.isError,o=e.error,i=(0,h.Nt)(),u=(0,a.Z)(i,1)[0],l=(0,b.v9)((function(e){return e.filter})),p=null===t||void 0===t?void 0:t.filter((function(e){return e.name.trim().toLowerCase().includes(l.toLowerCase())})),f=t&&!r&&!r&&(0,m.jsx)("h1",{children:t.name});return(0,m.jsxs)(m.Fragment,{children:[f,s&&c.Am.error("".concat(o.data)),r&&(0,m.jsx)(g.VF,{ariaLabel:"loading-indicator"}),(0,m.jsx)(j.Z,{children:p.map((function(e){var n=e.name,t=e.id,r=e.number;return(0,m.jsxs)(j.Z.Item,{as:"li",style:Z.container,children:[(0,m.jsxs)("p",{children:[n,": ",r]}),(0,m.jsx)(d.Z,{variant:"danger",type:"button",onClick:function(){u(t)},children:"Delete"})]},t)}))}),(0,m.jsx)(c.Ix,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})},Z={container:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"5px"}},y=t(3628),C=t(168),w=t(1223).Z.label(p||(p=(0,C.Z)(["\n  cursor: default;\n  display: flex;\n  flex-direction: column;\n  font-weight: 400;\n  font-size: 18px;\n"]))),k={display:"block",width:"100%",padding:"0.375rem 0.75rem",fontSize:"1rem",fontWeight:"400",lineHeight:"1.5",color:"#212529",backgroundColor:"#fff",backgroundClip:"padding-box",border:"1px solid #ced4da",appearance:"none",borderRadius:" 0.25rem",transition:"border-color .15s ease-in-out,box-shadow .15s ease-in-out"},L=t(4808);var F=function(){var e=(0,b.v9)((function(e){return e.filter.filter})),n=(0,b.I0)();return(0,m.jsxs)(w,{children:["\u041f\u043e\u0448\u0443\u043a \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0443 \u0437\u0430 \u0456\u043c'\u044f\u043c",(0,m.jsx)(y.DebounceInput,{debounceTimeout:500,forceNotifyByEnter:!0,forceNotifyOnBlur:!0,minLength:0,element:"input",style:k,type:"text",name:"filter",value:e,onChange:function(e){return n((0,L.M6)(e.target.value))}})]})},O=t(2049),A={form:{maxWidth:500,margin:10}};var I=function(){return(0,m.jsxs)(O.Z,{children:[(0,m.jsxs)("section",{title:"Phonebook",style:A.form,children:[(0,m.jsx)("h1",{children:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d\u043d\u0430 \u043a\u043d\u0438\u0433\u0430"}),(0,m.jsx)(f,{})]}),(0,m.jsxs)("section",{title:"Contacts",style:A.form,children:[(0,m.jsx)("h2",{children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0438"}),(0,m.jsx)(F,{}),(0,m.jsx)(v,{})]})]})}}}]);
//# sourceMappingURL=742.8f263492.chunk.js.map