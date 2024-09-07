$(document).ready(function () {
  const testJQ = () => {
    console.log('main.js is ready!')
  }
  $('main').on('click', function(){

  });
  // ---------------nothing pages--------------
  const mainHtml = $('#MAINhtml');
  const mainElements = $('#MAINelements');
  const mainCSS = $('#MAINCSS');
  const mainSCSS = $('#MAINSCSS');
  const mainGIT = $('#MAINGIT');
  const mainJAVA = $('#MAINJAVA');
  const mainJQ = $('#MAINJQ');
  const mainSNIP = $('#MAINSNIP');
  const mainLINKS = $('#MAINLINKS');
  const mainVSCODE = $('#MAINVSCODE');
  const mainPage = $('#MAINPAGE');
  $('#MAINhtml').fadeOut();
  $('#MAINelements').fadeOut();
  $('#MAINCSS').fadeOut();
  $('#MAINSCSS').fadeOut();
  $('#MAINGIT').fadeOut();
  $('#MAINJAVA').fadeOut();
  $('#MAINJQ').fadeOut();
  $('#MAINSNIP').fadeOut();
  $('#MAINLINKS').fadeOut();
  $('#MAINVSCODE').fadeOut();
  const asideClose = () => {
    if ($('.aside__mobile').hasClass('aside__mobile--open')) {
      $('.aside__mobile').removeClass('aside__mobile--open')
    }
  };
  const buttonThemesHide = () => {
    $('.button__themes').addClass('hide')
  };
  const buttonThemesShow = () => {
    $('.button__themes').removeClass('hide')
  };
  const removeNowHeader = () => {
    if ($('.header__nav-element').hasClass('now')) {
      $('.header__nav-element').removeClass('now')
    }
  };
  const removeNowAll = () => {
    $('.main__link, #snippets__link, #links__link, #vscode__link').removeClass('now')
  };
  const loaderHide = () => {
    // $('.overlay').toggleClass('show')
    // if($('.overlay').hasClass('show') == false){
    // }
    $('.overlay').toggleClass('show');
    $('.loader').toggleClass('show');
  };
  const loader = () => {
    $('.loader').toggleClass('show');
    if($('.overlay').hasClass('show')){
      !$('.overlay').toggleClass('show')
    }
    if(!$('.overlay').hasClass('show')){
      $('.overlay').toggleClass('show')
    }
    setTimeout(loaderHide, 1000)
  };
  const mainSlide = (a, b, c, d, e, f, g, h, i, j, k) => {
    a.fadeIn();
    b.fadeOut();
    c.fadeOut();
    d.fadeOut();
    e.fadeOut();
    f.fadeOut();
    g.fadeOut();
    h.fadeOut();
    i.fadeOut();
    j.fadeOut();
    k.fadeOut();
    loader();
  };
  //MAIN
  $('.main__link').on('click', function (e) {
    e.preventDefault();
    buttonThemesShow();
    $('html, body').animate({ scrollTop: 0 });
    mainSlide(mainPage, mainElements, mainHtml, mainCSS, mainSCSS, mainGIT, mainJAVA, mainJQ, mainSNIP, mainLINKS, mainVSCODE);
    removeNowHeader();
    $(this).addClass('now')
    $('#snippets__link, #links__link, #vscode__link').removeClass('now');
  });
  //ELEMENTS
  $('.elements__link').on('click', function (e) {
    e.preventDefault();
    buttonThemesShow();
    $('html, body').animate({ scrollTop: 0 });
    mainSlide(mainElements, mainJAVA, mainJQ, mainSNIP, mainLINKS, mainVSCODE, mainPage, mainHtml, mainCSS, mainSCSS, mainGIT);
    removeNowHeader();
    $(this).addClass('now');
    removeNowAll()
  });
  //HTML
  $('.html__link').on('click', function (e) {
    e.preventDefault();
    buttonThemesShow();
    $('html,body').animate({ scrollTop: 0 });
    mainSlide(mainHtml, mainCSS, mainSCSS, mainGIT, mainJAVA, mainJQ, mainSNIP, mainLINKS, mainVSCODE, mainPage, mainElements);
    removeNowHeader();
    $(this).addClass('now');
    removeNowAll()
  });
  //CSS
  $('.css__link').on('click', function (e) {
    e.preventDefault();
    buttonThemesShow();
    $('html,body').animate({ scrollTop: 0 })
    mainSlide(mainCSS, mainSCSS, mainGIT, mainJAVA, mainJQ, mainSNIP, mainLINKS, mainVSCODE, mainPage,mainElements, mainHtml);
    removeNowHeader();
    $(this).addClass('now');
    removeNowAll()
  });
  //SASS
  $('.scss__link').on('click', function (e) {
    e.preventDefault();
    buttonThemesShow();
    $('html,body').animate({ scrollTop: 0 })
    mainSlide(mainSCSS, mainGIT, mainJAVA, mainJQ, mainSNIP, mainLINKS, mainVSCODE, mainPage, mainHtml, mainElements, mainCSS);
    removeNowHeader();
    $(this).addClass('now');
    removeNowAll()
  });
  //GIT
  $('.git__link').on('click', function (e) {
    e.preventDefault();
    buttonThemesShow();
    $('html,body').animate({ scrollTop: 0 })
    mainSlide(mainGIT, mainJAVA, mainJQ, mainSNIP, mainLINKS, mainVSCODE, mainPage, mainHtml, mainCSS, mainElements, mainSCSS);
    removeNowHeader();
    $(this).addClass('now');
    removeNowAll()
  });
  //JAVASCRIPT
  $('.js__link').on('click', function (e) {
    e.preventDefault();
    buttonThemesShow();
    $('html,body').animate({ scrollTop: 0 })
    mainSlide(mainJAVA, mainJQ, mainSNIP, mainLINKS, mainVSCODE, mainPage, mainHtml, mainCSS, mainSCSS, mainElements, mainGIT);
    removeNowHeader();
    $(this).addClass('now');
    removeNowAll()
  });
  //JQ
  $('.jq__link').on('click', function (e) {
    e.preventDefault();
    buttonThemesShow();
    $('html,body').animate({ scrollTop: 0 })
    mainSlide(mainJQ, mainSNIP, mainLINKS, mainVSCODE, mainPage, mainHtml, mainCSS, mainSCSS, mainGIT, mainElements, mainJAVA);
    removeNowHeader();
    $(this).addClass('now');
    removeNowAll()
  });
  //SNIPPETS
  $('#snippets__link').on('click', function (e) {
    e.preventDefault();
    buttonThemesHide();
    $('html,body').animate({ scrollTop: 0 })
    mainSlide(mainSNIP, mainLINKS, mainVSCODE, mainPage, mainHtml, mainCSS, mainSCSS, mainGIT, mainJAVA, mainElements, mainJQ);
    removeNowHeader();
    $(this).addClass('now');
    removeNowAll()
  });
  //LINKS
  $('#links__link').on('click', function (e) {
    e.preventDefault();
    buttonThemesShow();
    $('html,body').animate({ scrollTop: 0 })
    mainSlide(mainLINKS, mainVSCODE, mainPage, mainHtml, mainCSS, mainSCSS, mainGIT, mainJAVA, mainJQ, mainElements, mainSNIP);
    removeNowHeader();
    $(this).addClass('now');
    removeNowAll()
  });
  //VSCODE
  $('#vscode__link').on('click', function (e) {
    e.preventDefault();
    buttonThemesHide();
    $('html,body').animate({ scrollTop: 0 })
    mainSlide(mainVSCODE, mainPage, mainHtml, mainCSS, mainSCSS, mainGIT, mainJAVA, mainJQ, mainElements, mainLINKS, mainSNIP);
    removeNowHeader();
    $(this).addClass('now');
    removeNowAll()
  });
  //FIRST__MODAL
  $('.first-modal__button-continue').on('click', function () {
    $('.first-modal').addClass('disable');
    $('.overlay').removeClass('show');
    $(this).animate({
      opacity: 0,
      bottom: -500,
    }, 300);
    $('.first-modal__text').animate({
      opacity: 0,
      right: -1500,
    }, 300);
    $('.first-modal__container').animate({
      opacity: 0,
      left: -1500,
    }, 300);
    $('.first-modal__hr').animate({
      top: -500,
      opacity: 0,
    }, 300);
    $('.first-modal__heading').animate({
      top: -500,
      opacity: 0,
    }, 300);
    // setTimeout(function(){

    // })
  });
  // Header burger
  $('.burger, .overlay').on('click', function (e) {
    e.preventDefault()
    $('.overlay').toggleClass('show')
    $('.header__inner-mobile').toggleClass('header__top--open');
    if ($('.aside__mobile').hasClass('aside__mobile--open')) {
      $('.aside__mobile').removeClass('aside__mobile--open');
    }
  });
  $('.header__inner-mobile').on('click', function () {
    $('.header__inner-mobile').toggleClass('header__top--open');
  });
  // Header footer link
  $('.podval').click(function () {
    $('.header__inner-mobile').removeClass('header__top--open');
    $('.overlay').removeClass('show')
  });
  // Aside
  $('.aside__link').on("click", function () {
    $('.aside__mobile').removeClass('aside__mobile--open');
    if ($(this).hasClass('aside-active')) {
    } else {
      $('.aside__link').removeClass('aside-active');
      $('.aside__themes-container').slideUp(300);
      $(this).addClass('aside-active');
      $(this).next('.aside__themes-container').slideDown(300);
    }
  });
  //Button themes
  $('.button__themes').on('click', function (e) {
    e.preventDefault();
    if ($('.main__link').hasClass('now')) {
      $('.aside__main').toggleClass('aside__mobile--open')
    }
    if ($('.html__link').hasClass('now')) {
      $('.aside__html').toggleClass('aside__mobile--open');
    };
    if ($('.css__link').hasClass('now')) {
      $('.aside__css').toggleClass('aside__mobile--open');
    };
    if ($('.scss__link').hasClass('now')) {
      $('.aside__scss').toggleClass('aside__mobile--open');
    };
    if ($('.git__link').hasClass('now')) {
      $('.aside__git').toggleClass('aside__mobile--open');
    };
    if ($('.js__link').hasClass('now')) {
      $('.aside__js').toggleClass('aside__mobile--open');
    };
    if ($('.jq__link').hasClass('now')) {
      $('.aside__jq').toggleClass('aside__mobile--open');
    };
    if ($('#links__link').hasClass('now')) {
      $('.aside__links').toggleClass('aside__mobile--open');
    };
    if ($('.header__inner-mobile').hasClass('header__top--open')) {
      $('.header__inner-mobile').removeClass('header__top--open');
    };
    if($('.elements__link').hasClass('now')){
      $('.aside__elements').toggleClass('aside__mobile--open')
    }
    if ($('.overlay').hasClass('show')) {
      $('.overlay').removeClass('show')
    };

  });
  $('.main__inner').on('click', function () {
    $('.aside__mobile').removeClass('aside__mobile--open');
    $('.header__inner-mobile').removeClass('header__top--open');
  });
  $('main').on('click', function () {
    asideClose()
  });
  $('footer').on('click', function () {
    asideClose()
  });
  // let now = $('#snippets__link').hasClass('now') === true
  // ? $('.button__themes').css('display', 'none')
  // : $('.button__themes').css('display', 'flex')
  // : $('#snippets__link').hasClass('now')

  // Light theme button 
  $('.header__button-light-theme').on('click', function () {
    $(this).toggleClass('light');
    if ($(this).hasClass('light')) {
      $('.moon').css('top', '30px');
      $('.sun').css('top', '0px');
      $('.moon--mobile').css('top', '60px');
      $('.sun--mobile').css('top', '7px');
      $('.header').css('background-image', 'url(../images/mramor.jpg)');
      $('html').css('background-image', 'url(../images/mramor.jpg)');
      $('.wrapper').css('color', 'black');
      $('.header__inner').css('color', 'black');
      $('.header__inner-mobile').css('color', 'black');
      $('.header__inner-mobile').css('background-color', 'hsl(0deg 0% 0% / 0%)');
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
      $('button').css('background', 'white');
      $('button').css('color', 'black');
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
      $('.header__button-footer-link').children('svg').css('fill', 'black');
      $('.header__button-footer-link').css('background-color', '#ffffff');
      $('.overlay').css('background', 'rgb(255 255 255 / 77%)');
      $('.interface-panel').css('background', '#b1b1b1');
      $('.main__text').children('span').css('background', '#f35510');

    } else {
      $('.moon').css('top', '0px');
      $('.sun').css('top', '30px');
      $('.moon--mobile').css('top', '7px');
      $('.sun--mobile').css('top', '60px');
      $('.header').css('background-image', 'url(../images/grass1.jpg)');
      $('html').css('background-image', 'url(../images/grass1.jpg)');
      $('.wrapper').css('color', '');
      $('.header__inner').css('color', '');
      $('.header__inner-mobile').css('color', '');
      $('.header__container').css('background-color', '');
      $('.header__inner-mobile').css('background-color', '');
      $('.aside__inner').css('background-color', '');
      $('footer').css('background-color', '');
      $('.footer').css('color', '');
      $('.main__text--code').css('background', '');
      $('.main__text--code').css('border', '');
      $('hr').css('background', '');
      $('.aside__inner').css('color', '');
      $('.side__text').css('color', '')
      $('.side__text').children('p').css('color', '')
      $('.lesson__list').children().children('span').css('background', '');
      $('.main__text').css('background', '');
      $('.main__text').children('span').css('background', '');
      $('button').css('background', '');
      $('button').css('color', '');
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
      $('.header__button-footer-link').children('svg').css('fill', '');
      $('.header__button-footer-link').css('background-color', '');
      $('.overlay').css('background', '');
      $('.interface-panel').css('background', '');
      $('.main__text').children('span').css('background', '');
    }
  });
  // jQuery lesson 1
  $('.query__button').on('click', function () {
    $('.query__text').hide(1000)
  });
  // jQuery lesson 5
  $('.button-hide').on('click', function () {
    $('.doblebutton-text_1').hide(1000)
  });
  $('.button-show').on('click', function () {
    $('.--hide').show(1000)
  });

  $('.shide').on('click', function () {
    $('.slide__text1').slideUp(1000)
  });
  $('.sshow').on('click', function () {
    $('.slide__text2').slideDown(1000)
  });
  $('.sshwhide').on('click', function () {
    $('.slide__text3').slideToggle(1000)
  });

  $('.fhide').click(function () {
    $('.fade__text1').fadeOut(1000);
    $('.fade__text1').fadeIn(1000);
  });
  $('.fshwhide').click(function () {
    $('.fade__text3').fadeToggle(1000)
  });
  $('.fto').click(function () {
    $('.fade__text2').fadeTo(1000, 0.1)
  });

  $('.animate-button').click(function () {
    $('.animate__text').animate({
      'background-color': '#000000',
      'width': '100%'
    })
  });
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
  });
  $('.--right').click(function () {
    queryDetach.appendTo('.--right-element')
    if (queryDetach) {
      queryDetach.appendTo('.--right-element');
      // queryDetach = null;
      // } else{
      //   queryDetach = $('.jQuery__detach-text').detach()
    }
  });

  function showHeight(element, height) {
    $('.paragraph').text('Высота элемента ' + element + ' равна ' + height)
  }
  $('.getp').click(function () {
    showHeight('paragraph', $('.paragraph').height())
  });
  $('.getd').click(function () {
    showHeight('document', $(document).height())
  });
  $('.getw').click(function () {
    showHeight('window', $(window).height())
  });
  const innerHeight = $('.innerh')
  $('.innerh').click(function () {
    $('.innerh-text').text(innerHeight.innerHeight())
  });
  // SLIDER
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
  });
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
  });
  // Back to top button
  const $btnTop = $('.button__back-to-top');
  $btnTop.fadeOut();
  $(window).on('scroll', function () {
    if ($(window).scrollTop() >= 20) {
      $btnTop.fadeIn(500);
    } else {
      $btnTop.fadeOut(10);
    }
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
  });
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
  });
  //SKILLBAR
  $('.skillbar').each(function () {
    $(this).find('.skillbar-bar').animate({
      width: $(this).attr('data-percent')
    }, 2000)
  });
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
  });
  //JavaScript lesson 16
  //button__prompt
  $('.button__prompt').on('click', function () {
    let userAge = prompt('Сколько вам лет?', 18);
    if (userAge >= 18) {
      alert('Доступ к сайту разрешен)')
    } else (
      alert('Доступ все равно разрешен, ограничений по возрасту нет)')
    )
  });
  //button__switch
  $('.button__switch').on('click', function () {
    let ageSwitch = +prompt('Сколько вам лет?', 18);
    switch (true) {
      case ageSwitch < 1: {
        alert('Такого возраста не бывает')
        break
      }
      case ageSwitch >= 100 && ageSwitch <= 150: {
        alert('Не верю, покажи паспорт)')
        break
      }
      case ageSwitch > 150: {
        alert('Вампир что-ли?)')
        break
      }
      default: {
        alert('Ваш возраст ' + ageSwitch + '?')
      }
    }
  });
  //button__for
  $('.button__for').on('click', function () {
    for (let i = 0; i < 4; i++) {
      alert(i)
    }
  });
  //button__break
  $('.button__break').on('click', function () {
    let breakCount = 1
    while (breakCount < 10) {
      alert(breakCount)
      if (breakCount % 5 === 0) {
        alert('Цикл прерван')
        break
      }
      breakCount++
    }
  });
  //button__ocntinue
  $('.button__continue').on('click', function () {
    for (let contCount = 1; contCount < 10; contCount++) {
      if (contCount % 2 === 0) {
        continue
      }
      alert(contCount)
    }
  });
  // for(let classEnd = 1; classEnd<100; classEnd++);
  // if($('.lesson__${classEnd}').ofset() === 80){
  //   $('.aside__element').attr('title')
  // }
  /* ========================================== ELEMENTS ========================================== */
  /* ========================================== ELEMENTS ========================================== */
  //ACCORDION
  $('.elements__accordeon-heading').on("click", function () {
    if ($(this).hasClass('active2')) {
      $(this).removeClass('active2');
      $(this).next('.elements__accordeon-body').slideUp(300);
      $(this).children('.elements__accordeon-icon').children('.elements__accordeon-icon-2').removeClass('active-accordion');
    } else {
      $('.elements__accordeon-header').removeClass('active2');
      $('.elements__accordeon-body').slideUp(300);
      $('.elements__accordeon-icon-2').removeClass('active-accordion');
      $(this).addClass('active2');
      $(this).next('.elements__accordeon-body').slideDown(300);
      $(this).children('.elements__accordeon-icon').children('.elements__accordeon-icon-2').addClass('active-accordion');
    }
  });
  //MODAL
  $('.elements__modal-col').on('click', function () {
    $('.overlay').toggleClass('show');
    $('.elements__modal-container').toggleClass('show');
  });
  $('.elements__modal-close').on('click', function () {
    $('.overlay').toggleClass('show');
    $('.elements__modal-container').toggleClass('show');
  });
  //POPUP
  $('.elements__popup-button').on('click', function(){
    $('.elements__popup-container').addClass('elements__popup-container-show');
    const popupHide = () => $('.elements__popup-container').removeClass('elements__popup-container-show');
    setTimeout(popupHide, 3000)
  });

  //SLICK__SLIDER
  // $('.elements__slider-container').slick();
  // $('.elements__slider-container').slick({
  //   dots: true,
  //   arrows: false,
  //   slidesToShow: 3,
  //   infinite: true,
  //   // draggable: true,
  //   // waitForAnimate: false,
  //   appendDots: $('.elements__slider-dots-container'),
  //   responsive:
  //   [
  //     {
  //       breakpoint: 750,
  //       settings:{
  //         slidesToShow: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 550,
  //       settings:{
  //         slidesToShow: 1,
  //         draggable: true,
  //         dots: true,
  //       },
  //     },
  //   ]
  // })
  // $('.elements__slider-prev').on('click', function (e) {
  //   e.preventDefault()
  //   $('.elements__slider-container').slick('slickPrev')
  // })
  // $('.elements__slider-next').on('click', function (e) {
  //   e.preventDefault()
  //   $('.elements__slider-container').slick('slickNext')
  // })
})

