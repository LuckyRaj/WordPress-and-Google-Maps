import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transform'
})
export class TransformPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    return value === undefined? '' : value.replace(/[^a-zA-Z0-9]/gi,' ');
  }

}
