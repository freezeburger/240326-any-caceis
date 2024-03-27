import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatMessageSenderComponent } from './feat-message-sender.component';

describe('FeatMessageSenderComponent', () => {
  let component: FeatMessageSenderComponent;
  let fixture: ComponentFixture<FeatMessageSenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatMessageSenderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeatMessageSenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
