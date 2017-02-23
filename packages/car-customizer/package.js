Package.describe({
  name: 'car-customizer',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  const c = 'client',
      s = 'server',
      cs = [c, s];

  api.use([
    'car-customizer-core',
    'underscore'
  ], cs);

  api.use([
    'reactive-var'
  ], c);

  api.use([
    'ui',
    'templating',
    'kadira:flow-router'
  ]);

  api.addFiles([
    'components/carSplash.html',
    'components/carSplash.js',
    'components/carCustomizer.html',
    'components/carCustomizer.js',
    'components/carsList.html',
    'components/carsList.js',
    'components/carOptions.html',
    'components/carOptions.js',
    'components/carOptionBlocks.html',
    'components/carOptionBlocks.js'
  ], c);
});
