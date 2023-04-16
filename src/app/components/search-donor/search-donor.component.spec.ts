import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDonorComponent } from './search-donor.component';

describe('SearchDonorComponent', () => {
  let component: SearchDonorComponent;
  let fixture: ComponentFixture<SearchDonorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchDonorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchDonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
