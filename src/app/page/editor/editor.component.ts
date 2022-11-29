import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Cinema } from 'src/app/model/cinema';
import { CinemaService } from 'src/app/service/cinema.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit {
  cinema: Cinema = new Cinema();

  cinema$: Observable<Cinema> = this.ar.params.pipe(
    switchMap((params) => this.cinemaService.get(params['id']))
  );

  constructor(
    private ar: ActivatedRoute,
    private cinemaService: CinemaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.ar.params.subscribe((params) => {
      if (Number(params['id']) === 0) {
        this.cinema = new Cinema();
      } else {
        this.cinemaService.get(Number(params['id'])).subscribe((cinema) => {
          this.cinema = cinema;
        });
      }
    });
  }

  onUpdate(cinema: Cinema): void {
    if (!cinema.id) {
      this.cinemaService.create(cinema).subscribe((movie) => {
        this.router.navigate(['/', 'cinema']);
        this.cinemaService.getAll().subscribe((cinema) => {
          console.log('success');
        });
      });
    } else {
      this.cinemaService.update(cinema).subscribe((movie) => {
        this.router.navigate(['/', 'cinema']);
        this.cinemaService.getAll().subscribe((cinema) => {
          console.log('success');
        });
      });
    }
  }
}
