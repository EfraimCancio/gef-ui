import { Component } from '@angular/core';
import { DetailParkingComponent } from "../../components/detail-parking/detail-parking.component";
import { FloorScreenComponent } from "../../components/floor-screen/floor-screen.component";

@Component({
  selector: 'app-second-basement',
  standalone: true,
  templateUrl: './second-basement.component.html',
  styleUrl: './second-basement.component.css',
  imports: [FloorScreenComponent, DetailParkingComponent]
})
export class SecondBasementComponent {

}
