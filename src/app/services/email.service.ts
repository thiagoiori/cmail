import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { EmailPost } from '../models/dto/email-post';
import { map } from 'rxjs/operators';
import { Email } from '../models/Email';
import { EmailDtoOutput } from '../models/dto/email-dto-output';


@Injectable()
export class EmailService {

    private _endpoint = "emails/";
    private _headers = {
        headers: new HttpHeaders({
          'Authorization': localStorage.getItem("cmail-token")
        })
    }

    constructor(private _http: HttpClient) { }

    enviar(emailDto: EmailPost) {
      return this._http
      .post<EmailPost>(environment.cmailApi + this._endpoint, emailDto, this._headers )
      .pipe<Email>(
        map(email => new EmailDtoOutput(email))
      );
    }

    getMails() {
      return this._http
      .get<Object[]>(environment.cmailApi + this._endpoint, this._headers )
      .pipe<Email[]>(
        map((mail: EmailPost[]) =>
          mail.map(mailOut =>  new EmailDtoOutput(mailOut))
        )
      );
    }

    delete(id) {
      return this._http
      .delete(environment.cmailApi + this._endpoint + id, this._headers );
    }
}