import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { MovieService } from '../shared/movie.service';
import { Movie } from '../shared/movie.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movieList$: Observable<Movie[]>;
  title: string;
  director: string;
  year: number;
  language: string;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.setMovieList();
  }

  setMovieList() {
    this.movieList$ = this.movieService.getMovies();    
  }

  addMovie() {
    let movie = {
      title: this.title,
      director: this.director,
      year: this.year,
      language: this.language
    };

    this.movieService.postMovie(movie)
      .subscribe(() => this.setMovieList());
  }

  resetMovieForm() {
    this.title = '';
    this.director = '';
    this.year = null;
    this.language = '';
  }

}
