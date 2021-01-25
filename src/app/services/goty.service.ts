import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { Game } from '../interfaces/interfaces';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GotyService {
  private games: Game[] = [];

  constructor(private httpClient: HttpClient) {}

  getNominees(): Observable<Game[]> {
    if (this.games.length > 0) {
      return of(this.games);
    } else {
      return this.httpClient
        .get<Game[]>(`${environment.url}/api/goty`)
        .pipe(tap((data) => (this.games = data)));
    }
  }

  voteGame(id: string): Observable<any> {
    return this.httpClient.post(`${environment.url}/api/goty/${id}`, {}).pipe(
      catchError((err) => {
        return of(err.error);
      })
    );
  }
}
