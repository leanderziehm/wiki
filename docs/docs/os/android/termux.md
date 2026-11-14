
# Termux

## Setup: 

**install:**
latest stable apk from here:
https://github.com/termux/termux-app/releases

**vim:**
```
pkg install vim
```
**git:**
```
pkg install git
```


**storage:**
```
termux-setup-storage
```
**ssh:**
```
pkg install openssh
```



**proot-distro:**

```sh
pkg install proot-distro
```

```
proot-distro install fedora
```
```
proot-distro login fedora --isolated
```

```sh
proot-distro login fedora
```

```makefile
run:
        proot-distro login fedora
```

cd /data/data/com.termux/files/usr/var/lib/proot-distro/containers/fedora/rootfs/root
```
cd "$PREFIX/var/lib/proot-distro/containers/fedora/rootfs/root"
```
cd /data/data/com.termux/files/home/storage/shared/Documents/termux-files
```
cd "$HOME/storage/shared/Documents/termux-files"
```

```
cd /storage/self/primary/Documents/termux-files/  
```


```
run:
        proot-distro login fedora --isolated
        
w wiki:
        cd storage/shared/Documents/wiki/ && git add . && git commit - "+" && git push

y yt:
        proot-distro login fedora --isolated -- bash -c 'export PATH="/root/.local/bin:$$PATH" && cd yt-downloader-web-app && make u'
ls:
        pproot-distro login fedora --isolated -- ls
```


## SSH


**SSH into phone**

```sh
pkg install openssh

username
whoami

local ip
ifconfig

set new password
passwd

sshd -D -p 8822 -d
```

#### from computer on same network

```sh
ssh -p 8822 username@localip

ssh-keygen -t ed25519 -f \~/.ssh/phone-erl -N "" && ssh-copy-id -i \~/.ssh/phone-erl.pub phone-erl
```

### files

```sh
termux-setup-storage

cd \~/storage

ncdu\
find \~/storage -type f -exec du -h {} + | sort -hr | head -n 20

TOTAL=$(wc -l < music\_files.txt)

pv -l -s "$TOTAL" music\_files.txt | zip -@ music\_collection.zip

cd \~/storage/music
```

```sh
find . -type f \( -iname "*.mp3" -o -iname "*.flac" -o -iname "*.ogg" -o -iname "*.m4a" -o -iname "*.wav" \) > music_files.txt
```


## in termux

```
pkg install openssh
sshd
ifconfig
whoami
passwd
```

## laptop

```
ssh -p 8022 [u0\_a287@192.168.43.108](mailto:u0_a287@192.168.43.108) Tablet
ssh -p 8022 [u0\_a164@192.168.43.116](mailto:u0_a164@192.168.43.116) Redmi 7
ssh -p 8022 [u0\_a215@192.168.43.215](mailto:u0_a215@192.168.43.215) Redmi 13c
```

