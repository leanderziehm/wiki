---
sidebar_position: 1
---


#### 2026-10-03

**18:23**
*requirement:* input=website link output=save to offline library that keeps desing and all assests in case website changes 
*solutions:*
compose: ArchiveBox
SingleFile-CLI Docker:  
```
docker run --rm -v $(pwd):/usr/src/app/out capsulecode/singlefile "https://example.com" my_design.html
```
compose: Karakeep / Hoarder

**17:24**
web bookmarks in obsidian or a different tool? 

**14:57**
qrcode to transfer secret credentials and then connect to each other like passkey or ssh public key or password after authenticating with biometrics from phone.
apps that authenticate user based on biometrics from phone.


**14:43**
docs
find(selfhost): saveing tool for offline downloading web pages of current state.
todo: deploy serchnx on fedora


**14:34**
question(obsidian): insert both time and date at the same time and automatic bold

**13:28**
frontmatter
move lines with alt? vim motions?
immich search for what the permission means
better image viewer for google images.


**12:38**
Done: setup obsidian with syncthing with phones.


**10:02**
homelab


**09:57**
(omnisearch keyboard shortcuts) skip for now: 10:04
imich, r2
ssh into server. podman restart. arp documentation, script scanning ports

---

**01:54**
ill go to bead not but tomorrow pdfs zotero, then structure to markdown table or csv and upload to github.
pdf text to tts 


video frame extraction 
/var/home/user/Videos/h.webm


#### 2026-10-02
make work() work
make nvim close to vscode
done: docusaurus obsidian

#### 2026-09-26

splunk
wazuh

vscode vs vim vs neovim with extension in container.

todo:
db backup user and backup script. how to secure ssh keys???? should i switch linux users for ssh into prod servers instead of my dev account where i have so many untrusted tools running?
make it show copy properly wezterm.
browser for scraping nothing else. untrusted extensions.


search for keyboard driven big file search and duplicate cli to quickly open files to check out and after decision quickly delete keyboard driven linux

host immich
search for: 
https://www.universalproductionmusic.com/en-de
research obsidian plugins


write down: *Who to trust?*

*Obsidian* 

*Additional features required:*
manual sort sidebar or pin files, move files over folders
never have empty view if empty view instead view configured file if I do ctrl + w if no file is selected then open default pinned file.

*Obsidian questions to answer*
where to put new files in what folder to name it? not archive? notes? new? inbox? ???
Create new notes created from an [[x]] internal link notes in a certain folder.

auto move files after some time (1 or 2 months of no activity no read/write) to archive folder?

how to handle tables, habbits, events

how to multi select files?
how to rename folder with f2 keybaord shortcut not just files rename

*LanguageTool:*
gather my own word dictionary.
LanguageTool store history. (reverse proxy middle ware? between ui clicks and backend.)


*file cleaning*
czkawka_cli keyboard focused big files delete and duplicates and quick preivew check manual 
seach for keyboard driven big file search and duplicate cli to quickly open files to check out and after decision quickly delete keyboard driven linux

**19:41**

*Web docs*
make blogs publishing new note and filetree work in obsidian and vscode without needing gitbook ui anymore.


*backups*
Syncthing:
maybe no multi version backups but just git?

*research:*
e2e encryped backups, text files encryption
automatic backups to dropbox, google drive, onedrive, mega.nz, s3
tools: rclone crypt; kopia, borg, restic

*vim*
 vim config with clipboard integration, maybe some Ctrl + j terminal. 
maybe use nvim???
add clipboard support and nice copy paste live vscode. and mouse support and comment.
add file to:
https://github.com/leanderziehm/dotfiles/tree/main/example_configs/vim
inspiration from:
https://github.com/leanderziehm/dotfiles/blob/main/other/sync/arch1/.vimrc
https://github.com/leanderziehm/dotfiles/blob/main/other/sync/debian-user/.vimrc
https://github.com/leanderziehm/dotfiles/blob/main/other/sync/default/.vimrc

---

#### 2026-09-27
**10:02**

immich
link speed satration
copy music files from phone to pc. then copy from pc to g48s


---

#### 2026-09-26
**21:43**

daily recap:
today i setup obsidian theme, backup to github, selfhosted ntfy, jellifin, navidrome, languagetool, installed czkawka
wezterm as scratchpad that loads vim on start. vim and wez configs.
podman workspace persistent volume
sd card formated and cleaned music 
(disposed trash, washed hair, went for walk, called kinnari, washed clothes, yt, music, tras food)
(keyboard shortcuts notes.)


I love [[cloud providers]]. 

(Keyboard Shortcuts)


*Vim* 
vimrc config or nvim config
clipboard
vscode replacement


*Music*

how to find the song i really like 


*phone pc communication*
Adb
how to best exchange links, text, data realtime quickly? is it google docs?


*Language Words*

English vocabulary
Spanish vocabulary


---

#### 2026-09-25

*Obsidian:*
Theme: GitHub Theme

write down decisions with time stamps and reasoning.
1. find out what is the cleanest syncing with respect to low rist of supplychain attach in code, reliability in having it always synced and second low battery consumption
find out how to best do syncing for obsidian. encryption. reliablity.

notes contentors:
obsidian
simplenotes (needs acconut login, no offile)


raw files for logjevity.
encryption for privacy and securety, authenication, autorization, ownership.

*requirements:*
good support for sync and editing ui for android.
zero trust sync.
preview for page publishing for public documentation.
(spell checker)
extendability and custamizability as a base for life os. text os.
25/09/2026 18:51 vscode workspace security settings always in secure mode and disable popup banners.




```query
section:(todo)
```