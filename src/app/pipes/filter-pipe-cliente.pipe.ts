import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipeCliente'
})
export class FilterPipeClientePipe implements PipeTransform {

  
  transform(value: any, arg: any): any{
    let resultadoClientes = [];
    for(const cliente of value){
      if(cliente.nombre.indexOf(arg) > -1){
        resultadoClientes.push(cliente);
      }
    }
    
    return resultadoClientes;
  }

}
