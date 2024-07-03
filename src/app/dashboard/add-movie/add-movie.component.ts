import { Component, EventEmitter, Output } from '@angular/core';
import { Movie, MovieService } from '../../service/movie.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-movie',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-movie.component.html',
  styleUrl: './add-movie.component.css'
})
export class AddMovieComponent {
  @Output() close = new EventEmitter<void>();
  movie: Movie = {
    category: '',
    banner: '',
    title: '',
    description: '',
    duration: '',
  };

  constructor(private movieService: MovieService) {}

  addMovie() {
    this.movieService.addMovie(this.movie);
    this.closeModal();
  }

  closeModal() {
    this.close.emit();
  }
}
