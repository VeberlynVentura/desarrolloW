import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DespachoMedicamentoComponent } from './despacho-medicamento.component';

describe('DespachoMedicamentoComponent', () => {
  let component: DespachoMedicamentoComponent;
  let fixture: ComponentFixture<DespachoMedicamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DespachoMedicamentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DespachoMedicamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
