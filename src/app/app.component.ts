import { Component, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('tooltipTemplate', { static: true }) tooltipTemplate!: TemplateRef<any>;
cssContent = `
/* Custom Tooltip Styles.css file */

.cool-tooltip-content {
  background: linear-gradient(135deg, #232526 0%, #414345 100%);
  color: #fff;
  padding: 16px 20px;
  border: 1px solid #ffd700;
  border-radius: 12px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  font-family: 'Segoe UI', Arial, sans-serif;
  min-width: 220px;
  text-align: left;
  animation: tooltip-pop 0.3s cubic-bezier(.68,-0.55,.27,1.55);
}

.cool-tooltip-content h3 {
  margin: 0 0 8px 0;
  font-size: 1.2em;
  color: #ffd700;
  letter-spacing: 1px;
}

.cool-tooltip-content .highlight {
  color: #00e6e6;
  font-weight: bold;
}

.cool-tooltip-btn {
  background: #232526;
  color: #ffd700;
  border: none;
  padding: 10px 22px;
  border-radius: 8px;
  font-size: 1em;
  cursor: pointer;
  transition: background 0.2s;
}

.cool-tooltip-btn:hover {
  background: #414345;
}

@keyframes tooltip-pop {
  0% {
    opacity: 0;
    transform: scale(0.85) translateY(10px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}`
  title = 'cust-mat-tooltip-project';
  tooltipPostContent(position: string): string {
    return `<div class=\'cool-tooltip-content\'>Tooltip is positioned ${position}</div>`;
  }
  get tooltipContent(): string {
    return `<div class=\'cool-tooltip-content\'>
      <h3>✨ Welcome!</h3>
      <p>This is a <b>stylish</b> tooltip with <span class=\'highlight\'>custom CSS</span>.</p>
    </div>`;
  }
}
