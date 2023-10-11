const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");



loop()
function loop (){
    window.requestAnimationFrame(loop)
    
    mover()
    ctx.clearRect(0,0,canvas.width,canvas.height)
    grade()
    desenharLaserP2()
    desenharLaser()
    
    player.update()
    player2.update()
    
    
}