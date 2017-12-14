class ScoreHandler {
    handleScore(board) {
        var filledRows = 0;
        
        for (var i = 0; i < board.length; i++) {
            if (this.isFilled(board[i])) {
                var array = board.splice(i, 1)[0];
                this.fillWithNull(array);
                board.unshift(array);
                filledRows++;
            }
        }

        return this.power(filledRows) * 100;
    }
    
    isFilled(array) {
        for (var i = 0; i < array.length; i++) {
            if (array[i] === null) {
                return false;
            }
        }
        
        return true;
    }
    
    fillWithNull(array) {
        for (var i = 0; i < array.length; i++) {
            array[i] = null;
        }
    }
    
    power(number) {
        var result = number;
        
        while (number > 1) {
            number--;
            result *= number;
        }
        
        return result;
    }
}