import { Assing1DirectivePage } from './app.po';

describe('assing1-directive App', () => {
  let page: Assing1DirectivePage;

  beforeEach(() => {
    page = new Assing1DirectivePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
