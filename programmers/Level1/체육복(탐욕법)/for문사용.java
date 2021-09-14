import java.util.Arrays;

class Solution {
    public int solution(int n, int[] lost, int[] reserve) {
        int answer = n-lost.length;
        Arrays.sort(lost);
        Arrays.sort(reserve);

        for(int i = 0; i<lost.length; i++){
            for(int j = 0; j<reserve.length; j++){
                if(lost[i]==reserve[j]){
                    answer++;
                    reserve[j] = -1;
                    lost[i] = -1;
                    break;
                }
            }
        }

        for(int i = 0; i<lost.length; i++){
            if(lost[i]==-1){
                continue;
            }
            for(int j = 0; j<reserve.length; j++){
                if(reserve[j] == -1){
                    continue;
                }
                if(reserve[j] == lost[i]-1 || reserve[j] == lost[i]+1){
                    answer++;
                    reserve[j] = -1;
                    break;
                }
            }
        }
        return answer;
    }
}