import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class FormValidacao {

    validaCampos(form) {
        for(let controle in form.controls) {
            form.controls[controle].markAsTouched();
          }
    }

    validaURL(url: string): boolean {
        return true;
    }

    // validarUrlImagem(controle: AbstractControl): Observable<ValidationErrors | null> {
    //     const url = controle.value;
    //     return this.http.head(url, {observe: "response"})
    //     .pipe(
    //       map((response) => { 
    //         if(response.ok) {
    //           console.warn('deu certo');
    //           return null;
    //         }
    //         else {
    //           console.warn('erro');
    //           console.log(response);
    //           let erro = {
    //             mensagem: 'URL inválida',
    //             urlInvalida: response.status
    //           };
    //           return erro;
    //         }
    //       })
    //       ,catchError((response) => {
    //         console.log(response);
            
    //         let msgErro = {
    //           urlInvalida: "URL com erro",
    //           status: response.status
    //         }
    //         return [msgErro];
    //       })
    //     )
    //   }
}