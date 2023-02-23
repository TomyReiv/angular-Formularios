import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit{
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
   /*  this.miFormulario.setValue({
      nombre: 'Rtx 4080',
      precio: 1800,
      existencias: 10
    }) */
  }

 /*  miFormulario: FormGroup = new FormGroup({
    'nombre':       new FormControl(''),
    'precio':       new FormControl(0),
    'existencias':  new FormControl(0)
  }); */

  miFormulario: FormGroup = this.formBuilder.group({
    nombre: [ , [Validators.required, Validators.minLength(3)]],
    precio: [ , [Validators.required, Validators.min(1)]],
    existencias:[ , [Validators.required, Validators.min(1)]]
  })

  campoNoEsValido(campo: string){
  return  this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched
  }
  guardar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return
    }

    console.log(this.miFormulario.value)
    this.miFormulario.reset();
  }
}
