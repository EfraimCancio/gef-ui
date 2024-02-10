import { Component } from '@angular/core';
import { DetailParkingComponent } from "../../components/detail-parking/detail-parking.component";
import { FloorScreenComponent } from "../../components/floor-screen/floor-screen.component";

@Component({
  selector: 'app-first-basement',
  standalone: true,
  templateUrl: './first-basement.component.html',
  styleUrl: './first-basement.component.css',
  imports: [FloorScreenComponent, DetailParkingComponent]
})
export class FirstBasementComponent {

}
