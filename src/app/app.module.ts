import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ModuloRoteamento } from './app.routes';
import { TokenService } from './services/token-service';
import { LoginService } from './services/login-service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ModuloRoteamento
  ],
  providers: [TokenService,
              LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
