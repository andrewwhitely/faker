"use strict";var t=Object.defineProperty;var o=Object.getOwnPropertyDescriptor;var i=Object.getOwnPropertyNames;var l=Object.prototype.hasOwnProperty;var n=(a,e)=>{for(var r in e)t(a,r,{get:e[r],enumerable:!0})},m=(a,e,r,p)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of i(e))!l.call(a,s)&&s!==r&&t(a,s,{get:()=>e[s],enumerable:!(p=o(e,s))||p.enumerable});return a};var N=a=>m(t({},"__esModule",{value:!0}),a);var u={};n(u,{default:()=>f});module.exports=N(u);var f=[{value:"{{person.firstName}} {{person.lastName}}",weight:8},{value:"{{person.lastName}} {{person.firstName}}",weight:1},{value:"{{person.prefix}} {{person.firstName}} {{person.lastName}}",weight:1}];