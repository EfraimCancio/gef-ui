import { Component } from '@angular/core';
import { DetailFloorComponent } from "../../components/detail-floor/detail-floor.component";
import { FloorScreenComponent } from "../../components/floor-screen/floor-screen.component";

@Component({
  selector: 'app-ground-floor',
  standalone: true,
  templateUrl: './ground-floor.component.html',
  styleUrl: './ground-floor.component.css',
  imports: [FloorScreenComponent, DetailFloorComponent]
})
export class GroundFloorComponent {

}
