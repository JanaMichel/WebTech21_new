import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KrustentiereComponent } from './krustentiere.component';

describe('KrustentiereComponent', () => {
  let component: KrustentiereComponent;
  let fixture: ComponentFixture<KrustentiereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KrustentiereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KrustentiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
