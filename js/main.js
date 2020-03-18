let tip = document.querySelector('.icon');
console.log(tip);
$(function () {
    $('.icon').on("click", function(e){ 
        e = e || window.event; 
        e.preventDefault();
        var ypos = $(this).offset().top+24;
        var xpos = $(this).offset().left;
        var RealHint =  $(this).data('hint');
        $(RealHint).css('top',ypos);
        $(RealHint).css('left',xpos);
        $(RealHint).toggle('fast'); 
        return; 
        });
    });