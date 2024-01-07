"use strict";var g=Object.defineProperty;var y=Object.getOwnPropertyDescriptor;var f=Object.getOwnPropertyNames;var u=Object.prototype.hasOwnProperty;var c=(e,t)=>{for(var n in t)g(e,n,{get:t[n],enumerable:!0})},x=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of f(t))!u.call(e,s)&&s!==n&&g(e,s,{get:()=>t[s],enumerable:!(r=y(t,s))||r.enumerable});return e};var b=e=>x(g({},"__esModule",{value:!0}),e);var d={};c(d,{filterWordListByLength:()=>p});module.exports=b(d);var m=require("../../errors/faker-error"),h=require("../../internal/group-by");const l={fail:()=>{throw new m.FakerError("No words found that match the given length.")},closest:(e,t)=>{const n=(0,h.groupBy)(e,a=>a.length),r=Object.keys(n).map(Number),s=Math.min(...r),i=Math.max(...r),o=Math.min(t.min-s,i-t.max);return e.filter(a=>a.length===t.min-o||a.length===t.max+o)},shortest:e=>{const t=Math.min(...e.map(n=>n.length));return e.filter(n=>n.length===t)},longest:e=>{const t=Math.max(...e.map(n=>n.length));return e.filter(n=>n.length===t)},"any-length":e=>[...e]};function p(e){const{wordList:t,length:n,strategy:r="any-length"}=e;if(n){const s=typeof n=="number"?o=>o.length===n:o=>o.length>=n.min&&o.length<=n.max,i=t.filter(s);return i.length>0?i:typeof n=="number"?l[r](t,{min:n,max:n}):l[r](t,n)}else if(r==="shortest"||r==="longest")return l[r](t);return[...t]}0&&(module.exports={filterWordListByLength});
