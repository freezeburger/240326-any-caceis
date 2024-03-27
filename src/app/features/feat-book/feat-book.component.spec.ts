import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatBookComponent } from './feat-book.component';

describe('FeatBookComponent', () => {
  let component: FeatBookComponent;
  let fixture: ComponentFixture<FeatBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatBookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeatBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
