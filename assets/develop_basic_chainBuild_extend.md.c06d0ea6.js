import{_ as s,o as a,c as n,a as l}from"./app.a0393e08.js";const d=JSON.parse('{"title":"\u53D1\u9001\u539F\u751F\u6A21\u677F","description":"","frontmatter":{},"headers":[{"level":2,"title":"Chain().extend()","slug":"chain-extend","link":"#chain-extend","children":[{"level":3,"title":"\u793A\u4F8B","slug":"\u793A\u4F8B","link":"#\u793A\u4F8B","children":[]}]},{"level":2,"title":"\u53D1\u9001 CQ \u7801","slug":"\u53D1\u9001-cq-\u7801","link":"#\u53D1\u9001-cq-\u7801","children":[]}],"relativePath":"develop/basic/chainBuild/extend.md","lastUpdated":1679105344000}'),p={name:"develop/basic/chainBuild/extend.md"},o=l(`<h1 id="\u53D1\u9001\u539F\u751F\u6A21\u677F" tabindex="-1">\u53D1\u9001\u539F\u751F\u6A21\u677F <a class="header-anchor" href="#\u53D1\u9001\u539F\u751F\u6A21\u677F" aria-hidden="true">#</a></h1><p>\u4F7F\u7528\u539F\u751F\u6D88\u606F\u6A21\u677F\u6269\u5C55 Chain \u5BF9\u8C61</p><div class="warning custom-block"><p class="custom-block-title">\u6E29\u99A8\u63D0\u793A<br></p><p>\u6D88\u606F\u6269\u5C55\u6682\u4EC5\u652F\u6301 <code>mirai-api-http</code> \u548C <code>cq-http</code>\u3002</p></div><p>\u9664\u4E86\u4EE5\u4E0A\u5185\u7F6E\u7684\u6D88\u606F\u7C7B\u578B\u5916\uFF0C<code>mirai-api-http</code> \u548C <code>cq-http</code> \u8FD8\u63D0\u4F9B\u4E86\u591A\u79CD\u6D88\u606F\u7C7B\u578B\u7528\u4E8E\u53D1\u9001\u4E30\u5BCC\u7684\u6D88\u606F\u5185\u5BB9\u3002</p><ul><li><a href="https://docs.mirai.mamoe.net/mirai-api-http/api/MessageType.html#%E6%B6%88%E6%81%AF%E7%B1%BB%E5%9E%8B" target="_blank" rel="noreferrer">mirai-api-http \u6D88\u606F\u7C7B\u578B</a></li><li><a href="https://docs.go-cqhttp.org/cqcode/#%E6%B6%88%E6%81%AF%E7%B1%BB%E5%9E%8B" target="_blank" rel="noreferrer">go-cqhttp \u6D88\u606F\u7C7B\u578B</a></li></ul><h2 id="chain-extend" tabindex="-1">Chain().extend() <a class="header-anchor" href="#chain-extend" aria-hidden="true">#</a></h2><table><thead><tr><th>\u53C2\u6570\u540D</th><th>\u7C7B\u578B</th><th>\u91CA\u4E49</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>data</td><td>Any</td><td>\u539F\u59CB\u6D88\u606F\u7C7B\u578B\u683C\u5F0F\u6570\u636E</td><td></td></tr></tbody></table><h3 id="\u793A\u4F8B" tabindex="-1">\u793A\u4F8B <a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a></h3><p>\u4F7F\u7528 <a href="https://docs.mirai.mamoe.net/mirai-api-http/api/MessageType.html#dice" target="_blank" rel="noreferrer">mirai-api-http \u6D88\u606F\u7C7B\u578B Dice</a> \u53D1\u9001\u4E00\u4E2A\u70B9\u6570 6 \u7684\u9AB0\u5B50\u9B54\u6CD5\u8868\u60C5</p><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#82AAFF;">Chain</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">data</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">extend</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#82AAFF;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#82AAFF;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">type</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Dice</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#82AAFF;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">value</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">6</span></span>
<span class="line"><span style="color:#82AAFF;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><p>\u4F7F\u7528 <a href="https://docs.go-cqhttp.org/cqcode/#%E9%93%BE%E6%8E%A5%E5%88%86%E4%BA%AB" target="_blank" rel="noreferrer">go-cqhttp \u6D88\u606F\u7C7B\u578B \u94FE\u63A5\u5206\u4EAB</a> \u53D1\u9001\u4E00\u4E2A\u767E\u5EA6\u9996\u9875\u94FE\u63A5\u5206\u4EAB</p><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#82AAFF;">Chain</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">data</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">extend</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#82AAFF;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#82AAFF;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">type</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">share</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#82AAFF;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">data</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#82AAFF;">            </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">url</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://www.baidu.com</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#82AAFF;">            </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">title</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u767E\u5EA6</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#82AAFF;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><h2 id="\u53D1\u9001-cq-\u7801" tabindex="-1">\u53D1\u9001 CQ \u7801 <a class="header-anchor" href="#\u53D1\u9001-cq-\u7801" aria-hidden="true">#</a></h2><p>\u53D1\u9001 CQ \u7801\u76EE\u524D\u4EC5\u652F\u6301 <code>cq-http</code> \u9002\u914D\u5668\u3002\u53EF\u901A\u8FC7\u9002\u914D\u5668\u7684 API \u5BF9\u8C61\u53D1\u9001\u6216\u6269\u5C55\u6D88\u606F\u53D1\u9001\u3002</p><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> amiyabot </span><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> CQCode</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> CQHttpBotInstance</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">instance</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> CQHttpBotInstance </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> bot</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">instance</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">bot</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on_message</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">keywords</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">_</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> Message</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;"># \u901A\u8FC7 API \u53D1\u9001</span></span>
<span class="line"><span style="color:#A6ACCD;">    instance</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">api</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">send_cq_code</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">data</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">user_id</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#82AAFF;">                              data</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">channel_id</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#82AAFF;">                              </span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&#39;hello, </span><span style="color:#F78C6C;">{</span><span style="color:#82AAFF;">data</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">nickname</span><span style="color:#F78C6C;">}</span><span style="color:#C3E88D;"> [CQ:face,id=123]&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;"># \u901A\u8FC7\u6269\u5C55\u6D88\u606F\u53D1\u9001</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Chain</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">data</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">extend</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#82AAFF;">        CQCode</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&#39;hello, </span><span style="color:#F78C6C;">{</span><span style="color:#82AAFF;">data</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">nickname</span><span style="color:#F78C6C;">}</span><span style="color:#C3E88D;"> [CQ:face,id=123]&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#82AAFF;">    </span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div>`,15),e=[o];function t(c,r,F,D,y,i){return a(),n("div",null,e)}const h=s(p,[["render",t]]);export{d as __pageData,h as default};
