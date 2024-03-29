gsap.set(".slidesm",{
    scale:5
})

let t1 =gsap.timeline({

    scrollTrigger: {
        trigger: '.home',
        start: 'top top',
        end: 'bottom top',
        marker: true,
        scrub: 2,
        pin:true

    }

})

t1.to('.vediodiv', {

    '--clip':"0%",
    ease:Power2,
   
},'a')

t1.to('.slidesm',{
    scale:1,
    ease:Power2

},'a')

t1.to('.lft',{
    xPercent:-10,
    stagger:0.3,
    ease:Power4

},'b')

t1.to('.rgt',{
    xPercent:10,
    stagger:0.3,
    ease:Power4

},'b')