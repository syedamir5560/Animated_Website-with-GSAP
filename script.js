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


function teamAnimation() {
    document.querySelectorAll(".listelem").forEach((ele) => {
        ele.addEventListener("mousemove", function (dets) {
            gsap.to(this.querySelector(".picture"), {
                opacity: 1,
                ease: Power4,
                duration: .5,
                x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX)
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

function paraAnimation() {
    let clutter = ""

    document.querySelector(".textpara").textContent.split("").forEach((e) => {
        if (e === " ") clutter += `<span>&nbsp;</span>`
        clutter += `<span>${e}</span>`
    })

    document.querySelector(".textpara").innerHTML = clutter

    gsap.set(".textpara span", {
        opacity: .1
    })

    gsap.to(".textpara span", {
        scrollTrigger: {
            trigger: ".para",
            start: "top 60%",
            end: "bottom 90%",
            scrub: 0.1,

        },
        opacity: 1,
        stagger: .03,
        ease: Power4
    })
}

function loco() {
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}


function capsuleAnimation() {
    gsap.to(".capsule:nth-child(2)", {
        scrollTrigger: {
            trigger: ".capsules",
            start: "top 70%",
            end: "bottom bottom",
            scrub: 2
        },
        y: 0,
        ease: Power4
    })
}


document.querySelectorAll(".section").forEach((e) => {
    ScrollTrigger.create({
        trigger: e,
        start: "top 90%",
        end: "bottom 50%",
        onEnter: function () {
            document.body.setAttribute("theme", e.dataset.color)
        },

        onEnterBack: function () {
            document.body.setAttribute("theme", e.dataset.color)
        },
    })
})


loco()
homePageAnimation()
sliderAnimation()
teamAnimation()
paraAnimation()
capsuleAnimation()
