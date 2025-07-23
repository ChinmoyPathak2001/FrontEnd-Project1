const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

//gsap to animate
gsap.from(".nlink", {
    stagger: .1
})
