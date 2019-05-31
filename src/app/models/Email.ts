export class Email {
  
  id = "";
  destinatarios: string = "";
  assunto: string = "";
  mensagem: string = "";
  dataEnvio: Date = new Date();

  constructor ( ) {
                  // this.destinatarios = _destinatarios;
                  // this.assunto = _assunto;
                  // this.mensagem = _mensagem;
                  // this.dataEnvio = _dataEnvio;
                }

  // private _destinatarios: string = "";
  // private _assunto: string = "";
  // private _mensagem: string = "";
  // private _dataEnvio: Date = new Date();

  // get destinatarios() {
  //   return this._destinatarios;
  // }

  // set destinatarios(destinatarios) {
  //   this._destinatarios = destinatarios;
  // }

  // get assunto() {
  //   return this._assunto;
  // }

  // set assunto(assunto) {
  //   this._assunto = assunto;
  // }

  // get mensagem() {
  //   return this._mensagem;
  // }

  // set mensagem(mensagem) {
  //   this._mensagem = mensagem;
  // }
  // get dataEnvio() {
  //   return this._dataEnvio;
  // }

  // set dataEnvio(dataEnvio) {
  //   this._dataEnvio = dataEnvio;
  // }

}