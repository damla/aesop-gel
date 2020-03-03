const ghpages = require('gh-pages');

ghpages.publish('storybook-static', {
  dest: '.',
  branch: 'gh-pages',
  src: '**/*',
  remote: 'origin',
  message: 'Auto-generated commit: Update Storybook',
});
