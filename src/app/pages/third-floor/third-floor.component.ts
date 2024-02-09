import { Component } from '@angular/core';
import { FloorScreenComponent } from "../../components/floor-screen/floor-screen.component";

@Component({
  selector: 'app-third-floor',
  standalone: true,
  templateUrl: './third-floor.component.html',
  styleUrl: './third-floor.component.css',
  imports: [FloorScreenComponent]
})
export class ThirdFloorComponent {

}
