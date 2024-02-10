import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-floor-screen',
  standalone: true,
  templateUrl: './floor-screen.component.html',
  styleUrl: './floor-screen.component.css',
  imports: []
})

export class FloorScreenComponent {

  constructor(private router: Router) { }

  goToHome = () => {
    this.router.navigate(['']);
  };
}
