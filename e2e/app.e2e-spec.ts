import { AngularNewsFeedPage } from './app.po';

describe('angular-news-feed App', () => {
  let page: AngularNewsFeedPage;

  beforeEach(() => {
    page = new AngularNewsFeedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
