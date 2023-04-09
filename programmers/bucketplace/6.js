function solution(numbers,goal){
    for(let i = 0; i< numbers.length; i++){
        for(let j = 1; j< numbers.length; j++){
            if(numbers[i]+numbers[j] === goal){
                let answer =  [i,j];
                console.log(answer);
                return;
            }
        }
    }
}