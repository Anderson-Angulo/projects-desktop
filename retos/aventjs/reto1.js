function wrapping(gifts) {
  const wrappedGifts=gifts.map(gif=>{
    gif="\n"+"*".concat(gif)+"*".concat("\n")
    let len=gif.length - 2
    gif=gif.padStart(len*2 + 2,"*")
    len=gif.length+len
    return gif.padEnd(len,"*")
  })
  return wrappedGifts
}
const gifts = ['cat', 'game', 'socks']
const wrappedGifts =  wrapping(gifts)
wrappedGifts.forEach(e => {
  console.log(e)
});
/* [
  "*****\\n*cat*\\n*****",
  "******\\n*game*\\n******",
  "*******\\n*socks*\\n*******"
] */