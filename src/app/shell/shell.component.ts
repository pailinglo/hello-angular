import { Component, OnInit, ContentChild } from '@angular/core';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  @ContentChild('contentref',{static:true}) contentElem;

  constructor() { }

  ngOnInit() {

    console.log("element child:"+this.contentElem);
  }

}
