import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Email } from 'src/app/models/Email';

@Component({
  selector: 'cmail-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() email: Email;
  @Output() apagaEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  apagarEmail() {
    this.apagaEvent.emit();    
  }

}
