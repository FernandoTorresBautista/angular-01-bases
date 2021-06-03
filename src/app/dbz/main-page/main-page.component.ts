import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  // mala practica usar el ngSubmit
  /*agregar(event:any){
    event.preventDefault();
    console.log("hey");
  }*/
  
  agregar(){
    console.log("esta es una prueba");
  }
}
