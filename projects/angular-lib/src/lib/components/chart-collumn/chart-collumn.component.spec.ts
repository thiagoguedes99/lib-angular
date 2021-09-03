import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartCollumnComponent } from './chart-collumn.component';

describe('ChartCollumnComponent', () => {
  let component: ChartCollumnComponent;
  let fixture: ComponentFixture<ChartCollumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartCollumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartCollumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
