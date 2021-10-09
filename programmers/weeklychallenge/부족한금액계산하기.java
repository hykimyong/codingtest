class Solution {
    public long solution(int price, int money, int count) {
        long cntSum = 0;
        for(int i =1; i<=count; i++){
            cntSum += i;
        }
        long answer = -1;

        if(cntSum*price > money){
            answer = cntSum*price-money;
        }else{
            answer = 0;
        }

        return answer;
    }
}