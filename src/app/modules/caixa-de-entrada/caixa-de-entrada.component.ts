import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Email } from 'src/app/models/Email';
import { EmailService } from 'src/app/services/email.service';
import { EmailPost } from 'src/app/models/dto/email-post';
import { PageDataService } from 'src/app/services/page-data.service';
//import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'cmail-caixa-de-entrada',
  templateUrl: './caixa-de-entrada.component.html',
  styles: []
})
export class CaixaDeEntradaComponent implements OnInit {

  constructor(private _emailService: EmailService,
              private _pageDataService: PageDataService/*,
              private _headerService: HeaderService*/) { }

  termoParaFiltro = "";
  textoDigitado = "";

  ngOnInit() {
    this.obterEmails();
    this._pageDataService.atualizarTitulo('Inbox');
    //this._headerService.valorDoFiltro.subscribe(novoValor => this.termoParaFiltro = novoValor);
  }

  obterEmails() {
    this._emailService
      .getMails()
      .subscribe(email => {
        this._listaMail = email.reverse();
      }, 
      erro => console.log(erro)
      );
  }
  title = 'cmail';
  private _isNewMailFormOpen: boolean = false;
  private _email: Email = new Email();
  private _listaMail: Email[] = [];

  get isEmailOpened() {
    return this._isNewMailFormOpen;
  }

  get isNewMailFormOpen() {
    return this._isNewMailFormOpen;
  }

  toggleNewMailForm() {
    this._isNewMailFormOpen = !this.isNewMailFormOpen;
  }

  enviarMail(formEmail: NgForm) {
    if(formEmail.valid) {
      //this._listaMail.push(this._email);
      //this._email = new Email();
      const emailDto = new EmailPost(this._email);
      this._emailService.enviar(emailDto)
      .subscribe(mailDto => {
          this._listaMail.push(mailDto);
          formEmail.reset();
          this.toggleNewMailForm();
      });
      
    } else {
      for (let nomeControle in formEmail.controls) {
        formEmail.controls[nomeControle].markAsTouched();        
      }
    }
  }

  getMailAddress({target}) {
    this._email.destinatarios= target.value;
  }

  getSubject({target}) {
    this._email.assunto = target.value;
  }

  getMailBody({target}) {
    this._email.mensagem = target.value;
  }

  get emails() {
    return this._email;
  }

  get getEmails() {
    return [].concat(this._listaMail, []);
  }

  filtrarEmail() {
    return this._listaMail.filter((email) => {
      if(email.assunto.toUpperCase().includes(this.textoDigitado.toUpperCase()) ||
         email.mensagem.toUpperCase().includes(this.textoDigitado.toUpperCase()))
         return email;
    })
  }

  apagarEmail(id) {
    if(confirm('Tem certeza que quer apagar?')) {
      this._emailService.delete(id)
        .subscribe(() =>
        {
          this.obterEmails();
        },
        (erro) => {
          console.log(erro);
          
        });
      }
  }
}
