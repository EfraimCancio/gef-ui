import { Component } from '@angular/core';
import { DetailFloorComponent } from "../../components/detail-floor/detail-floor.component";
import { FloorScreenComponent } from "../../components/floor-screen/floor-screen.component";

@Component({
  selector: 'app-eighth-floor',
  standalone: true,
  templateUrl: './eighth-floor.component.html',
  styleUrl: './eighth-floor.component.css',
  imports: [FloorScreenComponent, DetailFloorComponent]
})
export class EighthFloorComponent {

}
