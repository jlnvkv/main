const IMAGE_URL = "https://random.imagecdn.app/500/500"
const BUTTON = document.getElementById("button")
const LIST = document.getElementById("list")

let cards = [
    {
        id: 1,
        name: "Card name",
        description: "card description",
    },
    {
        id: 2,
        name: "Card name",
        description: "card description",
    },
    {
        id: 3,
        name: "Card name",
        description: "card description",
    }
]

function prepareCard(card) {
    const item = document.createElement('li')
    item.className = "item"

    const cardNode = document.createElement('div')

    cardNode.className = "card"
    cardNode.innerHTML = `
            <img class="card__image" src="${IMAGE_URL}">
            <span class="card__name">${card.name}</span>
            <span class="card__description">${card.description}</span>
        `

    const buttonContainer = document.createElement('div')
    buttonContainer.className = 'card__button-container'

    const deleteButton = document.createElement('button')
    const deleteIcon = document.createElement('img')

    deleteIcon.src = "./image/delete-icon.png"
    deleteButton.className = 'card__button'
    deleteIcon.className = 'card__delete-icon'

    deleteButton.appendChild(deleteIcon)
    buttonContainer.appendChild(deleteButton)

    deleteButton.addEventListener('click', () => {
        cards = cards.filter(item => item.id !== card.id)
        renderCards(cards)
    })

    item.appendChild(cardNode)
    item.appendChild(buttonContainer)

    return item
}

function prepareCards(cards) {
    return cards.map(card => prepareCard(card))
}

function appendToList(cardList) {
    cardList.forEach(card => LIST.appendChild(card))
}

function renderCards(cards) {
    LIST.innerHTML = ''
    const cardList = prepareCards(cards)
    appendToList(cardList)
}

BUTTON.addEventListener("click", () => {
    cards = [...cards, {
        id: Date.now(),
        name: "Card name",
        description: "card description",
    }]
    renderCards(cards)
})

renderCards(cards)