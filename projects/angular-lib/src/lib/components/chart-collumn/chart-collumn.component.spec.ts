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

    component.data = [
      {
        name: 'Excelência operacional',
        data: '55',
        color: '#33A49D'
      }
    ]

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
