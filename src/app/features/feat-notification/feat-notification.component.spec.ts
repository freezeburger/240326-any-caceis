import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatNotificationComponent } from './feat-notification.component';

describe('FeatNotificationComponent', () => {
  let component: FeatNotificationComponent;
  let fixture: ComponentFixture<FeatNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatNotificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeatNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
