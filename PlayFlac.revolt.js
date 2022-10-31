state.plugins.add({format:1,version:"0.0.2b",namespace:"Peleret",id:"PlayFlac",entrypoint:`
	async () => {
		const r = document.createElement('style');
		r.innerHTML = "audio::-webkit-media-controls-enclosure{border-radius:16px} audio{filter:hue-rotate(196deg) saturate(350%) invert(100%) contrast(93%);width:100%}";
		document.body.appendChild(r);
		while(1){
			let files = document.querySelectorAll(":not(.checkedForFlac)[class*=downloadIcon]");
			if(!files[0]){
				await new Promise(r => setTimeout(r, 1000));
				continue;
			}
			for(const e of files){
				e.classList.add("checkedForFlac");
				if(e.parentElement.children[1].textContent.substr(-5) !== ".flac") continue;
				const element = e.parentElement.parentElement;
				let audio = document.createElement("audio");
				audio.setAttribute("controls", "");
				audio.setAttribute("src", e.href);
				let text = document.createElement("p");
				text.setAttribute("style", "color: var(--secondary-foreground);text-align: center;margin: 0px auto 5px;font-size: 1.1em;");
				text.textContent = e.parentElement.children[1].textContent.substr(0,e.parentElement.children[1].textContent.length-5);
				element.setAttribute('style','grid-auto-columns:100%;max-width:504px;width:100%');
				element.appendChild(text);
				element.appendChild(audio);
				element.firstChild.setAttribute("style","display: none");
				element.children[2].volume = window.localStorage.getItem("volume") || 1;
				element.children[2].addEventListener("play",(e)=>{element.children[2].volume = window.localStorage.getItem("volume") || 1});
				element.children[2].addEventListener("volumechange",(e)=>{window.localStorage.setItem("volume",e.target.volume)});
			}
		}
	}
`})
