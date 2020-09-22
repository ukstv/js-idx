(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{66:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return d})),t.d(n,"default",(function(){return l}));var i=t(2),a=t(6),o=(t(0),t(74)),r={title:"Setting up Definitions"},c={unversionedId:"guide-definitions",id:"guide-definitions",isDocsHomePage:!1,title:"Setting up Definitions",description:"Understanding Definitions",source:"@site/docs/guide-definitions.md",slug:"/guide-definitions",permalink:"/docs/guide-definitions",editUrl:"https://github.com/ceramicstudio/js-idx/edit/master/website/docs/guide-definitions.md",version:"current",sidebar:"docs",previous:{title:"Understanding authentication",permalink:"/docs/guide-authentication"}},d=[{value:"Understanding Definitions",id:"understanding-definitions",children:[]},{value:"Definition contents",id:"definition-contents",children:[]},{value:"Creating a Definition using IDX",id:"creating-a-definition-using-idx",children:[]},{value:"Definition aliases",id:"definition-aliases",children:[{value:"During development",id:"during-development",children:[]},{value:"Application runtime",id:"application-runtime",children:[]}]}],s={rightToc:d};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"understanding-definitions"},"Understanding Definitions"),Object(o.b)("p",null,"In IDX, ",Object(o.b)("strong",{parentName:"p"},"Definitions")," are needed to access resources. They are used in two main ways:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Their ",Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"/docs/idx-terminology#docid"}),"Document Identifier (DocID)")," is used a key in the ",Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"/docs/idx-terminology#identity-index--idx"}),"Identity Index")," map."),Object(o.b)("li",{parentName:"ol"},"Their ",Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"/docs/idx-terminology#document"}),"Document")," contents contain metadata describing the resource associated to them")),Object(o.b)("h2",{id:"definition-contents"},"Definition contents"),Object(o.b)("p",null,"A ",Object(o.b)("strong",{parentName:"p"},"Definition")," contains the following metadata:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"schema")," (required): the ",Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"/docs/idx-terminology#docid"}),"DocID")," of the ",Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"/docs/idx-terminology#schema"}),"Schema")," that will be used to validate the associated resource contents"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"name")," (required): a name for the Definition, helping unique identification and discovery"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"description")," (optional): a short description of the Definition, to help with discovery"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"url")," (optional): URL of the specification for the Definition or associated project"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"config")," (optional): any additional contents that may be needed by applications to support additional logic when interacting with the resource")),Object(o.b)("h2",{id:"creating-a-definition-using-idx"},"Creating a Definition using IDX"),Object(o.b)("p",null,"Developers can create ",Object(o.b)("strong",{parentName:"p"},"Definitions")," specific to their application needs directly by using the ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/lib-apis#createdefinition"}),Object(o.b)("inlineCode",{parentName:"a"},"createDefinition")," method")," of the ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/lib-getting-started"}),Object(o.b)("inlineCode",{parentName:"a"},"IDX"),"library"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-ts"}),"import { IDX } from '@ceramicstudio/idx'\n\n// See constructor options\nconst idx = new IDX(...)\n\nconst definitionID = await idx.createDefinition({\n  name: 'my app definition',\n  schema: 'ceramic://...'\n})\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"definitionID")," created here is ",Object(o.b)("strong",{parentName:"p"},"immutable")," and can be used by other methods of IDX, for example to get and set the contents associated to this definition:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-ts"}),"await idx.set(definitionID, { my: 'contents' })\nawait idx.get(definitionID) // { my: 'contents' }\n")),Object(o.b)("h2",{id:"definition-aliases"},"Definition aliases"),Object(o.b)("p",null,"Rather than using ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/idx-terminology#docid"}),"DocIDs")," to identify contents used by apps, it's possible provide a ",Object(o.b)("inlineCode",{parentName:"p"},"definitions")," record to the ",Object(o.b)("inlineCode",{parentName:"p"},"IDX")," constructor, to be used in other methods."),Object(o.b)("h3",{id:"during-development"},"During development"),Object(o.b)("p",null,"Aliases only need to be ",Object(o.b)("strong",{parentName:"p"},"created once")," so they are available on the ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/idx-terminology#ceramic"}),"Ceramic network"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-ts"}),"const [userDefinitionID, collectionDefinitionID] = await Promise.all([\n  idx.createDefinition({\n    name: 'my first definition',\n    schema: 'ceramic://...'\n  }),\n  idx.createDefinition({\n    name: 'my second definition',\n    schema: 'ceramic://...'\n  })\n])\n\nconst definitions = { user: userDefinitionID, collection: collectionDefinitionID }\n")),Object(o.b)("h3",{id:"application-runtime"},"Application runtime"),Object(o.b)("p",null,"A deployed application can use the Definition aliases created during development to identify contents."),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-ts"}),"// The definition name to DocID map created during development\nconst definitions = {...}\n\n// See constructor options\nconst idx = new IDX({ definitions, ... })\n\n// Definitiona aliases can then be used in IDX methods\nconst user = await idx.get('user')\nawait idx.set('collection', { my: 'data' })\n")))}l.isMDXComponent=!0},74:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var i=t(0),a=t.n(i);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),l=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=l(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=a.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=l(t),u=i,m=p["".concat(r,".").concat(u)]||p[u]||b[u]||o;return t?a.a.createElement(m,c(c({ref:n},s),{},{components:t})):a.a.createElement(m,c({ref:n},s))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=u;var c={};for(var d in n)hasOwnProperty.call(n,d)&&(c[d]=n[d]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var s=2;s<o;s++)r[s]=t[s];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);