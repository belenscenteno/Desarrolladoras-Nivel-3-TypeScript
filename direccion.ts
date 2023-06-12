export class Direccion {
    private _calle: string;
    private _numero: number;
    private _piso: number | null;
    private _letra: string | null;
    private _codigoPostal: string;
    private _poblacion: string;
    private _provincia: string;
  
    constructor(
      calle: string,
      numero: number,
      codigoPostal: string,
      poblacion: string,
      provincia: string,
      piso: number | null = null,
      letra: string | null = null,
    ) {
      this._calle = calle;
      this._numero = numero;
      this._piso = piso;
      this._letra = letra;
      this._codigoPostal = codigoPostal;
      this._poblacion = poblacion;
      this._provincia = provincia;
    }
  
    get calle(): string {
      return this._calle;
    }
  
    set calle(calle: string) {
      this._calle = calle;
    }
  
    get numero(): number {
      return this._numero;
    }
  
    set numero(numero: number) {
      this._numero = numero;
    }
  
    get piso(): number | null {
      return this._piso;
    }
  
    set piso(piso: number | null) {
      this._piso = piso;
    }
  
    get letra(): string | null {
      return this._letra;
    }
  
    set letra(letra: string | null) {
      this._letra = letra;
    }
  
    get codigoPostal(): string {
      return this._codigoPostal;
    }
  
    set codigoPostal(codigoPostal: string) {
      this._codigoPostal = codigoPostal;
    }
  
    get poblacion(): string {
      return this._poblacion;
    }
  
    set poblacion(poblacion: string) {
      this._poblacion = poblacion;
    }
  
    get provincia(): string {
      return this._provincia;
    }
  
    set provincia(provincia: string) {
      this._provincia = provincia;
    }
  
    getDireccionCompleta(): string {
      let direccionCompleta = `${this._calle} ${this._numero}`;
      if (this._piso !== null) {
        direccionCompleta += `, ${this._piso}`;
      }
      if (this._letra !== null) {
        direccionCompleta += this._letra;
      }
      direccionCompleta += `, ${this._codigoPostal} ${this._poblacion}, ${this._provincia}`;
      return direccionCompleta;
    }
}
  