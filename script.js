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
});

//shery js to animate images.

Shery.textAnimate("#headings h1", {
    
    style: 1,
    y: 10,
    delay: 0.1,
    duration: 0.3,
    ease: "cubic-bezier(0.23, 1. 0.320, 1)",
    multiplier: 0.1,
});

Shery.imageEffect("#firstimg", {
    style: 4,
    // debug: true,
    config: {"uColor":{"value":false},"uSpeed":{"value":1,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":2.37,"range":[0,5]},"uFrequency":{"value":5.57,"range":[0,10]},"geoVertex":{"range":[1,64],"value":26.01},"zindex":{"value":"-800","range":[-9999999,9999999]},"aspect":{"value":0.7499999672174442},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
});

Shery.imageEffect("#susimagewrapper", {
      style: 4,
      // debug: true,
      config: {"uColor":{"value":false},"uSpeed":{"value":0.6,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":1.5,"range":[0,5]},"uFrequency":{"value":3.5,"range":[0,10]},"geoVertex":{"range":[1,64],"value":32},"zindex":{"value":"-800","range":[-9999999,9999999]},"aspect":{"value":0.7499999672174442},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
});

Shery.imageEffect("#seapic", {
      style: 4,
      // debug: true,
      config: {"uColor":{"value":false},"uSpeed":{"value":0.54,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":1.22,"range":[0,5]},"uFrequency":{"value":2.75,"range":[0,10]},"geoVertex":{"range":[1,64],"value":41.4},"zindex":{"value":"-800","range":[-9999999,9999999]},"aspect":{"value":0.7083238034813201},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}  
});

Shery.imageEffect("#cloudpic", {
      style: 4,
      // debug: true,
      confug: {"uColor":{"value":false},"uSpeed":{"value":1,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":0.95,"range":[0,5]},"uFrequency":{"value":3.05,"range":[0,10]},"geoVertex":{"range":[1,64],"value":38.03},"zindex":{"value":"-800","range":[-9999999,9999999]},"aspect":{"value":0.6756845991618754},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
      
});

Shery.imageEffect("#bannerpic", {
      style: 4,
      // debug: true,
      config: {"uColor":{"value":false},"uSpeed":{"value":0.66,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":3.21,"range":[0,5]},"uFrequency":{"value":3.89,"range":[0,10]},"geoVertex":{"range":[1,64],"value":22.64},"zindex":{"value":"-800","range":[-9999999,9999999]},"aspect":{"value":2.165829446970105},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
      
})



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