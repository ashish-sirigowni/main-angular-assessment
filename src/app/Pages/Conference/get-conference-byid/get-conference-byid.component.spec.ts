import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetConferenceByidComponent } from './get-conference-byid.component';

describe('GetConferenceByidComponent', () => {
  let component: GetConferenceByidComponent;
  let fixture: ComponentFixture<GetConferenceByidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetConferenceByidComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetConferenceByidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
