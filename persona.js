"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombre, apellidos, edad, dni, cumpleanos, colorFavorito, sexo, direcciones, mails, telefonos, notas) {
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._edad = edad;
        this._dni = dni;
        this._cumpleanos = cumpleanos;
        this._colorFavorito = colorFavorito;
        this._sexo = sexo;
        this._direcciones = direcciones;
        this._mails = mails;
        this._telefonos = telefonos;
        this._notas = notas;
    }
    Object.defineProperty(Persona.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (nombre) {
            this._nombre = nombre;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "apellidos", {
        get: function () {
            return this._apellidos;
        },
        set: function (apellidos) {
            this._apellidos = apellidos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "edad", {
        get: function () {
            return this._edad;
        },
        set: function (edad) {
            this._edad = edad;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "dni", {
        get: function () {
            return this._dni;
        },
        set: function (dni) {
            this._dni = dni;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "cumpleanos", {
        get: function () {
            return this._cumpleanos;
        },
        set: function (cumpleanos) {
            this._cumpleanos = cumpleanos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "colorFavorito", {
        get: function () {
            return this._colorFavorito;
        },
        set: function (colorFavorito) {
            this._colorFavorito = colorFavorito;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "sexo", {
        get: function () {
            return this._sexo;
        },
        set: function (sexo) {
            this._sexo = sexo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "direcciones", {
        get: function () {
            return this._direcciones;
        },
        enumerable: false,
        configurable: true
    });
    Persona.prototype.agregarDireccion = function (direccion) {
        this._direcciones.push(direccion);
    };
    Persona.prototype.eliminarDireccion = function (direccion) {
        var indice = this._direcciones.indexOf(direccion);
        if (indice !== -1) {
            this._direcciones.splice(indice, 1);
        }
    };
    Object.defineProperty(Persona.prototype, "mails", {
        get: function () {
            return this._mails;
        },
        enumerable: false,
        configurable: true
    });
    Persona.prototype.agregarMail = function (mail) {
        this._mails.push(mail);
    };
    Persona.prototype.eliminarMail = function (mail) {
        var indice = this._mails.indexOf(mail);
        if (indice !== -1) {
            this._mails.splice(indice, 1);
        }
    };
    Object.defineProperty(Persona.prototype, "telefonos", {
        get: function () {
            return this._telefonos;
        },
        enumerable: false,
        configurable: true
    });
    Persona.prototype.agregarTelefono = function (telefono) {
        this._telefonos.push(telefono);
    };
    Persona.prototype.eliminarTelefono = function (telefono) {
        var indice = this._telefonos.indexOf(telefono);
        if (indice !== -1) {
            this._telefonos.splice(indice, 1);
        }
    };
    Object.defineProperty(Persona.prototype, "notas", {
        get: function () {
            return this._notas;
        },
        enumerable: false,
        configurable: true
    });
    Persona.prototype.agregarNota = function (nota) {
        this._notas.push(nota);
    };
    Persona.prototype.eliminarNota = function (nota) {
        var indice = this._notas.indexOf(nota);
        if (indice !== -1) {
            this._notas.splice(indice, 1);
        }
    };
    return Persona;
}());
exports.Persona = Persona;
