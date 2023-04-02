const textarea=document.querySelector('textarea')
const pHiddens=document.querySelectorAll('.hidden')

textarea.addEventListener('keydown',(e)=>{
  textarea.style.height="40px"
  let scHeight=e.target.scrollHeight
  console.log(scHeight)
  textarea.style.height=`${scHeight}px`
  console.log(e.key)

})
pHiddens.forEach(p=>{
  p.addEventListener('click',()=>{
    p.classList.add('show')
  })
})
  