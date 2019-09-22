$('.nav-ul  li').click(function () {
    'use strict';
 $(this).addClass('selected').siblings().removeClass('selected');
});
$(document).ready(function () {
$('.form-control-button').click(function(){
$('.products-test').css("display","block");
$(this).hide();
$('.form-control-button-2').css("display","block");
})    
});
$(document).ready(function ()
                 {
    $('.form-control-button-2').click(function(){
  $('.form-control-button').show();
        $('.products-test').css("display","none");
        $(this).hide();
    })
});

$(document).ready(function () {
$('.tirkish-button').click(function(){
$('.tirkish-hide').css("display","block");
$(this).hide();
$('.tirkish-button-2').css("display","block");
})    
});
$(document).ready(function ()
                 {
    $('.tirkish-button-2').click(function(){
        $(this).hide();
        $('.tirkish-hide').css("display","none");
        $('.tirkish-button').css("display","block");
    })
});