import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/interfaces/interfaces';
import { GotyService } from 'src/app/services/goty.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.scss'],
})
export class GotyComponent implements OnInit {
  games: Game[] = [];

  constructor(private gotyService: GotyService) {}

  ngOnInit(): void {
    this.gotyService.getNominees().subscribe((data) => {
      this.games = data;
    });
  }

  voteGame(id: string): void {
    this.gotyService
      .voteGame(id)
      .subscribe((data: { ok: boolean; message: string }) => {
        if (data.ok === true) {
          Swal.fire('Gracias', data.message, 'success');
        } else {
          Swal.fire('Oops', data.message, 'error');
        }
      });
  }
}
