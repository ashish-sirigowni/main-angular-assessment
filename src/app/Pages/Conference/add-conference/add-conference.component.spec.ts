import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConferenceComponent } from './add-conference.component';

describe('AddConferenceComponent', () => {
  let component: AddConferenceComponent;
  let fixture: ComponentFixture<AddConferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddConferenceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddConferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
