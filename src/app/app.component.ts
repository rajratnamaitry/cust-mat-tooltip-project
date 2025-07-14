import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cust-mat-tooltip-project';
  get tooltipContent(): string {
    return `<div class=\'cool-tooltip-content\'>
      <h3>✨ Welcome!</h3>
      <p>This is a <b>stylish</b> tooltip with <span class=\'highlight\'>custom CSS</span>.</p>
    </div>`;
  }
}
