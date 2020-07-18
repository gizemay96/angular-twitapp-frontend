import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetinPageComponent } from './greetin-page.component';

describe('GreetinPageComponent', () => {
  let component: GreetinPageComponent;
  let fixture: ComponentFixture<GreetinPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreetinPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreetinPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
