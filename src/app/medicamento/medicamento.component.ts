import { Component } from '@angular/core';

@Component({
  selector: 'app-medicamento',
  templateUrl: './medicamento.component.html',
  styleUrls: ['./medicamento.component.scss']
})
export class MedicamentoComponent {

  // Ejemplo de un listado de medicamentos
  medicamentos = [
    {
      id: 1,
      nombre: 'Paracetamol',
      descripcion: 'Analgésico y antipirético utilizado para el alivio del dolor.',
      imagen: 'assets/img/paracetamol.jpg', // Ruta de la imagen
      existencias: 50
    },
    {
      id: 2,
      nombre: 'Ibuprofeno',
      descripcion: 'Antiinflamatorio no esteroideo usado para tratar dolores e inflamaciones.',
      imagen: 'assets/img/ibuprofeno.jpg',
      existencias: 30
    }
    // Agrega más medicamentos aquí...
  ];

  // Métodos para las acciones de los botones
  eliminarMedicamento(id: number) {
    console.log('Eliminar medicamento con ID:', id);
  }

  verExistencias(id: number) {
    console.log('Ver existencias de medicamento con ID:', id);
  }

  actualizarLote(id: number) {
    console.log('Actualizar lote de medicamento con ID:', id);
  }
}
