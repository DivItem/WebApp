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
var btn = $('.b2t-btn');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });


// const button = document.querySelector('.b2t-btn');
// const displayButton = () => {
//   window.addEventListener('scroll', () => {
//     console.log(window.scrollY);
  
//     if (window.scrollY > 100) {
//       button.style.display = "block";
//     } else {
//       button.style.display = "none";
//     }
//   });
// };
// const scrollToTop = () => {
//   button.addEventListener("click", () => {
//     window.scroll({
//       top: 0,
//       left: 0,
//       behavior: 'smooth'
//     }); 
//     console.log(event);
//   });
// };
// displayButton();
// scrollToTop();





