# Generic Goto

One command to do multiple context sensitive actions. Inspired by Plan9 plumber.

## Features

-   go to definition
-   open link
-   execute commands on terminal
-   open file (TODO)

## Usage

By default "Generic Goto" uses ctrl+shift+alt+F12 keybinding that is unlikely to conflict with any other keybinding.
I also use an [AutoHotkey](https://www.autohotkey.com/) script that binds right mouse click to this keybinding.

    #IfWinActive, ahk_exe Code.exe

        ; Send special key by chording left and right mouse buttons
        ~LButton & RButton::Send !^+{F12}

        ; Just right clicking first clicks and then sends special key
        RButton::
            Send {Click}
            Send !^+{F12}
            return

        ; Ctrl + right click does normal right click
        ^RButton::Send {Click, right}

    #IfWinActive
