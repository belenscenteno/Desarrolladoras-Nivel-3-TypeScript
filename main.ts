import { Direccion } from './direccion';
import { Telefono } from './telefono';
import { Mail } from './mail';
import { Persona } from './persona';

// Funcion que muestra registros de personas en el terminal
function mostrarRegistrosPersonas(personas: Persona[]): void {
    console.log('Registros de Personas:');
    console.log('---------------------');

    for (let i = 0; i < personas.length; i++) {
    const persona = personas[i];

    console.log('Persona ' + (i + 1) + ':');
    console.log('Nombre: ' + persona.nombre);
    console.log('Apellidos: ' + persona.apellidos);
    console.log('Edad: ' + persona.edad);
    console.log('DNI: ' + persona.dni);
    console.log('Fecha de Cumpleaños: ' + persona.cumpleanos.toDateString());
    console.log('Color Favorito: ' + persona.colorFavorito);
    console.log('Sexo: ' + persona.sexo);

    console.log('Direcciones:');
    persona.direcciones.forEach((direccion) => {
        console.log('- ' + direccion.getDireccionCompleta());
    });

    console.log('Correos Electrónicos:');
    persona.mails.forEach((mail) => {
        console.log('- ' + mail.tipo + ': ' + mail.direccion);
    });

    console.log('Teléfonos:');
    persona.telefonos.forEach((telefono) => {
        console.log('- ' + telefono.tipo + ': ' + telefono.numero);
    });

    console.log('Notas:');
    persona.notas.forEach((nota) => {
        console.log('- ' + nota);
    });

    console.log('---------------------');
    }
}

// Crear direcciones
const direccion1 = new Direccion('Calle Principal', 123, '28001', 'Madrid', 'Madrid');
const direccion2 = new Direccion('Avenida Central', 456, '08001', 'Barcelona', 'Barcelona');
const direccion3 = new Direccion('Rua Principal', 789, '15001', 'A Coruña', 'A Coruña');

// Crear teléfonos
const telefono1 = new Telefono('Móvil', '123456789');
const telefono2 = new Telefono('Trabajo', '987654321');
const telefono3 = new Telefono('Casa', '456789123');

// Crear correos electrónicos
const mail1 = new Mail('Personal', 'correo1@example.com');
const mail2 = new Mail('Trabajo', 'correo2@example.com');
const mail3 = new Mail('Otro', 'correo3@example.com');

// Crear personas y agregar direcciones, teléfonos y correos electrónicos
const persona1 = new Persona('Juan', 'Pérez', 30, '12345678X', new Date(1993, 7, 10), 'Azul', 'Masculino', [direccion1], [mail1], [telefono1], ['Nota 1', 'Nota 2']);
persona1.agregarDireccion(direccion2);
persona1.agregarMail(mail2);
persona1.agregarTelefono(telefono2);
persona1.agregarNota('Nota 3');

const persona2 = new Persona('María', 'González', 25, '87654321Y', new Date(1998, 2, 22), 'Rojo', 'Femenino', [direccion2], [mail2], [telefono2], ['Nota 4']);
persona2.agregarDireccion(direccion3);
persona2.agregarMail(mail3);
persona2.agregarTelefono(telefono3);
persona2.agregarNota('Nota 5');

const persona3 = new Persona('Pedro', 'López', 35, '56789012Z', new Date(1988, 11, 5), 'Verde', 'Masculino', [direccion3], [mail3], [telefono3], ['Nota 6']);

// Crear un array con las personas
const personas: Persona[] = [persona1, persona2, persona3];

// Mostrar los registros en el terminal
mostrarRegistrosPersonas(personas);

// Modificar uno de los registros de persona
const dniBuscado = '12345678X'; // DNI de la persona que se desea modificar
let personaEncontrada: Persona | undefined;

for (let i = 0; i < personas.length; i++) {
    const persona = personas[i];
    if (persona.dni === dniBuscado) {
        personaEncontrada = persona;
        break;
    }
}

if (personaEncontrada) {
    // Realizar las modificaciones (agregar dirección, mail y teléfono)
    const nuevaDireccion = new Direccion('Calle Nueva', 789, '28002', 'Madrid', 'Madrid');
    personaEncontrada.agregarDireccion(nuevaDireccion);

    const nuevoMail = new Mail('Personal', 'correo4@example.com');
    personaEncontrada.agregarMail(nuevoMail);

    const nuevoTelefono = new Telefono('Móvil', '987654321');
    personaEncontrada.agregarTelefono(nuevoTelefono);

    console.log('');
    console.log(' > Se han modificado los datos de la persona con DNI: ' + dniBuscado);
    console.log('');
} else {
  console.log(' > No se encontró ninguna persona con el DNI buscado.');
}

// Mostrar los registros de persona en el terminal
mostrarRegistrosPersonas(personas);