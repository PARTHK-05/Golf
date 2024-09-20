var crsr = document.querySelector("#cursor")
var blur_crsr = document.querySelector("#cursor-blur")



document.addEventListener("mousemove",(dets)=>{
    // console.log(dets.x);
    // console.log(dets.x);
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
    blur_crsr.style.left = dets.x- 200 +"px"
    blur_crsr.style.top = dets.y- 200 +"px"
})

var h4all=document.querySelectorAll("#nav h4")
// console.log(h4log);
h4all.forEach((elem)=>{
    // console.log(elem)
    elem.addEventListener("mouseenter",()=>{
        crsr.style.scale=3
        crsr.style.border="1px solid white"
        crsr.style.backgroundColor="transparent"
    })
    elem.addEventListener("mouseleave",()=>{
        crsr.style.scale=1
        crsr.style.border="0px solid #95c11e"
        crsr.style.backgroundColor="#95c11e"
    })

})

gsap.to("#nav",{
    backgroundColor:"black",
    height:"110px",
    duration:.5,
    // delay:1
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})

gsap.from("#about-us .about-content img,.about h1",{
    y:50,
    opacity : 0,
    duration:1,
    stagger:0.2, //multiple value ko ek ek karke chal lane ka kam karta hai
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start:"#top 60%",
        end:"#top 58%",
        scrub:3
    }
})

gsap.from("#cards-container .card",{
    // y:50,
    scale:.85,
    opacity : 0,
    duration:.6,
    // stagger:0.2, //multiple value ko ek ek karke chal lane ka kam karta hai
    scrollTrigger:{
        // scale:1,
        trigger:".card",
        scroller:"body",
        // markers:true,
        start:"#top 65%",
        end:"#top 62%",
        scrub:3
    }
})

gsap.from("#colon1",{
    y:-70,
    x:-70,
    duration:4,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})
gsap.from("#colon2",{
    y:70,
    x:70,
    duration:4,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})
gsap.from("#page4 h1",{
    y:50,
    duration:1,
    scrollTrigger:{
        trigger:"#page4",
        scroller:"body",
        // markers:true,
        start:"top 75%",
        end:"top 60%",
        scrub:3
    }
})