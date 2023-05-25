'use strict'

class card extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' });
        this.foto = null
        this.title = 'Movie Title'
        this.description = 'Plot'
    }

    static get observedAttributes(){
        return['title', 'foto', 'description']
    }

    attributeChangedCallback(nameAttr, oldValue, newValue){
        this[nameAttr] = newValue
        
    }

    connectedCallback() {
        this.shadow.appendChild(this.component())
        this.shadow.appendChild(this.styles())
    }
    styles() {
        const css = document.createElement('style')
        css.textContent = `
        *{
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }
        .card{
            width: 40vw;
            height: 40vh;
            background-color: purple;
            padding: 30px;
            display: flex;
            gap: 24px;
        }
        .card__text{
            color: #fff;
            font-size: 1.5rem;
            font-weight: 600;
        }
        .card__image{
            height: 300px;
            width: 200px;
            background-color: #fff;
            background-image: url(${this.foto});
            background-size: cover;
        }
        .plot{
            color: #fff;
        }
        `
        return css
    }
    component() {
        const card = document.createElement('div')
        card.classList.add('card')

        const imagem = document.createElement('img')
        imagem.classList.add('card__image')

        const title = document.createElement('p')
        title.classList.add('card__text')
        title.textContent= this.title

        const description = document.createElement('p')
        description.classList.add('plot')
        description.textContent= this.description

        card.append(imagem, title, description)
        return card

    }

}

customElements.define('card-wars', card)