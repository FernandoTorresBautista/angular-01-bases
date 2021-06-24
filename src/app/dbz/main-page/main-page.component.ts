import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  //personajes:Personaje[] = [];


  // mala practica usar el ngSubmit
  /*agregar(event:any){
    event.preventDefault();
    console.log("hey");
  }*/

  /*cambiarNombre(event:any) {
    console.log(event.target.value);
  }*/

  // mover al componente agregar
  nuevo: Personaje = { // esto se ve en el paso por referencia del form...
    nombre: 'Maestro Roshi',
    poder: 1000
  };
  // agregar(){
  //   if (this.nuevo.nombre.trim().length === 0) {return;}
  //   console.log(this.nuevo);
  //   this.personajes.push(this.nuevo);
  //   this.nuevo = {nombre:'', poder: 0};
  // }

  // get personajes(): Personaje[] {
  //   return this.DbzService.personajes;
  // }

  // la data y el manejo de la misma debe de ponerse en un solo punto...
  // para ello usamos un servicio que maneje la data
  // agregarNuevoPersonaje(argumento:Personaje) {
  //   //debugger; // breakpoint para parar el debugger en chrome
  //   console.log('Main page component');
  //   console.log(argumento); // breakpoint por medio del vscode(editor)
  //   this.personajes.push(argumento); 
  // }


  constructor( // definir propiedades, ID(inyeccion de dependendias) 
    //public DbzService:DbzService
  ) {
    //this.personajes = this.DbzService.personajes;
  }

}
