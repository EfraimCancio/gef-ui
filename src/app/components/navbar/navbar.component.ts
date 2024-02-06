import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MainMenuComponent } from "../main-menu/main-menu.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  imports: [
    MainMenuComponent,
  ]
})

export class NavbarComponent {

  constructor(private router: Router) { }

  toggleMenu = () => {
    const containerMenu = document.querySelector('.container-menu') as HTMLElement;
    if (containerMenu) {
      containerMenu.style.display = containerMenu.style.display === 'none' ? 'flex' : 'none';
    }
  }

  goToHome = () => {
    this.router.navigate(['']);
  };
}
