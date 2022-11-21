state.plugins.add({format:1,version:"0.0.4",namespace:"Peleret",id:"PlayAllVideos",entrypoint:`
	async () => {
		const videoExtensions = [".webm", ".mp4", ".mkv", ".hls", ".mov", ".mpeg4", ".quicktime"],
					pluginEnabled=1;
					//Future variable for disabling the plugin
		
		while(pluginEnabled){
			
			//Select all unchecked attachments
			let files = document.querySelectorAll(":not(.checkedForVideo)[class*=downloadIcon]");
			
			//if no loaded attachments wait 1s and start over
			if(!files[0]){
				await new Promise(r => setTimeout(r, 1000));
				continue;
			}
			
			for(const e of files){
				
				//Label the attachment as checked
				e.classList.add("checkedForVideo");

				//check if the attachment has compataible extension and can't be played by revolt
				let string = e.parentElement.children[1].textContent;
				if(!videoExtensions.includes(string.substring(string.lastIndexOf(".")))) continue;
				if(e.parentElement.parentElement.childElementCount!=1) continue;

				//Select parent div and control its size
				const element = e.parentElement.parentElement;
				element.setAttribute('style','grid-auto-columns:100%;width:min(100%,min(540px,calc(var(--dimensions)*540px)))');

				//Create video element and set its attributes
				let video = document.createElement("video");
				video.setAttribute("controls", "");
				video.setAttribute("playsinline", "");
				video.setAttribute("preload", "metadata");
				video.setAttribute("src", e.href);
				video.setAttribute('style','width:min(100%,min(540px,calc(var(--dimensions)*540px)))');

				//Create label above video box and style it
				let text = document.createElement("p");
				text.textContent = string.substr(0,string.lastIndexOf("."));
				text.setAttribute("style", "color: var(--secondary-foreground);text-align: center;margin: 0px auto 5px;font-size: 1.1em;");

				//Append video and label to the parent div
				element.appendChild(text);
				element.appendChild(video);

				//Hide old attachment "message" (revolt recreates it if I try to delete it)
				element.firstChild.setAttribute("style","display: none");

				//Create volume variable and store it in local storage | Set volume when video loads to this variable | Update it when user changes volume
				element.children[2].volume = window.localStorage.getItem("volume") || 1;
				element.children[2].addEventListener("play",async(e)=>{element.children[2].volume = window.localStorage.getItem("volume") || 1});
				element.children[2].addEventListener("volumechange",async(e)=>{window.localStorage.setItem("volume",e.target.volume)});

				//Check video dimensions and scale the size accordingly
				element.children[2].addEventListener("loadedmetadata",async(e)=>{document.querySelector(':root').style.setProperty('--dimensions',e.target.videoWidth/e.target.videoHeight)});
			}
		}
	}
`})
