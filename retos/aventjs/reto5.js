// // mi idea es crear grupos de 3(maxCities)

// function getMaxGifts(giftsCities, maxGifts, maxCities) { 
//   const map= new Map()
//   const giftsCitiesFiltered=giftsCities.filter(gifCity=>gifCity<= maxGifts)
//   const itemsprobados=[]
//   while(itemsprobados.length<giftsCitiesFiltered.length){
//     let itemPrueba=giftsCitiesFiltered.shift()
//     itemsprobados.push(itemPrueba)
//     for(let i=0;i<giftsCitiesFiltered.length-1;i++){
//        const itemasumar=[itemPrueba]
//       while(itemasumar.length<maxCities){
//         itemasumar.push(giftsCitiesFiltered[i])
//         giftsCitiesFiltered.shift()
//         itemasumar.push(giftsCitiesFiltered[i+1])
//       }
     
    
//       const sumaitems=itemasumar.reduce((acc,v)=>acc+v,0)
//       const itemasumarOrd=itemasumar.sort((a,b)=>a-b).join(",")
//       if(map.get(itemasumarOrd)===undefined){
//         map.set(itemasumarOrd,sumaitems)
//       } 
//     }
//     giftsCitiesFiltered.push(itemPrueba)
//   }
//   const posiblesRes=Array.from(map.values()).filter(v=>v<=maxGifts)

//   return Math.max(...posiblesRes)
// }


// function getRandomInt(max) {
//   return Math.floor(Math.random() * max);
// }

// function getMaxGifts(giftsCities, maxGifts, maxCities) {
//   let combinaciones={}
//   console.log(giftsCities.length)
//   while(Object.keys(combinaciones).length<4){
//       const option=[]
//       while(option.length<3){
//         const el=giftsCities[getRandomInt(giftsCities.length)]
//         console.log(el)
//       }
//       giftsCities.concat(...option)
//      const sum = option.reduce((acc,v)=>acc+v,0)
//      const optionKey=option.sort((a,b)=>a-b).join(",")
     
//      if(!combinaciones[optionKey]){
//       combinaciones[optionKey]=sum
//      }
      
//   }
//   return combinaciones
// }


// console.log(getMaxGifts([12, 3, 11, 5], 20, 2))



function countCities(mycities){
  const cities={}

  mycities.forEach(city => {
      cities[city] = cities[city] ?? 0
      cities[city] += 1
  });

  console.log({...(Object.entries(cities).sort((a,b)=>b[1]-a[1]))})
}

const cities=["los angeles","los angeles","barcelona","barcelona","barcelona","peru","peru","peru","peru"]
countCities(cities)