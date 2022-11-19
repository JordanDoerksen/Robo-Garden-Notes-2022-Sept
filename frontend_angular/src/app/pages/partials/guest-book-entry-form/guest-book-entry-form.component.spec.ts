import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestBookEntryFormComponent } from './guest-book-entry-form.component';

describe('GuestBookEntryFormComponent', () => {
  let component: GuestBookEntryFormComponent;
  let fixture: ComponentFixture<GuestBookEntryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestBookEntryFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuestBookEntryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
