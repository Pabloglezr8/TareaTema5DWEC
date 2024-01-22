const formulario = document.querySelector('#formulario')
const nombre = document.querySelector('#name')
const surname = document.querySelector('#surname')
const tlf = document.querySelector('#tlf')
const mail = document.querySelector('#mail')
const msg = document.querySelector('#msg')
const enviar = document.querySelector('#send')
const errores = document.querySelector("#errores")

let mensajeError = []


const validar = event => {
    event.preventDefault()
    mensajeError = []

    nombre.value.trim().length === 0 && mensajeError.push('El campo Nombre no puede estar vacío')
    !/^[A-Z].{1}[a-zA-Z]*$/.test(nombre.value.trim()) && mensajeError.push("La primera letra del nombre debe ser mayúscula y no contener números"),

    surname.value.trim().length === 0 && mensajeError.push('El campo Apellido no puede estar vacío')
    !/^[A-Z].{1}[a-zA-Z]*$/.test(surname.value.trim()) && mensajeError.push("La primera letra del apellido debe ser mayúscula y no contener números"),

    !/^[0-9]{9}$/.test(tlf.value.trim()) && mensajeError.push("El teléfono debe contener 9 dígitos"),

    !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(mail.value.trim()) && mensajeError.push("Correo electrónico no válido"),
    
    msg.value.trim().length < 5 && mensajeError.push("Mensaje demasiado corto")
    

    if(mensajeError.length>0){
        errores.textContent = ''
 
        mensajeError.forEach(error => {
            errores.innerHTML += `<li>${error}</li>`
        })
        errores.style.color = 'red'
    } else if (mensajeError.length === 0 && confirm("¿Desea enviar el formulario?")){
        errores.textContent = ''
        errores.textContent = 'Enviado correctamente'
 
        formulario.submit();
    }
   
}
 
formulario.addEventListener('submit',validar);
