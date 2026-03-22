---
title: GIT
pubDate: 2026-03-10
description: 版本控制的好工具
tags: [git,dev]
updatedDate: 2026-03-09
---

## Setting

```terminal
git config --global user.name ”your_name”      //設定用戶名
git config --global user.email your_email      //設定用戶email
git config --global credential.helper store    //記憶上面的設定
git config --global --list                     //顯示剛才的設定
```
`--global` 對所有==倉庫==生效  
`--system` 對所有==用戶==生效
## Repository

```terminal
git init      //創建倉庫
git status    //查看倉庫狀態
git add       //添加到暫存區
git log       //查看歷史提交紀錄
git commit    //提交到倉庫
git ls-files  //查看暫存區中的文件
git rm        //移除暫存區與工作區的文件
```
### Git log
`--online`    查看==簡潔的==提交紀錄
### Git commit
`-m`    後面加上指定的commit名稱，如果不加 `-m` 會進入文本編輯器叫你加  
`-a` 一次完成添==加暫存跟提交==   兩個動作
## Version

```terminal!
git reset //回退版本
git diff  //比較版本差異
```
### git reset
`--soft`  
`--hard`  
`--mixed`  
### git diff
 預設比較工作區與暫存區

1. `--cached`    比較暫存區與版本庫
2. `commitid_1 commitid_2`    比較兩個提交版本差異
3. `HEAD`    代表當前分支的==最新提交==，預設比較工作區
   - `HEAD~`    or    `HEAD^`    代表==上一個==提交節點
   - `HEAD~n`    當前最新節點的前n個節點
   - `commit_id HEAD`    比較commit_id版本跟當前分支最新提交節點的差異
   - `HEAD~3 HEAD` 顯示三個版本理的所有差異，後面加上文件名就會直接顯示==該文件的差異內容==

## Branch

```terminal
git branch     //分支
git switch     //切換分支
git checkout   //
git restore
git merge
git rebase 
```
### git branch  

1. 預設功能查看目前分支
2. `git branch branch_name` 創建分支
3. 
  
### switch  

`git switch branch_name`切換分支

### git checkout  

1. 雖然也可以切換分支但是會跟另一個功能卡到

## Github

```
git remote add origin "github_ssh"
git push --set-upstream origin main
ssh-keygen -t ed25519 -C "your_email@example.com"
cat ~/.ssh/id_ed25519.pub
```