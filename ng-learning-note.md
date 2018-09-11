# note

## install

- ng new proj-name
- ng generate component <\component-name>

## modify

- templateUrl => template
- styleUrls => styles

## data-binding

- [id]=myId
- id="{{myId}}"
- [disabled]="false"
- bind-disabled="false"
- [class.text-danger]="hasError"
- [ngClass]=classObj
- [style.color]="'red'"
- [ngStyle]=styleObj

## event-binding

- (click)="onClick()"
- (click)="onClick($event)"
- (click)="variable = 'nice man'"