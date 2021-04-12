$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop()>79){
            $('#pos-fixed').addClass("pos-fix-menu mobile-row");
            $('#header__content__center').addClass("block__h1__padding");
            $('#links__right__top').addClass("links__society__none");
            $('#links__right__top').removeClass("links__society");
            $('#block__links__menu').addClass("block__links__menu2");
            $('#block__links__menu').removeClass("block__links__menu");
            $('#header').addClass("header__bg");
            $('#header').removeClass("menu__row")
        }else{
            $('#pos-fixed').removeClass("pos-fix-menu mobile-row");
            $('#header__content__center').removeClass("block__h1__padding");
            $('#links__right__top').addClass("links__society");
            $('#links__right__top').removeClass("links__society__none");
            $('#block__links__menu').addClass("block__links__menu");
            $('#block__links__menu').removeClass("block__links__menu2");
            $('#header').addClass("menu__row");
            $('#header').removeClass("header__bg")
        }
    });
    $(".slides").on('init', function(event, slick){
        $("#mainLast").text(slick.slideCount);
    });
    $(".slides").on('afterChange', function(event, slick, currentSlide){
        $("#mainCurrent").text(Math.abs(currentSlide + 1));
    });
    $('.slides').slick({
        slidesToShow: 3, //сколько слайдов показывать в карусели
        slidesToScroll: 3, // сколько слайдов прокручивать за раз
        nextArrow: ".nextArrow",
        prevArrow: ".prevArrow",
        arrows:true,
        infinite: false,
        draggable: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $(".shop__slider").on('init', function(event, slick){
        $("#mainLast__second").text(slick.slideCount);
    });
    $(".shop__slider").on('afterChange', function(event, slick, currentSlide){
        $("#mainCurrent__second").text(Math.abs(currentSlide + 1));
    });
    $('.shop__slider').slick({
        dots: false,
        arrows: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        rows: 2,
        slidesToScroll: 1,
        variableWidth: true,
        prevArrow: '.shop__slider-arrowLeft',
        nextArrow: '.shop__slider-arrowRight',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false,
                    arrows: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false
                }
            },
        ]
    });
});

