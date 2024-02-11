import { Component } from '@angular/core';
import { DetailFloorComponent } from "../../components/detail-floor/detail-floor.component";
import { FloorScreenComponent } from "../../components/floor-screen/floor-screen.component";

@Component({
  selector: 'app-third-floor',
  standalone: true,
  templateUrl: './third-floor.component.html',
  styleUrl: './third-floor.component.css',
  imports: [FloorScreenComponent, DetailFloorComponent]
})
export class ThirdFloorComponent {

}
