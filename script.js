// Optimize Locomotive Scroll
const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),  // Make sure #main has overflow: hidden
  smooth: true,
  multiplier: 0.5,              // Adjust scroll speed (0.5–1 for natural feel)
  lerp: 0.091,                  // Controls scroll inertia (lower = smoother)
  class: 'is-reveal',          // Class applied to revealed elements
  smartphone: {
    smooth: true,
    breakpoint: 768            // Enable smooth on mobile under 768px
  },
  tablet: {
    smooth: true,
    breakpoint: 1024
  }
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


// Cursor div follow the mouse
const cursor = document.querySelector("#cursor");
const allImage = document.querySelectorAll("img");
const ftextBtn = document.querySelector("#ftext button");
const ftexth1 = document.querySelector("#ftext h1");
const futureVideo = document.querySelector("#future video");

document.addEventListener("mousemove",(e)=>{
    gsap.to(cursor, {
        top : e.clientY+"px",
        left : e.clientX+"px",
        ease : [0.55, 0, 1, 0.45],
        duration : 0.8,
    })
})
// Effect on every image hover
allImage.forEach((items)=>{
    // when hover on image
    items.addEventListener("mouseenter",()=>{
        gsap.to(cursor,{
            height : "120px",
            width : "120px",
            duration : 0.6,
            ease : "linear",
            opacity : 1,
            backgroundColor : "white",
            mixBlendMode : "exclusion",
        })
    })
    // when not hover on image
    items.addEventListener("mouseleave",()=>{
        gsap.to(cursor,{
            height : "60px",
            width : "60px",
            duration : 0.6,
            ease : "linear",
            backgroundColor : "black",
            opacity : 0.5,
            mixBlendMode : "normal"
        })
    })
})
// Effect comes on every video hover
ftextBtn.addEventListener("mouseenter",(e)=>{
    gsap.to(cursor,{
        height : "10px",
        width : "10px",
        duration : 0.5,
        ease : Linear
    });
    // show the video when hover
    gsap.to(futureVideo,{
        opacity : 1,
        ease : Linear,
        duration : 0.5
    })
    gsap.to(ftextBtn,{
        border : "2px solid white",
        color : "white",
        ease : Linear,
        duration : 0.5
    })
    gsap.to(ftexth1,{
        color : "white",
        ease : Linear,
        duration : 0.5
    })
})
ftextBtn.addEventListener("mouseleave",(e)=>{
    gsap.to(cursor,{
        height : "60px",
        width : "60px",
        duration : 0.5,
        ease : Linear
    })
    // hide the video when not hover
    gsap.to(futureVideo,{
        opacity : 0,
        ease : Linear,
        duration : 0.5
    })
    gsap.to(ftextBtn,{
        border : "2px solid #4d4c4c",
        color : "#323232",
        ease : Linear,
        duration : 0.5
    })
    gsap.to(ftexth1,{
        color : "black",
        ease : Linear,
        duration : 0.5
    })
})