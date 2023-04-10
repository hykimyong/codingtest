const height1 = [130,140];
const height2 = [130,140];
solution(height1,height2);
function solution(height1,height2){
    let answer = 0;
    let temp;
    for(let i = 0; i< height1.length-1; i++){
        //왼쪽이 더크면 왼쪽값은 오름차순이 아니니 무조건 바꿔줘야함
        if(height1[i] > height1[i+1] || height2[i] > height2[i+1]){
            answer++;
            temp = height1[i];
            height1[i] = height2[i];
            height2[i]= temp;
        }else if(height1[i] == height1[i+1] || height2[i] == height2[i+1]){
            //왼쪽꺼를 먼저 바꿔보고 오름차순이 맞으면 바꿔주고
            if(height1[i-1] < height2[i] && height2[i] < height1[i+1] ){
                temp = height1[i];
                height1[i] = height2[i];
                height2[i]= temp;
            }else{
                temp = height1[i+1];
                height1[i+1] = height2[i+1];
                height2[i+1]= temp;
            }
            answer++;
        }
    }
    return answer;
}