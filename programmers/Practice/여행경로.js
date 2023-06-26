/*

문제 설명
주어진 항공권을 모두 이용하여 여행경로를 짜려고 합니다. 항상 "ICN" 공항에서 출발합니다.

항공권 정보가 담긴 2차원 배열 tickets가 매개변수로 주어질 때, 방문하는 공항 경로를 배열에 담아 return 하도록 solution 함수를 작성해주세요.

제한사항
모든 공항은 알파벳 대문자 3글자로 이루어집니다.
주어진 공항 수는 3개 이상 10,000개 이하입니다.
tickets의 각 행 [a, b]는 a 공항에서 b 공항으로 가는 항공권이 있다는 의미입니다.
주어진 항공권은 모두 사용해야 합니다.
만일 가능한 경로가 2개 이상일 경우 알파벳 순서가 앞서는 경로를 return 합니다.
모든 도시를 방문할 수 없는 경우는 주어지지 않습니다.

https://school.programmers.co.kr/learn/courses/30/lessons/43164
*/

//실패
function solution(tickets) {
    var answer = [];
    const copyTickets = [...tickets];
    copyTickets.sort();
    
    answer.push(tickets[0][0]);
    
    let start = tickets[0][0];
    
    for(let i = 0;i < tickets.length; i++){
        for(let j = 0; j< copyTickets.length; j++){
            if(copyTickets[j][0]===start){
                answer.push(copyTickets[j][1]);
                start = copyTickets[j][1];
                copyTickets.splice(j, 1);
                break;
            }
        }
    };
    
    return answer;
}

//dfs로 풀어도 같음
function solution(tickets) {
    var answer = [];
    let length = tickets.length;
    let start = tickets[0][0];
    const visited = [];
    
    tickets.sort();
    
    function dfs(start){
        answer.push(start);
        if(answer.length === length+1){
            return;
        }else{
            for(let i =0; i<tickets.length; i++){
                if(tickets[i][0] === start){
                    let nextStart = tickets[i][1];
                    tickets.splice(i, 1);
                    dfs(nextStart);
                    break;
                }
            }
        }
    }
    
    dfs(start);
    
    return answer;
}

// input	[["ATL", "SFO"], ["SFO", "ATL"], ["ATL", "ICN"], ["ICN", "ATL"], ["ATL", "AAA"]]
// output 	["ATL", "ICN", "ATL", "SFO", "ATL", "AAA"]이 나와야하지만 ["ATL", "AAA"]가 나오는 경우찾아서 잘못된값이들어가면 pop을해줌
//마지막일수도있음
function solution(tickets) {
    var answer = [];
    let length = tickets.length;
    let start = tickets[0][0];
    const visited = [];
    
    tickets.sort();
    
    function dfs(start){
        answer.push(start);
        if(answer.length === length+1){
            return true;
        }else{
            for(let i =0; i<tickets.length; i++){
                if(!visited[i] && tickets[i][0] === start){
                    visited[i] = true;
                    
                    if(dfs(tickets[i][1])) return true;
                    
                    visited[i] = false;
                }
            }
        }
        
        answer.pop();
        
        return false;
    }
    
    dfs(start);
    
    return answer;
}
