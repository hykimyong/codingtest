function solution(rolls){
    let answer = 0;
    const result = [];

    rolls.forEach((element)=>{
        if(element === "R"){
            result.pop();
        }else if(element === "+"){
            result.push(parseInt(result.at(-1))+parseInt(result.at(-2)));
        }else if(element === "D"){
            result.push(result.at(-1)*2);
        }else{
            result.push(parseInt(element));
        }
    });

    answer = result.reduce((prev,now)=>prev+now);

    return answer;
}
