/*=================================================================
                            SERVICES

==================================================================*/
/* Shortform of ready function */
$(function () {
    new WOW().init();
});

/*=================================================================
                            WORK

==================================================================*/
$(function () {
    $("#work").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    })
});

/*=================================================================
                            TEAM

==================================================================*/
$(function () {
    $("#team-member").owlCarousel({

        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true

    });
});
/*=================================================================
                    TESTIMONIALS

==================================================================*/
$(function () {
    $("#customers-testimonials").owlCarousel({

        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true

    });
});

/*=================================================================
                        STATS

==================================================================*/

$(function () {
    $('.counter').counterUp({        
        delay: 10,
        time: 2000      
    });
});

/*=================================================================
                            CLIENTS

==================================================================*/
$(function () {
    $("#clients-list").owlCarousel({

        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true

    });
});


/*=================================================================
                        NAVIGATION

==================================================================*/

// Show//Hide transparent black navigation
$(function(){
    
    $(window).scroll(function(){
        
        if($(this).scrollTop() < 200) {
            
            //hide nav
            $("nav").removeClass("vesco-top-nav");
            
        }   else {
            
            //show navigation bar
            $("nav").addClass("vesco-top-nav");
            
        }
        
        
    });
    
    
});





