import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NinthFloorComponent } from './ninth-floor.component';

describe('NinthFloorComponent', () => {
  let component: NinthFloorComponent;
  let fixture: ComponentFixture<NinthFloorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NinthFloorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NinthFloorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
