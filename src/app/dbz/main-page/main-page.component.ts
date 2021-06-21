import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  personajes:Personaje[] = [
    {
      nombre: 'Goku', 
      poder: 15000
    },
    {
      nombre: 'Vegeta', 
      poder: 12000
    }
  ];

  nuevo:Personaje = {
    nombre: '',
    poder: 0
  };

  // mala practica usar el ngSubmit
  /*agregar(event:any){
    event.preventDefault();
    console.log("hey");
  }*/

  /*cambiarNombre(event:any) {
    console.log(event.target.value);
  }*/

  agregar(){
    if (this.nuevo.nombre.trim().length === 0) {return;}
    console.log(this.nuevo);
    this.personajes.push(this.nuevo);
    this.nuevo = {nombre:'', poder: 0};
  }
}
