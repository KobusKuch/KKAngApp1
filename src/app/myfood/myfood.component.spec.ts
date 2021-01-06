import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyfoodComponent } from './myfood.component';

describe('MyfoodComponent', () => {
  let component: MyfoodComponent;
  let fixture: ComponentFixture<MyfoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyfoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyfoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
