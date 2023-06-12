"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var direccion_1 = require("./direccion");
var telefono_1 = require("./telefono");
var mail_1 = require("./mail");
var persona_1 = require("./persona");
// Funcion que muestra registros de personas en el terminal
function mostrarRegistrosPersonas(personas) {
    console.log('Registros de Personas:');
    console.log('---------------------');
    for (var i = 0; i < personas.length; i++) {
        var persona = personas[i];
        console.log('Persona ' + (i + 1) + ':');
        console.log('Nombre: ' + persona.nombre);
        console.log('Apellidos: ' + persona.apellidos);
        console.log('Edad: ' + persona.edad);
        console.log('DNI: ' + persona.dni);
        console.log('Fecha de Cumpleaños: ' + persona.cumpleanos.toDateString());
        console.log('Color Favorito: ' + persona.colorFavorito);
        console.log('Sexo: ' + persona.sexo);
        console.log('Direcciones:');
        persona.direcciones.forEach(function (direccion) {
            console.log('- ' + direccion.getDireccionCompleta());
        });
        console.log('Correos Electrónicos:');
        persona.mails.forEach(function (mail) {
            console.log('- ' + mail.tipo + ': ' + mail.direccion);
        });
        console.log('Teléfonos:');
        persona.telefonos.forEach(function (telefono) {
            console.log('- ' + telefono.tipo + ': ' + telefono.numero);
        });
        console.log('Notas:');
        persona.notas.forEach(function (nota) {
            console.log('- ' + nota);
        });
        console.log('---------------------');
    }
}
// Crear direcciones
var direccion1 = new direccion_1.Direccion('Calle Principal', 123, '28001', 'Madrid', 'Madrid');
var direccion2 = new direccion_1.Direccion('Avenida Central', 456, '08001', 'Barcelona', 'Barcelona');
var direccion3 = new direccion_1.Direccion('Rua Principal', 789, '15001', 'A Coruña', 'A Coruña');
// Crear teléfonos
var telefono1 = new telefono_1.Telefono('Móvil', '123456789');
var telefono2 = new telefono_1.Telefono('Trabajo', '987654321');
var telefono3 = new telefono_1.Telefono('Casa', '456789123');
// Crear correos electrónicos
var mail1 = new mail_1.Mail('Personal', 'correo1@example.com');
var mail2 = new mail_1.Mail('Trabajo', 'correo2@example.com');
var mail3 = new mail_1.Mail('Otro', 'correo3@example.com');
// Crear personas y agregar direcciones, teléfonos y correos electrónicos
var persona1 = new persona_1.Persona('Juan', 'Pérez', 30, '12345678X', new Date(1993, 7, 10), 'Azul', 'Masculino', [direccion1], [mail1], [telefono1], ['Nota 1', 'Nota 2']);
persona1.agregarDireccion(direccion2);
persona1.agregarMail(mail2);
persona1.agregarTelefono(telefono2);
persona1.agregarNota('Nota 3');
var persona2 = new persona_1.Persona('María', 'González', 25, '87654321Y', new Date(1998, 2, 22), 'Rojo', 'Femenino', [direccion2], [mail2], [telefono2], ['Nota 4']);
persona2.agregarDireccion(direccion3);
persona2.agregarMail(mail3);
persona2.agregarTelefono(telefono3);
persona2.agregarNota('Nota 5');
var persona3 = new persona_1.Persona('Pedro', 'López', 35, '56789012Z', new Date(1988, 11, 5), 'Verde', 'Masculino', [direccion3], [mail3], [telefono3], ['Nota 6']);
// Crear un array con las personas
var personas = [persona1, persona2, persona3];
// Mostrar los registros en el terminal
mostrarRegistrosPersonas(personas);
// Modificar uno de los registros de persona
var dniBuscado = '12345678X'; // DNI de la persona que se desea modificar
var personaEncontrada;
for (var i = 0; i < personas.length; i++) {
    var persona = personas[i];
    if (persona.dni === dniBuscado) {
        personaEncontrada = persona;
        break;
    }
}
if (personaEncontrada) {
    // Realizar las modificaciones (agregar dirección, mail y teléfono)
    var nuevaDireccion = new direccion_1.Direccion('Calle Nueva', 789, '28002', 'Madrid', 'Madrid');
    personaEncontrada.agregarDireccion(nuevaDireccion);
    var nuevoMail = new mail_1.Mail('Personal', 'correo4@example.com');
    personaEncontrada.agregarMail(nuevoMail);
    var nuevoTelefono = new telefono_1.Telefono('Móvil', '987654321');
    personaEncontrada.agregarTelefono(nuevoTelefono);
    console.log('');
    console.log(' > Se han modificado los datos de la persona con DNI: ' + dniBuscado);
    console.log('');
}
else {
    console.log(' > No se encontró ninguna persona con el DNI buscado.');
}
// Mostrar los registros de persona en el terminal
mostrarRegistrosPersonas(personas);
