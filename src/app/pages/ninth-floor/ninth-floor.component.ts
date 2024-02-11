import { Component } from '@angular/core';
import { DetailFloorComponent } from "../../components/detail-floor/detail-floor.component";
import { FloorScreenComponent } from "../../components/floor-screen/floor-screen.component";

@Component({
  selector: 'app-ninth-floor',
  standalone: true,
  templateUrl: './ninth-floor.component.html',
  styleUrl: './ninth-floor.component.css',
  imports: [FloorScreenComponent, DetailFloorComponent]
})
export class NinthFloorComponent {

}
