# Linux


create user:

```
sudo useradd --create-home --shell /bin/bash newUsernameHere
```

*useradd is the standard cli way to create a user. there is also adduser but it behaves differently on different linux os. on debian and ubuntu it is interactive in redhat distoros its symlinked to useradd and archlinux doesnt have it.*

add password to user:
```
sudo passwd newUsernameHere
```

add sudo (RHEL/CentOS/Fedora):  
```
sudo usermod -aG wheel newUsernameHere
```
*on Ubuntu/Debian the group is called sudo*



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





### linux user software


**image view:**
sxiv / nsxiv or feh + CLI scripts:



## Vpn


wireguard


```
sudo dnf install wireguard-tools
```


```
sudo modprobe iptable_nat
sudo modprobe ip6table_nat
```

config:
delete dns
AllowedIPs = 10.8.0.0/24
fedora.local.leanderziehm.com

```
sudo wg-quick up ~/Downloads/testwg/fedora_toolbox.conf
sudo wg-quick down ~/Downloads/testwg/fedora_toolbox.conf
```


# Linux Users, Groups, Permissions

## Add user:



#### Untrusted User

```
sudo adduser llm
sudo passwd llm
```











#### Secret User

```
sudo useradd -m -s /bin/bash secret_holder
sudo passwd secret_holder
```

```
ls -ld /home/secret_holder
```



```bash
useradd -m -G wheel -s /bin/bash username
passwd username
```

## Give sudo permissions:

make sure you have sudo installed and if it doest work try:

```bash
EDITOR=vim visudo
```

add user to group:

```
sudo usermod -aG google-sudoers username
```

***



## Switch user

```
sudo -iu secret_holder
```

root

```
sudo -i
```

## Check Loggedin Users:

```
who
```

```
w
```









## Notify on Sudo use.



```
sudo apt install auditd 
```

```
sudo systemctl enable --now auditd
sudo systemctl status auditd
```



```
id llm
```



```
sudo vim /etc/audit/rules.d/llm-sudo.rules
```

```
-a always,exit -F arch=b64 -S execve -F auid=1002 -F path=/usr/bin/sudo -k llm-sudo
```

```
sudo augenrules --load
```









sudo useradd -m llmaicode\
sudo passwd llmaicode

su - llmaicode\
su - alice

https://www.debian.org/distrib/

authorized\_keys

i am on debian and i am just about to give someone i don't trust access to my computer with user privilges how to make it so that i can see all actions they do, accept or reject their sudo request per notification have a snapshot before they got access to role back and see diff what they added after snapshot for audit

i guess qemu vm with kvm i will do to have it more isolated and code as infra or setup reproducable and the stuff you say just give me all commands i need to do to install and setup and thne makefile and other setups

***

### 1) Users

#### See users

* `whoami` → shows current user
* `id` → shows user ID (UID), groups, and group IDs
* `cat /etc/passwd` → list all system users

#### Create / modify users (admin required)

* `sudo useradd username` → create user
* `sudo passwd username` → set password
* `sudo usermod -aG groupname username` → add user to group
* `sudo userdel username` → delete user

***

### 2) Groups

#### View groups

* `groups` → groups of current user
* `groups username` → groups of another user
* `cat /etc/group` → all groups

#### Manage groups

* `sudo groupadd groupname` → create group
* `sudo groupdel groupname` → delete group
* `sudo usermod -aG groupname username` → add user to group

***

### 3) Permissions (core concept)

Each file has:

* **Owner (user)**
* **Group**
* **Others**

Check permissions:

* `ls -l`

Example output:

```
-rwxr-xr--
```

Meaning:

* `r` = read
* `w` = write
* `x` = execute

Breakdown:

* `rwx` → owner
* `r-x` → group
* `r--` → others

***

### 4) Changing permissions

* `chmod 755 file`
* `chmod 644 file`

Meaning:

* 7 = rwx
* 6 = rw-
* 5 = r-x
* 4 = r--

***

### 5) Changing ownership

* `sudo chown user file`
* `sudo chown user:group file`
* `sudo chgrp group file`

***

### 6) extras

* `umask` → default permission mask
* `sudo` → run commands as admin
* `getent passwd` → query system user database cleanly

***

* Users = identity
* Groups = shared access buckets
* Permissions = what each bucket can do to files


## Linux Process Memory

```
ps aux | grep app_name
```



```
gdb -p 21927
```

<br>



# Linux Base



## Environment Variables

```
set -a && . ./.env && set +a
```



## Generate password:

```
tr -dc 'A-Za-z0-9' < /dev/urandom | head -c 64; echo
```

Others:\
openssl rand -base64 18\
python3 -c "import secrets; print(secrets.token\_urlsafe(24))"\
​\
​

## Topics&#x20;

gpg vs openssl\
GPG (GNU Privacy Guard)OpenSSL

KeePassXC

```
sudo apt update && sudo apt install keepassxc
```

<br>

## Clipboard:

```
wl-clipboard < file.txt
```



## Bash better history search

```
cat << 'EOF' >> ~/.inputrc
"\e[A": history-search-backward
"\e[B": history-search-forward
EOF
bind -f ~/.inputrc
```





## tools:

tmux

vim

ranger

find

ls

grep

?mc?

{% content-ref url="../../08-terminal-cli-tools/tmux.md" %}
[tmux.md](../../08-terminal-cli-tools/tmux.md)
{% endcontent-ref %}



## Linux Virtualization

```
sudo cp debian-13-nocloud-amd64.qcow2 /var/lib/libvirt/images/
```

```
getent passwd libvirt-qemu
```

```
ls -ld /var/lib/libvirt/images
```



maybe:

```
sudo chown libvirt-qemu:libvirt-qemu /var/lib/libvirt/images/debian-13-nocloud-amd64.qcow2
```





```
sudo qemu-img create -f qcow2 -F qcow2 -b /var/lib/libvirt/images/debian-13-nocloud-amd64.qcow2 /var/lib/libvirt/images/k8s-master.qcow2
```



```
qemu-img create -f qcow2 -F qcow2 -b debian-13-nocloud-amd64.qcow2 k8s-master.qcow2
qemu-img create -f qcow2 -F qcow2 -b debian-13-nocloud-amd64.qcow2 k8s-worker1.qcow2
qemu-img create -f qcow2 -F qcow2 -b debian-13-nocloud-amd64.qcow2 k8s-worker2.qcow2
```



## Qemu

#### Convert ova file to qemu

unpack like zip/tar file:

```sql
tar -xvf "filename.ova"
```

convert to qcow2 format:

```sql
qemu-img convert -f vmdk -O qcow2 "filenameunpacked.vmdk" new.qcow2
```

run:

```sql
qemu-system-x86_64 -enable-kvm -m 2G -hda new.qcow2
```



# Linux Networking





## Firewall

fedora:

```
sudo systemctl stop firewalld
sudo systemctl start firewalld
```

```
sudo firewall-cmd --get-active-zones
sudo firewall-cmd --zone=nm-shared --list-all
sudo firewall-cmd --zone=nm-shared --add-port=8000/tcp --permanent
sudo firewall-cmd --reload
```



## NetworkManager CLI

```
nmcli connection show
sudo nmcli con add type ethernet ifname enp0s31f6 con-name "Direct-KVM"
sudo nmcli con mod "Direct-KVM" ipv4.addresses 192.168.1.100/24
sudo nmcli con mod "Direct-KVM" ipv4.method shared
sudo nmcli con down "Direct-KVM" && sudo nmcli con up "Direct-KVM"
```





***



## NAT







***



```
sudo sysctl -w net.ipv4.ip_forward=1
```

```
echo "net.ipv4.ip_forward=1" | sudo tee /etc/sysctl.d/99-hotspot.conf
sudo sysctl --system
```

```
sudo iptables -t nat -A POSTROUTING -o UPSTREAM_IFACE -j MASQUERADE
```

```
#!/usr/bin/env bash

echo "Setting IPv6 preference in system..."

sudo sysctl -w net.ipv6.conf.all.disable_ipv6=0
sudo sysctl -w net.ipv6.conf.default.disable_ipv6=0

# Prefer IPv6 over IPv4 when both exist
echo "net.ipv6.conf.all.accept_ra=2" | sudo tee /etc/sysctl.d/40-ipv6.conf
echo "net.ipv6.conf.default.accept_ra=2" | sudo tee -a /etc/sysctl.d/40-ipv6.conf

sudo sysctl --system

echo "IPv6 preference enabled."
```

On PC A:

```
sudo ip addr add 192.168.10.1/24 dev eth0
sudo ip link set eth0 up
```

On PC B:

```
sudo ip addr add 192.168.10.2/24 dev eth0
sudo ip link set eth0 up
```

Test:

```
ping 192.168.10.2
```

## Mininet NAT

forward:

```
sudo sysctl -w net.ipv4.ip_forward=1
```

```
sudo ip route add 10.0.2.0/24 dev s1-eth1
```

```
ip route get 10.0.2.2
```

confim:

```
sudo ip addr add 10.0.2.254/24 dev s1-eth1
```

nat:

```
sudo iptables -t nat -A POSTROUTING -s 10.0.2.0/24 -o wlp4s0 -j MASQUERADE
```

```
sudo iptables -A FORWARD -i wlp4s0 -o s1-eth1 -j ACCEPT
sudo iptables -A FORWARD -o wlp4s0 -i s1-eth1 -j ACCEPT
```





## Linux Proxies&#x20;

<table><thead><tr><th>Name</th><th width="331.7890625">Link</th><th></th></tr></thead><tbody><tr><td>TinyProxy</td><td><a href="https://github.com/tinyproxy/tinyproxy">https://github.com/tinyproxy/tinyproxy</a></td><td></td></tr><tr><td>Squid Proxy</td><td><a href="https://github.com/squid-cache/squid">https://github.com/squid-cache/squid</a></td><td></td></tr><tr><td></td><td></td><td></td></tr></tbody></table>

<pre><code><strong>sudo vim /etc/apt/apt.conf.d01proxy
</strong></code></pre>

```
Acquire::http::Proxy
"http://192.168.0.101:8888";
```

## IP Command

```
ip a
ip neigh
ip route
```

## ARP

```
arp -a
```

## Ping&#x20;

```
ping -i 0.01 10.0.0.2
```







# Linux Scan Devices on Network

options to discover all hosts in the current network:

```
sudo arp-scan -l
```

```
sudo nmap -sn 100.100.100.0/24
```

{% hint style="info" icon="thought-bubble" %}
nmap requires sudo and you specifing the network ip, favoring the use of arp-scan for host discovery
{% endhint %}



get all open ports of device with it's ip:

```
sudo nmap -p- -sS -sV -O -A -T4 100.100.100.50/24
```




## Linux Stats Info

On Ubuntu/Debian systems, the unified command is:

```bash
run-parts /etc/update-motd.d/
```

That is the closest equivalent to "show me the login message".

You can also use:

```bash
cat /run/motd.dynamic
```

On many Ubuntu systems, `/run/motd.dynamic` contains the generated MOTD from `update-motd`.

The login flow is roughly:

```
ssh database
      |
      v
sshd (accepts connection)
      |
      v
login shell starts
      |
      v
pam_motd runs
      |
      v
/etc/update-motd.d/* scripts execute
      |
      v
MOTD displayed
```

The component responsible is PAM:

```bash
grep motd /etc/pam.d/sshd
```

You will usually see something like:

```
session optional pam_motd.so motd=/run/motd.dynamic
session optional pam_motd.so noupdate
```

So:

* **SSH?** → transports the session only.
* **PAM (`pam_motd`)** → triggers the message display.
* **`update-motd` scripts** → generate the content.
* **Ubuntu packages** (landscape, update-notifier, etc.) → provide many of the individual sections.

If you want the exact same thing an SSH login triggers, you can test with:

```bash
sudo -u "$USER" /usr/bin/env bash -lc 'cat /run/motd.dynamic'
```

but `run-parts /etc/update-motd.d/` is the usual admin command.



# Linux Clean Storage





Step 0:&#x20;

Analyse how much storage you have free and used

```
df -h
```

```
df -h --type=ext4
```



check which folders are using most

```
sudo du -xh --max-depth=1 / | sort -h
```

```
sudo du -xh --max-depth=1 /home | sort -h
```





check how much podman is using:

```
podman system df
```

```
sudo podman system df
```



```
sudo du -xah / | sort -rh | head -30
```



```
sudo find / -xdev -type f -printf '%s %p\n' \
| sort -nr \
| head -30 \
| awk '{printf "%.2f GB\t%s\n",$1/1024/1024/1024,$2}'
```



`ncdu`





clean trash:

```
sudo rm -rf /root/.local/share/Trash/*
```

1. `sudo apt autoremove -y`
2. `sudo apt clean`
3. `sudo apt autoclean`
4. `sudo apt autoremove --purge -y`
5. `dpkg -l | awk '/^rc/ {print $2}'`
6. `sudo apt purge $(dpkg -l | awk '/^rc/ {print $2}') -y`

#### Cache cleanup

9. `rm -rf ~/.cache/*`
10. `rm -rf ~/.thumbnails/*`
11. `sudo rm -rf /var/cache/apt/archives/*`
12. `sudo rm -rf /var/cache/apt/archives/partial/*`

#### Logs cleanup

13. `sudo journalctl --vacuum-time=7d`
14. `sudo journalctl --vacuum-size=100M`
15. `sudo find /var/log -type f -name "*.log" -delete`

#### Large file discovery

16. `du -ah ~ | sort -rh | head -20`
17. `sudo du -ah /var | sort -rh | head -20`
18. `find ~ -type f -size +500M -print`

#### Temporary files

19. `sudo rm -rf /tmp/*`
20. `rm -rf ~/.local/share/Trash/*`

#### Flatpak / Snap (if installed)

21. `flatpak uninstall --unused -y`
22. `snap list --all | awk '/disabled/{print $1, $3}'`
23. `snap remove $(snap list --all | awk '/disabled/{print $1, $3}')`

#### Docker cleanup (if installed)

24. `podman system prune -af`
25. `podman volume prune -f`
26. `podman image prune -af`

#### Package metadata & orphaned cleanup

27. `sudo apt autoremove --purge`
28. `sudo deborphan | xargs sudo apt-get -y remove --purge`
29. `sudo dpkg --purge $(dpkg -l | awk '/^rc/ {print $2}')`

#### Extra safe system cleanup

30. `sudo find /var/cache -type f -delete`



# Linux Commands

```
pstree
```



```
ss -tulpn
```

* `-t` = TCP
* `-u` = UDP
* `-l` = listening ports
* `-p` = process
* `-n` = numeric (no DNS lookup)



```
last
```

```
who
w
```







check free storage:

```
df -h
```

check connected storage disks:

```
lsblk
```



mounting:

```
sudo mkdir -p /mnt/recovery
sudo mount /dev/sdb1 /mnt/recovery
```



```
sudo chown -R $USER:$USER main
```



## tar zip:

```
tar -czvf zipped_name.tar.gz file.name
```

* `-c` → create a new archive
* `-z` → compress it using **gzip**
* `-v` → verbose (shows progress)
* `-f` → output file name



```
tar -xzvf full_recovery_20260530_160846.tar.gz
```

* `-x` → extract
* `-z` → decompress it using **gzip**
* `-v` → verbose (shows progress)
* `-f` → file name

unpack tar:

```
tar -xzf postgresql_backup.tar.gz
```



```
sudo tar -czvf postgres_backup.tar.gz -C /mnt/recovery var/lib/postgresql
```







transfer folders and files:

```
rsync -aHAX --progress -e "ssh -i /path/to/private_key" /source/ user@host:/destination/
```

```
```



dmesg | tail -50

iscsiadm





## Common

ls -l




# Linux Systemd & Journal

```
systemd-analyze
```



The command-line tools that come with systemd form a fairly large ecosystem. They cover service control, logging, system inspection, hardware, networking, and system utilities.

Here is a structured overview of the main systemd CLI tools:

***

#### Core service & system control

* **systemctl** – start/stop/enable/disable services, manage system state
* **systemd** (PID 1) – the init system itself (not usually invoked directly)
* **systemd-run** – run transient units from the command line
* **systemd-inhibit** – block shutdown/sleep while a process runs
* **systemd-ask-password** / **systemd-tty-ask-password-agent** – password prompting utilities

***

#### Logging & diagnostics

* **journalctl** – query and display logs from the journal
* **systemd-analyze** – boot time analysis, dependency graphs, critical chain
* **systemd-cgls** – view control group tree
* **systemd-cgtop** – real-time cgroup resource usage

***

#### System information tools

* **hostnamectl** – set/view hostname and machine metadata
* **timedatectl** – timezone and clock configuration
* **localectl** – locale and keyboard layout settings
* **loginctl** – user sessions, seats, and logins
* **resolvectl** – DNS resolver configuration (via systemd-resolved)

***

#### Unit / system management helpers

* **systemd-escape** – escape strings for unit names
* **systemd-tty-ask-password-agent** – password agent for services
* **systemd-detect-virt** – detect virtualization environment
* **systemd-sysusers** – manage system users from config files
* **systemd-tmpfiles** – manage temporary files and directories
* **systemd-sysctl** – apply kernel parameter settings

***

#### Device, boot & hardware related

* **systemd-hwdb** – hardware database tool
* **systemd-udevd** (daemon) + **udevadm** – device management interface
* **systemd-boot** tools (like `bootctl`) – bootloader management

***

#### Networking & runtime utilities

* **systemd-networkd** (daemon) + **networkctl** – network configuration and status
* **systemd-resolve** (legacy alias for resolvectl in some systems)
* **systemd-socket-activate** – socket activation wrapper

***

#### Miscellaneous / advanced

* **systemd-path** – show system and user directory paths
* **systemd-notify** – send service status updates to systemd
* **systemd-stdio-bridge** – bridge stdio to systemd socket activation
* **systemd-firstboot** – initial system setup tool
* **systemd-sysext** – manage system extension images

***

daily use:

* `systemctl`
* `journalctl`
* `loginctl`
* `hostnamectl`
* `timedatectl`





***



#### 1. Everyday admin tools&#x20;

These are the most important ones:

* systemctl – control services and units
* journalctl – read logs
* loginctl – user sessions
* hostnamectl – hostname/system identity
* timedatectl – time & timezone
* networkctl – network status (if using systemd-networkd)

***

#### 2. System inspection & debugging tools

Used for troubleshooting:

* systemd-analyze (boot performance, dependency graphs)
* systemd-cgls / systemd-cgtop (resource usage via cgroups)
* systemd-detect-virt (check virtualization)
* systemd-escape (unit name debugging helper)
* coredumpctl (crash dump inspection)

***

#### 3. System configuration utilities

* localectl (keyboard/locale)
* resolvectl (DNS via systemd-resolved)
* systemd-sysctl (kernel parameters)
* systemd-tmpfiles (temporary file rules)
* systemd-sysusers (user/group provisioning)

***

#### 4. Boot, hardware, and low-level system

* bootctl (EFI bootloader control)
* udevadm / systemd-udevd (device management)
* systemd-hwdb (hardware database)
* kernel-install (kernel management)
* systemd-repart (partition management)

***

#### 5. Security / advanced infrastructure

More modern / enterprise features:

* systemd-cryptsetup / systemd-cryptenroll (disk encryption)
* systemd-creds (secure credentials handling)
* systemd-measure (TPM2 / measured boot)
* systemd-sysext (system extensions)
* systemd-nspawn / vmspawn (containers / VMs)

***

#### 6. Networking stack (systemd-integrated)

If systemd manages networking:

* systemd-networkd (network daemon)
* systemd-resolved (DNS resolver)
* resolvectl (DNS querying tool)
* systemd-network-generator (auto network configs)

***

#### 7. System services exposed as CLI tools

These are less “commands” and more interfaces to daemons:

* systemd-logind (login/session manager)
* systemd-machined (machines/containers)
* systemd-oomd (out-of-memory daemon)
* systemd-journald tools (logging backend)



***

### 1) Basic journal viewing

* `journalctl` → show all logs (can be very long)
* `journalctl -b` → logs from current boot
* `journalctl -b -1` → previous boot logs
* `journalctl -f` → follow logs live (like `tail -f`)

***

### 2) Filtering logs

#### By service (very common)

* `journalctl -u ssh`
* `journalctl -u nginx`
* `journalctl -u systemd-networkd`

#### By time

* `journalctl --since "today"`
* `journalctl --since "1 hour ago"`
* `journalctl --since "2026-06-01 10:00:00"`
* `journalctl --until "2026-06-01 12:00:00"`

***

### 3) Priority / severity filtering

* `journalctl -p 0` → emergencies only
* `journalctl -p 3` → errors and above
* `journalctl -p warning`
* `journalctl -p info`

Priority levels:

* 0 = emergency
* 1 = alert
* 2 = critical
* 3 = error
* 4 = warning
* 5 = notice
* 6 = info
* 7 = debug

***

### 4) Kernel logs

* `journalctl -k` → kernel messages
* `journalctl -k -b` → kernel logs from current boot

***

### 5) Output formatting

* `journalctl -o short` → default readable format
* `journalctl -o verbose` → detailed fields
* `journalctl -o json` → machine-readable JSON

***

### 6) Searching logs

* `journalctl | grep ssh`
* `journalctl -u ssh | grep "Failed"`

Better option:

* `journalctl -u ssh --grep "failed"`

***

### 7) Disk usage & maintenance

* `journalctl --disk-usage` → size of logs
* `sudo journalctl --vacuum-time=7d` → keep only 7 days
* `sudo journalctl --vacuum-size=100M` → limit log size

***

#### Debug a service crash

```bash
journalctl -u nginx -b --no-pager
```

#### Watch live system errors

```bash
journalctl -p 3 -f
```

#### Check boot issues

```bash
journalctl -b -1 -p 3
```

***

`journalctl`

* `-u` = service-focused debugging
* `-b` = boot history analysis
* `-f` = real-time monitoring




# Suspend Mode

check what your mode is&#x20;

```
cat /sys/power/mem_sleep
```

output: s2idle \[deep]

```
sudo vim /etc/default/grub
```

append mem\_sleep\_default=s2idle to GRUB\_CMDLINE\_LINUX\_DEFAULT&#x20;

GRUB\_CMDLINE\_LINUX\_DEFAULT="(some other options ...) mem\_sleep\_default=s2idle"



then update grup to apply changes

```
sudo update-grub
```

```
sudo reboot
```



confirm

```
cat /sys/power/mem_sleep
```



output: \[s2idle] \[deep]



# Linux Distros

## Redhat

* RHEL
* Centros
* Fedorra
* Rocky Linux
* Alma Linux



## Debian Based

* debian 13
* ubuntu















(arch linux)
