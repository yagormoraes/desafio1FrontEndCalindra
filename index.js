const btn = document.getElementById('button')
btn.addEventListener('click',(e)=>{
    e.preventDefault()
    const valor = document.querySelector('.productClass').value
    const url = `https://mystique-v2-americanas.juno.b2w.io/autocomplete?content=${valor}&source=nanook`

    axios.get(url)
    .then(resp => {

        const algumacoisa = document.getElementById('cardProducts')
        let produtosObj = resp.data.products
        algumacoisa.innerHTML = ''
        
        for(let i = 0; i < produtosObj.length; i++){
            console.log(produtosObj);
            algumacoisa.innerHTML += `
            <div class="card">
                <p class="text">Nome: ${produtosObj[i].name}</p>
                <p>ID: ${produtosObj[i].id}</p>
                <p>Pontuação: ${produtosObj[i]._meta.score}</p>
                <p>Visitas ao produto: ${produtosObj[i]._meta.visitsClickCount}</p>
            </div>
            ` 
        }
    }
        )
    .catch(e => e.message)
})
