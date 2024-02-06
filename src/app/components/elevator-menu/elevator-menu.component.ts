import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-elevator-menu',
  standalone: true,
  imports: [],
  templateUrl: './elevator-menu.component.html',
  styleUrl: './elevator-menu.component.css'
})

export class ElevatorMenuComponent {

  constructor(private router: Router) { }


  elevadorPosition: number = 0;

  onScroll(event: any) {
    const barraRolagem = event.target;
    this.elevadorPosition = (barraRolagem.scrollTop / (barraRolagem.scrollHeight - barraRolagem.clientHeight)) * 93.3;
  }

  goToThirdBasement = () => { this.router.navigate(['third-basement']) };
  goToSecondBasement = () => { this.router.navigate(['second-basement']) };
  goToFirstBasement = () => { this.router.navigate(['first-basement']) };
  goToGroundFloor = () => { this.router.navigate(['ground-floor']) };
  goToMezzanine = () => { this.router.navigate(['mezzanine']) };
  goToFirstFloor = () => { { this.router.navigate(['first-floor']) } };
  goToSecondFloor = () => { { this.router.navigate(['second-floor']) } };
  goToThirdFloor = () => { { this.router.navigate(['third-floor']) } };
  goToFourthFloor = () => { { this.router.navigate(['fourth-floor']) } };
  goToFifthFloor = () => { { this.router.navigate(['fifth-floor']) } };
  goToSixthFloor = () => { { this.router.navigate(['sixth-floor']) } };
  goToSeventhFloor = () => { { this.router.navigate(['seventh-floor']) } };
  goToEighthFloor = () => { { this.router.navigate(['eighth-floor']) } };
  goToNinthFloor = () => { { this.router.navigate(['ninth-floor']) } };
  goToTenthFloor = () => { { this.router.navigate(['tenth-floor']) } };
  goToEleventhFloor = () => { { this.router.navigate(['eleventh-floor']) } };
  goToTwelfthFloor = () => { { this.router.navigate(['twelfth-floor']) } };
  goToThirteenthFloor = () => { { this.router.navigate(['thirteenth-floor']) } };
  goToFourteenthFloor = () => { { this.router.navigate(['fourteenth-floor']) } };
  goToFifteenthFloor = () => { { this.router.navigate(['fifteenth-floor']) } };


}
