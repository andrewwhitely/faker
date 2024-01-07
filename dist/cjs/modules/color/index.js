"use strict";var c=Object.defineProperty;var g=Object.getOwnPropertyDescriptor;var p=Object.getOwnPropertyNames;var C=Object.prototype.hasOwnProperty;var y=(e,r)=>{for(var o in r)c(e,o,{get:r[o],enumerable:!0})},S=(e,r,o,t)=>{if(r&&typeof r=="object"||typeof r=="function")for(let a of p(r))!C.call(e,a)&&a!==o&&c(e,a,{get:()=>r[a],enumerable:!(t=g(r,a))||t.enumerable});return e};var F=e=>S(c({},"__esModule",{value:!0}),e);var x={};y(x,{ColorModule:()=>k,CssFunction:()=>b,CssSpace:()=>s});module.exports=F(x);var h=require("../../internal/module-base"),s=(n=>(n.SRGB="sRGB",n.DisplayP3="display-p3",n.REC2020="rec2020",n.A98RGB="a98-rgb",n.ProphotoRGB="prophoto-rgb",n))(s||{}),b=(m=>(m.RGB="rgb",m.RGBA="rgba",m.HSL="hsl",m.HSLA="hsla",m.HWB="hwb",m.CMYK="cmyk",m.LAB="lab",m.LCH="lch",m.COLOR="color",m))(b||{});function d(e,r){const{prefix:o,casing:t}=r;switch(t){case"upper":e=e.toUpperCase();break;case"lower":e=e.toLowerCase();break;case"mixed":}return o&&(e=o+e),e}function u(e){return e.map(o=>{if(o%1!==0){const a=new ArrayBuffer(4);new DataView(a).setFloat32(0,o);const n=new Uint8Array(a);return u([...n]).replace(/ /g,"")}return(o>>>0).toString(2).padStart(8,"0")}).join(" ")}function $(e,r="rgb",o="sRGB"){const t=a=>Math.round(a*100);switch(r){case"rgba":return`rgba(${e[0]}, ${e[1]}, ${e[2]}, ${e[3]})`;case"color":return`color(${o} ${e[0]} ${e[1]} ${e[2]})`;case"cmyk":return`cmyk(${t(e[0])}%, ${t(e[1])}%, ${t(e[2])}%, ${t(e[3])}%)`;case"hsl":return`hsl(${e[0]}deg ${t(e[1])}% ${t(e[2])}%)`;case"hsla":return`hsl(${e[0]}deg ${t(e[1])}% ${t(e[2])}% / ${t(e[3])})`;case"hwb":return`hwb(${e[0]} ${t(e[1])}% ${t(e[2])}%)`;case"lab":return`lab(${t(e[0])}% ${e[1]} ${e[2]})`;case"lch":return`lch(${t(e[0])}% ${e[1]} ${e[2]})`;case"rgb":default:return`rgb(${e[0]}, ${e[1]}, ${e[2]})`}}function i(e,r,o="rgb",t="sRGB"){switch(r){case"css":return $(e,o,t);case"binary":return u(e);case"decimal":default:return e}}class k extends h.ModuleBase{human(){return this.faker.helpers.arrayElement(this.faker.definitions.color.human)}space(){return this.faker.helpers.arrayElement(this.faker.definitions.color.space)}cssSupportedFunction(){return this.faker.helpers.enumValue(b)}cssSupportedSpace(){return this.faker.helpers.enumValue(s)}rgb(r={}){const{format:o="hex",includeAlpha:t=!1,prefix:a="#",casing:n="lower"}=r;let l,f="rgb";return o==="hex"?(l=this.faker.string.hexadecimal({length:t?8:6,prefix:""}),l=d(l,{prefix:a,casing:n}),l):(l=Array.from({length:3},()=>this.faker.number.int(255)),t&&(l.push(this.faker.number.float({precision:.01})),f="rgba"),i(l,o,f))}cmyk(r){const o=Array.from({length:4},()=>this.faker.number.float({precision:.01}));return i(o,(r==null?void 0:r.format)||"decimal","cmyk")}hsl(r){const o=[this.faker.number.int(360)];for(let t=0;t<(r!=null&&r.includeAlpha?3:2);t++)o.push(this.faker.number.float({precision:.01}));return i(o,(r==null?void 0:r.format)||"decimal",r!=null&&r.includeAlpha?"hsla":"hsl")}hwb(r){const o=[this.faker.number.int(360)];for(let t=0;t<2;t++)o.push(this.faker.number.float({precision:.01}));return i(o,(r==null?void 0:r.format)||"decimal","hwb")}lab(r){const o=[this.faker.number.float({precision:1e-6})];for(let t=0;t<2;t++)o.push(this.faker.number.float({min:-100,max:100,precision:1e-4}));return i(o,(r==null?void 0:r.format)||"decimal","lab")}lch(r){const o=[this.faker.number.float({precision:1e-6})];for(let t=0;t<2;t++)o.push(this.faker.number.float({max:230,precision:.1}));return i(o,(r==null?void 0:r.format)||"decimal","lch")}colorByCSSColorSpace(r){(r==null?void 0:r.format)==="css"&&!(r!=null&&r.space)&&(r={...r,space:"sRGB"});const o=Array.from({length:3},()=>this.faker.number.float({precision:1e-4}));return i(o,(r==null?void 0:r.format)||"decimal","color",r==null?void 0:r.space)}}0&&(module.exports={ColorModule,CssFunction,CssSpace});