import{S as J,i as M,s as g,k as d,q as I,a as T,l as v,m as P,r as b,h as l,c as V,n as p,I as w,b as k,D as r,J as W,u as j,B as H,K as x}from"../../chunks/index-f3cd9b09.js";function z(n){let a,f,o,t,C,i,m,c,E,u,L,R,h,_,q,y,B,N;return{c(){a=d("h1"),f=I("Welcome to PEEPO CLICKERER"),o=T(),t=d("p"),C=I("Peepos: "),i=I(n[0]),m=T(),c=d("div"),E=d("div"),u=d("input"),R=T(),h=d("div"),_=d("button"),q=I("2x Peepos: Cost "),y=I(n[1]),this.h()},l(e){a=v(e,"H1",{class:!0});var s=P(a);f=b(s,"Welcome to PEEPO CLICKERER"),s.forEach(l),o=V(e),t=v(e,"P",{class:!0});var K=P(t);C=b(K,"Peepos: "),i=b(K,n[0]),K.forEach(l),m=V(e),c=v(e,"DIV",{class:!0});var D=P(c);E=v(D,"DIV",{class:!0});var S=P(E);u=v(S,"INPUT",{class:!0,type:!0,alt:!0,src:!0}),S.forEach(l),R=V(D),h=v(D,"DIV",{class:!0});var U=P(h);_=v(U,"BUTTON",{});var O=P(_);q=b(O,"2x Peepos: Cost "),y=b(O,n[1]),O.forEach(l),U.forEach(l),D.forEach(l),this.h()},h(){p(a,"class","svelte-4dr63m"),p(t,"class","svelte-4dr63m"),p(u,"class","peepoButton svelte-4dr63m"),p(u,"type","image"),p(u,"alt","Peepo"),w(u.src,L="peepo.jpg")||p(u,"src",L),p(E,"class","svelte-4dr63m"),p(h,"class","button svelte-4dr63m"),p(c,"class","buttons svelte-4dr63m")},m(e,s){k(e,a,s),r(a,f),k(e,o,s),k(e,t,s),r(t,C),r(t,i),k(e,m,s),k(e,c,s),r(c,E),r(E,u),r(c,R),r(c,h),r(h,_),r(_,q),r(_,y),B||(N=[W(u,"click",n[2]),W(_,"click",n[3])],B=!0)},p(e,[s]){s&1&&j(i,e[0]),s&2&&j(y,e[1])},i:H,o:H,d(e){e&&l(a),e&&l(o),e&&l(t),e&&l(m),e&&l(c),B=!1,x(N)}}}function A(n,a,f){let o=0,t=1;function C(){f(0,o+=t)}let i=50;function m(){o>=i&&(t*=2,f(0,o-=i),f(1,i*=3))}return[o,i,C,m]}class G extends J{constructor(a){super(),M(this,a,A,z,g,{})}}export{G as default};
