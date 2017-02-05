import { IArticleObject, IArticle} from './model/articlemodel';
import { NewsfeedService } from './services/newsfeed-service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  articleArray: IArticleObject[] = [];

  constructor(private _newsFeed: NewsfeedService) { }

  getSourceId(sourceId) {
    this.getArticle(sourceId);
  }

  getArticle(id: string) {
    this._newsFeed.getArticles(id).subscribe(
      (res: IArticle) => {
        this.articleArray =  res.articles;
      });
  }
}
