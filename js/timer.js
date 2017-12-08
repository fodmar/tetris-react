class Timer {
    start(callback, interval) {
        this.timer = setInterval(callback, interval);
    }
    
    stop() {
        clearInterval(this.timer);
    }
}