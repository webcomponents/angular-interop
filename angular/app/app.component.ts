import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `

<fieldset>
  <legend>Angular</legend>
  <p><span>Angular2 binding is <b>{{ cool }}</b>!</span></p>
  <p><input type="text" [(ngModel)]="cool"></p>
  <b>contenteditable:</b> <div
    contenteditable="true"

    [textContent]="cool"
    (input)="cool=$event.target.textContent"

  >**{{cool}}</div>
</fieldset>

<fieldset>
  <legend>Polymer</legend>
  <my-element

    [message]="cool"
    (message-changed)="cool=$event.detail.value"

    (polymerFireEvent)="onPolymerFireEvent($event)"

  ></my-element>
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
