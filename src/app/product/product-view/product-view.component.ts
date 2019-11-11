import { Component, OnInit, Input, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Product } from '../product';
import { TruncatePipe } from 'src/app/truncate.pipe';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
  
  // ,
  // encapsulation:ViewEncapsulation.Emulated,  //use the default one - style css of the component is encapsulated and won't affect other component
  // changeDetection: ChangeDetectionStrategy.Default

})
export class ProductViewComponent implements OnInit {

  @Input() product:Product;
  description:string;
  toggleFlag: boolean;
  isFav:boolean;
  textlimit=200;

  constructor(private truncater:TruncatePipe) { }

  ngOnInit() {
    this.toggleFlag = false; //when it is true, show the full summary
    this.description = this.truncater.transform(this.product.description,this.textlimit);
    this.isFav = this.product.isFav;
  }

  showDescription(){
    this.toggleFlag = !this.toggleFlag;
    this.description = this.toggleFlag?this.product.description:this.truncater.transform(this.product.description,this.textlimit);

    
  }

  toggleFavorite(){
    this.isFav = !this.isFav;
    this.product.isFav = this.isFav;
    
  }

  setFavorite()
  {
    this.isFav = true;
    this.product.isFav = true;
  }
}
