import { IArticleObject, IArticle } from '../model/articlemodel';
import { NewsfeedService } from '../services/newsfeed-service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {

  loading: boolean;
  articleArray: IArticleObject[] = [];

  constructor(private _newsFeed: NewsfeedService) { }

  getSourceId(sourceId) {
    this.getArticle(sourceId);
    this.loading = true;
    this.articleArray = [];
  };

  getArticle(id: string) {
    this._newsFeed.getArticles(id).subscribe(
      (res: IArticle) => {
        this.loading = false;
        this.articleArray = res.articles;
      });
  }
}
