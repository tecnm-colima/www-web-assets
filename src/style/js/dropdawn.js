$(document).ready(function () { 
    $('.slider').bxSlider({
        auto: true,
         
        slideWidth: screen.width,
        /*          adaptiveHeight:true, //opcional */
     });
    
    $('.nav-tecnm li').hover(function (){
      $(this).find("ul");
      $($(this).find("ul")[0]).toggleClass('show');
    },function (){
      $($(this).find("ul")[0]).toggleClass('show');
    })
    
    $('.nav-tecnm li').click(function (e){
      $(this).find("ul");
      $($(this).find("ul")[0]).toggleClass('show');
      e.stopPropagation();
    })
    $('.nav-tecnm__responsive li').click(function(e){
        let padre_resposivo = $(this).parent();
        let padre_content = $(this).parent().siblings()[0];
        $(padre_content).is(":visible") ? $(padre_content).hide() :$(padre_content).show()
        e.stopPropagation();
    })
    
    $(window).resize(function(){
        if ($(window).width() >= 700) { 
            $('.nav-tecnm__container').css('display','flex')
            $('.show').removeClass('show')
        }else if ($(window).width() <= 699){
            $('.nav-tecnm__container').css('display','none')
        }     
    });

  });