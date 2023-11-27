

//Locomotive
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


//gsap effects
gsap.from(".nlink",{
    stagger:.1,
    y:10,
    duration:2,
    
})


Shery.textAnimate("#headline h1" , {
    //Parameters are optional.
    style: 2,
    y: 10,
    delay: 0.2,
    duration: 1,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });

gsap.from(".anim2",{
    y:50,
    stagger:.2,
    duration:1,
    opacity:0,
    ease:Expo


})

Shery.imageEffect("#imgeff img", {
    style: 3,
    scrollSnapping: true,
    scrollSpeed: 6,
    touchSpeed: 6,
    damping: 7,
  });