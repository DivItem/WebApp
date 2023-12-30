//preloder
$(".fakeloader").fakeLoader({

  //Time in milliseconds for fakeLoader disappear
  timeToHide:1500, 
  
  //'spinner1', 'spinner2', 'spinner3', 'spinner4', 'spinner5', 'spinner6', 'spinner7' 
  spinner:"spinner2",//Options: 
  
  //Background color. Hex, RGB or RGBA colors
  bgColor:"#009000",
  
  });
      
      $(window).load(function(){
    $('#preloader').fadeOut('slow',function(){$(this).remove();});
  });

  
//Menu Sticky When Scroll Bottom & Top.
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY >= 200) {
      header.classList.add('sticky-scroll');
  } else {
      header.classList.remove('sticky-scroll');
  }
});

//Bottom To Top Button
const button = document.querySelector('.b2t-btn');
const displayButton = () => {
  window.addEventListener('scroll', () => {
    console.log(window.scrollY);
  
    if (window.scrollY > 100) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  });
};
const scrollToTop = () => {
  button.addEventListener("click", () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    }); 
    console.log(event);
  });
};
displayButton();
scrollToTop();





