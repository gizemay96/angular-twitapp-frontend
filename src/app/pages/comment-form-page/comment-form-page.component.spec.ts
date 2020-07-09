import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentFormPageComponent } from './comment-form-page.component';

describe('CommentFormPageComponent', () => {
  let component: CommentFormPageComponent;
  let fixture: ComponentFixture<CommentFormPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentFormPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
