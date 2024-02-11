import { Component } from '@angular/core';
import { DetailFloorComponent } from "../../components/detail-floor/detail-floor.component";
import { FloorScreenComponent } from "../../components/floor-screen/floor-screen.component";

@Component({
  selector: 'app-mezzanine',
  standalone: true,
  templateUrl: './mezzanine.component.html',
  styleUrl: './mezzanine.component.css',
  imports: [FloorScreenComponent, DetailFloorComponent]
})
export class MezzanineComponent {

}
