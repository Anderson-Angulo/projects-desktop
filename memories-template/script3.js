const textarea=document.querySelector('.modal__input textarea')


textarea.addEventListener('keydown',(e)=>{
  textarea.style.height="10em"
  textarea.style.fontSize="1rem"
  let scHeight=e.target.scrollHeight
  textarea.style.height=`${scHeight}px`
  if(scHeight>160){
      textarea.style.fontSize="13px"
  }

})