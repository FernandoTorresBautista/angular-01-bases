import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {
  // propiedades, getters y setters, el constructor y métodos... 

  get personajes():Personaje[] {
    return [...this._personajes]; // rompe referencia del objeto local...
  }

  private _personajes:Personaje[] = [
    {
      nombre: 'Goku', 
      poder: 15000
    },
    {
      nombre: 'Vegeta', 
      poder: 12000
    }
  ];

  // constructor(){ console.log("Servicio dbz inicializado"); }
  
  agregarPersonaje(personaje:Personaje) {
    this._personajes.push( personaje );
  }
}