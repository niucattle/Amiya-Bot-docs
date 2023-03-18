import{a as u}from"./chunks/index.ea617db1.js";import{_ as h,o as s,c as t,F as i,r as p,n as f,b as r,t as l,f as _,e as d,a as y,d as g}from"./app.a0393e08.js";const b="/assets/5a4a07cc67f556288d3df2e9029fc14.f485e307.jpg";const x={name:"specialThanks",props:{displayUserName:Boolean,min:{type:Number,default:0},max:{type:Number,default:1/0}},methods:{get_sponsors:function(){u.get("https://server.amiyabot.com:9000/get_sponsors").then(n=>{this.data=JSON.parse(n.data),this.data.sort((o,a)=>a.all_sum_amount-o.all_sum_amount)})}},data(){return{data:[]}},mounted(){this.get_sponsors()}},N={class:"user-list"},v=["src","alt"],B={key:0,class:"user-name"},k={class:"name"},A={class:"amount"};function T(n,o,a,I,m,D){return s(),t("div",N,[(s(!0),t(i,null,p(m.data,e=>(s(),t(i,null,[e.all_sum_amount>=a.min&&e.all_sum_amount<a.max?(s(),t("div",{key:0,class:f(["user",{small:!a.displayUserName}])},[r("img",{class:"avatar",src:e.user.avatar,alt:e.user.name},null,8,v),a.displayUserName?(s(),t("div",B,[r("span",k,l(e.user.name),1),r("span",A,"\uFFE5"+l(e.all_sum_amount),1)])):_("",!0)],2)):_("",!0)],64))),256))])}const c=h(x,[["render",T],["__scopeId","data-v-5430cadf"]]),S=y('<h1 id="\u8D5E\u52A9" tabindex="-1">\u8D5E\u52A9 <a class="header-anchor" href="#\u8D5E\u52A9" aria-hidden="true">#</a></h1><p>AmiyaBot \u4E00\u8DEF\u8D70\u6765\u79BB\u4E0D\u5F00\u5927\u5BB6\u7684\u9ED8\u9ED8\u652F\u6301\uFF0C\u5982\u679C\u4F60\u559C\u6B22\u5E76\u652F\u6301\u6211\u4EEC\uFF0C\u53EF\u4EE5\u4E3A\u6211\u4EEC\u6253\u8D4F\u4E00\u74F6\u5FEB\u4E50\u6C34\u3002\u6211\u76F8\u4FE1\u5FEB\u4E50\u662F\u53EF\u4EE5\u4E92\u76F8\u4F20\u9012\u7684\uFF0C\u4F60\u7684\u5FEB\u4E50\u6C34\u5E26\u7ED9\u6211\u4EEC\u5FEB\u4E50\u7684\u540C\u65F6\uFF0C\u60F3\u5FC5 AmiyaBot \u4E5F\u7ED9\u4F60\u5E26\u53BB\u4E86\u5FEB\u4E50\u5427\u3002</p><p>\u4F46\u540C\u65F6\u6211\u4EEC\u5E0C\u671B\u4F60\u91CF\u529B\u800C\u4E3A\uFF0C\u4F60\u5BF9 AmiyaBot \u7684\u8BA4\u53EF\u5C31\u5DF2\u7ECF\u662F\u6700\u5927\u7684\u652F\u6301\u4E86\u3002\u5982\u679C\u53EF\u4EE5\u7684\u8BDD\uFF0C\u6073\u8BF7\u4F60\u5728 <a href="https://github.com/AmiyaBot/Amiya-Bot" target="_blank" rel="noreferrer">Github</a> \u4E3A AmiyaBot \u70B9\u4E0A\u4E00\u9897\u5C0F\u5C0F\u7684\uFE0F \u2B50 star\u3002</p><p>\u6253\u8D4F\u8BF7\u524D\u5F80<a href="https://afdian.net/a/amiyabot" target="_blank" rel="noreferrer">\u7231\u53D1\u7535\u4E3B\u9875</a></p><details class="details custom-block"><summary>\u4E3B\u9875\u4E8C\u7EF4\u7801<br></summary><img style="width:400px;" src="'+b+'" alt="image"></details><h2 id="\u7279\u522B\u9E23\u8C22" tabindex="-1">\u7279\u522B\u9E23\u8C22 <a class="header-anchor" href="#\u7279\u522B\u9E23\u8C22" aria-hidden="true">#</a></h2><p>\u4F60\u4EEC\u7684\u9F0E\u529B\u652F\u6301\u8BA9\u6211\u4EEC\u611F\u5230\u521B\u4F5C AmiyaBot \u9879\u76EE\u662F\u503C\u5F97\u7684\u3002\u611F\u8C22\u6709\u4F60\uFF0C\u8BA9 AmiyaBot \u79C9\u627F\u521D\u8877\u3002\u2764\uFE0F</p>',7),V=r("h2",{id:"\u9E23\u8C22",tabindex:"-1"},[g("\u9E23\u8C22 "),r("a",{class:"header-anchor",href:"#\u9E23\u8C22","aria-hidden":"true"},"#")],-1),U=r("p",null,"\u652F\u6301\u662F\u65E0\u5206\u8F7B\u91CD\u7684\uFF0C\u6709\u4F60\u4EEC\u7684\u8BA4\u53EF\uFF0C\u8BA9 AmiyaBot \u7684\u521B\u4F5C\u66F4\u6709\u52A8\u529B\u3002\u{1F339}",-1),j=JSON.parse('{"title":"\u8D5E\u52A9","description":"","frontmatter":{"aside":false},"headers":[{"level":2,"title":"\u7279\u522B\u9E23\u8C22","slug":"\u7279\u522B\u9E23\u8C22","link":"#\u7279\u522B\u9E23\u8C22","children":[]},{"level":2,"title":"\u9E23\u8C22","slug":"\u9E23\u8C22","link":"#\u9E23\u8C22","children":[]}],"relativePath":"sponsor.md","lastUpdated":1679105344000}'),C={name:"sponsor.md"},E=Object.assign(C,{setup(n){return(o,a)=>(s(),t("div",null,[S,d(c,{min:20,displayUserName:!0}),V,U,d(c,{max:20})]))}});export{j as __pageData,E as default};
