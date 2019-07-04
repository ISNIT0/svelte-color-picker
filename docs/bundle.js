var app=function(){"use strict";function t(){}function e(t){return t()}function r(){return Object.create(null)}function n(t){t.forEach(e)}function o(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(t,e){t.appendChild(e)}function s(t,e,r){t.insertBefore(e,r||null)}function a(t){t.parentNode.removeChild(t)}function i(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function d(){return u(" ")}function p(t,e,r,n){return t.addEventListener(e,r,n),()=>t.removeEventListener(e,r,n)}function f(t,e,r){null==r?t.removeAttribute(e):t.setAttribute(e,r)}function v(t,e){e=""+e,t.data!==e&&(t.data=e)}let h;function k(t){h=t}function g(t){(function(){if(!h)throw new Error("Function called outside component initialization");return h})().$$.on_mount.push(t)}function b(){const t=h;return(e,r)=>{const n=t.$$.callbacks[e];if(n){const o=function(t,e){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,!1,!1,e),r}(e,r);n.slice().forEach(e=>{e.call(t,o)})}}}const $=[],m=[],y=[],x=[],q=Promise.resolve();let w=!1;function S(t){y.push(t)}function C(){const t=new Set;do{for(;$.length;){const t=$.shift();k(t),E(t.$$)}for(;m.length;)m.pop()();for(let e=0;e<y.length;e+=1){const r=y[e];t.has(r)||(r(),t.add(r))}y.length=0}while($.length);for(;x.length;)x.pop()();w=!1}function E(t){t.fragment&&(t.update(t.dirty),n(t.before_update),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_update.forEach(S))}const _=new Set;let F;function M(t,e){t&&t.i&&(_.delete(t),t.i(e))}function A(t,r,c){const{fragment:l,on_mount:s,on_destroy:a,after_update:i}=t.$$;l.m(r,c),S(()=>{const r=s.map(e).filter(o);a?a.push(...r):n(r),t.$$.on_mount=[]}),i.forEach(S)}function L(t,e){t.$$.fragment&&(n(t.$$.on_destroy),t.$$.fragment.d(e),t.$$.on_destroy=t.$$.fragment=null,t.$$.ctx={})}function T(t,e){t.$$.dirty||($.push(t),w||(w=!0,q.then(C)),t.$$.dirty=r()),t.$$.dirty[e]=!0}function D(e,o,c,l,s,a){const i=h;k(e);const u=o.props||{},d=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:s,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(i?i.$$.context:[]),callbacks:r(),dirty:null};let p=!1;var f;d.ctx=c?c(e,u,(t,r)=>{d.ctx&&s(d.ctx[t],d.ctx[t]=r)&&(d.bound[t]&&d.bound[t](r),p&&T(e,t))}):u,d.update(),p=!0,n(d.before_update),d.fragment=l(d.ctx),o.target&&(o.hydrate?d.fragment.l((f=o.target,Array.from(f.childNodes))):d.fragment.c(),o.intro&&M(e.$$.fragment),A(e,o.target,o.anchor),C()),k(i)}class V{$destroy(){L(this,1),this.$destroy=t}$on(t,e){const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(e),()=>{const t=r.indexOf(e);-1!==t&&r.splice(t,1)}}$set(){}}function H(e){var r,o,c,h,k,g,b,$,m,y,x,q,w,S,C,E,_,F,M,A,L,T,D,V,H,I,N,X,j,z,B,G,O,P,R,Y,U,J,K,Q,W,Z,tt,et,rt,nt;return{c(){r=i("div"),o=i("div"),c=i("div"),h=i("div"),k=i("div"),g=d(),b=i("div"),$=d(),m=i("div"),y=i("div"),x=d(),q=i("div"),w=d(),S=i("div"),C=i("div"),E=d(),_=i("div"),F=d(),M=i("div"),A=d(),L=i("div"),(T=i("div")).innerHTML='<div class="color-picked svelte-p03rkt"></div>',D=d(),V=i("div"),H=i("p"),I=u(e.hexValue),N=d(),X=i("div"),j=i("div"),z=i("p"),B=u(e.r),G=d(),(O=i("p")).textContent="R",P=d(),R=i("div"),Y=i("p"),U=u(e.g),J=d(),(K=i("p")).textContent="G",Q=d(),W=i("div"),Z=i("p"),tt=u(e.b),et=d(),(rt=i("p")).textContent="B",f(k,"id","colorsquare-picker"),f(k,"class","svelte-p03rkt"),f(b,"id","colorsquare-event"),f(b,"class","svelte-p03rkt"),f(h,"class","value-gradient svelte-p03rkt"),f(c,"class","saturation-gradient svelte-p03rkt"),f(o,"class","colorsquare size svelte-p03rkt"),f(y,"id","hue-picker"),f(y,"class","svelte-p03rkt"),f(q,"id","hue-event"),f(q,"class","svelte-p03rkt"),f(m,"class","hue-selector svelte-p03rkt"),f(C,"class","alpha-value svelte-p03rkt"),f(_,"id","alpha-picker"),f(_,"class","svelte-p03rkt"),f(M,"id","alpha-event"),f(M,"class","svelte-p03rkt"),f(S,"class","alpha-selector svelte-p03rkt"),f(T,"class","color-picked-bg svelte-p03rkt"),f(H,"class","text svelte-p03rkt"),f(V,"class","hex-text-block svelte-p03rkt"),f(z,"class","text svelte-p03rkt"),f(O,"class","text-label svelte-p03rkt"),f(j,"class","rgb-text-block svelte-p03rkt"),f(Y,"class","text svelte-p03rkt"),f(K,"class","text-label svelte-p03rkt"),f(R,"class","rgb-text-block svelte-p03rkt"),f(Z,"class","text svelte-p03rkt"),f(rt,"class","text-label svelte-p03rkt"),f(W,"class","rgb-text-block svelte-p03rkt"),f(X,"class","rgb-text-div svelte-p03rkt"),f(L,"class","color-info-box svelte-p03rkt"),f(r,"class","main-container svelte-p03rkt"),nt=[p(b,"mousedown",e.csDown),p(q,"mousedown",e.hueDown),p(M,"mousedown",e.alphaDown)]},m(t,e){s(t,r,e),l(r,o),l(o,c),l(c,h),l(h,k),l(h,g),l(h,b),l(r,$),l(r,m),l(m,y),l(m,x),l(m,q),l(r,w),l(r,S),l(S,C),l(S,E),l(S,_),l(S,F),l(S,M),l(r,A),l(r,L),l(L,T),l(L,D),l(L,V),l(V,H),l(H,I),l(L,N),l(L,X),l(X,j),l(j,z),l(z,B),l(j,G),l(j,O),l(X,P),l(X,R),l(R,Y),l(Y,U),l(R,J),l(R,K),l(X,Q),l(X,W),l(W,Z),l(Z,tt),l(W,et),l(W,rt)},p(t,e){t.hexValue&&v(I,e.hexValue),t.r&&v(B,e.r),t.g&&v(U,e.g),t.b&&v(tt,e.b)},i:t,o:t,d(t){t&&a(r),n(nt)}}}function I(t,e,r){var n,o,c,l=Math.floor(6*t),s=6*t-l,a=r*(1-e),i=r*(1-s*e),u=r*(1-(1-s)*e);switch(l%6){case 0:n=r,o=u,c=a;break;case 1:n=i,o=r,c=a;break;case 2:n=a,o=r,c=u;break;case 3:n=a,o=i,c=r;break;case 4:n=u,o=a,c=r;break;case 5:n=r,o=a,c=i}return[Math.round(255*n),Math.round(255*o),Math.round(255*c)]}function N(t,e,r){let{startColor:n="#FF0000"}=e;g(()=>{document.addEventListener("mouseup",h),document.addEventListener("mousemove",v),function(){let t=n.replace("#","");if(6!==t.length&&3!==t.length&&!t.match(/([^A-F0-9])/gi))return void alert("Invalid property value (startColor)");let e="";3===t.length?t.split("").forEach(t=>{e+=t+t}):e=t;r("hexValue",f=e),r("r",u=parseInt(e.substring(0,2),16)),r("g",d=parseInt(e.substring(2,4),16)),r("b",p=parseInt(e.substring(4,6),16)),function(t,e,r,n){let o,c,i,u,d,p,f,v,h,g;o=t/255,c=e/255,i=r/255,u=Math.max(o,c,i),d=Math.min(o,c,i),p=u-d,h=0==(g=u)?0:p/u;for(let t=0;t<3;t++)if([o,c,i][t]===u){f=t;break}if(0==p)return v=0,n?(l=v,s=h,a=g,void k()):{h:v,s:h,v:g};switch(f){case 0:v=(c-i)/p%6*60/360;break;case 1:v=60*((i-o)/p+2)/360;break;case 2:v=60*((o-c)/p+4)/360}v<0&&(v+=6);if(!n)return{h:v,s:h,v:g};l=v,s=h,a=g,k()}(u,d,p,!0),function(){let t=document.querySelector("#colorsquare-picker"),e=100*s,r=100*(1-a);t.style.top=r+"%",t.style.left=e+"%"}(),function(){let t=document.querySelector("#hue-picker"),e=100*l;t.style.left=e+"%"}()}()}),Number.prototype.mod=function(t){return(this%t+t)%t};const o=b();let c,l=1,s=1,a=1,i=1,u=255,d=0,p=0,f="#FF0000";function v(t){if(c){let e,r,n,o=t.clientX,u=t.clientY,d=c.getBoundingClientRect();switch(c.id){case"colorsquare-event":e=(o-d.x)/240*100,r=(u-d.y)/160*100,e>100?e=100:e<0&&(e=0),r>100?r=100:r<0&&(r=0),n=document.querySelector("#colorsquare-picker"),r=r.toFixed(2),e=e.toFixed(2),n.style.top=r+"%",n.style.left=e+"%",s=e/100,a=1-r/100,$();break;case"hue-event":(e=(o-10-d.x)/220*100)>100?e=100:e<0&&(e=0),e=e.toFixed(2),(n=document.querySelector("#hue-picker")).style.left=e+"%",l=e/100,k();break;case"alpha-event":(e=(o-10-d.x)/220*100)>100?e=100:e<0&&(e=0),e=e.toFixed(2),(n=document.querySelector("#alpha-picker")).style.left=e+"%",i=e/100,$()}}}function h(t){c=null}function k(){let t=I(l,1,1);document.querySelector(".colorsquare").style.background=`rgba(${t[0]},${t[1]},${t[2]},1)`,$()}function $(){let t=I(l,s,a);r("r",u=t[0]),r("g",d=t[1]),r("b",p=t[2]),r("hexValue",f=function(){let t=u.toString(16),e=d.toString(16),r=p.toString(16);1==t.length&&(t="0"+t);1==e.length&&(e="0"+e);1==r.length&&(r="0"+r);return("#"+t+e+r).toUpperCase()}()),document.querySelector(".color-picked").style.background=`rgba(${t[0]},${t[1]},${t[2]},${i})`,o("colorChange",{r:u,g:d,b:p,a:i})}return t.$set=(t=>{"startColor"in t&&r("startColor",n=t.startColor)}),{startColor:n,r:u,g:d,b:p,hexValue:f,csDown:function(t){c=t.currentTarget;let e=(t.offsetX+1)/240*100,r=(t.offsetY+1)/160*100;r=r.toFixed(2),e=e.toFixed(2);let n=document.querySelector("#colorsquare-picker");n.style.top=r+"%",n.style.left=e+"%",s=e/100,a=1-r/100,$()},hueDown:function(t){c=t.currentTarget;let e=(t.offsetX-9)/220*100;e=e.toFixed(2),document.querySelector("#hue-picker").style.left=e+"%",l=e/100,k()},alphaDown:function(t){c=t.currentTarget;let e=(t.offsetX-9)/220*100;e=e.toFixed(2),document.querySelector("#alpha-picker").style.left=e+"%",i=e/100,$()}}}class X extends V{constructor(t){super(),D(this,t,N,H,c,["startColor"])}}function j(e){var r,n,o,c,u,p,v,h=new X({props:{startColor:"#82EAEA"}});return h.$on("colorChange",z),{c(){(r=i("head")).innerHTML='<script async defer src="https://buttons.github.io/buttons.js"><\/script>',n=d(),o=i("div"),(c=i("div")).innerHTML='<h3 class="svelte-1ceuvkr">Svelte Color Picker</h3> <p class="svelte-1ceuvkr">A color picker component for svelte.</p> <a class="github-button" href="https://github.com/qintarp/svelte-color-picker" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star qintarp/svelte-color-picker on GitHub">Star</a>',u=d(),p=i("div"),h.$$.fragment.c(),f(c,"class","container svelte-1ceuvkr"),f(p,"class","container svelte-1ceuvkr"),f(o,"class","main svelte-1ceuvkr")},m(t,e){s(t,r,e),s(t,n,e),s(t,o,e),l(o,c),l(o,u),l(o,p),A(h,p,null),v=!0},p:t,i(t){v||(M(h.$$.fragment,t),v=!0)},o(t){!function(t,e,r){if(t&&t.o){if(_.has(t))return;_.add(t),F.callbacks.push(()=>{_.delete(t),r&&(t.d(1),r())}),t.o(e)}}(h.$$.fragment,t),v=!1},d(t){t&&(a(r),a(n),a(o)),L(h)}}}function z(t){let e=t.detail.r,r=t.detail.g,n=t.detail.b,o=255-(e+r+n)/4;document.querySelector(".main").style.background=`rgb(${e},${r},${n})`,document.querySelector("h3").style.color=`rgb(${o},${o},${o})`,document.querySelector("p").style.color=`rgb(${o},${o},${o})`,document.querySelector("body").style.background=`rgb(${o},${o},${o})`}return new class extends V{constructor(t){super(),D(this,t,null,j,c,[])}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
