state.plugins.add({format:1,version:"0.0.1",namespace:"Peleret",id:"PlayAllVideos",entrypoint:`
	async () => {
		const videoExtensions = [".webm", ".mp4", ".mkv", ".hls", ".mov", ".mpeg4", ".quicktime"];
		while(1){
			let files = document.querySelectorAll(":not(.checkedForVideo)[class*=downloadIcon]");
			if(!files[0]){
				await new Promise(r => setTimeout(r, 1000));
				continue;
			}
			for(const e of files){
				e.classList.add("checkedForVideo");
				let string = e.parentElement.children[1].textContent;
				if(!videoExtensions.includes(string.substring(string.lastIndexOf(".")))) continue;
				const element = e.parentElement.parentElement;
				let video = document.createElement("video");
				video.setAttribute("controls", "");
				video.setAttribute("playsinline", "");
				video.setAttribute("preload", "metadata");
				video.setAttribute("src", e.href);
				let text = document.createElement("p");
				text.setAttribute("style", "color: var(--secondary-foreground);text-align: center;margin: 0px auto 5px;font-size: 1.1em;");
				text.textContent = string.substr(0,string.lastIndexOf("."));
				element.setAttribute('style','grid-auto-columns:100%;max-width:540px;width:100%');
				video.setAttribute('style','grid-auto-columns:100%;max-width:540px;width:100%');
				element.appendChild(text);
				element.appendChild(video);
				element.firstChild.setAttribute("style","display: none");
				element.children[2].volume = window.localStorage.getItem("volume") || 1;
				element.children[2].addEventListener("play",(e)=>{element.children[2].volume = window.localStorage.getItem("volume") || 1});
				element.children[2].addEventListener("volumechange",(e)=>{window.localStorage.setItem("volume",e.target.volume)});
			}
		}
	}
`
