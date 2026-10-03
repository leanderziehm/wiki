





#### Folder Structure
```
/
├── bin
├── boot
├── dev
├── etc
├── home
├── lib
├── media
├── mnt
├── opt
├── proc
├── root
├── run
├── sbin
├── srv
├── sys
├── tmp
├── usr
└── var
```

| Directory        | Purpose                                                      |
| ---------------- | ------------------------------------------------------------ |
| `/`              | Root of the entire filesystem                                |
| `/bin`           | Essential user commands (e.g., `ls`, `cp`, `cat`)            |
| `/sbin`          | System administration commands                               |
| `/boot`          | Bootloader files and Linux kernel                            |
| `/dev`           | Device files (disks, terminals, USB devices)                 |
| `/etc`           | System-wide configuration files                              |
| `/home`          | User home directories (`/home/alice`)                        |
| `/root`          | Home directory of the root user                              |
| `/lib`, `/lib64` | Shared libraries needed by programs                          |
| `/media`         | Mount points for removable media (USB drives, CDs)           |
| `/mnt`           | Temporary mount points                                       |
| `/opt`           | Optional third-party software                                |
| `/proc`          | Virtual filesystem containing process and kernel information |
| `/run`           | Runtime data for processes                                   |
| `/srv`           | Data served by system services (web, FTP, etc.)              |
| `/sys`           | Kernel and hardware information                              |
| `/tmp`           | Temporary files                                              |
| `/usr`           | User programs, libraries, documentation                      |
| `/var`           | Variable data such as logs, caches, mail, databases          |

`/etc/group`  stores all groups and ids of linux and which users are part them\
`/etc/sudoers` stores groups that have sudo privilages like `/etc/sudoers.d/` &#x20;

`/etc/passwd` # User account information\
`/var/log` # System log files\
`/usr/bin` # Most executable programs


---

## Linux Install Packages

##### Flathub

```
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
```



##### Debian

update your system and packages:

```
sudo apt update && sudo apt upgrade -y
```

you can install the packages on debian by running:\
`sudo apt install put-packagename-here`

| Package               | Space Needed |
| --------------------- | ------------ |
| podman-compose        | 349 kB       |
| python3-pip           |              |
| arp-scan              | 17.8MB       |
| git-filter-repo       |              |
| mariadb-client-compat | 83.1 MB      |
| htop                  | 434 kB       |

| Package            | Approx. Size Installed | Dependencies (approx.) | Notes                    |
| ------------------ | ---------------------- | ---------------------- | ------------------------ |
| curl               | 12.6 MB                | 19+                    | CLI HTTP tool            |
| git                | 132 MB                 | 50+                    | Includes perl, ssh, etc. |
| python3            | 22.8 MB                | —                      | Base interpreter         |
| tmux               | 2 MB                   | —                      | Terminal multiplexer     |
| vim                | 45.9 MB                | 5                      | Includes runtime + xxd   |
| i3 (desktop)       | 429 MB                 | —                      | Window manager setup     |
| chromium (desktop) | 538 MB                 | —                      | Full browser             |
| xinit (desktop)    | 36.1 MB                | —                      | X session starter        |
| sudo               | 6.8 MB                 | —                      | Privilege escalation     |
| iputils-ping       | 2.8 MB                 | 3                      | Includes libidn2, etc.   |
| curl               | 21 MB                  |                        |                          |
|                    |                        |                        |                          |

| Package |
| ------- |
| mininet |
|         |
|         |

##### RHEL
