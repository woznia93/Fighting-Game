const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');


canvas.width = 1024
canvas.height = 576


c.fillRect(0, 0, canvas.width, canvas.height)



const gravity = 0.7 // is .7 in refernce but fast fall is on 

class Sprite {
    constructor({position, velocity}) {
        this.position = position
        this.velocity = velocity 
        this.height = 150
        this.lastKeyx
        this.lastKeyy
        this.attackBox = {
            position: this.position,
            width: 100,
            height: 50
        }
    }

    draw() {
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, 50, this.height)


        // attack box drawn

        c.fillRect(this.attackBox.position.x, this.attackBox.position.y, this.attackBox.width, this.attackBox.height)
    }

    update() {
        this.draw()

        this.position.x += this.velocity.x
 
        this.position.y += this.velocity.y 

        if (this.position.y + this.height +this.velocity.y >= canvas.height) {
            this.velocity.y = 0
        } else this.velocity.y += gravity
    }

}


const player = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    velocity: {
        x: 0,
        y: 0
    }
})


const enemy = new Sprite({
    position: {
        x: 500,
        y: 100
    },
    velocity: {
        x: 0,
        y: 0
    }
})



console.log(player);


const keys = {
    a: {
        pressed: false 
    },
    d: {
        pressed: false 
    },
    w : {
        pressed : false
    },
    s : {
        pressed : false
    },
    ArrowRight : {
        pressed : false
    },
    ArrowLeft : {
        pressed : false
    },
    ArrowUp : {
        pressed : false
    },
    ArrowDown : {
        pressed : false
    }
}



function animate() {
    window.requestAnimationFrame(animate)
    c.fillStyle = 'black'
    c.fillRect(0, 0, canvas.width, canvas.height)
    player.update()
    enemy.update()


    player.velocity.x = 0
    enemy.velocity.x = 0

    // Player Movement
    if (keys.a.pressed && player.lastKeyx === 'a'){
        player.velocity.x = -5
    } else if (keys.d.pressed && player.lastKeyx === 'd') {
        player.velocity.x = 5
    }


    // Enemy Movement
    if (keys.ArrowLeft.pressed && enemy.lastKeyx === 'ArrowLeft'){
        enemy.velocity.x = -5
    } else if (keys.ArrowRight.pressed && enemy.lastKeyx === 'ArrowRight') {
        enemy.velocity.x = 5
    }
}

animate()

window.addEventListener('keydown', (event) => {
    console.log(event.key)
    switch (event.key) {
        case 'd' : 
            keys.d.pressed = true
            player.lastKeyx = 'd'
            break
        case 'a' : 
            keys.a.pressed = true
            player.lastKeyx = 'a'
            break
        case 'w' : 
            player.velocity.y = -15
            player.lastKeyy = 'w'
            break
        case 's' : 
            player.velocity.y = 5
            player.lastKeyy = 's'
            break
        
        case 'ArrowRight' : 
            keys.ArrowRight.pressed = true
            enemy.lastKeyx = 'ArrowRight'
            break
        case 'ArrowLeft' : 
            keys.ArrowLeft.pressed = true
            enemy.lastKeyx = 'ArrowLeft'
            break
        case 'ArrowUp' : 
            enemy.velocity.y = -15
            enemy.lastKeyy = "ArrowUp"
            break
        case 'ArrowDown' :
            enemy.velocity.y = 5
            enemy.lastKeyy = "ArrowDown"
            break
    }
    console.log(event.key);

})

window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'd' : 
            keys.d.pressed = false
            break
        case 'a' : 
            keys.a.pressed = false
            break
        case 'w' : 
            keys.w.pressed = false
            break
        case 's' : 
            keys.s.pressed = false
            break
    }


        // Enemy Keys  
    switch(event.key) {
        case 'ArrowRight' : 
            keys.ArrowRight.pressed = false
            break
        case 'ArrowLeft' : 
            keys.ArrowLeft.pressed = false
            break
        case 'ArrowUp' : 
            keys.ArrowUp.pressed = false
            break
        case 'ArrowDown' : 
            keys.ArrowDown.pressed = false
            break
    }
    console.log(event.key);

})


