"use strict";var k=Object.create;var t=Object.defineProperty;var l=Object.getOwnPropertyDescriptor;var b=Object.getOwnPropertyNames;var w=Object.getPrototypeOf,x=Object.prototype.hasOwnProperty;var C=(o,r)=>{for(var m in r)t(o,m,{get:r[m],enumerable:!0})},a=(o,r,m,p)=>{if(r&&typeof r=="object"||typeof r=="function")for(let e of b(r))!x.call(o,e)&&e!==m&&t(o,e,{get:()=>r[e],enumerable:!(p=l(r,e))||p.enumerable});return o};var f=(o,r,m)=>(m=o!=null?k(w(o)):{},a(r||!o||!o.__esModule?t(m,"default",{value:o,enumerable:!0}):m,o)),F=o=>a(t({},"__esModule",{value:!0}),o);var _={};C(_,{faker:()=>Z});module.exports=F(_);var i=require("../faker"),c=f(require("../locales/base")),n=f(require("../locales/cs_CZ")),s=f(require("../locales/en"));const Z=new i.Faker({locale:[n.default,s.default,c.default]});0&&(module.exports={faker});