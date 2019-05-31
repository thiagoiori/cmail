import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PageDataService } from 'src/app/services/page-data.service';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'cmail-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css',
              './header-search.css']
})
export class HeaderComponent implements OnInit {
  tituloDaPagina = "";
  constructor(private _pageDataService: PageDataService/*,
              private _headerService: HeaderService*/) {
    this._pageDataService.emitirNovoTitulo.subscribe((novoTitulo) => { this.tituloDaPagina = novoTitulo });
   }

   @Output() filtroEvent = new EventEmitter();

  ngOnInit() {
  }

  private _isMenuOpen: boolean = false;
  

  get isMenuOpen() {
    return this._isMenuOpen;
  }

  toggleMenu() {
    this._isMenuOpen = !this.isMenuOpen;
    
  }

  handleBuscaChanges(filtro) {
    //console.log(filtro);
    this.filtroEvent.next(filtro);
    //this._headerService.atualizarTermoDeFiltro(filtro);
  }

}
