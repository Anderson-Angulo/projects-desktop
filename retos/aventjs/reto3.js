function distributeGifts(packOfGifts, reindeers) {
  const totalWeightPerBox=packOfGifts.reduce((accumulator,gift)=>accumulator+gift.length,0)
  const maximumWeight=reindeers.reduce((accumulator,reindeer)=>accumulator+2*reindeer.length,0)
  return Math.floor(maximumWeight/totalWeightPerBox)
}


const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

// el pack de regalos pesa 4 + 4 + 4 = 12
// los renos pueden llevar (2 * 6) + (2 * 6) = 24
// por lo tanto, Santa Claus puede entregar 2 cajas de regalos

console.log(distributeGifts(packOfGifts, reindeers)) // 2