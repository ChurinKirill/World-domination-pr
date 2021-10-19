function toggleBurger() {
    $('.header__burger, .header__menu, .header__logo').toggleClass('active');
}

function toggleBodyLock() {
    $('body').toggleClass('lock');
}

function toggleAnimation(selector) {
    $(selector).toggleClass('anim');
}

function anim( selector) {
    if ( $(this).scrollTop() > $(selector).offset().top - 350) {
        $(selector).addClass('anim');
    }
}

function animate(selector) {
    $(window).ready(function(){
        anim(selector);
    });
    $(window).scroll(function(){
        anim(selector);
    });
}

$(document).ready(function() {
    $('.header__burger').click(function() {
        toggleBurger();
        toggleBodyLock();
    });
});

$(document).ready(function() {
    $('.header__link').click(function() {
        toggleBurger();
        toggleBodyLock();
    })
});

animate('.example');
animate('.avatar1');
animate('.avatar2');