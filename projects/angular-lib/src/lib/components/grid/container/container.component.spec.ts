import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerComponent } from './container.component';

describe('ContainerComponent', () => {
  let component: ContainerComponent;
  let fixture: ComponentFixture<ContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validade if has style props', ()=> {
    component.style = { color: 'red' };

    fixture.detectChanges();

    const contentComponent: HTMLElement = fixture.nativeElement;

    expect(contentComponent.children[0].getAttribute('style')).toBe('color: red;');
  })

  it('should has the css class default of component', () => {
    const contentComponent: HTMLElement = fixture.nativeElement;

    expect(contentComponent.children[0].className).toBe('container');
  });

  describe('should validade with props', () => {
    it('should validade if has className props', ()=> {
      component.className = 'teste-of-class';

      fixture.detectChanges();

      const contentComponent: HTMLElement = fixture.nativeElement;

      expect(contentComponent.children[0].className).toBe('container teste-of-class');
    })

    it('should validade if has className props', ()=> {
      component.full = true;

      fixture.detectChanges();

      const contentComponent: HTMLElement = fixture.nativeElement;

      expect(contentComponent.children[0].className).toBe('container container__full');
    })

  });

});
