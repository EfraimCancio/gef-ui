import { Component } from '@angular/core';
import { ElevatorMenuComponent } from "../../components/elevator-menu/elevator-menu.component";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [ElevatorMenuComponent]
})
export class HomeComponent {

}
