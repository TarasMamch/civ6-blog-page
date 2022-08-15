const charName = document.getElementById('char-name')
const charIcon = document.getElementById('char-icon')
const civName = document.getElementById('civ-name')
const civName2 = document.getElementById('civ-name2')
const civIcon = document.getElementById('civ-icon')
const civIcon2 = document.getElementById('civ-icon2')
const charBonusName = document.getElementById('char-bonus-name')
const charBonus = document.getElementById('char-bonus')
const charBio = document.getElementById('char-bio')
const civAbilityName = document.getElementById('civ-ability-name')
const civAbility = document.getElementById('civ-ability')
const civAbilityName2 = document.getElementById('civ-ability-name2')
const civAbility2 = document.getElementById('civ-ability2')
const unitIcon = document.getElementById('unit-icon')
const unitName = document.getElementById('unit-name')
const unitIcon2 = document.getElementById('unit-icon2')
const unitName2 = document.getElementById('unit-name2')
const unitAbility = document.getElementById('unit-ability')
const unitDesc = document.getElementById('unit-description')
const unitAbility2 = document.getElementById('unit-ability2')
const unitDesc2 = document.getElementById('unit-description2')
const buldingIcon = document.getElementById('building-icon')
const buildingName = document.getElementById('building-name')
const buildingAblility = document.getElementById('building-ability')
const buildingDesc = document.getElementById('building-description')
const buldingIcon2 = document.getElementById('building-icon2')
const buildingName2 = document.getElementById('building-name2')
const buildingAblility2 = document.getElementById('building-ability2')
const buildingDesc2 = document.getElementById('building-description2')

async function setPage() {
    let data = await JSON.parse(localStorage.getItem('leader'))
    let data2 = null
    if (data == null) {
        data = await JSON.parse(localStorage.getItem('secondLeader'))
    } if (data == null) {
        data = await JSON.parse(localStorage.getItem('special'))
    }
    let KeyName = window.localStorage.key(data)

    if (KeyName == 'leader') {
        charIcon.setAttribute('src', data.leaders[0].icon)
        charName.innerHTML = data.leaders[0].name
        civIcon.setAttribute('src', data.icon)
        civName.innerHTML = data.name
        charBonusName.innerHTML = `Leader Bonus - ${data.leaders[0].leader_bonus_name}`
        charBonus.innerHTML = data.leaders[0].leader_bonus

        charBio.innerHTML = data.leaders[0].bio
        civAbilityName.innerHTML = `Civilization Ability : ${data.ability_name}`
        civAbility.innerHTML = data.ability
        unitIcon.setAttribute('src', data.unit.icon)
        unitName.innerHTML = data.unit.name
        unitAbility.innerHTML = data.unit.ability
        unitDesc.innerHTML = data.unit.description
        buldingIcon.setAttribute('src', data.building.icon)
        buildingName.innerHTML = data.building.name
        buildingAblility.innerHTML = data.building.ability
        buildingDesc.innerHTML = data.building.description
        window.localStorage.clear()
    } else if (KeyName == 'secondLeader') {
        charIcon.setAttribute('src', data.leaders[1].icon)
        charName.innerHTML = data.leaders[1].name
        civIcon.setAttribute('src', data.icon)
        civName.innerHTML = data.name
        charBonusName.innerHTML = `Leader Bonus - ${data.leaders[1].leader_bonus_name}`
        charBonus.innerHTML = data.leaders[1].leader_bonus

        charBio.innerHTML = data.leaders[1].bio
        civAbilityName.innerHTML = `Civilization Ability : ${data.ability_name}`
        civAbility.innerHTML = data.ability
        unitIcon.setAttribute('src', data.unit.icon)
        unitName.innerHTML = data.unit.name
        unitAbility.innerHTML = data.unit.ability
        unitDesc.innerHTML = data.unit.description
        buldingIcon.setAttribute('src', data.building.icon)
        buildingName.innerHTML = data.building.name
        buildingAblility.innerHTML = data.building.ability
        buildingDesc.innerHTML = data.building.description
        window.localStorage.clear()
    } else {
        charIcon.setAttribute('src', data.leaders[0].icon)
        charName.innerHTML = data.leaders[0].name
        civIcon.setAttribute('src', data.icon)
        civName.innerHTML = data.name
        civIcon2.setAttribute('src', data.icon)
        civName2.innerHTML = data.name
        charBonusName.innerHTML = `Leader Bonus - ${data.leaders[0].leader_bonus_name}`
        charBonus.innerHTML = data.leaders[0].leader_bonus

        charBio.innerHTML = data.leaders[0].bio
        civAbilityName.innerHTML = `Civilization Ability : ${data.ability_name}`
        civAbility.innerHTML = data.ability
        unitIcon.setAttribute('src', data.unit.icon)
        unitName.innerHTML = data.unit.name
        unitAbility.innerHTML = data.unit.ability
        unitDesc.innerHTML = data.unit.description
        buldingIcon.setAttribute('src', data.building.icon)
        buildingName.innerHTML = data.building.name
        buildingAblility.innerHTML = data.building.ability
        buildingDesc.innerHTML = data.building.description

        data = await JSON.parse(localStorage.getItem('special2'))
        civIcon2.setAttribute('src', data.icon)
        civName2.innerHTML = data.name
        civAbilityName2.innerHTML = `Civilization Ability : ${data.ability_name}`
        civAbility2.innerHTML = data.ability
        unitIcon2.setAttribute('src', data.unit.icon)
        unitName2.innerHTML = data.unit.name
        unitAbility2.innerHTML = `Unit Ability : ${data.unit.ability}`
        unitDesc2.innerHTML = data.unit.description
        buldingIcon2.setAttribute('src', data.building.icon)
        buildingName2.innerHTML = data.building.name
        buildingAblility2.innerHTML = `Building Ability : ${data.building.ability}`
        buildingDesc2.innerHTML = data.building.description

        window.localStorage.clear()
    }
}



setPage()