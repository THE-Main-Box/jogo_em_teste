class Sprite
{
    constructor({dimension,position,speed,color}) {
            this.position = position
            this.heigth = dimension.heigth
            this.width = dimension.width
            this.speed = speed
            this.color = color
        }

        


    draw(){
       ctx.fillStyle = this.color
       ctx.fillRect(this.position.x,this.position.y,this.width,this.heigth)
       
       
    }
  
    


    update(){
        if(handConstrols.space.pressed){
            this.shotCooldown = true
        }
        setTimeout(() => {
        
            this.shotCooldown = false
    }, 1000 );
        
        this.position.x += this.speed.x
        this.position.y += this.speed.y

        this.draw()
    }    
}



class Shooter extends Sprite{
    constructor({speed,position,dimension,color}) {
        
        super({speed,position,dimension,color})

        this.color
        this.speed = speed
        this.heigth = dimension.heigth
        this.width = dimension.width

         this.laserbox ={
            width:20,
            heigth:10
         }



         
         this.lastKeyPressed

         this.shotCooldown
    }
}    





let player = new Shooter({
    dimension:{
        width:20,
        heigth:20,
    },
    position:{
        x:50,
        y:300
    },
    speed:{
        x:0,
        y:0
    },
    color:"red"
})


let player2 = new Shooter({
    speed:{
        x:0,
        y:0
    },
    position:{
        x:500,
        y:300
    },
    dimension:{
        width:20,
        heigth:20
    },
    color:"blue"
})



const grade = () =>{
    ctx.lineWidth = 1
    ctx.strokeStyle = "#191919"

 for (let i = 25; i < canvas.width ; i+= 25) {
    ctx.beginPath()
    ctx.lineTo(i, 0)
    ctx.lineTo(i, canvas.height)
    ctx.stroke()
    
    
    ctx.beginPath()
    ctx.lineTo(0, i)
    ctx.lineTo(canvas.width, i)
    ctx.stroke()
 }


    
}


