import { NgModule } from '@angular/core';
import { CaixaDeEntradaComponent } from './caixa-de-entrada.component';
import { RouterModule, Routes } from '@angular/router';

const routesInbox: Routes = [
  { path: '', component: CaixaDeEntradaComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(routesInbox)
  ],
  exports: [
    RouterModule
  ]
})
export class CaixaDeEntradaRoutingModule { }
