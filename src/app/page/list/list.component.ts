import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { Cinema } from 'src/app/model/cinema';
import { CinemaService } from 'src/app/service/cinema.service';
import { ConfigService, ITableColumn } from 'src/app/service/config.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  columns: ITableColumn[] = this.config.cinemaTableColumns;

  cinemaList$: Observable<Cinema[]> = this.cinemaService.getAll();

  phrase$: BehaviorSubject<string> = this.config.searchPhrase$;

  p: number = 1;

  constructor(
    private config: ConfigService,
    private cinemaService: CinemaService,
    private router: Router
  ) {}

  ngOnInit(): void {

  }

  onEdit(cinema: Cinema): void {
    this.router.navigate(['/', 'cinema', 'edit', cinema.id])
  }

}

