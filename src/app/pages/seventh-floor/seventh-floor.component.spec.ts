import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeventhFloorComponent } from './seventh-floor.component';

describe('SeventhFloorComponent', () => {
  let component: SeventhFloorComponent;
  let fixture: ComponentFixture<SeventhFloorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeventhFloorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeventhFloorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
