# git stash案例

## 1. **保存功能 A 的修改到 stash**

假设你已经完成了功能 A 的部分修改，并且希望暂存这些修改：

```bash
git add <功能A相关的文件>
git stash push -m "feat:功能A的描述"
```

## 2. **保存功能 B 的修改到 stash**

然后，你可以进行功能 B 的修改，并将这些修改也暂存起来：

```bash
git add <功能B相关的文件>
git stash push -m "feat:功能B的描述"
```

重复这个步骤，直到你将所有需要的功能都缓存到 stash 中。

## 3. **保存功能 C 的修改到 stash**

然后，你可以进行功能 C 的修改，并将这些修改也暂存起来：

```bash
// 只添加功能C相关的文件到暂存区，其他功能的文件不添加
git add <功能C相关的文件>

// 只缓存暂存区中的更改，而不缓存工作区中未暂存的更改
git stash push -m "feat:功能C的描述" --staged
```

重复这个步骤，直到你将所有需要的功能都缓存到 stash 中

## 4. **切换到新的分支**

当你准备好在新的分支上提交这些功能时，首先切换到新的分支：

```bash
git checkout <分支名>  切换到已有的分支

git checkout -b <新分支名>  创建并切换到一个新分支
```

## 5. **恢复并提交功能 A 的修改**

你可以按照功能分别恢复并提交之前缓存的内容：

```bash
git stash list  # 查看 stash 列表，找到功能 A 对应的 stash
git stash apply stash@{n}  # 使用对应的编号恢复功能 A 的修改
git commit -m "feat:功能A的描述"
```

## 6. **恢复并提交功能 B 的修改**

然后恢复并提交功能 B：

```bash
git stash list  # 查看 stash 列表，找到功能 B 对应的 stash
git stash apply stash@{n}  # 使用对应的编号恢复功能 B 的修改
git commit -m "feat:功能B的描述"
```

重复这个步骤，直到你将所有缓存的功能都恢复并提交到新的分支。

## 7. **清理 stash**

最后，当确认所有功能都已经成功提交后，可以清理 stash：

```bash
git stash clear
```

通过这种方式，你可以有效地将不同功能的修改缓存起来，并在需要时将它们分别提交到新的分支中。
