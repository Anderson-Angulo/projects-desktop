// function getMaxGifts(giftsCities, maxGifts, maxCities) {
//   if(!giftsCities.some(gf=>gf<=maxGifts)) return 0

//   let giftsCitiesFiltered = giftsCities.filter(g=>g <= maxGifts)

//   if (maxCities === 1) {
//     return Math.min(maxGifts, Math.max(...giftsCitiesFiltered));
//   }

//   //Caso 1:  Si solo hay una ciudad por dejar regalos y mi maximo de regalos es igual o mayor a los que se puede dejar alli sin dejar incompleto
//   if(giftsCities.length === 1){
//     return giftsCities[0]
//   }

//   // Caso 2: Si solo tenemos permitido un viaje , devolveremos aquel mayo numero que no exceda al numero maximo de regalos
//   if(maxCities === 1){
//    let max=Math.max(...giftsCitiesFiltered)
//    if( max <= maxGifts ) return max
//   }

//   // Caso 3: Si el mayor valor del arreglo de maximos numero de regalos que puede dejar en una ciudad es igual al numero maximo de regalos que tiene,haciendo la menor cantidad de viajes osea solo 1 devolvera entonces ese maximo valor
//   if(Math.max(...giftsCitiesFiltered) === maxGifts) return maxGifts

//   // Caso 4
//   // if(giftsCities.length <= maxCities){
//   //   const sum = giftsCities.reduce((acc,g)=>acc+g,0)
//   //   if(sum <= maxGifts) return sum
//   // }

//   //Caso 5
//   // const giftsCitiesOrdered=giftsCities.sort((a,b)=>a-b)
//   // const ultimosElementos=giftsCitiesOrdered.slice(-maxCities)
//   // const mayorSumaPermitida = ultimosElementos.reduce((acc,el)=>acc+el,0)
//   // if(mayorSumaPermitida<=maxGifts) return mayorSumaPermitida

//   let listaVariable=[]
//   let originalCadenaLista = giftsCitiesFiltered.join(',')
//   let maxDic={}
//   let max=0
//   while(listaVariable.join(',') !== originalCadenaLista ){
//     let sumaDeUltimosNElementos=giftsCities.slice(-2).reduce((acc,el)=>el+acc,0)
//     if(sumaDeUltimosNElementos === maxGifts) return sumaDeUltimosNElementos
//     if(sumaDeUltimosNElementos < maxGifts){
//       console.log("no Entra")
//       max=sumaDeUltimosNElementos
//       break
//     }
//     listaVariable=[listaVariable.pop()].concat(listaVariable)
//     console.log(listaVariable)
//   }


//   return max
// }

function getMaxGifts(giftsCities, maxGifts, maxCities) {
  let maxSum = 0;
  
  function dfs(city, giftSum, citiesVisited) {
    if (city === giftsCities.length || citiesVisited === maxCities) {
      if (giftSum > maxSum && giftSum <= maxGifts) {
        maxSum = giftSum;
      }
      return;
    }
    dfs(city + 1, giftSum, citiesVisited); // no visitar esta ciudad
    if (giftsCities[city] <= maxGifts - giftSum) { // visitar esta ciudad
      dfs(city + 1,x|+ giftsCities[city], citiesVisited + 1);
    }
  }
  
  dfs(0, 0, 0);
  return maxSum;
}

// console.log(getMaxGifts([50], 100, 1))


function contar(n){
  for(let i=0;i<n;i++){
    console.log(i)
  }
}

// const inicio=performance.now()
// contar(5)
// const final=performance.now()
// let duracion=final-inicio
// console.log(duracion)

console.time("Duracion del algoritmo contar")
contar(5)
console.timeEnd("Duracion del algoritmo contar")