$(function($){
    $('.cc-number').payment('formatCardNumber');
    $('.cc-exp').payment('formatCardExpiry');
    $('.cc-cvc').payment('formatCardCVC');

    $('.tip').on('click',function() {
        $('.tip').toggleClass('close');
        if($(this).hasClass('close'))
            $('.hint').css('display','block');
        else 
            $('.hint').css('display','none');
    });
    $('.btn-pay').on('click', function() {
        $('.btn-pay').css('opacity','0.6');
    });
    /*
    $('.close').on('click',function() {
        console.log('asd');
        $('.hint').css('display','none');
        $('.tip').removeClass('close');
    });
    */
});



