$(document).ready(function() {
    $('.header__burger').click(function() {
        $('.header__burger, .header__menu, .header__logo').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

$(document).ready(function() {
    $('.header__link').click(function() {
        $('.header__burger, .header__menu, .header__logo').toggleClass('active');
        $('body').toggleClass('lock');
    })
})

var options = {
    root: document.querySelector('#scrollArea'),
    rootMargin: '0px',
    threshold: 1.0
}
var callback = function(entries, observer) {
    entries.forEach(entry => {
        entry.time;               // a DOMHightResTimeStamp indicating when the intersection occurred.
        entry.rootBounds;         // a DOMRectReadOnly for the intersection observer's root.
        entry.boundingClientRect; // a DOMRectReadOnly for the intersection observer's target.
        entry.intersectionRect;   // a DOMRectReadOnly for the visible portion of the intersection observer's target.
        entry.intersectionRatio;  // the number for the ratio of the intersectionRect to the boundingClientRect.
        entry.target;             // the Element whose intersection with the intersection root changed.
        entry.isIntersecting;     // intersecting: true or false
    });
};
var observer = new IntersectionObserver(callback, options);
var target = document.querySelector('.avatar1');
observer.observe(target);