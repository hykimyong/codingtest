class Solution {
    public String solution(String[] participant, String[] completion) {
        String answer = "";

        boolean findAnswer = false;
        for(int i=0; i< completion.length; i++){
            for(int j=0; j< participant.length; j++){
                if(completion[i].equals(participant[j])){
                    participant[j]="1";
                    break;
                }
            }
        }
        for(int i=0; i<participant.length; i++){

            if(!participant[i].equals("1")){
                answer=participant[i];
            }
        }
        return answer;
    }
}