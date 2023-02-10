(function(){"use strict";var e={4808:function(e,t,n){var o=n(6369),a=function(){var e=this,t=e._self._c;return t("div",[t("nav",{staticClass:"navbar navbar-expand-lg bg-body-tertiary"},[t("div",{staticClass:"container-fluid"},[t("router-link",{attrs:{to:"/"}},[e._v("Naslovnica")]),t("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNavAltMarkup"}},[t("div",{staticClass:"navbar-nav"},[t("router-link",{attrs:{to:"/list-dogs"}},[e._v("Lista pasa")])],1),t("div",{staticClass:"navbar-nav"},[t("router-link",{attrs:{to:"/compare"}},[e._v("Usporedba")])],1),t("div",{staticClass:"navbar-nav"},[t("router-link",{attrs:{to:"/list-kennels"}},[e._v("Lista uzgajivačnica")])],1)]),t("div",{staticClass:"navbar-nav"},[t("router-link",{attrs:{to:"/adddog"}},[e._v("Dodaj psa")])],1)],1)]),t("router-view")],1)},r=[],i=n(1001),s={},u=(0,i.Z)(s,a,r,!1,null,null,null),l=u.exports,c=n(2631),d=function(){var e=this,t=e._self._c;return t("div",[t("center",[t("img",{staticClass:"mb-2",attrs:{src:n(724),alt:"Homepage Logo",width:"30%"},on:{click:e.taktika}}),t("div",{staticClass:"row"},[t("h2",{staticClass:"mb-5"},[e._v("Pedigree database")]),t("pl",[e._v(' Fokus projekta bi bio vođenje liste rodovnica/pedigrea čistokrvne rase psa te usporedba pasa da nema "inbreedinga" (incesta u obiteljskom stablu). ')]),t("pl",[e._v(" Vodi se lista pasa sa dobivenim CACIB-ima i CAC-ima kategoriziranih po broju postignuća. ")]),t("pl",[e._v(" Na detaljima psa stoji ime psa, spol, datum štenjenja te sama rodovnica tj. obiteljsko stablo. ")]),t("pl",[e._v(" Postoji obrazac koji potencijalni korisnici popunjuju da postave svog psa na stranicu. ")])],1)])],1)},p=[],f={name:"HomeView",components:{},data(){return{odgovor:"Dovoljno za 2?"}},methods:{async taktika(){alert(this.odgovor)}}},v=f,m=(0,i.Z)(v,d,p,!1,null,null,null),b=m.exports;o.ZP.use(c.ZP);const g=[{path:"/",name:"home",component:b},{path:"/compare",name:"compare",component:()=>Promise.all([n.e(411),n.e(819)]).then(n.bind(n,2542))},{path:"/dog/:_id",name:"dog",component:()=>Promise.all([n.e(411),n.e(744)]).then(n.bind(n,8613)),props:!0},{path:"/kennel/:_id",name:"kennel",component:()=>Promise.all([n.e(411),n.e(744)]).then(n.bind(n,4485))},{path:"/list-dogs",name:"list-dogs",component:()=>Promise.all([n.e(411),n.e(842)]).then(n.bind(n,4138))},{path:"/list-kennels",name:"list-kennels",component:()=>Promise.all([n.e(411),n.e(842)]).then(n.bind(n,9818))},{path:"/addDog",name:"addDog",component:()=>Promise.all([n.e(411),n.e(478)]).then(n.bind(n,8592))},{path:"/updateDog/:_id",name:"updateDog",component:()=>Promise.all([n.e(411),n.e(131)]).then(n.bind(n,9573))}],h=new c.ZP({mode:"history",base:"/",routes:g});var k=h;o.ZP.config.productionTip=!1,new o.ZP({router:k,render:e=>e(l)}).$mount("#app")},724:function(e,t,n){e.exports=n.p+"img/hometwotone.1722f6e5.png"}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,o,a,r){if(!o){var i=1/0;for(c=0;c<e.length;c++){o=e[c][0],a=e[c][1],r=e[c][2];for(var s=!0,u=0;u<o.length;u++)(!1&r||i>=r)&&Object.keys(n.O).every((function(e){return n.O[e](o[u])}))?o.splice(u--,1):(s=!1,r<i&&(i=r));if(s){e.splice(c--,1);var l=a();void 0!==l&&(t=l)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[o,a,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+({131:"UpdateDog",478:"AddDog",744:"Dog",819:"Compare",842:"List"}[e]||e)+"."+{131:"bfbaf925",411:"4b2e9d1a",478:"19988555",744:"e234c02e",819:"c7da3ff9",842:"84da510a"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+{131:"UpdateDog",478:"AddDog",744:"Dog",819:"Compare",842:"List"}[e]+"."+{131:"0387e583",478:"0387e583",744:"f00115c2",819:"a98c8e35",842:"4b1533b4"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="pedigree_database:";n.l=function(o,a,r,i){if(e[o])e[o].push(a);else{var s,u;if(void 0!==r)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var d=l[c];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+r){s=d;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+r),s.src=o),e[o]=[a];var p=function(t,n){s.onerror=s.onload=null,clearTimeout(f);var a=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,o,a){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var i=function(n){if(r.onerror=r.onload=null,"load"===n.type)o();else{var i=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=s,r.parentNode.removeChild(r),a(u)}};return r.onerror=r.onload=i,r.href=t,n?n.parentNode.insertBefore(r,n.nextSibling):document.head.appendChild(r),r},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var a=n[o],r=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(r===e||r===t))return a}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){a=i[o],r=a.getAttribute("data-href");if(r===e||r===t)return a}},o=function(o){return new Promise((function(a,r){var i=n.miniCssF(o),s=n.p+i;if(t(i,s))return a();e(o,s,null,a,r)}))},a={143:0};n.f.miniCss=function(e,t){var n={131:1,478:1,744:1,819:1,842:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=o(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,o){var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)o.push(a[2]);else{var r=new Promise((function(n,o){a=e[t]=[n,o]}));o.push(a[2]=r);var i=n.p+n.u(t),s=new Error,u=function(o){if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var r=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",s.name="ChunkLoadError",s.type=r,s.request=i,a[1](s)}};n.l(i,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,r,i=o[0],s=o[1],u=o[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(u)var c=u(n)}for(t&&t(o);l<i.length;l++)r=i[l],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(c)},o=self["webpackChunkpedigree_database"]=self["webpackChunkpedigree_database"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(4808)}));o=n.O(o)})();
//# sourceMappingURL=app.2865dd3a.js.map