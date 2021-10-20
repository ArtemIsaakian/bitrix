{"version":3,"sources":["socialvideo.bundle.js"],"names":["exports","ui_vue_directives_lazyload","main_polyfill_intersectionobserver","ui_vue","main_core_events","_State","Object","freeze","play","pause","stop","none","BitrixVue","component","props","id","default","src","preview","autoplay","containerClass","containerStyle","elementStyle","showControls","data","preload","previewLoaded","loaded","loading","playAfterLoad","enterFullscreen","playBeforeMute","state","progress","timeCurrent","timeTotal","muteFlag","created","this","$Bitrix","eventEmitter","subscribe","onUnmute","mounted","getObserver","observe","$refs","body","beforeDestroy","unsubscribe","unobserve","watch","value","registeredId","methods","loadFile","arguments","length","undefined","clickToButton","event","stopPropagation","clickToMute","mute","unmute","click","autoPlayDisabled","isMobile","source","webkitEnterFullscreen","requestFullscreen","$emit","muted","emit","initiator","setProgress","percent","formatTime","second","Math","floor","hour","minute","toString","padStart","getData","videoEventRouter","eventName","duration","console","error","currentTime","round","_this","observer","IntersectionObserver","entries","forEach","entry","isIntersecting","threshold","lazyLoadCallback","element","computed","State","showStartButton","showInterface","labelTime","time","UA","navigator","userAgent","toLowerCase","includes","template","window","BX","Event"],"mappings":"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","file":"socialvideo.bundle.map.js"}