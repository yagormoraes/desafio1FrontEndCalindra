
class Model{
    getItem(product){
        const url = `https://mystique-v2-americanas.juno.b2w.io/autocomplete?content=${product}&source=nanook`
        axios.get(url)
        .then(response =>{
            const data = response.data.products
            return data
        })
        .catch(error => console.log(error))
    }
}

export default Model