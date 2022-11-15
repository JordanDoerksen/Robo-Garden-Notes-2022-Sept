import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestBookPageComponent } from './guest-book-page.component';

describe('GuestBookPageComponent', () => {
  let component: GuestBookPageComponent;
  let fixture: ComponentFixture<GuestBookPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestBookPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuestBookPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
