/**
 * 공원 산책
문제 설명
지나다니는 길을 'O', 장애물을 'X'로 나타낸 직사각형 격자 모양의 공원에서 로봇 강아지가 산책을 하려합니다. 
산책은 로봇 강아지에 미리 입력된 명령에 따라 진행하며, 명령은 다음과 같은 형식으로 주어집니다.

["방향 거리", "방향 거리" … ]
예를 들어 "E 5"는 로봇 강아지가 현재 위치에서 동쪽으로 5칸 이동했다는 의미입니다. 로봇 강아지는 명령을 수행하기 전에 다음 두 가지를 먼저 확인합니다.

주어진 방향으로 이동할 때 공원을 벗어나는지 확인합니다.
주어진 방향으로 이동 중 장애물을 만나는지 확인합니다.
위 두 가지중 어느 하나라도 해당된다면, 로봇 강아지는 해당 명령을 무시하고 다음 명령을 수행합니다.
공원의 가로 길이가 W, 세로 길이가 H라고 할 때, 공원의 좌측 상단의 좌표는 (0, 0), 우측 하단의 좌표는 (H - 1, W - 1) 입니다.
https://school.programmers.co.kr/learn/courses/30/lessons/172928
 */

//풀다 헷갈려서 못품
function solution(park, routes) {
    var answer = [];
    let [width,height] = [0,0];

    for(let i = 0; i< park.length; i++){
        height = park[i].indexOf("S")
        if(park[i].indexOf("S") > -1){
            width = i;
            break;
        }
    }
    let possible = true;
    
    for(let i = 0; i< routes.length; i++){
        possible = true;
        
        let direction = routes[i].charAt(0);
        let move = routes[i].charAt(2);
        if(direction === "E"){
            if(width+move < 0 || width+move > park.length){
                possible = false;
            }
        }else if(direction === "W"){
            if(width-move < 0 || width-move > park.length){
                possible = false;
            }
        }else if(direction === "S"){
            if(height+move < 0 || height+move > park[0].length){
                possible = false;
            }
        }else{
            if(heightmove < 0 || height-move > park[0].length){
                possible = false;
            }
        }
        if(possible){
            for(let j = 1 ; j<= move; j++){
                  
                if(direction === "E"){
                    width += 1;
                    if(park[width][height] === "X"){
                        width -= j;
                        break;
                    }
                }else if(direction === "W"){
                    width -= 1;
                    if(park[width][height] === "X"){
                        width += j;
                        break;
                    }
                }else if(direction === "S"){
                    height += 1;
                    if(park[width][height] === "X"){
                        
                        height -= j;
                        break;
                    }
                }else{
                    height -= 1;
                    if(park[width][height] === "X"){
                        height += j;
                        break;
                    }
                }
            }
        }
    }
    return [width,height];
}

function solution(park, routes) {
    const N = park.length;
    const M = park[0].length;
  
    let start;
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (park[i][j] == 'S') start = [i, j];
      }
    }
  
    const directions = {
      E: [0, 1],
      W: [0, -1],
      S: [1, 0],
      N: [-1, 0],
    };
  
    for (const route of routes) {
      const [dir, distanceStr] = route.split(' ');
      let distance = parseInt(distanceStr);
      let [nx, ny] = start;
  
      let step = 0;
      while (step < distance) {
        nx += directions[dir][0];
        ny += directions[dir][1];
  
        if (nx < 0 || N <= nx || ny < 0 || M <= ny || park[nx][ny] === 'X') break;
        step++;
      }
      if (step === distance) start = [nx, ny];
    }
  
    return start;
  }