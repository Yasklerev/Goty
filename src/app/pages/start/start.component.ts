import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Game } from '../../interfaces/interfaces';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent implements OnInit {
  games: any[] = [];

  constructor(private angularFirestore: AngularFirestore) {}

  ngOnInit(): void {
    this.angularFirestore
      .collection('goty')
      .valueChanges()
      .pipe(
        map((data: Game[]) => {
          // return data.map(({ name, votos }) => ({ name, value: votos }));
          return data.map((game) => {
            return {
              name: game.name,
              value: game.votos,
            };
          });
        })
      )
      .subscribe(
        (data) => {
          this.games = data;
        },
        (err) => {
          console.warn('Hubo un error!');
          console.warn(err);
        }
      );
  }
}
