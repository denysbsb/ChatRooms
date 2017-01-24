import { ChatFakePage } from './app.po';

describe('chat-fake App', function() {
  let page: ChatFakePage;

  beforeEach(() => {
    page = new ChatFakePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
