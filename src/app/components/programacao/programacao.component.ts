import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoverBorderDirective } from '../../directives/hover-border.directive';
import { EventoCardComponent } from '../evento-card/evento-card.component';
import { Evento } from '../../models/evento.model';
@Component({
  selector: 'app-programacao',
  standalone: true,
  imports: [CommonModule, HoverBorderDirective, EventoCardComponent],
  templateUrl: './programacao.component.html',
  styleUrls: ['./programacao.component.css']
})
export class ProgramacaoComponent {
  eventos: Evento[] = [
    {
      id: 1,
      titulo: 'Hackathon de Inovação',
      data: '26 de maio',
      horario: '14H00',
      local: 'ONLINE'
    },
    {
      id: 2,
      titulo: 'Painel de Inteligência Artificial',
      data: '27 de maio',
      horario: '19H00',
      local: 'Presencial'
    }
  ];

  inscricoes: Set<string> = new Set();

  participar(nomeEvento: string) {
    this.inscricoes.add(nomeEvento);
  }

  sairDoEvento(nomeEvento: string) {
    this.inscricoes.delete(nomeEvento);
  }

}
