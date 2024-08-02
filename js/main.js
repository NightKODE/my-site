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
    $('.header__container').toggleClass('header__top--open');
    $('.overlay').toggleClass('overlay--show');
    if ($('.aside__mobile').hasClass('aside__mobile--open')) {
      $('.aside__mobile').removeClass('aside__mobile--open')
    }
  })
  // Header footer link
  $('.podval').click(function () {
    $('.header__container').removeClass('header__top--open');
    $('.overlay').removeClass('overlay--show')
  })
  // Aside
  $('.aside__link').on("click", function () {
    $('.aside__mobile').removeClass('aside__mobile--open');
    if ($(this).hasClass('aside-active')) {
      $(this).removeClass('aside-active');
      $(this).next('.aside__themes-container').slideUp(300);
    } else {
      $('.aside__link').removeClass('aside-active');
      $('.aside__themes-container').slideUp(300);
      $(this).addClass('aside-active');
      $(this).next('.aside__themes-container').slideDown(300);
    }
  });
  $('.button__themes').on('click', function (e) {
    e.preventDefault;
    $('.aside__mobile').toggleClass('aside__mobile--open')
  });
  $('.main__inner').on('click', function () {
    $('.aside__mobile').removeClass('aside__mobile--open');
    $('.header__container').removeClass('header__top--open');
  });
  // Light theme button 
  $('.header__button-light-theme').on('click', function () {
    $(this).toggleClass('light');
    if ($(this).hasClass('light')) {
      $('.moon').css('top', '30px');
      $('.sun').css('top', '0px');
      $('.header').css('background-image', 'url(/images/mramor.jpg)');
      $('html').css('background-image', 'url(/images/mramor.jpg)');
      $('.wrapper').css('color', 'black');;
      $('.header__inner').css('color', 'black');
      $('.header__container').css('background-color', 'hsl(0deg 0% 0% / 0%)');
      $('.aside__inner').css('background-color', 'hsl(0deg 0% 0% / 0%)');
      $('footer').css('background-color', 'hsl(0deg 0% 0% / 0%)');
      $('hr').css('background', '#f35510');
      $('.main__text--code').css('background', 'rgb(255 255 255 / 39%)');
      $('.main__text--code').css('border', 'solid 3px #f35510');
      $('.footer').css('color', 'black');
      $('.aside__inner').css('color', 'black');
      $('.side__text').css('color', 'black');
      $('.side__text').children('p').css('color', 'black');
      $('.lesson__list').children().children('span').css('background', '#f35510');
      $('.main__text').css('background', 'rgb(255 255 255 / 60%)');
      $('.main__text').children('span').css('background', '#f35510');
      $('button').css('background','white');
      $('button').css('color','black');
      $('h2').css('border-top', 'dashed #f35510');
      $('h2').css('border-bottom', 'dashed #f35510');
      $('.aside__line').css('background', 'rgb(243 85 16 / 42%)');
      $('h3').css('border-top', 'dashed #f35510');
      $('h3').css('border-bottom', 'dashed #f35510');
      $('.header__button-light-theme').css('background-color', 'white');
      $('.header__search-block').css('background-color', 'white');
      $('.search__button-icon').css('background-color', 'white');
      $('.header__search-block').children('input').removeClass('header__search-stroke');
      $('.header__search-block').children('input').toggleClass('header__search-stroke-light');
      $('.lesson__list').children().children('p').css('background', 'rgb(255 255 255 / 39%)');
      $('.lesson__list').children().children('p').children('span').css('background', '#f35510');
      $('.main__text').$('span').css('background', '#f35510');

    } else {
      $('.moon').css('top', '0px');
      $('.sun').css('top', '30px');
      $('.header').css('background-image', 'url(/images/grass1.jpg)');
      $('html').css('background-image', 'url(/images/grass1.jpg)');
      $('.wrapper').css('color', '');
      $('.header__inner').css('color', '');
      $('.header__container').css('background-color', '');
      $('.aside__inner').css('background-color', '');
      $('footer').css('background-color', '');
      $('.main__text--code').css('background', '');
      $('.main__text--code').css('border', '');
      $('hr').css('background', '');
      $('.aside__inner').css('color', '');
      $('.side__text').css('color', '')
      $('.side__text').children('p').css('color', '')
      $('.lesson__list').children().children('span').css('background', '');
      $('.main__text').css('background', '');
      $('.main__text').children('span').css('background', '');
      $('button').css('background','');
      $('button').css('color','');
      $('h2').css('border-top', '');
      $('h2').css('border-bottom', '');
      $('.aside__line').css('background', '');
      $('h3').css('border-top', '');
      $('h3').css('border-bottom', '');
      $('.header__button-light-theme').css('background-color', '');
      $('.header__search-block').css('background-color', '');
      $('.search__button-icon').css('background-color', '');
      $('.header__search-block').children('input').removeClass('header__search-stroke-light');
      $('.header__search-block').children('input').toggleClass('header__search-stroke');
      $('.lesson__list').children().children('p').css('background', '');
      $('.lesson__list').children().children('p').children('span').css('background', '');
      $('.main__text').$('span').css('background', '');
    }
  });
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
});

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