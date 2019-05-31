import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormValidacao } from 'src/app/utils/FormValidacao';
import { Login } from 'src/app/models/dto/login';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login-service';
import { PageDataService } from 'src/app/services/page-data.service';

@Component({
  selector: 'cmail-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.css'
  ]
})
export class LoginComponent implements OnInit {

  login = {
    email: "",
    senha: ""
  }

  username = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);

  formLogin = new FormGroup({
    username: this.username,
    password: this.password
  });

  constructor(
              private validacao: FormValidacao,
              private roteador: Router,
              private loginService: LoginService,
              private pageDataService: PageDataService) { }

  ngOnInit() {
    this.pageDataService.atualizarTitulo("Login");
  }

  handleLogin(formLogin: NgForm) {
   
    if(formLogin.invalid) {
      console.log(this.formLogin);
      this.validacao.validaCampos(this.formLogin);
      return;
    }

    this.loginService
      .autenticar(this.login)
      .subscribe(
        response => {
          this.roteador.navigate(['inbox']);
        }
    );    
  }

}
