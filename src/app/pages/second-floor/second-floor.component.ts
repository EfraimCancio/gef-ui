import { Component } from '@angular/core';
import { DetailFloorComponent } from "../../components/detail-floor/detail-floor.component";
import { FloorScreenComponent } from "../../components/floor-screen/floor-screen.component";

@Component({
  selector: 'app-second-floor',
  standalone: true,
  templateUrl: './second-floor.component.html',
  styleUrl: './second-floor.component.css',
  imports: [FloorScreenComponent, DetailFloorComponent]
})
export class SecondFloorComponent {

}
