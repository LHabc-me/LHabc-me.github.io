if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let u={};const c=s=>l(s,n),o={module:{uri:n},exports:u,require:c};e[n]=Promise.all(i.map((s=>o[s]||c(s)))).then((s=>(r(...s),u)))}}define(["./workbox-db5fc017"],(function(s){"use strict";s.setCacheNameDetails({prefix:"web_design_static"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"css/235.bcf69e3c.css",revision:null},{url:"css/256.e164140c.css",revision:null},{url:"css/379.21b22e79.css",revision:null},{url:"css/458.f8026429.css",revision:null},{url:"css/506.fe057a99.css",revision:null},{url:"css/647.261a7044.css",revision:null},{url:"css/688.efcb19bf.css",revision:null},{url:"css/app.d5c81e8a.css",revision:null},{url:"img/417.b5ae8362.jpg",revision:null},{url:"img/avatar.07f86aca.jpg",revision:null},{url:"index.html",revision:"5f72c2703d38cc7fb194d874bd0cfb63"},{url:"js/150.c1655f8c.js",revision:null},{url:"js/235.346189dd.js",revision:null},{url:"js/256.38e2ef1b.js",revision:null},{url:"js/379.7f288f44.js",revision:null},{url:"js/458.d68cde38.js",revision:null},{url:"js/506.117ae3ef.js",revision:null},{url:"js/507.f71a1cbd.js",revision:null},{url:"js/647.98752627.js",revision:null},{url:"js/688.9ee88b63.js",revision:null},{url:"js/app.02a13107.js",revision:null},{url:"js/chunk-vendors.fa51b6b4.js",revision:null},{url:"manifest.json",revision:"59e7fe6695c6e77bb614c7f093687bef"},{url:"robots.txt",revision:"f71d20196d4caf35b6a670db8c70b03d"}],{})}));
//# sourceMappingURL=service-worker.js.map
