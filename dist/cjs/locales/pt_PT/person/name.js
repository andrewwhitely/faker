"use strict";var t=Object.defineProperty;var o=Object.getOwnPropertyDescriptor;var i=Object.getOwnPropertyNames;var l=Object.prototype.hasOwnProperty;var n=(a,e)=>{for(var s in e)t(a,s,{get:e[s],enumerable:!0})},f=(a,e,s,p)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of i(e))!l.call(a,r)&&r!==s&&t(a,r,{get:()=>e[r],enumerable:!(p=o(e,r))||p.enumerable});return a};var m=a=>f(t({},"__esModule",{value:!0}),a);var u={};n(u,{default:()=>N});module.exports=m(u);var N=[{value:"{{person.firstName}} {{person.lastName}}",weight:9},{value:"{{person.prefix}} {{person.firstName}} {{person.lastName}}",weight:1}];
