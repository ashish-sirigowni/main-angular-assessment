import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetConferenceByiduserComponent } from './get-conference-byiduser.component';

describe('GetConferenceByiduserComponent', () => {
  let component: GetConferenceByiduserComponent;
  let fixture: ComponentFixture<GetConferenceByiduserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetConferenceByiduserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetConferenceByiduserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
