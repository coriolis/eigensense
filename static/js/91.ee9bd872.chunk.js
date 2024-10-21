(()=>{var e={183:(e,t,s)=>{"use strict";var o=s(552);class r{static async getInstance(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return this.processor??=o.oye.from_pretrained(this.model_id),this.tokenizer??=o.v6I.from_pretrained(this.model_id),this.supports_fp16??=await async function(){try{return(await navigator.gpu.requestAdapter()).features.has("shader-f16")}catch(e){return!1}}(),this.model??=o.syV.from_pretrained(this.model_id,{dtype:{embed_tokens:this.supports_fp16?"fp16":"fp32",vision_encoder:this.supports_fp16?"fp16":"fp32",encoder_model:"q4",decoder_model_merged:"q4"},device:"webgpu",progress_callback:e}),console.log("Model -> ",this.model),Promise.all([this.model,this.tokenizer,this.processor])}}r.model_id="onnx-community/Florence-2-base-ft";const a=["<CAPTION_TO_PHRASE_GROUNDING>"];let n,i;self.addEventListener("message",(async e=>{const{type:t,data:s}=e.data;switch(t){case"load":!async function(){let e,t,s;console.log("loading..inside worker"),self.postMessage({status:"progress",data:"Loading model..."});try{[e,t,s]=await r.getInstance((e=>{self.postMessage(e)}))}catch(i){return void self.postMessage({status:"error",err:i})}console.log("loadded flourecnee model in memory.."),self.postMessage({status:"done",data:"Compiling shaders and warming up model..."});const a=t("a"),n=(0,o.a2Z)([1,3,768,768],0);console.log("modelll -> ",e),await e.generate({...a,pixel_values:n,max_new_tokens:1}),self.postMessage({status:"ready"})}();break;case"run":!async function(e){let t,s,l,{text:c,url:p,task:d,timeStamp:f,isUserSnap:u}=e;try{[t,s,l]=await r.getInstance()}catch(O){return void self.postMessage({status:"error",err:O})}console.log("In run() About to run flourence....");const m=performance.now();if(!n){const e=await o.YOx.fromURL(p);i=e.size,n=await l(e)}let g=d;a.includes(d)&&c&&(g+=c);const _=s(l.construct_prompts(g)),h=await t.generate({..._,...n,max_new_tokens:350,num_beams:1,do_sample:!1}),v=s.batch_decode(h,{skip_special_tokens:!1})[0],y=l.post_process_generation(v,d,i),b=performance.now();console.log("Flourecne Reponse",y),self.postMessage({status:"complete",result:y,time:b-m,timeStamp:f,isUserSnap:u,caption:v.replace(/<\/?s>/g,"").trim()}),self.postMessage({status:"caption",result:y,time:b-m,timeStamp:f,isUserSnap:u,caption:v.replace(/<\/?s>/g,"").trim()}),n=i=null}(s);break;case"reset":!async function(){console.log("resetting"),n=i=null,self.postMessage({status:"ready"})}()}}))},52:()=>{},143:()=>{},603:()=>{},806:()=>{},9:()=>{},837:()=>{},499:()=>{}},t={};function s(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,s),a.exports}s.m=e,s.x=()=>{var e=s.O(void 0,[552],(()=>s(183)));return e=s.O(e)},(()=>{var e=[];s.O=(t,o,r,a)=>{if(!o){var n=1/0;for(p=0;p<e.length;p++){o=e[p][0],r=e[p][1],a=e[p][2];for(var i=!0,l=0;l<o.length;l++)(!1&a||n>=a)&&Object.keys(s.O).every((e=>s.O[e](o[l])))?o.splice(l--,1):(i=!1,a<n&&(n=a));if(i){e.splice(p--,1);var c=r();void 0!==c&&(t=c)}}return t}a=a||0;for(var p=e.length;p>0&&e[p-1][2]>a;p--)e[p]=e[p-1];e[p]=[o,r,a]}})(),(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;s.t=function(o,r){if(1&r&&(o=this(o)),8&r)return o;if("object"===typeof o&&o){if(4&r&&o.__esModule)return o;if(16&r&&"function"===typeof o.then)return o}var a=Object.create(null);s.r(a);var n={};e=e||[null,t({}),t([]),t(t)];for(var i=2&r&&o;"object"==typeof i&&!~e.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((e=>n[e]=()=>o[e]));return n.default=()=>o,s.d(a,n),a}})(),s.d=(e,t)=>{for(var o in t)s.o(t,o)&&!s.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},s.f={},s.e=e=>Promise.all(Object.keys(s.f).reduce(((t,o)=>(s.f[o](e,t),t)),[])),s.u=e=>"static/js/"+e+".5bacf88e.chunk.js",s.miniCssF=e=>{},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.p="/",(()=>{s.b=self.location+"/../../../";var e={91:1};s.f.i=(t,o)=>{e[t]||importScripts(s.p+s.u(t))};var t=self.webpackChunkfrontend=self.webpackChunkfrontend||[],o=t.push.bind(t);t.push=t=>{var r=t[0],a=t[1],n=t[2];for(var i in a)s.o(a,i)&&(s.m[i]=a[i]);for(n&&n(s);r.length;)e[r.pop()]=1;o(t)}})(),(()=>{var e=s.x;s.x=()=>s.e(552).then(e)})();s.x()})();
//# sourceMappingURL=91.ee9bd872.chunk.js.map