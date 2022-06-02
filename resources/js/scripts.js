/* Sticky navigation */ 
$(document).ready(function() {

    $('.js--section-features').waypoint(function(direction) 
    {
        if (direction == "down") { $('nav').addClass('sticky'); 
        } else { 
            $('nav').removeClass('sticky'); 
        }
    }, { 
        offset: '100px'
    });

    // Scroll buttons
    $('.js--scroll-to-thaifood').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-thaifood').offset().top}, 1000);
    });
    $('.js--scroll-to-start').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });

    // Mobile navigation
    $('.js--nav-icon').click(function() {
        var nav = $('.main-nav'); 
        var icon = $('.js--nav-icon i');
        nav.slideToggle(200);
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }

        
    }
    )
    ;

});        
