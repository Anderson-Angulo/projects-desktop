function solution(A) {
   let min = Math.min(...A)
   let included=A.includes(min) || min<=0
   while(included){
      min+=1
      included=A.includes(min) || min<=0
   }
   console.log(min)
}

const A = [-1, -3]
solution(A)



