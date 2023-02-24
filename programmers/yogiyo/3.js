/**
You are given an array A consisting of N integers. Your task is to return an array of N objects that share the same prototype, each of whom should have a value() method, which called on i-th object should return the integer A[i].
The value()  method of all objects must be the same method and it cannot be an own property of those objects (for an object O the following O.hasOwnProperty('value')  should be false).
Write a function
that, given an array A of N integers, returns an array T of N JavaScript objects. For any two indices i, j < N, the following conditions should be true:
    T[i].value() === A[i]
    T[j].value() === A[j]
    T[i].value === T[j].value
    !T[i].hasOwnProperty('value')
    !T[j].hasOwnProperty('value')
where
T = solution(A)
For example, given A = [4,2] , your function should return such array T, that
    T[0].value() === 4
    T[1].value() === 2
    T[0].value === T[1].value
    !T[0].hasOwnProperty('value')
    !T[1].hasOwnProperty('value')

Assume that: N is an integer within the range [1...300];
each element of array A is an integer within the range [−1,000,000,000,1,000,000,000]

*/