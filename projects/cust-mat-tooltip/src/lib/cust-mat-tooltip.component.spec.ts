import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChangeDetectorRef, ElementRef } from '@angular/core';
import { CustToolTipComponent } from './cust-mat-tooltip.component';
import { TooltipComponent } from '@angular/material/tooltip';

describe('CustToolTipComponent', () => {
  let component: CustToolTipComponent;
  let fixture: ComponentFixture<CustToolTipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustToolTipComponent],
      providers: [
        { provide: ElementRef, useValue: new ElementRef(document.createElement('div')) },
        { provide: ChangeDetectorRef, useValue: { markForCheck: () => {} } }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustToolTipComponent);
    component = fixture.componentInstance;
    component['message'] = 'Test Tooltip';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render tooltip message', () => {
    const tooltipSurface = fixture.nativeElement.querySelector('.mdc-tooltip__surface');
    expect(tooltipSurface.innerHTML).toContain('Test Tooltip');
  });
});
