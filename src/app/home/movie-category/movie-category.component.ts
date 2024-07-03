import { Component, Input } from '@angular/core';
import { Movie } from '../../service/movie.service';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { CommonModule } from '@angular/common';
import { EstrenosComponent } from '../estrenos/estrenos.component';
import { TerrorComponent } from '../terror/terror.component';
import { RecomendadosComponent } from '../recomendados/recomendados.component';

@Component({
  selector: 'app-movie-category',
  standalone: true,
  imports: [CommonModule, MovieCardComponent, EstrenosComponent, TerrorComponent, RecomendadosComponent],
  templateUrl: './movie-category.component.html',
  styleUrl: './movie-category.component.css',
})
export class MovieCategoryComponent {
  
}
