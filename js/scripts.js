/*!
* Start Bootstrap - Freelancer v7.0.4 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
//

//$("#com_portfolioModal1").on('hidden.bs.modal', function (e) {
//    //$("#fer_vid").attr("src", $("#fer_vid").attr("src"));
//    console.log($(this).html());
//});

//$("#portfolioModal3").on('hidden.bs.modal', function (e) {
//    $("#col_vid").attr("src", $("#col_vid").attr("src"));
//});

//$(document).ready(function () {
//    var $videoSrc;
//    $('.video-btn').click(function () {
//        $videoSrc = $(this).data("src");
//    });
//    $('#com_portfolioModal1').on('hide.bs.modal', function (e) {
//        $("#fer_vid").attr('src', $videoSrc);
//    })
//});

//$(document).ready(function () {
//    var $videoSrc;
//    $(".video-btn").click(function () {
//        $videoSrc = $(this).data("src");
//    });
//    $("#myModal").on("shown.bs.modal", function (e) {
//        $("#video").attr(
//            "src",
//            $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
//        );
//    });
//    $("#myModal").on("hide.bs.modal", function (e) {
//        $("#video").attr("src", ""); // Remove the video source.
//    });
//});

//$('#projects').on('hidden.bs.modal', function (e) {
//    var $iframes = $(e.target).find('iframe');
//    $iframes.each(function (index, iframe) {
//        $(iframe).attr('src', $(iframe).attr('src'));
//    });
//})

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
