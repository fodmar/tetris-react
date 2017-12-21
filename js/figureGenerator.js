class FigureGenerator {
    constructor() {
        this.figures = [
            () => new O(),
            () => new I(),
            () => new Z(),
            () => new S(),
            () => new T(),
        ];
    }
    
    generate() {
        var index = Math.floor(Math.random() * this.figures.length);
        return this.figures[index]();
    }
}