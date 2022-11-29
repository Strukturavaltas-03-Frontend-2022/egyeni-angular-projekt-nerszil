import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './common/nav/nav.component';
import { HomeComponent } from './page/home/home.component';
import { ListComponent } from './page/list/list.component';
import { EditorComponent } from './page/editor/editor.component';
import { FilterPipe } from './pipe/filter.pipe';
import { CardComponent } from './common/card/card.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ListComponent,
    EditorComponent,
    FilterPipe,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
