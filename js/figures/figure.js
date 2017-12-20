class Figure {
    constructor(symbol) {
        this.symbol = symbol;
    }
    
    place(board, x, y) {
        if (this.canPlace(board, x, y)) {
            this.x = x;
            this.y = y;
            
            this.draw(board, this.symbol);
            
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
        
        this.draw(board, this.symbol);
        
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
        this.doRotate();
        
        if (this.canPlace(board, this.x, this.y)) {
            result = true;
        } else {
            this.undoRotate();
        }
        
        this.draw(board, this.symbol);
        
        return result;
    }
}