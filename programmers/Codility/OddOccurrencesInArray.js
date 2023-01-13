/*
A non-empty array A consisting of N integers is given. The array contains an odd number of elements, and each element of the array can be paired with another element that has the same value, except for one element that is left unpaired.

For example, in array A such that:

  A[0] = 9  A[1] = 3  A[2] = 9
  A[3] = 3  A[4] = 9  A[5] = 7
  A[6] = 9
the elements at indexes 0 and 2 have value 9,
the elements at indexes 1 and 3 have value 3,
the elements at indexes 4 and 6 have value 9,
the element at index 5 has value 7 and is unpaired.
Write a function:

function solution(A);

that, given an array A consisting of N integers fulfilling the above conditions, returns the value of the unpaired element.

For example, given array A such that:

  A[0] = 9  A[1] = 3  A[2] = 9
  A[3] = 3  A[4] = 9  A[5] = 7
  A[6] = 9
the function should return 7, as explained in the example above.

Write an efficient algorithm for the following assumptions:

N is an odd integer within the range [1..1,000,000];
each element of array A is an integer within the range [1..1,000,000,000];
all but one of the values in A occur an even number of times.
*/

function solution(A) {
    // Implement your solution here
    let value = 0;
    let isRemove = false;

    while(A.length > 1){

        isRemove = false;
        A.filter((element,index) => {
            value = A[0];
            if(value == element && index !== 0){
                A.splice(index,1);
                A.splice(0,1);
                isRemove = true;
                return A;
            }
        });
        if(!isRemove){
            return value;
        }
    }
    return A[0];
}

function solution(A) {
  const totalCounter = A.reduce((counter, num) => {
      counter[num] = counter[num] ? counter[num] + 1 : 1;
      return counter;
  }, {});

  for (key in totalCounter) {
      if (totalCounter[key] % 2 === 1) {
          return Number(key);
      }
  }
}

//처음 문제푼 방식은 버블정렬처럼 요소를 검색해서제거하는 방향으로갔으나 시간복잡도가 나오지않아
//reduce함수를 통해서 counter값을 체크하