import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaXlsxReaderComponent } from './prueba-xlsx-reader.component';

describe('PruebaXlsxReaderComponent', () => {
  let component: PruebaXlsxReaderComponent;
  let fixture: ComponentFixture<PruebaXlsxReaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PruebaXlsxReaderComponent]
    });
    fixture = TestBed.createComponent(PruebaXlsxReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
