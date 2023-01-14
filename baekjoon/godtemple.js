/*
문제
신을 모시는 사당에는 신을 조각한 돌상 N개가 일렬로 놓여 있다. 각 돌상은 왼쪽 또는 오른쪽을 바라보고 서있다. 창영이는 연속한 몇 개의 돌상에 금칠을 하여 궁극의 깨달음을 얻고자 한다.

궁극의 깨달음을 얻기 위해서는 가능한 한 많은 금색 돌상들이 같은 방향을 바라보아야 한다. 방향이 다른 돌상은 깨달음에 치명적이다. 깨달음의 양은 아래와 같이 정의된다.

| (왼쪽을 바라보는 금색 돌상의 개수) - (오른쪽을 바라보는 금색 돌상의 개수) |

창영이는 궁극의 깨달음을 얻을 수 있을까?

입력
첫째 줄에 돌상의 개수 N이 주어진다.

둘째 줄에 돌상이 나열된 순서대로, 각 돌상이 바라보고 있는 방향이 주어진다. 입력의 편의상 왼쪽은 1, 오른쪽은 2라고 하자.

출력
최대한 많은 깨달음을 얻기 위해 금을 칠하였을 때, 얻을 수 있는 깨달음의 양을 출력한다.

제한
1 ≤ N ≤ 100,000

힌트
칠할 수 있는 돌상의 개수에 제한은 없으며, 반드시 연속한(인접한) 돌상들만 칠할 수 있음(띄엄띄엄 칠할 수 없음)에 유의하라.


예제 입력 1
5
1 1 2 1 2
예제 출력 1
2

예제 입력 2
1
1
예제 출력 2
1

예제 입력 3
2
1 2
예제 출력 3
1

제출은하나.. 틀렸다고 나옴..
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let num = input[0];
let arr = input[1].split(' ');
let resultArr;
(resultArr = []).length = num;
resultArr.fill(0);
for(let i = 0; i<num; i++){
    if(i == 0){
        if(arr[i] % 2 == 1){
            resultArr[i] = 3;
        }else{
            resultArr[i] = 4;
        }
    }else{
        if(arr[i] == arr[i-1]){
            if(arr[i] % 2 == 1){
                // resultArr[i-1] = 3;
                resultArr[i] = 3;
            }else{
                // resultArr[i-1] = 4;
                resultArr[i] = 4;
            }
        }
    }
}
const totalCounter = resultArr.reduce((counter, num) => {
  counter[num] = counter[num] ? counter[num] + 1 : 1;
  return counter;
}, {});

let resultA = totalCounter[3] ? totalCounter[3] : 0 ;
let resultB = totalCounter[4] ? totalCounter[4] : 0 ;

let result = resultA-resultB;

if(result<0){
    result *= -1;
}
console.log(result);