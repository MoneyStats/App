"use strict";(self.webpackChunkangular_moneystats=self.webpackChunkangular_moneystats||[]).push([[9718],{9718:(W,h,E)=>{E.r(h),E.d(h,{startTapClick:()=>I});var u=E(5730);const I=s=>{let e,p,r,o=10*-m,a=0;const k=s.getBoolean("animated",!0)&&s.getBoolean("rippleEffect",!0),f=new WeakMap,L=t=>{o=(0,u.u)(t),R(t)},A=()=>{clearTimeout(r),r=void 0,e&&(S(!1),e=void 0)},D=t=>{e||w(y(t),t)},R=t=>{w(void 0,t)},w=(t,n)=>{if(t&&t===e)return;clearTimeout(r),r=void 0;const{x:d,y:c}=(0,u.p)(n);if(e){if(f.has(e))throw new Error("internal error");e.classList.contains(l)||g(e,d,c),S(!0)}if(t){const b=f.get(t);b&&(clearTimeout(b),f.delete(t));const O=v(t)?0:_;t.classList.remove(l),r=setTimeout(()=>{g(t,d,c),r=void 0},O)}e=t},g=(t,n,d)=>{if(a=Date.now(),t.classList.add(l),!k)return;const c=M(t);null!==c&&(C(),p=c.addRipple(n,d))},C=()=>{void 0!==p&&(p.then(t=>t()),p=void 0)},S=t=>{C();const n=e;if(!n)return;const d=T-Date.now()+a;if(t&&d>0&&!v(n)){const c=setTimeout(()=>{n.classList.remove(l),f.delete(n)},T);f.set(n,c)}else n.classList.remove(l)},i=document;i.addEventListener("ionGestureCaptured",A),i.addEventListener("touchstart",t=>{o=(0,u.u)(t),D(t)},!0),i.addEventListener("touchcancel",L,!0),i.addEventListener("touchend",L,!0),i.addEventListener("pointercancel",A,!0),i.addEventListener("mousedown",t=>{if(2===t.button)return;const n=(0,u.u)(t)-m;o<n&&D(t)},!0),i.addEventListener("mouseup",t=>{const n=(0,u.u)(t)-m;o<n&&R(t)},!0)},y=s=>{if(void 0===s.composedPath)return s.target.closest(".ion-activatable");{const o=s.composedPath();for(let a=0;a<o.length-2;a++){const e=o[a];if(!(e instanceof ShadowRoot)&&e.classList.contains("ion-activatable"))return e}}},v=s=>s.classList.contains("ion-activatable-instant"),M=s=>{if(s.shadowRoot){const o=s.shadowRoot.querySelector("ion-ripple-effect");if(o)return o}return s.querySelector("ion-ripple-effect")},l="ion-activated",_=200,T=200,m=2500}}]);