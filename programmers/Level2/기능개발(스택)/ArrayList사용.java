import java.util.*;

class Solution {
    public int[] solution(int[] progresses, int[] speeds) {

        ArrayList<Integer> result = new ArrayList<Integer>();

        Integer myArray[] = new Integer[progresses.length];
        for(int i =0; i<progresses.length; i++){
            if((100-progresses[i])%speeds[i] == 0){
                myArray[i] = ((100-progresses[i])/speeds[i]);
            }else{
                myArray[i] = ((100-progresses[i])/speeds[i])+1;
            }
        }

        int workday = 0;
        int cnt = 0;

        for(int i =0; i<=myArray.length; i++){
            if(i==myArray.length){
                result.add(cnt);
            }else if(workday == 0){
                workday = myArray[i];
                cnt++;
            }else{
                if(workday >= myArray[i]){
                    cnt++;
                }else{
                    result.add(cnt);
                    workday = myArray[i];
                    cnt = 1;
                }
            }

        }

        int[] answer = new int[result.size()];
        int index = 0;
        for(int i = 0; i<answer.length; i++){
            answer[i]=result.get(i);
        }
        return answer;
    }
}