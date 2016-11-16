import { TalespaceFrontendPage } from './app.po';

describe('talespace-frontend App', function() {
  let page: TalespaceFrontendPage;

  beforeEach(() => {
    page = new TalespaceFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
