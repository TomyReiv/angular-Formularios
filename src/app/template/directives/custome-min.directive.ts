import { Directive, Input } from "@angular/core";
import { AbstractControl, FormControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";


@Directive({
    selector: '[customeMin][ngModel]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: CustomeMinDirective,
        multi: true
    }]

})

export class CustomeMinDirective implements Validator {
    @Input() minimo!: number;
    constructor() { }

    validate(control: FormControl) {
        const inputValue = control.value;
        return (inputValue < this.minimo) ? { 'customMin': true } : null;
    }
}
