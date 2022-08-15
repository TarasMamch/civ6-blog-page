const charCards = document.getElementById('character-display')

async function fetchApiData() {
    const response = await fetch("http://localhost:3003/api/leaders")
    const leaders = await response.json()

    createCards(leaders)
}

function createCards(leaders) {
    for (let i = 0; i < leaders.length; i++) {
        const card = document.createElement('div')
        const charIcon = document.createElement('img')
        const charName = document.createElement('span')
        const civIcon = document.createElement('img')
        const secondCivIcon = document.createElement('img')

        if (leaders[i].civs.length === 1) {
            charIcon.setAttribute('src', leaders[i].icon)
            charName.innerHTML = leaders[i].name
            civIcon.setAttribute('src', leaders[i].civs[0].icon)

            card.appendChild(charIcon)
            card.appendChild(charName)
            card.appendChild(civIcon)
            charCards.appendChild(card)
            card.setAttribute('class', 'character-cards')
        } else {
            charIcon.setAttribute('src', leaders[i].icon)
            charName.innerHTML = leaders[i].name
            civIcon.setAttribute('src', leaders[i].civs[0].icon)
            secondCivIcon.setAttribute('src', leaders[i].civs[1].icon)

            card.appendChild(charIcon)
            card.appendChild(charName)
            card.appendChild(civIcon)
            card.appendChild(secondCivIcon)
            charCards.appendChild(card)
            card.setAttribute('class', 'character-cards')
        }
    }
}

async function setCharacterPage(name) {
    const response = await fetch("http://localhost:3003/api/civs")
    const civs = await response.json()
    const response2 = await fetch("http://localhost:3003/api/leaders")
    const leaders = await response2.json()

    if (name == 'Teddy Roosevelt (Rough Rider)') {
        const a = []
        const data = JSON.stringify(civs[0]);
        a.push(data)
        localStorage.setItem('secondLeader', a)
        window.location.href = 'http://localhost:3003/character-page'
    } else if (name == 'Qin Shi Huang') {
        const a = []
        const data = JSON.stringify(civs[8]);
        a.push(data)
        localStorage.setItem('secondLeader', a)
        window.location.href = 'http://localhost:3003/character-page'
    } else if (name == 'Victoria') {
        const a = []
        const data = JSON.stringify(civs[12]);
        a.push(data)
        localStorage.setItem('secondLeader', a)
        window.location.href = 'http://localhost:3003/character-page'
    } else if (name == 'Catherine de Medici (Magnificence)') {
        const a = []
        const data = JSON.stringify(civs[14]);
        a.push(data)
        localStorage.setItem('secondLeader', a)
        window.location.href = 'http://localhost:3003/character-page'
    } else if (name == 'Pericles') {
        const a = []
        const data = JSON.stringify(civs[19]);
        a.push(data)
        localStorage.setItem('secondLeader', a)
        window.location.href = 'http://localhost:3003/character-page'
    } else if (name == 'Gandhi') {
        const a = []
        const data = JSON.stringify(civs[22]);
        a.push(data)
        localStorage.setItem('secondLeader', a)
        window.location.href = 'http://localhost:3003/character-page'
    } else if (name == 'Eleanor of Aquitaine') {
        const a = []
        const b = []
        const data = JSON.stringify(civs[12]);
        const data2 = JSON.stringify(civs[14]);
        a.push(data)
        b.push(data2)
        localStorage.setItem('special', a)
        localStorage.setItem('special2', b)
        window.location.href = 'http://localhost:3003/character-page'
    } else if (name == 'Kublai Khan') {
        const a = []
        const b = []
        const data = JSON.stringify(civs[8]);
        const data2 = JSON.stringify(civs[33]);
        a.push(data)
        b.push(data2)
        localStorage.setItem('special', a)
        localStorage.setItem('special2', b)
        window.location.href = 'http://localhost:3003/character-page'
    } else {
        for (let i = 0; i < civs.length; i++) {
            if (civs[i].leaders[0].name == name) {
                const a = []
                const data = JSON.stringify(civs[i]);
                a.push(data)
                localStorage.setItem('leader', a)
                window.location.href = 'http://localhost:3003/character-page'
            }
        }
    }

}

charCards.addEventListener("click", (e) => {
    let name = e.target.children[1].outerText;
    if (typeof name == 'string') {
        setCharacterPage(name)
    }
});

fetchApiData()