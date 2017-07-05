import { MyrouterTestPage } from './app.po';

describe('myrouter-test App', () => {
  let page: MyrouterTestPage;

  beforeEach(() => {
    page = new MyrouterTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
