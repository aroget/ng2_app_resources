import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'qaSlugify'})
export class SlugifyPipe implements PipeTransform {
  transform(input: any): string {
    return input.toLowerCase().split(' ').join('-', ' ');
  }
}
