class KeyHandler {
    constructor() {
        this.KEY_SPACE = 32;
        this.KEY_LEFT_ARROW =  37;
        this.KEY_UP_ARROW = 38;
        this.KEY_RIGHT_ARROW = 39;
        this.KEY_DOWN_ARROW = 40;
        this.KEY_P = 80;
    }
    
    handle(e) {
        if (this.keys.indexOf(e.keyCode) > -1) {
            this.callback(e);
        }
    }
    
    register(keys, callback) {
        this.keys = keys;
        this.callback = callback;
        
        document.addEventListener("keydown", this.handle.bind(this));
    }
    
    unregisterAll() {
        document.removeEventListener("keydown", this.handle);
    }
    
    getTetrisKeys() {
        return [this.KEY_SPACE, this.KEY_LEFT_ARROW, this.KEY_UP_ARROW, this.KEY_RIGHT_ARROW, this.KEY_DOWN_ARROW, this.KEY_P];
    }
}