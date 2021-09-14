class Solution {
    public int[] solution(int brown, int yellow) {
        int sum = brown+yellow;
        int n = 0;
        int m = 0;
        int cnt = 3;
        while(true){
            if(sum%cnt == 0){
                n = sum/cnt;
                m = cnt;
                if((n*2) + (m-2)*2 == brown && (n-2)*(m-2) == yellow){
                    break;
                }
            }
            cnt++;
        }

        int[] answer = {n,m};
        return answer;
    }
}