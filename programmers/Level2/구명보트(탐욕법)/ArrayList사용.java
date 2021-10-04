import java.util.*;

//처음 푼 방식은 limit이 100이고 안에 내용이 10,20,30,40,50,50,50이렇게있을때..3개의 보트로도 탈수있다고 생각하면서 풀이를시작햇음
//정렬후 arrayList에서 순서대로 하나씩 넣는 방법으로 짜다가 2명까지 탈수있는 제한인줄 몰라서 처음 방향성 부터 잘못잡은듯
//정답은 맞췃으나 효율성에서 실패함
//문제를 찬찬히.. 잘읽고풀자
class Solution {
    public int solution(int[] people, int limit) {

        Arrays.sort(people);

        ArrayList<Integer> arrayList = new ArrayList<Integer>();

        for (int i = people.length-1; i >=0; i--) {
            arrayList.add(people[i]);
        }
        int cnt = 1;
        int answer = 0;
        int peopleLength = people.length;
        while(true){
            if(arrayList.isEmpty()){
                break;
            }
            if(arrayList.size() <= 1){
                answer++;
                break;
            }else if(cnt == arrayList.size()){
                arrayList.remove(0);
                answer++;
                cnt = 0;
            }else if(arrayList.get(0)+arrayList.get(cnt) <= limit){
                arrayList.remove(cnt);
                arrayList.remove(0);
                answer++;
                cnt = 0;
            }
            cnt++;
        }

        return answer;
    }
}