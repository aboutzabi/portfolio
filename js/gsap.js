gsap.from('.name',{
    duration:1,
    delay:1,
    y:-50,
  

})
gsap.from('.gsap1',{
    y:100,
    delay:1,
    duration:1,
    opacity:0,
})
gsap.to('.inner-binding',{
    y:0,
    delay:1,
    duration:1,
    scrollTrigger:'.inner-binding',
    
})
gsap.to('.language .inner-language .main .bottom',{
    y:0,
    delay:1,
    duration:1,
    scrollTrigger:'.language',
})
gsap.to('.pre .inner-pre .binding1 .inner-binding1 span', {
    y:300,
    duration:4,
    scrollTrigger:{
        trigger:'.pre',
        start:'center center',
        srub:true,
    },
     ease: Power2,
})


  


gsap.set('.card', { x: -1550});

// Create the GSAP animation for each card with stagger and delay
gsap.to('.card', {
  x: 0,
  duration: 3,
  ease: Power4,
  stagger: {
    each: 1, // Adjust the stagger value based on your preference
    start: 2, // Adjust the start value to delay the entire animation
  },
  scrollTrigger: {
    trigger: '.features .inner-features',
    start: 'top top+=100',
    end: 'bottom top',
    scrub: 0.1,

    pin: true,
  },
});
