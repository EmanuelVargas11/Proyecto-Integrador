const container = document.querySelector('.container')

const url = 'https://66b8d0893ce57325ac7834b0.mockapi.io/producto'





// imprime los datos de la api propia
fetch(url)
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(data =>{
        let datos  = ' '
        data.forEach(producto => {
            datos += `
                        <h3>${producto.name}</h3>
                        <p>precio: $${producto.precio}</p>
                        <img src="${producto.avatar}" alt="${producto.name}" >
                        <p>${producto.descripcion}</p>




                     `

        })
        container.innerHTML = datos
    })
    .catch(err => console.log(err))
    