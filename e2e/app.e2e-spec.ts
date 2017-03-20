import { MikolioPage } from './app.po';

describe('mikolio App', function() {
  let page: MikolioPage;

  beforeEach(() => {
    page = new MikolioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
