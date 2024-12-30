import{_ as e,l as t,q as l,u as s,x as h,U as n,a8 as o,Q as p}from"./chunks/framework.D8ZX-U8w.js";const C=JSON.parse('{"title":"git log 和 git reflog","description":"","frontmatter":{},"headers":[],"relativePath":"知识库/git/git log和git  reflog.md","filePath":"知识库/git/git log和git  reflog.md"}'),d={name:"知识库/git/git log和git  reflog.md"};function g(r,i,k,c,F,b){const a=p("ArticleHeader");return t(),l("div",{"data-pagefind-body":!0},[i[0]||(i[0]=s("h1",{id:"git-log-和-git-reflog",tabindex:"-1"},[h("git log 和 git reflog "),s("a",{class:"header-anchor",href:"#git-log-和-git-reflog","aria-label":'Permalink to "git log 和 git reflog"'},"​")],-1)),n(a,{readTime:"2",words:"288",lastUpdated:"12/30/2024, 9:30:00 AM"}),i[1]||(i[1]=o('<h2 id="git-log" tabindex="-1">git log <a class="header-anchor" href="#git-log" aria-label="Permalink to &quot;git log&quot;">​</a></h2><h3 id="_1-查看最新的合并提交" tabindex="-1">1. 查看最新的合并提交 <a class="header-anchor" href="#_1-查看最新的合并提交" aria-label="Permalink to &quot;1. 查看最新的合并提交&quot;">​</a></h3><p>使用 <code>git log</code> 命令结合 <code>-n 1</code> 参数来仅显示最新的合并记录：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> log</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -n</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --merges</span></span></code></pre></div><h3 id="_2-显示简洁的合并记录" tabindex="-1">2. 显示简洁的合并记录 <a class="header-anchor" href="#_2-显示简洁的合并记录" aria-label="Permalink to &quot;2. 显示简洁的合并记录&quot;">​</a></h3><p>如果你只想查看最新的合并记录的简洁信息，可以使用：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> log</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -n</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --merges</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --oneline</span></span></code></pre></div><h3 id="_3-图形化查看" tabindex="-1">3. 图形化查看 <a class="header-anchor" href="#_3-图形化查看" aria-label="Permalink to &quot;3. 图形化查看&quot;">​</a></h3><p>如果你希望以图形化的形式查看最新的合并记录，可以使用：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> log</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -n</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --merges</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --graph</span></span></code></pre></div><h2 id="git-reflog" tabindex="-1">git reflog <a class="header-anchor" href="#git-reflog" aria-label="Permalink to &quot;git reflog&quot;">​</a></h2><h4 id="_1-查看所有引用日志" tabindex="-1">1. 查看所有引用日志 <a class="header-anchor" href="#_1-查看所有引用日志" aria-label="Permalink to &quot;1. 查看所有引用日志&quot;">​</a></h4><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reflog</span></span></code></pre></div><p>这个命令会显示所有的 HEAD 指针移动记录，包括 <code>git reset</code>、<code>git checkout</code>、<code>git commit</code> 等所有操作。</p><h4 id="_2-查看特定分支的引用日志" tabindex="-1">2. 查看特定分支的引用日志 <a class="header-anchor" href="#_2-查看特定分支的引用日志" aria-label="Permalink to &quot;2. 查看特定分支的引用日志&quot;">​</a></h4><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reflog</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> show</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">branc</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">h</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><p>例如：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reflog</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> show</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> master</span></span></code></pre></div><p>查看 <code>master</code> 分支的引用日志。</p><h4 id="_3-使用-reflog-恢复误删的提交" tabindex="-1">3. 使用 <code>reflog</code> 恢复误删的提交 <a class="header-anchor" href="#_3-使用-reflog-恢复误删的提交" aria-label="Permalink to &quot;3. 使用 `reflog` 恢复误删的提交&quot;">​</a></h4><p>如果你删除了某些提交，使用 <code>git reflog</code> 可以找到之前的提交哈希值，然后用 <code>git reset</code> 或 <code>git checkout</code> 恢复。</p><p>例如：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reset</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --hard</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">commit_has</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">h</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><p><code>git reflog</code> 记录了所有 HEAD 的变动，所以即使你进行了误操作，仍然可以通过它找到提交的历史记录并进行恢复。</p>',24))])}const y=e(d,[["render",g]]);export{C as __pageData,y as default};
