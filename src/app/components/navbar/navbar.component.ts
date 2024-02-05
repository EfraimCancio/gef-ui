import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MainMenuComponent } from "../main-menu/main-menu.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  imports: [
    MainMenuComponent,
    ButtonModule
  ]
})
export class NavbarComponent {

  toggleMenu() {
    const containerMenu = document.querySelector('.container-menu') as HTMLElement;
    if (containerMenu) {
      containerMenu.style.display = containerMenu.style.display === 'none' ? 'flex' : 'none';
    }
  }
}
