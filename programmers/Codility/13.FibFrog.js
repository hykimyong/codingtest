/**
The Fibonacci sequence is defined using the following recursive formula:

    F(0) = 0
    F(1) = 1
    F(M) = F(M - 1) + F(M - 2) if M >= 2
A small frog wants to get to the other side of a river. The frog is initially located at one bank of the river (position −1) and wants to get to the other bank (position N). The frog can jump over any distance F(K), where F(K) is the K-th Fibonacci number. Luckily, there are many leaves on the river, and the frog can jump between the leaves, but only in the direction of the bank at position N.

The leaves on the river are represented in an array A consisting of N integers. Consecutive elements of array A represent consecutive positions from 0 to N − 1 on the river. Array A contains only 0s and/or 1s:

0 represents a position without a leaf;
1 represents a position containing a leaf.
The goal is to count the minimum number of jumps in which the frog can get to the other side of the river (from position −1 to position N). The frog can jump between positions −1 and N (the banks of the river) and every position containing a leaf.

For example, consider array A such that:

    A[0] = 0
    A[1] = 0
    A[2] = 0
    A[3] = 1
    A[4] = 1
    A[5] = 0
    A[6] = 1
    A[7] = 0
    A[8] = 0
    A[9] = 0
    A[10] = 0
The frog can make three jumps of length F(5) = 5, F(3) = 2 and F(5) = 5.

Write a function:

function solution(A);

that, given an array A consisting of N integers, returns the minimum number of jumps by which the frog can get to the other side of the river. If the frog cannot reach the other side of the river, the function should return −1.

For example, given:

    A[0] = 0
    A[1] = 0
    A[2] = 0
    A[3] = 1
    A[4] = 1
    A[5] = 0
    A[6] = 1
    A[7] = 0
    A[8] = 0
    A[9] = 0
    A[10] = 0
the function should return 3, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..100,000];
each element of array A is an integer that can have one of the following values: 0, 1.
*/

function solution(A) {

    //other shore bank
    A.push(1);

    //array with shortest paths for each leaf/bank
    var reachable = [];
    for(var i = 0; i<A.length; i++){
        reachable.push(-1);
    }

    var possibleJumps = fibArray(A.length);

    //get leafs/bank that can be reached from the starting shore
    for(var i = 0; i<possibleJumps.length; i++){
        if(A[possibleJumps[i]-1]===1){
            reachable[possibleJumps[i]-1] = 1;
        }
    }

    //for every position not reachable by the first bank find the shortest path
    for(var i = 0; i<A.length; i++){
        if(A[i]===1){
            var minPrevPosition = -1;
            var minDist = A.length+100;
            for(var j = 0; j<possibleJumps.length; j++){
                var prevPosition = i-possibleJumps[j];
                if(prevPosition<0 || reachable[i]>-1){
                    break;
                }
                if(reachable[prevPosition]>0 && minDist>reachable[prevPosition]){
                    minPrevPosition = prevPosition;
                    minDist = reachable[prevPosition];
                }
            }
            if(minPrevPosition > -1){
                reachable[i] = minDist + 1;
            }
        }
    }

    return reachable[reachable.length-1];
}

function fibArray(num){
    var current = 2;

    var arr = [0,1,1];

    while(arr[current]<=num){
        current++;
        var next = arr[current-1]+arr[current-2];
        arr.push(next);
    }

    return arr;

}