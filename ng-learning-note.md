# note

## install

- ng new proj-name
- ng generate component <\component-name>

## modify

- templateUrl => template
- styleUrls => styles
- #thisIsId(bind id)

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

## ref

```html
<input #tag />
<button (click)="logValue(tag.value)">123</button>
```

## structural directives

- ngSwitch
    - [ngSwitch]="type"
    - *ngSwitchCase="type1"
    - *ngSwitchDefault 
- ngIf
    - *ngIf="displayOrNot; then thenBlockRef; else elseBlockRef"
- ngFor
    - colors=[1,2,3]
    - *ngFor="let color of colors; index as i; first as f; last as l; odd as o; even as e"

## component interaction

