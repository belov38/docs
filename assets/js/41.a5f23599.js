(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{407:function(e,t,a){"use strict";a.r(t);var i=a(45),o=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"deployment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deployment"}},[e._v("#")]),e._v(" Deployment")]),e._v(" "),a("h2",{attrs:{id:"isomorphic-universal-web-application"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#isomorphic-universal-web-application"}},[e._v("#")]),e._v(" Isomorphic (Universal) Web Application")]),e._v(" "),a("p",[e._v("For a better user experience and search engine optimisation we recommend this method for your deployment.\nThis project is optimised to produce isomorphic (universal) web-apps. All features are available for this kind of deployment.")]),e._v(" "),a("p",[e._v("To create an isomorphic (universal) web-app that you can deploy to an Heroku dyno, AWS EC2 instance or any other managed server,\nrun the command "),a("code",[e._v("npm run build")]),e._v(". This will create a server application that serves and renders the app.")]),e._v(" "),a("p",[a("strong",[e._v("Folders and files to include in your deployments:")])]),e._v(" "),a("ul",[a("li",[e._v("package.json")]),e._v(" "),a("li",[e._v("./dist")]),e._v(" "),a("li",[e._v("./i18n")]),e._v(" "),a("li",[e._v("./.vuesion/config.json")]),e._v(" "),a("li",[e._v("./node_modules (only production dependencies)")])]),e._v(" "),a("h2",{attrs:{id:"single-page-application-with-static-html"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#single-page-application-with-static-html"}},[e._v("#")]),e._v(" Single Page Application with static HTML")]),e._v(" "),a("p",[e._v("Sometimes it's enough to deploy a static version of your application without server-side-rendering.\nFor example if you want to host your application on a CDN or a file storage like Netlify, Github pages or AWS S3, run the command "),a("code",[e._v("npm run build:spa")]),e._v(".")]),e._v(" "),a("p",[e._v("This will create a build that only contains the client side application and pre-renders an "),a("a",{attrs:{href:"https://developers.google.com/web/fundamentals/architecture/app-shell",target:"_blank",rel:"noopener noreferrer"}},[e._v("AppShell"),a("OutboundLink")],1),e._v(".\nBy default it takes the route "),a("code",[e._v("/")]),e._v(" as the AppShell.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Configure AppShell")]),e._v(" "),a("p",[e._v("You can configure the AppShell and additional static routes in the "),a("code",[e._v(".vuesion/config.json")]),e._v(" file.")]),e._v(" "),a("p",[e._v("This enables you to create, for example, a blog or a static marketing page")])]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("Limitations and Caveats")]),e._v(" "),a("ul",[a("li",[e._v("You need a web-server to serve the static files")]),e._v(" "),a("li",[e._v("You cannot render pages that have route guards or a redirects (e.g. /dashboard)")]),e._v(" "),a("li",[e._v("You might have issues with "),a("code",[e._v("prefetch")]),e._v(" (e.g. if the server you try to hit is not available during the rendering)")]),e._v(" "),a("li",[e._v("You cannot use the "),a("code",[e._v("App/Runtime Config")]),e._v(" features because they depend on the server component\n"),a("ul",[a("li",[e._v("That means that you have to replace all references to the vuex state "),a("code",[e._v("app.config")]),e._v(" with a static value")])])])])]),e._v(" "),a("p",[a("strong",[e._v("Folders and files to include in your deployments:")])]),e._v(" "),a("ul",[a("li",[e._v("./dist")])])])}),[],!1,null,null,null);t.default=o.exports}}]);