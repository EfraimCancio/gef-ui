import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FifteenthFloorComponent } from './fifteenth-floor.component';

describe('FifteenthFloorComponent', () => {
  let component: FifteenthFloorComponent;
  let fixture: ComponentFixture<FifteenthFloorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FifteenthFloorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FifteenthFloorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
