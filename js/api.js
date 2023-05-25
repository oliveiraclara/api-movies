'use strict'

const createResult = (result) =>{
    const card = document.createElement('card-leonid')

    card.title = result.Title
    card.description = result.Plot
    card.foto = result.Poster

    return card
}

export const searchTitle = async(title) =>{
    const url = `http://www.omdbapi.com/?t=${title}&apikey=5628dfda`

    const response = await fetch(url)
    const data = await response.json()
    const titulo = await data
    console.log(data);
    const container = document.getElementById('container')
    const cards = createResult(titulo)

    container.replaceChildren(cards)
}

