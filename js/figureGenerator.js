class FigureGenerator {
    constructor() {
        this.figures = [
            () => new O(),
            () => new I()
        ];
    }
    
    generate() {
        var index = Math.floor(Math.random() * this.figures.length);
        return this.figures[index]();
    }
}