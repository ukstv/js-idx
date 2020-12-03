(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{65:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var i=n(3),r=n(7),a=(n(0),n(99)),c={title:"Getting Started"},o={unversionedId:"libs-getting-started",id:"libs-getting-started",isDocsHomePage:!1,title:"Getting Started",description:"Environment",source:"@site/docs/libs-getting-started.md",slug:"/libs-getting-started",permalink:"/docs/libs-getting-started",editUrl:"https://github.com/ceramicstudio/js-idx/edit/master/website/docs/libs-getting-started.md",version:"current",sidebar:"docs",previous:{title:"What is Ceramic?",permalink:"/docs/concepts/ceramic"},next:{title:"Interfaces and types",permalink:"/docs/libs-types"}},s=[{value:"Environment",id:"environment",children:[]},{value:"Installation",id:"installation",children:[{value:"IDX client library",id:"idx-client-library",children:[]},{value:"IDX tools library",id:"idx-tools-library",children:[]}]},{value:"Definitions and Schemas",id:"definitions-and-schemas",children:[]},{value:"Example usage",id:"example-usage",children:[]}],l={rightToc:s};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"environment"},"Environment"),Object(a.b)("p",null,"IDX needs to access the Ceramic network using an implementation of the Ceramic API as exported by the ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://docs.ceramic.network/modules/_ceramicnetwork_common.html"}),Object(a.b)("inlineCode",{parentName:"a"},"@ceramicnetwork/common")," library"),"."),Object(a.b)("p",null,"Packages implementing this interface include ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://docs.ceramic.network/modules/_ceramicnetwork_core.html"}),Object(a.b)("inlineCode",{parentName:"a"},"@ceramicnetwork/core"))," and ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://docs.ceramic.network/modules/_ceramicnetwork_http_client.html"}),Object(a.b)("inlineCode",{parentName:"a"},"@ceramicnetwork/http-client")),"."),Object(a.b)("h2",{id:"installation"},"Installation"),Object(a.b)("p",null,"There are two main libraries to use when building apps for IDX"),Object(a.b)("h3",{id:"idx-client-library"},"IDX client library"),Object(a.b)("p",null,"This library is used by apps to interact with Ceramic and IDX documents"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-sh"}),"npm install @ceramicstudio/idx\n")),Object(a.b)("h3",{id:"idx-tools-library"},"IDX tools library"),Object(a.b)("p",null,"This library contains tools for developers to help create the data models used by apps"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-sh"}),"npm install --dev @ceramicstudio/idx-tools\n")),Object(a.b)("h2",{id:"definitions-and-schemas"},"Definitions and Schemas"),Object(a.b)("p",null,"All ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/terminology#document"}),"Documents")," attached to the ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/terminology#identity-index--idx"}),"Identity Index")," need to use a ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/terminology#definition"}),"Definition"),"."),Object(a.b)("p",null,"Once a public Ceramic network is running, the IDX library will provide a set of Definitions that can be used directly, but in the meantime these needs to be defined by developers using IDX."),Object(a.b)("p",null,"To create a Defininition, a specific ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/terminology#schema"}),"Schema")," needs to be used, and therefore must be present on the Ceramic node used by the IDX instance.\nThe ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/ceramicstudio/js-idx-tools"}),Object(a.b)("inlineCode",{parentName:"a"},"idx-tools")," library")," can be used to easily publish schemas to the Ceramic node:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-ts"}),"import { publishIDXConfig } from '@ceramicstudio/idx-tools'\n\n// First we need to make sure the IDX config (definitions and schemas) are published on the Ceramic node\n// Here `ceramic` implements the CeramicApi interface\nconst { definitions } = await publishIDXConfig(ceramic)\n\nconst appDefinitions = {\n  profile: definitions.basicProfile,\n}\n\n// Export the created `appDefinitions` so they can be used at runtime\n")),Object(a.b)("h2",{id:"example-usage"},"Example usage"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-ts"}),"import { IDX } from '@ceramicstudio/idx'\n\n// Import definitions created during development or build time\nimport { definitions } from './app-definitions'\n\n// A first user (Alice) can set her profile on her IDX Document using the definition alias used by the app\nconst aliceIndex = new IDX({ ceramic, definitions })\nawait aliceIndex.set('profile', { name: 'Alice' })\n\n// Other users (such as Bob) can read from known Indexes using the same definion alias and Alice's DID\nconst bobClient = new IDX({ ceramic, definitions })\nconst aliceProfile = await bobClient.get('profile', aliceIndex.id)\n")))}d.isMDXComponent=!0},99:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=d(n),m=i,u=b["".concat(c,".").concat(m)]||b[m]||p[m]||a;return n?r.a.createElement(u,o(o({ref:t},l),{},{components:n})):r.a.createElement(u,o({ref:t},l))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,c=new Array(a);c[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,c[1]=o;for(var l=2;l<a;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);