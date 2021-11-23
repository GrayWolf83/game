export class App {
    #wrapp

    constructor() {
        this.#wrapp = document.createElement('div')
    }

    #wrappConfigHandler() {
        this.#wrapp.classList.add('wrapp')
    }

    run() {
        this.#wrappConfigHandler()
        document.body.append(this.#wrapp)
    }
}
