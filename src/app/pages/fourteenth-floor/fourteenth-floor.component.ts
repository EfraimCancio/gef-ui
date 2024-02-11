import { Component } from '@angular/core';
import { DetailFloorComponent } from "../../components/detail-floor/detail-floor.component";
import { FloorScreenComponent } from "../../components/floor-screen/floor-screen.component";

@Component({
  selector: 'app-fourteenth-floor',
  standalone: true,
  templateUrl: './fourteenth-floor.component.html',
  styleUrl: './fourteenth-floor.component.css',
  imports: [FloorScreenComponent, DetailFloorComponent]
})
export class FourteenthFloorComponent {

}
