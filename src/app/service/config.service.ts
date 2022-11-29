import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ITableColumn {
  title: string;
  key: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  searchPhrase$: BehaviorSubject<string> = new BehaviorSubject("");

  cinemaTableColumns: ITableColumn[] = [
    {title: 'Id', key: 'id'},
    {title: 'Title', key: 'title'},
    {title: 'Genre', key: 'genre'},
    {title: 'Director', key: 'director'},
    {title: 'ReleaseYear', key: 'releaseYear'},
    {title: 'Poster', key: 'poster'},
    {title: 'Studio', key: 'studio'},
    {title: 'Active', key: 'active'},
  ];

  constructor() { }
}
