function solution(arr1,arr2){
    let result = arr1.filter((element)=>{
        result arr2.includes(element);
    })

    if(result.length === 0){
        return -1;
    }else{
        return Math.min(...result);
    }
}