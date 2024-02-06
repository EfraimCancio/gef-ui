import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondBasementComponent } from './second-basement.component';

describe('SecondBasementComponent', () => {
  let component: SecondBasementComponent;
  let fixture: ComponentFixture<SecondBasementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondBasementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecondBasementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
