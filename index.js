
function getItem(string){
    const url = `https://mystique-v2-americanas.juno.b2w.io/autocomplete?content=${string}&source=nanook`
    const render = document.getElementById('renderResults')
    axios.get(url)
    .then(response =>{
        const data = response.data.products
        render.textContent = JSON.stringify(data)
    })
    .catch(error => console.log(error))
}

getItem('camisa')