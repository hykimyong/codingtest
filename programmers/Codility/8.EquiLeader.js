/**


function solution(A) {
    let answer = 0

    let rightobj = {};
    let rightLength = A.length;

    for(let i = 0; i<A.length; i++){
        rightobj[A[i]] = (rightobj[A[i]] || 0) + 1;
    }

     let leftobj = {};
    let leftLength = 0;
    let leftLeader = 0;
    let leftCount = 0;

    for(let i = 0; i<A.length; i++){
        rightobj[A[i]] -= 1;
        rightLength -= 1;

        leftobj[A[i]] = (leftobj[A[i]] || 0) + 1;
        leftLength += 1;

        if(leftobj[A[i]] > leftCount){
            leftLeader = A[i];
            leftCount = leftobj[A[i]];
        }

        if(rightobj[leftLeader] > parseInt(rightLength / 2)
        && leftCount > parseInt(leftLength / 2))
        answer++;
    }

    return answer;
}
*/
function solution(A) {
    let answer = 0

    let rightobj = {};
    let rightLength = A.length;

    for(let i = 0; i<A.length; i++){
        rightobj[A[i]] = (rightobj[A[i]] || 0) + 1;
    }

     let leftobj = {};
    let leftLength = 0;
    let leftLeader = 0;
    let leftCount = 0;

    for(let i = 0; i<A.length; i++){
        rightobj[A[i]] -= 1;
        rightLength -= 1;

        leftobj[A[i]] = (leftobj[A[i]] || 0) + 1;
        leftLength += 1;

        if(leftobj[A[i]] > leftCount){
            leftLeader = A[i];
            leftCount = leftobj[A[i]];
        }

        if(rightobj[leftLeader] > parseInt(rightLength / 2)
        && leftCount > parseInt(leftLength / 2))
        answer++;
    }

    return answer;
}