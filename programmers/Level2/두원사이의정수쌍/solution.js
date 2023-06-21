/*
x축과 y축으로 이루어진 2차원 직교 좌표계에 중심이 원점인 서로 다른 크기의 원이 두 개 주어집니다. 
반지름을 나타내는 두 정수 r1, r2가 매개변수로 주어질 때, 
두 원 사이의 공간에 x좌표와 y좌표가 모두 정수인 점의 개수를 return하도록 solution 함수를 완성해주세요.
※ 각 원 위의 점도 포함하여 셉니다.
*/
function solution(r1, r2) {
    var answer = 0;
    for(var i = 1; i<=r2; i++){
        var maxY = Math.floor(Math.sqrt(r2**2 - i**2));
        if(r1>i){
            var minY = Math.ceil(Math.sqrt(r1**2 - i**2));
        }
        else{
            var minY = 0;
        }
        answer+= (maxY - minY + 1);
    }
    return answer*4;
}
