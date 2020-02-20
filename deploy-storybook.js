const ghpages = require('gh-pages');

ghpages.publish('storybook-static', {
  branch: 'develop',
  message: 'Auto-generated commit: Update Storybook',
});
