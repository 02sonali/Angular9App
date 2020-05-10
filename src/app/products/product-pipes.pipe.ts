import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productPipes'
})
export class ProductPipesPipe implements PipeTransform {

  transform(value: number): any {
    return value <= 6 && value !==0 ? `Limited Stock!` : value;
  }

}
