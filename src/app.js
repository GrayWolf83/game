import { Info } from './info'

export class App {
    #wrapp
    #info

    constructor() {
        this.#wrapp = document.createElement('div')
        this.#info = new Info('Крестики - Нолики')
    }

    #wrappConfigHandler() {
        this.#wrapp.classList.add('wrapp')
        this.#wrapp.append(this.#info.run())
    }

    run() {
        this.#wrappConfigHandler()
        document.body.append(this.#wrapp)
    }
}
