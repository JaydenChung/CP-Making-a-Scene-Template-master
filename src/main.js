// Code Practice: Making a Scene
// Name: Jayden Chung
// Date: 1/17/24

"use strict"

let config = {
    type: Phaser.AUTO,
    render:{
        pixelArt: true
    },
    scene: [MainMenu, Play]
}

let game = new Phaser.Game(config)