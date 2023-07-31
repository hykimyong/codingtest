/**
대충만든자판
출처 : https://school.programmers.co.kr/learn/courses/30/lessons/160586#
*/

function solution(keymap, targets) {
    var answer = [];
    let remember = {};
    for(let i =0; i<keymap.length; i++){
        for(let j = 0; j<keymap[0].length; j++){
            if(remember[keymap[i][j]] === undefined){
                remember[keymap[i][j]] = j+1;
            }else{
                remember[keymap[i][j]] = remember[keymap[i][j]] > j+1 ? j+1 : remember[keymap[i][j]];
            }
        }
    }
    for(let i = 0; i<targets.length; i++){
        let count = 0;
        for(let j = 0; j<targets[i].length; j++){
            if(remember[targets[i][j]] === undefined){
                count = -1;
                break;
            }else{
                count += remember[targets[i][j]];
            }
        }
        answer.push(count);
    }
    return answer;
}
