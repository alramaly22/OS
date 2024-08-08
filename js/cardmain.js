/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


const modalViews = document.querySelectorAll('.services__model'),
      modalBtns  = document.querySelectorAll('.serv__botton'),
      modalClose = document.querySelectorAll('.services__model-close')

let modal =  function(modalClick){
  console.log("Opening modal:", modalClick);
  modalViews[modalClick].classList.add('active-modal')
}
modalBtns.forEach((mb,i)=>{
  mb.addEventListener('click',()=>{
    modal(i)
  })
})
modalClose.forEach((mc)=>{
  mc.addEventListener('click',()=>{
    modalViews.forEach((mv)=>{
      mv.classList.remove('active-modal')
    })
  })
})


/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
  }
  window.addEventListener('scroll', scrollUp)
/*=============== DARK LIGHT THEME ===============*/ 

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader--hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild(loader);
  });
});
