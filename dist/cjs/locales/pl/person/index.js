"use strict";var u=Object.create;var i=Object.defineProperty;var y=Object.getOwnPropertyDescriptor;var b=Object.getOwnPropertyNames;var h=Object.getPrototypeOf,j=Object.prototype.hasOwnProperty;var k=(r,m)=>{for(var e in m)i(r,e,{get:m[e],enumerable:!0})},p=(r,m,e,f)=>{if(m&&typeof m=="object"||typeof m=="function")for(let t of b(m))!j.call(r,t)&&t!==e&&i(r,t,{get:()=>m[t],enumerable:!(f=y(m,t))||f.enumerable});return r};var o=(r,m,e)=>(e=r!=null?u(h(r)):{},p(m||!r||!r.__esModule?i(e,"default",{value:r,enumerable:!0}):e,r)),q=r=>p(i({},"__esModule",{value:!0}),r);var z={};k(z,{default:()=>w});module.exports=q(z);var n=o(require("./female_first_name")),a=o(require("./female_prefix")),_=o(require("./first_name")),s=o(require("./gender")),l=o(require("./last_name")),x=o(require("./last_name_pattern")),d=o(require("./male_first_name")),D=o(require("./male_prefix")),P=o(require("./name")),c=o(require("./prefix")),g=o(require("./sex"));const v={female_first_name:n.default,female_prefix:a.default,first_name:_.default,gender:s.default,last_name:l.default,last_name_pattern:x.default,male_first_name:d.default,male_prefix:D.default,name:P.default,prefix:c.default,sex:g.default};var w=v;