/* this is tetris figure square:
 * ##
 * ##
 */
class O {
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

    place(board, x, y) {
        if (this.canPlace(board, x, y)) {
            this.x = x;
            this.y = y;
            
            this.draw(board, "o");
            
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
        
        this.draw(board, "o");
        
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
        
    }
}