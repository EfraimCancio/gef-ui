import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenthFloorComponent } from './tenth-floor.component';

describe('TenthFloorComponent', () => {
  let component: TenthFloorComponent;
  let fixture: ComponentFixture<TenthFloorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TenthFloorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TenthFloorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
