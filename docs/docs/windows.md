1. install firefox
2. install nodejs 
3. setup linux like alias for cmd teminal.



# Setup CMD


`autorun.bat`

```
@echo off
doskey cls=cls
doskey clr=cls
doskey clear=cls
```

type Win + R then type `regedit` and Enter 
open: 
```
HKEY_CURRENT_USER\Software\Microsoft\Command Processor
```
Look in the right-hand panel for a value named `AutoRun`.

If it does not exist: Right-click empty space in the right pane, select New > String Value, and name it exactly `AutoRun`.

Double-click `AutoRun` and set its Value data to the full path of your batch file, wrapped in quotes if there are spaces. For example:
```
"C:\Users\YourUsername\autorun.bat"
```