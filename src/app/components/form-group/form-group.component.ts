import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'cmail-form-group',
  templateUrl: './form-group.component.html',
  styles: []
})
export class FormGroupComponent implements OnInit {

  constructor(private elemento: ElementRef) { }

  ngOnInit() {

  }

  @Input() label: string = "";
  @Input('id-campo') idCampo: string = "";
  @Input('control') validation: {invalid:false, touched: false};
}
