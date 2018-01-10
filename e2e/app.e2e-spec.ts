import { AppsPage } from './app.po';

describe('apps App', () => {
  let page: AppsPage;

  beforeEach(() => {
    page = new AppsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
