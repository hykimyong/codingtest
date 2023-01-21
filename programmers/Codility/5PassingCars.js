/**
function solution(A) {
    let eastCnt = 0;
    let passCnt = 0;
    for(let i = 0; i< A.length; i++){
        if(A[i] == 0){
            eastCnt++;
        }else{
            passCnt += eastCnt;
        }
    }

    if(passCnt > 1000000000){
        passCnt = -1
    }
    return passCnt;
}
*/

function solution(A) {
    let eastCnt = 0;
    let passCnt = 0;
    for(let i = 0; i< A.length; i++){
        if(A[i] == 0){
            eastCnt++;
        }else{
            passCnt += eastCnt;
        }
    }

    if(passCnt > 1000000000){
        passCnt = -1
    }
    return passCnt;
}
