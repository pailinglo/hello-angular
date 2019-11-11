import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {

  constructor(private productServ:ProductService, private router:Router) { }

  name:string="";
  product_name:string="";
  product_desc:string="";
  ngOnInit() {
  }

  onEnter(pname:string){
    console.log("value:"+pname);
    this.name = pname;
  }

  add(){
    this.productServ.addData(this.product_name,this.product_desc);
    console.log("add new product 1");
    this.router.navigate(["../browse"]);
  }
}
