1. install firefox from the flat
2. install nodejs (nodejs.org/en/download) and install the msi installer. 
3. setup linux like alias for cmd teminal.
4. install neovim


# Setup CMD


`autorun.bat`

```
@echo off
doskey clr=cls
doskey clear=cls
doskey ls=dir
```

type Win + R then type `regedit` and Enter 
open: (create `Command Processor` by right clicking on `Microsoft` New > Key ) 
```
HKEY_CURRENT_USER\Software\Microsoft\Command Processor
```
Look in the right-hand panel for a value named `AutoRun`.
If it does not exist: Right-click the `Command Processor` folder and select New > String Value, and name it exactly `AutoRun`.
Double-click `AutoRun` and set its Value data to the full path of your batch file, wrapped in quotes if there are spaces. For example:
```
"C:\Users\YourUsername\autorun.bat"
```
Then the clear command should work :)


# Install Neovim

use the official windows package manager from microsoft (in windows 11 for me preinstalled)
```
winget install Neovim.Neovim
```