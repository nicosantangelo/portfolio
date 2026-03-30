---
title: "Supercharge macOS"
date: 2024-04-30
---

# Supercharge MacOS

The following can be used as a guide or just a sprinkle of tips for configuring your macOS for productivity and all-round ease of use. It's also a living document, as I update how I like to setup my own box.

It's divided in sections so you can read what you want for your use-case. You probably don't want to implement everything you see here, but I'd take a look around cause you'll probably find at least one thing you find useful or you didn't know.

Remembering new shortcuts can be a pain (or fun, depending on who you are) but I'd advice you to keep at it at least for a week! then you can ascertain if it's useful or not...or really get into sunken cost fallacy.

Visual language

- <img src="/keyboard-icon.svg" width="20" height="20" style="display:inline;vertical-align:middle" alt="keyboard shortcut" /> : Keyboard shortcut or key combination to press
  - `⌘`: Command key
  - `⌃`: Control key
  - `⌥`: Option key
- <img src="/laptop-icon.svg" width="20" height="20" style="display:inline;vertical-align:middle" alt="application" /> : Application

## Index

- [Visual language](#visual-language)
- [Beginner](#beginner)
  - [Window and App management](#window-and-app-management)
  - [System Preferences / System Settings](#system-preferences--system-settings)
  - [Useful Keyboard shortcuts](#useful-keyboard-shortcuts)
  - [Finder / File Management](#finder--file-management)
- [Intermediate](#intermediate)
  - [Installing keyboard layouts](#installing-keyboard-layouts)
- [Pro](#pro)
- [Developer](#Developer)
- [Glossary](#glossary)

## Beginner

### Window and App management

<img src="/laptop-icon.svg" width="20" height="20" style="display:inline;vertical-align:middle" alt="application" /> **App launcher**

Opening apps can be done in different ways, but the only correct one is using an app launcher, also caller app finder. By default app has [Spotlight](https://support.apple.com/guide/mac-help/search-with-spotlight-mchlp1008/mac) which is serviceable but not great. I recommend [Raycast](https://www.raycast.com/). Follow this simple tutorial to [Replace Spotlight with Raycast](https://www.raycast.com/help/hotkey). Some things you can do with it (some work with Spotlight, other don't)

- Math: use it as a calculator. Raycast also supports modifiers like `1M - 100k`
- Find files
- Search for something on a Search Engine (Google/DuckDuckGo/etc)
- Clipboard History (Raycast): Have a list of your last copied text. If you go to `Settings -> Extensions -> Search for Clipboard History` you can set a Hotkey. I use `⌥ + ⌘ + v`. You can also disable it for certain apps.
- Etc

<img src="/keyboard-icon.svg" width="20" height="20" style="display:inline;vertical-align:middle" alt="keyboard shortcut" /> **Change between apps**

`⌘ + tab`. Keeping `⌘` pressed keeps the list open, you can then move right pressing `tab` or `right arrow` and left pressing `shift + tab` or arrow left . You can press `⌘ + q` to close applications from there instead of opening them.

- Similar to using Mission control with the trackpad, by default swiping up with four fingers, but often way faster (now more than ever with dark mode everywhere)

<br/>

<img src="/keyboard-icon.svg" width="20" height="20" style="display:inline;vertical-align:middle" alt="keyboard shortcut" /> **Cycle between windows of the same app**

`` ⌘ + ` ``, if you want to cycle in the opposite direction press ``⌘ + shift + ` ``

- Similar to using App Exposé with the trackpad, by default swipping down with three fingers, but way faster

<img src="/laptop-icon.svg" width="20" height="20" style="display:inline;vertical-align:middle" alt="application" /> **Move and resize Windows**

The [Rectangle](https://rectangleapp.com/) app allows you to snap windows to half the screen and maximize them by dragging them to the top of the screen. All features can be triggered via configurable keyboard shortcuts a few are:

- `⌃ + ⌥ + arrow keys (←↑↓→)`: Resize window to occupy half the space in the direction used
- `⌃ + ⌥ + enter key (↵)`: Maximize window

Another option is to use [Raycast](http://localhost:3000/blog/supercharge-macos#app-launcher) and go to `Settings -> Extensions -> Window Management`

<br/>

**Hot corners**

Hot corners gives you the option to do something when you place your cursor on a specific corner of the screen. I use two corners:

- Bottom right: Desktop. Very useful if you need to grab something from the desktop to an app quickly
- Top Left: Lock Screen

To enable it, go to:

`System Settings -> Desktop & Dock -> (scroll to the bottom) Hot Corners`

### System Preferences / System Settings

Useful settings at the OS level. If you don't know how to open the settings on your machine press `⌘ + space`, type `System ` and pick System Preferences / System Settings (the name depends on the macOS you're running)

<br/>

<img src="/keyboard-icon.svg" width="20" height="20" style="display:inline;vertical-align:middle" alt="keyboard shortcut" /> **Navigate and dismiss dialogs**

By default, if a dialog pops up prompting something like `Are you sure? [CANCEL] [ACCEPT]` you have to use the trackpad/mouse to click an option.
If you want to use the keyboard to do this (like any sane person should) toggle the `Keyboard Navigation` option in:

`System Settings -> Keyboard -> Keyboard Navigation`

<br/>

<img src="/keyboard-icon.svg" width="20" height="20" style="display:inline;vertical-align:middle" alt="keyboard shortcut" /> **Gain screen real-estate**

By default, the Dock is visible at all times on the bottom of the screen, taking a maddening amount of empty space on the sides. To toggle it press: `⌘ + ⌥ + d` or go to:

`System Settings -> Desktop & Dock -> Automatically hide and show the Dock`

<br/>

**Group apps for Mission Control**

If you really want to use Mission Control, I find that grouping windows from the same app helps with the clutter. If you want a particular window from a group you can scroll it (two finger up on the trackpad) and pick from there. To activate it go to:

`System Settings -> Desktop & Dock -> Scroll to the Mission Control section -> Group windows by application`

**Gestures**

Not much to say here, but I encourage you to check the Trackpad settings macOS gives you on `System Settings -> Trackpad`. You might find something you like. To become a trackpad ninja check the [Advanced section](#trackpad-1)

### Useful Keyboard shortcuts

<img src="/keyboard-icon.svg" width="20" height="20" style="display:inline;vertical-align:middle" alt="keyboard shortcut" /> **Take screenshots and record videos**

If you ever need to take a screen shot press

`⌘ + shift + `

- `3`: Take a screenshot of the entire screen. Save it on the desktop by default
- `4`: Select a part of the screen using the pointer and take a screenshot. Save it on the desktop by default
- `5`: The recording and screenshot menu bar will appear below. You can select what you want to do (like taking a video) and where to save files. If you start recording, the stop button will appear on the menu bar above.

`⌘ + ⌃ + shift + `

- `3`: Take a screenshot of the entire screen. Save it on the clipboard and paste it somewhere else.
- `4`: Select a part of the screen using the pointer and take a screenshot. Save it on the clipboard and paste it somewhere else.

<br/>

<img src="/keyboard-icon.svg" width="20" height="20" style="display:inline;vertical-align:middle" alt="keyboard shortcut" /> **Global (useful) shortcuts**

There are a few global(ish) keyboard shortcuts you can use on any app on macOS, but I find myself using two the most:

- `⌘ + shift + /` (or `⌘ + ?`): immensely useful, it searches on the menu actions of an app for whatever you need and points at it. You can learn to use any app without having a clue how it actually works. Want to crop something on Preview? search for Crop. Need to do something on Photoshop? search vaguely for it and see what it comes up. Etc
- `⌘ + ,`: Open Preferences.

### Finder / File management

**Folders in finder**

When you open a folder in Finder you'll see the name at the top of the window. If you hover over it, the folder icon will appear next to it, from there you can:

- If you click it you can drag it elsewhere
- If you secondary click it (two fingers) you'll see the path leading to it

<br/>

<img src="/keyboard-icon.svg" width="20" height="20" style="display:inline;vertical-align:middle" alt="keyboard shortcut" /> **Files**

Navigating files using the keyboard can be a bit unintuitive, mostly if you come from Windows (tell me how to open a file with your keyboard without looking ahead, I dare you!):

- _Open a file_: `⌘ + ↓`
- _Rename_: `enter`
- _Preview_: `spacebar`

## Intermediate

<img src="/keyboard-icon.svg" width="20" height="20" style="display:inline;vertical-align:middle" alt="keyboard shortcut" /> **Repeat keys**

By default, macOS will present you with a popup when you keep a key pressed that has special characters (like vowels). This can be frustrating and there's a much better way to do it. First to disable the key repeating popup you have to run a command on the `Terminal`. [Launch the Terminal](#launch-apps) paste the following and press enter:

`defaults write -g ApplePressAndHoldEnabled -bool false`

You'll need to restart your computer for it to take effect. Then, if you need to do special characters you can use different keyboard layouts that are better suited for that, see the next section for that. You can now play with the two sliders on the top of the `Keyboard` section on `System Settings -> Keyboard`, I personally have _Key Repeat Rate_ and _Delay Until Repeat_ on _Fast_ and _Short_.

<br/>

<img src="/keyboard-icon.svg" width="20" height="20" style="display:inline;vertical-align:middle" alt="keyboard shortcut" /> **Keyboard layouts**

You can have different languages for your keyboard and change between them. To add/remove input sources go to:

`System Settings -> Keyboard -> Input Sources (under text input) -> Edit...`

A common example of a good layout would be using `U.S. International - PC` and if you need to do accented keys you can just press `⌥ + e -> vowel you need to accent`. If you want to have multiple input sources and cycle between them go to:

`System Settings -> Keyboard -> Keyboard Shortcuts -> (search for Input Sources on the left)`

An _even better_ layout is `U.S. International without dead keys` which sadly doesn't come with macOS but you can download from [here](#TODO). Installing it is...a pain and I can't believe it's this hard, but I guarantee it's worth it. To get special characters like accented vowels there you just `⌥ + vowel`. To install it do the following:

<br/>

**Installing keyboard layouts**

1. In Finder, choose `Go` from the menu at the top of your screen. With that drop-down menu open, hold down the `⌥ key.` This will make the `Library` show up in the list. Click `Library`.
2. In the new Finder window, scroll down to find `Keyboard layouts`.
3. Drag the keyboard layout you saved earlier into the `Keyboard layouts` list.
4. Open `System Settings -> Keyboard -> Input Sources`
   - Click the `+` (plus) sign at the bottom left to 'add a keyboard layout'.
   - Select `Others` in the left-side pane, this should display a list of keyboard layouts which includes the one you just added
5. To access the key layout, click on the flag at the top of your screen. Select the keyboard layout from the list. or follow the instructions above to do it via a keyboard shortcuts
6. Pat yourself in the back and curse Craig Federighi

<br/>

**Text Snippets:**

If you have a phrase or text you repeat often, you can use expand a identifier of your choosing instead of writing it each time. For example, by default macOS auto-expands `omw` to `On my way!`. If you want to add your own, like for example:

- `@email` to `your personal` email

Go to:

`System Settings -> Keyboard -> Text Replacement... (under text input)`

and add your own. If you're using [Raycast](https://www.raycast.com/), it has a pretty good [snippet implementation](https://manual.raycast.com/snippets)

## Pro

**Trackpad**

The mac trackpad is awesome, but the default gestures are lacking. If you want to navigate the web and never let go of you cup of coffee (amongst other very useful things) install [Jitouch](https://github.com/JitouchApp/Jitouch/releases/tag/v2.82.1). The app used to be paid but it's now on Github. Checkout some awesome gestures [here](https://www.jitouch.com/trackpad/), changing tabs with the trackpad is particularly good.

<br/>

**Spaces**

If work with multiple [spaces](https://support.apple.com/guide/mac-help/work-in-multiple-spaces-mh14112/mac) moving between them often one by one can create motion sickness. To alleviate this you can assign keyboard shortcuts to each one on:

`System Settings -> Keyboard -> Keyboard Shorcuts -> Expand Mission Control (Mission Control on the left) -> Add a shortcut to each Space`

A small caveat is that you cannot add a shortcut if the space is not open for some reason

<br/>

**Drag windows**

Instead of having to surgically grab apps from the top, you can click them anywhere and drag them around. To enable this, you'll have to run the following code on the terminal:

`defaults write -g NSWindowShouldDragOnGesture -bool true`

Log out of your session or restart, and after that keeping `⌘ + ^ + trackpad click` anywhere on the app will drag it (you can let go of the keyboard after clicking). See a cool video of how it works [here](https://mmazzarolo.com/blog/2022-04-16-drag-window-by-clicking-anywhere-on-macos/)

<br/>

**Keyboard modifications**

[Karabiner](https://karabiner-elements.pqrs.org/) is like a swiss army knife to make your keyboard usable only for you and annoy everyone else that tries. but also its incredible for productivity and ergonomics. I have:

- Simple modifications

  - `caps_lock -> escape`: because shift is already there and you rarely have to scream that much when typing.
  - `right_command -> right_control`: your right thumb is right there (get it?). Makes things like `^ + 1` easier and more ergonomic.

- Complex modifications

Very [VIM](https://www.vim.org/) oriented. I do recommend the first and second one if you changed the right command to right control in simple modifications. You can find them [here](https://ke-complex-modifications.pqrs.org)

- `Use right_control+h/l to switch tabs in an application`
- `Use right_control+j/k to switch windows of the foreground application`
- `Change fn+hjkl to arrow keys`

**Automatic Input sources**

If you don't want (or can't) use a [keyboard layout](#keyboard-layouts) like `U.S. Internation without dead keys`, I wrote [Langy](https://langyapp.github.io/) a long time ago to fix this. It automatically changes the input source depending on which app is in focus.

## Developer

**quake iTerm/Warp**

Both [iTerm](https://iterm2.com/) and [Warp](https://www.warp.dev/) can be used as a dropdown terminal (quake, tilda, yakuake, style). To do this go to:

Iterm: `Iterm preferences -> Profiles -> (select your active profile) -> Keys -> Check: A hotkey opens a dedicated window with this profile`
You can configure it with the button below the checkbox that conveniently reads `Configure Hotkey Window`

Warp: `Warp Settings -> Features -> Global hotkey`

<br/>

**Port 5000**

If you ever tried to have something listen to port 5000 you've noticed that it's always in use. To avoid this you'll need to turn off:

`System Settings -> General -> AirDrop & Handoff -> AirPlay Receiver`

<br/>

**zsh**

A Unix shell with features baked in. I use [ohmyzsh](https://ohmyz.sh/) to install it and configure it and I advice you do too, at least for the color scheme. A few aliases and plugins I use:

- Git aliases (edit your `~/.zshrc`):
  - `alias gcm='git checkout master || git checkout main'`
  - `alias gpc='git push origin $(current_branch)'`
  - `alias ggp='git pull origin $(current_branch)'`
  - `alias wip='gc -m "WIP"'`
- Plugins:
  - [zsh-syntax-highlighting](https://github.com/zsh-users/zsh-syntax-highlighting)
  - [zsh-history-substring-search](https://github.com/zsh-users/zsh-history-substring-search)

## Glossary

### Apps

- [Raycast](https://www.raycast.com/): Replace Spotlight with a collection of powerful productivity tools all within an extendable launcher
- [Karabiner](https://karabiner-elements.pqrs.org/): Remap keys with simple and complex modifications
- [Jitouch](https://github.com/JitouchApp/Jitouch/releases/tag/v2.82.1): Awesome trackpad gestures
- [Rectangle](https://rectangleapp.com/): Move and resize windows and snap areas
- [ohmyzsh](https://ohmyz.sh/) : Community-driven framework for managing your Zsh configuration
- [iTerm](https://iterm2.com/): Better terminal
- [Warp](https://www.warp.dev/): Better terminal
