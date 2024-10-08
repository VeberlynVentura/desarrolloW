import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoteMedicamentoComponent } from './lote-medicamento.component';

describe('LoteMedicamentoComponent', () => {
  let component: LoteMedicamentoComponent;
  let fixture: ComponentFixture<LoteMedicamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoteMedicamentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoteMedicamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
