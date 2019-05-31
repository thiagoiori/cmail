import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors, AbstractControl } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from "src/app/models/User";
import { Router } from '@angular/router';
import { FormValidacao } from "src/app/utils/FormValidacao";
import { map, catchError } from "rxjs/operators";
import { Observable } from 'rxjs';
import { CadastroService } from 'src/app/services/cadastro-service';
import { PageDataService } from 'src/app/services/page-data.service';

@Component({
  selector: 'cmail-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit {

  name = new FormControl('', [Validators.required, Validators.minLength(3)]);
  username = new FormControl('', [Validators.required, Validators.minLength(3)]);
  password = new FormControl('', [Validators.required]);
  phone = new FormControl('', [Validators.required, Validators.pattern('[0-9]{4,5}-?[0-9]{4}[0-9]?')]);
  avatar = new FormControl('', Validators.required, this.validarUrlImagem.bind(this));

  formCadastro = new FormGroup({
    name: this.name,
    username: this.username,
    password: this.password,
    phone: this.phone,
    avatar: this.avatar
  }, {updateOn: 'blur'}) // para atualizar o form somente quando perder o foco

  private _url: string = "http://localhost:3200/users";
  mensagem;

  constructor(private http: HttpClient,
              private roteador: Router,
              private validador: FormValidacao,
              private servicoCadastro: CadastroService,
              private _pageDataService: PageDataService) { }

  ngOnInit() {
    this._pageDataService.atualizarTitulo('Novo Usuário');
  }

  // validarForm(form: FormGroup) {
     
  // }

  validarUrlImagem(controle: AbstractControl): Observable<ValidationErrors | null> {
    const url = controle.value;
    return this.http.head(url, {observe: "response"})
    .pipe(
      map((response) => { 
        if(response.ok) {
          console.warn('deu certo');
          return null;
        }
        else {
          console.warn('erro');
          console.log(response);
          let erro = {
            mensagem: 'URL inválida',
            urlInvalida: response.status
          };
          return erro;
        }
      })
      ,catchError((response) => {
        console.log(response);
        
        let msgErro = {
          urlInvalida: "URL com erro",
          status: response.status
        }
        return [msgErro];
      })
    )
  }

  handleCadastrarUsuario() {
    if(this.formCadastro.invalid) {
      console.log(this.formCadastro.value);
     
      this.validador.validaCampos(this.formCadastro);
      return;
    }

    let usuario: User = new User(this.formCadastro.value.name,
                                this.formCadastro.value.username,
                                this.formCadastro.value.password,
                                this.formCadastro.value.phone,
                                this.formCadastro.value.avatar);

    this.servicoCadastro.cadastrar(usuario)
      .subscribe(
        (response) => {
          console.log(response);
          this.formCadastro.reset();

          setTimeout(() => {
            this.roteador.navigate(['login', usuario.name]);
          }, 1000);
         },
        (responseError: HttpErrorResponse) => {
          console.log(responseError);
          this.mensagem = responseError.error.body;
        }
      );
  }

}
