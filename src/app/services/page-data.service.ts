import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageDataService {

  constructor() { }

  emitirNovoTitulo = new Subject<string>();

  atualizarTitulo(novoTitulo){
    document.title = novoTitulo;
    this.emitirNovoTitulo.next(novoTitulo);
  }
}
