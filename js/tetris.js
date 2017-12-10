class Tetris extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            currentFigure: null
        };
        
        this.board = Array(this.props.height).fill(Array(this.props.width));
    }
    
    componentDidMount() {
        this.props.timer.start(this.run.bind(this), this.props.interval);
        this.props.keyhandler.register(this.handleKey.bind(this));
    }

    componentWillUnmount() {
        this.props.timer.stop();
        this.props.keyhandler.unregisterAll();
    }

    handleKey(command) {
        console.log(command);
        
        if (this.state.currentFigure) {
            switch (command) {
                case "boost":
                    run();
                    break;
                case "left":
                    this.state.currentFigure.moveLeft(this.board);
                    break;
                case "right":
                    this.state.currentFigure.moveRight(this.board);
                    break;
                case "rotate":
                    this.state.currentFigure.rotate(this.board);
                    break;
                case "pause":
                    break;
            }
        }
    }
    
    run() {
        if (this.state.currentFigure) {
            var reachedEnd = this.state.currentFigure.moveDown(this.board);
            
            if (reachedEnd) {
                this.setState({
                    currentFigure: null
                });
            }
        } else {
            var figure = this.props.figureGenerator.generate();
            var placed = figure.place(this.board);
            
            if  (placed) {
                this.setState({
                   currentFigure: figure
                });
            } else {
                // game over
            }
        }
    }
    
    render() {
        return <Board board={this.board} />;
    }
}