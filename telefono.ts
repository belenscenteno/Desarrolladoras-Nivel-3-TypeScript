export class Telefono {
    private _tipo: string;
    private _numero: string;
  
    constructor(tipo: string, numero: string) {
      this._tipo = tipo;
      this._numero = numero;
    }
  
    get tipo(): string {
      return this._tipo;
    }
  
    set tipo(tipo: string) {
      this._tipo = tipo;
    }
  
    get numero(): string {
      return this._numero;
    }
  
    set numero(numero: string) {
      this._numero = numero;
    }
}
  