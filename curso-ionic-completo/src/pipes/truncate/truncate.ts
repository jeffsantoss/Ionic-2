import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, length:number) {
    if(value.length > length){
      console.log(value,value.length)
      value = value.substring(0,length-2) + '...'
    }
    return value;
  }
}
