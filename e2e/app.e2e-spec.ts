import { V0.1Page } from './app.po';

describe('v0.1 App', () => {
  let page: V0.1Page;

  beforeEach(() => {
    page = new V0.1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
