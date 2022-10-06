# Installation
Due to experimental state of plugin support in Revolt the installation method is unnatural<br/>

> 1. Enable **Experimental Plugin API** in Revolt Experiments tab.
> 2. Press Ctrl + Shift + I to enter developer tools.
> 3. Switch to console tab.
> 4. Open **Plugin.revolt.js** and copy it's content into console.
> 5. Profit. (If the plugin is working it should show up in plugins tab)

The plugin should now work and remain between restarts, so no need to worry about having to go through this process again.<br/><br/>

# PlayFlac

The plugin let's you play .flac audio files in [Revolt](https://github.com/revoltchat)<br/><br/>
![Screenshot](https://raw.githubusercontent.com/Peleret/RevoltChatPlugins/main/PlayFlac.png)

### How does it work?
The plugin selects all download icons that exist on attachment messages every second and loops over them checking if the file ends with .flac and removing it from being looped over again.<br/>
If the file ends in .flac the plugin replaces the message with \<audio> player and links the audio source to download location.<br/>
The plugin saves volume levels between files.<br/><br/>

#### Known Issues
- Audio player does not respect your theme. (the only way to change colors of audio player icons is to write your own audio player which is too complex for this project for now)
- The plugins uses infinite loop that runs every second which is not optimal (lack of documentation)
- The plugin does not stop when disabled/removed \[requires restart] (lack of documentation)
<br/><br/><br/><br/>

# PlayAllVideos

The plugin let's you play all video files that are supported by chromium in [Revolt](https://github.com/revoltchat)<br/><br/>

### How does it work?
The same way PlayFlac does, but instead of checking for .flac it checks for any supported video extension and plays the videos with HTML5 video player.<br/><br/>

#### Known Issues
- The plugins uses infinite loop that runs every second which is not optimal (lack of documentation)
- The plugin does not stop when disabled/removed \[requires restart] (lack of documentation)
<br/><br/><br/>

# Advanced
Running plugins in mobile app is possible but a bit hacky. <br/>
1. First you are going to need to install **Kiwi Browser** or other browser that supports dev tools.
2. Then set that browser as your default browser.
3. Open Revolt in that browser.
4. Go into dev tools.
5. Switch to console tab.
6. Open **Plugin.revolt.js** and copy it's content into console.
7. After restarting the Revolt app the plugin should be working if you can see it in plugins tab.
Also don't forget to enable plugin support in Experiments tab
##### Explanation
The mobile version of the app uses your default browser as engine for some reason so we just add the plugin to the browser version of the app and it somehow works (might be patched in the future)
