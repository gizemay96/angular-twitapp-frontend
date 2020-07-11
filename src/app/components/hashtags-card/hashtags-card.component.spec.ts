import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HashtagsCardComponent } from './hashtags-card.component';

describe('HashtagsCardComponent', () => {
  let component: HashtagsCardComponent;
  let fixture: ComponentFixture<HashtagsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HashtagsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HashtagsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
