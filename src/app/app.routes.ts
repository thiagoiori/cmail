import { Routes, RouterModule } from "@angular/router";
// import { LoginComponent } from './modules/login/login.component';
// import { CadastroComponent } from './modules/cadastro/cadastro.component';
// import { CaixaDeEntradaComponent } from './modules/caixa-de-entrada/caixa-de-entrada.component';
import { NgModule } from '@angular/core';
import { AuthGuard } from './guard/auth.guard';

const rotasApp: Routes = [
   { path: '', loadChildren: 'src/app/modules/login/login.module#LoginModule' }
  ,{ path:'login', loadChildren: 'src/app/modules/login/login.module#LoginModule'}
  ,{ path:'cadastro', loadChildren: 'src/app/modules/cadastro/cadastro.module#CadastroModule'}
  ,{ 
    path:'inbox', 
    loadChildren: 'src/app/modules/caixa-de-entrada/caixa-de-entrada.module#CaixaDeEntradaModule',
    canActivate: [AuthGuard] }
  // { path: 'cadastro', component: CadastroComponent },
  // { path: 'inbox', component: CaixaDeEntradaComponent },
  // { path: 'login/:userName', component: LoginComponent },
  // { path: 'login', component: LoginComponent },
  ,{ path: '**', redirectTo: '' }
]

//export const ModuloRoteamento = RouterModule.forRoot(rotasApp);

@NgModule({
  imports: [
    RouterModule.forRoot(rotasApp)
  ],
  exports: [
    RouterModule
  ],
  providers: [AuthGuard]
})
export class ModuloRoteamento{

}