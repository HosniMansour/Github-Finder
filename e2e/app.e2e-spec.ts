import { GitFinderPage } from './app.po';

describe('git-finder App', function() {
  let page: GitFinderPage;

  beforeEach(() => {
    page = new GitFinderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
