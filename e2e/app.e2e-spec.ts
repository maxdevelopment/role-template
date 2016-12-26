import { RolePage } from './app.po';

describe('role App', function() {
  let page: RolePage;

  beforeEach(() => {
    page = new RolePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
