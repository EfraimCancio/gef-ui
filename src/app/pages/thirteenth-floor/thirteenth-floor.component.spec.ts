import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirteenthFloorComponent } from './thirteenth-floor.component';

describe('ThirteenthFloorComponent', () => {
  let component: ThirteenthFloorComponent;
  let fixture: ComponentFixture<ThirteenthFloorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThirteenthFloorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThirteenthFloorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
