import { Directive, Input, TemplateRef } from '@angular/core';
import { MatTooltip, TooltipComponent } from '@angular/material/tooltip';
import { CustToolTipComponent } from './cust-mat-tooltip.component';


@Directive({
  selector: '[custToolTip]',
  exportAs: 'custToolTip',
  standalone: true,
})
export class ToolTipDirective extends MatTooltip {
  private _toolTipMessage: string = 'No message provided';
  @Input()
  get toolTipMessage(): string {
    return this._toolTipMessage;
  }
  set toolTipMessage(value: string) {
    this._toolTipMessage = value;
    this.message = value;
  }

  // Override the protected _tooltipComponent property to use the custom component
  protected override _tooltipComponent = CustToolTipComponent as any;
}
