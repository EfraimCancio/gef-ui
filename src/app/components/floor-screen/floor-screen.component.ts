import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-floor-screen',
  standalone: true,
  imports: [],
  templateUrl: './floor-screen.component.html',
  styleUrl: './floor-screen.component.css'
})

export class FloorScreenComponent {

  constructor(private router: Router) { }

  goToHome = () => {
    this.router.navigate(['']);
  };
}
