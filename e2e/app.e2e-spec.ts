import { WangxindongPage } from './app.po';

describe('wangxindong App', function() {
  let page: WangxindongPage;

  beforeEach(() => {
    page = new WangxindongPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
