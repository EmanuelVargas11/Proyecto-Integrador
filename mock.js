import { btnModeDark } from "./modoDark.js"
const container = document.querySelector('.container')

const buscador = document.querySelector('#buscar')

const url = 'https://66b8d0893ce57325ac7834b0.mockapi.io/producto'
// selecionamos el boton para modo oscuro
const botonModoOscuro = document.querySelector('#modo-oscuro')
// texto para el boton
 const textoBoton = botonModoOscuro.innerText = 'Modo-Claro'

fetch(url)
.then(res => res.json())

// .then(data => console.log(data))



.then(data =>{
    
        
    // variable vacia para luego poder rellenar con los dato que vienen de nuestra api
    let datos  = ' '

    btnModeDark()
    
    data.forEach(producto => {
        // muestra los datos que contenemos en nuestra api y los que deseamos.
        
        datos += `
        <div class="cards">

        <h3>${producto.name}</h3>
        <p>${producto.descripcion}</p>
        <img src="${producto.avatar}" alt="${producto.name}" >
        <p>precio: $${producto.precio}</p>
        
        </div>
        
        
        
        
        `
        
    })
    // aqui lo imprimer en el html 
    container.innerHTML = datos
})
.catch(err => console.log(err))



