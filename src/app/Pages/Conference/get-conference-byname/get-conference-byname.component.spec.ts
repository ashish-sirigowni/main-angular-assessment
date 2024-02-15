import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetConferenceBynameComponent } from './get-conference-byname.component';

describe('GetConferenceBynameComponent', () => {
  let component: GetConferenceBynameComponent;
  let fixture: ComponentFixture<GetConferenceBynameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetConferenceBynameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetConferenceBynameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
