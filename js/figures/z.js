/* this is tetris figure Z:
 * ##
 *  ##
 */
class Z extends Figure {
    constructor() {
        super("z");
        this.leftToRight = true;
    }
    
    canPlace(board, x, y) {
        if (this.leftToRight) {
            return board[x] &&
                   board[x + 1] &&

                   board[x][y] === null && 
                   board[x][y + 1] === null && 
                   board[x + 1][y + 1] === null && 
                   board[x + 1][y + 2] === null;
        }
        
        return board[x - 1] &&
               board[x] && 
               board[x + 1] &&
               
               board[x - 1][y + 1] === null && 
               board[x][y] === null &&
               board[x][y + 1] === null &&
               board[x + 1][y] === null;
    }
    
    draw(board, symbol) {
        if (this.leftToRight) {
            board[this.x][this.y] = symbol; 
            board[this.x][this.y + 1] = symbol; 
            board[this.x + 1][this.y + 1] = symbol; 
            board[this.x + 1][this.y + 2] = symbol; 
            return;
        }

        board[this.x - 1][this.y + 1] = symbol;
        board[this.x][this.y] = symbol;
        board[this.x][this.y + 1] = symbol;
        board[this.x + 1][this.y] = symbol;
    }
    
    doRotate() {
        this.leftToRight = !this.leftToRight;
    }
    
    undoRotate() {
        this.leftToRight = !this.leftToRight;
    }
}