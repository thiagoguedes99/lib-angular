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

  it('should validate if the firt tag is div', () => {
    const contentComponent: HTMLElement = fixture.nativeElement;

    expect(contentComponent.children[0].nodeName).toBe('DIV');
  });

  it('should validate the sequence of html div > span ~ span', () => {
    const contentComponent: HTMLElement = fixture.nativeElement;

    expect(contentComponent.children[0].nodeName).toBe('DIV');
    expect(contentComponent.children[0].children[0].nodeName).toBe('SPAN');
    expect(contentComponent.children[0].children[1].nodeName).toBe('SPAN');
  });

  it('should validate the css class default of sequence of html div > span ~ span', () => {
    const contentComponent: HTMLElement = fixture.nativeElement;

    expect(contentComponent.children[0].className).toContain('pointer-info__container');
    expect(contentComponent.children[0].children[0].className).toContain('pointer-info__color');
    expect(contentComponent.children[0].children[1].className).toContain('pointer-info__text');
  });

  describe('should validade with props', () => {

    it('should validade if has style props', ()=> {
      component.style = { color: 'red' };
      fixture.detectChanges();

      const contentComponent: HTMLElement = fixture.nativeElement;

      expect(contentComponent.children[0].getAttribute('style')).toBe('color: red;');
    })

    it('should validade the color prop', ()=> {
      component.color = 'red';

      fixture.detectChanges();

      const contentComponent: HTMLElement = fixture.nativeElement;

      expect(contentComponent.children[0].children[0].getAttribute('style')).toBe('background-color: red;');
    })

    it('should validade the text prop', ()=> {
      component.text = 'text test';

      fixture.detectChanges();

      const contentComponent: HTMLElement = fixture.nativeElement;

      expect(contentComponent.children[0].children[1].innerHTML.trim()).toBe('text test');
    })

    it('should validade the type small prop', ()=> {
      component.type = 'small';

      fixture.detectChanges();

      const contentComponent: HTMLElement = fixture.nativeElement;

      expect(contentComponent.children[0].className).toBe('pointer-info__container');
      expect(contentComponent.children[0].children[0].className).toBe('pointer-info__color pointer-info__color--small');
      expect(contentComponent.children[0].children[1].className).toBe('pointer-info__text pointer-info__text--small');
      })

      it('should validade the type midium prop', ()=> {
      component.type = 'midium';

      fixture.detectChanges();

      const contentComponent: HTMLElement = fixture.nativeElement;

      expect(contentComponent.children[0].className).toBe('pointer-info__container');
      expect(contentComponent.children[0].children[0].className).toBe('pointer-info__color pointer-info__color--midium');
      expect(contentComponent.children[0].children[1].className).toBe('pointer-info__text pointer-info__text--midium');
      })

      it('should validade the type large prop', ()=> {
      component.type = 'large';

      fixture.detectChanges();

      const contentComponent: HTMLElement = fixture.nativeElement;

      expect(contentComponent.children[0].className).toBe('pointer-info__container');
      expect(contentComponent.children[0].children[0].className).toBe('pointer-info__color');
      expect(contentComponent.children[0].children[1].className).toBe('pointer-info__text');
      })

  });

});
