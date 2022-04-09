import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipeGasto'
})
export class FilterPipeGastoPipe implements PipeTransform {

  transform(value: any, arg: any): any{
    let resultadoGastos = [];
    for(const gasto of value){
      if(gasto.codigoReferencia.indexOf(arg) > -1){
        resultadoGastos.push(gasto);
      }
    }
    
    return resultadoGastos;
  }
}
