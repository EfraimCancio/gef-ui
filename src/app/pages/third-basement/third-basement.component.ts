import { Component } from '@angular/core';
import { FloorScreenComponent } from "../../components/floor-screen/floor-screen.component";

@Component({
  selector: 'app-third-basement',
  standalone: true,
  templateUrl: './third-basement.component.html',
  styleUrl: './third-basement.component.css',
  imports: [FloorScreenComponent]
})
export class ThirdBasementComponent {

}
