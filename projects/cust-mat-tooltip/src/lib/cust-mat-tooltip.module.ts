import { NgModule } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CustToolTipComponent } from './cust-mat-tooltip.component';
import { ToolTipDirective } from './cust-mat-tooltip.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CustToolTipComponent
  ],
  imports: [
    MatTooltipModule,
    CommonModule,
    ToolTipDirective
  ],
  exports: [
    ToolTipDirective,
    CustToolTipComponent,
  ]
})
export class CustMatTooltipModule { }
