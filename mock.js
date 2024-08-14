
const container = document.querySelector('.container')

const buscador = document.querySelector('#buscar')

const url = 'https://66b8d0893ce57325ac7834b0.mockapi.io/producto'


// selecionamos el boton para modo oscuro
const botonModoOscuro = document.querySelector('#modo-oscuro')

botonModoOscuro.innerText = 'Modo-Claro'










fetch(url)
.then(res => res.json())

// .then(data => console.log(data))

//  manipulacion del boton modo-oscuro y que quede guardado en localstorage


    .then(data =>{

        botonModoOscuro.addEventListener('click', ()=> {

            document.body.classList.toggle('modo-dark');
            botonModoOscuro.classList.toggle('boton-mode-oscuro')

            
            
            
            if (document.body.classList.contains('modo-dark')) {
                
                localStorage.setItem('Modo-Oscuro', 'true')
                botonModoOscuro.innerText = 'Modo-Oscuro'
                
                
                
                
            }else{
                localStorage.setItem('Modo-Oscuro', 'false')
                botonModoOscuro.innerText = 'Modo-Claro'


            }
            
        })
        
        if (localStorage.getItem('Modo-Oscuro') === 'true') {
            botonModoOscuro.classList.add('boton-mode-oscuro')
            
            document.body.classList.add('modo-dark')
            botonModoOscuro.innerText = 'Modo-Oscuro'



                        
        }else {
                                       
            document.body.classList.remove('modo-dark')
            botonModoOscuro.innerText = 'Modo-Claro'

        }
        
    // variable vacia para luego poder rellenar con los dato que vienen de nuestra api
    let datos  = ' '
    
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



