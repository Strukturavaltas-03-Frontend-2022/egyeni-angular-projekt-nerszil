import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cinema } from 'src/app/model/cinema';
import { CinemaService } from 'src/app/service/cinema.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

@Input()  row: Cinema = new Cinema();

@Output() onSelect = new EventEmitter<Cinema>();




  constructor(
    private cinemaService: CinemaService,
  ) {}

  ngOnInit(): void {

  }

  raiseEdit(): void {
    this.onSelect.emit(this.row);
  }


  onDelete(row: Cinema): void {
      this.cinemaService
        .delete(row)
        .subscribe(() => this.cinemaService.getAll().subscribe(() => location.reload())
        );
  }

}
