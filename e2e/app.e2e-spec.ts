import { PredictivepowerPage } from './app.po';

describe('predictivepower App', function() {
  let page: PredictivepowerPage;

  beforeEach(() => {
    page = new PredictivepowerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
