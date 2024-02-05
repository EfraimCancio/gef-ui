import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PanelMenuModule } from 'primeng/panelmenu';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [PanelMenuModule],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css'
})
export class MainMenuComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit() {


  }
}
