import Model from "./model.js"
import View from "./view.js"

class Controller{
    control(){
        const btn = document.getElementById('button')
        const product = document.getElementById('renderResults')
        const productVal = product.value
        const model = new Model()
        const view = new View()
        btn.addEventListener('click',(e)=>{
            e.preventDefault()
            view.viewItem(model.getItem(productVal))
        })
    }
}

export default Controller