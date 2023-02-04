/**

You are going to build a stone wall. The wall should be straight and N meters long, and its thickness should be constant; however, it should have different heights in different places. The height of the wall is specified by an array H of N positive integers. H[I] is the height of the wall from I to I+1 meters to the right of its left end. In particular, H[0] is the height of the wall's left end and H[N−1] is the height of the wall's right end.

The wall should be built of cuboid stone blocks (that is, all sides of such blocks are rectangular). Your task is to compute the minimum number of blocks needed to build the wall.

Write a function:

function solution(H);

that, given an array H of N positive integers specifying the height of the wall, returns the minimum number of blocks needed to build it.

For example, given array H containing N = 9 integers:

  H[0] = 8    H[1] = 8    H[2] = 5
  H[3] = 7    H[4] = 9    H[5] = 8
  H[6] = 7    H[7] = 4    H[8] = 8
the function should return 7. The figure shows one possible arrangement of seven blocks.



Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array H is an integer within the range [1..1,000,000,000].
*/

//set으로 풀었더니 정확도는 맞으나 효율이 안나옴

function solution(H) {
    // 이전값과 비교해서 같다면 answer는동일
    // 이전값과 비교해서 크다면 answer는 +1
    // 이전값과 비교해서 작은데 그값이 스택에 존재하지 않으면 answer는 +1
    let answer = 0;
    const exampleSet = new Set();
    let min;
    for(let i = 0; i<H.length; i++){
        if(i === 0){
            exampleSet.add(H[i]);
            answer++;
            //일단 최소값을 첫번째수로 초기화
            min = H[i];
        }else{
            if(H[i-1]<H[i]){
                answer++;
                exampleSet.add(H[i]);
            }//내려갔는데 그게 최소값이면 set을 초기화해야함
            else if(H[i-1]>H[i]){
                if(min > H[i]){
                    exampleSet.clear();
                    min = H[i];
                    exampleSet.add(min);
                    answer ++;
                }else if(!exampleSet.has(H[i])){
                    exampleSet.add(H[i]);
                    answer++;
                }
            }
        }

    }

    return answer;
}


function solution(H) {
    const n = H.length;
    const stack = [];
    let result = 0;

    for (let i = 0; i < n; i++) {
        while(stack.length > 0 && H[i] < stack[stack.length - 1]) {
            stack.pop();
        }

        if (stack.length === 0 || H[i] > stack[stack.length - 1]) {
            result += 1;
            stack.push(H[i]);
        }
    }

    return result;
}
