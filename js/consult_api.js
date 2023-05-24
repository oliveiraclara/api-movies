'use strict'

import { searchTitle } from "./api.js"


export const searchMovieSerie = async () => {
    const tituloDigitado = document.getElementById('title').value
    const titulo = await searchTitle(tituloDigitado)

    document.getElementById('year').value = titulo.Year
}