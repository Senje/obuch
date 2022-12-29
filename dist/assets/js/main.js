$(document).ready(() => {
    $('.advantages__slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 690,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                }
            }
        ],
    });

    $('.documents__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                }
            },
            {
                breakpoint: 690,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                }
            }
        ],
    });

    $('.benefits__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: false,
        dots: true,
    });

    // benefits__slider counter
    $('.benefits__slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
        currentSlide + 1;
        let number_slider_nav_index = (currentSlide + 1)
        $('.benefits__count').text(number_slider_nav_index + ' из ' + $('.benefits__slider-item').not('.slick-cloned').length);
    });

    $('.licenses__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 690,
                settings: {
                    slidesToShow: 1,
                }
            }
        ],
    });

    $('.reviews__slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 690,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                }
            }
        ],
    });


    $('.how__inner').slick({
        mobileFirst: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 690,
                settings: 'unslick',
            }
        ],
    });
    $(window).resize(() => {
        if ($(window).width() <= 690) {
            $('.how__inner').slick('refresh');
        }
    });

    $('.faq__item').on('click', function () {
        $(this).find('.faq__answer').toggleClass('active');
    });


    // burger
    $('.burger').on('click', function () {
        $(this).toggleClass('active');
        $('.nav__mobile').toggleClass('active');
        $('body').toggleClass('locked');
    });
    $('.nav__mobile-close').on('click', function () {
        $(this).removeClass('active');
        $('.nav__mobile').removeClass('active');
        $('body').removeClass('locked');
    });
});