class KeyHandler {
    constructor() {
        this.map = {
            "32": "boost", // space
            "40": "boost", // down arrow
            "80": "pause", // p key
            "37": "left",  // left arrow
            "39": "right", // right arrow
            "38": "rotate" // up arrow
        };
    }
    
    handle(e) {
        if (this.map.hasOwnProperty(e.keyCode)) {
            this.callback(this.map[e.keyCode]);
        }
    }
    
    register(callback) {
        this.callback = callback;
        
        document.addEventListener("keydown", this.handle.bind(this));
    }
    
    unregisterAll() {
        document.removeEventListener("keydown", this.handle.bind(this));
    }
}