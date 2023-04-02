function createCube(size) {
  function drawFaceUp(size){
    let str=""
    for(let i=1;i<=size;i++){
      const spaces=" ".repeat(size-i)
      const sideFace="/\\".repeat(i)
      const topFace="_\\".repeat(size)+"\n"
      str+=spaces+sideFace+topface
    }
    return str
  }
  function drawFaceDown(size){
    let str=""
    for(let i=0;i<size;i++){
      const spaces=" ".repeat(i)
      const sideFace="\\/".repeat(size-i)
      const topFace="_/".repeat(size)+"\n"
      str+=spaces+sideFace+topFace
    }
    return str.slice(0,-1)
  }
  return drawFaceUp(size)+drawFaceDown(size)
}

const cubeOfOne = createCube(5)



