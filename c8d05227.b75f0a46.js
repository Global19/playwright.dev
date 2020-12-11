(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{127:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return n})),t.d(r,"rightToc",(function(){return s})),t.d(r,"default",(function(){return b}));var a=t(2),o=t(6),c=(t(0),t(147)),i={id:"class-chromiumbrowser",title:"class: ChromiumBrowser"},n={unversionedId:"api/class-chromiumbrowser",id:"api/class-chromiumbrowser",isDocsHomePage:!1,title:"class: ChromiumBrowser",description:"* extends: [Browser]",source:"@site/docs/api/class-chromiumbrowser.md",slug:"/api/class-chromiumbrowser",permalink:"/playwright/docs/api/class-chromiumbrowser",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api/class-chromiumbrowser.md",version:"current",sidebar:"api",previous:{title:"class: Logger",permalink:"/playwright/docs/api/class-logger"},next:{title:"class: ChromiumBrowserContext",permalink:"/playwright/docs/api/class-chromiumbrowsercontext"}},s=[{value:"chromiumBrowser.newBrowserCDPSession()",id:"chromiumbrowsernewbrowsercdpsession",children:[]},{value:"chromiumBrowser.startTracing(page, options)",id:"chromiumbrowserstarttracingpage-options",children:[]},{value:"chromiumBrowser.stopTracing()",id:"chromiumbrowserstoptracing",children:[]}],l={rightToc:s};function b(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"extends: ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/playwright/docs/api#class-browser",title:"Browser"}),"Browser"))),Object(c.b)("p",null,"Chromium-specific features including Tracing, service worker support, etc. You can use\n",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/playwright/docs/api/class-chromiumbrowser#chromiumbrowserstarttracingpage-options"}),"chromiumBrowser.startTracing([page, options])")," and ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/playwright/docs/api/class-chromiumbrowser#chromiumbrowserstoptracing"}),"chromiumBrowser.stopTracing()")," to create a trace file which can be opened in\nChrome DevTools or ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://chromedevtools.github.io/timeline-viewer/"}),"timeline viewer"),"."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"await browser.startTracing(page, {path: 'trace.json'});\nawait page.goto('https://www.google.com');\nawait browser.stopTracing();\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/playwright/docs/api/class-chromiumbrowser#chromiumbrowsernewbrowsercdpsession"}),"chromiumBrowser.newBrowserCDPSession()")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"#chromiumbrowserstarttracingpage-options"}),"chromiumBrowser.startTracing([page, options])")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"#chromiumbrowserstoptracing"}),"chromiumBrowser.stopTracing()"))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/playwright/docs/api/class-browser#browserondisconnected"}),"browser.on('disconnected')")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/playwright/docs/api/class-browser#browserclose"}),"browser.close()")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/playwright/docs/api/class-browser#browsercontexts"}),"browser.contexts()")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/playwright/docs/api/class-browser#browserisconnected"}),"browser.isConnected()")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/playwright/docs/api/class-browser#browsernewcontextoptions"}),"browser.newContext([options])")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/playwright/docs/api/class-browser#browsernewpageoptions"}),"browser.newPage([options])")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/playwright/docs/api/class-browser#browserversion"}),"browser.version()"))),Object(c.b)("h2",{id:"chromiumbrowsernewbrowsercdpsession"},"chromiumBrowser.newBrowserCDPSession()"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"returns: <",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/playwright/docs/api/class-cdpsession#class-cdpsession",title:"CDPSession"}),"CDPSession"),">>")),Object(c.b)("p",null,"Returns the newly created browser session."),Object(c.b)("h2",{id:"chromiumbrowserstarttracingpage-options"},"chromiumBrowser.startTracing(","[page, options]",")"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"page")," <",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/playwright/docs/api/class-page#class-page",title:"Page"}),"Page"),"> Optional, if specified, tracing includes screenshots of the given page."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"options")," <",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"path")," <",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),"> A path to write the trace file to."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"screenshots")," <",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Boolean_type",title:"Boolean"}),"boolean"),"> captures screenshots in the trace."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"categories")," <",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"}),"Array"),"<",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),">> specify custom categories to use instead of default."))),Object(c.b)("li",{parentName:"ul"},"returns: <",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),">")),Object(c.b)("p",null,"Only one trace can be active at a time per browser."),Object(c.b)("h2",{id:"chromiumbrowserstoptracing"},"chromiumBrowser.stopTracing()"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"returns: <",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://nodejs.org/api/buffer.htmlapi.md#buffer_class_buffer",title:"Buffer"}),"Buffer"),">>")),Object(c.b)("p",null,"Returns the buffer with trace data."))}b.isMDXComponent=!0},147:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return w}));var a=t(0),o=t.n(a);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function n(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,o=function(e,r){if(null==e)return{};var t,a,o={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),b=function(e){var r=o.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):n(n({},r),e)),t},p=function(e){var r=b(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},u=o.a.forwardRef((function(e,r){var t=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(t),u=a,w=p["".concat(i,".").concat(u)]||p[u]||m[u]||c;return t?o.a.createElement(w,n(n({ref:r},l),{},{components:t})):o.a.createElement(w,n({ref:r},l))}));function w(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var c=t.length,i=new Array(c);i[0]=u;var n={};for(var s in r)hasOwnProperty.call(r,s)&&(n[s]=r[s]);n.originalType=e,n.mdxType="string"==typeof e?e:a,i[1]=n;for(var l=2;l<c;l++)i[l]=t[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);