import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../services/login-service';

@Injectable()
export class AuthGuard implements CanActivate {
    
    constructor(private roteador: Router/*, private _loginService: LoginService*/) { }

    canActivate() {
        if(!localStorage.getItem('cmail-token')) {
            this.roteador.navigate(['login']);
            return false;
        }

        // if (!this._loginService.isAuthenticated()) {
        //     return false;
        // }
        return true;
    }
}