/* this is tetris figure T:
 *  #
 * ###
 */
class T extends Figure {
    constructor() {
        super("t");
        
        function Transition(canPlace, draw) {
            this.canPlace = canPlace;
            this.draw = draw;
        };
        
        var deg0 = new Transition(
            function (board, x, y) {
                return board[x] &&
                       board[x + 1] &&
                       board[x][y + 1] === null &&
                       board[x + 1][y] === null &&
                       board[x + 1][y + 1] === null &&
                       board[x + 1][y + 2] === null;
            },
            function (board, symbol, x, y) {
                board[x][y + 1] = symbol;
                board[x + 1][y] = symbol;
                board[x + 1][y + 1] = symbol;
                board[x + 1][y + 2] = symbol;
            });
            
        var deg90 = new Transition(
            function (board, x, y) {
                return board[x - 1] &&
                       board[x] &&
                       board[x + 1] &&
                       board[x][y + 1] === null &&
                       board[x][y + 2] === null &&
                       board[x - 1][y + 2] === null &&
                       board[x + 1][y + 2] === null;
            },
            function (board, symbol, x, y) {
                board[x][y + 1] = symbol;
                board[x][y + 2] = symbol;
                board[x - 1][y + 2] = symbol;
                board[x + 1][y + 2] = symbol;
            });
            
        var deg180 = new Transition(
            function (board, x, y) {
                return board[x - 1] &&
                       board[x] &&
                       board[x][y + 1] === null &&
                       board[x - 1][y] === null &&
                       board[x - 1][y + 1] === null &&
                       board[x - 1][y + 2] === null;
            },
            function (board, symbol, x, y) {
                board[x][y + 1] = symbol;
                board[x - 1][y] = symbol;
                board[x - 1][y + 1] = symbol;
                board[x - 1][y + 2] = symbol;
            });
            
        var deg270 = new Transition(
            function (board, x, y) {
                return board[x - 1] &&
                       board[x] &&
                       board[x + 1] &&
                       board[x][y] === null &&
                       board[x][y + 1] === null &&
                       board[x - 1][y] === null &&
                       board[x + 1][y] === null;
            },
            function (board, symbol, x, y) {
                board[x][y] = symbol;
                board[x][y + 1] = symbol;
                board[x - 1][y] = symbol;
                board[x + 1][y] = symbol;
            });
        
        deg0.next = deg90;
        deg90.next = deg180;
        deg180.next = deg270;
        deg270.next = deg0;
        
        deg0.prev = deg270;
        deg90.prev = deg0;
        deg180.prev = deg90;
        deg270.prev = deg180;
        
        this.currentTransition = deg0;
    }
    
    canPlace(board, x, y) {
        return this.currentTransition.canPlace(board, x, y);
    }
    
    draw(board, symbol) {
        this.currentTransition.draw(board, symbol, this.x, this.y);
    }
    
    doRotate() {
        this.currentTransition = this.currentTransition.next;
    }
    
    undoRotate() {
        this.currentTransition = this.currentTransition.prev;
    }
}