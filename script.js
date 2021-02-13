const result = document.getElementById('result')
const filter = document.getElementById('filter')
//trae el elemento input con el ID filter
const listItems = []

getData()

filter.addEventListener('input', (e) => filterData(e.target.value))
//esto filtra la informacion del input pot medio de la funcion filterData 

async function getData() {
    const res = await fetch('https://randomuser.me/api?results=50')

    const { results } = await res.json()
    //llamada a la API

    // Clear result
    result.innerHTML = ''

    results.forEach(user => {
        const li = document.createElement('li')
        //en la contante li se crea un elemento li

        listItems.push(li)
        //Se suben esos li al array en la constante listitems

        li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `
        //esta li nos renderiza en el html y llama la informacion de la
        //API crenado etiquetas que lo organizan 

        result.appendChild(li)
        //se crea una lista de elementos hijos
    })
}

function filterData(searchTerm) {

    listItems.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
        /*busca dentro de los elemtos del array escrito una conincidencia con el parametro 
        buscado */
        //devuelve el valor en minúsculas de la cadena que realiza la llamada
        /*determina si una matriz incluye un determinado elemento, devuelve true o false según corresponda. */
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
}
