class O {
    constructor() {

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

    place(board, x, y) {
        if (this.canPlace(board, x, y)) {
            this.x = x;
            this.y = y;
            
            this.draw(board, "o");
            
            return true;
        }
        
        return false;
    }
    
    moveDown(board) {
        var result = false;
        
        this.draw(board, null);
        
        if (this.canPlace(board, this.x + 1, this.y)) {
            this.x += 1;
            result = true;
        }
        
        this.draw(board, "o");
        
        return result;
    }
    
    rotate(board) {
        
    }
}