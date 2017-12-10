class FigureGenerator {
    constructor() {
        this.figures = [
            function(x, y) {
                return new O(x, y);
            }
        ];
    }
    
    generate(x, y) {
        var index = Math.floor(Math.random() * this.figures.length);
        return this.figures[index](x, y);
    }
}