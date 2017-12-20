/* this is tetris figure square:
 * ##
 * ##
 */
class O extends Figure {
    constructor() {
        super("o");
    }
    
    canPlace(board, x, y) {
        return board[x] && 
               board[x][y] === null &&
               board[x][y + 1] === null &&

               board[x + 1] &&
               board[x + 1][y] === null &&
               board[x + 1][y + 1] === null;
    }
    
    draw(board, symbol) {
        board[this.x][this.y] = symbol;
        board[this.x][this.y + 1] = symbol;
        board[this.x + 1][this.y] = symbol;
        board[this.x + 1][this.y + 1] = symbol;
    }
    
    rotate(board) {
        return false;
    }
}