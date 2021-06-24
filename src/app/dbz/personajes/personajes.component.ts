import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  //@Input('data') personajes: Personaje[] = [];
  //@Input() personajes: Personaje[] = [];
  //get personajes(): Personaje[] {
  get personajes() {
    return this.DbzService.personajes;
  }

  // se inicializa una vez en main-page, aunque esta aqui solo se inicializa 1 vez
  constructor( // definir propiedades, ID(inyeccion de dependendias) 
    private DbzService:DbzService
    ) {}

}
