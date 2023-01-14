/*
A non-empty array A consisting of N integers is given. Array A represents numbers on a tape.

Any integer P, such that 0 < P < N, splits this tape into two non-empty parts: A[0], A[1], ..., A[P − 1] and A[P], A[P + 1], ..., A[N − 1].

The difference between the two parts is the value of: |(A[0] + A[1] + ... + A[P − 1]) − (A[P] + A[P + 1] + ... + A[N − 1])|

In other words, it is the absolute difference between the sum of the first part and the sum of the second part.

For example, consider array A such that:

  A[0] = 3
  A[1] = 1
  A[2] = 2
  A[3] = 4
  A[4] = 3
We can split this tape in four places:

P = 1, difference = |3 − 10| = 7
P = 2, difference = |4 − 9| = 5
P = 3, difference = |6 − 7| = 1
P = 4, difference = |10 − 3| = 7
Write a function:

function solution(A);

that, given a non-empty array A of N integers, returns the minimal difference that can be achieved.

For example, given:

  A[0] = 3
  A[1] = 1
  A[2] = 2
  A[3] = 4
  A[4] = 3
the function should return 1, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [2..100,000];
each element of array A is an integer within the range [−1,000..1,000].
*/

function solution(A) {
    // Implement your solution here
    let answer;
    let result = 0;
    let sumA = 0;
    let sumB = 0;
    for(let i = 1; i< A.length; i++){
        sumA = 0;
        sumB = 0;
        A.reduce((acc,cur,index)=>{
            if(index == 1 ){
                sumA = acc;
            }
            if(i > index){
                sumA += cur;
            }else{
                sumB += cur;
            }
        });
        result = (sumA-sumB) > 0 ? (sumA-sumB) : (sumA-sumB)*-1;
        answer = (answer < result) ? answer : result;
    }
    return answer;
}

//전체합의 절반에 가까운수가
function solution(A) {
    let answer;
    const sum = A.reduce((acc,cur)=>acc+cur);
    const half = sum/2;
    let difference;
    A.reduce((acc,cur,index)=>{
        difference = (acc-half <0) ? (acc-half)*-1 : acc-half;
        answer = (answer < difference) ? answer : difference;
        return acc-cur;
    },sum);
    return answer*2;
}

//다더한거에서 포문돌면서 뺀값의 min값을 저장
function solution(A) {
    let sum = A.reduce((total, value) => total + value, 0)
  let min = Number.POSITIVE_INFINITY
  let cumulativeSum = 0
  for (let i = 0; i < A.length - 1; ++i) {
    cumulativeSum = cumulativeSum + A[i]
    sum = sum - A[i]
    diff = Math.abs(sum - cumulativeSum)
    if (diff < min) {
      min = diff
    }
  }
  return min
}