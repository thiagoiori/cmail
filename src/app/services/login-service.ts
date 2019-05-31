import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Login } from '../models/dto/login';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TokenService } from './token-service';

@Injectable()
export class LoginService{
  private _endpoint: string = "login";

  constructor(private http: HttpClient, private _tokenService: TokenService) { }

  autenticar({email, senha}): Observable<Object> {
    const url = environment.cmailApi;
    const loginDto = new Login({email, senha});
    return this.http
      .post(url + this._endpoint, loginDto)
      .pipe(
        map((response: any) => {
          this._tokenService.setToken(response.token);
          
          //localStorage.setItem('cmail-token', response.token);
          
          return response;
        })
      );
  }

  isAuthenticated(): boolean {
    return true;
  }
}