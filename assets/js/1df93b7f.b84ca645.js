/*! For license information please see 1df93b7f.b84ca645.js.LICENSE.txt */
(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[53237],{28475:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});var s=a(27378),r=function(){return r=Object.assign||function(e){for(var t,a=1,s=arguments.length;a<s;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},r.apply(this,arguments)};function n(e){var t=s.useState(!1),a=t[0],n=t[1],o=s.useState(!1),i=o[0],c=o[1],l=encodeURIComponent(e.id),d="string"==typeof e.playlistCoverId?encodeURIComponent(e.playlistCoverId):null,h=e.title,u=e.poster||"hqdefault",m="&"+e.params||0,g=e.muted?"&mute=1":"",p=e.announce||"Watch",A=e.webp?"webp":"jpg",b=e.webp?"vi_webp":"vi",w=e.thumbnail||(e.playlist?"https://i.ytimg.com/"+b+"/"+d+"/"+u+"."+A:"https://i.ytimg.com/"+b+"/"+l+"/"+u+"."+A),x=e.noCookie;x=e.cookie?"https://www.youtube.com":"https://www.youtube-nocookie.com";var j=e.playlist?x+"/embed/videoseries?autoplay=1"+g+"&list="+l+m:x+"/embed/"+l+"?autoplay=1&state=1"+g+m,f=e.activatedClass||"lyt-activated",y=e.adNetwork||!1,v=e.aspectHeight||9,C=e.aspectWidth||16,k=e.iframeClass||"",O=e.playerClass||"lty-playbtn",I=e.wrapperClass||"yt-lite",B=e.onIframeAdded||function(){},E=e.rel?"prefetch":"preload";return s.useEffect((function(){i&&B()}),[i]),s.createElement(s.Fragment,null,s.createElement("link",{rel:E,href:w,as:"image"}),s.createElement(s.Fragment,null,a&&s.createElement(s.Fragment,null,s.createElement("link",{rel:"preconnect",href:x}),s.createElement("link",{rel:"preconnect",href:"https://www.google.com"}),y&&s.createElement(s.Fragment,null,s.createElement("link",{rel:"preconnect",href:"https://static.doubleclick.net"}),s.createElement("link",{rel:"preconnect",href:"https://googleads.g.doubleclick.net"})))),s.createElement("article",{onPointerOver:function(){a||n(!0)},onClick:function(){i||c(!0)},className:I+" "+(i?f:""),"data-title":h,style:r({backgroundImage:"url("+w+")"},{"--aspect-ratio":v/C*100+"%"})},s.createElement("button",{type:"button",className:O,"aria-label":p+" "+h}),i&&s.createElement("iframe",{className:k,title:h,width:"560",height:"315",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,src:j})))}},46768:(e,t,a)=>{"use strict";a.d(t,{Z:()=>h});var s=a(24246),r=(a(27378),a(66222)),n=a(36712);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},s=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),s.forEach((function(t){o(e,t,a[t])}))}return e}function c(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function l(e,t){if(null==e)return{};var a,s,r=function(e,t){if(null==e)return{};var a,s,r={},n=Object.keys(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function d(e,t){switch(e){case"noicon":case"loaded":return null;case"loading":return(0,n.I)({id:"theme.IdealImageMessage.loading",message:"Loading...",description:"When the full-scale image is loading"});case"load":{const{pickedSrc:e}=t,{size:a}=e,s=a?` (${function(e){const t=["B","KB","MB","GB","TB"];if(0===e)return"n/a";const a=Math.floor(Math.log(e)/Math.log(1024));return 0===a?`${e} ${t[a]}`:`${(e/1024**a).toFixed(1)} ${t[a]}`}(a)})`:"";return(0,n.I)({id:"theme.IdealImageMessage.load",message:"Click to load{sizeMessage}",description:"To prompt users to load the full image. sizeMessage is a parenthesized size figure."},{sizeMessage:s})}case"offline":return(0,n.I)({id:"theme.IdealImageMessage.offline",message:"Your browser is offline. Image not loaded",description:"When the user is viewing an offline document"});case"error":{const{loadInfo:e}=t;return 404===e?(0,n.I)({id:"theme.IdealImageMessage.404error",message:"404. Image not found",description:"When the image is not found"}):(0,n.I)({id:"theme.IdealImageMessage.error",message:"Error. Click to reload",description:"When the image fails to load for unknown error"})}default:throw new Error(`Wrong icon: ${e}`)}}function h(e){const{img:t}=e,a=l(e,["img"]);return"string"==typeof t||"default"in t?(0,s.jsx)("img",i({src:"string"==typeof t?t:t.default},a)):(0,s.jsx)(r.Z,c(i({},a),{height:null!==(n=t.src.height)&&void 0!==n?n:100,width:null!==(o=t.src.width)&&void 0!==o?o:100,placeholder:{lqip:t.preSrc},src:t.src.src,srcSet:t.src.images.map((e=>c(i({},e),{src:e.path}))),getMessage:d}));var n,o}},57774:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>E});var s=a(24246),r=a(27378),n=a(40624),o=a(28475),i=a(41428),c=a(36712),l=a(4423),d=a(66448),h=a(46768),u=a(88613);const m={tweet:"tweet_x2tn",tweetMeta:"tweetMeta_fAxr"};function g({url:e,handle:t,name:a,content:r,date:o,githubUsername:c}){return(0,s.jsxs)("div",{className:(0,n.Z)("card",m.tweet),children:[(0,s.jsx)("div",{className:"card__header",children:(0,s.jsxs)("div",{className:"avatar",children:[(0,s.jsx)("img",{alt:a,className:"avatar__photo",src:`https://unavatar.io/twitter/${t}?fallback=https://github.com/${c}.png`,width:"48",height:"48",loading:"lazy"}),(0,s.jsxs)("div",{className:(0,n.Z)("avatar__intro",m.tweetMeta),children:[(0,s.jsx)("strong",{className:"avatar__name",children:a}),(0,s.jsxs)("span",{children:["@",t]})]})]})}),(0,s.jsx)("div",{className:(0,n.Z)("card__body",m.tweet),children:r}),(0,s.jsx)("div",{className:"card__footer",children:(0,s.jsx)(i.Z,{className:(0,n.Z)(m.tweetMeta,m.tweetDate),to:e,children:o})})]})}const p=[{url:"https://twitter.com/acemarke/status/1452725153998245891",handle:"acemarke",name:"Mark Erikson",date:"Oct 26, 2021",content:(0,s.jsx)(s.Fragment,{children:"We've been using Docusaurus for all the Redux org docs sites for the last couple years, and it's great! We've been able to focus on content, customize some presentation and features, and It Just Works."}),showOnHomepage:!0,githubUsername:"markerikson"},{url:"https://twitter.com/arcanis/status/1351620354561732608",handle:"arcanis",name:"Ma\xebl",date:"Jan 20, 2021",content:(0,s.jsx)(s.Fragment,{children:"I've used Docusaurus for two websites this year, and I've been very happy about the v2. Looks good, and simple to setup."}),showOnHomepage:!0,githubUsername:"arcanis"},{url:"https://twitter.com/maxlynch/status/1375113166007455748",handle:"maxlynch",name:"Max Lynch",date:"Mar 25, 2021",content:(0,s.jsx)(s.Fragment,{children:"Docusaurus v2 doubles as a really nice little static site generator tool for content-focused sites, love it \ud83d\udc4f"}),showOnHomepage:!0,githubUsername:"mlynch"},{url:"https://twitter.com/supabase/status/1328960757149671425",handle:"supabase",name:"Supabase",date:"Nov 18, 2020",content:(0,s.jsxs)(s.Fragment,{children:["We've been using V2 since January and it has been great - we spend less time building documentation and more time building \ud83d\udef3",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"Thanks ",(0,s.jsx)("b",{children:"@docusaurus"})," team \ud83e\udd96"]}),showOnHomepage:!0,githubUsername:"supabase"},{url:"https://twitter.com/paularmstrong/status/1387059593373700100",handle:"paularmstrong",name:"Paul Armstrong",date:"Apr 27, 2021",content:(0,s.jsx)(s.Fragment,{children:"Continue to be impressed and excited about Docusaurus v2 alpha releases. Already using the sidebar items generator to help monorepo workspace devs create their own doc pages without any configuration needed."}),showOnHomepage:!0,githubUsername:"paularmstrong"},{url:"https://twitter.com/sanketsahu/status/1328677366642528257",handle:"sanketsahu",name:"Sanket Sahu",date:"Nov 17, 2020",content:(0,s.jsxs)(s.Fragment,{children:[".",(0,s.jsx)("b",{children:"@docusaurus"})," \u2764\ufe0f"]}),showOnHomepage:!1,githubUsername:"sanketsahu"},{url:"https://twitter.com/debs_obrien/status/1374615572298801155",handle:"debs_obrien",name:"Debbie O'Brien",date:"Mar 24, 2021",content:(0,s.jsxs)(s.Fragment,{children:["Been doing a lot of work with ",(0,s.jsx)("b",{children:"@docusaurus"})," lately and I have to say it is really fun to work with. A lot of really cool features. I love that you can easily reuse content by creating a markdown file and importing it as a component. \ud83d\udd25"]}),showOnHomepage:!0,githubUsername:"debs-obrien"},{url:"https://twitter.com/Dr_Electron/status/1443635328376508433",handle:"Dr_Electron",name:"Dr.Electron",date:"Oct 11, 2021",content:(0,s.jsxs)(s.Fragment,{children:["The #IOTA wiki is now part of the ",(0,s.jsx)("b",{children:"@docusaurus"})," showcase. We even have the honor of being a favorite. We are really happy that we found this project. It helped us a lot to improve the documentation. And we still have a lot of plans with things like tutorials, versioning and i8n."]}),showOnHomepage:!0,githubUsername:"Dr-Electron"},{url:"https://twitter.com/kentcdodds/status/1323806816019468288",handle:"kentcdodds",name:"Kent C. Dodds",date:"Nov 4, 2020",content:(0,s.jsxs)(s.Fragment,{children:["http://testing-library.com just got a nice update! We're now on the latest version of ",(0,s.jsx)("b",{children:"@docusaurus"})," thanks to @matanbobi, @TensorNo, and @nickemccurdy \ud83d\udc99",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"My favorite new feature: dark mode!! \ud83c\udf11/\u2600\ufe0f"]}),showOnHomepage:!0,githubUsername:"kentcdodds"},{url:"https://twitter.com/bantg/status/1463608561368457225",handle:"bantg",name:"banteg",date:"Nov 25, 2021",content:(0,s.jsx)(s.Fragment,{children:"I like docusaurus much more, it's so snappy."}),showOnHomepage:!1,githubUsername:"banteg"},{url:"https://twitter.com/swyx/status/1418405515684581378",handle:"swyx",name:"swyx",date:"Jul 23, 2021",content:(0,s.jsxs)(s.Fragment,{children:["Happy to share Temporal's first open source sponsorship \u2014 of"," ",(0,s.jsx)("b",{children:"@docusaurus"}),"!",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"@temporalio uses it for http://docs.temporal.io, and it has been a huge boon to our docs team. @sebastienlorber is an incredible steward of the project, support it if you can!"]}),showOnHomepage:!0,githubUsername:"sw-yx"},{url:"https://twitter.com/rachelnabors/status/1478490902037467137",handle:"rachelnabors",name:"R 'Nearest' Nabors \ud83d\udc99",date:"Jan 5, 2022",content:(0,s.jsxs)(s.Fragment,{children:["I hear ",(0,s.jsx)("b",{children:"@docusaurus"})," is a good tool for that!"]}),showOnHomepage:!1,githubUsername:"rachelnabors"},{url:"https://twitter.com/dabit3/status/1394685348375052295",handle:"dabit3",name:"Nader Dabit",date:"May 19, 2021",content:(0,s.jsx)(s.Fragment,{children:"I did try Docusaurus, and I really liked it! Still investigating various options but it's probably at the top of my list for sure"}),showOnHomepage:!1,githubUsername:"dabit3"},{url:"https://twitter.com/johnny_reilly/status/1469238609266028545",handle:"johnny_reilly",name:"John Reilly",date:"Dec 10, 2021",content:(0,s.jsxs)(s.Fragment,{children:["I \u2764\ufe0f ",(0,s.jsx)("b",{children:"@docusaurus"})," - it makes it so easy to spin up docs, blogs and simple websites. I've used it to:",(0,s.jsx)("br",{}),(0,s.jsx)("br",{})," \u2705 Replatform my blog with GitHub pages ",(0,s.jsx)("br",{}),"\u2705 Build a website for a local business ",(0,s.jsx)("br",{}),"\u2705 Build internal facing blog/docs sites with @AzureStaticApps"]}),showOnHomepage:!1,githubUsername:"johnnyreilly"},{url:"https://twitter.com/tinkertim/status/1423358665726304260",handle:"tinkertim",name:"Tim Post \ud83d\udc89\ud83d\udc89\ud83d\udc89",date:"Aug 6, 2021",content:(0,s.jsxs)(s.Fragment,{children:["Docusaurus is mind-bendingly flexible. ",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),'"Wait! We need to have two products documented on the same site and both need to be translated into multiple languages!"',(0,s.jsx)("br",{}),(0,s.jsx)("br",{})," ... and that's actually easy. Loving it!"]}),showOnHomepage:!1,githubUsername:"tinkertim"},{url:"https://twitter.com/sebastienlorber/status/1321784071815680000",handle:"sebastienlorber",name:"Sebastien Lorber",date:"Oct 29, 2020",content:(0,s.jsxs)(s.Fragment,{children:["\ud83e\udd73\ud83c\udf8a\ud83e\udd73\ud83c\udf8a\ud83e\udd73\ud83c\udf8a\ud83e\udd73\ud83c\udf8a The @reactnative website just migrated to"," ",(0,s.jsx)("b",{children:"@docusaurus"}),"v2",(0,s.jsx)("br",{}),"Some obvious changes: ",(0,s.jsx)("br",{}),"\ud83c\udf14 Dark mode ",(0,s.jsx)("br",{}),"\u26a1\ufe0f SPA navigation / prefetching ",(0,s.jsx)("br",{}),"\ud83e\uddd0 @algolia DocSearch v3 ",(0,s.jsx)("br",{}),"\ud83d\udca5 @mdx_js enable many new possibilities ",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"Check it out: http://reactnative.dev"]}),showOnHomepage:!1,githubUsername:"slorber"},{url:"https://twitter.com/iansu/status/1184149586048245760",handle:"iansu",name:"Ian Sutherland",date:"Oct 16, 2019",content:(0,s.jsxs)(s.Fragment,{children:["We just updated the Create React App docs to Docusaurus v2. Now with dark mode! \ud83d\ude0e",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"Thanks to the ",(0,s.jsx)("b",{children:"@docusaurus"})," team for their help! \u2764\ufe0f",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"https://create-react-app.dev"]}),showOnHomepage:!1,githubUsername:"iansu"},{url:"https://twitter.com/mweststrate/status/1181276252293853186",handle:"mweststrate",name:"Michel Weststrate",date:"Oct 8, 2019",content:(0,s.jsxs)(s.Fragment,{children:["New #mobx docs are online! More modern, fixing many UI issues.",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"\ud83d\udc4f @cloverich did the awesome job of migrating from ancient gitbook -> ",(0,s.jsx)("b",{children:"@docusaurus"}),"! \ud83d\udc4f ",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"No real content updates yet, but contributing and publishing has become way easier"]}),showOnHomepage:!1,githubUsername:"mweststrate"},{url:"https://twitter.com/verdaccio_npm/status/1420187249145118722",handle:"verdaccio_npm",name:"verdaccio",date:"Jul 28, 2021",content:(0,s.jsxs)(s.Fragment,{children:["The new website has landed \ud83d\ude80 powered by ",(0,s.jsx)("b",{children:"@docusaurus"})," v2 and made by @_semoal kudos to him \ud83d\udc4f #verdaccio #nodejs awesome contribution \u2764\ufe0f\u200d\ud83d\udd25 (video made with react remotion @JNYBGR ) all Open Source and hosted on @Netlify https://verdaccio.org"]}),showOnHomepage:!1,githubUsername:"verdaccio"},{url:"https://twitter.com/yangshunz/status/1284536949718478848",handle:"yangshunz",name:"Yangshun Tay",date:"Jul 19, 2020",content:(0,s.jsxs)(s.Fragment,{children:["I made a ",(0,s.jsx)("b",{children:"@docusaurus"})," website for answers to the H5BP Front End Interview Questions! Hopefully it makes the browsing experience easier - https://frontendinterviewhandbook.com"]}),showOnHomepage:!1,githubUsername:"yangshun"},{url:"https://twitter.com/pierregillesl/status/1372839188698001408",handle:"pierregillesl",name:"Pierre-Gilles Leymarie",date:"Mar 19, 2021",content:(0,s.jsxs)(s.Fragment,{children:["Just upgraded our website to ",(0,s.jsx)("b",{children:"@docusaurus"})," latest with internationalization support \ud83e\udd73",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"Before that, we had to build 2 separate versions of the website to get it in English + French.",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"Now, it's working out of the box, with proper meta tags for SEO \ud83d\udc4c"]}),showOnHomepage:!1,githubUsername:"Pierre-Gilles"},{url:"https://twitter.com/biantris_/status/1480259279487741953",handle:"biantris_",name:"biazita",date:"Jan 10, 2022",content:(0,s.jsxs)(s.Fragment,{children:["Today I tried ",(0,s.jsx)("b",{children:"@docusaurus"})," in a project, I really like the ease and speed of developing with it \\o/"]}),showOnHomepage:!1,githubUsername:"biantris"}],A=[{thumbnail:a(74833),name:'Christopher "vjeux" Chedeau',title:(0,c.I)({id:"homepage.quotes.christopher-chedeau.title",message:"Lead Prettier Developer",description:"Title of quote of Christopher Chedeau on the home page"}),text:(0,s.jsx)(c.Z,{id:"homepage.quotes.christopher-chedeau",description:"Quote of Christopher Chedeau on the home page",children:"I've helped open source many projects at Facebook and every one needed a website. They all had very similar constraints: the documentation should be written in markdown and be deployed via GitHub pages. I\u2019m so glad that Docusaurus now exists so that I don\u2019t have to spend a week each time spinning up a new one."})},{thumbnail:a(77478),name:"Hector Ramos",title:(0,c.I)({id:"homepage.quotes.hector-ramos.title",message:"Lead React Native Advocate",description:"Title of quote of Hector Ramos on the home page"}),text:(0,s.jsx)(c.Z,{id:"homepage.quotes.hector-ramos",description:"Quote of Hector Ramos on the home page",children:"Open source contributions to the React Native docs have skyrocketed after our move to Docusaurus. The docs are now hosted on a small repo in plain markdown, with none of the clutter that a typical static site generator would require. Thanks Slash!"})},{thumbnail:a(90103),name:"Ricky Vetter",title:(0,c.I)({id:"homepage.quotes.risky-vetter.title",message:"ReasonReact Developer",description:"Title of quote of Ricky Vetter on the home page"}),text:(0,s.jsx)(c.Z,{id:"homepage.quotes.risky-vetter",description:"Quote of Ricky Vetter on the home page",children:"Docusaurus has been a great choice for the ReasonML family of projects. It makes our documentation consistent, i18n-friendly, easy to maintain, and friendly for new contributors."})}],b=[{title:(0,c.I)({message:"Powered by MDX",id:"homepage.features.powered-by-mdx.title"}),image:{src:"/img/undraw_typewriter.svg",width:1009.54,height:717.96},text:(0,s.jsx)(c.Z,{id:"homepage.features.powered-by-mdx.text",children:"Save time and focus on text documents. Simply write docs and blog posts with MDX, and Docusaurus builds them into static HTML files ready to be served. You can even embed React components in your Markdown thanks to MDX."})},{title:(0,c.I)({message:"Built Using React",id:"homepage.features.built-using-react.title"}),image:{src:"/img/undraw_react.svg",width:1108,height:731.18},text:(0,s.jsx)(c.Z,{id:"homepage.features.built-using-react.text",children:"Extend and customize your project's layout by writing React components. Leverage the pluggable architecture, and design your own site while reusing the same data created by Docusaurus plugins."})},{title:(0,c.I)({message:"Ready for Translations",id:"homepage.features.ready-for-translations.title"}),image:{src:"/img/undraw_around_the_world.svg",width:1137,height:776.59},text:(0,s.jsx)(c.Z,{id:"homepage.features.ready-for-translations.text",children:"Localization comes out-of-the-box. Use git, Crowdin, or any other translation manager to translate your docs and deploy them individually."})},{title:(0,c.I)({message:"Document Versioning",id:"homepage.features.document-versioning.title"}),image:{src:"/img/undraw_version_control.svg",width:1038.23,height:693.31},text:(0,s.jsx)(c.Z,{id:"homepage.features.document-versioning.text",children:"Support users on all versions of your project. Document versioning helps you keep documentation in sync with project releases."})},{title:(0,c.I)({message:"Content Search",id:"homepage.features.content-search.title"}),image:{src:"/img/undraw_algolia.svg",width:1137.97,height:736.21},text:(0,s.jsx)(c.Z,{id:"homepage.features.content-search.text",children:"Make it easy for your community to find what they need in your documentation. We proudly support Algolia documentation search."})}];var w=a(52615);const x={section:"section_rC2D",sectionAlt:"sectionAlt_XiGz",sectionInner:"sectionInner_Y4r1",featureImage:"featureImage_yA8i",featureHeading:"featureHeading_TLGJ",announcement:"announcement_FsS0",announcementDark:"announcementDark_tzC4",announcementInner:"announcementInner_RsrQ",topBanner:"topBanner_JYZy",topBannerTitle:"topBannerTitle_nAZL",topBannerTitleText:"topBannerTitleText_Ferb",topBannerDescription:"topBannerDescription_fLgs",hero:"hero_syme",heroInner:"heroInner_VWeJ",heroProjectTagline:"heroProjectTagline_EkV5",heroTitleTextHtml:"heroTitleTextHtml_zYwv",heroLogo:"heroLogo_jM6J","jack-in-the-box":"jack-in-the-box_cF72",indexCtas:"indexCtas_hUA_",indexCtasGitHubButtonWrapper:"indexCtasGitHubButtonWrapper_AOht",indexCtasGitHubButton:"indexCtasGitHubButton_sMIS",indexCtaTryNowButton:"indexCtaTryNowButton_wlFR",tweetsSection:"tweetsSection_Fqsy","test-marker-site-index-page":"test-marker-site-index-page_LJ7R"};function j(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function f(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function y(){return(0,s.jsx)("div",{className:x.hero,"data-theme":"dark",children:(0,s.jsxs)("div",{className:x.heroInner,children:[(0,s.jsxs)(w.Z,{as:"h1",className:x.heroProjectTagline,children:[(0,s.jsx)("img",{alt:(0,c.I)({message:"Docusaurus with Keytar"}),className:x.heroLogo,src:(0,d.ZP)("/img/docusaurus_keytar.svg"),width:"200",height:"200"}),(0,s.jsx)("span",{className:x.heroTitleTextHtml,dangerouslySetInnerHTML:{__html:(0,c.I)({id:"homepage.hero.title",message:"Build <b>optimized</b> websites <b>quickly</b>, focus on your <b>content</b>",description:"Home page hero title, can contain simple html tags"})}})]}),(0,s.jsxs)("div",{className:x.indexCtas,children:[(0,s.jsx)(i.Z,{className:"button button--primary",to:"/docs",children:(0,s.jsx)(c.Z,{children:"Get Started"})}),(0,s.jsx)(i.Z,{className:"button button--info",to:"https://docusaurus.new",children:(0,s.jsx)(c.Z,{children:"Try a Demo"})}),(0,s.jsx)("span",{className:x.indexCtasGitHubButtonWrapper,children:(0,s.jsx)("iframe",{className:x.indexCtasGitHubButton,src:"https://ghbtns.com/github-btn.html?user=facebook&repo=docusaurus&type=star&count=true&size=large",width:160,height:30,title:"GitHub Stars"})})]})]})})}function v(){const e=[[],[],[]];return p.filter((e=>e.showOnHomepage)).forEach(((t,a)=>e[a%3].push(t))),(0,s.jsx)("div",{className:(0,n.Z)(x.section,x.sectionAlt),children:(0,s.jsxs)("div",{className:"container",children:[(0,s.jsx)(w.Z,{as:"h2",className:(0,n.Z)("margin-bottom--lg","text--center"),children:(0,s.jsx)(c.Z,{children:"Loved by many engineers"})}),(0,s.jsx)("div",{className:(0,n.Z)("row",x.tweetsSection),children:e.map(((e,t)=>(0,s.jsx)("div",{className:"col col--4",children:e.map((e=>(0,r.createElement)(g,f(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},s=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),s.forEach((function(t){j(e,t,a[t])}))}return e}({},e),{key:e.url}))))},t)))})]})})}function C(){return(0,s.jsx)("div",{className:(0,n.Z)(x.section),children:(0,s.jsx)("div",{className:"container",children:(0,s.jsx)("div",{className:"row",children:A.map((e=>(0,s.jsxs)("div",{className:"col",children:[(0,s.jsxs)("div",{className:"avatar avatar--vertical margin-bottom--sm",children:[(0,s.jsx)(h.Z,{alt:e.name,className:"avatar__photo avatar__photo--xl",img:e.thumbnail,style:{overflow:"hidden"}}),(0,s.jsxs)("div",{className:"avatar__intro padding-top--sm",children:[(0,s.jsx)("div",{className:"avatar__name",children:e.name}),(0,s.jsx)("small",{className:"avatar__subtitle",children:e.title})]})]}),(0,s.jsx)("p",{className:"text--center text--italic padding-horiz--md",children:e.text})]},e.name)))})})})}function k(){return(0,s.jsx)("div",{className:"container text--center margin-top--xl",children:(0,s.jsx)("div",{className:"row",children:(0,s.jsxs)("div",{className:"col",children:[(0,s.jsx)(w.Z,{as:"h2",children:(0,s.jsx)(c.Z,{children:"Check it out in the intro video"})}),(0,s.jsx)("div",{className:"video-container",children:(0,s.jsx)(o.Z,{id:"_An9EsKPhp0",params:"autoplay=1&autohide=1&showinfo=0&rel=0",title:"Explain Like I'm 5: Docusaurus",poster:"maxresdefault",webp:!0})})]})})})}function O({feature:e,className:t}){const{withBaseUrl:a}=(0,d.Cg)();return(0,s.jsxs)("div",{className:(0,n.Z)("col",t),children:[(0,s.jsx)("img",{className:x.featureImage,alt:e.title,width:Math.floor(e.image.width),height:Math.floor(e.image.height),src:a(e.image.src),loading:"lazy"}),(0,s.jsx)(w.Z,{as:"h3",className:(0,n.Z)(x.featureHeading),children:e.title}),(0,s.jsx)("p",{className:"padding-horiz--md",children:e.text})]})}function I(){const e=b.slice(0,3),t=b.slice(3);return(0,s.jsxs)("div",{className:"container text--center",children:[(0,s.jsx)("div",{className:"row margin-top--lg margin-bottom--lg",children:e.map(((e,t)=>(0,s.jsx)(O,{feature:e},t)))}),(0,s.jsx)("div",{className:"row",children:t.map(((e,t)=>(0,s.jsx)(O,{feature:e,className:(0,n.Z)("col--4",0===t&&"col--offset-2")},t)))})]})}function B(){var e;const t=null===(e=(0,l.Z)().siteConfig.customFields)||void 0===e?void 0:e.announcedVersion;return(0,s.jsx)("div",{className:x.topBanner,children:(0,s.jsxs)("div",{className:x.topBannerTitle,children:["\ud83c\udf89\xa0",(0,s.jsx)(i.Z,{to:`/blog/releases/${t}`,className:x.topBannerTitleText,children:(0,s.jsx)(c.Z,{id:"homepage.banner.launch.newVersion",values:{newVersion:t},children:"Docusaurus\xa0{newVersion} is\xa0out!\ufe0f"})}),"\xa0\ud83e\udd73"]})})}function E(){const{siteConfig:{customFields:e,tagline:t}}=(0,l.Z)(),{description:a}=e;return(0,s.jsx)(u.Z,{title:t,description:a,children:(0,s.jsxs)("main",{children:[(0,s.jsx)(B,{}),(0,s.jsx)(y,{}),(0,s.jsxs)("div",{className:x.section,children:[(0,s.jsx)(I,{}),(0,s.jsx)(k,{})]}),(0,s.jsx)(v,{}),(0,s.jsx)(C,{})]})})}},74833:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/christopher-chedeau.a975949.200.jpg 200w",images:[{path:a.p+"assets/ideal-img/christopher-chedeau.a975949.200.jpg",width:200,height:200}],src:a.p+"assets/ideal-img/christopher-chedeau.a975949.200.jpg",toString:function(){return a.p+"assets/ideal-img/christopher-chedeau.a975949.200.jpg"},placeholder:void 0,width:200,height:200},preSrc:"data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAKAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQIE/8QAIBAAAQMEAwEBAAAAAAAAAAAAAQIDEQAEEiEFBhMicf/EABQBAQAAAAAAAAAAAAAAAAAAAAT/xAAZEQACAwEAAAAAAAAAAAAAAAAAAgEREiH/2gAMAwEAAhEDEQA/ANPduxrtXGLKzafdu/p8ukuNkBAxSAlMghTn1P7R7PduBLLZuONT7FIzygHKNyI1ugHnXBzSFBagrxxkHcSdVCmmyokoSSTJJFPm46GVFrJ//9k="}},77478:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/hector-ramos.957d17a.200.jpg 200w",images:[{path:a.p+"assets/ideal-img/hector-ramos.957d17a.200.jpg",width:200,height:200}],src:a.p+"assets/ideal-img/hector-ramos.957d17a.200.jpg",toString:function(){return a.p+"assets/ideal-img/hector-ramos.957d17a.200.jpg"},placeholder:void 0,width:200,height:200},preSrc:"data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAKAAoDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAwQGB//EACYQAQABAwIDCQAAAAAAAAAAAAECAwQFABEGEnEHExQhN0FCUaH/xAAVAQEBAAAAAAAAAAAAAAAAAAAEBf/EABsRAAEEAwAAAAAAAAAAAAAAAAEAAgMhEzFB/9oADAMBAAIRAxEAPwCSs+JsfZ46ta0o29aaJGrKjsk9xGKnMAxP3QLjN5HxFXnxVZlzO73J5u/TTfaR6jXUfi3tKSeysIK9VXWrypwZKwiu/wBamiMRWw7SSMlHlL//2Q=="}},90103:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/ricky-vetter.b237586.200.jpg 200w",images:[{path:a.p+"assets/ideal-img/ricky-vetter.b237586.200.jpg",width:200,height:200}],src:a.p+"assets/ideal-img/ricky-vetter.b237586.200.jpg",toString:function(){return a.p+"assets/ideal-img/ricky-vetter.b237586.200.jpg"},placeholder:void 0,width:200,height:200},preSrc:"data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAKAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQQG/8QAIBAAAgEDBQEBAAAAAAAAAAAAAQIDBAURABITITEiYf/EABQBAQAAAAAAAAAAAAAAAAAAAAP/xAAYEQADAQEAAAAAAAAAAAAAAAAAAQIRIv/aAAwDAQACEQMRAD8A3N4udYtSKiK4TxceOONZgsIBwByrtJOWyPR+aQa/puP2R35qK+00BrrETDFkFCDsHWWGdC10aLW1AVFAEjAADzvQuMY1Vyj/2Q=="}}}]);