import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XlsxReaderComponent } from './xlsx-reader.component';

describe('XlsxReaderComponent', () => {
  let component: XlsxReaderComponent;
  let fixture: ComponentFixture<XlsxReaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [XlsxReaderComponent]
    });
    fixture = TestBed.createComponent(XlsxReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
