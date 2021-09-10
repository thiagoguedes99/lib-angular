import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should has the css class of component', () => {
    // const article: HTMLElement = fixture.nativeElement.querySelector('article');
    const contentComponent: HTMLElement = fixture.nativeElement;

    // const listNames = fixture.debugElement.queryAll(By.css('#people-list li'));
    // const listNames = fixture.debugElement.queryAll();
    // expect(listNames[0].nativeElement.textContent.trim()).toEqual('Luke Skywalker');
    
    // listNames[0].nativeElement
    
    // console.log('listNames')
    // console.log(contentComponent)
    // console.log(contentComponent.children[0].className)
    // console.log(listNames)
    // console.log(listNames[0].nativeElement)
    expect(contentComponent.children[0].className).toBe('card__container');
  });

  it('should validate if has article tag html', () => {
    const article: HTMLElement = fixture.nativeElement.querySelector('article');

    expect(article).toBeTruthy();
  });

  describe('should validade with props', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(CardComponent);
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

      // console.log(contentComponent.children[0].getAttribute('style'))

      expect(contentComponent.children[0].getAttribute('style')).toBe('color: red;');
    })

  });

});
