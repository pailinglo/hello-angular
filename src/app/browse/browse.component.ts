import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import {Product} from '../product/product';
import { ProductViewComponent } from '../product/product-view/product-view.component';
import { ViewChild } from '@angular/core';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit {

  constructor(private productSvc:ProductService) { }

  products:Product[] = [];
  numStart:number = 0;
  numEnd:number = 3;
  numPerPage:number = 3;
  totalNumberOfPages: number;

  //@ViewChild('ref_product',{static: false}) productViewComponent: ProductViewComponent;
  @ViewChildren('ref_products') productViewComponents: QueryList<ProductViewComponent>;


  ngOnInit() {

    this.products = this.productSvc.getData();
    this.totalNumberOfPages = Math.ceil(this.products.length/this.numPerPage);  //round upward
  }

  updatePage(pageNumber:number){

    this.numStart = (pageNumber-1)*this.numPerPage;
    this.numEnd = pageNumber*this.numPerPage;

    //console.log("updatePage:"+pageNumber);

  }

  expandAll(){
    this.productViewComponents.forEach(e=>e.showDescription());
  }

  favAll(){
    this.productViewComponents.forEach(e=>e.setFavorite());

    // this.productViewComponents =
    //   this.productViewComponents.map(e=>({
    //     name: e.name,
    //     description:
    //   }))

  }
}
