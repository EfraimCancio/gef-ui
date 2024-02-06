import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MezzanineComponent } from './mezzanine.component';

describe('MezzanineComponent', () => {
  let component: MezzanineComponent;
  let fixture: ComponentFixture<MezzanineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MezzanineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MezzanineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
