class Board extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        var board = [];
        
        for (var i = 0; i < this.props.board.length; i++) {
            var row = this.props.board[i].map(function (e) {
                return <Square />
            });
            
            board.push(<div className="row">{row}</div>);
        }
        
        return (
            <div className="board">
                {board}
            </div>
        );
    }
}