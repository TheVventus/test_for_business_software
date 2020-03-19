$(function($){
    function isErrorCVC (input) {
        let error = Math.random();
        if (error > 0.5) {
            $(input).css('border-color','#EE2A23');
        }
    }
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

    isErrorCVC($('.form-cvc'));

});



