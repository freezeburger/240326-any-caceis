import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CisLibComponent } from './cis-lib.component';

describe('CisLibComponent', () => {
  let component: CisLibComponent;
  let fixture: ComponentFixture<CisLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CisLibComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CisLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
