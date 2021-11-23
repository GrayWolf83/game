import { Info } from './info'
import { GameArea } from './gameArea'

export class App {
    #wrapp
    #info
    #area

    constructor() {
        this.#wrapp = document.createElement('div')
        this.#info = new Info('Крестики - Нолики')
        this.#area = new GameArea()
    }

    #wrappConfigHandler() {
        this.#wrapp.classList.add('wrapp')
        this.#wrapp.append(this.#info.run(), this.#area.run())
    }

    run() {
        this.#wrappConfigHandler()
        document.body.append(this.#wrapp)
    }
}
