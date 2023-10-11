const handConstrols = {
    //player1
    arrowup:{
        pressed: false
    },
    arrowleft:{
        pressed: false
    },
    arrowright:{
        pressed: false
    },
    arrowdown:{
        pressed: false
    },
    space:{
        pressed: false,
        hold: false
    },
    //player2
    w:{
        pressed: false
    },
    a:{
        pressed: false
    },
    d:{
        pressed: false
    },
    s:{
        pressed: false
    },
    c:{
        pressed: false
    },
}






window.addEventListener("keydown", e =>{
    let key = e.key
    
    switch (key) {
        //player1
        case "ArrowUp":
            handConstrols.arrowup.pressed = true
            player.lastKeyPressed = key
            break;
        case "ArrowDown":
            handConstrols.arrowdown.pressed = true
            player.lastKeyPressed = key
            break;
        case "ArrowLeft":
            handConstrols.arrowleft.pressed = true
            player.lastKeyPressed = key
            break;
        case "ArrowRight":
            handConstrols.arrowright.pressed = true
            player.lastKeyPressed = key
            break;
            case " ":
            handConstrols.space.pressed = true
            break;

            //player2
            case "w":
            handConstrols.w.pressed = true
            player2.lastKeyPressed = key
                break;
            case "s":
            handConstrols.s.pressed = true
            player2.lastKeyPressed = key
                break;
            case "a":
            handConstrols.a.pressed = true
            player2.lastKeyPressed = key
                break;
            case "d":
            handConstrols.d.pressed = true
            player2.lastKeyPressed = key
                break;
            case"c":
                handConstrols.c.pressed = true
                break;

    }

})



window.addEventListener("keyup", e =>{
    let key = e.key

    switch (key) {

    case "ArrowUp":
            handConstrols.arrowup.pressed = false
            break;
        case "ArrowDown":
            handConstrols.arrowdown.pressed = false
            break;
        case "ArrowLeft":
            handConstrols.arrowleft.pressed = false
            break;
        case "ArrowRight":
            handConstrols.arrowright.pressed = false
            break;
        case " ":
            handConstrols.space.pressed = false
            break;
        //player2
        case "w":
            handConstrols.w.pressed = false
            break;
        case "s":
            handConstrols.s.pressed = false
            break;
        case "a":
            handConstrols.a.pressed = false
            break;
        case "d":
            handConstrols.d.pressed = false
            break;
        case"c":
            handConstrols.c.pressed = false
            break;

   }})

   function mover (){
   //player1
    player.speed.x = 0
    player.speed.y = 0
    //player1
    player2.speed.x = 0
    player2.speed.y = 0
   
    if (handConstrols.arrowup.pressed && player.lastKeyPressed == "ArrowUp") {
        player.speed.y += -5
    }
    if (handConstrols.arrowdown.pressed && player.lastKeyPressed == "ArrowDown") {
        player.speed.y += 5
    }
    if (handConstrols.arrowleft.pressed && player.lastKeyPressed == "ArrowLeft") {
        player.speed.x += -5
    }
    if (handConstrols.arrowright.pressed && player.lastKeyPressed == "ArrowRight") {
        player.speed.x += 5
    }
    
//player2
if (handConstrols.w.pressed  && player2.lastKeyPressed == "w" ) {
    player2.speed.y += -5
}
if (handConstrols.s.pressed  && player2.lastKeyPressed == "s" ) {
    player2.speed.y += 5
}
if (handConstrols.a.pressed && player2.lastKeyPressed == "a" ) {
    player2.speed.x += -5
}
if (handConstrols.d.pressed  && player2.lastKeyPressed == "d" ) {
    player2.speed.x += 5
}


   }