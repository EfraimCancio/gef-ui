import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FifthFloorComponent } from './fifth-floor.component';

describe('FifthFloorComponent', () => {
  let component: FifthFloorComponent;
  let fixture: ComponentFixture<FifthFloorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FifthFloorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FifthFloorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
