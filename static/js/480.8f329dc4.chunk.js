(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[480],{888:function(e,a,s){"use strict";var r=s(9047);function i(){}function t(){}t.resetWarningCache=i,e.exports=function(){function e(e,a,s,i,t,o){if(o!==r){var n=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw n.name="Invariant Violation",n}}function a(){return e}e.isRequired=e;var s={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:a,element:e,elementType:e,instanceOf:a,node:e,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:t,resetWarningCache:i};return s.PropTypes=s,s}},2007:function(e,a,s){e.exports=s(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},3027:function(e,a,s){"use strict";s.d(a,{Z:function(){return te}});var r=s(1413),i=s(5987),t=s(1694),o=s.n(t),n=s(2007),l=s.n(n),c=s(2791),d=s(3329),f=["as","className","type","tooltip"],v={type:l().string,tooltip:l().bool,as:l().elementType},m=c.forwardRef((function(e,a){var s=e.as,t=void 0===s?"div":s,n=e.className,l=e.type,c=void 0===l?"valid":l,v=e.tooltip,m=void 0!==v&&v,u=(0,i.Z)(e,f);return(0,d.jsx)(t,(0,r.Z)((0,r.Z)({},u),{},{ref:a,className:o()(n,"".concat(c,"-").concat(m?"tooltip":"feedback"))}))}));m.displayName="Feedback",m.propTypes=v;var u=m,p=c.createContext({}),b=s(162),x=["id","bsPrefix","className","type","isValid","isInvalid","as"],h=c.forwardRef((function(e,a){var s=e.id,t=e.bsPrefix,n=e.className,l=e.type,f=void 0===l?"checkbox":l,v=e.isValid,m=void 0!==v&&v,u=e.isInvalid,h=void 0!==u&&u,y=e.as,N=void 0===y?"input":y,Z=(0,i.Z)(e,x),P=(0,c.useContext)(p).controlId;return t=(0,b.vE)(t,"form-check-input"),(0,d.jsx)(N,(0,r.Z)((0,r.Z)({},Z),{},{ref:a,type:f,id:s||P,className:o()(n,t,m&&"is-valid",h&&"is-invalid")}))}));h.displayName="FormCheckInput";var y=h,N=["bsPrefix","className","htmlFor"],Z=c.forwardRef((function(e,a){var s=e.bsPrefix,t=e.className,n=e.htmlFor,l=(0,i.Z)(e,N),f=(0,c.useContext)(p).controlId;return s=(0,b.vE)(s,"form-check-label"),(0,d.jsx)("label",(0,r.Z)((0,r.Z)({},l),{},{ref:a,htmlFor:n||f,className:o()(t,s)}))}));Z.displayName="FormCheckLabel";var P=Z;var I=["id","bsPrefix","bsSwitchPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","className","style","title","type","label","children","as"],j=c.forwardRef((function(e,a){var s=e.id,t=e.bsPrefix,n=e.bsSwitchPrefix,l=e.inline,f=void 0!==l&&l,v=e.disabled,m=void 0!==v&&v,x=e.isValid,h=void 0!==x&&x,N=e.isInvalid,Z=void 0!==N&&N,j=e.feedbackTooltip,k=void 0!==j&&j,w=e.feedback,g=e.feedbackType,F=e.className,C=e.style,R=e.title,T=void 0===R?"":R,E=e.type,_=void 0===E?"checkbox":E,O=e.label,S=e.children,V=e.as,z=void 0===V?"input":V,L=(0,i.Z)(e,I);t=(0,b.vE)(t,"form-check"),n=(0,b.vE)(n,"form-switch");var H=(0,c.useContext)(p).controlId,W=(0,c.useMemo)((function(){return{controlId:s||H}}),[H,s]),A=!S&&null!=O&&!1!==O||function(e,a){return c.Children.toArray(e).some((function(e){return c.isValidElement(e)&&e.type===a}))}(S,P),D=(0,d.jsx)(y,(0,r.Z)((0,r.Z)({},L),{},{type:"switch"===_?"checkbox":_,ref:a,isValid:h,isInvalid:Z,disabled:m,as:z}));return(0,d.jsx)(p.Provider,{value:W,children:(0,d.jsx)("div",{style:C,className:o()(F,A&&t,f&&"".concat(t,"-inline"),"switch"===_&&n),children:S||(0,d.jsxs)(d.Fragment,{children:[D,A&&(0,d.jsx)(P,{title:T,children:O}),w&&(0,d.jsx)(u,{type:g,tooltip:k,children:w})]})})})}));j.displayName="FormCheck";var k=Object.assign(j,{Input:y,Label:P}),w=s(4942),g=(s(2391),["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"]),F=c.forwardRef((function(e,a){var s,t,n=e.bsPrefix,l=e.type,f=e.size,v=e.htmlSize,m=e.id,u=e.className,x=e.isValid,h=void 0!==x&&x,y=e.isInvalid,N=void 0!==y&&y,Z=e.plaintext,P=e.readOnly,I=e.as,j=void 0===I?"input":I,k=(0,i.Z)(e,g),F=(0,c.useContext)(p).controlId;(n=(0,b.vE)(n,"form-control"),Z)?s=(0,w.Z)({},"".concat(n,"-plaintext"),!0):(t={},(0,w.Z)(t,n,!0),(0,w.Z)(t,"".concat(n,"-").concat(f),f),s=t);return(0,d.jsx)(j,(0,r.Z)((0,r.Z)({},k),{},{type:l,size:v,ref:a,readOnly:P,id:m||F,className:o()(u,s,h&&"is-valid",N&&"is-invalid","color"===l&&"".concat(n,"-color"))}))}));F.displayName="FormControl";var C=Object.assign(F,{Feedback:u}),R=(0,s(6543).Z)("form-floating"),T=["controlId","as"],E=c.forwardRef((function(e,a){var s=e.controlId,t=e.as,o=void 0===t?"div":t,n=(0,i.Z)(e,T),l=(0,c.useMemo)((function(){return{controlId:s}}),[s]);return(0,d.jsx)(p.Provider,{value:l,children:(0,d.jsx)(o,(0,r.Z)((0,r.Z)({},n),{},{ref:a}))})}));E.displayName="FormGroup";var _=E,O=s(885),S=["as","bsPrefix","className"],V=["className"];var z=c.forwardRef((function(e,a){var s=function(e){var a=e.as,s=e.bsPrefix,t=e.className,n=(0,i.Z)(e,S);s=(0,b.vE)(s,"col");var l=(0,b.pi)(),c=[],d=[];return l.forEach((function(e){var a,r,i,t=n[e];delete n[e],"object"===typeof t&&null!=t?(a=t.span,r=t.offset,i=t.order):a=t;var o="xs"!==e?"-".concat(e):"";a&&c.push(!0===a?"".concat(s).concat(o):"".concat(s).concat(o,"-").concat(a)),null!=i&&d.push("order".concat(o,"-").concat(i)),null!=r&&d.push("offset".concat(o,"-").concat(r))})),[(0,r.Z)((0,r.Z)({},n),{},{className:o().apply(void 0,[t].concat(c,d))}),{as:a,bsPrefix:s,spans:c}]}(e),t=(0,O.Z)(s,2),n=t[0],l=n.className,c=(0,i.Z)(n,V),f=t[1],v=f.as,m=void 0===v?"div":v,u=f.bsPrefix,p=f.spans;return(0,d.jsx)(m,(0,r.Z)((0,r.Z)({},c),{},{ref:a,className:o()(l,!p.length&&u)}))}));z.displayName="Col";var L=z,H=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],W=c.forwardRef((function(e,a){var s=e.as,t=void 0===s?"label":s,n=e.bsPrefix,l=e.column,f=e.visuallyHidden,v=e.className,m=e.htmlFor,u=(0,i.Z)(e,H),x=(0,c.useContext)(p).controlId;n=(0,b.vE)(n,"form-label");var h="col-form-label";"string"===typeof l&&(h="".concat(h," ").concat(h,"-").concat(l));var y=o()(v,n,f&&"visually-hidden",l&&h);return m=m||x,l?(0,d.jsx)(L,(0,r.Z)({ref:a,as:"label",className:y,htmlFor:m},u)):(0,d.jsx)(t,(0,r.Z)({ref:a,className:y,htmlFor:m},u))}));W.displayName="FormLabel",W.defaultProps={column:!1,visuallyHidden:!1};var A=W,D=["bsPrefix","className","id"],G=c.forwardRef((function(e,a){var s=e.bsPrefix,t=e.className,n=e.id,l=(0,i.Z)(e,D),f=(0,c.useContext)(p).controlId;return s=(0,b.vE)(s,"form-range"),(0,d.jsx)("input",(0,r.Z)((0,r.Z)({},l),{},{type:"range",ref:a,className:o()(t,s),id:n||f}))}));G.displayName="FormRange";var M=G,U=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],q=c.forwardRef((function(e,a){var s=e.bsPrefix,t=e.size,n=e.htmlSize,l=e.className,f=e.isValid,v=void 0!==f&&f,m=e.isInvalid,u=void 0!==m&&m,x=e.id,h=(0,i.Z)(e,U),y=(0,c.useContext)(p).controlId;return s=(0,b.vE)(s,"form-select"),(0,d.jsx)("select",(0,r.Z)((0,r.Z)({},h),{},{size:n,ref:a,className:o()(l,s,t&&"".concat(s,"-").concat(t),v&&"is-valid",u&&"is-invalid"),id:x||y}))}));q.displayName="FormSelect";var B=q,Y=["bsPrefix","className","as","muted"],J=c.forwardRef((function(e,a){var s=e.bsPrefix,t=e.className,n=e.as,l=void 0===n?"small":n,c=e.muted,f=(0,i.Z)(e,Y);return s=(0,b.vE)(s,"form-text"),(0,d.jsx)(l,(0,r.Z)((0,r.Z)({},f),{},{ref:a,className:o()(t,s,c&&"text-muted")}))}));J.displayName="FormText";var K=J,Q=c.forwardRef((function(e,a){return(0,d.jsx)(k,(0,r.Z)((0,r.Z)({},e),{},{ref:a,type:"switch"}))}));Q.displayName="Switch";var X=Object.assign(Q,{Input:k.Input,Label:k.Label}),$=["bsPrefix","className","children","controlId","label"],ee=c.forwardRef((function(e,a){var s=e.bsPrefix,t=e.className,n=e.children,l=e.controlId,c=e.label,f=(0,i.Z)(e,$);return s=(0,b.vE)(s,"form-floating"),(0,d.jsxs)(_,(0,r.Z)((0,r.Z)({ref:a,className:o()(t,s),controlId:l},f),{},{children:[n,(0,d.jsx)("label",{htmlFor:l,children:c})]}))}));ee.displayName="FloatingLabel";var ae=ee,se=["className","validated","as"],re={_ref:l().any,validated:l().bool,as:l().elementType},ie=c.forwardRef((function(e,a){var s=e.className,t=e.validated,n=e.as,l=void 0===n?"form":n,c=(0,i.Z)(e,se);return(0,d.jsx)(l,(0,r.Z)((0,r.Z)({},c),{},{ref:a,className:o()(s,t&&"was-validated")}))}));ie.displayName="Form",ie.propTypes=re;var te=Object.assign(ie,{Group:_,Control:C,Floating:R,Check:k,Switch:X,Label:A,Text:K,Range:M,Select:B,FloatingLabel:ae})},2391:function(e){"use strict";var a=function(){};e.exports=a},5462:function(){}}]);
//# sourceMappingURL=480.8f329dc4.chunk.js.map