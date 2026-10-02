
# Podman


## podman restarts

```
loginctl enable-linger $USER
systemctl --user enable --now podman-restart.service
podman run -d -p 8321:8321 --restart=always ghcr.io/leanderziehm/container-example-cicd:latest
```

## container dev setup:

```
podman run --rm -it quay.io/fedora/fedora:latest bash
```

```
docker pull ghcr.io/leanderziehm/dev-environment-fedora:latest
```


or add this to .bashrc

```
work() {
    local name="work-${1:-default}"
    local image="ghcr.io/leanderziehm/dev-environment-fedora:latest"

    if ! podman container exists "$name"; then
        podman run -it --name "$name" "$image"
    else
        podman start -ai "$name"
    fi
}
```





# Conters to try:

| category | app          | image                      | downloads | stars | purpose                                                |
| -------- | ------------ | -------------------------- | --------- | ----- | ------------------------------------------------------ |
| browser  | chrome       | selenium/standalone-chrome | 500M+     | 638   | browser automation for testing                         |
| browser  | chrome       | browserless/chrome         | 100M+     | 256   | scraping, pdf, screenshot, playwright, browser control |
| browser  | chrome       | kasmweb/chrome:1.8.0-edge  | 10M+      | 179   | interactive desktop                                    |
|          |              |                            |           |       |                                                        |
|          |              |                            |           |       |                                                        |
| dashboar | heimdall     | linuxserver/heimdall       | 500M+     | 1.2K  |                                                        |
| habits   | beaverhabits | daya0576/beaverhabits      | 500K+     | 1     |                                                        |








vscode in docker, code server.
obsidian
linux over http 
reverse proxy with logging and automatic ip ban


bookstack?