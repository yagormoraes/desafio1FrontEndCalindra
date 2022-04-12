class View{
    viewItem(data){
        const render = document.getElementById('renderResults')
        render.textContent = JSON.stringify(data)
    }
}

export default View