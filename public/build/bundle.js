var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function s(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function i(t){return document.createTextNode(t)}function f(){return i(" ")}function d(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function p(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function m(t){return""===t?null:+t}function $(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function h(t,e){t.value=null==e?"":e}let g;function v(t){g=t}function y(){const t=function(){if(!g)throw new Error("Function called outside component initialization");return g}();return(e,n)=>{const o=t.$$.callbacks[e];if(o){const r=function(t,e,n=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,!1,e),o}(e,n);o.slice().forEach((e=>{e.call(t,r)}))}}}const b=[],x=[],w=[],_=[],E=Promise.resolve();let k=!1;function C(t){w.push(t)}let P=!1;const A=new Set;function N(){if(!P){P=!0;do{for(let t=0;t<b.length;t+=1){const e=b[t];v(e),S(e.$$)}for(v(null),b.length=0;x.length;)x.pop()();for(let t=0;t<w.length;t+=1){const e=w[t];A.has(e)||(A.add(e),e())}w.length=0}while(b.length);for(;_.length;)_.pop()();k=!1,P=!1,A.clear()}}function S(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(C)}}const L=new Set;let T;function j(){T={r:0,c:[],p:T}}function z(){T.r||o(T.c),T=T.p}function B(t,e){t&&t.i&&(L.delete(t),t.i(e))}function M(t,e,n,o){if(t&&t.o){if(L.has(t))return;L.add(t),T.c.push((()=>{L.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function O(t){t&&t.c()}function H(t,n,c,l){const{fragment:u,on_mount:s,on_destroy:a,after_update:i}=t.$$;u&&u.m(n,c),l||C((()=>{const n=s.map(e).filter(r);a?a.push(...n):o(n),t.$$.on_mount=[]})),i.forEach(C)}function q(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function D(t,e){-1===t.$$.dirty[0]&&(b.push(t),k||(k=!0,E.then(N)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function F(e,r,c,l,u,a,i,f=[-1]){const d=g;v(e);const p=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:u,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:r.context||[]),callbacks:n(),dirty:f,skip_bound:!1,root:r.target||d.$$.root};i&&i(p.root);let m=!1;if(p.ctx=c?c(e,r.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return p.ctx&&u(p.ctx[t],p.ctx[t]=r)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](r),m&&D(e,t)),n})):[],p.update(),m=!0,o(p.before_update),p.fragment=!!l&&l(p.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);p.fragment&&p.fragment.l(t),t.forEach(s)}else p.fragment&&p.fragment.c();r.intro&&B(e.$$.fragment),H(e,r.target,r.anchor,r.customElement),N()}v(d)}class X{$destroy(){q(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function G(e){let n;return{c(){n=a("nav"),n.innerHTML='<h1 class="svelte-7f4avz">Scoreboard</h1>',p(n,"class","svelte-7f4avz")},m(t,e){u(t,n,e)},p:t,i:t,o:t,d(t){t&&s(n)}}}class I extends X{constructor(t){super(),F(this,t,null,G,c,{})}}function J(e){let n,o,r;return{c(){n=a("button"),n.textContent="Edit"},m(t,c){u(t,n,c),o||(r=d(n,"click",e[2]),o=!0)},p:t,d(t){t&&s(n),o=!1,r()}}}function K(t){let e,n,r,c,l;return{c(){e=a("input"),n=f(),r=a("button"),r.textContent="Save",p(e,"type","text"),p(e,"class","svelte-13pgpta")},m(o,s){u(o,e,s),h(e,t[0].score),u(o,n,s),u(o,r,s),c||(l=[d(e,"input",t[4]),d(r,"click",t[2])],c=!0)},p(t,n){1&n&&e.value!==t[0].score&&h(e,t[0].score)},d(t){t&&s(e),t&&s(n),t&&s(r),c=!1,o(l)}}}function Q(e){let n,o,r,c,m,h,g,v,y,b,x,w=e[0].name+"",_=e[0].score+"";function E(t,e){return t[1]?K:J}let k=E(e),C=k(e);return{c(){n=a("div"),o=a("p"),r=i(w),c=f(),m=a("p"),h=i(_),g=f(),C.c(),v=f(),y=a("button"),y.textContent="X",p(o,"class","svelte-13pgpta"),p(m,"class","svelte-13pgpta"),p(y,"class","delete-btn svelte-13pgpta"),p(n,"class","card svelte-13pgpta")},m(t,s){u(t,n,s),l(n,o),l(o,r),l(n,c),l(n,m),l(m,h),l(n,g),C.m(n,null),l(n,v),l(n,y),b||(x=d(y,"click",e[3]),b=!0)},p(t,[e]){1&e&&w!==(w=t[0].name+"")&&$(r,w),1&e&&_!==(_=t[0].score+"")&&$(h,_),k===(k=E(t))&&C?C.p(t,e):(C.d(1),C=k(t),C&&(C.c(),C.m(n,v)))},i:t,o:t,d(t){t&&s(n),C.d(),b=!1,x()}}}function R(t,e,n){const o=y();let{player:r}=e,c=!1;return t.$$set=t=>{"player"in t&&n(0,r=t.player)},[r,c,()=>{n(1,c=!c)},()=>o("deletePlayer",r.name),function(){r.score=this.value,n(0,r)}]}class U extends X{constructor(t){super(),F(this,t,R,Q,c,{player:0})}}function V(e){let n,r,c,i,$,g,v,y,b,x,w;return{c(){n=a("div"),r=a("form"),c=a("h6"),c.textContent="New Player",i=f(),$=a("input"),g=f(),v=a("input"),y=f(),b=a("button"),b.textContent="Add",p($,"type","text"),p($,"name",""),p($,"id",""),p(v,"type","number"),p(v,"name",""),p(v,"id",""),p(b,"type","submit"),p(b,"class","add-btn svelte-1ubg5e6"),p(r,"class","svelte-1ubg5e6"),p(n,"class","newPlayer svelte-1ubg5e6")},m(t,o){u(t,n,o),l(n,r),l(r,c),l(r,i),l(r,$),h($,e[0].name),l(r,g),l(r,v),h(v,e[0].score),l(r,y),l(r,b),x||(w=[d($,"input",e[2]),d(v,"input",e[3]),d(r,"submit",e[1])],x=!0)},p(t,[e]){1&e&&$.value!==t[0].name&&h($,t[0].name),1&e&&m(v.value)!==t[0].score&&h(v,t[0].score)},i:t,o:t,d(t){t&&s(n),x=!1,o(w)}}}function W(t,e,n){const o=y();let r={name:"",score:""};return[r,t=>{t.preventDefault(),o("addPlayer",r),n(0,r={name:"",score:""})},function(){r.name=this.value,n(0,r)},function(){r.score=m(this.value),n(0,r)}]}class Y extends X{constructor(t){super(),F(this,t,W,V,c,{})}}function Z(t,e,n){const o=t.slice();return o[3]=e[n],o}function tt(t){let e,n,o=t[0],r=[];for(let e=0;e<o.length;e+=1)r[e]=nt(Z(t,o,e));const c=t=>M(r[t],1,1,(()=>{r[t]=null}));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=i("")},m(t,o){for(let e=0;e<r.length;e+=1)r[e].m(t,o);u(t,e,o),n=!0},p(t,n){if(5&n){let l;for(o=t[0],l=0;l<o.length;l+=1){const c=Z(t,o,l);r[l]?(r[l].p(c,n),B(r[l],1)):(r[l]=nt(c),r[l].c(),B(r[l],1),r[l].m(e.parentNode,e))}for(j(),l=o.length;l<r.length;l+=1)c(l);z()}},i(t){if(!n){for(let t=0;t<o.length;t+=1)B(r[t]);n=!0}},o(t){r=r.filter(Boolean);for(let t=0;t<r.length;t+=1)M(r[t]);n=!1},d(t){!function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(r,t),t&&s(e)}}}function et(e){let n;return{c(){n=a("p"),n.textContent="No Players",p(n,"class","noPlayers svelte-18wxoul")},m(t,e){u(t,n,e)},p:t,i:t,o:t,d(t){t&&s(n)}}}function nt(t){let e,n;return e=new U({props:{player:t[3]}}),e.$on("deletePlayer",t[2]),{c(){O(e.$$.fragment)},m(t,o){H(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.player=t[3]),e.$set(o)},i(t){n||(B(e.$$.fragment,t),n=!0)},o(t){M(e.$$.fragment,t),n=!1},d(t){q(e,t)}}}function ot(t){let e,n,o,r,c,i,d,m;n=new Y({}),n.$on("addPlayer",t[1]);const $=[et,tt],h=[];function g(t,e){return 0===t[0].length?0:1}return i=g(t),d=h[i]=$[i](t),{c(){e=a("main"),O(n.$$.fragment),o=f(),r=a("div"),r.innerHTML='<h5 class="svelte-18wxoul">Player</h5> \n    <h5 class="svelte-18wxoul">Score</h5>',c=f(),d.c(),p(r,"class","header svelte-18wxoul"),p(e,"class","main svelte-18wxoul")},m(t,s){u(t,e,s),H(n,e,null),l(e,o),l(e,r),l(e,c),h[i].m(e,null),m=!0},p(t,[n]){let o=i;i=g(t),i===o?h[i].p(t,n):(j(),M(h[o],1,1,(()=>{h[o]=null})),z(),d=h[i],d?d.p(t,n):(d=h[i]=$[i](t),d.c()),B(d,1),d.m(e,null))},i(t){m||(B(n.$$.fragment,t),B(d),m=!0)},o(t){M(n.$$.fragment,t),M(d),m=!1},d(t){t&&s(e),q(n),h[i].d()}}}function rt(t,e,n){let o=[{name:"Alice",score:10},{name:"Bob",score:28},{name:"Cathy",score:9}];return[o,t=>{const e=t.detail;n(0,o=[...o,e])},t=>{n(0,o=o.filter((e=>e.name!==t.detail)))}]}class ct extends X{constructor(t){super(),F(this,t,rt,ot,c,{})}}function lt(e){let n,o,r,c,i;return o=new I({}),c=new ct({}),{c(){n=a("div"),O(o.$$.fragment),r=f(),O(c.$$.fragment),p(n,"class","container svelte-1sahv5k")},m(t,e){u(t,n,e),H(o,n,null),l(n,r),H(c,n,null),i=!0},p:t,i(t){i||(B(o.$$.fragment,t),B(c.$$.fragment,t),i=!0)},o(t){M(o.$$.fragment,t),M(c.$$.fragment,t),i=!1},d(t){t&&s(n),q(o),q(c)}}}return new class extends X{constructor(t){super(),F(this,t,null,lt,c,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
