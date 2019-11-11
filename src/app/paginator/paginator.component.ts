import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  @Input() numberOfPages:number;
  @Output() numberOfPageClick:EventEmitter<number> = new EventEmitter<number>();

  pages:number[]; //create pages to hold the number of page. (somehow Angular doesn't have a easy way to looping through numbers)
  
  constructor() { }

  ngOnInit() {
    
    //console.log("numberofPages:"+this.numberOfPages);
    
    this.pages = new Array(this.numberOfPages);
    for(let i:number=0;i<this.numberOfPages;i++){
      this.pages[i] = i + 1;
    }
    //somehow this line doesn't work. it uses ES6?
    //this.pages = new Array(this.numberOfPages).fill(0).map((x,i)=>i+1);
    
    

  }
  //event raised when page number clicked.
  numberOfPageClicked(pageNumber:number){
      this.numberOfPageClick.emit(pageNumber);
  }

}
