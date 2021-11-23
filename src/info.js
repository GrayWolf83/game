export class Info {
    #info
    #title
    #user1
    #user2
    #countUser1
    #countUser2
    #countValueUser1
    #countValueUser2
    #titleContent

    constructor(titleContent) {
        this.#info = document.createElement('div')
        this.#title = document.createElement('h2')
        this.#titleContent = titleContent
        this.#user1 = document.createElement('p')
        this.#user2 = document.createElement('p')
        this.#countUser1 = document.createElement('span')
        this.#countUser2 = document.createElement('span')
        this.#countValueUser1 = 0
        this.#countValueUser2 = 0
    }

    #infoConfigHandler() {
        this.#info.classList.add('info')
        this.#title.textContent = this.#titleContent

        this.#user1.classList.add('user1')
        this.#user1.textContent = 'Игрок 1: '

        this.#countUser1.classList.add('count')
        this.#countUser1.textContent = this.#countValueUser1
        this.#user1.append(this.#countUser1)

        this.#user2.classList.add('user2')
        this.#user2.textContent = 'Игрок 2: '

        this.#countUser2.classList.add('count')
        this.#countUser2.textContent = this.#countValueUser2
        this.#user2.append(this.#countUser2)

        this.#info.append(this.#title, this.#user1, this.#user2)
    }

    run() {
        this.#infoConfigHandler()
        return this.#info
    }
}
