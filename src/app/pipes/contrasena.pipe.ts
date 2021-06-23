import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activador: boolean ): string {
    let palabra = "";
    if(activador){
      for(let i=0; i<value.length; i++){
        palabra+="*";
      }
      return palabra;
    }
    return value ;
  }

}
