import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'Global Solution';
  description = 'Uma jornada tecnológica rumo ao futuro.';
  eventDate = '26 de maio';

  showDescription = true;

  highlights = ['Inovação', 'Tecnologia', 'Impacto Social'];
}
