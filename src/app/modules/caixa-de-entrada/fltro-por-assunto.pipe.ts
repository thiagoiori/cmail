import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filtroPorAssunto'
})
export class PipeTransformation implements PipeTransform {
    transform(value: any, ...args: any[]) {
        throw new Error("Method not implemented.");
    }

}