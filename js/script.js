function timedText() {
    'use strict';
    var x = document.getElementById('changeText'),
        index = 0,
        arry = ['Desinging', 'Development', 'Planning'];

    setInterval(function () {

        x.innerHTML = arry[index];
        index += 1;
        if (index >= arry.length) {
            index = 0;
        }


    }, 5000);

}

timedText();


$('.slider').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
})


//$(function() {
//    /\\ 
//})
