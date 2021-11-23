import { Info } from './info'
import { GameArea } from './gameArea'
import { GameLogic } from './gameLogic'

export class App {
    #wrapp
    #info
    #area
    #gameLogic

    constructor() {
        this.#wrapp = document.createElement('div')
        this.#info = new Info()
        this.#area = new GameArea()
        this.#gameLogic = new GameLogic(this.#area.run(), this.#info)
    }

    #wrappConfigHandler() {
        this.#wrapp.classList.add('wrapp')
        this.#wrapp.append(this.#info.run(), this.#area.run())
    }

    run() {
        this.#wrappConfigHandler()
        document.body.append(this.#wrapp)
        this.#gameLogic.start()
    }
}
