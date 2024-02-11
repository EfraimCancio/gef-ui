import { Component } from '@angular/core';
import { DetailFloorComponent } from "../../components/detail-floor/detail-floor.component";
import { FloorScreenComponent } from "../../components/floor-screen/floor-screen.component";

@Component({
  selector: 'app-twelfth-floor',
  standalone: true,
  templateUrl: './twelfth-floor.component.html',
  styleUrl: './twelfth-floor.component.css',
  imports: [FloorScreenComponent, DetailFloorComponent]
})
export class TwelfthFloorComponent {

}
