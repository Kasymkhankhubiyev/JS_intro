// Chessboard


for (let x = 0; x < 8; x+=1){
    let string = ''
    for (let y = 0; y < 8; y += 1){
        if (x % 2 == 0){
            if  (y % 2 == 0) {
                string += ' '
            } else string += '#'
        }  else {
            if  (y % 2 == 0) {
                string += '#'
            } else string += ' '
        }
    }
    console.log(string)
}