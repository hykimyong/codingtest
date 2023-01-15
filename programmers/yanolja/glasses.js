/*
There are N empty glasses with a capacity of 1,2,..., N liters (there is exactly one glass of each unique capacity). You want to pur exactly K liters of water into glasses. Each glass may be either full of empty (a glass cannot be partially filled). what is the minimum number of glasses that you need to contain K liters of water?

that, given two integers N and K, return the minimum number of glasses that are needed to contain exactly K liters of water. If it is not possible to  pour exactly K liters of water into glasses then the function should return -1

Examples:
1. Given N = 5 and K  = 8 function should return 2 there are five glasses of capacity 1,2,3,4 and 5. You can use two glasses with capacity 3 and 5 to hold 8 liters of water

2. Given N = 4 and K 10 the function should return 4 you must use all the glasses to contain 10 liters of water

3.Given N =1 and K=2 the function should return -1 There is only one glass with capacity 1, so you cannot pour 2 liters of water

4.Given N = 10 and K = 5 the function should return 1 you can use the glaass with capacity 5

*/

function solution(N, K) {
    let result = 0;

    if(N*(N+1)/2 < K){
        result = -1;
    }else if(N*(N+1)/2 == K){
        result = N;
    }else{
        let glasses = [];

        for(let i = N; i>=1; i--){
            glasses.push(i);
        }
        while(K> 0){
            K = glasses.slice(0).reduce((acc,cur,i,arr)=>{
                if(acc>=cur){
                    result++;
                    arr.splice(1);
                    glasses.splice(i,1);;
                    return acc-cur;
                }else{
                    return acc;
                }
            },K);
        }
    }

    return result;
}
