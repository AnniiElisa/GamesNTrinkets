import Phaser from '../lib/phaser.js'

export default class GameOver extends Phaser.Scene
{
    constructor()
    {
        super('game-over')
    }

    create()
    {
        this.add.image(240, 320, 'go-background')

        const width = this.scale.width
        const height = this.scale.height

        this.add.text(width * 0.5, height * 0.1, 'GAME OVER', {
            fontSize: 48,
            color:'#000'
        })
        .setOrigin(0.5)

        this.input.keyboard.once('keydown-Space',() => {
            this.scene.start('game')
        })
    }
}