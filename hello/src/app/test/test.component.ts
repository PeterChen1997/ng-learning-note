import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2> Nice {{name}} </h2>
    <div [id]="myId">123</div>
    <div id="{{myId}}">123</div>
    <input [disabled]="isDisabled"/>
    <div [class.text-danger]="hasError">123</div>
    <button (click)="onClick()">123</button>
    <input [(ngModel)]="name" type="text" />
    {{name}}
  `,
  styles: [`
    .text-danger {
      color: red;
    }
  `]
})
export class TestComponent implements OnInit {

  public name = "Tom"
  public myId = '123'
  public isDisabled = true
  public hasError = true

  constructor() { }

  onClick() {
    console.log("nice")
  }

  ngOnInit() {
  }

}
