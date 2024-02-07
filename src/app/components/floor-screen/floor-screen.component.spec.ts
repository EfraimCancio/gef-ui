import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloorScreenComponent } from './floor-screen.component';

describe('FloorScreenComponent', () => {
  let component: FloorScreenComponent;
  let fixture: ComponentFixture<FloorScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FloorScreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FloorScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
