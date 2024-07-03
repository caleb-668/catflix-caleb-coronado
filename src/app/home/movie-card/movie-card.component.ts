import { Component, Input } from '@angular/core';
import { Movie, tmdbConfig } from '../../service/movie.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css'
})
export class MovieCardComponent {
  constructor(private router: Router) {}

  pelis(url: string): void {
    this.router.navigate(['/watch'], { queryParams: { videoUrl: url } });
  }
}
