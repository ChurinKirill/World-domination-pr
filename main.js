$(document).ready(function() {
    $('.header__burger').click(function() {
        $('.header__burger, .header__menu, .header__logo').toggleClass('active');
        $('body').toggleClass('lock');
    });
});