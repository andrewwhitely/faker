"use strict";var u=Object.create;var e=Object.defineProperty;var v=Object.getOwnPropertyDescriptor;var x=Object.getOwnPropertyNames;var y=Object.getPrototypeOf,g=Object.prototype.hasOwnProperty;var j=(o,r)=>{for(var t in r)e(o,t,{get:r[t],enumerable:!0})},p=(o,r,t,f)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of x(r))!g.call(o,i)&&i!==t&&e(o,i,{get:()=>r[i],enumerable:!(f=v(r,i))||f.enumerable});return o};var m=(o,r,t)=>(t=o!=null?u(y(o)):{},p(r||!o||!o.__esModule?e(t,"default",{value:o,enumerable:!0}):t,o)),q=o=>p(e({},"__esModule",{value:!0}),o);var A={};j(A,{default:()=>z});module.exports=q(A);var a=m(require("./animal")),c=m(require("./color")),n=m(require("./commerce")),l=m(require("./database")),d=m(require("./date")),s=m(require("./hacker")),h=m(require("./location")),D=m(require("./metadata")),L=m(require("./person")),b=m(require("./science")),k=m(require("./vehicle"));const w={animal:a.default,color:c.default,commerce:n.default,database:l.default,date:d.default,hacker:s.default,location:h.default,metadata:D.default,person:L.default,science:b.default,vehicle:k.default};var z=w;
