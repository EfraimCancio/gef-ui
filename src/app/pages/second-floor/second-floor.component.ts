import { Component } from '@angular/core';
import { FloorScreenComponent } from "../../components/floor-screen/floor-screen.component";

@Component({
  selector: 'app-second-floor',
  standalone: true,
  templateUrl: './second-floor.component.html',
  styleUrl: './second-floor.component.css',
  imports: [FloorScreenComponent]
})
export class SecondFloorComponent {

}
