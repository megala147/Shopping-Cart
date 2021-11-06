import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], filterString: string, propName: string) {
    // const result: any[];
    // if (!value || filterString === '' || propName === '') {
    //   return value
    // }
    // value.forEach()
  }
}
