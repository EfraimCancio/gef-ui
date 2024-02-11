import { Component } from '@angular/core';
import { DetailFloorComponent } from "../../components/detail-floor/detail-floor.component";
import { FloorScreenComponent } from "../../components/floor-screen/floor-screen.component";

@Component({
  selector: 'app-fifth-floor',
  standalone: true,
  templateUrl: './fifth-floor.component.html',
  styleUrl: './fifth-floor.component.css',
  imports: [FloorScreenComponent, DetailFloorComponent]
})
export class FifthFloorComponent {

}
