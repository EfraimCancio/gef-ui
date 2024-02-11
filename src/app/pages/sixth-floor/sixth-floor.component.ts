import { Component } from '@angular/core';
import { DetailFloorComponent } from "../../components/detail-floor/detail-floor.component";
import { FloorScreenComponent } from "../../components/floor-screen/floor-screen.component";

@Component({
  selector: 'app-sixth-floor',
  standalone: true,
  templateUrl: './sixth-floor.component.html',
  styleUrl: './sixth-floor.component.css',
  imports: [FloorScreenComponent, DetailFloorComponent]
})
export class SixthFloorComponent {

}
