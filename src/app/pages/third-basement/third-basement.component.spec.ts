import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdBasementComponent } from './third-basement.component';

describe('ThirdBasementComponent', () => {
  let component: ThirdBasementComponent;
  let fixture: ComponentFixture<ThirdBasementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThirdBasementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThirdBasementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
