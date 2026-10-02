
input: 
git@github.com:leanderziehm/docusaurus_obsidian.git

cd ~/.ssh/github
ssh-keygen 
filname: docusaurus_obsidian

cd ~/dev/
git clone 
```
GIT_SSH_COMMAND='ssh -i ~/.ssh/github/docusaurus_obsidian -o IdentitiesOnly=yes' git clone git@github.com:leanderziehm/docusaurus_obsidian.git
```

cd project folder
```
git config core.sshCommand "ssh -i ~/.ssh/github/docusaurus_obsidian -o IdentitiesOnly=yes"
```




