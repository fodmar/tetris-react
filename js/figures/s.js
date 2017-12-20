/* this is tetris figure S:
 *  ##
 * ##
 */
class S extends Figure {
    constructor() {
        super("s");
        this.leftToRight = true;
    }
    
    canPlace(board, x, y) {
        if (this.leftToRight) {
            return board[x] &&
                   board[x + 1] &&

                   board[x][y + 1] === null && 
                   board[x][y + 2] === null && 
                   board[x + 1][y] === null && 
                   board[x + 1][y + 1] === null;
        }
        
        return board[x - 1] &&
               board[x] && 
               board[x + 1] &&
               
               board[x - 1][y] === null && 
               board[x][y] === null &&
               board[x][y + 1] === null &&
               board[x + 1][y + 1] === null;
    }
    
    draw(board, symbol) {
        if (this.leftToRight) {
            board[this.x][this.y + 1] = symbol; 
            board[this.x][this.y + 2] = symbol; 
            board[this.x + 1][this.y] = symbol; 
            board[this.x + 1][this.y + 1] = symbol; 
            return;
        }

        board[this.x - 1][this.y] = symbol;
        board[this.x][this.y] = symbol;
        board[this.x][this.y + 1] = symbol;
        board[this.x + 1][this.y + 1] = symbol;
    }
    
    doRotate() {
        this.leftToRight = !this.leftToRight;
    }
    
    undoRotate() {
        this.leftToRight = !this.leftToRight;
    }
}