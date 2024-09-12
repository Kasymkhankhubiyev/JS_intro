

for (let num = 1; num <= 100; num+=1){
    if ((num % 3 == 0) & ! (num % 5 == 0)){
        console.log('FIZZ')
    } else if (!(num % 3 == 0) & (num % 5 == 0)){
        console.log('BUZZ')
    } else if ((num % 3 == 0) & (num % 5 == 0)){
        console.log('FIZZBUSS')
    } else console.log(num)
}