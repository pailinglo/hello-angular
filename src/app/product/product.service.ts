import { Injectable } from '@angular/core';
import { Product} from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [];
  constructor() { 

    this.products.push(new Product("testBlog Post 1","testLorem ipsum dolor sit amet, consectetur adipiscing elit. Nam posuere feugiat finibus. Nulla pharetra leo eget elit pretium, a ornare lacus laoreet. Proin sed dignissim nibh. Sed sagittis nisl ut ante porttitor malesuada. Donec ac sapien neque. Nulla viverra lacinia velit id gravida. Sed placerat ultrices tincidunt. Nulla congue quam ut erat rutrum, at consectetur dui convallis."));
    this.products.push(new Product("Blog Post 2","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam posuere feugiat finibus. Nulla pharetra leo eget elit pretium, a ornare lacus laoreet. Proin sed dignissim nibh. Sed sagittis nisl ut ante porttitor malesuada. Donec ac sapien neque. Nulla viverra lacinia velit id gravida. Sed placerat ultrices tincidunt. Nulla congue quam ut erat rutrum, at consectetur dui convallis."));
    this.products.push(new Product("Blog Post 3","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam posuere feugiat finibus. Nulla pharetra leo eget elit pretium, a ornare lacus laoreet. Proin sed dignissim nibh. Sed sagittis nisl ut ante porttitor malesuada. Donec ac sapien neque. Nulla viverra lacinia velit id gravida. Sed placerat ultrices tincidunt. Nulla congue quam ut erat rutrum, at consectetur dui convallis."));
    this.products.push(new Product("Blog Post 4","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam posuere feugiat finibus. Nulla pharetra leo eget elit pretium, a ornare lacus laoreet. Proin sed dignissim nibh. Sed sagittis nisl ut ante porttitor malesuada. Donec ac sapien neque. Nulla viverra lacinia velit id gravida. Sed placerat ultrices tincidunt. Nulla congue quam ut erat rutrum, at consectetur dui convallis."));
    this.products.push(new Product("Blog Post 5","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam posuere feugiat finibus. Nulla pharetra leo eget elit pretium, a ornare lacus laoreet. Proin sed dignissim nibh. Sed sagittis nisl ut ante porttitor malesuada. Donec ac sapien neque. Nulla viverra lacinia velit id gravida. Sed placerat ultrices tincidunt. Nulla congue quam ut erat rutrum, at consectetur dui convallis."));
    this.products.push(new Product("Blog Post 6","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam posuere feugiat finibus. Nulla pharetra leo eget elit pretium, a ornare lacus laoreet. Proin sed dignissim nibh. Sed sagittis nisl ut ante porttitor malesuada. Donec ac sapien neque. Nulla viverra lacinia velit id gravida. Sed placerat ultrices tincidunt. Nulla congue quam ut erat rutrum, at consectetur dui convallis."));
    this.products.push(new Product("Blog Post 7","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam posuere feugiat finibus. Nulla pharetra leo eget elit pretium, a ornare lacus laoreet. Proin sed dignissim nibh. Sed sagittis nisl ut ante porttitor malesuada. Donec ac sapien neque. Nulla viverra lacinia velit id gravida. Sed placerat ultrices tincidunt. Nulla congue quam ut erat rutrum, at consectetur dui convallis."));
    this.products.push(new Product("Blog Post 8","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam posuere feugiat finibus. Nulla pharetra leo eget elit pretium, a ornare lacus laoreet. Proin sed dignissim nibh. Sed sagittis nisl ut ante porttitor malesuada. Donec ac sapien neque. Nulla viverra lacinia velit id gravida. Sed placerat ultrices tincidunt. Nulla congue quam ut erat rutrum, at consectetur dui convallis."));
    this.products.push(new Product("Blog Post 9","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam posuere feugiat finibus. Nulla pharetra leo eget elit pretium, a ornare lacus laoreet. Proin sed dignissim nibh. Sed sagittis nisl ut ante porttitor malesuada. Donec ac sapien neque. Nulla viverra lacinia velit id gravida. Sed placerat ultrices tincidunt. Nulla congue quam ut erat rutrum, at consectetur dui convallis."));
  
  }


  getData():Product[]{

    //let products:Product[] = [];
    
      
    return this.products;

  }

  addData(title:string, content:string)
  {
    this.products.push(new Product(title,content,new Date("2019/11/10")));
    console.log("add new product:"+title);
  }

}
