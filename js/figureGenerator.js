class FigureGenerator {
    constructor() {
        this.figures = [
            () => new O(),
            () => new I(),
            () => new Z()
        ];
    }
    
    generate() {
        var index = Math.floor(Math.random() * this.figures.length);
        return this.figures[index]();
    }
}