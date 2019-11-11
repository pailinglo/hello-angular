import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product/product.service';
import { Product } from '../product/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  products: Product[] = [];
  searchText: string;
  constructor(private productServ: ProductService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.products = this.productServ.getData();

    this.route.queryParams
      .subscribe(params => {

        this.searchText = params.searchText;
        //console.log(params); 
        //console.log(this.searchText); 
      });



    //use this way if the parameter is specified in route app-routing.module.ts
    // this.route.paramMap.subscribe(params => {
    //   this.searchText = params.get("searchText");
    // })

    
  }

}
