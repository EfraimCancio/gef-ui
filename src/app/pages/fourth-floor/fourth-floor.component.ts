import { Component } from '@angular/core';
import { DetailFloorComponent } from "../../components/detail-floor/detail-floor.component";
import { FloorScreenComponent } from "../../components/floor-screen/floor-screen.component";

@Component({
  selector: 'app-fourth-floor',
  standalone: true,
  templateUrl: './fourth-floor.component.html',
  styleUrl: './fourth-floor.component.css',
  imports: [FloorScreenComponent, DetailFloorComponent]
})
export class FourthFloorComponent {

}
