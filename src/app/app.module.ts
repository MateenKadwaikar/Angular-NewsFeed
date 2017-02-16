
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import * as md from './index';

@NgModule({
  declarations: [
    md.AppComponent,
    md.SourceComponent,
    md.ArticlesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [md.NewsfeedService],
  bootstrap: [md.AppComponent]
})
export class AppModule { }
