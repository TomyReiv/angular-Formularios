import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, EmailValidator } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validators/email-validator.service';
import { emailPattern, nombreApellidoPttern, noPuedeSerTomyreiv } from 'src/app/shared/validators/validaciones';
import { ValidatorService } from '../../../shared/validators/validator.service';
import { MatProgressBar } from '@angular/material/progress-bar';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {



  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.vs.nombreApellidoPttern)]],
    email: ['', [Validators.required, Validators.pattern(this.vs.emailPattern)], [this.emailValidator]],
    username: ['', [Validators.required, this.vs.noPuedeSerTomyreiv]],
    contraseña: ['', [Validators.required, Validators.minLength(6)]],
    confContraseña: ['', [Validators.required]]
  },
    {
      validators: [this.vs.camposIguales('contraseña', 'confContraseña')]
    })

  get emailError(): string {
    const errors = this.miFormulario.get('email')?.errors;
    if(errors?.["required"]){
      return '*El correo es obligatorio'
    }else if(errors?.["pattern"]){
      return '*El valor ingresado no tiene formato de correo'
    }else if(errors?.["emailTomado"]){
      return '*El correo ya existe'
    }
    return '';
  }
  constructor(private fb: FormBuilder,
    private vs: ValidatorService,
    private emailValidator: EmailValidatorService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Tomas Rave',
      email: 'reavetomas@gmail.com',
      username: 'Tomas',
      contraseña: '123456',
      confContraseña: '123456'
    })
  }

  campoNoValido(campo: string) {
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }

  submitFormulario() {
    this.miFormulario.markAllAsTouched();
  }


  /* emailRequired(){
    return this.miFormulario.get('email')?.errors?.["required"] && this.miFormulario.get('email')?.touched;
  }
  emailFormato(){
    return this.miFormulario.get('email')?.errors?.["pattern"] && this.miFormulario.get('email')?.touched;
  }
  emailTomado(){
    return this.miFormulario.get('email')?.errors?.["emailTomado"] && this.miFormulario.get('email')?.touched;
  } */
}
