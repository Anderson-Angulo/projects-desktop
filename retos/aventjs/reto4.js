function fitsInOneBox(boxes) {
  const boxesInside=[]
  const orderedBoxes=boxes.sort((a,b)=>{
    if(a.l<b.l && a.w<b.w && a.h<b.h)return -1
    return 1
  })
  
  for(let i=0;i<orderedBoxes.length-1;i++){
    if(orderedBoxes[i].l<orderedBoxes[i+1].l && orderedBoxes[i].w<orderedBoxes[i+1].w  && orderedBoxes[i].h<orderedBoxes[i+1].h ){
      boxesInside.push(orderedBoxes[i])
    }
  }
  return boxesInside.length===orderedBoxes.length-1
}

const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 5 },
  { l: 3, w: 4, h: 5 }
]

console.log(fitsInOneBox(boxes))