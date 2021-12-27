import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EinfachComponent } from './einfach.component';

describe('EinfachComponent', () => {
  let component: EinfachComponent;
  let fixture: ComponentFixture<EinfachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EinfachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EinfachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
