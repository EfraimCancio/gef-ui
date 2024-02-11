import { Component } from '@angular/core';
import { DetailFloorComponent } from "../../components/detail-floor/detail-floor.component";
import { FloorScreenComponent } from "../../components/floor-screen/floor-screen.component";

@Component({
  selector: 'app-first-floor',
  standalone: true,
  templateUrl: './first-floor.component.html',
  styleUrl: './first-floor.component.css',
  imports: [FloorScreenComponent, DetailFloorComponent]
})
export class FirstFloorComponent {

}
