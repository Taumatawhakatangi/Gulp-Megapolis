$(function () {

    // burger

    $('.burger').click(function () {
        $('.burger span').toggleClass('active');
        $('.menu__list').toggleClass('active');
        $('body').toggleClass('scroll');
        $('.logo').toggleClass('d-none');  
    })

    $('.menu__link.scrollTo').click(function () {
        $('.burger span').removeClass('active');
        $('.menu__list').removeClass('active');
        $('body').removeClass('oveflow');
    })
    
    // Slider

    $('.slider__wrapper').slick({
        prevArrow: '<button class="periods-slider__prev-btn"><img src="assets/img/periods/arrow-prev.svg" alt="arrow"></button>',
        nextArrow: '<button class="periods-slider__next-btn"><img src="assets/img/periods/arrow-next.svg" alt="arrow"></button>',
        // autoplay: true,
        delay: 100,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    });

    // якори для ссылок прокрутка

    $("a.scrollTo").on("click", function(e){
        e.preventDefault();
        var anchor = $(this).attr('href');
        $('html, body').stop().animate({
            scrollTop: $(anchor).offset().top - 60
        }, 800);
    });






















}) // end JQuery


