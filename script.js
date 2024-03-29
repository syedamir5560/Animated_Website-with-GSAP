function homePageAnimation(){
    gsap.set(".slidesm",{
        scale:5
    })
    
    let t1 =gsap.timeline({
    
        scrollTrigger: {
            trigger: '.home',
            start: 'top top',
            end: 'bottom bottom',
            marker: true,
            scrub: 2,
     
    
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
}



 gsap.to(".slide",{
    scrollTrigger:{
        trigger:'.real',
        start:"top top",
        end:'bottom bottom',
        scrub:2 
    },
    xPercent:-200,
    ease:Power4
 })


 homePageAnimation()
