$('.burger').click(function(){
    $('.menu').toggleClass('hidden');
});

$('.choice1').click(function(){
    $('.forms__hotel, .forms__holiday, .forms__flight').removeClass('hide');
    $('.forms__hotel, .forms__holiday').addClass('hide');
    $('.choice1, .choice2, .choice3').removeClass('faded');
    $('.choice2, .choice3').addClass('faded');
    
});
$('.choice2').click(function(){
    $('.forms__hotel, .forms__holiday, forms__flight').removeClass('hide');
    $('.forms__flight, .forms__holiday').addClass('hide');
    $('.choice1, .choice2, .choice3').removeClass('faded');
    $('.choice1, .choice3').addClass('faded');
    
});
$('.choice3').click(function(){
    $('.forms__hotel, .forms__holiday, forms__flight').removeClass('hide');
    $('.forms__hotel, .flight').addClass('hide');
    $('.choice1, .choice2, .choice3').removeClass('faded');
    $('.choice2, .choice1').addClass('faded');
    
});

let stickyNav = $('#header').offset().top;

function stickyFct() {
    let scrollPage = $(window).scrollTop();
    if (scrollPage > stickyNav) {
        $('#header').addClass('sticky');
    }else {
        $('#header').removeClass('sticky');
    }
}
$(window).scroll(function () {
    stickyFct();
    
});
$(window).resize(function () {
    stickyNav = $('#header').offset().top;
    stickyFct();
    
});

$(window).resize(function(){
    
  })
  $(window).trigger('resize')