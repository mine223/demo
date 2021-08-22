//Nav bar Scrolling
$(function () {
    'use strict';
    $(document).scroll(function () {
        var $nav = $('.nav');
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});
