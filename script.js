console.log("Madras Driven loaded 🚗");


/* NAVBAR SCROLL EFFECT */

window.addEventListener("scroll",()=>{

const nav=document.getElementById("navbar")

if(window.scrollY>50){

nav.classList.add("scrolled")

}else{

nav.classList.remove("scrolled")

}

})


/* SCROLL REVEAL */

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


/* HERO ANIMATION */

gsap.from(".hero-content h1",{

y:80,
opacity:0,
duration:1

})

gsap.from(".hero-content p",{

y:40,
opacity:0,
delay:0.5,
duration:1

})
