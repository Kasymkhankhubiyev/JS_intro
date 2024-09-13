// count chars

function countBs(word) {
    let counter = 0
    for (let c = 0; c < word.length; c += 1){
        if (word[c] === 'B') {
            counter += 1
        }
    }
    return counter
}

function countChars(word, char) {
    let counter = 0
    for (let c = 0; c < word.length; c += 1){
        if (word[c] == char){
            counter += 1
        }
    }
    return counter
} 


console.log(countBs('BOB'))
console.log(countChars('kakkerlak', 'k'))