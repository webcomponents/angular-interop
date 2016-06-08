import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `

<fieldset>
  <legend>Angular 2</legend>
  <p><input type="text" [(ngModel)]="cool"></p>
  <p><span>Angular2 binding is <b>{{ cool }}</b>!</span></p>
</fieldset>
<fieldset>
  <legend>Polymer</legend>
  <my-element [message]="cool" (polymerFireEvent)="onPolymerFireEvent($event)"></my-element>
</fieldset>
  `
})
export class AppComponent {

  cool: string;

  constructor() {
    this.cool = "so much love";
  }

  onPolymerFireEvent(event: any) {
    alert(event.detail.message)
  }
}
