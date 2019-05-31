import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class HeaderService{
    constructor() {
        this.atualizarTermoDeFiltro('');
    }

    valorDoFiltro = new Subject<string>();

    atualizarTermoDeFiltro(novoValor: string) {
        this.valorDoFiltro.next(novoValor);
    }
}