import{_ as a,l as n,q as p,a8 as e}from"./chunks/framework.D8ZX-U8w.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"文档/git/git常用命令大全.md","filePath":"文档/git/git常用命令大全.md"}'),l={name:"文档/git/git常用命令大全.md"};function i(t,s,c,o,g,r){return n(),p("div",{"data-pagefind-body":!0},s[0]||(s[0]=[e(`<h3 id="_1-基本配置" tabindex="-1"><strong>1. 基本配置</strong> <a class="header-anchor" href="#_1-基本配置" aria-label="Permalink to &quot;**1. 基本配置**&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 配置用户名和邮箱（提交时的标识）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;ArticleHeader readTime=&quot;4&quot; words=&quot;812&quot; lastUpdated=&quot;12/26/2024, 10:14:43 AM&quot; /&gt;</span></span>
<span class="line"><span>git config --global user.name &quot;YourName&quot;</span></span>
<span class="line"><span>git config --global user.email &quot;YourEmail@example.com&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 查看当前 Git 配置信息</span></span>
<span class="line"><span>git config --list</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 配置默认主分支名称为 main（可选）</span></span>
<span class="line"><span>git config --global init.defaultBranch main</span></span></code></pre></div><hr><h3 id="_2-仓库初始化" tabindex="-1"><strong>2. 仓库初始化</strong> <a class="header-anchor" href="#_2-仓库初始化" aria-label="Permalink to &quot;**2. 仓库初始化**&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 初始化仓库</span></span>
<span class="line"><span>git init</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 克隆远程仓库</span></span>
<span class="line"><span>git clone &lt;repository_url&gt;</span></span></code></pre></div><hr><h3 id="_3-状态查看" tabindex="-1"><strong>3. 状态查看</strong> <a class="header-anchor" href="#_3-状态查看" aria-label="Permalink to &quot;**3. 状态查看**&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 查看当前工作目录的状态</span></span>
<span class="line"><span>git status</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 查看当前分支提交历史</span></span>
<span class="line"><span>git log</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 查看某个文件的历史改动记录</span></span>
<span class="line"><span>git log -p &lt;file&gt;</span></span></code></pre></div><hr><h3 id="_4-文件操作" tabindex="-1"><strong>4. 文件操作</strong> <a class="header-anchor" href="#_4-文件操作" aria-label="Permalink to &quot;**4. 文件操作**&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 添加文件到暂存区</span></span>
<span class="line"><span>git add &lt;file&gt;</span></span>
<span class="line"><span>git add .  # 添加所有文件</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 提交到本地仓库</span></span>
<span class="line"><span>git commit -m &quot;Commit message&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 添加并提交一步完成</span></span>
<span class="line"><span>git commit -am &quot;Commit message&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 删除文件并提交</span></span>
<span class="line"><span>git rm &lt;file&gt;</span></span>
<span class="line"><span>git commit -m &quot;Remove file&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 重命名文件并提交</span></span>
<span class="line"><span>git mv &lt;old_name&gt; &lt;new_name&gt;</span></span>
<span class="line"><span>git commit -m &quot;Rename file&quot;</span></span></code></pre></div><hr><h3 id="_5-分支操作" tabindex="-1"><strong>5. 分支操作</strong> <a class="header-anchor" href="#_5-分支操作" aria-label="Permalink to &quot;**5. 分支操作**&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 查看分支</span></span>
<span class="line"><span>git branch</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 创建新分支</span></span>
<span class="line"><span>git branch &lt;branch_name&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 切换分支</span></span>
<span class="line"><span>git checkout &lt;branch_name&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 创建并切换到新分支</span></span>
<span class="line"><span>git checkout -b &lt;branch_name&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 合并分支</span></span>
<span class="line"><span>git merge &lt;branch_name&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 删除分支</span></span>
<span class="line"><span>git branch -d &lt;branch_name&gt;</span></span>
<span class="line"><span>git branch -D &lt;branch_name&gt;  # 强制删除</span></span></code></pre></div><hr><h3 id="_6-远程操作" tabindex="-1"><strong>6. 远程操作</strong> <a class="header-anchor" href="#_6-远程操作" aria-label="Permalink to &quot;**6. 远程操作**&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 查看远程仓库</span></span>
<span class="line"><span>git remote -v</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 添加远程仓库</span></span>
<span class="line"><span>git remote add origin &lt;repository_url&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 推送到远程仓库</span></span>
<span class="line"><span>git push origin &lt;branch_name&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 拉取远程分支代码</span></span>
<span class="line"><span>git pull origin &lt;branch_name&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 克隆远程仓库</span></span>
<span class="line"><span>git clone &lt;repository_url&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 删除远程仓库</span></span>
<span class="line"><span>git remote remove &lt;remote_name&gt;</span></span></code></pre></div><hr><h3 id="_7-标签操作" tabindex="-1"><strong>7. 标签操作</strong> <a class="header-anchor" href="#_7-标签操作" aria-label="Permalink to &quot;**7. 标签操作**&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 创建标签</span></span>
<span class="line"><span>git tag &lt;tag_name&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 查看标签</span></span>
<span class="line"><span>git tag</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 删除标签</span></span>
<span class="line"><span>git tag -d &lt;tag_name&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 推送标签到远程</span></span>
<span class="line"><span>git push origin &lt;tag_name&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 推送所有标签到远程</span></span>
<span class="line"><span>git push origin --tags</span></span></code></pre></div><hr><h3 id="_8-撤销操作" tabindex="-1"><strong>8. 撤销操作</strong> <a class="header-anchor" href="#_8-撤销操作" aria-label="Permalink to &quot;**8. 撤销操作**&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 撤销工作区的修改</span></span>
<span class="line"><span>git checkout -- &lt;file&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 撤销暂存区的文件</span></span>
<span class="line"><span>git reset HEAD &lt;file&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 撤销最近一次提交（保留代码修改）</span></span>
<span class="line"><span>git reset --soft HEAD~1</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 撤销最近一次提交（删除代码修改）</span></span>
<span class="line"><span>git reset --hard HEAD~1</span></span></code></pre></div><hr><h3 id="_9-查看和对比" tabindex="-1"><strong>9. 查看和对比</strong> <a class="header-anchor" href="#_9-查看和对比" aria-label="Permalink to &quot;**9. 查看和对比**&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 查看文件改动</span></span>
<span class="line"><span>git diff</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 查看暂存区和工作区的区别</span></span>
<span class="line"><span>git diff --cached</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 对比两个分支</span></span>
<span class="line"><span>git diff &lt;branch1&gt; &lt;branch2&gt;</span></span></code></pre></div><hr><h3 id="_10-stash-保存临时工作" tabindex="-1"><strong>10. Stash（保存临时工作）</strong> <a class="header-anchor" href="#_10-stash-保存临时工作" aria-label="Permalink to &quot;**10. Stash（保存临时工作）**&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 保存当前工作进度</span></span>
<span class="line"><span>git stash</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 查看存储的进度</span></span>
<span class="line"><span>git stash list</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 恢复最近一次 stash</span></span>
<span class="line"><span>git stash apply</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 删除最近一次 stash</span></span>
<span class="line"><span>git stash drop</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 恢复并删除最近一次 stash</span></span>
<span class="line"><span>git stash pop</span></span></code></pre></div><hr><h3 id="_11-submodule-子模块管理" tabindex="-1"><strong>11. Submodule（子模块管理）</strong> <a class="header-anchor" href="#_11-submodule-子模块管理" aria-label="Permalink to &quot;**11. Submodule（子模块管理）**&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 添加子模块</span></span>
<span class="line"><span>git submodule add &lt;repository_url&gt; &lt;path&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 初始化子模块</span></span>
<span class="line"><span>git submodule init</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 更新子模块</span></span>
<span class="line"><span>git submodule update</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 删除子模块</span></span>
<span class="line"><span>git rm --cached &lt;path&gt;</span></span></code></pre></div><hr><h3 id="_12-rebase-变基" tabindex="-1"><strong>12. Rebase（变基）</strong> <a class="header-anchor" href="#_12-rebase-变基" aria-label="Permalink to &quot;**12. Rebase（变基）**&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 将当前分支变基到目标分支</span></span>
<span class="line"><span>git rebase &lt;branch_name&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 解决冲突后继续变基</span></span>
<span class="line"><span>git rebase --continue</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 取消变基</span></span>
<span class="line"><span>git rebase --abort</span></span></code></pre></div><hr><h3 id="_13-tag-操作" tabindex="-1"><strong>13. Tag 操作</strong> <a class="header-anchor" href="#_13-tag-操作" aria-label="Permalink to &quot;**13. Tag 操作**&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 创建轻量标签</span></span>
<span class="line"><span>git tag &lt;tag_name&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 创建附注标签</span></span>
<span class="line"><span>git tag -a &lt;tag_name&gt; -m &quot;Message&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 查看所有标签</span></span>
<span class="line"><span>git tag</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 删除标签</span></span>
<span class="line"><span>git tag -d &lt;tag_name&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 推送标签到远程</span></span>
<span class="line"><span>git push origin &lt;tag_name&gt;</span></span>
<span class="line"><span>git push origin --tags  # 推送所有标签</span></span></code></pre></div><hr><h3 id="_14-清理工作区" tabindex="-1"><strong>14. 清理工作区</strong> <a class="header-anchor" href="#_14-清理工作区" aria-label="Permalink to &quot;**14. 清理工作区**&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 清理未跟踪的文件</span></span>
<span class="line"><span>git clean -f</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 清理未跟踪的文件和目录</span></span>
<span class="line"><span>git clean -fd</span></span></code></pre></div><hr><h3 id="_15-高级操作" tabindex="-1"><strong>15. 高级操作</strong> <a class="header-anchor" href="#_15-高级操作" aria-label="Permalink to &quot;**15. 高级操作**&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 修改最后一次提交信息</span></span>
<span class="line"><span>git commit --amend -m &quot;New message&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 强制推送</span></span>
<span class="line"><span>git push origin &lt;branch_name&gt; --force</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 查看分支的提交图</span></span>
<span class="line"><span>git log --oneline --graph --all</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 交互式 rebase（压缩提交）</span></span>
<span class="line"><span>git rebase -i HEAD~n</span></span></code></pre></div><hr><h3 id="常见场景命令" tabindex="-1"><strong>常见场景命令</strong> <a class="header-anchor" href="#常见场景命令" aria-label="Permalink to &quot;**常见场景命令**&quot;">​</a></h3><ol><li><p><strong>撤回最近的提交但保留改动</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git reset --soft HEAD~1</span></span></code></pre></div></li><li><p><strong>删除最近的提交及改动</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git reset --hard HEAD~1</span></span></code></pre></div></li><li><p><strong>强制拉取并覆盖本地改动</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git fetch --all</span></span>
<span class="line"><span>git reset --hard origin/&lt;branch_name&gt;</span></span>
<span class="line"><span>git pull</span></span></code></pre></div></li><li><p><strong>清理无用分支</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git fetch --prune</span></span></code></pre></div></li></ol>`,47)]))}const u=a(l,[["render",i]]);export{d as __pageData,u as default};
