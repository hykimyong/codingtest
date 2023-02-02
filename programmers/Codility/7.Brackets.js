/**
A string S consisting of N characters is considered to be properly nested if any of the following conditions is true:

S is empty;
S has the form "(U)" or "[U]" or "{U}" where U is a properly nested string;
S has the form "VW" where V and W are properly nested strings.
For example, the string "{[()()]}" is properly nested but "([)()]" is not.

Write a function:

function solution(S);

that, given a string S consisting of N characters, returns 1 if S is properly nested and 0 otherwise.

For example, given S = "{[()()]}", the function should return 1 and given S = "([)()]", the function should return 0, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..200,000];
string S is made only of the following characters: "(", "{", "[", "]", "}" and/or ")".
*/

function solution(S) {
    let answer = 1;
    const length = S.length;
    const stack = [];

    //이거를 만나면 pop을 해야함 나머지를 만나면 push
    const popData = ['}',']',')'];
    const obj = {
        '{' : '}',
        '}' : '{',
        '[' : ']',
        ']' : '[',
        '(' : ')',
        ')' : '(',
    }
    let leftCnt = 0;
    for(let i = 0; i < length; i++ ){
        if(leftCnt>length/2){
            answer = 0;
            break;
        }
        
        if(popData.includes(S[i])){
            if(stack.pop() !== obj[S[i]]){
                answer = 0;
                break;
            }
        }else{
            stack.push(S[i]);
            leftCnt++;
        }
    }


    return answer;
}