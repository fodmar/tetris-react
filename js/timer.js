class Timer {
    start(callback, interval) {
        this.callback = callback;
        this.interval = interval;
        
        this.timer = setInterval(callback, interval);
    }
    
    restart() {
        this.stop();
        this.timer = setInterval(this.callback, this.interval);
    }
    
    stop() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = undefined;
        }
    }
}