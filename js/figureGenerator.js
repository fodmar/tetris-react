class FigureGenerator {
    constructor() {
        this.figures = [
            function() {
                return new O();
            }
        ];
    }
    
    generate() {
        var index = Math.floor(Math.random() * this.figures.length);
        return this.figures[index]();
    }
}