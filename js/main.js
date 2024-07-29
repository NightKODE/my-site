$(document).ready(function () {
  // Header burrger follow
  setInterval(() => {
    if ($(window).scrollTop() > 0 && $('.header__container').hasClass('header__top--open') === false) {
      $('.burger').addClass('burger--follow')
    } else {
      $('.burger').removeClass('burger--follow')
    }
  }, 0);
// Header overlay
  $('.burger, .overlay').on('click', function(e) {
    e.preventDefault()
    $('.header__container').toggleClass('header__top--open')
    $('.overlay').toggleClass('overlay--show')
  })
// Header footer link
  $('.podval').click(function(){
    $('.header__container').removeClass('header__top--open');
    $('.overlay').removeClass('overlay--show')
  })
// Aside
  // $('.aside__element').on('click', function () {
  //   $('.aside__themes-container').slideDown('slow')
  // })
// jQuery lesson 1
  $('.query__button').on('click', function () {
    $('.query__text').hide(1000)
  })
// jQuery lesson 5
  $('.button-hide').on('click', function () {
    $('.doblebutton-text_1').hide(1000)
  })
  $('.button-show').on('click', function () {
    $('.--hide').show(1000)
  })

  $('.shide').on('click', function () {
    $('.slide__text1').slideUp(1000)
  })
  $('.sshow').on('click', function () {
    $('.slide__text2').slideDown(1000)
  })
  $('.sshwhide').on('click', function () {
    $('.slide__text3').slideToggle(1000)
  })

  $('.fhide').click(function () {
    $('.fade__text1').fadeOut(1000);
    $('.fade__text1').fadeIn(1000);
  })
  $('.fshwhide').click(function () {
    $('.fade__text3').fadeToggle(1000)
  })
  $('.fto').click(function () {
    $('.fade__text2').fadeTo(1000, 0.1)
  })

  $('.animate-button').click(function () {
    $('.animate__text').animate({
      'background-color': '#000000',
      'width': '100%'
    })
  })
// jQuery lesson 6
  $('.--left').click(function () {
    queryDetach.appendTo('.--left-element')
    if (queryDetach) {
      queryDetach.appendTo('.--left-element');
      // queryDetach = null;
      // } else{
      //   queryDetach = $('.jQuery__detach-text').detach();
    }
  })
  $('.--right').click(function () {
    queryDetach.appendTo('.--right-element')
    if (queryDetach) {
      queryDetach.appendTo('.--right-element');
      // queryDetach = null;
      // } else{
      //   queryDetach = $('.jQuery__detach-text').detach()
    }
  })

  function showHeight(element, height) {
    $('.paragraph').text('Высота элемента ' + element + ' равна ' + height)
  }
  $('.getp').click(function(){
    showHeight('paragraph', $('.paragraph').height())
  })
  $('.getd').click(function(){
    showHeight('document', $(document).height())
  })
  $('.getw').click(function(){
    showHeight('window', $(window).height())
  })

  $('.innerh').click(function(){
    $('.innerh-text').text(innerHeight.innerHeight())
  })
})