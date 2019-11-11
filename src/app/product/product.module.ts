import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductViewComponent } from './product-view/product-view.component';
import { DirectiveModule } from '../directive/directive.module';
import { NewProductComponent } from './new-product/new-product.component';
import { FormsModule } from '@angular/forms';
import { KwPipe } from './kw.pipe';


@NgModule({
  declarations: [ProductViewComponent, NewProductComponent, KwPipe],
  imports: [
    CommonModule,
    DirectiveModule,
    FormsModule
    
  ],
  exports:[
    ProductViewComponent,
    NewProductComponent,
    KwPipe
  ]
})
export class ProductModule { }
