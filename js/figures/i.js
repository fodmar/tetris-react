/* this is tetris figure rectangle:
 * #
 * #
 * #
 * #
 */
class I extends Figure {
    constructor() {
        super("i");
        this.vertical = true;
    }
    
    canPlace(board, x, y) {
        if (this.vertical) {
            return board[x] &&
                   board[x + 1] &&
                   board[x + 2] &&
                   board[x + 3] &&

                   board[x][y] === null && 
                   board[x + 1][y] === null && 
                   board[x + 2][y] === null && 
                   board[x + 3][y] === null;
        }
        
        return board[x + 2] && 
               board[x + 2][y - 2] === null && 
               board[x + 2][y - 1] === null &&
               board[x + 2][y] === null &&
               board[x + 2][y + 1] === null;
    }
    
    draw(board, symbol) {
        if (this.vertical) {
            board[this.x][this.y] = symbol; 
            board[this.x + 1][this.y] = symbol; 
            board[this.x + 2][this.y] = symbol; 
            board[this.x + 3][this.y] = symbol; 
            return;
        }

        board[this.x + 2][this.y - 2] = symbol;
        board[this.x + 2][this.y - 1] = symbol;
        board[this.x + 2][this.y] = symbol;
        board[this.x + 2][this.y + 1] = symbol;
    }
    
    doRotate() {
        this.vertical = !this.vertical;
    }
    
    undoRotate() {
        this.vertical = !this.vertical;
    }
}