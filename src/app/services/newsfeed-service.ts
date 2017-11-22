import { Injectable } from '@angular/core';
import { Http, Headers, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class NewsfeedService {

  private url = 'https://newsapi.org/v1/';
  private apiKey = '9fe2f30bf58a4a29966054eb5a58ccc9';

  constructor(private _http: Http) { }

  private headers(): Headers {
    const headers = new Headers();
    headers.append('content-type', 'application/json');
    headers.append('Accept', 'application/json');
    return headers;
  }

  getSources(): Observable<any> {
    return this._http.get(`${this.url}sources`, {
      // headers: this.headers()
    })
      .map(this.extractData)
      .catch(this.handleErrors);
  };

  getArticles(sourceId): Observable<any> {
    const search = new URLSearchParams();
    search.set('source', sourceId);
    search.set('apiKey', this.apiKey);
    return this._http.get(`${this.url}articles?`, {
      search,
      //headers: this.headers()
    })
      .map(this.extractData)
      .catch(this.handleErrors);
  }

  private extractData(res: Response) {
    console.log(res);
    return res.json();
  }

  private handleErrors(error: Response) {
    return Observable.throw(error);
  }

}
