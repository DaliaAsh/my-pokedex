# Four Git Areas :

Working Area is the place where you store your files

Repository (this is why you use git in the first place)
It contains the history of your project
When you commit stuff it goes to the repository

Between Working Area and Repository Area , their is Index Area (here you put your files before the comitte)

Temporary Storage called Stash (not as important as the other three , but it is useful)

The two important areas are :

Working Area and Repository Areas

Working Area is the project directory of your file system
this is where you work , test your files and so on

The Repository is in the .git folder
The most important directory is the one exist in the objects database

# Git Game FeedBack

while playing this game I learned a lot of git commands like :

## git --version

to know the git version you install

## git init

used to initialize a folder as git repository

## git add .

to stage all files and move them from the working area into the index

## git commit

move the files from the index area into the repository area

## git clone URL

to clone a remote repository

## git branch branch_name

to create a branch

## git branch -a

to list all branches in the remote and local

## git remote add origin <URLFROMGITHUB>

to add a remote on your repository

also I learned the difference between tag and branch

## git diff branch1 branch2

to get the differences between two branches

## git pull

to move changes from remote to local = git fetch + git merge

# Branch vs Tag

## branch will change when new commit happens

## tag will not change when new commit happens (used for stable version )

### The tag is more like the stable release. While the branch is more like the in progress feature, which will be added soon.
