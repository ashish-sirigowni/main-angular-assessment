import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllConferencesComponent } from './get-all-conferences.component';

describe('GetAllConferencesComponent', () => {
  let component: GetAllConferencesComponent;
  let fixture: ComponentFixture<GetAllConferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAllConferencesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetAllConferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
