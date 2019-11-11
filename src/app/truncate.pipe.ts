import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  //you can pass the string and any argument, ex: limit: if the string is more than limit, then truncate it
  transform(value: any, ...args: any[]): any {
    
    const limit = args.length > 0 ? parseInt(args[0],10):10;
    const trail = args.length > 1 ? args[1] : '...';
    
    console.log('lenght:'+value.length);
    console.log('limit:'+limit);
    
    return value.length > limit ? value.substring(0,limit) + trail : value;
    
  }

}
