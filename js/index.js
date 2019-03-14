$(document).ready(function(){

    
    // Show Navbar when Click on icon
    $('i.icon').click(function(){
        $('.nav-list').slideToggle();
    });
    


    // when scroll body....sticky mav par
    $(window).scroll(function(){
        var sc = $(this).scrollTop();
        if(sc > 100 ){  //Show Sticky Navbar
            $('header').addClass('sticky');
        }
        else{
            $('header').removeClass('sticky');

        };

        if( sc > 1980 ){
            
            // cuntTo plugin
         $('.time').countTo();
         $(window).off('scroll');
        }
        if(sc > 500){ //Fade The Scroll Top Btn
            $('.scrollTop').fadeIn();
        }
        else {
            
            $('.scrollTop').fadeOut();
            
        }
    });

    // portfolio buttons change bg
    $('.buttons button').click(function(){
          $(this).addClass('active-btn').siblings().removeClass('active-btn');

          var cssfilter = $(this).attr('id');

           if(cssfilter === 'all'){
              $('.Images > div').fadeIn();
            }  
            else{ 

              $('.Images > div').fadeOut();
              $('.Images').contents().filter('.' + cssfilter).fadeIn();
            }
   })

    // owl carousel >> Team Section
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });


    // Choose Panel 
    $(".c-panel li").click(function(){
        $(this).addClass('active-btn').siblings().removeClass('active-btn');
        var p = $(this).data('role');
        $('.content > div').hide();
        $('.content').contents().filter('#'+ p).fadeIn();
    })

      // popup video in choose section
      $('.pop').magnificPopup({
        type: 'iframe'
    });
    


    // slick slider on pleasure section
    $('.slick-item').slick({
        nextArrow : false,
        prevArrow : false
    });

    
    // Scroll to Top
    $('.scrollTop').click(function(){
        $('body,html').animate({
            scrollTop : 0
        },500);
    });


    // smooth Scroll 

    $('.list a').click(function(){
        
        $('body,html').animate({
            scrollTop : $($(this).attr('href')).offset().top - 100
        });
        
    });



});