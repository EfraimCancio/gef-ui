import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DetailParkingComponent } from "../detail-parking/detail-parking.component";

@Component({
  selector: 'app-floor-screen',
  standalone: true,
  templateUrl: './floor-screen.component.html',
  styleUrl: './floor-screen.component.css',
  imports: [DetailParkingComponent]
})

export class FloorScreenComponent {

  constructor(private router: Router) { }

  goToHome = () => {
    this.router.navigate(['']);
  };
}
