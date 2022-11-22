$(document).ready(function () { 
  $('.nav-tecnm__container li').click(function(e){
    $('.nav-tecnm__container li').removeClass('drop-activa')
    e.stopPropagation()
    if ($(window).width() <= 1100) { 
      $(this).addClass('drop-activa')
    }
  })
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
        let padre_content = $(this).parent().siblings()[0];
        $(padre_content).is(":visible") ? $(padre_content).hide() :$(padre_content).show()
        e.stopPropagation();
    })
    
    $(window).resize(function(){
        if ($(window).width() >= 1000) { 
            $('.nav-tecnm__container').css('display','flex')
            $('.show').removeClass('show')
        }else if ($(window).width() <= 699){
            $('.nav-tecnm__container').css('display','none')
        }     
    });

  });
