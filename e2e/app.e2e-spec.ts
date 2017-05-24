import { AppStore2Page } from './app.po';

describe('app-store2 App', () => {
  let page: AppStore2Page;

  beforeEach(() => {
    page = new AppStore2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
