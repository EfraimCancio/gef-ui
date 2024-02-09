import { Component } from '@angular/core';
import { FloorScreenComponent } from "../../components/floor-screen/floor-screen.component";

@Component({
  selector: 'app-fourth-floor',
  standalone: true,
  templateUrl: './fourth-floor.component.html',
  styleUrl: './fourth-floor.component.css',
  imports: [FloorScreenComponent]
})
export class FourthFloorComponent {

}
