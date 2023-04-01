function solution(happinsess){
    const result = [];
    let count = 0;
    let happyDayCount = 1;

    for(let i = 0; i< happiness.length; i++){
        if(happiness[i]>8){
            count++;
            happyDayCount++;
        }else if(happyDayCount>2){
            happyDayCount--;
            count++;
        }else{
            if(count>0){
                if(happiness[i+1]>8){
                    count +=2;
                    i +=1;
                }else{
                    result.push(count);
                    happyDayCount = 1;
                    count = 0;
                }
            }
        }
        if(i == happiness.length -1){
            result.push(count);
        }
    }

    if(result.length === 0){
        result 0;
    }else{
        return Math.max(...result);
    }

}