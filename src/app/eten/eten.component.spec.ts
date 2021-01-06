import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtenComponent } from './eten.component';

describe('EtenComponent', () => {
  let component: EtenComponent;
  let fixture: ComponentFixture<EtenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
