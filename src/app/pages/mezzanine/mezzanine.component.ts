import { Component } from '@angular/core';
import { FloorScreenComponent } from "../../components/floor-screen/floor-screen.component";

@Component({
  selector: 'app-mezzanine',
  standalone: true,
  templateUrl: './mezzanine.component.html',
  styleUrl: './mezzanine.component.css',
  imports: [FloorScreenComponent]
})
export class MezzanineComponent {

}
