/* this is tetris figure rectangle:
 * #
 * #
 * #
 * #
 */
class I {
    constructor() {
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

    place(board, x, y) {
        if (this.canPlace(board, x, y)) {
            this.x = x;
            this.y = y;
            
            this.draw(board, "i");
            
            return true;
        }
        
        return false;
    }
    
    move(board, newX, newY) {
        var result = false;
        
        this.draw(board, null);
        
        if (this.canPlace(board, newX, newY)) {
            this.x = newX;
            this.y = newY;
            result = true;
        }
        
        this.draw(board, "i");
        
        return result;
    }
    
    moveDown(board) {
        return this.move(board, this.x + 1, this.y);
    }
    
    moveLeft(board) {
        return this.move(board, this.x, this.y - 1);
    }
    
    moveRight(board) {
        return this.move(board, this.x, this.y + 1);
    }
    
    rotate(board) {
        var result = false;
        
        this.draw(board, null);
        this.vertical = !this.vertical;
        
        if (this.canPlace(board, this.x, this.y)) {
            result = true;
        } else {
            this.vertical = !this.vertical;
        }
        
        this.draw(board, "i");
        
        return result;
    }
}