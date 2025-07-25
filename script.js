const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

//gsap to animate
gsap.from(".nlink", {
    stagger: .2,
    y: 10,
    duration: 1,
    ease: Power2,
    opacity: 0
})

//shery js to animate images.
Shery.textAnimate("#headings h1", {
    
    style: 1,
    y: 10,
    delay: 0.1,
    duration: 0.3,
    ease: "cubic-bezier(0.23, 1. 0.320, 1)",
    multiplier: 0.1,
});
