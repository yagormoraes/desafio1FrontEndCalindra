const getProduct = ()=>{
    const valor = document.querySelector('.productClass').value
    const url = `https://mystique-v2-americanas.juno.b2w.io/autocomplete?content=${valor}&source=nanook`
    axios.get(url)
    .then(resp => {
        let produtosObj = resp.data.products
        cards(produtosObj)
    }
        )
    .catch(e => e.message)
}
