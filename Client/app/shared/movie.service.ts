import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Movie } from '../shared/movie.model';

@Injectable()
export class MovieService {
  url: string = 'http://localhost:5000/api/movies';

  constructor(private http: Http) { }

  getMovies() {
    return this.http
      .get(this.url)
      .map((res: Response) => res.json());
  }

  postMovie(movie: Movie) {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http
      .post(this.url, movie, headers)
      .catch((error: any) => console.log(error));
  }

}
