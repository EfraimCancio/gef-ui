import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwelfthFloorComponent } from './twelfth-floor.component';

describe('TwelfthFloorComponent', () => {
  let component: TwelfthFloorComponent;
  let fixture: ComponentFixture<TwelfthFloorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwelfthFloorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TwelfthFloorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
