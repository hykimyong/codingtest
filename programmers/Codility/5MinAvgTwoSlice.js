/**
A non-empty array A consisting of N integers is given. A pair of integers (P, Q), such that 0 ≤ P < Q < N, is called a slice of array A (notice that the slice contains at least two elements). The average of a slice (P, Q) is the sum of A[P] + A[P + 1] + ... + A[Q] divided by the length of the slice. To be precise, the average equals (A[P] + A[P + 1] + ... + A[Q]) / (Q − P + 1).

For example, array A such that:

    A[0] = 4
    A[1] = 2
    A[2] = 2
    A[3] = 5
    A[4] = 1
    A[5] = 5
    A[6] = 8
contains the following example slices:

slice (1, 2), whose average is (2 + 2) / 2 = 2;
slice (3, 4), whose average is (5 + 1) / 2 = 3;
slice (1, 4), whose average is (2 + 2 + 5 + 1) / 4 = 2.5.
The goal is to find the starting position of a slice whose average is minimal.

Write a function:

function solution(A);

that, given a non-empty array A consisting of N integers, returns the starting position of the slice with the minimal average. If there is more than one slice with a minimal average, you should return the smallest starting position of such a slice.

For example, given array A such that:

    A[0] = 4
    A[1] = 2
    A[2] = 2
    A[3] = 5
    A[4] = 1
    A[5] = 5
    A[6] = 8
the function should return 1, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [2..100,000];
each element of array A is an integer within the range [−10,000..10,000].
*/

function solution(A) {
    let min = A.length;
    let cnt = 0;
    let sum = 0;
    let answer = 0;
    for(let i = 0; i< A.length; i++){
        for(let j = i+1; j<A.length; j++){
            A.reduce((acc,cur,index)=>{
                if(index>=i && index <= j){
                    cnt++;
                    sum +=cur;
                }
            },0);
            if(min > sum/cnt){
                answer = i;
                min = sum/cnt;
            }
            sum = 0;
            cnt = 0;
        }
    }
    return answer;
}

//수학적 특성으로 풀어야함
//a < b인 경우, (a + b)의 평균은 a보다 크다라는걸 고려하면 4개이상의 숫자는 비교할필요가없음
function solution(A) {
    const N = A.length;
    let minAvg = (A[0] + A[1]) / 2;
    let minIndex = 0;
    let avg = 0;

    for(let i=2; i<N; i++){
        avg = (A[i-2] + A[i-1] + A[i]) / 3;
        if(avg < minAvg){
            minAvg = avg;
            minIndex = i-2;
        }

        avg = (A[i-1] + A[i]) / 2;
        if(avg < minAvg){
            minAvg = avg;
            minIndex = i-1;
        }
    }

    return minIndex;

}