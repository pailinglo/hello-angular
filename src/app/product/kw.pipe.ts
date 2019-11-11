import { Pipe, PipeTransform } from '@angular/core';
import { Product} from './product';

@Pipe({
  name: 'kw'
})
export class KwPipe implements PipeTransform {

  transform(products:Product[],keyword:string): any {
    
    console.log("kwsearch:"+products);
    console.log("kwsearch p1:"+keyword);
    
    return(products.filter(product=>product.description.indexOf(keyword)>=0||product.name.indexOf(keyword)>=0))
  }

}
