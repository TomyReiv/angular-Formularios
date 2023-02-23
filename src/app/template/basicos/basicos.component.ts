import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit{

  @ViewChild('miFormulario') miFormulario!:NgForm;

  initForm={
    Producto: 'Rtx 4090',
    Precio: 10,
    Existencias: 10
  }

ngOnInit(): void {}

  nombreValido(): boolean{
    return this.miFormulario?.controls['Producto']?.invalid && this.miFormulario?.controls['Producto']?.touched;
  }

  precioValid(): boolean{
    this.miFormulario?.controls['Precio']?.setErrors(null);
    return this.miFormulario?.controls['Precio']?.touched && this.miFormulario?.controls['Precio']?.invalid;
    }
      
 

  guardar(){
  this.miFormulario.resetForm({
    Producto: 'Sin nombre',
    Precio: 0,
    Existencias: 0
  })
  }

}
