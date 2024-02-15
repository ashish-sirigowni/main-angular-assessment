import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllConferencesadminComponent } from './get-all-conferencesadmin.component';

describe('GetAllConferencesadminComponent', () => {
  let component: GetAllConferencesadminComponent;
  let fixture: ComponentFixture<GetAllConferencesadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAllConferencesadminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetAllConferencesadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
