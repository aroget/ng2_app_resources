import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'qaSanitizePipe'})
export class SanitizePipe implements PipeTransform {
  transform(input: any): string {
    return input.replace(/<\/?[^>]+(>|$)/g, '')
                .replace(/&nbsp;/g, '')
                .replace(/"/g, '')
                .replace(/'/g, '')
                .replace(/</g, '')
                .replace(/>/g, '')
                .replace(/\//g, '')
                .replace(/\\/g, '')
                .replace(/`/g, '');
  }
}
