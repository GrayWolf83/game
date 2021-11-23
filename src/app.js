import { Info } from './info'
import { GameArea } from './gameArea'
import * as Middleware from './middleware'

export class App {
    #wrapp
    #info
    #area
    #cells
    #stepUser1

    constructor() {
        this.#wrapp = document.createElement('div')
        this.#info = new Info()
        this.#area = new GameArea()
        this.#cells = this.#area.run().querySelectorAll('.area-item')
        this.#stepUser1 = true
    }

    #wrappConfigHandler() {
        this.#wrapp.classList.add('wrapp')
        this.#wrapp.append(this.#info.run(), this.#area.run())
    }

    #changeStep() {
        this.#stepUser1 = !this.#stepUser1
    }

    #newGame() {
        this.#info.winnerUserText = ''
        this.#area.run().remove()
        this.#area = new GameArea()
        this.#cells = this.#area.run().querySelectorAll('.area-item')
        this.#wrappConfigHandler()
        this.#checkGame()
    }

    #gameDraw() {
        this.#info.setCountValue1 = this.#info.getCountValueUser1 + 1
        this.#info.setCountValue2 = this.#info.getCountValueUser2 + 1
        this.#info.winnerUserText = 'Ничья'
        setTimeout(() => this.#newGame(), 5000)
    }

    #checkGameResult(check) {
        if (check === 1) {
            this.#info.setCountValue1 = this.#info.getCountValueUser1 + 1
            this.#info.winnerUserText = 'Победил Игрок 1 (х)'
        }

        if (check === 2) {
            this.#info.setCountValue2 = this.#info.getCountValueUser2 + 1
            this.#info.winnerUserText = 'Победил Игрок 2 (о)'
        }

        setTimeout(() => this.#newGame(), 5000)
    }

    #checkGame() {
        this.#cells.forEach((cell) => {
            cell.addEventListener('click', (e) => {
                if (e.target.textContent === '') {
                    e.target.textContent = this.#stepUser1 ? 'X' : 'O'

                    const check = Middleware.checkWinner([...this.#cells])
                    if (check) {
                        return this.#checkGameResult(check)
                    }

                    const checkDraw = Middleware.checkDraw([...this.#cells])
                    if (checkDraw) {
                        return this.#gameDraw()
                    }

                    this.#changeStep()
                }
            })
        })
    }

    run() {
        this.#wrappConfigHandler()
        document.body.append(this.#wrapp)
        this.#checkGame()
    }
}
