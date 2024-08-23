const boton1 = document.querySelector('#modo-oscuro')
boton1.innerText = 'Modo-Claro'
boton1.addEventListener('click',btnModeDark)

export function btnModeDark () {

    let recupera = localStorage.getItem("Modo-Oscuro", "true")
    
    // seleccion del body mediante toggle
    document.body.classList.toggle('fondo-modo-false')
    document.body.classList.toggle('fondo-modo-true');
    boton1.classList.toggle('fondo-modo-true')
    
    // condicional para que guarde en localstorage    
    if (document.body.classList.contains('fondo-modo-true')) {
        localStorage.setItem("Modo-Oscuro", "true")
        if (recupera) {

            document.body.classList.add('fondo-modo-oscuro')
            boton1.classList.add('fondo-modo-true')            
        }
        boton1.innerText = 'Modo-Oscuro'
        console.log('click1');
        
    }else{
        boton1.innerText = 'Modo-Claro'
        localStorage.setItem("Modo-Oscuro", "false")
        console.log('click2');
        localStorage.getItem("Modo-Oscuro", "false")
        document.body.classList.remove('fondo-modo-true')
        
}
}