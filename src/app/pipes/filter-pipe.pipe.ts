import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {
  

 
  transform(value: any, arg: any): any{
    let resultadoVentas = [];
    for(const venta of value){
      if(venta.codigoReferencia.indexOf(arg) > -1){
        resultadoVentas.push(venta);
      }
    }
    
    return resultadoVentas;
  }


}
