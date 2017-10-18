import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
  <fieldset>
  <legend>Angular</legend>
  <p><span>Angular binding is <b>{{ cool }}</b>!</span></p>
  <p><input type="text" [(ngModel)]="cool"></p>
  <b>contenteditable:</b> <div
    contenteditable="true"

    [textContent]="cool"
    (input)="cool=$event.target.textContent"

  >**{{cool}}</div>
</fieldset>

<fieldset>
  <legend>Polymer</legend>
  <polymer-element

    [message]="cool"
    (message-changed)="cool=$event.detail.value"

    (polymerFireEvent)="onPolymerFireEvent($event)"

  ></polymer-element>
</fieldset>`
})
export class AppComponent {
  cool: string;

  constructor() {
    this.cool = "so much love";
  }

  onPolymerFireEvent(event: any) {
    alert(`Angular says: ${event.detail.message}`);
  }
}
