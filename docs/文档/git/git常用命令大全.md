### **1. 基本配置**

```
# 配置用户名和邮箱（提交时的标识）
git config --global user.name "YourName"
git config --global user.email "YourEmail@example.com"

# 查看当前 Git 配置信息
git config --list

# 配置默认主分支名称为 main（可选）
git config --global init.defaultBranch main
```

---

### **2. 仓库初始化**

```
# 初始化仓库
git init

# 克隆远程仓库
git clone <repository_url>
```

---

### **3. 状态查看**

```
# 查看当前工作目录的状态
git status

# 查看当前分支提交历史
git log

# 查看某个文件的历史改动记录
git log -p <file>
```

---

### **4. 文件操作**

```
# 添加文件到暂存区
git add <file>
git add .  # 添加所有文件

# 提交到本地仓库
git commit -m "Commit message"

# 添加并提交一步完成
git commit -am "Commit message"

# 删除文件并提交
git rm <file>
git commit -m "Remove file"

# 重命名文件并提交
git mv <old_name> <new_name>
git commit -m "Rename file"
```

---

### **5. 分支操作**

```
# 查看分支
git branch

# 创建新分支
git branch <branch_name>

# 切换分支
git checkout <branch_name>

# 创建并切换到新分支
git checkout -b <branch_name>

# 合并分支
git merge <branch_name>

# 删除分支
git branch -d <branch_name>
git branch -D <branch_name>  # 强制删除
```

---

### **6. 远程操作**

```
# 查看远程仓库
git remote -v

# 添加远程仓库
git remote add origin <repository_url>

# 推送到远程仓库
git push origin <branch_name>

# 拉取远程分支代码
git pull origin <branch_name>

# 克隆远程仓库
git clone <repository_url>

# 删除远程仓库
git remote remove <remote_name>
```

---

### **7. 标签操作**

```
# 创建标签
git tag <tag_name>

# 查看标签
git tag

# 删除标签
git tag -d <tag_name>

# 推送标签到远程
git push origin <tag_name>

# 推送所有标签到远程
git push origin --tags
```

---

### **8. 撤销操作**

```
# 撤销工作区的修改
git checkout -- <file>

# 撤销暂存区的文件
git reset HEAD <file>

# 撤销最近一次提交（保留代码修改）
git reset --soft HEAD~1

# 撤销最近一次提交（删除代码修改）
git reset --hard HEAD~1
```

---

### **9. 查看和对比**

```
# 查看文件改动
git diff

# 查看暂存区和工作区的区别
git diff --cached

# 对比两个分支
git diff <branch1> <branch2>
```

---

### **10. Stash（保存临时工作）**

```
# 保存当前工作进度
git stash

# 查看存储的进度
git stash list

# 恢复最近一次 stash
git stash apply

# 删除最近一次 stash
git stash drop

# 恢复并删除最近一次 stash
git stash pop
```

---

### **11. Submodule（子模块管理）**

```
# 添加子模块
git submodule add <repository_url> <path>

# 初始化子模块
git submodule init

# 更新子模块
git submodule update

# 删除子模块
git rm --cached <path>
```

---

### **12. Rebase（变基）**

```
# 将当前分支变基到目标分支
git rebase <branch_name>

# 解决冲突后继续变基
git rebase --continue

# 取消变基
git rebase --abort
```

---

### **13. Tag 操作**

```
# 创建轻量标签
git tag <tag_name>

# 创建附注标签
git tag -a <tag_name> -m "Message"

# 查看所有标签
git tag

# 删除标签
git tag -d <tag_name>

# 推送标签到远程
git push origin <tag_name>
git push origin --tags  # 推送所有标签
```

---

### **14. 清理工作区**

```
# 清理未跟踪的文件
git clean -f

# 清理未跟踪的文件和目录
git clean -fd
```

---

### **15. 高级操作**

```
# 修改最后一次提交信息
git commit --amend -m "New message"

# 强制推送
git push origin <branch_name> --force

# 查看分支的提交图
git log --oneline --graph --all

# 交互式 rebase（压缩提交）
git rebase -i HEAD~n
```

---

### **常见场景命令**

1. **撤回最近的提交但保留改动**：

   ```
   git reset --soft HEAD~1
   ```

2. **删除最近的提交及改动**：

   ```
   git reset --hard HEAD~1
   ```

3. **强制拉取并覆盖本地改动**：

   ```
   git fetch --all
   git reset --hard origin/<branch_name>
   git pull
   ```

4. **清理无用分支**：

   ```
   git fetch --prune
   ```
