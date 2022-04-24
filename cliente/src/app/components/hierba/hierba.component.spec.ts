import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HierbaComponent } from './hierba.component';

describe('HierbaComponent', () => {
  let component: HierbaComponent;
  let fixture: ComponentFixture<HierbaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HierbaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HierbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
