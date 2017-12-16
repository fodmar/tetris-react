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
        this.handleRef = this.handle.bind(this);
        
        document.addEventListener("keydown", this.handleRef);
    }
    
    unregisterAll() {
        document.removeEventListener("keydown", this.handleRef);
    }
}