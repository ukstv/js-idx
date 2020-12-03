(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{76:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return a})),r.d(t,"rightToc",(function(){return d})),r.d(t,"default",(function(){return l}));var i=r(3),n=r(7),c=(r(0),r(99)),o={title:"Ecosystem",slug:"/ecosystem"},a={unversionedId:"idx-ecosystem",id:"idx-ecosystem",isDocsHomePage:!1,title:"Ecosystem",description:"Technologies used by IDX",source:"@site/docs/idx-ecosystem.md",slug:"/ecosystem",permalink:"/docs/ecosystem",editUrl:"https://github.com/ceramicstudio/js-idx/edit/master/website/docs/idx-ecosystem.md",version:"current"},d=[{value:"Technologies used by IDX",id:"technologies-used-by-idx",children:[{value:"Ceramic",id:"ceramic",children:[]},{value:"3ID DID Provider",id:"3id-did-provider",children:[]},{value:"3ID Connect",id:"3id-connect",children:[]}]},{value:"IDX libraries",id:"idx-libraries",children:[{value:"IDX",id:"idx",children:[]},{value:"IDX Tools",id:"idx-tools",children:[]}]},{value:"Other tools",id:"other-tools",children:[{value:"Ceramic CLI",id:"ceramic-cli",children:[]},{value:"IDX CLI",id:"idx-cli",children:[]}]}],s={rightToc:d};function l(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(i.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"technologies-used-by-idx"},"Technologies used by IDX"),Object(c.b)("h3",{id:"ceramic"},"Ceramic"),Object(c.b)("p",null,"IDX interacts with the ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.ceramic.network/"}),"Ceramic network")," to store and access documents."),Object(c.b)("h3",{id:"3id-did-provider"},"3ID DID Provider"),Object(c.b)("p",null,Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/ceramicstudio/js-3id-did-provider"}),"3ID DID Provider")," is used to authenticate DIDs using Ceramic."),Object(c.b)("h3",{id:"3id-connect"},"3ID Connect"),Object(c.b)("p",null,Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/3box/3id-connect"}),"3ID Connect")," provides an iframe-based version of 3ID DID Provider that can be used by Web applications."),Object(c.b)("h2",{id:"idx-libraries"},"IDX libraries"),Object(c.b)("h3",{id:"idx"},"IDX"),Object(c.b)("p",null,"The main ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/libs-idx"}),"IDX library")," used to interact with IdentityIndex documents."),Object(c.b)("h3",{id:"idx-tools"},"IDX Tools"),Object(c.b)("p",null,"The ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/libs-tools"}),"IDX Tools library")," provides development utilities to help build applications leveraging IDX."),Object(c.b)("h2",{id:"other-tools"},"Other tools"),Object(c.b)("h3",{id:"ceramic-cli"},"Ceramic CLI"),Object(c.b)("p",null,"The ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"https://docs.ceramic.network/modules/_ceramicnetwork_cli.html"}),"Ceramic CLI")," can be used to run a local Ceramic node."),Object(c.b)("h3",{id:"idx-cli"},"IDX CLI"),Object(c.b)("p",null,"The ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/ceramicstudio/idx-cli#idx-cli"}),"IDX CLI")," provides various commands to interact with DIDs and Identity Index documents, as introduced in this ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/guide-cli"}),"getting started guide"),"."))}l.isMDXComponent=!0},99:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var i=r(0),n=r.n(i);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},c=Object.keys(e);for(i=0;i<c.length;i++)r=c[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(i=0;i<c.length;i++)r=c[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),l=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},b=function(e){var t=l(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=n.a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,c=e.originalType,o=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),b=l(r),p=i,m=b["".concat(o,".").concat(p)]||b[p]||u[p]||c;return r?n.a.createElement(m,a(a({ref:t},s),{},{components:r})):n.a.createElement(m,a({ref:t},s))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var c=r.length,o=new Array(c);o[0]=p;var a={};for(var d in t)hasOwnProperty.call(t,d)&&(a[d]=t[d]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var s=2;s<c;s++)o[s]=r[s];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);