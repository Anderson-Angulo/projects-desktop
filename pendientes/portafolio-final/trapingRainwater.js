function trappingRainwater(array){
  let izq=0
  let der=array.length - 1
  let cantidadAlmacenada=0
  let maxIzq=0
  let maxDer=0

  while(izq<=der){
    if(array[izq]>maxIzq){
      maxIzq=array[izq]
    }
    if(array[der]>maxDer){
      maxDer=array[der]
    }
    if(maxIzq<=maxDer){
      cantidadAlmacenada+=maxIzq - array[izq]
      izq++
    }
    if(maxIzq>maxDer){
      cantidadAlmacenada+=maxDer - array[der]
      der--
    }
  }

  return cantidadAlmacenada
}


console.log(trappingRainwater([3,1,3,2,2,3]))