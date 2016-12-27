import { PlaystorePage } from './app.po';

describe('playstore App', function() {
  let page: PlaystorePage;

  beforeEach(() => {
    page = new PlaystorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
