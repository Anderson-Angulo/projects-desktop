function getGiftsToRefill(a1, a2, a3) {
  const elements=[...new Set([...a1,...a2,...a3])]
  const faltantes=[]
  let c=0
  elements.forEach(e=>{
    if(a1.indexOf(e)===-1)c+=1
    if(a2.indexOf(e)===-1)c+=1
    if(a3.indexOf(e)===-1)c+=1
    if(c===2) faltantes.push(e)
    c=0
  })
  return faltantes
}

const a1 = ['bici', 'coche', 'bici', 'bici']
const a2 = ['coche', 'bici', 'muñeca', 'coche']
const a3 = ['bici', 'pc', 'pc']


const gifts = getGiftsToRefill(a1, a2, a3) 

console.log(gifts)