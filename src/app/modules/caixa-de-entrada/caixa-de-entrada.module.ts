import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaixaDeEntradaComponent } from './caixa-de-entrada.component';
import { FormsModule } from '@angular/forms';
import { HeaderModule } from 'src/app/components/header/header.module';
import { CaixaDeEntradaRoutingModule } from './caixa-de-entrada-routing.module';
import { EmailService } from 'src/app/services/email.service';
import { HttpClientModule } from '@angular/common/http';
import { ListItemComponent } from './list-item/list-item.component';
import { PageDataService } from 'src/app/services/page-data.service';

@NgModule({
  declarations: [
    CaixaDeEntradaComponent,
    ListItemComponent
  ],
  exports: [CaixaDeEntradaComponent],
  imports: [
    CommonModule,
    FormsModule,
    HeaderModule,
    CaixaDeEntradaRoutingModule,
    HttpClientModule
  ],
  providers: [
    EmailService,
    PageDataService
  ]
})
export class CaixaDeEntradaModule { }
