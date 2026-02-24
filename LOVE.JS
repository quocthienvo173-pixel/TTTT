/* Mưa chữ */
setInterval(()=>{
    const texts=["Đoàn Nguyễn Đoan Trang ❤️","Đoàn Nguyễn Đoan Trang","💖","Đoàn Nguyễn Đoan Trang","✨"]

    const el=document.createElement("div")
    el.className="falling"
    el.innerText=texts[Math.floor(Math.random()*texts.length)]

    el.style.left=Math.random()*100+"vw"
    el.style.animationDuration=(3+Math.random()*2)+"s"

    document.body.appendChild(el)
    setTimeout(()=>el.remove(),5000)
},200)

/* Nền hạt */
const canvas=document.getElementById("bg")
const ctx=canvas.getContext("2d")

function resize(){
    canvas.width=innerWidth
    canvas.height=innerHeight
}
resize()
window.onresize=resize

let p=[]
for(let i=0;i<100;i++){
    p.push({
        x:Math.random()*canvas.width,
        y:Math.random()*canvas.height,
        r:Math.random()*2
    })
}

function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    ctx.fillStyle="#ff0055"

    p.forEach(e=>{
        ctx.beginPath()
        ctx.arc(e.x,e.y,e.r,0,Math.PI*2)
        ctx.fill()

        e.y+=0.4
        if(e.y>canvas.height)e.y=0
    })

    requestAnimationFrame(draw)
}
draw()