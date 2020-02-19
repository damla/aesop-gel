const ghpages = require('gh-pages', {
  branch: 'develop',
});

ghpages.publish('storybook-static');
