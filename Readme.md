#Git Notes

###INIT

git init - create a new repository from existing code

git clone - create a new repository from existing code

###ADD

git add - add a file to the staging area

git add . - add all files to the staging area

git add -A - add all files to the staging area

###COMMIT

git commit -m "message" - commit changes to the local repository

git commit -a -m "message" - add and commit changes to the local repository

###PUSH

git push - push changes to the remote repository

###PULL

git pull - pull changes from the remote repository

###BRANCH

git branch - list all branches

git branch branchname - create a new branch

git checkout branchname - switch to a branch

git checkout -b branchname - create and switch to a branch

git switch branchname - switch to a branch

git switch -c branchname - create and switch to a branch

git branch -d branchname - delete a branch

git branch -D branchname - force delete a branch

###MERGE

git merge branchname - merge a branch into the active branch

###STATUS

git status - list the status of all files in the repository

###LOG

git log - list the commit history for the current branch

git log --oneline - list the commit history for the current branch, one commit per line

git log --oneline --graph - list the commit history for the current branch, one commit per line, with a graph showing the commits

###DIFF

git diff - show the differences between the working directory and the staging area

git diff --staged - show the differences between the staging area and the local repository

git diff branchname - show the differences between the current branch and the specified branch

###STASH

git stash - stash changes from the working directory

git stash list - list all stashed changesets

git stash pop - apply the most recently stashed changeset

git stash apply stash@{n} - apply the nth stashed changeset

git stash drop stash@{n} - delete the nth stashed changeset

git stash clear - delete all stashed changesets

###Fork

fork - create a copy of a repository on GitHub directly to your GitHub account from another user's repository.

###Rebase

git rebase - rebase the current branch onto the specified branch
git rebase can be used in two way

1. as an alternative to git merge
2. as a clean up tool

git rebase -i can be used to clean up the commit history

###tags

git tag - list all tags

git tag -l "pattern" - list all tags matching the specified pattern

git tag -d tagname - delete a tag

git tag tagname - create a tag

git tag -a tagname -m "message" - create an annotated tag

git tag -a tagname commitid -m "message" - create an annotated tag for a specific commit

git show tagname - show the tag data

git push origin tagname - push a tag to the remote repository

git push origin --tags - push all tags to the remote repository

git push origin :refs/tags/tagname - delete a tag from the remote repository

Hash Functions

git hash-object - compute object ID and optionally creates a blob from a file

git hash-object -w filename - compute object ID and optionally creates a blob from a file

git cat-file -p hash - display the contents of a blob, tree or commit object

git cat-file -t hash - determine the type of an object

git cat-file -s hash - print the object size

git cat-file -e hash - determine if the object exists

git cat-file -e hash -t -s - determine if the object exists and print its type and size if it does

git cat-file -e hash -t -s -w --pretty=oneline --abbrev-commit --decorate --all --graph - determine if the object exists and print its type and size if it does

###Reflog

git reflog - list all commits that were made in the local repository

git reflog -n - list the last n commits that were made in the local repository

git reflog show branchname - list all commits that were made in the specified branch

git reflog show branchname -n - list the last n commits that were made in the specified branch

git reflog show branchname -n --pretty=oneline --abbrev-commit --decorate --all --graph - list the last n commits that were made in the specified branch

git reflog delete branchname - delete the specified branch

###Aliases

git config --global alias.aliasname "command" - create an alias for a git command
