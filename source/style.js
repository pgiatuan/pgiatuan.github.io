(function ($) {
    $(document).ready(function () {

        $('a[course]').click(function () {
            $('#txt-course').val($(this).attr('course'));
        });

        $('a.link_img').click(function () {
            $.fancybox.open(course_images, {
                'padding': 0,
                'transitionIn': 'none',
                'transitionOut': 'none',
                'type': 'image',
                'changeFade': 0
            });
        });

        // Click icon remove active header menu
        $('.header-menu .row_ls .col-nav .note').click(function () {
            $('.header-menu .row_ls .col-nav').removeClass('active');
            var parent = $(this).parent();
            if ($(parent).hasClass('active')) {
                $(parent).removeClass('active');
            } else {
                $('.header-menu_fixed .row_ls .col-nav.active').removeClass('active');
                $(parent).addClass("active");
            }
            return false;
        });


        //viewport width
        var viewport = $(window).width();
        if (viewport < 768) {
            $('#slide-prize').owlCarousel({
                items: 1,
                loop: true,
                margin: 0,
                nav: false,
                dots: true,
                navText: false,
                autoplay: true,
                autoHeight: false,
                autoplayTimeout: 3200,
                autoplayHoverPause: true,
            });
            $('#step_all').owlCarousel({
                loop: true,
                margin: 0,
                nav: true,
                dots: false,
                navText: false,
                autoplay: true,
                autoHeight: false,
                autoplayTimeout: 3200,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    600: {
                        items: 2,
                    }
                }
            });
            $('#news_all').owlCarousel({
                loop: true,
                margin: 0,
                nav: false,
                dots: true,
                autoplay: true,
                navText: false,
                autoHeight: false,
                autoplayTimeout: 3200,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    600: {
                        items: 2,
                    }
                }
            });
            $('#game_all').owlCarousel({
                items: 1,
                loop: true,
                margin: 0,
                nav: false,
                dots: true,
                autoplay: true,
                navText: false,
                autoHeight: false,
                autoplayTimeout: 3200,
                autoplayHoverPause: true,
            });
            $('#teky_slider').owlCarousel({
                items: 1,
                loop: true,
                margin: 0,
                nav: false,
                dots: true,
                navText: false,
                autoplay: true,
                autoHeight: false,
                autoplayTimeout: 3200,
                autoplayHoverPause: true,
            });
        }
        ;

        $('#ls_logo').owlCarousel({
            items: 6,
            loop: true,
            margin: 0,
            nav: true,
            dots: false,
            navText: false,
            autoplay: true,
            autoHeight: false,
            autoplayTimeout: 3200,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 2,
                },
                768: {
                    items: 3,
                },
                1024: {
                    items: 6,
                }
            }
        });

        $('#header-slide').owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            navText: false,
            dots: true,
            autoplay: true,
            autoHeight: false,
            autoplayTimeout: 3200,
            autoplayHoverPause: true,
        });

        $('#device_slider').owlCarousel({
            loop: true,
            margin: 30,
            dots: true,
            autoplay: true,
            navText: false,
            autoHeight: false,
            autoplayTimeout: 3200,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 2,
                },
                600: {
                    items: 2,
                },
                1000: {
                    items: 5,
                }
            }
        });

        $('#idea_slider').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            navText: false,
            autoplay: true,
            center: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                },
                533: {
                    items: 3,
                    nav: false,
                },
                1000: {
                    items: 5
                }
            }
        })

        // Click icon support header
        $(".list-gr-well ul li .well-click").click(function () {
            var parent = $(this).parent();
            if ($(parent).hasClass("checked")) {
                $(parent).removeClass("checked");
                $('.dropdown-well', $(parent)).slideUp();
            } else {
                $('.list-gr-well ul li.checked .dropdown-well').slideUp();
                $('.list-gr-well ul li.checked').removeClass('checked');
                $(parent).addClass("checked");
                $('.dropdown-well', $(parent)).slideDown();
            }
            return false;
        });

        $(window).scroll(function () {
            if ($(this).scrollTop() > 500) {
                $('.header-menu').addClass('header-menu_fixed');
            } else {
                $('.header-menu').removeClass('header-menu_fixed');
            }
        });

        $('a', $('.box_viewmore ul li.icon_program')).click(function () {
            var id = $(this).attr('href');
            $('html, body').animate({scrollTop: $(id).offset().top - 20}, 700);
            return false;
        });  


        //viewport width
        var viewport = $(window).width();
        if (viewport > 768) {
            $(window).scroll(function () {
                if ($(this).scrollTop() > 300) {
                    $('.full-width--streamer').addClass('streamer--fixed');
                    $('.streamer--fixed').css('visibility','visible');
                } else {
                    $('.full-width--streamer').removeClass('streamer--fixed');
                    $('.streamer--fixed').css('visibility','hidden');
                }
            });
                
            $(window).scroll(function () {
                var scrollT = $(document).scrollTop();
                if (scrollT > 300) {
                    $(".info_box_detail_right").addClass("box_detail_fixed");
                    $(".info_box_detail_right .box_top_right").css('display', 'none');
                    $(".box_device_ln").css('display', 'none');
                } else if (scrollT > 100) {
                    $('.info_box_detail_right').removeClass('box_detail_fixed');
                    $(".info_box_detail_right .box_top_right").css('display', 'none');
                    $(".box_device_ln").css('display', 'none');
                } else {
                    $('.info_box_detail_right').removeClass('box_detail_fixed');
                    $(".info_box_detail_right .box_top_right").css('display', 'block');
                    $(".box_device_ln").css('display', 'block');
                }

                if ($(document).scrollTop() + $('.info_box_detail_right').height() - 0 > $('.p-t-b-40').offset().top) {
                    $(".info_box_detail_right").css('display', 'none');
                } else {
                    $(".info_box_detail_right").css('display', 'block');
                }
            });
        } 

        //Click box menu header scroll
        $('a', $('.header-menu .row_ls .col-nav')).click(function () {
            var id = $(this).attr('href');
            $('html, body').animate({scrollTop: $(id).offset().top - 100}, 700);
            $('.header-menu_fixed').css('margin-bottom', '-100px');
            return false;
        });

        // Click icon click categories-detail
        $(".box_detail_left .box_people_view .box_viewmore li.icon_click").click(function () {
            $('.box_people_view').css("max-height", "100%");
            $('.box_viewmore').css('background', 'none');
            $('.bg_view').css('background', 'none');
            $('.box_viewmore ul li.icon_click').css("display", "none");
        });

        $('.expand-menu').click(function () {
            $('.toggle-navbar').addClass('open');
            $('.submenu-bg').show();
            $('html').css('overflow', 'hidden');
        });
        $('.toggle-navbar .close').click(function () {
            $('.toggle-navbar').removeClass('open');
            $('.submenu-bg').hide();
            $('html').css('overflow', 'inherit');
        });

        $('.left-menu .menu-list ul li .sub-btn').click(function () {
            $('.left-menu .menu-list .menu-content').addClass('open');
            $(this).parent().addClass('active');
            $('.left-menu').addClass('amz-leftmn');
        });

        $('.left-menu .menu-list ul li .sub-content ul li.back').click(function () {
            $('.left-menu .menu-list .menu-content').removeClass('open');
            $('.left-menu .menu-list ul li').removeClass('active');
            $('.left-menu').removeClass('amz-leftmn').removeClass('ebay-leftmn');
        });
         

    });
})(jQuery); 
