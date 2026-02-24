const heart = document.getElementById("heart")

let holdTimer
let activated = false

heart.addEventListener("mousedown", startHold)
heart.addEventListener("touchstart", startHold)

heart.addEventListener("mouseup", stopHold)
heart.addEventListener("mouseleave", stopHold)
heart.addEventListener("touchend", stopHold)

function startHold(){
    if(activated) return
    
    heart.classList.add("holding")
    heart.classList.add("shake")

    holdTimer = setTimeout(()=>{
        activate()
    },1500)
}

function stopHold(){
    clearTimeout(holdTimer)
    heart.classList.remove("holding")
    heart.classList.remove("shake")
}

function activate(){
    activated = true
    
    heart.classList.remove("shake")
    heart.classList.add("flash")

    setTimeout(()=>{
        window.location.href="love.html"
    },500)
}