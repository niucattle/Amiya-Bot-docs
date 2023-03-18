import{_ as s,o as a,c as n,a as e}from"./app.a0393e08.js";const l="/assets/lifeCycle.dea4f1b7.svg",i=JSON.parse('{"title":"\u751F\u547D\u5468\u671F","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6D88\u606F\u751F\u547D\u5468\u671F","slug":"\u6D88\u606F\u751F\u547D\u5468\u671F","link":"#\u6D88\u606F\u751F\u547D\u5468\u671F","children":[{"level":3,"title":"message_created","slug":"message-created","link":"#message-created","children":[]},{"level":3,"title":"message_before_waiter_set","slug":"message-before-waiter-set","link":"#message-before-waiter-set","children":[]},{"level":3,"title":"message_before_handle","slug":"message-before-handle","link":"#message-before-handle","children":[]},{"level":3,"title":"message_before_send","slug":"message-before-send","link":"#message-before-send","children":[]},{"level":3,"title":"message_after_send","slug":"message-after-send","link":"#message-after-send","children":[]},{"level":3,"title":"message_after_handle","slug":"message-after-handle","link":"#message-after-handle","children":[]}]},{"level":2,"title":"\u4E8B\u4EF6\u751F\u547D\u5468\u671F","slug":"\u4E8B\u4EF6\u751F\u547D\u5468\u671F","link":"#\u4E8B\u4EF6\u751F\u547D\u5468\u671F","children":[]}],"relativePath":"develop/advanced/lifeCycle.md","lastUpdated":1679105344000}'),p={name:"develop/advanced/lifeCycle.md"},o=e('<h1 id="\u751F\u547D\u5468\u671F" tabindex="-1">\u751F\u547D\u5468\u671F <a class="header-anchor" href="#\u751F\u547D\u5468\u671F" aria-hidden="true">#</a></h1><p>AmiyaBot \u63A5\u6536\u7684\u6D88\u606F\u548C\u4E8B\u4EF6\uFF0C\u90FD\u4F1A\u5386\u7ECF\u4E00\u4E2A\u5B8C\u6574\u7684\u751F\u547D\u5468\u671F\u3002\u4F60\u53EF\u4EE5\u4ECB\u5165\u8FD9\u4E9B\u5468\u671F\u6765\u5BF9\u4E1A\u52A1\u8FDB\u884C\u8FDB\u4E00\u6B65\u7684\u8C03\u6574\u3002</p><h2 id="\u6D88\u606F\u751F\u547D\u5468\u671F" tabindex="-1">\u6D88\u606F\u751F\u547D\u5468\u671F <a class="header-anchor" href="#\u6D88\u606F\u751F\u547D\u5468\u671F" aria-hidden="true">#</a></h2><p>\u5728\u63A5\u6536\u6D88\u606F\u5230\u56DE\u590D\u53D1\u9001\u5B8C\u6BD5\uFF0C\u603B\u5171\u4F1A\u7ECF\u8FC7\u81F3\u5C11\u4E94\u4E2A\u5468\u671F\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\uFF0C\u7D2B\u8272\u7684\u8282\u70B9\u5C31\u662F\u53EF\u4EE5\u4ECB\u5165\u7684\u5468\u671F\u3002</p><p>\u5982\u679C\u6D88\u606F\u54CD\u5E94\u91CC\u5B58\u5728\u7B49\u5F85\u4E8B\u4EF6\uFF0C\u90A3\u4E48\u5468\u671F\u5C06\u4F1A\u5EF6\u957F\uFF0C\u518D\u6B21\u4ECE\u6D88\u606F\u63A5\u6536\u5F00\u59CB\uFF0C\u76F4\u81F3\u7B49\u5F85\u4E8B\u4EF6\u7ED3\u675F\u540E\u7EE7\u7EED\u5411\u4E0B\u6267\u884C\u3002</p><img src="'+l+`" style="width:100%;" alt=""><p>\u901A\u8FC7 AmiyaBot \u5BF9\u8C61\u6216 PluginInstance \u5BF9\u8C61\u6CE8\u518C\u5468\u671F\u94A9\u5B50\u51FD\u6570\u3002</p><div class="danger custom-block"><p class="custom-block-title">\u6CE8\u610F<br></p><p>\u5728 1.3.8 \u7248\u672C\u540E\uFF0C\u79FB\u9664\u4E86\u539F\u672C\u7684\u751F\u547D\u5468\u671F\u94A9\u5B50\uFF0C\u4F46\u53EF\u4EE5\u5728\u65B0\u7684\u94A9\u5B50\u91CC\u627E\u5230\u66FF\u4EE3\u3002</p><table><thead><tr><th>OLD</th><th>NEW</th></tr></thead><tbody><tr><td>handler_middleware</td><td>message_created</td></tr><tr><td>before_bot_reply</td><td>message_before_handle</td></tr><tr><td>after_bot_reply</td><td>message_after_handle</td></tr></tbody></table></div><blockquote><p>\u6240\u6709\u94A9\u5B50\u5747\u53EF\u4EE5\u540C\u65F6\u5B58\u5728\u591A\u4E2A\uFF0C\u6309\u52A0\u8F7D\u987A\u5E8F\u9010\u4E2A\u8C03\u7528\u3002</p></blockquote><h3 id="message-created" tabindex="-1">message_created <a class="header-anchor" href="#message-created" aria-hidden="true">#</a></h3><p>\u6D88\u606F\u521B\u5EFA\u5B8C\u6BD5\u9636\u6BB5\uFF0C\u53EF\u4EE5\u5728\u6B64\u9636\u6BB5\u4FEE\u6539 Message \u5BF9\u8C61\u5E76\u8FD4\u56DE\u3002\u5B58\u5728\u591A\u4E2A\u6B64\u94A9\u5B50\u65F6\uFF0C\u6309\u52A0\u8F7D\u987A\u5E8F\u9010\u4E2A\u8C03\u7528\uFF0C\u53C2\u6570\u63A5\u53D7\u7684 Message \u5BF9\u8C61\u53D7\u4E0A\u4E00\u4E2A\u6267\u884C\u7684\u5F71\u54CD\u3002</p><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">bot</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">message_created</span></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">_</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> Message</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">instance</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> BotAdapterProtocol</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> ...</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        data</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">text</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> ...</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> data</span></span>
<span class="line"></span></code></pre></div><h3 id="message-before-waiter-set" tabindex="-1">message_before_waiter_set <a class="header-anchor" href="#message-before-waiter-set" aria-hidden="true">#</a></h3><p>\u5F53\u5B58\u5728\u7B49\u5F85\u4E8B\u4EF6\u4E14\u6D88\u606F\u5206\u914D\u5668\u65E0\u8FD4\u56DE\u6216\u7B49\u5F85\u4E8B\u4EF6\u5C5E\u4E8E\u5F3A\u5236\u7B49\u5F85\u7C7B\u578B\u65F6\uFF0C\u5728\u8FDB\u5165\u7B49\u5F85\u4E8B\u4EF6\u524D\u6267\u884C\u6B64\u94A9\u5B50\u3002</p><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> amiyabot </span><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> Waiter</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">bot</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">message_before_waiter_set</span></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">_</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> Message</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">waiter</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> Waiter</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">instance</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> BotAdapterProtocol</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"></span></code></pre></div><h3 id="message-before-handle" tabindex="-1">message_before_handle <a class="header-anchor" href="#message-before-handle" aria-hidden="true">#</a></h3><p>\u5F53\u6D88\u606F\u5206\u914D\u5668\u6709\u8FD4\u56DE\uFF0C\u5728\u6267\u884C\u6D88\u606F\u54CD\u5E94\u5668\u524D\u6267\u884C\u6B64\u94A9\u5B50\u3002\u5B58\u5728\u591A\u4E2A\u6B64\u94A9\u5B50\u65F6\uFF0C\u6309\u52A0\u8F7D\u987A\u5E8F\u9010\u4E2A\u8C03\u7528\u3002\u5168\u90E8\u6267\u884C\u5B8C\u6210\u540E\u5F53\u6709\u5176\u4E2D\u4E00\u4E2A\u8FD4\u56DE False\uFF0C\u5219\u4E0D\u5F80\u4E0B\u7EE7\u7EED\u6267\u884C\u5E76\u7ED3\u675F\u751F\u547D\u5468\u671F\u3002</p><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">bot</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">message_before_handle</span></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">_</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> Message</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">factory_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">str</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">instance</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> BotAdapterProtocol</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> ...</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">False</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">True</span></span>
<span class="line"></span></code></pre></div><h3 id="message-before-send" tabindex="-1">message_before_send <a class="header-anchor" href="#message-before-send" aria-hidden="true">#</a></h3><p>\u5F53\u6D88\u606F\u54CD\u5E94\u5668\u6267\u884C\u5B8C\u6BD5\u4E14\u5B58\u5728\u8FD4\u56DE\u65F6\uFF0C\u5728\u53D1\u9001\u5176\u8FD4\u56DE\u524D\u6267\u884C\u6B64\u94A9\u5B50\u3002\u53EF\u4EE5\u5728\u6B64\u9636\u6BB5\u4FEE\u6539 Chain \u5BF9\u8C61\u5E76\u8FD4\u56DE\u3002\u5B58\u5728\u591A\u4E2A\u6B64\u94A9\u5B50\u65F6\uFF0C\u6309\u52A0\u8F7D\u987A\u5E8F\u9010\u4E2A\u8C03\u7528\uFF0C\u53C2\u6570\u63A5\u53D7\u7684 Chain \u5BF9\u8C61\u53D7\u4E0A\u4E00\u4E2A\u6267\u884C\u7684\u5F71\u54CD\u3002</p><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">bot</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">message_before_send</span></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">_</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">chain</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> Chain</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">factory_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">str</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">instance</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> BotAdapterProtocol</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> chain</span></span>
<span class="line"></span></code></pre></div><h3 id="message-after-send" tabindex="-1">message_after_send <a class="header-anchor" href="#message-after-send" aria-hidden="true">#</a></h3><p>\u5F53\u6D88\u606F\u54CD\u5E94\u5668\u6267\u884C\u5B8C\u6BD5\u4E14\u5B58\u5728\u8FD4\u56DE\u65F6\uFF0C\u5728\u53D1\u9001\u5176\u8FD4\u56DE\u7ED3\u675F\u540E\u6267\u884C\u6B64\u94A9\u5B50\u3002</p><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">bot</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">message_after_send</span></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">_</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">chain</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> Chain</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">factory_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">str</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">instance</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> BotAdapterProtocol</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"></span></code></pre></div><h3 id="message-after-handle" tabindex="-1">message_after_handle <a class="header-anchor" href="#message-after-handle" aria-hidden="true">#</a></h3><p>\u5F53\u6D88\u606F\u54CD\u5E94\u5668\u6267\u884C\u5B8C\u6BD5\uFF08\u65E0\u8BBA\u6709\u6CA1\u6709\u8FD4\u56DE\uFF09\u540E\u6267\u884C\u6B64\u94A9\u5B50\u3002</p><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">bot</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">message_after_handle</span></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">_</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">chain</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> Optional</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">Chain</span><span style="color:#89DDFF;">],</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">factory_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">str</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">instance</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> BotAdapterProtocol</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"></span></code></pre></div><h2 id="\u4E8B\u4EF6\u751F\u547D\u5468\u671F" tabindex="-1">\u4E8B\u4EF6\u751F\u547D\u5468\u671F <a class="header-anchor" href="#\u4E8B\u4EF6\u751F\u547D\u5468\u671F" aria-hidden="true">#</a></h2><p>\u76EE\u524D\u4E8B\u4EF6\u751F\u547D\u5468\u671F\u53EA\u6709\u4E00\u4E2A\u3002</p><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">bot</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">event_created</span></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">_</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">event</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> EventType</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">instance</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> BotAdapterProtocol</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"></span></code></pre></div>`,30),t=[o];function r(c,y,A,D,C,F){return a(),n("div",null,t)}const h=s(p,[["render",r]]);export{i as __pageData,h as default};
