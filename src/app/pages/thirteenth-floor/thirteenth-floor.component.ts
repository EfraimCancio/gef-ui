import { Component } from '@angular/core';
import { DetailFloorComponent } from "../../components/detail-floor/detail-floor.component";
import { FloorScreenComponent } from "../../components/floor-screen/floor-screen.component";

@Component({
  selector: 'app-thirteenth-floor',
  standalone: true,
  templateUrl: './thirteenth-floor.component.html',
  styleUrl: './thirteenth-floor.component.css',
  imports: [FloorScreenComponent, DetailFloorComponent]
})
export class ThirteenthFloorComponent {

}
