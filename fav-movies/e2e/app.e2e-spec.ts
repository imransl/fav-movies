import { FavMoviesPage } from './app.po';

describe('fav-movies App', function() {
  let page: FavMoviesPage;

  beforeEach(() => {
    page = new FavMoviesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
