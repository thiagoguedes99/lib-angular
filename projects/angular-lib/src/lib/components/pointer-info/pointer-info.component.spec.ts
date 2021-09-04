import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointerInfoComponent } from './pointer-info.component';

describe('PointerInfoComponent', () => {
  let component: PointerInfoComponent;
  let fixture: ComponentFixture<PointerInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointerInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PointerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
