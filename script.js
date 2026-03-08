console.log("Madras Driven loaded");

/* navbar scroll effect */

window.addEventListener("scroll", function(){

const nav=document.getElementById("navbar")

if(window.scrollY>50){
nav.classList.add("scrolled")
}else{
nav.classList.remove("scrolled")
}

})


/* reveal animation */

function revealSections(){

const reveals=document.querySelectorAll(".reveal")

reveals.forEach(section=>{

const windowHeight=window.innerHeight
const elementTop=section.getBoundingClientRect().top
const elementVisible=100

if(elementTop < windowHeight - elementVisible){

section.style.opacity="1"
section.style.transform="translateY(0)"

}

})

}

window.addEventListener("scroll", revealSections)
window.addEventListener("load", revealSections)
