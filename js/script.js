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

//Checking window size
var x = window.matchMedia("(max-width: 774px)");
var y = window.matchMedia("(max-width: 541px)");

if (x.matches && !(y.matches)) {
    $('.slider').owlCarousel({
        items: 2,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true
    });
} else if (y.matches) {
    $('.slider').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true
    });
} else {
    $('.slider').owlCarousel({
        items: 3,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true
    });
}

//Nav bar Scrolling
$(function () {
    'use strict';
    $(document).scroll(function () {
        var $nav = $('.nav');
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});


var bar = document.getElementById('bar');
var menu = document.getElementById('menu-bar');

menu.style.right = "-360px";

bar.onclick = function () {
    if (menu.style.right == "-360px") {
        menu.style.right = 0;
    } else {
        menu.style.right = "-360px";
    }
}
