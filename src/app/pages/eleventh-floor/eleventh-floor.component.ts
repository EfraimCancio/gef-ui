import { Component } from '@angular/core';
import { DetailFloorComponent } from "../../components/detail-floor/detail-floor.component";
import { FloorScreenComponent } from "../../components/floor-screen/floor-screen.component";

@Component({
  selector: 'app-eleventh-floor',
  standalone: true,
  templateUrl: './eleventh-floor.component.html',
  styleUrl: './eleventh-floor.component.css',
  imports: [FloorScreenComponent, DetailFloorComponent]
})
export class EleventhFloorComponent {

}
