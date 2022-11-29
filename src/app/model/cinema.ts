/*{"id":1,
"title":"Wild Hogs",
"genre":"Adventure|Comedy",
"director":"Gena Kevern",
"releaseYear":1992,
"poster":"https://nettuts.hu/img/cinema-posters/district2.jpg",
"studio":"Warner Brothers",
"active":true}*/

export class Cinema {
  [x: string]: any;
  id: number = 0;
  title: string = '';
  genre: string = '';
  director: string = '';
  releaseYear: number = 0;
  poster: string = '';
  studio: string = '';
  active: boolean = true;
}
