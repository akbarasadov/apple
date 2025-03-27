let b1 = document.querySelector(".b1")
let b2 = document.querySelector(".b2")
let b3 = document.querySelector(".b3")
let b4 = document.querySelector(".b4")
let white = document.querySelector(".white")
let grey = document.querySelector(".grey")
let img = document.querySelector("img")
let space = document.querySelector(".space")
let price = document.querySelector(".price")


white.onclick = () => {
    img.setAttribute("src", "./mbp14-silver-select-202110 1.png")
    space.innerHTML = "White"
    white.classList.add("onwhite")
    grey.classList.remove("ongrey")
    grey.classList.add("asd")
    white.classList.remove("asd")
}
grey.onclick = () => {
    img.setAttribute("src", "./mbp14-spacegray-select-202110 1.png")
    space.innerHTML = "Space Gray"
    grey.classList.add("ongrey")
    white.classList.remove("onwhite")
    white.classList.add("asd")
    grey.classList.remove("asd")
}

b1.onclick = () => {
    b1.classList.add("bb1")
    b2.classList.remove("bb2")
    b3.classList.remove("bb3")
    b4.classList.remove("bb4")
    price.innerHTML = "$1,999"
}
b2.onclick = () => {
    b1.classList.remove("bb1")
    b2.classList.add("bb2")
    b3.classList.remove("bb3")
    b4.classList.remove("bb4")

    price.innerHTML = "$2,199"
}
b3.onclick = () => {
    b1.classList.remove("bb1")
    b2.classList.remove("bb2")
    b3.classList.add("bb3")
    b4.classList.remove("bb4")

    price.innerHTML = "$2,799"
}
b4.onclick = () => {
    b1.classList.remove("bb1")
    b2.classList.remove("bb2")
    b3.classList.remove("bb3")
    b4.classList.add("bb4")
    price.innerHTML = "$3,999"
}