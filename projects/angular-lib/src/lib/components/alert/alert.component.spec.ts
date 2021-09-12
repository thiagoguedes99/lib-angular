import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AlertComponent } from './alert.component';

describe('AlertComponent', () => {
  let component: AlertComponent;
  let fixture: ComponentFixture<AlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should validate if the firt tag is div', () => {
    const contentComponent: HTMLElement = fixture.nativeElement;

    expect(contentComponent.children[0].nodeName).toBe('DIV');
  });

  it('should validate if has only one tag p', () => {
    const div = fixture.debugElement.queryAll(By.css('div'));

    expect(div.length).toBeGreaterThan(0);
    expect(div.length).toBeLessThan(2);
  });

  describe('should validade with props', () => {
    it('should validade if has className props', ()=> {
      component.className = 'teste-of-class';
      fixture.detectChanges();

      const contentComponent: HTMLElement = fixture.nativeElement;

      expect(contentComponent.children[0].className).toContain('teste-of-class');
      expect(contentComponent.children[0].className).toBe('disclaimer__container disclaimer__green teste-of-class');
    })

    it('should validade if has style props', ()=> {
      component.style = { color: 'red' };
      fixture.detectChanges();

      const contentComponent: HTMLElement = fixture.nativeElement;

      expect(contentComponent.children[0].getAttribute('style')).toBe('color: red;');
    })

  });

});
