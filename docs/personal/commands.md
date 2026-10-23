# commands

*quickly clone a private github repository with a scoped ssh deploy keys to increase security. This removes the single point of failure so that a malitous script stealing your private ssh keys doesn't automatically get access to all your repos:*

```
bash <(curl -fsSL https://git-ssh-quick.leanderziehm.com)
```

```
podman run --replace --name pg18 -e POSTGRES_PASSWORD=postgres -e POSTGRES_USER=postgres -e POSTGRES_DB=postgres -p 5432:5432 -v pg18data:/var/lib/postgresql -d docker.io/library/postgres:18
```

```
podman run -p 8321:8321 ghcr.io/leanderziehm/container-example-cicd:latest
```


sudo echo 'user:100000:65536' >> /etc/subuid
sudo echo 'user:100000:65536' >> /etc/subgid