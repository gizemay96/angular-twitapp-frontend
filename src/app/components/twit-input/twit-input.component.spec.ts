import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitInputComponent } from './twit-input.component';

describe('TwitInputComponent', () => {
  let component: TwitInputComponent;
  let fixture: ComponentFixture<TwitInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
