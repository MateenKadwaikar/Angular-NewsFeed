import { Injectable } from '@angular/core';
import { Http, Headers, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class NewsfeedService {

  private url = 'https://newsapi.org/v1/';
  private apiKey = 'a666cc2dbbc449e986b6f0ae7d7955fe';

  constructor(private _http: Http) { }
  private headers(): Headers {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    return headers;
  }

  getSources() {
    return this._http.get(`${this.url}/sources?language=en`, {
      headers: this.headers()
    })
      .map(this.extractData)
      .catch(this.handleErrors);
  };

  getArticles(sourceId) {
    const search = new URLSearchParams();
    search.set('source', sourceId);
    search.set('apiKey', this.apiKey);
    return this._http.get(`${this.url}articles?`, {
      search,
      headers: this.headers()
    })
      .map(this.extractData)
      .catch(this.handleErrors);
  }

  private extractData(res: Response) {
    return res.json();
  }

  private handleErrors(error: Response) {
    return Observable.throw(error);
  }

}
