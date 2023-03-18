import{_ as s,o as a,c as n,a as l}from"./app.a0393e08.js";const i=JSON.parse('{"title":"\u64A4\u56DE\u6D88\u606F","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5728 Message \u5BF9\u8C61\u4E2D\u64A4\u56DE","slug":"\u5728-message-\u5BF9\u8C61\u4E2D\u64A4\u56DE","link":"#\u5728-message-\u5BF9\u8C61\u4E2D\u64A4\u56DE","children":[]},{"level":2,"title":"\u624B\u52A8\u64A4\u56DE","slug":"\u624B\u52A8\u64A4\u56DE","link":"#\u624B\u52A8\u64A4\u56DE","children":[]},{"level":2,"title":"\u64A4\u56DE Bot \u53D1\u9001\u7684\u6D88\u606F","slug":"\u64A4\u56DE-bot-\u53D1\u9001\u7684\u6D88\u606F","link":"#\u64A4\u56DE-bot-\u53D1\u9001\u7684\u6D88\u606F","children":[]}],"relativePath":"develop/basic/recallMessage.md","lastUpdated":1679105344000}'),p={name:"develop/basic/recallMessage.md"},o=l(`<h1 id="\u64A4\u56DE\u6D88\u606F" tabindex="-1">\u64A4\u56DE\u6D88\u606F <a class="header-anchor" href="#\u64A4\u56DE\u6D88\u606F" aria-hidden="true">#</a></h1><p>\u64A4\u56DE\u4E00\u6761\u6D88\u606F\u3002</p><h2 id="\u5728-message-\u5BF9\u8C61\u4E2D\u64A4\u56DE" tabindex="-1">\u5728 Message \u5BF9\u8C61\u4E2D\u64A4\u56DE <a class="header-anchor" href="#\u5728-message-\u5BF9\u8C61\u4E2D\u64A4\u56DE" aria-hidden="true">#</a></h2><p>\u4F7F\u7528 Message \u5BF9\u8C61\u7684 <code>recall</code> \u65B9\u6CD5\uFF0C\u64A4\u56DE\u5F53\u524D\u6D88\u606F\u3002</p><p><strong>Message.recall()</strong></p><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">bot</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on_message</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">keywords</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">_</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> Message</span><span style="color:#89DDFF;">):</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">await</span><span style="color:#A6ACCD;"> data</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">recall</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span></code></pre></div><p>\u4F60\u53EF\u4EE5\u5728\u4EFB\u4F55\u80FD\u83B7\u53D6\u5230 Message \u5BF9\u8C61\u7684\u5730\u65B9\u4F7F\u7528 <code>recall</code> \u65B9\u6CD5\u3002\u6BD4\u5982\u5728\u8FDE\u7EED\u5BF9\u8BDD\u6216\u5F02\u5E38\u76D1\u542C\u91CC\u3002</p><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">bot</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on_message</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">keywords</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">_</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> Message</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;"># \u7B49\u5F85\u4E8B\u4EF6\u8FD4\u56DE\u7684\u4E5F\u662F Message \u5BF9\u8C61</span></span>
<span class="line"><span style="color:#A6ACCD;">    reply </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">await</span><span style="color:#A6ACCD;"> data</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">wait</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">Chain</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">data</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">text</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">...</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">))</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> reply</span><span style="color:#89DDFF;">:</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">await</span><span style="color:#A6ACCD;"> reply</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">recall</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span></code></pre></div><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">bot</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on_exception</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">_</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">err</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Exception</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#A6ACCD;">instance</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> BotAdapterProtocol</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> Union</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">Message</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> Event</span><span style="color:#89DDFF;">]):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">type</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">data</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">is</span><span style="color:#A6ACCD;"> Message</span><span style="color:#89DDFF;">:</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">await</span><span style="color:#A6ACCD;"> data</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">recall</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span></code></pre></div><h2 id="\u624B\u52A8\u64A4\u56DE" tabindex="-1">\u624B\u52A8\u64A4\u56DE <a class="header-anchor" href="#\u624B\u52A8\u64A4\u56DE" aria-hidden="true">#</a></h2><p>\u4F7F\u7528\u9002\u914D\u5668\u5B9E\u4F8B\u7684 <code>recall_message</code> \u65B9\u6CD5</p><p><strong>AmiyaBot.instance.recall_message()</strong></p><table><thead><tr><th>\u53C2\u6570\u540D</th><th>\u7C7B\u578B</th><th>\u91CA\u4E49</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>message_id</td><td>String</td><td>\u6D88\u606FID\uFF08\u901A\u5E38\u53EF\u4EE5\u5728 Message.message_id \u83B7\u53D6\u5230\uFF09</td><td></td></tr><tr><td>target_id</td><td>String</td><td>\u9891\u9053\u53F7\uFF08\u7FA4\u53F7\uFF09 \u6216\u597D\u53CBID</td><td>None</td></tr></tbody></table><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#89DDFF;">await</span><span style="color:#A6ACCD;"> bot</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">instance</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">recall_message</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">message_id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">......</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;">target_id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">......</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><h2 id="\u64A4\u56DE-bot-\u53D1\u9001\u7684\u6D88\u606F" tabindex="-1">\u64A4\u56DE Bot \u53D1\u9001\u7684\u6D88\u606F <a class="header-anchor" href="#\u64A4\u56DE-bot-\u53D1\u9001\u7684\u6D88\u606F" aria-hidden="true">#</a></h2><p>\u5982\u679C\u662F\u901A\u8FC7\u5728\u6D88\u606F\u54CD\u5E94\u5668\u91CC\u9762\u8FD4\u56DE <code>Chain</code> \u5BF9\u8C61\u6216\u7B49\u5F85\u51FD\u6570 <code>Message.wait()</code> \u53D1\u9001\u7684\u6D88\u606F\uFF0C<strong>\u662F\u65E0\u6CD5\u64A4\u56DE\u7684</strong>\u3002\u8981\u53D1\u9001\u80FD\u64A4\u56DE\u7684\u6D88\u606F\uFF0C\u5FC5\u987B\u4F7F\u7528 <code>Message.send()</code> \u65B9\u6CD5\u3002</p><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">bot</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on_message</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">keywords</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">_</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> Message</span><span style="color:#89DDFF;">):</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#A6ACCD;">    res </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">await</span><span style="color:#A6ACCD;"> data</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">send</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">Chain</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">data</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">text</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&#39;hello, </span><span style="color:#F78C6C;">{</span><span style="color:#82AAFF;">data</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">nickname</span><span style="color:#F78C6C;">}</span><span style="color:#C3E88D;">&#39;</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;"># \u53EF\u4EE5\u64A4\u56DE</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> res</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">await</span><span style="color:#A6ACCD;"> res</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">recall</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#A6ACCD;">    wait </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">await</span><span style="color:#A6ACCD;"> data</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">wait</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">Chain</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">data</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">text</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&#39;hello, </span><span style="color:#F78C6C;">{</span><span style="color:#82AAFF;">data</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">nickname</span><span style="color:#F78C6C;">}</span><span style="color:#C3E88D;">&#39;</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;"># \u65E0\u6CD5\u64A4\u56DE</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Chain</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">data</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">text</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&#39;hello, </span><span style="color:#F78C6C;">{</span><span style="color:#82AAFF;">data</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">nickname</span><span style="color:#F78C6C;">}</span><span style="color:#C3E88D;">&#39;</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;"># \u65E0\u6CD5\u64A4\u56DE</span></span>
<span class="line"></span></code></pre></div><p><strong>Message.send()</strong> \u65B9\u6CD5\u8FD4\u56DE\u4E00\u4E2A <code>MessageCallback</code> \u5BF9\u8C61\u6216\u5176\u7EC4\u6210\u7684\u5217\u8868\uFF08\u8BED\u97F3\u6216\u9891\u9053\u591A\u56FE\u6D88\u606F\u4F1A\u4EA7\u751F\u5206\u5F00\u53D1\u9001\u7684\u7ED3\u679C\uFF09\u3002\u5982\u679C\u6D88\u606F\u6CA1\u6709\u53D1\u9001\u6210\u529F\u5219\u8FD4\u56DE <code>None</code>\u3002</p><p>\u8C03\u7528 <code>MessageCallback.recall()</code> \u5373\u53EF\u64A4\u56DE\u53D1\u9001\u7684\u6D88\u606F\u3002</p><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">bot</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on_message</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">keywords</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">_</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> Message</span><span style="color:#89DDFF;">):</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    res </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">await</span><span style="color:#A6ACCD;"> data</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">send</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">...</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> res</span><span style="color:#89DDFF;">:</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">await</span><span style="color:#A6ACCD;"> res</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">recall</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;"># \u6216</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;"># for item in res:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;">#     await item.recall()</span></span>
<span class="line"></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">\u6E29\u99A8\u63D0\u793A<br></p><p>\u5408\u5E76\u8F6C\u53D1\u6682\u4E0D\u652F\u6301\u64A4\u56DE\uFF0C\u8BF7\u5173\u6CE8\u540E\u7EED\u66F4\u65B0\uFF01</p></div>`,21),e=[o];function t(c,r,F,D,y,A){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{i as __pageData,d as default};
