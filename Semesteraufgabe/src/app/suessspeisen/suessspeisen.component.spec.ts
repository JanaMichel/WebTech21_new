import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuessspeisenComponent } from './suessspeisen.component';

describe('SuessspeisenComponent', () => {
  let component: SuessspeisenComponent;
  let fixture: ComponentFixture<SuessspeisenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuessspeisenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuessspeisenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
