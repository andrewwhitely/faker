"use strict";var i=Object.defineProperty;var l=Object.getOwnPropertyDescriptor;var s=Object.getOwnPropertyNames;var c=Object.prototype.hasOwnProperty;var f=(a,t)=>{for(var o in t)i(a,o,{get:t[o],enumerable:!0})},p=(a,t,o,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let e of s(t))!c.call(a,e)&&e!==o&&i(a,e,{get:()=>t[e],enumerable:!(n=l(t,e))||n.enumerable});return a};var r=a=>p(i({},"__esModule",{value:!0}),a);var x={};f(x,{default:()=>_});module.exports=r(x);var _=["{{location.city_prefix}} {{person.last_name}}","{{person.last_name}}{{location.city_suffix}}"];
