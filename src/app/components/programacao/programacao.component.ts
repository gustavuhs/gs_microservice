import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoverBorderDirective } from '../../directives/hover-border.directive';

@Component({
  selector: 'app-programacao',
  standalone: true,
  imports: [CommonModule, HoverBorderDirective],
  templateUrl: './programacao.component.html',
  styleUrls: ['./programacao.component.css']
})
export class ProgramacaoComponent {
  eventos = [
    {
      nome: 'Hackathon de Inovação',
      descricao: 'Desenvolvedores e designers se unem por 24 horas para criar soluções tecnológicas com impacto social.',
      cor: '#FF5100'
    },
    {
      nome: 'Painel: O Futuro da Inteligência Artificial',
      descricao: 'Especialistas discutem tendências, desafios éticos e aplicações práticas da IA no mercado atual.',
      cor: '#007BFF'
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
