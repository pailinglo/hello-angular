import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

   menu = [
    {displayText:"home",url:"../home"},
    {displayText:"blog",url:"../browse"},
    {displayText:"admin",url:"../admin"},
    {displayText:"sign out",url:"../sign-out"}
  ];
  
  searchText:string="";
  constructor(private router:Router) { }

  ngOnInit() {
  }

  //not used. but if navigate programmatically use this way:
  search(){

    console.log("search:"+this.searchText);
    this.router.navigate(['/search'],{queryParams:{searchText:this.searchText}});
  }


}
