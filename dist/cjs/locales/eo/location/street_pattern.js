"use strict";var i=Object.defineProperty;var n=Object.getOwnPropertyDescriptor;var a=Object.getOwnPropertyNames;var f=Object.prototype.hasOwnProperty;var _=(t,e)=>{for(var r in e)i(t,r,{get:e[r],enumerable:!0})},p=(t,e,r,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of a(e))!f.call(t,o)&&o!==r&&i(t,o,{get:()=>e[o],enumerable:!(s=n(e,o))||s.enumerable});return t};var l=t=>p(i({},"__esModule",{value:!0}),t);var x={};_(x,{default:()=>c});module.exports=l(x);var c=["{{location.street_prefix}} de {{person.first_name}}","{{location.street_prefix}} de {{person.last_name}}","{{person.first_name}}{{location.street_suffix}}","{{location.city_prefix}} {{person.first_name}}{{location.street_suffix}}"];