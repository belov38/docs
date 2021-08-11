(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{378:function(e,t,n){"use strict";n.r(t);var o=n(45),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"style-guide"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#style-guide"}},[e._v("#")]),e._v(" Style Guide")]),e._v(" "),n("p",[e._v("The default style guide that is used in this project, is based on the "),n("a",{attrs:{href:"https://vuejs.org/v2/style-guide/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue Style Guide"),n("OutboundLink")],1),e._v("\nand the "),n("a",{attrs:{href:"https://angular.io/guide/styleguide",target:"_blank",rel:"noopener noreferrer"}},[e._v("Angular Style Guide"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("h2",{attrs:{id:"file-structure-conventions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#file-structure-conventions"}},[e._v("#")]),e._v(" File structure conventions")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("├── .vuesion              // vuesion configuration\n├── cypress                   // e2e tests\n├── i18n                      // language files used by vue-i18n\n├── logs                      // express logs\n└── src\n    ├── app                   // main app code\n    │   ├── app               // app module - contains main component\n    │   ├── config            // app config to pass data from the server environment to the client\n    │   ├── shared            // shared code\n    │   ├── ...               // new modules will be added on this directory level\n    │   ├── app.ts            // app setup\n    │   ├── router.ts         // global routing information\n    │   ├── state.ts          // global app state\n    │   └── store.ts          // vuex store\n    ├── client\n    │   ├── index.ts          // entry point for client application\n    │   └── sw.ts             // service worker\n    ├── index.template.html   // template, needed for SSR and webpack\n    ├── server\n    │   ├── server.ts         // express app\n    │   ├── index.ts          // entry point for server application\n    │   ├── isomorphic.ts     // entry point for server-side rendering\n    │   ├── middlewares       // express middlewares\n    │   ├── routes            // express routes\n    │   └── utils             // utils for SSR\n    └── static                // static files mapped to /\n\n")])])]),n("h3",{attrs:{id:"what-is-a-module"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#what-is-a-module"}},[e._v("#")]),e._v(" What is a Module?")]),e._v(" "),n("p",[e._v("A module is an encapsulated piece of domain logic in your application, this could be for example:")]),e._v(" "),n("h4",{attrs:{id:"use-cases-for-a-module"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#use-cases-for-a-module"}},[e._v("#")]),e._v(" Use-cases for a module")]),e._v(" "),n("p",[n("strong",[e._v("Dynamic page")]),e._v(": consists of a lot of view logic, at least one route and state management")]),e._v(" "),n("p",[n("strong",[e._v("Static page")]),e._v(": has no state management but a route e.g. "),n("code",[e._v("/imprint")])]),e._v(" "),n("p",[n("strong",[e._v("Domain logic with shared view components")]),e._v(": e.g. authentication state, actions, mutations plus login/signup forms but no routes")]),e._v(" "),n("p",[n("strong",[e._v("Domain logic")]),e._v(": just plain logic with state management but no routes and no components")]),e._v(" "),n("p",[n("em",[e._v("A module usually has routing information, state management or both.")])]),e._v(" "),n("p",[n("strong",[e._v("You can easily create modules with "),n("code",[e._v("npm run generate")])])]),e._v(" "),n("h3",{attrs:{id:"what-is-a-connected-component"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#what-is-a-connected-component"}},[e._v("#")]),e._v(" What is a Connected Component?")]),e._v(" "),n("p",[e._v("A connected component is a "),n("a",{attrs:{href:"https://vuejs.org/v2/guide/single-file-components.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Single File Component"),n("OutboundLink")],1),e._v(" with VueX-mappings\nand "),n("strong",[e._v("it has to live inside a module")]),e._v(".")]),e._v(" "),n("p",[e._v("("),n("em",[e._v("these components are different compared to normal components because it is required to set up a VueX mock store for testing")]),e._v(")")]),e._v(" "),n("h3",{attrs:{id:"what-is-a-component"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#what-is-a-component"}},[e._v("#")]),e._v(" What is a Component?")]),e._v(" "),n("p",[e._v("This is a simple "),n("a",{attrs:{href:"https://vuejs.org/v2/guide/single-file-components.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Single File Component"),n("OutboundLink")],1),e._v(" without bindings,\nit just takes props and emits events - this is called a "),n("strong",[e._v('"stupid"')]),e._v(" component.")]),e._v(" "),n("p",[e._v("A Component can be placed everywhere. Usually, they live in the first level of a module, but it can also be inside other component folders.")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("Testing")]),e._v(" "),n("p",[e._v('You should try to have as many "stupid" components as possible. They are much easier to test because you can just pass test objects, values, stubs and mocks as a property. And they are much better to reuse!')]),e._v(" "),n("p",[e._v("If you want to know how to archive this, have a look at "),n("a",{attrs:{href:"https://medium.com/@learnreact/container-components-c0e67432e005",target:"_blank",rel:"noopener noreferrer"}},[e._v('Container Components (in our vocabulary "Connected Components")'),n("OutboundLink")],1),e._v(".")])]),e._v(" "),n("h2",{attrs:{id:"naming-conventions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#naming-conventions"}},[e._v("#")]),e._v(" Naming Conventions")]),e._v(" "),n("p",[e._v("Naming is one of the hardest things in software development.\nWe cannot support you with perfect names because we don't know your domain but we can help you to be consistent in naming files, modules, CSS classes, etc.")]),e._v(" "),n("p",[e._v("Let's consider you create a new page (module) with state management, routes and a component named "),n("code",[e._v("FooBar")]),e._v(". What would be the different variations for different contexts?")]),e._v(" "),n("ul",[n("li",[e._v("module "),n("code",[e._v("fooBar")])]),e._v(" "),n("li",[e._v("route "),n("code",[e._v("fooBar")])]),e._v(" "),n("li",[e._v("connected component "),n("code",[e._v("FooBar")])]),e._v(" "),n("li",[e._v("css class "),n("code",[e._v("fooBar")]),e._v(" // we decided against the hyphen notation because you have to use lower camel-case anyway to reference it with "),n("code",[e._v("$style")])]),e._v(" "),n("li",[e._v("actions "),n("code",[e._v("FooBarActions")])]),e._v(" "),n("li",[e._v("getters "),n("code",[e._v("FooBarGetters")])]),e._v(" "),n("li",[e._v("mutations "),n("code",[e._v("FooBarMutations")])]),e._v(" "),n("li",[e._v("state interface "),n("code",[e._v("IFooBarState")])]),e._v(" "),n("li",[e._v("default state "),n("code",[e._v("FooBarDefaultState")])])]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("Generator CLI")]),e._v(" "),n("p",[e._v("If you want to save some time and keep the style guide consistent,\nwe recommended using the included "),n("strong",[n("RouterLink",{attrs:{to:"/en/v3/guide/cli.html"}},[e._v("Generator CLI")])],1),e._v(" to generate new code.")])])])}),[],!1,null,null,null);t.default=a.exports}}]);