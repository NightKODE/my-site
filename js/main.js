
$(function(){
  setInterval(() => {
    if ($(window).scrollTop() > 0 && $('.header__container').hasClass('header__top--open') === false) {
      $('.burger').addClass('burger--follow')
    } else {
      $('.burger').removeClass('burger--follow')
    }

  }, 0);
  // $(window).on('scroll', function(){
  // })
  $('.burger, .overlay').on('click', function (e) {
    e.preventDefault()
    $('.header__container').toggleClass('header__top--open')
    $('.overlay').toggleClass('overlay--show')
  })
})
