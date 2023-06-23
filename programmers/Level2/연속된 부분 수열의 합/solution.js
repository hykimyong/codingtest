/*
문제 설명
비내림차순으로 정렬된 수열이 주어질 때, 다음 조건을 만족하는 부분 수열을 찾으려고 합니다.

기존 수열에서 임의의 두 인덱스의 원소와 그 사이의 원소를 모두 포함하는 부분 수열이어야 합니다.
부분 수열의 합은 k입니다.
합이 k인 부분 수열이 여러 개인 경우 길이가 짧은 수열을 찾습니다.
길이가 짧은 수열이 여러 개인 경우 앞쪽(시작 인덱스가 작은)에 나오는 수열을 찾습니다.
수열을 나타내는 정수 배열 sequence와 부분 수열의 합을 나타내는 정수 k가 매개변수로 주어질 때, 위 조건을 만족하는 부분 수열의 시작 인덱스와 마지막 인덱스를 배열에 담아 return 하는 solution 함수를 완성해주세요. 이때 수열의 인덱스는 0부터 시작합니다.

*/

//시간초과
function solution(sequence, k) {
    let answer = [];
    let sum = [];
    for(let i = 0; i< sequence.length; i++){
        for(j =0; j<sum.length; j++){
            sum[j][1] += sequence[i];
            if(sum[j][1] === k){
                answer.push([sum[j][0],i]);
            }
        }
        sum.push([i,sequence[i]]);
        if(sequence[i] === k){
            return [i,i];
        }
    }
    let min = answer[0][1]-answer[0][0];
    let result = 0;
    for(let i = 0; i< answer.length; i++){
        if((answer[i][1]-answer[i][0]) < min){
            result = i;
            min = answer[i][1]-answer[i][0];
        }
        
    }
    return answer[result];
}


function solution(sequence, k) {
    let answer = [];
    var sum = 0;
    var head = 0;
    for(var i = 0; i<sequence.length;i++){
        sum+=sequence[i];
        if(sum>k){
            while(sum>k){
                sum -= sequence[head++];
            }
        }
        //같다면 리턴
        if(sum===k){
            answer.push([head,i]);
        }
    }
    var min = sequence.length;
    var result = [];
    answer.forEach((element)=>{
        if(min>(element[1]-element[0])){
            min = (element[1]-element[0]);
            result = [element[0],element[1]];
        }
    }) 
    return result;
}