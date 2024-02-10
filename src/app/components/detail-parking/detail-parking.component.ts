import { Component } from '@angular/core';

@Component({
  selector: 'app-detail-parking',
  standalone: true,
  imports: [],
  templateUrl: './detail-parking.component.html',
  styleUrl: './detail-parking.component.css'
})
export class DetailParkingComponent {

  openDetailModal = () => {
    const modalDiv = document.getElementById('detailParkingModal');
    const btnContainer = document.getElementById('btnModalContainer');

    if (modalDiv != null && btnContainer != null) {
      modalDiv.style.display = 'block';
      btnContainer.style.display = 'none';
    }
  }

  closeDetailModal = () => {
    const modalDiv = document.getElementById('detailParkingModal');
    const btnContainer = document.getElementById('btnModalContainer');

    if (modalDiv?.style.display == 'block') {
      modalDiv.style.display = 'none';
      btnContainer!.style.display = 'block';

    }
  }
}
