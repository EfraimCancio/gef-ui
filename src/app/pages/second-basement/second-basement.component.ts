import { Component } from '@angular/core';
import { FloorScreenComponent } from "../../components/floor-screen/floor-screen.component";

@Component({
  selector: 'app-second-basement',
  standalone: true,
  templateUrl: './second-basement.component.html',
  styleUrl: './second-basement.component.css',
  imports: [FloorScreenComponent]
})
export class SecondBasementComponent {

}
