class Tetris extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            currentFigure: null,
            score: 0,
            pause: false,
            gameOver: false
        };
        
        this.board = Array(this.props.height);
        for (var i = 0; i < this.board.length; i++) {
            this.board[i] = Array(this.props.width).fill(null);
        }
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
        
        if (this.state.currentFigure) {
            var moved = this.state.currentFigure.moveDown(this.board);
            
            if (!moved) {
                delete this.state.currentFigure;
                
                newState.currentFigure = null;
                newState.score = this.state.score + this.props.scoreHandler.handleScore(this.board);
            }
        } else {
            var figure = this.props.figureGenerator.generate();
            var placed = figure.place(this.board, 0, this.props.width / 2 - 1);
            
            if  (placed) {
                newState.currentFigure = figure;
            } else {
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
                <div className="tetris-score">
                    <div>Score:</div>
                    <label>{this.state.score}</label>
                </div>
            </div>
        )
    }
}