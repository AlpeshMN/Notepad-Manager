import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json','Authorization': 'token 88f3af7bb6ebb57c72d104330c75bbcbcf102dc8' })
};

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  //base url for notes.
  private rootUrl = 'https://api.github.com/gists';
  constructor(
    private http: HttpClient
  ) { }

  getNotes(): Observable<any> {
    return this.http.get<any>(this.rootUrl);
  }

  addNote(note): Observable<any> {
    return this.http.post<any>(this.rootUrl, note, httpOptions);
  }
  //
  // deleteNote(note): Observable<any> {
  //   const id = note.id;
  //   const url = `${this.rootUrl}/${id}`;
  //   return this.http.delete<note>(url, httpOptions);
  // }
  //
  // updateNote(note): Observable<any> {
  //   return this.http.put(this.rootUrl, note, httpOptions);
  // }
}
