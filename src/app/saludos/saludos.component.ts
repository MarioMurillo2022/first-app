import { Component } from '@angular/core';
import { ITexto } from '../Interfaces/Itexto';
@Component({
  selector: 'app-saludos',
  standalone: true,
  imports: [],
  templateUrl: './saludos.component.html',
  styleUrl: './saludos.component.css'
})
export class SaludosComponent {

  Saludo: ITexto = {
    titulo: 'Hola mundo de Angular',
    parrafo: 'Learn Angular this: ',
    fecha: new Date()
  }

}
