// Component displaying a tweet button in the Content Manager
import TweetButton from "./extensions/components/TweetButton"


export default {
  // ...
  bootstrap(app) {
    app.injectContentManagerComponent('editView', 'right-links', {
      name: 'TweetButton',
      Component: TweetButton,
    });
  },
  // ...
};