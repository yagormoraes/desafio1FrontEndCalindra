const btn = document.getElementById('button')
btn.addEventListener('click',(e)=>{
    e.preventDefault()
    const valor = document.querySelector('.produtoClass').value
    const url = `https://mystique-v2-americanas.juno.b2w.io/autocomplete?content=${valor}&source=nanook`
    console.log(url);

    axios.get(url)
    .then(resp => {

        const algumacoisa = document.getElementById('renderResults')
        let produtosObj = resp.data.products

        for(let i = 0; i < produtosObj.length; i++){
            const produto = JSON.stringify(produtosObj[i])
            algumacoisa.innerHTML += `<p>${produto}</p>` 
            

            console.log(produto);

        }
        //console.log(produtosObj.length)
        //console.log(produtosObj[0].name)
        //const produtos = JSON.stringify(produtosObj)

        //algumacoisa.innerHTML = `<p>${produtos}</p>` 

       // console.log(produtos)

    }
        )
    .catch(e => e.message)
})
