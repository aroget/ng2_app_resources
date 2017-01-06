import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'qaTruncate'})
export class TruncatePipe implements PipeTransform {
  transform(input: any, limit: number): string {
    return input.slice(0, limit) + '...';
  }
}
