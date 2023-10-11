


//player1

let lasergun = [
    {width:20, height:10, x:20, y:0, color:"red"},
    {width:10, height:10, x:20, y:0, color:"black"}
];
const desenharLaser = () =>{
    
    lasergun.forEach((dimensions) =>{
        

        const laser = lasergun[lasergun.length -2]

        ctx.fillStyle = dimensions.color

        

        ctx.fillRect(player.position.x + dimensions.x, player.position.y + dimensions.y ,dimensions.width, dimensions.height)


        
       

       //neutro
       if (player.speed.x == 0){

        dimensions.y = 0
        dimensions.x = 20
        dimensions.width = 20
        dimensions.height = 10

        if(player.position.y > player2.position.y){
        
            dimensions.y = -20
            dimensions.x = 0
            dimensions.width = 10
            dimensions.height = 20
        }
        if(player.position.y < player2.position.y){
        
            dimensions.y = 20
            dimensions.x = 0
            dimensions.width = 10
            dimensions.height = 20
        }
        if(player.position.x > player2.position.x){
        
            dimensions.y = 0
            dimensions.x = -20
            dimensions.width = 20
            dimensions.height = 10
        }
        if(player.position.x < player2.position.x){
        
            dimensions.y = 0
            dimensions.x = 20
            dimensions.width = 20
            dimensions.height = 10

            
        }
        
    }

    //mover para cima
    if( player.speed.y == -5 ){
        dimensions.y = -20
        dimensions.x = 0
        dimensions.width = 10
        dimensions.height = 20

        if(handConstrols.space.pressed && player.shotCooldown == false && handConstrols.space.hold == false){
            laser.y = 15
            laser.width = 10
            laser.height = -500
        }
        
    }

    //mover para baixo
    if(player.speed.y == 5  ){
        dimensions.y = 20
        dimensions.x = 0
        dimensions.width = 10
        dimensions.height = 20

        if(handConstrols.space.pressed && player.shotCooldown == false && handConstrols.space.hold == false){
            laser.y = 15
            laser.width = 10
            laser.height = 500
        }
    }

    //mover para a direita
    if(player.speed.x == 5  ){
        dimensions.y = 0
        dimensions.x = 20
        dimensions.width = 20
        dimensions.height = 10

    if(handConstrols.space.pressed && player.shotCooldown == false && handConstrols.space.hold == false){
            laser.y = 0
            laser.width = 500
            laser.height = 10
        }
    }
    //mover para a esquerda
    if(player.speed.x == -5  ){
        dimensions.y = 0
        dimensions.x = -20
        dimensions.width = 20
        dimensions.height = 10

        if(handConstrols.space.pressed && player.shotCooldown == false){
            laser.x = 15
            laser.width = -500
            laser.height = 10
        }
    }
       
    })


}
//player2
let lasergunp2 = [
    {width:20, height:10, x:20, y:0, color:"red"},
    {width:10, height:10, x:20, y:0, color:"black"}
    
];

const desenharLaserP2 = () =>{
    ctx.fillStyle = "black"

    lasergunp2.forEach((dimensions) =>{

        const laser = lasergunp2[lasergunp2.length -2]

        ctx.fillStyle = dimensions.color
        ctx.fillRect(player2.position.x + dimensions.x, player2.position.y + dimensions.y ,dimensions.width, dimensions.height)

        //neutro
        if (player2.speed.x == 0){

            dimensions.y = 0
            dimensions.x = -20
            dimensions.width = 20
            dimensions.height = 10

            if(player.position.y > player2.position.y){
        
                dimensions.y = 20
                dimensions.x = 0
                dimensions.width = 10
                dimensions.height = 20

                
            }
            if(player.position.y < player2.position.y){
            
                dimensions.y = -20
                dimensions.x = 0
                dimensions.width = 10
                dimensions.height = 20
            }
            if(player.position.x > player2.position.x){
            
                dimensions.y = 0
                dimensions.x = 20
                dimensions.width = 20
                dimensions.height = 10
            }
            if(player.position.x < player2.position.x){
            
                dimensions.y = 0
                dimensions.x = -20
                dimensions.width = 20
                dimensions.height = 10
            }

        }



        
            
            
            //mover para cima
        if( player2.speed.y == -5 ){
            dimensions.y = -20
            dimensions.x = 0
            dimensions.width = 10
            dimensions.height = 20
            
            if(handConstrols.c.pressed){
                laser.y = 15
                laser.width = 10
                laser.height = -500
            } 
        }

        //mover para baixo
        if(player2.speed.y == 5  ){
            dimensions.y = 20
            dimensions.x = 0
            dimensions.width = 10
            dimensions.height = 20

            if(handConstrols.c.pressed){
                laser.width = 10
                laser.height = 500
            }
        }

        //mpver para a direita
        if(player2.speed.x == 5  ){
            dimensions.y = 0
            dimensions.x = 20
            dimensions.width = 20
            dimensions.height = 10

            if(handConstrols.c.pressed){
                laser.width = 500
                laser.height = 10
            }
        }

            
            //mover para a esquerda
            if(player2.speed.x == -5  ){
            dimensions.y = 0
            dimensions.x = -20
            dimensions.width = 20
            dimensions.height = 10
            
            if(handConstrols.c.pressed){
                laser.x =-20
                laser.width = -600
                laser.height = 10
            }
        }
        
        
        
    
    })

}
