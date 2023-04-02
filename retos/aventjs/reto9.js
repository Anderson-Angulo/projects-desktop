function countTime(leds) {
  let time=0
  let len=leds.length
  let total=leds.reduce((acc,v)=>acc+v,0)
  while(total<len){
    let indexes=[]
    for(let index=0;index<len;index++){
      if(index>0){
        if(leds[index]===0 && leds[index-1]==1){
          indexes.push(index)

        }
      }else{
        if(leds[index]===0 && leds[len-1]==1){
            indexes.push(index)
        }
      }
    }
    indexes.forEach(i=>{
      leds[i]=1
    })
    indexes=[]
    total=leds.reduce((acc,v)=>acc+v,0)
    time+=7
  }
  return time
}


const leds = [0, 0, 1, 0, 0]
console.log(countTime(leds)) // 7


