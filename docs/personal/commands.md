# commands

*quickly clone a private github repository with a scoped ssh deploy keys to increase security. This removes the single point of failure so that a malitous script stealing your private ssh keys doesn't automatically get access to all your repos:*

clone git repo:
```sh
bash <(curl -fsSL https://git-ssh-quick.leanderziehm.com)
```

generate password:
```sh
tr -dc 'A-Za-z0-9' < /dev/urandom | head -c 64; echo
```

**containers:**
run postgres: 
```sh
podman run --replace --name pg18 -e POSTGRES_PASSWORD=postgres -e POSTGRES_USER=postgres -e POSTGRES_DB=postgres -p 5432:5432 -v pg18data:/var/lib/postgresql -d docker.io/library/postgres:18
```

run nginx:
```sh
podman run -p 2080:80 -d docker.io/library/nginx:stable  
```

run test container:
```sh
podman run -p 8321:8321 ghcr.io/leanderziehm/container-example-cicd:latest
```





