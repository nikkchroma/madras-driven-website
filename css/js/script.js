console.log("Madras Driven loaded 🚗");

/* Hero animation */

gsap.from(".hero-title",{
y:80,
opacity:0,
duration:1
})

gsap.from(".hero-sub",{
y:40,
opacity:0,
delay:0.5,
duration:1
})


/* Scroll reveal */

const reveals=document.querySelectorAll(".reveal")

window.addEventListener("scroll",()=>{

reveals.forEach(section=>{

const windowHeight=window.innerHeight
const revealTop=section.getBoundingClientRect().top
const revealPoint=120

if(revealTop<windowHeight-revealPoint){

section.style.opacity=1
section.style.transform="translateY(0)"

}

})

})
