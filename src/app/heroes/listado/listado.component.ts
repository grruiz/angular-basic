import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Superman', 'Iroman', 'Hulk'];
  heroeBorrado: string = '';
  borrado: boolean = false;


  borrarHeroe(): void {
    this.heroeBorrado = this.heroes.shift() || '';
    console.log(this.heroeBorrado);
  }
}
