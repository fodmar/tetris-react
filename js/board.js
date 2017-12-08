class Board extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        var board = [];
        
        for (var i = 0; i < this.props.height; i++) {
            var row = [];
            
            for (var j = 0; j < this.props.width; j++) {
                row.push(<Square />);
            }
            
            board.push(<div className="row">{row}</div>);
        }
        
        return (
            <div className="board">
                {board}
            </div>
        );
    }
}