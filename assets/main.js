const sliide = document.getElementById("slide")


let innerSlide = setInterval(() => {
    
    sliide.src = "img/png/repair-1.png"
    setTimeout(() => {
        sliide.src = "img/png/repair-2.png"
    }, 2000);
}, 4000);
