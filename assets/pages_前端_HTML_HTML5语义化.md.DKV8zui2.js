import{_ as n,l as h,q as l,u as i,x as t,U as k,a8 as p,Q as E}from"./chunks/framework.BfJyLlWd.js";const e="/docs/assets/images/HTML/HTML%E8%AF%AD%E4%B9%89%E5%8C%96%E7%AE%80%E4%BB%8B.webp",B=JSON.parse('{"title":"HTML5语义化","description":"","frontmatter":{},"headers":[],"relativePath":"pages/前端/HTML/HTML5语义化.md","filePath":"pages/前端/HTML/HTML5语义化.md"}'),r={name:"pages/前端/HTML/HTML5语义化.md"};function d(g,s,y,c,F,o){const a=E("ArticleHeader");return h(),l("div",{"data-pagefind-body":!0},[s[0]||(s[0]=i("h1",{id:"html5语义化",tabindex:"-1"},[i("strong",null,"HTML5语义化"),t(),i("a",{class:"header-anchor",href:"#html5语义化","aria-label":'Permalink to "**HTML5语义化**"'},"​")],-1)),k(a,{readTime:"7",words:"2.2k",lastUpdated:"12/26/2024, 2:41:05 AM"}),s[1]||(s[1]=p('<p>HTML5中，有一个特点就是<strong>语义化标签</strong>，相信大多数人和我一样，虽然在工作中也有自己学习和一个成长的习惯，但更多地，会把自己的注意力往 Javascript , css3 ， ES6 ， Vue3.0 等方向发展，还包括已经热了有一段时间的 Typescript ， 往往，很少有人会将关注点放于 HTML5 了。</p><p><strong>前言</strong></p><p>毕竟，大家可能都已经搬砖搬地麻木了，觉得 div + css 可以走遍整个项目，殊不知，这种页面结构是相对而言比较差劲的，不利于 SEO 以及代码阅读，性能优化等。写好正确的标签，也同样能让你的项目大放光彩。</p><p>当然，如果<strong>很强烈考虑兼容</strong> <strong>IE</strong> <strong>的话</strong>，那么本章节应不太适合学习。</p><p><strong>定义</strong></p><p>正确的标签做正确的事情</p><p><strong>好处</strong></p><ol><li>最主要的就是对 &#39;搜索引擎&#39; 友好, 有了良好的 结构和语义 的网页内容, 自然容易被搜索引擎抓取 。</li><li>有利于 &#39;SEO&#39;: 和搜索引擎建立良好沟通, 有助于爬虫抓取更多的有效信息 。 爬虫依赖于 标签 来确定, 上下文 和各个 关键字 的权重 。</li><li>方便其他设备解析 (如屏幕阅读器, 盲人阅读器, 移动设备) 以语义化的方式来渲染网页 。</li><li>便于团队开发和维护, 语义化更具可读性, 遵循 W3C 标准的团队都遵循这个标准, 可以减少差异化 。</li><li>为了在没有 CSS 的情况下, 页面也能呈现出很好地内容结构; 代码结构:为了裸奔时好看 。</li><li>用户体验: 例如 title, alt 用于解释名词或解释图片信息的标签, 尽量填写有含义的词语, label 标签的活用 。</li></ol><h2 id="html语义化简介" tabindex="-1">HTML语义化简介 <a class="header-anchor" href="#html语义化简介" aria-label="Permalink to &quot;HTML语义化简介&quot;">​</a></h2><p>html5提供了新的语义元素来定义网页的不同部分，它们被称为”切片元素“，如图所示：</p><p><img src="'+e+`" alt="img"></p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">header</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;每天把手机电脑关机1小时&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">time</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> pubdate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;pubdate&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;2023年05月01日&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">time</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">header</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  新浪科技讯 北京时间5月21日早间消息，谷歌(微博)执行董事长埃里克·施密特（Eric</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  Schmidt）周日在波士顿大学发表演讲时表示，大学生应当将目光从智能手机和电脑屏幕上移开</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">footer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;http://www.sina.com.cn&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">footer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="如何进行-html-语义化" tabindex="-1">如何进行 HTML 语义化 <a class="header-anchor" href="#如何进行-html-语义化" aria-label="Permalink to &quot;如何进行 HTML 语义化&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 尽可能少的使用无语义的标签 div </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> span 。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 在语义不明显时, 既可以使用 div 或者 p 时, 尽量用 p, 因为 p 在默认情况下有上下间距, 对兼容特殊终端有利 。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 不要使用纯样式标签, 如: b </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> font </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> u 等, 改用 css 设置 。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 需要强调的文本, 可以包含在 strong 或者 em 标签中(浏览器预设样式, 能用 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">CSS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 指定就不用他们), strong 默认样式是加粗 (不要用 b), em 是斜体(不用 i) 。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 使用表格时, 标题 要用 caption, 表头用 thead, 主体部分用 tbody 包围, 尾部用 tfoot 包围 。 表头 和一般 单元格 要区分开, 表头用 th, 单元格用 td 。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 表单域要用 fieldset 标签包起来, 并用 legend 标签说明表单的用途 。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">7.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 每个 input 标签对应的说明文本都需要使用 label 标签, 并且通过为 input 设置 id 属性, 在 lable 标签中设置 for</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">someld 来让说明文本和相对应的 input 关联起来 。</span></span></code></pre></div><h2 id="语义化标签的收集" tabindex="-1">语义化标签的收集 <a class="header-anchor" href="#语义化标签的收集" aria-label="Permalink to &quot;语义化标签的收集&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> header</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   1.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> header 元素代表 </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;网页&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 和 </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;section&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 的页眉 。</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   2.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 如果 hgroup 或 h1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">h6 自己就能工作的很好, 那就不要用 header。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> footer</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   1.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> footer 元素代表 </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;网页&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 或 </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;section&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 的页脚 。</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   2.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 通常含有该页面的一些基本信息, 例如: 文档 </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;创作者的姓名&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;"> &#39;文档的版权信息&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;使用条款的链接&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> /</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;联系信息&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 等等 。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> hgroup</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   1.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> hgroup 元素代表 </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;网页&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 或 </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;section&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 的标题 。</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   2.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 当元素有多个层级时, 该元素可以将 h1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">h6 元素放在其内, 譬如文章的主标题和副标题的组合 。</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   3.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 如果只需要一个 h1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">h6 标签就不用 hgroup 。</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   4.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 如果有连续多个 h1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">h6 标签就用 hgroup 。</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   5.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 如果有连续多个标题和其他文章数据, h1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">h6 标签就用 hgroup 包住, 和其他文章元数据一起放入 header 标签 。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> nav</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   1.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> nav 元素代表页面的 </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;导航链接区域&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 。</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   2.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 用于定义页面的主要导航部分 。</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   3.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 事实上规范上说 nav 只能用在页面主要导航部分上 。</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   4.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 用在整个页面主要导航部分上, 不合适就不要用 nav 元素 。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> aside</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   1.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> aside 元素被包含在 article 元素中作为主要内容的 </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;附属信息&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 部分 。</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   2.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 内容可以是与当前文章有关的 </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;相关资料&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;"> &#39;标签&#39; </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;名词解释等&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 。</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   3.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> aside 在 article 内表示主要内容的附属信息 。</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   4.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 在 article 之外则可做 </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;侧边栏&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, 没有 article 与之对应, 最好不用 。</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   5.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 如果是广告，其他日志链接或者其他分类导航也可以用 。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> article</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   1.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> article 元素最容易跟 section 和 div 容易混淆, 其实 article 代表一个 </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;文档&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, 页面或者网站中自成一体的内容, 其目的是为了让开发者独立开发或重用 。</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   2.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 譬如论坛的帖子, 博客上的文章, 一篇用户的评论, 一个互动的 widget 小工具 。</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   3.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 自身独立的情况下: 用 article 。</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   4.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 是相关内容: 用 section 。</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   5.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 没有语义的: 用 div 。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">7.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> section</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   1.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 标签定义文档中的 </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;节&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (section、区段)。比如 章节、页眉、页脚或文档中的其他部分 。</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   2.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> section 不是一个专用来做容器的标签, 如果仅仅是用于设置样式或脚本处理, 专用的是 div 。</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   3.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> section 里应该有 标题 (h1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), 但文章中推荐用 article 来代替 。</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   4.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 一条简单的准则是, 只有元素内容会被列在文档大纲中时, 才适合用 section 元素 。</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   5.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> section 的作用是对页面上的内容进行分块, 如各个有标题的版块, 功能区或对文章进行分段, 不要与有自己完整、独立内容的 article 混淆 。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> address</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   1.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 代表 </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;区块容器&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, 必须是作为 </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;联系信息&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 出现, 邮编地址、邮件地址等等,一般出现在 footer 。</span></span></code></pre></div><h2 id="常用html语义化标签" tabindex="-1">常用HTML语义化标签 <a class="header-anchor" href="#常用html语义化标签" aria-label="Permalink to &quot;常用HTML语义化标签&quot;">​</a></h2><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;：页面主体内容。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">hn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;：h1~h6，分级标题，&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; 与 &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; 协调有利于搜索引擎优化。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">ul</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;：无序列表。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">li</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;：有序列表。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">header</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;：页眉通常包括网站标志、主导航、全站链接以及搜索框。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">nav</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;：标记导航，仅对文档中重要的链接群使用。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;：页面主要内容，一个页面只能使用一次。如果是web应用，则包围其主要功能。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">article</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;：定义外部的内容，其中的内容独立于文档的其余部分。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">section</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;：定义文档中的节（section、区段）。比如章节、页眉、页脚或文档中的其他部分。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">aside</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;：定义其所处内容之外的内容。如侧栏、文章的一组链接、广告、友情链接、相关产品列表等。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">footer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;：页脚，只有当父级是body时，才是整个页面的页脚。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">small</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;：呈现小号字体效果，指定细则，输入免责声明、注解、署名、版权。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">strong</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;：和 em 标签一样，用于强调文本，但它强调的程度更强一些。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">em</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;：将其中的文本表示为强调的内容，表现为斜体。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">mark</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;：使用黄色突出显示部分文本。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">figure</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;：规定独立的流内容（图像、图表、照片、代码等等）（默认有40px左右margin）。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">figcaption</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;：定义 figure 元素的标题，应该被置于 figure 元素的第一个或最后一个子元素的位置。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">cite</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;：表示所包含的文本对某个参考文献的引用，比如书籍或者杂志的标题。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">blockquoto</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;：定义块引用，块引用拥有它们自己的空间。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">q</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;：短的引述（跨浏览器问题，尽量避免使用）。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">time</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;：datetime属性遵循特定格式，如果忽略此属性，文本内容必须是合法的日期或者时间格式。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">abbr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;：简称或缩写。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">dfn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;：定义术语元素，与定义必须紧挨着，可以在描述列表dl元素中使用。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">address</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;：作者、相关人士或组织的联系信息（电子邮件地址、指向联系信息页的链接）。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">del</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;：移除的内容。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">ins</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;：添加的内容。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">code</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;：标记代码。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">meter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;：定义已知范围或分数值内的标量测量。（Internet Explorer 不支持 meter 标签）</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">progress</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;：定义运行中的进度（进程）。</span></span></code></pre></div><h2 id="温馨提示" tabindex="-1">温馨提示 <a class="header-anchor" href="#温馨提示" aria-label="Permalink to &quot;温馨提示&quot;">​</a></h2><p>使用语义化标签需要注意，尽量不要使用偏强样式化的标签。</p>`,20))])}const u=n(r,[["render",d]]);export{B as __pageData,u as default};
