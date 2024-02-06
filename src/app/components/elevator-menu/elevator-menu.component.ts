import { Component } from '@angular/core';

@Component({
  selector: 'app-elevator-menu',
  standalone: true,
  imports: [],
  templateUrl: './elevator-menu.component.html',
  styleUrl: './elevator-menu.component.css'
})

export class ElevatorMenuComponent {

  elevadorPosition: number = 0;

  onScroll(event: any) {
    const barraRolagem = event.target;
    // Lógica para calcular a posição do elevador com base na rolagem
    this.elevadorPosition = (barraRolagem.scrollTop / (barraRolagem.scrollHeight - barraRolagem.clientHeight)) * 93.3;
  }
  // // Selecione a barra de rolagem e a imagem do elevador
  // const barraRolagem = document.querySelector('.container-botoes');
  // const elevador = document.getElementById('elevador');

  // // Adicione um ouvinte de evento de rolagem à barra de rolagem
  // this.barraRolagem.addEventListener('scroll', function () {
  //   // Atualize a posição vertical da imagem do elevador com base na posição da barra de rolagem
  //   this.elevador.style.top = (this.barraRolagem.scrollTop / (this.barraRolagem.scrollHeight - this.barraRolagem.clientHeight) * 93) + '%';
  // });
}
