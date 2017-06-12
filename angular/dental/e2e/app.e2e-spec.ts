import { DentalPage } from './app.po';

describe('dental App', () => {
  let page: DentalPage;

  beforeEach(() => {
    page = new DentalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
