(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,r){e.exports=r(35)},35:function(e,t,r){"use strict";r.r(t);var n=r(4),a=r.n(n),o=r(24),s=r.n(o),c=r(9),i=r(10),u=function(e){var t=e.handleUpdate;return a.a.createElement("div",{className:"row mb-3"},a.a.createElement("button",{className:"btn btn-warning",onClick:t},"Editar Usuario"))},l=r(7),f=r(17),d=function(e){var t=e.reference,r=e.type,n=e.name,o=e.id,s=e.placeholder,c=e.userData,i=e.setUserData;return a.a.createElement("div",{className:"row form-floating mb-3"},a.a.createElement("input",{ref:t,className:"form-control",type:r,name:n,id:o,placeholder:s,onChange:function(e){i(Object(f.a)({},c,Object(l.a)({},e.target.name,e.target.value)))}}),a.a.createElement("label",{htmlFor:o},s,":"))},m=function(e){var t=e.handleSubmit;return a.a.createElement("div",{className:"row mb-3"},a.a.createElement("button",{className:"btn btn-primary",onClick:t},"Registrar"))},p=function(e){var t=e.inputRefs,r=e.data,n=e.setData,o=e.inserData,s=e.registerMode,c=e.setRegisterMode,l=(e.id,e.updateUser),f=e.userData,p=e.setUserData;return a.a.createElement("div",{className:"container-sm d-flex flex-column align-items-center"},a.a.createElement("h2",null,"Registro de usuarios"),a.a.createElement("form",{className:"w-50"},a.a.createElement(d,{reference:t[0],type:"text",name:"firstName",id:"firstName",placeholder:"Nombre",userData:f,setUserData:p}),a.a.createElement(d,{reference:t[1],type:"text",name:"lastName",id:"lastName",placeholder:"Apellido",userData:f,setUserData:p}),s?a.a.createElement(m,{handleSubmit:function(e){e.preventDefault(),""!==f.firstName&&""!==f.lastName?/^[a-zA-Z\xc0-\xff\s]{1,40}$/.test(f.firstName)&&/^[a-zA-Z\xc0-\xff\s]{1,40}$/.test(f.lastName)?(o(f,r,n),t[0].current.value="",t[1].current.value="",alert("Usuario registrado correctamente")):alert("Solo se admiten cadenas de texto"):alert("Debes llenar todos los campos")}}):a.a.createElement(u,{handleUpdate:function(e){if(e.preventDefault(),""!==f.firstName&&""!==f.lastName)if(/^[a-zA-Z\xc0-\xff\s]{1,40}$/.test(f.firstName)&&/^[a-zA-Z\xc0-\xff\s]{1,40}$/.test(f.lastName)){var a=r.filter(function(e){return e.id!==f.id});n([].concat(Object(i.a)(a),[f])),l(f),p({firstName:"",lastName:""}),t[0].current.value="",t[1].current.value="",alert("Usuario actualizado correctamente"),c(!0)}else alert("Solo se admiten cadenas de texto");else alert("Debes llenar todos los campos")}})))},h=function(e){var t=e.userId,r=e.users,n=e.setUsers,o=e.deleteUser;return a.a.createElement(a.a.Fragment,null,a.a.createElement("button",{className:"btn btn-danger px-2 ms-2",onClick:function(){o(t,r,n,o)}},"Eliminar"))},v=function(e){var t=e.inputRefs,r=e.setRegisterMode,n=e.userId,o=e.users,s=e.setUserData;return a.a.createElement(a.a.Fragment,null,a.a.createElement("button",{className:"btn btn-warning px-3 me-2",onClick:function(){var e=o.filter(function(e){return e.id===n})[0],a=e.firstName,c=e.lastName;t[0].current.value=a,t[1].current.value=c,s({id:n,firstName:t[0].current.value,lastName:t[1].current.value}),r(!1)}},"Editar"))},b=function(e){var t=e.inputRefs,r=e.userId,n=e.users,o=e.setUsers,s=e.setRegisterMode,c=e.deleteUser,i=e.setUserData;return a.a.createElement("div",{className:"d-flex justify-content-center"},a.a.createElement(v,{inputRefs:t,userId:r,users:n,setUsers:o,setRegisterMode:s,setUserData:i}),a.a.createElement(h,{userId:r,users:n,setUsers:o,deleteUser:c}))},y=function(e){var t=e.inputRefs,r=e.data,n=e.setRegisterMode,o=e.setUsers,s=e.deleteUser,c=e.setUserData;return a.a.createElement("div",{className:"container-sm table-responsive"},a.a.createElement("table",{className:"table table-hover table-striped table-light"},a.a.createElement("caption",null,"Lista de usuarios"),a.a.createElement("thead",{className:"table-dark"},a.a.createElement("tr",null,a.a.createElement("th",{scope:"col"},"Nombre"),a.a.createElement("th",{scope:"col"},"Apellido"),a.a.createElement("th",{scope:"col",className:"text-center"},"Acciones"))),a.a.createElement("tbody",{className:"table-success"},r.map(function(e){var i=e.id,u=e.firstName,l=e.lastName;return a.a.createElement("tr",{key:i,scope:"row"},a.a.createElement("td",null,u),a.a.createElement("td",null,l),a.a.createElement("td",{className:"text-center"},a.a.createElement(b,{inputRefs:t,userId:i,users:r,setRegisterMode:n,setUsers:o,deleteUser:s,setUserData:c})))}))))},g=r(2),w=r(25),E=r(14);function N(){N=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",s=n.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(L){c=function(e,t,r){return e[t]=r}}function i(e,t,r,n){var a=t&&t.prototype instanceof f?t:f,o=Object.create(a.prototype),s=new j(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return U()}for(r.method=a,r.arg=o;;){var s=r.delegate;if(s){var c=w(s,r);if(c){if(c===l)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var i=u(e,t,r);if("normal"===i.type){if(n=r.done?"completed":"suspendedYield",i.arg===l)continue;return{value:i.arg,done:r.done}}"throw"===i.type&&(n="completed",r.method="throw",r.arg=i.arg)}}}(e,r,s),o}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(L){return{type:"throw",arg:L}}}e.wrap=i;var l={};function f(){}function d(){}function m(){}var p={};c(p,a,function(){return this});var h=Object.getPrototypeOf,v=h&&h(h(O([])));v&&v!==t&&r.call(v,a)&&(p=v);var b=m.prototype=f.prototype=Object.create(p);function y(e){["next","throw","return"].forEach(function(t){c(e,t,function(e){return this._invoke(t,e)})})}function g(e,t){var n;this._invoke=function(a,o){function s(){return new t(function(n,s){!function n(a,o,s,c){var i=u(e[a],e,o);if("throw"!==i.type){var l=i.arg,f=l.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then(function(e){n("next",e,s,c)},function(e){n("throw",e,s,c)}):t.resolve(f).then(function(e){l.value=e,s(l)},function(e){return n("throw",e,s,c)})}c(i.arg)}(a,o,n,s)})}return n=n?n.then(s,s):s()}}function w(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return l;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=u(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,l;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,l):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,l)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function O(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:U}}function U(){return{value:void 0,done:!0}}return d.prototype=m,c(b,"constructor",m),c(m,"constructor",d),d.displayName=c(m,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,c(e,s,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},y(g.prototype),c(g.prototype,o,function(){return this}),e.AsyncIterator=g,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var s=new g(i(t,r,n,a),o);return e.isGeneratorFunction(r)?s:s.next().then(function(e){return e.done?e.value:s.next()})},y(b),c(b,s,"Generator"),c(b,a,function(){return this}),c(b,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=O,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return s.type="throw",s.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),i=r.call(o,"finallyLoc");if(c&&i){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!i)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var s=o?o.completion:{};return s.type=e,s.arg=t,o?(this.method="next",this.next=o.finallyLoc,l):this.complete(s)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),l},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),x(r),l}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;x(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:O(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},e}var x=Object(w.a)({apiKey:"AIzaSyCkwXAAnYOnQdGXY40v8VGk1gV6DNNm-Yg",authDomain:"crud-firebase-872cb.firebaseapp.com",projectId:"crud-firebase-872cb",storageBucket:"crud-firebase-872cb.appspot.com",messagingSenderId:"358489106312",appId:"1:358489106312:web:deb5e5d1aa709d87edbc3d"}),j=Object(E.f)(x),O=a.a.memo(function(){var e=Object(n.useState)([]),t=Object(c.a)(e,2),r=t[0],o=t[1],s=Object(n.useState)(!0),u=Object(c.a)(s,2),l=u[0],d=u[1],m={getUsers:function(){var e=Object(g.a)(N().mark(function e(t){var r,n;return N().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(E.e)(Object(E.b)(j,"users"));case 3:r=e.sent,n=r.docs.map(function(e){return Object(f.a)({id:e.id},e.data())}),t(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}},e,null,[[0,8]])}));return function(t){return e.apply(this,arguments)}}(),insertUser:function(){var e=Object(g.a)(N().mark(function e(t,r,n){var a;return N().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(E.a)(Object(E.b)(j,"users"),t);case 3:a=e.sent,n([].concat(Object(i.a)(r),[Object(f.a)({id:a.id},t)])),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}},e,null,[[0,7]])}));return function(t,r,n){return e.apply(this,arguments)}}(),updateUser:function(){var e=Object(g.a)(N().mark(function e(t){return N().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(E.g)(Object(E.d)(j,"users",t.id),t);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}},e,null,[[0,5]])}));return function(t){return e.apply(this,arguments)}}(),deleteUser:function(){var e=Object(g.a)(N().mark(function e(t,r,n){var a;return N().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(E.c)(Object(E.d)(j,"users",t));case 3:a=r.filter(function(e){return e.id!=t}),n(a),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}},e,null,[[0,7]])}));return function(t,r,n){return e.apply(this,arguments)}}()},h=m.getUsers,v=m.insertUser,b=m.updateUser,w=m.deleteUser;Object(n.useEffect)(function(){h(o)},[]);var x=[Object(n.useRef)(null),Object(n.useRef)(null)],O=Object(n.useState)({firstName:"",lastName:""}),U=Object(c.a)(O,2),L=U[0],k=U[1];return a.a.createElement("div",{className:"container-fluid"},a.a.createElement(p,{inputRefs:x,data:r,setData:o,inserData:v,registerMode:l,setRegisterMode:d,updateUser:b,userData:L,setUserData:k}),a.a.createElement(y,{inputRefs:x,data:r,setRegisterMode:d,setUsers:o,deleteUser:w,userData:L,setUserData:k}))});s.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(O,null)))}},[[27,2,1]]]);
//# sourceMappingURL=main.b5b08cfb.chunk.js.map