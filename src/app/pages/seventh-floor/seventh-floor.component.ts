import { Component } from '@angular/core';
import { DetailFloorComponent } from "../../components/detail-floor/detail-floor.component";
import { FloorScreenComponent } from "../../components/floor-screen/floor-screen.component";

@Component({
  selector: 'app-seventh-floor',
  standalone: true,
  templateUrl: './seventh-floor.component.html',
  styleUrl: './seventh-floor.component.css',
  imports: [FloorScreenComponent, DetailFloorComponent]
})
export class SeventhFloorComponent {

}
