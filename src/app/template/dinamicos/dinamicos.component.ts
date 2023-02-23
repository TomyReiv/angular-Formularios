import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


interface Persona {
  nombre: string;
  favorito: Favorito[]
}
interface Favorito {
  id: number;
  nombre: string
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {


  @ViewChild('miFormulario') miFormulario!:NgForm;

  initForm={
    Nombre: 'Tomas'
  }

  nuevoJuego: string = '';
  persona: Persona = {
    nombre: 'Tomas',
    favorito: [
      {id:1, nombre: 'Hogwards legacy'},
      {id:2, nombre: 'Grounded'}
    ]
  }

  guardar(){
    console.log('Guardado')
  }

  nombreValido(): boolean{
    return this.miFormulario?.controls['Nombre']?.invalid && this.miFormulario?.controls['Nombre']?.touched;
  }

  agregarJuego(){
    const nuevoFavorito: Favorito = {
      id: this.persona.favorito.length + 1,
      nombre: this.nuevoJuego
    }
    this.persona.favorito.push({...nuevoFavorito});
    this.nuevoJuego= '';
  }

  eliminar(index:number){
    this.persona.favorito.splice(index, 1);
  }
}
