// I-am gasit pe cei cu care vom lucra 
const tabItem = document.querySelectorAll('.tabs__btn-item');
const tabContent = document.querySelectorAll('.tabs__content-item');


// Am uramrrit evenimentul click
tabItem.forEach(function (element){
  element.addEventListener('click', open);
})

function open(evt) {
  //Daca evenimentul click are loc catre cineva il uramrim dupa IP sau ID
  const tabTarget = evt.currentTarget;
  const button = tabTarget.dataset.button;


  // Trecem peste toti cu forEach scoatem class-ul active
  tabItem.forEach(function(item){
    item.classList.remove('tabs__btn-item--active');
  })


  // Cel pe care am apasat respectiv class-ul active se adauga
  tabTarget.classList.add('tabs__btn-item--active');


  tabContent.forEach(function(item){
    item.classList.remove('tabs__content-item--active')
  })
  
  document.querySelector(`#${button}`).classList.add('tabs__content-item--active');
}


const swiper = new Swiper(".swiper", {
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
   },
    autoplay: {
    // Imaginea se va scimba fiecare 3 secunde.
     delay: 3000,
    disableOnInteraction: false,
  },
});
