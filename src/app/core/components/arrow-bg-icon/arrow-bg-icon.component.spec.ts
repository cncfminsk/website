import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowBgIconComponent } from './arrow-bg-icon.component';

describe('ArrowBgIconComponent', () => {
  let component: ArrowBgIconComponent;
  let fixture: ComponentFixture<ArrowBgIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrowBgIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrowBgIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
