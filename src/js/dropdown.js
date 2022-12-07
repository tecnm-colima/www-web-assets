$(document).ready(() =>{
    $('.dropdown--responsive').addClass('flex');
    responsivo()
    $(window).resize(() =>{
        responsivo()
    }) 
    $('.dropdown--responsive').click(() => {
        $('.dropdown-content').toggleClass('show')
    })
    if ($(window).width() < 1200) {

        $('.dropdown-item').click(function(e) {
            e.stopPropagation();
            if(this.lastElementChild.tagName == 'UL'){
                $(this.lastElementChild).toggleClass('show')
                if($(this).hasClass('activo')){
                    $(this).find('.show').removeClass('show');
                    $(this).find('.activo').removeClass('activo');
                }
                $(this).toggleClass('activo')
            }
        }) 
    }   
})
function responsivo(){
    $('li .show').removeClass('show')
    $('.activo').removeClass('activo')
    if ($(window).width() < 1200) {
        $('.dropdown-content').hide();
        $('.dropdown--responsive').show();
    }else{
        $('.dropdown-content').show();
        $('.dropdown-content').attr('display','flex !important');
        $('.dropdown--responsive').hide();
    }
}
