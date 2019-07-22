(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{219:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"clean-up"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clean-up","aria-hidden":"true"}},[t._v("#")]),t._v(" Clean up")]),t._v(" "),a("p",[t._v("At this point, your project contains a lot of code that is just for demo purposes.")]),t._v(" "),a("p",[t._v("We recommend that you delete this code because your use-cases will be completely different from the demo use-cases.")]),t._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("This will break the demo application and modules that might be generated during the guide.")])]),t._v(" "),a("h2",{attrs:{id:"directories-and-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#directories-and-files","aria-hidden":"true"}},[t._v("#")]),t._v(" Directories and Files")]),t._v(" "),a("p",[t._v("Directories and files that we would recommend to delete:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("├── docs\n└── src\n    ├── app\n    │   ├── counter\n    │   ├── dashboard\n    │   └── form\n    └── server\n        └── routes\n            ├── CounterRoutes.ts\n            └── DemoRoutes.ts\n")])])]),a("h2",{attrs:{id:"code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#code","aria-hidden":"true"}},[t._v("#")]),t._v(" Code")]),t._v(" "),a("p",[t._v("Now you have to remove references to this modules, remove the following code in the following files:")]),t._v(" "),a("p",[a("code",[t._v("./src/app/router.ts")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" CounterRoutes "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./counter/routes'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" FormRoutes "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./form/routes'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" DashboardRoutes "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./dashboard/routes'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("CounterRoutes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("FormRoutes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("DashboardRoutes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n")])])]),a("p",[a("code",[t._v("./src/app/state.ts")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" CounterDefaultState"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ICounterState "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./counter/state'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n\n  counter"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ICounterState"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n")])])]),a("p",[t._v("And the server-side routes:")]),t._v(" "),a("p",[a("code",[t._v("./src/server/server.ts")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" DemoRoutes "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./routes/DemoRoutes'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" CounterRoutes "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./routes/CounterRoutes'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * routes to demonstrate the possibilities of vuesion\n * can be removed if you don't need them in your application\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("DemoRoutes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("CounterRoutes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"verification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#verification","aria-hidden":"true"}},[t._v("#")]),t._v(" Verification")]),t._v(" "),a("p",[t._v("Now you have a clean app and you can start creating your own application.")]),t._v(" "),a("p",[t._v("You should still see the vuesion home page if you open up "),a("a",{attrs:{href:"http://localhost:3000",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:3000"),a("OutboundLink")],1),t._v(".\nBut other routes should redirect to the "),a("code",[t._v("/not-found")]),t._v(" page.")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("Does it still work?")]),t._v(" "),a("p",[t._v("To verify that your changes did not break something, run "),a("code",[t._v("npm test")]),t._v(".")])])])},[],!1,null,null,null);s.default=n.exports}}]);