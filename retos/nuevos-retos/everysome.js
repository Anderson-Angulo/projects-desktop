const lista=[1,"Hola",2,3,4]

const result=lista.some((value,index)=>{
  console.log(index)
  return typeof value === "number"
})

console.log(result)

console.log([1,2,3,[1,2,3,[1,2,3]]].flat(Infinity))