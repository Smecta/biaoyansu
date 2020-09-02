### git 使用方法 速学

#### 认识git
本地
工作区  缓冲区  归档区 

远程

git init 创建工作区

git add . 添加到缓冲区  可添加一个或者多个

git commit -m "更新说明" 添加到归档区 可对缓冲区一次性提交到归档区

git push origin master  推送到远程仓库地址 master分支


git status 查看状态 
    红色 代表没有添加缓存区
    绿色 代表没有添加到归档区

git log 查看日志

git reflog 查看操作日志记录

回滚操作：

git reset --hard 归档区缓存区和工作区全部回滚  哈希值
          --soft 对归档区进行回滚 哈希值
          --mixed 对归档区和缓冲区进行了回滚 哈希值

对特定的某次提交进行扣除去掉

git revert 哈希值 
    进入编辑页面 为了确认提交的名字是什么 直接退出：wq 


以上为单一分支 master 分支进行操作 单一分支的弊端无法针对多人开发 push 改动内容 
为了避免push冲突，建议多分支开发 最终合并到主干分支

创建分支

本地

git branch -v 查看当前所在分支

git checkout -b b1 创建b1分支，进入b1分支

合并master分支 
    切换分支 
        git checkout master 不用添加-b 因为已经存在master分支
    合并分支 
        git merge b1 将b1分支合并到master分支(将另一个分支合并当前分支)

远程仓库
    同步远程
    git pull 拉取远程仓库最新的版本并将远端同名分支合并到本地分支
    相当于 git fetch git merge 两个命令组合
    origin 默认拉取远程仓库，除非更改，否则不用添加


添加SSH免密登录
打开github的 setting 找到   SSH keys and GPG keys 
new ssh key 添加
