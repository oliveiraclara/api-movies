'use strict'

const createResult = ({ Title, Plot, Poster }) =>{
    const card = document.createElement('card-wars')

    card.titulo = Title
    card.description = Plot
    card.foto =Poster

    return card
}

export const searchTitle = async(title) =>{
    const url = `http://www.omdbapi.com/?t=${title}&apikey=5628dfda`

    const response = await fetch(url)
    const data = await response.json()
    const titulo = await data
    const container = document.getElementById('container')
    const cards = createResult(titulo)

    container.replaceChildren(cards)
}

