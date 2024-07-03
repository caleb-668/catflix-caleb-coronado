import { Component } from '@angular/core';
import { HeaderComponent } from "../home/header/header.component";
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Movie, MovieService } from '../service/movie.service';
import { AddMovieComponent } from "./add-movie/add-movie.component";

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
    imports: [HeaderComponent, RouterOutlet, RouterLink, CommonModule, AddMovieComponent]
})
export class DashboardComponent {
    movies: Movie[];

    showModal: boolean = false;
  
    constructor(private movieService: MovieService) {
      this.movies = this.movieService.getMovies();
    }
  
    deleteMovie(index: number) {
      this.movieService.deleteMovie(index);
    }
  
    openModal() {
      this.showModal = true;
    }
  
    closeModal() {
      this.showModal = false;
    }
}
