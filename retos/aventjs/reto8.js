function checkPart(part) {
  const rightToLeft=part.split("").reverse().join("")
  if(part!==rightToLeft){
    let listaLetras=part.split("")
    let listaCopia=part.split("")
    for(let i=0;i<listaLetras.length;i++){
      listaLetras.splice(i,1)
      const newPart=listaLetras.join("")
      const newPartInverse=newPart.split("").reverse().join("")
      if(newPart === newPartInverse){
        return true
      }
      listaLetras.splice(i,0,listaCopia[i])
    }
  }
  return part===rightToLeft
}

console.log(checkPart("midu"))
