import { Component } from '@angular/core';
import { FloorScreenComponent } from "../../components/floor-screen/floor-screen.component";

@Component({
  selector: 'app-ground-floor',
  standalone: true,
  templateUrl: './ground-floor.component.html',
  styleUrl: './ground-floor.component.css',
  imports: [FloorScreenComponent]
})
export class GroundFloorComponent {

}
