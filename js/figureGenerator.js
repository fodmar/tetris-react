class FigureGenerator {
    constructor() {
        this.figures = [
            () => new O()
        ];
    }
    
    generate() {
        var index = Math.floor(Math.random() * this.figures.length);
        return this.figures[index]();
    }
}