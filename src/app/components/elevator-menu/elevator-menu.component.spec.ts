import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElevatorMenuComponent } from './elevator-menu.component';

describe('ElevatorMenuComponent', () => {
  let component: ElevatorMenuComponent;
  let fixture: ComponentFixture<ElevatorMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElevatorMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElevatorMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
