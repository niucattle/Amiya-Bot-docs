import{_ as s,o as a,c as n,a as l}from"./app.a0393e08.js";const t="/assets/hello4.58f3a96c.png",C=JSON.parse('{"title":"\u521B\u5EFA\u8FDE\u7EED\u5BF9\u8BDD","description":"","frontmatter":{},"headers":[{"level":2,"title":"Message.wait()","slug":"message-wait","link":"#message-wait","children":[{"level":3,"title":"force \u5F3A\u5236\u7B49\u5F85","slug":"force-\u5F3A\u5236\u7B49\u5F85","link":"#force-\u5F3A\u5236\u7B49\u5F85","children":[]},{"level":3,"title":"data_filter \u6D88\u606F\u8FC7\u6EE4\u5668","slug":"data-filter-\u6D88\u606F\u8FC7\u6EE4\u5668","link":"#data-filter-\u6D88\u606F\u8FC7\u6EE4\u5668","children":[]},{"level":3,"title":"\u5173\u4E8E wait \u65B9\u6CD5\u4F60\u9700\u8981\u77E5\u9053\u7684\u4E8B","slug":"\u5173\u4E8E-wait-\u65B9\u6CD5\u4F60\u9700\u8981\u77E5\u9053\u7684\u4E8B","link":"#\u5173\u4E8E-wait-\u65B9\u6CD5\u4F60\u9700\u8981\u77E5\u9053\u7684\u4E8B","children":[]}]},{"level":2,"title":"Message.wait_channel()","slug":"message-wait-channel","link":"#message-wait-channel","children":[{"level":3,"title":"close_event()","slug":"close-event","link":"#close-event","children":[]},{"level":3,"title":"\u4E0D\u6E05\u9664\u6D88\u606F\u961F\u5217","slug":"\u4E0D\u6E05\u9664\u6D88\u606F\u961F\u5217","link":"#\u4E0D\u6E05\u9664\u6D88\u606F\u961F\u5217","children":[]}]}],"relativePath":"develop/basic/continuityMessage.md","lastUpdated":1679105344000}'),p={name:"develop/basic/continuityMessage.md"},e=l(`<h1 id="\u521B\u5EFA\u8FDE\u7EED\u5BF9\u8BDD" tabindex="-1">\u521B\u5EFA\u8FDE\u7EED\u5BF9\u8BDD <a class="header-anchor" href="#\u521B\u5EFA\u8FDE\u7EED\u5BF9\u8BDD" aria-hidden="true">#</a></h1><p>\u5728\u4E00\u4E9B\u4F7F\u7528\u573A\u666F\u91CC\uFF0C\u9700\u8981\u673A\u5668\u4EBA\u4E0E\u4F7F\u7528\u8005\u4EA7\u751F\u8FDE\u7EED\u7684\u5BF9\u8BDD\u3002\u6BD4\u5982\u8BE2\u95EE\u4F7F\u7528\u8005\u4EE5\u83B7\u53D6\u4FE1\u606F\u7B49\u3002</p><p>Message \u5BF9\u8C61\u5185\u7F6E\u4E86\u8FDE\u7EED\u5BF9\u8BDD\u652F\u6301\u3002</p><h2 id="message-wait" tabindex="-1">Message.wait() <a class="header-anchor" href="#message-wait" aria-hidden="true">#</a></h2><p><strong>\u53C2\u6570\u5217\u8868</strong></p><table><thead><tr><th>\u53C2\u6570\u540D</th><th>\u7C7B\u578B</th><th>\u91CA\u4E49</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>reply</td><td>Chain</td><td>Chain \u5BF9\u8C61</td><td></td></tr><tr><td>force</td><td>Bool</td><td>\u4F7F\u7528\u5F3A\u5236\u7B49\u5F85</td><td>False</td></tr><tr><td>max_time</td><td>Int</td><td>\u6700\u957F\u7B49\u5F85\u65F6\u95F4\uFF08\u79D2\u6570\uFF09</td><td>30</td></tr><tr><td>data_filter</td><td>Callable</td><td>Message \u8FC7\u6EE4\u5668</td><td></td></tr></tbody></table><p>\u4F7F\u7528 wait \u65B9\u6CD5\u5B9E\u73B0\u4E00\u4E2A\u7B80\u5355\u7684\u8FDE\u7EED\u5BF9\u8BDD</p><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">bot</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on_message</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">keywords</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">_</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> Message</span><span style="color:#89DDFF;">):</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#A6ACCD;">    reply </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">await</span><span style="color:#A6ACCD;"> data</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">wait</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">Chain</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">data</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">text</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">tell me your name please~</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> reply</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Chain</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">reply</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">text</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&#39;hello\uFF0C</span><span style="color:#F78C6C;">{</span><span style="color:#82AAFF;">reply</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">text</span><span style="color:#F78C6C;">}</span><span style="color:#C3E88D;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><img style="width:220px;" src="`+t+`" alt="image"><h3 id="force-\u5F3A\u5236\u7B49\u5F85" tabindex="-1">force \u5F3A\u5236\u7B49\u5F85 <a class="header-anchor" href="#force-\u5F3A\u5236\u7B49\u5F85" aria-hidden="true">#</a></h3><p>\u7B49\u5F85\u901A\u5E38\u4E0D\u4F1A\u5F71\u54CD\u6D88\u606F\u5206\u914D\u5668\u8FD0\u4F5C\uFF0C\u4E5F\u5C31\u662F\u8BF4 <strong>\u4EC5\u5728\u4E0D\u80FD\u89E6\u53D1\u4EFB\u4F55\u5176\u4ED6\u529F\u80FD\uFF08\u4E5F\u5305\u62EC\u672C\u529F\u80FD\u7684\u521D\u59CB\u89E6\u53D1\u65B9\u5F0F\uFF09</strong> \u7684\u65F6\u5019\uFF0C\u6D88\u606F\u624D\u4F1A\u8FD4\u56DE\u5230\u5F53\u524D\u7B49\u5F85\u5904\u3002<br> \u5982\u679C\u4F60\u4E0D\u5E0C\u671B\u5982\u6B64\uFF0C\u4F7F\u7528\u53C2\u6570 <code>force=True</code>\uFF0C\u53EF\u4EE5\u5FFD\u7565\u5206\u914D\u5668\u8BA9\u6D88\u606F\u5F3A\u5236\u8FD4\u56DE\u5230\u7B49\u5F85\u5904\u3002</p><h3 id="data-filter-\u6D88\u606F\u8FC7\u6EE4\u5668" tabindex="-1">data_filter \u6D88\u606F\u8FC7\u6EE4\u5668 <a class="header-anchor" href="#data-filter-\u6D88\u606F\u8FC7\u6EE4\u5668" aria-hidden="true">#</a></h3><p>\u5982\u679C\u5728\u7B49\u5F85\u8FC7\u7A0B\u4E2D\uFF0C\u5E0C\u671B wait \u63A5\u6536\u5230\u7B26\u5408\u671F\u671B\u7684\u6D88\u606F\u540E\u518D\u8FD4\u56DE\u5230\u7B49\u5F85\u5904\uFF0C\u53EF\u4EE5\u4F7F\u7528 data_filter \u53C2\u6570\u8FC7\u6EE4\u6D88\u606F\u3002</p><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">my_data_filter</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> Message</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> ...</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">True</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;"># \u8FD4\u56DE True \u4EE3\u8868\u6B64\u5219\u6D88\u606F\u7B26\u5408\u671F\u671B\uFF0C\u5C06\u8FD4\u56DE\u5230\u7B49\u5F85\u5904</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">bot</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on_message</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">keywords</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">_</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> Message</span><span style="color:#89DDFF;">):</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">    reply </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">await</span><span style="color:#A6ACCD;"> data</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">wait</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">Chain</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">data</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">text</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">tell me your name please~</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">),</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;">data_filter</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">my_data_filter</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> reply</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Chain</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">reply</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">text</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&#39;hello\uFF0C</span><span style="color:#F78C6C;">{</span><span style="color:#82AAFF;">reply</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">text</span><span style="color:#F78C6C;">}</span><span style="color:#C3E88D;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><h3 id="\u5173\u4E8E-wait-\u65B9\u6CD5\u4F60\u9700\u8981\u77E5\u9053\u7684\u4E8B" tabindex="-1">\u5173\u4E8E wait \u65B9\u6CD5\u4F60\u9700\u8981\u77E5\u9053\u7684\u4E8B <a class="header-anchor" href="#\u5173\u4E8E-wait-\u65B9\u6CD5\u4F60\u9700\u8981\u77E5\u9053\u7684\u4E8B" aria-hidden="true">#</a></h3><ul><li>\u82E5\u7528\u6237\u8D85\u8FC7\u6700\u957F\u7B49\u5F85\u65F6\u95F4\u672A\u56DE\u590D\uFF0Cwait \u4F1A\u8FD4\u56DE <code>None</code>\u3002</li><li>\u540C\u4E00\u4E2A\u5B50\u9891\u9053\u5185\u7684\u540C\u4E00\u4E2A\u7528\u6237\u53EA\u80FD\u5B58\u5728\u4E00\u4E2A\u7B49\u5F85\u4E8B\u4EF6\uFF0C\u5F53\u4E00\u4E2A\u65B0\u7684\u7B49\u5F85\u4E8B\u4EF6\u521B\u5EFA\u540E\uFF0C\u4E0A\u4E00\u4E2A\u672A\u4F7F\u7528\u7684\u7B49\u5F85\u4E8B\u4EF6\u4F1A\u88AB\u6CE8\u9500\u5E76\u5F15\u53D1 <code>WaitEventCancel</code> \u5F02\u5E38\uFF0C\u8FDB\u884C\u4E2D\u7684\u4E1A\u52A1\u5C06\u4F1A\u88AB<strong>\u7EC8\u6B62</strong>\uFF0C\u8FD9\u662F\u7B26\u5408\u9884\u671F\u7684\uFF0C\u901A\u5E38\u8FD9\u4E2A\u5F02\u5E38\u4F1A\u88AB\u5168\u5C40\u5F02\u5E38\u6355\u6349\u5668\u8FC7\u6EE4\u3002</li><li>\u5728\u7B49\u5F85\u65F6\u95F4\u5185\u4F7F\u7528\u5176\u4ED6\u529F\u80FD\uFF0C\u7B49\u5F85\u4E5F\u4F1A\u88AB\u6CE8\u9500\u3002</li></ul><h2 id="message-wait-channel" tabindex="-1">Message.wait_channel() <a class="header-anchor" href="#message-wait-channel" aria-hidden="true">#</a></h2><div class="danger custom-block"><p class="custom-block-title">\u6CE8\u610F<br></p><p>\u8BE5\u65B9\u6CD5\u4E0D\u53EF\u7528\u4E8E\u652F\u6301\u79C1\u4FE1\u7684\u529F\u80FD\u91CC</p></div><p><strong>\u53C2\u6570\u5217\u8868</strong></p><table><thead><tr><th>\u53C2\u6570\u540D</th><th>\u7C7B\u578B</th><th>\u91CA\u4E49</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>reply</td><td>Chain</td><td>Chain \u5BF9\u8C61</td><td></td></tr><tr><td>force</td><td>Bool</td><td>\u4F7F\u7528\u5F3A\u5236\u7B49\u5F85</td><td>False</td></tr><tr><td>clean</td><td>Bool</td><td>\u662F\u5426\u6E05\u7A7A\u6D88\u606F\u5217\u8868</td><td>True</td></tr><tr><td>max_time</td><td>Int</td><td>\u6700\u957F\u7B49\u5F85\u65F6\u95F4\uFF08\u79D2\u6570\uFF09</td><td>30</td></tr><tr><td>data_filter</td><td>Callable</td><td>Message \u8FC7\u6EE4\u5668</td><td></td></tr></tbody></table><p>wait_channel \u65B9\u6CD5\u662F wait \u6982\u5FF5\u7684\u5EF6\u4F38\uFF0C\u7528\u4E8E\u7B49\u5F85<strong>\u5B50\u9891\u9053\u5168\u4F53\u7528\u6237\u7684\u56DE\u590D</strong>\u3002</p><p>\u4E0E wait \u65B9\u6CD5\u4E0D\u540C\u7684\u662F\uFF0Cwait_channel \u8FD4\u56DE\u7684\u4E0D\u662F Message \u5BF9\u8C61\uFF0C\u800C\u662F <strong>ChannelMessagesItem</strong> \u5BF9\u8C61\u3002\u5185\u542B\u7B49\u5F85\u4E8B\u4EF6\u7684\u5B9E\u4F8B\uFF0C\u548C\u8BE5\u6B21\u8FD4\u56DE\u7684\u6D88\u606F\u3002</p><p><strong>ChannelMessagesItem</strong></p><p>\u5C5E\u6027</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u91CA\u4E49</th></tr></thead><tbody><tr><td>event</td><td>ChannelWaitEvent</td><td>\u7B49\u5F85\u4E8B\u4EF6\u7684\u5B9E\u4F8B</td></tr><tr><td>message</td><td>Message</td><td>Message\u5BF9\u8C61</td></tr></tbody></table><p>\u65B9\u6CD5</p><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u53C2\u6570</th><th>\u91CA\u4E49</th><th>\u5F02\u6B65</th></tr></thead><tbody><tr><td>close_event</td><td></td><td>\u5173\u95ED\u7B49\u5F85\u4E8B\u4EF6</td><td>\u5426</td></tr></tbody></table><p>\u4E0B\u9762\u6765\u770B\u4E00\u4E2A\u7B80\u5355\u7684\u4F8B\u5B50</p><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">bot</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on_message</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">keywords</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">_</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> Message</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">await</span><span style="color:#A6ACCD;"> data</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">send</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">Chain</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">data</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">text</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello everyone, tell me your name please~</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">))</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">while</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">True:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">await</span><span style="color:#A6ACCD;"> asyncio</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sleep</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">)</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">        event </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">await</span><span style="color:#A6ACCD;"> data</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">wait_channel</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> event</span><span style="color:#89DDFF;">:</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">            reply </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> event</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">message</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> reply</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">text</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">stop</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">                event</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">close_event</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;"># \u5173\u95ED\u7B49\u5F85\u4E8B\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">break</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">await</span><span style="color:#A6ACCD;"> data</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">send</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">Chain</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">reply</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">text</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&#39;hello\uFF0C</span><span style="color:#F78C6C;">{</span><span style="color:#82AAFF;">reply</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">text</span><span style="color:#F78C6C;">}</span><span style="color:#C3E88D;">&#39;</span><span style="color:#89DDFF;">))</span></span>
<span class="line"></span></code></pre></div><h3 id="close-event" tabindex="-1">close_event() <a class="header-anchor" href="#close-event" aria-hidden="true">#</a></h3><p>\u5173\u95ED\u7B49\u5F85\u4E8B\u4EF6</p><p>wait_channel \u4E0E wait \u7684\u7528\u6CD5\u662F<strong>\u5927\u81F4\u76F8\u540C</strong>\u7684\uFF0C\u4F46\u662F wait_channel \u5728\u63A5\u6536\u5230\u6709\u6548\u6D88\u606F\u5E76\u8FD4\u56DE\u540E\uFF0C\u4E0D\u4F1A\u50CF wait \u90A3\u6837\u5173\u95ED\u4E8B\u4EF6\uFF0C\u800C\u662F\u4FDD\u6301\u63A5\u6536\u5B50\u9891\u9053\u7684\u6D88\u606F\u3002\u5728\u4F60\u7684\u4E1A\u52A1\u903B\u8F91\u6B63\u5E38\u7ED3\u675F\u65F6\uFF0C\u4F60<strong>\u5FC5\u987B</strong>\u4F7F\u7528 <code>close_event</code> \u5173\u95ED\u5B83\u3002</p><div class="warning custom-block"><p class="custom-block-title">\u8BF7\u6CE8\u610F<br></p><p><strong>\u8BF7\u52A1\u5FC5\u8BA9\u4F60\u7684\u4E1A\u52A1\u903B\u8F91\u6709\u673A\u4F1A\u5173\u95ED\u7B49\u5F85\u4E8B\u4EF6</strong>\uFF0C\u5426\u5219\u7B49\u5F85\u4E8B\u4EF6\u6CA1\u6709\u88AB\u6B63\u5E38\u5173\u95ED\u65F6\uFF0C\u5B83\u53EF\u80FD\u4F1A<strong>\u6301\u7EED\u62E6\u622A\u5B50\u9891\u9053\u6D88\u606F</strong>\u76F4\u81F3\u8D85\u65F6\u81EA\u52A8\u5173\u95ED\u3002</p></div><h3 id="\u4E0D\u6E05\u9664\u6D88\u606F\u961F\u5217" tabindex="-1">\u4E0D\u6E05\u9664\u6D88\u606F\u961F\u5217 <a class="header-anchor" href="#\u4E0D\u6E05\u9664\u6D88\u606F\u961F\u5217" aria-hidden="true">#</a></h3><p>\u5982\u679C\u4F60\u6301\u7EED\u8C03\u7528 wait_channel\uFF08\u5982\u793A\u4F8B\u6240\u793A\uFF09\uFF0C\u4F46\u4F60\u4E0D\u5E0C\u671B\u5728\u5904\u7406\u4E1A\u52A1\u65F6\u9519\u8FC7\u5B50\u9891\u9053\u5185\u7684\u6D88\u606F\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u53C2\u6570 <code>clean=False</code> \u8BA9\u4E8B\u4EF6\u4E0D\u6E05\u9664\u6D88\u606F\u961F\u5217\u3002\u8BA9\u4F60\u53EF\u4EE5\u6309\u987A\u5E8F\u83B7\u53D6\u5230\u5B50\u9891\u9053\u5185\u7684\u6D88\u606F\u3002</p><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#89DDFF;">await</span><span style="color:#A6ACCD;"> data</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">wait_channel</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">clean</span><span style="color:#89DDFF;">=False)</span></span>
<span class="line"></span></code></pre></div>`,36),o=[e];function r(c,F,D,y,d,A){return a(),n("div",null,o)}const h=s(p,[["render",r]]);export{C as __pageData,h as default};
