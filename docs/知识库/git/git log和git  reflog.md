# git log 和 git reflog

## git log

### 1. 查看最新的合并提交

使用 `git log` 命令结合 `-n 1` 参数来仅显示最新的合并记录：

```bash
git log -n 1 --merges
```

### 2. 显示简洁的合并记录

如果你只想查看最新的合并记录的简洁信息，可以使用：

```bash
git log -n 1 --merges --oneline
```

### 3. 图形化查看

如果你希望以图形化的形式查看最新的合并记录，可以使用：

```bash
git log -n 1 --merges --graph
```

## git reflog

#### 1. 查看所有引用日志

```bash
git reflog
```

这个命令会显示所有的 HEAD 指针移动记录，包括 `git reset`、`git checkout`、`git commit` 等所有操作。

#### 2. 查看特定分支的引用日志

```bash
git reflog show <branch>
```

例如：

```bash
git reflog show master
```

查看 `master` 分支的引用日志。

#### 3. 使用 `reflog` 恢复误删的提交

如果你删除了某些提交，使用 `git reflog` 可以找到之前的提交哈希值，然后用 `git reset` 或 `git checkout` 恢复。

例如：

```bash
git reset --hard <commit_hash>
```

`git reflog` 记录了所有 HEAD 的变动，所以即使你进行了误操作，仍然可以通过它找到提交的历史记录并进行恢复。
