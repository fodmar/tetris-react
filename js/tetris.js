class Tetris extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            currentFigure: null
        };
        
        this.board = Array(this.props.height);
        for (var i = 0; i < this.board.length; i++) {
            this.board[i] = Array(this.props.width).fill(null);
        }
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
        if (this.state.currentFigure) {
            switch (command) {
                case "boost":
                    this.run();
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
            var moved = this.state.currentFigure.moveDown(this.board);
            
            if (!moved) {
                delete this.state.currentFigure;
                
                this.setState({
                    currentFigure: null
                });
            } else {
                this.setState({});
            }
        } else {
            var figure = this.props.figureGenerator.generate();
            var placed = figure.place(this.board, 0, this.props.width / 2 - 1);
            
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