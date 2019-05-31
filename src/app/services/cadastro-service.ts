import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/User';


@Injectable()
export class CadastroService{
  
  private _endpoint: string = "users";

    constructor(private http: HttpClient) { }

    cadastrar(usuario: User){
      const url = environment.cmailApi;   
      return this.http
        .post(url + this._endpoint, usuario);
    }
}