import{_ as e,l as p,q as l,u as a,x as t,U as i,a8 as d,Q as c}from"./chunks/framework.Nm9cCh0x.js";const x=JSON.parse('{"title":"通用开发规范","description":"","frontmatter":{"title":"通用开发规范","date":"2025-03-06T00:00:00.000Z","info":"开发规范","prev":false,"next":false,"sidebar":"true,","tags":["standard"]},"headers":[],"relativePath":"笔记/通用开发规范.md","filePath":"笔记/通用开发规范.md"}'),o={name:"笔记/通用开发规范.md"};function r(u,s,h,g,b,m){const n=c("ArticleHeader");return p(),l("div",{"data-pagefind-body":!0},[s[0]||(s[0]=a("h1",{id:"通用开发规范",tabindex:"-1"},[t("通用开发规范 "),a("a",{class:"header-anchor",href:"#通用开发规范","aria-label":'Permalink to "通用开发规范"'},"​")],-1)),i(n,{readTime:"4",words:"926",lastUpdated:"7/5/2025, 8:54:43 AM"}),s[1]||(s[1]=d(`<h2 id="通用的规范" tabindex="-1">通用的规范 <a class="header-anchor" href="#通用的规范" aria-label="Permalink to &quot;通用的规范&quot;">​</a></h2><h2 id="_1、文件夹" tabindex="-1">1、文件夹 <a class="header-anchor" href="#_1、文件夹" aria-label="Permalink to &quot;1、文件夹&quot;">​</a></h2><h3 id="_1-1-通用文件夹命名" tabindex="-1">1.1 通用文件夹命名 <a class="header-anchor" href="#_1-1-通用文件夹命名" aria-label="Permalink to &quot;1.1 通用文件夹命名&quot;">​</a></h3><ul><li>全部使用英文小写全称</li></ul><div class="language-Plaintext vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Plaintext</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// good</span></span>
<span class="line"><span>dep</span></span>
<span class="line"><span>// bad</span></span>
<span class="line"><span>DEP</span></span></code></pre></div><ul><li>多个词，使用连接线(<code>-</code>)连接</li></ul><div class="language-Plaintext vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Plaintext</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// good</span></span>
<span class="line"><span>dep-frontend</span></span>
<span class="line"><span>// bad</span></span>
<span class="line"><span>dep_frontend</span></span>
<span class="line"><span>depfrontend</span></span></code></pre></div><ul><li>如果需要使用英文缩写(<code>缩写一般取单词的首字母</code>)，或通俗易懂约定的缩写 <ul><li>严禁使用因缩写错误还会产生歧义的缩写（<code>常见的错误取头不取尾，或随意截取长度</code>)</li><li>如果名称长度允许，尽量避免使用缩写</li></ul></li></ul><div class="language-Plaintext vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Plaintext</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// good</span></span>
<span class="line"><span>dep-fe</span></span>
<span class="line"><span>dep-frontend</span></span>
<span class="line"><span>dep-be</span></span>
<span class="line"><span>dep-backend</span></span>
<span class="line"><span>// bad</span></span>
<span class="line"><span>dep-ft</span></span>
<span class="line"><span>dep-fd</span></span>
<span class="line"><span>dep-fend</span></span>
<span class="line"><span>dep-frd</span></span>
<span class="line"><span>dep-bk</span></span>
<span class="line"><span>dep-back  // 此处的back是一完整的单词，会让人产生歧义</span></span>
<span class="line"><span>dep-bd</span></span></code></pre></div><ul><li>使用单词全称时，使用<code>复数单词</code>. 使用单词缩写时，使用<code>单数单词</code>.</li></ul><div class="language-Plaintext vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Plaintext</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// good</span></span>
<span class="line"><span>documents</span></span>
<span class="line"><span>|- - reviews</span></span>
<span class="line"><span>|- - doc</span></span>
<span class="line"><span>src/</span></span>
<span class="line"><span>|- assets/</span></span>
<span class="line"><span>|- - img/</span></span>
<span class="line"><span>|- - images/</span></span>
<span class="line"><span>|- - icons/</span></span>
<span class="line"><span>|- utils</span></span>
<span class="line"><span>|- components</span></span>
<span class="line"><span>|- lib</span></span>
<span class="line"><span>// baddocument</span></span>
<span class="line"><span>|- - review</span></span>
<span class="line"><span>|- - docs</span></span>
<span class="line"><span>src/</span></span>
<span class="line"><span>|- asset/</span></span>
<span class="line"><span>|- - imgs/</span></span>
<span class="line"><span>|- - image/</span></span>
<span class="line"><span>|- - icon/</span></span>
<span class="line"><span>|- util</span></span>
<span class="line"><span>|- component</span></span>
<span class="line"><span>|- libs</span></span></code></pre></div><h3 id="_1-2、git相关" tabindex="-1">1.2、git相关 <a class="header-anchor" href="#_1-2、git相关" aria-label="Permalink to &quot;1.2、git相关&quot;">​</a></h3><ul><li>1.2.1 gitlab相项目名，保持跟<code>1、文件夹命名</code>规则保持一致</li><li>1.2.2 分支管理</li></ul><table tabindex="0"><thead><tr><th>分支</th><th>命名</th><th>说明</th></tr></thead><tbody><tr><td>主分支</td><td>master</td><td>主分支，所有提供给用户使用的正式版本，都在这个主分支上发布–&gt;Prod</td></tr><tr><td>预发布分支</td><td>release</td><td>发布正式版本之前，最终确认的分支–&gt;UAT/User Test</td></tr><tr><td>预发布分支</td><td>release-eu</td><td>默认发布EU的UAT</td></tr><tr><td>SIT发布分支</td><td>sit</td><td>默认发布正常的SIT环境</td></tr><tr><td>SIT发布分支</td><td>sit-eu</td><td>默认发布EU正常的SIT环境</td></tr><tr><td>开发主分支</td><td>develop/1.0.0_xxx</td><td>开发主分支，永远是功能最新最全的分支–&gt;发布DEV</td></tr><tr><td>功能开发分支</td><td>feature/1.0.0_starc</td><td>新功能分支，某个功能点正在开发阶段，基于develop/1.0.0_xxx checkout，发布–&gt;DEV</td></tr><tr><td>紧急bugfix分支</td><td>hotfix/xxx</td><td>修复线上代码的 bug，基于master checkout ，发布–&gt; UAT</td></tr></tbody></table><h3 id="_1-3、本地项目名" tabindex="-1">1.3、本地项目名 <a class="header-anchor" href="#_1-3、本地项目名" aria-label="Permalink to &quot;1.3、本地项目名&quot;">​</a></h3><blockquote><p>跟<code>gitlab</code>项目名保持一致，尽量不修改</p></blockquote><h3 id="_1-4、vue组件" tabindex="-1">1.4、vue组件 <a class="header-anchor" href="#_1-4、vue组件" aria-label="Permalink to &quot;1.4、vue组件&quot;">​</a></h3><ul><li>使用首字母大写的驼峰命名法</li><li><code>index</code>文件保持小写，如<code>index.vue</code> <code>index.ts</code> <code>index.js</code></li><li>参考：<a href="https://vuejs.org/style-guide/rules-strongly-recommended.html" target="_blank" rel="noreferrer">https://vuejs.org/style-guide/rules-strongly-recommended.html</a></li></ul><div class="language-Plaintext vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Plaintext</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// good</span></span>
<span class="line"><span>components/</span></span>
<span class="line"><span>|- TodoList/</span></span>
<span class="line"><span>|- - index.vue</span></span>
<span class="line"><span>|- - TodoListItem.vue</span></span>
<span class="line"><span>|- Dialog.vue</span></span>
<span class="line"><span>// b</span></span>
<span class="line"><span>components/</span></span>
<span class="line"><span>|- todolist/</span></span>
<span class="line"><span>|- - index.vue// bad</span></span>
<span class="line"><span>components/</span></span>
<span class="line"><span>|- to-do-list/·</span></span>
<span class="line"><span>|- - index.vue// bad</span></span>
<span class="line"><span>components/</span></span>
<span class="line"><span>|- dialog.vue// bad</span></span>
<span class="line"><span>components/</span></span>
<span class="line"><span>|- todolist/</span></span>
<span class="line"><span>|- - Index.vue</span></span></code></pre></div><h2 id="_2、文件" tabindex="-1">2、文件 <a class="header-anchor" href="#_2、文件" aria-label="Permalink to &quot;2、文件&quot;">​</a></h2><h3 id="_2-1、文件命名" tabindex="-1">2.1、文件命名 <a class="header-anchor" href="#_2-1、文件命名" aria-label="Permalink to &quot;2.1、文件命名&quot;">​</a></h3><ul><li><code>.html</code> <code>.htm</code> <code>.shtml</code> 后缀文件</li></ul><blockquote><ul><li>沿用<code>1.1 能用文件夹命名</code>的规则</li></ul></blockquote><ul><li><code>.css</code> <code>.less</code> <code>.scss</code></li></ul><blockquote><ul><li>沿用<code>1.1 能用文件夹命名</code>的规则</li></ul></blockquote><ul><li><code>.png</code> <code>.jpg</code> <code>.jpeg</code> <code>.svg</code> <code>.ico</code></li></ul><blockquote><ul><li>沿用<code>1.1 能用文件夹命名</code>的规则</li></ul></blockquote><ul><li><code>.vue</code></li></ul><blockquote><ul><li>正常沿用<code>1.1 能用文件夹命名</code>的规则</li><li>是单文件<code>组件</code>时，沿用<code>1.4</code>组件命名规则，尽量避免使用单个文件做组件，组件建议使用<code>文件夹</code></li></ul></blockquote><h2 id="_3、vue-react路由命名" tabindex="-1">3、Vue/React路由命名 <a class="header-anchor" href="#_3、vue-react路由命名" aria-label="Permalink to &quot;3、Vue/React路由命名&quot;">​</a></h2><ul><li><code>name</code>值命名 <ul><li>采用首页字母大写的驼峰命名规则</li></ul></li></ul><div class="language-Plaintext vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Plaintext</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// good</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    name:&#39;OrdersList&#39;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// bad</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    name:&#39;ordersList&#39;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// bad</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    name:&#39;orders_list&#39;</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li><code>path</code>路径命名 <ul><li>全部使用小字字母</li><li>多个词，使用连接线<code>-</code>连接</li></ul></li></ul><div class="language-Plaintext vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Plaintext</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// good</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    name:&#39;orders-list&#39;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// bad</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    name:&#39;orders_list&#39;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// bad</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    name:&#39;OrdersList&#39;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_4、js变量-方法-参数命名" tabindex="-1">4、JS变量/方法/参数命名 <a class="header-anchor" href="#_4、js变量-方法-参数命名" aria-label="Permalink to &quot;4、JS变量/方法/参数命名&quot;">​</a></h2><ul><li>采用首字母小写的驼峰命名规则</li></ul><div class="language-Plaintext vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Plaintext</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// goodconst userName = &#39;xie&#39;;</span></span>
<span class="line"><span>const myNickName = &#39;Jerman.xie&#39;</span></span>
<span class="line"><span>// goodconst getUserName = function(myId){return myId</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// badconst UserName = &#39;xie&#39;;</span></span>
<span class="line"><span>const my_Nick_Name = &#39;Jerman.xie&#39;const my_nick_name = &#39;Jerman.xie&#39;</span></span>
<span class="line"><span>// bad// 不要使用下划线const get_User_Name = function(my_id){return my_id</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 不要使用首字母大写const GetUserName = function(MyId){return MyId</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 不要全部小写const getusername = function(myid){return myid</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_5、js常量命名" tabindex="-1">5、JS常量命名 <a class="header-anchor" href="#_5、js常量命名" aria-label="Permalink to &quot;5、JS常量命名&quot;">​</a></h2><ul><li>全部使用大写字母，下划线连接</li></ul><div class="language-Plaintext vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Plaintext</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// goodconst USER_NAME = &#39;xie&#39;;</span></span>
<span class="line"><span>const MY_USER_NAME = &#39;Jerman.xie&#39;</span></span>
<span class="line"><span>// badconst USERNAME = &#39;XIE&#39;const User_Name = &#39;xie&#39;;</span></span>
<span class="line"><span>const My_Nick_Name = &#39;Jerman.xie&#39;const my_nick_name = &#39;Jerman.xie&#39;</span></span></code></pre></div><h2 id="_6、html之id属性的命名" tabindex="-1">6、HTML之id属性的命名 <a class="header-anchor" href="#_6、html之id属性的命名" aria-label="Permalink to &quot;6、HTML之id属性的命名&quot;">​</a></h2><ul><li>采用首字母小写的驼峰命名规则</li><li>保证唯一性</li></ul><div class="language-Plaintext vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Plaintext</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;div id=&quot;myList&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>// bad</span></span>
<span class="line"><span>&lt;div id=&quot;mylist&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>&lt;div id=&quot;my-list&quot;&gt;&lt;/div&gt;&lt;div id=&quot;my_list&quot;&gt;&lt;/div&gt;</span></span></code></pre></div><h2 id="_7、html之class属性的命名" tabindex="-1">7、HTML之class属性的命名 <a class="header-anchor" href="#_7、html之class属性的命名" aria-label="Permalink to &quot;7、HTML之class属性的命名&quot;">​</a></h2><ul><li>使用<code>-</code>连接</li><li>全部使用小写</li><li>不同的组件或页面，避免使用重名的名称</li></ul><div class="language-Plaintext vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Plaintext</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// good</span></span>
<span class="line"><span>&lt;div class=&quot;my-list&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// page A&lt;div class=&quot;a-list&quot;&gt;&lt;/div&gt;// page B&lt;div class=&quot;b-list&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>// bad</span></span>
<span class="line"><span>&lt;div id=&quot;my_list&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>&lt;div id=&quot;My_List&quot;&gt;&lt;/div&gt;&lt;div id=&quot;mylist&quot;&gt;&lt;/div&gt;// page A&lt;div class=&quot;c-list&quot;&gt;&lt;/div&gt;// page B&lt;div class=&quot;c-list&quot;&gt;&lt;/div&gt;</span></span></code></pre></div>`,46))])}const k=e(o,[["render",r]]);export{x as __pageData,k as default};
