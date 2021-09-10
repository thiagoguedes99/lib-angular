import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TagComponent } from './tag.component';

describe('TagComponent', () => {
  let component: TagComponent;
  let fixture: ComponentFixture<TagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate if the firt tag is span', () => {
    const contentComponent: HTMLElement = fixture.nativeElement;

    console.log(contentComponent.children[0].nodeName)
    expect(contentComponent.children[0].nodeName).toBe('SPAN');
  });

  it('should validate if has only one tag span', () => {
    const span = fixture.debugElement.queryAll(By.css('span'));

    expect(span.length).toBeGreaterThan(0);
    expect(span.length).toBeLessThan(2);
  });

  it('should has the css class of component', () => {
    const contentComponent: HTMLElement = fixture.nativeElement;

    expect(contentComponent.children[0].className).toBe('tag__container');
  });



  describe('should validade with props', () => {

    it('should validade the color prop', ()=> {
      component.color = 'red';

      fixture.detectChanges();

      const contentComponent: HTMLElement = fixture.nativeElement;

      expect(contentComponent.children[0].getAttribute('style')).toBe('background-color: red;');
    })

    it('should validade the text prop', ()=> {
      component.text = 'text test';

      fixture.detectChanges();

      const contentComponent: HTMLElement = fixture.nativeElement;

      console.log(contentComponent.children[0].innerHTML)
      expect(contentComponent.children[0].innerHTML.trim()).toBe('text test');
      // expect(contentComponent.children[0].textContent?.trim()).toBe('text test');
    })

  });


});
