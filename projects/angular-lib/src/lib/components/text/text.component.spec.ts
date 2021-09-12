import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TextComponent } from './text.component';

describe('TextComponent', () => {
  let component: TextComponent;
  let fixture: ComponentFixture<TextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate if the firt tag is p', () => {
    const contentComponent: HTMLElement = fixture.nativeElement;

    expect(contentComponent.children[0].nodeName).toBe('P');
  });

  it('should validate if has only one tag p', () => {
    const p = fixture.debugElement.queryAll(By.css('p'));

    expect(p.length).toBeGreaterThan(0);
    expect(p.length).toBeLessThan(2);
  });

  it('should has the css class of component', () => {
    const contentComponent: HTMLElement = fixture.nativeElement;

    expect(contentComponent.children[0].className).toBe('text__container text__type--midium text__state--normal');
  });

  describe('should validade with props', () => {
    it('should validade if has className props', ()=> {
      component.className = 'teste-of-class';
      fixture.detectChanges();

      const contentComponent: HTMLElement = fixture.nativeElement;

      expect(contentComponent.children[0].className).toContain('teste-of-class');
      expect(contentComponent.children[0].className).toBe('text__container text__type--midium text__state--normal teste-of-class');
    })

    it('should validade if has style props', ()=> {
      component.style = { color: 'red' };
      fixture.detectChanges();

      const contentComponent: HTMLElement = fixture.nativeElement;

      expect(contentComponent.children[0].getAttribute('style')).toBe('color: red;');
    })

  });


  describe('should validade props type', () => {

    it('should validade prop type small', ()=> {
      component.type = 'small';
      fixture.detectChanges();
  
      const contentComponent: HTMLElement = fixture.nativeElement;
  
      expect(contentComponent.children[0].className).toBe('text__container text__type--small text__state--normal');
    })

    it('should validade prop type midium', ()=> {
      component.type = 'midium';

      fixture.detectChanges();
  
      const contentComponent: HTMLElement = fixture.nativeElement;
  
      expect(contentComponent.children[0].className).toBe('text__container text__type--midium text__state--normal');
    })

    it('should validade prop type large', ()=> {
      component.type = 'large';

      fixture.detectChanges();
  
      const contentComponent: HTMLElement = fixture.nativeElement;
  
      expect(contentComponent.children[0].className).toBe('text__container text__type--large text__state--normal');
    })

  });

  describe('should validade props state', () => {

    it('should validade prop state normal', ()=> {
      component.state = 'normal';

      fixture.detectChanges();
  
      const contentComponent: HTMLElement = fixture.nativeElement;
  
      expect(contentComponent.children[0].className).toBe('text__container text__type--midium text__state--normal');
    })

    it('should validade prop state bold', ()=> {
      component.state = 'bold';

      fixture.detectChanges();
  
      const contentComponent: HTMLElement = fixture.nativeElement;
  
      expect(contentComponent.children[0].className).toBe('text__container text__type--midium text__state--bold');
    })

  });


});
