import { ItminutesPage } from './app.po';

describe('itminutes App', function() {
  let page: ItminutesPage;

  beforeEach(() => {
    page = new ItminutesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
