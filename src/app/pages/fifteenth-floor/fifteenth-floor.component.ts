import { Component } from '@angular/core';
import { DetailFloorComponent } from "../../components/detail-floor/detail-floor.component";
import { FloorScreenComponent } from "../../components/floor-screen/floor-screen.component";

@Component({
  selector: 'app-fifteenth-floor',
  standalone: true,
  templateUrl: './fifteenth-floor.component.html',
  styleUrl: './fifteenth-floor.component.css',
  imports: [FloorScreenComponent, DetailFloorComponent]
})
export class FifteenthFloorComponent {

}
