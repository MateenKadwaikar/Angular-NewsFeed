import { ISource, ISourceObject } from './../model/sourcemodel';
import { NewsfeedService } from './../services/newsfeed-service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-source',
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.css']
})
export class SourceComponent implements OnInit {
  @Output() sourceId = new EventEmitter<string>();

  sourceArray: Array<ISourceObject> = [];
  sourceObject: ISourceObject;
  sourceItem = '';

  constructor(private _newsFeed: NewsfeedService) { }

  ngOnInit() {
    this.getSource();
    this.source();
  };

  getSource() {
    this._newsFeed.getSources().subscribe((res: ISource) =>
      this.sourceArray = res.sources
    );
  };

  source() {
    return this.sourceObject = {
      description: '',
      category: '',
      name: '',
      urlsToLogos: {}
    };
  };

  getSoucreDetail(item: any) {
    this.sourceObject.description = item.description;
    this.sourceObject.urlsToLogos.small = item.urlsToLogos.small;
    this.sourceObject.name = item.name;
    this.sourceObject.url = item.url;
    this.sourceId.emit(item.id);
  };

}
