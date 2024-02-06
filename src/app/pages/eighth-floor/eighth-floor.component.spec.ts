import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EighthFloorComponent } from './eighth-floor.component';

describe('EighthFloorComponent', () => {
  let component: EighthFloorComponent;
  let fixture: ComponentFixture<EighthFloorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EighthFloorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EighthFloorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
