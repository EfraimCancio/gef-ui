import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourteenthFloorComponent } from './fourteenth-floor.component';

describe('FourteenthFloorComponent', () => {
  let component: FourteenthFloorComponent;
  let fixture: ComponentFixture<FourteenthFloorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FourteenthFloorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FourteenthFloorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
