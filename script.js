console.log("Madras Driven site ready");

/* loader */

window.addEventListener("load",function(){

setTimeout(function(){

document.getElementById("loader").style.opacity="0";

setTimeout(function(){

document.getElementById("loader").style.display="none";

},500);

},2000);

});;
