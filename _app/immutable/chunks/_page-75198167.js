import{_ as n}from"./preload-helper-b21cceae.js";const i=(e,t)=>{const o=e[t];return o?typeof o=="function"?o():Promise.resolve(o):new Promise((a,r)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(r.bind(null,new Error("Unknown variable dynamic import: "+t)))})};async function s({params:e}){return console.log(e),{markdown:(await i(Object.assign({"../../../lib/posts/casino1.md":()=>n(()=>import("./casino1-507adc12.js"),["./casino1-507adc12.js","./index-6c645415.js"],import.meta.url)}),`../../../lib/posts/${e.post}.md`)).default}}const u=Object.freeze(Object.defineProperty({__proto__:null,load:s},Symbol.toStringTag,{value:"Module"}));export{u as _,s as l};