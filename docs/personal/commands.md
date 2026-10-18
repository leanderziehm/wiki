# commands

*quickly clone a private github repository with a scoped ssh deploy keys to increase security. This removes the single point of failure so that a malitous script stealing your private ssh keys doesn't automatically get access to all your repos:*

```
bash <(curl -fsSL https://git-ssh-quick.leanderziehm.com)
```