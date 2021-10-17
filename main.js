function toggleBurger() {
    $('.header__burger, .header__menu, .header__logo').toggleClass('active');
}

function toggleBodyLock() {
    $('body').toggleClass('lock');
}

function toggleAnimation(selector) {
    $(selector).toggleClass('anim');
}

function isVisible(tag) {
    var t = $(tag);
    var w = $(window);
    var wt = w.scrollTop();
    var tt = t.offset().top;
    var tb = tt + t.height();
    return ((tb - 1 <= wt + w.height()) && (tt >= wt - 100));
}

function animate(selector) {
    $(function () {
        $(window).scroll(function () {
            var b = $(selector);
            if (!b.prop("shown") && isVisible(b)) {
                b.prop("shown", true);
                toggleAnimation(selector);
            }
        });
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