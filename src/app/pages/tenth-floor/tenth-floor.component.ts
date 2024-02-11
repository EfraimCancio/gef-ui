import { Component } from '@angular/core';
import { DetailFloorComponent } from "../../components/detail-floor/detail-floor.component";
import { FloorScreenComponent } from "../../components/floor-screen/floor-screen.component";

@Component({
  selector: 'app-tenth-floor',
  standalone: true,
  templateUrl: './tenth-floor.component.html',
  styleUrl: './tenth-floor.component.css',
  imports: [FloorScreenComponent, DetailFloorComponent]
})
export class TenthFloorComponent {

}
