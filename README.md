# PlayFlac

The plugin let's you play .flac audio files in [Revolt](https://github.com/revoltchat)<br/>


## Installation
Due to experimental state of plugin support in Revolt the installation method is unnatural<br/>

> 1. Download **PlayFlac.revolt.js** file and put it whereever you want.
> 2. Enable **Experimental Plugin API** in Revolt Experiments tab
> 3. Press Ctrl + Shift + I to enter developer tools
> 4. Switch to console tab
> 5. Paste this line into console:<br/>
>  **`state.plugins.add({format:1,version:"0.0.1",namespace:"Peleret",id:"PlayFlac",entrypoint:await (await (await window.showOpenFilePicker())[0].getFile()).text()})`**
>  6. Select **PlayFlac.revolt.js** from your disk
The plugin should now work and remain between restarts, so no need to worry about having to go through this process again.

## How does it work?
The plugin selects all download icons that exist on attachment messages every second and loops over them checking if the file ends with .flac and removing it from being looped over again.<br/>
If the file ends in .flac the plugin replaces the message with \<audio> player and links the audio source to download location.<br/>
The plugin saves volume levels between files.

### Known Issues
```
Audio player does not respect your theme. (the only way to change colors of audio player icons is to write your own audio player which is too complex for this project for now)
The plugins uses infinite loop that runs every second which is not optimal (lack of documentation)
The plugin does not stop when disabled/removed [requires restart] (lack of documentation)
```
