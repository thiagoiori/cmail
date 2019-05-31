import { Injectable } from '@angular/core';

@Injectable()
export class TokenService {

  setToken(token){
    console.log('gravou token');
    
    localStorage.setItem('cmail-token', token);
  }

  getToken() {
    return localStorage.getItem('cmail-token');
  }
}