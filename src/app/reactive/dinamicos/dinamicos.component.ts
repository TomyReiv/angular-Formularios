import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  get favoritosArr(){
    return this.miFormulario.get('favoritos') as FormArray
  }


  nuevoFavorito: FormControl = this.formBuilder.control('', Validators.required)

  constructor(private formBuilder: FormBuilder) {}

  miFormulario: FormGroup = this.formBuilder.group({
    nombre: ['' , [Validators.required, Validators.minLength(3)]],
    favoritos: this.formBuilder.array([
      ['Metal Gear', Validators.required ],
      ['Death Stranding', Validators.required]
    ], Validators.required)
  })

  campoNoEsValido(campo: string){
  return  this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched
  }

  agregarFavorito(){
    if(this.nuevoFavorito.invalid){
      return;
    }
    
    this.favoritosArr.push(new FormControl(this.nuevoFavorito.value, Validators.required));
    this.nuevoFavorito.reset();
  }

  guardar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return
    }

    console.log(this.miFormulario.value)
    this.miFormulario.reset();
  }
  borrar(indice: number){
    console.log(indice);
    this.favoritosArr.removeAt(indice);
  }

}
