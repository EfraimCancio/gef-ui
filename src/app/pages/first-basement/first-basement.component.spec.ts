import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstBasementComponent } from './first-basement.component';

describe('FirstBasementComponent', () => {
  let component: FirstBasementComponent;
  let fixture: ComponentFixture<FirstBasementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstBasementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirstBasementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
