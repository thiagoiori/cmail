import { EmailPost } from './email-post';

export class EmailDtoOutput {
  private _id = "";
  private _destinatarios = "";
  private _assunto = "";
  private _mensagem = "";
  private _dataEnvio = new Date();

  constructor(mail: EmailPost) {
      this._id = mail.id;
      this._destinatarios = mail.to;
      this._assunto = mail.subject;
      this._mensagem = mail.content;
      this._dataEnvio = mail.created_at;
      }

  get destinatarios() {
    return this._destinatarios;
  }

  set destinatarios(destinatarios) {
    this._destinatarios = destinatarios;
  }

  get assunto() {
    return this._assunto;
  }

  set assunto(assunto) {
    this._assunto = assunto;
  }

  get mensagem() {
    return this._mensagem;
  }

  set mensagem(mensagem) {
    this._mensagem = mensagem;
  }

  get dataEnvio() {
    return this._dataEnvio;
  }

  set dataEnvio(dataEnvio) {
    this._dataEnvio = dataEnvio;
  }

  get id() {
    return this._id;
  }

  set id(id) {
    this._id = id;
  }
}