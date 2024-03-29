function homePageAnimation() {
    gsap.set(".slidesm", {
        scale: 5
    })

    let t1 = gsap.timeline({

        scrollTrigger: {
            trigger: '.home',
            start: 'top top',
            end: 'bottom bottom',
            marker: true,
            scrub: 2,


        }

    })

    t1.to('.vediodiv', {

        '--clip': "0%",
        ease: Power2,

    }, 'a')

    t1.to('.slidesm', {
        scale: 1,
        ease: Power2

    }, 'a')

    t1.to('.lft', {
        xPercent: -10,
        stagger: 0.3,
        ease: Power4

    }, 'b')

    t1.to('.rgt', {
        xPercent: 10,
        stagger: 0.3,
        ease: Power4

    }, 'b')
}


function sliderAnimation() {

    gsap.to(".slide", {
        scrollTrigger: {
            trigger: '.real',
            start: "top top",
            end: 'bottom bottom',
            scrub: 1
        },
        xPercent: -200,
        ease: Power4
    })
}


function teamAnimation(){
    document.querySelectorAll(".listelem").forEach((ele) => {
        ele.addEventListener("mousemove", function (dets) {
            gsap.to(this.querySelector(".picture"), {
                opacity: 1,
                ease: Power4,
                duration: .5,
                x:gsap.utils.mapRange(0,window.innerWidth,-200,200,dets.clientX)
            })
        }),
        ele.addEventListener("mouseleave", function (dets) {
            gsap.to(this.querySelector(".picture"), {
                opacity: 0,
                ease: Power4,
                duration: .5
            })
        })
    })
}
let clutter=""

document.querySelector(".textpara").textContent.split("").forEach((e)=>{
    if(e === " ") clutter +=`<span>&nbsp;</span>`
    clutter += `<span>${e}</span>`
})

document.querySelector(".textpara").innerHTML=clutter

gsap.set(".textpara span",{
    opacity:.1
})

gsap.to(".textpara span",{
    scrollTrigger:{
        trigger:".para",
        start:"top 100%",
        // bottom:"bottom 10%",
        scrub:0.3,

    },
    opacity:1,
    stagger:.03,
    ease:Power4
})




 homePageAnimation()
 sliderAnimation()
 teamAnimation()
