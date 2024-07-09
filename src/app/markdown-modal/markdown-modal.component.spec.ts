import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkdownModalComponent } from './markdown-modal.component';

describe('MarkdownModalComponent', () => {
  let component: MarkdownModalComponent;
  let fixture: ComponentFixture<MarkdownModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarkdownModalComponent]
    });
    fixture = TestBed.createComponent(MarkdownModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
