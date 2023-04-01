function solution(s){
    let answer = '';
    const result = Array.from(s).reduce((map,element)=>{
        map[element] = map[element] ? map[element]+1 : 1;
        return map;
    },{});

    const sort = Object.keys(result).sort((a,b)=>{
        if(result[a]!== result[b]){
            return result[b]-result[a];
        }
        return a.localeCompare(b);
    });

    sort.forEach((element)=>{
        answer += element.repeat(result[element]);
    });
    return answer;
}