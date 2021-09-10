import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate if has the tags of table', () => {
    const table: HTMLElement = fixture.nativeElement.querySelector('table');
    const thead: HTMLElement = fixture.nativeElement.querySelector('thead');
    const tbody: HTMLElement = fixture.nativeElement.querySelector('tbody');

    expect(table).toBeTruthy();
    expect(thead).toBeTruthy();
    expect(tbody).toBeTruthy();
  });

  it('should has the css class of component', () => {
    const contentComponent: HTMLElement = fixture.nativeElement;

    expect(contentComponent.children[0].className).toBe('table table-responsive');
  });

  describe('should validade with props', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(TableComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should validade if has className props', ()=> {
      component.className = 'teste-of-class';
      fixture.detectChanges();

      const contentComponent: HTMLElement = fixture.nativeElement;

      expect(contentComponent.children[0].className).toContain('teste-of-class');
    })

    it('should validade if has style props', ()=> {
      component.style = { color: 'red' };
      fixture.detectChanges();

      const contentComponent: HTMLElement = fixture.nativeElement;

      expect(contentComponent.children[0].getAttribute('style')).toBe('color: red;');
    })

  });


});
