import { MikolioPage } from './app.po';

describe('mikolio App', () => {
  let page: MikolioPage;

  beforeEach(() => {
    page = new MikolioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
