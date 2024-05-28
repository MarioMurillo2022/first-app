import { Component } from '@angular/core';
import { ITexto } from '../Interfaces/Itexto';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  homeA: ITexto = {
    titulo: 'Tarea - Aplicación Angular',
    parrafo: 'Elabore una aplicación utilizando angular que consista por lo menos de 3 componentes. Este componente debe funcionar utilizando css, html y typescript, por lo que debe incluir código propio en cada uno de esos archivos',
    fecha: new Date()
  }

}
