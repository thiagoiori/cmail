import { Email } from "src/app/models/Email";

export class EmailPost {

    id = "";
    to = "";
    subject = "";
    content = "";
    created_at = new Date();

    constructor(email: Email) {
        this.id = email.id;
        this.to = email.destinatarios;
        this.subject = email.assunto;
        this.content = email.mensagem;
    }
}