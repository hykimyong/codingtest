function solution(exp){
    let results = cal(exp);
    result.sort((a,b)=>{
        return a-b;
    });

    return results;
}

function cal(exp){
    let results = [];
    for(let i =0; i<exp.length; i++){
        //연산자를 만나면
        if(exp[i]==='*' || exp[i]==='+' || exp[i]==='-'){
            //현재기준으로 왼쪽오른족나눔
            let left = exp.slice(0,i);
            let right = exp.slice(i+1);
            let leftArr = cal(left);
            let rightArr = cal(left);

            for(let j = 0; j<leftArr.length; j++){
                for(let k = 0; k<rightArr.length; k++){
                    if(exp[i]==='*'){
                        results.push(leftArr[j]*rightArr[k]);
                    }else if(exp[i]==='+'){
                         results.push(leftArr[j]+rightArr[k]);
                    }else if(exp[i]==='-'){
                        results.push(leftArr[j]-rightArr[k]);
                    }
                }
            }
        }
    }

    if(results.length === 0){
        results.push(parseInt(exp));
    }

    return results;
}