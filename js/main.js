$(document).ready(function () {
  // Header burrger follow
  // setInterval(() => {
  //   if ($(window).scrollTop() > 0 && $('.header__container').hasClass('header__top--open') === false) {
  //     $('.burger').addClass('burger--follow')
  //   } else {
  //     $('.burger').removeClass('burger--follow')
  //   }
  // }, 0);
  // Header overlay
  $('.burger, .overlay').on('click', function (e) {
    e.preventDefault()
    $('.header__container').toggleClass('header__top--open')
    $('.overlay').toggleClass('overlay--show')
  })
  // Header footer link
  $('.podval').click(function () {
    $('.header__container').removeClass('header__top--open');
    $('.overlay').removeClass('overlay--show')
  })
  // Aside
  $('.aside__element').on('click', function () {
    $(this).$('.aside__themes-container').slideDown('slow')
  })
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
  const queryDetach = $('.jQuery__detach-text').detach();
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
  $('.getp').click(function () {
    showHeight('paragraph', $('.paragraph').height())
  })
  $('.getd').click(function () {
    showHeight('document', $(document).height())
  })
  $('.getw').click(function () {
    showHeight('window', $(window).height())
  })
  const innerHeight = $('.innerh')
  $('.innerh').click(function () {
    $('.innerh-text').text(innerHeight.innerHeight())
  })
  // Slider
  $('.slider__next').click(function (e) {
    e.preventDefault();
    const sImg = $('.slider__img.curry');
    const sImgIndex = $('.slider__img.curry').index();
    const nextImgIndex = sImgIndex + 1;
    const nextImg = $('.slider__img').eq(nextImgIndex);
    sImg.fadeOut(1000);
    sImg.removeClass('curry');
    if (nextImgIndex == ($('.slider__img:last').index() + 1)) {
      $('.slider__img').eq(0).fadeIn(1000);
      $('.slider__img').eq(0).addClass('curry');
    } else {
      nextImg.fadeIn(1000);
      nextImg.addClass('curry');
    }
  })
  $('.slider__prev').click(function (e) {
    e.preventDefault();
    const sImg = $('.slider__img.curry');
    const sImgIndex = $('.slider__img.curry').index();
    const prevImgIndex = sImgIndex - 1;
    const prevImg = $('.slider__img').eq(prevImgIndex);

    sImg.fadeOut(1000);
    sImg.removeClass('curry');
    prevImg.fadeIn(1000);
    prevImg.addClass('curry');
  })
  // Back to top button
  const $btnTop = $('.button__back-to-top');
  $btnTop.fadeOut();
  $(window).on('scroll', function () {
    if ($(window).scrollTop() >= 20) {
      $btnTop.fadeIn(500);
    } else {
      $btnTop.fadeOut(10);
    }
  })
  $btnTop.on('click', function () {
    $('html,body').animate({ scrollTop: 0 }, 900)
  })
  // Счетчик
  $('.count').each(function () {
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
      duration: 4000,
      easing: 'swing',
      step: function (now) {
        $(this).text(Math.ceil(now));
      }
    })
  })
  // To Do Task
  const $tasksList = $('#tasksList');
  const $taskInput = $('#taskInput');
  const $notification = $('#tasksNotification');

  const displayNotification = function () {
    if (!$tasksList.children().length) {
      $notification.fadeIn('fast')
    } else {
      $notification.css('display', 'none')
    }
  }

  $('#taskAdd').on('click', function () {
    if (!$taskInput.val()) { return false; }

    $tasksList.append("<li>" + $taskInput.val() + "<button class='delete'>&#10006</button></li>");
    $taskInput.val("");
    displayNotification();
    $('.delete').on('click', function () {
      let $parent = $(this).parent();
      $parent.css('animation', 'fadeOut .3s linear');
      setTimeout(function () {
        $parent.remove();
        displayNotification();
      }, 295)
    })
  })
  //SKILLBAR
  $('.skillbar').each(function () {
    $(this).find('.skillbar-bar').animate({
      width: $(this).attr('data-percent')
    }, 2000)
  })
  //ACCORDION
  $('.accordion-header').on("click", function () {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).next('.accordion-body').slideUp(300);
    } else {
      $('.accordion-header').removeClass('active');
      $('.accordion-body').slideUp(300);
      $(this).addClass('active');
      $(this).next('.accordion-body').slideDown(300);
    }
  })

})