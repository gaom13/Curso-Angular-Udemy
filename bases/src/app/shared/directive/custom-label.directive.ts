import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective implements OnInit{

  private htmlElement?: ElementRef<HTMLElement>;
  private _color: string = 'red';
  private _errors?: ValidationErrors | null;

  // set permite cambiar el valor de la directiva
  @Input() set color(value: string){
    this._color = value;
    this.setStyle();
  }

  @Input() set errors(value: ValidationErrors | null | undefined){
    this._errors = value;
    this.setErrorMessage();
  }

  constructor( private el: ElementRef<HTMLElement>) {
    // console.log(el)
    this.htmlElement = el;
  }

  ngOnInit(): void {
    this.setStyle();
  }

  setStyle():void {
    if( !this.htmlElement) return;

    this.htmlElement!.nativeElement.style.color = this._color;
  }

  setErrorMessage(): void {
    if( !this.htmlElement ) return;
    if( !this._errors) {
      this.setText('');
      return;
    }

    const errors = Object.keys(this._errors);

    if( errors.includes('required')){
      this.setText('Este campo es requerido.');
      return;
    }

    if( errors.includes('minlength')){
      const min = this._errors['minlength']['requiredLength'];
      const current = this._errors['minlength']['actualLength'];
      this.setText(`Mínimo ${current}/${min} caracteres.`);
      return;
    }

    if( errors.includes('email')){
      this.setText('No tiene formato de correo.');
      return;
    }

  }

  setText(value: string){
    this.htmlElement!.nativeElement.innerText = value;
  }
}
