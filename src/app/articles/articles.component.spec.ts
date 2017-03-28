import { TestBed, inject, getTestBed, async } from '@angular/core/testing';

import { NewsfeedService } from 'app';
import {
  BaseRequestOptions, Http, XHRBackend, HttpModule,
  Response, RequestMethod, ResponseOptions
} from '@angular/http';

import { MockBackend, MockConnection } from '@angular/http/testing';

describe('NewsFeed Service', () => {

  let mockBackend: MockBackend;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        MockBackend,
        BaseRequestOptions,
        NewsfeedService,
        {
          provide: Http,
          deps: [MockBackend, BaseRequestOptions],
          useFactory:
          (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          }
        }
      ],
      imports: [
        HttpModule
      ]
    });
    mockBackend = getTestBed().get(MockBackend);
  }));

  it('should run a test that finishes eventually', done => {
    // kick off an asynchronous call in the background
    setTimeout(() => {
      console.log('now we are done');
      done();
    }, 500);
  });

  it('should get sources', done => {
    let blogService: NewsfeedService;

    getTestBed().compileComponents().then(() => {
      mockBackend.connections.subscribe(
        (connection: MockConnection) => {
          connection.mockRespond(new Response(
            new ResponseOptions({
              body: [
                {
                  'id': 'ars-technica',
                  'name': 'Ars Technica',
                  'description': 'The PC enthusiast\'s resource. Power users and the tools they love, without computing religion.',
                  'url': 'http://arstechnica.com',
                  'category': 'technology',
                  'language': 'en',
                  'country': 'us',
                  'urlsToLogos': {
                    'small': 'http://i.newsapi.org/ars-technica-s.png',
                    'medium': 'http://i.newsapi.org/ars-technica-m.png',
                    'large': 'http://i.newsapi.org/ars-technica-l.png'
                  },
                  'sortBysAvailable': [
                    'top',
                    'latest'
                  ]
                }
              ]
            }
            )));
        });

      blogService = getTestBed().get(NewsfeedService);
      expect(blogService).toBeDefined();

      blogService.getSources().subscribe((blogs: any[]) => {
        expect(blogs.length).toBeDefined();
        expect(blogs.length).toEqual(1);
        expect(blogs[0].id).toEqual('ars-technica');
        done();
      });
    });
  });

  it('should get sources async',
    async(inject([NewsfeedService], (newsFeedService) => {
      mockBackend.connections.subscribe(
        (connection: MockConnection) => {
          connection.mockRespond(new Response(
            new ResponseOptions({
              body: [
                {
                  'id': 'ars-technica',
                  'name': 'Ars Technica',
                  'description': 'The PC enthusiast\'s resource. Power users and the tools they love, without computing religion.',
                  'url': 'http://arstechnica.com',
                  'category': 'technology',
                  'language': 'en',
                  'country': 'us',
                  'urlsToLogos': {
                    'small': 'http://i.newsapi.org/ars-technica-s.png',
                    'medium': 'http://i.newsapi.org/ars-technica-m.png',
                    'large': 'http://i.newsapi.org/ars-technica-l.png'
                  },
                  'sortBysAvailable': [
                    'top',
                    'latest'
                  ]
                }]
            }
            )));
        });

      newsFeedService.getSources().subscribe(
        (data) => {
          expect(data.length).toBe(1);
          expect(data[0].id).toBe('ars-technica');
          expect(data[0].name).toBe('Ars Technica');
        });
    })));

});
