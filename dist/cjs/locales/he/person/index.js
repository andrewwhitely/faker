"use strict";var d=Object.create;var i=Object.defineProperty;var u=Object.getOwnPropertyDescriptor;var y=Object.getOwnPropertyNames;var b=Object.getPrototypeOf,g=Object.prototype.hasOwnProperty;var h=(m,r)=>{for(var e in r)i(m,e,{get:r[e],enumerable:!0})},p=(m,r,e,f)=>{if(r&&typeof r=="object"||typeof r=="function")for(let t of y(r))!g.call(m,t)&&t!==e&&i(m,t,{get:()=>r[t],enumerable:!(f=u(r,t))||f.enumerable});return m};var o=(m,r,e)=>(e=m!=null?d(b(m)):{},p(r||!m||!m.__esModule?i(e,"default",{value:m,enumerable:!0}):e,m)),j=m=>p(i({},"__esModule",{value:!0}),m);var v={};h(v,{default:()=>q});module.exports=j(v);var n=o(require("./female_first_name")),a=o(require("./female_prefix")),_=o(require("./first_name")),s=o(require("./last_name")),l=o(require("./last_name_pattern")),x=o(require("./male_first_name")),D=o(require("./male_prefix")),P=o(require("./name")),c=o(require("./prefix"));const k={female_first_name:n.default,female_prefix:a.default,first_name:_.default,last_name:s.default,last_name_pattern:l.default,male_first_name:x.default,male_prefix:D.default,name:P.default,prefix:c.default};var q=k;
