"use strict";var f=Object.defineProperty;var k=Object.getOwnPropertyDescriptor;var m=Object.getOwnPropertyNames;var s=Object.prototype.hasOwnProperty;var i=(e,r)=>{for(var a in r)f(e,a,{get:r[a],enumerable:!0})},d=(e,r,a,t)=>{if(r&&typeof r=="object"||typeof r=="function")for(let o of m(r))!s.call(e,o)&&o!==a&&f(e,o,{get:()=>r[o],enumerable:!(t=k(r,o))||t.enumerable});return e};var l=e=>d(f({},"__esModule",{value:!0}),e);var j={};i(j,{faker:()=>n});module.exports=l(j);var c=require("../internal/deprecated"),p=require("./cs_CZ");const n=(()=>((0,c.deprecated)({deprecated:"import { faker } from '@faker-js/faker/locale/cz'",proposed:"import { faker } from '@faker-js/faker/locale/cs_CZ'",since:"8.0",until:"9.0"}),p.faker))();0&&(module.exports={faker});
