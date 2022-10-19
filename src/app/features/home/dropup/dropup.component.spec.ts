import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropupComponent } from './dropup.component';

describe('DropupComponent', () => {
  let component: DropupComponent;
  let fixture: ComponentFixture<DropupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
