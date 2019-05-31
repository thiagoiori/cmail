import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: "[cmailFormField]"
})
export class FormFieldDirective implements OnInit {

  constructor(private _elemento: ElementRef) {}

  ngOnInit(): void {
    const campo: HTMLInputElement = this._elemento.nativeElement;

    if(campo.name) {
      campo.id = campo.name;
      campo.setAttribute('placeholder', ' ');
      campo.classList.add('mdl-textfield__input');
    } else {
      throw new Error("Para usar a diretiva cmailFormField, favor declarar o campo 'name'");
    }
  }

}