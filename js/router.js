'use strict'

import { searchMovieSerie } from "./consult_api.js";

const routes = {
    '/' : '/pages/home.html',
    '/search' : '/pages/search.html',
    '/inside-search' : '/pages/card_result.html'
}

const route = async () =>{
    window.event.preventDefault()
    window.history.pushState({}, "", window.event.target.href)
    
    const path = window.location.pathname

    const route = routes[path]

    const response = await fetch(route)

    const html = await response.text()
   
    document.getElementById('root').innerHTML = html

    console.log(path)

    if(path == '/search'){
        document.getElementById('title').addEventListener('blur', searchMovieSerie)    
      }
}

window.route = route