const navSearchIcon=document.querySelector(".nav__search i")
const navSearch=document.querySelector(".nav__search ")
const navLogo=document.querySelector(".nav__logo")
const navUser=document.querySelector(".nav__user")



navSearchIcon.addEventListener('click',()=>{
  if(navSearch.classList.contains("scale") || screen.width>640){
    navLogo.style.display="block"
    navUser.style.display="block"
    navSearch.classList.remove("scale")
    // Buscar
    return
  }
  navLogo.style.display="none"
  navUser.style.display="none"
  navSearch.classList.add('scale')
})






  