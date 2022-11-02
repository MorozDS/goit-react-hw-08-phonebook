"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[789],{789:function(e,t,n){n.r(t),n.d(t,{default:function(){return z}});var r=n(791),a=n(434),o=n(885),u=n(634),i="NOT_FOUND";var c=function(e,t){return e===t};function s(e,t){var n="object"===typeof t?t:{equalityCheck:t},r=n.equalityCheck,a=void 0===r?c:r,o=n.maxSize,u=void 0===o?1:o,s=n.resultEqualityCheck,l=function(e){return function(t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var r=t.length,a=0;a<r;a++)if(!e(t[a],n[a]))return!1;return!0}}(a),f=1===u?function(e){var t;return{get:function(n){return t&&e(t.key,n)?t.value:i},put:function(e,n){t={key:e,value:n}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}(l):function(e,t){var n=[];function r(e){var r=n.findIndex((function(n){return t(e,n.key)}));if(r>-1){var a=n[r];return r>0&&(n.splice(r,1),n.unshift(a)),a.value}return i}return{get:r,put:function(t,a){r(t)===i&&(n.unshift({key:t,value:a}),n.length>e&&n.pop())},getEntries:function(){return n},clear:function(){n=[]}}}(u,l);function p(){var t=f.get(arguments);if(t===i){if(t=e.apply(null,arguments),s){var n=f.getEntries(),r=n.find((function(e){return s(e.value,t)}));r&&(t=r.value)}f.put(arguments,t)}return t}return p.clearCache=function(){return f.clear()},p}function l(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var n=t.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return t}function f(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];var o,u=0,i={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(i=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var s=i,f=s.memoizeOptions,p=void 0===f?n:f,d=Array.isArray(p)?p:[p],m=l(r),h=e.apply(void 0,[function(){return u++,c.apply(null,arguments)}].concat(d)),v=e((function(){for(var e=[],t=m.length,n=0;n<t;n++)e.push(m[n].apply(null,arguments));return o=h.apply(null,e)}));return Object.assign(v,{resultFunc:c,memoizedResultFunc:h,dependencies:m,lastResult:function(){return o},recomputations:function(){return u},resetRecomputations:function(){return u=0}}),v};return a}var p=f(s),d=function(e){return e.contacts.contacts.items},m=function(e){return e.contacts.contacts.isLoading},h=function(e){return e.filter},v=function(e){return e.contacts.contacts.error},y=p([d,h],(function(e,t){return t?e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})):e})),x="ContactForm_form__dhl+T",_="ContactForm_label__-cVXI",b="ContactForm_input__Bl93P",j="ContactForm_button__eSwX9",C=n(184);function g(){var e=(0,r.useState)(""),t=(0,o.Z)(e,2),n=t[0],i=t[1],c=(0,r.useState)(""),s=(0,o.Z)(c,2),l=s[0],f=s[1],p=(0,a.v9)(d),m=(0,a.I0)(),h=function(e){var t=e.target,n=t.name,r=t.value;"name"===n?i(r):"phone"===n&&f(r)};return(0,C.jsxs)("form",{autoComplete:"on",onSubmit:function(e){e.preventDefault();var t={name:n,phone:l};if(p.find((function(e){return e.name.toLowerCase()===n.toLowerCase()})))return alert("".concat(n," is already in Contacts List!"));m((0,u.uK)(t)),i(""),f("")},className:x,children:[(0,C.jsxs)("div",{children:[(0,C.jsx)("label",{className:_,children:"Name"}),(0,C.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:h,value:n,placeholder:" Your Name",className:b})]}),(0,C.jsxs)("div",{children:[(0,C.jsx)("label",{className:_,children:"Phone"}),(0,C.jsx)("input",{type:"tel",name:"phone",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:h,value:l,placeholder:"",className:b})]}),(0,C.jsx)("button",{type:"submit",name:"submit_button",className:j,children:"Add contact"})]})}var w={item:"ContactList_item__EZYHO",button:"ContactList_button__7kL4l"};function k(){var e=(0,a.I0)(),t=(0,a.v9)(y);return(0,C.jsx)("ul",{className:w.list,children:t.map((function(t){return(0,C.jsxs)("li",{id:t.id,className:w.item,children:[t.name,": ",t.phone,(0,C.jsx)("button",{type:"button",onClick:function(){return e((0,u.GK)(t.id))},className:w.button,children:"Delete"})]},t.id)}))})}var N="FilterContact_filterheader__1r7+h",F="FilterContact_input__2bP0L",A=n(538);function L(){var e=(0,a.v9)(h),t=(0,a.I0)(A.j);return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)("p",{className:N,children:"Find contacts by name"}),(0,C.jsx)("input",{type:"text",name:"filter",onChange:function(e){return t((0,A.x)(e.target.value))},value:e,className:F})]})}function z(){var e=(0,a.I0)(),t=(0,a.v9)(m),n=(0,a.v9)(v);return(0,r.useEffect)((function(){e((0,u.yF)())}),[e]),(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)("h1",{children:"Phonebook"}),(0,C.jsx)(g,{}),(0,C.jsx)("h2",{children:"Contacts"}),(0,C.jsx)(L,{}),(0,C.jsx)("div",{children:t&&!n&&(0,C.jsx)("b",{children:"Request in progress..."})}),(0,C.jsx)(k,{})]})}}}]);
//# sourceMappingURL=789.9f24849f.chunk.js.map