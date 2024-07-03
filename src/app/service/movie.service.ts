import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface Movie {
  category: string;
  banner: string;
  title: string;
  description: string;
  duration: string;
}
export const tmdbConfig = {
  imagePath: 'https://image.tmdb.org/t/p/w500/',
  apikey:"ce6c6eca048773cc1ff195955c0c3183",
  accessToken: "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZTZjNmVjYTA0ODc3M2NjMWZmMTk1OTU1YzBjMzE4MyIsIm5iZiI6MTcxOTE3NTkxNy4zNzEyMDcsInN1YiI6IjY0YWI4OTFkZDFhODkzMDBlMmY5Y2RjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3BEjiU4-999gbYzez7TxPCdhl7l2U3IeHic3j_rT3QI"
}
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movies: Movie[] = [
    {
      category: 'Terror',
      banner: 'https://drive.google.com/thumbnail?id=1qw3KUJnYgvnJHQP-yY13u_rXrJO8ZbL_',
      title: 'Rakhi Gupta',
      description: 'en el corazón y le dicen que le queda un año de vida. Akito no expresa sus emociones ante el diagnóstico. Un día, en la azotea del hospital, se encuentra con Haruna Sakurai, que está pintando. Haruna le dice que sólo le queda medio año de vida. Akito se siente cada vez más atraído por ella, pero no le cuenta nada de su enfermedad.',
      duration: '1hr 5min',
    },
  ];

  getMovies() {
    return this.movies;
  }

  addMovie(movie: Movie) {
    this.movies.push(movie);
  }

  deleteMovie(index: number) {
    this.movies.splice(index, 1);
  }
  /* 
  httpService = inject(HttpClient);

  getPopularMovies() {
    const headers = this.getHeaders();
    return this.httpService.get('https://api.themoviedb.org/3/movie/popular', {
      headers: headers,
    });
  }

  getNowPlayingMovies() {
    const headers = this.getHeaders();
    return this.httpService.get(
      'https://api.themoviedb.org/3/movie/now_playing',
      {
        headers: headers,
      }
    );
  }
  getTopRatedMovies() {
    const headers = this.getHeaders();
    return this.httpService.get(
      'https://api.themoviedb.org/3/movie/top_rated',
      {
        headers: headers,
      }
    );
  }
  getUpcomingMovies() {
    const headers = this.getHeaders();
    return this.httpService.get('https://api.themoviedb.org/3/movie/upcoming', {
      headers: headers,
    });
  }

  getHeaders() {
    let headers = new HttpHeaders();
    headers = headers.append('accept', 'application/json');
    headers = headers.append(
      'Authorization',
      'Bearer ' + tmdbConfig.accessToken
    );
    return headers;
  }

  getMovieVideos(movieId: number) {
    const headers = this.getHeaders();
    return this.httpService.get(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      {
        headers: headers,
      }
    );
  } */
}
