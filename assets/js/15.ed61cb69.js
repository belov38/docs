(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{381:function(t,s,e){"use strict";e.r(s);var a=e(45),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"clean-up"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#clean-up"}},[t._v("#")]),t._v(" Clean up")]),t._v(" "),e("p",[t._v("At this point, your project contains a lot of code that is just for demo purposes.")]),t._v(" "),e("p",[t._v("We recommend that you delete this code because your use-cases will be completely different from the demo use-cases.")]),t._v(" "),e("h2",{attrs:{id:"directories-and-files"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#directories-and-files"}},[t._v("#")]),t._v(" Directories and Files")]),t._v(" "),e("p",[t._v("Directories and files that we would recommend to delete:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("└── src\n    ├── app\n    │   └── example\n    └── server\n        └── routes\n            ├── CounterRoutes.ts\n            └── DemoRoutes.ts\n")])])]),e("h2",{attrs:{id:"code"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#code"}},[t._v("#")]),t._v(" Code")]),t._v(" "),e("p",[t._v("Now you have to remove references to these modules. Remove the following code in the following files:")]),t._v(" "),e("p",[e("code",[t._v("./src/app/router.ts")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" CounterRoutes "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./example/counter/routes'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" FormRoutes "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./example/form/routes'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" DashboardRoutes "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./example/dashboard/routes'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n\n      "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("CounterRoutes"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("FormRoutes"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("DashboardRoutes"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n")])])]),e("p",[e("code",[t._v("./src/app/state.ts")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ICounterState "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./example/counter/state'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n\n  counter"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ICounterState"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n")])])]),e("p",[t._v("And the server-side routes:")]),t._v(" "),e("p",[e("code",[t._v("./src/server/server.ts")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" DemoRoutes "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("       "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./routes/DemoRoutes'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" CounterRoutes "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./routes/CounterRoutes'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * routes to demonstrate the possibilities of vuesion\n * can be removed if you don't need them in your application\n */")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("DemoRoutes")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("CounterRoutes")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"verification"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#verification"}},[t._v("#")]),t._v(" Verification")]),t._v(" "),e("p",[t._v("Now you have a clean app and you can start creating your own application.")]),t._v(" "),e("p",[t._v("You should still see the vuesion home page if you open up "),e("a",{attrs:{href:"http://localhost:3000",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:3000"),e("OutboundLink")],1),t._v(".\nBut other routes should redirect to the "),e("code",[t._v("/not-found")]),t._v(" page.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("Does it still work?")]),t._v(" "),e("p",[t._v("To verify that your changes did not break something, run "),e("code",[t._v("npm test")]),t._v(".")])])])}),[],!1,null,null,null);s.default=n.exports}}]);