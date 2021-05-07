$(document).ready(function () {
    // fixed top after scroll
    $(window).bind('scroll', function () {
        var pageHeight = $(window).height() - $('.header nav').height();
        if ($(window).scrollTop() > pageHeight) {
            $('.header nav').removeClass('navbar-dark');
            $('.header nav').addClass('navbar-light fixed-top');
            $('.header nav').css('background', '#fff');
            $('body').css('margin-top', $('.header nav').height());
        } else {
            $('.header nav').removeClass('navbar-light fixed-top');
            $('.header nav').addClass('navbar-dark');
            $('.header nav').css('background', 'rgba(0, 0, 0, 0.5)');
            $('body').removeAttr('style');
        }
    });

    // smooth scroll
    let smooth_scroll = $('.scroll');
    smooth_scroll.click(function (e) {
        e.preventDefault();
        let url = $('body').find($(this).attr('href')).offset().top - $('.header nav').height();
        $('html, body').animate({
            scrollTop: url
        }, 700);
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
        $('.navbar-collapse').removeClass('show');
        return false;
    });

    // scrollspy
    var navHeight = $('nav').outerHeight();
    $('body').scrollspy({
        target: '#mainNav',
        offset: navHeight
    });
});

// $(window).on('scroll', function() {
// 	if ($(this).scrollTop() >= $('#tentang').offset().top - 200) {
// 		$('#tentang .row').css('visibility', 'visible');
// 		$('#tentang .row').addClass('animated fadeIn');
// 		$('#tentang img').addClass('animated pulse');
// 		$('#tentang h4').addClass('animated flipInX');
// 		$('#tentang p').addClass('animated fadeIn');
// 	}

// 	if ($(this).scrollTop() >= $('#jelajahi').offset().top - 200) {
// 		$('#jelajahi .row, #jelajahi h3').css('visibility', 'visible');
// 		$('#jelajahi h3').addClass('animated fadeInUp');
// 		$('.art-area').each(function(i) {
// 			setTimeout(function() {
// 				$('.art-area').eq(i).css('visibility', 'visible');
// 				$('.art-area').eq(i).addClass('animated fadeIn');
// 			}, 500 * (i + 1));
// 		});
// 	}

// 	if ($(this).scrollTop() >= $('#wisata').offset().top - 200) {
// 		$('#wisata .row, #wisata h3, .wisata').css('visibility', 'visible');
// 		$('#wisata h3').addClass('animated fadeInUp');
// 		$('.wisata').addClass('animated fadeIn');
// 	}
// })

if ($('.header')[0]) {
    easy_background('.header', {
        slide: ["./assets/img/background-header.jpg", "./assets/img/background-header2.jpg", "./assets/img/background-header3.jpg"],
        delay: [10000, 10000, 10000]
    });
}

$(window).on('load', function () {
    $(window).scrollTop(200);
    $(window).scrollTop(-200);
});

$('.slider').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    adaptiveHeight: true,
    centerMode: true,
    slidesToShow: 3,
    arrows: false,
    responsive: [{
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            centerMode: false
        }
    }]
});

// sweetalert
var content = document.createElement('span');
content.innerHTML = 'This page is just a statistical page that has no actual "content", this is only for a preview of the results of the 1st Winner of the 2019 Scientific Week Competition for the Pekalongan Regional Level held by STMIK Widya Pratama Pekalongan.<br/><br/>Keep coding & stay humble!';
swal({
    content: content,
    icon: 'info'
});
