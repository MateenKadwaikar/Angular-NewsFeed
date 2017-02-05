import { NewsfeedService } from './services/newsfeed-service';
import { SourceComponent } from './source/source.component';
import { ArticlesComponent } from './articles/articles.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    SourceComponent,
    ArticlesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [NewsfeedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
