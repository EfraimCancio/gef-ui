import { Component } from '@angular/core';
import { FloorScreenComponent } from "../../components/floor-screen/floor-screen.component";

@Component({
  selector: 'app-fifth-floor',
  standalone: true,
  templateUrl: './fifth-floor.component.html',
  styleUrl: './fifth-floor.component.css',
  imports: [FloorScreenComponent]
})
export class FifthFloorComponent {

}
