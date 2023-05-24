'use strict'

export const searchTitle = async(title) =>{
    const url = `http://www.omdbapi.com/?t=${title}&apikey=5628dfda`

    const response = await fetch(url)
    const data = await response.json()

    console.log(data)

    return {
        ...data
    }
}