console.log("Madras Driven script loaded");

/* FIXED LOADER */
document.addEventListener("DOMContentLoaded", function(){

const loader = document.getElementById("loader");

setTimeout(function(){
  loader.style.opacity = "0";

  setTimeout(function(){
    loader.style.display = "none";
  }, 500);

}, 1200);

window.addEventListener("load", function(){

const loader = document.getElementById("loader");

loader.style.opacity = "0";

setTimeout(function(){
  loader.style.display = "none";
}, 600);

});

});
