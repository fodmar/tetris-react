class Tetris extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            currentFigure: this.props.figureGenerator.generate(),
            nextFigure: this.props.figureGenerator.generate(),
            score: 0,
            pause: false,
            gameOver: false,
        };
        
        this.board = this.createMatrix(this.props.width, this.props.height);
        this.previewBoard = this.createMatrix(3, 4);
        
        this.state.nextFigure.place(this.previewBoard, 0, 0);
        this.state.currentFigure.place(this.board, 0, this.props.width / 2 - 1);
    }
    
    createMatrix(width, height) {
        var matrix = Array(height);
        for (var i = 0; i < height; i++) {
            matrix[i] = Array(width).fill(null);
        }
        
        return matrix;
    }
    
    cleanMatrix(matrix) {
        for (var i = 0; i < matrix.length; i++) {
            matrix[i].fill(null);
        }
        
        return matrix;
    }
    
    componentDidMount() {
        this.props.timer.start(this.run.bind(this), this.props.interval);
        this.props.keyHandler.register(this.handleKey.bind(this));
    }

    componentWillUnmount() {
        this.props.timer.stop();
        this.props.keyHandler.unregisterAll();
    }

    handleKey(command) {
        if (this.state.pause && command !== "pause") {
            return;
        }
        
        var success;
        
        if (this.state.currentFigure) {
            switch (command) {
                case "boost":
                    this.run();
                    break;
                case "left":
                    success = this.state.currentFigure.moveLeft(this.board);
                    break;
                case "right":
                    success = this.state.currentFigure.moveRight(this.board);
                    break;
                case "rotate":
                    success = this.state.currentFigure.rotate(this.board);
                    break;
                case "pause":
                    this.setState({ pause: !this.state.pause });
                    
                    if (this.state.pause) {
                        this.props.timer.stop();
                    } else {
                        this.props.timer.restart();
                    }
                    
                    break;
            }
        }
        
        if (success) {
            this.setState({});
        }
    }
    
    run() {
        var newState = {};
        var moved = this.state.currentFigure.moveDown(this.board);
            
        if (!moved) {
            newState.currentFigure = this.state.nextFigure;
            newState.nextFigure = this.props.figureGenerator.generate();
            newState.score = this.state.score + this.props.scoreHandler.handleScore(this.board);
            
            newState.nextFigure.place(this.cleanMatrix(this.previewBoard), 0, 0);
            var placed = newState.currentFigure.place(this.board, 0, this.props.width / 2 - 1);
            
            if (!placed) {
                this.componentWillUnmount();
                newState.gameOver = true;
            }
        }
        
        this.setState(newState);
    }
    
    render() {
        var cssClass;
        var message;
        
        if (this.state.pause) {
            message = "Pause";
        } else if (this.state.gameOver) {
            message = "Game over";
        }
        
        if (message) {
            cssClass = "message";
        }
        
        return ( 
            <div className="tetris-content">
                <div className={"tetris-board " + cssClass}>
                    <div className="tetris-message">{message}</div>
                    <Board board={this.board} />
                </div>
                <div className="tetris-info">
                    <div className="tetris-score">
                        <div>Score:</div>
                        <label>{this.state.score}</label>
                    </div>
                    <div className="tetris-preview">
                        <div>Next figure:</div>
                        <Board board={this.previewBoard} />
                    </div>
                </div>
            </div>
        )
    }
}