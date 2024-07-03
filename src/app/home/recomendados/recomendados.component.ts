import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recomendados',
  standalone: true,
  imports: [],
  templateUrl: './recomendados.component.html',
  styleUrl: './recomendados.component.css'
})
export class RecomendadosComponent {
  constructor(private router: Router) {}

  pelis(url: string): void {
    this.router.navigate(['/watch'], { queryParams: { videoUrl: url } });
  }
}
