import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quantity-selector2',
  templateUrl: './quantity-selector2.component.html',
  styleUrls: ['./quantity-selector2.component.css']
})
export class QuantitySelector2Component implements OnInit {

  counter: number=0;
  constructor() { }

  ngOnInit(): void {
  }
  clickAdd(){
    this.counter++;
    return this.counter;
  }
  clickSub(){
    this.counter--;
    return this.counter;
  }

}
