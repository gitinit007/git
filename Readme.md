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
