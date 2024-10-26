async function getQuote() {
    const url = 'https://gutendex.com/books';
    try {
        const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`)
            }
        
            // Obtenemos los datos de la API y con return los obtenemos globalmente

            const Json = await response.json()
            .then(data => fetchData = data.results)
                return fetchData
            
    } catch (error) {
        console.error(error.message)
    }
}

// Petición a la API

getQuote(); 


    // HACER EL HTML Y CSS, HACER CAJITAS Y PONER EL TÍTULO DEL LIBRO JUNTO AL AUTOR

const htmlDiv = document.createElement('div')
const htmlH2 = document.createElement('h2')
const htmlP = document.createElement('p')

const mainSection = document.getElementById('mainSection')

setTimeout(() => {
    if(fetchData[20].authors.length === 0){
        fetchData[20].authors.push({name: 'No author'})
    }
    for (i=0; i<(fetchData.length - 1); i++){
        if(fetchData[i].authors[0].name === undefined){
            console.log('miss author')
        } {
            mainSection.innerHTML += `<div class="card"><h2>${fetchData[i].title}</h2><p>${fetchData[i].authors[0].name}</p></div>`        
        }
    }
}, 3000)
