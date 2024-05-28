import { Component } from '@angular/core';
import { IImagen } from '../Interfaces/IImagen';
import { ITexto } from '../Interfaces/Itexto';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent {

  Galeria: IImagen = {
    src: "https://img.freepik.com/foto-gratis/cara-divertida-tortuga-brasilena-linda-pequena-tortuga-brasilena-primer-plano-cara-tortuga-brasilena_488145-3614.jpg?t=st=1716863776~exp=1716867376~hmac=91867b79c55240e23c6d69d464f54ee43e0eeaf57a0341c67c09663c812a3765&w=740",
    alt: "Foto de tortuga"
  }

  informacion: ITexto = {
    titulo: 'Tortuga',
    parrafo: 'Las tortugas o quelonios forman un orden de reptiles caracterizados por tener un tronco ancho y corto, y un caparazón que protege los órganos internos de su cuerpo',
    fecha: new Date()
  }

}
