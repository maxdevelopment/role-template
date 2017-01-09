/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HrModalComponent } from './hr-modal.component';

describe('HrModalComponent', () => {
  let component: HrModalComponent;
  let fixture: ComponentFixture<HrModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
