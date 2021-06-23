import { Component } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre2: string = "AdriAN javIEr AlarcOn vArGas";
  nombre: string = "Cápitan América";
  arreglo: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI: number = Math.PI;
  porcentaje: number = 0.234;
  salario: number = 1234.5;
  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: 20
    }
  }
  valorPromesa = new Promise<string>((resolve) => {
    setTimeout(() => {
        resolve('LLego la data');
    }, 4500);
  });
  fecha: Date = new Date();
  videoUrl; string = "https://www.youtube.com/embed/gvMdyJmiDYg";
  idioma: string = 'es';
  activar: boolean = false;
}
