export class GameLogic {
    #stepUser1
    #gameCells
    #winnerVariants
    #info

    constructor(cells, info) {
        this.#stepUser1 = true
        this.#winnerVariants = ['123', '456', '789', '147', '258', '369', '159', '357']
        this.#gameCells = cells
        this.#info = info
    }

    #changeStep() {
        this.#stepUser1 = !this.#stepUser1
    }

    #checkWinner() {
        const variantsUser1 = [...this.#gameCells]
            .filter((cell) => cell.textContent === 'X')
            .reduce((acc, item) => (acc += item.dataset.id), '')
        const variantsUser2 = [...this.#gameCells]
            .filter((cell) => cell.textContent === 'O')
            .reduce((acc, item) => (acc += item.dataset.id), '')

        const winnnerUser1 = this.#winnerVariants.filter((variant) =>
            variant.split('').every((item) => variantsUser1.includes(item)),
        )[0]

        const winnnerUser2 = this.#winnerVariants.filter((variant) =>
            variant.split('').every((item) => variantsUser2.includes(item)),
        )[0]

        if (winnnerUser1) {
            winnnerUser1.split('').forEach((item) => {
                this.#gameCells.forEach((cell) => {
                    if (cell.dataset.id === item) {
                        cell.classList.add('winner')
                    }
                })
            })

            this.#info.setCountValue1 = this.#info.getCountValueUser1 + 1
            this.#info.winnerUserText = 'Победил Игрок 1 (х)'

            setTimeout(() => {}, 10000)
        }

        if (winnnerUser2) {
            winnnerUser2.split('').forEach((item) => {
                this.#gameCells.forEach((cell) => {
                    if (cell.dataset.id === item) {
                        cell.classList.add('winner')
                    }
                })
            })

            this.#info.setCountValue2 = this.#info.getCountValueUser2 + 1
            this.#info.winnerUserText = 'Победил Игрок 2 (о)'

            setTimeout(() => {}, 10000)
        }
    }

    #gameStart() {
        this.#gameCells.forEach((cell) => {
            cell.addEventListener('click', (e) => {
                if (e.target.textContent === '') {
                    e.target.textContent = this.#stepUser1 ? 'X' : 'O'
                    this.#checkWinner()
                    this.#changeStep()
                }
            })
        })
    }

    start() {
        this.#gameStart()
    }
}
