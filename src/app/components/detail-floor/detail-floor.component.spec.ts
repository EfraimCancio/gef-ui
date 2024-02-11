import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFloorComponent } from './detail-floor.component';

describe('DetailFloorComponent', () => {
  let component: DetailFloorComponent;
  let fixture: ComponentFixture<DetailFloorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailFloorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailFloorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
