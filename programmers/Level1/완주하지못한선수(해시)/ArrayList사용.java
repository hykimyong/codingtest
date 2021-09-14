import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
class Solution {
    public String solution(String[] participant, String[] completion) {
        String answer = "";
        List<String> al = new ArrayList<String>(Arrays.asList(participant));


        for(int i=0; i< completion.length; i++){
            if(al.contains(completion[i])){
                al.remove(completion[i]);
            }
        }
        return al.get(0);
    }
}