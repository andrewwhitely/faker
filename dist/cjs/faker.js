"use strict";var i=Object.defineProperty;var N=Object.getOwnPropertyDescriptor;var V=Object.getOwnPropertyNames;var W=Object.prototype.hasOwnProperty;var E=(a,r,o)=>r in a?i(a,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[r]=o;var O=(a,r)=>{for(var o in r)i(a,o,{get:r[o],enumerable:!0})},j=(a,r,o,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let l of V(r))!W.call(a,l)&&l!==o&&i(a,l,{get:()=>r[l],enumerable:!(n=N(r,l))||n.enumerable});return a};var q=a=>j(i({},"__esModule",{value:!0}),a);var e=(a,r,o)=>(E(a,typeof r!="symbol"?r+"":r,o),o);var J={};O(J,{Faker:()=>B});module.exports=q(J);var t=require("./errors/faker-error"),s=require("./internal/deprecated"),d=require("./locale-proxy"),c=require("./modules/airline"),m=require("./modules/animal"),u=require("./modules/color"),p=require("./modules/commerce"),h=require("./modules/company"),f=require("./modules/database"),M=require("./modules/date"),y=require("./modules/finance"),w=require("./modules/git"),k=require("./modules/hacker"),v=require("./modules/helpers"),g=require("./modules/image"),b=require("./modules/internet"),D=require("./modules/location"),L=require("./modules/lorem"),F=require("./modules/music"),P=require("./modules/person"),z=require("./modules/phone"),R=require("./modules/random"),A=require("./modules/science"),T=require("./modules/system"),x=require("./modules/vehicle"),C=require("./modules/word"),S=require("./simple-faker"),H=require("./utils/merge-locales");class B extends S.SimpleFaker{constructor(o){super({randomizer:o.randomizer});e(this,"rawDefinitions");e(this,"definitions");e(this,"random",new R.RandomModule(this));e(this,"airline",new c.AirlineModule(this));e(this,"animal",new m.AnimalModule(this));e(this,"color",new u.ColorModule(this));e(this,"commerce",new p.CommerceModule(this));e(this,"company",new h.CompanyModule(this));e(this,"database",new f.DatabaseModule(this));e(this,"date",new M.DateModule(this));e(this,"finance",new y.FinanceModule(this));e(this,"git",new w.GitModule(this));e(this,"hacker",new k.HackerModule(this));e(this,"helpers",new v.HelpersModule(this));e(this,"image",new g.ImageModule(this));e(this,"internet",new b.InternetModule(this));e(this,"location",new D.LocationModule(this));e(this,"lorem",new L.LoremModule(this));e(this,"music",new F.MusicModule(this));e(this,"person",new P.PersonModule(this));e(this,"phone",new z.PhoneModule(this));e(this,"science",new A.ScienceModule(this));e(this,"system",new T.SystemModule(this));e(this,"vehicle",new x.VehicleModule(this));e(this,"word",new C.WordModule(this));const{locales:n}=o;if(n!=null){(0,s.deprecated)({deprecated:"new Faker({ locales: {a, b}, locale: 'a', localeFallback: 'b' })",proposed:"new Faker({ locale: [a, b, ...] }) or new Faker({ locale: a })",since:"8.0",until:"9.0"});const{locale:I="en",localeFallback:G="en"}=o;o={locale:[n[I],n[G]]}}let{locale:l}=o;if(Array.isArray(l)){if(l.length===0)throw new t.FakerError("The locale option must contain at least one locale definition.");l=(0,H.mergeLocales)(l)}this.rawDefinitions=l,this.definitions=(0,d.createLocaleProxy)(this.rawDefinitions)}get address(){return(0,s.deprecated)({deprecated:"faker.address",proposed:"faker.location",since:"8.0",until:"10.0"}),this.location}get name(){return(0,s.deprecated)({deprecated:"faker.name",proposed:"faker.person",since:"8.0",until:"10.0"}),this.person}getMetadata(){var o;return(o=this.rawDefinitions.metadata)!=null?o:{}}get locales(){throw new t.FakerError("The locales property has been removed. Please use the constructor instead.")}set locales(o){throw new t.FakerError("The locales property has been removed. Please use the constructor instead.")}get locale(){throw new t.FakerError("The locale property has been removed. Please use the constructor instead.")}set locale(o){throw new t.FakerError("The locale property has been removed. Please use the constructor instead.")}get localeFallback(){throw new t.FakerError("The localeFallback property has been removed. Please use the constructor instead.")}set localeFallback(o){throw new t.FakerError("The localeFallback property has been removed. Please use the constructor instead.")}setLocale(){throw new t.FakerError("This method has been removed. Please use the constructor instead.")}}0&&(module.exports={Faker});