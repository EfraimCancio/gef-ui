import { Component } from '@angular/core';

@Component({
  selector: 'app-detail-floor',
  standalone: true,
  imports: [],
  templateUrl: './detail-floor.component.html',
  styleUrl: './detail-floor.component.css'
})

export class DetailFloorComponent {


  openDetaiFloorlModal = () => {
    const modalDiv = document.getElementById('detailFloorModal');
    const btnContainer = document.getElementById('btnModalContainer');

    if (modalDiv != null && btnContainer != null) {
      modalDiv.style.display = 'block';
      btnContainer.style.display = 'none';
    }
  }

  closeDetaiFloorlModal = () => {
    const modalDiv = document.getElementById('detailFloorModal');
    const btnContainer = document.getElementById('btnModalContainer');

    if (modalDiv?.style.display == 'block') {
      modalDiv.style.display = 'none';
      btnContainer!.style.display = 'block';

    }
  }
}
