import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parceiros',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './parceiros.component.html',
  styleUrls: ['./parceiros.component.css']
})
export class ParceirosComponent {
  logoIBM = 'assets/images/logo-ibm.png';
}
