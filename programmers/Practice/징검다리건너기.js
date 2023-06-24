/**
 * 카카오 초등학교의 "니니즈 친구들"이 "라이언" 선생님과 함께 가을 소풍을 가는 중에 징검다리가 있는 개울을 만나서 건너편으로 건너려고 합니다. 
 * "라이언" 선생님은 "니니즈 친구들"이 무사히 징검다리를 건널 수 있도록 다음과 같이 규칙을 만들었습니다.

징검다리는 일렬로 놓여 있고 각 징검다리의 디딤돌에는 모두 숫자가 적혀 있으며 디딤돌의 숫자는 한 번 밟을 때마다 1씩 줄어듭니다.
디딤돌의 숫자가 0이 되면 더 이상 밟을 수 없으며 이때는 그 다음 디딤돌로 한번에 여러 칸을 건너 뛸 수 있습니다.
단, 다음으로 밟을 수 있는 디딤돌이 여러 개인 경우 무조건 가장 가까운 디딤돌로만 건너뛸 수 있습니다.
"니니즈 친구들"은 개울의 왼쪽에 있으며, 개울의 오른쪽 건너편에 도착해야 징검다리를 건넌 것으로 인정합니다.
"니니즈 친구들"은 한 번에 한 명씩 징검다리를 건너야 하며, 한 친구가 징검다리를 모두 건넌 후에 그 다음 친구가 건너기 시작합니다.

디딤돌에 적힌 숫자가 순서대로 담긴 배열 stones와 한 번에 건너뛸 수 있는 디딤돌의 최대 칸수 k가 매개변수로 주어질 때, 최대 몇 명까지 징검다리를 건널 수 있는지 return 하도록 solution 함수를 완성해주세요.
 */

function solution(stones, k) {
    var answer = 0;
    let jump = 0;
    while(true){
        for(let i =0; i<stones.length; i++){
            if(stones[i] >0){
                stones[i] -=1;
                jump = 0;
            }else{
                jump += 1;
                if(jump === k){
                    return answer;
                }
            }
        }
        answer++;
    }
    
    return answer;
}

//답
function checkStone(stones, mid, k) {
    let now = 0; // 몇개가 연속으로 0 미만이 되었는지
    for(let i = 0; i < stones.length; i++) {
        if(stones[i] < mid) { // mid가 더 크면 stones[i] - mid 가 0보다 작다는 소리다. 그러면 마지막 사람이 지나가기 전에 돌이 0이 됐다는 소리다.
          // 만약 딱 0이라면 자신이 지나가고 나서 0이 되므로 지나갈 수 있다는 소리.
            now += 1;
        }
        else { // 지나갈 수 있을 땐 연속으로 못 지나가는게 초기화 됨.
            now = 0;
        }
        if(now >= k) { // 연속으로 못 지나가는 개수가 k보다 크거나 같으면 통과 못 하는 것.
            return false;
        } 
    } 
    
    return true;
}
function solution(stones, k) {
    let left = 1; // 최소, 최대값
    let right = 200000000;

    while(left < right-1) {
        let mid = parseInt((left + right) / 2);
        console.log(stones,mid,k);
        if (checkStone(stones, mid, k)) {
            left = mid;
        }
        else {
            right = mid;
        }
    }

    return left;
}