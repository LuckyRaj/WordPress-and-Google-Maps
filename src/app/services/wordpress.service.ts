import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class WordpressService {

  private wordPressUrl = 'http://wordpress.org/news/wp-json';
  constructor(private http: HttpClient) { }

  getPosts() {
    const url = `${this.wordPressUrl}/wp/v2/posts?_embed`
    return this.http.get(url).pipe(
      catchError(this.errorHandler)
    )
    
  }

  getSinglePost(id: number){
    const url = `${this.wordPressUrl}/wp/v2/posts/${id}`
    return this.http.get(url).pipe(
      catchError(this.errorHandler)
    );
  }

  errorHandler( error: HttpErrorResponse){
    return new Observable((observer: Observer<any>) => {
      observer.error(error)
    })
  }
}
