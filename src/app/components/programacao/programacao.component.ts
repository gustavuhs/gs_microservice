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
export class ProgramacaoComponent {}
