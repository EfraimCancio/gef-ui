import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EleventhFloorComponent } from './eleventh-floor.component';

describe('EleventhFloorComponent', () => {
  let component: EleventhFloorComponent;
  let fixture: ComponentFixture<EleventhFloorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EleventhFloorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EleventhFloorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
