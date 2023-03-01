import{u as s,i as e,m as l,j as t}from"./app.8fcda833.js";import{d as o,b as n,v as a,o as r,c as i,a as p,x as d,F as u,e as g,P as c,y as m,t as h}from"./vendor.e49a9334.js";var _=Object.freeze(Object.defineProperty({__proto__:null,default:"/2022/assets/banner_dark.adf93aca.png"},Symbol.toStringTag,{value:"Module"})),b=Object.freeze(Object.defineProperty({__proto__:null,default:"/2022/assets/banner_light.2ea9c9a2.png"},Symbol.toStringTag,{value:"Module"})),v=Object.freeze(Object.defineProperty({__proto__:null,default:"/2022/assets/flag_dark.3c512435.png"},Symbol.toStringTag,{value:"Module"})),f=Object.freeze(Object.defineProperty({__proto__:null,default:"/2022/assets/flag_light.bc72c56b.png"},Symbol.toStringTag,{value:"Module"})),y=Object.freeze(Object.defineProperty({__proto__:null,default:"/2022/assets/lanyards_dark.9c863385.png"},Symbol.toStringTag,{value:"Module"})),k=Object.freeze(Object.defineProperty({__proto__:null,default:"/2022/assets/lanyards_light.339fbdb6.png"},Symbol.toStringTag,{value:"Module"})),O=Object.freeze(Object.defineProperty({__proto__:null,default:"/2022/assets/promotion_dark.19d4ddcc.png"},Symbol.toStringTag,{value:"Module"})),j=Object.freeze(Object.defineProperty({__proto__:null,default:"/2022/assets/promotion_light.75c16fcd.png"},Symbol.toStringTag,{value:"Module"})),S=Object.freeze(Object.defineProperty({__proto__:null,default:"/2022/assets/website-agenda-ads_dark.96258490.png"},Symbol.toStringTag,{value:"Module"})),$=Object.freeze(Object.defineProperty({__proto__:null,default:"/2022/assets/website-agenda-ads_light.16d29b5a.png"},Symbol.toStringTag,{value:"Module"}));const w={"../assets/images/sponsorships/levels/bronze_dark.svg":Object.freeze(Object.defineProperty({__proto__:null,default:"/2022/assets/bronze_dark.e0fb422a.svg"},Symbol.toStringTag,{value:"Module"})),"../assets/images/sponsorships/levels/bronze_light.svg":Object.freeze(Object.defineProperty({__proto__:null,default:"/2022/assets/bronze_light.ded942ac.svg"},Symbol.toStringTag,{value:"Module"})),"../assets/images/sponsorships/levels/diamond_dark.svg":Object.freeze(Object.defineProperty({__proto__:null,default:"/2022/assets/diamond_dark.ccbdfb5e.svg"},Symbol.toStringTag,{value:"Module"})),"../assets/images/sponsorships/levels/diamond_light.svg":Object.freeze(Object.defineProperty({__proto__:null,default:"/2022/assets/diamond_light.0cdfe0ab.svg"},Symbol.toStringTag,{value:"Module"})),"../assets/images/sponsorships/levels/friend_dark.svg":Object.freeze(Object.defineProperty({__proto__:null,default:"/2022/assets/friend_dark.8d56a053.svg"},Symbol.toStringTag,{value:"Module"})),"../assets/images/sponsorships/levels/friend_light.svg":Object.freeze(Object.defineProperty({__proto__:null,default:"/2022/assets/friend_light.d4d1c4cd.svg"},Symbol.toStringTag,{value:"Module"})),"../assets/images/sponsorships/levels/gold_dark.svg":Object.freeze(Object.defineProperty({__proto__:null,default:"/2022/assets/gold_dark.061baebb.svg"},Symbol.toStringTag,{value:"Module"})),"../assets/images/sponsorships/levels/gold_light.svg":Object.freeze(Object.defineProperty({__proto__:null,default:"/2022/assets/gold_light.ceebb425.svg"},Symbol.toStringTag,{value:"Module"})),"../assets/images/sponsorships/levels/sliver_dark.svg":Object.freeze(Object.defineProperty({__proto__:null,default:"/2022/assets/sliver_dark.e0e7ed8f.svg"},Symbol.toStringTag,{value:"Module"})),"../assets/images/sponsorships/levels/sliver_light.svg":Object.freeze(Object.defineProperty({__proto__:null,default:"/2022/assets/sliver_light.2638ddce.svg"},Symbol.toStringTag,{value:"Module"})),"../assets/images/sponsorships/levels/titanium_dark.svg":Object.freeze(Object.defineProperty({__proto__:null,default:"/2022/assets/titanium_dark.010a9cd0.svg"},Symbol.toStringTag,{value:"Module"})),"../assets/images/sponsorships/levels/titanium_light.svg":Object.freeze(Object.defineProperty({__proto__:null,default:"/2022/assets/titanium_light.92aee398.svg"},Symbol.toStringTag,{value:"Module"}))},T={"../assets/images/sponsorships/banner_dark.png":_,"../assets/images/sponsorships/banner_light.png":b,"../assets/images/sponsorships/flag_dark.png":v,"../assets/images/sponsorships/flag_light.png":f,"../assets/images/sponsorships/lanyards_dark.png":y,"../assets/images/sponsorships/lanyards_light.png":k,"../assets/images/sponsorships/promotion_dark.png":O,"../assets/images/sponsorships/promotion_light.png":j,"../assets/images/sponsorships/website-agenda-ads_dark.png":S,"../assets/images/sponsorships/website-agenda-ads_light.png":$};var z=o({name:"Sponsorship",setup(){const{t:o,tm:a,te:r}=s(),i=n((()=>Object.keys(a("sponsorship.level.list")))),p=n((()=>t(i.value,3))),d=n((()=>Object.keys(a("sponsorship.add-ons.columns")).map((s=>{const e=(s=>Object.keys(a(`sponsorship.add-ons.list.${s}`)).filter((e=>!["X",""].includes(a(`sponsorship.add-ons.list.${s}`)[e]))))(s);return e.map(((l,t)=>({column:o(`sponsorship.add-ons.columns.${s}`),rowspan:0===t?e.length:void 0,image:"all"!==l?g(l):void 0,name:o("all"!==l?`sponsorship.level.list.${l}.name`:"sponsorship.add-ons.all"),cost:o(`sponsorship.add-ons.list.${s}.${l}`)})))})).reduce(((s,e)=>s.concat(e)),[]))),{isDark:u}=e(),g=s=>{return e=`${s}_${u.value?"dark":"light"}`,w[`../assets/images/sponsorships/levels/${e}.svg`].default;var e};return{t:o,tm:a,te:r,levelKeys:i,groupLevelKeys:p,markdown:l,addOnsImageKeys:["flag","lanyards","promotion","website-agenda-ads"],getImageFromAddOns:s=>{return e=`${s}_${u.value?"dark":"light"}`,T[`../assets/images/sponsorships/${e}.png`].default;var e},addOnsThinTable:d,getImageFromLevel:g}}});const M={id:"sponsorship",class:"page-container"},P={class:"markdown"},I={class:"markdown"},K={class:"subtitle"},F={class:"level-table"},L=p("th",null,null,-1),q={class:"level-list"},x={class:"markdown"},A={class:"subtitle"},C={class:"add-ons-table"},H={class:"add-ons-thin-table"},D={class:"level"},U={class:"cost"},X={class:"images"},B=p("img",null,null,-1),E={class:"highlight"},G=p("a",{href:"mailto:sponsorship@coscup.org"},"sponsorship@coscup.org",-1),J={class:"markdown"},N={class:"faq"},Q={class:"markdown"},R=p("a",{href:"https://www.flickr.com/photos/coscup/albums"},"COSCUP flickr album",-1),V={class:"about-image"},W=p("img",{src:"/2022/assets/about.4dd9c9b6.jpg"},null,-1),Y={class:"markdown"},Z={class:"markdown"},ss=p("a",{href:"mailto:sponsorship@coscup.org"},"sponsorship@coscup.org",-1);z.render=function(s,e,l,t,o,n){const _=a("i18n-t");return r(),i("main",M,[p("img",{class:"banner",src:s.getImageFromAddOns("banner"),alt:s.t("sponsorship.plan.title")},null,8,["src","alt"]),p("h2",null,d(s.t("sponsorship.plan.title")),1),p("section",P,[p("h3",null,d(s.t("sponsorship.overview.title")),1),p("p",null,d(s.t("sponsorship.overview.announcement.title")),1),p("ul",null,[(r(!0),i(u,null,g(s.tm("sponsorship.overview.announcement.list"),(s=>(r(),i("li",{key:`${s}`},d(s),1)))),128))]),p("p",null,d(s.t("sponsorship.overview.description")),1),p("p",null,d(s.t("sponsorship.overview.feedback.title")),1),p("ul",null,[(r(!0),i(u,null,g(s.tm("sponsorship.overview.feedback.list"),(s=>(r(),i("li",{key:`${s}`},d(s),1)))),128))])]),p("section",I,[p("h3",null,[c(d(s.t("sponsorship.level.title")),1),p("span",K,d(s.t("sponsorship.level.subtitle")),1)]),p("div",F,[(r(!0),i(u,null,g(s.groupLevelKeys,((e,l)=>(r(),i("table",{key:`group-${l}`},[p("thead",null,[p("tr",null,[L,(r(!0),i(u,null,g(e,(e=>(r(),i("th",{key:`name-${e}`},[p("img",{src:s.getImageFromLevel(e),alt:s.t(`sponsorship.level.list.${e}.name`)},null,8,["src","alt"]),c(" "+d(s.t(`sponsorship.level.list.${e}.name`))+d(s.t(`sponsorship.level.list.${e}.subtitle`)),1)])))),128))])]),p("tbody",null,[p("tr",null,[p("td",null,d(s.t("sponsorship.level.columns.cost")),1),(r(!0),i(u,null,g(e,(e=>(r(),i("td",{key:`cost-${e}`,class:"cost"},d(s.t(`sponsorship.level.list.${e}.cost`)),1)))),128))]),p("tr",null,[p("td",null,d(s.t("sponsorship.level.columns.benefit")),1),(r(!0),i(u,null,g(e,(e=>(r(),i("td",{key:`benefits-${e}`},[p("ul",null,[(r(!0),i(u,null,g(s.tm(`sponsorship.level.list.${e}.benefits`),(s=>(r(),i("li",{key:`${s}`},d(s),1)))),128))])])))),128))])])])))),128))]),p("ul",q,[(r(!0),i(u,null,g(s.levelKeys,(e=>(r(),i("li",{key:e},[p("img",{src:s.getImageFromLevel(e),alt:s.t(`sponsorship.level.list.${e}.name`)},null,8,["src","alt"]),p("h4",null,d(s.t(`sponsorship.level.list.${e}.name`))+d(s.t(`sponsorship.level.list.${e}.subtitle`)),1),p("p",null,d(s.t(`sponsorship.level.list.${e}.cost`)),1),p("ul",null,[(r(!0),i(u,null,g(s.tm(`sponsorship.level.list.${e}.benefits`),(s=>(r(),i("li",{key:`${s}`},d(s),1)))),128))])])))),128))])]),p("section",x,[p("h3",null,[c(d(s.t("sponsorship.add-ons.title")),1),p("span",A,d(s.t("sponsorship.add-ons.subtitle")),1)]),p("div",C,[p("table",null,[p("thead",null,[p("tr",null,[p("th",null,d(s.t("sponsorship.add-ons.item")),1),(r(!0),i(u,null,g(s.levelKeys,(e=>(r(),i("th",{key:`${e}`},[p("img",{src:s.getImageFromLevel(e),alt:s.t(`sponsorship.level.list.${e}.name`)},null,8,["src","alt"]),c(" "+d(s.t(`sponsorship.level.list.${e}.name`)),1)])))),128))])]),p("tbody",null,[(r(!0),i(u,null,g(s.tm("sponsorship.add-ons.columns"),((e,l)=>(r(),i("tr",{key:`${e}`},[p("td",null,d(e),1),s.te(`sponsorship.add-ons.list.${l}.all`)?(r(),i("td",{key:0,colspan:s.levelKeys.length,style:{"text-align":"center"}},d(s.t(`sponsorship.add-ons.list.${l}.all`)),9,["colspan"])):(r(!0),i(u,{key:1},g(s.levelKeys,(e=>(r(),i("td",{key:`${e}`},d(s.t(`sponsorship.add-ons.list.${l}.${e}`)),1)))),128))])))),128))])])]),p("div",H,[p("table",null,[p("thead",null,[p("tr",null,[p("th",null,d(s.t("sponsorship.add-ons.item")),1),p("th",null,d(s.t("sponsorship.add-ons.level-limit")),1),p("th",null,d(s.t("sponsorship.add-ons.cost")),1)])]),p("tbody",null,[(r(!0),i(u,null,g(s.addOnsThinTable,(s=>(r(),i("tr",{key:`${s.column}`},[s.rowspan?(r(),i("td",{key:0,rowspan:s.rowspan,class:"name"},d(s.column),9,["rowspan"])):m("v-if",!0),p("td",D,[s.image?(r(),i("img",{key:0,src:s.image,alt:s.name},null,8,["src","alt"])):m("v-if",!0),p("p",null,d(s.name),1)]),p("td",U,d(s.cost),1)])))),128))])])]),p("div",X,[(r(!0),i(u,null,g(s.addOnsImageKeys,(e=>(r(),i("div",{key:e,class:"item"},[p("img",{src:s.getImageFromAddOns(e),alt:s.t(`sponsorship.add-ons.columns.${e}`)},null,8,["src","alt"]),p("p",null,d(s.t(`sponsorship.add-ons.columns.${e}`)),1)])))),128)),B]),p(_,{keypath:"sponsorship.add-ons.end.content",tag:"p"},{date:h((()=>[p("span",E,d(s.t("sponsorship.add-ons.end.date")),1)])),_:1}),p(_,{keypath:"sponsorship.contact",tag:"p"},{email:h((()=>[G])),_:1})]),p("section",J,[p("h3",null,d(s.t("sponsorship.faq.title")),1),p("ul",N,[(r(!0),i(u,null,g(s.tm("sponsorship.faq.list"),(e=>(r(),i("li",{key:e.q},[p("h4",null,d(e.q),1),p("p",{innerHTML:s.markdown(e.a)},null,8,["innerHTML"])])))),128))])]),p("section",Q,[p("h3",null,d(s.t("sponsorship.about-coscup.title")),1),p("p",null,d(s.t("sponsorship.about-coscup.description")),1),p("ul",null,[(r(!0),i(u,null,g(s.tm("sponsorship.about-coscup.messages"),(s=>(r(),i("li",{key:`${s}`},d(s),1)))),128))]),p("p",null,[c(d(s.t("sponsorship.about-coscup.ps1")),1),R]),p("div",V,[W,p("p",null,d(s.t("sponsorship.about-coscup.ps2")),1)])]),p("section",Y,[p("h3",null,d(s.t("sponsorship.about-kcd.title")),1),p("p",null,d(s.t("sponsorship.about-kcd.description")),1),p("p",null,d(s.t("sponsorship.about-kcd.message")),1)]),p("section",Z,[p("h3",null,d(s.t("sponsorship.wish.title")),1),p("ul",null,[(r(!0),i(u,null,g(s.tm("sponsorship.wish.list"),(s=>(r(),i("li",{key:`${s}`},d(s),1)))),128))]),p(_,{keypath:"sponsorship.contact",tag:"p"},{email:h((()=>[ss])),_:1})])])};export{z as default};
