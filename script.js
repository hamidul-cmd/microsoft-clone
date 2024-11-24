let manu = document.querySelector(".left");
let open = document.querySelector(".open");
let close = document.querySelector(".close");

let broup__opener = document.querySelector(".open__droup__down")
let droup__down = document.querySelector(".droup__down")


open.addEventListener("click", () => {
    manu.classList.toggle("active")
    open.style.display ="none";
    close.style.display ="block";
})
close.addEventListener("click", () => {
    manu.classList.toggle("active")
    open.style.display ="block";
    close.style.display ="none";
})

broup__opener.addEventListener("click", () => {
    droup__down.classList.toggle("active")
    broup__opener.classList.toggle("active")
})



// add hovewr efect 

let add__link = document.querySelector(".add__link");
let add__link__span = document.querySelector(".add__link__span");


add__link.onmouseenter = () => {
    add__link__span.style.transform = "translateX(1rem)"
  }
  add__link.onmouseleave = () =>{
    add__link__span.style.transform = "translateX(0)"
  }


//   slider code 

let right = document.querySelector(".right__arrow")
let left = document.querySelector(".left__arrow")
let slider__1 = document.querySelector(".slider-1")
let slider__2 = document.querySelector(".slider-2")
let dot_1 = document.querySelector(".dote-1")
let dot_2 = document.querySelector(".dote-2")


right.addEventListener("click", () =>{
    slider__2.style.transform = "translateX(0)"
    slider__1.style.transform ="translateX(-100%)"
    dot_2.style.backgroundColor = "black"
    dot_1.style.backgroundColor = "transparent"
})
left.addEventListener("click", () =>{
    slider__2.style.transform = "translateX(100%)"
    slider__1.style.transform ="translateX(0)"
        dot_1.style.backgroundColor = "black"
    dot_2.style.backgroundColor = "transparent"
})