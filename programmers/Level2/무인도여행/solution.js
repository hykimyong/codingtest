//무지성으로 재귀로 푸니 정답률 24프로..
function solution(maps) {
    var answer = [];
    const row = maps.length;
    const col = maps[0].length;
    
    const near = (i,j,sum) => {
        maps[i] = maps[i].substr(0, j) + 'X' + maps[i].substr(j + 1);
        if((i+1) < row && maps[i+1][j]!=='X'){
            sum += parseInt(maps[i+1][j]);
            sum = near(i+1,j,sum);
        }else if((j+1) < col && maps[i][j+1]!=='X'){
            sum += parseInt(maps[i][j+1]);
            sum = near(i,j+1,sum);
        }else if((j-1) >= 0 && maps[i][j-1]!=='X'){
            sum += parseInt(maps[i][j-1]);
            sum = near(i,j-1,sum);
        }else if((i-1) >= 0 && maps[i-1][j]!=='X'){
            sum += parseInt(maps[i-1][j]);
            sum = near(i-1,j,sum);
        }
        return sum;
    }
    
    for(let i = 0; i < row; i++){
        for(let j = 0; j< col; j++){
            if(maps[i][j] !== "X"){
                sum = near(i,j,parseInt(maps[i][j]));
                answer.push(sum);
            }
        }
    }
    
    if(answer.length === 0){
        answer.push(-1);
    }else{
        answer.sort((a, b) => a - b);
    }
    return answer;
}