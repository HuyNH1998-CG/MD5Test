import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

const API_URL = `${environment.apiURL}`

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(API_URL + `/books`)
  }

  getBookById(id: number): Observable<any> {
    return this.http.get(API_URL + `/books/${id}`)
  }

  createBook(title: string, author: string, description: string): Observable<any> {
    return this.http.post(API_URL + `/books`, {
      title: title,
      author: author,
      description: description
    })
  }

  deleteBook(id: number): Observable<any> {
    return this.http.delete(API_URL + `/books/${id}`)
  }

  editBook(id: number, title: string, author: string, description: string): Observable<any> {
    return this.http.put(API_URL + `/books/${id}`, {
      id: id,
      title: title,
      author: author,
      description: description
    })
  }
}
